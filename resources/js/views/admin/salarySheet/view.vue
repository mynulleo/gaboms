<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false" printArea="salarySheet">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Salary Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Generated Date</th>
                  <th width="5%">:</th>
                  <td>{{ data.generated_date }}</td>
                </tr>
                <tr>
                  <th>Title</th>
                  <th width="5%">:</th>
                  <td>{{ data.title }}</td>
                </tr>
                <tr>
                  <th>Month & Year</th>
                  <th width="5%">:</th>
                  <td>{{ data.month }} - {{ data.year }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Approval Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Total Salary</th>
                  <th width="5%">:</th>
                  <td>{{ totalSalary }}</td>
                </tr>
                <tr>
                  <th>Approved By</th>
                  <th>:</th>
                  <td>{{ data.approved_admin?.name }}</td>
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
      <div class="col-md-12">
        <fieldset>
          <span class="legend">Salary Sheet</span>
          <div class="table-responsive" id="salarySheet">
            <div class="text-center mb-2 report-title">
              <h3 class="fw-bold">{{ $root.site.title }}.</h3>
              <p class="mb-1">{{ $root.site.address }}</p>
              <p>Email: {{ $root.site.contact_email }} | Phone: {{ $root.site.mobile1 }}</p>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 class="fw-bold mb-1">Salary Sheet</h5>
                <small class="text-muted">Report Date: <strong>{{ reportDate }}</strong></small>
              </div>
              <div class="text-end">
              </div>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Emp Info</th>
                  <th>Designation</th>
                  <th class="text-center">Salary</th>
                  <th class="text-center">Bonus</th>
                  <th class="text-center">Installment</th>
                  <th class="text-center">Deduct</th>
                  <th class="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in data.salary_sheet_details" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ row.employee_name }}</td>
                  <td>{{ row.designation }}</td>
                  <td class="text-end">{{ row.salary }}</td>
                  <td class="text-end">{{ row.bonus }}</td>
                  <td class="text-end">{{ row.installment }}</td>
                  <td class="text-end">{{ row.deduct }}</td>
                  <td class="text-end">{{ row.total }}</td>
                </tr>
                <tr>
                  <td colspan="3"><strong>Total</strong></td>
                  <td class="text-end"><strong>{{ totalSalary }}</strong></td>
                  <td class="text-end"><strong>{{ totalBonus }}</strong></td>
                  <td class="text-end"><strong>{{ totalInstallment }}</strong></td>
                  <td class="text-end"><strong>{{ totalDeduct }}</strong></td>
                  <td class="text-end"><strong>{{ grandTotal }}</strong></td>
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
                  <h6 class="alert-heading fw-semibold mb-2">Salary Sheet Approval Guidelines</h6>
                  <p class="mb-1">
                    Please carefully review the Salary Sheet information above and verify the details if necessary.
                  </p>
                  <p class="mb-1">
                    Once the Salary Sheet is approved, the approver’s information and approval time will be
                    automatically
                    recorded.
                  </p>
                  <p class="mb-1 text-danger fw-semibold">
                    After approval, the Salary Sheet cannot be edited or deleted.
                  </p>
                  <p class="mb-3 text-danger fw-semibold">
                    After the payment for this Salary Sheet is cleared, the approval cannot be canceled.
                  </p>

                  <!-- Action Button Inside Alert -->
                  <div class="d-flex justify-content-end" v-if="!data.approved_by">
                    <router-link v-if="$root.checkPermission('salarySheet.approved')" to="#"
                      @click.native.prevent="approved" class="btn btn-success fw-semibold px-4">
                      <i class="bi bi-check-circle me-1"></i> Approve Salary Sheet
                    </router-link>
                  </div>
                  <div class="d-flex justify-content-end" v-else>
                    <router-link v-if="$root.checkPermission('salarySheet.approvalcancel')" to="#"
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

const model = "salarySheet";

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
  computed: {
    totalSalary() {
      if (!this.data.salary_sheet_details) return 0;

      const salary = this.data.salary_sheet_details.reduce((sum, row) => {
        return sum + Number(row.salary || 0);
      }, 0);

      return salary.toLocaleString('en-BD');
    },
    totalBonus() {
      if (!this.data.salary_sheet_details) return 0;

      const bonus = this.data.salary_sheet_details.reduce((sum, row) => {
        return sum + Number(row.bonus || 0);
      }, 0);

      return bonus.toLocaleString('en-BD');
    },
    totalInstallment() {
      if (!this.data.salary_sheet_details) return 0;

      const installment = this.data.salary_sheet_details.reduce((sum, row) => {
        return sum + Number(row.installment || 0);
      }, 0);

      return installment.toLocaleString('en-BD');
    },
    totalDeduct() {
      if (!this.data.salary_sheet_details) return 0;

      const deduct = this.data.salary_sheet_details.reduce((sum, row) => {
        return sum + Number(row.deduct || 0);
      }, 0);

      return deduct.toLocaleString('en-BD');
    },
    grandTotal() {
      if (!this.data.salary_sheet_details) return 0;

      const total = this.data.salary_sheet_details.reduce((sum, row) => {
        return sum + Number(row.total || 0);
      }, 0);

      return total.toLocaleString('en-BD');
    }
  },
  methods: {
    approved() {
      if (!confirm('Are you sure you want to approve this salary sheet?')) {
        return;
      }

      axios.post(
        'salarySheet/approved',
        {
          salary_sheet_id: this.$route.params.id
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
        'salarySheet/approvalcancel',
        {
          salary_sheet_id: this.$route.params.id
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
    paynow(salarysheetid, empid) {
      axios.post(
        'salarySheet/paynow',
        {
          salary_sheet_id: this.$route.params.id
        }
      )
        .then(res => {
          this.$toast(
            res.data.message || 'Approved successfully',
            "success"
          );
          this.get_data(`${this.model}/${this.$route.params.id}`);
        });
    }
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  },
};
</script>