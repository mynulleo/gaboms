<template>
    <fieldset>
        <span class="legend">Action & Approval</span>

        <!-- 🔹 যদি DB না থাকে -->
        <div class="position-relative">
            <!-- 🔸 approvalloading overlay -->
            <div v-if="approvalloading" class="overlay">
                <div class="spinner-border text-light" role="status"></div>
                <span class="ms-2 text-light">Processing...</span>
            </div>
            <form v-if="!data.db_name" @submit.prevent="submitForm">
                <div class="row mt-2">
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Database Host</label>
                        <input v-model="dbForm.db_host" class="form-control" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Database Name</label>
                        <input v-model="dbForm.db_name" class="form-control" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Database User</label>
                        <input v-model="dbForm.db_user" class="form-control" />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label">Database Password</label>
                        <input type="password" v-model="dbForm.db_password" class="form-control" />
                    </div>
                    <button class="btn btn-success w-100" :disabled="approvalloading">
                        <span v-if="approvalloading">Approving...</span>
                        <span v-else>Approved</span>
                    </button>
                </div>
            </form>


            <!-- 🔹 যদি DB already থাকে -->
            <div v-else class="d-grid gap-2 mt-2">
                <button v-if="data.block == 0" class="btn btn-danger text-white" data-bs-toggle="modal"
                    data-bs-target="#blockModal">
                    <i class="fa fa-shield"></i> Block Residence
                </button>
                <button v-if="data.block == 1" class="btn btn-info text-white" data-bs-toggle="modal"
                    data-bs-target="#blockModal">
                    <i class="fa fa-shield"></i> Unblock Residence
                </button>
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#changeDbModal">
                    <i class="fa fa-pencil"></i> Change Database Info
                </button>
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#newUserModal">
                    <i class="fa fa-plus"></i> Create New User
                </button>
                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#changePassModal">
                    <i class="fa fa-pencil"></i> Change Password
                </button>
            </div>
        </div>

        <!-- Block Modal -->
        <div class="modal fade" id="blockModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-info text-white">
                        <h5 class="modal-title">Block Residence</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <template v-if="data.block == 0">
                            Are you sure you want to block <b>{{ data.residence_name }}</b>?
                        </template>
                        <template v-if="data.block == 1">
                            Are you sure you want to unblock <b>{{ data.residence_name }}</b>?
                        </template>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button v-if="data.block == 0" class="btn btn-info text-white"
                            @click="submitAction('block', { residence_id: data.id })"
                            data-bs-dismiss="modal">Confirm</button>
                        <button v-if="data.block == 1" class="btn btn-info text-white"
                            @click="submitAction('unblock', { residence_id: data.id })"
                            data-bs-dismiss="modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Change DB Info Modal -->
        <div class="modal fade" id="changeDbModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title">Change Database Info</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <form @submit.prevent="submitAction('updatedb', dbForm)">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Database Host</label>
                                <input v-model="dbForm.db_host" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Database Name</label>
                                <input v-model="dbForm.db_name" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Database User</label>
                                <input v-model="dbForm.db_user" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Database Password</label>
                                <input type="password" v-model="dbForm.db_password" class="form-control" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- New User Modal -->
        <div class="modal fade" id="newUserModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-secondary text-white">
                        <h5 class="modal-title">Create New User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <form @submit.prevent="validateUserForm">
                        <div class="modal-body">
                            <!-- Role -->
                            <div class="mb-3">
                                <label class="form-label">Role</label>
                                <select v-model="userForm.role_id" class="form-control">
                                    <option value="">-- Select Role --</option>
                                    <option value="1">Owner</option>
                                    <option value="2">Accounts</option>
                                </select>
                                <small v-if="errors.role_id" class="text-danger">{{ errors.role_id }}</small>
                            </div>

                            <!-- Full Name -->
                            <div class="mb-3">
                                <label class="form-label">Full Name</label>
                                <input v-model="userForm.name" type="text" class="form-control"
                                    placeholder="Enter Full Name" />
                                <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
                            </div>

                            <!-- Username -->
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input v-model="userForm.email" type="text" class="form-control"
                                    placeholder="Enter Email" />
                                <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
                            </div>

                            <!-- Password -->
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input v-model="userForm.password" type="password" class="form-control"
                                    placeholder="Enter Password" />
                                <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-secondary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Change Password Modal -->
        <div class="modal fade" id="changePassModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">Change Password</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <form @submit.prevent="submitChangePassword">
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label">Users</label>
                                <select v-model="passForm.id" class="form-control">
                                    <option value="">-- Select User --</option>
                                    <template v-for="(user, index) in data.residence_users">
                                        <option :value="user.id">{{ user.full_name }}</option>
                                    </template>
                                </select>
                                <small v-if="errors.id" class="text-danger">{{ errors.id }}</small>
                            </div>
                            <!-- Password -->
                            <div class="mb-3">
                                <input type="password" v-model="passForm.password" class="form-control"
                                    placeholder="Enter New Password" required />
                            </div>

                            <!-- Confirm Password -->
                            <div class="mb-3">
                                <input type="password" v-model="passForm.confirm_password" class="form-control"
                                    placeholder="Confirm Password" required />
                                <!-- Validation Error -->
                                <small v-if="passwordMismatch" class="text-danger">
                                    Password and Confirm Password do not match.
                                </small>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-warning" :disabled="passwordMismatch">
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </fieldset>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            approvalloading: false,
            dbForm: {
                residence_id: this.$route.params.id,
                db_host: this.data.db_host || "localhost",
                db_name: this.data.db_name || "",
                db_user: this.data.db_user || "root",
                db_password: this.data.db_password || "",
            },
            userForm: {
                residence_id: this.$route.params.id,
                role_id: "",
                name: "",
                email: "",
                password: ""
            },
            passForm: {
                id: "",
                residence_id: this.$route.params.id,
                password: "",
                confirm_password: ""
            },
            errors: {}
        };
    },
    computed: {
        // Password Confirm Validation
        passwordMismatch() {
            return (
                this.passForm.password &&
                this.passForm.confirm_password &&
                this.passForm.password !== this.passForm.confirm_password
            );
        }
    },
    props: { data: Object, form: Object },
    methods: {
        submitChangePassword() {
            if (this.passwordMismatch) {
                return; // confirm না মিললে submit হবে না
            }
            axios.post('/residence/changepass', this.passForm)
                .then(res => {
                    this.$toast(
                        res.data.message,
                        'success'
                    );
                    const modalEl = document.getElementById("changePassModal");
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    modal.hide();
                })
                .catch(err => {
                    console.error(err);
                });
        },

        validateUserForm() {
            this.errors = {};

            if (!this.userForm.role_id) this.errors.role_id = "Role is required.";
            if (!this.userForm.name) this.errors.name = "Full name is required.";

            // Email validation
            if (!this.userForm.email) {
                this.errors.email = "Email is required.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userForm.email)) {
                this.errors.email = "Enter a valid email address.";
            }

            if (!this.userForm.password) this.errors.password = "Password is required.";

            // যদি error না থাকে তাহলে submit হবে
            if (Object.keys(this.errors).length === 0) {
                this.submitAction("newuser", this.userForm);
                // modal বন্ধ করার জন্য bootstrap
                const modalEl = document.getElementById("newUserModal");
                const modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();
            }
        },
        submitForm() {
            this.approvalloading = true;
            axios.post("residence-approved", this.dbForm)
                .then(() => {
                    this.$emit("submitted");
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    this.approvalloading = false;
                });
        },
        submitAction(action, data) {
            axios.post(`residence/${action}`, data).then(() => {
                this.$emit("submitted");
            });
        },
        fetchDBInfo() {
            this.dbForm.db_host = this.data.db_host;
            this.dbForm.db_name = this.data.db_name;
            this.dbForm.db_user = this.data.db_user;
            this.dbForm.db_password = this.data.db_password;
        }
    },
    created() {
        setTimeout(() => {
            this.fetchDBInfo(); // শুধু একবার 5 সেকেন্ড পরে কল হবে
        }, 5000);
    },
};
</script>
