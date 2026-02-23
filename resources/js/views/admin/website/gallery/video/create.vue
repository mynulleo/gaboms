<template>
    <create-form @onSubmit="submit">
        <File title="Image" field="data.original_image" mime="img" fileClassName="file2" :showCrop="true"
            :vHeight="$root.media_validators?.thumbnail?.min_height ?? 600"
            :vWidth="$root.media_validators?.thumbnail?.min_width ?? 600"
            :vSizeInKb="$root.media_validators?.thumbnail?.max_size ?? 5000" col="3 col-12" req />
        <GlobalCrop field="data.original_image" v-on:update:modelValue="data.original_image = $event"
            :image="image.original_image" :aspectRatio="{
                aspectRatio:
                    ($root.media_validators?.thumbnail?.min_width ?? 600) /
                    ($root.media_validators?.thumbnail?.min_height ?? 600),
            }" :minWidth="$root.media_validators?.thumbnail?.min_width ?? 600"
            :minHeight="$root.media_validators?.thumbnail?.min_height ?? 600">
        </GlobalCrop>
        <div class="col-xl-9 col-lg-8">
            <div class="row g-3">
                <Select title="Album" :req="true" field="data.album_id" col="4 col-xl-3 col-xxl-4"
                    v-model="data.album_id" label="name" :reduce="(obj) => obj.id" :options="albums"
                    placeholder="--Select Any--" :closeOnSelect="true" :require="true" />

                <Input v-model="data.title" field="data.title" title="Title" col="8 col-xl-9 col-xxl-8" :req="true" />
                <Input type="url" v-model="data.url" field="data.url" title="URL" placeholder="https://www.xyz.com"
                    :req="true" col="8 col-xl-9 col-xxl-8" />
                <Input type="number" title="Sorting" field="data.sorting" v-model="data.sorting"
                    col="4 col-xl-3 col-xxl-4" :req="true" />

                <Switch v-model="data.status" on-label="Active" off-label="Draft" on-value="active" off-value="draft"
                    :req="true"></Switch>
            </div>
        </div>
    </create-form>
</template>

<script>
import Select from '../../../../../components/Form/Select.vue';

const model = "video";

export default {
    data() {
        return {
            page_title: "",
            model: model,
            data: {
                original_image: "", status: "active", album_id: null,
            },
            image: { original_image: "" },
            albums: [],
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

                if (error > 0) {
                    console.log(this.validation.allErrors());
                    this.$toast(
                        "You need to fill " + error + " more empty mandatory fields",
                        "warning"
                    );
                }

                if (res) {
                    var form = document.getElementById("form");
                    var formData = new FormData(form);
                    formData.append("image_base64", this.data.original_image);
                    formData.append("thumbnail_resize_value", this.$root.media_validators?.thumbnail?.resize_value ?? "");
                    formData.append("album_id", this.data.album_id);
                    formData.append("url", this.data.url);
                    formData.append("status", this.data.status == 'active' ? 'active' : 'draft');
                    if (this.data.id) {
                        this.update(this.model, formData, this.data.id, "image");
                    } else {
                        this.store(this.model, formData);
                    }
                }
            });
        },
        getAlbum() {
            return axios.get("/get-album/Videos").then((res) => {
                this.albums = res.data;
            }).catch((error) => {
                console.error("Error fetching albums:", error);
            });
        },
    },
    created() {
        if (this.$route.params.id) {
            this.get_data(`${this.model}/${this.$route.params.id}`);
            this.page_title = "Video Edit";
        } else {
            this.get_sorting("Website-Gallery-Video");
            this.page_title = "Video Create";

        }
        this.getAlbum().then(() => {
            this.data.album_id = this.$route.query.id
                ? Number(this.$route.query.id)
                : null;
        });
        this.getMediaValidators("Video");

    },

    validators: {
        "data.title": function (value = null) {
            return Validator.value(value).required("Title is required");
        },
        "data.album_id": function (value = null) {
            return Validator.value(value).required("Album is required");
        },
        "data.original_image": function (value = null) {
            return Validator.value(value).required("Image is required");
        },
        "data.url": function (value = null) {
            return Validator.value(value).required("URL is required").url();
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
