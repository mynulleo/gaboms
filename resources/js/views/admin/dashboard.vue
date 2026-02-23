<template>
    <div>
        <div v-if="$root.spinner" class="component_loader z-top">
            <div class="loader"></div>
        </div>

        <template v-else>
            <SystemAdminDashboard v-if="user.role_id === 1" :data="dashboardData" />
            <ManagerDashboard v-else :data="dashboardData" />
        </template>
    </div>
</template>

<script>
import SystemAdminDashboard from "./dashboard/SystemAdminDashboard.vue";
import ManagerDashboard from "./dashboard/ManagerDashboard.vue";

export default {
    name: "Dashboard",
    components: {
        SystemAdminDashboard,
        ManagerDashboard
    },
    data() {
        return {
            user: this.$root.user,
            dashboardData: {},
        };
    },
    created() {
        this.getDashboardData();
    },
    methods: {
        getDashboardData() {
            this.$root.spinner = true;
            axios
                .get("/dashboard")
                .then((res) => {
                    this.dashboardData = res.data;
                })
                .catch((err) => {
                    console.error("Error loading dashboard data:", err);
                })
                .finally(() => {
                    this.$root.spinner = false;
                });
        },
    },
};
</script>
