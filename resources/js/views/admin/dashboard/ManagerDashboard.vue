<template>
    <div class="row g-3">
        <!-- Loader -->
        <div class="component_loader" :class="{ 'z-top': $root.initialLoader }"
            v-if="$root.spinner && !$root.tableSpinner">
            <div class="loader"></div>
        </div>

        <template v-else>
            <!-- Counter Section -->
            <div class="col-xl-3 col-lg-6 col-md-6" v-for="(menu, index) in data.dashboard?.dashboardMenus"
                :key="index">
                <div class="card top_short_info_card">
                    <div class="card-body">
                        <router-link :to="{ name: menu.route_name }" class="d-block w-100">
                            <div class="top_short_info d-flex justify-content-between gap-4 align-items-center">
                                <div class="text">
                                    <h4 class="label">{{ menu.menu_name }}</h4>
                                    <h3 class="title">{{ menu.total_data_count }}</h3>
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
            <div class="col-lg-12"></div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card_title text-start">Fund Data</h4>
                        <PieChart :chartData="pieChartData" :chartOptions="pieChartOptions" />
                    </div>
                </div>
            </div>
            <!-- Chart Section -->
            <div class="col-xxl-4 col-xl-4 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card_title text-start">Stock Summary</h4>
                        <div class="table-responsive text-nowrap rounded-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="sl" style="min-width: 70px">
                                            <span class="heading"> SL </span>
                                        </th>
                                        <th>
                                            <div class="heading">Item Name</div>
                                        </th>
                                        <th>
                                            <div class="heading">Stock</div>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <template v-if="data.dashboard?.stockData && data.dashboard?.stockData.length > 0">
                                        <tr v-for="(itemstock, index) in data?.dashboard?.stockData" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ itemstock.item?.barcode }} - {{ itemstock.item?.title }}</td>
                                            <td>{{ itemstock.current_stock }}</td>
                                        </tr>
                                    </template>
                                    <tr v-else>
                                        <td colspan="5">
                                            <p class="text-center">
                                                No data available
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card_title text-start">Bandwidth Info</h4>
                        <div class="table-responsive text-nowrap rounded-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="sl" style="min-width: 70px">
                                            <span class="heading"> SL </span>
                                        </th>
                                        <th>
                                            <div class="heading">Category</div>
                                        </th>
                                        <th>
                                            <div class="heading">Bandwidth</div>
                                        </th>
                                        <th class="action_th"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template
                                        v-if="data.dashboard?.bandwidthData && data.dashboard?.bandwidthData.length > 0">
                                        <tr v-for="(bandwidth, index) in data.dashboard?.bandwidthData" :key="index">
                                            <td>{{ ++index }}</td>
                                            <td>{{ bandwidth.category_name }}</td>
                                            <td>{{ bandwidth.total_bandwidth }} MBPs</td>
                                        </tr>
                                    </template>
                                    <tr v-else>
                                        <td colspan="5">
                                            <p class="text-center">
                                                No data available
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>


        </template>
    </div>
</template>

<script>
import PieChart from "../../../components/chart/pie.vue";
import BarChart from "../../../components/chart/bar.vue";
export default {
    name: "ResidenceOwnerDashboard",
    components: { PieChart, BarChart },
    data() {
        return {
            barChartData: {},
            pieChartData: {},
            barChartOptions: { responsive: true },
            pieChartOptions: { responsive: true },
        };
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    watch: {
        data: {
            handler(newData) {
                if (newData) {
                    this.generateBarChart(newData);
                    this.generatePieChart(newData);
                }
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        generateBarChart(data) {
            if (!data?.dashboard?.barData) return;
            const { labels, data: chartData } = data.dashboard.barData;
            this.barChartData = {
                labels,
                datasets: [
                    { label: "Invoice", backgroundColor: "#41B883", data: Object.values(chartData.invoice) },
                    { label: "Receive", backgroundColor: "#E46651", data: Object.values(chartData.receive) },
                    { label: "Due", backgroundColor: "#00D8FF", data: Object.values(chartData.due) },
                ],
            };
        },
        generatePieChart(data) {
            if (!data?.dashboard?.pieData) return;
            const { labels, data: chartData } = data.dashboard.pieData;
            this.pieChartData = {
                labels,
                datasets: [
                    {
                        backgroundColor: [
                            "#6A0572", "#AB83A1", "#3E92CC", "#FA7921",
                            "#9BC53D", "#5D2E8C", "#FE5F55", "#247BA0"
                        ],
                        data: Object.values(chartData),
                    },
                ],
            };
        },
    },
};
</script>
