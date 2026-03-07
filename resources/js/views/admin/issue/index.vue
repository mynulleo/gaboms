<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Branch" field="search_data.branch_id" col="4">
        <v-select v-model="search_data.branch_id" label="branch_name" :reduce="(obj) => obj.id"
          :options="$root.global.branches" placeholder="--Select Branch--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Employee" field="search_data.employee_id" col="4">
        <v-select v-model="search_data.employee_id" label="full_name" :reduce="(obj) => obj.id"
          :options="$root.global.employees" placeholder="--Select Employee--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Client" field="search_data.client_id" col="4">
        <v-select v-model="search_data.client_id" label="org_name" :reduce="(obj) => obj.id" :options="clients"
          placeholder="--Select Employee--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='searchfromissuedate' v-model='search_data.from_issue_date' field='search_data.from_issue_date'
        title='From Issue Date' placeholder='From Issue Date' col='3' :req='false'></date-picker>
      <date-picker id='searchtoissuedate' v-model='search_data.to_issue_date' field='search_data.to_issue_date'
        title='To Issue Date' placeholder='To Issue Date' col='3' :req='false'
        :disablePastDates="search_data.to_issue_date"></date-picker>
    </template>
  </index-page>
</template>

<script>

const model = "issue";

const tableColumns = [
  { field: "issueno", title: "Issueno" },
  { field: "issue_date", title: "Issue Date" },
  { field: "branch_id", title: "Branch", subfield: "branch.branch_name" },
  { field: "department", title: "Department" },
  { field: "employee_id", title: "Employee", subfield: "employee.full_name" },
  { field: "client_id", title: "Client", subfield: "client.name" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Issueno": "issueno",
  "Branch Id": "branch_id",
  "Department": "department",
  "Issue Date": "issue_date",
  "Employee Id": "employee_id",
  "Remarks": "remarks",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", issueno: "Issue No" },
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
      let serviceid = 4;
      axios.get(
        `clients/` + serviceid
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