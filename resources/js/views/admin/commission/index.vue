<template>
  <index-page :show_status="false">
    <template v-slot:search-field>
      <v-select-container title="Select Client" field="search_data.client_id" col="3">
        <v-select v-model="search_data.client_id" label="org_name" :reduce="(obj) => obj.id" :options="clients"
          placeholder="--Select Client--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Employee" field="search_data.employee_id" col="3">
        <v-select v-model="search_data.employee_id" label="full_name" :reduce="(obj) => obj.id"
          :options="$root.global.employees" placeholder="--Select Employee--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Package" field="search_data.package_id" col="3">
        <v-select v-model="search_data.package_id" label="title" :reduce="(obj) => obj.id"
          :options="$root.global.packages" placeholder="--Select Package--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <SwitchBoolean v-model='search_data.is_closed' field='search_data.is_closed' title='Is Closed' on-label='Yes'
        off-label='No' col="2">
      </SwitchBoolean>
    </template>
  </index-page>
</template>

<script>

const model = "commission";

const tableColumns = [
  { field: "client_id", title: "Client", subfield: 'client.name' },
  { field: "employee_id", title: "Employee", subfield: 'employee.full_name' },
  { field: "referance_name", title: "Referance Name" },
  { field: "package_id", title: "Package", subfield: 'package.title' },
  { field: "percentage", title: "Percentage" },
  { field: "amount", title: "Amount" },
  { field: "is_closed", title: "Is Closed" },
  { field: "approved_by", title: "Approved By", subfield: 'approved_admin.name' },
  { field: "approved_date", title: "Approved Date" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Employee Id": "employee_id", "Client Id": "client_id", "Referance Name": "referance_name", "Package Id": "package_id", "Percentage": "percentage", "Amount": "amount", "Is Closed": "is_closed",
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
      clients: []
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
    getClients() {
      axios.get(
        `clients`
      )
        .then((response) => {
          this.clients = response.data;
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
    this.getClients();
  },

  validators: {},
};
</script>