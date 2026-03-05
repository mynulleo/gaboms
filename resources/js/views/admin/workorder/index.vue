<template>
  <index-page> </index-page>
</template>

<script>

const model = "workorder";

const tableColumns = [{ field: "status", title: "Status", align: "center" },{ field: "client_id", title: "Client Id"},{ field: "order_date", title: "Order Date"},{ field: "order_no", title: "Order No"},{ field: "uno_no", title: "Uno No"},{ field: "delivery_date", title: "Delivery Date"},{ field: "shipping", title: "Shipping"},{ field: "currency_id", title: "Currency Id"},{ field: "amount", title: "Amount"},];

const json_fields = {
  "Client Id": "client_id","Order Date": "order_date","Order No": "order_no","Uno No": "uno_no","Delivery Date": "delivery_date","Shipping": "shipping","Remarks": "remarks","Currency Id": "currency_id","Currency Rate": "currency_rate","Amount": "amount",
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