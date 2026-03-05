<template>
  <index-page :show_status="false">
    <template v-slot:search-field>
      <date-picker id='searchfrominvoicedate' v-model='search_data.from_gen_date' field='search_data.from_gen_date'
        title='From Date' placeholder='From Date' col='3' :req='false'></date-picker>
      <date-picker id='searchtoinvoicedate' v-model='search_data.to_gen_date' field='search_data.to_gen_date'
        title='To Date' placeholder='To Date' col='3' :req='false'
        :disablePastDates="search_data.from_gen_date"></date-picker>
      <v-select-container title="Month" field="search_data.month" col="3">
        <v-select v-model="search_data.month" label="name" :reduce="(obj) => obj.value"
          :options="$root.global.montharray" placeholder="--Select Month--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Year" field="search_data.year" col="3">
        <v-select v-model="search_data.year" label="name" :reduce="(obj) => obj.value"
          :options="$root.global.recentyears" placeholder="--Select Year--" :closeOnSelect="true"></v-select>
      </v-select-container>
    </template>
  </index-page>
</template>

<script>

const model = "salarySheet";

const tableColumns = [
  { field: "title", title: "Title" },
  { field: "month", title: "Month" },
  { field: "year", title: "Year" },
  { field: "generated_date", title: "Generated Date" },
  { field: "approved_by", title: "Approved By", subfield: "approved_admin.name" },
  { field: "approved_date", title: "Approved Date" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Title": "title",
  "Month": "month",
  "Year": "year",
  "Generated Date": "generated_date",
  "Approved By": "approved_by",
  "Approved Date": "approved_date",
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
      }
    };
  },

  provide() {
    return {
      validate: this.validation,
      model: this.model,
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
  },

  created() {
    this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();
  },

  validators: {},
};
</script>