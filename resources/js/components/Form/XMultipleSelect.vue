<template>
    <div :class="`multiple_tags_input col-md-${col}`">
        <div class="form-group">
            <label
                :for="id ?? `input-${uuid}`"
                class="form-label d-flex justify-content-between align-items-center gap-4"
            >
                <div class="lft">
                    <slot name="title"> {{ title }} </slot>
                    <sup v-if="required" class="text-danger ms-1">*</sup>
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
                <div
                    :id="id ?? `input-${uuid}`"
                    class="v-select-wrapper"
                    :class="{ 'border-red': has_error }"
                    ref="vselect_wrapper"
                >
                    <v-select
                        v-model="selected_value"
                        :placeholder="placeholder"
                        taggable
                        multiple
                        no-drop
                    ></v-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
    props: {
        modelValue: {
            type: Array,
        },

        title: {
            type: String,
        },

        field: {
            type: String,
        },

        placeholder: {
            type: String,
            default: "Type and press enter.",
        },

        id: {
            type: String,
            default: null,
        },

        col: {
            type: String,
            default: "6",
        },

        required: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            has_error: false,
            error_message: "",
            uuid: uuidv4(),
            selected_value: [],
        };
    },

    inject: ["validate"],

    watch: {
        "validate.errors": {
            immediate: true,
            deep: true,
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

        selected_value() {
            this.updateModel();
        },

        modelValue(value) {
            if (this.selected_value !== value) {
                this.selected_value = value;
            }
        },
    },

    methods: {
        updateModel() {
            this.$emit("update:modelValue", this.selected_value);
        },
    },

    created() {
        if (this.modelValue) {
            this.selected_value = this.modelValue;
        }
    },

    mounted() {
        const vSelectInput =
            this.$refs.vselect_wrapper.querySelector("input.vs__search");
        if (vSelectInput) {
            // Add the blur event listener
            vSelectInput.addEventListener("blur", this.updateModel);
        }
    },

    beforeUnmount() {
        const vSelectInput =
            this.$refs.vselect_wrapper.querySelector("input.vs__search");
        if (vSelectInput) {
            // Remove the blur event listener
            vSelectInput.removeEventListener("blur", this.updateModel);
        }
    },
};
</script>
