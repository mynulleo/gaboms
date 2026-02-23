<template>
    <view-page></view-page>
</template>

<script>
const model = "mediaValidator";

export default {
    data() {
        return {
            page_title: "",
            model: model,
            data: {},
            fileColumns: [],
        };
    },
    created() {
        this.$root.spinner = true;

        this.page_title = `${this.headline(this.model)} View`;

        axios
            .get(`${this.model}/${this.$route.params.id}`)
            .then((response) => {
                const resData = response.data;
                let excludeKeys = [
                    "field_type_html",
                    "resize_value_html",
                    "sorting",
                ];

                if (resData.field_type !== "image") {
                    excludeKeys = [
                        ...excludeKeys,
                        "min_width",
                        "min_height",
                        "resize_value",
                    ];
                }

                this.data = Object.fromEntries(
                    Object.entries(resData).filter(
                        ([key]) => !excludeKeys.includes(key)
                    )
                );

                this.data.field_type = resData.field_type_html;
                this.data.resize_value = resData.resize_value_html;
            })
            .catch((error) => {})
            .finally(() => {
                this.$root.spinner = false;
            });
    },
};
</script>
