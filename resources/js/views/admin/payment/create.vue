<template>
  <create-form @onSubmit='submit'>
    <date-picker id='date4' v-model='data.payment_date' field='data.payment_date' title='Payment Date'
      placeholder='Payment Date' col='2' :req='false'></date-picker>
    <Switch v-model='data.payment_type' field='data.payment_type' title='Payment Type' on-label='Receive'
      off-label='Pay' onValue="Receive" offValue="Pay" col="2" :req='true'>
    </Switch>
    <Select title='Client' v-model='data.client_id' field='data.client_id' v-if="data.payment_type == 'Receive'"
      label='name' :reduce='(obj) => obj.id' :options='clients' @change="onClientChange" placeholder='--Select One--'
      :readonly="$route.params.id ? true : false" :closeOnSelect='true' col="2" :required='false' />
    <Select title='Supplier' v-model='data.supplier_id' field='data.supplier_id' label='org_name'
      v-if="data.payment_type == 'Pay'" :reduce='(obj) => obj.id' @change="onSupplierChange"
      :options='$root.global.suppliers' placeholder='--Select One--' :readonly="$route.params.id ? true : false"
      :closeOnSelect='true' col="2" :required='false' />
    <Select title='Uplink Provider' v-model='data.uplink_provider_id' field='data.uplink_provider_id' label='org_name'
      v-if="data.payment_type == 'Pay'" :readonly="$route.params.id ? true : false" :reduce='(obj) => obj.id'
      @change="onULPChange" :options='$root.global.uplinkproviders' placeholder='--Select One--' :closeOnSelect='true'
      col="2" :required='false' />
    <Select title='Employee' v-model='data.employee_id' field='data.employee_id' label='full_name'
      v-if="data.payment_type == 'Pay' || data.payment_type == 'Receive'" :readonly="$route.params.id ? true : false"
      :reduce='(obj) => obj.id' :options='$root.global.employees' placeholder='--Select One--' :closeOnSelect='true'
      @change="onEmployeeChange" col="2" :required='false' />
    <SwitchBoolean v-if="data.payment_type == 'Pay'" :disabled="$route.params.id ? true : false"
      v-model='data.office_expense' field='data.office_expense' title='Is Office Expense' on-label='Yes' off-label='No'
      col="2" @change="onOfficeExpenseChange(data.office_expense)" :req='true'>
    </SwitchBoolean>
    <div class="col-md-12">&nbsp;</div>
    <div class="col-md-8">
      <fieldset>
        <span class="legend">Reference Info</span>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Check</th>
              <th>Ref Info</th>
              <th style="width:150px;">Account</th>
              <th>Amount</th>
              <th>Paid Amt</th>
              <th>Due Amt</th>
              <th>Adjust Amnt.</th>
              <th>Is Closed</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="invoices">
              <tr v-for="(inv, i) in invoices" :key="i">
                <td>
                  <input type="checkbox" v-model="inv.checked" @change="toggleInvoice(inv)" />
                </td>
                <td>
                  {{ inv.reference_type }}
                  <div v-html="inv.reference_info"></div>
                </td>
                <td v-if="$root.global && $root.global.allaccounts">
                  {{ getAccountName(inv.account_id) }}
                </td>

                <td v-else>
                  Loading...
                </td>
                <td>{{ inv.amount }}</td>
                <td>{{ inv.paid_amount }}</td>
                <td>{{ inv.due_amount }}</td>
                <td>
                  <Input v-model='inv.adjust_amount' field='inv.adjust_amount' :req='false'
                    @input="calculateTotals(inv)" col="12" :readonly="true" />
                </td>
                <td>
                  <input type="checkbox" field="inv.is_closed" v-model="inv.is_closed" @change="onClosedToggle(inv)">
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="8"><strong>No Data Found</strong></td>
              </tr>
            </template>
          </tbody>
        </table>
      </fieldset>
    </div>
    <div class="col-md-4">
      <div class="row g-3">
        <div class="col-md-12">
          <fieldset>
            <span class="legend">Pay To</span>
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th width="35%">Name</th>
                  <th width="5%">:</th>
                  <td>{{ payto.name }}</td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <th>:</th>
                  <td>{{ payto.mobile }}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <th>:</th>
                  <td>{{ payto.address }}</td>
                </tr>
                <tr>
                  <th>Other Info</th>
                  <th>:</th>
                  <td>
                    <div v-html="payto.info"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </div>
        <div class="col-md-12">
          <fieldset>
            <span class="legend">Transection Amount</span>
            <div class="d-flex justify-content-between align-items-center mb-2 mt-3">
              <span class="fw-medium text-muted">
                <span v-if="data.payment_type == 'Receive'">Total Due</span>
                <span v-else>Total Payable</span>
              </span>

              <span class="fs-5 fw-bold text-danger">
                {{ this.$filter.formatBDT(totals.total_due) }}
              </span>
            </div>

            <hr class="my-2">

            <div class="d-flex justify-content-between align-items-center">
              <span class="fw-medium text-muted">
                <span v-if="data.payment_type == 'Receive'">Selected Amount</span>
                <span v-else>Pay Now</span>
              </span>

              <span class="fs-4 fw-bold text-success">
                {{ this.$filter.formatBDT(totals.total_receive) }}
              </span>
            </div>
          </fieldset>
        </div>
      </div>

    </div>
    <Input v-if="data.payment_type == 'Receive'" v-model='data.discount' field='data.discount' title='Discount'
      @input="calculateTotals()" col="2" :req='false' />
    <Input v-model='data.amount' field='data.amount' title='Paid Amount' col="4" :req='true' />
    <div class="col-md-2">
      <div class="form-group">
        <label class="form-label d-flex justify-content-between align-items-center gap-4">&nbsp;</label>
        <button type="button" class="btn btn-info text-white" @click="reverseAdjustment"><i class="fas fa-adjust"></i>
          Adjustment</button>
      </div>

    </div>
    <div class="col-md-12">
      <fieldset class="mt-2">
        <span class="legend">Payment Method</span>
        <div class="row g-3">
          <Select title='Payment Method' v-model='data.payment_method' field='data.payment_method' col="2" label='name'
            :reduce='(obj) => obj.value' :options='$root.global.paymentmethods' placeholder='--Select One--'
            :closeOnSelect='true' :required='true' />
          <Select title='Mbanking Type' v-model='data.mbanking_type' field='data.mbanking_type' col="2" label='name'
            :reduce='(obj) => obj.value' :options='$root.global.mbankings' placeholder='--Select One--'
            :closeOnSelect='true' :required='false' />
          <Input v-model='data.trxid' field='data.trxid' title='Trxid' col="2" :req='false' />
          <Input v-model='data.chequeno' field='data.chequeno' title='Chequeno' col="2" :req='false' />
          <Select title='Bank' v-model='data.bank_id' field='data.bank_id' label='bank_name' :reduce='(obj) => obj.id'
            col="2" :options='banks' placeholder='--Select One--' :closeOnSelect='true' :required='false' />
          <Input v-model='data.branch' field='data.branch' title='Branch' col="2" :req='false' />
          <Input v-model='data.account_name' field='data.account_name' title='Account Name' col="2" :req='false' />
          <Input v-model='data.accountno' field='data.accountno' title='Account No' col="2" :req='false' />
        </div>
      </fieldset>
    </div>
    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'payment';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        payment_date: this.$filter.today(),
        payment_type: 'Receive',
        client_id: null,
        supplier_id: null,
        payment_method: null,
        status: 'active',
        discount: 0,
        amount: 0,
        payment_details: [],
        bank_id: null,
        account_name: '',
        accountno: '',
        branch: '',
      },
      fund: 0,
      banks: [],
      clients: [],
      payto: {
        name: '',
        mobile: '',
        last_receive: 0,
        last_payment: 0,
        total_amount: 0,
        paid_amount: 0
      },
      invoices: [],   // client due invoices
      selectedInvoices: [],
      totals: {
        total_receive: 0,
        total_due: 0
      }

    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.payment_method': function () {
      this.getFundBalance();
    }
  },
  computed: {
    allAccounts() {
      return this.$root?.global?.allaccounts || [];
    }
  },
  methods: {
    onClientChange(client_id) {
      this.get_client_info(client_id);
      this.get_client_due_invoices(client_id);
    },

    onSupplierChange(supplier_id) {
      this.get_supplier_info(supplier_id);
      this.get_purchase_invoices(supplier_id);
    },

    onULPChange(ulpid) {
      this.get_ulp_info(ulpid);
      this.get_bandwidth_invoices(ulpid);
    },

    onEmployeeChange(empid) {
      this.get_emp_info(empid);
      if (this.data.payment_type == 'Receive') {
        this.get_employee_loan_installment(empid)
      }
      if (this.data.payment_type == 'Pay') {
        this.get_employee_payable(empid);
      }

    },
    onOfficeExpenseChange(officeexpense) {
      if (officeexpense) {
        this.get_ofice_expenses();
      }
    },
    get_emp_info(empid) {

      axios.get(`/employeeinfo/${empid}`).then(res => {
        const ref = res.data;
        this.payto = {
          name: ref.full_name,
          mobile: ref.mobile,
          address: ref.address,
          info: ''
        };
        // Employee bank info
        this.data.payment_method = 'Bank';
        this.data.account_name = ref.account_name;
        this.data.accountno = ref.account_no;
        this.data.bank_id = ref.bank_id;
        this.data.branch = ref.branch;
      }).catch(() => {
        this.payto = {};
      });
    },
    get_ulp_info(ulpid) {
      axios.get(`/getulpbyid/${ulpid}`).then(res => {
        const ref = res.data;

        this.payto = {
          name: ref.org_name,
          mobile: ref.phone,
          address: ref.address,
          info: ''
        };
        // Uplink Provider bank info
        this.data.payment_method = 'Bank';
        this.data.account_name = ref.account_name;
        this.data.accountno = ref.account_no;
        this.data.bank_id = ref.bank_id;
        this.data.branch = ref.branch;
      }).catch(() => {
        this.payto = {};
      });
    },
    get_supplier_info(id) {
      axios.get(`/getsupplierbyid/${id}`).then(res => {
        const ref = res.data;

        this.payto = {
          name: ref.supid + ' ' + ref.org_name,
          mobile: ref.mobile,
          address: ref.address,
          info:
            'Contact Person - ' + ref.name +
            ' Designation - ' + ref.designation
        };
        // Supplier bank info
        this.data.payment_method = 'Bank';
        this.data.account_name = ref.account_name;
        this.data.accountno = ref.account_no;
        this.data.bank_id = ref.bank_id;
        this.data.branch = ref.branch;
      }).catch(() => {
        this.payto = {};
      });
    },
    get_client_info(id) {
      axios.get(`/getclientbyid/${id}`).then(res => {
        const ref = res.data;

        this.payto = {
          name: ref.clientid + ' ' + ref.name,
          mobile: ref.mobile,
          address: ref.address,
          info:
            'Reg Date - ' + ref.reg_date +
            ' Area - ' + (ref.area ? ref.area.area_name : '')
        };
        // client bank info
        this.data.payment_method = 'Bank';
        this.data.account_name = ref.account_name;
        this.data.accountno = ref.account_no;
        this.data.bank_id = ref.bank_id;
        this.data.branch = ref.branch;
        this.data.total_due = this.totals.total_due;
      }).catch(() => {
        this.payto = {};
      });
    },
    get_ofice_expenses() {
      axios.get(`getofficeexpenses`).then(res => {
        this.invoices = res.data.map(inv => ({
          checked: false,
          reference_type: inv.reference_type,
          reference_id: inv.reference_id,
          account_id: inv.account_id,
          reference_info: inv.reference_info,
          amount: inv.amount,
          paid_amount: inv.paid_amount,
          due_amount: inv.due_amount,
          adjust_amount: 0,
          is_closed: false
        }));
        this.data.client_id = '',
          this.data.employee_id = '',
          this.data.supplier_id = '',
          this.uplink_provider_id = '',
          this.calculateTotals();
      });
    },
    get_client_due_invoices(id) {
      axios.get(`getclientdueinvoices/${id}`).then(res => {
        this.invoices = res.data.map(inv => ({
          checked: false,
          reference_type: inv.reference_type,
          reference_id: inv.reference_id,
          account_id: inv.account_id,
          reference_info: inv.reference_info,
          amount: inv.amount,
          paid_amount: inv.paid_amount,
          due_amount: inv.due_amount,
          adjust_amount: 0,
          is_closed: false
        }));
        this.data.uplink_provider_id = '',
          this.data.employee_id = '',
          this.data.supplier_id = '',
          this.office_expense = false,
          this.calculateTotals();
      });
    },
    get_bandwidth_invoices(ulpid) {
      axios.get(`getulpbandwidths/${ulpid}`).then(res => {
        this.invoices = res.data.map(inv => ({
          checked: false,
          reference_type: inv.reference_type,
          reference_id: inv.reference_id,
          account_id: inv.account_id,
          reference_info: inv.reference_info,
          amount: inv.amount,
          paid_amount: inv.paid_amount,
          due_amount: inv.due_amount,
          adjust_amount: 0,
          is_closed: false
        }));
        this.data.client_id = '',
          this.data.employee_id = '',
          this.data.supplier_id = '',
          this.office_expense = false,
          this.calculateTotals();
      });
    },
    get_purchase_invoices(supid) {
      axios.get(`getpurchaseinvoices/${supid}`).then(res => {
        this.invoices = res.data.map(inv => ({
          checked: false,
          reference_type: inv.reference_type,
          reference_id: inv.reference_id,
          account_id: inv.account_id,
          reference_info: inv.reference_info,
          amount: inv.amount,
          paid_amount: inv.paid_amount,
          due_amount: inv.due_amount,
          adjust_amount: 0,
          is_closed: false
        }));
        this.data.client_id = '',
          this.data.employee_id = '',
          this.data.uplink_provider_id = '',
          this.office_expense = false,
          this.calculateTotals();
      });
    },
    get_employee_payable(empid) {
      axios.get(`getemppayabledatas/${empid}`).then(res => {
        this.invoices = res.data.map(inv => ({
          checked: false,
          reference_type: inv.reference_type,
          reference_id: inv.reference_id,
          account_id: inv.account_id,
          reference_info: inv.reference_info,
          amount: inv.amount,
          paid_amount: inv.paid_amount,
          due_amount: inv.due_amount,
          adjust_amount: 0,
          is_closed: false
        }));
        this.data.client_id = '',
          this.data.supplier_id = '',
          this.data.uplink_provider_id = '',
          this.office_expense = false,
          this.calculateTotals();
      });
    },
    get_employee_loan_installment(empid) {
      axios.get(`getemploaninstallment/${empid}`).then(res => {
        this.invoices = res.data.map(inv => ({
          checked: false,
          reference_type: inv.reference_type,
          reference_id: inv.reference_id,
          account_id: inv.account_id,
          reference_info: inv.reference_info,
          amount: inv.amount,
          paid_amount: inv.paid_amount,
          due_amount: inv.due_amount,
          adjust_amount: 0,
          is_closed: false
        }));
        this.data.client_id = '',
          this.data.supplier_id = '',
          this.data.uplink_provider_id = '',
          this.office_expense = false,
          this.calculateTotals();
      });
    },
    onClosedToggle(inv) {
      const row = this.data.payment_details.find(d =>
        d.reference_type === inv.reference_type &&
        d.reference_id === inv.reference_id
      );

      if (row) {
        row.is_closed = inv.is_closed;
      }
    },
    toggleInvoice(inv) {

      if (inv.checked) {

        // default adjust amount
        inv.adjust_amount = inv.due_amount;

        // already exists কিনা চেক
        const exists = this.data.payment_details.find(
          d =>
            d.reference_type === inv.reference_type &&
            d.reference_id === inv.reference_id
        );

        if (!exists) {
          this.data.payment_details.push({
            reference_type: inv.reference_type,
            reference_id: inv.reference_id,
            account_id: inv.account_id,
            amount: inv.adjust_amount,
            is_closed: inv.is_closed
          });
        }

      } else {

        // unchecked হলে remove
        this.data.payment_details = this.data.payment_details.filter(
          d =>
            !(
              d.reference_type === inv.reference_type &&
              d.reference_id === inv.reference_id
            )
        );

        inv.adjust_amount = 0;
      }

      this.calculateTotals();
    },
    calculateTotals() {
      let total = 0;
      let total_adjustment = 0;

      this.invoices.forEach(inv => {
        total += Number(inv.due_amount || 0);

        if (inv.checked) {
          total_adjustment += Number(inv.adjust_amount || 0);

          // RULE 1 & 2
          if (Number(inv.adjust_amount) === Number(inv.due_amount)) {
            inv.is_closed = true;
          } else {
            inv.is_closed = false;
          }

          // also sync to payment_details
          const row = this.data.payment_details.find(d =>
            d.reference_type === inv.reference_type &&
            d.reference_id === inv.reference_id
          );

          if (row) {
            row.amount = inv.adjust_amount;
            row.is_closed = inv.is_closed;
          }
        }
      });

      this.totals.total_due = total;
      this.totals.total_receive = total_adjustment;
      this.data.amount = total_adjustment - this.data.discount;
    },
    reverseAdjustment() {
      let distributable = Number(this.data.amount || 0);

      if (distributable <= 0) {
        this.invoices.forEach(inv => {
          inv.adjust_amount = 0;
          inv.checked = false;
          inv.is_closed = false;
        });
        this.data.payment_details = [];   // ✅ সব clear
        this.calculateTotals();
        return;
      }

      // 1️⃣ reset
      this.invoices.forEach(inv => {
        inv.adjust_amount = 0;
        inv.checked = false;
        inv.is_closed = false;
      });

      // 2️⃣ distribute sequentially
      this.invoices.forEach(inv => {
        if (distributable <= 0) return;

        const due = Number(inv.due_amount) || 0;
        if (due <= 0) return;

        const applied = Math.min(due, distributable);
        inv.adjust_amount = applied;
        distributable -= applied;
      });

      // 3️⃣ set checked & is_closed
      this.invoices.forEach(inv => {
        const due = Number(inv.due_amount) || 0;
        const adj = Number(inv.adjust_amount) || 0;

        inv.is_closed = adj === due && due > 0;
        inv.checked = adj > 0;
      });

      // 4️⃣ payment_details FULL SYNC
      this.invoices.forEach(inv => {
        const idx = this.data.payment_details.findIndex(d =>
          d.reference_type === inv.reference_type &&
          String(d.reference_id) === String(inv.reference_id)
        );

        if (inv.checked) {
          // ✅ checked হলে add / update
          if (idx === -1) {
            this.data.payment_details.push({
              reference_type: inv.reference_type,
              reference_id: inv.reference_id,
              account_id: inv.account_id,
              amount: Number(inv.adjust_amount) || 0,
              is_closed: inv.is_closed
            });
          } else {
            this.data.payment_details[idx].amount = Number(inv.adjust_amount) || 0;
            this.data.payment_details[idx].is_closed = inv.is_closed;
          }
        } else {
          // ❌ unchecked হলে remove
          if (idx !== -1) {
            this.data.payment_details.splice(idx, 1);
          }
        }
      });

      this.calculateTotals();
    },
    getAccountName(account_id) {
      const account = this.allAccounts.find(acc => acc.id == account_id);
      return account ? account.name : '';
    },
    submit: function (e) {
      this.$validate().then((res) => {
        const error = this.validation.countErrors();

        if (error > 0) {
          this.$toast(
            'You need to fill ' + error + ' more empty mandatory fields',
            'warning'
          );
          return false;
        }

        if (res) {
          var form = document.getElementById('form');
          var formData = new FormData(form);

          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
      });
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
    getbanks: function () {
      this.areas = [];
      axios.get("/getbanks/").then((res) => {
        this.banks = res.data;
      });
    },
    getPaymentData() {
      axios.get(
        `${this.model}/${this.$route.params.id}`
      )
        .then((response) => {
          this.data = response.data;
          this.invoices = response.data.invoices;
          this.data.payment_details = response.data.payment_details;
          this.payto = response.data.payto;
          this.totals = response.data.totals;

        })
        .catch((error) => {
          console.error(error);
        });
    },
    getFundBalance() {

      let paymentmethod = this.data.payment_method;
      axios.get(
        `getfunds/${paymentmethod}`
      )
        .then((response) => {
          this.fund = response.data;

        })
        .catch((error) => {
          console.error(error);
        });

    }
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      // this.get_data(`${this.model}/${this.$route.params.id}`);
      this.getPaymentData()
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getClients();
    this.getbanks();
  },

  validators: {
    'data.amount': function (value = null) {
      var vm = this;

      return Validator.value(value)
        .required('Amount is required')
        .custom(function () {

          const amount = parseFloat(value);
          const totalDue = parseFloat(vm.totals?.total_due || 0);
          const fund = parseFloat(vm.fund || 0);

          // ✅ only for create mode (no id)
          if (!vm.data?.id && amount > totalDue) {
            return 'Amount cannot be greater than total selected amount';
          }

          if (!vm.data?.id && vm.data?.payment_type === 'Pay' && amount > fund) {
            return 'Transaction failed due to insufficient fund balance.';
          }
        });
    },

    'data.payment_type': function (value = null) { return Validator.value(value).required('Payment Type is required'); },
    'data.payment_method': function (value = null) { return Validator.value(value).required('Payment Method is required'); },

  },
}

</script>