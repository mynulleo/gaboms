<template>
  <create-form @onSubmit='submit'>
    <div class="col-9">
      <fieldset>
        <span class="legend">Withdrawl Form</span>
        <div class="row mt-3 g-3">
          <date-picker id='date0' v-model='data.withdrwal_date' field='data.withdrwal_date' title='Withdrwal Date'
            placeholder='Withdrwal Date' col='2' :req='true'></date-picker>
          <Select title='Account Id' v-model='data.account_id' field='data.account_id' label='name'
            :reduce='(obj) => obj.id' :options='fundaccounts' placeholder='--Select One--' :closeOnSelect='true' col="3"
            :required='false' />
          <Input v-model='data.amount' field='data.amount' title='Amount' col="3" :req='true' />

          <Textarea v-model='data.remarks' field='data.remarks' title='Remarks' :req='true' col="12" />
          <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive'
            :req='true'>
          </Switch>
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

const model = 'withdrawl';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        withdrwal_date: this.$filter.today(),
        account_id: '',
        amount: null
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
    'data.account_id': {
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
          formData.append('withdrwal_date', this.data.withdrwal_date);
          formData.append('account_id', this.data.account_id);
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
      const account_id = this.data.account_id;
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
    'data.withdrwal_date': function (value = null) { return Validator.value(value).required('Withdrwal Date is required'); },
    'data.amount': function (value = null) { return Validator.value(value).required('Amount is required'); },

  },
}

</script>