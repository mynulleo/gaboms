<template>
    <index-page>
        <template #search-field>
            <Select field="search_data.field_type" title="Page Type" col="4" v-model="search_data.page_type"
                label="name" :reduce="(obj) => obj.value" :options="page_type" placeholder="--Select One--"
                :closeOnSelect="true" />
        </template>
    </index-page>
</template>

<script>
const model = "helpInfo";

const tableColumns = [
    { field: "model_name", title: "Model Name" },
    { field: "page_type", title: "Page Type" },
    { field: "plain_description", title: "Description"},
    {
        field: "sorting",
        title: "Sorting",
        sorting: true,
        namespace: "HelpInfo",
        auto: "",
        align: "center",
    },
    { field: "status", title: "Status", align: "center" },
];

const json_fields = {
    "Model Name": "model_name",
    "Page Name": "page_type",
    Description: "description",
};

export default {
    data() {
        return {
            model: model,
            page_title: "",
            json_fields: json_fields,
            fields_name: { default: "Select One", model_name: "Model Name", },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                page: this.$route.query.page ?? 1,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "",
                page_type: this.$route.query.page_type ?? "",
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
            this.search_data.page_type = '';
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
        },
        getPageType() {
            this.page_type = [
                { name: 'Index Page', value: 'index' },
                { name: 'Create Page', value: 'create' },
                { name: 'View Page', value: 'view' }
            ];
        },
    },

    created() {
        this.getPageType();
        this.getRouteName(this.model);
        this.page_title = `${this.headline(this.model)} List`;
        this.search();
    },

    validators: {},
};
</script>
