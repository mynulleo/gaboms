<template>
  <create-form @onSubmit='submit'>
    <div class="col-md-12">
      <fieldset>
        <spam class="legend">Uplink Provider Information</spam>
        <div class="row g-3">
          <Input v-model='data.org_name' field='data.org_name' title='Org Name' col="4" :req='true' />
          <Input v-model='data.email' field='data.email' title='Email' col="2" :req='false' />
          <Input v-model='data.phone' field='data.phone' title='Phone' col="2" :req='false' />
          <Input v-model='data.contact_person' field='data.contact_person' col="2" title='Contact Person'
            :req='false' />
          <Input v-model='data.contact_person_mobile' field='data.contact_person_mobile' col="2"
            title='Contact Person Mobile' :req='false' />
          <Input v-model='data.website' field='data.website' title='Website' col="2" :req='false' />
          <Textarea v-model='data.address' field='data.address' :required='true' title="Address" col="6" />
          <date-picker id='date3' v-model='data.previous_purchase_date' field='data.previous_purchase_date'
            title='Purchase Date' placeholder='Purchase date' col='2' :req='true'></date-picker>
          <Input v-model='data.previous_due' field='data.previous_due' col="2" title='Previous Due' :req='false' />
        </div>
      </fieldset>
    </div>
    <div class="col-md-6 ">
      <fieldset class="mt-3">
        <spam class="legend">Bank Information</spam>
        <div class="row g-3">
          <Input v-model='data.account_name' field='data.account_name' title='Account Name' col="6" :req='false' />
          <Input v-model='data.account_no' field='data.account_no' title='Account No' col="6" :req='false' />
          <Select title='Bank' v-model='data.bank_id' field='data.bank_id' label='bank_name' :reduce='(obj) => obj.id'
            col="6" :options='banks' placeholder='--Select One--' :closeOnSelect='true' :required='false' />
          <Input v-model='data.branch' field='data.branch' title='Branch' col="6" :req='false' />
        </div>
      </fieldset>
    </div>
    <div class="col-md-6">
      <fieldset class="mt-3">
        <spam class="legend">Additional Information</spam>
        <div class="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Designation / Expertise </th>
                <th>Contact Persion</th>
                <th>Contact No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data.alternative_contacts" :key="index">
                <td><Input v-model='item.designation' field='data.designation' :req='false' col="12" /></td>
                <td><Input v-model='item.contact_person' field='data.contact_person' :req='false' col="12" /></td>
                <td><Input v-model='item.contact_no' field='data.contact_no' :req='false' col="12" /></td>
                <td>
                  <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                    <button type="button" class="btns delete_one" data-bs-toggle="tooltip" data-bs-placement="top"
                      data-bs-title="Delete" v-x-tooltip @click.prevent="
                        removeContactRow(index)
                        " v-if="
                          Object.keys(
                            data.alternative_contacts
                          ).length > 1
                        ">
                      <i class="fas fa-trash"></i>
                    </button>
                    <button v-if="isLastItem(data.alternative_contacts, index)" type="button" class="btns add_more"
                      data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                      @click.prevent="addContactRow()">

                      <i class="fas fa-plus-square"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </fieldset>
    </div>

    <Switch v-model='data.status' field='data.status' title='Status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'uplinkProvider';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        alternative_contacts: [
          {
            designation: null,
            contact_person: null,
            contact_no: null,
          }
        ],
      },
      banks: [],
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
          var form = document.getElementById('form');
          var formData = new FormData(form);
          formData.append('bank_id', this.data.bank_id);
          formData.append('address', this.data.address);
          formData.append('previous_purchase_date', this.data.previous_purchase_date);
          formData.append('status', this.data.status);

          formData.append('alternative_contacts', JSON.stringify(this.data.alternative_contacts));
          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    getbanks: function () {
      this.areas = [];
      axios.get("/getbanks/").then((res) => {
        this.banks = res.data;
      });
    },
    addContactRow() {
      this.data.alternative_contacts.push({
        designation: null,
        contact_person: null,
        contact_no: null,
      });
    },
    removeContactRow(index) {
      if (Object.keys(this.data.alternative_contacts).length > 1) {
        this.data.alternative_contacts.splice(index)
      }
    },
    isLastItem(items, index) {
      return index === items.length - 1;
    },
  },
  created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data(`${this.model}/${this.$route.params.id}`);
    } else {
      this.page_title = this.headline(this.model) + ' Create';
    }
    this.getbanks();
  },

  validators: {
    'data.org_name': function (value = null) { return Validator.value(value).required('Org Name is required'); },

  },
}

</script>