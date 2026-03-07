<template>
  <index-page :show_status="false" :defaultTable="false">
    <template v-slot:search-field>
      <v-select-container title="Select Client" field="search_data.client_id" col="3">
        <v-select v-model="search_data.client_id" label="org_name" :reduce="(obj) => obj.id" :options="clients"
          placeholder="--Select Client--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <v-select-container title="Select Account" field="search_data.account_id" col="3">
        <v-select v-model="search_data.account_id" label="name" :reduce="(obj) => obj.id"
          :options="$root.global.allaccounts" placeholder="--Select Account--" :closeOnSelect="true"></v-select>
      </v-select-container>
      <date-picker id='searchfrominvoicedate' v-model='search_data.from_invoice_date'
        field='search_data.from_invoice_date' title='From Invoice Date' placeholder='From Invoice Date' col='3'
        :req='false'></date-picker>
      <date-picker id='searchtoinvoicedate' v-model='search_data.to_invoice_date' field='search_data.to_invoice_date'
        title='To Invoice Date' placeholder='To Invoice Date' col='3' :req='false'
        :disablePastDates="search_data.from_invoice_date"></date-picker>
      <SwitchBoolean v-model='search_data.is_closed' field='search_data.is_closed' title='Is Closed' on-label='Yes'
        off-label='No' col="2">
      </SwitchBoolean>
    </template>
    <template v-slot:table-list>
      <!-- pagination and action btn -->
      <div class="pagination_action d-none d-md-block">
        <div class="row">
          <div class="col-md-6">
            <div class="top_pagination d-flex gap-4 align-items-center">
              <div class="pagination">
                <p>
                  <span>{{ safeNumber(table.meta.from) }}</span> -
                  <span>{{ safeNumber(table.meta.to) }}</span> of
                  <span>{{ safeNumber(table.meta.total) }}</span>
                </p>
              </div>
              <div class="show_item d-flex align-items-center gap-3 ms-3">
                <h4 class="sh">Show</h4>
                <select class="form-select form-select-lg shadow-none" v-model="search_data.pagination" @change="() => {
                  $root.tableSpinner = true;
                  updateQueryParams();
                }">
                  <option value="10">10</option>
                  <option value="20" :disabled="isDisableShowOption(10)">20</option>
                  <option value="40" :disabled="isDisableShowOption(20)">40</option>
                  <option value="80" :disabled="isDisableShowOption(40)">80</option>
                  <option value="100" :disabled="isDisableShowOption(80)">100</option>
                  <option value="200" :disabled="isDisableShowOption(100)">200</option>
                  <option value="500" :disabled="isDisableShowOption(200)">500</option>
                  <option value="99999999">All</option>
                </select>
              </div>
              <div class="prev_next_btn">

                <button class="btns bg-transparent border-0" @click="goPrevAndNext(-1)" :class="back_prev_page_class"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Previous" v-x-tooltip>
                  <span class="" icon><i class="fas fa-angle-left"></i></span>
                </button>
                <button class="btns bg-transparent border-0" @click="goPrevAndNext(1)" :class="go_next_page_class"
                  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Next" v-x-tooltip>
                  <span class="" icon><i class="fas fa-angle-right"></i></span>
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="d-flex gap-3 align-items-center justify-content-end">
              <div class="print_action text-end">
                <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Print" v-x-tooltip
                  @click="print('printArea', model)">
                  <span class="icon"><i class="fa-solid fa-print"></i></span>
                </button>

                <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Excel"
                  v-x-tooltip>
                  <span class="icon"><i class="fa-solid fa-file-excel"></i></span>
                </button>

                <button class="p_btn" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="PDF"
                  @click="generatePdf" v-x-tooltip>
                  <span class="icon"><i class="fa-solid fa-file-pdf"></i></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="printArea" class="table-responsive text-nowrap table-basic table_wrapper"
        style="height: 100%; min-height: 100%; max-height: 100%;">
        <table id="pdf-table" class="table">
          <thead style="">
            <tr class="tr_stick">
              <th class="sl" style="min-width: 70px;"><span class="heading"> SL </span></th>
              <th style=""><span class="heading">Invoice No </span></th>
              <th style=""><span class="heading">Invoice Date </span></th>
              <th style=""><span class="heading">Client</span></th>
              <th style=""><span class="heading">Amount</span></th>
              <th style=""><span class="heading">Discount </span></th>
              <th style=""><span class="heading">Total</span></th>
              <th style=""><span class="heading">Paid Amount</span></th>
              <th style=""><span class="heading">Is Closed</span></th>
              <th style="text-align: center;"><span class="heading">Status </span></th>
              <th class="action_th action-extra"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="td_track change_sorting change_sortingundefined update_item7" title=""
              v-for="(data, index) in table.datas" :key="index">
              <td>{{ table.meta.from + index }}</td>
              <td style="">{{ data.invoice_no }}</td>
              <td style="">{{ data.invoice_date }}</td>
              <td style="">
                <span v-if="data.client">
                  {{ data.client?.clientid }} - {{ data.client?.name }}
                </span>
              </td>
              <td style="">{{ data.original_amount }}</td>
              <td style="">{{ data.discount }}</td>
              <td style="">{{ data.amount }}</td>
              <td style="">{{ data.paid_amount }}</td>
              <td style="">{{ data.is_closed ? 'Yes' : 'No' }}</td>
              <td style="">{{ data.status }}</td>

              <td class="action_td action-extra">
                <div class="actions position-relative">
                  <div class="action_btn">
                    <router-link v-if="$root.checkPermission('invoice.bill')"
                      :to="{ name: 'invoice.bill', params: { id: data.id } }" data-bs-toggle="tooltip"
                      data-bs-placement="top" data-bs-title="Invoice" v-x-tooltip="Invoice"><span class="icon"><i
                          class="fa fa-money"></i></span></router-link>
                    <router-link v-if="$root.checkPermission('invoice.moneyreceipt')"
                      :to="{ name: 'invoice.moneyreceipt', params: { id: data.id } }" data-bs-toggle="tooltip"
                      data-bs-placement="top" data-bs-title="Money Receipt" v-x-tooltip="MoneyReceipt"><span
                        class="icon"><i class="fa fa-money-bill"></i></span></router-link>
                    <router-link v-if="$root.checkPermission('invoice.show')"
                      :to="{ name: 'invoice.show', params: { id: data.id } }" data-bs-toggle="tooltip"
                      data-bs-placement="top" data-bs-title="View" v-x-tooltip="View"><span class="icon"><i
                          class="fa fa-eye"></i></span></router-link>
                    <router-link v-if="!hasPaymentDetails(data) && $root.checkPermission('invoice.edit')"
                      :to="{ name: 'invoice.edit', params: { id: data.id } }" data-bs-toggle="tooltip"
                      data-bs-placement="top" data-bs-title="Edit" v-x-tooltip="Edit"><span class="icon"><i
                          class="fa fa-pencil"></i></span></router-link>
                    <a href="javascript:void(0)"
                      v-if="!hasPaymentDetails(data) && $root.checkPermission('invoice.destroy')"
                      @click="destroy(data, 'is_delete')" data-bs-toggle="tooltip" data-bs-placement="top"
                      data-bs-title="Delete" v-x-tooltip>
                      <span class="icon"> <i class="fa fa-trash"></i></span>
                    </a>
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-black" id="deleteModalLabel">
                  Are you sure want to
                  {{ is_delete ? "return back" : "delete" }} this?
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h6 class="mb-3 text-black">
                  Please confirm your login password
                </h6>
                <div class="d-flex justify-content-center mb-3">
                  <input v-model="delete_password" type="password" placeholder="********"
                    class="form-control form-control-sm text-center border" />
                </div>
                <div class="d-flex justify-content-center">
                  <button @click="deleteConfirm()" type="button" class="theme_btn rounded-2 w-100"
                    :disabled="$root.submit">
                    <span v-if="$root.submit">
                      <i class="fa fa-spinner fa-spin"></i>
                      processing...
                    </span>
                    <template v-else>
                      <span v-if="is_delete">Return Back</span>
                      <span v-else> Confirm </span>
                    </template>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
      </div>
    </template>
  </index-page>
