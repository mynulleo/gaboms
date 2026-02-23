<template>
  <create-form @onSubmit='submit'>
    <date-picker id='date3' v-model='data.issue_date' field='data.issue_date' title='Issue Date'
      placeholder='Issue Date' col='2' :req='true'></date-picker>
    <Select title='Branch' v-model='data.branch_id' field='data.branch_id' label='branch_name' col="3"
      :reduce='(obj) => obj.id' :options='$root.global.branches' placeholder='--Select One--' :closeOnSelect='true'
      :required='false' />
    <Input v-model='data.department' field='data.department' title='Department' col="2" :req='false' />
    <Select title='Employee' v-model='data.employee_id' field='data.employee_id' col="2" label='full_name'
      :reduce='(obj) => obj.id' :options='$root.global.employees' placeholder='--Select One--' :closeOnSelect='true'
      :required='false' />
    <Select title='Client' v-model='data.client_id' field='data.client_id' col="2" label='name'
      :reduce='(obj) => obj.id' :options='clients' placeholder='--Select One--' :closeOnSelect='true'
      :required='false' />
    <Textarea v-model='data.remarks' field='data.remarks' :required='false' title="Remarks" col="12" />
    <div class="col-md-12 mb-3">
      <fieldset class="mt-4">
        <span class="legend">Issue Details</span>
        <div class="row">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th style="width:20%">Category</th>
                  <th style="width:45%">Item</th>
                  <th style="width:15%">Stock</th>
                  <th style="width:15%">Qty</th>
                  <th style="width:20%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(issuedetail, index) in data.issue_details" :key="index">
                  <td>
                    <Select v-model="issuedetail.category_id" field="issuedetail.category_id" label="title"
                      :reduce="(obj) => obj.id" :options="categories" @change="onCategoryChange(issuedetail)"
                      placeholder="--Select One--" :closeOnSelect="true" :required="false" col="12" />
                  </td>
                  <td>
                    <Select v-model="issuedetail.item_id" field="issuedetail.item_id" label="title"
                      :reduce="(obj) => obj.id" :options="issuedetail.items" placeholder="--Select One--"
                      :closeOnSelect="true" :required="false" @change="onChangeItem(issuedetail)" col="12" />
                  </td>
                  <td>{{ issuedetail.stock }}</td>
                  <td>
                    <Input v-model="issuedetail.qty" field="issuedetail.qty" col="12" />
                  </td>
                  <td>
                    <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                      <button type="button" class="btns delete_one" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Delete" v-x-tooltip @click.prevent="
                          removeIssueDetails(index)
                          " v-if="
                            Object.keys(
                              data.issue_details
                            ).length > 1
                          ">
                        <i class="fas fa-trash"></i>
                      </button>
                      <button v-if="isLastItem(data.issue_details, index)" type="button" class="btns add_more"
                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                        @click.prevent="addissuedetailsRow()">

                        <i class="fas fa-plus-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </fieldset>
    </div>
    <Switch v-model='data.status' field='data.status' title='status' on-label='Active' off-label='Deactive' :req='true'>
    </Switch>

  </create-form>
</template>

<script>
import Editor from '../../../components/Form/CKEditor';

const model = 'issue';

export default {
  components: { Editor },
  data() {
    return {
      model: model,
      page_title: '',
      data: {
        issue_date: this.$filter.today(),
        branch_id: '',
        department: '',
        employee_id: '',
        client_id: '',
        remarks: '',
        status: 'active',
        issue_details: [
          {
            category_id: '',
            items: [],
            item_id: '',
            stock: 0,
            qty: ''
          }
        ]
      },
      clients: [],
      categories: [],
      items: []
    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  methods: {
    submit: function (e) {
      // ❌ Duplicate item validation
      if (this.hasDuplicateItems()) {
        this.$toast(
          'Same item cannot be selected multiple times',
          'warning'
        );
        return false;
      }

      // ❌ Qty > Stock validation
      const stockCheck = this.hasQtyGreaterThanStock();
      if (stockCheck.error) {
        this.$toast(
          `Issue quantity cannot be greater than stock (Row ${stockCheck.index + 1})`,
          'warning'
        );
        return false;
      }
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
          formData.append('issue_date', this.data.issue_date);
          formData.append('branch_id', this.data.branch_id);
          if (this.data.client_id !== null) {
            formData.append('client_id', this.data.client_id);
          }

          if (this.data.employee_id !== null) {
            formData.append('employee_id', this.data.employee_id);
          }
          formData.append('remarks', this.data.remarks);
          formData.append('status', this.data.status);
          formData.append('issue_details', JSON.stringify(this.data.issue_details));

          if (this.data.id) {
            this.update(this.model, formData, this.data.id, true);
          } else {
            this.store(this.model, formData);
          }
        }
      });
    },
    hasDuplicateItems() {
      const items = this.data.issue_details
        .map(d => d.item_id)
        .filter(id => id); // null/empty বাদ

      return new Set(items).size !== items.length;
    },
    hasQtyGreaterThanStock() {
      for (let i = 0; i < this.data.issue_details.length; i++) {
        const row = this.data.issue_details[i];

        if (row.item_id && Number(row.qty) > Number(row.stock)) {
          return {
            error: true,
            index: i
          };
        }
      }
      return { error: false };
    },
    onChangeItem(issuedetail) {
      issuedetail.stock = 0;
      axios.get(`getitemstock/${issuedetail.item_id}`)
        .then((response) => {
          issuedetail.stock = response.data;
        })
        .catch(() => {
          issuedetail.stock = 0;
        });
    },
    onCategoryChange(issuedetail) {
      // category clear হলে item reset
      issuedetail.item_id = null;
      issuedetail.items = [];

      if (!issuedetail.category_id) {
        return;
      }

      axios.get(`getitemsbycategory/${issuedetail.category_id}`)
        .then((response) => {
          issuedetail.items = response.data;
        })
        .catch(() => {
          issuedetail.items = [];
        });
    },
    getCategories() {
      let module = 'Item';
      axios.get(`getcategories/${module}`)
        .then((response) => {
          this.categories = response.data;
        });
    },
    getClients() {
      let serviceid = 4;
      axios.get(
        `clients/` + serviceid
      )
        .then((response) => {
          this.clients = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addissuedetailsRow() {
      this.data.issue_details.push({
        category_id: null,
        item_id: '',
        qty: '',
      });
    },
    removeIssueDetails(index) {
      if (Object.keys(this.data.issue_details).length > 1) {
        this.data.issue_details.splice(index)
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
    this.getClients();
    this.getCategories();
  },

  validators: {
    'data.branch_id': function (value = null) { return Validator.value(value).required('Branch Id is required'); },
    'data.issue_date': function (value = null) { return Validator.value(value).required('Issue Date is required'); },

  },
}

</script>