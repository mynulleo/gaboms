<template>
  <create-form @onSubmit='submit'>
    <date-picker id='date3' v-model='data.generated_date' field='data.generated_date' title='Generated Date'
      placeholder='Generated Date' col='2' :req='true'></date-picker>
    <Input v-model='data.title' field='data.title' col="4" title='Title' :req='true' />
    <Select title='Month' v-model='data.month' field='data.month' label='name' col="2" :reduce='(obj) => obj.value'
      :options='$root.global.montharray' placeholder='--Select One--' :closeOnSelect='true' :required='true' />
    <Select title='Year' v-model='data.year' field='data.year' label='name' col="2" :reduce='(obj) => obj.value'
      :options='$root.global.recentyears' placeholder='--Select One--' :closeOnSelect='true' :required='true' />
    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' col="2"
      :req='true'>
    </Switch>
    <div class="row mt-3">
      <div class="col-md-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Bonus</th>
              <th>Installment</th>
              <th>Deduct</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(row, i) in data.salary_sheet_details" :key="i">
              <th>{{ row.employee_name }}</th>
              <th>{{ row.designation }}</th>
              <td>
                <Input v-model='row.salary' field='row.salary' col="12" :req='false' :readonly="true" />
              </td>
              <td>
                <Input v-model='row.bonus' field='row.bonus' col="12" :req='false' @change="calculate(row)" />
              </td>
              <td>
                <Input v-model='row.installment' field='row.installment' col="12" :req='false'
                  @change="calculate(row)" />
              </td>
              <td>
                <Input v-model='row.deduct' field='row.deduct' col="12" :req='false' @change="calculate(row)" />
              </td>
              <td>
                <Input v-model='row.total' field='row.total' col="12" :req='false' :readonly="true" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </create-form>
</template>

<script>


const model = 'salarySheet';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        generated_date: this.$filter.today(),
        title: 'Salary Sheet of ' + this.$filter.enFormat(this.$filter.today(), 'MMMM YYYY'),
        month: this.$filter.enFormat(this.$filter.today(), 'MMMM'),
        year: this.$filter.enFormat(this.$filter.today(), 'YYYY'),
        status: 'active',
        salary_sheet_details: []
      },

    };
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

        if (res) {
          var form = document.getElementById("form");
          var formData = new FormData(form);

          formData.append('generated_date', this.data.generated_date);
          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
      });
    },
    loadEmployees() {
      axios.get('getsalarysheetdata')
        .then(res => {
          this.data.salary_sheet_details = res.data.map(emp => ({
            employee_id: emp.employee_id,
            employee_name: emp.employee_name,
            designation: emp.designation,
            salary: emp.salary,
            bonus: 0,
            installment: emp.installment,
            installment_history: emp.installment_history,
            deduct: 0,
            total: emp.salary - emp.installment,
            is_paid: 0,
            status: 'active'
          }))
        })
    },
    calculate(row) {
      row.total = Number(row.salary)
        + Number(row.bonus || 0)
        + Number(row.commission || 0)
        - Number(row.deduct || 0)
        - Number(row.installment || 0)
    },
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
      this.loadEmployees();
    }

  },

  validators: {
    'data.title': function (value = null) { return Validator.value(value).required('Title is required'); },
    'data.month': function (value = null) { return Validator.value(value).required('Month is required'); },
    'data.year': function (value = null) { return Validator.value(value).required('Year is required'); },
    'data.generated_date': function (value = null) { return Validator.value(value).required('Generated Date is required'); },

  },
}

</script>