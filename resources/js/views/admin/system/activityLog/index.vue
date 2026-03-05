<template>
    <index-page :show_status="false">
        <template v-slot:search-field>
            <date-picker id="date1" field="search_data.from_date" name="from_date" v-model="search_data.from_date"
                title="From Date" placeholder="dd/mm/yyyy" :req="true" col="3" label="From Date"></date-picker>

            <date-picker id="date2" field="search_data.to_date" name="to_date" v-model="search_data.to_date"
                title="To Date" placeholder="dd/mm/yyyy" :req="true" col="3" label="To Date"></date-picker>

            <v-select-container title="Select User" field="search_data.description">
                <v-select v-model="search_data.description" label="name" :reduce="(obj) => obj.name"
                    :options="extraData.admins" placeholder="--Select User--" :closeOnSelect="true"></v-select>
            </v-select-container>

            <v-select-container title="Select Type" field="search_data.action">
                <v-select v-model="search_data.action" label="name" :reduce="(obj) => obj.value"
                    :options="modules.types" placeholder="--Select Type--" :closeOnSelect="true"></v-select>
            </v-select-container>

            <v-select-container title="Select Status" field="search_data.status">
                <v-select v-model="search_data.status" label="name" :reduce="(obj) => obj.value"
                    :options="modules.status" placeholder="--Select Status--" :closeOnSelect="true"></v-select>
            </v-select-container>
        </template>
    </index-page>
</template>

<script>
const model = "activityLog";

// Define table columns...
const tableColumns = [
    { field: "log_name", title: "Module" },
    { field: "description", title: "Description" },
    { field: "status", title: "Status", align: "center" },
    { field: "created_at", title: "Created at", date: true },
];

// Define excel column...
const json_fields = {
    Module: "log_name",
    Description: "description",
    Status: "status",
    "Created at": "created_at",
};

export default {
    data() {
        return {
            page_title: "Activity Log",
            modules: {
                types: [
                    { name: "All", value: "" },
                    { name: "Created", value: "Created" },
                    { name: "Updated", value: "Updated" },
                    { name: "Deleted", value: "Deleted" },
                ],
                status: [
                    { name: "All", value: "" },
                    { name: "Read", value: "r" },
                    { name: "Unread", value: "ur" },
                    { name: "Restored", value: "restored" },
                ],
            },
            model: model,
            json_fields: json_fields,
            fields_name: {
                default: "Select One",
                log_name: "Module",
                description: "Description",
            },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                description: this.$route.query.description ?? "",
                action: this.$route.query.action ?? "",
                status: this.$route.query.status ?? "",
                from_date: this.$route.query.from_date ?? "",
                to_date: this.$route.query.to_date ?? "",
            },
            extraData: {
                admins: [],
            },
            table: {
                columns: tableColumns,
                routes: {
                    view: model + ".show",
                    destroy: model + ".destroy",
                },
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
            search: this.search,
            resetSearchData: this.resetSearchData,
        };
    },
    methods: {
        destroy(id) {
            this.destroy_data(this.model, id, this.search_data);
        },
        search() {
            this.$router.push({
                name: this.model + ".index",
                query: { ...this.search_data },
            });
            this.get_paginate(this.model, this.search_data);
        },
        resetSearchData() {
            this.search_data.pagination = 10;
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
            this.search_data.from_date = "";
            this.search_data.to_date = "";
            this.search_data.description = "";
            this.search_data.action = "";
        },
        allRead() {
            this.$root.spinner = true;
            axios
                .get("/allRead")
                .then((res) => {
                    this.search();
                    this.$toast(res.data.message, "success");
                })
                .catch((error) => console.log())
                .then((alw) =>
                    setTimeout(() => (this.$root.spinner = false), 200)
                );
        },
    },
    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index", "Activity Log");
        this.search();
        this.get_paginate("admin", { allData: true }, "admins");
    },

    validators: {
        "search_data.to_date": function (value = null) {
            return Validator.value(value);
        },
    },
};
</script>
