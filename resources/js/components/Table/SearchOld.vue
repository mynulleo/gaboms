<template>
  <v-select-container
    title="Select from the list"
    field="search_data.field_name"
    responsive=""
    col="3"
  >
    <v-select
      v-model="search_data.field_name"
      label="value"
      :reduce="(obj) => obj.name"
      :options="fields"
      placeholder="--Select One--"
      :closeOnSelect="true"
    ></v-select>
  </v-select-container>

  <template v-if="isVisible(search_data)">
    <Input
      v-model="search_data.value"
      field="search_data.value"
      title="Keyword"
      :req="true"
      col="3"
    />
  </template>

  <div class="col-3 col-sm-2 col-xl-1 text-center">
    <label class="w-100">Search</label>
    <button type="submit" class="search-btn">
      <div class="btn-front">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="btn-back">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </button>
  </div>

  <div class="col-3 col-sm-2 col-xl-1 text-center">
    <label class="w-100">Clear</label>
    <button type="button" @click="clear()" class="search-btn">
      <div class="btn-front">
        <i class="fa-solid fa-times"></i>
      </div>
      <div class="btn-back">
        <i class="fa-solid fa-times"></i>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  inject: ["search_data", "fields_name"],
  data() {
    return {
      fields: [],
      modules: [
        { name: "Notice", value: "notice" },
        { name: "Events", value: "events" },
        { name: "News", value: "news" },
      ],
    };
  },
  provide() {
    return {
      validate: this.validation,
    };
  },
  methods: {
    clear() {
      console.log(this.search_data);
      for (const key in this.search_data) {
        if (this.search_data.hasOwnProperty(key)) {
          this.search_data[key] = ""; // Set each property to an empty string
        }
      }
    },
    isVisible(search_data) {
      return (
        !!search_data?.field_name &&
        search_data.field_name !== "0" &&
        search_data.field_name !== ""
      );
    },
    transformObject() {
      let final = Object.keys(this.fields_name).map((key) => ({
        name: key.toLowerCase(),
        value: this.fields_name[key],
      }));

      final.splice(0, 1, { value: "--Select One--", name: 0 });
      return final;
    },
  },
  created() {
    this.fields = this.transformObject();
  },
  validators: {
    // "search_data.field_name": function (value = null) {
    //   return Validator.value(value).required("Field name is required");
    // },
  },
};
</script>
