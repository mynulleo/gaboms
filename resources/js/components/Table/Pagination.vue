<template>
    <div
        class="base_pagination d-flex justify-content-between align-items-center"
        v-if="table.meta && Object.keys(table.meta).length > 0"
    >
        <p class="number">
            {{ safeNumber(table.meta.from) }} -
            {{ safeNumber(table.meta.to) }} of
            {{ safeNumber(table.meta.total) }}
        </p>
        <ul class="list-unstyled">
            <li :class="table.meta.current_page == 1 ? 'disabled' : ''">
                <a
                    href="javascript:void(0)"
                    @click="
                        table.meta.current_page > 1
                            ? get_datas(table.meta.current_page - 1)
                            : () => {}
                    "
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
                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Previous"
                        v-x-tooltip
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                </a>
            </li>

            <template v-if="table.meta.links && table.meta.links.length > 0">
                <template v-for="link in table.meta.links">
                    <li v-if="link.label === '...'" class="rest">
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
                            class="icon icon-tabler icons-tabler-outline icon-tabler-dots"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            <path
                                d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                            />
                            <path
                                d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                            />
                        </svg>
                    </li>

                    <li
                        v-else-if="safeNumber(link.label) !== 0"
                        :class="{
                            active: link.active,
                        }"
                    >
                        <a
                            href="javascript:void(0)"
                            @click="get_datas(link.label)"
                            >{{ link.label }}</a
                        >
                    </li>
                </template>
            </template>

            <li>
                <a
                    href="javascript:void(0)"
                    @click="
                        table.meta.current_page < table.meta.last_page
                            ? get_datas(table.meta.current_page + 1)
                            : () => {}
                    "
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
                        class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Next"
                        v-x-tooltip
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Pagination",

    inject: [
        "table",
        "search_data",
        "model",
        "customDataUrl",
        "customRouteName",
    ],

    methods: {
        get_datas: function (page_index) {
            let page = page_index ? page_index : this.$route.query.page;
            this.search_data.page = page;
            let customRouteName = this.customRouteName
                ? this.customRouteName
                : this.model + ".index";
            this.$router.push({
                name: customRouteName,
                query: this.search_data,
            });

            let dataUrl = this.customDataUrl ? this.customDataUrl : this.model;
            let url = "admin/" + dataUrl;

            this.$root.tableSpinner = true;
            axios
                .get(`${laravel.baseurl}/${url}`, { params: this.search_data })
                .then((res) => {
                    this.table.datas = res.data.data;
                    this.table.meta = res.data.meta;
                    this.table.links = res.data.links;
                    setTimeout(() => (this.$root.tableSpinner = false), 200);
                })
                .catch((error) =>
                    setTimeout(() => (this.$root.tableSpinner = false), 200)
                );
        },

        // Decrement Page Loop
        decrement() {
            let curentPage = this.table.meta.current_page - 1;
            let arr = [];
            for (var i = 1; i <= 6; i++) {
                if (curentPage > 0) {
                    arr.unshift(curentPage--);
                }
            }
            return arr;
        },
    },
};
</script>
