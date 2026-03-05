<template>
    <create-form @onSubmit='submit'>
        <Input v-model='data.model_name' field='data.model_name' title='Model Name' :req="true" col="4" />

        <Select title='Page Type' v-model='data.page_type' field='data.page_type' label='name'
            :reduce='(obj) => obj.value' :options="page_type" placeholder='--Select One--' :closeOnSelect='true'
            :required='false' col="4" :req="true" />

        <Input title="Sorting" field="data.sorting" v-model="data.sorting" :req="true" col="3" type="number" />
        <editor v-model="data.description" title="Description" col="12" />

        <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive'
            :req='true'></Switch>

    </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'helpInfo';

export default {
    components: { Editor },
    data() {
        return {
            model: model,
            page_title: '',
            data: {
                status: 'active',
            },
            page_type: {},

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
                        'You need to fill ' + error + ' more empty mandatory fields',
                        'warning'
                    );
                    return false;
                }

                if (res) {
                    var form = document.getElementById('form'); var formData = new FormData(form);
                    if (this.data.description) {
                        formData.append("description", this.data.description);
                    }
                    formData.append('page_type', this.data.page_type);
                    formData.append('status', this.data.status);
                    if (this.data.id) {
                        this.update(this.model, formData, this.data.id, true);
                    } else {
                        this.store(this.model, formData);
                    }
                }
            });
        },

        getPageType() {
            this.page_type = [
                { name: 'Index Page', value: 'index' },
                { name: 'Create Page', value: 'create' },
                { name: 'View Page', value: 'view' }
            ];
        },

    },
    created() {
        this.getPageType();

        if (this.$route.params.id) {
            this.page_title = this.headline(this.model) + ' Edit';
            this.get_data(`${this.model}/${this.$route.params.id}`);
        } else {
            this.page_title = this.headline(this.model) + ' Create';
            this.get_sorting("HelpInfo");
        }
    },

    validators: {
        "data.model_name": function (value = null) {
            return Validator.value(value).required("Module Name is required");
        },
        "data.page_type": function (value = null) {
            return Validator.value(value).required("Page Type is required");
        },
    },
}

</script>
