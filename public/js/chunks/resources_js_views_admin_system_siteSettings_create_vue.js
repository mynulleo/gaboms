"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_system_siteSettings_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var model = "siteSetting";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)("setting", ["colors"])),
  data: function data() {
    return {
      page_title: "Site Settings Edit",
      model: model,
      data: {
        logo: "",
        logo_small: "",
        favicon: "",
        sidebar_footer_color: "",
        sidebar_top_color: "",
        sidebar_color: "",
        navbar_color: "",
        breadcrumb_color: ""
      },
      image: {},
      x_tel_validates: {}
    };
  },
  watch: {
    "data.sidebar_footer_color": function dataSidebar_footer_color(current, old) {
      if (current !== old) {
        this.setSidebarFooterColor(current);
      }
    },
    "data.sidebar_top_color": function dataSidebar_top_color(current, old) {
      if (current !== old) {
        this.setSidebarTopColor(current);
      }
    },
    "data.sidebar_color": function dataSidebar_color(current, old) {
      if (current !== old) {
        this.setSidebarColor(current);
      }
    },
    "data.navbar_color": function dataNavbar_color(current, old) {
      if (current !== old) {
        this.setNavbarColor(current);
      }
    },
    "data.breadcrumb_color": function dataBreadcrumb_color(current, old) {
      if (current !== old) {
        this.setBreadcrumbColor(current);
      }
    }
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
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    submit: function submit(e) {
      var _this2 = this;
      this.$validate().then(function (res) {
        var error = _this2.validation.countErrors();
        if (error > 0) {
          console.log(_this2.validation.allErrors());
          _this2.$toast("You need to fill " + error + " more empty mandatory fields", "warning");
          return false;
        }
        if (res) {
          var _this2$$root$media_va, _this2$$root$media_va2, _this2$$root$media_va3, _this2$$root$media_va4;
          var form = document.getElementById("form");
          var formData = new FormData(form);
          formData.append("logo_base64", _this2.data.original_logo);
          formData.append("logo_small_base64", _this2.data.original_logo_small);
          formData.append("logo_resize_value", (_this2$$root$media_va = (_this2$$root$media_va2 = _this2.$root.media_validators) === null || _this2$$root$media_va2 === void 0 || (_this2$$root$media_va2 = _this2$$root$media_va2.logo) === null || _this2$$root$media_va2 === void 0 ? void 0 : _this2$$root$media_va2.resize_value) !== null && _this2$$root$media_va !== void 0 ? _this2$$root$media_va : "");
          formData.append("logo_small_resize_value", (_this2$$root$media_va3 = (_this2$$root$media_va4 = _this2.$root.media_validators) === null || _this2$$root$media_va4 === void 0 || (_this2$$root$media_va4 = _this2$$root$media_va4.logo_small) === null || _this2$$root$media_va4 === void 0 ? void 0 : _this2$$root$media_va4.resize_value) !== null && _this2$$root$media_va3 !== void 0 ? _this2$$root$media_va3 : "");
          _this2.store(_this2.model, formData);
        }
      });
    },
    getSiteSetting: function getSiteSetting() {
      var _this3 = this;
      this.$root.submit = true;
      axios.get("".concat(this.model)).then(function (res) {
        _this3.data = res.data;
        _this3.setSidebarFooterColor(res.data.sidebar_footer_color);
        _this3.setSidebarTopColor(res.data.sidebar_top_color);
        _this3.setSidebarColor(res.data.sidebar_color);
        _this3.setNavbarColor(res.data.navbar_color);
        _this3.setBreadcrumbColor(res.data.breadcrumb_color);
      })["catch"](function (error) {
        var _error$response$data$;
        _this3.$toast((_error$response$data$ = error.response.data.message) !== null && _error$response$data$ !== void 0 ? _error$response$data$ : "Something went wrong!", "error");
        console.log(error);
      })["finally"](function () {
        _this3.$root.submit = false;
      });
    },
    store: function store(model, formData) {
      var _this4 = this;
      this.$root.submit = true;
      axios.post("/".concat(model), formData).then(function (response) {
        _this4.$toast("Data updated successfully", "success");
        _this4.$router.push({
          name: "siteSetting.show"
        });
      })["catch"](function (error) {
        _this4.$toast("Error updating data", "error");
        console.log(error);
      })["finally"](function () {
        _this4.$root.submit = false;
      });
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setSidebarFooterColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setSidebarTopColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setFooterColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setNavbarColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setSidebarColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setBreadcrumbColor"])),
  created: function created() {
    this.getSiteSetting();
    this.getMediaValidators("SiteSetting");
  },
  validators: {
    "data.title": function dataTitle() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).maxLength(191).required("Title is required");
    },
    "data.short_title": function dataShort_title() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).maxLength(191).required("Short Title is required");
    },
    /* "data.original_logo": function (value = null) {
        return Validator.value(value).required("Logo is required");
    }, */
    "data.favicon": function dataFavicon() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Favicon is required");
    },
    "data.web": function dataWeb() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).url();
    },
    "data.fb": function dataFb() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).url();
    },
    "data.tw": function dataTw() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).url();
    },
    "data.ln": function dataLn() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).url();
    },
    "data.yt": function dataYt() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).url();
    },
    "data.contact_email": function dataContact_email() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).email();
    },
    "data.feedback_email": function dataFeedback_email() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).email();
    },
    "data.mobile1, x_tel_validates.mobile1": function dataMobile1X_tel_validatesMobile1() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var xMobileValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var isValidMobile = this.isValidXTelMobile(value, xMobileValue);
      return Validator.value(value).custom(function () {
        if (isValidMobile !== true) {
          return "Invalid mobile one number";
        }
      });
    },
    "data.mobile2, x_tel_validates.mobile2": function dataMobile2X_tel_validatesMobile2() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var xMobileValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var isValidMobile = this.isValidXTelMobile(value, xMobileValue);
      return Validator.value(value).custom(function () {
        if (isValidMobile !== true) {
          return "Invalid mobile one number";
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row custom_row"
};
var _hoisted_2 = {
  "class": "col-lg-6"
};
var _hoisted_3 = {
  "class": "row g-3 pt-2"
};
var _hoisted_4 = {
  "class": "col-xl-4 col-md-6"
};
var _hoisted_5 = {
  "class": "form-group"
};
var _hoisted_6 = {
  "class": "col-xl-4 col-md-6"
};
var _hoisted_7 = {
  "class": "form-group"
};
var _hoisted_8 = {
  "class": "col-xl-4 col-md-6"
};
var _hoisted_9 = {
  "class": "form-group"
};
var _hoisted_10 = {
  "class": "col-lg-6"
};
var _hoisted_11 = {
  "class": "row g-3 pt-2"
};
var _hoisted_12 = {
  "class": "col-xl-12"
};
var _hoisted_13 = {
  "class": "form-group"
};
var _hoisted_14 = {
  "class": "input-group position-relative"
};
var _hoisted_15 = {
  "class": "col-xl-12"
};
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = {
  "class": "input-group position-relative"
};
var _hoisted_18 = {
  "class": "col-lg-6"
};
var _hoisted_19 = {
  "class": "row g-3 pt-2"
};
var _hoisted_20 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_21 = {
  "class": "form-group"
};
var _hoisted_22 = {
  "class": "input-group position-relative"
};
var _hoisted_23 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_24 = {
  "class": "form-group"
};
var _hoisted_25 = {
  "class": "input-group position-relative"
};
var _hoisted_26 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_27 = {
  "class": "form-group"
};
var _hoisted_28 = {
  "class": "input-group position-relative"
};
var _hoisted_29 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_30 = {
  "class": "form-group"
};
var _hoisted_31 = {
  "class": "input-group position-relative"
};
var _hoisted_32 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_33 = {
  "class": "form-group"
};
var _hoisted_34 = {
  "class": "input-group position-relative"
};
var _hoisted_35 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_36 = {
  "class": "form-group"
};
var _hoisted_37 = {
  "class": "input-group position-relative"
};
var _hoisted_38 = {
  "class": "col-lg-6"
};
var _hoisted_39 = {
  "class": "row g-3 pt-2"
};
var _hoisted_40 = {
  "class": "col-lg-12"
};
var _hoisted_41 = {
  "class": "form-group"
};
var _hoisted_42 = {
  "class": "input-group position-relative"
};
var _hoisted_43 = {
  "class": "col-lg-12"
};
var _hoisted_44 = {
  "class": "form-group"
};
var _hoisted_45 = {
  "class": "input-group position-relative"
};
var _hoisted_46 = {
  "class": "col-lg-12"
};
var _hoisted_47 = {
  "class": "form-group"
};
var _hoisted_48 = {
  "class": "input-group position-relative"
};
var _hoisted_49 = {
  "class": "col-lg-12"
};
var _hoisted_50 = {
  "class": "form-group"
};
var _hoisted_51 = {
  "class": "input-group position-relative"
};
var _hoisted_52 = {
  "class": "col-lg-12"
};
var _hoisted_53 = {
  "class": "form-group"
};
var _hoisted_54 = {
  "class": "input-group position-relative"
};
var _hoisted_55 = {
  "class": "col-lg-6"
};
var _hoisted_56 = {
  "class": "row g-3 pt-2"
};
var _hoisted_57 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_58 = {
  "class": "form-group"
};
var _hoisted_59 = {
  "class": "input-group position-relative"
};
var _hoisted_60 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_61 = {
  "class": "form-group"
};
var _hoisted_62 = {
  "class": "input-group position-relative"
};
var _hoisted_63 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_64 = {
  "class": "form-group"
};
var _hoisted_65 = {
  "class": "input-group position-relative"
};
var _hoisted_66 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_67 = {
  "class": "form-group"
};
var _hoisted_68 = {
  "class": "input-group position-relative"
};
var _hoisted_69 = {
  "class": "col-xl-6 col-md-6"
};
var _hoisted_70 = {
  "class": "form-group"
};
var _hoisted_71 = {
  "class": "input-group position-relative"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_File = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("File");
  var _component_GlobalCrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GlobalCrop");
  var _component_Textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Textarea");
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_x_tel_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("x-tel-input");
  var _component_ColorPicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ColorPicker");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _ctx$$root$media_vali, _ctx$$root$media_vali2, _ctx$$root$media_vali3, _ctx$$root$media_vali4, _ctx$$root$media_vali5, _ctx$$root$media_vali6, _ctx$$root$media_vali7, _ctx$$root$media_vali8, _ctx$$root$media_vali9, _ctx$$root$media_vali10, _ctx$$root$media_vali11, _ctx$$root$media_vali12, _ctx$$root$media_vali13, _ctx$$root$media_vali14, _ctx$$root$media_vali15, _ctx$$root$media_vali16, _ctx$$root$media_vali17, _ctx$$root$media_vali18, _ctx$$root$media_vali19, _ctx$$root$media_vali20, _ctx$$root$media_vali21, _ctx$$root$media_vali22, _ctx$$root$media_vali23, _ctx$$root$media_vali24, _ctx$$root$media_vali25, _ctx$$root$media_vali26, _ctx$$root$media_vali27, _ctx$$root$media_vali28;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Media Images", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
        title: "Logo",
        cropModalId: "logo_crop_modal",
        field: "data.original_logo",
        mime: "img",
        fileClassName: "file2",
        accept: ".jpg, .jpeg, .png",
        showCrop: true,
        vHeight: (_ctx$$root$media_vali = (_ctx$$root$media_vali2 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali2 === void 0 || (_ctx$$root$media_vali2 = _ctx$$root$media_vali2.logo) === null || _ctx$$root$media_vali2 === void 0 ? void 0 : _ctx$$root$media_vali2.min_height) !== null && _ctx$$root$media_vali !== void 0 ? _ctx$$root$media_vali : 100,
        vWidth: (_ctx$$root$media_vali3 = (_ctx$$root$media_vali4 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali4 === void 0 || (_ctx$$root$media_vali4 = _ctx$$root$media_vali4.logo) === null || _ctx$$root$media_vali4 === void 0 ? void 0 : _ctx$$root$media_vali4.min_width) !== null && _ctx$$root$media_vali3 !== void 0 ? _ctx$$root$media_vali3 : 300,
        vSizeInKb: (_ctx$$root$media_vali5 = (_ctx$$root$media_vali6 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali6 === void 0 || (_ctx$$root$media_vali6 = _ctx$$root$media_vali6.logo) === null || _ctx$$root$media_vali6 === void 0 ? void 0 : _ctx$$root$media_vali6.max_size) !== null && _ctx$$root$media_vali5 !== void 0 ? _ctx$$root$media_vali5 : 5000,
        col: "12"
      }, null, 8 /* PROPS */, ["vHeight", "vWidth", "vSizeInKb"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GlobalCrop, {
        id: "logo_crop_modal",
        field: "data.original_logo",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.data.original_logo = $event;
        }),
        image: $data.image.original_logo,
        aspectRatio: {
          aspectRatio: ((_ctx$$root$media_vali7 = (_ctx$$root$media_vali8 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali8 === void 0 || (_ctx$$root$media_vali8 = _ctx$$root$media_vali8.logo) === null || _ctx$$root$media_vali8 === void 0 ? void 0 : _ctx$$root$media_vali8.min_width) !== null && _ctx$$root$media_vali7 !== void 0 ? _ctx$$root$media_vali7 : 300) / ((_ctx$$root$media_vali9 = (_ctx$$root$media_vali10 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali10 === void 0 || (_ctx$$root$media_vali10 = _ctx$$root$media_vali10.logo) === null || _ctx$$root$media_vali10 === void 0 ? void 0 : _ctx$$root$media_vali10.min_height) !== null && _ctx$$root$media_vali9 !== void 0 ? _ctx$$root$media_vali9 : 100)
        },
        minWidth: (_ctx$$root$media_vali11 = (_ctx$$root$media_vali12 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali12 === void 0 || (_ctx$$root$media_vali12 = _ctx$$root$media_vali12.logo) === null || _ctx$$root$media_vali12 === void 0 ? void 0 : _ctx$$root$media_vali12.min_width) !== null && _ctx$$root$media_vali11 !== void 0 ? _ctx$$root$media_vali11 : 300,
        minHeight: (_ctx$$root$media_vali13 = (_ctx$$root$media_vali14 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali14 === void 0 || (_ctx$$root$media_vali14 = _ctx$$root$media_vali14.logo) === null || _ctx$$root$media_vali14 === void 0 ? void 0 : _ctx$$root$media_vali14.min_height) !== null && _ctx$$root$media_vali13 !== void 0 ? _ctx$$root$media_vali13 : 100
      }, null, 8 /* PROPS */, ["image", "aspectRatio", "minWidth", "minHeight"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
        title: "Small Logo",
        cropModalId: "logo_small_crop_modal",
        field: "data.original_logo_small",
        mime: "img",
        fileClassName: "file2",
        accept: ".jpg, .jpeg, .png",
        showCrop: true,
        vHeight: (_ctx$$root$media_vali15 = (_ctx$$root$media_vali16 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali16 === void 0 || (_ctx$$root$media_vali16 = _ctx$$root$media_vali16.logo_small) === null || _ctx$$root$media_vali16 === void 0 ? void 0 : _ctx$$root$media_vali16.min_height) !== null && _ctx$$root$media_vali15 !== void 0 ? _ctx$$root$media_vali15 : 100,
        vWidth: (_ctx$$root$media_vali17 = (_ctx$$root$media_vali18 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali18 === void 0 || (_ctx$$root$media_vali18 = _ctx$$root$media_vali18.logo_small) === null || _ctx$$root$media_vali18 === void 0 ? void 0 : _ctx$$root$media_vali18.min_width) !== null && _ctx$$root$media_vali17 !== void 0 ? _ctx$$root$media_vali17 : 300,
        vSizeInKb: (_ctx$$root$media_vali19 = (_ctx$$root$media_vali20 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali20 === void 0 || (_ctx$$root$media_vali20 = _ctx$$root$media_vali20.logo_small) === null || _ctx$$root$media_vali20 === void 0 ? void 0 : _ctx$$root$media_vali20.max_size) !== null && _ctx$$root$media_vali19 !== void 0 ? _ctx$$root$media_vali19 : 5000,
        col: "12"
      }, null, 8 /* PROPS */, ["vHeight", "vWidth", "vSizeInKb"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GlobalCrop, {
        id: "logo_small_crop_modal",
        field: "data.original_logo_small",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.data.original_logo_small = $event;
        }),
        image: $data.image.original_logo_small,
        aspectRatio: {
          aspectRatio: ((_ctx$$root$media_vali21 = (_ctx$$root$media_vali22 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali22 === void 0 || (_ctx$$root$media_vali22 = _ctx$$root$media_vali22.logo_small) === null || _ctx$$root$media_vali22 === void 0 ? void 0 : _ctx$$root$media_vali22.min_width) !== null && _ctx$$root$media_vali21 !== void 0 ? _ctx$$root$media_vali21 : 300) / ((_ctx$$root$media_vali23 = (_ctx$$root$media_vali24 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali24 === void 0 || (_ctx$$root$media_vali24 = _ctx$$root$media_vali24.logo_small) === null || _ctx$$root$media_vali24 === void 0 ? void 0 : _ctx$$root$media_vali24.min_height) !== null && _ctx$$root$media_vali23 !== void 0 ? _ctx$$root$media_vali23 : 100)
        },
        minWidth: (_ctx$$root$media_vali25 = (_ctx$$root$media_vali26 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali26 === void 0 || (_ctx$$root$media_vali26 = _ctx$$root$media_vali26.logo_small) === null || _ctx$$root$media_vali26 === void 0 ? void 0 : _ctx$$root$media_vali26.min_width) !== null && _ctx$$root$media_vali25 !== void 0 ? _ctx$$root$media_vali25 : 300,
        minHeight: (_ctx$$root$media_vali27 = (_ctx$$root$media_vali28 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali28 === void 0 || (_ctx$$root$media_vali28 = _ctx$$root$media_vali28.logo_small) === null || _ctx$$root$media_vali28 === void 0 ? void 0 : _ctx$$root$media_vali28.min_height) !== null && _ctx$$root$media_vali27 !== void 0 ? _ctx$$root$media_vali27 : 100
      }, null, 8 /* PROPS */, ["image", "aspectRatio", "minWidth", "minHeight"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
        title: "Favicon Logo",
        field: "data.favicon",
        mime: "img",
        fileClassName: "file3",
        vHeight: "50",
        vWidth: "50",
        vSizeInKb: "300",
        deleteButton: false,
        col: "12",
        req: true
      })])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Address", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Textarea, {
        title: "Address (Optional)",
        field: "data.address",
        modelValue: $data.data.address,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.data.address = $event;
        }),
        req: false,
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Textarea, {
        title: "Map Link (Optional)",
        field: "data.map",
        modelValue: $data.data.map,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.data.map = $event;
        }),
        req: false,
        col: "12",
        rows: "3"
      }, null, 8 /* PROPS */, ["modelValue"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[24] || (_cache[24] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Information", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Title",
        field: "data.title",
        modelValue: $data.data.title,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.data.title = $event;
        }),
        req: true,
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Short Title",
        field: "data.short_title",
        modelValue: $data.data.short_title,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.data.short_title = $event;
        }),
        req: true,
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Contact Email (Optional)",
        field: "data.contact_email",
        modelValue: $data.data.contact_email,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.data.contact_email = $event;
        }),
        type: "email",
        req: false,
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Feedback Email (Optional)",
        field: "data.feedback_email",
        modelValue: $data.data.feedback_email,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $data.data.feedback_email = $event;
        }),
        type: "email",
        req: false,
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_x_tel_input, {
        title: "Mobile One (Optional)",
        field: "data.mobile1",
        modelValue: $data.data.mobile1,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $data.data.mobile1 = $event;
        }),
        onPhoneValidate: _cache[9] || (_cache[9] = function ($event) {
          return $data.x_tel_validates.mobile1 = $event;
        }),
        req: false,
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_x_tel_input, {
        title: "Mobile Two (Optional)",
        field: "data.mobile2",
        modelValue: $data.data.mobile2,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $data.data.mobile2 = $event;
        }),
        onPhoneValidate: _cache[11] || (_cache[11] = function ($event) {
          return $data.x_tel_validates.mobile2 = $event;
        }),
        req: false,
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Important Links", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Web (Optional)",
        field: "data.web",
        modelValue: $data.data.web,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return $data.data.web = $event;
        }),
        type: "url",
        req: false,
        col: "12",
        placeholder: "https://abcd.xyz"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Facebook (Optional)",
        field: "data.fb",
        modelValue: $data.data.fb,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $data.data.fb = $event;
        }),
        type: "url",
        req: false,
        col: "12",
        placeholder: "https://facebook.com"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Twitter (Optional)",
        field: "data.tw",
        modelValue: $data.data.tw,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          return $data.data.tw = $event;
        }),
        type: "url",
        req: false,
        col: "12",
        placeholder: "https://twitter.com"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Linkedin (Optional)",
        field: "data.ln",
        modelValue: $data.data.ln,
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          return $data.data.ln = $event;
        }),
        type: "url",
        req: false,
        col: "12",
        placeholder: "https://linkedin.com"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        title: "Youtube (Optional)",
        field: "data.yt",
        modelValue: $data.data.yt,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return $data.data.yt = $event;
        }),
        type: "url",
        req: false,
        col: "12",
        placeholder: "https://youtube.com"
      }, null, 8 /* PROPS */, ["modelValue"])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Color", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
        title: "Navbar (Optional)",
        field: "data.navbar_color",
        modelValue: $data.data.navbar_color,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
          return $data.data.navbar_color = $event;
        }),
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
        title: "Breadcrumb (Optional)",
        field: "data.breadcrumb_color",
        modelValue: $data.data.breadcrumb_color,
        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
          return $data.data.breadcrumb_color = $event;
        }),
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
        title: "Sidebar (Optional)",
        field: "data.sidebar_color",
        modelValue: $data.data.sidebar_color,
        "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
          return $data.data.sidebar_color = $event;
        }),
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
        title: "Sidebar Footer (Optional)",
        field: "data.sidebar_footer_color",
        modelValue: $data.data.sidebar_footer_color,
        "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
          return $data.data.sidebar_footer_color = $event;
        }),
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
        title: "Sidebar Top (Optional)",
        field: "data.sidebar_top_color",
        modelValue: $data.data.sidebar_top_color,
        "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
          return $data.data.sidebar_top_color = $event;
        }),
        col: "12"
      }, null, 8 /* PROPS */, ["modelValue"])])])])])])])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image_upload_box .upload_box .img[data-v-340d8380] {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\n}\n.image_upload_box .upload_box img[data-v-340d8380] {\r\n    width: 100% !important;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 50%;\r\n    margin: auto;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/admin/system/siteSettings/create.vue"],"names":[],"mappings":";AAkOA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,oBAAiB;OAAjB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":["<template>\r\n    <create-form @onSubmit=\"submit\">\r\n        <div class=\"row custom_row\">\r\n            <div class=\"col-lg-6\">\r\n                <fieldset>\r\n                    <span class=\"legend\">Media Images</span>\r\n                    <div class=\"row g-3 pt-2\">\r\n                        <div class=\"col-xl-4 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <File title=\"Logo\" cropModalId=\"logo_crop_modal\" field=\"data.original_logo\" mime=\"img\"\r\n                                    fileClassName=\"file2\" accept=\".jpg, .jpeg, .png\" :showCrop=\"true\"\r\n                                    :vHeight=\"$root.media_validators?.logo?.min_height ?? 100\"\r\n                                    :vWidth=\"$root.media_validators?.logo?.min_width ?? 300\" :vSizeInKb=\"$root.media_validators?.logo?.max_size ?? 5000\r\n                                        \" col=\"12\" />\r\n                                <GlobalCrop id=\"logo_crop_modal\" field=\"data.original_logo\"\r\n                                    v-on:update:modelValue=\"data.original_logo = $event\" :image=\"image.original_logo\"\r\n                                    :aspectRatio=\"{\r\n                                        aspectRatio:\r\n                                            ($root.media_validators?.logo?.min_width ?? 300) /\r\n                                            ($root.media_validators?.logo?.min_height ?? 100),\r\n                                    }\" :minWidth=\"$root.media_validators?.logo?.min_width ?? 300\" :minHeight=\"$root.media_validators?.logo?.min_height ?? 100\r\n                                        \"></GlobalCrop>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <File title=\"Small Logo\" cropModalId=\"logo_small_crop_modal\"\r\n                                    field=\"data.original_logo_small\" mime=\"img\" fileClassName=\"file2\"\r\n                                    accept=\".jpg, .jpeg, .png\" :showCrop=\"true\"\r\n                                    :vHeight=\"$root.media_validators?.logo_small?.min_height ?? 100\"\r\n                                    :vWidth=\"$root.media_validators?.logo_small?.min_width ?? 300\" :vSizeInKb=\"$root.media_validators?.logo_small?.max_size ?? 5000\r\n                                        \" col=\"12\" />\r\n                                <GlobalCrop id=\"logo_small_crop_modal\" field=\"data.original_logo_small\"\r\n                                    v-on:update:modelValue=\"data.original_logo_small = $event\"\r\n                                    :image=\"image.original_logo_small\" :aspectRatio=\"{\r\n                                        aspectRatio:\r\n                                            ($root.media_validators?.logo_small?.min_width ?? 300) /\r\n                                            ($root.media_validators?.logo_small?.min_height ?? 100),\r\n                                    }\" :minWidth=\"$root.media_validators?.logo_small?.min_width ?? 300\" :minHeight=\"$root.media_validators?.logo_small?.min_height ?? 100\r\n                                        \"></GlobalCrop>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-4 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <File title=\"Favicon Logo\" field=\"data.favicon\" mime=\"img\" fileClassName=\"file3\"\r\n                                    vHeight=\"50\" vWidth=\"50\" vSizeInKb=\"300\" :deleteButton=\"false\" col=\"12\"\r\n                                    :req=\"true\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <fieldset>\r\n                    <span class=\"legend\">Address</span>\r\n                    <div class=\"row g-3 pt-2\">\r\n                        <div class=\"col-xl-12\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Textarea title=\"Address (Optional)\" field=\"data.address\" v-model=\"data.address\"\r\n                                        :req=\"false\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Textarea title=\"Map Link (Optional)\" field=\"data.map\" v-model=\"data.map\"\r\n                                        :req=\"false\" col=\"12\" rows=\"3\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <fieldset>\r\n                    <span class=\"legend\">Information</span>\r\n                    <div class=\"row g-3 pt-2\">\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Title\" field=\"data.title\" v-model=\"data.title\" :req=\"true\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Short Title\" field=\"data.short_title\" v-model=\"data.short_title\"\r\n                                        :req=\"true\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Contact Email (Optional)\" field=\"data.contact_email\"\r\n                                        v-model=\"data.contact_email\" type=\"email\" :req=\"false\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Feedback Email (Optional)\" field=\"data.feedback_email\"\r\n                                        v-model=\"data.feedback_email\" type=\"email\" :req=\"false\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                        <x-tel-input title=\"Mobile One (Optional)\" field=\"data.mobile1\" v-model=\"data.mobile1\" @phoneValidate=\"x_tel_validates.mobile1 = $event\" :req=\"false\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                        <x-tel-input title=\"Mobile Two (Optional)\" field=\"data.mobile2\" v-model=\"data.mobile2\" @phoneValidate=\"x_tel_validates.mobile2 = $event\" :req=\"false\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <fieldset>\r\n                    <span class=\"legend\">Important Links</span>\r\n                    <div class=\"row g-3 pt-2\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Web (Optional)\" field=\"data.web\" v-model=\"data.web\" type=\"url\"\r\n                                        :req=\"false\" col=\"12\" placeholder=\"https://abcd.xyz\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Facebook (Optional)\" field=\"data.fb\" v-model=\"data.fb\" type=\"url\"\r\n                                        :req=\"false\" col=\"12\" placeholder=\"https://facebook.com\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Twitter (Optional)\" field=\"data.tw\" v-model=\"data.tw\" type=\"url\"\r\n                                        :req=\"false\" col=\"12\" placeholder=\"https://twitter.com\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Linkedin (Optional)\" field=\"data.ln\" v-model=\"data.ln\" type=\"url\"\r\n                                        :req=\"false\" col=\"12\" placeholder=\"https://linkedin.com\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <Input title=\"Youtube (Optional)\" field=\"data.yt\" v-model=\"data.yt\" type=\"url\"\r\n                                        :req=\"false\" col=\"12\" placeholder=\"https://youtube.com\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <fieldset>\r\n                    <span class=\"legend\">Color</span>\r\n                    <div class=\"row g-3 pt-2\">\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <ColorPicker title=\"Navbar (Optional)\" field=\"data.navbar_color\"\r\n                                        v-model=\"data.navbar_color\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <ColorPicker title=\"Breadcrumb (Optional)\" field=\"data.breadcrumb_color\"\r\n                                        v-model=\"data.breadcrumb_color\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <ColorPicker title=\"Sidebar (Optional)\" field=\"data.sidebar_color\"\r\n                                        v-model=\"data.sidebar_color\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <ColorPicker title=\"Sidebar Footer (Optional)\" field=\"data.sidebar_footer_color\"\r\n                                        v-model=\"data.sidebar_footer_color\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"input-group position-relative\">\r\n                                    <ColorPicker title=\"Sidebar Top (Optional)\" field=\"data.sidebar_top_color\"\r\n                                        v-model=\"data.sidebar_top_color\" col=\"12\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n    </create-form>\r\n</template>\r\n\r\n<style scoped>\r\n.image_upload_box .upload_box .img {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n.image_upload_box .upload_box img {\r\n    width: 100% !important;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    border-radius: 50%;\r\n    margin: auto;\r\n}\r\n</style>\r\n\r\n<script>\r\nconst model = \"siteSetting\";\r\nimport { mapMutations, mapState } from \"vuex\";\r\n\r\nexport default {\r\n    computed: {\r\n        ...mapState(\"setting\", [\"colors\"]),\r\n    },\r\n    data() {\r\n        return {\r\n            page_title: \"Site Settings Edit\",\r\n            model: model,\r\n            data: {\r\n                logo: \"\",\r\n                logo_small: \"\",\r\n                favicon: \"\",\r\n                sidebar_footer_color: \"\",\r\n                sidebar_top_color: \"\",\r\n                sidebar_color: \"\",\r\n                navbar_color: \"\",\r\n                breadcrumb_color: \"\",\r\n            },\r\n            image: {},\r\n            x_tel_validates: {},\r\n        };\r\n    },\r\n    watch: {\r\n        \"data.sidebar_footer_color\"(current, old) {\r\n            if (current !== old) {\r\n                this.setSidebarFooterColor(current);\r\n            }\r\n        },\r\n        \"data.sidebar_top_color\"(current, old) {\r\n            if (current !== old) {\r\n                this.setSidebarTopColor(current);\r\n            }\r\n        },\r\n        \"data.sidebar_color\"(current, old) {\r\n            if (current !== old) {\r\n                this.setSidebarColor(current);\r\n            }\r\n        },\r\n        \"data.navbar_color\"(current, old) {\r\n            if (current !== old) {\r\n                this.setNavbarColor(current);\r\n            }\r\n        },\r\n        \"data.breadcrumb_color\"(current, old) {\r\n            if (current !== old) {\r\n                this.setBreadcrumbColor(current);\r\n            }\r\n        },\r\n    },\r\n    provide() {\r\n        return {\r\n            validate: this.validation,\r\n            data: () => this.data,\r\n            image: this.image,\r\n        };\r\n    },\r\n    methods: {\r\n        submit: function (e) {\r\n            this.$validate().then((res) => {\r\n                const error = this.validation.countErrors();\r\n                if (error > 0) {\r\n                    console.log(this.validation.allErrors());\r\n                    this.$toast(\r\n                        \"You need to fill \" +\r\n                        error +\r\n                        \" more empty mandatory fields\",\r\n                        \"warning\"\r\n                    );\r\n                    return false;\r\n                }\r\n\r\n                if (res) {\r\n                    var form = document.getElementById(\"form\");\r\n                    var formData = new FormData(form);\r\n                    formData.append(\"logo_base64\", this.data.original_logo);\r\n                    formData.append(\"logo_small_base64\", this.data.original_logo_small);\r\n                    formData.append(\r\n                        \"logo_resize_value\",\r\n                        this.$root.media_validators?.logo?.resize_value ?? \"\"\r\n                    );\r\n                    formData.append(\r\n                        \"logo_small_resize_value\",\r\n                        this.$root.media_validators?.logo_small?.resize_value ?? \"\"\r\n                    );\r\n                    this.store(this.model, formData);\r\n                }\r\n            });\r\n        },\r\n\r\n        getSiteSetting() {\r\n            this.$root.submit = true;\r\n            axios.get(`${this.model}`)\r\n                .then((res) => {\r\n                    this.data = res.data;\r\n                    this.setSidebarFooterColor(res.data.sidebar_footer_color);\r\n                    this.setSidebarTopColor(res.data.sidebar_top_color);\r\n                    this.setSidebarColor(res.data.sidebar_color);\r\n                    this.setNavbarColor(res.data.navbar_color);\r\n                    this.setBreadcrumbColor(res.data.breadcrumb_color);\r\n                }).catch(error => {\r\n                    this.$toast(error.response.data.message ?? \"Something went wrong!\", \"error\");\r\n                    console.log(error);\r\n                }).finally(() => {\r\n                    this.$root.submit = false;\r\n                });\r\n        },\r\n\r\n        store(model, formData) {\r\n            this.$root.submit = true;\r\n            axios\r\n                .post(`/${model}`, formData)\r\n                .then((response) => {\r\n                    this.$toast(\"Data updated successfully\", \"success\");\r\n                    this.$router.push({ name: \"siteSetting.show\" });\r\n                })\r\n                .catch((error) => {\r\n                    this.$toast(\"Error updating data\", \"error\");\r\n                    console.log(error);\r\n                })\r\n                .finally(() => {\r\n                    this.$root.submit = false;\r\n                });\r\n        },\r\n        ...mapMutations(\"setting\", [\"setSidebarFooterColor\"]),\r\n        ...mapMutations(\"setting\", [\"setSidebarTopColor\"]),\r\n        ...mapMutations(\"setting\", [\"setFooterColor\"]),\r\n        ...mapMutations(\"setting\", [\"setNavbarColor\"]),\r\n        ...mapMutations(\"setting\", [\"setSidebarColor\"]),\r\n        ...mapMutations(\"setting\", [\"setBreadcrumbColor\"]),\r\n    },\r\n    created() {\r\n        this.getSiteSetting();\r\n        this.getMediaValidators(\"SiteSetting\");\r\n    },\r\n    validators: {\r\n        \"data.title\": function (value = null) {\r\n            return Validator.value(value)\r\n                .maxLength(191)\r\n                .required(\"Title is required\");\r\n        },\r\n        \"data.short_title\": function (value = null) {\r\n            return Validator.value(value)\r\n                .maxLength(191)\r\n                .required(\"Short Title is required\");\r\n        },\r\n        /* \"data.original_logo\": function (value = null) {\r\n            return Validator.value(value).required(\"Logo is required\");\r\n        }, */\r\n        \"data.favicon\": function (value = null) {\r\n            return Validator.value(value).required(\"Favicon is required\");\r\n        },\r\n        \"data.web\": function (value = null) {\r\n            return Validator.value(value).url();\r\n        },\r\n        \"data.fb\": function (value = null) {\r\n            return Validator.value(value).url();\r\n        },\r\n        \"data.tw\": function (value = null) {\r\n            return Validator.value(value).url();\r\n        },\r\n        \"data.ln\": function (value = null) {\r\n            return Validator.value(value).url();\r\n        },\r\n        \"data.yt\": function (value = null) {\r\n            return Validator.value(value).url();\r\n        },\r\n        \"data.contact_email\": function (value = null) {\r\n            return Validator.value(value).email();\r\n        },\r\n        \"data.feedback_email\": function (value = null) {\r\n            return Validator.value(value).email();\r\n        },\r\n        \"data.mobile1, x_tel_validates.mobile1\": function (value = null, xMobileValue = {}) {\r\n            const isValidMobile = this.isValidXTelMobile(value, xMobileValue);\r\n            return  Validator.value(value).custom(function() {\r\n                if (isValidMobile !== true) {\r\n                    return \"Invalid mobile one number\";\r\n                }\r\n            });\r\n\r\n        },\r\n\r\n        \"data.mobile2, x_tel_validates.mobile2\": function (value = null, xMobileValue = {}) {\r\n            const isValidMobile = this.isValidXTelMobile(value, xMobileValue);\r\n            return  Validator.value(value).custom(function() {\r\n                if (isValidMobile !== true) {\r\n                    return \"Invalid mobile one number\";\r\n                }\r\n            });\r\n        },\r\n    },\r\n};\r\n</script>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_340d8380_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_340d8380_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_340d8380_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/create.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/create.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_340d8380_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=340d8380&scoped=true */ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380&scoped=true");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=script&lang=js");
/* harmony import */ var _create_vue_vue_type_style_index_0_id_340d8380_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css */ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_340d8380_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-340d8380"],['__file',"resources/js/views/admin/system/siteSettings/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/create.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_340d8380_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_340d8380_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=340d8380&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_340d8380_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=style&index=0&id=340d8380&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_system_siteSettings_create_vue.js.map