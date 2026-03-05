<template>
    <create-form @onSubmit="submit">
        <div class="col-xl-3 col-lg-4">
            <File
                title="Image"
                field="data.original_image"
                mime="img"
                fileClassName="file2"
                :showCrop="true"
                col="12"
                :vHeight="$root.media_validators?.image?.min_height ?? 600"
                :vWidth="$root.media_validators?.image?.min_width ?? 600"
                :vSizeInKb="$root.media_validators?.image?.max_size ?? 5000"
                :req="true"
            />
        </div>
        <div class="col-xl-9 col-lg-8">
            <div class="row g-3">
                <Select
                    title="Type"
                    col="4 col-xxl-4"
                    field="data.type"
                    v-model="data.type"
                    label="name"
                    :reduce="(obj) => obj.value"
                    :options="types"
                    placeholder="--Select One--"
                    :closeOnSelect="true"
                    :req="true"
                />
                <Input
                    v-model="data.name"
                    field="data.name"
                    title="Name"
                    :req="true"
                    col="8 col-xxl-8"
                />
                <Input
                    title="Sorting"
                    field="data.sorting"
                    v-model="data.sorting"
                    :req="true"
                    col="4 col-xl-3"
                    type="number"
                />
                <Switch
                    v-model="data.status"
                    on-label="Active"
                    off-label="Draft"
                    on-value="active"
                    off-value="draft"
                    :req="true"
                ></Switch>
            </div>
        </div>
        <GlobalCrop
            field="data.original_image"
            v-on:update:modelValue="data.original_image = $event"
            :image="image.original_image"
            :aspectRatio="{
                aspectRatio:
                    ($root.media_validators?.image?.min_width ?? 600) /
                    ($root.media_validators?.image?.min_height ?? 600),
            }"
            :minWidth="$root.media_validators?.image?.min_width ?? 600"
            :minHeight="$root.media_validators?.image?.min_height ?? 600"
        >
        </GlobalCrop>
    </create-form>
</template>

<script>
const model = "album";

export default {
    data() {
        return {
            page_title: "",
            model: model,
            data: { image: "", sorting: 0, status: "active" },
            image: { original_image: "" },
            types: [
                { name: "Photos", value: "Photos" },
                { name: "Videos", value: "Videos" },
            ],
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
                }

                if (res) {
                    var form = document.getElementById("form");
                    var formData = new FormData(form);
                    formData.append("type", this.data.type);
                    formData.append("image_base64", this.data.original_image);
                    formData.append(
                        "image_resize_value",
                        this.$root.media_validators?.image?.resize_value ?? ""
                    );
                    formData.append(
                        "status",
                        this.data.status == "active" ? "active" : "draft"
                    );

                    if (this.data.id) {
                        this.update(
                            this.model,
                            formData,
                            this.data.slug,
                            "image"
                        );
                    } else {
                        this.store(this.model, formData);
                    }
                }
            });
        },
    },
    created() {
        if (this.$route.params.id) {
            this.get_data(`${this.model}/${this.$route.params.id}`);
            this.page_title = "Album Edit";
        } else {
            this.page_title = "Album Create";
            this.get_sorting("Website-Gallery-Album");
        }

        this.getMediaValidators("Album");
    },

    validators: {
        "data.name": function (value = null) {
            return Validator.value(value)
                .maxLength(191)
                .required("Name is required");
        },
        "data.type": function (value = null) {
            return Validator.value(value).required("Type is required");
        },
        "data.sorting": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Sorting is required");
        },
        "data.original_image": function (value = null) {
            return Validator.value(value).required("Image is required");
        },
    },
};
</script>
