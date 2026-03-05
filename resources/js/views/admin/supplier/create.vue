<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.org_name' field='data.org_name' col="3" title='Org Name' :req='true' />
    <Input v-model='data.name' field='data.name' title='Name' col="3" :req='false' />
    <Input v-model='data.designation' field='data.designation' col="2" title='Designation' :req='false' />
    <Input v-model='data.mobile' field='data.mobile' title='Mobile' col="2" :req='false' />
    <Input v-model='data.email' field='data.email' title='Email' col="2" :req='false' />
    <Textarea v-model='data.address' field='data.address' :required='true' title="Address" col="12" />
    <Input v-model='data.website' field='data.website' title='Website' col="3" :req='false' />
    <Input v-model='data.account_name' field='data.account_name' title='Account Name' col="3" :req='false' />
    <Input v-model='data.account_no' field='data.account_no' title='Account No' col="3" :req='false' />
    <Select title='Bank' v-model='data.bank_id' field='data.bank_id' label='bank_name' :reduce='(obj) => obj.id' col="3"
      :options='banks' placeholder='--Select One--' :closeOnSelect='true' :required='false' />
    <Input v-model='data.branch' field='data.branch' title='Branch' col="3" :req='false' />

    <Input v-model='data.routing' field='data.routing' title='Routing No' col="3" :req='false' />
    <Switch v-model='data.status' field='data.status' title='status' col="3" on-label='Active' off-label='Deactive'
      :req='true'>
    </Switch>

  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'supplier';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {},
      banks: [],
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
          formData.append('bank_id', this.data.bank_id);
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
    getbanks: function () {
      this.areas = [];
      axios.get("/getbanks/").then((res) => {
        this.banks = res.data;
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
    this.getbanks();
  },

  validators: {
    'data.org_name': function (value = null) { return Validator.value(value).required('Org Name is required'); },
    'data.mobile': function (value = null) { return Validator.value(value).digit().minLength(11).maxLength(11); },

  },
}

</script>