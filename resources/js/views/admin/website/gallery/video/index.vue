<template>
    <index-page :show_status="false">
        <template v-slot:search-field>
            <v-select-container title="Select Album" field="search_data.album_id" class="">
                <v-select v-model="search_data.album_id" label="name" :reduce="(obj) => obj.id"
                    :options="extraData.albums" placeholder="--Select Album--" :closeOnSelect="true" col="6"></v-select>
            </v-select-container>
            <Select field="search_data.status" title="Select Status" col="4" v-model="search_data.status" label="name"
                :reduce="(obj) => obj.value" :options="status" placeholder="--Select One--" :closeOnSelect="true" />
        </template>
    </index-page>
</template>

<script>
const model = "video";

const tableColumns = [
    { field: "album_id", title: "Album Name", subfield: "album.name" },
    {
        field: "thumbnail_three",
        zoom_field: "original_image",
        title: "Thumbnail",
        image: true,
        imgWidth: "30px",
        align: "center",
        enable_data_sorting: false,
    },
    { field: "title", title: "Title" },
    // { field: "url", title: "URL" },
    {
        field: "sorting",
        title: "Sorting",
        sorting: true,
        namespace: "Website-Gallery-Video",
        auto: "",
        align: "center",
    },
    { field: "status", title: "Status", align: "center" },

];

const json_fields = {
    Title: "title",
    "Created at": "created_at",
};

export default {
    data() {
        return {
            page_title: "Video List",
            extraData: {
                albums: [],
            },
            model: model,
            json_fields: json_fields,
            fields_name: {
                default: "Select One",
                album_name: "Album Name",
                title: "Title",
                url: "Url",
            },
            search_data: {
                pagination: this.$route.query.pagination ?? 10,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "",
                album_id: this.$route.query.album_id ?? "",
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
            this.search_data.album_id = '';
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
        },
        getStatus() {
            this.status = [
                { name: 'All', value: '' },
                { name: 'Active', value: 'active' },
                { name: 'Draft', value: 'draft' },
            ];
        },
    },
    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index");
        this.search();
        this.get_paginate("album", { allData: true, type: "Videos" }, "albums");
        this.getStatus();
    },
    validators: {
        "search_data.album_id": function (value = null) {
            return Validator.value(value);
        },
    },
};
</script>
