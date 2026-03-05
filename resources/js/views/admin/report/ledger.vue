<template>
    <index-page :defaultTable="false" :show_status="false">
        <template v-slot:search-field>
            <v-select-container title="Select Account" field="search_data.account_id" col="3">
                <v-select v-model="search_data.account_id" label="name" :reduce="(obj) => obj.id"
                    :options="$root.global.allaccounts" placeholder="--Select Account--" :closeOnSelect="true">
                </v-select>
            </v-select-container>
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
                        <h5 class="fw-bold mb-1">
                            {{ datas?.account_name ? datas.account_name + ' Ledger' : 'Ledger' }}
                        </h5>
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
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table tabled-striped">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Voucher no</th>
                                        <th>Description</th>
                                        <th class="text-md-center">Debit</th>
                                        <th class="text-md-center">Credit</th>
                                        <th class="text-md-center">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="datas.entries && datas.entries.length">
                                        <tr>
                                            <td>{{ datas.opening_date }}</td>
                                            <td></td>
                                            <td>Opening Balance</td>
                                            <td></td>
                                            <td></td>
                                            <td class="text-md-end">{{ Number(datas.opening_balance).toFixed(2) }}</td>
                                        </tr>
                                        <tr v-for="(record, index) in datas.entries" :key="index">
                                            <td>{{ record.voucher?.voucher_date }}</td>
                                            <td>{{ record.voucher?.voucherno }}</td>
                                            <td>
                                                {{ record.line_narration || record.voucher?.narration
                                                    || '' }}
                                            </td>
                                            <td class="text-md-end"> {{ record.dr_amount }}</td>
                                            <td class="text-md-end"> {{ record.cr_amount }}</td>
                                            <td class="text-md-end"> {{ Number(record.running_balance).toFixed(2) }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" class="text-md-end"><strong>Total</strong></td>
                                            <td class="text-md-end">
                                                <strong>
                                                    {{ Number(datas.total_debit).toFixed(2) }}
                                                </strong>
                                            </td>
                                            <td class="text-md-end">
                                                <strong> {{ Number(datas.total_credit).toFixed(2) }}</strong>
                                            </td>
                                            <td class="text-md-end">
                                                <strong>{{ Number(datas.closing_balance).toFixed(2) }}</strong>
                                            </td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td colspan="6" class="text-md-center">No data found</td>
                                        </tr>
                                    </template>
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
            this.getLedger();
        },
        getLedger() {
            axios
                .get(`report/ledger/`, { params: this.search_data })
                .then((res) => {
                    console.log(res.data);
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
        this.getLedger();
        this.getClients();
    },

    validators: {},
};
</script>
