<template>
    <index-page>
        <template v-slot:search-field>
            <v-select-container title="Select Type" field="search_data.type">
                <v-select v-model="search_data.type" label="name" :reduce="(obj) => obj.value" :options="modules"
                    placeholder="--Select Type--" :closeOnSelect="true"></v-select>
            </v-select-container>
        </template>
    </index-page>
</template>

<script>
const model = "frontMenu";

// Define table columns...
const tableColumns = [
    { field: "position", title: "Position", align: "center" },
    { field: "parent", title: "Parent", subfield: "parent.title", enable_data_sorting: false },
    { field: "title", title: "Title" },
    { field: "type", title: "Menu Type", align: "center" },
    { field: "content", title: "Content", subfield: "content.title", enable_data_sorting: false },
    {
        field: "sorting",
        title: "Sorting",
        sorting: true,
        namespace: "Website-FrontMenu",
        auto: "",
        align: "center",
    },
    { field: "status", title: "Status", align: "center" },
    { field: "created_at", title: "Created at", date: true },
];

// Define excel column...
const json_fields = {
    Title: "title",
    "Created at": "created_at",
};

export default {
    data() {
        return {
            page_title: "Front Menu List",
            model: model,
            json_fields: json_fields,
            fields_name: {
                default: "Select One",
                title: "Title",
                content: "Content",
                parent: "Parent",
            },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "",
            },
            table: {
                columns: tableColumns,
                routes: {},
                datas: [],
                meta: [],
                links: [],
            },
            modules: [
                { name: "content", value: "content" },
                { name: "internal_link", value: "internal_link" },
                { name: "outside_website", value: "outside_website" },
            ],
        };
    },

    provide() {
        return {
            model: this.model,
            fields_name: this.fields_name,
            search_data: this.search_data,
            table: this.table,
            json_fields: this.json_fields,
            search: this.search,
            validate: this.validation,
            resetSearchData: this.resetSearchData,
        };
    },

    methods: {
        search() {
            // this.$toast.success(, "Searching...");
            // this.$toast("Advanced search started.", "success");
            this.$router.push({ name: this.model + '.index', query: { ...this.search_data } });
            this.get_paginate(this.model, this.search_data);
        },
        resetSearchData() {
            this.search_data.pagination = 10;
            this.search_data.type = '';
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
            // this.$toast("Search filters have been reset.", "info");
        },
    },

    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index", "Frontend Menu");
        this.search();
    },

    validators: {
        "search_data.status": function (value = null) {
            return Validator.value(value);
        },
    },
};
</script>
