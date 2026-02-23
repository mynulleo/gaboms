<template>
  <div class="col-12 col-sm-8 col-lg-6">
    <div class="login-title">
      <h1>Reset your password</h1>
    </div>
    <form v-on:submit.prevent="submit" method="post">
      <div class="input-groups position-relative">
        <Input class="fw-bold" title="New Password" v-model="data.password" field="data.password" :req="true"
          col="12 col-sm-12 col-md-12" :tooltipBox="false" />

        <Input class="fw-bold" title="Confirm password" v-model="data.reset_password" field="data.reset_password"
          :req="true" col="12 col-sm-12 col-md-12" :tooltipBox="false" />
      </div>

      <div class="button">
        <button type="submit" :disabled="$root.spinner ? true : false">
          <span v-if="$root.spinner">
            <i class="fa fa-spinner fa-spin"></i>
            processing...
          </span>
          <span v-else> Reset </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        token: "",
        password: "",
        reset_password: "",
      },
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
            .post("/backend/password-reset", this.data)
            .then((res) => {
              this.$root.spinner = false;
              const status = res.data.status;
              const message = res.data.message;

              this.$toast(message, status);

              window.location.href = `${this.$root.baseurl}/admin/qpanel`;

              //   if (status == "success") {
              //     this.resetToken();
              //   }
            })
            .catch((e) => {
              console.log(e);
              this.$root.spinner = false;
              this.$toast("Email gateway does'nt configured yet!", "error");
            });
        }
      });
    },
  },
  inject: ["token", "resetToken"],
  provide() {
    return {
      validate: this.validation,
    };
  },
  created() {
    this.data.token = this.token;
  },
  validators: {
    "data.password": function (value) {
      return Validator.value(value).required().minLength(6);
    },
    "data.reset_password": function (value) {
      return Validator.value(value).required().match(this.data.password);
    },
  },
};
</script>
