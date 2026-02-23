<template>
    <div class="row g-3">
        <div class="component_loader" :class="{ 'z-top': $root.initialLoader }"
            v-if="$root.spinner && !$root.tableSpinner">
            <div class="loader"></div>
        </div>
        <template v-else>
            <!-- counter section -->
            <div class="col-xl-3 col-lg-6 col-md-6" v-for="(menu, index) in data.dashboardMenus" :key="index">
                <div class="card top_short_info_card">
                    <div class="card-body">
                        <router-link :to="{ name: menu.route_name }" class="d-block w-100">
                            <div class="top_short_info d-flex justify-content-between gap-4 align-items-center">
                                <div class="text">
                                    <h4 class="label">{{ menu.menu_name }}</h4>
                                    <h3 class="title">
                                        {{ menu.total_data_count }}
                                    </h3>
                                </div>
                                <div v-html="menu.icon"
                                    class="icon rounded-pill d-flex justify-content-center align-items-center"
                                    data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="menu.menu_name"
                                    v-x-tooltip></div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- chart section -->
            <div class="col-xxl-9 col-xl-8 col-lg-7">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card_title text-start">User Statistics</h4>
                        <div style="
                                height: 400px;
                                max-width: 800px;
                                margin: 0 auto;
                            ">
                            <BarChart :chartData="barChartData" :chartOptions="barChartOptions" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-xl-4 col-lg-5">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card_title text-start">Daily Report</h4>
                        <div style="max-width: 400px">
                            <PieChart :chartData="pieChartData" :chartOptions="pieChartOptions" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- table data section -->
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card_title text-start">Pendeng Residence</h4>
                        <div class="table-responsive text-nowrap rounded-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="sl" style="min-width: 70px">
                                            <span class="heading"> SL </span>
                                        </th>
                                        <th>
                                            <div class="heading">Resedence No</div>
                                        </th>
                                        <th>
                                            <div class="heading">Residence Name</div>
                                        </th>
                                        <th>
                                            <div class="heading">Owner Name</div>
                                        </th>
                                        <th class="action_th"></th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card_title text-start">Recent Invoices</h4>
                        <div class="table-responsive text-nowrap rounded-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="sl" style="min-width: 70px">
                                            <span class="heading"> SL </span>
                                        </th>
                                        <th>
                                            <div class="heading">Invoice No</div>
                                        </th>

                                        <th>
                                            <div class="heading">Invoice Date</div>
                                        </th>
                                        <th>
                                            <div class="heading">Residence Name</div>
                                        </th>
                                        <th>
                                            <div class="heading">Owner Name</div>
                                        </th>
                                        <th>
                                            <div class="heading">
                                                amount
                                            </div>
                                        </th>
                                        <th class="action_th"></th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import BarChart from "../../components/chart/bar.vue";
import PieChart from "../../components/chart/pie.vue";

export default {
    components: { BarChart, PieChart },
    data() {
        return {
            data: {
                dashboardMenus: {},
                activities: {},
                loginHistories: {},
            },
            barChartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: "#c5cae9",
                        data: [],
                    },
                ],
            },
            barChartOptions: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                    },
                },
            },
            pieChartData: {
                labels: [],
                datasets: [
                    {
                        labels: "Daily Report",
                        backgroundColor: [],
                        data: [],
                    },
                ],
            },
            pieChartOptions: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };
    },

    watch: {
        $route(toRoute, fromRoute) {
            if (
                toRoute.path === fromRoute.path &&
                Object.keys(toRoute.query).length === 0
            ) {
                this.getDashboardData();
            }
        },
    },

    methods: {
        getDashboardData() {
            this.$root.spinner = true;

            this.$router.push({ query: { page: 1 } });

            axios
                .get("/dashboard")
                .then((response) => {
                    this.data = response.data;
                    const data = response.data;

                    // Generate Pie Chart...
                    this.generatePieChart(data);

                    // Generate Bar Chart...
                    this.generateBarChart(data);
                })
                .catch((error) => { })
                .finally(() => {
                    this.$root.spinner = false;
                });
        },

        generateBarChart(data) {
            if (
                data &&
                data.barData &&
                data.barData.labels &&
                data.barData.data
            ) {
                const barLabels = [];
                const barData = [];

                data.barData.labels.forEach((element) => {
                    barLabels.push(element);
                });

                data.barData.data.forEach((element) => {
                    barData.push(element);
                });

                this.barChartData = {
                    labels: barLabels,
                    datasets: [
                        {
                            label: "User Statistics",
                            backgroundColor: [
                                "#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6",
                                "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
                                "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A",
                                "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
                                "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC",
                                "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399",
                                "#E666B3"
                            ],
                            data: barData,
                        },
                    ],
                };
            } else {
                console.error("Invalid data format for generating bar chart");
            }
        },
        generatePieChart(data) {
            if (
                data &&
                data.pieData &&
                data.pieData.labels &&
                data.pieData.data
            ) {
                const pieLabels = [];
                const pieData = [];

                data.pieData.labels.forEach((element) => {
                    pieLabels.push(element);
                });

                data.pieData.data.forEach((element) => {
                    pieData.push(element);
                });

                this.pieChartData = {
                    labels: pieLabels,
                    datasets: [
                        {
                            backgroundColor: [
                                "#DD1B16", // Red
                                "#FFB347", // Orange
                                "#6A5ACD",  // Slate Blue
                                "#41B883", // Green
                                "#E46651", // Red-Orange
                                "#00D8FF", // Sky Blue
                            ],
                            data: pieData,
                        },
                    ],
                };
            } else {
                console.error("Invalid data format for generating pie chart");
            }
        },
    },
    created() {
        this.getDashboardData();
        this.setBreadcrumbs(this.model, "index", "Dashboard");
    },
};
</script>
