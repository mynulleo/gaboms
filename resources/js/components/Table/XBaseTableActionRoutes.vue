<template>
    <div class="action_btn">
        <template v-if="tableRoutes.array && tableRoutes.array.length > 0">
            <template v-for="(route, index) in tableRoutes.array">
                <template v-if="!route.showWhen || (route.showWhen && route.showWhen(this, item))">
                    <template v-if="route.type == 'destroy'">
                        <a href="javascript:void(0)" v-if="
                            route.route &&
                            $root.checkPermission(route.route)
                        " @click="$parent.destroy(item, item.is_delete ?? null)" data-bs-toggle="tooltip"
                            data-bs-placement="top" data-bs-title="Delete" v-x-tooltip>
                            <span v-if="item.is_delete">
                                <i class="fa-solid fa-send-back"></i>
                            </span>
                            <template v-else>
                                <span v-html="route.content"></span>
                            </template>
                        </a>
                    </template>

                    <a href="javascript:void(0)" v-else-if="route.callback || route.modal"
                        @click="route.callback ? route.callback(this, item) : $parent.setModal(item['id'], route.modalid)"
                        v-html="route.content">
                    </a>

                    <template v-else>
                        <router-link v-if="route.route && $root.checkPermission(route.route)" :to="generateRoute(route)"
                            :class="route.class" data-bs-toggle="tooltip" data-bs-placement="top"
                            :data-bs-title="route.title" v-x-tooltip v-html="route.content"></router-link>
                    </template>
                </template>
            </template>
        </template>

        <template v-if="Object.keys(tableRoutes).length > 0">
            <router-link v-if="
                tableRoutes.view && $root.checkPermission(tableRoutes.view)
            " :to="{
                name: tableRoutes.view,
                params: { id: item.id },
                query: {
                    page: $route.query.page,
                },
            }" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View" v-x-tooltip>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
            </router-link>

            <router-link v-if="
                tableRoutes.edit && $root.checkPermission(tableRoutes.edit)
            " :to="{
                name: tableRoutes.edit,
                params: { id: item.id },
                query: {
                    page: $route.query.page,
                },
            }" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit" v-x-tooltip>

                <span class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><i
                        class="fa-solid fa-pencil"></i></span>
            </router-link>

            <a href="javascript:void(0)" v-if="
                tableRoutes.destroy &&
                $root.checkPermission(tableRoutes.destroy)
            " @click="$parent.destroy(item, item.is_delete ?? null)" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-title="Delete" v-x-tooltip>
                <span v-if="item.is_delete">
                    <i class="fa-solid fa-send-back"></i>
                </span>
                <span v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </span>
            </a>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        tableRoutes: {
            type: Object,
            default: () => ({}),
        },

        item: {
            type: Object,
            default: () => ({}),
        },
    },

    methods: {
        generateRoute(route) {
            let params = {};
            let query = {};

            let finalRoute = { name: route.route };

            // only for slug param
            if (route.slug && this.item.slug) {
                params["slug"] = this.item.slug;
                query["slug"] = this.item.slug;
            }

            // only for id param
            if (route.isQuery && this.item.id) {
                params["id"] = this.item.id;
                query["id"] = this.item.id;
            }

            // dynamic params
            if (route.params && route.params.length > 0) {
                route.params.forEach((routeParam) => {
                    if (routeParam.value) {
                        params[routeParam.name] = routeParam.value;
                    } else if (
                        routeParam.field &&
                        this.item[routeParam.field]
                    ) {
                        params[routeParam.name] = this.item[routeParam.field];
                    }
                });
            }

            // dynamic query
            if (route.query && route.query.length > 0) {
                route.query.forEach((routeQuery) => {
                    if (routeQuery.value) {
                        query[routeQuery.name] = routeQuery.value;
                    } else if (
                        routeQuery.field &&
                        this.item[routeQuery.field]
                    ) {
                        query[routeQuery.name] = this.item[routeQuery.field];
                    }
                });
            }

            // added params in route
            if (Object.keys(params).length > 0) {
                finalRoute.params = params;
            }

            // added query in route
            if (Object.keys(query).length > 0) {
                finalRoute.query = query;
            }

            return finalRoute;
        },
    },
};
</script>
