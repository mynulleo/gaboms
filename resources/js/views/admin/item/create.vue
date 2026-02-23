<template>
  <create-form @onSubmit='submit'>
    <div class="col-md-2">
      <File title='Image' field='data.image' mime='img' col="12" fileClassName='data.image' :req='false' />
    </div>
    <div class="col-md-10">
      <div class="row g-3">
        <Select title='Category' v-model='data.category_id' field='data.category_id' label='title'
          :reduce='(obj) => obj.id' col="3" :options='categories' placeholder='--Select One--' :closeOnSelect='true'
          :required='true' />
        <Input v-model='data.title' field='data.title' title='Title' col="4" :req='true' />
        <Select title='Unit' v-model='data.unit_id' field='data.unit_id' label='title' :reduce='(obj) => obj.id' col="2"
          :options='units' placeholder='--Select One--' :closeOnSelect='true' :required='true' />
        <Input v-model='data.opening_rate' col="2" field='data.opening_rate' title='Opening Rate' :req='false' />
        <Input v-model='data.opening_qty' col="2" field='data.opening_qty' title='Opening Qty' :req='false' />
        <Textarea v-model='data.description' field='data.description' :required='false' title="Description" col="12" />

      </div>
    </div>
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>
import { get } from 'jquery';
import Editor from '../../../components/Form/CKEditor';

const model = 'item';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: { image: '', },
      image: {},
      categories: [],
    };
  },

  provide() {
    return {
      validate: this.validation,
      data: () => this.data, image: this.image
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
          var form = document.getElementById('form');
          var formData = new FormData(form);
          formData.append('description', this.data.description);
          formData.append('category_id', this.data.category_id);
          formData.append('unit_id', this.data.unit_id);
          formData.append('status', this.data.status);

          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    getCategories() {
      let module = 'Item';
      axios.get(`getcategories/${module}`)
        .then((response) => {
          this.categories = response.data;
        });
    },
    getUnits() {
      let module = 'Item';
      axios.get(`getunits/${module}`)
        .then((response) => {
          this.units = response.data;
        });
    },
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getCategories();
    this.getUnits();
  },

  validators: {
    'data.category_id': function (value = null) { return Validator.value(value).required('Category Id is required'); },
    'data.title': function (value = null) { return Validator.value(value).required('Title is required'); },

  },
}

</script>