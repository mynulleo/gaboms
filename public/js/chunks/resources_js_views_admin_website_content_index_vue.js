"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_content_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var model = "content";
var tableColumns = [{
  field: "title",
  title: "Title"
}, {
  field: "image_three",
  zoom_field: "image_one",
  title: "Image",
  image: true,
  imgWidth: "30px",
  align: "center",
  enable_data_sorting: false
}, {
  field: "status",
  title: "Status",
  align: "center"
}, {
  field: "created_at",
  title: "Created at",
  date: true
}];
var json_fields = {
  title: "title",
  "created at": "created_at"
};
var routes = {
  destroy: "content.destroy"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this$$route$query$pa, _this$$route$query$fi, _this$$route$query$va, _this$$route$query$st;
    return {
      page_title: "Content List",
      model: model,
      json_fields: json_fields,
      fields_name: {
        "default": "Select One",
        title: "Title"
      },
      search_data: {
        pagination: (_this$$route$query$pa = this.$route.query.pagination) !== null && _this$$route$query$pa !== void 0 ? _this$$route$query$pa : 10,
        field_name: (_this$$route$query$fi = this.$route.query.field_name) !== null && _this$$route$query$fi !== void 0 ? _this$$route$query$fi : "",
        value: (_this$$route$query$va = this.$route.query.value) !== null && _this$$route$query$va !== void 0 ? _this$$route$query$va : "",
        status: (_this$$route$query$st = this.$route.query.status) !== null && _this$$route$query$st !== void 0 ? _this$$route$query$st : ""
      },
      table: {
        columns: tableColumns,
        routes: routes,
        datas: [],
        meta: [],
        links: []
      }
    };
  },
  provide: function provide() {
    return {
      model: this.model,
      fields_name: this.fields_name,
      search_data: this.search_data,
      table: this.table,
      customDataUrl: this.model,
      customRouteName: "content.index",
      json_fields: this.json_fields,
      search: this.search,
      validate: this.validation
    };
  },
  methods: {
    search: function search() {
      this.$router.push({
        name: this.model + '.index',
        query: _objectSpread({}, this.search_data)
      });
      this.get_paginate(this.model, this.search_data);
    }
  },
  created: function created() {
    this.scrollTop();
    this.setBreadcrumbs(this.model, "index", "Content");
    this.search();
    this.table.routes.array = [{
      title: "View",
      route: "content.show",
      content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\n                            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n                            stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                            class=\"icon icon-tabler icons-tabler-outline icon-tabler-eye\">\n                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\n                            <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" />\n                            <path\n                                d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" />\n                        </svg>",
      "class": "text-primary",
      isQuery: true,
      slug: true
    }, {
      title: "Edit",
      route: "content.edit",
      content: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\n                            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n                            stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                            class=\"icon icon-tabler icons-tabler-outline icon-tabler-pencil\">\n                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\n                            <path d=\"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4\" />\n                            <path d=\"M13.5 6.5l4 4\" />\n                        </svg>",
      "class": "text-info",
      isQuery: true,
      slug: true
    }];
  },
  validators: {
    "search_data.status": function search_dataStatus() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/index.vue?vue&type=template&id=337a0059":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/index.vue?vue&type=template&id=337a0059 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_index_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("index-page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_index_page, null, {
    "search-field": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return _cache[0] || (_cache[0] = []);
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/views/admin/website/content/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/admin/website/content/index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_337a0059__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=337a0059 */ "./resources/js/views/admin/website/content/index.vue?vue&type=template&id=337a0059");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/content/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_337a0059__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/website/content/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/content/index.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/content/index.vue?vue&type=template&id=337a0059":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/index.vue?vue&type=template&id=337a0059 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_337a0059__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_337a0059__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=337a0059 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/index.vue?vue&type=template&id=337a0059");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_website_content_index_vue.js.map