<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.title' field='data.title' title='Title' col="8" :req='true' />
    <Input v-model='data.total_salary' field='data.total_salary' col="4" title='Total Salary' :req='false' />
    <Input v-model='data.basic' field='data.basic' title='Basic' col="3" :req='false' />
    <Input v-model='data.house_rent' field='data.house_rent' col="3" title='House Rent' :req='false' />
    <Input v-model='data.medical' field='data.medical' col="3" title='Medical' :req='false' />
    <Input v-model='data.other' field='data.other' col="3" title='Other' :req='false' />
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'designation';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        basic: 0,
        house_rent: 0,
        medical: 0,
        other: 0,
      },

    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    "data.basic": "calculatesalary",
    "data.house_rent": "calculatesalary",
    "data.medical": "calculatesalary",
    "data.other": "calculatesalary",
  },
  methods: {
    calculatesalary: function () {
      var basic = parseInt(this.data.basic);
      var house = parseInt(this.data.house_rent);
      var medical = parseInt(this.data.medical);
      var other = parseInt(this.data.other);
      var total_salary = basic + house + medical + other;
      this.data.total_salary = total_salary;
    },
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


          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
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
  },

  validators: {
    'data.title': function (value = null) { return Validator.value(value).required('Title is required'); },

  },
}

</script>