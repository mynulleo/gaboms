<template>
    <create-form>
        <template #custom_form>
            <div class="base_tabs">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link active"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="true"
                        >
                            <div class="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="svg_icon icon icon-tabler icons-tabler-outline icon-tabler-user-scan"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path
                                        d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                                    />
                                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                                    <path
                                        d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2"
                                    />
                                </svg>
                            </div>
                            <div class="text">
                                <h4 class="title">Profile Information</h4>
                            </div>
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                        >
                            <div class="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="svg_icon icon icon-tabler icons-tabler-outline icon-tabler-brand-samsungpass"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path
                                        d="M4 10m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                    />
                                    <path
                                        d="M7 10v-1.862c0 -2.838 2.239 -5.138 5 -5.138s5 2.3 5 5.138v1.862"
                                    />
                                    <path
                                        d="M10.485 17.577c.337 .29 .7 .423 1.515 .423h.413c.323 0 .633 -.133 .862 -.368a1.27 1.27 0 0 0 .356 -.886c0 -.332 -.128 -.65 -.356 -.886a1.203 1.203 0 0 0 -.862 -.368h-.826a1.2 1.2 0 0 1 -.861 -.367a1.27 1.27 0 0 1 -.356 -.886c0 -.332 .128 -.651 .356 -.886a1.2 1.2 0 0 1 .861 -.368h.413c.816 0 1.178 .133 1.515 .423"
                                    />
                                </svg>
                            </div>
                            <div class="text">
                                <h4 class="title">Change Password</h4>
                            </div>
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div
                        class="tab-pane fade active show"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabindex="0"
                    >
                        <div class="profile_page">
                            <div class="row g-3">
                                <div class="col-xxl-9 col-xl-8">
                                    <div class="card custom_v_z_index">
                                        <div class="card-body">
                                            <h4 class="card_title">
                                                Personal Information
                                            </h4>
                                            <form
                                                id="updateInfoForm"
                                                @submit.prevent="
                                                    updateInformation
                                                "
                                            >
                                                <div class="row g-2">
                                                    <Input
                                                        v-model="data.name"
                                                        field="data.name"
                                                        title="Name"
                                                        col="4 col-xl-4"
                                                    />
                                                    <v-select-container
                                                        title="Gender"
                                                    >
                                                        <v-select
                                                            v-model="
                                                                data.gender
                                                            "
                                                            label="name"
                                                            :reduce="
                                                                (obj) =>
                                                                    obj.value
                                                            "
                                                            :options="genders"
                                                            placeholder="--Select Gender--"
                                                            col="4 col-xl-4"
                                                            :closeOnSelect="
                                                                true
                                                            "
                                                        ></v-select
                                                    ></v-select-container>
                                                    <Input
                                                        v-model="data.mobile"
                                                        field="data.mobile"
                                                        title="Mobile"
                                                        col="4 col-xl-4"
                                                    />
                                                    <Input
                                                        v-model="data.email"
                                                        field="data.email"
                                                        title="Email"
                                                        col="4 col-xl-4"
                                                        type="email"
                                                        :disabled="
                                                            isEmailDisabled
                                                        "
                                                    />

                                                    <date-picker
                                                        id="birth_date"
                                                        field="data.birth_date"
                                                        name="birth_date"
                                                        v-model="
                                                            data.birth_date
                                                        "
                                                        title="Birth date"
                                                        placeholder="dd/mm/yyyy"
                                                        col="4 col-xl-4"
                                                    ></date-picker>
                                                    <div
                                                        class="col-xl-12 col-md-12"
                                                    >
                                                        <div class="form-group">
                                                            <label
                                                                class="form-label d-flex justify-content-between align-items-center gap-4"
                                                            >
                                                                <div
                                                                    class="lft"
                                                                >
                                                                    Description
                                                                </div>
                                                            </label>
                                                            <div
                                                                class="input-group position-relative"
                                                            >
                                                                <textarea
                                                                    v-model="
                                                                        data.description
                                                                    "
                                                                    field="data.description"
                                                                    title="Description"
                                                                    rows="6"
                                                                    class="textarea-control h-auto"
                                                                    placeholder="Write your description"
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- <textarea v-model="data.description" field="data.description"
                                                    title="Description" :req="true" col="12 col-xl-12" rows="6"
                                                    placeholder="Write your description" /> -->

                                                    <div class="col-lg-12">
                                                        <h4
                                                            class="card_title mt-3 mb-0"
                                                        >
                                                            Address Information
                                                        </h4>
                                                    </div>
                                                    <Input
                                                        v-model="data.address"
                                                        field="data.address"
                                                        title="Address"
                                                        col="8 col-xl-6"
                                                        placeholder="Enter your address"
                                                    />
                                                    <Input
                                                        v-model="data.city"
                                                        field="data.city"
                                                        title="City"
                                                        col="4 col-xl-6"
                                                        placeholder="Enter your city"
                                                    />
                                                    <Input
                                                        v-model="data.state"
                                                        field="data.state"
                                                        title="State"
                                                        col="8 col-xl-6"
                                                        placeholder="Enter your state"
                                                    />
                                                    <Input
                                                        v-model="data.zip_code"
                                                        field="data.zip_code"
                                                        title="Zip Code"
                                                        col="4 col-xl-6"
                                                        placeholder="Enter your zip code"
                                                    />

                                                    <div class="col-12">
                                                        <button
                                                            type="submit"
                                                            class="theme_btn"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Save Profile"
                                                            v-x-tooltip
                                                        >
                                                            Save Profile
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xxl-3 col-xl-4">
                                    <div class="profile_info">
                                        <div class="row g-3">
                                            <div class="col-md-6 col-xl-12">
                                                <div
                                                    class="card overflow-hidden custom_profile_image_upload"
                                                >
                                                    <div class="bg"></div>
                                                    <div class="card-body p-0">
                                                        <div
                                                            class="profile_image"
                                                        >
                                                            <div
                                                                class="image position-relative"
                                                            >
                                                                <File
                                                                    title=" "
                                                                    field="data.original_profile"
                                                                    mime="img"
                                                                    fileClassName="file2"
                                                                    accept=".jpg, .jpeg, .png"
                                                                    :showCrop="
                                                                        true
                                                                    "
                                                                    :vHeight="
                                                                        $root
                                                                            .media_validators
                                                                            ?.profile
                                                                            ?.min_height ??
                                                                        600
                                                                    "
                                                                    :vWidth="
                                                                        $root
                                                                            .media_validators
                                                                            ?.profile
                                                                            ?.min_width ??
                                                                        600
                                                                    "
                                                                    :vSizeInKb="
                                                                        $root
                                                                            .media_validators
                                                                            ?.profile
                                                                            ?.max_size ??
                                                                        5000
                                                                    "
                                                                    col="12"
                                                                />
                                                                <GlobalCrop
                                                                    field="data.original_profile"
                                                                    v-on:update:modelValue="
                                                                        data.original_profile =
                                                                            $event
                                                                    "
                                                                    :image="
                                                                        profile.original_profile
                                                                    "
                                                                    :aspectRatio="{
                                                                        aspectRatio:
                                                                            ($root
                                                                                .media_validators
                                                                                ?.profile
                                                                                ?.min_width ??
                                                                                600) /
                                                                            ($root
                                                                                .media_validators
                                                                                ?.profile
                                                                                ?.min_height ??
                                                                                600),
                                                                    }"
                                                                    :minWidth="
                                                                        $root
                                                                            .media_validators
                                                                            ?.profile
                                                                            ?.min_width ??
                                                                        600
                                                                    "
                                                                    :minHeight="
                                                                        $root
                                                                            .media_validators
                                                                            ?.profile
                                                                            ?.min_height ??
                                                                        600
                                                                    "
                                                                >
                                                                </GlobalCrop>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="profile_text text-center"
                                                        >
                                                            <h3 class="name">
                                                                {{
                                                                    data?.name ??
                                                                    ""
                                                                }}
                                                            </h3>
                                                            <p
                                                                class="designation"
                                                            >
                                                                {{
                                                                    data?.role
                                                                        ?.name ??
                                                                    ""
                                                                }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-xl-12">
                                                <div
                                                    class="card overflow-hidden"
                                                >
                                                    <div class="card-body">
                                                        <div
                                                            class="profile_description"
                                                        >
                                                            <h4
                                                                class="card_title mb-2"
                                                            >
                                                                About Me
                                                            </h4>
                                                            <p class="p_1">
                                                                {{
                                                                    data?.description ??
                                                                    ""
                                                                }}
                                                            </p>
                                                            <h4
                                                                class="card_title my-3"
                                                            >
                                                                Personal
                                                                Information
                                                            </h4>
                                                            <div
                                                                class="info_item d-flex align-items-center gap-3"
                                                            >
                                                                <div
                                                                    class="icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        data-bs-title="Email Address"
                                                                        v-x-tooltip
                                                                    >
                                                                        <path
                                                                            stroke="none"
                                                                            d="M0 0h24v24H0z"
                                                                            fill="none"
                                                                        />
                                                                        <path
                                                                            d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                                                                        />
                                                                        <path
                                                                            d="M3 7l9 6l9 -6"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div
                                                                    class="info"
                                                                >
                                                                    <h5
                                                                        class="title"
                                                                    >
                                                                        Email
                                                                        Address
                                                                    </h5>
                                                                    <p>
                                                                        {{
                                                                            data?.email ??
                                                                            ""
                                                                        }}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="info_item d-flex align-items-center gap-3"
                                                            >
                                                                <div
                                                                    class="icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-phone"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        data-bs-title="Phone"
                                                                        v-x-tooltip
                                                                    >
                                                                        <path
                                                                            stroke="none"
                                                                            d="M0 0h24v24H0z"
                                                                            fill="none"
                                                                        />
                                                                        <path
                                                                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div
                                                                    class="info"
                                                                >
                                                                    <h5
                                                                        class="title"
                                                                    >
                                                                        Phone
                                                                        Number
                                                                    </h5>
                                                                    <p>
                                                                        {{
                                                                            data?.mobile ??
                                                                            ""
                                                                        }}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="info_item d-flex align-items-center gap-3"
                                                            >
                                                                <div
                                                                    class="icon"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="24"
                                                                        height="24"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        data-bs-title="Location"
                                                                        v-x-tooltip
                                                                    >
                                                                        <path
                                                                            stroke="none"
                                                                            d="M0 0h24v24H0z"
                                                                            fill="none"
                                                                        />
                                                                        <path
                                                                            d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"
                                                                        />
                                                                        <path
                                                                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div
                                                                    class="info"
                                                                >
                                                                    <h5
                                                                        class="title"
                                                                    >
                                                                        Location
                                                                    </h5>
                                                                    <p>
                                                                        {{
                                                                            location
                                                                        }}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabindex="0"
                    >
                        <ChangePassword />
                    </div>
                </div>
            </div>
        </template>
    </create-form>
</template>

<script>
import ChangePassword from "../../../components/admin/ChangePassword.vue";

export default {
    components: {
        ChangePassword,
    },
    data() {
        return {
            page_title: "Edit Your Profile",
            model: "admin",
            isEmailDisabled: true,
            data: {},
            profile: {},
            genders: [
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
                { name: "Other", value: "other" },
            ],
        };
    },
    provide() {
        return {
            validate: this.validation,
            data: () => this.data,
            image: this.profile,
        };
    },

    computed: {
        location() {
            const address = this.data.address ? `${this.data.address}, ` : "";
            const city = this.data.city ? `${this.data.city}, ` : "";
            const state = this.data.state
                ? `${this.data.state}${
                      this.data.zip_code ? " - " + this.data.zip_code : ""
                  }`
                : "";
            const sortLocation = address + city + state;

            return _.replace(sortLocation, /, $/, "");
        },
    },

    methods: {
        updateInformation() {
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

                    let formData = this.data;
                    if (this.data.original_profile) {
                        formData.profile_base64 = this.data.original_profile;
                    }
                    formData.profile_resize_value =
                        this.$root.media_validators?.profile?.resize_value ??
                        "";
                    formData._method = "put";
                    formData.is_profile_route = "1";

                    axios
                        .post("profile", formData)
                        .then((res) => {
                            if (res.status == 201) {
                                this.$toast(res.data.message, "success");
                            } else if (res.status == 202) {
                                this.$toast(res.data.message, "error");
                            } else if (res.status == 203) {
                                this.$toast(res.data.message, "warning");
                            }

                            axios.get("/initialize-systems").then((res) => {
                                this.$store.dispatch(
                                    "global/setGlobal",
                                    res.data
                                );
                                this.$store.dispatch(
                                    "auth/loginStore",
                                    res.data
                                );
                            });
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
                        .finally(() => {
                            setTimeout(() => {
                                this.$root.submit = false;
                            }, 100);
                        });
                }
            });
        },
    },
    created() {
        this.data = this.user;
        this.getMediaValidators("Admin");
    },

    // ================== validation rule for form ==================
    validators: {
        "data.name": function (value = null) {
            return Validator.value(value).required("Name is required");
        },

        "data.mobile": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("01+[0-9+-]*$", "Must start with 01.")
                .minLength(11)
                .maxLength(15);
        },
    },
};
</script>
