<template>
    <view-page printArea="invoice_print">
        <div class="container my-5">
            <div class="mb-1">
                <SwitchBoolean v-model='invoice_from' field='invoice_from' col="3" title='Display Org Info? '
                    on-label='Yes' off-label='No'></SwitchBoolean>
            </div>
            <div class="container my-3 invoice-wrapper" id="invoice_print">

                <div class="invoice-box shadow-sm p-3">
                    <!-- Header -->
                    <div class="row mb-4">
                        <div class="col-md-12 col-sm-12 text-md-center">
                            <h2 class="invoice-title">INVOICE</h2>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="invoice-from" v-if="invoice_from">
                                <img :src="site.logo_two" alt="" style="width:150px">
                                <p class="mb-0"><strong>{{ site.title }}</strong></p>
                                <p class="mb-0">{{ site.address }}</p>
                                <p class="mb-0">Phone: {{ site.mobile1 }}</p>
                                <p>{{ site.email }}</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 ">
                            <div class="invoice-to text-md-end">
                                <h6 class="fw-bold">Bill To:</h6>
                                <p class="mb-0">{{ data.client?.name }}</p>
                                <p class="mb-0">{{ data.client?.address }}</p>
                                <p class="mb-0">Phone: {{ data.client?.mobile }}</p>
                                <p>Email: {{ data.client?.email }}</p>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-1"><strong>Invoice #:</strong> {{ data.invoice_no }}</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <p class="mb-1"><strong>Date:</strong> {{ data.invoice_date }}</p>
                        </div>
                    </div>

                    <!-- Items Table -->
                    <div class="table-responsive">
                        <table class="table table-bordered align-middle">
                            <thead class="text-center">
                                <tr>
                                    <th>#</th>
                                    <th width="40%">Description</th>
                                    <th class="text-end">Unit Price <br>(৳)</th>
                                    <th class="text-end">Month <br> </th>
                                    <th class="text-end">Amount <br>(৳)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(invd, index) in data.invoice_details" :key="index">
                                    <tr>
                                        <td class="text-center">{{ index + 1 }}</td>
                                        <td>{{ invd.description }}</td>
                                        <td class="text-end">{{ invd.amount }}</td>
                                        <td class="text-end">{{ invd.month_count }}</td>
                                        <td class="text-end"> {{ invd.total_amount }}</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>

                    <!-- Summary -->
                    <div class="row justify-content-end mt-3">
                        <div class="col-md-5">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td class="text-end">৳ {{ $filter.money(data.original_amount) }}</td>
                                    </tr>
                                    <tr>
                                        <th>Discount</th>
                                        <td class="text-end">৳ {{ $filter.money(data.discount) }}</td>
                                    </tr>
                                    <tr class="fw-bold">
                                        <th>Total</th>
                                        <td class="text-end">৳ {{ $filter.money(data.amount) }}</td>
                                    </tr>
                                    <tr class="fw-bold">
                                        <th>Previous Due</th>
                                        <td class="text-end">৳ {{ $filter.money(data.previous_due) }}</td>
                                    </tr>
                                    <tr class="fw-bold">
                                        <th>Grand Total</th>
                                        <td class="text-end">
                                            ৳ {{ $filter.money(Number(data.amount) + Number(data.previous_due)) }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="row mt-4">
                        <div class="col-md-12">
                            <p class="mb-1"><strong>Payment Method:</strong> Bank / Cash / Mobile Banking</p>
                            <p class="text-muted">Thank you for your business!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </view-page>
</template>

<script>
const model = "invoice";

export default {
    data() {
        return {
            page_title: "Invoice",
            model,
            data: {},
            print_area: "my_print",
            invoice_from: 1
        };
    },
    computed: {
        totalAmount() {
            if (!this.data.invoice_details) return 0;
            return this.data.invoice_details.reduce((sum, acd) => sum + parseFloat(acd.amount || 0), 0);
        },
    },
    created() {
        this.page_title = "Invoice";
        this.get_data(`${this.model}/bill/${this.$route.params.id}`);
    },
    methods: {
        async paynow() {
            if (!this.data.id) {
                this.$toast("Invoice ID not found", "warning");
                return;
            }
            try {
                const response = await axios.get(`/paynow/${this.data.id}`);
                if (response.data.success) {
                    this.get_data(`${this.model}/bill/${this.$route.params.id}`);
                    this.$toast(response.data.message, "success");
                } else {
                    this.$toast(response.data.message || "Payment failed", "error");
                }
            } catch (error) {
                const msg = error.response?.data?.message || "Error processing payment";
                this.$toast(msg, "error");
            }
        },
    },
};
</script>

<style scoped>
.invoice-wrapper {
    max-width: 560px;
}

.to-section {
    width: 180px;
    float: right
}

.table-bill th {
    background-color: #112C47;
    color: #fff;
}

@media (max-width: 576px) {
    .invoice-header {
        text-align: center !important;
        flex-direction: column;
    }

    .invoice-header .logo-section,
    .invoice-header .title-section,
    .invoice-header .info-section {
        flex: 100%;
        text-align: center !important;
    }

    .invoice-header .info-section {
        margin-top: 10px;
    }

    .to-section {
        float: left
    }
}

@media print {
    .table-bill th {
        background-color: #112C47 !important;
        color: #fff;
    }
}
</style>
