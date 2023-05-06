<template>
  <input class="field" placeholder="Enter text here..." />
  <br />
</template>

<script lang="ts">
export default {
  name: "v-field",
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
    text: {
      type: [String],
      default: "",
    },
  },
};
</script>
