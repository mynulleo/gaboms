<template>
    <view-page :defaultTable="false">
        <div class="view_page">
            <div class="row custom_row g-3">
                <template v-if="data.type == 'Photos'">
                    <div class="col-xl-8 col-lg-12">
                        <fieldset v-if="data.photos && data.photos.length">
                            <span class="legend"> Photo{{ safeNumber(data.photos_count) > 1 ? 's' : '' }} of ({{ data.name }}) Album ({{ data.photos_count }})</span>
                            <div class="view_file">
                                <div class="row g-3">
                                    <div class="col-lg-3" v-for="(item, index) in data.photos" :key="index">
                                        <div class="view_file_item text-center position-relative">
                                            <div class="img">
                                                <img :src="item?.thumb_one ? item?.thumb_one : emptyImage()"
                                                    alt="img-cover">
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
                                                    <div
                                                        class="album_info position-absolute top-50 start-50 translate-middle">
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
                                                                        id: item.id,
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
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                                        <path stroke="none" d="M0 0h24v24H0z"
                                                                            fill="none"></path>
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
                                                                        id: item.id,
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
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                                                                        <path stroke="none" d="M0 0h24v24H0z"
                                                                            fill="none"></path>
                                                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0">
                                                                        </path>
                                                                        <path
                                                                            d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6">
                                                                        </path>
                                                                    </svg>
                                                                </router-link>

                                                                <a href="javascript:void(0)" class="album_action_btn"
                                                                    v-if="
                                                                        table.routes
                                                                            .destroy &&
                                                                        $root.checkPermission(
                                                                            table.routes
                                                                                .destroy
                                                                        )
                                                                    " @click="
                                                                        destroy(
                                                                            item.id,
                                                                            item.is_delete ??
                                                                            null
                                                                        )
                                                                        " title="Delete">
                                                                    <i class="fa-solid fa-send-back" v-if="
                                                                        item.is_delete
                                                                    "></i>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none"
                                                                        stroke="currentColor" stroke-width="2"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                                                                        <path stroke="none" d="M0 0h24v24H0z"
                                                                            fill="none"></path>
                                                                        <path d="M4 7l16 0"></path>
                                                                        <path d="M10 11l0 6"></path>
                                                                        <path d="M14 11l0 6"></path>
                                                                        <path
                                                                            d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
                                                                        </path>
                                                                        <path
                                                                            d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3">
                                                                        </path>
                                                                    </svg>
                                                                </a>
                                                                <router-link v-if="
                                                                    $root.checkPermission(
                                                                        `photo.create`
                                                                    )
                                                                " :to="{
                                                                    name: `photo.create`,
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
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="text-center">{{ item.title }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div v-else class="text-center">
                            <p>No Image found in this album</p>
                        </div>
                    </div>
                </template>

                <template v-else-if="data.type == 'Videos'">
                    <div class="col-xl-8 col-lg-12">
                        <fieldset>
                            <span class="legend">Video{{ safeNumber(data.videos_count) > 1 ? 's' : '' }} of ({{ data.name }}) Album ({{ data.videos_count }})</span>
                            <div class="view_file" v-if="data.videos && data.videos.length">
                                <div class="row g-3">
                                    <div class="col-lg-3" v-for="(item, index) in data.videos" :key="index">
                                        <div class="view_file_item text-center">
                                            <div class="img">
                                                <img :src="item?.thumbnail_two ? item?.thumbnail_two : emptyImage()"
                                                    alt="img-cover">
                                            </div>
                                            <p class="text-center">{{ item.title }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-center">
                                <p>No Video found in this album</p>
                            </div>
                        </fieldset>

                    </div>
                </template>

                <div class="col-xl-4 col-lg-12">
                    <fieldset>
                        <span class="legend">Information</span>
                        <div class="profile_info">
                            <div class="row g-3">
                                <div class="col-md-6 col-xl-12">
                                    <div class="card overflow-hidden mt-2">
                                        <div class="card-body">
                                            <div class="view_file mt-0">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="view_file_item text-center"
                                                            style="width: 100%; height: 100%;">
                                                            <div class="img" style="width: 100%; height: 100%;">
                                                                <img :src="data?.image_one == 'no_server_image' ? emptyServerImage() : (data?.image_one || emptyImage())"
                                                                    alt="img-cover"
                                                                    style="width: 100%; height: 100%; object-fit: cover;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-12">
                                    <div class="card overflow-hidden">
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table table-striped mt-0">
                                                    <tbody>
                                                        <tr>
                                                            <th>Album Name</th>
                                                            <th style="text-align: center;">:</th>
                                                            <td>{{ data?.name ?? "" }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Album Type</th>
                                                            <th style="text-align: center;">:</th>
                                                            <td>{{ data?.type ?? "" }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>No of {{ ucfirst(data.type) }}</th>
                                                            <th style="text-align: center;">:</th>
                                                            <td v-if="data.videos_count">{{ data?.videos_count ?? 0 }}</td>
                                                            <td v-if="data.photos_count">{{ data?.photos_count ?? 0 }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Status</th>
                                                            <th style="text-align: center;">:</th>
                                                            <td><span :class="[
                                                                data?.status == 'active'
                                                                    ? 'bg-success'
                                                                    : 'bg-danger ',
                                                                'badge mt-1 mx-2',
                                                                'text-white ',
                                                            ]">
                                                                    {{ ucfirst(data?.status) }}
                                                                </span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
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
                                    :disabled="$root.spinner">
                                    <span v-if="$root.spinner">
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
    </view-page>
</template>

<script>
const model = "album";

export default {
    data() {
        return {
            page_title: "Album View",
            model: model,
            data: {},
            fileColumns: [],
            search_data: {},
            table: {
                routes: {},
            },
            deleted_id: null,
            delete_password: null,
            is_delete: null,
        };
    },
    methods: {
        destroy(id, is_delete) {
            this.deleted_id = id;
            this.is_delete = is_delete;
            $("#deleteModal").modal("show");
        },

        deletePhoto(model_name, id, search_data = null) {
            let url = model_name + "/" + id;
            axios
                .delete(url)
                .then((res) => {
                    this.scrollTop(0, 0);
                    this.get_data(`${this.model}/${this.$route.params.id}`);
                    if (res.status == 201) {
                        this.$toast(res.data.message, "success");
                        return true;
                    } else if (res.status == 202) {
                        this.$toast(res.data.message, "error");
                    }
                })
                .catch((error) => console.log(error));
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
            this.$root.spinner = true;
            axios
                .post("/check-old-password", data)
                .then((res) => {
                    if (res.data) {
                        $("#deleteModal").modal("hide");
                        this.search_data.is_delete = this.is_delete;
                        this.deletePhoto(
                            'photo',
                            this.deleted_id,
                            this.search_data
                        );
                        this.deleted_id = "";
                        this.delete_password = "";
                    } else {
                        this.$toast("Password does not match", "error");
                        return false;
                    }
                });
        },
    },
    created() {
        this.get_data(`${this.model}/${this.$route.params.id}`);
        this.getRouteName('photo');

    },
};
</script>
