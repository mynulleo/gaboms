<template>
  <view-page> </view-page>
</template>

<script>

const model = "theme";

export default {
  data() {
    return {
      page_title: "",
      model: model,
      data: {

      },
      fileColumns: [],
    };
  },

  methods: {
    getData() {
      this.$root.spinner = true;
      axios.get(`${this.model}/${this.$route.params.id}`)
        .then((res) => {
          let themeData = res.data;
          delete themeData.slug;
          this.data = themeData;
          setTimeout(() => (this.$root.spinner = false), 200);
        })
        .catch((error) => (this.$root.spinner = false));
    },
  },

  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.getData();
  },
};
</script>