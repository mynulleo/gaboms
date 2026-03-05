<template>
    <form @submit.prevent="submit">
        <div class="row g-3">
            <Input
                id="email"
                title="Email Address"
                v-model="data.email"
                field="data.email"
                required
                placeholder="Enter your Email Address"
                col="12"
                :disabled="$root.spinner"
            />
            <div class="col-12 mt-4">
                <button
                    type="submit"
                    class="theme_btn rounded-2 w-100"
                    :disabled="$root.spinner"
                >
                    <template v-if="$root.spinner">
                        <i class="fa fa-spinner fa-spin me-1"></i> Processing...
                    </template>
                    <template v-else> Send Password Reset Link </template>
                </button>
            </div>
            <div class="col-12 text-center">
                <a
                    href="javascript:void(0)"
                    @click.prevent="toggleForgetFlag()"
                    class="forgot text-center"
                    >Back to Login</a
                >
            </div>
        </div>
    </form>
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
                        .post("password/email", this.data)
                        .then((res) => {
                            this.$root.spinner = false;
                            const status = res.data.status ?? 'success';
                            const message = res.data.message;
                            this.$toast(message, status);
                        })
                        .catch((e) => {
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
