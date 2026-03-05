<template>
    <create-form @onSubmit="submit">
        <File
            title="Image"
            cropModalId="logo_crop_modal"
            field="data.original_image"
            mime="img"
            fileClassName="file2"
            :req="true"
            :showCrop="true"
            :vHeight="$root.media_validators?.image?.min_height ?? 90"
            :vWidth="$root.media_validators?.image?.min_width ?? 90"
            :vSizeInKb="$root.media_validators?.image?.max_size ?? 5000"
            col="3 col-12"
        />

        <GlobalCrop
            id="logo_crop_modal"
            field="data.original_image"
            v-on:update:modelValue="data.original_image = $event"
            :image="image.original_image"
            :aspectRatio="{
                aspectRatio:
                    ($root.media_validators?.image?.min_width ?? 90) /
                    ($root.media_validators?.image?.min_height ?? 90),
            }"
            :minWidth="$root.media_validators?.image?.min_width ?? 90"
            :minHeight="$root.media_validators?.image?.min_height ?? 90"
        >
        </GlobalCrop>
        <div class="row g-3">
            <Input
                v-model="data.name"
                field="data.name"
                title="Name"
                :req="false"
            />
            <Input
                v-model="data.designation"
                field="data.designation"
                title="Designation"
                :req="true"
            />
        </div>
        <div class="col-12">
            <div class="form-element">
                <Textarea
                    title="Short Description"
                    field="data.description"
                    v-model="data.description"
                    :req="true"
                    col="12"
                />
            </div>
        </div>
        <Input
            v-model="data.sorting"
            field="data.sorting"
            name="sorting"
            title="Sorting"
            type="number"
            col="2"
            :req="true"
        />
        <Switch
            v-model="data.status"
            field="data.status"
            title="status"
            on-label="Active"
            off-label="Deactive"
            :req="true"
        ></Switch>
    </create-form>
</template>

<script>
import Editor from "../../../components/Form/CKEditor";

const model = "testimonial";

export default {
    components: { Editor },
    data() {
        return {
            model: model,
            page_title: "",
            data: { sorting: 0, status: "active" },
            image: { image: "" },
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
                        "You need to fill " +
                            error +
                            " more empty mandatory fields",
                        "warning"
                    );
                    return false;
                }

                if (res) {
                    var form = document.getElementById("form");
                    var formData = new FormData(form);
                    formData.append("image_base64", this.data.original_image);
                    formData.append(
                        "image_resize_value",
                        this.$root.media_validators?.image?.resize_value ?? ""
                    );
                    formData.append("description", this.data.description);
                    formData.append("status", this.data.status);
                    if (this.data.id) {
                        this.update(this.model, formData, this.data.id, true);
                    } else {
                        this.store(this.model, formData);
                    }
                }
            });
        },
    },
    created() {
        if (this.$route.params.id) {
            this.page_title = this.headline(this.model) + " Edit";
            this.get_data(`${this.model}/${this.$route.params.id}`);
        } else {
            this.get_sorting("Testimonial");

            this.page_title = this.headline(this.model) + " Create";
        }
    },

    validators: {
        "data.name": function (value = null) {
            return Validator.value(value)
                .maxLength(191)
                .required("Name is required");
        },
        "data.description": function (value = null) {
            return Validator.value(value).required("Description is required");
        },
        "data.sorting": function (value = null) {
            return Validator.value(value).required("Sorting is required");
        },
        "data.designation": function (value = null) {
            return Validator.value(value).required("Designation is required");
        },
        "data.original_image": function (value = null) {
            return Validator.value(value).required("Image is required");
        },
    },
};
</script>
