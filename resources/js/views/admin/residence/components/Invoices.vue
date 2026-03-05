<template>
    <fieldset>
        <span class="legend">Invoices</span>
        <div class="table-responsive">
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
                    <tr v-for="(inv, index) in invoices" :key="index">
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
                    <tr v-if="!invoices || invoices.length === 0">
                        <td colspan="11">No Invoice Found</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </fieldset>
</template>

<script>
export default {
    props: { invoices: { type: Array, default: () => [] } }
};
</script>
