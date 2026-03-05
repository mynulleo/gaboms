<template>
  <create-form @onSubmit='submit'>
    <div class="col-9">
      <fieldset>
        <span class="legend">Transfer Form</span>
        <div class="row g-3">
          <date-picker id='date0' v-model='data.transfer_date' field='data.transfer_date' title='Transfer Date'
            placeholder='Transfer Date' col='2' :req='true'></date-picker>
          <Select title='From Account' col="3" v-model='data.from_account_id' field='data.from_account_id' label='name'
            :reduce='(obj) => obj.id' :options='fundaccounts' placeholder='--Select One--' :closeOnSelect='true'
            :required='true' />
          <Select title='To Account' col="3" v-model='data.to_account_id' field='data.to_account_id' label='name'
            :reduce='(obj) => obj.id' :options='fundaccounts' placeholder='--Select One--' :closeOnSelect='true'
            :required='true' />
          <Input v-model='data.amount' field='data.amount' title='Amount' col="3" :req='true' />
          <Textarea v-model='data.remarks' field='data.remarks' title='Remarks' col="12" :req='false' />

          <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive'
            :req='true'></Switch>
        </div>
      </fieldset>
    </div>
    <div class="col-3">
      <fieldset>
        <span class="legend">Fund Balance</span>
        <div class="card shadow-sm border-0">
          <div class="card-body p-3">
            <!-- Instruction -->
            <div class="text-center text-muted py-3 mb-3">
              <i class="fas fa-info-circle me-1"></i>
              Please select an account from the form to view account balance.
            </div>
            <!-- Account Name -->
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="text-muted small">
                <i class="fas fa-university me-1"></i>
                Account Name
              </span>

              <span class="fw-semibold text-dark">
                {{ fund?.account_name || '—' }}
              </span>
            </div>

            <!-- Divider -->
            <hr class="my-2">
            <!-- Balance -->
            <div class="d-flex justify-content-between align-items-center">
              <div class="text-muted small">
                <i class="fas fa-wallet me-1"></i>
                Balance
              </div>

              <p class="fw-bold fs-5" :class="fund?.current_balance >= 0 ? 'text-success' : 'text-danger'">
                {{ formatCurrency(fund?.current_balance) }}
              </p>
            </div>

          </div>
        </div>
      </fieldset>
    </div>
  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'fundTransfer';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        transfer_date: this.$filter.today(),
        from_account_id: '',
        to_account_id: '',
        amount: 0,
        fund_balance: 0
      },
      fund: {},
      fundaccounts: []
    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.from_account_id': {
      handler() {
        this.getFundBalance();
      },
      deep: true
    }
  },
  methods: {
    submit: function (e) {
      this.$validate().then((res) => {
        const error = this.validation.countErrors();

        if (error > 0) {
          console.log(this.validation.allErrors());
          this.$toast(
            'You need to fill ' + error + ' more empty mandatory fields',
            'warning'
          );
          return false;
        }

        if (res) {
          var form = document.getElementById('form');
          var formData = new FormData(form);
          formData.append('transfer_date', this.data.transfer_date);
          formData.append('from_account_id', this.data.from_account_id);
          formData.append('to_account_id', this.data.to_account_id);
          formData.append('remarks', this.data.remarks);
          formData.append('status', this.data.status);
          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    formatCurrency(amount) {
      if (!amount) return '৳ 0.00';

      return '৳ ' + Number(amount).toLocaleString('en-BD', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    getFundAccounts() {
      axios.get(
        `/getfundaccounts`
      )
        .then((response) => {
          this.fundaccounts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getFundBalance() {
      const account_id = this.data.from_account_id;
      axios.get(
        `/getfundbalance/` + account_id
      )
        .then((response) => {
          this.fund = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getFundAccounts();
  },

  validators: {
    'data.transfer_date': function (value = null) { return Validator.value(value).required('Transfer Date is required'); },
    'data.from_account_id': function (value = null) {
      return Validator.value(value)
        .required('From Account Id is required');
    },
    'data.to_account_id': function (value = null) {
      var vm = this;
      return Validator.value(value).
        required('To Account Id is required').custom(function () {
          let from_account_id = vm.data.from_account_id;
          let to_account_id = value;
          if (from_account_id == to_account_id) {
            return 'Select another fund account';
          }

        });;
    },
    'data.amount': function (value = null) {
      let vm = this;
      return Validator.value(value)
        .required('Amount is required')
        .custom(function () {
          const balance = parseFloat(vm.fund.current_balance);
          const amount = parseFloat(value);
          if (balance < amount) {
            return 'Transaction failed due to insufficient fund balance.';
          }
        });
    },

  },
}

</script>