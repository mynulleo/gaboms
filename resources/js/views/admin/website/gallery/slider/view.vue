<template>
    <view-page :defaultTable="false">
        <template v-slot:custom_header>
            <div class="top--title">
                <h4>Title: {{ data?.title }}</h4>
            </div>
        </template>
        <!-- modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-black" id="deleteModalLabel">
                            Are you sure want to delete this?
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h6 class="mb-3 text-black">
                            Please confirm your login password
                        </h6>
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
                                <span v-else> Confirm </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="view_page">
            <div class="row custom_row g-3">
                <div class="col-xl-12 col-lg-12">
                    <fieldset>
                        <span class="legend">Slider Details</span>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <tbody>
                                            <tr>
                                                <th>Position</th>
                                                <th style="text-align: center;">:</th>
                                                <td>{{ data?.position ?? " " }}</td>
                                            </tr>
                                            <tr>
                                                <th>Width</th>
                                                <th style="text-align: center;">:</th>
                                                <td>{{ data?.width ?? " " }} px</td>
                                            </tr>
                                            <tr>
                                                <th>Height</th>
                                                <th style="text-align: center;">:</th>
                                                <td>{{ data?.height ?? " " }} px</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <tbody>
                                            <tr>
                                                <th>Status</th>
                                                <th style="text-align: center;">:</th>
                                                <td>
                                                    <span :class="[
                                                        data?.status == 'active'
                                                            ? 'bg-success'
                                                            : 'bg-danger ',
                                                        'badge mt-1 mx-2',
                                                        'text-white ',
                                                    ]">
                                                        {{ ucfirst(data?.status) }}
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Created at</th>
                                                <th style="text-align: center;">:</th>
                                                <td>{{ data?.created_at ?? " " }}</td>
                                            </tr>
                                            <tr>
                                                <th>Updated at</th>
                                                <th style="text-align: center;">:</th>
                                                <td>{{ data?.updated_at ?? " " }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div class="col-xl-12 col-lg-12">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div class="album-list-area"
                                    v-if="data.details && Object.keys(data.details).length > 0">
                                    <div class="row g-3">
                                        <div v-for="(item, index) in data.details" :key="index"
                                            class="col-xl-3 col-lg-4 col-sm-6">
                                            <div class="card">
                                                <div class="card-body album_item">
                                                    <div class="img position-relative">
                                                        <img :src="item?.thumb_one === 'no_server_image'
                                                            ? emptyServerImage()
                                                            : (item?.thumb_one || emptyImage())" alt="album"
                                                            class="img-fluid w-100" />
                                                        <div class="overlay">
                                                            <div
                                                                class="album_info position-absolute top-50 start-50 translate-middle">
                                                                <ul class="list-unstyled action_box">
                                                                    <li>
                                                                        <router-link :to="{
                                                                            name: 'slider-details.show',
                                                                            params: { id: item.id },
                                                                            query: { page: $route.query.page, id: data.id },
                                                                        }" class="album_action_btn">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                                                                                <path stroke="none" d="M0 0h24v24H0z"
                                                                                    fill="none"></path>
                                                                                <path
                                                                                    d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0">
                                                                                </path>
                                                                                <path
                                                                                    d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6">
                                                                                </path>
                                                                            </svg>
                                                                        </router-link>
                                                                        <router-link :to="{
                                                                            name: 'slider-details.edit',
                                                                            params: { id: item.id },
                                                                            query: { page: $route.query.page, id: data.id },
                                                                        }" class="album_action_btn">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                                                                <path stroke="none" d="M0 0h24v24H0z"
                                                                                    fill="none"></path>
                                                                                <path
                                                                                    d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4">
                                                                                </path>
                                                                                <path d="M13.5 6.5l4 4"></path>
                                                                            </svg>
                                                                        </router-link>
                                                                        <a href="javascript:void(0)"
                                                                            class="album_action_btn"
                                                                            @click="destroy(item.id, index)"
                                                                            title="Delete">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="top"
                                                                                data-bs-title="Delete" v-x-tooltip>
                                                                                <path stroke="none" d="M0 0h24v24H0z"
                                                                                    fill="none">
                                                                                </path>
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
                                                                        <!-- <router-link
                                                                            v-if="$root.checkPermission(`${model}.create`)"
                                                                            :to="{ name: `${model}.create` }"
                                                                            class="album_action_btn">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                stroke="currentColor" stroke-width="2"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                                                                                <path stroke="none" d="M0 0h24v24H0z"
                                                                                    fill="none"></path>
                                                                                <path d="M12 5l0 14"></path>
                                                                                <path d="M5 12l14 0"></path>
                                                                            </svg>
                                                                        </router-link> -->
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-4 col-xl-3"
                                            v-if="data.details && Object.keys(data.details).length < data.max_image">
                                            <div class="image border d-flex justify-content-center align-items-center h-100"
                                                style="border-radius: 10px">
                                                <div class="gallary-blank">
                                                    <div class="info">
                                                        <div>
                                                            <router-link :to="{
                                                                name: 'slider-details.create',
                                                                query: { id: data.id },
                                                            }" title="View">
                                                                <button
                                                                    class="manage-gallery btn btn-lg btn-primary shadow-none">
                                                                    +
                                                                </button>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span v-else>
                                    <div class="album-list-area">
                                        <div class="col-sm-6 col-lg-4 col-xl-3"
                                            v-if="data.details && Object.keys(data.details).length < data.max_image">
                                            <div class="image border d-flex justify-content-center align-items-center h-100"
                                                style="border-radius: 10px; min-height: 150px;">
                                                <div class="gallary-blank">
                                                    <div class="info">
                                                        <div>
                                                            <router-link :to="{
                                                                name: 'slider-details.create',
                                                                query: { id: data.id },
                                                            }" title="View">
                                                                <button
                                                                    class="manage-gallery btn btn-lg btn-primary shadow-none">
                                                                    +
                                                                </button>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </fieldset>
                </div>

            </div>
        </div>

    </view-page>
</template>

<script>
const model = "slider";

export default {
    data() {
        return {
            page_title: "Slider View",
            model: model,
            data: {},
            sorting_spin: false,
        };
    },
    methods: {
        sort(id, sorting = null) {
            let value = null;

            if (this.isEmpty(sorting)) {
                let input = $(`input[data-item="${id}"]`);
                value = input.val();
                console.log(value);
            }

            $(".change_sorting").removeClass("sorting-success");
            this.sorting_spin = id;

            let data = { number: value, id: id, model: "SliderDetails" };

            axios
                .get("table-sorting", { params: data })
                .then((res) => {
                    this.get_data(`${this.model}/${this.$route.params.id}`);
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
        edit(id) { },
        destroy(id, index) {
            this.deleted_id = id;
            this.delete_index = index;
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
                        this.destroy_data("slider-details", this.deleted_id);
                        this.deleted_id = "";
                        this.delete_password = "";

                        if (this.delete_index !== -1) {
                            this.data.details.splice(this.delete_index, 1);
                        }

                        $("#deleteModal").modal("hide");
                    } else {
                        this.$toast("Password does not match", "error");
                        return false;
                    }
                })
                .finally((res) => (this.$root.submit = false));
        },
    },
    created() {
        this.setBreadcrumbs(this.model, "view");
        this.get_data(`${this.model}/${this.$route.params.id}`);
    },
};
</script>

<style scoped></style>
