<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Type" field="search_data.type" col="3">
        <v-select v-model="search_data.type" label="title" :reduce="(obj) => obj.id"
          :options="[{ id: 'Purchase', title: 'Purchase' }, { id: 'Sale', title: 'Sale' }]"
          placeholder="--Select Type--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Service" field="search_data.service_id" col="3">
        <v-select v-model="search_data.service_id" label="title" :reduce="(obj) => obj.id"
          :options="$root.global.services" placeholder="--Select Category--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Client" field="search_data.client_id" col="3">
        <v-select v-model="search_data.client_id" label="name" :reduce="(obj) => obj.id" :options="clients"
          placeholder="--Select Client--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Up Link Provider" field="search_data.uplink_provider_id" col="3">
        <v-select v-model="search_data.uplink_provider_id" label="org_name" :reduce="(obj) => obj.id"
          :options="$root.global.uplinkproviders" placeholder="--Select Up Link Provider--"
          :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='searchfromtransactiondate' v-model='search_data.from_transaction_date'
        field='search_data.from_transaction_date' title='From Transaction Date' placeholder='From Transaction Date'
        col='3' :req='false'></date-picker>
      <date-picker id='searchtotransactiondate' v-model='search_data.to_transaction_date'
        field='search_data.to_transaction_date' title='To Transaction Date' placeholder='To Transaction Date' col='3'
        :req='false' :disablePastDates="search_data.to_transaction_date"></date-picker>

    </template>
  </index-page>
</template>

<script>

const model = "bandwidthHistory";

const tableColumns = [
  { field: "type", title: "Type" },
  { field: "transaction_date", title: "Transaction Date" },
  { field: "uplink_provider_id", title: "Uplink Provider", subfield: "uplink_provider.org_name" },
  { field: "client_id", title: "Client", subfield: "client.name" },
  { field: "total_bandwidth", title: "Total Bandwidth" },
  { field: "total_amount", title: "Total Amount" },
  { field: "is_closed", title: "Is Closed" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Type": "type", "Transaction Date": "transaction_date", "Uplink Provider Id": "uplink_provider_id", "Client Id": "client_id", "Total Bandwidth": "total_bandwidth", "Unit Id": "unit_id", "Total Amount": "total_amount", "Is Closed": "is_closed",
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
      clients: [],
      categories: [],
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
    'search_data.service_id': function () {
      this.getClientsByService();
    }
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
    getClientsByService() {
      let service_id = this.search_data.service_id;
      axios.get(`clients/` + service_id)
        .then((response) => {
          this.clients = response.data;
        });
    },
    getCategories() {
      let module = 'Bandwidth';
      axios.get(`getcategories/${module}`)
        .then((response) => {
          this.categories = response.data;
        });
    },
  },

  created() {
    this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();

    this.getCategories();
  },

  validators: {},
};
</script>