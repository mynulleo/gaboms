<template>
    <div :class="`col-md-${col}`">
        <div class="form-group">
            <label :for="id ?? `input-${uuid}`"
                class="form-label d-flex justify-content-between align-items-center gap-4">
                <div class="lft">
                    <slot name="title"> {{ title }} </slot>
                    <sup v-if="req || required" class="text-danger ms-1">*</sup>
                    <!-- icon error -->
                    <span class="icon_error" v-if="has_error">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-help-octagon">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.897 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" />
                        </svg>
                        <span class="error_info active_error_info">
                            {{ error_message }}
                        </span>
                    </span>
                </div>
            </label>

            <div class="image_upload_box" :class="{ 'border-red': has_error }">
                <div class="upload_box position-relative" :field="field">
                    <div class="img position-relative">
                        <img :src="showImage() == 'pdf' ? this.attach : showImage()
                            " alt="img-cover" class="img-fluid w-100" />
                        <button v-if="isFileExists()" type="button" class="close_image"
                            @click="removeImageSpecific(fileName)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete" v-x-tooltip>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <label class="file_upload_label" :for="id ?? `input-${uuid}`">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-upload" data-bs-toggle="tooltip"
                            data-bs-placement="top" data-bs-title="Upload" v-x-tooltip>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 9l5 -5l5 5" />
                            <path d="M12 4l0 12" />
                        </svg>
                    </label>
                    <input v-if="crop" type="file" :id="id ?? `input-${uuid}`" :name="fieldName" :accept="acceptMime"
                        @change="
                            showCropImage($event, field, id ?? `input-${uuid}`)
                            " class="d-none" />
                    <input v-else type="file" :id="id ?? `input-${uuid}`" class="d-none" ref="fileInput"
                        :name="fieldName" :accept="acceptedMime"
                        @change="onFileChange(fieldName, id ?? `input-${uuid}`)" />
                </div>

                <p>
                    <template v-if="vWidth && vHeight">
                        Min : <span class="no-font-weight">{{ `${vWidth}px x ${vHeight}px` }}</span> |
                    </template>
                    <template v-if="vType">Type: {{ vType }} | </template>
                    Max : <span class="no-font-weight">{{ formatSize(vSizeInKb) }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
    data() {
        return {
            isValid: true,
            fileName: false,
            fileExist: false,
            has_error: false,
            error_message: "",
            uuid: uuidv4(),
        };
    },

    props: {
        id: {
            type: String,
            default: null,
        },

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
            default: "6",
        },
        req: {
            type: Boolean,
            default: false,
        },

        required: {
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
        cropModalId: {
            type: String,
            default: "showCropModal",
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
        }
    },
    computed: {
        fieldName() {
            return this.field.split(".").pop();
        },
        acceptedMime() {
            if (this.mime === "excel") {
                return ".xlsx,.csv";
            }

            if (this.mime == "image/*" || this.mime == "img") {
                return ".jpg, .jpeg, .png";
            }

            if (this.mime == ".pdf") {
                return ".pdf";
            }
        },
        ...mapState("crop", ["remove_image"]),
    },

    watch: {
        remove_image(next, prev) {
            if (next) {
                this.removeImage();
                this.setRemove(false);
            }
        },
        "validate.errors": {
            immediate: true,
            handler() {
                if (this.validate.errors.length > 0) {
                    for (let i = 0; i < this.validate.errors.length; i++) {
                        if (this.field === this.validate.errors[i].field) {
                            this.has_error = true;
                            this.error_message =
                                this.validate.errors[i].message;
                            break;
                        } else {
                            this.has_error = false;
                            this.error_message = "";
                        }
                    }
                } else {
                    this.has_error = false;
                    this.error_message = "";
                }
            },
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
            if (title) {
                this.$refs.fileInput.value = "";
                this.fileName = false;
                this.data()[title] = "";
                this.image[title] = "";
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
                    this.$toast(
                        "Sorry, Please provide a smaller size!",
                        "error"
                    );
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
                                    $(`#${this.cropModalId}`).modal("show");
                                } else {
                                    this.$toast(
                                        "Please provide a valid image",
                                        "error"
                                    );
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

        isFileExists() {
            try {
                const fieldValue = this.data()[this.fieldName];
                return fieldValue && fieldValue.trim().length > 0;
            } catch (error) {
                return false;
            }
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
            return value >= 1024
                ? (value / 1024).toFixed(2) + "mb"
                : value + "kb";
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
.no-font-weight {
    font-weight: normal;
    font-size: 10px;
}
</style>
