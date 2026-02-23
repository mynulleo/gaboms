<template>
    <index-page>
        <template v-slot:search-field>
        </template>
    </index-page>
</template>

<script>
const model = "content";

const tableColumns = [
    { field: "title", title: "Title" },
    {
        field: "image_three",
        zoom_field: "image_one",
        title: "Image",
        image: true,
        imgWidth: "30px",
        align: "center",
        enable_data_sorting: false,
    },
    { field: "status", title: "Status", align: "center" },
    {
        field: "sorting",
        title: "Sorting",
        sorting: true,
        namespace: "Website-Content-Content",
        auto: "",
        align: "center",
    },
    { field: "created_at", title: "Created at", date: true },
];

const json_fields = {
    title: "title",
    "created at": "created_at",
};

const routes = {
    destroy: "content.destroy",
};

export default {
    data() {
        return {
            page_title: "Content List",
            model: model,
            json_fields: json_fields,
            fields_name: { default: "Select One", title: "Title" },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "",
            },
            table: {
                columns: tableColumns,
                routes: routes,
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
            customDataUrl: this.model,
            customRouteName: "content.index",
            json_fields: this.json_fields,
            search: this.search,
            validate: this.validation,
        };
    },
    methods: {
        search() {
            this.$router.push({ name: this.model + '.index', query: { ...this.search_data } });
            this.get_paginate(this.model, this.search_data);
        },
    },
    created() {
        this.scrollTop();
        this.setBreadcrumbs(this.model, "index", "Content");
        this.search();

        this.table.routes.array = [
            {
                title: "View",
                route: "content.show",
                content: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path
                                d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                        </svg>`,
                class: "text-primary",
                isQuery: true,
                slug: true,
            },
            {
                title: "Edit",
                route: "content.edit",
                content: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                            <path d="M13.5 6.5l4 4" />
                        </svg>`,
                class: "text-info",
                isQuery: true,
                slug: true,
            },
        ];
    },
    validators: {
        "search_data.status": function (value = null) {
            return Validator.value(value);
        },
    },
};
</script>
