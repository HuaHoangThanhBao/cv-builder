import VBlock from "@/components/Block/VBlock.vue";
import VField from "@/components/Field/VField.vue";
import type PageBuilder from "./PageBuilder";

export default class PageDirector {
  builder: PageBuilder;

  constructor(builder: PageBuilder) {
    this.builder = builder;
  }

  moveBind(moving: (page: number, block: number) => void) {
    return (page: number, block: number) => {
      return moving.bind(this.builder, page, block);
    };
  }

  createBlocks() {
    const _builder = this.builder;
    //pages
    for (let page = 0; page < 3; page++) {
      _builder.addPage(page);
      //blocks
      for (let block = 0; block < 5; block++) {
        //fields
        for (let input = 0; input < 4; input++) {
          _builder.addFields({
            component: VField,
            page,
            block,
            text: "",
            props: {
              id: input,
              text: "",
              page,
              block,
              update: _builder.updateField.bind(this.builder),
            },
          });
        }

        _builder.addBlock({
          component: VBlock,
          page,
          block,
          props: {
            fields: _builder.getFields(),
            page,
            block,
            moveUp: this.moveBind(_builder.moveBlockUp)(page, block),
            moveDown: this.moveBind(_builder.moveBlockDown)(page, block),
          },
        });
      }
    }
    console.log("_builder init:", this.builder);
    return _builder.build();
  }

  reRender() {
    const _builder = this.builder;
    _builder.blocks.forEach((block, blockIdx) => {
      if (block.props) {
        block.props.moveDown = this.moveBind(_builder.moveBlockDown)(
          block.page,
          blockIdx
        );
        block.props.moveUp = this.moveBind(_builder.moveBlockUp)(
          block.page,
          blockIdx
        );
      }
    });
    return _builder.build();
  }
}
