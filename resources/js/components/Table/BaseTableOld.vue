<template>
    <div>
        <!-- ================Excel , PDF, Print Button================ -->
        <div class="sorting-data">
            <div class="row">
                <div class="col-sm-7 col-lg-6 align-self-end">
                    <div class="showing-number d-flex">
                        Showing
                        {{ table.meta.from }} to
                        <div class="form-element mb-0 ms-2 me-2">
                            <select v-model="search_data.pagination" @change="search"
                                class="form-select sort-number shadow-none" style="
                  height: 27px;
                  padding: 0px 8px !important;
                  padding-right: 24px !important;
                ">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                                <option>200</option>
                                <option>500</option>
                                <option value="999999999999999999999">All</option>
                            </select>
                        </div>
                        of
                        {{ table.meta.total }} entries
                    </div>
                </div>
                <div class="col-sm-5 col-lg-6 ms-auto">
                    <div class="row">
                        <div class="col-sm-4 col-lg-4 col-xl-4 col-xxl-3 align-self-center ms-auto">
                            <div class="form-element mb-0"></div>
                        </div>
                        <div class="col-sm-8 col-lg-5 col-xl-4 col-xxl-3 ps-0 align-self-start align-self-sm-end">
                            <div class="print-option ms-2 mt-4 ms-sm-0 mt-sm-0 text-start text-sm-end">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-title="Tooltip on top" class="printer" title="Print"
                                            href="javascript:void(0)" @click="print('printArea', model)"><i
                                                class="fas fa-print" style="color: black !important"></i></a>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-title="Tooltip on top" class="pdf" title="PDF"
                                            href="javascript:void(0)" @click="generatePdf"><i
                                                class="fa-solid fa-file-pdf" style="color: red !important"></i></a>
                                    </li>
                                    <li>
                                        <download-excel data-bs-toggle="tooltip" data-bs-placement="top"
                                            data-bs-title="Tooltip on top" class="excel" :title="ucfirst(model)"
                                            v-if="table.datas" :data="table.datas" :fields="json_fields"
                                            :name="model + '.xls'">
                                            <a class="excel" href=""><i class="fas fa-file-excel"
                                                    style="color: green !important" aria-hidden="true"></i></a>
                                        </download-excel>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-list mt-3">
            <div class="table-list-body table-responsive" id="printArea">
                <table id="pdf-table" class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th class="sl text-center" style="min-width: 40px">#</th>
                            <slot name="columns">
                                <th v-for="(column, index) in table.columns" :key="'a' + index"
                                    @click="sort(column.field)" :style="'text-align:' + column.align + '; min-width: 120px'
                                        // 'text-align:' + column.align + '; width:' + column.width
                                        ">
                                    <span class="table-title text-center">
                                        {{ column.title.replaceAll("_", " ") }}

                                        <slot v-if="!column.subfield">
                                            <span v-if="coloumSort == column.field">
                                                <i style="color: #673ab7" v-if="order == 'desc'"
                                                    class="fa fa-sort-up pull-right sort-up text-white"></i>
                                                <i style="color: #673ab7" v-if="order == 'asc'"
                                                    class="fa fa-sort-down pull-right sort-down text-white"></i>
                                            </span>
                                            <i v-else class="fa fa-sort pull-right sort-up text-white"></i>
                                        </slot>
                                        <!-- <i class="bi bi-caret-up-fill sort-up"></i>
                    <i class="bi bi-caret-down-fill sort-down"></i> -->
                                    </span>
                                </th>

                                <th style="min-width: 180px" v-if="
                                    Object.keys(table.routes).length > 0 &&
                                    ($root.checkPermission(table.routes.view) ||
                                        $root.checkPermission(table.routes.edit) ||
                                        $root.checkPermission(table.routes.destroy))
                                " :class="table.routes.array ? 'action-extra' : 'action'" class="text-center">
                                    Action
                                </th>
                            </slot>
                        </tr>
                    </thead>
                    <slot v-if="!$root.tableSpinner">
                        <tbody v-if="Object.keys(table.datas).length > 0" style="border-top: 0">
                            <tr v-for="(item, index) in table.datas" :key="index" class="change_sorting" :class="'change_sorting' + item.sorting + ' update_item' + item.id
                                " :title="item.is_delete ? 'Deleted Row' : ''"
                                :style="{ background: item.is_delete ? 'red' : '' }">
                                <td class="text-center" v-if="table.meta">
                                    {{ table.meta.from + index }}
                                </td>
                                <td v-else class="text-center">{{ index + 1 }}</td>
                                <slot v-for="(column, index) in table.columns" :name="column.field" :item="item">
                                    <td  class="position-relative text-black"
                                        :key="'b' + index" :style="'text-align:' + column.align"
                                        :v-if="hasValue(item, column.field)">
                                        <span v-if="column.date">
                                            {{ $filter.enFormat(itemValue(item, column.field)) }}
                                        </span>
                                        <span v-else-if="column.array">
                                            {{
                                                column.array_value[0][
                                                itemValue(item, column.field, column.subfield)
                                                ]
                                            }}
                                        </span>
                                        <slot v-else-if="column.sorting">
                                            <input v-if="!sorting_spin" v-on:keyup.enter="
                                                tableSorting(
                                                    $event.target.value,
                                                    item.id,
                                                    column.namespace,
                                                    column.auto
                                                )
                                                " :data-item="item.id" min="0" :value="item[column.field]"
                                                type="number" class="base-table-form-control text-center"
                                                style="width: 50px; font-size: 12px" :id="item.id" />

                                            <i v-if="item.id == sorting_spin"
                                                class="fa fa-spinner fa-spin mt-2 ml-2 text-primary"></i>
                                            <label v-else :for="item.id" class="change-sorting"
                                                title="Click to change sorting">
                                                <i class="fa-regular fa-floppy-disk" @click.prevent="
                                                    tableSortingByButton(
                                                        item.id,
                                                        null,
                                                        column.namespace
                                                    )
                                                    ">
                                                </i>
                                            </label>
                                        </slot>
                                        <img v-else-if="column.image && itemValue(item, column.field)"
                                            :src="itemValue(item, column.field)" :style="'width:' + column.imgWidth + ';height:' + column.height
                                                " />
                                        <a :href="itemValue(item, column.field)"
                                            v-else-if="column.pdf && itemValue(item, column.field)" target="__blank">
                                            <img :src="$root.baseurl + '/public/images/pdf.png'" :style="'width:' +
                                                column.imgWidth +
                                                ';height:' +
                                                column.height
                                                " />
                                        </a>
                                        <span v-else-if="column.html"><span
                                                v-html="itemValue(item, column.field)"></span></span>
                                        <span v-else-if="column.field == 'status'">
                                            <span class="status status-active" v-if="
                                                itemValue(item, column.field, column.subfield) ==
                                                'active' ||
                                                itemValue(item, column.field, column.subfield) == 1
                                            ">ACTIVE</span>
                                            <span class="status status-draft" v-if="
                                                itemValue(item, column.field, column.subfield) ==
                                                'draft' ||
                                                itemValue(item, column.field, column.subfield) == 0
                                            ">DRAFT</span>
                                            <span class="status status-danger" v-if="
                                                itemValue(item, column.field, column.subfield) ==
                                                'deactive' ||
                                                itemValue(item, column.field, column.subfield) == 0
                                            ">DEACTIVE</span>
                                            <span class="status status-unread" v-if="
                                                itemValue(item, column.field, column.subfield) == 'ur'
                                            ">UNREAD</span>
                                            <span class="status status-read" v-if="
                                                itemValue(item, column.field, column.subfield) == 'r'
                                            ">READ</span>
                                            <span class="status status-pending" v-if="
                                                itemValue(item, column.field, column.subfield) ==
                                                'pending'
                                            ">PENDING</span>
                                            <span class="status status-success" v-if="
                                                itemValue(item, column.field, column.subfield) ==
                                                'success'
                                            ">SUCCESS</span>
                                        </span>
                                        <span v-else>
                                            <span v-if="column.to">
                                                <router-link v-if="column.slug" :to="{
                                                    name: column.to,
                                                    params: { slug: item.slug },
                                                }">{{
                                                    itemValue(item, column.field, column.subfield)
                                                }}</router-link>
                                                <router-link v-else :to="{
                                                    name: column.to,
                                                }">{{
                                                    itemValue(item, column.field, column.subfield)
                                                }}</router-link>
                                            </span>
                                            <span v-else>
                                                {{ itemValue(item, column.field, column.subfield) }}
                                            </span>
                                        </span>
                                    </td>
                                </slot>

                                <!-- custom route -->

                                <td :class="table.routes.array ? 'action-extra' : 'action'" class="text-center">
                                    <slot v-if="table.routes.array">
                                        <slot v-for="(route, index) in table.routes.array">
                                            <span v-if="route.modal">
                                                <span @click="setModal(item['id'], route.modalid)"
                                                    v-html="route.content"></span>
                                            </span>

                                            <template v-if="route.slug">
                                                <router-link :key="index" v-if="
                                                    route.route && $root.checkPermission(route.route)
                                                " :to="{
                                                    name: route.route,
                                                    params: { slug: item.slug },
                                                    query: { slug: item.slug },
                                                }" :class="'table-icon edit-icon ' + route.class" :title="route.title">
                                                    <i :class="'fa fa-' + route.icon"></i>
                                                </router-link>
                                            </template>

                                            <template v-else>
                                                <router-link :key="index" v-if="
                                                    route.route && $root.checkPermission(route.route)
                                                " :to="route.isQuery
                                                    ? {
                                                        name: route.route,
                                                        params: { id: item.id },
                                                        query: { id: item.id },
                                                    }
                                                    : {
                                                        name: route.route,
                                                        params: { id: item.id },
                                                    }
                                                    " :class="'table-icon edit-icon ' + route.class"
                                                    :title="route.title">
                                                    <i :class="'fa fa-' + route.icon"></i>
                                                </router-link>
                                            </template>
                                        </slot>
                                    </slot>

                                    <template v-if="
                                        (Object.keys(table.routes).length > 0 &&
                                            $root.checkPermission(table.routes.view)) ||
                                        $root.checkPermission(table.routes.edit) ||
                                        $root.checkPermission(table.routes.destroy)
                                    ">
                                        <router-link v-if="
                                            table.routes.view &&
                                            $root.checkPermission(table.routes.view)
                                        " :to="{
                                            name: table.routes.view,
                                            params: { id: item.id },
                                            query: { page: $route.query.page },
                                        }" class="table-icon view-icon" title="View">
                                            <i class="fa-solid fa-eye"></i>
                                        </router-link>

                                        <router-link v-if="
                                            table.routes.edit &&
                                            $root.checkPermission(table.routes.edit)
                                        " :to="{
                                            name: table.routes.edit,
                                            params: { id: item.id },
                                            query: { page: $route.query.page },
                                        }" class="table-icon edit-icon" title="Edit">
                                            <i class="fas fa-pencil-alt"> </i>
                                        </router-link>

                                        <button v-if="
                                            table.routes.destroy &&
                                            $root.checkPermission(table.routes.destroy)
                                        " v-on:click="destroy(item.id, item.is_delete ?? null)"
                                            class="table-icon delete-icon" title="Delete">
                                            <span v-if="item.is_delete">
                                                <i class="fa-solid fa-send-back"></i>
                                            </span>
                                            <span v-else>
                                                <i class="far fa-trash-alt"></i>
                                            </span>
                                        </button>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else style="border-top: 0">
                            <tr>
                                <td :colspan="Object.keys(table.columns).length + 2"
                                    style="text-align: center; background: #fff">
                                    <p class="p-2 text-center text-red no-data">No data found.</p>
                                </td>
                            </tr>
                        </tbody>
                    </slot>
                </table>
                <div v-if="$root.tableSpinner" class="text-center" style="font-size: 17px; color: #adadad">
                    <span class="fa fa-circle-o-notch fa-spin"></span>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-black" id="deleteModalLabel">
                            Are you sure want to {{ is_delete ? 'return back' : 'delete' }} this?
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6 class="mb-3 text-black">Please confirm your login password</h6>
                        <div class="d-flex justify-content-center">
                            <input v-model="delete_password" type="password" placeholder="********"
                                class="form-control form-control-sm text-center border" style="width: 350px" />
                        </div>
                        <div class="d-flex justify-content-center">
                            <button @click="deleteConfirm()" type="button"
                                class="btn btn-success btn-sm text-white my-3">
                                <span v-if="$root.submit">
                                    <i class="fa fa-spinner fa-spin"></i>
                                    processing...
                                </span>
                                <span v-if="is_delete">Return Back</span>
                                <span v-else> Confirm </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseTable",
    data() {
        return {
            order: "desc",
            coloumSort: "",
            sorting_spin: false,
            deleted_id: null,
            delete_password: null,
            table_sorting_id: "",
            is_delete: null
        };
    },

    inject: ["table", "search_data", "model", "search", "json_fields"],

    methods: {
        hasValue(item, column) {
            return item[column.toLowerCase()] !== "undefined";
        },
        itemValue(item, column, child = "") {
            var value = item[column.toLowerCase()];

            if (child) {
                let obj = item;
                value = String(child)
                    .split(".")
                    .reduce((p, c) => p[c], obj);
            }
            return value;
        },
        destroy(id, is_delete) {
            this.deleted_id = id;
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
                        this.search_data.is_delete = this.is_delete
                        this.destroy_data(this.model, this.deleted_id, this.search_data);
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
                .then((res) => {
                    this.get_paginate(this.model, this.search_data);
                })
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
        sort(field) {
            this.coloumSort = field;
            this.table.datas.sort(this.sortBy(field));
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
            this.$router.push({ name: this.model + '.show', params: { id: id } });
        }
    },
};
</script>
