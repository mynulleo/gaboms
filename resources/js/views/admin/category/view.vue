<template>
    <view-page></view-page>
  </template>

  <script>
  const model = "category";

  export default {
    data() {
      return {
        page_title: "Categroy View",
        model: model,
        data: {},
      };
    },
    created() {
      this.setBreadcrumbs(this.model, "view");
      this.get_data(`${this.model}/${this.$route.params.id}`);
    },
  };
  </script>
