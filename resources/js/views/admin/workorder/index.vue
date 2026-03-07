<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Client" field="search_data.client_id" col="3">
        <v-select v-model="search_data.client_id" label="org_name" :reduce="(obj) => obj.id" :options="clients"
          placeholder="--Select Client--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='searchfromorderdate' v-model='search_data.from_order_date' field='search_data.from_order_date'
        title='From Order Date' placeholder='From order Date' col='3' :req='false'></date-picker>
      <date-picker id='searchtoorderdate' v-model='search_data.to_order_date' field='search_data.to_order_date'
        title='To order Date' placeholder='To order Date' col='3' :req='false'
        :disablePastDates="search_data.from_order_date"></date-picker>

      <date-picker id='searchfromdeliverydate' v-model='search_data.from_delivery_date'
        field='search_data.from_delivery_date' title='From Delivery Date' placeholder='From Delivery Date' col='3'
        :req='false'></date-picker>
      <date-picker id='searchtodeliverydate' v-model='search_data.to_delivery_date' field='search_data.to_delivery_date'
        title='To Delivery Date' placeholder='To Delivery Date' col='3' :req='false'
        :disablePastDates="search_data.from_delivery_date"></date-picker>
    </template>
  </index-page>
</template>

<script>

const model = "workorder";

const tableColumns = [
  { field: "client_id", title: "Client", subfield: "client.name" },
  { field: "order_date", title: "Order Date" },
  { field: "order_no", title: "Order No" },
  { field: "uno_no", title: "Uno No" },
  { field: "delivery_date", title: "Delivery Date" },
  { field: "shipping", title: "Shipping" },
  { field: "currency_id", title: "Currency", subfield: "currency.short_name" },
  { field: "amount", title: "Amount" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Client Id": "client_id", "Order Date": "order_date", "Order No": "order_no", "Uno No": "uno_no", "Delivery Date": "delivery_date", "Shipping": "shipping", "Remarks": "remarks", "Currency Id": "currency_id", "Currency Rate": "currency_rate", "Amount": "amount",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", order_no: "Order No", uno_no: "UNO No" },
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
      clients: []
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
    getClients() {
      axios.get(`clients/`)
        .then((response) => {
          this.clients = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();
    this.getClients();
  },

  validators: {},
};
</script>