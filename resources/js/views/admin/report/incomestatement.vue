<template>
    <index-page :defaultTable="false" :show_status="false">
        <template v-slot:search-field>
            <date-picker id='searchfromexpensedate' v-model='search_data.from_date' field='search_data.from_date'
                title='From Date' placeholder='From Date' col='3' :req='false'></date-picker>
            <date-picker id='searchtoexpensedate' v-model='search_data.to_date' field='search_data.to_date'
                title='To Date' placeholder='To Date' col='3' :req='false'
                :disablePastDates="search_data.to_transaction_date"></date-picker>
        </template>
        <template v-slot:table-list>
            <div class="col-md-12">
                <div class="d-flex gap-3 align-items-center justify-content-end">
                    <div class="print_action text-end">
                        <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Print"
                            v-x-tooltip @click="print('printArea', model)">
                            <i class="fas fa-print"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="my-5" id="printArea">
                <!-- 🧾 Report Header (Visible in Print) -->
                <div class="text-center mb-2 report-title">
                    <h3 class="fw-bold">{{ $root.site.title }}.</h3>
                    <p class="mb-1">{{ $root.site.address }}</p>
                    <p>Email: {{ $root.site.contact_email }} | Phone: {{ $root.site.mobile1 }}</p>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h5 class="fw-bold mb-1">Income Statement</h5>
                        <small class="text-muted">Report Date: <strong>{{ reportDate }}</strong></small>
                    </div>
                    <div class="text-end">
                        <small class="text-muted">
                            Period:
                            <strong>{{ dateRange }}</strong>
                        </small>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-md-8"></div>
                    <div class="col-md-4">
                        <!-- 📊 Summary Table -->
                        <table class="table table-bordered align-middle">
                            <thead class="table-light">
                                <tr class="fw-bold text-center">
                                    <th>Particular</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-md-center"><strong>Total Income</strong></td>
                                    <td class="text-md-end"><strong>{{ Number(datas.total_income || 0).toFixed(2)
                                    }}</strong>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="text-md-center"><strong>Total Expense</strong></td>
                                    <td class="text-md-end">
                                        <strong>{{ Number(datas.total_expense || 0).toFixed(2) }}</strong>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="text-md-center"><strong>Net Profit</strong></td>
                                    <td class="text-md-end">
                                        <strong>{{ Number(datas.net_profit || 0).toFixed(2) }}</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Account Type</th>
                                        <th>Account</th>
                                        <th class="text-md-center">Cr Amount</th>
                                        <th class="text-md-center">Dr Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(vdata, index) in datas.details" :key="index">
                                        <td>{{ vdata.account?.account_type }}</td>
                                        <td> {{ vdata.account?.account_code }} - {{ vdata.account?.account_name }}</td>
                                        <td class="text-md-end">{{ vdata.total_credit }}</td>
                                        <td class="text-md-end">{{ vdata.total_debit }}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="text-md-end"><strong>Total</strong></td>
                                        <td class="text-md-end">
                                            <strong>{{ Number(datas.total_income).toFixed(2) }}</strong>
                                        </td>
                                        <td class="text-md-end">
                                            <strong>{{ Number(datas.total_expense).toFixed(2) }}</strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <!-- 📌 Footer Note -->
                <div class="mt-4 small text-muted">
                    <p>Generated by: <strong>Admin</strong></p>
                    <p>This report is system generated and does not require signature.</p>
                </div>

            </div>
        </template>
    </index-page>
</template>

<script>
import axios from "axios";
import moment from "moment";

const tableColumns = [{ field: "status", title: "Status", align: "center" }];
const json_fields = {
    Title: "Hello",
};
const model = "incomeStatement";

export default {
    data() {
        return {
            model: model,
            page_title: "",
            reportDate: moment().format('D MMMM, YYYY'),
            json_fields: json_fields,
            search_data: {
                category_id: null,
                is_zero: 0,
                from_qty: null,
                to_qty: null
            },
            table: {
                columns: tableColumns,
                routes: {},
                datas: [],
                meta: [],
                links: [],
            },
            datas: [], // Store the daily report data
            clients: [],  // Store account heads for the select dropdown
        };
    },

    provide() {
        return {
            validate: this.validation,
            model: this.model,
            search_data: this.search_data,
            table: this.table,
            json_fields: this.json_fields,
            search: this.search,
            resetSearchData: this.resetSearchData,
        };
    },
    computed: {
        dateRange() {
            if (this.search_data.from_date && this.search_data.to_date) {
                return moment(this.search_data.from_date).format("D MMM, YYYY") +
                    " to " +
                    moment(this.search_data.to_date).format("D MMM, YYYY");
            }
            return "Current Month";
        }
    },
    methods: {
        search() {
            this.getIncomeStatement();
        },
        getIncomeStatement() {
            axios
                .get(`report/incomestatement/`, { params: this.search_data })
                .then((res) => {
                    this.datas = res.data
                })
        },
        // Capitalize the first letter of a string
        ucfirst(str) {
            if (!str) return "";
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        getClients() {
            axios.get(
                `clients/`
            )
                .then((response) => {
                    this.clients = response.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },

    created() {
        this.getIncomeStatement();
        this.getClients();
    },

    validators: {},
};
</script>
