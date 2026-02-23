<template>
    <div>
        <template v-if="inherit == false">
            <router-link
                class="back_or_add_btn"
                v-if="$root.checkPermission(route) && icon == 'plus'"
                :to="{
                    name: route,
                    query: { page: icon != 'plus' ? $route.query.page : '' },
                }"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
            >
                <span>
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                    </svg>
                </span>
                Add
            </router-link>
            <a
                href="javascript:void(0)"
                class="back_or_add_btn"
                v-if="$root.checkPermission(route) && icon !== 'plus'"
                @click="pushToBack"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Back"
                v-x-tooltip
            >
                <span>
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
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg>
                </span>
                Back
            </a>
            <!-- Edit button -->
            <router-link
                v-if="editRoute"
                class="back_or_add_btn"
                :to="editRoute"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit" v-x-tooltip
            >
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"
                        />
                        <path d="M13.5 6.5l4 4" />
                    </svg>
                </span>
                Edit
            </router-link>
        </template>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    props: ["route", "icon", "portion", "title", "extraButtons", "editRoute"],
    computed: {
        ...mapState("inherit", ["backButton"]),
    },

    methods: {
        pushToBack() {
            if (window.history.state.back) {
                this.$router.back();
            } else {
                this.$router.push("/dashboard");
            }
        },
    },
};
</script>
