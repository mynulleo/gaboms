<template>
  <index-page> </index-page>
</template>

<script>

const model = "voucher";

const tableColumns = [
  { field: "status", title: "Status", align: "center" },
  { field: "voucherno", title: "Voucherno" },
  { field: "voucher_type", title: "Voucher Type" },
  { field: "voucher_date", title: "Voucher Date" },
  { field: "total_debit", title: "Total Debit" },
  { field: "total_credit", title: "Total Credit" },
  { field: "approved_by", title: "Approved By" },
  { field: "approved_at", title: "Approved At" },
  { field: "financial_year_id", title: "Financial Year Id" },
];

const json_fields = {
  "Voucherno": "voucherno",
  "Voucher Type": "voucher_type",
  "Voucher Date": "voucher_date",
  "Total Debit": "total_debit",
  "Total Credit": "total_credit",
  "Approved By": "approved_by",
  "Approved At": "approved_at",
  "Narration": "narration",
  "Financial Year Id": "financial_year_id",
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