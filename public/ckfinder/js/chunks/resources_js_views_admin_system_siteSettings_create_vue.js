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
      image: {
        logo: ""
      }
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
          var form = document.getElementById("form");
          var formData = new FormData(form);
          formData.append("logo_base64", _this2.data.logo);
          _this2.store(_this2.model, formData);
        }
      });
    },
    getSiteSetting: function getSiteSetting() {
      var _this3 = this;
      axios.get("".concat(this.model, "/").concat(this.$route.params.id)).then(function (res) {
        _this3.data = res.data;
        _this3.setSidebarFooterColor(res.data.sidebar_footer_color);
        _this3.setSidebarTopColor(res.data.sidebar_top_color);
        _this3.setSidebarColor(res.data.sidebar_color);
        _this3.setNavbarColor(res.data.navbar_color);
        _this3.setBreadcrumbColor(res.data.breadcrumb_color);
      });
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setSidebarFooterColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setSidebarTopColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setFooterColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setNavbarColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setSidebarColor"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)("setting", ["setBreadcrumbColor"])),
  created: function created() {
    if (this.$route.params.id) {
      this.setBreadcrumbs(this.model, "edit", "Site Setting");
      this.getSiteSetting();
    } else {
      this.setBreadcrumbs(this.model, "create", "Site Setting");
    }
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
    "data.logo": function dataLogo() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Logo is required");
    },
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
    "data.mobile1": function dataMobile1() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).digit().maxLength(20);
    },
    "data.mobile2": function dataMobile2() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).digit().maxLength(20);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row align-items-center"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-xl-2 col-lg-3"
};
var _hoisted_4 = {
  "class": "col-xl-2 col-lg-3"
};
var _hoisted_5 = {
  "class": "col-xl-2 col-lg-3"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-100 my-2"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_File = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("File");
  var _component_GlobalCrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GlobalCrop");
  var _component_Fieldset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fieldset");
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_Textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Textarea");
  var _component_ColorPicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ColorPicker");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Media")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
            title: "Logo",
            field: "data.logo",
            mime: "img",
            req: true,
            fileClassName: "file1",
            showCrop: true,
            vHeight: "200",
            vWidth: "200",
            vSizeInKb: "300",
            deleteButton: false
          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
            title: "Logo Small",
            field: "data.logo_small",
            mime: "img",
            fileClassName: "file2",
            req: true,
            vHeight: "200",
            vWidth: "200",
            vSizeInKb: "300",
            deleteButton: false
          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
            title: "Favicon Logo",
            field: "data.favicon",
            mime: "img",
            fileClassName: "file3",
            vHeight: "200",
            vWidth: "200",
            vSizeInKb: "300",
            deleteButton: false
          })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GlobalCrop, {
            field: "data.logo",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.data.logo = $event;
            }),
            image: $data.image.logo,
            aspectRatio: {
              aspectRatio: 200 / 200
            },
            minWidth: 200,
            minHeight: 200
          }, null, 8 /* PROPS */, ["image"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Information")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Title",
            field: "data.title",
            modelValue: $data.data.title,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.data.title = $event;
            }),
            req: true,
            col: "6"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Short Title",
            field: "data.short_title",
            modelValue: $data.data.short_title,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.data.short_title = $event;
            }),
            req: true,
            col: "6"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Contact Email (Optional)",
            field: "data.contact_email",
            modelValue: $data.data.contact_email,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.data.contact_email = $event;
            }),
            type: "email",
            req: false
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Feedback Email (Optional)",
            field: "data.feedback_email",
            modelValue: $data.data.feedback_email,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $data.data.feedback_email = $event;
            }),
            type: "email",
            req: false
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Mobile One (Optional)",
            field: "data.mobile1",
            modelValue: $data.data.mobile1,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $data.data.mobile1 = $event;
            }),
            type: "text",
            req: false
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Mobile Two (Optional)",
            field: "data.mobile2",
            modelValue: $data.data.mobile2,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $data.data.mobile2 = $event;
            }),
            type: "text",
            req: false
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Input\r\n        title=\"Developed By\"\r\n        field=\"data.developed_by\"\r\n        v-model=\"data.developed_by\"\r\n        :req=\"false\"\r\n        col=\"6\"\r\n      /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Input\r\n        title=\"Developed By URL\"\r\n        field=\"data.developed_by_url\"\r\n        v-model=\"data.developed_by_url\"\r\n        type=\"url\"\r\n        :req=\"false\"\r\n        col=\"6\"\r\n      /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Address")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Textarea, {
            title: "Address (Optional)",
            field: "data.address",
            modelValue: $data.data.address,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
              return $data.data.address = $event;
            }),
            req: false,
            col: "12"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Textarea, {
            title: "Map Link (Optional)",
            field: "data.map",
            modelValue: $data.data.map,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
              return $data.data.map = $event;
            }),
            req: false,
            col: "12"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Links")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Web (Optional)",
            field: "data.web",
            modelValue: $data.data.web,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
              return $data.data.web = $event;
            }),
            type: "url",
            req: false,
            col: "6",
            placeholder: "https://abcd.xyz"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Facebook (Optional)",
            field: "data.fb",
            modelValue: $data.data.fb,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
              return $data.data.fb = $event;
            }),
            type: "url",
            req: false,
            col: "6",
            placeholder: "https://facebook.com"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Twitter (Optional)",
            field: "data.tw",
            modelValue: $data.data.tw,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
              return $data.data.tw = $event;
            }),
            type: "url",
            req: false,
            col: "6",
            placeholder: "https://twitter.com"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Linkedin (Optional)",
            field: "data.ln",
            modelValue: $data.data.ln,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
              return $data.data.ln = $event;
            }),
            type: "url",
            req: false,
            col: "6",
            placeholder: "https://linkedin.com"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            title: "Youtube (Optional)",
            field: "data.yt",
            modelValue: $data.data.yt,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
              return $data.data.yt = $event;
            }),
            type: "url",
            req: false,
            col: "6",
            placeholder: "https://youtube.com"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Color")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
            title: "Navbar (Optional)",
            field: "data.navbar_color",
            modelValue: $data.data.navbar_color,
            "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
              return $data.data.navbar_color = $event;
            }),
            col: "2 col-sm-4 col-md-3"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
            title: "Breadcrumb (Optional)",
            field: "data.breadcrumb_color",
            modelValue: $data.data.breadcrumb_color,
            "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
              return $data.data.breadcrumb_color = $event;
            }),
            col: "2 col-sm-4 col-md-3"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
            title: "Sidebar (Optional)",
            field: "data.sidebar_color",
            modelValue: $data.data.sidebar_color,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
              return $data.data.sidebar_color = $event;
            }),
            col: "2 col-sm-4 col-md-3"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
            title: "Sidebar Footer (Optional)",
            field: "data.sidebar_footer_color",
            modelValue: $data.data.sidebar_footer_color,
            "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
              return $data.data.sidebar_footer_color = $event;
            }),
            col: "2 col-sm-4 col-md-3"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorPicker, {
            title: "Sidebar Top (Optional)",
            field: "data.sidebar_top_color",
            modelValue: $data.data.sidebar_top_color,
            "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
              return $data.data.sidebar_top_color = $event;
            }),
            col: "2 col-sm-4 col-md-3"
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        title: "Submit",
        "class": "aus-btn",
        process: ""
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

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
/* harmony import */ var _create_vue_vue_type_template_id_340d8380__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=340d8380 */ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_340d8380__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/system/siteSettings/create.vue"]])
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

/***/ "./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_340d8380__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_340d8380__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=340d8380 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/siteSettings/create.vue?vue&type=template&id=340d8380");


/***/ })

}]);