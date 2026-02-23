<template>
    <index-page>
        <template v-slot:extraRoute>
            <button>+</button>
        </template>
    </index-page>
</template>

<script>
const model = "slider";

// Define table columns...
const tableColumns = [
    { field: "title", title: "Title" },
    { field: "position", title: "Position" },
    { field: "image_width", title: " Image Width " },
    { field: "image_height", title: " Image Height " },
    { field: "status", title: " Status  " },
];
// Define excel column...
const json_fields = {
    Title: "title",
    "Created at": "created_at",
};

export default {
    data() {
        return {
            page_title: "Slider Details List",
            model: model,
            json_fields: json_fields,
            fields_name: {
                default: "Select One",
                title: "Title",
                position: "Position",
                image_height: "Image height",
                image_width: "Image width",
                status: "status",
            },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
            },
            table: {
                columns: tableColumns,
                routes: {},
                datas: [],
                meta: [],
                links: [],
            },
        };
    },

    provide() {
        return {
            model: this.model,
            fields_name: this.fields_name,
            search_data: this.search_data,
            table: this.table,
        };
    },

    methods: {
        search() {
            this.$router.push({ name: this.model + '.index', query: { ...this.search_data } });
            this.get_paginate(this.model, this.search_data);
        },
    },

    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index");
        this.search();
        this.table.routes.array = [
            {
                route: "slider-details.create",
                icon: "tasks",
                btnColor: "text-danger",
            },
        ];
    },
};
</script>
