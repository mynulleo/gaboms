<template>
  <create-form @onSubmit='submit'>
    <Select title='District Id' v-model='data.district_id' field='data.district_id' label='district_name'
      :reduce='(obj) => obj.id' :options='$root.global.districts' placeholder='--Select One--' :closeOnSelect='true'
      :required='true' />
    <Input v-model='data.area_name' field='data.area_name' title='Area Name' :req='true' />
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'area';

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
    'data.district_id': function (value = null) { return Validator.value(value).required('District Id is required'); },
    'data.area_name': function (value = null) { return Validator.value(value).required('Area Name is required'); },

  },
}

</script>