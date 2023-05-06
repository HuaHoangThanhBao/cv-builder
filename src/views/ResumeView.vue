<template>
  <component :is="component" />
</template>

<script lang="ts">
import { defineComponent, shallowRef } from "vue";
import PageBuilder from "../patterns/Page/PageBuilder";
import PageDirector from "../patterns/Page/PageDirector";

const pageShallow = shallowRef(
  new PageDirector(new PageBuilder()).createBlocks()
);

export default defineComponent({
  name: "ResumeView",
  data() {
    return {
      component: pageShallow,
    };
  },
  created() {
    const director = new PageDirector(new PageBuilder());
    this.component = director.createBlocks();
  },
});
</script>
