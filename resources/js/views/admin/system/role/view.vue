<template>
    <view-page></view-page>
</template>

<script>

const model = "role";

export default {
    data() {
        return {
            page_title: "Role View",
            model: model,
            data: {},
        };
    },
    async created() {
        this.setBreadcrumbs(this.model, "view");
        await this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>
