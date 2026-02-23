<template>
    <fieldset>
        <span class="legend">Other Information</span>
        <div class="row g-3 mt-2">
            <div class="col-md-4" v-for="card in cards" :key="card.title">
                <div class="card shadow-sm h-100">
                    <div class="card-header text-white" style="background-color:#112C47;">
                        <i :class="card.icon"></i> {{ card.title }}
                    </div>
                    <div class="card-body d-flex align-items-center">
                        <i :class="card.iconBig" class="me-3 fa-2x"></i>
                        <h4 class="mb-0 fw-bold">{{ card.value }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
</template>

<script>
export default {
    props: { data: { type: Object, required: true } },
    computed: {
        cards() {
            return [
                { title: "Duration", icon: "fa-solid fa-clock", iconBig: "fa-solid fa-clock text-warning", value: this.data.duration },
                { title: "Total Paid Amount", icon: "fa-solid fa-circle-check", iconBig: "fa-solid fa-sack-dollar text-success", value: this.data.total_paid },
                { title: "Total Unpaid Amount", icon: "fa-solid fa-triangle-exclamation", iconBig: "fa-solid fa-money-bill-wave text-danger", value: this.data.total_unpaid },
                { title: "Total Floor", icon: "fa-solid fa-building", iconBig: "fa-solid fa-money-bill-wave text-info", value: 0 },
                { title: "Total Flat", icon: "fa-solid fa-door-open", iconBig: "fa-solid fa-money-bill-wave text-primary", value: 0 },
                { title: "Total Resident", icon: "fa-solid fa-user-group", iconBig: "fa-solid fa-user-group text-secondary", value: 0 }
            ];
        }
    }
};
</script>
