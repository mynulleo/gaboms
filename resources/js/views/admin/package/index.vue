<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Select Service" field="search_data.service_id" col="3">
        <v-select v-model="search_data.service_id" label="title" :reduce="(obj) => obj.id"
          :options="$root.global.services" placeholder="--Select Service--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Unit" field="search_data.unit_id" col="3">
        <v-select v-model="search_data.unit_id" label="title" :reduce="(obj) => obj.id" :options="units"
          placeholder="--Select Unit--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <Input v-model='search_data.from_price' field='search_data.from_price' title='From Price' :req='true' col="2" />
      <Input v-model='search_data.to_price' field='search_data.to_price' title='To Price' :req='true' col="2" />
    </template>
  </index-page>
</template>

<script>

const model = "package";

const tableColumns = [
  { field: "service", title: "Service", subfield: "service.title" },
  { field: "title", title: "Title" },
  { field: "bandwidth", title: "Bandwidth" },
  { field: "unit", title: "Unit", subfield: "unit.title" },
  { field: "price", title: "Price" },
  { field: "vat", title: "Vat" },
  { field: "price", title: "Monthly Price" },
  { field: "commission_percentage", title: "Commission Percentage" },
  { field: "commission_amount", title: "Commission Amount" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Title": "title", "Start Date": "start_date", "Price": "price",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", title: "Title" },
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
      units: []
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
      this.get_paginate(this.model, this.search_data);
    },

    resetSearchData() {
      this.search_data.pagination = 10;
      this.search_data.page = 1;
      this.search_data.field_name = "";
      this.search_data.value = "";
      this.search_data.status = "";
    },
    getUnits() {
      axios.get("/getunits/Service").then((res) => {
        this.units = res.data;
      });
    }
  },

  created() {
    this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();
    this.getUnits();
  },

  validators: {},
};
</script>