<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Supplier" field="search_data.supplier_id" col="3">
        <v-select v-model="search_data.supplier_id" label="org_name" :reduce="(obj) => obj.id"
          :options="$root.global.suppliers" placeholder="--Select Supplier--" :closeOnSelect="true"></v-select>
      </v-select-container>
    </template>
  </index-page>
</template>

<script>

const model = "purchase";

const tableColumns = [
  { field: "invoiceno", title: "Invoiceno" },
  { field: "purchase_date", title: "Purchase Date" },
  { field: "supplier_id", title: "Supplier", subfield: "supplier.org_name" },
  { field: "amount", title: "Amount" },
  { field: "discount", title: "Discount" },
  { field: "tax", title: "Tax" },
  { field: "total_amount", title: "Total Amount" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Invoiceno": "invoiceno",
  "Purchase Date": "purchase_date",
  "Supplier Id": "supplier_id",
  "Amount": "amount",
  "Discount": "discount",
  "Tax": "tax",
  "Total Amount": "total_amount",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", invoiceno: "Invoice No" },
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