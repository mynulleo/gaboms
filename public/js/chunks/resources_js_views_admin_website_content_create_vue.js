"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_website_content_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Form_CKEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/Form/CKEditor */ "./resources/js/components/Form/CKEditor.vue");
var model = "content";

// import Meta from "../../../../components/Form/Meta";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // components: { Editor, Meta },
  components: {
    Editor: _components_Form_CKEditor__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      page_title: "",
      model: model,
      data: {
        status: "active",
        original_image: "",
        meta_tag: null,
        // meta: {},
        content_files: [{
          title: "",
          file: null
        }]
      },
      fileErrors: [],
      image: {
        original_image: ""
      },
      is_meta: false
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
  watch: {
    $route: {
      handler: "asyncData",
      immediate: true
    },
    'data.meta_tag': function dataMeta_tag(newVal) {
      this.updateIsMeta();
    },
    'data.meta_description': function dataMeta_description(newVal) {
      this.updateIsMeta();
    },
    is_meta: function is_meta(newVal) {
      if (newVal === true) {
        this.metaScroll();
      }
    }
  },
  methods: {
    submit: function submit() {
      var _this2 = this;
      var hasError = false;
      this.data.content_files.forEach(function (_, index) {
        var _this2$fileErrors$ind, _this2$fileErrors$ind2;
        _this2.validateFileRow(index);
        if ((_this2$fileErrors$ind = _this2.fileErrors[index]) !== null && _this2$fileErrors$ind !== void 0 && _this2$fileErrors$ind.title || (_this2$fileErrors$ind2 = _this2.fileErrors[index]) !== null && _this2$fileErrors$ind2 !== void 0 && _this2$fileErrors$ind2.file) {
          hasError = true;
        }
      });
      if (hasError) {
        this.$toast("Please correct the errors before submitting", "warning");
        return;
      }
      var error = this.validation.countErrors();
      this.$validate().then(function (res) {
        if (error > 0) {
          _this2.toast("You need to fill " + error + " more empty mandatory fields", "warning");
          return false;
        }
        if (res) {
          var _this2$$root$media_va, _this2$$root$media_va2;
          _this2.$root.submit = true;
          var formData = new FormData();
          formData.append("title", _this2.data.title || "");
          formData.append("description", _this2.data.description || "");
          if (_this2.data.meta_tag && _this2.data.meta_tag.length > 0) {
            formData.append("meta_tag", JSON.stringify(_this2.data.meta_tag));
          } else {
            formData.append("meta_tag", JSON.stringify([]));
          }
          formData.append("meta_description", _this2.data.meta_description || "");
          formData.append("slug", _this2.$route.params.slug || "");
          formData.append("image_base64", _this2.data.original_image || "");
          formData.append("image_resize_value", (_this2$$root$media_va = (_this2$$root$media_va2 = _this2.$root.media_validators) === null || _this2$$root$media_va2 === void 0 || (_this2$$root$media_va2 = _this2$$root$media_va2.image) === null || _this2$$root$media_va2 === void 0 ? void 0 : _this2$$root$media_va2.resize_value) !== null && _this2$$root$media_va !== void 0 ? _this2$$root$media_va : "");
          // formData.append("is_meta", this.data.meta.is_meta ? 1 : 0);
          formData.append("status", _this2.data.status || "inactive");
          _this2.data.content_files.forEach(function (item, index) {
            if (item) {
              var _item$id;
              if (item.title) {
                formData.append("content_files[".concat(index, "][title]"), item.title);
              }
              if (item.file) {
                formData.append("content_files[".concat(index, "][file]"), item.file);
              }
              formData.append("content_files[".concat(index, "][id]"), (_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : "");
            }
          });
          axios.post("/content", formData).then(function (res) {
            if (res.data.slug || res.data.message) {
              var slug = res.data.slug || _this2.$route.params.slug;
              var type = res.data.type || "success";
              _this2.$toast(res.data.message || "Save successful", type);
              _this2.$router.push({
                name: "content.index",
                params: {
                  slug: slug
                }
              });
            }
            if (res.data.error) {
              _this2.$toast(res.data.error, "error");
              setTimeout(function () {
                location.reload();
              }, 100);
            } else if (res.data.warning) {
              _this2.$toast(res.data.warning, "warning");
              _this2.$router.push({
                name: "content.show",
                params: {
                  slug: _this2.$route.params.slug
                }
              });
            }
          })["catch"](function (error) {
            if (error.response.status === 422) {
              $("#validateModal").modal("show");
              if (error.response.data.exception) {
                _this2.$root.exception_errors = error.response.data.exception;
              } else {
                _this2.$root.validation_errors = error.response.data.errors || {};
              }
              _this2.$toast("You need to fill empty mandatory fields", "warning");
            } else {
              _this2.$toast("Something went wrong!", "error");
            }
          }).then(function () {
            return setTimeout(function () {
              return _this2.$root.submit = false;
            }, 200);
          });
        }
      });
    },
    clearContentFiles: function clearContentFiles() {
      for (var i = 0; i < this.data.content_files.length; i++) {
        delete this.data.content_files[i];
      }
      this.addFileRow();
    },
    // scroll for meta
    metaScroll: function metaScroll() {
      var targetElement = document.querySelector("#meta_box");
      setTimeout(function () {
        if (targetElement) {
          var extraOffset = 100; // Adjust this value to add more space at the bottom
          var elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - extraOffset,
            behavior: "smooth"
          });
        }
      }, 100);
    },
    // track of metaut
    updateIsMeta: function updateIsMeta() {
      this.is_meta = !!(this.data.meta_tag && this.data.meta_tag.length > 0) || !!(this.data.meta_description && this.data.meta_description.trim() !== '');
    },
    openFile: function openFile(file) {
      var fileUrl;
      if (file instanceof File) {
        fileUrl = URL.createObjectURL(file);
        window.open(fileUrl, "_blank");
      } else if (typeof file === "string") {
        fileUrl = this.$root.baseurl + "/public/storage/" + file;
        window.open(fileUrl, "_blank");
      }
    },
    addFileRow: function addFileRow() {
      this.data.content_files.push({
        title: "",
        file: null
      });
    },
    removeFile: function removeFile(index) {
      if (Object.keys(this.data.content_files).length > 1) {
        delete this.data.content_files[index];
      }
    },
    isLastItem: function isLastItem(items, index) {
      return index === items.length - 1;
    },
    handleFileUpload: function handleFileUpload(event, index) {
      var file = event.target.files[0];
      this.data.content_files[index].file = file;
      this.validateFileRow(index);
    },
    validateFileRow: function validateFileRow(index) {
      // Initialize error tracking for this row
      if (!this.fileErrors[index]) {
        this.fileErrors[index] = {};
      }
      var file = this.data.content_files[index].file;
      var title = this.data.content_files[index].title;
      if (file && !title) {
        this.fileErrors[index].title = "Title is required when a file is uploaded.";
      } else {
        this.fileErrors[index].title = ""; // Clear the error if resolved
      }

      if (!file && title) {
        this.fileErrors[index].file = "File is required when a title is provided.";
      } else {
        this.fileErrors[index].file = ""; // Clear the error if resolved
      }
    },
    getFileUrl: function getFileUrl(file) {
      if (file instanceof File) {
        return URL.createObjectURL(file);
      } else if (typeof file === "string") {
        return file;
      }
      return null;
    },
    asyncData: function asyncData() {
      var _this3 = this;
      if (this.$route.params.slug) {
        axios.get("".concat(this.model, "/").concat(this.$route.params.slug)).then(function (response) {
          _this3.data = response.data;
          if (!_this3.data.content_files || _this3.data.content_files.length === 0) {
            _this3.data.content_files = [{
              title: "",
              file: null
            }];
          }

          /* this.data.meta = {
              is_meta: response.data.is_meta,
              meta_tag: response.data.meta_tag,
              meta_description: response.data.meta_description,
          }; */
        });

        var breadcrumb = [{
          route: model + ".create",
          title: model + " Create",
          slug: this.$route.params.slug ? this.$route.params.slug : ""
        }];
        this.$store.dispatch("breadcrumb/storeLevels", breadcrumb);
      }
    }
  },
  created: function created() {
    if (this.$route.params.slug) {
      var slug = this.$route.params.slug;
      var title = slug.replace("-", " ");
      this.page_title = this.ucfirst(this.model) + " " + "Edit";
    } else {
      this.page_title = this.ucfirst(this.model) + " " + "Create";
    }
    this.getMediaValidators("Content");
  },
  validators: {
    "data.title": function dataTitle() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Title is required");
    },
    "data.description": function dataDescription() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Description is required");
    },
    "data.status": function dataStatus() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return Validator.value(value).required("Status is required");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=template&id=637a5585&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=template&id=637a5585&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "col-lg-12"
};
var _hoisted_2 = {
  "class": "col-lg-9"
};
var _hoisted_3 = {
  "class": "row g-3"
};
var _hoisted_4 = {
  "class": "col-lg-4 col-xl-3"
};
var _hoisted_5 = {
  "class": "row g-3"
};
var _hoisted_6 = {
  "class": "col-lg-12"
};
var _hoisted_7 = {
  "class": "col-lg-12"
};
var _hoisted_8 = {
  "class": "text-end"
};
var _hoisted_9 = {
  "class": "multiple_options_create table-responsive"
};
var _hoisted_10 = {
  "class": "table table-bordered mb-0 mt-0"
};
var _hoisted_11 = {
  key: 0
};
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = {
  "class": "input-group position-relative"
};
var _hoisted_14 = ["onUpdate:modelValue", "name", "onInput"];
var _hoisted_15 = {
  key: 0,
  "class": "text-danger d-inline-block fw-medium mt-1"
};
var _hoisted_16 = {
  "class": "form-group"
};
var _hoisted_17 = {
  "class": "input-group position-relative"
};
var _hoisted_18 = ["onChange", "name"];
var _hoisted_19 = {
  key: 0,
  "class": "text-danger d-inline-block fw-medium mt-1"
};
var _hoisted_20 = {
  style: {
    "width": "120px"
  }
};
var _hoisted_21 = {
  "class": "multiple_fields_actions_btn d-flex align-items-center gap-2"
};
var _hoisted_22 = ["disabled", "onClick"];
var _hoisted_23 = ["onClick"];
var _hoisted_24 = {
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
var _hoisted_25 = {
  "class": "col-lg-12"
};
var _hoisted_26 = {
  id: "meta_box",
  "class": "static_fieldset"
};
var _hoisted_27 = {
  "class": "check_box style2"
};
var _hoisted_28 = {
  "class": "form-check"
};
var _hoisted_29 = {
  key: 0,
  "class": "col-lg-12"
};
var _hoisted_30 = {
  "class": "row g-3"
};
var _hoisted_31 = {
  "class": "col-12"
};
var _hoisted_32 = {
  "class": "col-12"
};
var _hoisted_33 = {
  "class": "form-element"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Input");
  var _component_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("editor");
  var _component_File = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("File");
  var _component_GlobalCrop = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("GlobalCrop");
  var _component_Switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Switch");
  var _component_Fieldset = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Fieldset");
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");
  var _component_v_select_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select-container");
  var _component_create_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-form");
  var _directive_x_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("x-tooltip");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_create_form, {
    onOnSubmit: $options.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _cache[9] || (_cache[9] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Content")]);
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          var _ctx$$root$media_vali, _ctx$$root$media_vali2, _ctx$$root$media_vali3, _ctx$$root$media_vali4, _ctx$$root$media_vali5, _ctx$$root$media_vali6, _ctx$$root$media_vali7, _ctx$$root$media_vali8, _ctx$$root$media_vali9, _ctx$$root$media_vali10, _ctx$$root$media_vali11, _ctx$$root$media_vali12, _ctx$$root$media_vali13, _ctx$$root$media_vali14;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Input, {
            modelValue: $data.data.title,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.data.title = $event;
            }),
            field: "data.title",
            title: "Title",
            req: true,
            col: "12 col-sm-12"
          }, null, 8 /* PROPS */, ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_editor, {
            modelValue: $data.data.description,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.data.description = $event;
            }),
            field: "data.description",
            required: "",
            title: "Description",
            col: "12"
          }, null, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_File, {
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
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.data.original_image = $event;
            }),
            image: $data.image.original_image,
            aspectRatio: {
              aspectRatio: ((_ctx$$root$media_vali7 = (_ctx$$root$media_vali8 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali8 === void 0 || (_ctx$$root$media_vali8 = _ctx$$root$media_vali8.image) === null || _ctx$$root$media_vali8 === void 0 ? void 0 : _ctx$$root$media_vali8.min_width) !== null && _ctx$$root$media_vali7 !== void 0 ? _ctx$$root$media_vali7 : 600) / ((_ctx$$root$media_vali9 = (_ctx$$root$media_vali10 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali10 === void 0 || (_ctx$$root$media_vali10 = _ctx$$root$media_vali10.image) === null || _ctx$$root$media_vali10 === void 0 ? void 0 : _ctx$$root$media_vali10.min_height) !== null && _ctx$$root$media_vali9 !== void 0 ? _ctx$$root$media_vali9 : 600)
            },
            minWidth: (_ctx$$root$media_vali11 = (_ctx$$root$media_vali12 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali12 === void 0 || (_ctx$$root$media_vali12 = _ctx$$root$media_vali12.image) === null || _ctx$$root$media_vali12 === void 0 ? void 0 : _ctx$$root$media_vali12.min_width) !== null && _ctx$$root$media_vali11 !== void 0 ? _ctx$$root$media_vali11 : 600,
            minHeight: (_ctx$$root$media_vali13 = (_ctx$$root$media_vali14 = _ctx.$root.media_validators) === null || _ctx$$root$media_vali14 === void 0 || (_ctx$$root$media_vali14 = _ctx$$root$media_vali14.image) === null || _ctx$$root$media_vali14 === void 0 ? void 0 : _ctx$$root$media_vali14.min_height) !== null && _ctx$$root$media_vali13 !== void 0 ? _ctx$$root$media_vali13 : 600
          }, null, 8 /* PROPS */, ["image", "aspectRatio", "minWidth", "minHeight"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Switch, {
            modelValue: $data.data.status,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.data.status = $event;
            }),
            "on-label": "Active",
            "off-label": "Deactive",
            req: true
          }, null, 8 /* PROPS */, ["modelValue"])];
        }),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Content File")]);
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            "class": "btn badge bg-danger py-2 px-3 btn-danger mb-2 position-absolute multiple_file_field_reset rounded-pill",
            "data-bs-toggle": "tooltip",
            "data-bs-placement": "top",
            "data-bs-title": "Clear",
            onClick: _cache[4] || (_cache[4] = function () {
              return $options.clearContentFiles && $options.clearContentFiles.apply($options, arguments);
            }),
            style: {
              "padding": "3px 12px"
            }
          }, _cache[11] || (_cache[11] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Clear ")]))), [[_directive_x_tooltip]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [_cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "File"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.content_files, function (file, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              type: "text",
              "class": "form-control",
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return file.title = $event;
              },
              name: "content_files[".concat(index, "][title]"),
              placeholder: "Enter title",
              onInput: function onInput($event) {
                return $options.validateFileRow(index);
              }
            }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_14), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, file.title]])]), $data.fileErrors[index] && $data.fileErrors[index].title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.fileErrors[index].title), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <small class=\"opacity-0 text-danger d-inline-block fw-medium mt-1\"></small> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              type: "file",
              "class": "form-control",
              accept: ".pdf, .doc, .docx, .xls, .xlsx",
              onChange: function onChange($event) {
                return $options.handleFileUpload($event, index);
              },
              name: "content_files[".concat(index, "][file]")
            }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_18)]), $data.fileErrors[index] && $data.fileErrors[index].file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.fileErrors[index].file), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <small class=\"opacity-0 text-danger d-inline-block fw-medium mt-1\"></small> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [file.file ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
              key: 0,
              type: "button",
              "data-bs-toggle": "tooltip",
              "data-bs-placement": "top",
              "data-bs-title": "View",
              "class": "btns view_one",
              disabled: !file.file,
              onClick: function onClick($event) {
                return $options.openFile(file.file);
              },
              style: {
                "background-color": "#007bff",
                "color": "white",
                "border": "none",
                "padding": "8px 12px",
                "border-radius": "4px"
              }
            }, _toConsumableArray(_cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
              "class": "far fa-eye"
            }, null, -1 /* HOISTED */)])), 8 /* PROPS */, _hoisted_22)), [[_directive_x_tooltip]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.data.content_files.length > 1 ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
              key: 1,
              type: "button",
              "class": "btns delete_one",
              "data-bs-toggle": "tooltip",
              "data-bs-placement": "top",
              "data-bs-title": "Delete",
              onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                return $options.removeFile(index);
              }, ["prevent"])
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_24, _toConsumableArray(_cache[13] || (_cache[13] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
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
            }, null, -1 /* HOISTED */)])))), [[_directive_x_tooltip]])], 8 /* PROPS */, _hoisted_23)), [[_directive_x_tooltip]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
              type: "button",
              "class": "btns add_more",
              "data-bs-toggle": "tooltip",
              "data-bs-placement": "top",
              "data-bs-title": "Add",
              onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                return $options.addFileRow();
              }, ["prevent"]))
            }, _toConsumableArray(_cache[14] || (_cache[14] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "class": "icon icon-tabler icons-tabler-outline icon-tabler-plus"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
              d: "M12 5l0 14"
            }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
              d: "M5 12l14 0"
            })], -1 /* HOISTED */)])))), [[_directive_x_tooltip]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <small class=\"opacity-0 text-danger d-inline-block fw-medium mt-1\"></small> ")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
          }), 256 /* UNKEYED_FRAGMENT */))])])])])];
        }),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Meta v-model=\"data.meta\"/> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-check-input shadow-none d-none",
        type: "checkbox",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $data.is_meta = $event;
        }),
        id: "flexCheckChecked1"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.is_meta]]), _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
        "class": "form-check-label",
        "for": "flexCheckChecked1"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "icon"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Show / Hide Meta Information ")], -1 /* HOISTED */))])])])]), $data.is_meta == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Fieldset, null, {
        name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _cache[17] || (_cache[17] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Meta Information")]);
        }),
        content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select_container, {
            field: "meta_tag",
            title: "Meta Keywords(Optional)",
            col: "12 multiple_tags_input"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
                taggable: "",
                multiple: "",
                name: "meta_tag",
                modelValue: $data.data.meta_tag,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                  return $data.data.meta_tag = $event;
                }),
                "no-drop": ""
              }, null, 8 /* PROPS */, ["modelValue"])];
            }),
            _: 1 /* STABLE */
          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
            "for": "",
            "class": "form-label"
          }, "Meta Description(Optional)", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
            name: "meta_description",
            "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
              return $data.data.meta_description = $event;
            }),
            "class": "form-control",
            id: "",
            cols: "30",
            rows: "4"
          }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.meta_description]])])])])];
        }),
        _: 1 /* STABLE */
      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOnSubmit"]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-btn[data-v-637a5585] {\r\n    font-size: 0.6rem;\r\n    padding: 0.5rem 0.75rem;\r\n    line-height: 2;\r\n    width: 3rem;\r\n    min-width: 2rem;\n}\n.custom-btn .fas[data-v-637a5585] {\r\n    font-size: 0.6rem;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/views/admin/website/content/create.vue"],"names":[],"mappings":";AAqeA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,cAAc;IACd,WAAW;IACX,eAAe;AACnB;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["<template>\r\n    <create-form @onSubmit=\"submit\">\r\n        <div class=\"col-lg-12\">\r\n            <Fieldset>\r\n                <template v-slot:name>Content</template>\r\n                <template v-slot:content>\r\n                    <div class=\"col-lg-9\">\r\n                        <div class=\"row g-3\">\r\n                            <Input v-model=\"data.title\" field=\"data.title\" title=\"Title\" :req=\"true\"\r\n                                col=\"12 col-sm-12\" />\r\n                            <editor v-model=\"data.description\" field=\"data.description\" required title=\"Description\"\r\n                                col=\"12\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-4 col-xl-3\">\r\n                        <div class=\"row g-3\">\r\n                            <File title=\"Image\" field=\"data.original_image\" mime=\"img\" fileClassName=\"file2\"\r\n                                :showCrop=\"true\" :vHeight=\"$root.media_validators?.image?.min_height ?? 600\"\r\n                                :vWidth=\"$root.media_validators?.image?.min_width ?? 600\"\r\n                                :vSizeInKb=\"$root.media_validators?.image?.max_size ?? 5000\" col=\"12 col-12\" />\r\n                            <GlobalCrop field=\"data.original_image\"\r\n                                v-on:update:modelValue=\"data.original_image = $event\" :image=\"image.original_image\"\r\n                                :aspectRatio=\"{\r\n                                    aspectRatio:\r\n                                        ($root.media_validators?.image?.min_width ?? 600) /\r\n                                        ($root.media_validators?.image?.min_height ?? 600),\r\n                                }\" :minWidth=\"$root.media_validators?.image?.min_width ?? 600\"\r\n                                :minHeight=\"$root.media_validators?.image?.min_height ?? 600\">\r\n                            </GlobalCrop>\r\n                        </div>\r\n                    </div>\r\n                    <Switch v-model=\"data.status\" on-label=\"Active\" off-label=\"Deactive\" :req=\"true\"></Switch>\r\n                </template>\r\n            </Fieldset>\r\n        </div>\r\n        <div class=\"col-lg-12\">\r\n            <Fieldset>\r\n                <template v-slot:name>Content File</template>\r\n\r\n                <template v-slot:content>\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"text-end\">\r\n                            <span\r\n                                class=\"btn badge bg-danger py-2 px-3 btn-danger mb-2 position-absolute multiple_file_field_reset rounded-pill\"\r\n                                data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"Clear\" v-x-tooltip\r\n                                @click=\"clearContentFiles\" style=\"padding: 3px 12px\">\r\n                                Clear\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"multiple_options_create table-responsive\">\r\n                            <table class=\"table table-bordered mb-0 mt-0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Title</th>\r\n                                        <th>File</th>\r\n                                        <th>Action</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <template v-for=\"(file, index) in data.content_files\">\r\n                                        <tr v-if=\"file\">\r\n                                            <td>\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"input-group position-relative\">\r\n                                                        <input type=\"text\" class=\"form-control\" v-model=\"file.title\"\r\n                                                            :name=\"`content_files[${index}][title]`\"\r\n                                                            placeholder=\"Enter title\" @input=\"validateFileRow(index)\" />\r\n                                                    </div>\r\n                                                    <small v-if=\"fileErrors[index] && fileErrors[index].title\"\r\n                                                        class=\"text-danger d-inline-block fw-medium mt-1\">\r\n                                                        {{ fileErrors[index].title }}\r\n                                                    </small>\r\n                                                    <!-- <small class=\"opacity-0 text-danger d-inline-block fw-medium mt-1\"></small> -->\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"form-group\">\r\n                                                    <div class=\"input-group position-relative\">\r\n                                                        <input type=\"file\" class=\"form-control\"\r\n                                                            accept=\".pdf, .doc, .docx, .xls, .xlsx\"\r\n                                                            @change=\"handleFileUpload($event, index)\"\r\n                                                            :name=\"`content_files[${index}][file]`\" />\r\n                                                    </div>\r\n                                                    <small v-if=\"fileErrors[index] && fileErrors[index].file\"\r\n                                                        class=\"text-danger d-inline-block fw-medium mt-1\">\r\n                                                        {{ fileErrors[index].file }}\r\n                                                    </small>\r\n                                                    <!-- <small class=\"opacity-0 text-danger d-inline-block fw-medium mt-1\"></small> -->\r\n                                                </div>\r\n                                            </td>\r\n                                            <td style=\"width: 120px;\">\r\n                                                <div\r\n                                                    class=\"multiple_fields_actions_btn d-flex align-items-center gap-2\">\r\n                                                    <button v-if=\"file.file\" type=\"button\" data-bs-toggle=\"tooltip\"\r\n                                                        data-bs-placement=\"top\" data-bs-title=\"View\" v-x-tooltip\r\n                                                        class=\"btns view_one\" :disabled=\"!file.file\"\r\n                                                        @click=\"openFile(file.file)\" style=\"\r\n                            background-color: #007bff;\r\n                            color: white;\r\n                            border: none;\r\n                            padding: 8px 12px;\r\n                            border-radius: 4px;\r\n                          \">\r\n                                                        <i class=\"far fa-eye\"></i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" class=\"btns delete_one\"\r\n                                                        data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\r\n                                                        data-bs-title=\"Delete\" v-x-tooltip\r\n                                                        @click.prevent=\"removeFile(index)\"\r\n                                                        v-if=\"data.content_files.length > 1\">\r\n                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\r\n                                                            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n                                                            stroke-width=\"2\" stroke-linecap=\"round\"\r\n                                                            stroke-linejoin=\"round\"\r\n                                                            class=\"icon icon-tabler icons-tabler-outline icon-tabler-trash\"\r\n                                                            data-bs-toggle=\"tooltip\" data-bs-placement=\"top\"\r\n                                                            data-bs-title=\"Delete\" v-x-tooltip>\r\n                                                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n                                                            <path d=\"M4 7l16 0\" />\r\n                                                            <path d=\"M10 11l0 6\" />\r\n                                                            <path d=\"M14 11l0 6\" />\r\n                                                            <path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" />\r\n                                                            <path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" />\r\n                                                        </svg>\r\n                                                    </button>\r\n                                                    <button type=\"button\" class=\"btns add_more\" data-bs-toggle=\"tooltip\"\r\n                                                        data-bs-placement=\"top\" data-bs-title=\"Add\" v-x-tooltip\r\n                                                        @click.prevent=\"addFileRow()\">\r\n                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"\r\n                                                            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\r\n                                                            stroke-width=\"2\" stroke-linecap=\"round\"\r\n                                                            stroke-linejoin=\"round\"\r\n                                                            class=\"icon icon-tabler icons-tabler-outline icon-tabler-plus\">\r\n                                                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n                                                            <path d=\"M12 5l0 14\" />\r\n                                                            <path d=\"M5 12l14 0\" />\r\n                                                        </svg>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <!-- <small class=\"opacity-0 text-danger d-inline-block fw-medium mt-1\"></small> -->\r\n                                            </td>\r\n                                        </tr>\r\n                                    </template>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </template>\r\n            </Fieldset>\r\n        </div>\r\n        <!-- <Meta v-model=\"data.meta\"/> -->\r\n        <div class=\"col-lg-12\">\r\n            <div id=\"meta_box\" class=\"static_fieldset\">\r\n                <div class=\"check_box style2\">\r\n                    <div class=\"form-check\">\r\n                        <input class=\"form-check-input shadow-none d-none\" type=\"checkbox\" v-model=\"is_meta\"\r\n                            id=\"flexCheckChecked1\">\r\n                        <label class=\"form-check-label\" for=\"flexCheckChecked1\">\r\n                            <span class=\"icon\"></span> Show / Hide Meta Information\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-12\" v-if=\"is_meta == true\">\r\n            <Fieldset>\r\n                <template v-slot:name>Meta Information</template>\r\n                <template v-slot:content>\r\n                    <div class=\"row g-3\">\r\n                        <div class=\"col-12\">\r\n                            <v-select-container field=\"meta_tag\" title=\"Meta Keywords(Optional)\"\r\n                                col=\"12 multiple_tags_input\">\r\n                                <v-select taggable multiple name=\"meta_tag\" v-model=\"data.meta_tag\" no-drop></v-select>\r\n                            </v-select-container>\r\n                        </div>\r\n                        <div class=\"col-12\">\r\n                            <div class=\"form-element\">\r\n                                <label for=\"\" class=\"form-label\">Meta Description(Optional)</label>\r\n                                <textarea name=\"meta_description\" v-model=\"data.meta_description\" class=\"form-control\"\r\n                                    id=\"\" cols=\"30\" rows=\"4\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </template>\r\n            </Fieldset>\r\n        </div>\r\n\r\n    </create-form>\r\n</template>\r\n\r\n<script>\r\nconst model = \"content\";\r\nimport Editor from \"../../../../components/Form/CKEditor\";\r\n// import Meta from \"../../../../components/Form/Meta\";\r\n\r\nexport default {\r\n    // components: { Editor, Meta },\r\n    components: { Editor },\r\n    data() {\r\n        return {\r\n            page_title: \"\",\r\n            model: model,\r\n            data: {\r\n                status: \"active\",\r\n                original_image: \"\",\r\n                meta_tag: null,\r\n                // meta: {},\r\n                content_files: [{ title: \"\", file: null }],\r\n            },\r\n            fileErrors: [],\r\n            image: { original_image: \"\" },\r\n            is_meta: false,\r\n        };\r\n    },\r\n    provide() {\r\n        return {\r\n            validate: this.validation,\r\n            data: () => this.data,\r\n            image: this.image,\r\n        };\r\n    },\r\n    watch: {\r\n        $route: {\r\n            handler: \"asyncData\",\r\n            immediate: true,\r\n        },\r\n        'data.meta_tag': function (newVal) {\r\n            this.updateIsMeta();\r\n        },\r\n        'data.meta_description': function (newVal) {\r\n            this.updateIsMeta();\r\n        },\r\n        is_meta(newVal) {\r\n            if (newVal === true) {\r\n                this.metaScroll();\r\n            }\r\n        },\r\n    },\r\n\r\n    methods: {\r\n        submit() {\r\n            let hasError = false;\r\n            this.data.content_files.forEach((_, index) => {\r\n                this.validateFileRow(index);\r\n                if (this.fileErrors[index]?.title || this.fileErrors[index]?.file) {\r\n                    hasError = true;\r\n                }\r\n            });\r\n            if (hasError) {\r\n                this.$toast(\"Please correct the errors before submitting\", \"warning\");\r\n                return;\r\n            }\r\n            const error = this.validation.countErrors();\r\n            this.$validate().then((res) => {\r\n                if (error > 0) {\r\n                    this.toast(\r\n                        \"You need to fill \" + error + \" more empty mandatory fields\",\r\n                        \"warning\"\r\n                    );\r\n                    return false;\r\n                }\r\n                if (res) {\r\n                    this.$root.submit = true;\r\n                    const formData = new FormData();\r\n                    formData.append(\"title\", this.data.title || \"\");\r\n                    formData.append(\"description\", this.data.description || \"\");\r\n\r\n                    if (this.data.meta_tag && this.data.meta_tag.length > 0) {\r\n                        formData.append(\"meta_tag\", JSON.stringify(this.data.meta_tag));\r\n                    } else {\r\n                        formData.append(\"meta_tag\", JSON.stringify([]));\r\n                    }\r\n                    formData.append(\"meta_description\", this.data.meta_description || \"\");\r\n\r\n                    formData.append(\"slug\", this.$route.params.slug || \"\");\r\n                    formData.append(\"image_base64\", this.data.original_image || \"\");\r\n                    formData.append(\r\n                        \"image_resize_value\",\r\n                        this.$root.media_validators?.image?.resize_value ?? \"\"\r\n                    );\r\n                    // formData.append(\"is_meta\", this.data.meta.is_meta ? 1 : 0);\r\n                    formData.append(\"status\", this.data.status || \"inactive\");\r\n                    this.data.content_files.forEach((item, index) => {\r\n                        if (item) {\r\n                            if (item.title) {\r\n                                formData.append(`content_files[${index}][title]`, item.title);\r\n                            }\r\n                            if (item.file) {\r\n                                formData.append(`content_files[${index}][file]`, item.file);\r\n                            }\r\n\r\n                            formData.append(`content_files[${index}][id]`, item.id ?? \"\");\r\n                        }\r\n                    });\r\n                    axios\r\n                        .post(\"/content\", formData)\r\n                        .then((res) => {\r\n                            if (res.data.slug || res.data.message) {\r\n                                const slug = res.data.slug || this.$route.params.slug;\r\n                                const type = res.data.type || \"success\";\r\n\r\n                                this.$toast(res.data.message || \"Save successful\", type);\r\n                                this.$router.push({\r\n                                    name: \"content.index\",\r\n                                    params: { slug },\r\n                                });\r\n                            }\r\n                            if (res.data.error) {\r\n                                this.$toast(res.data.error, \"error\");\r\n                                setTimeout(() => {\r\n                                    location.reload();\r\n                                }, 100);\r\n                            } else if (res.data.warning) {\r\n                                this.$toast(res.data.warning, \"warning\");\r\n                                this.$router.push({\r\n                                    name: \"content.show\",\r\n                                    params: { slug: this.$route.params.slug },\r\n                                });\r\n                            }\r\n                        })\r\n                        .catch((error) => {\r\n                            if (error.response.status === 422) {\r\n                                $(\"#validateModal\").modal(\"show\");\r\n                                if (error.response.data.exception) {\r\n                                    this.$root.exception_errors =\r\n                                        error.response.data.exception;\r\n                                } else {\r\n                                    this.$root.validation_errors =\r\n                                        error.response.data.errors || {};\r\n                                }\r\n                                this.$toast(\r\n                                    \"You need to fill empty mandatory fields\",\r\n                                    \"warning\"\r\n                                );\r\n                            } else {\r\n                                this.$toast(\"Something went wrong!\", \"error\");\r\n                            }\r\n                        })\r\n                        .then(() => setTimeout(() => (this.$root.submit = false), 200));\r\n                }\r\n            });\r\n        },\r\n\r\n        clearContentFiles() {\r\n            for (let i = 0; i < this.data.content_files.length; i++) {\r\n                delete this.data.content_files[i];\r\n            }\r\n\r\n            this.addFileRow();\r\n        },\r\n\r\n        // scroll for meta\r\n        metaScroll() {\r\n            const targetElement = document.querySelector(\"#meta_box\");\r\n\r\n            setTimeout(() => {\r\n                if (targetElement) {\r\n                    const extraOffset = 100; // Adjust this value to add more space at the bottom\r\n                    const elementPosition =\r\n                        targetElement.getBoundingClientRect().top +\r\n                        window.scrollY;\r\n                    window.scrollTo({\r\n                        top: elementPosition - extraOffset,\r\n                        behavior: \"smooth\",\r\n                    });\r\n                }\r\n            }, 100);\r\n        },\r\n        // track of metaut\r\n        updateIsMeta() {\r\n            this.is_meta = !!(this.data.meta_tag && this.data.meta_tag.length > 0) ||\r\n                !!(this.data.meta_description && this.data.meta_description.trim() !== '');\r\n        },\r\n        openFile(file) {\r\n            let fileUrl;\r\n            if (file instanceof File) {\r\n                fileUrl = URL.createObjectURL(file);\r\n                window.open(fileUrl, \"_blank\");\r\n            } else if (typeof file === \"string\") {\r\n                fileUrl = this.$root.baseurl + \"/public/storage/\" + file;\r\n                window.open(fileUrl, \"_blank\");\r\n            }\r\n        },\r\n        addFileRow() {\r\n            this.data.content_files.push({\r\n                title: \"\",\r\n                file: null,\r\n            });\r\n        },\r\n        removeFile(index) {\r\n            if (Object.keys(this.data.content_files).length > 1) {\r\n                delete this.data.content_files[index];\r\n            }\r\n        },\r\n        isLastItem(items, index) {\r\n            return index === items.length - 1;\r\n        },\r\n        handleFileUpload(event, index) {\r\n            const file = event.target.files[0];\r\n            this.data.content_files[index].file = file;\r\n            this.validateFileRow(index);\r\n        },\r\n        validateFileRow(index) {\r\n            // Initialize error tracking for this row\r\n            if (!this.fileErrors[index]) {\r\n                this.fileErrors[index] = {};\r\n            }\r\n\r\n            const file = this.data.content_files[index].file;\r\n            const title = this.data.content_files[index].title;\r\n\r\n            if (file && !title) {\r\n                this.fileErrors[index].title = \"Title is required when a file is uploaded.\";\r\n            } else {\r\n                this.fileErrors[index].title = \"\"; // Clear the error if resolved\r\n            }\r\n\r\n            if (!file && title) {\r\n                this.fileErrors[index].file = \"File is required when a title is provided.\";\r\n            } else {\r\n                this.fileErrors[index].file = \"\"; // Clear the error if resolved\r\n            }\r\n        },\r\n        getFileUrl(file) {\r\n            if (file instanceof File) {\r\n                return URL.createObjectURL(file);\r\n            } else if (typeof file === \"string\") {\r\n                return file;\r\n            }\r\n            return null;\r\n        },\r\n        asyncData() {\r\n            if (this.$route.params.slug) {\r\n                axios.get(`${this.model}/${this.$route.params.slug}`).then((response) => {\r\n                    this.data = response.data;\r\n\r\n                    if (!this.data.content_files || this.data.content_files.length === 0) {\r\n                        this.data.content_files = [{ title: \"\", file: null }];\r\n                    }\r\n\r\n                    /* this.data.meta = {\r\n                        is_meta: response.data.is_meta,\r\n                        meta_tag: response.data.meta_tag,\r\n                        meta_description: response.data.meta_description,\r\n                    }; */\r\n                });\r\n\r\n                var breadcrumb = [\r\n                    {\r\n                        route: model + \".create\",\r\n                        title: model + \" Create\",\r\n                        slug: this.$route.params.slug ? this.$route.params.slug : \"\",\r\n                    },\r\n                ];\r\n                this.$store.dispatch(\"breadcrumb/storeLevels\", breadcrumb);\r\n            }\r\n        },\r\n    },\r\n\r\n    created() {\r\n        if (this.$route.params.slug) {\r\n            let slug = this.$route.params.slug;\r\n            let title = slug.replace(\"-\", \" \");\r\n            this.page_title = this.ucfirst(this.model) + \" \" + \"Edit\";\r\n        } else {\r\n            this.page_title = this.ucfirst(this.model) + \" \" + \"Create\";\r\n        }\r\n        this.getMediaValidators(\"Content\");\r\n    },\r\n\r\n    validators: {\r\n        \"data.title\": function (value = null) {\r\n            return Validator.value(value).required(\"Title is required\");\r\n        },\r\n        \"data.description\": function (value = null) {\r\n            return Validator.value(value).required(\"Description is required\");\r\n        },\r\n        \"data.status\": function (value = null) {\r\n            return Validator.value(value).required(\"Status is required\");\r\n        },\r\n    },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n.custom-btn {\r\n    font-size: 0.6rem;\r\n    padding: 0.5rem 0.75rem;\r\n    line-height: 2;\r\n    width: 3rem;\r\n    min-width: 2rem;\r\n}\r\n\r\n.custom-btn .fas {\r\n    font-size: 0.6rem;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_637a5585_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_637a5585_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_637a5585_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/website/content/create.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/admin/website/content/create.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_637a5585_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=637a5585&scoped=true */ "./resources/js/views/admin/website/content/create.vue?vue&type=template&id=637a5585&scoped=true");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/views/admin/website/content/create.vue?vue&type=script&lang=js");
/* harmony import */ var _create_vue_vue_type_style_index_0_id_637a5585_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css */ "./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_637a5585_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-637a5585"],['__file',"resources/js/views/admin/website/content/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/website/content/create.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/create.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/website/content/create.vue?vue&type=template&id=637a5585&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/create.vue?vue&type=template&id=637a5585&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_637a5585_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_637a5585_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=637a5585&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=template&id=637a5585&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_637a5585_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/website/content/create.vue?vue&type=style&index=0&id=637a5585&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=resources_js_views_admin_website_content_create_vue.js.map