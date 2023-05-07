import { defineComponent, h, type VNode } from "vue";
import VPage from "@/components/Page/VPage.vue";
import { Block } from "@/patterns/Block/Block";
import { Input } from "../Field/Field";

export default class PageBuilder {
  fields: Input[];
  blocks: Block[];
  pages: number[];
  emit: any;

  constructor(eventManager: any) {
    this.blocks = [];
    this.pages = [];
    this.fields = [];
    this.emit = eventManager;
  }

  addPage(page: number) {
    this.pages.push(page);
    return this;
  }

  addBlock(block: Block) {
    this.blocks.push(block);
    return this;
  }

  addFields(field: Input) {
    this.fields.push(field);
    return this;
  }

  getField(page: number, block: number, fieldId: number) {
    const field = this.fields.find(
      (f, index) => f.page === page && f.block === block && index === fieldId
    );
    if (field) {
      return field;
    }
  }

  getBlock(page: number, block: number) {
    return this.blocks.find(
      (f, blockIdx) => f.page === page && blockIdx === block
    );
  }

  getNextBlock(block: number) {
    if (block + 1 <= this.blocks.length)
      return this.blocks.find((f, blockIdx) => blockIdx === block + 1);
    else return null;
  }

  getPrevBlock(block: number) {
    if (block - 1 >= 0)
      return this.blocks.find((f, blockIdx) => blockIdx === block - 1);
    else return null;
  }

  getFields() {
    return this.fields;
  }

  updateField(page: number, block: number, fieldId: number, data: string) {
    const field = this.getField(page, block, fieldId);
    if (field) {
      field.text = data;
      if (field.props) {
        field.props.text = data;
      }
    }
  }

  moveBlockUp(page: number, block: number) {
    if (block - 1 < 0) return;

    const found = this.getBlock(page, block);
    const prev = this.getPrevBlock(block);

    if (found) {
      if (prev && prev.page !== found.page) {
        const tmp = found.page;
        found.page = prev.page;
        prev.page = tmp;
      }
      const tmp = found;
      this.blocks[block] = this.blocks[block - 1];
      this.blocks[block - 1] = tmp;
      this.emit.emit("changes");
    }
  }

  moveBlockDown(page: number, block: number) {
    if (block + 1 >= this.blocks.length) return;

    const found = this.getBlock(page, block);
    const next = this.getNextBlock(block);

    if (found) {
      if (next && next.page !== found.page) {
        const tmp = found.page;
        found.page = next.page;
        next.page = tmp;
      }
      const tmp = found;
      this.blocks[block] = this.blocks[block + 1];
      this.blocks[block + 1] = tmp;
      this.emit.emit("changes");
    }
  }

  build() {
    const Blocks = this.blocks;
    const Pages = this.pages;
    const Fields = this.fields;

    return defineComponent({
      props: {
        id: {
          default: null,
          type: String || Number,
        },
      },
      render(): VNode {
        return h(VPage, {
          id: this.id,
          pages: Pages,
          blocks: Blocks,
          fields: Fields,
        });
      },
    });
  }
}
