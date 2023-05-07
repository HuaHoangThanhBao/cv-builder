<template>
  <div @click="moveDown">&darr;</div>
  <component
    :id="fieldIdx"
    :is="field.component"
    v-bind="{ ...field.props, ...field.attrs }"
    v-for="(field, fieldIdx) in fields.filter(
      (f) => f.block === block && f.page === page
    )"
    :key="fieldIdx"
  />
  <div @click="moveUp">&uarr;</div>
  <br />
  <br />
</template>

<script lang="ts">
import { PropType } from "vue";
import { Input } from "@/patterns/Field/Field";

export default {
  name: "v-block",
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
    page: {
      type: Number,
      default: -1,
    },
    block: {
      type: Number,
      default: -1,
    },
    fields: {
      type: Array as PropType<Input[]>,
      default: () => [],
    },
    update: {
      type: Function,
    },
    moveUp: {
      type: Function,
    },
    moveDown: {
      type: Function,
    },
  },
  methods: {},
};
</script>
