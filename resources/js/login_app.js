require("./login_bootstrap");
import { createApp } from "vue";

// Import Validation...
import validate from "simple-vue-validator";
const Validator = validate.Validator;
window.Validator = Validator;

// Import Plugin...
import toast_plugin from "./plugin/toast";

// Import Mixin...
import crud_mixin from "./mixins/crud";

// Import Vuex...
import store from "./store";

import { xTooltip, xZoomImage } from "./helpers/custom-directives";

// App Initialize...
const app = createApp({
    data() {
        return {
            baseurl: laravel.baseurl,
            asset_url: laravel.asset_url,
            storage_url: laravel.storage_url,
            spinner: false,
            site: "",
            initialLoader: true,
        };
    },
    methods: {
        async getInitializeSystems() {
            this.initialLoader = true;
            await axios.get("app/initialize-systems").then((res) => {
                this.site = res.data.site;
                this.initialLoader = false;
            });
            return this.site;
        },
    },
    created() {
        this.getInitializeSystems();
    },
});

import loadCustomComponents from "./plugin/custom";
loadCustomComponents(app);

import login from "./views/auth/login.vue";
app.component("login", login);
app.mixin(crud_mixin);
app.use(validate);
app.use(toast_plugin);
app.use(store);

app.directive("x-tooltip", xTooltip);
app.directive("x-zoom-image", xZoomImage);

app.config.productionTip = false;

if (process.env.NODE_ENV !== "production") {
    app.config.errorHandler = (error, instance, info) => {
        console.log(
            "%c!!------------ Error occurred -------------!!",
            "color: red; font-size: 20px; font-weight: 800;"
        );
        console.log("----------------------------------------");

        console.log("%cError Info:", "color: red;");
        console.log(info);
        console.log("---------------------------------------");

        console.log("%cError Details:", "color: red;");
        console.log(error);

        console.log("%cError Instance:", "color: red;");
        console.log(instance);
        console.log("--------------------------------------");
        console.log(
            "%cError End! \n\n",
            "color: red; font-size: 20px; font-weight: 800;"
        );

        alert("Error occurred! Please, check your console. Thank you!");
    };
}

app.mount("#app");
