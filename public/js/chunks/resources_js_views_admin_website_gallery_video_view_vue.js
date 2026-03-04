"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_gallery_video_view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/view.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/view.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = "video";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page_title: "Video View",
      model: model,
      data: {},
      fields: ["title", "thumbnail", "url", "sorting", "status", "created_at"],
      belongs_to: {
        data: {},
        fields: ["name"],
        model: "album"
      }
    };
  },
  computed: {
    isYouTubeVideo: function isYouTubeVideo() {
      return this.data.url && this.data.url.includes('youtube.com/watch');
    },
    youtubeEmbedUrl: function youtubeEmbedUrl() {
      if (this.isYouTubeVideo) {
        var videoId = this.data.url.split('v=')[1].split('&')[0];
        return "https://www.youtube.com/embed/".concat(videoId);
      }
      return '';
    }
  },
  methods: {
    getVideo: function getVideo() {
      var _this = this;
      this.$root.spinner = true;
      axios.get("".concat(this.model, "/").concat(this.$route.params.id)).then(function (res) {
        _this.data = res.data;
      })["catch"](function (error) {})["finally"](function () {
        _this.$root.spinner = false;
      });
    }
  },
  created: function created() {
    this.getVideo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/view.vue?vue&type=template&id=9cf56d6e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/view.vue?vue&type=template&id=9cf56d6e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "col-xl-8 col-lg-12"
};
var _hoisted_4 = {
  "class": "view_file"
};
var _hoisted_5 = {
  "class": "row g-3"
};
var _hoisted_6 = {
  "class": "col-lg-6"
};
var _hoisted_7 = {
  "class": "card overflow-hidden mt-2"
};
var _hoisted_8 = {
  "class": "card-body"
};
var _hoisted_9 = {
  "class": "text-center",
  style: {
    "width": "100%",
    "height": "100%"
  }
};
var _hoisted_10 = {
  "class": "img",
  style: {
    "width": "100%",
    "height": "100%"
  }
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "col-lg-6"
};
var _hoisted_13 = {
  "class": "card overflow-hidden mt-2"
};
var _hoisted_14 = {
  "class": "card-body"
};
var _hoisted_15 = ["src"];
var _hoisted_16 = ["data"];
var _hoisted_17 = {
  key: 2,
  style: {
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "height": "350px"
  }
};
var _hoisted_18 = {
  "class": "col-xl-4 col-lg-12"
};
var _hoisted_19 = {
  "class": "table-responsive"
};
var _hoisted_20 = {
  "class": "table table-striped"
};
var _hoisted_21 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  var _component_view_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("view-page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_view_page, {
    defaultTable: false,
    dynamicModel: _ctx.Album,
    dynamicDataId: $data.data.album_id
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$data$data, _$data$data2, _$data$data3, _$data$data4, _$data$data5, _$data$data7, _$data$data8, _$data$data$sorting, _$data$data9, _$data$data10, _$data$data11;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Media", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: ((_$data$data = $data.data) === null || _$data$data === void 0 ? void 0 : _$data$data.thumbnail_one) == 'no_server_image' ? _ctx.emptyServerImage() : ((_$data$data2 = $data.data) === null || _$data$data2 === void 0 ? void 0 : _$data$data2.thumbnail_one) || _ctx.emptyImage(),
        alt: "img-cover",
        style: {
          "width": "100%",
          "height": "100%",
          "object-fit": "cover"
        }
      }, null, 8 /* PROPS */, _hoisted_11)])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [$options.isYouTubeVideo && $options.youtubeEmbedUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("iframe", {
        key: 0,
        width: "100%",
        height: "350px",
        src: $options.youtubeEmbedUrl,
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      }, null, 8 /* PROPS */, _hoisted_15)) : (_$data$data3 = $data.data) !== null && _$data$data3 !== void 0 && _$data$data3.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("object", {
        key: 1,
        width: "100%",
        height: "350px",
        data: (_$data$data4 = $data.data) === null || _$data$data4 === void 0 ? void 0 : _$data$data4.url
      }, null, 8 /* PROPS */, _hoisted_16)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, _cache[0] || (_cache[0] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "No video found", -1 /* HOISTED */)])))])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("fieldset", null, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "legend"
      }, "Information", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Album", -1 /* HOISTED */)), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: {
          name: 'album.show',
          params: {
            id: (_$data$data5 = $data.data) === null || _$data$data5 === void 0 || (_$data$data5 = _$data$data5.album) === null || _$data$data5 === void 0 ? void 0 : _$data$data5.id
          }
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          var _$data$data6;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data6 = $data.data) === null || _$data$data6 === void 0 || (_$data$data6 = _$data$data6.album) === null || _$data$data6 === void 0 ? void 0 : _$data$data6.name), 1 /* TEXT */)];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "URL", -1 /* HOISTED */)), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: (_$data$data7 = $data.data) === null || _$data$data7 === void 0 ? void 0 : _$data$data7.url,
        target: "_blank"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data8 = $data.data) === null || _$data$data8 === void 0 ? void 0 : _$data$data8.url), 9 /* TEXT, PROPS */, _hoisted_21)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sorting", -1 /* HOISTED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$data$sorting = (_$data$data9 = $data.data) === null || _$data$data9 === void 0 ? void 0 : _$data$data9.sorting) !== null && _$data$data$sorting !== void 0 ? _$data$data$sorting : " "), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status", -1 /* HOISTED */)), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        style: {
          "text-align": "center"
        }
      }, ":", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([((_$data$data10 = $data.data) === null || _$data$data10 === void 0 ? void 0 : _$data$data10.status) == 'active' ? 'bg-success' : 'bg-danger ', 'badge mt-1 mx-2', 'text-white '])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.ucfirst((_$data$data11 = $data.data) === null || _$data$data11 === void 0 ? void 0 : _$data$data11.status)), 3 /* TEXT, CLASS */)])])])])])])])])])];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["dynamicModel", "dynamicDataId"]);
}

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/video/view.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/video/view.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_vue_vue_type_template_id_9cf56d6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=9cf56d6e */ "./resources/js/views/admin/website/gallery/video/view.vue?vue&type=template&id=9cf56d6e");
/* harmony import */ var _view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/gallery/video/view.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_view_vue_vue_type_template_id_9cf56d6e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/website/gallery/video/view.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/video/view.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/video/view.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/view.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/video/view.vue?vue&type=template&id=9cf56d6e":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/video/view.vue?vue&type=template&id=9cf56d6e ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_9cf56d6e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_view_vue_vue_type_template_id_9cf56d6e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./view.vue?vue&type=template&id=9cf56d6e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/view.vue?vue&type=template&id=9cf56d6e");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_website_gallery_video_view_vue.js.map