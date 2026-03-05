<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Select District" field="search_data.district_id" col="3">
        <v-select v-model="search_data.district_id" label="district_name" :reduce="(obj) => obj.id"
          :options="$root.global.districts" placeholder="--Select District--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Area" field="search_data.area_id" col="3">
        <v-select v-model="search_data.area_id" label="area_name" :reduce="(obj) => obj.id" :options="areas"
          placeholder="--Select Area--" :closeOnSelect="true"></v-select>
      </v-select-container>
    </template>
  </index-page>
</template>

<script>

const model = "branch";

const tableColumns = [
  { field: "district", title: "District", subfield: "district.district_name" },
  { field: "area_id", title: "Area", subfield: "area.area_name" },
  { field: "branch_name", title: "Branch Name" },
  { field: "mobile", title: "Mobile" },
  { field: "email", title: "Email" },
  { field: "latitude", title: "Latitude" },
  { field: "longitude", title: "Longitude" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Branch Name": "branch_name",
  "Mobile": "mobile",
  "Email": "email",
  "Address": "address",
  "Area Id": "area_id",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", branch_name: "Branch Name", mobile: "Mobile", email: "Email", },
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
        links: []
      },
      areas: []
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
  watch: {
    "search_data.district_id": "getareas"
  },
  methods: {
    getareas() {
      var district_id = this.search_data.district_id;
      axios.get("/getareas/" + district_id).then((res) => {
        this.areas = res.data;
      });
    },
    search() {
      this.get_paginate(this.model, this.search_data);
    },

    resetSearchData() {
      this.search_data.pagination = 10;
      this.search_data.page = 1;
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

  validators: {},
};
</script>