<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <table class="table table-striped">
            <tbody>
              <tr>
                <th>Expense ID</th>
                <th width="5%">:</th>
                <td>{{ data.expenseid }}</td>
              </tr>
              <tr>
                <th>Expense Date</th>
                <th>:</th>
                <td>{{ data.expensedate }}</td>
              </tr>
              <tr>
                <th>Approved By</th>
                <th>:</th>
                <td>{{ data.approved_admin?.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-6">
          <table class="table table-striped">
            <tbody>
              <tr>
                <th>Branch</th>
                <th width="5%">:</th>
                <td>{{ data.branch?.branch_name }}</td>
              </tr>
              <tr>
                <th>Total Amount</th>
                <th>:</th>
                <td>{{ data.total_amount }}</td>
              </tr>
              <tr>
                <th>Approved Date</th>
                <th>:</th>
                <td>{{ data.approved_date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-12">
          <h4 class="mt-3">Expense Details</h4>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Expense Head</th>
                <th>Narration</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data.expense_details" :key="index">
                <td>{{ item.account?.account_name }}</td>
                <td>{{ item.narration }}</td>
                <td>{{ item.amount }}</td>
              </tr>
            </tbody>
          </table>
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
                    <h6 class="alert-heading fw-semibold mb-2">Expense Approval Guidelines</h6>
                    <p class="mb-1">
                      Please carefully review the expense information above and verify the details if necessary.
                    </p>
                    <p class="mb-1">
                      Once the expense is approved, the approver’s information and approval time will be
                      automatically
                      recorded.
                    </p>
                    <p class="mb-3 text-danger fw-semibold">
                      After the payment for this expense is cleared, the approval cannot be canceled.
                    </p>

                    <!-- Action Button Inside Alert -->
                    <div class="d-flex justify-content-end" v-if="!data.approved_by">
                      <router-link v-if="$root.checkPermission('expense.approved')" to="#"
                        @click.native.prevent="approved" class="btn btn-success fw-semibold px-4">
                        <i class="bi bi-check-circle me-1"></i> Approve Expense
                      </router-link>
                    </div>
                    <div class="d-flex justify-content-end" v-else>
                      <router-link v-if="$root.checkPermission('expense.approvalcancel')" to="#"
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
    </div>
  </view-page>
</template>
<script>

const model = "expense";

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
  methods: {
    approved() {
      if (!confirm('Are you sure you want to approve this salary sheet?')) {
        return;
      }
      axios.post(
        'expense/approved',
        {
          expense_id: this.$route.params.id
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
        'expense/approvalcancel',
        {
          expense_id: this.$route.params.id
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
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>