<template>
    <div :class="getClass()" class="col-sm-6 col-lg-4 col-xxl-3">
        <div class="form-element">
            <label class="d-block w-100">
                <slot name="title"> {{ title.replaceAll("_", " ") }} </slot>
                <sup v-if="req" class="text-danger">*</sup>
                <span class="ms-1 position-relative">
                    <i :class="validate.firstError(this.field)
                        ? 'fa-solid fa-circle-question text-danger'
                        : ''
                        "></i>
                    <small :class="getIcon(validate.firstError(this.field))">{{
                        validate.firstError(this.field)
                        }}</small>
                </span>

                <span class="float-end">
                    <i class="fas fa-info-circle" data-bs-toggle="tooltip" data-bs-placement="left"
                        :title="`Please Put ` + title.replaceAll('_', ' ') + ` Here`" ref="info"></i>
                </span>
            </label>
            <div class="input-group position-relative">
                <input :style="isValidationError()" :ref="id" :id="id" type="text" :name="name" :value="modelValue"
                    :readonly="readonly" :disabled="disabled" :placeholder="placeholder.replaceAll('_', ' ')"
                    :class="modelValue ? 'date border-success' : getErrorclass()"
                    class="form-control form-control-sm date-input" autocomplete="off"
                    @click.prevent="disableScroll()" />
            </div>
        </div>
    </div>
</template>

<script>
import "../../assets/datepicker/jquery-ui.css";
import "../../assets/datepicker/jquery-ui.js";

export default {
    props: {
        id: { type: String },
        modelValue: { type: String, default: "" },
        title: { type: String, default: "" },
        field: { type: String },
        col: { type: [String, Number], default: "3" },
        req: { type: Boolean, default: false },
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

        disableToDates: { type: [String, Date], default: null },

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

        "disablePastDates"() {
            console.log('disbale past date')
            $(function () {
                console.log('disbale past date done')
                if (this.disablePastDates) {
                    console.log($(`#${this.id}`))
                    const minDate = this.disableMinDate;
                    $(`#${this.id}`).datepicker({ minDate: minDate });
                }
            });
        },

        disableToDates() {
            console.log("disableToDates changed:", this.disableToDates);
            this.setDatepickerOptions();
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
                console.log("Initializing datepicker with options:", datePickerOptions);
                $(`#${this.id}`).datepicker("destroy").datepicker(datePickerOptions);
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

<style scoped>
.date-input,
.date-input:disabled {
    background: rgb(233 236 239);
    opacity: 1;
}

.date {
    background: #fff;
}

.remove-scrolling {
    height: 100%;
    overflow: hidden;
}

.ui-datepicker {
    z-index: 9 !important;
}
</style>
