<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th class="view_t_head">Id</th>
                  <th style="text-align: center; width: 2%;">:</th>
                  <td>{{ data.id }}</td>
                </tr>
                <tr>
                  <th class="view_t_head">Invoice No</th>
                  <th style="text-align: center;">:</th>
                  <td>{{ data.invoice_no ?? '' }}</td>
                </tr>
                <tr>
                  <th class="view_t_head">Invoice Date</th>
                  <th style="text-align: center;">:</th>
                  <td>{{ data.invoice_date ?? '' }}</td>
                </tr>
                <tr>
                  <th class="view_t_head">Original Amount</th>
                  <th style="text-align: center;">:</th>
                  <td>{{ data.original_amount ?? '' }}</td>
                </tr>
                <tr>
                  <th class="view_t_head">Discount</th>
                  <th style="text-align: center;">:</th>
                  <td>{{ data.discount ?? '' }}</td>
                </tr>
                <tr>
                  <th class="view_t_head">Amount</th>
                  <th style="text-align: center;">:</th>
                  <td>{{ data.amount }}</td>
                </tr>
                <tr>
                  <th class="view_t_head">Paid Amount</th>
                  <th style="text-align: center;">:</th>
                  <td>{{ data.paid_amount }}</td>
                </tr>
                <tr>
                  <th class="view_t_head">Created At</th>
                  <th style="text-align: center;">:</th>
                  <td><span>{{ data.created_at }}</span></td>
                </tr>
                <tr>
                  <th class="view_t_head">Updated At</th>
                  <th style="text-align: center;">:</th>
                  <td><span>{{ data.updated_at }}</span></td>
                </tr>
                <tr>
                  <th class="view_t_head">Status</th>
                  <th style="text-align: center;">:</th>
                  <td class="text-capitalize">{{ data.status }}</td>
                </tr>
                <tr>
                  <th>Invoice Print</th>
                  <th>:</th>
                  <td>
                    <router-link v-if="$root.checkPermission('invoice.bill')"
                      :to="{ name: 'invoice.bill', params: { id: data.id } }" data-bs-toggle="tooltip"
                      data-bs-placement="top" data-bs-title="Invoice" v-x-tooltip="Invoice"><span class="icon"><i
                          class="fa fa-money"></i></span></router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <div class="row g-4">
          <div class="col-md-12">
            <fieldset>
              <span class="legend">Client Information</span>
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th class="view_t_head">Clientid</th>
                      <th style="text-align: center; width:2%">:</th>
                      <td>{{ data.client?.clientid }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Client Name</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.client?.name }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Service</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.client?.service?.title }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Package</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.client?.package?.title }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Reg Date</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.client?.reg_date }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Mobile</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.client?.mobile }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Address</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.client?.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
          <div class="col-md-12">
            <fieldset>
              <span class="legend">Payment Information</span>
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Slip No</th>
                      <th>Payment Date</th>
                      <th>TrxID</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="data.payment_details && data.payment_details.length > 0">
                      <tr v-for="(pdata, index) in data.payment_details" :key="index">
                        <td>{{ pdata.payment?.payslipno }}</td>
                        <td>{{ pdata.payment?.payment_date }}</td>
                        <td>{{ pdata.payment?.trxid }}</td>
                        <td>{{ Number(pdata.amount).toFixed(2) }}</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tr>
                        <td colspan="4">No Data Found</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
        </div>

      </div>
      <div class="col-md-12">
        <fieldset>
          <span class="legend">Invoice Details</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Description</th>
                  <th>Account</th>
                  <th class="text-md-end">Amount</th>
                  <th>Month Count</th>
                  <th class="text-md-end">Total Amount</th>
                  <th>Status</th>

                </tr>
              </thead>
              <tbody>
                <template v-if="data.invoice_details">
                  <tr v-for="(invoiced, index) in data.invoice_details" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ invoiced.description }}</td>
                    <td>{{ invoiced.account?.account_name }}</td>
                    <td class="text-md-end">{{ Number(invoiced.amount).toFixed(2) }}</td>
                    <td>{{ invoiced.month_count }}</td>
                    <td class="text-md-end">{{ Number(invoiced.total_amount).toFixed(2) }}</td>
                    <td>{{ invoiced.status }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </fieldset>

      </div>
    </div>
  </view-page>
</template>

<script>
import axios from 'axios';


const model = "invoice";

export default {
  data() {
    return {
      page_title: "",
      model: model,
      data: {

      },
      fileColumns: [],
    };
  },
  methods: {
    async paynow() {
      if (!this.data.id) {
        this.$toast('Invoice ID not found', 'warning');
        return;
      }

      try {
        const response = await axios.get(`/paynow/${this.data.id}`);

        if (response.data.success) {
          this.get_data(`${this.model}/${this.$route.params.id}`);
          this.$toast(response.data.message, 'success');
        } else {
          this.$toast(response.data.message || 'Payment failed', 'error');
        }

      } catch (error) {
        console.error(error);
        const msg = error.response?.data?.message || 'Error processing payment';
        this.$toast(msg, 'error');
      }
    }
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
    this.account_heads = this.$root?.global?.account_heads || [];
  },
};
</script>