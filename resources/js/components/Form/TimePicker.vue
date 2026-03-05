<template>
    <div :class="`col-md-${col}`">
        <div class="form-group">
            <label v-if="!simple" :for="id ?? `input-${uuid}`"
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

            <div class="x_time_picker input-group position-relative">
                <VueTimepicker v-if="editPage" v-model="time" format="hh:mm A" :placeholder="placeholder ?? 'hh:mm A'"
                    :ref="id ?? `input-${uuid}`" :id="id ?? `input-${uuid}`" :name="name ?? fieldName"
                    :inputClass="{ 'form-control': true, error: has_error }" :disabled="disabled" />
                <VueTimepicker v-else v-model="time" format="hh:mm A" :placeholder="placeholder ?? 'hh:mm A'"
                    :ref="id ?? `input-${uuid}`" :id="id ?? `input-${uuid}`" :name="name ?? fieldName"
                    :inputClass="{ 'form-control': true, error: has_error }" :disabled="disabled" />
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import VueTimepicker from 'vue3-timepicker';
import 'vue3-timepicker/dist/VueTimepicker.css';
import moment from 'moment';

export default {
    components: {
        VueTimepicker,
    },
    data() {
        return {
            has_error: false,
            error_message: "",
            uuid: uuidv4(),
            time: {
                hh: "",
                mm: "",
                A: "",
            },
            editPage: 0,
        };
    },

    props: {
        id: { type: String },
        modelValue: { type: String, default: "" },
        title: { type: String, default: "" },
        field: { type: String },
        col: { type: [String, Number], default: "6" },
        req: { type: Boolean, default: false },
        required: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        placeholder: { type: String, default: "Select Time" },
        name: { type: String, default: "" },
        simple: { type: Boolean, default: false },
    },

    inject: ["validate"],

    watch: {
        value: {
            immediate: true,
            handler() {
                if (this.disabled) {
                    return this.$emit("update:modelValue", "");
                }
            },
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

        time: {
            handler() {
                if (this.time.hh && this.time.mm && this.time.A) {
                    this.$emit("update:modelValue", moment(`${this.time.hh}:${this.time.mm} ${this.time.A}`, "hh:mm A").format("HH:mm:ss"));
                } else {
                    this.$emit("update:modelValue", "");
                }
            },
            deep: true,
        },

        modelValue: {
            handler() {
                if (this.editPage == 0 && this.modelValue) {
                    this.updateTime();
                    this.editPage = 1;
                }
            },
            once: true,
        },
    },

    computed: {
        fieldName() {
            return this.field.split(".").pop();
        },
    },

    methods: {
        updateTime() {
            const time = moment(this.modelValue, "HH:mm:ss");
            this.time.hh = time.format("hh"); // 12-hour format
            this.time.mm = time.format("mm"); // Minutes
            this.time.A = time.format("A"); // Uppercase AM/PM
            this.editPage = 1;
        }
    },

    mounted() {
        if (this.modelValue) {
            this.updateTime();
            this.editPage = 1;
        }

    },
};
</script>
