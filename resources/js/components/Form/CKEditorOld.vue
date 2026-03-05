<template>
  <div class="pb-3">
    <textarea
      @change="update"
      field="data.description"
      :name="name"
      ref="editor"
      v-model="data.editor"
    ></textarea>
  </div>
</template>

  <script>
var editor1 = {};
export default {
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
    name: {
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
  methods: {
    getHTML() {
      console.log(editor1.getData());
    },
    handle(e) {
      console.log(e.target.value);
    },
    update() {
      this.$emit("update:modelValue", editor1.getData());
    },
    handleTextareaChange() {
      const newValue = this.data.editor;
      this.update(newValue);
    },
  },
  mounted() {
    // This component works under the ckeditor own isolated environment,
    // @change "update" doesn't have any effect. [ 31 October 2023 ]

    if (typeof CKEDITOR !== "undefined") {
      const that = this;
      let editor = CKEDITOR.replace(this.$refs.editor);

      const config = `${this.$root.baseurl}/ckeditor/config.js`;

      console.log(config);
      CKEDITOR.config.customConfig = config;
      editor.setData(this.modelValue);

      editor.on("change", function () {
        // that.getHTML();
        that.$emit("update:modelValue", editor.getData());
      });
    } else {
      console.error("CKEditor script not loaded.");
    }
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
