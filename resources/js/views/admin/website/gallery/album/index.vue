<template>
    <index-page :defaultTable="false" :searchBlock="true" :show_status="false">
        <template #search-field>
            <Select field="search_data.type" title="Album Type" col="4" v-model="search_data.type" label="name"
                :reduce="(obj) => obj.value" :options="albumType" placeholder="--Select One--" :closeOnSelect="true" />

            <Select field="search_data.status" title="Status" col="4" v-model="search_data.status" label="name"
                :reduce="(obj) => obj.value" :options="status" placeholder="--Select One--" :closeOnSelect="true" />
        </template>
        <template #table-list>
            <div class="album-list-area">
                <div class="row g-3">
                    <template v-if="table.datas.length > 0">
                        <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(data, index) in table.datas"
                            :key="`data_${index}`">
                            <div class="card">
                                <div class="card-body album_item">
                                    <div class="img position-relative">
                                        <img :src="data?.image_two == 'no_server_image' ? emptyServerImage() : (data?.image_two || emptyImage())" alt="album" class="img-fluid w-100" />
                                        <div class="overlay" v-if="
                                            (Object.keys(table.routes)
                                                .length > 0 &&
                                                $root.checkPermission(
                                                    table.routes.view
                                                )) ||
                                            $root.checkPermission(
                                                table.routes.edit
                                            ) ||
                                            $root.checkPermission(
                                                table.routes.destroy
                                            )
                                        ">
                                            <div class="album_info position-absolute top-50 start-50 translate-middle">
                                                <ul class="list-unstyled action_box">
                                                    <li>
                                                        <router-link v-if="
                                                            table.routes
                                                                .edit &&
                                                            $root.checkPermission(
                                                                table.routes
                                                                    .edit
                                                            )
                                                        " :to="{
                                                            name: table
                                                                .routes
                                                                .edit,
                                                            params: {
                                                                id: data.id,
                                                            },
                                                            query: {
                                                                page: $route
                                                                    .query
                                                                    .page,
                                                            },
                                                        }" class="album_action_btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-title="Edit" v-x-tooltip>
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none">
                                                                </path>
                                                                <path
                                                                    d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4">
                                                                </path>
                                                                <path d="M13.5 6.5l4 4"></path>
                                                            </svg>
                                                        </router-link>
                                                        <router-link v-if="
                                                            table.routes
                                                                .view &&
                                                            $root.checkPermission(
                                                                table.routes
                                                                    .view
                                                            )
                                                        " :to="{
                                                            name: table
                                                                .routes
                                                                .view,
                                                            params: {
                                                                id: data.id,
                                                            },
                                                            query: {
                                                                page: $route
                                                                    .query
                                                                    .page,
                                                            },
                                                        }" class="album_action_btn" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" data-bs-title="View" v-x-tooltip>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none">
                                                                </path>
                                                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                                                <path
                                                                    d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6">
                                                                </path>
                                                            </svg>
                                                        </router-link>

                                                        <a href="javascript:void(0)" class="album_action_btn" v-if="
                                                            table.routes
                                                                .destroy &&
                                                            $root.checkPermission(
                                                                table.routes
                                                                    .destroy
                                                            )
                                                        " @click="
                                                            destroy(
                                                                data.id,
                                                                data.is_delete ??
                                                                null
                                                            )
                                                            " title="Delete">
                                                            <i class="fa-solid fa-send-back" v-if="
                                                                data.is_delete
                                                            "></i>
                                                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                                data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-title="Delete" v-x-tooltip>
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none">
                                                                </path>
                                                                <path d="M4 7l16 0"></path>
                                                                <path d="M10 11l0 6"></path>
                                                                <path d="M14 11l0 6"></path>
                                                                <path
                                                                    d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
                                                                </path>
                                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3">
                                                                </path>
                                                            </svg>
                                                        </a>


                                                        <template v-if="
                                                            data.status ==
                                                            'active'
                                                        ">
                                                            <template v-if="
                                                                data.type ==
                                                                'Photos'
                                                            ">
                                                                <router-link v-if="
                                                                    $root.checkPermission(
                                                                        `photo.create`
                                                                    )
                                                                " :to="{
                                                                    name: `photo.create`,
                                                                    query: {
                                                                        id: data.id,
                                                                    },
                                                                }" class="album_action_btn" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" data-bs-title="Add"
                                                                    v-x-tooltip>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                                                                        <path stroke="none" d="M0 0h24v24H0z"
                                                                            fill="none"></path>
                                                                        <path d="M12 5l0 14"></path>
                                                                        <path d="M5 12l14 0"></path>
                                                                    </svg>
                                                                </router-link>
                                                            </template>
                                                            <template v-else>
                                                                <router-link v-if="
                                                                    $root.checkPermission(
                                                                        `video.create`
                                                                    )
                                                                " :to="{
                                                                    name: `video.create`,
                                                                    query: {
                                                                        id: data.id,
                                                                    },
                                                                }" class="album_action_btn">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                                                                        <path stroke="none" d="M0 0h24v24H0z"
                                                                            fill="none"></path>
                                                                        <path d="M12 5l0 14"></path>
                                                                        <path d="M5 12l14 0"></path>
                                                                    </svg>
                                                                </router-link>
                                                            </template>
                                                        </template>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div v-if="data.type == 'Photos'" class="album_icon position-absolute">
                                            <div class="photo_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-photo">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M15 8h.01" />
                                                    <path
                                                        d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                                                    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                                                    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                                                </svg>
                                            </div>

                                        </div>
                                        <div v-if="data.type == 'Videos'" class="album_icon position-absolute">
                                            <div class="photo_icon text-danger">
                                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>

                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="album_title">
                                        {{ data.name }}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </template>

                    <div class="col-12" v-else>
                        <div style="background: rgb(255, 255, 255)">
                            <p class="px-2 py-5 text-center text-red no-data">
                                No data found.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-black" id="deleteModalLabel">
                                    Are you sure want to
                                    {{ is_delete ? "return back" : "delete" }}
                                    this?
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
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
    </index-page>
