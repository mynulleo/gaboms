<template>
  <div class="content-part pt-4">
    <div class="inner-content">
      <div class="d-flex align-items-center gap-4">
        <h5>Show XML File</h5>
        <button data-v-17539c31="" class="btn-load" @click="loadXmlData">
          Load XML Data
        </button>

        <a href="https://marketingplatform.google.com/about/analytics/" target="_blank">
          <button data-v-17539c31="" class="btn-load">Google Analytic</button>
        </a>
        <!-- <button
            data-v-17539c31=""
            class="btn-load"
            @click="redirectToAnalytics"
          >
            Google Analytic
          </button> -->
      </div>
      <div class="custom_form_table mt-3">
        <form class="bg-fix" @submit.prevent="searchData">
          <div class="row">
            <div
              data-v-5132a136=""
              class="col-lg-3 col-sm-6 mt-0 col-md-6 pb-3 col-xl-3 col-lg-4"
            ></div>
            <!--v-if-->
            <div class="row">
              <div class="col-lg-3 col-sm-6 mt-0 col-md-6 pb-3 col-xl-3 col-lg-4">
                <label class="w-100">Page title </label>
                <input
                  type="text"
                  v-model="searchPageTitle"
                  class="form-control"
                  placeholder="Search here..."
                />
              </div>

              <div class="col-3 col-sm-1 col-md-2 col-lg-2 col-xxl-1 text-end">
                <label class="w-100">Search</label>
                <button type="submit" class="search-btn">
                  <div class="btn-front">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div class="btn-back">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </button>
              </div>

              <div class="col-3 col-sm-1 col-md-2 col-lg-2 col-xxl-1">
                <label class="w-100">Clear</label>
                <button type="button" class="search-btn" @click="clearSearch">
                  <div class="btn-front"><i class="fa-solid fa-times"></i></div>
                  <div class="btn-back"><i class="fa-solid fa-times"></i></div>
                </button>
              </div>
            </div>
          </div>
        </form>

        <div class="table-list mt-3">
          <div class="table-list-body table-responsive" id="printArea">
            <table id="pdf-table" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th style="">
                    <span class="table-title"
                      >Page Title
                      <i class="fa fa-sort pull-right sort-up" aria-hidden="true"></i
                      ><!-- <i class="bi bi-caret-up-fill sort-up"></i>
                      <i class="bi bi-caret-down-fill sort-down"></i> --></span
                    >
                  </th>
                  <th style="">
                    <span class="table-title"
                      >Web URL
                      <i class="fa fa-sort pull-right sort-up" aria-hidden="true"></i
                      ><!-- <i class="bi bi-caret-up-fill sort-up"></i>
                      <i class="bi bi-caret-down-fill sort-down"></i> --></span
                    >
                  </th>

                  <th style="">
                    <span class="table-title"
                      >Page Type
                      <i class="fa fa-sort pull-right sort-up" aria-hidden="true"></i
                      ><!-- <i class="bi bi-caret-up-fill sort-up"></i>
                      <i class="bi bi-caret-down-fill sort-down"></i> --></span
                    >
                  </th>
                  <th style="">
                    <span class="table-title"
                      >Meta Tags
                      <i class="fa fa-sort pull-right sort-up" aria-hidden="true"></i
                      ><!-- <i class="bi bi-caret-up-fill sort-up"></i>
                      <i class="bi bi-caret-down-fill sort-down"></i> --></span
                    >
                  </th>

                  <th style="">
                    <span class="table-title"
                      >Broken URL
                      <i class="fa fa-sort pull-right sort-up" aria-hidden="true"></i
                      ><!-- <i class="bi bi-caret-up-fill sort-up"></i>
                      <i class="bi bi-caret-down-fill sort-down"></i> --></span
                    >
                  </th>

                  <th style="">
                    <span class="table-title"
                      >Indexed
                      <i class="fa fa-sort pull-right sort-up" aria-hidden="true"></i
                      ><!-- <i class="bi bi-caret-up-fill sort-up"></i>
                      <i class="bi bi-caret-down-fill sort-down"></i> --></span
                    >
                  </th>
                  <th style="">
                    <span class="table-title"
                      >Modified
                      <i class="fa fa-sort pull-right sort-up" aria-hidden="true"></i
                      ><!-- <i class="bi bi-caret-up-fill sort-up"></i>
                      <i class="bi bi-caret-down-fill sort-down"></i> --></span
                    >
                  </th>
                  <th width="10%" class="action text-center">Action</th>
                </tr>
              </thead>
              <tbody style="border-top: 0px">
                <tr
                  v-for="(item, key) in filteredData"
                  :key="key"
                  class="change_sorting change_sorting0 update_item15"
                >
                  <td class="position-relative" style="">
                    <span
                      ><span>{{ item.page }}</span></span
                    >
                  </td>

                  <td>
                    <a :href="item.url" target="_blank" rel="noopener noreferrer">
                      {{ item.url }}
                    </a>
                  </td>

                  <td class="position-relative" style="">
                    <span
                      ><span>{{ item.page_type }}</span></span
                    >
                  </td>

                  <td>
                    <div v-html="item.meta_tag_indicator"></div>
                  </td>

                  <td>
                    <span v-if="item.broken_url" style="color: red">✗</span>
                    <span v-else style="color: green">✔</span>
                  </td>

                  <td></td>
                  <td :class="{ 'old-date': isOldDate(item.modified) }">
                    {{ formatDateTime(item.modified) }}
                  </td>
                  <!-- custom route -->
                  <td class="action text-center">
                    <a :href="item.admin_url" class="delete edit" title="Edit"
                      ><i class="fas fa-pencil-alt" aria-hidden="true"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import moment from "moment";

dayjs.extend(relativeTime);

export default {
  data() {
    return {
      xmlData: [],
      searchPageTitle: "",
      searchPageType: "",
      filteredData: [],
    };
  },
  methods: {
    async loadXmlData() {
      try {
        await axios.get("/generate-xml");
        const response = await axios.get("/xml-file");
        const parser = new XMLParser();
        this.xmlData = parser.parse(response.data).root;
        this.filteredData = this.xmlData;
      } catch (error) {
        console.error("Error loading XML data:", error);
      }
    },

    searchData() {
        console.log("dada");

      this.filteredData = Object.fromEntries(
        Object.entries(this.xmlData).filter(([_, item]) => {
          const matchesTitle = item.page
            .toLowerCase()
            .includes(this.searchPageTitle.toLowerCase());
          const matchesType = item.page_type
            ? item.page_type.toLowerCase()?.includes(this.searchPageType.toLowerCase())
            : false;
          return matchesTitle;
        })
      );
    },

    clearSearch() {
      this.searchPageTitle = "";
      this.searchPageType = "";
      this.filteredData = this.xmlData; // Reset the filtered data
    },

    formatDateTime(dateTime) {
      return moment(dateTime).fromNow(); // Format the date to "X days ago"
    },

    isOldDate(dateTime) {
      const daysAgo = moment().diff(moment(dateTime), "days");
      return daysAgo >= 30;
    },
  },
};
//
</script>

<style scoped>
/* Button styling */
.btn-load {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-load:hover {
  background-color: #45a049;
}

/* Table styling */
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1.2em;
  font-family: "Arial", sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: white;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
}

.styled-table a {
  color: #009879;
  text-decoration: none;
}

.styled-table a:hover {
  text-decoration: underline;
}

/* Old date styling */
.old-date {
  color: red;
}
.text-success {
  color: green;
}
.text-danger {
  color: red;
}
</style>
