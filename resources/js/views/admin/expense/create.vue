<template>
  <create-form @onSubmit='submit'>
    <date-picker id='date1' v-model='data.expense_date' field='data.expense_date' title='Expense Date'
      placeholder='Expense Date' col='2' :req='true'></date-picker>
    <Select title='Branch' v-model='data.branch_id' col="3" field='data.branch_id' label='branch_name'
      :reduce='(obj) => obj.id' :options='$root.global.branches' placeholder='--Select One--' :closeOnSelect='true'
      :required='true' />
    <Select title='Employee' v-model='data.employee_id' col="3" field='data.employee_id' label='full_name'
      :reduce='(obj) => obj.id' :options='$root.global.employees' placeholder='--Select One--' :closeOnSelect='true'
      :required='false' />
    <Input v-model='data.total_amount' field='data.total_amount' col="3" title='Total Amount' :req='false' />
    <div class="col-md-12 mb-3">
      <fieldset class="mt-4">
        <span class="legend">Bandwidth Details</span>
        <div class="row">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th style="width:20%">Account</th>
                  <th style="width:45%">Narration</th>
                  <th style="width:15%">Amount</th>
                  <th style="width:20%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(expensedetail, index) in data.expense_details" :key="index">
                  <td>
                    <Select v-model="expensedetail.account_id" field="expensedetail.account_id" label="name"
                      :reduce="(obj) => obj.id" :options="accounts" placeholder="--Select One--" :closeOnSelect="true"
                      :required="false" col="12" />
                  </td>
                  <td>
                    <Input v-model="expensedetail.narration" field="expensedetail.narration" col="12" />
                  </td>
                  <td>
                    <Input v-model="expensedetail.amount" field="expensedetail.amount" col="12" />
                  </td>
                  <td>
                    <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                      <button type="button" class="btns delete_one" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Delete" v-x-tooltip @click.prevent="
                          removeExpenseDetails(index)
                          " v-if="
                            Object.keys(
                              data.expense_details
                            ).length > 1
                          ">
                        <i class="fas fa-trash"></i>
                      </button>
                      <button v-if="isLastItem(data.expense_details, index)" type="button" class="btns add_more"
                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                        @click.prevent="addExpenseDetailsRow()">

                        <i class="fas fa-plus-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </fieldset>
    </div>
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'expense';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        expense_date: this.$filter.today(),
        branch_id: null,
        expense_details: [
          {
            account_id: null,
            narration: '',
            amount: 0,
          },
        ],
      },
      accounts: []

    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.expense_details': {
      handler() {
        this.calculateTotals();
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
          formData.append('branch_id', this.data.branch_id);
          formData.append('employee_id', this.data.employee_id);
          formData.append('expense_date', this.data.expense_date);
          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
      });
    },
    getAccountsByType() {
      let accounttype = 'Expense';
      axios.get(
        `/accountsbytype/${accounttype}`
      )
        .then((response) => {
          this.accounts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    calculateTotals() {
      let totalAmt = 0;
      this.data.expense_details.forEach(detail => {
        totalAmt += parseFloat(detail.amount) || 0;
      });
      this.data.total_amount = totalAmt;
    },
    addExpenseDetailsRow() {
      this.data.expense_details.push({
        account_id: null,
        narration: '',
        amount: 0,
      });
    },
    removeExpenseDetails(index) {
      if (Object.keys(this.data.expense_details).length > 1) {
        this.data.expense_details.splice(index)
      }
    },
    isLastItem(items, index) {
      return index === items.length - 1;
    },
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getAccountsByType();
  },

  validators: {
    'data.expense_date': function (value = null) { return Validator.value(value).required('Expense Date is required'); },
    'data.branch_id': function (value = null) { return Validator.value(value).required('Branch Id is required'); },

  },
}

</script>