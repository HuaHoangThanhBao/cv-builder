<template>
  page: {{ page }} value: {{ content }}
  <input class="field" :placeholder="id" v-model="content" @change="onUpdate" />
  block: {{ block }}
  <br />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "v-field",
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
    text: {
      type: String,
      default: "",
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
  data() {
    return {
      content: this.text,
    };
  },
  methods: {
    onUpdate() {
      this.update
        ? this.update(this.page, this.block, this.id, this.content)
        : null;
    },
  },
});
</script>
