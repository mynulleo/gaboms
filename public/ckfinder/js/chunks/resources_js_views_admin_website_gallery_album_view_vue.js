"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_gallery_album_view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/view.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/view.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      data: {},
      fileColumns: []
    };
  },
  created: function created() {
    this.setBreadcrumbs(this.model, "view");
    this.get_data("".concat(this.model, "/").concat(this.$route.params.id));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/view.vue?vue&type=template&id=4c31d1d5":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/view.vue?vue&type=template&id=4c31d1d5 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row view-bg"
};
var _hoisted_2 = {
  "class": "col-lg-3"
};
var _hoisted_3 = {
  "class": "video--thumbnail--image"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "col-lg-9"
};
var _hoisted_6 = {
  "class": "table-responsive"
};
var _hoisted_7 = {
  "class": "table mb-4 table-striped table-bordered",
  style: {
    "border": "1px solid #5f65b9"
  }
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type", -1 /* HOISTED */);
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  width: "50",
  style: {
    "text-align": "center"
  }
}, ":", -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  width: "50",
  style: {
    "text-align": "center"
  }
}, ":", -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "No of Photo", -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  width: "50",
  style: {
    "text-align": "center"
  }
}, ":", -1 /* HOISTED */);
var _hoisted_14 = {
  key: 0,
  "class": "col-lg-12 mt-5"
};
var _hoisted_15 = {
  "class": "gallery-list"
};
var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "image"
};
var _hoisted_18 = ["src", "alt"];
var _hoisted_19 = {
  key: 0,
  "class": "mt-2 p-1 bg-info text-white"
};
var _hoisted_20 = {
  "class": "text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Fieldset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fieldset");
  var _component_view_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("view-page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_view_page, {
    defaultTable: false
  }, {
    custom_header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$data$data;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"top--title\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Album: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data = $data.data) === null || _$data$data === void 0 ? void 0 : _$data$data.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div> ")];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"w-100 mt-3\">\r\n        <div class=\"top--title mt-2\">\r\n          <h4>Album: {{ data?.name }}</h4>\r\n        </div>\r\n      </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.ucfirst($data.model)) + " Details", 1 /* TEXT */)];
        }),

        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          var _$data$data2, _$data$data3, _$data$data4, _$data$data5, _$data$data6;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            src: (_$data$data2 = $data.data) !== null && _$data$data2 !== void 0 && _$data$data2.thumb_one ? $data.data.thumb_one : _ctx.emptyImage(),
            alt: "",
            "class": "img-fluid w-100"
          }, null, 8 /* PROPS */, _hoisted_4)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data3 = $data.data) === null || _$data$data3 === void 0 ? void 0 : _$data$data3.type), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([((_$data$data4 = $data.data) === null || _$data$data4 === void 0 ? void 0 : _$data$data4.status) == 'active' ? 'bg-success' : 'bg-danger ', 'badge mt-1 mx-2', 'text-white '])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.ucfirst((_$data$data5 = $data.data) === null || _$data$data5 === void 0 ? void 0 : _$data$data5.status)), 3 /* TEXT, CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_12, _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data6 = $data.data) === null || _$data$data6 === void 0 ? void 0 : _$data$data6.photos_count), 1 /* TEXT */)])])])])])];
        }),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Photo Gallery")];
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          var _$data$data7, _$data$data8;
          return [((_$data$data7 = $data.data) === null || _$data$data7 === void 0 ? void 0 : _$data$data7.type) == 'Photos' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)((_$data$data8 = $data.data) === null || _$data$data8 === void 0 ? void 0 : _$data$data8.photos, function (item, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: index,
              "class": "col-sm-3"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              style: {
                "object-fit": "contain"
              },
              src: item === null || item === void 0 ? void 0 : item.thumb,
              alt: item === null || item === void 0 ? void 0 : item.title
            }, null, 8 /* PROPS */, _hoisted_18)]), item.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
          }), 128 /* KEYED_FRAGMENT */))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1 /* STABLE */
      })])];
    }),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/album/view.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/album/view.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_vue_vue_type_template_id_4c31d1d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=4c31d1d5 */ "./resources/js/views/admin/website/gallery/album/view.vue?vue&type=template&id=4c31d1d5");
/* harmony import */ var _view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/gallery/album/view.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_view_vue_vue_type_template_id_4c31d1d5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/website/gallery/album/view.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/album/view.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/album/view.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/view.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/album/view.vue?vue&type=template&id=4c31d1d5":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/album/view.vue?vue&type=template&id=4c31d1d5 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_4c31d1d5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_4c31d1d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=template&id=4c31d1d5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/album/view.vue?vue&type=template&id=4c31d1d5");


/***/ })

}]);