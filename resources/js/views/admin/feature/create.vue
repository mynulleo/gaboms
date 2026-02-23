<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.icon' field='data.icon' title='Icon' :req='true' />
    <Input v-model='data.title' field='data.title' title='Title' :req='true' />
    <Input v-model='data.description' field='data.description' title='Description' :req='false' col="12" />
    <Input v-model="data.sorting" field="data.sorting" name="sorting" title="Sorting" type="number" col="2"
      :req="true" />
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'feature';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        sorting: 0
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
      this.get_sorting("Feature");
      this.page_title = this.headline(this.model) + ' Create';
    }
  },

  validators: {
    'data.icon': function (value = null) { return Validator.value(value).required('Icon is required'); },
    'data.title': function (value = null) { return Validator.value(value).required('Title is required'); },

  },
}

</script>