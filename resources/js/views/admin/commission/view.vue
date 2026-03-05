<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Reference Info</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th width="40%">Is Employee</th>
                  <th width="5%">:</th>
                  <td>{{ data.is_employee ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                  <th>Client</th>
                  <th>:</th>
                  <td>{{ data.client?.name }}</td>
                </tr>
                <tr>
                  <th>Package</th>
                  <th>:</th>
                  <td>{{ data.package?.title }}</td>
                </tr>
                <tr>
                  <th>Reference Name</th>
                  <th>:</th>
                  <td>{{ data.reference_name }}</td>
                </tr>
                <tr>
                  <th>Reference Mobile</th>
                  <th>:</th>
                  <td>{{ data.reference_mobile }}</td>
                </tr>
                <tr>
                  <th>Reference NID</th>
                  <th>:</th>
                  <td>{{ data.reference_nid }}</td>
                </tr>
                <tr>
                  <th>Reference Address</th>
                  <th>:</th>
                  <td>{{ data.reference_address }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Commission Info</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th width="40%">Created Date</th>
                  <th width="5%">:</th>
                  <td>{{ data.created_at }}</td>
                </tr>
                <tr>
                  <th width="40%">Percentage</th>
                  <th width="5%">:</th>
                  <td>{{ data.percentage }}%</td>
                </tr>
                <tr>
                  <th>Commission Amount</th>
                  <th>:</th>
                  <td>{{ data.amount }}</td>
                </tr>
                <tr>
                  <th>Remarks</th>
                  <th>:</th>
                  <td>{{ data.remarks }}</td>
                </tr>
                <tr>
                  <th>Is Closed</th>
                  <th>:</th>
                  <td>{{ data.is_closed ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                  <th>Approved By</th>
                  <th>:</th>
                  <td>{{ data.approved_by }}</td>
                </tr>
                <tr>
                  <th>Approved Date</th>
                  <th>:</th>
                  <td>{{ data.approved_date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
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
                  <h6 class="alert-heading fw-semibold mb-2">Commission Approval Guidelines</h6>
                  <p class="mb-1">
                    Please carefully review the commission information above and verify the details if necessary.
                  </p>
                  <p class="mb-1">
                    Once the commission is approved, the approver’s information and approval time will be automatically
                    recorded.
                  </p>
                  <p class="mb-3 text-danger fw-semibold">
                    After the payment for this commission is cleared, the approval cannot be canceled.
                  </p>

                  <!-- Action Button Inside Alert -->
                  <div class="d-flex justify-content-end" v-if="!data.approved_by">
                    <router-link v-if="$root.checkPermission('commission.approved')" to="#"
                      @click.native.prevent="approved" class="btn btn-success fw-semibold px-4">
                      <i class="bi bi-check-circle me-1"></i> Approve Commission
                    </router-link>
                  </div>
                  <div class="d-flex justify-content-end" v-else>
                    <router-link v-if="$root.checkPermission('commission.approvalcancel')" to="#"
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

const model = "commission";

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
        'commission/approved',
        {
          commission_id: this.$route.params.id
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
        'commission/approvalcancel',
        {
          commission_id: this.$route.params.id
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