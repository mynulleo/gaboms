<template>
  <create-form @onSubmit='submit'>
    <div class="col-9">
      <fieldset>
        <span class="legend">Office Info</span>
        <div class="row g-3">
          <date-picker id='date1' v-model='data.reg_date' field='data.reg_date' title='Reg Date' placeholder='Reg Date'
            col='2' :req='true'></date-picker>
          <Select title='Type' v-model='data.type' field='data.type' label='name' :reduce='(obj) => obj.value'
            :options='$root.global.clienttypes' placeholder='--Select One--' :closeOnSelect='true' col="3"
            :req='true' />
          <Input v-model='data.clientid' field='data.clientid' col="3" title='Client ID' :req='false' />
          <div class="col-md-12"></div>
          <Select title='Service' v-model='data.service_id' field='data.service_id' label='title'
            :reduce='(obj) => obj.id' :options='$root.global.services' placeholder='--Select One--'
            :closeOnSelect='true' col="2" :required='true' />
          <Select title='Package' v-model='data.package_id' field='data.package_id' label='title'
            :reduce='(obj) => obj.id' :options='packages' placeholder='--Select One--' :closeOnSelect='true' col="2"
            :required='false' />
          <Select title='District' v-model='data.district_id' field='data.district_id' label='district_name'
            :reduce='(obj) => obj.id' col="2" :options='$root.global.districts' placeholder='--Select One--'
            :closeOnSelect='true' :required='true' />
          <Select title='Area' v-model='data.area_id' field='data.area_id' label='area_name' :reduce='(obj) => obj.id'
            :options='areas' col="2" placeholder='--Select One--' :closeOnSelect='true' :required='true' />
          <SwitchBoolean v-model='data.is_commission' field='data.is_commission' title='Is Commission' on-label='Yes'
            off-label='No' col="3" :req='true'>
          </SwitchBoolean>
        </div>
      </fieldset>
    </div>
    <div class="col-3">
      <fieldset>
        <span class="legend">Service Info</span>
        <div class="table-responsive">
          <table class="table table-striped">
            <tbody>
              <tr>
                <th width="45%">Service Name</th>
                <th width="5%">:</th>
                <td>{{ data.service?.title }}</td>
              </tr>
              <tr>
                <th>Auto Invoice</th>
                <th width="5%">:</th>
                <td>{{ data.service?.auto_invoice ? 'Yes' : 'No' }}</td>
              </tr>
              <tr>
                <th>Module</th>
                <th width="5%">:</th>
                <td>{{ data.service?.module ?? '' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    </div>
    <div class="col-12">
      <fieldset class="mt-3 mb-3">
        <span class="legend">Client Info</span>
        <div class="row g-3">
          <Input v-model='data.org_name' v-if="data.service_id == 5" field='data.org_name' title='Org Name' col="8"
            :req='false' />
          <Input v-model='data.name' field='data.name' title='Name' col="6" :req='true' />
          <Input v-model='data.nid' field='data.nid' title='NID' col="2" :req='false' />
          <Input v-model='data.mobile' field='data.mobile' title='Mobile' col="2" :req='true' />
          <Input v-model='data.email' field='data.email' title='Email' col="2" :req='false' />
          <Input v-model='data.address' field='data.address' title='Address' col="12" :req='false' />
        </div>
      </fieldset>
    </div>
    <div class="col-6">
      <fieldset class="mt-3 mt-3">
        <span class="legend">Aditional Information</span>
        <div class="row g-3" v-if="data.type == 'New'">
          <Select title='Employee' v-model='data.employee_id' field='data.employee_id' label='full_name'
            :reduce='(obj) => obj.id' col="6" :options='$root.global.employees' placeholder='--Select One--'
            :closeOnSelect='true' :required='false' :readonly="!data.is_commission" />
          <Input v-model='data.ref_name' field='data.ref_name' col="6" title='Ref Name' :req='false'
            :readonly="!data.is_commission" />
          <Input v-model='data.commission_amount' field='data.commission_amount' col="12" title='Commission Amount'
            :readonly="!data.is_commission" :req='false' />
        </div>
        <div class="row g-3" v-else>
          <Input v-model='data.previous_due' field='data.previous_due' col="6" title='Previous Due' :req='false' />
          <Textarea v-model='data.note' field='data.note' col="12" title='Remarks' :req='false' />
        </div>
      </fieldset>
    </div>
    <div class="col-6">
      <fieldset class="mt-3 mt-3">
        <span class="legend">Bank Information</span>
        <div class="row g-3">
          <Input v-model='data.account_name' field='data.account_name' col="6" title='Account Name' :req='false' />
          <Input v-model='data.account_no' field='data.account_no' col="6" title='Account No' :req='false' />
          <Select title='Bank' v-model='data.bank_id' field='data.bank_id' label='bank_name' :reduce='(obj) => obj.id'
            col="6" :options='banks' placeholder='--Select One--' :closeOnSelect='true' :required='false' />
          <Input v-model='data.branch' field='data.branch' col="6" title='Branch' :req='false' />
        </div>
      </fieldset>
    </div>
    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' col="12"
      :req='true'>
    </Switch>

  </create-form>
</template>

<script>


const model = 'client';

export default {
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        type: 'New',
        reg_date: this.$filter.today(),
        is_commission: 0,
        account_name: '',
        account_no: '',
        bank_id: null,
        branch: '',
        employee_id: null,
        service: {
          title: '',
          auto_invoice: 0,
          module: ""
        },
        vat: 0,
        invoice_setup: [
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
        ],
        total_bandwidth: 0,
        total_amount: 0,
        total_include_amount: 0
      },
      packages: [],
      banks: [],
      areas: [],
      categories: [],

    };
  },
  watch: {
    'data.service_id': function () {
      this.getpackages();
      this.getServiceInfo();
    },
    'data.district_id': 'getareas',
    'data.employee_id': 'getEmployeeName',
    'data.is_commission': function () {
      this.emptyCommissionFields();
    },
    'data.package_id': function () {
      this.updateCommissionAmount();
    },
    'data.vat'(val) {
      const hasVat = parseFloat(val) > 0;

      this.data.invoice_setup.forEach(d => {
        d.is_vat = hasVat;
      });

      this.calculateRowAmounts();
      this.calculateTotals();
    },
    'data.invoice_setup': {
      handler() {
        this.calculateRowAmounts();
        this.calculateTotals();
      },
      deep: true
    }
  },
  provide() {
    return {
      validate: this.validation,
    };
  },
  methods: {
    getServiceInfo: function () {
      let serviceid = this.data.service_id;
      axios.get("/getserviceinfo/" + serviceid).then((res) => {
        this.data.service = res.data;
      });
    },
    getpackages: function () {
      this.packages = [];
      var serviceid = this.data.service_id;
      axios.get("/getpackages/" + serviceid).then((res) => {
        this.packages = res.data;
      });
    },
    getareas: function () {
      this.areas = [];
      var district_id = this.data.district_id;
      axios.get("/getareas/" + district_id).then((res) => {
        this.areas = res.data;
      });
    },
    getbanks: function () {
      this.areas = [];
      axios.get("/getbanks/").then((res) => {
        this.banks = res.data;
      });
    },
    getEmployeeName: function () {
      this.data.ref_name =
        this.$root.global.employees.find(e => e.id === this.data.employee_id)?.full_name || '';
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
          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
      });
    },
    updateCommissionAmount: function () {
      let packageid = this.data.package_id;
      axios.get("/getpackagebyid/" + packageid).then((res) => {
        if (this.data.is_commission) {
          this.data.commission_amount = res.data.commission_amount;
        }

      });
    },
    emptyCommissionFields: function () {
      if (this.data.is_commission == 0) {
        this.data.employee_id = '';
        this.data.referance_name = '';
        this.data.commission_amount = 0;
      } else {
        this.updateCommissionAmount();
      }
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
      this.data.invoice_setup.forEach(detail => {
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

      this.data.invoice_setup.forEach(detail => {
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
    getCategories() {
      let module = 'Bandwidth';
      axios.get(`getcategories/${module}`)
        .then((response) => {
          this.categories = response.data;
        });
    },
    addBandwidthDetailsRow() {
      this.data.invoice_setup.push({
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
      if (Object.keys(this.data.invoice_setup).length > 1) {
        this.data.invoice_setup.splice(index)
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
    this.getbanks();
    this.getCategories();
  },

  validators: {
    'data.type': function (value = null) { return Validator.value(value).required('Type is required'); },
    'data.service_id': function (value = null) { return Validator.value(value).required('Service Id is required'); },
    'data.name': function (value = null) { return Validator.value(value).required('Name is required'); },
    'data.mobile': function (value = null) { return Validator.value(value).required('Mobile is required'); },
    'data.area_id': function (value = null) { return Validator.value(value).required('Area Id is required'); },
  },
}

</script>