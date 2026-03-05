<template>
  <create-form @onSubmit='submit'>
    <Select title='Module' v-model='data.module' field='data.module' label='name' :reduce='(obj) => obj.value'
      :options='$root.global.modules' placeholder='--Select One--' :closeOnSelect='true' col="3" :required='true' />
    <Input v-model='data.title' field='data.title' title='Title' :req='true' col="9" />
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'unit';

export default {
  computed: {
    modules() {
      const modules = [];
      if (Object.keys(this.unitModuleNames).length > 0) {
        this.unitModuleNames.forEach(function (type) {
          modules.push({
            name: type.name,
            value: type.value,
          });
        });
      }
      return modules;
    },
  },
  data() {
    return {
      model: model,
      page_title: '',
      data: {},
      modules: {}

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
    'data.module': function (value = null) { return Validator.value(value).required('Module is required'); },
    'data.title': function (value = null) { return Validator.value(value).required('Title is required'); },

  },
}

</script>