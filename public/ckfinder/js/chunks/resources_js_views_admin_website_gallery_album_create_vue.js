"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_gallery_album_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/create.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/create.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = "album";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      model: model,
      data: {
        type: "",
        image: "",
        sorting: 0,
        status: "active"
      },
      image: {
        original_image: ""
      },
      types: [{
        name: "Photos",
        value: "Photos"
      }, {
        name: "Videos",
        value: "Videos"
      }]
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
          _this2.$toast("You need to fill " + error + " more empty mandatory fields", "warning");
        }
        if (res) {
          var form = document.getElementById("form");
          var formData = new FormData(form);
          formData.append("type", _this2.data.type);
          formData.append("image_base64", _this2.data.original_image);
          if (_this2.data.id) {
            _this2.update(_this2.model, formData, _this2.data.slug, "image");
          } else {
            _this2.store(_this2.model, formData);
          }
        }
      });
    }
  },
  created: function created() {
    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit");
      this.get_data("".concat(this.model, "/").concat(this.$route.params.id));
    } else {
      this.setBreadcrumbs(this.model, "create");
      this.get_sorting("Website-Gallery-Album");
    }
  },
  validators: {
    "data.name": function dataName() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).maxLength(191).required("Name is required");
    },
    "data.sorting": function dataSorting() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).digit().regex("^[0-9]*$").required("Sorting is required");
    },
    "data.original_image": function dataOriginal_image() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Image is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/create.vue?vue&type=template&id=0693ceac":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/create.vue?vue&type=template&id=0693ceac ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "col-xl-9 col-lg-8"
};
var _hoisted_3 = {
  "class": "row"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_File = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("File");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_v_select_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select-container");
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_Switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Switch");
  var _component_GlobalCrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GlobalCrop");
  var _component_Fieldset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fieldset");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Album Information")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
            title: "Image",
            field: "data.original_image",
            mime: "img",
            fileClassName: "file2",
            showCrop: true,
            col: "12",
            vHeight: "600",
            vWidth: "600",
            vSizeInKb: "500",
            req: true
          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select_container, {
            title: "Type",
            col: "6 col-xxl-4",
            field: "data.type",
            req: true
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                modelValue: $data.data.type,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return $data.data.type = $event;
                }),
                label: "name",
                reduce: function reduce(obj) {
                  return obj.value;
                },
                options: $data.types,
                placeholder: "--Select One--",
                closeOnSelect: true,
                req: true
              }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"])];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            modelValue: $data.data.name,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.data.name = $event;
            }),
            field: "data.name",
            title: "Name",
            req: true,
            col: "6 col-xxl-8"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Sorting",
            field: "data.sorting",
            modelValue: $data.data.sorting,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.data.sorting = $event;
            }),
            req: true,
            col: "4 col-xl-3",
            type: "number"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
            modelValue: $data.data.status,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.data.status = $event;
            }),
            "on-label": "Active",
            "off-label": "Deactive",
            req: true
          }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GlobalCrop, {
            field: "data.original_image",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.data.original_image = $event;
            }),
            image: $data.image.original_image,
            aspectRatio: {
              aspectRatio: 600 / 600
            },
            minWidth: 600,
            minHeight: 600
          }, null, 8 /* PROPS */, ["image"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        title: "Submit",
        "class": "aus-btn",
        process: ""
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/album/create.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/album/create.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_0693ceac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=0693ceac */ "./resources/js/views/admin/website/gallery/album/create.vue?vue&type=template&id=0693ceac");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/gallery/album/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_0693ceac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/website/gallery/album/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/album/create.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/album/create.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/album/create.vue?vue&type=template&id=0693ceac":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/album/create.vue?vue&type=template&id=0693ceac ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_0693ceac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_0693ceac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=0693ceac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/create.vue?vue&type=template&id=0693ceac");


/***/ })

}]);