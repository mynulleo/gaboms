<template>
    <create-form @onSubmit="submit">

        <Input v-model="data.title" field="data.title" title="Title" placeholder="Home page slider"
            col="8 col-xl-6 col-xxl-6" :req="true" />

        <v-select-container title="Position" field="data.position" class="4 col-xl-3">
            <select v-model="data.position" class="form-select shadow-none" aria-label="Default select example"
                required>
                <template v-for="(position, index) in sliderPosition" :key="index">
                    <option value="" v-if="index === 0">-- Select --</option>
                    <option :value="position">
                        {{ position }}
                    </option>
                </template>
            </select>
        </v-select-container>

        <!-- <Select title="Position" :req="true" field="data.position" col="4 col-xl-3 col-xxl-4" v-model="data.position"
            :options="sliderPosition" placeholder="--Select Any--" :closeOnSelect="true" :require="true">
            <template v-for="(position, index) in sliderPosition" :key="index">
                <option value="" v-if="index === 0">-- Select --</option>
                <option :value="position">
                    {{ position }}
                </option>
            </template>
        </Select> -->

        <!-- <Select title="Position" :req="true" field="data.position" col="4 col-xl-3 col-xxl-4" v-model="data.position"
            :reduce="(obj) => obj.id" :options="sliderPosition" placeholder="--Select Any--" :closeOnSelect="true"
            :require="true" /> -->

        <Input type="number" v-model="data.width" field="data.width" title="Image width (pixel)" placeholder="ex: 1028"
            class="4 col-xl-3" :req="true" />

        <Input type="number" v-model="data.height" field="data.height" title="Image height (pixel)"
            placeholder="ex: 720" class="4 col-xl-3" :req="true" />

        <Input type="number" title="Max (Number of Images)" field="data.max_image" v-model="data.max_image"
            class="4 col-xl-3" :req="true" col="4 col-xl-3" />

        <Input type="number" title="Sorting" placeholder="ex: 10" field="data.sorting" v-model="data.sorting"
            :req="true" col="4 col-xl-3" />

        <Switch v-model="data.status" on-label="Active" off-label="Deactive" :req="true"></Switch>
    </create-form>
</template>

<script>
const model = "slider";
import Editor from "../../../../../components/Form/CKEditor";

export default {
    components: { Editor },

    data() {
        return {
            page_title: "",
            model: model,
            data: { status: "active" },
            image: { slider: "" },
            positions: [],
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

                    if (this.data.id) {
                        this.update(this.model, this.data, this.data.slug);
                    } else {
                        this.store(this.model, this.data);
                    }
                }
            });
        },
    },
    created() {
        if (this.$route.params.id) {
            // this.setBreadcrumbs(this.model, "edit");
            this.get_data(`${this.model}/${this.$route.params.id}`);
            this.page_title = "Slider Edit";

        } else {
            // this.setBreadcrumbs(this.model, "create");
            this.get_sorting("Website-Gallery-Slider");
            this.page_title = "Slider Create";

        }
    },
    validators: {
        "data.title": function (value = null) {
            return Validator.value(value).required("Title is required");
        },
        "data.position": function (value = null) {
            return Validator.value(value).required("Position is required");
        },
        "data.height": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Image heigt is required");
        },
        "data.width": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Image width is required");
        },
        "data.max_image": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Max image file is required");
        },
        "data.sorting": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Sorting is required");
        },
        "data.status": function (value = null) {
            return Validator.value(value).required("Status is required");
        },
    },
};
</script>
