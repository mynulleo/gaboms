<template>
  <create-form @onSubmit='submit'>
    <div class="row g-3">
      <div class="col-md-9">
        <fieldset>
          <span class="legend">Workorder</span>
          <div class="row g-3">
            <date-picker id='date1' v-model='data.order_date' field='data.order_date' title='Order Date'
              placeholder='Order Date' col='2' :req='true'></date-picker>
            <Select title='Client' v-model='data.client_id' field='data.client_id' label='org_name'
              :reduce='(obj) => obj.id' :options='clients' placeholder='--Select One--' :closeOnSelect='true'
              :required='true' col="4" />

            <Input v-model='data.order_no' field='data.order_no' title='Order No' :req='true' col="2" />
            <Input v-model='data.uno_no' field='data.uno_no' title='Uno No' :req='false' col="2" />
            <date-picker id='date4' v-model='data.delivery_date' field='data.delivery_date' title='Delivery Date'
              placeholder='Delivery Date' col='2' :req='true'></date-picker>
            <Textarea v-model='data.shipping' field='data.shipping' title='Shipping' :req='false' />
            <Textarea v-model='data.remarks' field='data.remarks' title='Remarks' :req='false' />
            <Select title='Currency' v-model='data.currency_id' field='data.currency_id' label='short_name'
              :reduce='(obj) => obj.id' :options='$root.global.currencies' placeholder='--Select One--'
              :closeOnSelect='true' :required='true' col="2" />
            <Input v-model='data.currency_rate' field='data.currency_rate' title='Currency Rate' :req='false' col="2" />
            <Input v-model='data.amount' field='data.amount' title='Amount' :req='true' col="3" />
          </div>
        </fieldset>
      </div>
      <div class="col-md-3">
        <fieldset>
          <span class="legend">Import Item</span>

          <p class="fst-italic mb-3">
            If the Work Order Details are large or contain many items, you can download the provided
            <a :href="$root.storage_url + '/workorderdetail.xlsx'">sample XLS file</a>,
            fill in the required information, and upload it here. The system will automatically populate the Work Order
            Details from the uploaded file.
          </p>
          <div class="mb-3">
            <label for="" class="form-label">Upload Your File</label>
            <input class="form-control" type="file" name="clientexcel" accept=".xlsx,.csv" @change="onFileChange" />
            <div v-if="fileName" id="emailHelp" class="form-text"> Selected: {{ fileName }}</div>

          </div>
          <!-- Progress Bar -->
          <div v-if="uploading" class="mt-3">
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                :style="{ width: uploadProgress + '%' }">
                {{ uploadProgress }}%
              </div>
            </div>
            <small class="text-muted">Uploading & Processing File...</small>
          </div>

        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <span class="legend">Workorder Detail</span>
          <table class="table table-striped">
            <thead>
              <tr>
                <th width="50%">Description</th>
                <th>Actual Qty</th>
                <th>Ordered Qty</th>
                <th>Unit Price</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(workorderdetail, index) in data.workorder_details" :key="index">
                <td>
                  <Textarea v-model="workorderdetail.description" field="workwoderdetail.description" :required="false"
                    col="12" />
                </td>
                <td>
                  <Input v-model="workorderdetail.actual_qty" field="workorderdetail.actual_qty" col="12" />
                </td>
                <td>
                  <Input v-model="workorderdetail.ordered_qty" field="workorderdetail.ordered_qty" col="12" />
                </td>
                <td>
                  <Input v-model="workorderdetail.unit_price" field="workorderdetail.unit_price" col="12" />
                </td>
                <td>
                  <Input v-model="workorderdetail.price" field="workorderdetail.price" col="12" />
                </td>
                <td>
                  <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                    <button type="button" class="btns delete_one" data-bs-toggle="tooltip" data-bs-placement="top"
                      data-bs-title="Delete" v-x-tooltip @click.prevent="
                        removeWorkorderDetails(index)
                        " v-if="
                          Object.keys(
                            data.workorder_details
                          ).length > 1
                        ">
                      <i class="fas fa-trash"></i>
                    </button>
                    <button v-if="isLastItem(data.workorder_details, index)" type="button" class="btns add_more"
                      data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                      @click.prevent="addWorkorderDetailsRow()">

                      <i class="fas fa-plus-square"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    </div>

    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

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
      data: {
        order_date: this.$filter.today(),
        currency_id: 2,
        workorder_details: [
          {
            description: '',
            actual_qty: '',
            ordered_qty: '',
            unit_price: '',
            price: '',
          }
        ]
      },
      fileName: '',
      clients: [],
      uploading: false,
      uploadProgress: 0,
    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.workorder_details': {
      handler(details) {

        let total = 0;

        details.forEach(item => {
          let price = parseFloat(item.price) || 0;
          total += price;
        });

        this.data.amount = total.toFixed(2);

      },
      deep: true
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
          formData.append('client_id', this.data.client_id);
          formData.append('currency_id', this.data.currency_id);
          formData.append('order_date', this.data.order_date);
          formData.append('delivery_date', this.data.delivery_date);
          formData.append('shipping', this.data.shipping);
          formData.append('workorder_details', JSON.stringify(this.data.workorder_details));
          formData.append('status', this.data.status);
          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    onFileChange(e) {

      const file = e.target.files[0];
      if (!file) return;

      const ext = file.name.split(".").pop().toLowerCase();
      if (!["xlsx", "csv"].includes(ext)) {
        alert("Only .xlsx or .csv file allowed");
        e.target.value = "";
        return;
      }

      let formData = new FormData();
      formData.append("file", file);

      this.uploading = true;
      this.uploadProgress = 0;

      axios.post("/import-workorder-excel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress: (progressEvent) => {

          if (progressEvent.lengthComputable) {
            this.uploadProgress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
          }

        }

      })
        .then(res => {

          this.data.workorder_details = res.data;
          this.fileName = file.name;

        })
        .catch(err => {

          console.error(err);
          alert("File upload failed");

        })
        .finally(() => {

          this.uploading = false;
          this.uploadProgress = 0;

        });

    },
    addWorkorderDetailsRow() {
      this.data.voucher_details.push({
        description: '',
        actual_qty: '',
        ordered_qty: '',
        unit_price: '',
        price: '',
      });
    },
    removeWorkorderDetails(index) {
      if (Object.keys(this.data.voucher_details).length > 1) {
        this.data.voucher_details.splice(index)
      }
    },
    isLastItem(items, index) {
      return index === items.length - 1;
    },
    getClients() {
      axios.get(`clients/`)
        .then((response) => {
          this.clients = response.data;
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
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getClients();
  },

  validators: {
    'data.client_id': function (value = null) { return Validator.value(value).required('Client Id is required'); },
    'data.order_date': function (value = null) { return Validator.value(value).required('Order Date is required'); },
    'data.order_no': function (value = null) { return Validator.value(value).required('Order No is required'); },
    'data.delivery_date': function (value = null) { return Validator.value(value).required('Delivery Date is required'); },
    'data.currency_id': function (value = null) { return Validator.value(value).required('Currency Id is required'); },
    'data.amount': function (value = null) { return Validator.value(value).required('Amount is required'); },

  },
}

</script>