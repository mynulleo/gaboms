<template>
    <create-form @onSubmit="submit">
        <div class="col-xl-2 col-lg-3">
            <File title="File" field="data.file" mime=".pdf" fileClassName="data.file" v-if="data.type == 'file'"
                :req="true" col="12" vSizeInKb="10240" vType="pdf" />
        </div>
        <div :class="data.type !== 'file' ? 'col-xl-12 col-xl-9' : 'col-xl-10 col-xl-9'
            ">
            <div class="row g-3">
                <Select field="data.type" title="Notice Type" v-model="data.type" label="name"
                    :reduce="(obj) => obj.value" :options="types" placeholder="--Select One--" :closeOnSelect="true"
                    :req="true" col="4 col-xl-4" />
                <Select field="data.category_id" :req="true" title="Category" v-model="data.category_id" label="title"
                    :reduce="(obj) => obj.id" :options="categories" placeholder="--Select One--" :closeOnSelect="true"
                    col="4 col-xl-4" />
                <Input v-model="data.title" field="data.title" title="Title" :req="true" col="4 col-sm-4 col-md-4" />
                <date-picker id="date1" field="data.notice_date" name="notice_date" v-model="data.notice_date"
                    title="Start Date" placeholder="dd/mm/yyyy" :req="true" col="4 col-xl-3"></date-picker>
                <date-picker id="date2" field="data.notice_end" name="notice_end" v-model="data.notice_end"
                    title="End Date" placeholder="dd/mm/yyyy" col="4 col-xl-3"></date-picker>
                <editor v-if="data.type == 'content'" v-model="data.description" field="data.description" title="Description" col="12" :spinner="false"/>
                <Input title="Sorting" field="data.sorting" v-model="data.sorting" :req="true" col="4 col-xl-3"
                    type="number" />
                <Switch v-model="data.status" on-label="Active" off-label="Deactive" :req="true"></Switch>
            </div>
        </div>
    </create-form>
</template>

<script>
const model = "notice";
import { mapState } from "vuex";
import Editor from "../../../../components/Form/CKEditor.vue";

export default {
    components: { Editor },
    computed: {
        ...mapState("category", ["categories"]),
    },
    data() {
        return {
            page_title: "",
            model: model,
            data: { file: "", status: "active" },
            image: {},
            types: [
                { name: "File", value: "file" },
                { name: "Content", value: "content" },
            ],
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
                        "You need to fill " + error + " more empty mandatory fields",
                        "warning"
                    );
                    return false;
                }

                if (res) {
                    var form = document.getElementById("form");
                    var formData = new FormData(form);

                    const description = this.data.description
                        ? this.data.description
                        : "";

                    formData.append("category_id", this.data.category_id);
                    formData.append("description", description);
                    formData.append("type", this.data.type);
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
            this.get_data(`${this.model}/${this.$route.params.id}`);
            this.page_title = "Notice Edit";

        } else {
            this.get_sorting("Website-Notice");
            this.page_title = "Notice Create";

        }
        this.$store.dispatch("category/getCategory", { transfer: "Notice" });
    },
    validators: {
        "data.title": function (value = null) {
            return Validator.value(value)
                .maxLength(191)
                .required("Title is required");
        },
        "data.notice_date": function (value = null) {
            return Validator.value(value).required("Notice date is required");
        },
        "data.notice_end": function (value = null) {
            const that = this;
            return Validator.value(value).custom(function () {
                if (!Validator.isEmpty(value) && that.data.notice_end) {
                    const end = new Date(value);
                    const start = new Date(that.data.notice_date);

                    if (start > end) {
                        return "End date must higher";
                    }
                }
            });
        },
        "data.category_id": function (value = null) {
            return Validator.value(value).required("Category is required");
        },
        "data.type": function (value = null) {
            return Validator.value(value).required(" Notice Type is required");
        },
        "data.file": function (value = null) {
            if (this.data.type == "file") {
                return Validator.value(value).required("File is required");
            } else {
                this.validation.errors.forEach((e, i) => {
                    if (e.field == "data.file") {
                        this.validation.errors.splice(i, 1);
                    }
                });
            }
        },
        "data.description": function (value = null) {
            if (this.data.type == "content") {
                return Validator.value(value).required("Description is required");
            } else {
                this.validation.errors.forEach((e, i) => {
                    if (e.field == "data.description") {
                        this.validation.errors.splice(i, 1);
                    }
                });
            }
        },
        "data.status": function (value = null) {
            return Validator.value(value).required("Status is required");
        },
        "data.sorting": function (value = null) {
            return Validator.value(value)
                .digit()
                .regex("^[0-9]*$")
                .required("Sorting is required");
        },
    },
};
</script>

<style scoped>
.border-red {
    border: 1px solid rgb(255 0 0);
}

.border-green {
    border: 1px solid rgb(25 135 84) !important;
}
</style>
