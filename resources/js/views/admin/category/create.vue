<template>
    <create-form @onSubmit="submit">
        <Select field="data.module_name" :req="true" title="Module name" col="4" v-model="data.module_name" label="name"
            :reduce="(obj) => obj.value" :options="modules" placeholder="--Select One--" :closeOnSelect="true" />

        <Input v-model="data.title" field="data.title" title="Title" :req="true" col="4 col-xl-3" />
        <Input title="Sorting" field="data.sorting" v-model="data.sorting" :req="true" col="4 col-xl-3" type="number" />
        <Switch v-model="data.status" on-label="Active" off-label="Deactive" :req="true"></Switch>
    </create-form>
</template>

<script>
const model = "category";

export default {
    computed: {
        modules() {
            const modules = [];
            if (Object.keys(this.categoriesModuleNames).length > 0) {
                this.categoriesModuleNames.forEach(function (type) {
                    modules.push({
                        name: type.name,
                        value: type.value,
                    });
                });
            }
            return modules;
        },
    },
    data() {
        return {
            page_title: "Category",
            model: model,
            data: { status: "active", sorting: 0 },
        };
    },
    provide() {
        return {
            validate: this.validation,
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
                    return false;
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
    },
    created() {
        if (this.$route.params.id) {
            this.page_title = "Category Edit";
            this.setBreadcrumbs(this.model, "edit");
            this.get_data(`${this.model}/${this.$route.params.id}`);
        } else {
            this.page_title = "Category Create";
            this.get_sorting(this.ucfirst(this.model));
            this.setBreadcrumbs(this.model, "create");
        }
    },
    validators: {
        "data.module_name": function (value = null) {
            return Validator.value(value)
                .required("Module Name is required")
                .maxLength(190);
        },
        "data.title": function (value = null) {
            return Validator.value(value)
                .required("Title is required")
                .maxLength(190);
        },
        "data.sorting": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Sorting is required");
        },
        "data.status": function (value = null) {
            return Validator.value(value).required("Status is required");
        },
    },
};
</script>
