<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false" printArea="moneyreceipt_print">
    <div class="row custom_row g-3">
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Information</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Payment Date</th>
                  <th width="5%">:</th>
                  <td>{{ data.payment_date }}</td>
                </tr>
                <tr>
                  <th>Payment Type</th>
                  <th>:</th>
                  <td>{{ data.payment_type }}</td>
                </tr>
                <tr>
                  <th>Payment Method</th>
                  <th>:</th>
                  <td>{{ data.payment_method }}</td>
                </tr>
                <tr>
                  <th>Discount</th>
                  <th>:</th>
                  <td>{{ data.payment_method }}</td>
                </tr>
                <tr>
                  <th>Amount</th>
                  <th>:</th>
                  <td>{{ data.amount }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-6">
        <fieldset>
          <span class="legend">Receive From / Pay To</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th width="5%">:</th>
                  <td>{{ data.payto?.name }}</td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <th width="5%">:</th>
                  <td>{{ data.payto?.mobile }}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <th width="5%">:</th>
                  <td>{{ data.payto?.address }}</td>
                </tr>
                <tr>
                  <th>Other Info</th>
                  <th width="5%">:</th>
                  <td>{{ data.payto?.info }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-12">
        <fieldset>
          <span class="legend">Payment Details</span>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Referance Type</th>
                  <th>Account</th>
                  <th>Account Type</th>
                  <th>Ref. Info</th>
                  <th class="text-md-end">Amount</th>
                  <th class="text-md-end">Paid Amount</th>
                  <th class="text-md-end">Due Amount</th>
                  <th class="text-md-end">Adjst. Amount</th>
                  <th>Is Closed</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pddata, index) in data.payment_details" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ pddata.reference_type }}</td>
                  <td>{{ pddata.account?.account_code }} - {{ pddata.account?.account_name }}</td>
                  <td>{{ pddata.account?.account_type }}</td>
                  <td>{{ pddata.reference_info }}</td>
                  <td class="text-md-end">{{ Number(pddata.amount).toFixed(2) }}</td>
                  <td class="text-md-end">{{ Number(pddata.paid_amount).toFixed(2) }}</td>
                  <td class="text-md-end">{{ Number(pddata.due_amount).toFixed(2) }}</td>
                  <td class="text-md-end">{{ Number(pddata.adjust_amount).toFixed(2) }}</td>
                  <td>{{ pddata.is_closed ? 'Yes' : 'No' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
      <div class="col-md-4">
        <fieldset>
          <span class="legend">Ref Info</span>
          <h6 class="mt-2">Read this note first</h6>
          <p class="mt-1"><i>Please verify the client details, invoice references, and payment allocation before final
              submission.
              Ensure all dues are correctly adjusted and marked as closed where applicable.</i></p>
        </fieldset>
      </div>
      <div class="col-md-8">
        <fieldset>
          <span class="legend">Pay Slip / Money Receipt</span>
          <div class="receipt-container" id="moneyreceipt_print">
            <div class="receipt-content mx-auto">
              <!-- Header with Logo and Contact Info -->
              <div class="receipt-header d-flex justify-content-between align-items-center mb-4">
                <div class="logo-section">
                  <img :src="$root.site.logo_two" alt="Logo" class="logo-img" />
                </div>
                <div class="info-section text-end">
                  <h3 class="mt-0" v-if="data.payment_type == 'Receive'">Money Receipt</h3>
                  <h3 class="mt-0" v-else>Payslip</h3>
                  <p class="mb-0"><strong>Mobile:</strong> {{ $root.site.mobile1 }}</p>
                  <p class="mb-0"><strong>Email:</strong> {{ $root.site.contact_email }}</p>
                  <p class="mb-0"><strong>Address:</strong> {{ $root.site.address }}</p>
                </div>
              </div>
              <!-- Receipt Info -->
              <div class="d-flex justify-content-between mb-3">
                <div> Receipt No: MR-2025001</div>
                <div><strong>Date:</strong> {{ data.payment_date }}</div>
              </div>
              <!-- Payment Details -->
              <div v-if="data.payment_details && data.payment_details.length > 0">
                <div class="receipt-body">
                  <div class="field-row">
                    <div class="label">Residence Name:</div>
                    <div class="value-container">
                      <span class="value-text text-success">{{ data.payto?.name }}</span>
                      <div class="underline"></div>
                    </div>
                  </div>
                  <div class="field-row">
                    <div class="label">Amount:</div>
                    <div class="value-container">
                      <span class="value-text text-success">
                        ৳ {{ Number(data.amount).toFixed(2) }}
                      </span>
                      <div class="underline"></div>
                    </div>
                  </div>
                  <div class="field-row">
                    <div class="label">In Word:</div>
                    <div class="value-container">
                      <span class="value-text text-success"> {{ currencyToWordsBD(data.amount) }}</span>
                      <div class="underline"></div>
                    </div>
                  </div>
                  <div class="field-row">
                    <div class="label">Payment Method:</div>
                    <div class="value-container">
                      <span class="value-text">{{ data.payment_method }}</span>
                      <div class="underline"></div>
                    </div>
                  </div>
                  <div class="field-row">
                    <div class="label">For:</div>
                    <div class="value-container">
                      <span class="value-text" v-if="data.payment_type = 'Receive'">Monthly Bill</span>
                      <span class="value-text" v-else> {{ data.payto?.info }}</span>
                      <div class="underline"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div style="min-height: 80px;">
                  <p class="text-muted fst-italic mt-3">
                    <b>No payment information is available for this transaction. Please contact the relevant
                      authority for further assistance.</b>
                  </p>
                </div>
              </div>
              <div class="d-flex justify-content-between px-2 mt-2">
                <div class="signature-line">

                </div>
                <div class="signature-line">
                  <template v-if="$root.site.authorized_signature_two">
                    <img :src="$root.site.authorized_signature_two" style="max-width: 100%;" />
                    <div class="text-center">
                      <strong></strong><br>
                      <strong>Account Officer</strong>
                    </div>
                  </template>
                </div>
              </div>
              <!-- Received By and Signature -->
              <div class="d-flex justify-content-between mt-4">
                <div><strong>Received By:</strong></div>
                <div><strong>Authorized Signature:</strong></div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </view-page>
</template>

<script>

const model = "payment";

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
<style scoped>
.receipt-container {
  padding: 20px;
}

.receipt-content {
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.logo-img {
  max-height: 70px;
  width: auto;
}

.receipt-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.info-section p {
  margin: 2px 0;
}

.field-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  width: 25%;
}

.value-container {
  width: 75%;
  position: relative;
}

.value-text {
  display: block;
}

.underline {
  border-bottom: 1px solid #000;
  margin-top: 2px;
}

.signature-line {
  flex: 1;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-note {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .receipt-content {
    max-width: 100%;
    padding: 15px;
  }

  .receipt-header {
    flex-direction: column;
    text-align: center;
  }

  .logo-section {
    margin-bottom: 15px;
  }

  .info-section {
    text-align: center;
  }

  .field-row {
    flex-direction: column;
    text-align: left;
  }

  .label {
    width: 100%;
    margin-bottom: 5px;
  }

  .value-container {
    width: 100%;
  }

  .d-flex {
    flex-direction: column;
    text-align: center;
  }

  .d-flex div {
    margin-bottom: 10px;
  }

  .signature-line {
    margin-bottom: 15px;
  }
}
</style>