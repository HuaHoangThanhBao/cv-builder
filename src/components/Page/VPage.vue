<template>
  <div class="page" v-for="page in pages" :key="page">
    <component
      :id="index"
      :is="block.component"
      v-bind="{ ...block.props, ...block.attrs }"
      v-for="(block, index) in blocks"
      :key="index"
    />
    <hr />
  </div>
</template>

<script lang="ts">
import { type PropType } from "vue";
import { Block } from "@/patterns/Block/Block";
import { Input } from "@/patterns/Field/Field";

export default {
  name: "v-page",
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
    pages: {
      type: Array,
      default: () => [],
    },
    blocks: {
      type: Array as PropType<Block[]>,
      default: () => [],
    },
    fields: {
      type: Array as PropType<Input[]>,
      default: () => [],
    },
  },
};
</script>
