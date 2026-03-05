<template>
  <create-form @onSubmit='submit'>
    <div class="col-md-8 mb-5">
      <fieldset>
        <span class="legend">Invoice</span>
        <div class="row g-3">
          <date-picker id='date1' v-model='data.trns_date' field='data.trns_date' title='Trns Date'
            placeholder='Trns Date' col='3' :req='true'></date-picker>
          <Select title='Trns Type' v-model='data.trns_type' field='data.trns_type' label='name'
            :reduce='(obj) => obj.value' :options='$root.global.loaninfotypes' placeholder='--Select One--'
            :closeOnSelect='true' col="4" :required='true' />
          <Select title='Employee' v-model='data.employee_id' field='data.employee_id' col="4" label='full_name'
            :reduce='(obj) => obj.id' :options='$root.global.employees' placeholder='--Select One--'
            :closeOnSelect='true' :required='true' @change="getEmployeeInfo(data.employee_id)" />
          <div class="col-md-12"></div>
          <Input v-model='data.amount' field='data.amount' title='Amount' col="3" :req='true' />
          <Select title='Total Installment' v-model='data.total_installment' field='data.total_installment' label='name'
            :reduce='(obj) => obj.id' :options='$root.global.installments' placeholder='--Select One--'
            :closeOnSelect='true' col="2" :required='true' @change="calculateInstallmentAmount" />
          <Input v-model='data.installment_amount' field='data.installment_amount' title='Installment Amount'
            :req='false' col="3" />
          <Select title='Schedule Day' v-model='data.schedule_day' field='data.schedule_day' col="2" label='name'
            :reduce='(obj) => obj.id' :options='$root.global.scheduledays' placeholder='--Select One--'
            :closeOnSelect='true' :required='false' />
          <date-picker id='date9' v-model='data.return_date' field='data.return_date' title='Return Date'
            placeholder='Return Date' col='2' :req='false'></date-picker>
          <SwitchBoolean v-model='data.deduct_from_salary' field='data.deduct_from_salary' title='Deduct From Salary'
            on-label='Yes' off-label='No' :req='false'></SwitchBoolean>
          <div class="col-md-12"></div>
          <Textarea v-model='data.reason' field='data.reason' :required='false' title="Reason" col="6" />
          <Textarea v-model='data.remarks' field='data.remarks' :required='false' title="Remarks" col="6" />
          <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive'
            :req='true'>
          </Switch>
        </div>
      </fieldset>


    </div>
    <div class="col-md-4">
      <fieldset>
        <span class="legend">Employee Profile</span>
        <img v-if="data.employee.image" :src="data.employee.image" class="rounded mx-auto d-block" style="width:150px">
        <img v-else :src="$root.asset_url + '/images/profile.jpg'" class="rounded mx-auto d-block" style="width:150px">
        <table class="table table-striped">
          <tbody>
            <tr>
              <th class="text-end" width="40%">EmpID</th>
              <th width="5%">:</th>
              <td>{{ data.employee?.empid }}</td>
            </tr>
            <tr>
              <th class="text-end">Joining Date</th>
              <th>:</th>
              <td>{{ data.employee?.joining_date }}</td>
            </tr>
            <tr>
              <th class="text-end">Designation</th>
              <th>:</th>
              <td>{{ data.employee?.designation?.title }}</td>
            </tr>
            <tr>
              <th class="text-end">Salary</th>
              <th>:</th>
              <td>{{ data.employee?.salary }}</td>
            </tr>
            <tr>
              <th class="text-end">Full Name</th>
              <th>:</th>
              <td>{{ data.employee?.full_name }}</td>
            </tr>
            <tr>
              <th class="text-end">NID</th>
              <th>:</th>
              <td>{{ data.employee?.nid }}</td>
            </tr>
            <tr>
              <th class="text-end">Mobile</th>
              <th>:</th>
              <td>{{ data.employee?.mobile }}</td>
            </tr>
            <tr>
              <th class="text-end">Email</th>
              <th>:</th>
              <td>{{ data.employee?.email }}</td>
            </tr>
            <tr>
              <th class="text-end">Address</th>
              <th>:</th>
              <td>{{ data.employee?.address }}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'loanInfo';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        employee_id: '',
        trns_date: this.$filter.today(),
        total_installment: '',
        amount: 0,
        deduct_from_salary: true,
        schedule_day: 0,
        reason: '',
        remarks: '',
        employee: {
          empid: null,
          joining_date: '',
          designation: '',
          name: '',
          mobile: '',
          email: '',
          nid: '',
          address: ''

        }
      },

    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.amount'() {
      this.calculateInstallmentAmount();
    },
    'data.total_installment'() {
      this.calculateInstallmentAmount();
    }
  },
  methods: {
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
          formData.append('trns_type', this.data.trns_type);
          formData.append('schedule_day', this.data.schedule_day);
          formData.append('total_installment', this.data.total_installment);
          formData.append('employee_id', this.data.employee_id);
          formData.append('trns_date', this.data.trns_date);
          formData.append('return_date', this.data.return_date);
          formData.append('closing_date', this.data.closing_date);
          formData.append('reason', this.data.reason);
          formData.append('remarks', this.data.remarks);
          formData.append('deduct_from_salary', this.data.deduct_from_salary);
          formData.append('due_amount', this.data.due_amount);
          formData.append('status', this.data.status);

          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    getEmployeeInfo(empid) {
      axios.get(
        `/employeeinfo/${empid}`
      )
        .then((response) => {
          this.data.employee = response.data;
          this.calculateInstallmentAmount();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    calculateInstallmentAmount() {
      // Employee না থাকলে কিছুই করবে না
      if (!this.data.employee_id || !this.data.employee || this.$route.params.id) return;

      /* ===============================
         CASE 1: ADVANCE
      ================================*/
      if (this.data.trns_type === 'Advance') {

        let salary = this.data.employee?.salary || 0;

        this.data.amount = salary;
        this.data.total_installment = 1;
        this.data.installment_amount = salary;
        this.data.closing_date = this.updateClosingDate();

        return;
      }

      /* ===============================
         CASE 2: LOAN
      ================================*/
      if (this.data.trns_type === 'Loan') {

        let amount = Number(this.data.amount) || 0;
        let installment = Number(this.data.total_installment) || 0;

        if (amount > 0 && installment > 0) {
          this.data.installment_amount = (amount / installment).toFixed(2);
        } else {
          this.data.installment_amount = '';
        }
        this.data.due_amount = amount;
        this.data.closing_date = this.updateClosingDate(); //

      }
    },
    updateClosingDate() {

      if (!this.data.trns_date || !this.data.trns_type) {
        return '';
      }

      const baseDate = new Date(this.data.trns_date);

      /* ===============================
         ADVANCE → next month last date
      ================================*/
      if (this.data.trns_type === 'Advance') {

        baseDate.setMonth(baseDate.getMonth() + 1);
        baseDate.setDate(0);

        return baseDate.toISOString().slice(0, 10);
      }

      /* ===============================
         LOAN → trns_date + total_installment months
      ================================*/
      if (this.data.trns_type === 'Loan') {

        let installment = Number(this.data.total_installment) || 0;
        if (installment <= 0) return '';

        const originalDay = baseDate.getDate();
        baseDate.setMonth(baseDate.getMonth() + installment);

        if (baseDate.getDate() !== originalDay) {
          baseDate.setDate(0);
        }

        return baseDate.toISOString().slice(0, 10);
      }

      return '';
    }

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
    'data.trns_date': function (value = null) { return Validator.value(value).required('Trns Date is required'); },
    'data.employee_id': function (value = null) { return Validator.value(value).required('Employee Id is required'); },
    'data.trns_type': function (value = null) { return Validator.value(value).required('Trns Type is required'); },
    'data.amount': function (value = null) { return Validator.value(value).required('Amount is required'); },

  },
}

</script>