<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Select Group Account" field="search_data.parent_id" col="6">
        <v-select v-model="search_data.parent_id" label="name" :reduce="(obj) => obj.id"
          :options="$root.global.groupaccounts" placeholder="--Select Group Account--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Account Type" field="search_data.account_type" col="3">
        <v-select v-model="search_data.account_type" label="name" :reduce="(obj) => obj.value"
          :options="$root.global.accounttypes" placeholder="--Select Unit--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Referance Type" field="search_data.reference_type" col="3">
        <v-select v-model="search_data.reference_type" label="name" :reduce="(obj) => obj.value"
          :options="$root.global.referencetypes" placeholder="--Select Reference Type--"
          :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Opening Balance Type" field="search_data.opening_balance_type" col="3">
        <v-select v-model="search_data.opening_balance_type" label="name" :reduce="(obj) => obj.value"
          :options="$root.global.opening_balance_types" placeholder="--Select Opening Balance Type--"
          :closeOnSelect="true"></v-select>
      </v-select-container>
    </template>
  </index-page>
</template>

<script>

const model = "account";

const tableColumns = [
  { field: "parent_id", title: "Parent Id", subfield: 'parent.account_name' },
  { field: "account_code", title: "Account Code" },
  { field: "account_name", title: "Account Name" },
  { field: "account_type", title: "Account Type" },
  { field: "reference_type", title: "Reference Type" },
  { field: "opening_balance", title: "Opening Balance" },
  { field: "opening_balance_type", title: "Opening Balance Type" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Parent": "parent_id",
  "Account Code": "account_code",
  "Account Type": "account_type",
  "Is Group": "is_group",
  "Reference Type": "reference_type",
  "Reference Id": "reference_id",
  "Opening Balance": "opening_balance",
  "Opening Balance Type": "opening_balance_type",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: {
        default: "Select One",
        account_code: "Account Code",
        account_name: "Account Name"
      },
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