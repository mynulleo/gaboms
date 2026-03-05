<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.title' field='data.title' title='Title' :req='true' />
    <date-picker id='date1' v-model='data.start_date' field='data.start_date' title='Start Date'
      placeholder='Start Date' col='2' :req='true'></date-picker>
    <date-picker id='date2' v-model='data.end_date' field='data.end_date' title='End Date' placeholder='End Date'
      col='2' :req='true'></date-picker>
    <SwitchBoolean v-model='data.is_current' field='data.is_current' title='Is Current' on-label='ON' off-label='OFF'
      :req='true' col="3"></SwitchBoolean>
    <SwitchBoolean v-model='data.is_closed' field='data.is_closed' title='Is Closed' on-label='ON' off-label='OFF'
      :req='true' col="3"></SwitchBoolean>
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'
      col="3">
    </Switch>

  </create-form>
</template>

<script>


const model = 'financialYear';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        is_current: 0,
        is_closed: 0
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
          var form = document.getElementById('form');
          var formData = new FormData(form);
          formData.append('start_date', this.data.start_date);
          formData.append('end_date', this.data.end_date);
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
    'data.start_date': function (value = null) { return Validator.value(value).required('Start Date is required'); },
    'data.end_date': function (value = null) { return Validator.value(value).required('End Date is required'); },

  },
}

</script>