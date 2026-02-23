<template>
    <index-page :defaultTable="false" :show_status="false">
        <template v-slot:search-field>
            <v-select-container title="Brance" field="search_data.branch_id" col="3 mb-3">
                <v-select v-model="search_data.branch_id" label="branch_name" :reduce="obj => obj.id"
                    :options="$root.global.branches" placeholder="--Select One--" :closeOnSelect="true" />
            </v-select-container>
            <v-select-container title="Employee" field="search_data.employee_id" col="3 mb-3">
                <v-select v-model="search_data.employee_id" label="full_name" :reduce="obj => obj.id"
                    :options="$root.global.employees" placeholder="--Select One--" :closeOnSelect="true" />
            </v-select-container>
            <v-select-container title="Payment Method" field="search_data.payment_method" col="3 mb-3">
                <v-select v-model="search_data.payment_method" label="name" :reduce="obj => obj.value"
                    :options="$root.global.paymentmethods" placeholder="--Select One--" :closeOnSelect="true" />
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
                <!-- <pre>{{ datas }}</pre> -->
                <!-- 🧾 Report Header (Visible in Print) -->
                <div class="text-center mb-2 report-title">
                    <h3 class="fw-bold">{{ $root.site.title }}.</h3>
                    <p class="mb-1">{{ $root.site.address }}</p>
                    <p>Email: {{ $root.site.contact_email }} | Phone: {{ $root.site.mobile1 }}</p>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h5 class="fw-bold mb-1">Expense Statement</h5>
                        <small class="text-muted">Report Date: <strong>{{ reportDate }}</strong></small>
                    </div>
                    <div class="text-end">

                    </div>
                </div>
                <!-- 📊 Income Table -->
                <table class="table table-bordered align-middle">

                    <thead class="table-light">
                        <tr class="fw-bold text-center">
                            <th>#</th>
                            <th>Expense Date</th>
                            <th>Branch</th>
                            <th>Account</th>
                            <th>Employee</th>
                            <th>Approved By</th>
                            <th>Approved Date</th>
                            <th>Amount</th>
                            <th>Paid Amnt</th>
                            <th>Due Amnt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="datas.details?.length > 0">
                            <tr v-for="(pdetail, index) in datas.details" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td class="text-md-center">{{ pdetail.expense?.expense_date }}</td>
                                <td class="text-md-center">{{ pdetail.expense?.branch?.branch_name }}</td>
                                <td class="text-md-center">
                                    {{ pdetail.account?.account_code }} - {{ pdetail.account?.account_name }}
                                </td>
                                <td class="text-md-center">{{ pdetail.expense?.employee?.full_name }}</td>
                                <td class="text-md-center">{{ pdetail.expense?.approved_admin?.name }}</td>
                                <td class="text-md-center">{{ pdetail.expense?.approved_date }}</td>
                                <td class="text-md-end">{{ pdetail.amount.toLocaleString('en-BD') }}</td>
                                <td class="text-md-end">{{ pdetail.paid_amount.toLocaleString('en-BD') }}</td>
                                <td class="text-md-end">
                                    {{ (pdetail.amount -
                                        pdetail.paid_amount).toLocaleString('en-BD') }}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="7" class="text-md-end"><strong>Total</strong></td>
                                <td class="text-md-end">
                                    <strong>{{ datas.total_expense.toLocaleString('en-BD') }}</strong>
                                </td>
                                <td class="text-md-end">
                                    <strong>{{ datas.total_paid.toLocaleString('en-BD') }}</strong>
                                </td>
                                <td class="text-md-end">
                                    <strong>{{ datas.total_due.toLocaleString('en-BD') }}</strong>
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="9" class="text-md-center">
                                    <span v-if="search_data.item_id">
                                        No ledger data available. Please select an another item.
                                    </span>
                                    <span v-else>
                                        Please select an item to view its ledger report.
                                    </span>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>

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
const model = "expenseStatement";

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

    methods: {
        search() {
            this.getIncomeStatement();
        },
        getIncomeStatement() {
            axios
                .get(`report/expensestatement/`, { params: this.search_data })
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
