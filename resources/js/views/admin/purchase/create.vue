<template>
  <create-form @onSubmit='submit'>
    <Input v-model='data.invoiceno' field='data.invoiceno' col="2" title='Invoiceno' :req='false' />
    <date-picker id='date1' v-model='data.purchase_date' field='data.purchase_date' title='Purchase Date'
      placeholder='Purchase Date' col='2' :req='true'></date-picker>
    <div class="col-8"></div>
    <Select title='Suppliers' v-model='data.supplier_id' field='data.supplier_id' label='org_name'
      :reduce='(obj) => obj.id' :options='$root.global.suppliers' col="3" placeholder='--Select One--'
      :closeOnSelect='true' :required='true' />
    <Input v-model='data.amount' col="2" field='data.amount' title='Amount' :req='false' />
    <Input v-model='data.discount' col="2" field='data.discount' title='Discount' :req='false' />
    <Input v-model='data.tax' col="2" field='data.tax' title='Tax' :req='false' />
    <Input v-model='data.total_amount' col="2" field='data.total_amount' title='Total Amount' :req='false' />
    <div class="col-md-12 mb-3">
      <fieldset class="mt-4">
        <span class="legend">Purchase Items</span>
        <div class="row">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th style="width:20%">Category</th>
                  <th style="width:20%">Item</th>
                  <th style="width:20%">Unit</th>
                  <th style="width:10%">Price</th>
                  <th style="width:10%">Qty</th>
                  <th style="width:15%">Amount</th>
                  <th style="width:5%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pitem, index) in data.purchase_details" :key="index">
                  <td>
                    <Select v-model="pitem.category_id" field="pitem.category_id" label="title"
                      :reduce="(obj) => obj.id" :options="categories" placeholder="--Select One--" :closeOnSelect="true"
                      :required="false" col="12" @change="onCategoryChange(pitem)" />
                  </td>
                  <td>
                    <Select v-model="pitem.item_id" field="pitem.item_id" label="title" :reduce="(obj) => obj.id"
                      :options="pitem.items" placeholder="--Select One--" :closeOnSelect="true" :required="false"
                      col="12" />
                  </td>
                  <td>
                    <Select v-model="pitem.unit_id" field="pitem.unit_id" label="title" :reduce="(obj) => obj.id"
                      :options="units" placeholder="--Select One--" :closeOnSelect="true" :required="false" col="12" />
                  </td>
                  <td>
                    <Input v-model="pitem.price" field="pitem.price" col="12" />
                  </td>
                  <td>
                    <Input v-model="pitem.qty" field="pitem.qty" col="12" />
                  </td>
                  <td>
                    <Input v-model="pitem.total_amount" field="pitem.total_amount" col="12" />
                  </td>
                  <td>
                    <div class="multiple_fields_actions_btn d-flex align-items-center gap-2">
                      <button type="button" class="btns delete_one" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Delete" v-x-tooltip @click.prevent="
                          removePurchaseDetails(index)
                          " v-if="
                            Object.keys(
                              data.purchase_details
                            ).length > 1
                          ">
                        <i class="fas fa-trash"></i>
                      </button>
                      <button v-if="isLastItem(data.purchase_details, index)" type="button" class="btns add_more"
                        data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add" v-x-tooltip
                        @click.prevent="addPurchaseDetailsRow()">

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


const model = 'purchase';

export default {

  data() {
    return {
      model: model,
      page_title: '',
      data: {
        purchase_date: this.$filter.today(),
        amount: 0,
        purchase_details: [
          {
            category_id: null,
            item_id: null,
            items: [],
            price: 0,
            qty: 0,
            total_amount: 0,
          }
        ],
      },
      categories: [],
      items: [],
    };
  },

  provide() {
    return {
      validate: this.validation,

    };
  },
  watch: {
    'data.purchase_details': {
      handler() {
        this.calculateRowAmount();
        this.calculateTotals();
      },
      deep: true
    }
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
          formData.append('supplier_id', this.data.supplier_id);
          formData.append('purchase_date', this.data.purchase_date);
          if (this.data.id) {
            this.update(this.model, this.data, this.data.id);
          } else {
            this.store(this.model, this.data);
          }
        }
      });
    },
    onCategoryChange(pitem) {
      // category clear হলে item reset
      pitem.item_id = null;
      pitem.items = [];

      if (!pitem.category_id) {
        return;
      }

      axios.get(`getitemsbycategory/${pitem.category_id}`)
        .then((response) => {
          pitem.items = response.data;
        })
        .catch(() => {
          pitem.items = [];
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
    getItems(category_id) {
      axios.get(`getitems/${category_id}`)
        .then((response) => {
          this.items = response.data;
        });
    },
    calculateRowAmount() {
      this.data.purchase_details.forEach(detail => {
        const price = parseFloat(detail.price) || 0;
        const qty = parseFloat(detail.qty) || 0;
        detail.total_amount = price * qty;
      });
    },
    calculateTotals() {
      let totalAmt = 0;
      this.data.purchase_details.forEach(detail => {
        totalAmt += parseFloat(detail.total_amount) || 0;
      });
      this.data.amount = totalAmt;
      this.data.total_amount = totalAmt;
    },
    addPurchaseDetailsRow() {
      this.data.purchase_details.push({
        category_id: null,
        items: [],
        item_id: null,
        price: 0,
        qty: 0,
        total_amount: 0,
      });
    },
    removePurchaseDetails(index) {
      if (Object.keys(this.data.purchase_details).length > 1) {
        this.data.purchase_details.splice(index)
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

    this.getCategories();
    this.getUnits();
  },

  validators: {
    'data.supplier_id': function (value = null) { return Validator.value(value).required('Supplier is required'); },
    'data.purchase_date': function (value = null) { return Validator.value(value).required('Purchase Date is required'); },

  },
}

</script>