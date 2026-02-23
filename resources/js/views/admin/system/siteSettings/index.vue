<template>
  <index-page :button="false"></index-page>
</template>

<script>
const model = "siteSetting";

// Define table columns...
const tableColumns = [
  { field: "title", title: "Title" },
  { field: "short_title", title: "Short Title" },
  {
    field: "logo",
    title: "Logo",
    image: true,
    imgWidth: "80px",
  },
  { field: "contact_email", title: "Contact Email" },
];
// Define excel column...
const json_fields = {
  "Role Name": "name",
  "Created at": "created_at",
};

export default {
  data() {
    return {
      model: model,
      json_fields: json_fields,
      fields_name: { default: "Select One", title: "Title" },
      search_data: {
        pagination: 10,
        field_name: "title",
        value: "",
      },
      table: {
        columns: tableColumns,
        routes: {},
        datas: [],
        meta: [],
        links: [],
      },
    };
  },
  provide() {
    return {
      model: this.model,
      fields_name: this.fields_name,
      search_data: this.search_data,
      table: this.table,
    };
  },
  methods: {
    search() {
      this.get_paginate(this.model, this.search_data);
    },
    injectCustomRoute() {
      this.table.routes.destroy = null;
    },
  },
  created() {
    this.getRouteName(this.model);
    this.setBreadcrumbs(this.model, "index", "Site Setting");
    this.search();
    this.injectCustomRoute();
  },
};
</script>
