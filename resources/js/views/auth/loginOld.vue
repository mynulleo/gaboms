<template>
  <section class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8 mx-auto">
          <div class="login-body d-flex justify-content-center align-items-center">
            <div class="login-main">
              <div class="row d-flex justify-content-center">
                <div class="col-12 col-lg-6">
                  <div class="company-info text-center d-grid align-content-center">
                    <div class="content">
                      <div class="logo shadow-sm">
                        <img :src="$root.site.logo" class="img-fluid w-100" />
                      </div>
                      <div class="name">
                        <h2>Nogor Solutions Limited</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <template v-if="reset.flag">
                  <reset></reset>
                </template>

                <template v-else>
                  <template v-if="forgetFlag">
                    <forget></forget>
                  </template>

                  <div v-else class="col-12 col-sm-8 col-lg-6">
                    <div class="login-title text-center pt-5">
                      <h3>Welcome!</h3>
                      <h1>Sign Into Your Account</h1>
                    </div>

                    <form v-on:submit.prevent="submit" method="post">
                      <div class="input-groups position-relative">
                        <Input class="fw-bold" title="Email" v-model="data.email" field="data.email" :req="true"
                          col="12 col-sm-12 col-md-12 col-xxl-12" :tooltipBox="false" placeholder="Enter your email" />
                      </div>
                      <div class="input-groups position-relative">
                        <Input class="fw-bold" :type="visibilityFlag ? 'text' : 'password'" title="Password"
                          v-model="data.password" field="data.password" :req="true"
                          col="12 col-sm-12 col-md-12 col-xxl-12" :tooltipBox="false"
                          placeholder="Enter your password" />
                        <template v-if="visibilityFlag == false">
                          <i class="far fa-eye position-absolute show-hide" @click.prevent="toggle(true)"></i>
                        </template>

                        <template v-else>
                          <i class="fa fa-eye-slash position-absolute show-hide" @click.prevent="toggle(false)"></i>
                        </template>

                        <a class="mb-3" href="#" @click.prevent="toggleForgetFlag(true)">Forgot Password ?</a>
                      </div>

                      <div class="button">
                        <button type="submit" :disabled="$root.spinner ? true : false">
                          <span v-if="$root.spinner">
                            <i class="fa fa-spinner fa-spin"></i>
                            processing...
                          </span>
                          <span v-else> Login </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="click-developed">
      <span>Developed By</span>
      <a href="https://quilltech.com/" target="_blank">
        <img :src="$root.site.logo" class="img-fluid" width="170" />
      </a>
      <div class="click-developed-arrow">
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </section>
</template>

<script>
import forget from "./components/forget.vue";
import reset from "./components/reset.vue";

export default {
  props: {
    token: {
      type: [String, Number],
      default: false,
    },
  },
  components: {
    forget,
    reset,
  },
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
      reset: {
        flag: false,
        token: false,
      },
      environment: "local",
      visibilityFlag: false,
      forgetFlag: false,
    };
  },
  provide() {
    return {
      validate: this.validation,
      token: this.reset.token,
      resetToken: this.resetToken,
      toggleForgetFlag: this.toggleForgetFlag,
    };
  },
  methods: {
    submit() {
      this.$validate().then((res) => {
        if (res) {
          if (this.$root.spinner) {
            return false;
          }
          this.$root.spinner = true;
          axios
            .post("/qlogin", this.data)
            .then((res) => {
              if (res.status == 200 && res.data.user instanceof Object) {
                this.$store.dispatch("auth/loginStore", res.data);
                this.$toast(res.data.message, "success");
                window.location.href = this.$root.baseurl + "/admin/dashboard";
              } else {
                this.$root.spinner = false;
                this.$toast(res.data.message, "error");
              }
            })
            .catch((error) => {
              this.$root.spinner = false;
              window.location.href = `${this.$root.baseurl}/qpanel`;
              this.$toast("Something went wrong, please try again", "error");
            });
        }
      });
    },
    toggle(value) {
      this.visibilityFlag = value;
    },
    toggleForgetFlag(value) {
      this.forgetFlag = value;
    },
    resetToken() {
      this.reset.token = false;
    },
    setEnvironment() {
      axios.get("app/environment").then((res) => {
        if (res.data !== "production") {
          this.data = {
            email: "nsl@gmail.com",
            password: "nsl@123",
          };
        }
      });
    },
  },
  created() {
    if (this.token) {
      this.reset.flag = true;
    }
    this.setEnvironment();
  },
  validators: {
    "data.email": function (value = null) {
      return Validator.value(value)
        .email()
        .maxLength(100)
        .required("Email is required");
    },
    "data.password": function (value = null) {
      return Validator.value(value)
        .required("Password is required")
        .minLength(6);
    },
  },
};
</script>
