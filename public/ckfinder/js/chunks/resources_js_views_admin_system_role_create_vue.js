"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_system_role_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/role/create.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/role/create.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = "role";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      model: model,
      checkAll: null,
      data: {
        status: "active",
        permissions: []
      },
      extraData: {
        permissions: []
      },
      errors: {}
    };
  },
  provide: function provide() {
    return {
      validate: this.validation
    };
  },
  watch: {
    /* checkAll: function (val, oldval) {
        this.data.permissions = [];
        if (val) {
            this.extraData.permissions.forEach((permission) => {
                permission.children.forEach((process) => {
                    this.data.permissions.push(process.id);
                });
            });
        }
    }, */
    checkAll: function checkAll(val, oldval) {
      var _this = this;
      this.data.permissions = [];
      if (val) {
        this.extraData.permissions.forEach(function (permission) {
          permission.selected = true;
          permission.children.forEach(function (process) {
            _this.data.permissions.push(process.id);
          });
        });
      } else {
        this.extraData.permissions.forEach(function (permission) {
          permission.selected = false;
        });
      }
    }
  },
  methods: {
    submit: function submit() {
      var _this2 = this;
      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        if (error > 0) {
          console.log(_this2.validation.allErrors());
          _this2.$toast("You need to fill " + error + " more empty mandatory fields", "warning");
        }
        if (res) {
          if (_this2.data.id) {
            _this2.update(_this2.model, _this2.data, _this2.data.id);
          } else {
            _this2.store(_this2.model, _this2.data);
          }
        }
      });
    },
    // module wise permission
    togglePermission: function togglePermission(permission) {
      var _this3 = this;
      if (permission.selected) {
        permission.children.forEach(function (process) {
          if (!_this3.data.permissions.includes(process.id)) {
            _this3.data.permissions.push(process.id);
          }
        });
      } else {
        permission.children.forEach(function (process) {
          _this3.data.permissions = _this3.data.permissions.filter(function (id) {
            return id !== process.id;
          });
        });
      }
    }
  },
  created: function created() {
    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit");
      this.get_data("".concat(this.model, "/").concat(this.$route.params.id));
    } else {
      this.setBreadcrumbs(this.model, "create");
    }
    this.get_paginate("get-permissions", {
      allData: true
    }, "permissions");
  },
  // ================== validation rule for form ==================
  validators: {
    "data.name": function dataName() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Name is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/role/create.vue?vue&type=template&id=0863d1d8":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/role/create.vue?vue&type=template&id=0863d1d8 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-3 d-flex"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "All", -1 /* HOISTED */);
var _hoisted_3 = {
  key: 0,
  border: "1",
  "class": "table border table-hover"
};
var _hoisted_4 = {
  "class": "controller",
  style: {
    "vertical-align": "middle"
  }
};
var _hoisted_5 = ["onUpdate:modelValue", "onChange"];
var _hoisted_6 = {
  "class": "action-wraper"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "text-capitalize"
};
var _hoisted_9 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_Radio = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Radio");
  var _component_Fieldset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fieldset");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Primary Info")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            modelValue: $data.data.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.data.name = $event;
            }),
            field: "data.name",
            title: "Name",
            req: true
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Radio, {
            modelValue: $data.data.status,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.data.status = $event;
            }),
            field: "data.status",
            title: "Status",
            list: [{
              value: 'active',
              title: 'Active'
            }, {
              value: 'deactive',
              title: 'Deactive'
            }],
            req: true,
            col: "2"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Permission Setting")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            value: "1",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.checkAll = $event;
            }),
            "class": "me-2",
            style: {
              "width": "20px"
            }
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.checkAll]]), _hoisted_2]), $data.extraData.permissions ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("table", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.extraData.permissions, function (perm, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
              key: index
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              type: "checkbox",
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return perm.selected = $event;
              },
              onChange: function onChange($event) {
                return $options.togglePermission(perm);
              },
              "class": "me-2",
              style: {
                "width": "15px"
              }
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, perm.selected]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(perm.name.replace("Controller", "")), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(perm.children, function (process, index2) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: index2,
                "class": "col-3 actions"
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
                type: "checkbox",
                value: process.id,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                  return $data.data.permissions = $event;
                })
              }, null, 8 /* PROPS */, _hoisted_9), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.data.permissions]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$filter.capitalize(process.name)), 1 /* TEXT */)])]);
            }), 128 /* KEYED_FRAGMENT */))])])]);
          }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <legend class=\"\" style=\"font-size: 1.2rem\">\n          <p class=\"p-0 m-0\">\n\n            <span class=\"float-right pl-2\">\n              <input type=\"checkbox\" value=\"1\" v-model=\"checkAll\" />\n              <small>All</small>\n            </span>\n          </p>\n        </legend> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        title: "Submit",
        "class": "aus-btn",
        process: ""
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./resources/js/views/admin/system/role/create.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/system/role/create.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_0863d1d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=0863d1d8 */ "./resources/js/views/admin/system/role/create.vue?vue&type=template&id=0863d1d8");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/system/role/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_0863d1d8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/system/role/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/system/role/create.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/system/role/create.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/role/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/system/role/create.vue?vue&type=template&id=0863d1d8":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/system/role/create.vue?vue&type=template&id=0863d1d8 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_0863d1d8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_0863d1d8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=0863d1d8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/role/create.vue?vue&type=template&id=0863d1d8");


/***/ })

}]);