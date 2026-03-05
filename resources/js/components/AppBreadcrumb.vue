<template>
  <div
    class="bread-crumb-part"
    :style="`background-color: ${
      colors.breadcrumb_color
        ? colors.breadcrumb_color
        : databaseColor.breadcrumb_color
    };`"
  >
    <div class="row">
      <div class="col-sm-5">
        <div class="left-title">
          <h3 style="text-transform: capitalize" v-if="breadcrumbs[0]">
            {{
              capitalize(
                breadcrumbs[Object.keys(breadcrumbs).length - 1]["title"]
              )
            }}
          </h3>
        </div>
      </div>
      <!-- <div class="col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
      </div> -->
      <div class="col-sm-7">
        <div class="right-info text-end">
          <ul>
            <li>
              <router-link :to="{ name: 'dashboard.index' }"
                >Dashboard</router-link
              >
            </li>
            <template v-if="!isDashboardRoute">
              <li
                v-for="(menu, index1) in breadcrumbs"
                :key="index1"
                :class="menu.route == $route.name ? 'active' : ''"
                style="text-transform: capitalize"
              >
                <a v-if="Object.keys(breadcrumbs).length == index1 + 1">
                  {{ menu.title }}
                </a>
                <router-link
                  v-else-if="menu.slug"
                  :to="{
                    name: menu.route,
                    params: { slug: menu.slug },
                  }"
                >
                  {{ menu.title }}
                </router-link>
                <router-link v-else :to="{ name: menu.route }">
                  {{ menu.title }}
                </router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    isDashboardRoute() {
      return this.$route.name === "dashboard.index";
    },
    ...mapState("setting", ["colors"]),
  },
  //   mounted() {
  //     window.addEventListener("scroll", this.handleScroll);
  //   },
  //   beforeDestroy() {
  //     window.removeEventListener("scroll", this.handleScroll);
  //   },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 50) {
        console.warn("Scroll");
      }
    },
  },
};
</script>

<style scoped>
.bread-crumb-part {
  z-index: 9 !important;
}
</style>
