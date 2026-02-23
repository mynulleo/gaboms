<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false"
    printArea="bandwidth_invoice_print">
    <div class="mb-1">
      <SwitchBoolean v-model='invoice_from' field='invoice_from' col="3" title='Display Org Info? ' on-label='Yes'
        off-label='No'></SwitchBoolean>
    </div>
    <div class="container my-3 invoice-wrapper" id="bandwidth_invoice_print">

      <div class="invoice-box shadow-sm p-3">
        <!-- Header -->
        <div class="row mb-4">
          <div class="col-md-12 col-sm-12 text-md-center">
            <h2 class="invoice-title" v-if="data.type == 'Sale'">INVOICE</h2>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="invoice-from" v-if="invoice_from">
              <img :src="site.logo_two" alt="" style="width:150px">
              <p class="mb-0"><strong>{{ site.title }}</strong></p>
              <p class="mb-0">{{ site.address }}</p>
              <p class="mb-0">Phone: {{ site.mobile1 }}</p>
              <p>{{ site.email }}</p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 ">
            <div class="invoice-to text-md-end">
              <template v-if="data.client">
                <h6 class="fw-bold" v-if="data.type == 'Sale'">Bill To:</h6>
                <p class="mb-0" v-if="data.client?.service_id == 5">{{ data.client?.org_name }}</p>
                <p class="mb-0">{{ data.client?.name }}</p>
                <p class="mb-0">{{ data.client?.address }}</p>
                <p class="mb-0">Phone: {{ data.client?.mobile }}</p>
                <p>Email: {{ data.client?.email }}</p>
              </template>
              <template v-else>
                <h6 class="fw-bold">To:</h6>
                <p class="mb-0">{{ data.uplink_provider?.org_name }}</p>
                <p class="mb-0">{{ data.uplink_provider?.address }}</p>
                <p class="mb-0">Phone: {{ data.uplink_provider?.phone }}</p>
                <p class="mb-0">Email: {{ data.uplink_provider?.email }}</p>
              </template>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class="mb-1"><strong>Invoice #:</strong> {{ data.bhno }}</p>
            <p class="mb-1"><strong>Date:</strong> {{ data.transaction_date }}</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p><strong>Due Date:</strong> {{ data.transaction_date }}</p>
          </div>
        </div>

        <!-- Items Table -->
        <div class="table-responsive">
          <table class="table table-bordered align-middle">
            <thead class="text-center">
              <tr>
                <th>#</th>
                <th width="40%">Description</th>
                <th class="text-end">Unit Price <br>(৳)</th>
                <th class="text-end">Bandwidth <br> ({{ data.unit?.title }})</th>
                <th class="text-end">Excl. Amount <br>(৳)</th>
                <th class="text-end">Incl. Amount <br>(৳)</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(bditem, index) in data.bandwidth_details" :key="index">
                <tr>
                  <td class="text-center">{{ index + 1 }}</td>
                  <td>
                    <strong>{{ bditem.category?.title }} <span v-if="bditem.type">({{ bditem.type }}) </span></strong>
                    <br>
                    <b>Start Date : </b> {{ bditem.start_date }} <br>
                    <b>End Date : </b> {{ bditem.end_date }} <br>
                    <b>Days : </b>{{ bditem.days }} <br>
                    <span v-if="bditem.linkid"><b>Linkid :</b> {{ bditem.linkid }}</span>
                  </td>
                  <td class="text-end">{{ bditem.price }}</td>
                  <td class="text-end">
                    <span v-if="bditem.type == 'DWNG'">(-)</span>{{ bditem.bandwidth }}
                  </td>
                  <td class="text-end">
                    <span v-if="bditem.type == 'DWNG'">(-)</span>{{ $filter.money(bditem.exclude_amount) }}
                  </td>
                  <td class="text-end">
                    <span v-if="bditem.type == 'DWNG'">(-)</span>{{ $filter.money(bditem.include_amount) }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <!-- Summary -->
        <div class="row justify-content-end mt-3">
          <div class="col-md-5">
            <table class="table">
              <tbody>
                <tr>
                  <th>Bandwidth</th>
                  <td class="text-end">{{ data.total_bandwidth }} {{ data.unit?.title }}</td>
                </tr>
                <tr>
                  <th>Subtotal</th>
                  <td class="text-end">৳ {{ $filter.money(data.total_amount) }}</td>
                </tr>
                <tr>
                  <th>Vat ({{ data.vat }}%)</th>
                  <td class="text-end">৳ {{ $filter.money(data.total_include_amount - data.total_amount) }}</td>
                </tr>
                <tr class="fw-bold">
                  <th>Total</th>
                  <td class="text-end">৳ {{ $filter.money(data.total_include_amount) }}</td>
                </tr>
                <tr class="fw-bold">
                  <th>Previous Due</th>
                  <td class="text-end">৳ {{ $filter.money(data.previous_due) }}</td>
                </tr>
                <tr class="fw-bold">
                  <th>Grand Total</th>
                  <td class="text-end">৳ {{ $filter.money(Number(data.previous_due) + Number(data.total_include_amount))
                    }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Footer -->
        <div class="row mt-4">
          <div class="col-md-12">
            <p class="mb-1"><strong>Payment Method:</strong> Bank / Cash / Mobile Banking</p>
            <p class="text-muted">Thank you for your business!</p>
          </div>
        </div>

      </div>
    </div>
  </view-page>
</template>

<script>

const model = "bandwidthHistory";

export default {
  data() {
    return {
      page_title: "",
      model: model,
      data: {
      },
      fileColumns: [],
      invoice_from: 1
    };
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>