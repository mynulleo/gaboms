import { mapState, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState("inherit", ["inherit"]),
    },
    methods: {
        /**
         *
         * @param {string} url
         * @param {string} params
         * @param {bool} allData
         */
        get_paginate(url, params = {}, allData = null, isStartLoader = true) {
            if (isStartLoader === true) {
                this.$root.spinner = true;
                // this.$root.tableSpinner = true;
            }

            params.page = params.page ?? 1;

            axios
                .get(url, {
                    params: params,
                })
                .then((res) => {
                    if (isStartLoader === true) {
                        setTimeout(() => {
                            this.$root.spinner = false;
                            this.$root.tableSpinner = false;
                        }, 500);
                    }

                    if (allData) {
                        this.extraData[allData] = res.data;
                    } else {
                        this.table["datas"] = res.data.data;
                        this.table["meta"] = res.data.meta;
                        this.table["links"] = res.data.links;
                    }
                })
                .catch((error) => {
                    if (isStartLoader === true) {
                        this.$root.spinner = false;
                        this.$root.tableSpinner = false;
                    }
                });
        },

        /**
         *
         * @param {string} url
         * @param {string} dataVar
         */
        get_data(url, dataVar = null) {
            this.$root.spinner = true;
            axios
                .get(url)
                .then((res) => {
                    if (dataVar) {
                        this.obj[dataVar] = res.data;
                    } else {
                        this.data = res.data;
                    }
                    setTimeout(() => (this.$root.spinner = false), 200);
                })
                .catch((error) => (this.$root.spinner = false));
        },

        /**
         *
         * @param {string} method
         * @param {string} url
         * @param {object} dataObj
         * @returns
         */
        callApi(method, url, dataObj = null, enableSpinner = true) {
            if (enableSpinner === true) {
                this.$root.spinner = true;
            }

            try {
                return axios({
                    method: method,
                    url: url,
                    data: dataObj,
                });
            } catch (e) {
                return e.response;
            }
        },

        /**
         *
         * @param {string} namespace
         * @returns
         */
        get_sorting(namespace) {
            try {
                this.$root.spinner = true;
                axios
                    .get("/get-last-sorting", {
                        params: {
                            model: namespace,
                        },
                    })
                    .then((res) => {
                        if (res.data) {
                            this.data["sorting"] = res.data;
                        }
                    })
                    .catch((error) => {})
                    .finally(() => {
                        this.$root.spinner = false;
                    });
            } catch (e) {
                this.$root.spinner = false;
                return e.response;
            }
        },

        /**
         *
         * @param {string} model_name
         * @param {string} data
         * @param {string} redirect
         * @param {string} params
         * @param {bool} reload
         */
        store(model_name, data, redirect = null, params = null, reload = true) {
            this.$root.validation_errors = {};
            this.$root.submit = true;
            axios
                .post("/" + model_name, data)
                .then((res) => {
                    if (res.status == 201) {
                        // if (reload) {
                        //     window.location.reload();
                        // }
                        this.$toast(res.data.message, "success");
                    } else if (res.status == 202) {
                        this.$toast(res.data.message, "error");
                    } else if (res.status == 203) {
                        this.$toast(res.data.message, "warning");
                    }

                    if (!this.inherit) {
                        let url = redirect ? redirect : model_name + ".index";
                        if (params) {
                            this.$router.push({
                                name: url,
                                params: {
                                    id: params,
                                },
                            });
                            return;
                        }
                        this.$router.push({
                            name: url,
                        });
                    } else {
                        this.data = {
                            status: "active",
                        };
                    }
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        $("#validateModal").modal("show");

                        console.log(error.response.data.errors);
                        // Laravel validation error
                        if (error.response.data.errors) {
                            this.$root.validation_errors =
                                error.response.data.errors;
                        }

                        // Excel import error
                        if (error.response.data.exception_errors) {
                            this.$root.exception_errors =
                                error.response.data.exception_errors;
                        }

                        if (error.response.data.exception) {
                            this.$root.exception_errors =
                                error.response.data.exception;
                        } else if (error.response?.data?.message) {
                            this.$root.exception_errors =
                                error.response.data.message;
                        } else {
                            this.$root.validation_errors =
                                error.response.data.errors || {};
                        }

                        this.$toast(
                            "You need to fill empty mandatory fields",
                            "warning",
                        );
                    }
                })
                .then((alw) =>
                    setTimeout(() => (this.$root.submit = false), 100),
                );
        },

        /**
         *
         * @param {string} model_name
         * @param {string} data
         * @param {int} id
         * @param {bool} image
         * @param {string} redirect
         * @param {string} params
         */
        update(
            model_name,
            data,
            id,
            image = null,
            redirect = null,
            params = null,
        ) {
            this.$root.validation_errors = {};
            this.$root.submit = true;

            if (image) {
                data.append("_method", "put");
                axios
                    .post("/" + model_name + "/" + id, data)
                    .then((res) => {
                        if (res.status == 201) {
                            this.$toast(res.data.message, "success");
                        } else if (res.status == 202) {
                            this.$toast(res.data.message, "error");
                        } else if (res.status == 203) {
                            this.$toast(res.data.message, "warning");
                        }

                        setTimeout(
                            () =>
                                $(".update_item" + id).addClass(
                                    "sorting-success",
                                ),
                            1000,
                        );
                        setTimeout(
                            () =>
                                $(".update_item" + id).removeClass(
                                    "sorting-success",
                                ),
                            6000,
                        );

                        let url = redirect ? redirect : model_name + ".index";

                        // if (params) {
                        //     this.$router.push({
                        //         name: url,
                        //         params: {
                        //             id: params
                        //         }
                        //     });
                        //     return;
                        // }

                        this.$router.back();

                        /* this.$router.push({
                            name: url,
                            query: {
                                page: this.$route.query.page,
                                id: id
                            },
                        }) */
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
                                "warning",
                            );
                        }
                    })
                    .then((alw) =>
                        setTimeout(() => (this.$root.submit = false), 400),
                    );
            } else {
                axios
                    .put("/" + model_name + "/" + id, data)
                    .then((res) => {
                        if (res.status == 201) {
                            this.$toast(res.data.message, "success");
                        } else if (res.status == 202) {
                            this.$toast(res.data.message, "error");
                        } else if (res.status == 203) {
                            this.$toast(res.data.message, "warning");
                        }

                        setTimeout(
                            () =>
                                $(".update_item" + id).addClass(
                                    "sorting-success",
                                ),
                            1000,
                        );
                        setTimeout(
                            () =>
                                $(".update_item" + id).removeClass(
                                    "sorting-success",
                                ),
                            6000,
                        );

                        let url = redirect ? redirect : model_name + ".index";

                        // if (params) {
                        //     console.log("params", params);
                        //     this.$router.push({
                        //         name: url,
                        //         params: {
                        //             id: params
                        //         }
                        //     });

                        //     return;
                        // }

                        this.$router.back();

                        /* this.$router.push({
                            name: url,
                            query: {
                                page: this.$route.query.page,
                                id: id
                            },
                        }) */
                    })
                    .catch((error) => {
                        if (error.response.status === 422) {
                            $("#validateModal").modal("show");
                            if (error.response.data.exception) {
                                this.$root.exception_errors =
                                    error.response.data.exception;
                            } else if (error.response?.data?.message) {
                                this.$root.exception_errors =
                                    error.response.data.message;
                            } else {
                                this.$root.validation_errors =
                                    error.response.data.errors || {};
                            }
                            this.$toast(
                                "You need to fill empty mandatory fields",
                                "warning",
                            );
                        }
                    })
                    .then((alw) =>
                        setTimeout(() => (this.$root.submit = false), 400),
                    );
            }
        },

        /**
         *
         * @param {string} model_name
         * @param {int} id
         * @param {string} search_data
         */
        destroy_data(model_name, id, search_data = null) {
            this.$root.tableSpinner = true;
            let url = model_name + "/" + id;
            axios
                .delete(url)
                .then((res) => {
                    this.scrollTop(0, 0);
                    if (search_data) {
                        this.get_paginate(model_name, search_data);
                    }

                    if (res.status == 201) {
                        this.$toast(res.data.message, "success");
                        return true;
                    } else if (res.status == 202) {
                        this.$toast(res.data.message, "error");
                    }
                })
                .catch((error) => console.log(error))
                .then((alw) =>
                    setTimeout(() => (this.$root.tableSpinner = false), 200),
                );
        },

        /**
         *
         * @param {string} model
         */
        getRouteName(model, $view = true, $edit = true, $delete = true) {
            if ($view === true) {
                this.table.routes["view"] = model + ".show";
            }

            if ($edit === true) {
                this.table.routes["edit"] = model + ".edit";
            }

            if ($delete === true) {
                this.table.routes["destroy"] = model + ".destroy";
            }
        },

        getMediaValidators(modelName) {
            this.$root.media_validators = {};
            axios
                .get(`mediaValidator/${modelName}/getFields`)
                .then((response) => {
                    this.$root.media_validators = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getHelpInfos(modelName, pageType) {
            this.$root.helpInfo = {};
            axios
                .get(`helpInfo/${modelName}/${pageType}`)
                .then((response) => {
                    this.$root.helpInfo = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
