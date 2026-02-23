<template>
    <index-page>
        <template #search-field>
            <Select
                field="search_data.field_type"
                title="Field Type"
                col="4"
                v-model="search_data.field_type"
                label="name"
                :reduce="(obj) => obj.value"
                :options="field_types"
                placeholder="--Select One--"
                :closeOnSelect="true"
            />
        </template>
    </index-page>
</template>

<script>
const model = "mediaValidator";

const tableColumns = [
    { field: "model_name", title: "Model Name" },
    { field: "field_name", title: "Field Name" },
    { field: "field_type_html", title: "Field Type" },
    { field: "max_size", title: "Max Size (KB)" },
    { field: "status", title: "Status", align: "center" },
];

const json_fields = {
    "Model Name": "model_name",
    "field Name": "field_name",
    "field Type": "field_type_html",
    "Max Size (KB)": "max_size",
    Status: "status",
};

export default {
    data() {
        return {
            model: model,
            page_title: "",
            json_fields: json_fields,
            fields_name: {
                default: "Select One",
                model_name: "Model Name",
                field_name: "Field Name",
                max_size: "Max Size",
            },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                page: this.$route.query.page ?? 1,
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

            field_types: [
                { name: "File", value: "file" },
                { name: "Image", value: "image" },
            ],
        };
    },

    provide() {
        return {
            validate: this.validation,
            model: this.model,
            fields_name: this.fields_name,
            search_data: this.search_data,
            table: this.table,
            json_fields: this.json_fields,
            search: this.search,
            resetSearchData: this.resetSearchData,
        };
    },

    methods: {
        search() {
            this.$router.push({ name: this.model + '.index', query: { ...this.search_data } });
            this.get_paginate(this.model, this.search_data);
        },

        resetSearchData() {
            this.search_data.pagination = 10;
            this.search_data.field_type = "";
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
        },
    },

    created() {
        this.getRouteName(this.model);
        this.page_title = `${this.headline(this.model)} List`;
        this.search();
    },

    validators: {
        "search_data.status": function (value = null) {
            return Validator.value(value);
        },
    },
};
</script>
