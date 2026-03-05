<template>
    <index-page>
        <template v-slot:search-field>
        </template>
    </index-page>
</template>

<script>
const model = "role";

// Define table columns...
const tableColumns = [
    { field: "name", title: "Role Name" },
    { field: "status", title: "Status", align: "center" },
    { field: "created_at", title: "Created at", date: true },
];
// Define excel column...
const json_fields = {
    "Role Name": "name",
    "Created at": "created_at",
};

export default {
    data() {
        return {
            page_title: "Role List",
            model: model,
            json_fields: json_fields,
            fields_name: { default: "Select One", name: "Name" },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "active",
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
            validate: this.validation,
            search: this.search,

        };
    },

    methods: {
        search() {
            this.$router.push({ name: this.model + '.index', query: { ...this.search_data } });
            this.get_paginate(this.model, this.search_data);
        },
        systemRoleUpdate() {
            axios.get("/systems-update").then((res) => {
                this.notification(res.data.message, "success");
            });
        },
    },
    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index");
        this.search();
    },
    validators: {

    }
};
</script>
