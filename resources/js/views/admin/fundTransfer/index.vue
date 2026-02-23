<template>
  <index-page :show_status="false">
    <template v-slot:search-field>
      <date-picker id='searchfrominvoicedate' v-model='search_data.from_transfer_date'
        field='search_data.from_transfer_date' title='From Transfer Date' placeholder='From Transfer Date' col='3'
        :req='false'></date-picker>
      <date-picker id='searchtoPaymentdate' v-model='search_data.to_transfer_date' field='search_data.to_trns_date'
        title='To Transfer Date' placeholder='To Transfer Date' col='3' :req='false'
        :disablePastDates="search_data.from_transfer_date"></date-picker>
    </template>
  </index-page>
</template>

<script>

const model = "fundTransfer";

const tableColumns = [
  { field: "transfer_date", title: "Transfer Date" },
  { field: "from_account_id", title: "From Account", subfield: "from_account.account_name" },
  { field: "to_account_id", title: "To Account", subfield: "to_account.account_name" },
  { field: "amount", title: "Amount" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Transfer Date": "transfer_date",
  "From Account Id": "from_account_id",
  "To Account Id": "to_account_id",
  "Amount": "amount",
  "Remarks": "remarks",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
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