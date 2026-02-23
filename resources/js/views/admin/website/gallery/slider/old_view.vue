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

                <div class="gallery-list" v-if="data.details && Object.keys(data.details).length > 0">
                    <div class="row">
                        <div v-for="(item, index) in data.details" :key="index" class="col-sm-6 col-lg-4 col-xl-3">
                            <div class="image">
                                <img loading="lazy" :src="item.thumb_one" :alt="item.name" />
                                <div class="overlay">
                                    <div class="info">
                                        <router-link :to="{
                                            name: 'slider-details.show',
                                            params: { id: item.id },
                                            query: { page: $route.query.page, id: data.id },
                                        }" class="delete edit" title="view">
                                            <i class="fa-solid fa-eye"> </i>
                                        </router-link>

                                        <router-link :to="{
                                            name: 'slider-details.edit',
                                            params: { id: item.id },
                                            query: { page: $route.query.page, id: data.id },
                                        }" class="delete edit" title="Edit">
                                            <i class="fas fa-pencil-alt"> </i>
                                        </router-link>

                                        <button @click="destroy(item.id, index)" class="delete delete-btn"
                                            title="Delete">
                                            <i class="far fa-trash-alt"></i>
                                        </button>

                                        <slot>
                                            <input v-if="!sorting_spin"
                                                v-on:keyup.enter="sort(item.id, $event.target.value)"
                                                :data-item="item.id" min="0" class="mt-3" type="number"
                                                :value="item.sorting" style="width: 65px" />

                                            <i v-if="item.id == sorting_spin"
                                                class="fa fa-spinner fa-spin mt-2 ml-2 text-primary"></i>
                                            <label v-else :for="item.id" class="change-sorting"
                                                title="Click to change sorting">
                                                <i class="fa-regular fa-floppy-disk" @click.prevent="sort(item.id)"></i>
                                            </label>
                                        </slot>
                                        <div>
                                        </div>
                                        <h4>{{ item.name }}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-12 col-lg-12" v-if="data.details && Object.keys(data.details).length > 0">
                    <fieldset>
                        <span class="legend">Media</span>
                        <div class="view_file">
                            <div class="row g-4">
                                <div v-for="(item, index) in data.details" :key="index"
                                    class="col-sm-6 col-lg-4 col-xl-3">
                                    <div class="view_file_item text-center">
                                        <div class="img">
                                            <img :src="item.thumb_one ? item.thumb_one : emptyImage()" alt="img-cover">
                                        </div>
                                        <div class="info">
                                            <router-link :to="{
                                                name: 'slider-details.show',
                                                params: { id: item.id },
                                                query: { page: $route.query.page, id: data.id },
                                            }" class="delete edit" title="view">
                                                <i class="fa-solid fa-eye"> </i>
                                            </router-link>

                                            <router-link :to="{
                                                name: 'slider-details.edit',
                                                params: { id: item.id },
                                                query: { page: $route.query.page, id: data.id },
                                            }" class="delete edit" title="Edit">
                                                <i class="fas fa-pencil-alt"> </i>
                                            </router-link>

                                            <button @click="destroy(item.id, index)" class="delete delete-btn"
                                                title="Delete">
                                                <i class="far fa-trash-alt"></i>
                                            </button>

                                            <slot>
                                                <input v-if="!sorting_spin"
                                                    v-on:keyup.enter="sort(item.id, $event.target.value)"
                                                    :data-item="item.id" min="0" class="mt-3" type="number"
                                                    :value="item.sorting" style="width: 65px" />

                                                <i v-if="item.id == sorting_spin"
                                                    class="fa fa-spinner fa-spin mt-2 ml-2 text-primary"></i>
                                                <label v-else :for="item.id" class="change-sorting"
                                                    title="Click to change sorting">
                                                    <i class="fa-regular fa-floppy-disk"
                                                        @click.prevent="sort(item.id)"></i>
                                                </label>
                                            </slot>
                                            <div>
                                            </div>
                                            <h4>{{ item.name }}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div class="col-sm-6 col-lg-4 col-xl-3" v-if="
                    data.details && Object.keys(data.details).length < data.max_image
                ">
                    <div class="image border d-flex justify-content-center align-items-center"
                        style="border-radius: 10px">
                        <div class="gallary-blank">
                            <div class="info">
                                <div>
                                    <router-link :to="{
                                        name: 'slider-details.create',
                                        query: { id: data.id },
                                    }" title="View"><button
                                            class="manage-gallery btn btn-lg btn-primary shadow-none mt-4">
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
