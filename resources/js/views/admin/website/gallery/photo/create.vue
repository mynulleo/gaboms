<template>
    <create-form @onSubmit="submit">
        <Select title="Album" :req="true" field="data.album_id" col="4" v-model="data.album_id" name="album_id"
            label="name" :reduce="(obj) => obj.id" :options="albums" placeholder="--Select Any--"
            :closeOnSelect="true" />

        <div class="col-sm-6 col-lg-4">
            <div class="form-group">
                <label for="image" class="form-label d-flex justify-content-between align-items-center gap-4">
                    <div class="lft">
                        <slot name="title"> Image </slot>
                        <sup class="text-danger ms-1">*</sup>
                        <!-- icon error -->
                        <span class="icon_error" v-if="has_image_error">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="currentColor"
                                class="icon icon-tabler icons-tabler-filled icon-tabler-help-octagon">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.897 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" />
                            </svg>
                            <span class="error_info active_error_info">
                                {{ image_error_message }}
                            </span>
                        </span>
                    </div>
                </label>
                <div class="input-group position-relative">
                    <input type="file" class="form-control form-control-sm" :class="{ error: has_image_error }"
                        id="image" accept=".jpg,.jpeg,.png,.gif,.bmp" multiple name="files[]"
                        @blur="imageCheckOnBlur" @change="onChangeImages($event)" />
                </div>
            </div>
        </div>

        <div class="w-100"></div>
        <template v-if="Object.keys(data.uploaded_images).length > 0">
            <div v-for="(img, key) in data.uploaded_images" :key="key" class="col-3">
                <div style="
                box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);
                border: 1px solid #ddd;
              " class="item-blcok mb-2 p-3">
                    <div class="img d-flex justify-content-between">
                        <img :src="img.image" alt="" style="height: 50px" />
                        <input v-model="img.sorting" style="width: 80px" type="number"
                            class="text-center form-control form-control-sm rounded-0 mt-2"
                            :name="`uploaded_images[${key}][sorting]`" placeholder="Sorting" />
                        <i class="fa fa-times text-danger" style="cursor: pointer"
                            @click="data.uploaded_images.splice(key, 1)"></i>
                    </div>
                    <div class="text pt-2 mt-3 mb-3">
                        <label class="w-100 d-block fw-bold">Title</label>
                        <input v-model="img.title" type="text" class="form-control form-control-sm rounded-0"
                            placeholder="Title" :name="`uploaded_images[${key}][title]`" />
                    </div>

                    <Radio :field="`uploaded_images[${key}][status]`" title="Status" :list="[
                        { value: 'active', title: 'Active' },
                        { value: 'deactive', title: 'Deactive' },
                    ]" :req="true" col="3" :isChecked="true" />
                </div>
            </div>
        </template>
    </create-form>
</template>

<script>
const model = "photo";

export default {
    data() {
        return {
            page_title: "Photo Create",
            model: model,
            data: {
                album_id: null,
                sorting: 0,
                uploaded_images: [],
                status: "active",
            },
            image: { image: "" },
            albums: [],
            image: {},
            has_image_error: false,
            image_error_message: "",
        };
    },
    provide() {
        return {
            validate: this.validation,
            data: () => this.data,
            image: this.image,
        };
    },

    watch: {
        'data.uploaded_images': {
            deep: true,
            handler: function () {
                this.checkUploadImages();
            },
        }
    },

    methods: {
        submit: function (e) {
            this.$validate().then((res) => {
                const error = this.validation.countErrors();
                if (error > 0) {
                    console.log(this.validation.allErrors());
                    this.$toast(
                        "You need to fill " + error + " more empty mandatory fields",
                        "warning"
                    );
                }

                this.checkUploadImages();

                if (this.has_image_error === true) {
                    return false;
                }

                if (res) {
                    var form = document.getElementById("form");
                    var formData = new FormData(form);
                    formData.append("album_id", this.data.album_id);

                    for (let [key, value] of formData.entries()) {
                        console.log(`${key}: ${value}`);
                    }
                    if (Object.keys(this.data.uploaded_images).length == 0) {
                        console.log('Uploading');
                        this.$toast("Please select image", "error");
                        return false;
                    }
                    this.store(this.model, formData);
                }
            });
        },

        checkUploadImages() {
            if (this.data.uploaded_images.length == 0) {
                this.has_image_error = true;
                this.image_error_message = "Please select image";
                return false;
            } else {
                this.has_image_error = false;
                this.image_error_message = "";
            }
        },

        imageCheckOnBlur() {
            setTimeout(() => {
                this.checkUploadImages();
            }, 300);
        },

        onChangeImages(event) {
            let vm = this;
            vm.has_image_error = false;
            vm.image_error_message = "";
            vm.data.uploaded_images = [];

            let files = event.target.files;

            if (files.length > 20) {
                vm.has_image_error = true;
                vm.image_error_message = "You can select max 20 images";
                return false;
            }

            $.each(files, function (i, file) {
                let obj = {
                    image: URL.createObjectURL(file),
                    title: "",
                    sorting: vm.data.sorting + i + 1,
                };
                vm.data.uploaded_images.push(obj);
            });
        },

        getAlbum() {
            return axios.get("/get-album/Photos").then((res) => {
                this.albums = res.data;
            }).catch((error) => {
                console.error("Error fetching albums:", error);
            });
        },
    },
    created() {
        this.get_sorting("Website-Gallery-Photo");
        this.getAlbum().then(() => {
            this.data.album_id = this.$route.query.id
                ? Number(this.$route.query.id)
                : null;
        });
    },

    validators: {
        "data.album_id": function (value = null) {
            return Validator.value(value).required("Album is required");
        },
    },
};
</script>
