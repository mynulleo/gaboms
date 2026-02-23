<template>
  <div class="content-part">
    <div class="inner-content">
      <div class="box box-success" v-if="!$root.spinner">
        <div class="box-header with-border">
          <!--============ Add or Back Button Start ============-->
          <div class="box-tools pull-right float-end">
            <router-link
              :to="{ name: model + '.edit' }"
              class="btn btn2 shadow-none btn-primary aus-btn d-block d-md-inline mb-3 mb-md-0"
              title="Add File"
            >
              <i class="fas fa-edit"></i>
              <span class="text-capitalize"> Edit {{ model }}</span>
            </router-link>
            <router-link
              :to="{
                name: model + '.show',
                params: { slug: $route.params.slug },
              }"
              class="btn btn-xs btn-secondary mx-2 aus-btn pull-left text-white me-2 d-block d-md-inline mb-3 mb-md-0"
              title="View File"
            >
              <i class="fa fa-eye"></i>
              <span class="text-capitalize"> View {{ model }}</span>
            </router-link>
          </div>
          <!--============ Add or Back Button End ============-->
        </div>

        <div class="box-body box-min-height">
          <!--============ Form Start ============-->
          <div class="row justify-content-center">
            <h3 class="box-title text-center pb-1">
              {{ ucfirst(model) + " File Create" }}
            </h3>
            <form
              v-on:submit.prevent="submit"
              id="form"
              class="form-row col-11 col-sm-8 border border-success p-4 rounded"
            >
              <div
                class="form-row col-12 mb-3"
                :class="{
                  'has-error': validation.hasError('data.title'),
                  'has-success': data.title,
                }"
              >
                <label class="col-3 control-label">Title</label>
                <div class="col-12">
                  <input
                    type="text"
                    v-model="data.title"
                    name="title"
                    class="form-control form-control-sm"
                    placeholder="Title"
                  />
                  <span class="help-block">{{
                    validation.firstError("data.title")
                  }}</span>
                </div>
              </div>

              <div
                class="form-row col-12 mb-3"
                :class="{ 'has-error': errors.file, 'has-success': image.file }"
              >
                <label class="col-3">File</label>
                <div class="col-12">
                  <input
                    type="file"
                    accept=".pdf"
                    v-on:change="onFileChange"
                    class="form-control form-control-sm"
                  />
                  <span class="help-block" v-if="errors.file">{{
                    errors.file[0]
                  }}</span>
                </div>
              </div>

              <div
                class="form-row col-12 mb-3"
                :class="{
                  'has-error': validation.hasError('data.sorting'),
                  'has-success': data.sorting,
                }"
              >
                <label class="col-3">Sorting</label>
                <div class="col-12">
                  <input
                    type="text"
                    v-model="data.sorting"
                    name="sorting"
                    class="form-control form-control-sm"
                    placeholder="Sorting"
                  />
                  <span class="help-block">{{
                    validation.firstError("data.sorting")
                  }}</span>
                </div>
              </div>

              <!-------------- button -------------->
              <div class="col-12 mt-4 text-center">
                <Button
                  class="btn btn2 shadow-none btn-primary aus-btn"
                  title="Submit"
                  process=""
                />
              </div>
              <!-------------- button -------------->
            </form>
          </div>
          <!--============ Form End ============-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const model = "content";

export default {
  data() {
    return {
      model: model,
      data: { sorting: 0 },
      image: { file: "" },
      errors: {},
    };
  },
  methods: {
    submit: function () {
      const error = this.validation.countErrors();
      this.$validate().then((res) => {
        if (error > 0) {
          this.$toast(
            "You need to fill " + error + " more empty mandatory fields",
            "warning"
          );
          return false;
        }

        if (res) {
          this.$root.spinner = true;
          var form = document.getElementById("form");
          var formData = new FormData(form);
          if (this.image.file) {
            formData.append("file", this.image.file);
          } else {
            formData.append("file", "");
          }
          axios
            .post("/content-file/" + this.data.slug, formData)
            .then((res) => {
              this.$toast(res.data.message, "success");
              this.$router.push({
                name: "content.show",
                params: { slug: this.$route.params.slug },
              });
            })
            .catch((error) => {
              if (error.response.status === 422) {
                this.errors = error.response.data.errors || {};
                this.$toast(
                  "You need to fill empty mandatory fields",
                  "warning"
                );
              }
            })
            .then((alw) => setTimeout(() => (this.$root.spinner = false), 200));
        }
      });
    },
    onFileChange(e) {
      this.showImage(e, "file", "");
    },
  },
  created() {
    this.get_sorting("Website-Content-ContentFile");
    this.data.slug = this.$route.params.slug;
    setTimeout(() => (this.$root.spinner = false), 200);
  },
  beforeCreate() {
    this.$root.spinner = true;
  },
  validators: {
    "data.title": function (value = null) {
      return Validator.value(value).required("Title is required");
    },
    "data.sorting": function (value = null) {
      return Validator.value(value)
        .digit()
        .regex("^[0-9]*$")
        .required("Sorting is required");
    },
  },
};
</script>
