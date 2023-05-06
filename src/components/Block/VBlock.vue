<template>
  <component
    :id="index"
    :is="field.component"
    v-bind="{ ...field.props, ...field.attrs }"
    v-for="(field, index) in fields"
    :key="index"
  />
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
    fields: {
      type: Array as PropType<Input[]>,
      default: () => [],
    },
  },
};
</script>
