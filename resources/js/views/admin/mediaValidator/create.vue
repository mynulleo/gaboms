<template>
    <create-form @onSubmit="submit">
        <Input v-model="data.model_name" field="data.model_name" title="Model Name" required />
        <Input v-model="data.field_name" field="data.field_name" title="Field Name" required />
        <Select field="data.field_type" title="Field Type" v-model="data.field_type" label="name"
            :reduce="(obj) => obj.value" :options="field_types" placeholder="--Select One--" :closeOnSelect="true"
            required />

        <Input v-model="data.max_size" field="data.max_size" title="Max Size (KB)" required />

        <template v-if="data.field_type === 'image'">
            <Input v-model="data.min_width" field="data.min_width" title="Min Width (PX)" required />

            <Input v-model="data.min_height" field="data.min_height" title="Min Height (PX)" required />

            <x-multiple-select v-model="data.resize_value" field="data.resize_value"
                title="Resize Value (Width x Height) - Set big to small size"
                placeholder="Type & press enter. Example: 900x600." required />
        </template>

        <Switch v-model="data.status" field="data.status" title="Status" on-label="Active" off-label="Deactive"
            required>
        </Switch>
    </create-form>
</template>

<script>
const model = "mediaValidator";

export default {
    data() {
        return {
            model: model,
            page_title: "",
            data: {
                model_name: "",
                field_name: "",
                field_type: "",
                max_size: "",
                min_width: "",
                min_height: "",
                resize_value: [],
            },
            field_types: [
                { name: "File", value: "file" },
                { name: "Image", value: "image" },
            ],
        };
    },

    provide() {
        return {
            validate: this.validation,
        };
    },

    methods: {
        resetImageFields() {
            this.data.min_width = "";
            this.data.min_height = "";
            this.data.resize_value = [];
        },

        submit: function (e) {
            this.$validate().then((res) => {
                const error = this.validation.countErrors();

                if (error > 0) {
                    this.$toast(
                        "You need to fill " +
                        error +
                        " more empty mandatory fields",
                        "warning"
                    );
                    return false;
                }

                if (res) {
                    if (this.data.field_type !== "image") {
                        this.resetImageFields();
                    }

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
            this.page_title = this.headline(this.model) + " Edit";
            this.get_data(`${this.model}/${this.$route.params.id}`);
        } else {
            this.page_title = this.headline(this.model) + " Create";
        }
    },

    validators: {
        "data.model_name": function (value = null) {
            return Validator.value(value).required("Model Name is required");
        },

        "data.field_name": function (value = null) {
            return Validator.value(value).required("Field Name is required");
        },

        "data.field_type": function (value = null) {
            return Validator.value(value).required("Field Type is required");
        },

        "data.max_size": function (value = null) {
            return Validator.value(value)
                .required("Max Size is required")
                .digit()
                .minLength(1);
        },

        "data.min_width, data.field_type": function (
            minWidth = null,
            fieldType = null
        ) {
            if (fieldType === "image") {
                return Validator.value(minWidth)
                    .required("Min Width is required").digit().minLength(1);
            } else {
                return Validator.value(minWidth);
            }
        },

        "data.min_height, data.field_type": function (
            minHeight = null,
            fieldType = null
        ) {
            if (fieldType === "image") {
                return Validator.value(minHeight)
                    .required("Min Height is required")
                    .digit()
                    .minLength(1);
            } else {
                return Validator.value(minHeight);
            }
        },

        "data.resize_value, data.field_type": function (
            resizeValue = null,
            fieldType = null
        ) {
            if (fieldType === "image") {
                return Validator.value(resizeValue).required(
                    "Resize Value is required"
                );
            } else {
                return Validator.value(resizeValue);
            }
        },
    },
};
</script>
