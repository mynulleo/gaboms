<template>
    <div>
        <div
            class="component_loader"
            :class="{ 'z-top': $root.initialLoader }"
            v-if="$root.ckeditorSpinner || $root.spinner || $root.submit"
        >
            <div class="loader"></div>
        </div>

        <div v-show="!$root.ckeditorSpinner && !$root.spinner && !$root.submit">
            <div
                class="page_header d-flex align-items-center justify-content-between gap-4"
            >
                <h4 class="form_card_title">
                    <slot name="title">
                        {{ $parent.page_title ?? "Page Title" }}
                    </slot>
                </h4>
                <div class="right_page_header">
                    <button
                        class="help_btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Help"
                        v-x-tooltip
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-help"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                            />
                            <path d="M12 17l0 .01" />
                            <path
                                d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
                            />
                        </svg>
                    </button>

                    <slot name="button">
                        <AddOrBackButton
                            v-if="button"
                            :route="$parent.model + '.index'"
                            :portion="$parent.model"
                            :icon="'fas fa-backward'"
                        />
                    </slot>
                </div>
            </div>

            <form
                v-if="!$slots.custom_form"
                @submit.prevent="emitFormSubmit"
                id="form"
                enctype="multipart/form-data"
            >
                <div class="row g-3">
                    <slot></slot>
                    <slot name="form_footer">
                        <div class="col-md-12">
                            <button
                                type="submit"
                                class="theme_btn"
                                :disabled="$root.submit"
                            >
                                <template v-if="$root.submit">
                                    <i class="fa fa-spinner fa-spin me-1"></i>
                                    Processing...
                                </template>
                                <template v-else>
                                    {{ $route.params.id ? "Update" : "Submit" }}
                                </template>
                            </button>
                        </div>
                    </slot>
                </div>
            </form>

            <slot name="custom_form"></slot>

            <!-- help information sidebar -->
            <div class="help_overlay"></div>
            <div class="help_info_sidebar position-fixed">
                <div class="help_info_sidebar_content p-4">
                    <h3 class="help_title d-flex align-items-center gap-3">
                        <img width="30" :src="helpInfoIcon()" alt="" /> Help
                    </h3>

                    <div
                        class="information_box"
                        v-if="$root.helpInfo.description"
                    >
                        <h5 class="top-title">
                            <img width="30" :src="bookImage()" alt="" />{{
                                $parent.page_title
                            }}
                        </h5>
                        <div v-html="$root.helpInfo.description"></div>
                    </div>
                    <p v-else class="text-danger fw-medium no_help_info fs-5">
                        <img width="70" :src="noInfoFound()" alt="" />
                        <span class="d-block mt-3">No Help Info Found !!</span>
                    </p>
                </div>
            </div>
            <!-- help information sidebar end -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        button: {
            type: Boolean,
            default: true,
        },
        header: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            data: {
                helpInfo: {
                    model_name: "",
                    page_type: "",
                    description: "",
                },
            },
        };
    },

    inject: ["validate"],

    methods: {
        emitFormSubmit() {
            this.$emit("onSubmit");
            this.formValidationErrorScroll(this.validate.errors);
        },
    },

    created() {
        const pageType = "create";
        this.getHelpInfos(this.ucfirst(this.$parent.model), pageType);
    },
};
</script>
