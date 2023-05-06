import VBlock from "@/components/Block/VBlock.vue";
import VField from "@/components/Field/VField.vue";
import type PageBuilder from "./PageBuilder";

export default class PageDirector {
  builder: PageBuilder;

  constructor(builder: PageBuilder) {
    this.builder = builder;
  }

  createBlocks() {
    const _builder = this.builder;
    const fields = [];
    //fields
    for (let i = 0; i < 5; i++) {
      const field = {
        component: VField,
        props: { id: i, text: "hello" },
      };
      fields.push(field);
    }
    //blocks
    for (let i = 0; i < 10; i++) {
      _builder.addBlock({
        component: VBlock,
        props: {
          fields,
        },
      });
    }
    //pages
    for (let i = 0; i < 3; i++) {
      _builder.addPage(i);
    }
    return _builder.build();
  }
}
