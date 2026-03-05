<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-2">
        <fieldset>
          <span class="legend">Image</span>
          <div class="view_file_item text-center" data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-title="Image">
            <div class="img">
              <img :src="data.image" alt="img-cover" style="max-width:100%">
            </div>
          </div>
        </fieldset>
      </div>
      <div class="col-md-10">
        <div class="row g-3">
          <div class="col-md-12">
            <fieldset>
              <span class="legend">Image</span>
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th width="30%">EmpID</th>
                      <th width="5%">:</th>
                      <td>{{ data.empid }}</td>
                    </tr>
                    <tr>
                      <th>Joining Date</th>
                      <th>:</th>
                      <td>{{ data.joining_date }}</td>
                    </tr>
                    <tr>
                      <th>Designation</th>
                      <th>:</th>
                      <td>{{ data.designation?.title }}</td>
                    </tr>
                    <tr>
                      <th>Full Name</th>
                      <th>:</th>
                      <td>{{ data.full_name }}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <th>:</th>
                      <td>{{ data.email }}</td>
                    </tr>
                    <tr>
                      <th>Mobile</th>
                      <th>:</th>
                      <td>{{ data.mobile }}</td>
                    </tr>
                    <tr>
                      <th>Date of Birth</th>
                      <th>:</th>
                      <td>{{ data.dob }}</td>
                    </tr>
                    <tr>
                      <th>Nid</th>
                      <th>:</th>
                      <td>{{ data.nid }}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <th>:</th>
                      <td>{{ data.address }}</td>
                    </tr>
                    <tr>
                      <th>Branch</th>
                      <th>:</th>
                      <td>{{ data.office_branch?.branch_name }}</td>
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
            <fieldset class="mt-3">
              <span class="legend">Family Info</span>
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th>Father Name</th>
                      <th width="5%">:</th>
                      <td>{{ data.father_name }}</td>
                    </tr>
                    <tr>
                      <th>Father Occupation</th>
                      <th>:</th>
                      <td>{{ data.father_occupation }}</td>
                    </tr>
                    <tr>
                      <th>Father NID</th>
                      <th>:</th>
                      <td>{{ data.father_nid }}</td>
                    </tr>
                    <tr>
                      <th>Father Mobile</th>
                      <th>:</th>
                      <td>{{ data.father_mobile }}</td>
                    </tr>
                    <tr>
                      <th>Mother Name</th>
                      <th>:</th>
                      <td>{{ data.mother_name }}</td>
                    </tr>
                    <tr>
                      <th>Mother Occupation</th>
                      <th>:</th>
                      <td>{{ data.mother_occupation }}</td>
                    </tr>
                    <tr>
                      <th>Mother NID</th>
                      <th>:</th>
                      <td>{{ data.mother_nid }}</td>
                    </tr>
                    <tr>
                      <th>Mother Mobile</th>
                      <th>:</th>
                      <td>{{ data.mother_mobile }}</td>
                    </tr>
                    <tr>
                      <th>Spouse Name</th>
                      <th>:</th>
                      <td>{{ data.spouse_name }}</td>
                    </tr>
                    <tr>
                      <th>Spouse Mobile</th>
                      <th>:</th>
                      <td>{{ data.spouse_mobile }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-12">
                <fieldset class="mt-3">
                  <span class="legend">Salary Info</span>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <tbody>
                        <tr v-for="(salary, index) in data.employee_salaries" :key="index">
                          <th>{{ salary.title }}</th>
                          <th width="5%">:</th>
                          <td>{{ salary.amount }}</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <th>:</th>
                          <td><strong>{{ data.salary }}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </fieldset>
              </div>
              <div class="col-md-12">
                <fieldset class="mt-3">
                  <span class="legend">Bank Information</span>
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
                          <td>{{ data.branch_name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </fieldset>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </view-page>
</template>

<script>

const model = "employee";

export default {
  data() {
    return {
      page_title: "",
      model: model,
      data: {

      },
      fileColumns: [{ field: "image", title: "Image" },],
    };
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>