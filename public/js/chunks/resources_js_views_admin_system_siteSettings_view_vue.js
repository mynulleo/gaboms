"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_system_siteSettings_view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = "siteSetting";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page_title: "Site Settings",
      model: model,
      data: {},
      page_type: 'view'
    };
  },
  created: function created() {
    var _this = this;
    // this.setBreadcrumbs(this.model, "view", "", `${this.model}.show`);
    // await this.get_data(`${this.model}/${this.$route.params}`);
    this.$root.spinner = true;
    axios.get(this.model).then(function (res) {
      _this.data = res.data;
    })["catch"](function (error) {
      console.log(error);
      _this.$toast("Something went wrong");
      return false;
    })["finally"](function () {
      _this.$root.spinner = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=template&id=687aaba9&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=template&id=687aaba9&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "view_page"
};
var _hoisted_2 = {
  "class": "row custom_row g-3"
};
var _hoisted_3 = {
  "class": "col-xl-6 col-lg-12"
};
var _hoisted_4 = {
  "class": "view_file"
};
var _hoisted_5 = {
  "class": "row g-3"
};
var _hoisted_6 = {
  "class": "col-lg-4"
};
var _hoisted_7 = {
  "class": "view_file_item text-center"
};
var _hoisted_8 = {
  "class": "img"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  "class": "col-lg-4"
};
var _hoisted_11 = {
  "class": "view_file_item text-center"
};
var _hoisted_12 = {
  "class": "img"
};
var _hoisted_13 = ["src"];
var _hoisted_14 = {
  "class": "col-lg-4"
};
var _hoisted_15 = {
  "class": "view_file_item text-center"
};
var _hoisted_16 = {
  "class": "img"
};
var _hoisted_17 = ["src"];
var _hoisted_18 = {
  "class": "col-xl-6 col-lg-12"
};
var _hoisted_19 = {
  "class": "table-responsive"
};
var _hoisted_20 = {
  "class": "table table-striped"
};
var _hoisted_21 = {
  "class": "col-xl-6 col-lg-12"
};
var _hoisted_22 = {
  "class": "table-responsive"
};
var _hoisted_23 = {
  "class": "table table-striped"
};
var _hoisted_24 = {
  "class": "col-xl-6 col-lg-12"
};
var _hoisted_25 = {
  "class": "table-responsive"
};
var _hoisted_26 = {
  "class": "table table-striped"
};
var _hoisted_27 = {
  "class": "col-xl-6 col-lg-12"
};
var _hoisted_28 = {
  "class": "table-responsive"
};
var _hoisted_29 = {
  "class": "table table-striped"
};
var _hoisted_30 = {
  "class": "col-12 mt-2"
};
var _hoisted_31 = {
  "class": "address--maps mt-4"
};
var _hoisted_32 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_view_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("view-page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_view_page, {
    defaultTable: false,
    showCreateRoute: false,
    showDeleteButton: false
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$data$data, _$data$data2, _$data$data3, _$data$data4, _$data$data5, _$data$data6, _$data$data$web, _$data$data7, _$data$data8, _$data$data9, _$data$data10, _$data$data11, _$data$data$title, _$data$data12, _$data$data$short_tit, _$data$data13, _$data$data$contact_e, _$data$data14, _$data$data$feedback_, _$data$data15, _$data$data$mobile, _$data$data16, _$data$data$mobile2, _$data$data17, _$data$data18, _$data$data19, _$data$data20, _$data$data21, _$data$data22, _$data$data23, _$data$data24, _$data$data25, _$data$data26, _$data$data27, _$data$data28, _$data$data29, _$data$data30, _$data$data31;
      return [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "viewer_devider"
      }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Media", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: ((_$data$data = $data.data) === null || _$data$data === void 0 ? void 0 : _$data$data.logo_one) === 'no_server_image' ? _ctx.emptyServerImage() : ((_$data$data2 = $data.data) === null || _$data$data2 === void 0 ? void 0 : _$data$data2.logo_one) || _ctx.emptyImage(),
        alt: "logo-image",
        "class": "img-fluid"
      }, null, 8 /* PROPS */, _hoisted_9)]), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "image-name"
      }, "Logo", -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img :src=\"data?.logo_small_one ? data.logo_small_one : emptyImage()\" alt=\"\"\r\n                                                class=\"img-fluid\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: ((_$data$data3 = $data.data) === null || _$data$data3 === void 0 ? void 0 : _$data$data3.logo_small_one) === 'no_server_image' ? _ctx.emptyServerImage() : ((_$data$data4 = $data.data) === null || _$data$data4 === void 0 ? void 0 : _$data$data4.logo_small_one) || _ctx.emptyImage(),
        alt: "logo-image",
        "class": "img-fluid"
      }, null, 8 /* PROPS */, _hoisted_13)]), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "image-name"
      }, "Small Logo", -1 /* HOISTED */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img :src=\"data?.favicon ? data.favicon : emptyImage()\" alt=\"\"\r\n                                                class=\"img-fluid\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: ((_$data$data5 = $data.data) === null || _$data$data5 === void 0 ? void 0 : _$data$data5.favicon) === 'no_server_image' ? _ctx.emptyServerImage() : ((_$data$data6 = $data.data) === null || _$data$data6 === void 0 ? void 0 : _$data$data6.favicon) || _ctx.emptyImage(),
        alt: "logo-image",
        "class": "img-fluid"
      }, null, 8 /* PROPS */, _hoisted_17)]), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "image-name"
      }, "Favicon", -1 /* HOISTED */))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Links", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Web", -1 /* HOISTED */)), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$web = (_$data$data7 = $data.data) === null || _$data$data7 === void 0 ? void 0 : _$data$data7.web) !== null && _$data$data$web !== void 0 ? _$data$data$web : ""), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Facebook", -1 /* HOISTED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data8 = $data.data) === null || _$data$data8 === void 0 ? void 0 : _$data$data8.fb), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Twitter", -1 /* HOISTED */)), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data9 = $data.data) === null || _$data$data9 === void 0 ? void 0 : _$data$data9.tw), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Linkedin", -1 /* HOISTED */)), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data10 = $data.data) === null || _$data$data10 === void 0 ? void 0 : _$data$data10.ln), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Youtube", -1 /* HOISTED */)), _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data11 = $data.data) === null || _$data$data11 === void 0 ? void 0 : _$data$data11.yt), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[27] || (_cache[27] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Information", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Title", -1 /* HOISTED */)), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$title = (_$data$data12 = $data.data) === null || _$data$data12 === void 0 ? void 0 : _$data$data12.title) !== null && _$data$data$title !== void 0 ? _$data$data$title : ""), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Short Title", -1 /* HOISTED */)), _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$short_tit = (_$data$data13 = $data.data) === null || _$data$data13 === void 0 ? void 0 : _$data$data13.short_title) !== null && _$data$data$short_tit !== void 0 ? _$data$data$short_tit : ""), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, " Contact Email ", -1 /* HOISTED */)), _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$contact_e = (_$data$data14 = $data.data) === null || _$data$data14 === void 0 ? void 0 : _$data$data14.contact_email) !== null && _$data$data$contact_e !== void 0 ? _$data$data$contact_e : ""), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[21] || (_cache[21] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, " Feedback Email ", -1 /* HOISTED */)), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$feedback_ = (_$data$data15 = $data.data) === null || _$data$data15 === void 0 ? void 0 : _$data$data15.feedback_email) !== null && _$data$data$feedback_ !== void 0 ? _$data$data$feedback_ : ""), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Mobile One", -1 /* HOISTED */)), _cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$mobile = (_$data$data16 = $data.data) === null || _$data$data16 === void 0 ? void 0 : _$data$data16.mobile1) !== null && _$data$data$mobile !== void 0 ? _$data$data$mobile : ""), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Mobile One", -1 /* HOISTED */)), _cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$mobile2 = (_$data$data17 = $data.data) === null || _$data$data17 === void 0 ? void 0 : _$data$data17.mobile2) !== null && _$data$data$mobile2 !== void 0 ? _$data$data$mobile2 : ""), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Color", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, " Sidebar footer color ", -1 /* HOISTED */)), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data18 = $data.data) === null || _$data$data18 === void 0 ? void 0 : _$data$data18.sidebar_footer_color), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          backgroundColor: (_$data$data19 = $data.data) === null || _$data$data19 === void 0 ? void 0 : _$data$data19.sidebar_footer_color
        }),
        "class": "color-box"
      }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[30] || (_cache[30] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, " Sidebar top color ", -1 /* HOISTED */)), _cache[31] || (_cache[31] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data20 = $data.data) === null || _$data$data20 === void 0 ? void 0 : _$data$data20.sidebar_top_color), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          backgroundColor: (_$data$data21 = $data.data) === null || _$data$data21 === void 0 ? void 0 : _$data$data21.sidebar_top_color
        }),
        "class": "color-box"
      }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[32] || (_cache[32] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, " Sidebar color ", -1 /* HOISTED */)), _cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data22 = $data.data) === null || _$data$data22 === void 0 ? void 0 : _$data$data22.sidebar_color), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          backgroundColor: (_$data$data23 = $data.data) === null || _$data$data23 === void 0 ? void 0 : _$data$data23.sidebar_color
        }),
        "class": "color-box"
      }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, " Navbar color ", -1 /* HOISTED */)), _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data24 = $data.data) === null || _$data$data24 === void 0 ? void 0 : _$data$data24.navbar_color), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          backgroundColor: (_$data$data25 = $data.data) === null || _$data$data25 === void 0 ? void 0 : _$data$data25.navbar_color
        }),
        "class": "color-box"
      }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, " Breadcrumb color ", -1 /* HOISTED */)), _cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data26 = $data.data) === null || _$data$data26 === void 0 ? void 0 : _$data$data26.breadcrumb_color), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          backgroundColor: (_$data$data27 = $data.data) === null || _$data$data27 === void 0 ? void 0 : _$data$data27.breadcrumb_color
        }),
        "class": "color-box"
      }, null, 4 /* STYLE */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Created at", -1 /* HOISTED */)), _cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.enFormat((_$data$data28 = $data.data) === null || _$data$data28 === void 0 ? void 0 : _$data$data28.created_at)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Updated at", -1 /* HOISTED */)), _cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.enFormat((_$data$data29 = $data.data) === null || _$data$data29 === void 0 ? void 0 : _$data$data29.updated_at)), 1 /* TEXT */)])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[45] || (_cache[45] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Address", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "view_t_head"
      }, "Address", -1 /* HOISTED */)), _cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data30 = $data.data) === null || _$data$data30 === void 0 ? void 0 : _$data$data30.address), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
        src: (_$data$data31 = $data.data) === null || _$data$data31 === void 0 ? void 0 : _$data$data31.map,
        width: "100%",
        height: "auto",
        style: {
          "border": "0"
        },
        allowfullscreen: "",
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade"
      }, null, 8 /* PROPS */, _hoisted_32)])])])])])])])];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.color-box[data-v-687aaba9] {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 10px;\r\n    border: 1px solid #ccc;\n}\r\n\r\n/* for map */\n.address[data-v-687aaba9] {\r\n    padding: 15px;\r\n    background-color: #f9f9f9;\r\n    border: 1px solid #e1e1e1;\r\n    border-radius: 5px;\n}\n.address--maps[data-v-687aaba9] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.address--maps iframe[data-v-687aaba9] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.image-name[data-v-687aaba9] {\r\n    margin-top: 0.5rem;\r\n    /* Adjust spacing as needed */\r\n    font-size: 0.9rem;\r\n    color: #555;\r\n    /* Adjust color as needed */\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/admin/system/siteSettings/view.vue"],"names":[],"mappings":";AAiTA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;AACtB;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AAEA;IACI,kBAAkB;IAClB,6BAA6B;IAC7B,iBAAiB;IACjB,WAAW;IACX,2BAA2B;AAC/B","sourcesContent":["<template>\r\n    <view-page :defaultTable=\"false\" :showCreateRoute=\"false\" :showDeleteButton=\"false\">\r\n        <div class=\"viewer_devider\"></div>\r\n        <div class=\"view_page\">\r\n            <div class=\"row custom_row g-3\">\r\n                <div class=\"col-xl-6 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Media</span>\r\n                        <div class=\"view_file\">\r\n                            <div class=\"row g-3\">\r\n                                <div class=\"col-lg-4\">\r\n                                    <div class=\"view_file_item text-center\">\r\n                                        <div class=\"img\">\r\n                                            <img :src=\"data?.logo_one === 'no_server_image'\r\n                                                ? emptyServerImage()\r\n                                                : (data?.logo_one || emptyImage())\" alt=\"logo-image\"\r\n                                                class=\"img-fluid\" />\r\n\r\n                                        </div>\r\n                                        <div class=\"image-name\">Logo</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4\">\r\n                                    <div class=\"view_file_item text-center\">\r\n                                        <div class=\"img\">\r\n                                            <!-- <img :src=\"data?.logo_small_one ? data.logo_small_one : emptyImage()\" alt=\"\"\r\n                                                class=\"img-fluid\" /> -->\r\n                                            <img :src=\"data?.logo_small_one === 'no_server_image'\r\n                                                ? emptyServerImage()\r\n                                                : (data?.logo_small_one || emptyImage())\" alt=\"logo-image\"\r\n                                                class=\"img-fluid\" />\r\n                                        </div>\r\n                                        <div class=\"image-name\">Small Logo</div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4\">\r\n                                    <div class=\"view_file_item text-center\">\r\n                                        <div class=\"img\">\r\n                                            <!-- <img :src=\"data?.favicon ? data.favicon : emptyImage()\" alt=\"\"\r\n                                                class=\"img-fluid\" /> -->\r\n                                            <img :src=\"data?.favicon === 'no_server_image'\r\n                                                ? emptyServerImage()\r\n                                                : (data?.favicon || emptyImage())\" alt=\"logo-image\"\r\n                                                class=\"img-fluid\" />\r\n                                        </div>\r\n                                        <div class=\"image-name\">Favicon</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n\r\n                <div class=\"col-xl-6 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Links</span>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Web</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.web ?? \"\" }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Facebook</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.fb }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Twitter</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.tw }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Linkedin</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.ln }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Youtube</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.yt }}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n\r\n                <div class=\"col-xl-6 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Information</span>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Title</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.title ?? \"\" }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Short Title</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.short_title ?? \"\" }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">\r\n                                            Contact Email\r\n                                        </th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.contact_email ?? \"\" }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">\r\n                                            Feedback Email\r\n                                        </th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            {{ data?.feedback_email ?? \"\" }}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Mobile One</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.mobile1 ?? \"\" }}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Mobile One</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.mobile2 ?? \"\" }}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Color</span>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">\r\n                                            Sidebar footer color\r\n                                        </th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            <span>{{\r\n                                                data?.sidebar_footer_color\r\n                                            }}</span>\r\n                                            <span :style=\"{\r\n                                                backgroundColor:\r\n                                                    data?.sidebar_footer_color,\r\n                                            }\" class=\"color-box\">\r\n                                            </span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">\r\n                                            Sidebar top color\r\n                                        </th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            <span>{{\r\n                                                data?.sidebar_top_color\r\n                                            }}</span>\r\n                                            <span :style=\"{\r\n                                                backgroundColor:\r\n                                                    data?.sidebar_top_color,\r\n                                            }\" class=\"color-box\">\r\n                                            </span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">\r\n                                            Sidebar color\r\n                                        </th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            <span>{{\r\n                                                data?.sidebar_color\r\n                                            }}</span>\r\n                                            <span :style=\"{\r\n                                                backgroundColor:\r\n                                                    data?.sidebar_color,\r\n                                            }\" class=\"color-box\">\r\n                                            </span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">\r\n                                            Navbar color\r\n                                        </th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            <span>{{\r\n                                                data?.navbar_color\r\n                                            }}</span>\r\n                                            <span :style=\"{\r\n                                                backgroundColor:\r\n                                                    data?.navbar_color,\r\n                                            }\" class=\"color-box\">\r\n                                            </span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">\r\n                                            Breadcrumb color\r\n                                        </th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            <span>{{\r\n                                                data?.breadcrumb_color\r\n                                            }}</span>\r\n                                            <span :style=\"{\r\n                                                backgroundColor:\r\n                                                    data?.breadcrumb_color,\r\n                                            }\" class=\"color-box\">\r\n                                            </span>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Created at</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            {{ enFormat(data?.created_at) }}\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Updated at</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>\r\n                                            {{ enFormat(data?.updated_at) }}\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n\r\n                <div class=\"col-xl-6 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Address</span>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <th class=\"view_t_head\">Address</th>\r\n                                        <th style=\"text-align: center\">:</th>\r\n                                        <td>{{ data?.address }}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-12 mt-2\">\r\n                                <div class=\"address--maps mt-4\">\r\n                                    <iframe :src=\"data?.map\" width=\"100%\" height=\"auto\" style=\"border: 0\"\r\n                                        allowfullscreen=\"\" loading=\"lazy\"\r\n                                        referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </view-page>\r\n</template>\r\n\r\n<script>\r\nconst model = \"siteSetting\";\r\n\r\nexport default {\r\n    data() {\r\n        return {\r\n            page_title: \"Site Settings\",\r\n            model: model,\r\n            data: {},\r\n            page_type: 'view',\r\n        };\r\n    },\r\n    created() {\r\n        // this.setBreadcrumbs(this.model, \"view\", \"\", `${this.model}.show`);\r\n        // await this.get_data(`${this.model}/${this.$route.params}`);\r\n        this.$root.spinner = true;\r\n        axios\r\n            .get(this.model)\r\n            .then((res) => {\r\n                this.data = res.data;\r\n            })\r\n            .catch((error) => {\r\n                console.log(error);\r\n                this.$toast(\"Something went wrong\");\r\n                return false;\r\n            })\r\n            .finally(() => {\r\n                this.$root.spinner = false;\r\n            });\r\n    },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n.color-box {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 10px;\r\n    border: 1px solid #ccc;\r\n}\r\n\r\n/* for map */\r\n.address {\r\n    padding: 15px;\r\n    background-color: #f9f9f9;\r\n    border: 1px solid #e1e1e1;\r\n    border-radius: 5px;\r\n}\r\n\r\n.address--maps {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.address--maps iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.image-name {\r\n    margin-top: 0.5rem;\r\n    /* Adjust spacing as needed */\r\n    font-size: 0.9rem;\r\n    color: #555;\r\n    /* Adjust color as needed */\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_687aaba9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_687aaba9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_687aaba9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/view.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/view.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_vue_vue_type_template_id_687aaba9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=687aaba9&scoped=true */ "./resources/js/views/admin/system/siteSettings/view.vue?vue&type=template&id=687aaba9&scoped=true");
/* harmony import */ var _view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js */ "./resources/js/views/admin/system/siteSettings/view.vue?vue&type=script&lang=js");
/* harmony import */ var _view_vue_vue_type_style_index_0_id_687aaba9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css */ "./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_view_vue_vue_type_template_id_687aaba9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-687aaba9"],['__file',"resources/js/views/admin/system/siteSettings/view.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/view.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/view.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/view.vue?vue&type=template&id=687aaba9&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/view.vue?vue&type=template&id=687aaba9&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_687aaba9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_687aaba9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=template&id=687aaba9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=template&id=687aaba9&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_687aaba9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/view.vue?vue&type=style&index=0&id=687aaba9&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_system_siteSettings_view_vue.js.map