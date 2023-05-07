<template>
  <component :is="component" />
</template>

<script lang="ts">
import { defineComponent, shallowRef, inject } from "vue";
import PageBuilder from "../patterns/Page/PageBuilder";
import PageDirector from "../patterns/Page/PageDirector";

const pageShallow = shallowRef(
  new PageDirector(new PageBuilder(null)).createBlocks()
);

export default defineComponent({
  name: "ResumeView",
  data() {
    return {
      component: pageShallow,
    };
  },
  created() {
    const emitter: any = inject("emitter");

    const director = new PageDirector(new PageBuilder(emitter));
    this.component = director.createBlocks();

    emitter.on("changes", () => {
      this.component = director.reRender();
    });
  },
});
</script>
