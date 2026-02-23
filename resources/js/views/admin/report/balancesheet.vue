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
                        <h5 class="fw-bold mb-1">Balance Sheet</h5>
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
                    <div class="col-md-6">
                        <fieldset>
                            <span class="legend">Asset</span>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Account Name</th>
                                            <th class="text-md-end">Debit</th>
                                            <th class="text-md-end">Credit</th>
                                            <th class="text-md-end">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(asset, index) in datas.assets" :key="index">
                                            <td>{{ asset.code }}</td>
                                            <td>{{ asset.name }}</td>
                                            <td class="text-md-end">{{ Number(asset.dr_amount).toFixed(2) }}</td>
                                            <td class="text-md-end">{{ Number(asset.cr_amount).toFixed(2) }}</td>
                                            <td class="text-md-end">{{ Number(asset.balance).toFixed(2) }}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-md-end" colspan="4"><strong>Total</strong></td>
                                            <td class="text-md-end">
                                                <strong>{{ Number(datas.total_assets).toFixed(2) }}</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-md-6">
                        <fieldset>
                            <span class="legend">Liabilities & Equity</span>
                            <h5 class="mt-2">Liabilities</h5>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Account Name</th>
                                            <th class="text-md-end">Debit</th>
                                            <th class="text-md-end">Credit</th>
                                            <th class="text-md-end">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(liability, index) in datas.liabilities" :key="index">
                                            <td>{{ liability.code }}</td>
                                            <td>{{ liability.name }}</td>
                                            <td class="text-md-end">{{ Number(liability.dr_amount).toFixed(2) }}</td>
                                            <td class="text-md-end">{{ Number(liability.cr_amount).toFixed(2) }}</td>
                                            <td class="text-md-end">{{ Number(liability.balance).toFixed(2) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="mt-2">Equity</h5>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Account Name</th>
                                            <th class="text-md-end">Debit</th>
                                            <th class="text-md-end">Credit</th>
                                            <th class="text-md-end">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(equitydata, index) in datas.equity" :key="index">
                                            <td>{{ equitydata.code }}</td>
                                            <td>{{ equitydata.name }}</td>
                                            <td class="text-md-end">{{ Number(equitydata.dr_amount).toFixed(2) }}</td>
                                            <td class="text-md-end">{{ Number(equitydata.cr_amount).toFixed(2) }}</td>
                                            <td class="text-md-end">{{ Number(equitydata.balance).toFixed(2) }}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-md-end" colspan="4">
                                                <strong>Total Liability & Equity</strong>
                                            </td>
                                            <td class="text-md-end">
                                                <strong>{{ Number(datas.total_liabilities_equity).toFixed(2) }}</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </fieldset>
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
            this.getBalanceSheet();
        },
        getBalanceSheet() {
            axios
                .get(`report/balancesheet/`, { params: this.search_data })
                .then((res) => {
                    this.datas = res.data
                })
        },
        // Capitalize the first letter of a string
        ucfirst(str) {
            if (!str) return "";
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

    },

    created() {
        this.getBalanceSheet();
    },

    validators: {},
};
</script>
