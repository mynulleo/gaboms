<template>
  <index-page>
    <template v-slot:search-field>
      <v-select-container title="Branch" field="search_data.branch_id" col="3">
        <v-select v-model="search_data.branch_id" label="branch_name" :reduce="(obj) => obj.id"
          :options="$root.global.branches" placeholder="--Select Branch--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Employee" field="search_data.employee_id" col="3">
        <v-select v-model="search_data.employee_id" label="full_name" :reduce="(obj) => obj.id"
          :options="$root.global.employees" placeholder="--Select Employee--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='searchfromexpensedate' v-model='search_data.from_expense_date'
        field='search_data.from_expense_date' title='From Expense Date' placeholder='From Expense Date' col='3'
        :req='false'></date-picker>
      <date-picker id='searchtoexpensedate' v-model='search_data.to_expense_date' field='search_data.to_expense_date'
        title='To Transaction Date' placeholder='To Transaction Date' col='3' :req='false'
        :disablePastDates="search_data.to_transaction_date"></date-picker>
    </template>
    <template v-slot:summary-page>
      <div class="row mb-3">
        <div class="col-md-8">
        </div>

        <div class="col-md-4 d-flex justify-content-md-end mt-3 mt-md-0">
          <div class="card shadow-sm border-0" style="min-width: 320px;">
            <div class="card-body p-3">

              <!-- Heading -->
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="fw-bold mb-0 text-primary">
                  <i class="bi bi-bar-chart-line"></i>
                  Page Summary
                </h6>
              </div>

              <!-- Summary Table -->
              <div class="table-responsive">
                <table class="table table-sm align-middle mb-0">
                  <tbody>
                    <tr>
                      <td class="text-muted">Total Expense</td>
                      <td class="text-end fw-semibold">
                        {{ totalExpense }}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-muted">Total Approved Expense</td>
                      <td class="text-end fw-semibold">{{ totalApprovedExpense }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </template>
  </index-page>

</template>

<script>

const model = "expense";

const tableColumns = [
  { field: "expenseid", title: "Expenseid" },
  { field: "expense_date", title: "Expense Date" },
  { field: "branch_id", title: "Branch", subfield: "branch.branch_name" },
  { field: "employee_id", title: "Employee", subfield: "employee.full_name" },
  { field: "total_amount", title: "Total Amount" },
  { field: "approved_by", title: "Approved By", subfield: "approved_admin.name" },
  { field: "approved_date", title: "Approved Date" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Expenseid": "expenseid",
  "Expense Date": "expense_date",
  "Branch Id": "branch_id",
  "Total Amount": "total_amount",
  "Approved By": "approved_by",
  "Approved Date": "approved_date",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: { default: "Select One", title: "Title" },
      search_data: {
        pagination: this.$route.query.pagination ?? 10,
        page: this.$route.query.page ?? 1,
        field_name: this.$route.query.field_name ?? "",
        value: this.$route.query.value ?? "",
        status: this.$route.query.status ?? "",
      },
      table: {
        columns: tableColumns,
        routes: {},
        datas: [],
        meta: [],
        links: []
      }
    };
  },
  computed: {
    totalExpense() {
      if (!this.table.datas) return 0;

      const amount = this.table.datas.reduce((sum, row) => {
        return sum + Number(row.total_amount || 0);
      }, 0);

      return amount.toLocaleString('en-BD');
    },
    totalApprovedExpense() {
      if (!this.table.datas) return 0;

      const amount = this.table.datas.reduce((sum, row) => {
        if (row.approved_by) {
          return sum + Number(row.total_amount || 0);
        }
        return sum; // 🔥 important
      }, 0);

      return amount.toLocaleString('en-BD');
    },
  },
  provide() {
    return {
      validate: this.validation,
      model: this.model,
      fields_name: this.fields_name,
      search_data: this.search_data,
      table: this.table,
      json_fields: this.json_fields,
      search: this.search,
      resetSearchData: this.resetSearchData,
    };
  },

  methods: {
    search() {
      this.get_paginate(this.model, this.search_data);
    },

    resetSearchData() {
      this.search_data.pagination = 10;
      this.search_data.page = 1;
      this.search_data.field_name = "";
      this.search_data.value = "";
      this.search_data.status = "";
    },
  },

  created() {
    this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();
  },

  validators: {},
};
</script>