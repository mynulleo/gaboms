<template>
  <view-page> </view-page>
</template>

<script>

const model = "profile";

export default {
  data() {
    return {
      model: model,
      data: {

      },
      fileColumns :[{ field: "image", title: "Image" },{ field: "file", title: "File" },],
    };
  },
  created() {
    this.setBreadcrumbs(this.model, "view");
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>
