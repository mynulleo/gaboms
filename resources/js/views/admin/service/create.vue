<template>
    <create-form @onSubmit="submit">
        <div class="row g-3">
            <Input v-model="data.title" field="data.title" :req="true" col="3" title="Title" />
            <SwitchBoolean v-model="data.auto_invoice" field="data.auto_invoice" title="Auto Invoice" on-label="Yes"
                off-label="No" :req="true" col="3"></SwitchBoolean>

            <Select title='Module' v-model='data.module' field='data.module' label='name' v-if="data.auto_invoice"
                :reduce='(obj) => obj.value' :options='$root.global.service_modules' col="4"
                placeholder='--Select One--' :closeOnSelect='true' :required='false' />

            <Textarea v-model="data.description" field="data.description" title="Description" col="12"></Textarea>
        </div>
        <Input v-model="data.sorting" field="data.sorting" name="sorting" title="Sorting" type="number" col="2"
            :req="true" />
        <Switch v-model="data.status" field="data.status" title="status" on-label="Active" off-label="Deactive"
            :req="true"></Switch>
    </create-form>
</template>

<script>
import Editor from "../../../components/Form/CKEditor";
const model = "service";

export default {
    components: { Editor },
    data() {
        return {
            model: model,
            page_title: "",
            data: {
                auto_invoice: 0,
                sorting: 0,
                status: "active",
                meta_tag: []
            },
            image: { image: "", image_small: "" },
        };
    },

    provide() {
        return {
            validate: this.validation,
            data: () => this.data,
            image: this.image,
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
                    var form = document.getElementById("form");
                    var formData = new FormData(form);

                    formData.append("description", this.data.description);
                    formData.append("auto_invoice", this.data.auto_invoice);
                    formData.append("module", this.data.module);
                    formData.append("status", this.data.status);

                    if (this.data.id) {
                        this.update(this.model, formData, this.data.id, true);
                    } else {
                        this.store(this.model, formData);
                    }
                }
            });
        },
    },
    created() {
        if (this.$route.params.id) {
            this.page_title = this.headline(this.model) + " Edit";
            this.get_data(`${this.model}/${this.$route.params.id}`);
        } else {
            this.get_sorting("Service");

            this.page_title = this.headline(this.model) + " Create";
        }
    },

    validators: {
        "data.title": function (value = null) {
            return Validator.value(value)
                .maxLength(191)
                .required("Title is required");
        },
        "data.module": function (value = null) {
            var vm = this;
            if (vm.data.auto_invoice) {
                return Validator.value(value).required("Module " + vm.data.auto_invoice + "is required");
            }
        },
        "data.sorting": function (value = null) {
            return Validator.value(value).required("Sorting is required");
        }

    },
};
</script>
