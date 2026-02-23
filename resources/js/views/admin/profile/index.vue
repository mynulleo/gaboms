<template>
  <index-page> </index-page>
</template>

<script>
const model = "profile";
import { getPost } from "../../../api/admin/post";

// Define table columns...
const tableColumns = [
  { field: "name", title: "Name" },
  { field: "email", title: "Email" },
  { field: "phone", title: "Phone" },
  {
    field: "image",
    title: "Image",
    image: true,
    imgWidth: "50px",
    height: "50px",
    align: "center",
  },
  {
    field: "file",
    title: "File",
    pdf: true,
    imgWidth: "50px",
    height: "50px",
    align: "center",
  },
  { field: "status", title: "Status", align: "center" },
];

// Define excel column...
const json_fields = {
  Name: "name",
  Email: "email",
  Phone: "phone",
  Image: "image",
  File: "file",
};

export default {
  data() {
    return {
      model: model,
      json_fields: json_fields,
      fields_name: { default: "Select One", name: "name" },
      search_data: {
        pagination: 10,
        field_name: "",
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
      json_fields: this.json_fields,
      search: this.search,
    };
  },
  methods: {
    search() {
      this.get_paginate(this.model, this.search_data);
    },
  },
  created() {
    getPost(1).then((res) => {
      console.log(res.data);
    });
    this.getRouteName(this.model);
    this.setBreadcrumbs(this.model, "index");
    this.search();
  },
};
</script>
