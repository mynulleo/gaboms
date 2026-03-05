"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_content_view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = "content";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page_title: "",
      model: model,
      data: {}
    };
  },
  watch: {
    data: function data() {
      this.data.meta_tag = this.data.meta_tag;
    }
  },
  methods: {
    destroy: function destroy(id, index) {
      var _this = this;
      if (confirm("Are you sure want to delete?")) {
        this.$root.spinner = true;
        var params = {
          file: true
        };
        axios["delete"]("/" + this.model + "/" + id, {
          params: params
        }).then(function (res) {
          if (index !== -1) {
            _this.data.content_files.splice(index, 1);
          }
        })["catch"](function (error) {
          return console.log(error);
        }).then(function (alw) {
          return setTimeout(function () {
            return _this.$root.spinner = false;
          }, 200);
        });
      }
    }
    /* convertMetaTagsToString(metaTags) {
      return "dd";
      try {
        const parsedMetaTags = JSON.parse(metaTags);
        return parsedMetaTags.join(", ");
      } catch (error) {
        console.error("Failed to parse meta tags:", error);
        return "";
      }
    }, */
  },
  created: function created() {
    this.page_title = this.ucfirst(this.model) + " " + "View";
    this.get_data("".concat(this.model, "/").concat(this.$route.params.slug));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=template&id=62e38a24&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=template&id=62e38a24&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var _hoisted_1 = {
  "class": "content_view_page"
};
var _hoisted_2 = {
  "class": "row custom_row g-3"
};
var _hoisted_3 = {
  "class": "col-xxl-8 col-xl-8"
};
var _hoisted_4 = {
  "class": "content_view_title"
};
var _hoisted_5 = ["innerHTML"];
var _hoisted_6 = {
  "class": "col-xl-4 col-lg-12"
};
var _hoisted_7 = {
  "class": "view_file"
};
var _hoisted_8 = {
  "class": "row g-4"
};
var _hoisted_9 = {
  "class": "col-lg-12"
};
var _hoisted_10 = {
  "class": "view_file_item text-center",
  style: {
    "width": "100%",
    "height": "100%"
  }
};
var _hoisted_11 = {
  "class": "img",
  style: {
    "width": "100%",
    "height": "100%"
  }
};
var _hoisted_12 = ["src"];
var _hoisted_13 = {
  "class": "view_page mt-2"
};
var _hoisted_14 = {
  "class": "row custom_row g-3"
};
var _hoisted_15 = {
  "class": "col-xl-12 col-lg-12"
};
var _hoisted_16 = {
  "class": "legend"
};
var _hoisted_17 = {
  key: 0,
  "class": "base_table_list"
};
var _hoisted_18 = {
  "class": "table-responsive text-nowrap"
};
var _hoisted_19 = {
  "class": "table custom_table_hover"
};
var _hoisted_20 = ["href"];
var _hoisted_21 = ["src"];
var _hoisted_22 = {
  "class": "action_td custom_table_action"
};
var _hoisted_23 = {
  "class": "actions d-block"
};
var _hoisted_24 = {
  "class": "action_btn"
};
var _hoisted_25 = ["href"];
var _hoisted_26 = ["onClick"];
var _hoisted_27 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "icon icon-tabler icons-tabler-outline icon-tabler-trash",
  "data-bs-toggle": "tooltip",
  "data-bs-placement": "top",
  "data-bs-title": "Delete"
};
var _hoisted_28 = {
  "class": "view_page mt-2"
};
var _hoisted_29 = {
  "class": "row custom_row g-3"
};
var _hoisted_30 = {
  "class": "col-xl-12 col-lg-12"
};
var _hoisted_31 = {
  key: 0,
  "class": "col-lg-12 mt-2"
};
var _hoisted_32 = {
  key: 1,
  "class": "col-lg-12 mt-2"
};
var _hoisted_33 = {
  key: 1,
  "class": "col-lg-12 mt-2 text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_view_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("view-page");
  var _directive_x_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("x-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_view_page, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$data$data, _$data$data2, _$data$data3;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_4, "Title : " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.ucfirst((_$data$data = $data.data) === null || _$data$data === void 0 ? void 0 : _$data$data.title)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        innerHTML: $data.data.description
      }, null, 8 /* PROPS */, _hoisted_5)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Media", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: ((_$data$data2 = $data.data) === null || _$data$data2 === void 0 ? void 0 : _$data$data2.image_one) == 'no_server_image' ? _ctx.emptyServerImage() : ((_$data$data3 = $data.data) === null || _$data$data3 === void 0 ? void 0 : _$data$data3.image_one) || _ctx.emptyImage(),
        alt: "img-cover",
        style: {
          "width": "100%",
          "height": "100%",
          "object-fit": "cover"
        }
      }, null, 8 /* PROPS */, _hoisted_12)])])])])])])])])]), _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "viewer_devider"
      }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.ucfirst($data.model) + " File"), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Your template starts here "), $data.data && $data.data.content_files ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [Object.keys($data.data.content_files).length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_19, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "sl",
        style: {
          "min-width": "70px"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "heading"
      }, " SL ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "heading"
      }, "Title")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "heading"
      }, "Action")])])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.content_files, function (dataFile, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [dataFile.file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
          key: 0,
          href: _ctx.$root.baseurl + '/public/storage/' + dataFile.file,
          target: "__blank"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: _ctx.$root.baseurl + '/public/images/pdf.png',
          style: {
            "height": "20px",
            "width": "20px"
          }
        }, null, 8 /* PROPS */, _hoisted_21)], 8 /* PROPS */, _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dataFile.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Eye button for viewing the file "), dataFile.file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
          key: 0,
          target: "_blank",
          href: _ctx.$root.baseurl + '/public/storage/' + dataFile.file
        }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "class": "icon icon-tabler icons-tabler-outline icon-tabler-eye"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          stroke: "none",
          d: "M0 0h24v24H0z",
          fill: "none"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
        })], -1 /* HOISTED */)])), 8 /* PROPS */, _hoisted_25)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Delete button "), _ctx.$root.checkPermission('content.destroy') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
          key: 1,
          onClick: function onClick($event) {
            return $options.destroy(dataFile.id, index);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_27, _toConsumableArray(_cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          stroke: "none",
          d: "M0 0h24v24H0z",
          fill: "none"
        }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M4 7l16 0"
        }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M10 11l0 6"
        }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M14 11l0 6"
        }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
        }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
          d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"
        }, null, -1 /* HOISTED */)])))), [[_directive_x_tooltip]])], 8 /* PROPS */, _hoisted_26)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
      }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Your template ends here ")])])])]), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "viewer_devider"
      }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Meta Information", -1 /* HOISTED */)), $data.data.meta_tag && $data.data.meta_tag.length || $data.data.meta_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [$data.data.meta_tag && $data.data.meta_tag.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.meta_tag, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
          "class": "btn btn-light border",
          key: index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 1 /* TEXT */);
      }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.data.meta_description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.meta_description), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "No meta info found", -1 /* HOISTED */)])))])])])])];
    }),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.action_td[data-v-62e38a24] {\r\n    text-align: center;\n}\n.actions[data-v-62e38a24] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\n}\n.action_btn[data-v-62e38a24] {\r\n    display: inline-flex;\r\n    gap: 10px;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/admin/website/content/view.vue"],"names":[],"mappings":";AAyMA;IACI,kBAAkB;AACtB;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AAEA;IACI,oBAAoB;IACpB,SAAS;AACb","sourcesContent":["<template>\r\n    <view-page>\r\n        <div class=\"content_view_page\">\r\n            <div class=\"row custom_row g-3\">\r\n                <div class=\"col-xxl-8 col-xl-8\">\r\n                    <fieldset>\r\n                        <h3 class=\"content_view_title\">Title : {{ ucfirst(data?.title) }}</h3>\r\n                        <p v-html=\"data.description\"></p>\r\n                    </fieldset>\r\n                </div>\r\n                <div class=\"col-xl-4 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Media</span>\r\n                        <div class=\"view_file\">\r\n                            <div class=\"row g-4\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"view_file_item text-center\" style=\"width: 100%; height: 100%;\">\r\n                                        <div class=\"img\" style=\"width: 100%; height: 100%;\">\r\n                                            <img :src=\"data?.image_one == 'no_server_image' ? emptyServerImage() : (data?.image_one || emptyImage())\" alt=\"img-cover\"\r\n                                                style=\"width: 100%; height: 100%; object-fit: cover;\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"viewer_devider\"></div>\r\n        <div class=\"view_page mt-2\">\r\n            <div class=\"row custom_row g-3\">\r\n                <div class=\"col-xl-12 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">{{ ucfirst(model) + \" File\" }}</span>\r\n                        <!-- Your template starts here -->\r\n                        <template v-if=\"data && data.content_files\">\r\n                            <div v-if=\"Object.keys(data.content_files).length > 0\" class=\"base_table_list\">\r\n                                <div class=\"table-responsive text-nowrap\">\r\n                                    <table class=\"table custom_table_hover\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th class=\"sl\" style=\"min-width: 70px\">\r\n                                                    <span class=\"heading\"> SL </span>\r\n                                                </th>\r\n                                                <th>\r\n                                                    <div class=\"heading\">Title</div>\r\n                                                </th>\r\n                                                <th>\r\n                                                    <div class=\"heading\">Action</div>\r\n                                                </th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr v-for=\"(dataFile, index) in data.content_files\" :key=\"index\">\r\n                                                <td>{{ index + 1 }}</td>\r\n                                                <td>\r\n                                                    <a v-if=\"dataFile.file\"\r\n                                                        :href=\"$root.baseurl + '/public/storage/' + dataFile.file\"\r\n                                                        target=\"__blank\">\r\n                                                        <img :src=\"$root.baseurl + '/public/images/pdf.png'\"\r\n                                                            style=\"height: 20px; width: 20px\" />\r\n                                                    </a>{{ dataFile.title }}\r\n                                                </td>\r\n                                                <td class=\"action_td custom_table_action\">\r\n                                                    <div class=\"actions d-block\">\r\n                                                        <div class=\"action_btn\">\r\n                                                            <!-- Eye button for viewing the file -->\r\n                                                            <a target=\"_blank\"\r\n                                                                :href=\"$root.baseurl + '/public/storage/' + dataFile.file\"\r\n                                                                v-if=\"dataFile.file\">\r\n                                                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\"\r\n                                                                    height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                                                                    stroke=\"currentColor\" stroke-width=\"2\"\r\n                                                                    stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                                                                    class=\"icon icon-tabler icons-tabler-outline icon-tabler-eye\">\r\n                                                                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n                                                                    <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" />\r\n                                                                    <path\r\n                                                                        d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" />\r\n                                                                </svg>\r\n                                                            </a>\r\n                                                            <!-- Delete button -->\r\n                                                            <a @click=\"destroy(dataFile.id, index)\"\r\n                                                                v-if=\"$root.checkPermission('content.destroy')\">\r\n                                                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\"\r\n                                                                    height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                                                                    stroke=\"currentColor\" stroke-width=\"2\"\r\n                                                                    stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                                                                    class=\"icon icon-tabler icons-tabler-outline icon-tabler-trash\"\r\n                                                                    data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\r\n                                                                    data-bs-title=\"Delete\" v-x-tooltip>\r\n                                                                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n                                                                    <path d=\"M4 7l16 0\" />\r\n                                                                    <path d=\"M10 11l0 6\" />\r\n                                                                    <path d=\"M14 11l0 6\" />\r\n                                                                    <path\r\n                                                                        d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" />\r\n                                                                    <path\r\n                                                                        d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" />\r\n                                                                </svg>\r\n                                                            </a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </template>\r\n                        <!-- Your template ends here -->\r\n\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"viewer_devider\"></div>\r\n        <div class=\"view_page mt-2\">\r\n            <div class=\"row custom_row g-3\">\r\n                <div class=\"col-xl-12 col-lg-12\">\r\n                    <fieldset>\r\n                        <span class=\"legend\">Meta Information</span>\r\n                        <template v-if=\"(data.meta_tag && data.meta_tag.length) || data.meta_description\">\r\n                            <div class=\"col-lg-12 mt-2\" v-if=\"data.meta_tag && data.meta_tag.length\">\r\n                                <button class=\"btn btn-light border\" v-for=\"(item, index) in data.meta_tag\"\r\n                                    :key=\"index\">\r\n                                    {{ item }}\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"col-lg-12 mt-2\" v-if=\"data.meta_description\">\r\n                                <p>\r\n                                    {{ data.meta_description }}\r\n                                </p>\r\n                            </div>\r\n                        </template>\r\n                        <template v-else>\r\n                            <div class=\"col-lg-12 mt-2 text-center\">\r\n                                <p>No meta info found</p>\r\n                            </div>\r\n                        </template>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </view-page>\r\n</template>\r\n\r\n<script>\r\nconst model = \"content\";\r\nexport default {\r\n    data() {\r\n        return {\r\n            page_title: \"\",\r\n            model: model,\r\n            data: {},\r\n        };\r\n    },\r\n\r\n    watch: {\r\n        data() {\r\n            this.data.meta_tag = this.data.meta_tag;\r\n        },\r\n    },\r\n\r\n    methods: {\r\n        destroy(id, index) {\r\n            if (confirm(\"Are you sure want to delete?\")) {\r\n                this.$root.spinner = true;\r\n                const params = { file: true };\r\n                axios\r\n                    .delete(\"/\" + this.model + \"/\" + id, { params })\r\n                    .then((res) => {\r\n                        if (index !== -1) {\r\n                            this.data.content_files.splice(index, 1);\r\n                        }\r\n                    })\r\n                    .catch((error) => console.log(error))\r\n                    .then((alw) => setTimeout(() => (this.$root.spinner = false), 200));\r\n            }\r\n        },\r\n        /* convertMetaTagsToString(metaTags) {\r\n          return \"dd\";\r\n          try {\r\n            const parsedMetaTags = JSON.parse(metaTags);\r\n            return parsedMetaTags.join(\", \");\r\n          } catch (error) {\r\n            console.error(\"Failed to parse meta tags:\", error);\r\n            return \"\";\r\n          }\r\n        }, */\r\n    },\r\n    created() {\r\n        this.page_title = this.ucfirst(this.model) + \" \" + \"View\";\r\n        this.get_data(`${this.model}/${this.$route.params.slug}`);\r\n    },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n.action_td {\r\n    text-align: center;\r\n}\r\n\r\n.actions {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.action_btn {\r\n    display: inline-flex;\r\n    gap: 10px;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_62e38a24_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_62e38a24_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_62e38a24_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/website/content/view.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/admin/website/content/view.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_vue_vue_type_template_id_62e38a24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=62e38a24&scoped=true */ "./resources/js/views/admin/website/content/view.vue?vue&type=template&id=62e38a24&scoped=true");
/* harmony import */ var _view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/content/view.vue?vue&type=script&lang=js");
/* harmony import */ var _view_vue_vue_type_style_index_0_id_62e38a24_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css */ "./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_view_vue_vue_type_template_id_62e38a24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-62e38a24"],['__file',"resources/js/views/admin/website/content/view.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/content/view.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/view.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/content/view.vue?vue&type=template&id=62e38a24&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/view.vue?vue&type=template&id=62e38a24&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_62e38a24_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_62e38a24_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=template&id=62e38a24&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=template&id=62e38a24&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_style_index_0_id_62e38a24_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/view.vue?vue&type=style&index=0&id=62e38a24&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_website_content_view_vue.js.map