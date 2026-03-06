<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.title' field='data.title' title='Title' :req='true' col="3" />
    <Input v-model='data.short_name' field='data.short_name' title='Short Name' :req='true' col="2" />
    <Input v-model='data.symbol' field='data.symbol' title='Symbol' :req='true' col="2" />
    <SwitchBoolean v-model='data.is_default' field='data.is_default' title='Is Default' on-label='Yes' off-label='No'
      col="2">
    </SwitchBoolean>
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' col="3"
      :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'currency';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        is_default: 0
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
    'data.short_name': function (value = null) { return Validator.value(value).required('Short Name is required'); },
    'data.symbol': function (value = null) { return Validator.value(value).required('Symbol is required'); },

  },
}

</script>