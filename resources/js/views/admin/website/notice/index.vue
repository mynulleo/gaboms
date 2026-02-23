<template>
    <index-page>
        <template v-slot:search-field>
            <v-select-container req field="search_data.type" title="Notice Type">
                <v-select v-model="search_data.type" label="name" :reduce="(obj) => obj.value" :options="types"
                    placeholder="--Select One--" :closeOnSelect="true" :req="true"></v-select>
            </v-select-container>

            <v-select-container field="search_data.category_id" title="Category">
                <v-select v-model="search_data.category_id" label="title" :reduce="(obj) => obj.id"
                    :options="categories" placeholder="--Select One--" :closeOnSelect="true" :req="true"></v-select>
            </v-select-container>

            <date-picker id="date1" field="search_data.from_date" name="from_date" v-model="search_data.from_date"
                title="From Date" placeholder="dd/mm/yyyy" :req="true" col="3" label="From Date"
                :tooltip="false"></date-picker>

            <date-picker id="date2" field="search_data.to_date" name="to_date" v-model="search_data.to_date"
                :disableToDates="search_data.from_date" :disableFutureDates="true" title="To Date"
                placeholder="dd/mm/yyyy" :req="true" col="3" label="To Date" :tooltip="false"></date-picker>
        </template>
    </index-page>
</template>

<script>
const model = "notice";
import { mapState } from "vuex";

const tableColumns = [
    { field: "title", title: "Title" },
    { field: "category_id", title: "Notice Type", subfield: "category.title" },
    { field: "notice_date", title: "Notice_date" },
    { field: "notice_end", title: "Notice end" },
    {
        field: "file",
        title: "File",
        pdf: true,
        imgWidth: "20px",
        align: "center",
    },
    {
        field: "sorting",
        title: "Sorting",
        sorting: true,
        namespace: "Notice",
        auto: "",
        align: "center",
    },
    { field: "status", title: "Status", align: "center" },
    // { field: "created_at", title: "Created at", date: true },
];

const json_fields = {
    Title: "title",
    "Notice date": "notice_date",
    Description: "description",
    File: "file",
};

export default {
    computed: {
        ...mapState("category", ["categories"]),
    },
    data() {
        return {
            page_title: "Notice List",
            model: model,
            json_fields: json_fields,
            fields_name: { default: "Select One", title: "Title", venue: "Venue" },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "",
                from_date: this.$route.query.from_date ?? "",
                to_date: this.$route.query.to_date ?? "",
            },
            table: {
                columns: tableColumns,
                routes: {},
                datas: [],
                meta: [],
                links: [],
            },
            types: [
                { name: "File", value: "file" },
                { name: "Content", value: "content" },
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
            this.search_data.page = 1;
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
            this.search_data.from_date = "";
            this.search_data.to_date = "";
            this.search_data.category_id = "";
            this.search_data.type = "";
        },
    },

    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index");
        this.search();
        this.$store.dispatch("category/getCategory", { transfer: "Notice" });
    },

    validators: {
        "search_data.status": function (value = null) {
            return Validator.value(value);
        },

        "search_data.from_date": function (value = null) {
            return Validator.value(value);
        },
        "search_data.to_date": function (value = null) {
            const that = this;
            return Validator.value(value).custom(function () {
                if (!Validator.isEmpty(value) && that.search_data.to_date) {
                    const end = new Date(value);
                    const start = new Date(that.search_data.from_date);

                    if (start > end) {
                        return "End date must higher";
                    }
                }
            });
        },
    },
};
</script>
