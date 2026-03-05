<template>
  <create-form @onSubmit='submit'>
    <Select title='Category' v-model='data.service_id' field='data.service_id' label='title' :reduce='(obj) => obj.id'
      :options='$root.global.services' placeholder='--Select One--' :required='true' col="2" />
    <Input v-model='data.title' field='data.title' title='Title' :req='true' col="4" />
    <Input v-model='data.bandwidth' field='data.bandwidth' title='Bandwidth' :req='true' col="2" />
    <Select title='Unit' v-model='data.unit_id' field='data.unit_id' label='title' :reduce='(obj) => obj.id'
      :options='units' placeholder='--Select One--' :required='true' col="2" />
    <Input v-model='data.vat' field='data.vat' title='Vat' col="1" />
    <Input v-model='data.price' field='data.price' title='Price' :req='true' col="2" />
    <Input v-model='data.commission_percentage' field='data.commission_percentage' title='Commission Percentage'
      :req='true' col="2" />
    <Input v-model='data.commission_amount' field='data.commission_amount' title='Commission Amount' :req='true'
      col="2" />
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'
      col="2"></Switch>

  </create-form>
</template>

<script>


const model = 'package';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        price: 0,
        vat: 0,
        commission_percentage: 0,
        commission_amount: 0,
      },
      categories: [],
      units: [],
    };
  },

  provide() {
    return {
      validate: this.validation,
    };
  },
  watch: {
    'data.commission_percentage': 'calculateCommission',
    'data.price': 'calculateCommission',
    'data.vat': 'calculateCommission',
  },
  methods: {
    calculateCommission() {
      const price = Number(this.data.price) || 0;
      const vat = Number(this.data.vat) || 0;
      const percentage = Number(this.data.commission_percentage) || 0;

      const total_price = price + vat;

      this.data.commission_amount =
        ((total_price * percentage) / 100).toFixed(2);
    },
    submit: function (e) {

      this.$validate().then((res) => {
        const error = this.validation.countErrors();

        if (error > 0) {
          this.$toast(
            'You need to fill ' + error + ' more empty mandatory fields',
            'warning'
          );
          return false;
        }

        if (res) {
          var form = document.getElementById('form');
          var formData = new FormData(form);

          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
      });
    },
    getUnits() {
      axios.get("/getunits/Service").then((res) => {
        this.units = res.data;
      });
    }
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getUnits();
  },

  validators: {
    'data.title': function (value = null) { return Validator.value(value).required('Title is required'); },
    'data.bandwidth': function (value = null) { return Validator.value(value).required('Bandwidth is required'); },
    'data.price': function (value = null) { return Validator.value(value).required('Price is required'); },
    'data.vat': function (value = null) { return Validator.value(value).required('Vat is required'); },
  },
}

</script>