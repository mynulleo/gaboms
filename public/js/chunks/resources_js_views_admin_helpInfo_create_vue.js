"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_helpInfo_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/helpInfo/create.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/helpInfo/create.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Form_CKEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Form/CKEditor */ "./resources/js/components/Form/CKEditor.vue");

var model = 'helpInfo';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Editor: _components_Form_CKEditor__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      model: model,
      page_title: '',
      data: {
        status: 'active'
      },
      page_type: {}
    };
  },
  provide: function provide() {
    return {
      validate: this.validation
    };
  },
  methods: {
    submit: function submit(e) {
      var _this = this;
      this.$validate().then(function (res) {
        var error = _this.validation.countErrors();
        if (error > 0) {
          console.log(_this.validation.allErrors());
          _this.$toast('You need to fill ' + error + ' more empty mandatory fields', 'warning');
          return false;
        }
        if (res) {
          var form = document.getElementById('form');
          var formData = new FormData(form);
          if (_this.data.description) {
            formData.append("description", _this.data.description);
          }
          formData.append('page_type', _this.data.page_type);
          formData.append('status', _this.data.status);
          if (_this.data.id) {
            _this.update(_this.model, formData, _this.data.id, true);
          } else {
            _this.store(_this.model, formData);
          }
        }
      });
    },
    getPageType: function getPageType() {
      this.page_type = [{
        name: 'Index Page',
        value: 'index'
      }, {
        name: 'Create Page',
        value: 'create'
      }, {
        name: 'View Page',
        value: 'view'
      }];
    }
  },
  created: function created() {
    this.getPageType();
    if (this.$route.params.id) {
      this.page_title = this.headline(this.model) + ' Edit';
      this.get_data("".concat(this.model, "/").concat(this.$route.params.id));
    } else {
      this.page_title = this.headline(this.model) + ' Create';
      this.get_sorting("HelpInfo");
    }
  },
  validators: {
    "data.model_name": function dataModel_name() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Module Name is required");
    },
    "data.page_type": function dataPage_type() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Page Type is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/helpInfo/create.vue?vue&type=template&id=6e740b4d":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/helpInfo/create.vue?vue&type=template&id=6e740b4d ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_Select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select");
  var _component_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("editor");
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
        req: true,
        col: "4"
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select, {
        title: "Page Type",
        modelValue: $data.data.page_type,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.data.page_type = $event;
        }),
        field: "data.page_type",
        label: "name",
        reduce: function reduce(obj) {
          return obj.value;
        },
        options: $data.page_type,
        placeholder: "--Select One--",
        closeOnSelect: true,
        required: false,
        col: "4",
        req: true
      }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Sorting",
        field: "data.sorting",
        modelValue: $data.data.sorting,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.data.sorting = $event;
        }),
        req: true,
        col: "3",
        type: "number"
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_editor, {
        modelValue: $data.data.description,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.data.description = $event;
        }),
        title: "Description",
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
        modelValue: $data.data.status,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.data.status = $event;
        }),
        field: "data.status",
        title: "Status",
        "on-label": "Active",
        "off-label": "Deactive",
        req: true
      }, null, 8 /* PROPS */, ["modelValue"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./resources/js/views/admin/helpInfo/create.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/admin/helpInfo/create.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_6e740b4d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=6e740b4d */ "./resources/js/views/admin/helpInfo/create.vue?vue&type=template&id=6e740b4d");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/helpInfo/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_6e740b4d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/helpInfo/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/helpInfo/create.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/helpInfo/create.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/helpInfo/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/helpInfo/create.vue?vue&type=template&id=6e740b4d":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/helpInfo/create.vue?vue&type=template&id=6e740b4d ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_6e740b4d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_6e740b4d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=6e740b4d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/helpInfo/create.vue?vue&type=template&id=6e740b4d");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_helpInfo_create_vue.js.map