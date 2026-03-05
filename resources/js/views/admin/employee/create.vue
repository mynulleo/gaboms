<template>
  <create-form @onSubmit='submit'>
    <div class="col-md-8">
      <fieldset>
        <span class="legend">Office Information</span>
        <div class="row g-3">
          <div class="col-3">
            <File title='Image' field='data.image' mime='img' fileClassName='data.image' col="12" :req='false' />
          </div>
          <div class="col-9">
            <div class="row g-3">
              <Select title='Branch' v-model='data.branch_id' field='data.branch_id' label='branch_name'
                :reduce='(obj) => obj.id' :options='$root.global.branches' col="4" placeholder='--Select One--'
                :closeOnSelect='true' :required='true' />
              <date-picker id='date1' v-model='data.joining_date' field='data.joining_date' title='Joining Date'
                placeholder='Joining Date' col='4' :req='true'></date-picker>
              <Select title='Designation' v-model='data.designation_id' field='data.designation_id' label='title'
                :reduce='(obj) => obj.id' col='4' :options='$root.global.designations' placeholder='--Select One--'
                :closeOnSelect='true' :required='true' />
              <Input v-model='data.full_name' field='data.full_name' col="12" title='Full Name' :req='true' />
              <Input v-model='data.email' field='data.email' col="3" title='Email' :req='false' />
              <Input v-model='data.mobile' field='data.mobile' col="3" title='Mobile' :req='true' />
              <date-picker id='date6' v-model='data.dob' col="3" field='data.dob' title='DOB' placeholder='Dob'
                :req='false'></date-picker>
              <Input v-model='data.nid' field='data.nid' col="3" title='Nid' :req='true' />
              <Textarea v-model='data.address' field='data.address' :required='true' title="Address" col="12" />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="col-md-4">
      <fieldset>
        <span class="legend">Bank Information</span>
        <div class="row g-3 mt-3">
          <Input v-model='data.account_name' field='data.account_name' title='Account Name' col="6" :req='false' />
          <Input v-model='data.account_no' field='data.account_no' title='Account No' col="6" :req='false' />
          <Select title='Bank' v-model='data.bank_id' field='data.bank_id' label='bank_name' :reduce='(obj) => obj.id'
            col="6" :options='banks' placeholder='--Select One--' :closeOnSelect='true' :required='false' />
          <Input v-model='data.branch' field='data.branch' title='Branch' col="6" :req='false' />
        </div>
      </fieldset>
    </div>
    <div class="col-md-8">
      <fieldset class="mt-3">
        <span class="legend">Family Info</span>
        <div class="row g-3 mt-3">
          <!-- Father Information -->
          <Input v-model='data.father_name' field='data.father_name' col="3" title='Father Name' :req='false' />
          <Input v-model='data.father_occupation' field='data.father_occupation' col="3" title='Father Occupation'
            :req='false' />
          <Input v-model='data.father_nid' field='data.father_nid' col="3" title='Father NID' :req='false' />
          <Input v-model='data.father_mobile' field='data.father_mobile' col="3" title='Father Mobile' :req='false' />
          <!-- Father Information -->
          <!-- Mother Information -->
          <Input v-model='data.mother_name' field='data.mother_name' col="3" title='Mother Name' :req='false' />
          <Input v-model='data.mother_occupation' field='data.mother_occupation' col="3" title='Mother Occupation'
            :req='false' />
          <Input v-model='data.mother_nid' field='data.mother_nid' col="3" title='Mother NID' :req='false' />
          <Input v-model='data.mother_mobile' field='data.mother_mobile' col="3" title='Mother Mobile' :req='false' />
          <!-- Mother Information -->
          <!-- Spouse Information -->
          <Input v-model='data.spouse_name' field='data.spouse_name' col="3" title='Spouse Name' :req='false' />
          <Input v-model='data.spouse_mobile' field='data.spouse_mobile' col="3" title='Spouse Mobile' :req='false' />
          <!-- Spouse Information -->
        </div>
      </fieldset>
    </div>
    <div class="col-md-4">
      <fieldset class="mt-3">
        <span class="legend">Salary</span>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(empsalary, index) in this.data.employee_salaries" :key="index">
              <td><strong>{{ empsalary.title }}</strong></td>
              <td>
                <Input v-model='empsalary.amount' field='empsalary.amount' col="12" :req='false' />
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <th>{{ Number(totalSalary).toFixed(2) }}</th>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>

    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>

const model = 'employee';

export default {
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        image: '',
        salary: 0,
        bank_id: '',
        employee_salaries: []
      },
      image: {},
      banks: [],
    };
  },
  watch: {
    'data.employee_salaries': {
      handler(newVal) {

        // Basic Salary খুঁজে বের করি
        let basic = newVal.find(item => item.is_basic == 1);

        if (!basic) return;

        let basicAmount = parseFloat(basic.amount) || 0;

        // বাকি সব parameter auto calculate
        newVal.forEach(item => {

          if (item.is_basic == 0 && item.percentage_of_basic) {

            let percent = parseFloat(item.percentage_of_basic) || 0;
            let calculated = (basicAmount * percent) / 100;

            item.amount = calculated.toFixed(2);
          }

        });
        this.data.salary = this.totalSalary;
      },
      deep: true
    }
  },
  provide() {
    return {
      validate: this.validation,
      data: () => this.data, image: this.image
    };
  },
  computed: {
    totalSalary() {
      let total = 0;

      this.data.employee_salaries.forEach(item => {
        // amount যদি empty বা string হয়, safe ভাবে number এ convert করছি
        let amt = parseFloat(item.amount) || 0;
        total += amt;
      });

      return total;
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
          formData.append('joining_date', this.data.joining_date);
          formData.append('dob', this.data.dob);
          formData.append('designation_id', this.data.designation_id);
          formData.append('branch_id', this.data.branch_id);
          formData.append('branch', this.data.branch);
          formData.append('bank_id', this.data.bank_id);
          formData.append('address', this.data.address);
          formData.append('employee_salaries', JSON.stringify(this.data.employee_salaries));
          formData.append('status', this.data.status);
          formData.append('salary', this.data.salary);
          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    getBanks: function () {
      this.areas = [];
      axios.get("/getbanks/").then((res) => {
        this.banks = res.data;
      });
    },
    getSalaryParameters() {
      axios.get(`getsalaryparameters`)
        .then((response) => {

          this.data.employee_salaries = response.data.map(item => {
            return {
              title: item.title,
              salary_parameter_id: item.id,
              is_basic: item.is_basic,
              percentage_of_basic: item.percentage_of_basic,
              amount: 0
            }
          });

        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
      this.getSalaryParameters();
    }
    this.getBanks();
  },

  validators: {
    'data.joining_date': function (value = null) { return Validator.value(value).required('Joining Date is required'); },
    'data.designation_id': function (value = null) { return Validator.value(value).required('Designation Id is required'); },
    'data.full_name': function (value = null) { return Validator.value(value).required('Full Name is required'); },
    'data.mobile': function (value = null) { return Validator.value(value).required('Mobile is required'); },
    'data.nid': function (value = null) { return Validator.value(value).required('Nid is required'); },
    'data.branch_id': function (value = null) { return Validator.value(value).required('Branch Id is required'); },

  },
}

</script>