<template>
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

    <div :class="getClass()" class="col-sm-6 col-lg-4 col-xxl-3">
        <div class="form-element mt-5">
            <label for="" class="d-block w-100" v-if="tooltip">
                <slot name="title"> {{ title.replaceAll("_", " ") }} </slot>
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
                        :title="
                            `Please Put ` + title.replaceAll('_', ' ') + ` Here`
                        "
                        ref="info"
                    ></i>
                </span>
            </label>
            <input
                type="text"
                @input="updateModel($event)"
                @blur="updateModel($event)"
                :value="modelValue"
                :class="errorClass()"
                :placeholder="
                    placeholder ? placeholder : title.replaceAll('_', ' ')
                "
                :disabled="disabled"
                :readonly="readonly"
                :name="fieldName"
            />
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
        col: {
            type: String,
        },
        req: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        tooltip: {
            type: Boolean,
            default: true,
        },
    },

    inject: ["validate"],

    computed: {
        fieldName() {
            return this.field.split(".").pop();
        },
        ...mapState("country", ["countries"]),
    },
    data() {
        return {
            data: {},
            modules: [
                { name: "Notice", value: "notice" },
                { name: "Events", value: "events" },
                { name: "News", value: "news" },
            ],
        };
    },
    methods: {
        updateModel(event) {
            this.$emit("update:modelValue", event.target.value);
        },

        a() {
            console.log(this.modelValue);
        },
        getClass() {
            let col = this.col ? this.col : 3;
            let className = "col-lg-" + col + " ";
            return className;
        },
        getIcon(error = null) {
            let errorStatus = this.validate.hasError(this.field);
            if (errorStatus && this.req) {
                return "position-absolute bg-danger text-white floating-tooltip text-center";
            } else if (error === "Invalid url." || error === "Invalid url") {
                return "position-absolute bg-danger text-white floating-tooltip text-center";
            } else if (this.modelValue) {
                return "fas fa-circle-check text-success";
            }
        },
        errorClass() {
            let className = "form-control form-control-sm shadow-none ";
            if (this.req) {
                if (this.validate.hasError(this.field)) {
                    className += "border-danger";
                } else if (this.modelValue) {
                    className += "border-success";
                }
            }
            return className;
        },
    },

    created() {
        this.$store.dispatch("country/getCountry");
    },
};
</script>
