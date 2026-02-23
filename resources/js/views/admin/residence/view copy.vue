<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="viewer_devider"></div>
    <div class="view_page">
      <div class="view_page">
        <div class="row custom_row g-3">
          <!-- Basic Information Start -->
          <div class="col-xl-6 col-lg-12">
            <fieldset>
              <span class="legend">Information</span>
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th class="view_t_head">Id</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.id }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Residenceno</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.residenceno }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Residence Name</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.residence_name }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Owner Name</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.owner_name }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Address</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.address }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Mobile</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.mobile }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Email</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.email }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Nid</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.nid }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Created At</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.created_at }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Updated At</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.updated_at }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Status</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
          <!-- Basic Information End -->

          <!-- Official Information Start -->
          <div class="col-lg-6">
            <fieldset>
              <span class="legend">Official Information</span>
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th class="view_t_head">Package Id</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.package?.title }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Payment Period</th>
                      <th style="text-align: center;">:</th>
                      <td class="text-capitalize">{{ data.payment_period }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Reg Date</th>
                      <th style="text-align: center;">:</th>
                      <td> {{ data.reg_date }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Expired Date</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.expired_date }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Promo Code</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.promo_code }}</td>
                    </tr>

                    <tr>
                      <th class="view_t_head">Db Host</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.db_host }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Db Name</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.db_name }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Db User</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.db_user }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Db Password</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.db_password }}</td>
                    </tr>

                    <tr>
                      <th class="view_t_head">Block</th>
                      <th style="text-align: center;">:</th>
                      <td>{{ data.block }}</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </fieldset>
          </div>
          <!-- Official Information End -->
          <!-- Package -->
          <div class="col-md-6">
            <fieldset>
              <span class="legend">Package Info</span>

              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th class="view_t_head">Package</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.package?.title }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Registration Fee</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.package?.registration_fee }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Monthly Fee</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.package?.price }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Yearly Fee</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.package?.yearly_price }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Floor</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.package?.floor }}</td>
                    </tr>
                    <tr>
                      <th class="view_t_head">Flat</th>
                      <th style="text-align: center; width: 2%;">:</th>
                      <td>{{ data.package?.flat }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
          <!-- Package -->
          <!-- Residence User -->
          <div class="col-md-6">
            <fieldset>
              <span class="legend">Residence User</span>
              <div class="text-end">
                <button class="btn back_or_add_btn"> <span><i class="fa fa-plus"></i></span> Create New User</button>
              </div>
              <div class="table-responsive text-nowrap table-basic table_wrapper">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Sl</th>
                      <th>Role</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="data.residence_users && data.residence_users.length > 0">
                      <tr v-for="(residenceuser, index) in data.residence_users" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ residenceuser.role_id }}</td>
                        <td>{{ residenceuser.full_name }}</td>
                        <td>{{ residenceuser.email }}</td>
                        <td>{{ residenceuser.mobile }}</td>
                        <td></td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </fieldset>
          </div>
          <!-- Residence User -->
          <!-- Invoices -->
          <div class="col-md-12">
            <fieldset>
              <span class="legend">Invoices</span>
              <div class="table-responsive text-nowrap table-basic table_wrapper">
                <table class="table">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Invoice No</th>
                      <th>Invoice Date</th>
                      <th>Promo Code</th>
                      <th>Inv. Amount</th>
                      <th>Discount</th>
                      <th>Amount</th>
                      <th>Payment Status</th>
                      <th>Payment Date</th>
                      <th>Card Type</th>
                      <th>TRXID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if="data.invoice && data.invoice.length > 0">
                      <tr v-for="(inv, index) in data.invoice" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ inv.invoice_no }}</td>
                        <td>{{ inv.invoice_date }}</td>
                        <td>{{ inv.promo_code }}</td>
                        <td>{{ inv.original_amount }}</td>
                        <td>{{ inv.discount }}</td>
                        <td>{{ inv.amount }}</td>
                        <td>{{ inv.payment_status }}</td>
                        <td>{{ inv.payment_date }}</td>
                        <td>{{ inv.card_type }}</td>
                        <td>{{ inv.trxid }}</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tr>
                        <th colspan="11">No Data Found</th>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </fieldset>

          </div>
          <!-- Invoices -->

          <!-- Statistics -->
          <div class="col-md-6">
            <fieldset>
              <span class="legend">Other Information</span>
              <div class="row g-3 mt-2">
                <!-- Duration Card -->
                <div class="col-md-4">
                  <div class="card shadow-sm h-100">
                    <div class="card-header text-white" style="background-color:#112C47;">
                      <i class="fa-solid fa-clock"></i> Duration
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-clock fa-2x text-warning me-3"></i>
                      <h4 class="mb-0 fw-bold">{{ data.duration }}</h4>
                    </div>
                  </div>
                </div>

                <!-- Total Paid Amount Card -->
                <div class="col-md-4">
                  <div class="card shadow-sm h-100">
                    <div class="card-header text-white" style="background-color:#112C47;">
                      <i class="fa-solid fa-circle-check"></i> Total Paid Amount
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-sack-dollar fa-2x text-success me-3"></i>
                      <h4 class="mb-0 fw-bold">{{ data.total_paid }}</h4>
                    </div>
                  </div>
                </div>

                <!-- Total Unpaid Amount Card -->
                <div class="col-md-4">
                  <div class="card shadow-sm h-100">
                    <div class="card-header text-white" style="background-color:#112C47;">
                      <i class="fa-solid fa-triangle-exclamation"></i> Total Unpaid Amount
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-money-bill-wave fa-2x text-danger me-3"></i>
                      <h4 class="mb-0 fw-bold">{{ data.total_unpaid }}</h4>
                    </div>
                  </div>
                </div>

                <!-- Total Floor Card -->
                <div class="col-md-4">
                  <div class="card shadow-sm h-100">
                    <div class="card-header text-white" style="background-color:#112C47;">
                      <i class="fa-solid fa-triangle-exclamation"></i> Total Floor
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-money-bill-wave fa-2x text-info me-3"></i>
                      <h4 class="mb-0 fw-bold">0</h4>
                    </div>
                  </div>
                </div>

                <!-- Total Flat Card -->
                <div class="col-md-4">
                  <div class="card shadow-sm h-100">
                    <div class="card-header text-white" style="background-color:#112C47;">
                      <i class="fa-solid fa-triangle-exclamation"></i> Total Flat
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-money-bill-wave fa-2x text-primary me-3"></i>
                      <h4 class="mb-0 fw-bold">0</h4>
                    </div>
                  </div>
                </div>

                <!-- Total Resident Card -->
                <div class="col-md-4">
                  <div class="card shadow-sm h-100">
                    <div class="card-header text-white" style="background-color:#112C47;">
                      <i class="fa-solid fa-triangle-exclamation"></i> Total Resident
                    </div>
                    <div class="card-body d-flex align-items-center">
                      <i class="fa-solid fa-user-group fa-2x text-secondary me-3"></i>
                      <h4 class="mb-0 fw-bold">0</h4>
                    </div>
                  </div>
                </div>

              </div>
            </fieldset>
          </div>
          <!-- Statistics -->
          <!-- Approval & Action -->
          <div class="col-md-6">
            <fieldset>
              <span class="legend">Action & Approval</span>
              <template v-if="!data.db_name">
                <form @submit.prevent="submitForm">
                  <div class="row mt-2">

                    <!-- DB Host -->
                    <div class="col-md-6 mb-3 ">
                      <label class="form-label">Database Host</label>
                      <input type="text" v-model="form.db_host" class="form-control"
                        :class="{ 'is-invalid': errors.db_host }" />
                      <div class="invalid-feedback" v-if="errors.db_host">{{ errors.db_host }}</div>
                    </div>

                    <!-- DB Name -->
                    <div class="col-md-6 mb-3">
                      <label class="form-label">Database Name</label>
                      <input type="text" v-model="form.db_name" class="form-control"
                        :class="{ 'is-invalid': errors.db_name }" />
                      <div class="invalid-feedback" v-if="errors.db_name">{{ errors.db_name }}</div>
                    </div>

                    <!-- DB User -->
                    <div class="col-md-6 mb-3">
                      <label class="form-label">Database User</label>
                      <input type="text" v-model="form.db_user" class="form-control"
                        :class="{ 'is-invalid': errors.db_user }" />
                      <div class="invalid-feedback" v-if="errors.db_user">{{ errors.db_user }}</div>
                    </div>

                    <!-- DB Password -->
                    <div class="col-md-6 mb-3">
                      <label class="form-label">Database Password</label>
                      <input type="password" v-model="form.db_password" class="form-control"
                        :class="{ 'is-invalid': errors.db_password }" />
                      <div class="invalid-feedback" v-if="errors.db_password">{{ errors.db_password }}</div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-success w-100">Approved</button>


                  </div>
                </form>
              </template>
              <template v-else>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="d-grid gap-2">
                      <a class="btn btn-info text-white" href="#"><i class="fa fa-shield"></i> Block Residence</a>
                      <a class="btn btn-success" href="#"><i class="fa fa-pencil"></i> Change Database Info</a>
                      <a class="btn btn-secondary" href="#"><i class="fa fa-plus"></i> Create New User</a>
                      <a class="btn btn-danger" href="#"><i class="fa fa-pencil"></i> Change Password</a>
                    </div>
                  </div>
                </div>

              </template>
            </fieldset>

            <!-- <pre>{{ data }}</pre> -->
          </div>
          <!-- Approval & Action -->
        </div>
      </div>
    </div>
  </view-page>
</template>

<script>

const model = "residence";

export default {
  data() {
    return {
      page_title: "",
      model: model,
      data: {

      },
      form: {
        residence_id: this.$route.params.id,
        db_host: 'localhost',
        db_name: '',
        db_user: 'root',
        db_password: '',
      },
      errors: {},
      fileColumns: [],
    };
  },
  methods: {
    validateForm() {
      this.errors = {}; // reset errors

      if (!this.form.db_host) this.errors.db_host = "Database host is required.";
      if (!this.form.db_name) this.errors.db_name = "Database name is required.";
      if (!this.form.db_user) this.errors.db_user = "Database user is required.";
      if (!this.form.db_password) this.errors.db_password = "Database password is required.";

      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        console.log("Form Submitted:", this.form);

        // এখানে API call করতে পারবেন
        axios.post('residence-approved', this.form).then(res => {
          this.get_data(`${this.model}/${this.$route.params.id}`);
        })

      }
    },
  },
  created() {
    this.page_title = `${this.headline(this.model)} View`;
    this.get_data(`${this.model}/${this.$route.params.id}`);
  }
};
</script>