<template>
  <create-form @onSubmit='submit'>
    <date-picker id='date2' v-model='data.voucher_date' field='data.voucher_date' col="2" title='Voucher Date'
      placeholder='Voucher Date' :req='true'></date-picker>
    <Select title='Voucher Type' v-model='data.voucher_type' field='data.voucher_type' label='name'
      :reduce='(obj) => obj.value' :options='$root.global.voucher_types' col="3" placeholder='--Select One--'
      :closeOnSelect='true' :required='true' />
    <Input v-model='data.total_debit' field='data.total_debit' title='Total Debit' col="2" readonly="true"
      :req='false' />
    <Input v-model='data.total_credit' field='data.total_credit' title='Total Credit' col="2" readonly="true"
      :req='false' />
    <Textarea v-model='data.narration' field='data.narration' :required='true' title="Narration" col="12" />
    <div class="col-md-12">
      <fieldset class="mt-4 mb-4">
        <span class="legend">Invoice Details</span>
        <table class="table">
          <thead>
            <tr>
              <th style="width:10%">Type</th>
              <th style="width:20%">Account</th>
              <th style="width:10%">Dr. Amount</th>
              <th style="width:10%">Cr. Amount</th>
              <th style="width:25%">Narration</th>
              <th style="width:10%">R. Type</th>
              <th style="width:10%">R. ID</th>
              <th style="width:5%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(voucherdetail, index) in data.voucher_details" :key="index">
              <td>
                <Select v-model="voucherdetail.account_type" field="voucherdetail.account_type" label="name"
                  :reduce="(obj) => obj.value" :options="$root.global.accounttypes" placeholder="--Select One--"
                  :closeOnSelect="true" :required="false" @change="loadAccountData(voucherdetail, index)" col="12" />
              </td>
              <td>
                <Select v-model="voucherdetail.account_id" field="voucherdetail.account_id" label="name"
                  :reduce="(obj) => obj.id" :options="voucherdetail.accounts" placeholder="--Select One--"
                  :closeOnSelect="true" :required="false" col="12" />
              </td>
              <td>
                <Input v-model="voucherdetail.dr_amount" field="voucherdetail.dr_amount"
                  @change="locCreditAmount(index)" col="12" />
              </td>
              <td>
                <Input v-model="voucherdetail.cr_amount" field="voucherdetail.cr_amount" col="12" />
              </td>
              <td>
                <Textarea v-model='voucherdetail.line_narration' field='voucherdetail.line_narration' col="12" />
              </td>
              <td>
                <Input v-model="voucherdetail.reference_type" field="voucherdetail.reference_types" col="12" />
              </td>
              <td>
                <Input v-model="voucherdetail.reference_id" field="voucherdetail.reference_id" col="12" />
              </td>

              <td>
                <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                  <button type="button" class="btns delete_one" data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-title="Delete" v-x-tooltip @click.prevent="
                      removeVoucherDetails(index)
                      " v-if="
                        Object.keys(
                          data.voucher_details
                        ).length > 1
                      ">
                    <i class="fas fa-trash"></i>
                  </button>
                  <button v-if="isLastItem(data.voucher_details, index)" type="button" class="btns add_more"
                    data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                    @click.prevent="addVoucherDetailsRow()">

                    <i class="fas fa-plus-square"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' class="mt-5"
      :req='true'>
    </Switch>
  </create-form>
</template>

<script>
import { get } from 'jquery';
import Editor from '../../../components/Form/CKEditor';

const model = 'voucher';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        voucher_type: '',
        voucher_date: this.$filter.today(),
        voucher_details: [
          {
            account_id: '',
            dr_amount: '',
            cr_amount: '',
            reference_type: '',
            reference_id: '',
            narration: '',
            accounts: []
          }
        ]
      },
    };
  },
  watch: {
    'data.voucher_details': {
      handler() {
        this.calculateTotals();
      },
      deep: true
    }
  },
  provide() {
    return {
      validate: this.validation,

    };
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

        // ✅ Check if total_debit equals total_credit
        if (Number(this.data.total_debit) !== Number(this.data.total_credit)) {
          this.$toast('Total Debit and Total Credit must be equal', 'error');
          return false;
        }

        if (res) {
          var form = document.getElementById('form');
          var formData = new FormData(form);
          formData.append('voucher_type', this.data.voucher_type);
          formData.append('voucher_date', this.data.voucher_date);
          formData.append('narration', this.data.narration);
          formData.append('voucher_details', JSON.stringify(this.data.voucher_details));
          formData.append('status', this.data.status);
          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    locCreditAmount(index) {
      var dramount = this.data.voucher_details[index].dr_amount;
      if (dramount) {
        // disable voucher_details input which name is cr_amount

      }
    },
    calculateTotals() {
      let totalDr = 0;
      let totalCr = 0;
      this.data.voucher_details.forEach(detail => {
        totalDr += Number(detail.dr_amount) || 0;
        totalCr += Number(detail.cr_amount) || 0;
      });
      this.data.total_debit = totalDr;
      this.data.total_credit = totalCr;
    },
    loadAccountData(row, index) {
      let account_type = row.account_type;

      axios.get(
        `accountsbytype/` + account_type
      )
        .then((response) => {
          this.data.voucher_details[index].accounts = response.data;

        })
        .catch((error) => {
          console.error(error);
        });

    },
    addVoucherDetailsRow() {
      this.data.voucher_details.push({
        account_id: '',
        dr_amount: '',
        cr_amount: '',
        reference_type: '',
        reference_id: '',
        narration: '',
        accounts: []
      });
    },
    removeVoucherDetails(index) {
      if (Object.keys(this.data.voucher_details).length > 1) {
        this.data.voucher_details.splice(index)
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
  },

  validators: {
    'data.voucher_type': function (value = null) { return Validator.value(value).required('Voucher Type is required'); },
    'data.voucher_date': function (value = null) { return Validator.value(value).required('Voucher Date is required'); },
    'data.total_debit': function (value = null) {
      var vm = this;
      return Validator.value(value)
        .required('Total Debit is required')
        .custom(function () {
          if (Number(vm.data.total_debit) < 0) {
            return 'Total Debit should be greter than o'
          }
        });
    },
    'data.total_credit': function (value = null) {
      var vm = this;
      return Validator.value(value)
        .required('Total Credit is required')
        .custom(function () {
          if (Number(vm.data.total_credit) < 0) {
            return 'Total Credit should be greter than o'
          }
        });
    },

  },
}
</script>