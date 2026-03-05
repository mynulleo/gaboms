<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Uplink Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Org Name</th>
                  <th width="5%">:</th>
                  <td>{{ data.org_name }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <th>:</th>
                  <td>{{ data.Email }}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <th>:</th>
                  <td>{{ data.phone }}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <th>:</th>
                  <td>{{ data.Email }}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <th>:</th>
                  <td>{{ data.address }}</td>
                </tr>
                <tr>
                  <th>Contact Person</th>
                  <th>:</th>
                  <td>{{ data.contact_person }}</td>
                </tr>
                <tr>
                  <th>Contact Person Mobile</th>
                  <th>:</th>
                  <td>{{ data.contact_person_mobile }}</td>
                </tr>
                <tr>
                  <th>Account Name</th>
                  <th>:</th>
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
                  <td>{{ data.bank?.bank_name }}</td>
                </tr>
                <tr>
                  <th>Branch</th>
                  <th>:</th>
                  <td>{{ data.branch }}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <th>:</th>
                  <td>{{ data.status }}</td>
                </tr>
              </thead>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <spam class="legend">Additional Information</spam>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Designation / Expertise </th>
                  <th>Contact Persion</th>
                  <th>Contact No</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data.alternative_contacts" :key="index">
                  <td>{{ item.designation }}</td>
                  <td>{{ item.contact_person }}</td>
                  <td>{{ item.contact_no }}</td>
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

const model = "uplinkProvider";

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