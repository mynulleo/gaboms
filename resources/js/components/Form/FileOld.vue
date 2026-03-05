<template>
  <div :class="getClass()">
    <div class="form-element d-flex flex-wrap">
      <label for="" class="d-block w-100">
        <slot name="title">
          {{ title.replaceAll("_", " ") }}
          <span style="font-size: 11px; color: green">{{
            this.crop ? "( Crop Enable )" : ""
          }}</span></slot
        >
        <sup v-if="req" class="text-danger">*</sup>
        <span class="ms-1 position-relative">
          <i
            :class="
              validate.firstError(this.field)
                ? 'fa-solid fa-circle-question text-danger'
                : ''
            "
          ></i>
          <small :class="getIcon(validate.firstError(this.field))">{{
            validate.firstError(this.field)
          }}</small>
        </span>

        <span class="float-end">
          <i
            class="fas fa-info-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            :title="`Please Put ` + title.replaceAll('_', ' ') + ` Here`"
            ref="info"
          ></i>
        </span>
      </label>

      <div class="upload-box" v-if="crop">
        <input
          ref="fileInput"
          :name="fieldName"
          type="file"
          :accept="acceptMime"
          class="d-none"
          v-on:change="showCropImage($event, field, fileClassName)"
          :id="fileClassName"
        />

        <label
          class="attached"
          :class="modelValue ? '' : errorClass()"
          :for="fileClassName"
          ><i class="fa-solid fa-cloud-arrow-up me-3"></i>

          <template v-if="fileName">
            {{ fileName }}
          </template>

          <template v-else>
            Upload
            {{ mime == ".pdf" ? "File" : "Image" }}
          </template>
        </label>
      </div>

      <div class="upload-box" v-else>
        <div :class="isInvalide()">
          <div class="img-element mb-3">
            <img
              :src="showImage() == 'pdf' ? this.attach : showImage()"
              alt="not found"
              class="img-fluid w-100"
            />
            <div class="upload">
              <input
                ref="fileInput"
                :name="fieldName"
                type="file"
                :accept="acceptedMime"
                class="d-none"
                v-on:change="onFileChange(fieldName, fileClassName)"
                :id="fileClassName"
              />
              <label :for="fileClassName">
                <i class="fas fa-cloud-upload-alt"></i>
              </label>
            </div>
            <div class="delete-img" v-if="deleteButton">
              <input
                type="button"
                id="delete"
                class="d-none"
                accept="image/*"
                @click.prevent="removeImageSpecific(fileName)"
              />
              <label for="delete">
                <i class="fa-solid fa-xmark"></i>
              </label>
            </div>
          </div>
          <template v-if="vWidth && vHeight">
            <label for="" class="d-block">{{
              `Min : ${vWidth}px X ${vHeight}px`
            }}</label>
          </template>
          <template v-if="vType">
            <label for="" class="d-block">Type: {{ vType }}</label>
          </template>
          <label for="" class="d-block"
            >Max : {{ formatSize(vSizeInKb) }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    modelValue: {
      type: [String, Number],
    },
    title: {
      type: String,
    },
    field: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    mime: {
      type: String,
      default: "image/*",
    },
    col: {
      type: String,
    },
    req: {
      type: Boolean,
      default: false,
    },
    fileClassName: {
      type: String,
    },
    crop: {
      type: Boolean,
      default: false,
    },
    showCrop: {
      type: Boolean,
      default: false,
    },
    vHeight: {
      type: Number,
      default: false,
    },
    vWidth: {
      type: Number,
      default: false,
    },
    vSizeInKb: {
      type: Number,
      default: false,
    },
    deleteButton: {
      type: Boolean,
      default: true,
    },
    dataTitle: {
      type: String,
      default: false,
    },
    vType: {
      type: String,
      default: false,
    },
  },
  computed: {
    fieldName() {
      return this.field.split(".").pop();
    },
    acceptedMime() {
      if (this.mime == "image/*" || this.mime == "img") {
        return ".jpg, .jpeg, .png";
      }

      if (this.mime == ".pdf") {
        return ".pdf";
      }
    },
    ...mapState("crop", ["remove_image"]),
  },
  data() {
    return {
      isValid: true,
      fileName: false,
    };
  },
  watch: {
    remove_image(next, prev) {
      if (next) {
        this.removeImage();
        this.setRemove(false);
      }
    },
  },
  provide() {
    return {
      removeImage: this.removeImage,
      call: this.call,
    };
  },
  inject: ["validate", "data", "image"],
  methods: {
    call() {
      console.log("Code Here...");
    },
    getClass() {
      let col = this.col ? this.col : 3;
      let className = `col-lg-${this.col}`;
      return className;
    },
    getIcon(error = null) {
      let errorStatus = this.validate.hasError(this.field);
      if (errorStatus) {
        return "position-absolute bg-danger text-white floating-tooltip text-center";
      } else if (error !== null) {
        return "position-absolute bg-danger text-white floating-tooltip text-center";
      } else if (this.modelValue) {
        return "fas fa-circle-check text-success";
      }
    },
    errorClass() {
      let className = "";
      if (this.req) {
        if (this.validate.hasError(this.field)) {
          className += "border-danger";
        } else if (this.modelValue) {
          className += "border-success";
        }
      }
      return className;
    },
    removeImage() {
      this.$refs.fileInput.value = "";
      this.fileName = false;
      this.data()[this.fieldName] = "";
      this.image[this.fieldName] = "";
    },
    removeImageSpecific(title = null) {
      console.log(title);

      if (title) {
        alert(title);
        this.$refs.fileInput.value = "";
        this.fileName = false;
        this.data()[title] = "";
        this.image[title] = "";
        return;
      }
      this.removeImage();
    },
    onFileChange(field, fileClass) {
      let pdf = this.mime == ".pdf" ? "pdf" : null;
      let file = document.getElementById(fileClass).files[0];

      // Setting up the name...
      this.fileName =
        file.name.length > 6
          ? file.name.substring(0, 6) + file.name.slice(-4)
          : file.name;

      // Validate file size...
      if (this.vSizeInKb) {
        let gSizeInKb = file.size / 1024;

        if (this.vSizeInKb < gSizeInKb) {
          this.$toast("Sorry, Please provide a smaller size!", "error");
          this.removeImage();
          return;
        }
      }

      if (this.vWidth && this.vHeight) {
        this.useImageDimensionValidation(file)
          .then((result) => {
            console.log(result);
            if (result == "small") {
              this.$toast(
                `Image dimensions should be at least ${this.vWidth}x${this.vHeight}`,
                "warning"
              );
              this.removeImage();
              return;
            } else {
              if (this.showCrop) {
                var type = file.type;
                if (
                  type == "image/jpeg" ||
                  type == "image/jpg" ||
                  type == "image/png"
                ) {
                  $("#showCropModal").modal("show");
                } else {
                  this.$toast("Please provide a valid image", "error");
                  this.removeImage();
                }
              }
            }
            this.showImageGlobal(file, field, pdf);
          })
          .catch((error) => {
            console.error(error.message);
          });
      } else {
        this.showImageGlobal(file, field, pdf);
      }
    },
    useImageDimensionValidation(file) {
      return new Promise((resolve, reject) => {
        var type = file.type;
        if (
          type == "image/jpeg" ||
          type == "image/jpg" ||
          type == "image/png" ||
          type == "image/ico" ||
          type == "image/avif" ||
          type == "image/webp"
        ) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          let that = this;
          let isImageBigger = "bigger";

          fileReader.onload = (fe) => {
            const image = new Image();
            image.src = fe.currentTarget.result;
            image.onload = function (ie) {
              let uHeight = parseInt(this.naturalHeight);
              let uWidth = parseInt(this.naturalWidth);
              let vWidth = parseInt(that.vWidth);
              let vHeight = parseInt(that.vHeight);

              if (uHeight < vHeight || uWidth < vWidth) {
                isImageBigger = "small";
              }
              resolve(isImageBigger);
            };
          };
        } else {
          this.removeImage();
          this.$toast("Invalid image type", "error");
        }
      });
    },
    setValid(arg) {
      this.isValid = arg;
    },
    getValid() {
      return this.isValid;
    },
    showImage() {
      if (this.showCrop && this.data()[this.fieldName]) {
        return this.data()[this.fieldName];
      }

      if (this.image[this.fieldName]) {
        return this.image[this.fieldName];
      } else if (this.data()[this.fieldName]) {
        if (this.mime == ".pdf") {
          return this.attach;
        }
        return this.data()[this.fieldName];
      }

      if (this.mime == ".pdf") {
        return this.pdfImage();
      }
      return this.noimage;
    },
    showCropImage(event, field, fileClass = null) {
      $(".attached").html("File attached");
      // var input = event.target;
      // if (input.files && input.files[0]) {
      //   var reader = new FileReader();
      //   reader.onload = (e) => {
      //     this.image[this.fieldName] = e.target.result;
      //   };
      //   reader.readAsDataURL(input.files[0]);
      // }
    },
    showCropModal() {
      $("#consultancyModal").modal("show");
    },
    formatSize(value) {
      if (value == false) {
        return "Not defined";
      }
      return value >= 1024 ? (value / 1024).toFixed(2) + "MB" : value + "KB";
    },
    isInvalide() {
      if (this.validate.hasError(this.field)) {
        return "img-container is-invalide";
      } else {
        return "img-container";
      }
    },
    ...mapMutations("crop", ["setRemove"]),
  },
};
</script>

<style scoped>
.img-element {
  background-color: #e9e9e9 !important;
}
.is-invalide {
  border-color: red !important;
}
.upload-box {
  width: 100%;
}
</style>
