<template>
      <div class="col-12 col-sm-8 col-lg-6">
        <div class="login-title position-relative pt-5">
          <button type="button" class="btn btn-sm border position-absolute" @click.prevent="toggleForgetFlag()">
          <i class="fa-solid fa-arrow-left"></i> Back
        </button>
        <h1>Forget your password</h1>
      </div>
      <form v-on:submit.prevent="submit" method="post">
        <div class="input-groups position-relative">
            <Input class="fw-bold" title="Email" v-model="data.email" field="data.email" :req="true"
              col="12 col-sm-12 col-md-12" :tooltipBox="false" />
      </div>

      <div class="button">
        <button type="submit" :disabled="$root.spinner ? true : false">
          <span v-if="$root.spinner">
            <i class="fa fa-spinner fa-spin"></i>
            processing...
          </span>
          <span v-else> Submit </span>
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
        email: "",
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
            .post("/backend/forget", this.data)
            .then((res) => {
              this.$root.spinner = false;
              const status = res.data.status;
              const message = res.data.message;
              this.$toast(message, status);
            })
            .catch((e) => {
              this.$root.spinner = false;
              this.$toast("Something went wrong!", "error");
            });
        }
      });
    },
  },
  inject: ["toggleForgetFlag"],
  provide() {
    return {
      validate: this.validation,
    };
  },
  validators: {
    "data.email": function (value = null) {
      return Validator.value(value)
        .email()
        .maxLength(100)
        .required("Email is required");
    },
  },
};
</script>