</template>

<script>
const model = "album";

// Define table columns...
const tableColumns = [
    { field: "name", title: "Name", to: "photo.create" },
    { field: "type", title: "Type", align: "center" },
    {
        field: "image",
        title: "Image",
        image: true,
        imgWidth: "50px",
        height: "50px",
        align: "center",
    },
    {
        field: "sorting",
        title: "Sorting",
        sorting: true,
        namespace: "Website-FrontMenu",
        auto: "",
        align: "center",
    },
    { field: "created_at", title: "Created at", date: true },
];
// Define excel column...
const json_fields = {
    Title: "title",
    "Created at": "created_at",
};

export default {
    data() {
        return {
            page_title: "Album List",
            model: model,
            json_fields: json_fields,
            fields_name: { default: "Select One", name: "Name" },
            search_data: {
                pagination: this.$route.query.pagination ?? 8,
                field_name: this.$route.query.field_name ?? "",
                value: this.$route.query.value ?? "",
                status: this.$route.query.status ?? "",
                type: this.$route.query.type ?? "",
            },
            table: {
                columns: tableColumns,
                routes: {},
                datas: [],
                meta: [],
                links: [],
            },
            status: [],
            albumType: [],
            deleted_id: null,
            delete_password: null,
            is_delete: null,
        };
    },

    provide() {
        return {
            validate: this.validation,
            model: this.model,
            fields_name: this.fields_name,
            search_data: this.search_data,
            table: this.table,
            json_fields: this.json_fields,
            search: this.search,
        };
    },

    watch: {
        $route(toRoute, fromRoute) {
            if (
                toRoute.path === fromRoute.path &&
                Object.keys(toRoute.query).length === 0
            ) {
                this.resetSearchData();
                this.search();
            }
        },
    },

    methods: {
        resetSearchData() {
            this.search_data.pagination = 10;
            this.search_data.field_type = "";
            this.search_data.field_name = "";
            this.search_data.value = "";
            this.search_data.status = "";
        },

        search() {
            this.$router.push({ name: this.model + '.index', query: this.search_data });
            this.get_paginate(this.model, this.search_data);
        },
        
        destroy(id, is_delete) {
            this.deleted_id = id;
            this.is_delete = is_delete;
            $("#deleteModal").modal("show");
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
                        this.destroy_data(
                            this.model,
                            this.deleted_id,
                            this.search_data
                        );
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
        getStatus() {
            this.status = [
                { name: 'Active', value: 'active' },
                { name: 'Draft', value: 'draft' },
            ];
        },
        getAlbumType() {
            this.albumType = [
                { name: 'Photo', value: 'photos' },
                { name: 'Video', value: 'videos' },
            ];
        },
    },

    created() {
        this.getRouteName(this.model);
        this.setBreadcrumbs(this.model, "index");
        this.search();
        this.getStatus();
        this.getAlbumType();
    },
    validators: {
        "search_data.status": function (value = null) {
            return Validator.value(value);
        },
    },
};
</script>
