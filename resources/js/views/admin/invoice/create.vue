<template>
  <div class="row">
    <create-form @onSubmit="submit">
      <div class="col-md-8 mb-5">
        <div class="row">
          <div class="col-md-12">

            <fieldset>
              <span class="legend">Invoice</span>
              <div class="row g-3">
                <Input v-model="data.clientid" field="data.residenceno" title="Client ID" :req="true"
                  :disabled="this.$route.params.id ? true : false" @keyup.enter="fetchClientData" />
                <Select title='Service' v-model='data.service_id' field='data.service_id' col="3" label='title'
                  :reduce='(obj) => obj.id' :options='$root.global.services' placeholder='--Select One--'
                  :closeOnSelect='true' :required='false' :disabled="this.$route.params.id ? true : false" />
                <Select title='Client' v-model='data.client_id' field='data.client_id' col="3" label='name'
                  :reduce='(obj) => obj.id' :options='clients' placeholder='--Select One--' @change="fetchClientData"
                  :closeOnSelect='true' :required='false' :disabled="this.$route.params.id ? true : false" />
                <hr class="mt-2" />

                <date-picker id="date2" v-model="data.invoice_date" field="data.invoice_date" title="Invoice Date"
                  placeholder="Invoice Date" col="3" :req="false" />
                <Input v-model="data.original_amount" field="data.original_amount" title="Amount" col="3"
                  :readonly="true" :req="true" />
                <Input v-model="data.discount" field="data.discount" @change="recalculateTotals()" title="Discount"
                  col="3" />
                <Input v-model="data.amount" field="data.amount" title="Total" col="3" :req="true" :readonly="true" />
                <hr class="mt-2" />
                <date-picker v-if="data.payment_status == 'paid'" id="date5" v-model="data.payment_date"
                  field="data.payment_date" title="Payment Date" placeholder="Payment Date" col="3" :req="false" />

                <Input v-if="data.payment_status == 'paid'" v-model="data.paid_amount" field="data.paid_amount" col="3"
                  title="Paid Amount" :req="false" />

                <Input v-if="data.payment_status == 'paid'" v-model="data.trxid" field="data.trxid" title="Trxid"
                  :req="false" />

                <Select v-if="data.payment_status == 'paid'" title="Payment Status" v-model="data.payment_status"
                  field="data.payment_status" label="name" :reduce="(obj) => obj.value"
                  :options="$root.global.payment_status" placeholder="--Select One--" :closeOnSelect="true"
                  :required="false" />
              </div>
            </fieldset>
          </div>

          <div class="col-md-12 mt-4 mb-2">
            <fieldset>
              <span class="legend">Invoice Months</span>
              <div class="d-flex flex-wrap gap-2">
                <div v-for="(m, index) in data.invoice_months" :key="index" class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" :id="'month_' + index" v-model="m.checked" />
                  <label class="form-check-label" :for="'month_' + index" @change="onMonthsChange">
                    {{ m.label }}
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <!-- Invoice Details -->
          <div class="col-md-12">
            <fieldset class="mt-4">
              <span class="legend">Invoice Details</span>
              <div class="row">
                <div class="col-md-12">
                  <table class="table">
                    <thead>
                      <tr>
                        <th style="width:5%">Sl</th>
                        <th>Description</th>
                        <th style="width:10%">Months</th>
                        <th style="width:10%" v-if="data?.client?.service?.title == 'MAC'">T.Users</th>
                        <th style=" width:20%">Amount</th>
                        <th style="width:20%">Total</th>
                        <th style="width:10%"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(invdetail, index) in data.invoice_details" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>
                          <Textarea v-model="invdetail.description" field="invdetail.description" :required="false"
                            col="12" />
                        </td>
                        <td>
                          <Input v-model="invdetail.month_count" field="invdetail.month_count" col="12"
                            :readonly="true" />
                        </td>
                        <td v-if="data?.client?.service?.title == 'MAC'">
                          <Input v-model="invdetail.user_count" field="invdetail.user_count" col="12"
                            @change="recalculateRow(invdetail)" />
                        </td>
                        <td>
                          <Input v-model="invdetail.amount" field="invdetail.amount" col="12"
                            @change="recalculateRow(invdetail)" />
                        </td>
                        <td>
                          <Input v-model="invdetail.total_amount" field="invdetail.total_amount" col="12"
                            :readonly="false" />
                        </td>
                        <td>
                          <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                            <button type="button" class="btns delete_one" v-if="data.invoice_details.length > 1"
                              @click.prevent="removeInvoiceDetails(index)">
                              <span class="icon"><i class="fas fa-trash"></i></span>
                            </button>

                            <button v-if="isLastItem(data.invoice_details, index)" type="button" class="btns add_more"
                              @click.prevent="addInvoiceDetailsRow()">
                              <span class="icon"><i class="fas fa-plus"></i></span>
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
          <div class="col-md-12 mt-4"></div>
          <Switch v-model="data.status" field="data.status" title="Status" on-label="Active" off-label="Deactive"
            :req="true" />
        </div>
      </div>

      <!-- Client Info -->
      <div class="col-md-4 mb-5">
        <fieldset>
          <span class="legend">Client Info</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Service</th>
                  <th>:</th>
                  <td>{{ data?.client?.service?.title }}</td>
                </tr>
                <tr>
                  <th width="45%">Client Name</th>
                  <th width="5">:</th>
                  <td width="50%">{{ data?.client?.name }}</td>
                </tr>
                <tr>
                  <th>Owner Name</th>
                  <th>:</th>
                  <td>{{ data?.client?.org_name }}</td>
                </tr>
                <tr>
                  <th>Package</th>
                  <th>:</th>
                  <td>{{ data?.client?.package?.title }}</td>
                </tr>
                <tr>
                  <th>Bandwidth</th>
                  <th>:</th>
                  <td>
                    {{ data?.client?.package?.bandwidth }}
                    {{ data?.client?.package?.unit?.title }}
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <th>:</th>
                  <td>
                    <strong>{{ data?.client?.package?.price }}</strong>
                  </td>
                </tr>
                <tr>
                  <th>Vat</th>
                  <th>:</th>
                  <td>
                    <strong>{{ data?.client?.package?.vat }}</strong>
                  </td>
                </tr>
                <tr>
                  <th>Total Price</th>
                  <th>:</th>
                  <td>
                    <strong>
                      {{
                        (
                          parseFloat(data?.client?.package?.price || 0) +
                          parseFloat(data?.client?.package?.vat || 0)
                        ).toFixed(2)
                      }}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <th>:</th>
                  <td>{{ data?.client?.mobile }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <th>:</th>
                  <td>{{ data?.client?.email }}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <th>:</th>
                  <td>{{ data?.client?.address }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
    </create-form>
  </div>
</template>

<script>
const model = "invoice";

export default {
  data() {
    return {
      model,
      page_title: "",
      isEditMode: false,
      base_description: "",

      data: {
        id: null,
        clientid: "",
        service_id: '',
        client_id: null,
        invoice_date: this.$filter.today(),
        original_amount: 0,
        discount: 0,
        amount: 0,
        payment_status: "",
        payment_date: "",
        paid_amount: 0,
        trxid: "",
        status: true,

        client: {},
        invoice_months: [],
        invoice_details: [
          {
            description: "",
            amount: 0,
            user_count: null,
            month_count: 1,
            total_amount: 0,
            account_id: null,
          },
        ],
        savedMonths: [],
      },

      accounts: [],
      clients: []
    };
  },

  provide() {
    return {
      validate: this.validation || { errors: {} },
    };
  },
  watch: {
    "data.invoice_months": {
      handler() {
        this.onMonthsChange();
      },
      deep: true,
    },
    "data.invoice_date": {
      handler() {
        this.generateInvoiceMonths();
      }
    },
    "data.invoice_details": {
      handler() {
        this.recalculateTotals();
      },
      deep: true,
    },
    'data.service_id': function () {
      this.getClientsByService();
    }
  },
  methods: {
    submit() {
      this.$validate().then(() => {
        const error = this.validation.countErrors();
        if (error > 0) {
          this.$toast(
            "You need to fill " + error + " more empty mandatory fields",
            "warning"
          );
          return;
        }

        this.data.id
          ? this.update(this.model, this.data, this.data.id)
          : this.store(this.model, this.data);
      });
    },
    getClientsByService() {
      let service_id = this.data.service_id;
      axios.get(`clients/` + service_id)
        .then((response) => {
          this.clients = response.data;
        });
    },
    /* -------------------------
       Invoice Months
    --------------------------*/
    generateInvoiceMonths() {
      const base = new Date(this.data.invoice_date);
      const current = new Date();
      const months = [];

      const currentValue =
        `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, "0")}`;

      for (let i = -6; i <= 6; i++) {
        const d = new Date(base);
        d.setMonth(base.getMonth() + i);

        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const value = `${year}-${month}`;

        months.push({
          value,
          label: d.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          }),
          // current invoice month auto checked
          checked: value === currentValue,
        });
      }

      this.data.invoice_months = months;
    },

    onMonthsChange() {
      const selected = this.data.invoice_months.filter(m => m.checked);
      const monthCount = selected.length || 1;
      const monthsText = selected.map(m => m.label).join(", ");

      this.data.invoice_details.forEach(row => {
        row.month_count = monthCount;

        if (this.base_description) {
          row.description =
            `${this.base_description}\nMonths: ${monthsText}`;
        }

        this.recalculateRow(row);
      });

      this.recalculateTotals();
    },

    /* -------------------------
       Row Calculations
    --------------------------*/
    recalculateRow(row) {
      const unit = parseFloat(row.amount) || 0;
      const months = parseInt(row.month_count) || 1;
      const userCount = parseInt(row.user_count) || null;

      if (userCount && userCount > 0) {
        row.total_amount = (unit * months * userCount).toFixed(2);
      } else {
        row.total_amount = (unit * months).toFixed(2);
      }
    },

    recalculateTotals() {
      const sum = this.data.invoice_details.reduce(
        (s, r) => s + (parseFloat(r.total_amount) || 0),
        0
      );

      this.data.original_amount = sum.toFixed(2);
      this.data.amount = (
        sum - (parseFloat(this.data.discount) || 0)
      ).toFixed(2);
    },

    onDiscountChange() {
      this.recalculateTotals();
    },

    /* -------------------------
       Invoice Rows
    --------------------------*/
    addInvoiceDetailsRow() {
      this.data.invoice_details.push({
        description: "",
        amount: 0,
        month_count: this.data.invoice_details[0]?.month_count || 1,
        total_amount: 0,
        account_id: null,
      });
    },

    removeInvoiceDetails(index) {
      if (this.data.invoice_details.length > 1) {
        this.data.invoice_details.splice(index, 1);
        this.recalculateTotals();
      }
    },

    isLastItem(items, index) {
      return index === items.length - 1;
    },

    /* -------------------------
       Client Fetch
    --------------------------*/
    async fetchClientData() {
      const res = await axios.get('/clientinfo', {
        params: {
          clientid: this.data.clientid,
          client_id: this.data.client_id
        }
      });
      const c = res.data;

      this.data.client = c;
      this.generateInvoiceMonths();

      const serviceTitle = c?.service?.title || "Internet Service";
      const pkg = c?.package;
      let unitPrice = 0;
      this.base_description = '';
      if (pkg) {
        // package আছে
        this.base_description =
          `${serviceTitle}\nPackage: ${pkg.title} - ${pkg.bandwidth} ${pkg.unit?.title}`;
        unitPrice =
          parseFloat(pkg.price || 0) + parseFloat(pkg.vat || 0);
      }

      const user_count = serviceTitle === 'MAC' ? c.user_count : null;

      this.data.invoice_details = [
        {
          description: this.base_description,
          amount: unitPrice.toFixed(2),
          month_count: 1,
          user_count: user_count,
          total_amount: unitPrice.toFixed(2),
          account_id: null,
        },
      ];

      this.recalculateTotals();
    },

    /* -------------------------
       Edit Mode Init
    --------------------------*/
    initEditMode() {
      this.isEditMode = true;
      this.page_title = this.headline(this.model) + " Edit";

      // শুধু fetch করবে, কিছু return করবে না
      this.get_data(`${this.model}/${this.$route.params.id}`);

      // data reactive ভাবে সেট হওয়ার পর পরবর্তী কাজগুলো করবো
      this.$nextTick(() => {
        this.generateInvoiceMonths();

        // backend থেকে আসা saved months apply
        if (this.data.savedMonths?.length) {
          this.data.invoice_months.forEach(m => {
            m.checked = this.data.savedMonths.includes(m.value);
          });
        }

        // backend থেকে আসা row অনুযায়ী total recalc
        if (this.data.invoice_details?.length) {
          this.data.invoice_details.forEach(row => {
            this.recalculateRow(row);
          });
        }

        this.recalculateTotals();
      });
    },
  },

  created() {
    if (this.$route.params.id) {
      this.initEditMode();
    } else {
      this.page_title = this.headline(this.model) + " Create";
      this.generateInvoiceMonths();
    }
  },

  validators: {
    "data.amount": function (value = null) {
      return Validator.value(value).required("Amount is required");
    },
  },
};
</script>
