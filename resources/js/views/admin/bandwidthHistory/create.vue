<template>
  <create-form @onSubmit='submit'>
    <date-picker id='date1' v-model='data.transaction_date' field='data.transaction_date' title='Transaction Date'
      placeholder='Transaction Date' col='2' :req='true'></date-picker>
    <Switch v-model='data.type' field='data.type' col="10" title='Type' on-label='Sale' off-label='Purchase'
      onValue='Sale' offValue='Purchase' :req='true'>
    </Switch>
    <Select title='Uplink Provider' v-if="data.type == 'Purchase'" v-model='data.uplink_provider_id' col="3"
      field='data.uplink_provider_id' label='org_name' :reduce='(obj) => obj.id' :options='$root.global.uplinkproviders'
      placeholder='--Select One--' :closeOnSelect='true' :required='false' />
    <Select title='Service' v-if="data.type == 'Sale'" v-model='data.service_id' field='data.service_id' col="2"
      label='title' :reduce='(obj) => obj.id' :options='$root.global.services' placeholder='--Select One--'
      :closeOnSelect='true' :required='false' />
    <Select title='Client' v-if="data.type == 'Sale'" v-model='data.client_id' field='data.client_id' col="2"
      label='name' :reduce='(obj) => obj.id' :options='clients' placeholder='--Select One--' :closeOnSelect='true'
      :required='false' />
    <Input v-model='data.total_bandwidth' field='data.total_bandwidth' col="2" title='Total Bandwidth' :req='false' />
    <Select title='Unit' v-model='data.unit_id' field='data.unit_id' col="1" label='title' :reduce='(obj) => obj.id'
      :options='$root.global.units' placeholder='--Select One--' :closeOnSelect='true' :required='false' />
    <Input v-model='data.vat' field='data.vat' col="1" title='Vat' :req='false' />
    <Input v-model='data.total_amount' field='data.total_amount' col="2" title='Total Exclude Amount' :req='true' />
    <Input v-model='data.total_include_amount' field='data.total_include_amount	' col="2" title='Total Include Amount'
      :req='true' />
    <SwitchBoolean v-model='data.is_closed' field='data.is_closed' col="3" title='Is Closed' on-label='Yes'
      off-label='No' :req='true'></SwitchBoolean>
    <div class="col-md-12 mb-3">
      <fieldset class="mt-4">
        <span class="legend">Bandwidth Details</span>
        <div class="row">
          <div class="col-md-12">
            <table class="table bandwidth">
              <thead>
                <tr>
                  <th width="5%">Vat</th>
                  <th width="10%">Type</th>
                  <th width="10%">Category</th>
                  <th width="10%">LinkID</th>
                  <th>Rate</th>
                  <th>Bandwidth</th>
                  <th width="10%">Unit</th>
                  <th width="10%">Start Date</th>
                  <th width="10%">End Date</th>
                  <th>Days</th>
                  <th>Excl. Amount</th>
                  <th>Incl. Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(bandwidthdetail, index) in data.bandwidth_details" :key="index">
                  <td><input v-model="bandwidthdetail.is_vat" field="bandwidthdetail.is_vat" :checked="data.is_vat"
                      type="checkbox"></td>
                  <td>
                    <Select v-model="bandwidthdetail.type" field="bandwidthdetail.type" label="name"
                      :reduce="(obj) => obj.value" :options="$root.global.bandwidthtypes" placeholder="--Select One--"
                      :closeOnSelect="true" :required="false" col="12" />
                  </td>
                  <td>
                    <Select v-model="bandwidthdetail.category_id" field="bandwidthdetail.category_id" label="title"
                      :reduce="(obj) => obj.id" :options="categories" placeholder="--Select One--" :closeOnSelect="true"
                      :required="false" col="12" />
                  </td>
                  <td>
                    <Input v-model="bandwidthdetail.linkid" field="bandwidthdetail.linkid" col="12" />
                  </td>
                  <td>
                    <Input v-model="bandwidthdetail.price" field="bandwidthdetail.price" col="12" />
                  </td>
                  <td>
                    <Input v-model="bandwidthdetail.bandwidth" field="bandwidthdetail.bandwidth" col="12" />
                  </td>
                  <td>
                    <Select v-model="bandwidthdetail.unit_id" field="bandwidthdetail.unit_id" label="title"
                      :reduce="(obj) => obj.id" :options="$root.global.units" placeholder="--Select One--"
                      :closeOnSelect="true" :required="false" col="12" />
                  </td>
                  <td>
                    <date-picker :id='"startdate" + index' v-model='bandwidthdetail.start_date'
                      field='bandwidthdetail.start_date' placeholder='Start Date' col='12' :req='false'></date-picker>
                  </td>
                  <td>
                    <date-picker :id='"enddate" + index' v-model='bandwidthdetail.end_date'
                      field='bandwidthdetail.end_date' placeholder='End Date' col='12' :req='false'></date-picker>
                  </td>
                  <td>
                    <Input v-model="bandwidthdetail.days" field="bandwidthdetail.days" col="12" />
                  </td>
                  <td>
                    <Input v-model="bandwidthdetail.exclude_amount" field="bandwidthdetail.amount" col="12" />
                  </td>
                  <td>
                    <Input v-model="bandwidthdetail.include_amount" field="bandwidthdetail.amount" col="12" />
                  </td>
                  <td>
                    <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                      <button type="button" class="btns delete_one" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Delete" v-x-tooltip @click.prevent="
                          removeBandwidthDetails(index)
                          " v-if="
                            Object.keys(
                              data.bandwidth_details
                            ).length > 1
                          ">
                        <i class="fas fa-trash"></i>
                      </button>
                      <button v-if="isLastItem(data.bandwidth_details, index)" type="button" class="btns add_more"
                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                        @click.prevent="addBandwidthDetailsRow()">

                        <i class="fas fa-plus-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </fieldset>
    </div>
    <Switch v-model='data.status' field='data.status' col="3" title='status' on-label='Active' off-label='Deactive'
      :req='true'>
    </Switch>

  </create-form>
