"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_robots_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fileContent: "",
      editableContent: ""
    };
  },
  methods: {
    getFileContent: function getFileContent() {
      var _this = this;
      this.$root.spinner = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("robots-file").then(function (res) {
        _this.fileContent = res.data;
        _this.editableContent = res.data;
        setTimeout(function () {
          _this.$root.spinner = false;
        }, 200);
      })["catch"](function () {
        _this.$root.spinner = false;
        console.error("Error fetching file content");
      });
    },
    saveFileContent: function saveFileContent() {
      var _this2 = this;
      this.$root.spinner = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("robots-file", {
        content: this.editableContent
      }).then(function (response) {
        console.log(response.data.success);
        _this2.fileContent = _this2.editableContent;
        setTimeout(function () {
          _this2.$root.spinner = false;
        }, 200);
        _this2.$toast(response.data.success, "success");
      })["catch"](function () {
        _this2.$root.spinner = false;
        console.error("Error saving file");
      });
    }
  },
  created: function created() {
    this.getFileContent();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=template&id=0600b208&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=template&id=0600b208&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "view_page"
};
var _hoisted_2 = {
  "class": "row custom_row g-3"
};
var _hoisted_3 = {
  "class": "col-xl-6 col-lg-12"
};
var _hoisted_4 = {
  "class": "table-responsive"
};
var _hoisted_5 = {
  "class": "table table-striped"
};
var _hoisted_6 = {
  "class": "col-xl-6 col-lg-12"
};
var _hoisted_7 = {
  "class": "table-responsive"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_x_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("x-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.$root.spinner ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["component_loader", {
      'z-top': _ctx.$root.initialLoader
    }])
  }, _cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "loader"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "viewer_devider"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "legend"
  }, "Robots.txt", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.fileContent), 1 /* TEXT */)])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "legend"
  }, "Edit Robots.txt", -1 /* HOISTED */)), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "viewer_devider"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    name: "editableContent",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.editableContent = $event;
    }),
    "class": "form-control",
    id: "",
    cols: "30",
    rows: "4"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.editableContent]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.saveFileContent && $options.saveFileContent.apply($options, arguments);
    }),
    "class": "btn-load",
    "data-bs-toggle": "tooltip",
    "data-bs-placement": "top",
    "data-bs-title": "Save"
  }, _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Save ")]))), [[_directive_x_tooltip]])])])])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-load[data-v-0600b208] {\r\n    background-color: #4caf50;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\n}\n.container[data-v-0600b208] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20px;\n}\n.display-box[data-v-0600b208],\r\n.edit-box[data-v-0600b208] {\r\n    width: 45%;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\n}\ntextarea[data-v-0600b208] {\r\n    width: 100%;\r\n    height: 300px;\r\n    margin-bottom: 10px;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/admin/robots.vue"],"names":[],"mappings":";AAsHA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iCAAiC;AACrC;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB","sourcesContent":["<template>\r\n    <div>\r\n        <div\r\n            class=\"component_loader\"\r\n            :class=\"{ 'z-top': $root.initialLoader }\"\r\n            v-if=\"$root.spinner\"\r\n        >\r\n            <div class=\"loader\"></div>\r\n        </div>\r\n\r\n        <div class=\"viewer_devider\"></div>\r\n        <div class=\"view_page\">\r\n            <div class=\"row custom_row g-3\">\r\n                <div class=\"col-xl-6 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Robots.txt</span>\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <pre>{{ fileContent }}</pre>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n                <div class=\"col-xl-6 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Edit Robots.txt</span>\r\n                        <div class=\"viewer_devider\"></div>\r\n                        <div class=\"table-responsive\">\r\n                            <textarea\r\n                                name=\"editableContent\"\r\n                                v-model=\"editableContent\"\r\n                                class=\"form-control\"\r\n                                id=\"\"\r\n                                cols=\"30\"\r\n                                rows=\"4\"\r\n                            ></textarea>\r\n                            <button\r\n                                @click=\"saveFileContent\"\r\n                                class=\"btn-load\"\r\n                                data-bs-toggle=\"tooltip\"\r\n                                data-bs-placement=\"top\"\r\n                                data-bs-title=\"Save\"\r\n                                v-x-tooltip\r\n                            >\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport axios from \"axios\";\r\nexport default {\r\n    data() {\r\n        return {\r\n            fileContent: \"\",\r\n            editableContent: \"\",\r\n        };\r\n    },\r\n\r\n    methods: {\r\n        getFileContent() {\r\n            this.$root.spinner = true;\r\n            axios\r\n                .get(\"robots-file\")\r\n                .then((res) => {\r\n                    this.fileContent = res.data;\r\n                    this.editableContent = res.data;\r\n\r\n                    setTimeout(() => {\r\n                        this.$root.spinner = false;\r\n                    }, 200);\r\n                })\r\n                .catch(() => {\r\n                    this.$root.spinner = false;\r\n                    console.error(\"Error fetching file content\");\r\n                });\r\n        },\r\n        saveFileContent() {\r\n            this.$root.spinner = true;\r\n            axios\r\n                .post(\"robots-file\", {\r\n                    content: this.editableContent,\r\n                })\r\n                .then((response) => {\r\n                    console.log(response.data.success);\r\n\r\n                    this.fileContent = this.editableContent;\r\n\r\n                    setTimeout(() => {\r\n                        this.$root.spinner = false;\r\n                    }, 200);\r\n\r\n                    this.$toast(response.data.success, \"success\");\r\n                })\r\n                .catch(() => {\r\n                    this.$root.spinner = false;\r\n                    console.error(\"Error saving file\");\r\n                });\r\n        },\r\n    },\r\n    created() {\r\n        this.getFileContent();\r\n    },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n.btn-load {\r\n    background-color: #4caf50;\r\n    color: white;\r\n    padding: 10px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20px;\r\n}\r\n\r\n.display-box,\r\n.edit-box {\r\n    width: 45%;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    height: 300px;\r\n    margin-bottom: 10px;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_style_index_0_id_0600b208_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_style_index_0_id_0600b208_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_style_index_0_id_0600b208_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/robots.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/admin/robots.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _robots_vue_vue_type_template_id_0600b208_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robots.vue?vue&type=template&id=0600b208&scoped=true */ "./resources/js/views/admin/robots.vue?vue&type=template&id=0600b208&scoped=true");
/* harmony import */ var _robots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./robots.vue?vue&type=script&lang=js */ "./resources/js/views/admin/robots.vue?vue&type=script&lang=js");
/* harmony import */ var _robots_vue_vue_type_style_index_0_id_0600b208_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css */ "./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_robots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_robots_vue_vue_type_template_id_0600b208_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0600b208"],['__file',"resources/js/views/admin/robots.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/robots.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/robots.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./robots.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/robots.vue?vue&type=template&id=0600b208&scoped=true":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/robots.vue?vue&type=template&id=0600b208&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_template_id_0600b208_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_template_id_0600b208_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./robots.vue?vue&type=template&id=0600b208&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=template&id=0600b208&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_robots_vue_vue_type_style_index_0_id_0600b208_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/robots.vue?vue&type=style&index=0&id=0600b208&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_robots_vue.js.map