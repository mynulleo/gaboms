<template>
  <create-form @onSubmit='submit'>
    <div class="col-md-8">
      <fieldset>
        <span class="legend">Form</span>
        <div class="row g-3">
          <SwitchBoolean v-model='data.is_employee' field='data.is_employee' title='Is Employee' col="3" on-label='Yes'
            off-label='No' :req='true'></SwitchBoolean>
          <div class="col-md-12"></div>
          <Select v-if="data.is_employee" title='Employee' v-model='data.employee_id' field='data.employee_id'
            label='full_name' :reduce='(obj) => obj.id' :options='$root.global.employees' placeholder='--Select One--'
            :closeOnSelect='true' col="4" :required='false' />
          <Input v-if="!data.is_employee" v-model='data.reference_name' field='data.reference_name'
            title='Reference Name' col="4" :req='false' />
          <Input v-if="!data.is_employee" v-model='data.reference_mobile' field='data.reference_mobile'
            title='Reference Mobile' col="4" :req='false' />
          <Input v-if="!data.is_employee" v-model='data.reference_nid' field='data.reference_nid' title='Reference NID'
            col="4" :req='false' />
          <Textarea v-if="!data.is_employee" v-model='data.reference_address' field='data.reference_address'
            title='Reference Address' :req='false' col="12" />

          <div class="col-md-12"></div>
          <Select title='Service' v-model='data.service_id' field='data.service_id' label='title'
            :reduce='(obj) => obj.id' :options='services' placeholder='--Select One--' :closeOnSelect='true' col="3"
            :required='false' />
          <Select title='Client' v-model='data.client_id' field='data.client_id' label='name' :reduce='(obj) => obj.id'
            :options='clients' placeholder='--Select One--' :closeOnSelect='true' col="3" :required='false' />
          <Input v-model='data.percentage' field='data.percentage' title='Percentage' :req='false' col="3" />
          <Input v-model='data.amount' field='data.amount' title='Amount' :req='false' col="3" />

          <Switch v-model='data.status' field='data.status' title='status' on-label='Active' col="3"
            off-label='Deactive' :req='true'>
          </Switch>
        </div>
      </fieldset>
    </div>
    <div class="col-md-4">
      <fieldset>
        <span class="legend">Package Info</span>
        <div class="table table-striped">
          <table class="table table-striped">

            <tbody>
              <tr>
                <td colspan="3">
                  <i>Package Information</i>
                </td>
              </tr>
              <tr>
                <th width="40%">Package Name</th>
                <th width="5%">:</th>
                <td>{{ data.package?.title }}</td>
              </tr>
              <tr>
                <th>Bandwidth</th>
                <th>:</th>
                <td>{{ data.package?.bandwidth }}</td>
              </tr>
              <tr>
                <th>Price</th>
                <th>:</th>
                <td>{{ data.package?.price }}</td>
              </tr>
              <tr>
                <th>Commission Percentage</th>
                <th>:</th>
                <td>{{ data.package?.commission_percentage }}</td>
              </tr>
              <tr>
                <th>Commission Amount</th>
                <th>:</th>
                <td>{{ data.package?.commission_amount }}</td>
              </tr>
              <tr>
                <td colspan="3">
                  <i>Client/ Reference Information</i>
                </td>
              </tr>
              <tr>
                <th>Reference Name</th>
                <th>:</th>
                <td>{{ data.reference_name }}</td>
              </tr>
              <tr>
                <th>Reference Mobile</th>
                <th>:</th>
                <td>{{ data.reference_mobile }}</td>
              </tr>
              <tr>
                <th>Reference NID</th>
                <th>:</th>
                <td>{{ data.reference_nid }}</td>
              </tr>
              <tr>
                <th>Reference Address</th>
                <th>:</th>
                <td>{{ data.reference_address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    </div>
  </create-form>
</template>

<script>
const model = 'commission';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        is_employee: false,
        employee_id: null,
        package_id: null,
        percentage: 0,
        amount: 0,
        package: {},
        client_id: null,
        client: null
      },
      clients: [],
      services: []
    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.employee_id': function (e) {
      this.getEmployeeInfo();
    },
    'data.service_id': function (e) {
      this.getClients();
    },
    'data.client_id': function (e) {
      this.getPackageInfo();
    }
  },
  methods: {
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
    getEmployeeInfo() {
      let empid = this.data.employee_id;
      axios.get(
        `employeeinfo/` + empid
      )
        .then((response) => {
          this.data.reference_name = response.data.full_name;
          this.data.reference_mobile = response.data.mobile;
          this.data.reference_nid = response.data.nid;
          this.data.reference_address = response.data.present_address;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getServices() {
      axios.get(`getservices`)
        .then((response) => {
          this.services = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getClients() {
      let serviceid = this.data.service_id ? this.data.service_id : 0;
      axios.get(`clientsforcommissions/${serviceid}`)
        .then((response) => {
          this.clients = response.data;

          // commission edit page হলে
          if (this.$route.params.id) {
            const clientId = this.data.client_id;

            const exists = this.clients.find(c => c.id == clientId);

            if (!exists && this.data.client) {
              this.clients.push({
                id: this.data.client.id,
                name: this.data.client.name
              });
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getPackageInfo() {
      let clientid = this.data.client_id;
      axios.get(
        `getpackagebyclientid/` + clientid
      )
        .then((response) => {
          this.data.package = response.data;
          this.data.package_id = response.data.id;
          this.data.percentage = response.data.commission_percentage;
          this.data.amount = response.data.commission_amount;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';

      this.get_data(`${this.model}/${this.$route.params.id}`);

      // 🔹 data লোড হওয়ার জন্য nextTick + small delay
      this.$nextTick(() => {
        setTimeout(() => {
          this.getClients();
        }, 300); // 300ms usually enough
      });

    } else {
      this.page_title = this.headline(this.model) + ' Create';
      this.getClients();
    }
    this.getServices();
  },

  validators: {

  },
}

</script>