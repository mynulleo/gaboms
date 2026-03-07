<template>
  <index-page :show_status="false">
    <template v-slot:search-field>
      <v-select-container title="Select Client" field="search_data.client_id" col="3">
        <v-select v-model="search_data.client_id" label="org_name" :reduce="(obj) => obj.id" :options="clients"
          placeholder="--Select Client--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Supplier" field="search_data.supplier_id" col="3">
        <v-select v-model="search_data.supplier_id" label="org_name" :reduce="(obj) => obj.id"
          :options="$root.global.suppliers" placeholder="--Select Supplier--" :closeOnSelect="true"></v-select>
      </v-select-container>

      <v-select-container title="Select Uplinks" field="search_data.uplink_provider_id" col="3">
        <v-select v-model="search_data.uplink_provider_id" label="org_name" :reduce="(obj) => obj.id"
          :options="$root.global.uplinkproviders" placeholder="--Select Supplier--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Eployee" field="search_data.employee_id" col="3">
        <v-select v-model="search_data.employee_id" label="full_name" :reduce="(obj) => obj.id"
          :options="$root.global.employees" placeholder="--Select Employee--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Payment Methods" field="search_data.payment_method" col="3">
        <v-select v-model="search_data.payment_method" label="name" :reduce="(obj) => obj.value"
          :options="$root.global.paymentmethods" placeholder="--Select Employee--" :closeOnSelect="true"></v-select>
      </v-select-container>

      <date-picker id='searchfrominvoicedate' v-model='search_data.from_payment_date' field='search_data.from_trns_date'
        title='From Invoice Date' placeholder='From Payment Date' col='3' :req='false'></date-picker>
      <date-picker id='searchtoPaymentdate' v-model='search_data.to_payment_date' field='search_data.to_trns_date'
        title='To Payment Date' placeholder='To Payment Date' col='3' :req='false'
        :disablePastDates="search_data.from_payment_date"></date-picker>

      <SwitchBoolean v-model='search_data.office_expense' field='data.office_expense' title='Office Expense'
        on-label='Yes' off-label='No' :req='false'></SwitchBoolean>
    </template>
  </index-page>
</template>
<script>

const model = "payment";

const tableColumns = [

  { field: "payslipno", title: "Payslipno" },
  { field: "payment_type", title: "Payment Type" },
  { field: "client_id", title: "Client", subfield: "client.name" },
  { field: "supplier_id", title: "Supplier", subfield: "supplier.org_name" },
  { field: "uplink_provider_id", title: "Uplink Provider", subfield: "uplink_provider.org_name" },
  { field: "employee_id", title: "Employee", subfield: "employee.full_name" },
  { field: "payment_date", title: "Payment Date" },
  { field: "payment_method", title: "Payment Method" },
  { field: "amount", title: "Amount" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Payslipno": "payslipno",
  "Payment Type": "payment_type",
  "Client Id": "client_id",
  "Supplier Id": "supplier_id",
  "Payment Date": "payment_date",
  "Payment Method": "payment_method",
  "Mbanking Type": "mbanking_type",
  "Chequeno": "chequeno",
  "Bank Name": "bank_name",
  "Branch": "branch",
  "Accountno": "accountno",
  "Trxid": "trxid",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", payslipno: "Pay Slip No", chequeno: "Cheque No", bank_name: "Bank Name", accountno: "Account No", trxid: "Trx ID" },
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
    getClients() {
      axios.get(
        `clients/`
      )
        .then((response) => {
          this.clients = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
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
    this.getClients();
  },

  validators: {},
};
</script>