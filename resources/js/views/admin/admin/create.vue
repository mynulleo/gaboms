<template>
    <create-form @onSubmit="submit">
        <div class="col-lg-3">
            <div class="row g-3">
                <File
                    title="Profile"
                    field="data.original_profile"
                    mime="img"
                    fileClassName="file2"
                    accept=".jpg, .jpeg, .png"
                    :showCrop="true"
                    :vHeight="
                        $root.media_validators?.profile?.min_height ?? 600
                    "
                    :vWidth="$root.media_validators?.profile?.min_width ?? 600"
                    :vSizeInKb="
                        $root.media_validators?.profile?.max_size ?? 5000
                    "
                    col="12"
                />
                <GlobalCrop
                    field="data.original_profile"
                    v-on:update:modelValue="data.original_profile = $event"
                    :image="profile.original_profile"
                    :aspectRatio="{
                        aspectRatio:
                            ($root.media_validators?.profile?.min_width ??
                                600) /
                            ($root.media_validators?.profile?.min_height ??
                                600),
                    }"
                    :minWidth="
                        $root.media_validators?.profile?.min_width ?? 600
                    "
                    :minHeight="
                        $root.media_validators?.profile?.min_height ?? 600
                    "
                ></GlobalCrop>
            </div>
        </div>
        <div class="col-lg-9">
            <div class="row g-3">
                <Input
                    v-model="data.name"
                    field="data.name"
                    title="Name"
                    :req="true"
                />
                <Input
                    v-if="!$route.params.id"
                    v-model="data.email"
                    field="data.email"
                    title="Email"
                    :req="true"
                />
                <Input
                    v-model="data.password"
                    field="data.password"
                    title="Password"
                    type="password"
                    :req="true"
                />
                <Select
                    title="Role"
                    field="data.role_id"
                    :req="true"
                    v-model="data.role_id"
                    label="name"
                    :reduce="(obj) => obj.id"
                    :options="extraData.roles"
                    placeholder="--Select One--"
                    :closeOnSelect="true"
                />

                <Input
                    v-model="data.mobile"
                    field="data.mobile"
                    title="Mobile"
                />

                <Switch
                    col="2 col-lg-3 col-xxl-2 col-md-3"
                    v-model="data.status"
                    on-label="Active"
                    off-label="Deactive"
                    :req="true"
                >
                </Switch>

                <div
                    class="col-xxl-5 col-xl-7 col-lg-8 col-sm-12 col-md-8 ms-auto"
                    v-if="data.id"
                >
                    <div class="form-group">
                        <label class="form-label opacity-0">
                            Block <sup class="text-danger">*</sup>
                        </label>
                        <div
                            class="check_box block_admin_check_box align-items-center"
                        >
                            <div class="form-check ps-0">
                                <label
                                    class="form-check-label fs-4"
                                    for="flexCheckChecked1"
                                >
                                    Do you want to block?
                                </label>
                            </div>
                            <label class="content">
                                <input
                                    class="opacity-0"
                                    checked="checked"
                                    type="checkbox"
                                    v-model="data.block"
                                />

                                <svg
                                    v-if="data.block"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="lock-open"
                                >
                                    <path
                                        d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                                    ></path>
                                </svg>

                                <svg
                                    v-else
                                    viewBox="0 0 576 512"
                                    height="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="lock"
                                >
                                    <path
                                        d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"
                                    ></path>
                                </svg>
                            </label>
                            <div class="action">
                                <span v-if="data.block" class="deactive"
                                    >Blocked</span
                                >
                                <span v-else class="active">Unblocked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </create-form>
</template>

<script>
const model = "admin";

import { EventBus } from "../../../event-bus.js";

export default {
    data() {
        return {
            page_title: "",
            model: model,
            data: {
                bug: "",
                profile: "",
                role_id: null,
                status: "active",
                role_id: 1,
            },
            profile: {},
            extraData: {
                roles: [],
            },
        };
    },
    provide() {
        return {
            validate: this.validation,
            data: () => this.data,
            image: this.profile,
        };
    },
    methods: {
        submit: function (e) {
            this.$validate().then((res) => {
                const error = this.validation.countErrors();

                if (error > 0) {
                    console.log(this.validation.allErrors());
                    this.$toast(
                        "You need to fill " +
                            error +
                            " more empty mandatory fields",
                        "warning"
                    );
                }

                var form = document.getElementById("form");
                var formData = new FormData(form);
                formData.append("role_id", this.data.role_id);
                formData.append(
                    "profile_base64",
                    this.data.original_profile ?? null
                );
                formData.append(
                    "profile_resize_value",
                    this.$root.media_validators?.profile?.resize_value ?? ""
                );
                formData.append("status", this.data.status);
                formData.append("block", this.data.block);

                if (res) {
                    if (this.data.id) {
                        this.update(this.model, formData, this.data.id, true);
                    } else {
                        this.store(this.model, formData);
                    }
                }
            });
        },
        emittOn() {
            EventBus.emit("server");
        },
        bindEvents() {
            EventBus.on(
                "server",
                function () {
                    console.log("Data", this.data);
                }.bind(this)
            );
        },
    },
    mounted() {
        this.bindEvents();
    },
    created() {
        if (this.$route.params.id) {
            this.page_title = "Admin Edit";
            axios.get(`${this.model}/${this.$route.params.id}`).then((res) => {
                this.data = res.data;
                this.data.block = this.data.block == 1 ? true : false;
            });
        } else {
            this.page_title = "Admin Create";
            this.get_sorting("Admin");
        }
        this.get_paginate("role", { allData: true }, "roles");

        this.getMediaValidators("Admin");
    },
    validators: {
        "data.name": function (value = null) {
            return Validator.value(value).required("Name is required");
        },
        "data.email": function (value = null) {
            if (!this.$route.params.id) {
                return Validator.value(value)
                    .required("Email is required")
                    .email();
            }
        },
        "data.role_id": function (value = null) {
            return Validator.value(value).required("Role is required");
        },
        "data.password": function (value = null) {
            if (this.$route.params.id) {
                return Validator.value(value).minLength(6);
            } else {
                return Validator.value(value)
                    .required("Password is required")
                    .minLength(6);
            }
        },
        "data.mobile": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("01+[0-9+-]*$", "Must start with 01.")
                .minLength(11)
                .maxLength(11);
        },
        "data.status": function (value = null) {
            return Validator.value(value).required("Status is required");
        },
    },
};
</script>
