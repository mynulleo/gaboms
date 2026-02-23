<template>
    <div>
        <div class="component_loader" :class="{ 'z-top': $root.initialLoader }"
            v-if="$root.spinner && !$root.tableSpinner">
            <div class="loader"></div>
        </div>

        <div id="list_page_wrapper" v-show="!$root.spinner || $root.tableSpinner">
            <!-- page header -->
            <div class="page_header d-flex align-items-center justify-content-between gap-4">
                <h4 class="form_card_title">
                    <slot name="title">
                        {{ $parent.page_title ?? "Page Title" }}
                    </slot>
                </h4>
                <div class="header_base_search d-none d-md-flex gap-3 align-items-center">
                    <template v-if="searchBlock">
                        <div class="input_select" v-if="fields_name">
                            <select class="form-select form-select-lg shadow-none" v-model="search_data.field_name"
                                @change="liveSearch">
                                <option v-for="(item, key) in fields_name" :value="key === 'default' ? '' : key">
                                    {{ item }}
                                </option>
                            </select>
                        </div>

                        <div class="search_box position-relative">
                            <input type="text" placeholder="Search..." v-model="search_data.value" @input="liveSearch"
                                @focus="is_focus_bg = true" @blur="is_focus_bg = false"
                                :class="{ focus_bg: is_focus_bg }" />
                            <input type="text" style="display: none;" autocomplete="off">
                            <button type="button"
                                class="search_btn position-absolute top-50 translate-middle-y bg-transparent border-0"
                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Search" v-x-tooltip>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                            </button>

                            <button v-if="search_data.value" type="button"
                                class="reset_advance_filter position-absolute border-0"
                                :class="{ reset_advance_filter_two: !$slots['search-field'] }"
                                @click="resetSearchDataAndUpdate" data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-title="Reset" v-x-tooltip>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </button>

                            <template v-if="$slots['search-field']">
                                <button type="button" class="advance_filter" data-bs-toggle="tooltip"
                                    data-bs-placement="top" data-bs-title="Advance Search" v-x-tooltip>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M6 4v4" />
                                        <path d="M6 12v8" />
                                        <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M12 4v10" />
                                        <path d="M12 18v2" />
                                        <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M18 4v1" />
                                        <path d="M18 9v11" />
                                    </svg>
                                </button>
                                <div class="advance_search_result">
                                    <form @submit.prevent="search">
                                        <div class="row g-3">
                                            <slot name="search-field"></slot>

                                            <StatusDropDown v-if="show_status"></StatusDropDown>

                                            <div class="col-lg-12">
                                                <button type="submit"
                                                    class="theme_btn rounded-2 w-100 advance_search_btn">
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
                <!-- help information sidebar -->
                <button class="help_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help"
                    v-x-tooltip>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-help">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 17l0 .01" />
                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                    </svg>
                </button>
                <div class="right_page_header">
                    <slot name="button" v-if="button">
                        <AddOrBackButton :route="model + '.create'" :portion="model" :icon="'plus'" />
                    </slot>
                </div>
            </div>
            <!-- help information sidebar -->
            <div class="help_overlay"></div>
            <div class="help_info_sidebar position-fixed">
                <div class="help_info_sidebar_content p-4">
                    <h3 class="help_title d-flex align-items-center gap-3">
                        <img width="30" :src="helpInfoIcon()" alt=""> Help
                    </h3>
                    <div class="information_box" v-if="$root.helpInfo.description">
                        <h5 class="top-title"><img width="30" :src="bookImage()" alt="">{{ $parent.page_title }}</h5>
                        <div v-html="$root.helpInfo.description"></div>
                    </div>
                    <p v-else class="text-danger fw-medium no_help_info fs-5">
                        <img width="70" :src="noInfoFound()" alt="">
                        <span class="d-block mt-3">No Help Info Found !!</span>
                    </p>
                </div>
            </div>

            <table class="table table_loader_only" v-if="$root.tableSpinner">
                <tbody>
                    <tr>
                        <td>
                            <div class="table_loader">
                                <div class="loader"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <template v-else>
                <!-- default -->

                <slot name="table-list"></slot>

                <!-- base-table -->
                <base-table v-if="defaultTable"></base-table>
                <slot name="summary-page"></slot>
                <!-- base pagination -->
                <Pagination />
            </template>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    props: {
        show_status: {
            type: Boolean,
            default: true,
        },
        defaultTable: {
            type: Boolean,
            default: true,
        },
        button: {
            type: Boolean,
            default: true,
        },
        searchBlock: {
            type: Boolean,
            default: true,
        },
        default_search: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            is_focus_bg: false,
            old_search_field_name: this.search_data.field_name,
            old_search_field_value: this.search_data.value,
        }
    },

    inject: {
        search_data: {
            from: "search_data",
            default: () => ({}),
        },

        model: {
            from: "model",
            default: "",
        },

        search: {
            from: "search",
            default: () => () => { },
        },

        fields_name: {
            from: "fields_name",
            default: "",
        },

        resetSearchData: {
            from: "resetSearchData",
            default: () =>
                function () {
                    this.search_data.pagination = 10;
                    this.search_data.page = 1;
                    this.search_data.field_name = "";
                    this.search_data.value = "";
                    this.search_data.status = "";
                },
        },
    },

    methods: {
        liveSearch: _.debounce(function (event) {
            if (!this.old_search_field_value) {
                this.old_search_field_value = this.search_data.value;
            }

            if (!this.old_search_field_name) {
                this.old_search_field_name = this.search_data.field_name;
            }

            if (this.old_search_field_name && this.old_search_field_value) {
                this.old_search_field_name = this.search_data.field_name;
                this.old_search_field_value = this.search_data.value;
                this.$root.tableSpinner = true;
                this.search();
            }

            this.old_search_field_name = this.search_data.field_name;
            this.old_search_field_value = this.search_data.value;
        }, 1000),

        updateQueryParams() {
            this.$router.push({
                query: this.search_data,
            });

            this.search();
        },

        resetSearchDataAndUpdate() {
            this.search_data.value = "";
            this.$root.tableSpinner = true;
            this.updateQueryParams();
        },
    },

    created() {
        const pageType = "index";
        this.getHelpInfos(this.ucfirst(this.$parent.model), pageType);
    },
};
</script>
