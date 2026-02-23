<template>
  <div class="toggle-overlay d-block d-lg-none"></div>
  <div class="navigation-body shadow" :style="`background-color: ${colors.sidebar_color ? colors.sidebar_color : databaseColor.sidebar_color
    };`">
    <div class="close-mobile-menu d-block d-lg-none">
      <i class="bi bi-arrow-left"></i>
    </div>
    <div class="logo" :style="`background-color: ${colors.sidebar_top_color
        ? colors.sidebar_top_color
        : databaseColor.sidebar_top_color
      };`">
      <router-link :to="{ name: 'dashboard.index' }">
        <img v-if="site && site.logo" :src="site.logo" class="main-logo bg-white" alt="logo" width="120" />
        <img v-if="site && site.logo_small" :src="site.logo_small" class="mini-logo d-none bg-white" alt="mini-logo"
          width="40" />
        <img v-else-if="site && site && site.logo" :src="site.logo" class="mini-logo d-none" alt="mini-logo"
          width="40" />
      </router-link>
    </div>

    <div class="navigation" id="my-scrollbar" data-scrollbar>
      <div class="top-heading title m-3">
        <div class="top-search-box position-relative">
          <input type="text" class="form-control" placeholder="Type your keyword" v-model="keyword"
            autocomplete="off" />
          <button @click.prevent="search" class="top-search-btn border" :style="`background-color: ${colors.sidebar_color
              ? colors.sidebar_color
              : databaseColor.sidebar_color
            };`">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div class="main-menus">
        <ul v-if="filteredMenus && Object.keys(menus).length > 0" id="accordion" class="accordion">
          <!-- <li>
            <router-link :to="{ name: 'dashboard.index' }">
              <span class="icon"><i class="fas fa-cog spin"></i></span>
              <span class="title"> Dashboard </span>
            </router-link>
          </li> -->

          <slot v-for="(root_menu, index) in filteredMenus">
            <!-- ===================CHILDREN MENU=================== -->
            <slot v-if="
              root_menu.child_menus &&
              Object.keys(root_menu.child_menus).length > 0
            ">
              <li :key="index" class="sub-menu">
                <div class="link">
                  <span class="icon">
                    <em v-if="root_menu.icon" v-html="root_menu.icon"></em>
                  </span>
                  <span class="title">
                    <span>{{ root_menu.menu_name }}</span>
                    <span class="arrow float-end">
                      <i class="fa fa-chevron-right right p-0"></i>
                    </span>
                  </span>
                </div>

                <RecursiveMenu :key="index + 'A'" :root_menu="root_menu.menu_name" :child_menus="root_menu.child_menus"
                  :currentActiveRoute="currentActiveRoute" />
              </li>
            </slot>
            <!-- ===================CHILDREN MENU=================== -->

            <slot v-else>
              <li :key="index" v-if="
                root_menu.route_name &&
                $root.checkPermission(root_menu.route_name)
              ">
                <!-- MENU  WITH PARAMS-->
                <router-link v-if="root_menu.params" :to="{
                  name: root_menu.route_name,
                  params: { slug: root_menu.params },
                }">
                  <span class="icon">
                    <em v-if="root_menu.icon" v-html="root_menu.icon"></em>
                  </span>
                  <span class="title">
                    <span>{{ root_menu.menu_name }}</span>
                  </span>
                </router-link>

                <!-- SINGLE MENU -->
                <router-link v-else :to="{ name: root_menu.route_name }" :class="currentActiveRoute == root_menu.route_name
                    ? 'router-link-active active'
                    : ''
                  " :data-route="root_menu.route_name" :data-lol="currentActiveRoute">
                  <span class="icon">
                    <em v-if="root_menu.icon" v-html="root_menu.icon"></em>
                  </span>
                  <span class="title">
                    <span>{{ root_menu.menu_name }}</span>
                  </span>
                </router-link>
              </li>
            </slot>
          </slot>
        </ul>
      </div>
    </div>

    <!-- collapsed navigation start -->
    <div class="collapsed-navigation d-none">
      <ul>
        <!-- <li>
          <a href="#">
            <i class="fas fa-cog spin"></i>
          </a>
          <div class="mini-dropdown-menu">
            <ul>
              <li class="menu-title">
                <router-link :to="{ name: 'dashboard.index' }" class="mini-dashboard">
                  Dashboard
                </router-link>
              </li>
            </ul>
          </div>
        </li> -->

        <slot v-for="(root_menu, index) in menus">
          <slot v-if="
            root_menu.child_menus &&
            Object.keys(root_menu.child_menus).length > 0
          ">
            <li :key="index">
              <a href="#">
                <em v-if="root_menu.icon" v-html="root_menu.icon"></em>
              </a>
              <div class="mini-dropdown-menu">
                <RecursiveMenuCollasped :key="index + 'A'" :root_menu="root_menu.menu_name"
                  :child_menus="root_menu.child_menus" />
              </div>
            </li>
          </slot>
          <slot v-else>
            <li v-if="
              root_menu.route_name &&
              $root.checkPermission(root_menu.route_name)
            " :key="index + 1">
              <a href="#">
                <em v-if="root_menu.icon" v-html="root_menu.icon"></em>
              </a>
              <div class="mini-dropdown-menu">
                <ul>
                  <li class="menu-title">
                    <router-link v-if="root_menu.params" :to="{
                      name: root_menu.route_name,
                      params: { slug: root_menu.params },
                    }" class="mini-dashboard">
                      {{ root_menu.menu_name }}
                    </router-link>
                    <router-link v-else :to="{ name: root_menu.route_name }" class="mini-dashboard">
                      {{ root_menu.menu_name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </slot>
        </slot>
      </ul>
    </div>

    <!-- collapsed navigation end-->
    <div class="branding text-center" :style="`background-color: ${colors.sidebar_footer_color
        ? colors.sidebar_footer_color
        : databaseColor.sidebar_footer_color
      };`">
      <h6 class="full-brand">
        Developed By
        <a href="https://quilltech.com/" target="_blank" class="d-block">Nogor Solutions Limited</a>
      </h6>
      <div class="short-brand d-none">
        <img :src="`${asset}nogor-favicon.png`" alt="nogo-fevicon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RecursiveMenu from "./AppSidebarRecursive";
import RecursiveMenuCollasped from "./AppSidebarCollaspedRecursive";

export default {
  components: { RecursiveMenu, RecursiveMenuCollasped },
  computed: {
    activeRoute() {
      return this.$route.name;
    },
    currentRouteName() {
      return this.$route.name;
    },
    ...mapState("setting", ["colors"]),
  },
  data() {
    return {
      keyword: "",
      activeRouteSecondary: "",
      currentActiveRoute: "",
    };
  },
  watch: {
    // keyword(prev, next) {
    //   if (prev !== next) {
    //     this.$store.dispatch("global/updateKeyword", current);
    //   }
    // },
    $route(newRoute, lastRoute) {
      this.isActiveRoute(this.currentRouteName);
    },
  },
  methods: {
    filterMenu() {
      // Code Here...
    },
    isActiveRoute(routeName) {
      const parts = routeName.split(".");
      let extractedName = parts[0];
      const makeActivableRoute = (extractedName += ".index");

      const element = document.querySelector(
        `[data-route="${makeActivableRoute}"]`
      );

      if (element) {
        this.currentActiveRoute = makeActivableRoute;
      }
    },
    search() {
      this.$store.dispatch("global/updateKeyword", this.keyword);
    },
  },
  mounted() {
    let Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      let links = this.el.find(".link");
      links.on(
        "click",
        {
          el: this.el,
          multiple: this.multiple,
        },
        this.dropdown
      );
    };
    Accordion.prototype.dropdown = function (e) {
      let el = e.data.el;
      (window.$this = window.$(this)), (window.$next = window.$this.next());
      window.$next.slideToggle();
      window.$this.parent().toggleClass("open");
      if (!e.data.multiple) {
        el.find(".submenu")
          .not(window.$next)
          .slideUp()
          .parent()
          .removeClass("open");
      }
    };
    new Accordion(window.$("#accordion"), false);
  },
  updated() {
    // let Accordion = function (el, multiple) {
    //   this.el = el || {};
    //   this.multiple = multiple || false;
    //   let links = this.el.find(".link");
    //   links.on(
    //     "click",
    //     {
    //       el: this.el,
    //       multiple: this.multiple,
    //     },
    //     this.dropdown
    //   );
    // };
    // Accordion.prototype.dropdown = function (e) {
    //   let el = e.data.el;
    //   (window.$this = window.$(this)), (window.$next = window.$this.next());
    //   window.$next.slideToggle();
    //   window.$this.parent().toggleClass("open");
    //   if (!e.data.multiple) {
    //     el.find(".submenu")
    //       .not(window.$next)
    //       .slideUp()
    //       .parent()
    //       .removeClass("open");
    //   }
    // };
    // new Accordion(window.$("#accordion"), false);
  },
};
</script>

<style scoped>
.top-search-box input {
  padding-right: 55px;
}

.top-search-btn {
  width: 40px;
  height: 38px;
  background-color: green;
  border-radius: 2px;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  border: 0;
}
</style>
