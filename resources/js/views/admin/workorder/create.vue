<template>
  <create-form @onSubmit='submit'>
    <Select title='Client Id' v-model='data.client_id' field='data.client_id' label='name' :reduce='(obj) => obj.id' :options='[]' placeholder='--Select One--' :closeOnSelect='true' :required='true' /> 
				<date-picker id='date1'  v-model='data.order_date' field='data.order_date' title='Order Date' placeholder='Order Date' col='2' :req='true'></date-picker>
				<Input v-model='data.order_no' field='data.order_no' title='Order No' :req='true' />
				<Input v-model='data.uno_no' field='data.uno_no' title='Uno No' :req='false' />
				<date-picker id='date4'  v-model='data.delivery_date' field='data.delivery_date' title='Delivery Date' placeholder='Delivery Date' col='2' :req='true'></date-picker>
				<div class='col-12 mb-3'> <label class='form-label'>Shipping</label> <div class='col-12'> <editor  v-model='data.shipping' field='data.shipping' :required='false' /></div></div>				<Input v-model='data.remarks' field='data.remarks' title='Remarks' :req='false' />
				<Select title='Currency Id' v-model='data.currency_id' field='data.currency_id' label='name' :reduce='(obj) => obj.id' :options='[]' placeholder='--Select One--' :closeOnSelect='true' :required='true' /> 
				<Input v-model='data.currency_rate' field='data.currency_rate' title='Currency Rate' :req='false' />
				<Input v-model='data.amount' field='data.amount' title='Amount' :req='true' />
<Switch
                v-model='data.status'
                field='data.status'
                title='status'
                on-label='Active'
                off-label='Deactive'
                :req='true'
            ></Switch>

  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'workorder';

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
          var form = document.getElementById('form'); var formData = new FormData(form);
          formData.append('order_date',this.data.order_date);formData.append('delivery_date',this.data.delivery_date);formData.append('shipping',this.data.shipping);formData.append('status',this.data.status);
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
    'data.client_id': function (value = null) { return Validator.value(value).required('Client Id is required');},
		'data.order_date': function (value = null) { return Validator.value(value).required('Order Date is required');},
		'data.order_no': function (value = null) { return Validator.value(value).required('Order No is required');},
				'data.delivery_date': function (value = null) { return Validator.value(value).required('Delivery Date is required');},
						'data.currency_id': function (value = null) { return Validator.value(value).required('Currency Id is required');},
				'data.amount': function (value = null) { return Validator.value(value).required('Amount is required');},

  },
}

</script>