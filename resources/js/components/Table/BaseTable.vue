<template>
    <div>
        <!-- pagination and action btn -->
        <div class="pagination_action d-none d-md-block">
            <div class="row">
                <div class="col-md-6">
                    <div class="top_pagination d-flex gap-4 align-items-center">
                        <div class="pagination">
                            <p>
                                <span>{{ safeNumber(table.meta.from) }}</span> -
                                <span>{{ safeNumber(table.meta.to) }}</span> of
                                <span>{{ safeNumber(table.meta.total) }}</span>
                            </p>
                        </div>
                        <div class="show_item d-flex align-items-center gap-3 ms-3">
                            <h4 class="sh">Show</h4>
                            <select class="form-select form-select-lg shadow-none" v-model="search_data.pagination"
                                @change="() => {
                                    $root.tableSpinner = true;
                                    updateQueryParams();
                                }">
                                <option value="10">10</option>
                                <option value="20" :disabled="isDisableShowOption(10)">20</option>
                                <option value="40" :disabled="isDisableShowOption(20)">40</option>
                                <option value="80" :disabled="isDisableShowOption(40)">80</option>
                                <option value="100" :disabled="isDisableShowOption(80)">100</option>
                                <option value="200" :disabled="isDisableShowOption(100)">200</option>
                                <option value="500" :disabled="isDisableShowOption(200)">500</option>
                                <option value="99999999">All</option>
                            </select>
                        </div>
                        <div class="prev_next_btn">
                            <button class="btns bg-transparent border-0" @click="goPrevAndNext(-1)"
                                :class="back_prev_page_class" data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-title="Previous" v-x-tooltip>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 6l-6 6l6 6" />
                                </svg>
                            </button>
                            <button class="btns bg-transparent border-0" @click="goPrevAndNext(1)"
                                :class="go_next_page_class" data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-title="Next" v-x-tooltip>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 6l6 6l-6 6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="d-flex gap-3 align-items-center justify-content-end">
                        <div class="print_action text-end">
                            <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Print"
                                v-x-tooltip @click="print('printArea', model)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-printer">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
                                    <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
                                    <path
                                        d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
                                </svg>
                            </button>

                            <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Excel"
                                v-x-tooltip>
                                <download-excel :title="ucfirst(model)" v-if="table.datas" :data="table.datas"
                                    :fields="json_fields" :name="model + '.xls'">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-file-excel">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                        <path
                                            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                                        <path d="M10 12l4 5" />
                                        <path d="M10 17l4 -5" />
                                    </svg>
                                </download-excel>
                            </button>

                            <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="PDF"
                                @click="generatePdf" v-x-tooltip>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                                    <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                                    <path d="M17 18h2" />
                                    <path d="M20 15h-3v6" />
                                    <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- base table list -->
        <div class="base_table_list">
            <div id="printArea" class="table-responsive text-nowrap table-basic table_wrapper">
                <table id="pdf-table" class="table">
                    <thead>
                        <tr class="tr_stick">
                            <!-- <th class="check">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                </div>
                            </th> -->

                            <th class="sl" style="min-width: 70px">
                                <span class="heading"> SL </span>
                            </th>

                            <slot name="columns">
                                <th v-for="(column, index) in table.columns" :key="'a' + index"
                                    @click="sort(column.field, column.enable_data_sorting)"
                                    :style="'text-align:' + column.align">
                                    <!-- :style="'text-align:' + column.align +'; min-width: 70px'" -->
                                    <span class="heading">
                                        {{ column.title.replaceAll("_", " ") }}
                                        <img v-if="column.enable_data_sorting == null || column.enable_data_sorting === true"
                                            class="icon-up" :src="`${$root.asset_url}/images/icon-up.png`"
                                            alt="icon-up" />
                                    </span>
                                </th>

                                <th class="action_th" v-if="
                                    Object.keys(table.routes).length > 0 &&
                                    ($root.checkPermission(
                                        table.routes.view
                                    ) ||
                                        $root.checkPermission(
                                            table.routes.edit
                                        ) ||
                                        $root.checkPermission(
                                            table.routes.destroy
                                        ))
                                " :class="table.routes.array
                                    ? 'action-extra'
                                    : 'action'
                                    "></th>
                            </slot>
                        </tr>
                    </thead>
                    <tbody v-if="Object.keys(table.datas).length > 0">
                        <tr v-for="(item, index) in table.datas" :key="index" class="td_track change_sorting" :class="'change_sorting' +
                            item.sorting +
                            ' update_item' +
                            item.id
                            " :title="item.is_delete ? 'Deleted Row' : ''"
                            :style="{ background: item.is_delete ? 'red' : '' }">
                            <td v-if="table.meta" @click="pushToViewRoute(item.id)">
                                {{ table.meta.from + index }}
                            </td>
                            <td v-else @click="pushToViewRoute(item.id)">
                                {{ index + 1 }}
                            </td>

                            <slot v-for="(column, index) in table.columns" :name="column.field" :item="item">
                                <td :key="'b' + index" v-if="hasValue(item, column.field)" @click="
                                    pushToViewRoute(item.id, column.sorting)
                                    " :style="'text-align:' + column.align">
                                    <!-- :style="'text-align:' + column.align" -->
                                    <span v-if="column.date">
                                        {{
                                            $filter.enFormat(
                                                itemValue(item, column.field) ?? 'N/A'
                                            )
                                        }}
                                    </span>
                                    <span v-else-if="column.array" data-bs-toggle="tooltip" data-bs-placement="top"
                                        :data-bs-title="`${column.array_value[0][
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            )
                                        ] ?? ''
                                            }`" v-x-tooltip="safeStringLength(
                                                column.array_value[0][
                                                itemValue(
                                                    item,
                                                    column.field,
                                                    column.subfield
                                                )
                                                ]
                                            ) >= tooltipLength
                                                ">
                                        {{
                                            limitString(
                                                column.array_value[0][
                                                itemValue(
                                                    item,
                                                    column.field,
                                                    column.subfield
                                                )
                                                ],
                                                tooltipLength
                                            ) ?? 'N/A'
                                        }}
                                    </span>
                                    <slot v-else-if="column.sorting">
                                        <div class="table_sorting_number" :class="{
                                            'mx-auto':
                                                column.align === 'center',
                                        }">
                                            <i v-if="item.id == sorting_spin"
                                                class="fa fa-spinner fa-spin mt-2 ml-2 text-primary"></i>
                                            <template v-else>
                                                <input @keyup.enter="
                                                    tableSorting(
                                                        $event.target.value,
                                                        item.id,
                                                        column.namespace,
                                                        column.auto
                                                    )
                                                    " @change="
                                                        tableSorting(
                                                            $event.target.value,
                                                            item.id,
                                                            column.namespace,
                                                            column.auto
                                                        )
                                                        " :data-item="item.id" min="0" v-model="item[column.field]"
                                                    type="number" :id="item.id" />

                                            </template>
                                        </div>

                                    </slot>
                                    <template v-else-if="column.image">
                                        <img v-if="itemValue(item, column.field) === 'no_server_image'"
                                            :src="emptyServerImage50()"
                                            :style="'width:' + column.imgWidth + ';height:' + column.height" />

                                        <img v-else :src="itemValue(item, column.field) ?? emptyImage50()"
                                            :href="itemValue(item, column.zoom_field ?? column.field)"
                                            v-x-zoom-image="itemValue(item, column.field) && itemValue(item, column.zoom_field ?? column.field) ? true : false"
                                            :style="'width:' + column.imgWidth + ';height:' + column.height" />

                                        <img :src="itemValue(item, column.zoom_field ?? column.field)" class="d-none" />
                                    </template>

                                    <a :href="itemValue(item, column.field)" v-else-if="
                                        column.pdf &&
                                        itemValue(item, column.field)
                                    " target="__blank">
                                        <img :src="$root.asset_url +
                                            '/images/pdf.png'
                                            " :style="'width:' +
                                                column.imgWidth +
                                                ';height:' +
                                                column.height
                                                " />
                                    </a>
                                    <template v-else-if="column.html">
                                        <span v-html="column.subfield ? itemValue(item, column.field, column.subfield) : itemValue(item, column.field)
                                            "></span>
                                    </template>
                                    <span v-else-if="column.field == 'status'">
                                        <span class="status approved" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'active' ||
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 1
                                        ">ACTIVE</span>
                                        <span class="status pending" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'draft' ||
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 0
                                        ">DRAFT</span>
                                        <span class="status cancel" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'deactive' ||
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 0
                                        ">DEACTIVE</span>
                                        <span class="status pending" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'ur'
                                        ">UNREAD</span>
                                        <span class="status approved" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'r'
                                        ">READ</span>
                                        <span class="status cancel" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'restored'
                                        ">RESTORED</span>
                                        <span class="status pending" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'pending'
                                        ">PENDING</span>
                                        <span class="status approved" v-if="
                                            itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) == 'success'
                                        ">SUCCESS</span>
                                    </span>
                                    <template v-else>
                                        <span v-if="column.to">
                                            <router-link v-if="column.slug" :to="{
                                                name: column.to,
                                                params: { slug: item.slug },
                                            }" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="`${itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) ?? ''
                                                }`" v-x-tooltip="safeStringLength(
                                                    itemValue(
                                                        item,
                                                        column.field,
                                                        column.subfield
                                                    )
                                                ) >= tooltipLength
                                                    ">{{
                                                            limitString(
                                                                itemValue(
                                                                    item,
                                                                    column.field,
                                                                    column.subfield
                                                                ),
                                                                tooltipLength
                                                            )
                                                        }}</router-link>
                                            <router-link v-else :to="{
                                                name: column.to,
                                            }" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="`${itemValue(
                                                item,
                                                column.field,
                                                column.subfield
                                            ) ?? ''
                                                }`" v-x-tooltip="safeStringLength(
                                                    itemValue(
                                                        item,
                                                        column.field,
                                                        column.subfield
                                                    )
                                                ) >= tooltipLength
                                                    ">{{
                                                            limitString(
                                                                itemValue(
                                                                    item,
                                                                    column.field,
                                                                    column.subfield
                                                                ),
                                                                tooltipLength
                                                            )
                                                        }}</router-link>
                                        </span>
                                        <span v-else data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="`${itemValue(
                                            item,
                                            column.field,
                                            column.subfield
                                        ) ?? ''
                                            }`" v-x-tooltip="safeStringLength(
                                                itemValue(
                                                    item,
                                                    column.field,
                                                    column.subfield
                                                )
                                            ) >= tooltipLength
                                                ">
                                            {{
                                                limitString(
                                                    itemValue(
                                                        item,
                                                        column.field,
                                                        column.subfield
                                                    ),
                                                    tooltipLength
                                                ) ?? 'N/A'
                                            }}
                                        </span>
                                    </template>
                                </td>
                            </slot>

                            <td class="action_td" :class="table.routes.array ? 'action-extra' : 'action'">
                                <div class="actions position-relative">
                                    <XBaseTableActionRoutes :key="`table_action_${index}`" :tableRoutes="table.routes"
                                        :item="item" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td :colspan="Object.keys(table.columns).length + 2"
                                style="text-align: center; background: #fff">
                                <p class="p-2 text-center text-red no-data">
                                    No data found.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-black" id="deleteModalLabel">
                            Are you sure want to
                            {{ is_delete ? "return back" : "delete" }} this?
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6 class="mb-3 text-black">
                            Please confirm your login password
                        </h6>
                        <div class="d-flex justify-content-center mb-3">
                            <input v-model="delete_password" type="password" placeholder="********"
                                class="form-control form-control-sm text-center border" />
                        </div>
                        <div class="d-flex justify-content-center">
                            <button @click="deleteConfirm()" type="button" class="theme_btn rounded-2 w-100"
                                :disabled="$root.submit">
                                <span v-if="$root.submit">
                                    <i class="fa fa-spinner fa-spin"></i>
                                    processing...
                                </span>
                                <template v-else>
                                    <span v-if="is_delete">Return Back</span>
                                    <span v-else> Confirm </span>
                                </template>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import XBaseTableActionRoutes from "./XBaseTableActionRoutes.vue";

export default {
    components: { XBaseTableActionRoutes },
    data() {
        return {
            order: "asc",
            coloumSort: "",
            sorting_spin: false,
            delete_password: null,
            table_sorting_id: "",
            is_delete: null,
            go_next_page_class: "",
            back_prev_page_class: "",
            tooltipLength: 40,
            deleted_id: null,
            deleted_item: null,
            delete_password: null,
            is_delete: null,
        };
    },

    inject: {
        table: {
            from: "table",
            default: () => ({}),
        },

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

        json_fields: {
            from: "json_fields",
            default: () => ({}),
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

        customDestroyData: {
            from: "customDestroyData",
            default: null,
        },

        customPdfUrl: {
            from: "customPdfUrl",
            default: null,
        }
    },

    watch: {
        "table.datas"() {
            this.prevAndNextPageButtonClass();
        },

        $route(toRoute, fromRoute) {
            if (
                toRoute.path === fromRoute.path &&
                Object.keys(toRoute.query).length === 0
            ) {
                this.resetSearchData();
                this.updateQueryParams();
            }
        },
    },

    methods: {
        isDisableShowOption(prevOptionValue) {
            return !(this.safeNumber(this.table.meta?.total) > prevOptionValue);
        },

        pushToViewRoute(id, isStop = false) {
            // if (
            //     !isStop &&
            //     this.table.routes.view &&
            //     this.$root.checkPermission(this.table.routes.view)
            // ) {
            //     this.$router.push({
            //         name: this.table.routes.view,
            //         params: { id: id },
            //         query: {
            //             page: this.$route.query.page,
            //         },
            //     });
            // }
        },

        hasValue(item, column) {
            return item[column.toLowerCase()] !== "undefined";
        },
        itemValue(item, column, child = "") {
            var value = item[column.toLowerCase()];

            if (child) {
                let obj = item;
                value = String(child)
                    .split(".")
                    .reduce((p, c) => p[c] ?? "", obj);
            }
            return value;
        },
        destroy(item, is_delete) {
            this.deleted_item = item;
            this.deleted_id = item.id;
            this.is_delete = is_delete;
            $("#deleteModal").modal("show");
        },
        setModal(id, htmlid) {
            localStorage.setItem("model_id", id);
            $("#" + htmlid).modal("show");
        },
        deleteConfirm() {
            if (!this.delete_password) {
                this.$toast("Password field is required", "error");
                return false;
            }
            let data = {
                for_delete: true,
                id: this.user.id,
                old_password: this.delete_password,
            };
            this.$root.submit = true;
            axios
                .post("/check-old-password", data)
                .then((res) => {
                    if (res.data) {
                        this.search_data.is_delete = this.is_delete;

                        if (this.customDestroyData) {
                            this.customDestroyData(this.deleted_item);
                        } else {
                            this.destroy_data(this.model, this.deleted_id, this.search_data);
                        }

                        this.deleted_item = null;
                        this.deleted_id = "";
                        this.delete_password = "";

                        $("#deleteModal").modal("hide");
                    } else {
                        this.$toast("Password does not match", "error");
                        return false;
                    }
                })
                .finally((res) => (this.$root.submit = false));
        },
        tableSortingByButton(id, sorting = null, model) {
            let value = 1;

            if (this.isEmpty(sorting)) {
                let input = $(`input[data-item="${id}"]`);
                value = input.val();
                console.log(value);
            }

            $(".change_sorting").removeClass("sorting-success");
            this.sorting_spin = id;

            let data = { number: value, id: id, model: model };

            axios
                .get("table-sorting", { params: data })
                .then((res) => {
                    this.get_paginate(this.model, this.search_data);
                })
                .catch((error) => console.log(error))
                .then((alw) => {
                    this.sorting_spin = "";
                });

            setTimeout(
                () => $(".change_sorting").removeClass("sorting-success"),
                5000
            );
        },
        tableSorting(number, id, model, auto) {
            console.log(number, id, model, auto);

            $(".change_sorting").removeClass("sorting-success");
            this.sorting_spin = id;
            let data = { number: number, id: id, model: model, auto: auto };
            axios
                .get("table-sorting", { params: data })
                .then((res) => { })
                .catch((error) => console.log(error))
                .then((alw) => {
                    this.sorting_spin = "";
                    $(".change_sorting" + number).addClass("sorting-success");
                });

            setTimeout(
                () => $(".change_sorting").removeClass("sorting-success"),
                5000
            );
        },

        sort(field, enableDataSorting = true) {
            if (enableDataSorting === true) {
                this.coloumSort = field;
                this.table.datas.sort(this.sortBy(field));
            }
        },

        sortBy(property) {
            if (this.order === "desc") {
                this.order = "asc";
            } else {
                this.order = "desc";
            }
            const order = this.order;
            return function (a, b) {
                const varA =
                    typeof a[property] === "string"
                        ? a[property].toUpperCase()
                        : a[property];
                const varB =
                    typeof b[property] === "string"
                        ? b[property].toUpperCase()
                        : b[property];

                let comparison = 0;
                if (varA > varB) comparison = 1;
                else if (varA < varB) comparison = -1;
                return order === "desc" ? comparison * -1 : comparison;
            };
        },
        generatePdf() {
            if (this.customPdfUrl) {
                window.open(this.customPdfUrl, "_blank");
                return false;
            }

            const doc = new jsPDF();
            $(".action").css("display", "none");
            doc.setFontSize(10);
            doc.text(new Date().toISOString().slice(0, 10), 185, 12, "center");

            doc.setFontSize(16);
            const title = `${this.ucfirst(
                process.env.MIX_VUE_APP_NAME
            )} ${this.ucfirst(this.model)}`;
            doc.text(title, 100, 12, "center");
            console.log(doc);

            autoTable(doc, { html: "#pdf-table" });
            doc.save(this.model + ".pdf");
            setTimeout(() => $(".action").show(), 300);
        },
        goToView(id) {
            this.$router.push({
                name: this.model + ".show",
                params: { id: id },
            });
        },

        goPrevAndNext(pageValue = 1) {
            const currentPage = this.table.meta.current_page;
            const lastPage = this.table.meta.last_page;

            const goToPage = currentPage + pageValue;

            if (
                goToPage > 0 &&
                goToPage != currentPage &&
                goToPage <= lastPage
            ) {
                this.search_data.page = goToPage;
                this.$router.push({
                    name: this.model + ".index",
                    query: this.search_data,
                });

                this.$root.tableSpinner = true;
                axios
                    .get(`${laravel.baseurl}/admin/${this.model}`, {
                        params: this.search_data,
                    })
                    .then((res) => {
                        this.table.datas = res.data.data;
                        this.table.meta = res.data.meta;
                        this.table.links = res.data.links;
                        setTimeout(
                            () => (this.$root.tableSpinner = false),
                            200
                        );
                    })
                    .catch((error) =>
                        setTimeout(() => (this.$root.tableSpinner = false), 200)
                    );
            }
        },

        prevAndNextPageButtonClass() {
            if (this.table.meta.last_page === 1) {
                this.go_next_page_class = "";
                this.back_prev_page_class = "";
            } else if (this.table.meta.current_page === 1) {
                this.go_next_page_class = "active";
                this.back_prev_page_class = "";
            } else if (
                this.table.meta.current_page === this.table.meta.last_page
            ) {
                this.go_next_page_class = "";
                this.back_prev_page_class = "active";
            } else {
                this.go_next_page_class = "active";
                this.back_prev_page_class = "active";
            }
        },

        updateQueryParams() {
            this.$router.push({
                query: this.search_data,
            });

            this.search();
        },

        enableFreezeTable() {
            $(".table_wrapper").freezeTable({
                freezeColumn: false,
                scrollBar: true,
                headWrapStyles: {
                    top: "62px",
                },
                fixedNavbarHeight: 62,
            });

            if ($('#list_page_wrapper').is(':hidden')) {
                setTimeout(() => {
                    this.enableFreezeTable();
                }, 500);
            }
        },
    },

    created() {
        this.prevAndNextPageButtonClass();
    },

    mounted() {
        require("./../../assets/admin/js/freeze-table");
        this.enableFreezeTable();
    },

    updated() {
        this.enableFreezeTable();
    },

    beforeUnmount() {
        $(".table_wrapper").freezeTable("destroy");
    },
};
</script>
