<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-6 col-sm-6">
        <fieldset>
          <span class="legend">Workorder Info</span>
          <table class="table table-striped">
            <tbody>
              <tr>
                <th width="40%">Order Date</th>
                <th width="5%">:</th>
                <td>{{ data.order_date }}</td>
              </tr>
              <tr>
                <th>Order No</th>
                <th>:</th>
                <td>{{ data.order_no }}</td>
              </tr>
              <tr>
                <th>UNO No</th>
                <th>:</th>
                <td>{{ data.uno_no }}</td>
              </tr>
              <tr>
                <th>Delivery Date</th>
                <th>:</th>
                <td>{{ data.delivery_date }}</td>
              </tr>
              <tr>
                <th>Currency</th>
                <th>:</th>
                <td>{{ data.currency?.title }}</td>
              </tr>
              <tr>
                <th>Currency Rate</th>
                <th>:</th>
                <td>{{ data.currency_rate }}</td>
              </tr>
              <tr>
                <th>Shipping</th>
                <th>:</th>
                <td>{{ data.shipping }}</td>
              </tr>
              <tr>
                <th>Remarks</th>
                <th>:</th>
                <td>{{ data.remarks }}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
      <div class="col-md-6 col-sm-6">
        <fieldset>
          <span class="legend">Order By</span>
          <table class="table table-striped">
            <tbody>
              <tr>
                <th width="40%">Order By</th>
                <th width="5%">:</th>
                <td>{{ data.client?.org_name }}</td>
              </tr>
              <tr>
                <th>Contact Person</th>
                <th>:</th>
                <td>{{ data.client?.name }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <th>:</th>
                <td>{{ data.client?.email }}</td>
              </tr>
              <tr>
                <th>Mobile</th>
                <th>:</th>
                <td>{{ data.client?.mobile }}</td>
              </tr>
              <tr>
                <th>Address</th>
                <th>:</th>
                <td>{{ data.client?.address }}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <span class="legend">Workorder Items</span>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Description</th>
                <th>Actual Qty</th>
                <th>Ordered Qty</th>
                <th>Unit Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data.workorder_details" :key="index">
                <td>
                  <div style="white-space: pre-line;">
                    {{ item.description }}
                  </div>
                </td>
                <td>{{ item.actual_qty }}</td>
                <td>{{ item.ordered_qty }}</td>
                <td>{{ item.unit_price }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>
    </div>
  </view-page>
</template>

<script>

const model = "workorder";

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