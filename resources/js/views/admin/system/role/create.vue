<template>
    <create-form @onSubmit="submit">
        <Fieldset>
            <template v-slot:name>Primary Info</template>
            <template v-slot:content>
                <Input v-model="data.name" field="data.name" title="Name" :req="true" />

                <!-- <Radio v-model="data.status" field="data.status" title="Status" :list="[
                    { value: 'active', title: 'Active' },
                    { value: 'deactive', title: 'Deactive' },
                ]" :req="true" col="2" /> -->
                <Switch v-model="data.status" field="data.status" title="Status" on-label="Active" off-label="Deactive"
                    :req="true">
                </Switch>
            </template>
        </Fieldset>
        <Fieldset>
            <template v-slot:name>Permission Setting</template>
            <template v-slot:content>
                <p class="p-3 d-flex">
                    <input type="checkbox" value="1" v-model="checkAll" class="me-2" style="width: 20px;" />
                    <strong>All</strong>
                </p>
                <table v-if="extraData.permissions" border="1" class="table border table-hover">
                    <tr v-for="(perm, index) in extraData.permissions" :key="index">
                        <td class="controller" style="vertical-align: middle">
                            <div>
                                <input type="checkbox" v-model="perm.selected" @change="togglePermission(perm)"
                                    class="me-2" style="width: 15px;" />
                                <b>{{ perm.name.replace("Controller", "") }}</b>
                            </div>
                        </td>
                        <td class="action-wraper">
                            <div class="row">
                                <div v-for="(process, index2) in perm.children" :key="index2" class="col-3 actions">
                                    <label class="text-capitalize">
                                        <input type="checkbox" :value="process.id" v-model="data.permissions" />
                                        {{ $filter.capitalize(process.name) }}
                                    </label>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </template>

        </Fieldset>
        <!-- <legend class="" style="font-size: 1.2rem">
          <p class="p-0 m-0">

            <span class="float-right pl-2">
              <input type="checkbox" value="1" v-model="checkAll" />
              <small>All</small>
            </span>
          </p>
        </legend> -->



    </create-form>
</template>

<script>
const model = "role";

export default {
    data() {
        return {

            page_title:"",
            model: model,
            checkAll: null,
            data: { status: "active", permissions: [] },
            extraData: {
                permissions: [],
            },
            errors: {},
        };
    },
    provide() {
        return {
            validate: this.validation,
        };
    },
    watch: {
        /* checkAll: function (val, oldval) {
            this.data.permissions = [];
            if (val) {
                this.extraData.permissions.forEach((permission) => {
                    permission.children.forEach((process) => {
                        this.data.permissions.push(process.id);
                    });
                });
            }
        }, */
        checkAll: function (val, oldval) {
            this.data.permissions = [];
            if (val) {
                this.extraData.permissions.forEach((permission) => {
                    permission.selected = true;
                    permission.children.forEach((process) => {
                        this.data.permissions.push(process.id);
                    });
                });
            } else {
                this.extraData.permissions.forEach((permission) => {
                    permission.selected = false;
                });
            }
        },
    },
    methods: {
        submit: function () {
            const error = this.validation.countErrors();
            this.$validate().then((res) => {
                if (error > 0) {
                    console.log(this.validation.allErrors());
                    this.$toast(
                        "You need to fill " + error + " more empty mandatory fields",
                        "warning"
                    );
                }

                if (res) {
                    if (this.data.id) {
                        this.update(this.model, this.data, this.data.id);
                    } else {
                        this.store(this.model, this.data);
                    }
                }
            });
        },

        // module wise permission
        togglePermission(permission) {
            if (permission.selected) {
                permission.children.forEach((process) => {
                    if (!this.data.permissions.includes(process.id)) {
                        this.data.permissions.push(process.id);
                    }
                });
            } else {
                permission.children.forEach((process) => {
                    this.data.permissions = this.data.permissions.filter(
                        (id) => id !== process.id
                    );
                });
            }
        },

    },
    created() {
        if (this.$route.params.id) {
            this.get_data(`${this.model}/${this.$route.params.id}`);
            this.page_title = "Role Edit";
        } else {
            // this.setBreadcrumbs(this.model, "create");
            this.page_title = "Role Create";
        }
        this.get_paginate("get-permissions", { allData: true }, "permissions");
    },

    // ================== validation rule for form ==================
    validators: {
        "data.name": function (value = null) {
            return Validator.value(value).required("Name is required");
        },
    },
};
</script>
