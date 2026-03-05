<template>
    <div :class="`col-md-${col}`">
        <div class="form-group">
            <label
                :for="id ?? `input-${uuid}`"
                class="form-label d-flex justify-content-between align-items-center gap-4"
            >
                <div class="lft">
                    <slot name="title"> {{ title }} </slot>
                    <sup v-if="req || required" class="text-danger ms-1">*</sup>
                    <!-- icon error -->
                    <span class="icon_error" v-if="has_error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="icon icon-tabler icons-tabler-filled icon-tabler-help-octagon"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.897 14a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z"
                            />
                        </svg>
                        <span class="error_info active_error_info">
                            {{ error_message }}
                        </span>
                    </span>
                </div>
            </label>
            <div class="input-group position-relative">
                <!-- add error class for border red -->
                <input
                    :ref="id ?? `input-${uuid}`"
                    :id="id ?? `input-${uuid}`"
                    type="text"
                    :name="name"
                    :value="modelValue"
                    readonly
                    :disabled="disabled"
                    :placeholder="placeholder.replaceAll('_', ' ')"
                    :class="{ error: has_error }"
                    class="form-control date-input bg-transparent"
                    autocomplete="off"
                    @click.prevent="disableScroll()"
                    @blur="$emit('update:modelValue', modelValue)"
                    :field="field"
                />

                <!-- Remove date value button -->
                <button
                    v-if="modelValue"
                    @click="$emit('update:modelValue', '')"
                    style="right: 10px"
                    type="button"
                    class="bg-transparent border-0 position-absolute top-50 translate-middle-y"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import "../../assets/datepicker/jquery-ui.css";
import "../../assets/datepicker/jquery-ui.js";
import moment from 'moment';

export default {
    data() {
        return {
            has_error: false,
            error_message: "",
            uuid: uuidv4(),
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
        dateFormat: { type: String, default: "d MM, yy" },
        changeMonth: { type: Boolean, default: true },
        changeYear: { type: Boolean, default: true },
        yearRange: { type: String, default: "-100:+5" },
        placeholder: { type: String, default: "Select Date" },
        name: { type: String, default: "" },
        successBorder: { type: Boolean, default: true },
        disableFutureDates: { type: Boolean, default: false },
        disableMaxDate: { type: Number, default: 0 },
        disablePastDates: { type: Boolean, default: false },
        disableMinDate: { type: Number, default: 0 },

        // disableToDates: { type: [String, Date], default: moment().format("DD MMMM, YYYY") },
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

        disablePastDates() {
            console.log("disbale past date");
            $(function () {
                console.log("disbale past date done");
                if (this.disablePastDates) {
                    console.log($(`#${this.id}`));
                    const minDate = this.disableMinDate;
                    $(`#${this.id}`).datepicker({ minDate: minDate });
                }
            });
        },

        disableToDates() {
            console.log("disableToDates changed:", this.disableToDates);
            this.setDatepickerOptions();
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

    mounted() {
        this.setDatepickerOptions();

        $(() => {
            const datePickerOptions = {
                showOn: "both",
                dateFormat: this.dateFormat,
                changeMonth: this.changeMonth,
                changeYear: this.changeYear,
                yearRange: this.yearRange,
                onSelect: (date) => this.$emit("update:modelValue", date),
            };

            if (this.disableFutureDates) {
                datePickerOptions.maxDate = this.disableMaxDate;
            }

            if (this.disablePastDates) {
                datePickerOptions.minDate = this.disableMinDate;
            }

            $(`#${this.id}`).datepicker(datePickerOptions);
        });
    },

    methods: {
        setDatepickerOptions() {
            $(() => {
                const datePickerOptions = {
                    showOn: "both",
                    dateFormat: this.dateFormat,
                    changeMonth: this.changeMonth,
                    changeYear: this.changeYear,
                    yearRange: this.yearRange,
                    onSelect: (date) => this.$emit("update:modelValue", date),
                };
                if (this.disableFutureDates) {
                    datePickerOptions.maxDate = this.disableMaxDate;
                }
                if (this.disablePastDates) {
                    datePickerOptions.minDate = this.disableMinDate;
                }
                if (this.disableToDates) {
                    datePickerOptions.minDate = this.disableToDates;
                }
                console.log(
                    "Initializing datepicker with options:",
                    datePickerOptions
                );
                $(`#${this.id}`)
                    .datepicker("destroy")
                    .datepicker(datePickerOptions);
            });
        },

        disableScroll() {
            //window.document.body.classList.add("remove-scrolling");
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
            } else if (error !== null) {
                return "position-absolute bg-danger text-white floating-tooltip text-center";
            } else if (this.modelValue) {
                return "fas fa-circle-check text-success";
            }
        },
        getErrorclass() {
            if (this.validate.firstError(this.field)) {
                return "date border-danger";
            } else if (!this.readonly) {
                return "date";
            }
        },
        isValidationError() {
            if (this.validate.hasError(this.field)) {
                return "border-color: red !important;";
            }
        },
    },
};
</script>
