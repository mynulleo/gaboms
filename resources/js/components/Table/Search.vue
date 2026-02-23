<template>
    <div class="input_select">
        <select class="form-select form-select-lg shadow-none">
            <option selected>Select</option>
            <option>Select One</option>
            <option>Select Two</option>
            <option>Select Three</option>
        </select>
    </div>
    <div class="search_box position-relative">
        <input type="text" placeholder="Search..." />
        <button
            class="search_btn position-absolute top-50 translate-middle-y bg-transparent border-0"
            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Search" v-x-tooltip
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
        </button>
        <button
            class="advance_filter"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Advance Search"
             v-x-tooltip
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M6 4v4" />
                <path d="M6 12v8" />
                <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M12 4v10" />
                <path d="M12 18v2" />
                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M18 4v1" />
                <path d="M18 9v11" />
            </svg>
        </button>
        <div class="advance_search_result">
            <slot name="search-field"></slot>
            <form
                @submit.prevent="$parent.search"
                v-if="$parent.default_search"
            >
                <div class="row g-3">
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">
                                    Company Name
                                    <sup class="text-danger">*</sup>
                                </div>
                            </label>
                            <div class="input-group position-relative">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">
                                    Company Name
                                    <sup class="text-danger">*</sup>
                                </div>
                            </label>
                            <div class="input-group position-relative">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">
                                    Company Name
                                    <sup class="text-danger">*</sup>
                                </div>
                            </label>
                            <div class="input-group position-relative">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">
                                    Company Name
                                    <sup class="text-danger">*</sup>
                                </div>
                            </label>
                            <div class="input-group position-relative">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">Currency</div>
                            </label>
                            <div class="input-group position-relative">
                                <select class="chosen">
                                    <option>--Select Currency--</option>
                                    <option>Taka</option>
                                    <option>USA Dollar</option>
                                    <option>USA Dollar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">Currency</div>
                            </label>
                            <div class="input-group position-relative">
                                <select class="chosen">
                                    <option>--Select Currency--</option>
                                    <option>Taka</option>
                                    <option>USA Dollar</option>
                                    <option>USA Dollar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">
                                    Company Name
                                    <sup class="text-danger">*</sup>
                                </div>
                            </label>
                            <div class="input-group position-relative">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-4 col-lg-6">
                        <div class="form-group">
                            <label
                                class="form-label d-flex justify-content-between align-items-center gap-4"
                            >
                                <div class="lft">
                                    Company Name
                                    <sup class="text-danger">*</sup>
                                </div>
                            </label>
                            <div class="input-group position-relative">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <button
                            type="submit"
                            class="theme_btn rounded-2 w-100 advance_search_btn"
                        >
                            Advance Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    inject: ["search_data", "fields_name"],
    data() {
        return {
            fields: [],
            modules: [
                { name: "Notice", value: "notice" },
                { name: "Events", value: "events" },
                { name: "News", value: "news" },
            ],
        };
    },
    provide() {
        return {
            validate: this.validation,
        };
    },
    methods: {
        clear() {
            console.log(this.search_data);
            for (const key in this.search_data) {
                if (this.search_data.hasOwnProperty(key)) {
                    this.search_data[key] = ""; // Set each property to an empty string
                }
            }
        },
        isVisible(search_data) {
            return (
                !!search_data?.field_name &&
                search_data.field_name !== "0" &&
                search_data.field_name !== ""
            );
        },
        transformObject() {
            let final = Object.keys(this.fields_name).map((key) => ({
                name: key.toLowerCase(),
                value: this.fields_name[key],
            }));

            final.splice(0, 1, { value: "--Select One--", name: 0 });
            return final;
        },
    },
    created() {
        this.fields = this.transformObject();
    },

    validators: {
        // "search_data.field_name": function (value = null) {
        //   return Validator.value(value).required("Field name is required");
        // },
    },
};
</script>