</template>

<script>

const model = "invoice";

const tableColumns = [
  { field: "invoice_no", title: "Invoice No" },
  { field: "invoice_date", title: "Invoice Date" },
  { field: "client_id", title: "Client", subfield: "client.name" },
  { field: "amount", title: "Amount" },
  { field: "is_closed", title: "Is Closed" },
  { field: "status", title: "Status", align: "center" },
];

const json_fields = {
  "Client": "client_id",
  "Invoice No": "invoice_no",
  "Invoice Date": "invoice_date",
  "Amount": "amount",
  "Paid Amount": "paid_amount",
  "Payment Date": "payment_date",
  "Trxid": "trxid",
  "Payment Status": "payment_status",
};

export default {

  data() {
    return {
      model: model,
      page_title: "",
      json_fields: json_fields,
      fields_name: {
        default: "Select One",
        invoice_no: "Invoice No",
        trxid: 'Trx ID',
        card_type: 'Card Type'
      },
      search_data: {
        account_id: "",
        is_closed: 0,
        from_invoice_date: "",
        to_invoice_date: "",
        pagination: this.$route.query.pagination ?? 10,
        page: this.$route.query.page ?? 1,
        field_name: this.$route.query.field_name ?? "",
        value: this.$route.query.value ?? "",
        status: this.$route.query.status ?? "",
      },
      minToDate: null,
      table: {
        columns: tableColumns,
        datas: [],
        meta: [],
        links: []
      },
      clients: [],
    };
  },
  provide() {
    return {
      validate: this.validation,
      model: this.model,
      fields_name: this.fields_name,
      search_data: this.search_data,
      table: this.table,
      json_fields: this.json_fields,
      search: this.search,
      resetSearchData: this.resetSearchData,
    };
  },

  methods: {
    hasPaymentDetails(row) {
      return Array.isArray(row?.payment_details)
        && row.payment_details.length > 0;
    },
    updateToDateMin(date) {
      console.log(date);
      this.minToDate = date; // যখন from date select হবে → to date এর জন্য minDate সেট হবে
      if (this.search_data.to_invoice_date && this.search_data.to_invoice_date < date) {
        this.search_data.to_invoice_date = ""; // যদি আগে থেকে ছোট date select করা থাকে → clear করে দেবে
      }
    },
    isDisableShowOption(prevOptionValue) {
      return !(this.safeNumber(this.table.meta?.total) > prevOptionValue);
    },
    updateQueryParams() {
      this.$router.push({
        query: this.search_data,
      });

      this.search();
    },
    tableSortingByButton(id, sorting = null, model) {
      let value = 1;

      if (this.isEmpty(sorting)) {
        let input = $(`input[data-item="${id}"]`);
        value = input.val();
        console.log(value);
      }

      $(".change_sorting").removeClass("sorting-success");
      this.sorting_spin = id;

      let data = { number: value, id: id, model: model };

      axios
        .get("table-sorting", { params: data })
        .then((res) => {
          this.get_paginate(this.model, this.search_data);
        })
        .catch((error) => console.log(error))
        .then((alw) => {
          this.sorting_spin = "";
        });

      setTimeout(
        () => $(".change_sorting").removeClass("sorting-success"),
        5000
      );
    },
    tableSorting(number, id, model, auto) {
      console.log(number, id, model, auto);

      $(".change_sorting").removeClass("sorting-success");
      this.sorting_spin = id;
      let data = { number: number, id: id, model: model, auto: auto };
      axios
        .get("table-sorting", { params: data })
        .then((res) => { })
        .catch((error) => console.log(error))
        .then((alw) => {
          this.sorting_spin = "";
          $(".change_sorting" + number).addClass("sorting-success");
        });

      setTimeout(
        () => $(".change_sorting").removeClass("sorting-success"),
        5000
      );
    },

    sort(field, enableDataSorting = true) {
      if (enableDataSorting === true) {
        this.coloumSort = field;
        this.table.datas.sort(this.sortBy(field));
      }
    },

    sortBy(property) {
      if (this.order === "desc") {
        this.order = "asc";
      } else {
        this.order = "desc";
      }
      const order = this.order;
      return function (a, b) {
        const varA =
          typeof a[property] === "string"
            ? a[property].toUpperCase()
            : a[property];
        const varB =
          typeof b[property] === "string"
            ? b[property].toUpperCase()
            : b[property];

        let comparison = 0;
        if (varA > varB) comparison = 1;
        else if (varA < varB) comparison = -1;
        return order === "desc" ? comparison * -1 : comparison;
      };
    },
    generatePdf() {
      if (this.customPdfUrl) {
        window.open(this.customPdfUrl, "_blank");
        return false;
      }

      const doc = new jsPDF();
      $(".action").css("display", "none");
      doc.setFontSize(10);
      doc.text(new Date().toISOString().slice(0, 10), 185, 12, "center");

      doc.setFontSize(16);
      const title = `${this.ucfirst(
        process.env.MIX_VUE_APP_NAME
      )} ${this.ucfirst(this.model)}`;
      doc.text(title, 100, 12, "center");
      console.log(doc);

      autoTable(doc, { html: "#pdf-table" });
      doc.save(this.model + ".pdf");
      setTimeout(() => $(".action").show(), 300);
    },
    goToView(id) {
      this.$router.push({
        name: this.model + ".show",
        params: { id: id },
      });
    },
    search() {
      this.get_paginate(this.model, this.search_data);
    },
    destroy(item, is_delete) {
      this.deleted_item = item;
      this.deleted_id = item.id;
      this.is_delete = is_delete;
      $("#deleteModal").modal("show");
    },
    setModal(id, htmlid) {
      localStorage.setItem("model_id", id);
      $("#" + htmlid).modal("show");
    },
    deleteConfirm() {
      if (!this.delete_password) {
        this.$toast("Password field is required", "error");
        return false;
      }
      let data = {
        for_delete: true,
        id: this.user.id,
        old_password: this.delete_password,
      };
      this.$root.submit = true;
      axios
        .post("/check-old-password", data)
        .then((res) => {
          if (res.data) {
            this.search_data.is_delete = this.is_delete;

            if (this.customDestroyData) {
              this.customDestroyData(this.deleted_item);
            } else {
              this.destroy_data(this.model, this.deleted_id, this.search_data);
            }

            this.deleted_item = null;
            this.deleted_id = "";
            this.delete_password = "";

            $("#deleteModal").modal("hide");
          } else {
            this.$toast("Password does not match", "error");
            return false;
          }
        })
        .finally((res) => (this.$root.submit = false));
    },
    search() {
      this.get_paginate(this.model, this.search_data);
    },
    getClients() {
      axios.get(
        `clients/`
      )
        .then((response) => {
          this.clients = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    resetSearchData() {
      this.search_data.pagination = 10;
      this.search_data.page = 1;
      this.search_data.field_name = "";
      this.search_data.value = "";
      this.search_data.status = "";
    },
  },

  created() {
    // this.getRouteName(this.model);
    this.page_title = `${this.headline(this.model)} List`;
    this.search();
    this.getClients();
  },

  validators: {},
};
</script>