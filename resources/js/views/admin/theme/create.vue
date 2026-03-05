<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.title' field='data.title' title='Title' :req='true' :disabled="$route.params.id" />
    <XFile v-model='data.theme' field='data.theme' title='Theme' :req='!$route.params.id' />
    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive'
      :req='true' />

  </create-form>
</template>

<script>
const model = 'theme';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {},
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
            this.update(this.model, this.createFormData(this.data), this.data.id, true);
          } else {
            this.store(this.model, this.createFormData(this.data));
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
    'data.title': function (value = null) {
      return Validator.value(value).required('Title is required').minLength(3).maxLength(190);
    },
    'data.theme': function (value = null) {
      if (this.$route.params.id) {
        return Validator.value(value);
      } else {
        return Validator.value(value).required('Theme is required');
      }
    },
  },
}

</script>