<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-4">
        <fieldset>
          <span class="legend">Voucher Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Voucher No</th>
                  <th width="5%">:</th>
                  <td>{{ data.voucherno }}</td>
                </tr>
                <tr>
                  <th>Voucher Type </th>
                  <th>:</th>
                  <td>{{ data.voucher_type }}</td>
                </tr>
                <tr>
                  <th>Voucher Date</th>
                  <th>:</th>
                  <td>{{ data.voucher_date }}</td>
                </tr>
                <tr>
                  <th>Financial Year</th>
                  <th>:</th>
                  <td>{{ data.financial_year?.title }}</td>
                </tr>
                <tr>
                  <th>Narration</th>
                  <th>:</th>
                  <td>{{ data.narration }}</td>
                </tr>
                <tr>
                  <th>Payslipno</th>
                  <th>:</th>
                  <td>{{ data.payment?.payslipno }}</td>
                </tr>
                <tr>
                  <th>Payment</th>
                  <th>:</th>
                  <td>{{ data.payment?.payment_date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-8">
        <fieldset>
          <span class="legend">Voucher Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Account Type</th>
                  <th>Account Name</th>
                  <th>Dr. Amount</th>
                  <th>Cr. Amount</th>
                  <th>Reference Type</th>
                  <th>Reference ID</th>
                  <th>Narration</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data.voucher_details" :key="index">
                  <td>{{ item.account_type }}</td>
                  <td>{{ item.account?.account_name }}</td>
                  <td>{{ item.dr_amount }}</td>
                  <td>{{ item.cr_amount }}</td>
                  <td>{{ item.reference_type }}</td>
                  <td>{{ item.reference_id }}</td>
                  <td>{{ item.line_narration }}</td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Total</strong></td>
                  <td><strong>{{ totalDr.toFixed(2) }}</strong></td>
                  <td><strong>{{ totalCr.toFixed(2) }}</strong></td>
                  <td colspan="3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
    </div>
  </view-page>
</template>

<script>

const model = "voucher";

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
  computed: {
    totalDr() {
      if (!this.data?.voucher_details) return 0;
      return this.data.voucher_details.reduce((sum, item) => {
        return sum + (parseFloat(item.dr_amount) || 0);
      }, 0);
    },
    totalCr() {
      if (!this.data?.voucher_details) return 0;
      return this.data.voucher_details.reduce((sum, item) => {
        return sum + (parseFloat(item.cr_amount) || 0);
      }, 0);
    },
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>