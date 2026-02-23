<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Office Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Type</th>
                  <th width="5%">:</th>
                  <td>{{ data.type }}</td>
                </tr>
                <tr>
                  <th>ClientID</th>
                  <th>:</th>
                  <td>{{ data.clientid }}</td>
                </tr>
                <tr>
                  <th>Reg Date</th>
                  <th>:</th>
                  <td>{{ data.reg_date }}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <th>:</th>
                  <td>{{ data.status }}</td>
                </tr>
                <tr>
                  <th>Created At</th>
                  <th>:</th>
                  <td>{{ data.created_at }}</td>
                </tr>
                <tr>
                  <th>Updated At</th>
                  <th>:</th>
                  <td>{{ data.updated_at }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Client Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Client Name</th>
                  <th>:</th>
                  <td>{{ data.name }}</td>
                </tr>
                <tr>
                  <th>Organization</th>
                  <th>:</th>
                  <td>{{ data.org_name }}</td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <th>:</th>
                  <td>{{ data.mobile }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <th>:</th>
                  <td>{{ data.email }}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <th>:</th>
                  <td>{{ data.address }}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <th>:</th>
                  <td>{{ data.status }}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Office Info</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Service</th>
                  <th width="5%">:</th>
                  <td>{{ data.service?.title }}</td>
                </tr>
                <tr>
                  <th>Package</th>
                  <th width="5%">:</th>
                  <td>{{ data.package?.title }}</td>
                </tr>
                <tr>
                  <th>Bandwidth</th>
                  <th width="5%">:</th>
                  <td>{{ data.package?.bandwidth }} {{ data.package?.unit?.title }}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <th width="5%">:</th>
                  <td>{{ data.package?.price }}</td>
                </tr>
                <tr>
                  <th>Vat</th>
                  <th width="5%">:</th>
                  <td>{{ data.package?.vat }}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <th width="5%">:</th>
                  <td>{{ data.package?.price + data.package?.vat }}</td>
                </tr>
                <tr>
                  <th>District</th>
                  <th width="5%">:</th>
                  <td>{{ data.district?.district_name }} ({{ data.area?.area_name }})</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Bank Info</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Account Name</th>
                  <th width="5%">:</th>
                  <td>{{ data.account_name }}</td>
                </tr>
                <tr>
                  <th>Account No</th>
                  <th width="5%">:</th>
                  <td>{{ data.account_no }}</td>
                </tr>
                <tr>
                  <th>Bank</th>
                  <th width="5%">:</th>
                  <td>{{ data.bank?.bank_name }}</td>
                </tr>
                <tr>
                  <th>Branch</th>
                  <th width="5%">:</th>
                  <td>{{ data.branch }}</td>
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

const model = "client";

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