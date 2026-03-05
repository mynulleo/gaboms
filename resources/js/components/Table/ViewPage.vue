<template>
    <div id="printArea">
        <div class="component_loader" :class="{ 'z-top': $root.initialLoader }" v-if="$root.spinner">
            <div class="loader"></div>
        </div>

        <div v-show="!$root.spinner">
            <!-- page header -->
            <div class="page_header d-flex align-items-center justify-content-between gap-4">
                <h4 class="form_card_title">
                    <slot name="title">
                        {{ $parent.page_title ?? "Page Title" }}
                    </slot>
                </h4>

                <div class="right_page_header action">
                    <div class="viewer_action_btn">
                        <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Print"
                            v-x-tooltip v-if="showPrintButton" @click="print(printArea, $parent.model)">
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
                        <!-- <router-link
                            class="p_btn"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Add"
                            v-x-tooltip
                            v-if="
                                showCreateRoute &&
                                $root.checkPermission($parent.model + '.create')
                            "
                            :to="{ name: $parent.model + '.create' }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                        </router-link> -->
                        <router-link class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add"
                            v-x-tooltip v-if="
                                showCreateRoute &&
                                $root.checkPermission((dynamicModel ? dynamicModel : $parent.model) + '.create')
                            " :to="{
                                name: (dynamicModel ? dynamicModel : $parent.model) + '.create',
                                query: {
                                    id: dynamicDataId,
                                },
                            }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                            </svg>
                        </router-link>
                        <router-link class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit"
                            v-x-tooltip v-if="
                                showEditRoute &&
                                $root.checkPermission($parent.model + '.edit')
                            " :to="{
                                name: $parent.model + '.edit',
                                params: { id: $parent.data.id },
                                query: {
                                    page: $route.query.page,
                                },
                            }">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>
                        </router-link>
                        <button type="button" class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-title="Delete" v-x-tooltip v-if="
                                showDeleteButton &&
                                $root.checkPermission(
                                    $parent.model + '.destroy'
                                )
                            " @click="
                                destroy(
                                    $parent.data.id,
                                    $parent.data.is_delete ?? null
                                )
                                ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </button>
                    </div>
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
                    <slot name="button">
                        <AddOrBackButton v-if="button" :route="$parent.model + '.index'" :portion="$parent.model"
                            :icon="'fas fa-backward'" />
                    </slot>
                </div>
            </div>
            <div class="viewer_devider"></div>

            <div class="view_page">
                <slot>
                    <ViewBaseTable :data="$parent.data" :extra_row="$parent.extra_row" :fields="$parent.fields"
                        :belongs_to="$parent.belongs_to" :fileColumns="$parent.fileColumns" />
                </slot>
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
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dynamicModel: {
            type: String,
            default: null,
        },
        dynamicDataId: {
            type: [String, Number],
            default: null,
        },
        button: {
            type: Boolean,
            default: true,
        },
        defaultTable: {
            type: Boolean,
            default: true,
        },
        header: {
            type: String,
            default: "",
        },
        showPrintButton: {
            type: Boolean,
            default: true,
        },
        showCreateRoute: {
            type: Boolean,
            default: true,
        },
        showEditRoute: {
            type: Boolean,
            default: true,
        },
        showDeleteButton: {
            type: Boolean,
            default: true,
        },
        printArea: {
            type: String,
            default: 'printArea',
        }
    },

    data() {
        return {
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
                        this.destroy_data(this.$parent.model, this.deleted_id);
                        this.deleted_id = "";
                        this.delete_password = "";

                        $("#deleteModal").modal("hide");

                        if (window.history.state.back) {
                            this.$router.back();
                        } else {
                            this.$router.push("/dashboard");
                        }
                    } else {
                        this.$toast("Password does not match", "error");
                        return false;
                    }
                })
                .finally((res) => (this.$root.submit = false));
        },
    },
    created() {
        const pageType = this.$parent.page_type ?? "view";
        this.getHelpInfos(this.ucfirst(this.$parent.model), pageType);
    },
};
</script>
