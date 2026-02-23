<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Basic Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>SUP ID</th>
                  <th width="5%">:</th>
                  <td>{{ data.supid }}</td>
                </tr>
                <tr>
                  <th>Organization </th>
                  <th>:</th>
                  <td>{{ data.org_name }}</td>
                </tr>
                <tr>
                  <th>Contact Person</th>
                  <th>:</th>
                  <td>{{ data.name }}</td>
                </tr>
                <tr>
                  <th>Designation</th>
                  <th>:</th>
                  <td>{{ data.designation }}</td>
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
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Office Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Account</th>
                  <th width="5%">:</th>
                  <td>{{ data.account_name }}</td>
                </tr>
                <tr>
                  <th>Account No</th>
                  <th>:</th>
                  <td>{{ data.account_no }}</td>
                </tr>
                <tr>
                  <th>Bank</th>
                  <th>:</th>
                  <td>{{ data.bank?.name }}</td>
                </tr>
                <tr>
                  <th>Branch</th>
                  <th>:</th>
                  <td>{{ data.branch }}</td>
                </tr>
                <tr>
                  <th>Routing</th>
                  <th>:</th>
                  <td>{{ data.routing }}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <th>:</th>
                  <td>{{ data.website }}</td>
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

const model = "supplier";

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