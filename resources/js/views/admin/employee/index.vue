<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Select Designation" field="search_data.designation_id" col="3">
        <v-select v-model="search_data.designation_id" label="title" :reduce="(obj) => obj.id"
          :options="$root.global.designations" placeholder="--Select Designation--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Branch" field="search_data.branch_id" col="3">
        <v-select v-model="search_data.branch_id" label="branch_name" :reduce="(obj) => obj.id"
          :options="$root.global.branches" placeholder="--Select Branch--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='date1' v-model='search_data.from_joining_date' field='data.from_joining_date'
        title='From Joining Date' placeholder='Joining Date' col='3' :req='true'></date-picker>
      <date-picker id='date2' v-model='search_data.to_joining_date' field='data.to_joining_date' title='To Joining Date'
        placeholder='Joining Date' col='3' :req='true'></date-picker>
    </template>
  </index-page>
</template>

<script>

const model = "employee";

const tableColumns = [
  { field: "image", title: "Image", image: true, imgWidth: "30px", align: "center" },
  { field: "empid", title: "Empid" },
  { field: "joining_date", title: "Joining Date" },
  { field: "designation_id", title: "Designation Id", subfield: "designation.title" },
  { field: "full_name", title: "Full Name" },
  { field: "email", title: "Email" },
  { field: "mobile", title: "Mobile" },
  { field: "nid", title: "Nid" },
  { field: "branch_id", title: "Branch", subfield: "offic_branch.branch_name" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Empid": "empid", "Joining Date": "joining_date", "Designation Id": "designation_id", "Full Name": "full_name", "Email": "email", "Mobile": "mobile", "Dob": "dob", "Nid": "nid", "Address": "address", "Branch Id": "branch_id", "Image": "image",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", full_name: "Name", mobile: "Mobile", email: "Email", nid: "NID", },
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