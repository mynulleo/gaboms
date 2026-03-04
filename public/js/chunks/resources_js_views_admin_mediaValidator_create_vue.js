"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_mediaValidator_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/mediaValidator/create.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/mediaValidator/create.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = "mediaValidator";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      model: model,
      page_title: "",
      data: {
        model_name: "",
        field_name: "",
        field_type: "",
        max_size: "",
        min_width: "",
        min_height: "",
        resize_value: []
      },
      field_types: [{
        name: "File",
        value: "file"
      }, {
        name: "Image",
        value: "image"
      }]
    };
  },
  provide: function provide() {
    return {
      validate: this.validation
    };
  },
  methods: {
    resetImageFields: function resetImageFields() {
      this.data.min_width = "";
      this.data.min_height = "";
      this.data.resize_value = [];
    },
    submit: function submit(e) {
      var _this = this;
      this.$validate().then(function (res) {
        var error = _this.validation.countErrors();
        if (error > 0) {
          _this.$toast("You need to fill " + error + " more empty mandatory fields", "warning");
          return false;
        }
        if (res) {
          if (_this.data.field_type !== "image") {
            _this.resetImageFields();
          }
          if (_this.data.id) {
            _this.update(_this.model, _this.data, _this.data.id);
          } else {
            _this.store(_this.model, _this.data);
          }
        }
      });
    }
  },
  created: function created() {
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + " Edit";
      this.get_data("".concat(this.model, "/").concat(this.$route.params.id));
    } else {
      this.page_title = this.headline(this.model) + " Create";
    }
  },
  validators: {
    "data.model_name": function dataModel_name() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Model Name is required");
    },
    "data.field_name": function dataField_name() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Field Name is required");
    },
    "data.field_type": function dataField_type() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Field Type is required");
    },
    "data.max_size": function dataMax_size() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Max Size is required").digit().minLength(1);
    },
    "data.min_width, data.field_type": function dataMin_widthDataField_type() {
      var minWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fieldType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (fieldType === "image") {
        return Validator.value(minWidth).required("Min Width is required").digit().minLength(1);
      } else {
        return Validator.value(minWidth);
      }
    },
    "data.min_height, data.field_type": function dataMin_heightDataField_type() {
      var minHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fieldType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (fieldType === "image") {
        return Validator.value(minHeight).required("Min Height is required").digit().minLength(1);
      } else {
        return Validator.value(minHeight);
      }
    },
    "data.resize_value, data.field_type": function dataResize_valueDataField_type() {
      var resizeValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fieldType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (fieldType === "image") {
        return Validator.value(resizeValue).required("Resize Value is required");
      } else {
        return Validator.value(resizeValue);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/mediaValidator/create.vue?vue&type=template&id=0c30f2ee":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/mediaValidator/create.vue?vue&type=template&id=0c30f2ee ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_Select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select");
  var _component_x_multiple_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("x-multiple-select");
  var _component_Switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Switch");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        modelValue: $data.data.model_name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.data.model_name = $event;
        }),
        field: "data.model_name",
        title: "Model Name",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        modelValue: $data.data.field_name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.data.field_name = $event;
        }),
        field: "data.field_name",
        title: "Field Name",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select, {
        field: "data.field_type",
        title: "Field Type",
        modelValue: $data.data.field_type,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.data.field_type = $event;
        }),
        label: "name",
        reduce: function reduce(obj) {
          return obj.value;
        },
        options: $data.field_types,
        placeholder: "--Select One--",
        closeOnSelect: true,
        required: ""
      }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        modelValue: $data.data.max_size,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.data.max_size = $event;
        }),
        field: "data.max_size",
        title: "Max Size (KB)",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue"]), $data.data.field_type === 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        modelValue: $data.data.min_width,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.data.min_width = $event;
        }),
        field: "data.min_width",
        title: "Min Width (PX)",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        modelValue: $data.data.min_height,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.data.min_height = $event;
        }),
        field: "data.min_height",
        title: "Min Height (PX)",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_x_multiple_select, {
        modelValue: $data.data.resize_value,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.data.resize_value = $event;
        }),
        field: "data.resize_value",
        title: "Resize Value (Width x Height) - Set big to small size",
        placeholder: "Type & press enter. Example: 900x600.",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue"])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
        modelValue: $data.data.status,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.data.status = $event;
        }),
        field: "data.status",
        title: "Status",
        "on-label": "Active",
        "off-label": "Deactive",
        required: ""
      }, null, 8 /* PROPS */, ["modelValue"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./resources/js/views/admin/mediaValidator/create.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/admin/mediaValidator/create.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_0c30f2ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=0c30f2ee */ "./resources/js/views/admin/mediaValidator/create.vue?vue&type=template&id=0c30f2ee");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/mediaValidator/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_0c30f2ee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/mediaValidator/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/mediaValidator/create.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/mediaValidator/create.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/mediaValidator/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/mediaValidator/create.vue?vue&type=template&id=0c30f2ee":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/mediaValidator/create.vue?vue&type=template&id=0c30f2ee ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_0c30f2ee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_0c30f2ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=0c30f2ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/mediaValidator/create.vue?vue&type=template&id=0c30f2ee");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_mediaValidator_create_vue.js.map