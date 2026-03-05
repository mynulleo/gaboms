<template>
  <view-page :defaultTable="false" :showCreateRoute="false" :showDeleteButton="false">
    <div class="row custom_row g-3">
      <div class="col-xl-6 col-lg-12">
        <ResidenceInfo :data="data" />
      </div>
      <div class="col-lg-6">
        <OfficialInfo :data="data" />
      </div>
      <div class="col-md-6">
        <PackageInfo :data="data" />
      </div>
      <div class="col-md-6">
        <ResidenceUsers :users="data.residence_users" />
      </div>
      <div class="col-md-12">
        <Invoices :invoices="data.invoice" />
      </div>
      <div class="col-md-6">
        <Statistics :data="data" />
      </div>
      <div class="col-md-6">
        <ActionApproval :data="data" :form="form" @submitted="fetchData" />
      </div>
    </div>
  </view-page>
</template>

<script>
import ResidenceInfo from "./components/ResidenceInfo.vue";
import OfficialInfo from "./components/OfficialInfo.vue";
import PackageInfo from "./components/PackageInfo.vue";
import ResidenceUsers from "./components/ResidenceUsers.vue";
import Invoices from "./components/Invoices.vue";
import Statistics from "./components/Statistics.vue";
import ActionApproval from "./components/ActionApproval.vue";

const model = "residence";

export default {
  components: {
    ResidenceInfo,
    OfficialInfo,
    PackageInfo,
    ResidenceUsers,
    Invoices,
    Statistics,
    ActionApproval
  },
  data() {
    return {
      lodding: false,
      model,
      data: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.get_data(`${this.model}/${this.$route.params.id}`);
    }
  }
};
</script>
