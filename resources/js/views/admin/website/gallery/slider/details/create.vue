<template>
    <create-form @onSubmit="submit">
        <!------------ Back button ------------>
        <template v-slot:button>
            <AddOrBackButton
                :route="'slider' + '.index'"
                :portion="slider"
                :icon="'fas fa-backward'"
            />
        </template>

        <Fieldset>
            <template v-slot:name>Add details</template>
            <template v-slot:content>
                <div class="col-xl-3 col-lg-4">
                    <File
                        title="Image"
                        field="data.original_image"
                        mime="img"
                        fileClassName="file10"
                        :showCrop="true"
                        col="12"
                        :vWidth="this.slider.width"
                        :vHeight="this.slider.height"
                        vSizeInKb="5000"
                    />
                </div>
                <div class="col-xl-9 col-xl-8">
                    <div class="row">
                        <v-select-container
                            title="Has Button (optional)"
                            field="data.has_button"
                            class="4 col-xl-3"
                        >
                            <select
                                v-model="data.has_button"
                                class="form-select shadow-none"
                                aria-label="Default select example"
                                required
                            >
                                <option
                                    value=""
                                    v-if="data.has_button == ''"
                                    selected
                                >
                                    -- Select --
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </v-select-container>

                        <v-select-container
                            title="Button type "
                            field="data.button_type"
                            class="4 col-xl-3"
                            v-if="data.has_button === 'Yes'"
                        >
                            <select
                                v-model="data.button_type"
                                class="form-select shadow-none"
                                aria-label="Default select example"
                            >
                                <template
                                    v-for="(type, index) in sliderButtonTypes"
                                    :key="index"
                                >
                                    <option value="" v-if="index === 0">
                                        -- Select --
                                    </option>
                                    <option :value="type">
                                        {{ type }}
                                    </option>
                                </template>
                            </select>
                        </v-select-container>

                        <Input
                            v-if="
                                data.has_button !== 'No' &&
                                data.has_button !== '' &&
                                data.type !== ''
                            "
                            type="name"
                            class="4 col-xl-3"
                            v-model="data.button_name"
                            field="data.button_name"
                            title="Button name"
                        />

                        <Input
                            type="text"
                            v-model="data.title"
                            field="data.title"
                            title="Slider Title (optional)"
                            col="9"
                        />

                        <Input
                            type="text"
                            v-model="data.sub_title"
                            field="data.sub_title"
                            title="Slider Sub Title (optional)"
                            col="9"
                        />
                        <Input
                            type="url"
                            v-model="data.url"
                            placeholder="https://www.xyz.com"
                            field="data.url"
                            title="URL(optional)"
                            col="9"
                        />

                        <Input
                            type="number"
                            title="Sorting"
                            field="data.sorting"
                            v-model="data.sorting"
                            :req="true"
                            col="3"
                        />
                    </div>
                </div>
                <GlobalCrop
                    field="data.original_image"
                    v-on:update:modelValue="data.original_image = $event"
                    :image="image.original_image"
                    :aspectRatio="{
                        aspectRatio: this.slider.width / this.slider.height,
                    }"
                    :minWidth="this.slider.width"
                    :minHeight="this.slider.height"
                ></GlobalCrop>
            </template>
        </Fieldset>

        <Fieldset>
            <template v-slot:name>Description (optional)</template>
            <template v-slot:content>
                <input name="slider_id" v-model="slider_id" hidden />
                <editor v-model="data.description" col="12" />
            </template>
        </Fieldset>
        <Switch
            v-model="data.status"
            on-label="Active"
            off-label="Deactive"
            :req="true"
        ></Switch>
    </create-form>
</template>

<script>
const model = "slider-details";
import Editor from "../../../../../../components/Form/CKEditor";

export default {
    components: { Editor },
    data() {
        return {
            page_title: "",
            model: model,
            data: {
                original_image: "",
                button_type: "",
                button_name: "",
                slider_id: this.$route.params.id,
                has_button: "No",
                status: "active",
                url: "",
                title: "",
                sub_title: "",

            },
            image: { original_image: "" },
            slider: {
                width: "600",
                height: "600",
            },
            positions: [],
            slider_title: "",
        };
    },
    watch: {
        "data.has_button"(value) {
            if (value == "No") {
                this.data.button_type = "";
                this.data.button_name = "";
            }
        },
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

                    if (this.data.description) {
                        formData.append("description", this.data.description);
                    }
                    formData.append("slider_id", this.data.slider_id);

                    if (this.data.id) {
                        this.update(
                            this.model,
                            this.data,
                            this.data.id,
                            null,
                            "slider.show",
                            this.data.slider_id
                        );
                    } else {
                        this.store(
                            this.model,
                            this.data,
                            "slider.show",
                            this.data.slider_id
                        );
                    }
                }
            });
        },
        getSliderHeightWidth(id) {
            axios.get(`slider-height-width/${id}`).then((res) => {
                this.slider = res.data;
                this.slider_title = `Image`;
            });
        },
    },
    created() {
        if (this.$route.params.id) {
            this.get_data(`${this.model}/${this.$route.params.id}`);
            this.page_title = "Slider Details Edit";
        } else {
            this.data.slider_id = this.$route.query.id;
            this.page_title = "Slider Details Create";
        }

        this.get_sorting("SliderDetails");
        this.getSliderHeightWidth(this.$route.query.id);
    },

    validators: {
        "data.slider_id": function (value = null) {
            return Validator.value(value).required("Slider is required");
        },
        "data.has_button": function (value = null) {
            const vm = this;
            return Validator.value(value).custom(function (value) {
                if (
                    vm.data.has_button === "Yes" &&
                    vm.data.button_type === ""
                ) {
                    vm.$toast("Button type is required", "warning");
                }
            });
        },
        "data.button_type": function (value = null) {
            const vm = this;
            return Validator.value(value).custom(function (value) {
                if (
                    vm.data.has_button === "Yes" &&
                    vm.data.button_type === ""
                ) {
                    vm.$toast("Button type is required", "warning");
                }
            });
        },
        "data.button_name": function (value = null) {
            const vm = this;
            return Validator.value(value).custom(function (value) {
                if (
                    vm.data.button_name === "" &&
                    vm.data.has_button === "Yes"
                ) {
                    vm.$toast("Button name is required", "warning");
                }
            });
        },
        "data.url": function (value = null) {
            const vm = this;
            return Validator.value(value)
                .url()
                .custom(function (value) {
                    if (vm.data.has_button !== "No" && vm.data.url == "") {
                        vm.$toast("URL is required", "warning");
                    }
                });
        },
        "data.original_image": function (value = null) {
            return Validator.value(value).required("Image is required");
        },
        "data.status": function (value = null) {
            return Validator.value(value).required("Status width is required");
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
