<template>
    <create-form @onSubmit="submit">
        <div class="col-lg-12">
            <Fieldset>
                <template v-slot:name>News Information</template>
                <template v-slot:content>
                    <div class="col-lg-12">
                        <div class="row g-3">
                            <div class="col-xl-3 col-lg-4">
                                <File
                                    title="Image"
                                    field="data.original_image"
                                    mime="img"
                                    fileClassName="file2"
                                    :req="true"
                                    :showCrop="true"
                                    :vHeight="
                                        $root.media_validators?.image
                                            ?.min_height ?? 600
                                    "
                                    :vWidth="
                                        $root.media_validators?.image
                                            ?.min_width ?? 600
                                    "
                                    :vSizeInKb="
                                        $root.media_validators?.image
                                            ?.max_size ?? 5000
                                    "
                                    col="12 col-12"
                                />

                                <GlobalCrop
                                    field="data.original_image"
                                    v-on:update:modelValue="
                                        data.original_image = $event
                                    "
                                    :image="image.original_image"
                                    :aspectRatio="{
                                        aspectRatio:
                                            ($root.media_validators?.image
                                                ?.min_width ?? 600) /
                                            ($root.media_validators?.image
                                                ?.min_height ?? 600),
                                    }"
                                    :minWidth="
                                        $root.media_validators?.image
                                            ?.min_width ?? 600
                                    "
                                    :minHeight="
                                        $root.media_validators?.image
                                            ?.min_height ?? 600
                                    "
                                >
                                </GlobalCrop>
                            </div>
                            <div class="col-xl-9 col-lg-8">
                                <div class="row g-3">
                                    <date-picker
                                        id="date"
                                        v-model="data.date"
                                        field="data.date"
                                        name="date"
                                        title="Date"
                                        placeholder="dd/mm/yyyy"
                                        class="mb-lg-0"
                                        col="6 col-xxl-3"
                                        :req="true"
                                    >
                                    </date-picker>
                                    <Select
                                        field="data.category_id"
                                        :req="true"
                                        col="6 col-xxl-3"
                                        title="Category"
                                        v-model="data.category_id"
                                        label="title"
                                        :reduce="(obj) => obj.id"
                                        :options="categories"
                                        placeholder="--Select One--"
                                        :closeOnSelect="true"
                                    />
                                    <Input
                                        v-model="data.title"
                                        field="data.title"
                                        title="Title"
                                        :req="true"
                                        col="8 col-xxl-6"
                                    />

                                    <div class="col-12">
                                        <v-select-container
                                            field="tag"
                                            title="Tags(Optional)"
                                            col="12 multiple_tags_input"
                                        >
                                            <v-select
                                                taggable
                                                multiple
                                                name="tag"
                                                v-model="data.tag"
                                                no-drop
                                            ></v-select>
                                        </v-select-container>
                                    </div>

                                    <Input
                                        title="Sorting"
                                        field="data.sorting"
                                        v-model="data.sorting"
                                        :req="true"
                                        col="4 col-xl-4"
                                        type="number"
                                    />
                                    <Switch
                                        v-model="data.status"
                                        on-label="Active"
                                        off-label="Deactive"
                                        :req="true"
                                    >
                                    </Switch>
                                </div>
                            </div>
                            <editor
                                v-model="data.description"
                                title="Description"
                                col="12"
                            />
                        </div>
                    </div>
                </template>
            </Fieldset>
        </div>
        <div class="col-lg-12">
            <div id="meta_box" class="static_fieldset">
                <div class="check_box style2">
                    <div class="form-check">
                        <input
                            class="form-check-input shadow-none d-none"
                            type="checkbox"
                            v-model="is_meta"
                            id="flexCheckChecked1"
                        />
                        <label class="form-check-label" for="flexCheckChecked1">
                            <span class="icon"></span> Show / Hide Meta
                            Information
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12" v-if="is_meta == true">
            <Fieldset>
                <template v-slot:name>Meta Information</template>
                <template v-slot:content>
                    <div class="row g-3">
                        <div class="col-12">
                            <v-select-container
                                field="meta_tag"
                                title="Meta Keywords(Optional)"
                                col="12 multiple_tags_input"
                            >
                                <v-select
                                    taggable
                                    multiple
                                    name="meta_tag"
                                    v-model="data.meta_tag"
                                    no-drop
                                ></v-select>
                            </v-select-container>
                        </div>
                        <div class="col-12">
                            <div class="form-element">
                                <label for="" class="form-label"
                                    >Meta Description(Optional)</label
                                >
                                <textarea
                                    name="meta_description"
                                    v-model="data.meta_description"
                                    class="form-control"
                                    id=""
                                    cols="30"
                                    rows="4"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </template>
            </Fieldset>
        </div>
    </create-form>
</template>

<script>
const model = "news";
import { mapState } from "vuex";
import Editor from "../../../../components/Form/CKEditor";

export default {
    components: { Editor },
    computed: {
        ...mapState("category", ["categories"]),
    },
    data() {
        return {
            page_title: "",
            model: model,
            data: {
                sorting: 0,
                status: "active",
                meta_tag: [],
            },
            image: { original_image: "" },
            is_meta: false,
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

                    if (this.data.meta_tag && this.data.meta_tag.length > 0) {
                        formData.append(
                            "meta_tag",
                            JSON.stringify(this.data.meta_tag)
                        );
                    } else {
                        formData.append("meta_tag", JSON.stringify([]));
                    }
                    formData.append("image_base64", this.data.original_image);
                    formData.append(
                        "image_resize_value",
                        this.$root.media_validators?.image?.resize_value ?? ""
                    );
                    formData.append("category_id", this.data.category_id);
                    formData.append("description", this.data.description);
                    formData.append("status", this.data.status);
                    formData.append("tag", this.data.tag);

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
        metaScroll() {
            const targetElement = document.querySelector("#meta_box");

            setTimeout(() => {
                if (targetElement) {
                    const extraOffset = 100; // Adjust this value to add more space at the bottom
                    const elementPosition =
                        targetElement.getBoundingClientRect().top +
                        window.scrollY;
                    window.scrollTo({
                        top: elementPosition - extraOffset,
                        behavior: "smooth",
                    });
                }
            }, 100);
        },
        // track of meta
        updateIsMeta() {
            this.is_meta =
                !!(this.data.meta_tag && this.data.meta_tag.length > 0) ||
                !!(
                    this.data.meta_description &&
                    this.data.meta_description.trim() !== ""
                );
        },
    },
    watch: {
        "data.meta_tag": function (newVal) {
            this.updateIsMeta();
        },
        "data.meta_description": function (newVal) {
            this.updateIsMeta();
        },
        "data.tag": function (value = null) {
            return Validator.value(value).required("Tag  is required");
        },
        is_meta(newVal) {
            if (newVal === true) {
                this.metaScroll(); // Call metaScroll when is_meta becomes true
            }
        },
    },
    created() {
        if (this.$route.params.id) {
            this.get_data(`${this.model}/${this.$route.params.id}`);
            this.page_title = "News Edit";
        } else {
            this.get_sorting("Website-News");
            this.page_title = "News Create";
        }
        this.getMediaValidators("News");
        this.$store.dispatch("category/getCategory", { transfer: "News" });
    },
    validators: {
        "data.date": function (value = null) {
            return Validator.value(value).required("Date is required");
        },
        "data.category_id": function (value = null) {
            return Validator.value(value).required("Category is required");
        },
        "data.original_image": function (value = null) {
            return Validator.value(value).required("Image is required");
        },
        "data.title": function (value = null) {
            return Validator.value(value)
                .maxLength(191)
                .required("Title is required");
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
