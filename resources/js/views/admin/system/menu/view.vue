<template>
    <view-page></view-page>
</template>

<script>
const model = "menu";

export default {
    data() {
        return {
            page_title: "Backend Menu View",
            model: model,
            data: {},
        };
    },
    created() {
        this.setBreadcrumbs(this.model, "view", "Backend Menu");
        this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>
