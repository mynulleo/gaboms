<template>
  <create-form @onSubmit='submit'>
    <div class="row custom_row">
      <div class="col-lg-12">
        <fieldset>
          <span class="legend">Residence Info</span>
          <div class="row g-3 pt-2">
            <Input v-model='data.residence_name' field='data.residence_name' title='Residence Name' col="12"
              :req='true' />
            <!-- <Input v-model='data.floor' field='data.residence_name' title='Total Floor' :req='true' col="2" />
            <Input v-model='data.flat' field='data.residence_name' title='Total Flat' :req='true' col="2" /> -->
            <Textarea v-model='data.address' field='data.address' :required='true' title="Address" col="12" />
          </div>
        </fieldset>
      </div>
      <div class="col-lg-6">
        <fieldset>
          <span class="legend">Owner Info</span>
          <div class="row g-3 pt-2">
            <Input v-model='data.owner_name' field='data.owner_name' title='Owner Name' :req='true' />
            <Input v-model='data.nid' field='data.nid' title='Nid' :req='true' />
            <Input v-model='data.mobile' field='data.mobile' title='Mobile' :req='true' />
            <Input v-model='data.email' field='data.email' title='Email' :req='true' />
            <Input v-model='data.password' field='data.password' title='Password' :req='true' />
            <!-- <Input v-model='data.confirm_password' field='data.confirm_password' title='Confirm Password' :req='true' /> -->
          </div>
        </fieldset>
      </div>
      <div class="col-lg-6">
        <fieldset>
          <span class="legend">System Info</span>
          <div class="row g-3 pt-2">
            <Select title='Package Id' v-model='data.package_id' field='data.package_id' label='title'
              :reduce='(obj) => obj.id' :options='$root.global.packages' placeholder='--Select One--'
              :closeOnSelect='true' :required='true' />
            <date-picker id='date6' v-model='data.reg_date' field='data.reg_date' title='Reg Date'
              placeholder='Reg Date' col='3' :req='false'></date-picker>
            <date-picker id='date7' v-model='data.expired_date' field='data.expired_date' title='Expired Date'
              placeholder='Expired Date' col='3' :req='false'></date-picker>
            <Input v-model='data.host' field='data.host' title='Host' />
            <Input v-model='data.db_name' field='data.db_name' title='Database name' />
            <Input v-model='data.db_user' field='data.db_user' title='Database user' />
            <Input v-model='data.db_password' field='data.db_password' title='Password' />
          </div>
        </fieldset>
      </div>
      <div class="col-lg-12">
        <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive'
          :req='true'>
        </Switch>
      </div>
    </div>
  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'residence';

export default {
  components: { Editor },
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
          var form = document.getElementById('form');
          var formData = new FormData(form);
          formData.append('address', this.data.address);
          formData.append('package_id', this.data.package_id);
          formData.append('reg_date', this.data.reg_date);
          formData.append('expired_date', this.data.expired_date);
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
    'data.residence_name': function (value = null) { return Validator.value(value).required('Residence Name is required'); },
    'data.owner_name': function (value = null) { return Validator.value(value).required('Owner Name is required'); },
    'data.address': function (value = null) { return Validator.value(value).required('Address is required'); },
    'data.mobile': function (value = null) { return Validator.value(value).required('Mobile is required').digit().minLength(11).maxLength(11); },
    'data.email': function (value = null) { return Validator.value(value).required('Email is required').email(); },
    'data.package_id': function (value = null) { return Validator.value(value).required('Package Id is required'); },
    'data.nid': function (value = null) { return Validator.value(value).required('Nid is required'); },
    "data.password": function (value = null) {
      if (this.$route.params.id) {
        return Validator.value(value).minLength(6);
      } else {
        return Validator.value(value)
          .required("Password is required")
          .minLength(6);
      }
    },


  },
}

</script>