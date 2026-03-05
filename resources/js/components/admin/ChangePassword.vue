<template>
    <div class="card">
        <div class="card-body">
            <form id="changePassword" @submit.prevent="changePassword">
                <div class="row g-3 align-items-center">
                    <Input v-model="data.old_password" field="data.old_password" title="Old password" col="6"
                        :req="true" type="password" />

                    <Input v-model="data.new_password" field="data.new_password" title="New password" col="6"
                        :req="true" type="password" />

                    <Input v-model="data.confirm_password" field="data.confirm_password" title="Confirm password"
                        col="6" :req="true" type="password" />

                    <div class="col-12">
                        <Button title="Update" process="" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {},
        };
    },
    provide() {
        return {
            validate: this.validation,
        };
    },

    methods: {
        changePassword() {
            this.formValidationErrorScroll(this.validation.errors);

            this.$validate().then((res) => {
                const error = this.validation.countErrors();
                if (error > 0) {
                    this.$toast(
                        "You need to fill " +
                        error +
                        " more empty mandatory fields",
                        "warning"
                    );
                }

                if (res) {
                    this.$root.submit = true;
                    axios
                        .post("/change-password", this.data)
                        .then((res) => {
                            this.$toast(res.data.message, "success");
                            this.logout();
                        })
                        .catch((error) => {
                            if (error.response.status === 422) {
                                $("#validateModal").modal("show");
                                if (error.response.data.exception) {
                                    this.$root.exception_errors =
                                        error.response.data.exception;
                                } else {
                                    this.$root.validation_errors =
                                        error.response.data.errors || {};
                                }
                                this.$toast(
                                    "You need to fill empty mandatory fields",
                                    "warning"
                                );
                            } else {
                                this.$toast("Something went wrong!", "error");
                            }
                        })
                        .finally(() =>
                            setTimeout(() => (this.$root.submit = false), 100)
                        );
                }
            });
        },

        async logout() {
            const res = await this.callApi("post", "logout");
            if (res.status == 200) {
                this.$store.dispatch("auth/logout");
                this.$toast(res.data.message, "success");
                window.location.href = this.$root.baseurl + "/qpanel";
            }
        },
    },
    created() {
        this.data.id = this.user.id;
    },

    // ================== validation rule for form ==================
    validators: {
        "data.old_password": function (value = null) {
            return Validator.value(value)
                .required("Old password is required")
                .minLength(6)
                .custom(function () { });
        },

        "data.new_password": function (value = null) {
            return Validator.value(value)
                .required("New password is required")
                .minLength(6);
        },

        "data.confirm_password, data.new_password": function (
            confirm_password = null,
            new_password = null
        ) {
            return Validator.value(confirm_password)
                .required("Password confirmation is required")
                .match(new_password);
        },
    },
};
</script>
