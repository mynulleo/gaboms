
<template>
  <create-form @onSubmit="submit">
    <div class="row align-items-center">
      <!-------------- Basic Modal --------------->
      <div class="col-md-3">
        <button @click="openBasicModal" class="btn btn-primary btn-sm">
          Open Basic Modal
        </button>
        <button @click="closeBasicModal" class="btn btn-warning btn-sm">
          Close Basic Modal
        </button>
      </div>

      <BasicModal id="productModal" name="Product">
        <template v-slot:title>basic Modal</template>
        <template v-slot:body>
          <Input
            v-model="data.title"
            field="data.title"
            title="Title"
            :req="true"
            col="12"
          />
        </template>
        <template v-slot:button>
          <Button
            title="Submit"
            process=""
            @click.prevent="productStoreModal"
          />
        </template>
      </BasicModal>
      <!-------------- Basic Modal --------------->

      <!-------------- Inherit Modal --------------->
      <div class="col-md-3">
        <button @click="openInheritModal" class="btn btn-primary btn-sm">
          Open Inherit Modal
        </button>
        <button @click="closeInheritModal" class="btn btn-warning btn-sm">
          Close Inherit Modal
        </button>
      </div>

      <InheritModal id="faqModal" name="Faq" type="modal-xl">
        <template v-slot:title>Global Faq Create Page</template>
        <template v-slot:body>
          <faq></faq>
        </template>
      </InheritModal>
      <!-------------- Inherit Modal --------------->

      <MultipleSelectContainer
        field="data.categories"
        :req="true"
        title="Categories"
      >
        <MultipleSelect
          style="color: brown"
          v-model="data.categories"
          :options="categories"
          :settings="{
            settingOption: name,
            settingOption: value,
            multiple: true,
          }"
          @change=""
          @select=""
        />
      </MultipleSelectContainer>

      <Input v-model="data.name" field="data.name" title="Name" :req="true" />

      <!-------------- Number with Country Code --------------->
      <v-select-container
        field="data.country_id"
        :req="true"
        title="Country Code"
      >
        <v-select
          v-model="data.country_id"
          label="name"
          :reduce="(obj) => obj.id"
          :options="countries"
          placeholder="--Select One--"
          :closeOnSelect="true"
          :req="true"
        ></v-select>
      </v-select-container>

      <Input
        v-model="data.phone"
        field="data.phone"
        title="Phone"
        :req="true"
      />
      <!-------------- Number with Country Code --------------->

      <Input
        v-model="data.email"
        field="data.email"
        title="Email"
        :req="true"
      />
      <Input
        v-model="data.phone"
        field="data.phone"
        title="Phone"
        :req="false"
      />
      <File
        title="Image"
        field="data.image"
        mime="img"
        fileClassName="data.image"
        :req="false"
      />
      <File
        title="File"
        field="data.file"
        mime=".pdf"
        fileClassName="data.file"
        :req="false"
      />

      <CropImage
        v-bind:corp="data.corp"
        v-on:update:modelValue="data.corp = $event"
        fileClassName="data.crop"
        :width="500"
        :src="data.corp"
      >
      </CropImage>

      <div><vue-file-toolbar-menu :content="my_menu" /></div>

      <div class="col-md-12">
        <div class="p-3 py-5">
          <div class="row mt-2" v-for="(item, index) in extras" :key="index">
            <div class="col-md-5">
              <input
                type="text"
                @input="validateInput()"
                v-model="item.name"
                class="form-control"
                placeholder="name"
              />
              <small class="text-danger" v-if="errors[`${index}.name`]">
                {{ errors[`${index}.name`] }}
              </small>
            </div>
            <div class="col-md-5">
              <input
                type="file"
                :name="'images[' + index + ']'"
                :ref="'file' + index"
                class="form-control"
                @input="validateInput()"
              />
              <small class="text-danger" v-if="errors[`${index}.image`]">
                {{ errors[`${index}.image`] }}
              </small>
            </div>
            <div class="col-md-2">
              <div
                class="btn btn-danger"
                @click.prevent="extras.splice(index, 1)"
                v-if="extras.length > 1"
              >
                -
              </div>
              <div
                class="btn btn-success mt-3 mt-md-0"
                @click="extras.push({ name: '1', image: '' })"
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Switch
      v-model="data.status"
      on-label="Active"
      off-label="Deactive"
      :req="true"
    ></Switch>

    <Button title="Submit" process="" />

    <Fieldset>
      <template v-slot:name>Laravel Custom Pagination</template>
      <template v-slot:content>
        <template v-for="(item, index) in laravelData.data" :key="index">
          <p>{{ item.title }}</p>
        </template>

        <LaravelPagination
          :data="laravelData"
          @pagination-change-page="getResults"
        >
        </LaravelPagination>
      </template>
    </Fieldset>

    CKeditor
    <textarea ref="editor"></textarea>
  </create-form>
</template>

