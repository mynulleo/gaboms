<template>
    <index-page>
        <template v-slot:search-field>
            <v-select-container title="Select Album" field="search_data.album_id">
                <v-select v-model="search_data.album_id" label="name" :reduce="(obj) => obj.id"
                    :options="extraData.albums" placeholder="--Select Album--" :closeOnSelect="true"></v-select>
            </v-select-container>
        </template>
    </index-page>
</template>

<script>
const model = "photo";

// Define table columns...
const tableColumns = [
    {
        field: "album_id",
        title: "Album Name",
        subfield: "album.name",
        // to: "album.show",
        // id: "id",
    },
    { field: "title", title: "Title" },

    {
        field: "thumb",
        zoom_field: "thumb_two",
        title: "Image",
        image: true,
        imgWidth: "30px",
        height: "30px",
        align: "center",
        enable_data_sorting: false,
    },
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
            page_title: "Photo List",
            extraData: {
                albums: [],
            },
            model: model,
            json_fields: json_fields,
            fields_name: {
                default: "Select One",
                title: "Title",
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
        };
    },

    provide() {
        return {
            validate: this.validation,
            model: this.model,
            fields_name: this.fields_name,
            search_data: this.search_data,
            search: this.search,
            table: this.table,
            json_fields: this.json_fields,
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
            this.search_data.album_id = '';
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
        },
    },

    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index");
        this.search();
        this.get_paginate("album", { allData: true, type: "Photos" }, "albums");
    },
    validators: {
        "search_data.status": function (value = null) {
            return Validator.value(value);
        },
    },
};
</script>
