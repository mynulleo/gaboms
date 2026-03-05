"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_pageSeo_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/pageSeo/create.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/pageSeo/create.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var model = 'pageSeo';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page_title: "",
      model: model,
      data: {
        original_image: "",
        meta_tag: [],
        meta_description: '',
        status: 'active',
        sorting: 0
      },
      is_meta: false,
      pages: '',
      image: {
        original_image: ""
      }
    };
  },
  provide: function provide() {
    var _this = this;
    return {
      validate: this.validation,
      data: function data() {
        return _this.data;
      },
      image: this.image
    };
  },
  methods: {
    submit: function submit(e) {
      var _this2 = this;
      this.$validate().then(function (res) {
        var error = _this2.validation.countErrors();
        if (error > 0) {
          console.log(_this2.validation.allErrors());
          _this2.$toast('You need to fill ' + error + ' more empty mandatory fields', 'warning');
          return false;
        }
        if (res) {
          var _this2$$root$media_va, _this2$$root$media_va2;
          var form = document.getElementById("form");
          var formData = new FormData(form);
          formData.append("page_id", _this2.data.page_id);
          formData.append("status", _this2.data.status);
          if (_this2.data.meta_tag && _this2.data.meta_tag.length > 0) {
            formData.append("meta_tag", JSON.stringify(_this2.data.meta_tag));
          } else {
            formData.append("meta_tag", JSON.stringify([]));
          }
          if (_this2.data.original_image) {
            formData.append("image_base64", _this2.data.original_image);
          }
          formData.append("image_resize_value", (_this2$$root$media_va = (_this2$$root$media_va2 = _this2.$root.media_validators) === null || _this2$$root$media_va2 === void 0 || (_this2$$root$media_va2 = _this2$$root$media_va2.image) === null || _this2$$root$media_va2 === void 0 ? void 0 : _this2$$root$media_va2.resize_value) !== null && _this2$$root$media_va !== void 0 ? _this2$$root$media_va : "");
          if (_this2.data.id) {
            _this2.update(_this2.model, formData, _this2.data.id, true);
          } else {
            _this2.store(_this2.model, formData);
          }
        }
      });
    },
    // track of meta
    updateIsMeta: function updateIsMeta() {
      this.is_meta = !!(this.data.meta_tag && this.data.meta_tag.length > 0) || !!(this.data.meta_description && this.data.meta_description.trim() !== '');
    },
    // All Api
    getPages: function getPages() {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("support/page").then(function (res) {
        _this3.pages = res.data;
      })["catch"](function (error) {
        console.error('Error fetching pages:', error);
      });
    }
  },
  watch: {
    'data.meta_tag': function dataMeta_tag(newVal) {
      this.updateIsMeta();
    },
    'data.meta_description': function dataMeta_description(newVal) {
      this.updateIsMeta();
    }
  },
  created: function created() {
    this.getPages();
    this.updateIsMeta();
    if (this.$route.params.id) {
      this.page_title = "Page SEO Edit";
      this.get_data("".concat(this.model, "/").concat(this.$route.params.id));
    } else {
      this.page_title = "Page SEO Create";
      this.get_sorting("PageSeo");
    }
    this.getMediaValidators("PageSeo");
  },
  validators: {
    "data.page_id": function dataPage_id() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Page is required");
    },
    "data.status": function dataStatus() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Status is required");
    },
    "data.meta_tag": function dataMeta_tag() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Meta Tag is required");
    },
    "data.sorting": function dataSorting() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).digit().regex("^[0-9]*$").required("Sorting is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/pageSeo/create.vue?vue&type=template&id=45db0ec8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/pageSeo/create.vue?vue&type=template&id=45db0ec8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-xl-3 col-lg-4"
};
var _hoisted_2 = {
  "class": "col-lg-12"
};
var _hoisted_3 = {
  "class": "row g-3"
};
var _hoisted_4 = {
  "class": "col-12"
};
var _hoisted_5 = {
  "class": "col-12"
};
var _hoisted_6 = {
  "class": "form-element"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_File = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("File");
  var _component_GlobalCrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GlobalCrop");
  var _component_Select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select");
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_x_multiple_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("x-multiple-select");
  var _component_Fieldset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fieldset");
  var _component_Switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Switch");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _ctx$$root$media_vali, _ctx$$root$media_vali2, _ctx$$root$media_vali3, _ctx$$root$media_vali4, _ctx$$root$media_vali5, _ctx$$root$media_vali6, _ctx$$root$media_vali7, _ctx$$root$media_vali8, _ctx$$root$media_vali9, _ctx$$root$media_vali10, _ctx$$root$media_vali11, _ctx$$root$media_vali12, _ctx$$root$media_vali13, _ctx$$root$media_vali14;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
        title: "Image",
        field: "data.original_image",
        mime: "img",
        fileClassName: "file2",
        showCrop: true,
        vHeight: (_ctx$$root$media_vali = (_ctx$$root$media_vali2 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali2 === void 0 || (_ctx$$root$media_vali2 = _ctx$$root$media_vali2.image) === null || _ctx$$root$media_vali2 === void 0 ? void 0 : _ctx$$root$media_vali2.min_height) !== null && _ctx$$root$media_vali !== void 0 ? _ctx$$root$media_vali : 600,
        vWidth: (_ctx$$root$media_vali3 = (_ctx$$root$media_vali4 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali4 === void 0 || (_ctx$$root$media_vali4 = _ctx$$root$media_vali4.image) === null || _ctx$$root$media_vali4 === void 0 ? void 0 : _ctx$$root$media_vali4.min_width) !== null && _ctx$$root$media_vali3 !== void 0 ? _ctx$$root$media_vali3 : 600,
        vSizeInKb: (_ctx$$root$media_vali5 = (_ctx$$root$media_vali6 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali6 === void 0 || (_ctx$$root$media_vali6 = _ctx$$root$media_vali6.image) === null || _ctx$$root$media_vali6 === void 0 ? void 0 : _ctx$$root$media_vali6.max_size) !== null && _ctx$$root$media_vali5 !== void 0 ? _ctx$$root$media_vali5 : 5000,
        col: "12 col-12"
      }, null, 8 /* PROPS */, ["vHeight", "vWidth", "vSizeInKb"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GlobalCrop, {
        field: "data.original_image",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.data.original_image = $event;
        }),
        image: $data.image.original_image,
        aspectRatio: {
          aspectRatio: ((_ctx$$root$media_vali7 = (_ctx$$root$media_vali8 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali8 === void 0 || (_ctx$$root$media_vali8 = _ctx$$root$media_vali8.image) === null || _ctx$$root$media_vali8 === void 0 ? void 0 : _ctx$$root$media_vali8.min_width) !== null && _ctx$$root$media_vali7 !== void 0 ? _ctx$$root$media_vali7 : 600) / ((_ctx$$root$media_vali9 = (_ctx$$root$media_vali10 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali10 === void 0 || (_ctx$$root$media_vali10 = _ctx$$root$media_vali10.image) === null || _ctx$$root$media_vali10 === void 0 ? void 0 : _ctx$$root$media_vali10.min_height) !== null && _ctx$$root$media_vali9 !== void 0 ? _ctx$$root$media_vali9 : 600)
        },
        minWidth: (_ctx$$root$media_vali11 = (_ctx$$root$media_vali12 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali12 === void 0 || (_ctx$$root$media_vali12 = _ctx$$root$media_vali12.image) === null || _ctx$$root$media_vali12 === void 0 ? void 0 : _ctx$$root$media_vali12.min_width) !== null && _ctx$$root$media_vali11 !== void 0 ? _ctx$$root$media_vali11 : 600,
        minHeight: (_ctx$$root$media_vali13 = (_ctx$$root$media_vali14 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali14 === void 0 || (_ctx$$root$media_vali14 = _ctx$$root$media_vali14.image) === null || _ctx$$root$media_vali14 === void 0 ? void 0 : _ctx$$root$media_vali14.min_height) !== null && _ctx$$root$media_vali13 !== void 0 ? _ctx$$root$media_vali13 : 600
      }, null, 8 /* PROPS */, ["image", "aspectRatio", "minWidth", "minHeight"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select, {
        field: "data.page_id",
        title: "Select Page",
        modelValue: $data.data.page_id,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.data.page_id = $event;
        }),
        label: "title",
        reduce: function reduce(obj) {
          return obj.id;
        },
        options: $data.pages,
        placeholder: "--Select One--",
        closeOnSelect: true,
        req: true
      }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Sorting",
        field: "data.sorting",
        modelValue: $data.data.sorting,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.data.sorting = $event;
        }),
        col: "4 col-xl-3",
        type: "number",
        req: true
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Meta Information")]);
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_x_multiple_select, {
            modelValue: $data.data.meta_tag,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.data.meta_tag = $event;
            }),
            field: "data.meta_tag",
            title: "Meta Keywords",
            required: "",
            col: "12"
          }, null, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
            "for": "",
            "class": "form-label"
          }, "Meta Description", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
            name: "meta_description",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.data.meta_description = $event;
            }),
            "class": "form-control",
            id: "",
            cols: "30",
            rows: "4"
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.meta_description]])])])])];
        }),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
        modelValue: $data.data.status,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
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

/***/ "./resources/js/views/admin/pageSeo/create.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/admin/pageSeo/create.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_45db0ec8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=45db0ec8 */ "./resources/js/views/admin/pageSeo/create.vue?vue&type=template&id=45db0ec8");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/pageSeo/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_45db0ec8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/pageSeo/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/pageSeo/create.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/pageSeo/create.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/pageSeo/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/pageSeo/create.vue?vue&type=template&id=45db0ec8":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/pageSeo/create.vue?vue&type=template&id=45db0ec8 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_45db0ec8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_45db0ec8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=45db0ec8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/pageSeo/create.vue?vue&type=template&id=45db0ec8");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_pageSeo_create_vue.js.map