<script>
const model = "profile";
import CropImage from "../../../components/Form/CropImage.vue";
import Faq from "../faq/create.vue";
import { mapState, mapMutations } from "vuex";
import VueFileToolbarMenu from "vue-file-toolbar-menu";

export default {
  components: {
    CropImage,
    Faq,
    VueFileToolbarMenu,
  },
  mounted() {
    if (typeof CKEDITOR !== "undefined") {
      CKEDITOR.replace(this.$refs.editor);
    } else {
      console.error("CKEditor script not loaded.");
    }
  },
  computed: {
    my_menu() {
      return [
        {
          text: "My Menu",
          menu: [
            { text: "Item 1", click: () => alert("Action 1") },
            { text: "Item 2", click: () => alert("Action 2") },
          ],
        },
        {
          text: "My Button",
          active: this.happy,
          icon: this.happy ? "sentiment_very_satisfied" : "sentiment_satisfied",
          click: () => {
            this.happy = !this.happy;
          },
        },
      ];
    },

    ...mapState("country", ["countries"]),
  },
  data() {
    return {
      model: model,
      data: { image: "", file: "" },
      categories: [],
      image: {},
      errors: {},
      extras: [{ name: "1", image: "" }],
      laravelData: {},
      happy: false,
    };
  },
  provide() {
    return {
      validate: this.validation,
      data: () => this.data,
      image: this.image,
    };
  },
  methods: {
    submit: function (e) {
      this.$validate().then((res) => {
        const error = this.validation.countErrors();
        const iError = Object.keys(this.errors).length;

        const errCount = error + iError;
        if (errCount > 0) {
          console.log(this.validation.allErrors());
          this.$toast(
            "You need to fill " + errCount + " more empty mandatory fields",
            "warning"
          );
          return false;
        }

        if (res) {
          var form = document.getElementById("form");
          var formData = new FormData(form);
          formData.append("corp", this.data.corp);
          console.log(this.data);
          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    getResults(page) {
      if (typeof page === "undefined") {
        page = 1;
      }
      axios
        .get("/custom/pagination", {
          params: {
            page: page,
            id: this.id,
          },
        })
        .then((res) => {
          this.laravelData = res.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    openBasicModal() {
      $("#productModal").modal("show");
    },
    closeBasicModal() {
      $("#productModal").modal("hide");
    },
    openInheritModal() {
      this.$store.commit("inherit/setInherit", true);
      $("#faqModal").modal("show");
    },
    closeInheritModal() {
      $("#faqModal").modal("hide");
    },
    productStoreModal() {
      alert("Submit");
    },
    validateInput() {
      this.errors = {};
      // console.log(this.extras);
      this.extras.forEach((obj, ind) => {
        console.log(this.$refs["file" + ind][0].files[0]);

        if (!obj.name) {
          this.setError(ind, "name", "name is required");
        } else if (this.$refs["file" + ind][0].files[0] == undefined) {
          this.setError(ind, "image", "image is required");
        }
        // else if (this.$refs['file' + ind][0].files[0] == undefined) {
        //   console.log('img hit');
        //   this.setError(ind, "image", "image is required");
        // }
      });
    },
    setError(index, prop, message) {
      this.errors = {
        ...this.errors,
        [`${index}.${prop}`]: message,
      };
    },
    getCategory() {
      axios.get(`category?page=1&allData=true`).then((res) => {
        var n = res.data.map((e) => {
          return {
            text: e.title,
            id: e.id,
          };
        });
        const categories = JSON.parse(JSON.stringify(n));
        this.categories = categories;
      });
    },
  },
  created() {
    this.getResults();
    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit");
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.setBreadcrumbs(this.model, "create");
    }
    this.getCategory();
    this.$store.dispatch("country/getCountry");
  },

  validators: {
    "data.categories": function (value = null) {
      return Validator.value(value).required("Category is required");
    },
    "data.name": function (value = null) {
      return Validator.value(value).required("Name is required");
    },
    "data.email": function (value = null) {
      return Validator.value(value).required("Email is required").email();
    },
    "data.phone": function (value = null) {
      return Validator.value(value).digit().minLength(11).maxLength(11);
    },
    "data.image": function (value = null) {
      return Validator.value(value)
        .custom(function () {
          if (!value.type) {
            return false;
          }
          if (!Validator.isEmpty(value)) {
            var type = value.type;
            if (
              type == "image/jpg" ||
              type == "image/jpeg" ||
              type == "image/webp" ||
              type == "image/png"
            ) {
            } else {
              return "Image must be of type .jpg.jpeg.webp.png";
            }
          }
        })
        .custom(function () {
          if (!Validator.isEmpty(value)) {
            var size = value.size;
            if (size > 1048576) {
              return "File must be smaller than 1024 kb";
            }
          }
        });
    },
    "data.file": function (value = null) {
      return Validator.value(value).custom(function () {
        if (!Validator.isEmpty(value)) {
          var size = value.size;
          if (size > 2097152) {
            return "File must be smaller than 2048 kb";
          }
        }
      });
    },
  },
};
</script>