</template>

<script>

const model = 'bandwidthHistory';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        transaction_date: this.$filter.today(),
        unit_id: 1,
        total_bandwidth: 0,
        total_amount: 0,
        vat: 0,
        total_include_amount: 0,
        is_closed: 0,
        bandwidth_details: [
          {
            is_vat: false,
            type: '',
            category_id: '',
            linkid: '',
            bandwidth: 0,
            unit_id: 1,
            price: 0,          // rate
            start_date: '',
            end_date: '',
            days: 0,
            exclude_amount: 0,
            include_amount: 0,
          }
        ]
      },
      clients: [],
      categories: [],
    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.vat'(val) {
      const hasVat = parseFloat(val) > 0;

      this.data.bandwidth_details.forEach(d => {
        d.is_vat = hasVat;
      });

      this.calculateRowAmounts();
      this.calculateTotals();
    },
    'data.bandwidth_details': {
      handler() {
        this.calculateRowAmounts();
        this.calculateTotals();
      },
      deep: true
    },
    "data.service_id": function () {
      this.getClientsByService()
    }
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
          formData.append('transaction_date', this.data.transaction_date);
          formData.append('service_id', this.data.service_id);
          formData.append('client_id', this.data.client_id);
          formData.append('uplink_provider_id', this.data.uplink_provider_id);
          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
      });
    },

    getDateDiffInDays(start, end) {
      if (!start || !end) return 0;
      const s = new Date(start);
      const e = new Date(end);
      const diff = e - s;
      if (diff < 0) return 0;
      return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
    },

    getCurrentMonthDays(date) {
      const d = new Date(date);
      return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    },
    calculateRowAmounts() {
      this.data.bandwidth_details.forEach(detail => {
        // day difference 
        detail.days = this.getDateDiffInDays(detail.start_date, detail.end_date);

        const bandwidth = parseFloat(detail.bandwidth) || 0;
        const rate = parseFloat(detail.price) || 0;
        const days = parseFloat(detail.days) || 0;

        //current month days
        const monthDays = detail.start_date ? this.getCurrentMonthDays(detail.start_date) : 30;


        if (detail.days == monthDays) {
          detail.exclude_amount = (bandwidth * rate).toFixed(2);
        } else {
          detail.exclude_amount = monthDays > 0 ? (((bandwidth * rate) / monthDays) * days).toFixed(2) : 0;
        }

        if (detail.is_vat == 1 && this.data.vat > 0) {
          detail.include_amount = (parseFloat(detail.exclude_amount) + (parseFloat(detail.exclude_amount) * parseFloat(this.data.vat)) / 100).toFixed(2);
        } else {
          detail.include_amount = detail.exclude_amount;
        }

      });
    },
    calculateTotals() {
      let totalBw = 0;
      let totalAmt = 0;
      let totalIncAmt = 0;

      this.data.bandwidth_details.forEach(detail => {
        if (detail.type == 'DWNG') {
          totalBw -= parseFloat(detail.bandwidth) || 0;
          totalAmt -= parseFloat(detail.exclude_amount) || 0;
          totalIncAmt -= parseFloat(detail.include_amount) || 0;
        } else {
          totalBw += parseFloat(detail.bandwidth) || 0;
          totalAmt += parseFloat(detail.exclude_amount) || 0;
          totalIncAmt += parseFloat(detail.include_amount) || 0;
        }

      });

      this.data.total_bandwidth = totalBw;
      this.data.total_amount = totalAmt;
      this.data.total_include_amount = totalIncAmt;
    },
    getClientsByService() {
      let service_id = this.data.service_id;
      axios.get(`clients/` + service_id)
        .then((response) => {
          this.clients = response.data;
        });
    },
    getCategories() {
      let module = 'Bandwidth';
      axios.get(`getcategories/${module}`)
        .then((response) => {
          this.categories = response.data;
        });
    },
    addBandwidthDetailsRow() {
      this.data.bandwidth_details.push({
        is_vat: parseFloat(this.data.vat) > 0 ? true : false,
        type: '',
        category_id: '',
        linkid: '',
        bandwidth: 0,
        unit_id: 1,
        price: 0,          // rate
        start_date: '',
        end_date: '',
        days: 0,
        exclude_amount: 0,
        include_amount: 0,
      });
    },
    removeBandwidthDetails(index) {
      if (Object.keys(this.data.bandwidth_details).length > 1) {
        this.data.bandwidth_details.splice(index)
      }
    },
    isLastItem(items, index) {
      return index === items.length - 1;
    },
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getClientsByService();
    this.getCategories();
  },

  validators: {
    'data.type': function (value = null) { return Validator.value(value).required('Type is required'); },
    'data.transaction_date': function (value = null) { return Validator.value(value).required('Transaction Date is required'); },
    'data.total_amount': function (value = null) { return Validator.value(value).required('Total Amount is required'); },

  },
}

</script>