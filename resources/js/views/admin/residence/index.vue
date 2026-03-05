<template>
  <index-page> </index-page>
</template>

<script>

const model = "residence";

const tableColumns = [
  { field: "category", title: "Category", subfield: "category.title" },
  { field: "package", title: "Package", subfield: "package.title" },
  { field: "residence_name", title: "Residence Name" },
  { field: "owner_name", title: "Owner Name" },
  { field: "mobile", title: "Mobile" },
  { field: "reg_date", title: "Reg Date" },
  { field: "expired_date", title: "Expired Date" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Residence Name": "residence_name", "Owner Name": "owner_name", "Address": "address", "Mobile": "mobile", "Email": "email", "Package Id": "package_id", "Reg Date": "reg_date", "Expired Date": "expired_date", "Nid": "nid",
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
  },

  created() {
    this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();
  },

  validators: {},
};
</script>