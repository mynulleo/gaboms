<template>
    <div class="content_body position-relative p-0">
        <div class="component_loader" :class="{ 'z-top' : $root.initialLoader }" v-if="$root.spinner && !$root.tableSpinner">
            <div class="loader"></div>
        </div>
        <div v-show="!$root.spinner" class="content_main">
            <div class="page_header d-flex align-items-center justify-content-between gap-4">
                <h4 class="form_card_title">XML Data List</h4>

                <div class="header_base_search d-none d-md-flex gap-3 align-items-center">
                    <div class="search_box position-relative">
                        <input type="text" placeholder="Search..." v-model="searchPageTitle" @input="liveSearch" />
                        <button class="search_btn position-absolute top-50 translate-middle-y bg-transparent border-0"
                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Search" v-x-tooltip>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="right_page_header">
                    <button class="back_or_add_btn border-0 px-3 py-2" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Load XML Data" v-x-tooltip @click="() => {
                            $root.tableSpinner = true;
                            loadXmlData(true);
                        }
                            ">
                        Load XML Data
                    </button>
                    <a href="https://marketingplatform.google.com/about/analytics/" target="_blank"
                        class="back_or_add_btn px-3 py-2" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Google Analytic" v-x-tooltip>
                        Google Analytic
                    </a>
                </div>
            </div>
            <!-- <div class="pagination_action d-none d-md-block">
                <div class="row">
                    <div class="col-md-6">
                        <div class="top_pagination d-flex gap-4 align-items-center">
                            <div class="pagination">
                                <p>Total - <span>{{ }}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6"></div>
                </div>
            </div> -->
            <div class="base_table_list">
                <div class="table-responsive text-nowrap table-basic table_wrapper">
                    <table class="table table_loader_only" v-if="$root.tableSpinner">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="table_loader">
                                        <div class="loader"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table v-else class="table">
                        <thead>
                            <tr>
                                <th class="sl" style="min-width: 70px">
                                    <span class="heading"> Page Title </span>
                                </th>
                                <th>
                                    <div class="heading">Web URL</div>
                                </th>
                                <th>
                                    <div class="heading">Page Type</div>
                                </th>
                                <th>
                                    <div class="heading">Meta Tags</div>
                                </th>
                                <th>
                                    <div class="heading">Broken URL</div>
                                </th>
                                <!-- <th>
                                    <div class="heading">Indexed</div>
                                </th> -->
                                <th>
                                    <div class="heading">Modified</div>
                                </th>
                                <th>
                                    <div class="heading">Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody v-if="Object.keys(filteredData).length > 0">
                            <tr class="td_track" v-for="(item, index) in filteredData" :key="index">
                                <td>{{ limitString(item.page, 20) }}</td>
                                <!-- <td>
                                    <span data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="item.page"
                                        v-x-tooltip="safeStringLength(item.page) >= 20">
                                        {{ safeStringLength(item.page, 20) }}
                                    </span>
                                </td> -->
                                <td>
                                    <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer"
                                        data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="item.url"
                                        v-x-tooltip="safeStringLength(item.url) >= 30
                                            ">
                                        {{ limitString(item.url, 30) }}
                                    </a>
                                    <span v-else>N/A</span>
                                </td>
                                <td class="text-capitalize">
                                    {{ item.page_type ?? "N/A" }}
                                </td>

                                <td style="text-align: center">
                                    <div v-if="item.meta_tag_indicator" v-html="item.meta_tag_indicator"></div>
                                    <span v-else style="color: green">✔</span>
                                </td>

                                <td style="text-align: center">
                                    <span v-if="item.broken_url" style="color: red">✗</span>
                                    <span v-else style="color: green">✔</span>
                                </td>
                                <!-- <td></td> -->
                                <td :class="{
                                    'old-date': isOldDate(item.modified),
                                }">
                                    {{
                                        item.modified
                                            ? formatDateTime(item.modified)
                                            : "N/A"
                                    }}
                                </td>
                                <td class="action text-center">
                                    <a v-if="item.admin_url" :href="item.admin_url" class="delete edit" title="Edit"><i
                                            class="fas fa-pencil-alt" aria-hidden="true"></i></a>
                                    <span v-else>N/A</span>
                                </td>
                            </tr>
                        </tbody>

                        <tbody v-else>
                            <tr>
                                <td colspan="8" style="text-align: center; background: #fff">
                                    <p class="p-2 text-center text-red no-data">
                                        No data found.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="base_pagination d-flex justify-content-between align-items-center"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import moment from "moment";

dayjs.extend(relativeTime);

export default {
    data() {
        return {
            xmlData: {},
            searchPageTitle: this.$route.query.searchPageTitle ?? "",
            searchPageType: "",
            filteredData: {},
        };
    },

    watch: {
        $route(toRoute, fromRoute) {
            if (
                toRoute.path === fromRoute.path &&
                Object.keys(toRoute.query).length === 0
            ) {
                this.clearSearch();
                this.loadXmlData();
            }
        },
    },

    methods: {
        liveSearch: _.debounce(function (event) {
            this.searchData();
        }, 1000),

        async loadXmlData(forceUpdate = false) {
            this.clearSearch();
            try {
                if (forceUpdate !== true) {
                    this.$root.spinner = true;
                }

                const requestUrl =
                    forceUpdate === true
                        ? "xml-file?force_update=1"
                        : "xml-file";
                const response = await axios.get(requestUrl);
                const parser = new XMLParser();
                this.xmlData = parser.parse(response.data).root;
                this.filteredData = this.xmlData;
            } catch (error) {
                console.log("Error loading XML datas:", error);
            } finally {
                this.$root.spinner = false;
                this.$root.tableSpinner = false;
            }
        },

        searchData() {
            this.$root.tableSpinner = true;

            this.$router.push({
                query: { searchPageTitle: this.searchPageTitle, page: 1 },
            });

            this.filteredData = Object.fromEntries(
                Object.entries(this.xmlData).filter(([_, item]) => {
                    const matchesTitle = item.page
                        .toLowerCase()
                        .includes(this.searchPageTitle.toLowerCase());
                    const matchesType = item.page_type
                        ? item.page_type
                            .toLowerCase()
                            ?.includes(this.searchPageType.toLowerCase())
                        : false;
                    return matchesTitle;
                })
            );

            this.$root.tableSpinner = false;
        },

        clearSearch() {
            this.searchPageTitle = "";
            this.searchPageType = "";
            this.filteredData = this.xmlData;

            this.$router.push({
                query: { searchPageTitle: this.searchPageTitle, page: 1 },
            });
        },
        formatDateTime(dateTime) {
            return moment(dateTime).fromNow();
        },
        isOldDate(dateTime) {
            const daysAgo = moment().diff(moment(dateTime), "days");
            return daysAgo >= 27;
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
        },
    },

    created() {
        this.loadXmlData();
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

<style scoped>
.btn-load {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-load:hover {
    background-color: #45a049;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1.2em;
    font-family: "Arial", sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #009879;
    color: white;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr:hover {
    background-color: #f1f1f1;
}

.styled-table a {
    color: #009879;
    text-decoration: none;
}

.styled-table a:hover {
    text-decoration: underline;
}

.old-date {
    color: red;
}

.text-success {
    color: green;
}

.text-danger {
    color: red;
}
</style>
