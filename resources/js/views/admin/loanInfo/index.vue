<template>
  <index-page :show_status="false">
    <template v-slot:search-field>
      <v-select-container title="Select Type" field="search_data.trns_type" col="3">
        <v-select v-model="search_data.trns_type" label="name" :reduce="(obj) => obj.value"
          :options="$root.global.loaninfotypes" placeholder="--Select Account Head--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='searchfrominvoicedate' v-model='search_data.from_trns_date' field='search_data.from_trns_date'
        title='From Invoice Date' placeholder='From Invoice Date' col='3' :req='false'></date-picker>
      <date-picker id='searchtoinvoicedate' v-model='search_data.to_trns_date' field='search_data.to_trns_date'
        title='To Invoice Date' placeholder='To Invoice Date' col='3' :req='false'
        :disablePastDates="search_data.from_trns_date"></date-picker>
      <SwitchBoolean v-model='search_data.is_close' field='data.is_close' title='Is Close?' on-label='Yes'
        off-label='No' :req='false'></SwitchBoolean>

    </template>
  </index-page>
</template>

<script>

const model = "loanInfo";

const tableColumns = [
  { field: "trnsid", title: "Trnsid" },
  { field: "trns_date", title: "Trns Date" },
  { field: "employee_id", title: "Employee", subfield: "employee.full_name" },
  { field: "trns_type", title: "Trns Type" },
  { field: "amount", title: "Amount" },
  { field: "total_installment", title: "Total Installment" },
  { field: "installment_amount", title: "Installment Amount" },
  { field: "closing_date", title: "Closing Date" },
  { field: "due_amount", title: "Due Amount" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Trnsid": "trnsid", "Trns Date": "trns_date", "Employee Id": "employee_id", "Trns Type": "trns_type", "Amount": "amount", "Total Installment": "total_installment", "Installment Amount": "installment_amount", "Deduct From Salary": "deduct_from_salary", "Schedule Day": "schedule_day", "Return Date": "return_date", "Closing Date": "closing_date", "Due Amount": "due_amount", "Reason": "reason", "Remarks": "remarks",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", title: "Title" },
      search_data: {
        is_close: 0
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