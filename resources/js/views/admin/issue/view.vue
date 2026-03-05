<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Issue</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Issue No</th>
                  <th>:</th>
                  <td>{{ data.issueno }}</td>
                </tr>
                <tr>
                  <th>Issue Date</th>
                  <th>:</th>
                  <td>{{ data.issue_date }}</td>
                </tr>
                <tr>
                  <th>Branch</th>
                  <th>:</th>
                  <td>{{ data.branch?.branch_name }}</td>
                </tr>
                <tr>
                  <th>Department</th>
                  <th>:</th>
                  <td>{{ data.department }}</td>
                </tr>
                <tr>
                  <th>Employee</th>
                  <th>:</th>
                  <td>{{ data.employee?.full_name }}</td>
                </tr>
                <tr>
                  <th>Client</th>
                  <th>:</th>
                  <td>{{ data.client?.name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Issue Details</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Category</th>
                  <th>Item</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(detail, index) in data.issue_details" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ detail.category?.title }}</td>
                  <td>{{ detail.item?.title }}</td>
                  <td>{{ detail.qty }}</td>
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

const model = "issue";

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