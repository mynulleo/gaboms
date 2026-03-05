"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_gallery_photo_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var model = "photo";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return _defineProperty({
      model: model,
      data: {
        album_id: null,
        sorting: 0,
        uploaded_images: [],
        status: "active"
      },
      image: {
        image: ""
      },
      albums: []
    }, "image", {});
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
          formData.append("album_id", _this2.data.album_id);
          if (Object.keys(_this2.data.uploaded_images).length == 0) {
            _this2.notification("Please select image", "error");
            return false;
          }
          _this2.store(_this2.model, formData);
        }
      });
    },
    previewImages: function previewImages() {
      var vm = this;
      vm.data.uploaded_images = [];
      var files = $("input[type='file']")[0].files;
      if (files.length > 20) {
        vm.notification("You can select max 20 images", "error");
        return false;
      }
      $.each(files, function (i, file) {
        var obj = {
          image: URL.createObjectURL(file),
          title: "",
          sorting: vm.data.sorting + i + 1
        };
        vm.data.uploaded_images.push(obj);
      });
    },
    getAlbum: function getAlbum() {
      var _this3 = this;
      axios.get("/get-album/Photos").then(function (res) {
        return _this3.albums = res.data;
      });
    }
  },
  created: function created() {
    this.setBreadcrumbs(this.model, "create");
    this.getAlbum();
    this.get_sorting("Website-Gallery-Photo");
    this.data.album_id = this.$route.query.id ? Number(this.$route.query.id) : "";
  },
  validators: {
    "data.album_id": function dataAlbum_id() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Album is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=template&id=6fd5a709":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=template&id=6fd5a709 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "input-message danger"
};
var _hoisted_2 = {
  "class": "mb-3 col-sm-6 col-lg-4"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-label mb-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Image "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("sup", {
  "class": "text-danger"
}, "*")], -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "input-group position-relative"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-100"
}, null, -1 /* HOISTED */);
var _hoisted_6 = {
  style: {
    "box-shadow": "0px 5px 30px 0px rgba(0, 0, 0, 0.1)",
    "border": "1px solid #ddd"
  },
  "class": "item-blcok mb-2 p-3"
};
var _hoisted_7 = {
  "class": "img d-flex justify-content-between"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = ["onUpdate:modelValue", "name"];
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  "class": "text pt-2 mt-3 mb-3"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "w-100 d-block fw-bold"
}, "Title", -1 /* HOISTED */);
var _hoisted_13 = ["onUpdate:modelValue", "name"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_v_select_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select-container");
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
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Add Photos")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select_container, {
            title: "Album"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                modelValue: $data.data.album_id,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return $data.data.album_id = $event;
                }),
                name: "album_id",
                label: "name",
                reduce: function reduce(obj) {
                  return obj.id;
                },
                options: $data.albums,
                placeholder: "--Select Any--",
                closeOnSelect: true
              }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"]), _ctx.validation.hasError('data.album_id') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.validation.firstError("data.album_id")), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
            }),
            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "class": "form-control form-control-sm",
            type: "file",
            accept: "image/*",
            multiple: "",
            name: "files[]",
            onChange: _cache[1] || (_cache[1] = function ($event) {
              return $options.previewImages();
            })
          }, null, 32 /* HYDRATE_EVENTS */)])]), _hoisted_5, Object.keys($data.data.uploaded_images).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: 0
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.uploaded_images, function (img, key) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: key,
              "class": "col-3"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: img.image,
              alt: "",
              style: {
                "height": "50px"
              }
            }, null, 8 /* PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return img.sorting = $event;
              },
              style: {
                "width": "80px"
              },
              type: "number",
              "class": "text-center form-control form-control-sm rounded-0 mt-2",
              name: "uploaded_images[".concat(key, "][sorting]"),
              placeholder: "Sorting"
            }, null, 8 /* PROPS */, _hoisted_9), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, img.sorting]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              "class": "fa fa-times text-danger",
              style: {
                "cursor": "pointer"
              },
              onClick: function onClick($event) {
                return $data.data.uploaded_images.splice(key, 1);
              }
            }, null, 8 /* PROPS */, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return img.title = $event;
              },
              type: "text",
              "class": "form-control form-control-sm rounded-0",
              placeholder: "Title",
              name: "uploaded_images[".concat(key, "][title]")
            }, null, 8 /* PROPS */, _hoisted_13), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, img.title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Radio, {
              field: "uploaded_images[".concat(key, "][status]"),
              title: "Status",
              list: [{
                value: 'active',
                title: 'Active'
              }, {
                value: 'deactive',
                title: 'Deactive'
              }],
              req: true,
              col: "3",
              isChecked: true
            }, null, 8 /* PROPS */, ["field"])])]);
          }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\r\n    <Switch\r\n      v-model=\"data.status\"\r\n      on-label=\"Active\"\r\n      off-label=\"Deactive\"\r\n      :req=\"true\"\r\n    ></Switch> "), Object.keys($data.data.uploaded_images).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Button, {
        key: 0,
        title: "Submit",
        "class": "aus-btn",
        process: ""
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/photo/create.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/photo/create.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_6fd5a709__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=6fd5a709 */ "./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=template&id=6fd5a709");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_6fd5a709__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/website/gallery/photo/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=template&id=6fd5a709":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=template&id=6fd5a709 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_6fd5a709__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_6fd5a709__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=6fd5a709 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/photo/create.vue?vue&type=template&id=6fd5a709");


/***/ })

}]);