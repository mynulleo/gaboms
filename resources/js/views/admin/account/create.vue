<template>
  <create-form @onSubmit='submit'>
    <Select title='Parent' v-model='data.parent_id' col="3" field='data.parent_id' label='name'
      :reduce='(obj) => obj.id' :options='$root.global.groupaccounts' placeholder='--Select One--' :closeOnSelect='true'
      :required='false' />
    <Select title='Account Type' v-model='data.account_type' field='data.account_type' label='name'
      :reduce='(obj) => obj.value' :options='$root.global.accounttypes' placeholder='--Select One--'
      :closeOnSelect='true' :required='true' col="2" />
    <Input v-model='data.account_name' field='data.account_name' title='Account Name' :req='true' col="4" />
    <Input v-model='data.system_key_name' field='data.system_key_name' title='System Key Name' :readonly="true"
      :req='false' col="3" />
    <Select title='Opening Balance Type' v-model='data.opening_balance_type' field='data.opening_balance_type'
      label='name' :reduce='(obj) => obj.id' :options='$root.global.opening_balance_types' placeholder='--Select One--'
      :closeOnSelect='true' :required='false' col="2" />
    <Input v-model='data.opening_balance' field='data.opening_balance' title='Opening Balance' :req='false' col="2" />
    <SwitchBoolean v-model='data.is_fund_account' field='data.is_fund_account' title='Is Fund Account' on-label='Yes'
      off-label='No' :req='false' col="2"></SwitchBoolean>
    <SwitchBoolean v-model='data.is_group' field='data.is_group' title='Is Group' on-label='On' off-label='Off'
      :req='false' col="2"></SwitchBoolean>
    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' col="2"
      :req='true'>
    </Switch>
  </create-form>
</template>

<script>


const model = 'account';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        is_group: 0
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

        var form = document.getElementById("form");
        var formData = new FormData(form);
        formData.append("parent_id", this.data.parent_id);
        formData.append("account_type", this.data.account_type);
        formData.append("reference_type", this.data.reference_type);
        formData.append("opening_balance_type", this.data.opening_balance_type);

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
    'data.account_name': function (value = null) { return Validator.value(value).required('Account Name is required'); },
    'data.account_type': function (value = null) { return Validator.value(value).required('Account Type is required'); },
  },
}

</script>