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
                  <th width="40%">Invoice No</th>
                  <th width="5%">:</th>
                  <td>{{ data.invoiceno }}</td>
                </tr>
                <tr>
                  <th>Purchase Date</th>
                  <th>:</th>
                  <td>{{ data.purchase_date }}</td>
                </tr>
                <tr>
                  <th>Supplier</th>
                  <th>:</th>
                  <td>{{ data.supplier_id }}</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <th>:</th>
                  <td>{{ data.amount }}</td>
                </tr>
                <tr>
                  <th>Discount</th>
                  <th>:</th>
                  <td>{{ data.discount }}</td>
                </tr>
                <tr>
                  <th>Tax</th>
                  <th>:</th>
                  <td>{{ data.tax }}</td>
                </tr>
                <tr>
                  <th>Total Amount</th>
                  <th>:</th>
                  <td>{{ data.total_amount }}</td>
                </tr>
                <tr>
                  <th>Is Closed</th>
                  <th>:</th>
                  <td>{{ data.is_closed }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Details</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Category</th>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pdetail, index) in data.purchase_details" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ pdetail.category?.title }}</td>
                  <td>{{ pdetail.item?.title }}</td>
                  <td>{{ pdetail.qty }}</td>
                  <td>{{ Number(pdetail.price).toFixed(2) }}</td>
                  <td>{{ Number(pdetail.total_amount).toFixed(2) }}</td>
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

const model = "purchase";

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
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>