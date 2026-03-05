<template>
  <section class="dashboard">
    <AppSidebar />
    <div class="main-content-body d-flex flex-column">
      <AppNav />

      <template v-if="$root.spinner"> </template>

      <template v-else> </template>

      <AppBreadcrumb v-if="!$root.spinner" />

      <!-- All Inner Page -->
      <router-view></router-view>

      <div class="content-part">
        <div v-if="$root.spinner" class="inner-content">
          <div
            class="global-form d-flex align-items-center justify-content-center"
            style="height: 450px"
          >
            <div class="loading-main">
              <div class="loading-body">
                <div>
                  <!-- <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div> -->
                  <span class="loader"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />

      <ValidationMessage />
    </div>
  </section>
</template>

<script>
import AppNav from "./../../components/AppNav.vue";
import AppFooter from "./../../components/AppFooter.vue";
import AppSidebar from "./../../components/AppSidebar.vue";
import AppBreadcrumb from "./../../components/AppBreadcrumb.vue";
import ValidationMessage from "./../../components/elements/ValidationMessage.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppFooter,
    AppSidebar,
    AppBreadcrumb,
    ValidationMessage,
  },

  mounted() {
    $(window).on("load", function () {
      $(".loading-main").delay(1000).fadeOut(300);
    });
  },
};
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #000000 #000000 transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px solid;
  border-color: transparent #ff3d00 #ff3d00;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 0.5s linear infinite;
  transform-origin: center center;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
