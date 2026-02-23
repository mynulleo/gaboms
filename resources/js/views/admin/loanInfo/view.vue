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
                  <th>Trns ID</th>
                  <th width="5%">:</th>
                  <td>{{ data.trnsid }}</td>
                </tr>
                <tr>
                  <th>Trns Date</th>
                  <th>:</th>
                  <td>{{ data.trns_date }}</td>
                </tr>
                <tr>
                  <th>Trns Type</th>
                  <th>:</th>
                  <td>{{ data.trns_type }}</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <th>:</th>
                  <td>{{ data.amount }}</td>
                </tr>
                <tr>
                  <th>Installment</th>
                  <th>:</th>
                  <td>{{ data.total_installment }}</td>
                </tr>
                <tr>
                  <th>Installment Amount</th>
                  <th>:</th>
                  <td>{{ data.installment_amount }}</td>
                </tr>
                <tr>
                  <th>Deduct From Salary</th>
                  <th>:</th>
                  <td>{{ data.deduct_from_salary ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                  <th>Schedule Day</th>
                  <th>:</th>
                  <td>{{ data.schedule_day }}</td>
                </tr>
                <tr>
                  <th>Return Day</th>
                  <th>:</th>
                  <td>{{ data.return_date }}</td>
                </tr>
                <tr>
                  <th>Closing Day</th>
                  <th>:</th>
                  <td>{{ data.closing_date }}</td>
                </tr>
                <tr>
                  <th>Due Amount</th>
                  <th>:</th>
                  <td>{{ data.due_amount }}</td>
                </tr>
                <tr>
                  <th>Reason</th>
                  <th>:</th>
                  <td>{{ data.reason }}</td>
                </tr>
                <tr>
                  <th>Remarks</th>
                  <th>:</th>
                  <td>{{ data.remarks }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <div class="row g-4">
          <div class=" col-md-12">
            <fieldset>
              <span class="legend">Employee Info</span>
              <div class="table-responsive">

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td rowspan="6">
                        <img v-if="data.employee?.image" :src="data.employee.image" class="rounded mx-auto d-block"
                          style="width:150px" />

                        <img v-else :src="$root.asset_url + '/images/profile.jpg'" class="rounded mx-auto d-block"
                          style="width:150px" />
                      </td>
                      <th>Emp ID</th>
                      <th width="5%">:</th>
                      <td>{{ data.employee?.empid }}</td>
                    </tr>
                    <tr>
                      <th class="text-end">Joining Date</th>
                      <th>:</th>
                      <td>{{ data.employee?.joining_date }}</td>
                    </tr>
                    <tr>
                      <th class="text-end">Designation</th>
                      <th>:</th>
                      <td>{{ data.employee?.designation?.title }}</td>
                    </tr>
                    <tr>
                      <th class="text-end">Salary</th>
                      <th>:</th>
                      <td>{{ data.employee?.designation?.total_salary }}</td>
                    </tr>
                    <tr>
                      <th class="text-end">Full Name</th>
                      <th>:</th>
                      <td>{{ data.employee?.full_name }}</td>
                    </tr>
                    <tr>
                      <th class="text-end">Address</th>
                      <th>:</th>
                      <td>{{ data.employee?.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
          <div class="col-md-12" style="min-height: 220px;">
            <fieldset>
              <span class="legend">Loan Histories</span>
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Sl</th>
                      <th>Trns ID</th>
                      <th>Trns Date</th>
                      <th>Amount</th>
                      <th>Due Amount</th>
                      <th>Aproved By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="loan_histories">
                      <tr v-for="(loan, index) in loan_histories" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ loan.trnsid }}</td>
                        <td>{{ loan.trns_date }}</td>
                        <td>{{ loan.amount }}</td>
                        <td>{{ loan.due_amount }}</td>
                        <td>{{ loan.approved_admin?.name }}</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tr>
                        <td colspan="6"> No Data Found.</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </fieldset>

          </div>
        </div>

      </div>
      <div class="col-12">
        <div class="card shadow-sm border-0">
          <div class="card-header bg-light d-flex justify-content-between align-items-center">
            <h6 class="mb-0 fw-semibold">Approval Information</h6>
            <span class="badge bg-secondary" v-if="!data.approved_by">Pending</span>
            <span class="badge bg-success" v-else>Approved</span>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <!-- Guidelines + Approve Button -->
                <div class="alert alert-info border-0 shadow-sm mb-0">
                  <h6 class="alert-heading fw-semibold mb-2">Loan Approval Guidelines</h6>
                  <p class="mb-1">
                    Please carefully review the Loan information above and verify the details if necessary.
                  </p>
                  <p class="mb-1">
                    Once the Loan is approved, the approver’s information and approval time will be
                    automatically
                    recorded.
                  </p>
                  <p class="mb-3 text-danger fw-semibold">
                    After the payment for this Loan is cleared, the approval cannot be canceled.
                  </p>

                  <!-- Action Button Inside Alert -->
                  <div class="d-flex justify-content-end" v-if="!data.approved_by">
                    <router-link v-if="$root.checkPermission('loanInfo.approved')" to="#"
                      @click.native.prevent="approved" class="btn btn-success fw-semibold px-4">
                      <i class="bi bi-check-circle me-1"></i> Approve Loan/Advance
                    </router-link>
                  </div>
                  <div class="d-flex justify-content-end" v-else>
                    <router-link v-if="$root.checkPermission('loanInfo.approvalcancel')" to="#"
                      @click.native.prevent="approvalcancel" class="btn btn-danger fw-semibold px-4">
                      <i class="bi bi-x-circle me-1"></i> Cancel Approval
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </view-page>
</template>

<script>

const model = "loanInfo";

export default {
  data() {
    return {
      page_title: "",
      model: model,
      data: {

      },
      loan_histories: [],
      fileColumns: [],
    };
  },
  methods: {
    approved() {
      if (!confirm('Are you sure you want to approve this Loan?')) {
        return;
      }

      axios.post(
        'loanInfo/approved',
        {
          loan_info_id: this.$route.params.id
        }
      )
        .then(res => {
          this.$toast(
            res.data.message || 'Approved successfully',
            "success"
          );
          this.get_data(`${this.model}/${this.$route.params.id}`);
        });
    },
    approvalcancel() {
      if (!confirm('Are you sure you want to cancel the approval of this commission?')) {
        return;
      }

      axios.post(
        'loanInfo/approvalcancel',
        {
          loan_info_id: this.$route.params.id
        }
      )
        .then(res => {
          this.$toast(
            res.data.message || 'Approval cancelled successfully',
            "success"
          );
          this.get_data(`${this.model}/${this.$route.params.id}`);
        });
    },
    getLoanHistories() {
      axios.get('getloanhistories/' + this.data.employee_id)
        .then(res => {
          this.loan_histories = res.data.map(loan => ({
            trnsid: loan.trnsid,
            trns_date: loan.trns_date,
            amount: loan.amount,
            due_amount: loan.due_amount,
            reason: loan.reason,
            remarks: loan.remarks,
            status: 'active'
          }))
        })
    }
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
    setTimeout(() => {
      this.getLoanHistories()
    }, 2000);

  },
};
</script>