"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_gallery_video_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/create.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/create.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Form_Select_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../components/Form/Select.vue */ "./resources/js/components/Form/Select.vue");

var model = "video";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      page_title: "",
      model: model,
      data: {
        original_image: "",
        status: "active",
        album_id: null
      },
      image: {
        original_image: ""
      },
      albums: []
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
          var _this2$$root$media_va, _this2$$root$media_va2;
          var form = document.getElementById("form");
          var formData = new FormData(form);
          formData.append("image_base64", _this2.data.original_image);
          formData.append("thumbnail_resize_value", (_this2$$root$media_va = (_this2$$root$media_va2 = _this2.$root.media_validators) === null || _this2$$root$media_va2 === void 0 || (_this2$$root$media_va2 = _this2$$root$media_va2.thumbnail) === null || _this2$$root$media_va2 === void 0 ? void 0 : _this2$$root$media_va2.resize_value) !== null && _this2$$root$media_va !== void 0 ? _this2$$root$media_va : "");
          formData.append("album_id", _this2.data.album_id);
          formData.append("url", _this2.data.url);
          formData.append("status", _this2.data.status == 'active' ? 'active' : 'draft');
          if (_this2.data.id) {
            _this2.update(_this2.model, formData, _this2.data.id, "image");
          } else {
            _this2.store(_this2.model, formData);
          }
        }
      });
    },
    getAlbum: function getAlbum() {
      var _this3 = this;
      return axios.get("/get-album/Videos").then(function (res) {
        _this3.albums = res.data;
      })["catch"](function (error) {
        console.error("Error fetching albums:", error);
      });
    }
  },
  created: function created() {
    var _this4 = this;
    if (this.$route.params.id) {
      this.get_data("".concat(this.model, "/").concat(this.$route.params.id));
      this.page_title = "Video Edit";
    } else {
      this.get_sorting("Website-Gallery-Video");
      this.page_title = "Video Create";
    }
    this.getAlbum().then(function () {
      _this4.data.album_id = _this4.$route.query.id ? Number(_this4.$route.query.id) : null;
    });
    this.getMediaValidators("Video");
  },
  validators: {
    "data.title": function dataTitle() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Title is required");
    },
    "data.album_id": function dataAlbum_id() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Album is required");
    },
    "data.original_image": function dataOriginal_image() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Image is required");
    },
    "data.url": function dataUrl() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("URL is required").url();
    },
    "data.sorting": function dataSorting() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).digit().regex("^[0-9]*$").required("Sorting is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/create.vue?vue&type=template&id=64e73920":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/create.vue?vue&type=template&id=64e73920 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "col-xl-9 col-lg-8"
};
var _hoisted_2 = {
  "class": "row g-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_File = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("File");
  var _component_GlobalCrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GlobalCrop");
  var _component_Select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select");
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_Switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Switch");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _ctx$$root$media_vali, _ctx$$root$media_vali2, _ctx$$root$media_vali3, _ctx$$root$media_vali4, _ctx$$root$media_vali5, _ctx$$root$media_vali6, _ctx$$root$media_vali7, _ctx$$root$media_vali8, _ctx$$root$media_vali9, _ctx$$root$media_vali10, _ctx$$root$media_vali11, _ctx$$root$media_vali12, _ctx$$root$media_vali13, _ctx$$root$media_vali14;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
        title: "Image",
        field: "data.original_image",
        mime: "img",
        fileClassName: "file2",
        showCrop: true,
        vHeight: (_ctx$$root$media_vali = (_ctx$$root$media_vali2 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali2 === void 0 || (_ctx$$root$media_vali2 = _ctx$$root$media_vali2.thumbnail) === null || _ctx$$root$media_vali2 === void 0 ? void 0 : _ctx$$root$media_vali2.min_height) !== null && _ctx$$root$media_vali !== void 0 ? _ctx$$root$media_vali : 600,
        vWidth: (_ctx$$root$media_vali3 = (_ctx$$root$media_vali4 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali4 === void 0 || (_ctx$$root$media_vali4 = _ctx$$root$media_vali4.thumbnail) === null || _ctx$$root$media_vali4 === void 0 ? void 0 : _ctx$$root$media_vali4.min_width) !== null && _ctx$$root$media_vali3 !== void 0 ? _ctx$$root$media_vali3 : 600,
        vSizeInKb: (_ctx$$root$media_vali5 = (_ctx$$root$media_vali6 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali6 === void 0 || (_ctx$$root$media_vali6 = _ctx$$root$media_vali6.thumbnail) === null || _ctx$$root$media_vali6 === void 0 ? void 0 : _ctx$$root$media_vali6.max_size) !== null && _ctx$$root$media_vali5 !== void 0 ? _ctx$$root$media_vali5 : 5000,
        col: "3 col-12",
        req: ""
      }, null, 8 /* PROPS */, ["vHeight", "vWidth", "vSizeInKb"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_GlobalCrop, {
        field: "data.original_image",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.data.original_image = $event;
        }),
        image: $data.image.original_image,
        aspectRatio: {
          aspectRatio: ((_ctx$$root$media_vali7 = (_ctx$$root$media_vali8 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali8 === void 0 || (_ctx$$root$media_vali8 = _ctx$$root$media_vali8.thumbnail) === null || _ctx$$root$media_vali8 === void 0 ? void 0 : _ctx$$root$media_vali8.min_width) !== null && _ctx$$root$media_vali7 !== void 0 ? _ctx$$root$media_vali7 : 600) / ((_ctx$$root$media_vali9 = (_ctx$$root$media_vali10 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali10 === void 0 || (_ctx$$root$media_vali10 = _ctx$$root$media_vali10.thumbnail) === null || _ctx$$root$media_vali10 === void 0 ? void 0 : _ctx$$root$media_vali10.min_height) !== null && _ctx$$root$media_vali9 !== void 0 ? _ctx$$root$media_vali9 : 600)
        },
        minWidth: (_ctx$$root$media_vali11 = (_ctx$$root$media_vali12 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali12 === void 0 || (_ctx$$root$media_vali12 = _ctx$$root$media_vali12.thumbnail) === null || _ctx$$root$media_vali12 === void 0 ? void 0 : _ctx$$root$media_vali12.min_width) !== null && _ctx$$root$media_vali11 !== void 0 ? _ctx$$root$media_vali11 : 600,
        minHeight: (_ctx$$root$media_vali13 = (_ctx$$root$media_vali14 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali14 === void 0 || (_ctx$$root$media_vali14 = _ctx$$root$media_vali14.thumbnail) === null || _ctx$$root$media_vali14 === void 0 ? void 0 : _ctx$$root$media_vali14.min_height) !== null && _ctx$$root$media_vali13 !== void 0 ? _ctx$$root$media_vali13 : 600
      }, null, 8 /* PROPS */, ["image", "aspectRatio", "minWidth", "minHeight"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select, {
        title: "Album",
        req: true,
        field: "data.album_id",
        col: "4 col-xl-3 col-xxl-4",
        modelValue: $data.data.album_id,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.data.album_id = $event;
        }),
        label: "name",
        reduce: function reduce(obj) {
          return obj.id;
        },
        options: $data.albums,
        placeholder: "--Select Any--",
        closeOnSelect: true,
        require: true
      }, null, 8 /* PROPS */, ["modelValue", "reduce", "options"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        modelValue: $data.data.title,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.data.title = $event;
        }),
        field: "data.title",
        title: "Title",
        col: "8 col-xl-9 col-xxl-8",
        req: true
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        type: "url",
        modelValue: $data.data.url,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.data.url = $event;
        }),
        field: "data.url",
        title: "URL",
        placeholder: "https://www.xyz.com",
        req: true,
        col: "8 col-xl-9 col-xxl-8"
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
        type: "number",
        title: "Sorting",
        field: "data.sorting",
        modelValue: $data.data.sorting,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.data.sorting = $event;
        }),
        col: "4 col-xl-3 col-xxl-4",
        req: true
      }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
        modelValue: $data.data.status,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $data.data.status = $event;
        }),
        "on-label": "Active",
        "off-label": "Draft",
        "on-value": "active",
        "off-value": "draft",
        req: true
      }, null, 8 /* PROPS */, ["modelValue"])])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/video/create.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/video/create.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_64e73920__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=64e73920 */ "./resources/js/views/admin/website/gallery/video/create.vue?vue&type=template&id=64e73920");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/gallery/video/create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_64e73920__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/website/gallery/video/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/video/create.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/video/create.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/gallery/video/create.vue?vue&type=template&id=64e73920":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/admin/website/gallery/video/create.vue?vue&type=template&id=64e73920 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_64e73920__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_64e73920__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=64e73920 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/gallery/video/create.vue?vue&type=template&id=64e73920");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_website_gallery_video_create_vue.js.map