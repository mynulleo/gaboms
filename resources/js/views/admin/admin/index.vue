<template>
    <index-page>
        <template v-slot:search-field>
            <v-select-container title="Select Role" field="search_data.role_id">
                <v-select
                    v-model="search_data.role_id"
                    label="name"
                    :reduce="(obj) => obj.id"
                    :options="extraData.roles"
                    placeholder="--Select Role--"
                    :closeOnSelect="true"
                ></v-select>
            </v-select-container>
        </template>
    </index-page>
</template>

<script>
const model = "admin";
import { EventBus } from "../../../event-bus.js";

const tableColumns = [
    {
        field: "profile_three",
        zoom_field: "profile_two",
        title: "Profile",
        image: true,
        imgWidth: "30px",
        align: "center",
        enable_data_sorting: false,
    },
    { field: "name", title: "Name" },
    { field: "email", title: "Email" },
    { field: "mobile", title: "Mobile" },
    { field: "role", title: "Role Name", subfield: "role.name", enable_data_sorting: false, },
    { field: "status", title: "Status", align: "center" },
    { field: "created_at", title: "Created at", align: "center", date: true },
];

const json_fields = {
    Name: "name",
    Role: "role.name",
    Email: "email",
    Mobile: "mobile",
    Status: "status",
    CreatedAt: "created_at",
};

export default {
    data() {
        return {
            extraData: {
                roles: [],
            },
            page_title: "Admin List",
            model: model,
            json_fields: json_fields,
            fields_name: {
                default: "Select One",
                name: "Name",
                email: "Email",
                mobile: "Mobile",
            },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "",
                // role_id: this.safeNumber(this.$route.query.role_id) ?? "",
                role_id:
                    this.safeNumber(this.$route.query.role_id) === 0
                        ? ""
                        : this.safeNumber(this.$route.query.role_id),
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
            json_fields: this.json_fields,
            validate: this.validation,
            search: this.search,
            resetSearchData: this.resetSearchData,
        };
    },
    methods: {
        search: function () {
            this.$router.push({
                name: this.model + ".index",
                query: { ...this.search_data },
            });

            this.get_paginate(this.model, this.search_data);
        },

        resetSearchData() {
            this.search_data.pagination = 10;
            this.search_data.role_id = '';
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
        },

        systemRoleUpdate() {
            axios.get("/systems-update").then((res) => {
                this.notification(res.data.message, "success");
            });
        },

        bindEvents() {
            EventBus.on(
                "server",
                function () {
                    console.log("Yaay, Server !!!");
                }.bind(this)
            );
        },
    },

    created() {
        this.getRouteName(this.model);
        this.get_paginate("role", { allData: true }, "roles", false);
        this.search();
    },

    mounted() {
        this.bindEvents();
    },

    validators: {
        "search_data.role_id": function (value = null) {
            return Validator.value(value);
        },
        "search_data.field_name": function (value = null) {
            return Validator.value(value);
        },
        "search_data.value": function (value = null) {
            const app = this;
            return Validator.value(value).required("Ok");
        },
    },
};
</script>
