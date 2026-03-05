<template>
    <view-page>
        <div class="receipt-container">
            <div class="receipt-content mx-auto">
                <!-- Header with Logo and Contact Info -->
                <div class="receipt-header d-flex justify-content-between align-items-center mb-4">
                    <div class="logo-section">
                        <img :src="$root.site.logo_two" alt="Logo" class="logo-img" />
                    </div>
                    <div class="info-section text-end">
                        <h3 class="mt-0">Money Receipt</h3>
                        <p class="mb-0"><strong>Mobile:</strong> {{ $root.site.contact_number }}</p>
                        <p class="mb-0"><strong>Email:</strong> {{ $root.site.contact_email }}</p>
                        <p class="mb-0"><strong>Address:</strong> {{ $root.site.address }}</p>
                    </div>
                </div>
                <p class="text-muted text-center">Receipt No: MR-2025001</p>

                <!-- Receipt Info -->
                <div class="d-flex justify-content-between mb-3">
                    <div></div>
                    <div><strong>Date:</strong> {{ data.invoice_date }}</div>
                </div>
                <!-- Payment Details -->
                <div v-if="data.payment_details && data.payment_details.length > 0">
                    <div class="receipt-body">
                        <div class="field-row">
                            <div class="label">Residence Name:</div>
                            <div class="value-container">
                                <span class="value-text text-success">{{ data.client?.name }}</span>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div class="field-row">
                            <div class="label">Amount:</div>
                            <div class="value-container">
                                <span class="value-text text-success">
                                    ৳ {{ paymentTotalAmount.toFixed(2) }}
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
                                <span class="value-text">&nbsp;</span>
                                <div class="underline"></div>
                            </div>
                        </div>
                        <div class="field-row">
                            <div class="label">For:</div>
                            <div class="value-container">
                                <span class="value-text">{{ getMultipleAccountHead(data.invoice_details) }}</span>
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
    </view-page>
</template>

<script>
const model = "invoice";

export default {
    data() {
        return {
            page_title: "Money Receipt",
            model: model,
            data: {},
            fileColumns: [],
        };
    },
    computed: {
        paymentTotalAmount() {
            if (!this.data.payment_details || !Array.isArray(this.data.payment_details)) {
                return 0;
            }

            return this.data.payment_details.reduce((total, item) => {
                return total + parseFloat(item.amount || 0);
            }, 0);
        }
    },
    methods: {
        getMultipleAccountHead(invoice_details) {
            if (
                !Array.isArray(invoice_details) ||
                !this.$root?.global?.allaccounts ||
                !Array.isArray(this.$root.global.allaccounts)
            ) {
                return '';
            }

            return invoice_details
                .map(item => {
                    const head = this.$root.global.allaccounts.find(
                        h => h.id === item.account_id
                    );
                    return head ? head.name : null;
                })
                .filter(Boolean)
                .join(', ');
        }
    },
    created() {
        this.page_title = `Money Receipt`;
        this.get_data(`${this.model}/moneyreceipt/${this.$route.params.id}`);
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