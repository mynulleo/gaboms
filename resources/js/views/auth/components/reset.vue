<template>
    <form @submit.prevent="submit">
        <div class="row g-3">
            <Input id="email" title="Email Address" v-model="data.email" field="data.email" required
                placeholder="Enter your Email Address" col="12" :disabled="$root.spinner" />

            <Input id="new_password" type="password" title="New Password" v-model="data.password" field="data.password"
                required placeholder="Enter your New Password" col="12" :disabled="$root.spinner" />

            <Input id="confirm_password" type="password" title="Confirm Password" v-model="data.password_confirmation"
                field="data.password_confirmation" required placeholder="Enter your Confirm Password" col="12"
                :disabled="$root.spinner" />

            <div class="col-12 mt-4">
                <button type="submit" class="theme_btn rounded-2 w-100" :disabled="$root.spinner">
                    <template v-if="$root.spinner">
                        <i class="fa fa-spinner fa-spin me-1"></i> Processing...
                    </template>
                    <template v-else> Reset Password </template>
                </button>
            </div>
            <div class="col-12 text-center">
                <a href="javascript:void(0)" @click.prevent="backToLogin" class="forgot text-center">Back to Login</a>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            data: {
                token: this.token,
                password: "",
                password_confirmation: "",
                email: this.email,
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
                        .post(`password/reset`, this.data)
                        .then((res) => {
                            this.$toast(res.data.message, "success");

                            setTimeout(() => {
                                window.location.href = `${this.$root.baseurl}/qpanel`;
                            }, 3000);
                        })
                        .catch((e) => {
                            console.log(e);
                            this.$root.spinner = false;
                            this.$toast(
                                e.response.data.message ??
                                "Something went wrong!",
                                "error"
                            );
                        });
                }
            });
        },

        backToLogin() {
            this.$parent.reset.flag = false;
            this.$parent.toggleForgetFlag();
        },
    },
    inject: ["token", "resetToken", "email"],
    provide() {
        return {
            validate: this.validation,
        };
    },
    created() {
        this.data.token = this.token;
    },
    validators: {
        "data.email": function (value = null) {
            return Validator.value(value)
                .email()
                .maxLength(100)
                .required("Email is required");
        },
        "data.password": function (value) {
            return Validator.value(value).required().minLength(6);
        },
        "data.password_confirmation": function (value) {
            return Validator.value(value).required().match(this.data.password);
        },
    },
};
</script>
