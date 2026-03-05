<template>
  <ckeditor v-model="data.editor"></ckeditor>
</template>

<script>
import { component as ckeditor } from "@mayasabha/ckeditor4-vue3";

export default {
  components: { ckeditor },
  name: "CKEditor",
  props: {
    editorConfig: {
      type: Object,
      default: {},
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      data: {
        editor: "",
      },
    };
  },
  watch: {
    "data.editor"(current, old) {
      if (current !== old) {
        this.update(current);
      }
    },
  },
  inject: ["validate"],
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    },
  },
  created() {
    this.data.editor = this.modelValue;
  },
};
</script>

<style lang="scss">
.ck-editor__editable {
  min-height: 300px;
}
</style>
