<template>
  <view-page> </view-page>
</template>

<script>

const model = "item";

export default {
  data() {
    return {
        page_title: "",
        model: model,
        data: {

        },
        fileColumns :[{ field: "image", title: "Image" },],
    };
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>