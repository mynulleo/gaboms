"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_system_activityLog_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/activityLog/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/activityLog/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
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
var model = "activityLog";

// Define table columns...
var tableColumns = [{
  field: "log_name",
  title: "Module"
}, {
  field: "description",
  title: "Description"
}, {
  field: "status",
  title: "Status",
  align: "center"
}, {
  field: "created_at",
  title: "Created at",
  date: true
}];

// Define excel column...
var json_fields = {
  Module: "log_name",
  Description: "description",
  Status: "status",
  "Created at": "created_at"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this$$route$query$pa, _this$$route$query$fi, _this$$route$query$va, _this$$route$query$de, _this$$route$query$ac, _this$$route$query$st, _this$$route$query$fr, _this$$route$query$to;
    return {
      page_title: "Activity Log",
      modules: {
        types: [{
          name: "All",
          value: ""
        }, {
          name: "Created",
          value: "Created"
        }, {
          name: "Updated",
          value: "Updated"
        }, {
          name: "Deleted",
          value: "Deleted"
        }],
        status: [{
          name: "All",
          value: ""
        }, {
          name: "Read",
          value: "r"
        }, {
          name: "Unread",
          value: "ur"
        }, {
          name: "Restored",
          value: "restored"
        }]
      },
      model: model,
      json_fields: json_fields,
      fields_name: {
        "default": "Select One",
        log_name: "Module",
        description: "Description"
      },
      search_data: {
        pagination: (_this$$route$query$pa = this.$route.query.pagination) !== null && _this$$route$query$pa !== void 0 ? _this$$route$query$pa : 10,
        field_name: (_this$$route$query$fi = this.$route.query.field_name) !== null && _this$$route$query$fi !== void 0 ? _this$$route$query$fi : "",
        value: (_this$$route$query$va = this.$route.query.value) !== null && _this$$route$query$va !== void 0 ? _this$$route$query$va : "",
        description: (_this$$route$query$de = this.$route.query.description) !== null && _this$$route$query$de !== void 0 ? _this$$route$query$de : "",
        action: (_this$$route$query$ac = this.$route.query.action) !== null && _this$$route$query$ac !== void 0 ? _this$$route$query$ac : "",
        status: (_this$$route$query$st = this.$route.query.status) !== null && _this$$route$query$st !== void 0 ? _this$$route$query$st : "",
        from_date: (_this$$route$query$fr = this.$route.query.from_date) !== null && _this$$route$query$fr !== void 0 ? _this$$route$query$fr : "",
        to_date: (_this$$route$query$to = this.$route.query.to_date) !== null && _this$$route$query$to !== void 0 ? _this$$route$query$to : ""
      },
      extraData: {
        admins: []
      },
      table: {
        columns: tableColumns,
        routes: {
          view: model + ".show",
          destroy: model + ".destroy"
        },
        datas: [],
        meta: [],
        links: []
      }
    };
  },
  provide: function provide() {
    return {
      validate: this.validation,
      model: this.model,
      fields_name: this.fields_name,
      search_data: this.search_data,
      table: this.table,
      search: this.search,
      resetSearchData: this.resetSearchData
    };
  },
  methods: {
    destroy: function destroy(id) {
      this.destroy_data(this.model, id, this.search_data);
    },
    search: function search() {
      this.$router.push({
        name: this.model + ".index",
        query: _objectSpread({}, this.search_data)
      });
      this.get_paginate(this.model, this.search_data);
    },
    resetSearchData: function resetSearchData() {
      this.search_data.pagination = 10;
      this.search_data.field_name = "";
      this.search_data.value = "";
      this.search_data.status = "";
      this.search_data.from_date = "";
      this.search_data.to_date = "";
      this.search_data.description = "";
      this.search_data.action = "";
    },
    allRead: function allRead() {
      var _this = this;
      this.$root.spinner = true;
      axios.get("/allRead").then(function (res) {
        _this.search();
        _this.$toast(res.data.message, "success");
      })["catch"](function (error) {
        return console.log();
      }).then(function (alw) {
        return setTimeout(function () {
          return _this.$root.spinner = false;
        }, 200);
      });
    }
  },
  created: function created() {
    this.getRouteName(this.model);
    this.setBreadcrumbs(this.model, "index", "Activity Log");
    this.search();
    this.get_paginate("admin", {
      allData: true
    }, "admins");
  },
  validators: {
    "search_data.to_date": function search_dataTo_date() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/activityLog/index.vue?vue&type=template&id=df2b90d2":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/activityLog/index.vue?vue&type=template&id=df2b90d2 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_date_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("date-picker");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_v_select_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select-container");
  var _component_index_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("index-page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_index_page, {
    show_status: false
  }, {
    "search-field": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_date_picker, {
        id: "date1",
        field: "search_data.from_date",
        name: "from_date",
        modelValue: $data.search_data.from_date,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.search_data.from_date = $event;
        }),
        title: "From Date",
        placeholder: "dd/mm/yyyy",
        req: true,
        col: "3",
        label: "From Date"
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_date_picker, {
        id: "date2",
        field: "search_data.to_date",
        name: "to_date",
        modelValue: $data.search_data.to_date,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.search_data.to_date = $event;
        }),
        title: "To Date",
        placeholder: "dd/mm/yyyy",
        req: true,
        col: "3",
        label: "To Date"
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select_container, {
        title: "Select User",
        field: "search_data.description"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
            modelValue: $data.search_data.description,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.search_data.description = $event;
            }),
            label: "name",
            reduce: function reduce(obj) {
              return obj.name;
            },
            options: $data.extraData.admins,
            placeholder: "--Select User--",
            closeOnSelect: true
          }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select_container, {
        title: "Select Type",
        field: "search_data.action"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
            modelValue: $data.search_data.action,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.search_data.action = $event;
            }),
            label: "name",
            reduce: function reduce(obj) {
              return obj.value;
            },
            options: $data.modules.types,
            placeholder: "--Select Type--",
            closeOnSelect: true
          }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select_container, {
        title: "Select Status",
        field: "search_data.status"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
            modelValue: $data.search_data.status,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.search_data.status = $event;
            }),
            label: "name",
            reduce: function reduce(obj) {
              return obj.value;
            },
            options: $data.modules.status,
            placeholder: "--Select Status--",
            closeOnSelect: true
          }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"])];
        }),
        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/views/admin/system/activityLog/index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/admin/system/activityLog/index.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_df2b90d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=df2b90d2 */ "./resources/js/views/admin/system/activityLog/index.vue?vue&type=template&id=df2b90d2");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/views/admin/system/activityLog/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_df2b90d2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/system/activityLog/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/system/activityLog/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/system/activityLog/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/activityLog/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/system/activityLog/index.vue?vue&type=template&id=df2b90d2":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/system/activityLog/index.vue?vue&type=template&id=df2b90d2 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_df2b90d2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_df2b90d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=df2b90d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/activityLog/index.vue?vue&type=template&id=df2b90d2");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_system_activityLog_index_vue.js.map