<template>
  <index-page :show_status="false">
    <template v-slot:search-field>
      <v-select-container title="Select Account" field="search_data.account_id" col="3">
        <v-select v-model="search_data.account_id" label="name" :reduce="(obj) => obj.id" :options="fundaccounts"
          placeholder="--Select Account--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='searchfrominvoicedate' v-model='search_data.from_withdraw_date'
        field='search_data.from_withdraw_date' title='From Withdraw Date' placeholder='From Withdraw Date' col='3'
        :req='false'></date-picker>
      <date-picker id='searchtoPaymentdate' v-model='search_data.to_withdraw_date' field='search_data.to_trns_date'
        title='To Withdraw Date' placeholder='To Withdraw Date' col='3' :req='false'
        :disablePastDates="search_data.from_withdraw_date"></date-picker>
    </template>
  </index-page>
</template>

<script>

const model = "withdrawl";

const tableColumns = [
  { field: "withdrwal_date", title: "Withdrwal Date" },
  { field: "account_id", title: "Account", subfield: "account.account_name" },
  { field: "amount", title: "Amount" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Withdrwal Date": "withdrwal_date",
  "Amount": "amount",
  "Account Id": "account_id",
  "Remarks": "remarks",
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
        links: [],
      },
      fundaccounts: []
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
    getFundAccounts() {
      axios.get(
        `/getfundaccounts`
      )
        .then((response) => {
          this.fundaccounts = response.data;
        })
        .catch((error) => {
          console.error(error);
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
    this.getFundAccounts();
  },

  validators: {},
};
</script>