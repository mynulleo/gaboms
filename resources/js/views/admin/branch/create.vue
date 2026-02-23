<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.branch_name' field='data.branch_name' title='Branch Name' col="6" :req='true' />
    <Input v-model='data.mobile' field='data.mobile' col="3" title='Mobile' :req='false' />
    <Input v-model='data.email' field='data.email' col="3" title='Email' :req='false' />
    <Textarea v-model='data.address' field='data.address' :required='true' title="Address" col="12" />
    <Input v-model='data.latitude' field='data.latitude' col="3" title='Latitude' :req='false' />
    <Input v-model='data.longitude' field='data.longitude' col="3" title='Longitude' :req='false' />
    <Select title='District' v-model='data.district_id' field='data.district_id' label='district_name'
      :reduce='(obj) => obj.id' :options='$root.global.districts' col="3" placeholder='--Select One--'
      :closeOnSelect='true' :required='true' />
    <Select title='Area' v-model='data.area_id' field='data.area_id' col="3" label='area_name' :reduce='(obj) => obj.id'
      :options='areas' placeholder='--Select One--' :closeOnSelect='true' :required='true' />
    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'branch';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {},
      areas: []
    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    "data.district_id": "getareas"
  },
  methods: {
    getareas: function () {
      this.areas = [];
      var district_id = this.data.district_id;
      axios.get("/getareas/" + district_id).then((res) => {
        this.areas = res.data;
      });
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
          var form = document.getElementById('form');
          var formData = new FormData(form);
          formData.append('district_id', this.data.district_id);
          formData.append('area_id', this.data.area_id);
          formData.append('address', this.data.address);
          formData.append('status', this.data.status);
          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
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
    'data.branch_name': function (value = null) { return Validator.value(value).required('Branch Name is required'); },
    'data.area_id': function (value = null) { return Validator.value(value).required('Area Id is required'); },

  },
}

</script>