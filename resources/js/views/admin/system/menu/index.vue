<template>
    <index-page :show_status="false">
        <template v-slot:search-field>
            <v-select-container title="Select Parent Menu" field="search_data.role_id" col="4">
                <v-select v-model="search_data.parent_id" label="menu_name" :reduce="(obj) => obj.id"
                    :options="parent_menus" placeholder="--Select Parent Menu--" :closeOnSelect="true"></v-select>
            </v-select-container>

            <div class="col-md-4">
                <div class="form-check mt-4">
                    <input class="form-check-input bs-checkbox" type="checkbox" id="show_dashboard"
                        v-model="search_data.show_dashboard">
                    <label class="form-check-label" for="show_dashboard" style="padding-top: 2px;">
                        Show Dashboard
                    </label>
                </div>
            </div>
        </template>
    </index-page>
</template>

<script>
const model = "menu";

// Define table columns...
const tableColumns = [
    { field: "parent_id", title: "Parent Menu", subfield: "parent.menu_icon_name", html: true },
    { field: "menu_icon_name", title: "Menu Name", html: true },
    { field: "route_name", title: "Route Name", align: "center" },
    {
        field: "sorting",
        title: "Sorting",
        sorting: true,
        namespace: "System-Menu",
        auto: "",
        align: "center",
    },
    { field: "params", title: "Params", align: "center" },
    { field: "is_show_dashboard", title: "Show Dashboard", align: "center" },

];
// Define excel column...
const json_fields = {
    "Role Name": "name",
    "Created at": "created_at",
};

export default {
    data() {
        return {
            page_title: "Backend Menu List",
            model: model,
            json_fields: json_fields,
            fields_name: { default: "Select One", menu_name: "Menu Name" },
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

            parent_menus: [],
        };
    },

    provide() {
        return {
            model: this.model,
            fields_name: this.fields_name,
            search_data: this.search_data,
            table: this.table,
            search: this.search,
            validate: this.validation,
        };
    },

    methods: {
        search() {
            this.$router.push({
                name: this.model + ".index",
                query: { ...this.search_data },
            });
            this.get_paginate(this.model, this.search_data);
        },
        systemRoleUpdate() {
            axios.get("/systems-update").then((res) => {
                this.notification(res.data.message, "success");
            });
        },

        getParentMenu() {
            axios.get('/backend-parent-menus')
                .then(response => {
                    this.parent_menus = response.data;
                });
        }
    },
    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index", "Backend Menu");
        this.getParentMenu();
        this.search();
    },

    validators: {},
};
</script>
