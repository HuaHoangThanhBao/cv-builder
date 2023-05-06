import { defineComponent, h, type VNode } from "vue";
import VPage from "@/components/Page/VPage.vue";
import { Block } from "@/patterns/Block/Block";

export default class PageBuilder {
  blocks: Block[];
  pages: number[];

  constructor() {
    this.blocks = [];
    this.pages = [];
  }

  addPage(page: number) {
    this.pages.push(page);
    return this;
  }

  addBlock(block: Block) {
    this.blocks.push(block);
    return this;
  }

  build() {
    const Blocks = this.blocks;
    const Pages = this.pages;

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
        });
      },
    });
  }
}
