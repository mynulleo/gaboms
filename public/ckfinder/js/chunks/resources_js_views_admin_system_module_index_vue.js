"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_system_module_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/module/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/module/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var model = "module";
// set breadcrumb
var breadcrumb = [{
  route: "module.create",
  title: "Module Create"
}, {
  route: "module.index",
  title: "Module Post Installation Guide"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      model: model,
      data: {}
    };
  },
  methods: {
    getRules: function getRules() {
      var _this = this;
      this.$root.spinner = true;
      axios.get("/module/create", {
        params: {
          model_name: this.$route.params.model
        }
      }).then(function (res) {
        return _this.data = res.data;
      })["catch"](function (error) {
        return console.log(error);
      }).then(function (alw) {
        return setTimeout(function () {
          return _this.$root.spinner = false;
        }, 300);
      });
    },
    systemRoleUpdate: function systemRoleUpdate() {
      var _this2 = this;
      axios.get("/systems-update").then(function (res) {
        _this2.$toast(res.data.message, "success");
      });
    }
  },
  created: function created() {
    this.getRules(); // get rules
    this.$store.dispatch("breadcrumb/storeLevels", breadcrumb);
    console.log(this.$route.params.model);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/module/index.vue?vue&type=template&id=4c522920":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/module/index.vue?vue&type=template&id=4c522920 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-7"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "box box-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-center p-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" A description of all necessary step of creating "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-red font-weight-bold"
}, "module"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" is given below "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-maroon font-weight-bold"
}, "(Please, follow these instruction)")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.box ")])], -1 /* HOISTED */);
var _hoisted_2 = {
  key: 0,
  "class": "content text-dark"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-12"
};
var _hoisted_5 = {
  "class": "timeline"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "timeline-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "timeline-header no-border mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "1) Laravel Route:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Copy the newly created route in 'admin.php' into 'auth:acces' block ")])])], -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "timeline-item"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "timeline-header no-border mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "2) Vue Route:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-maroon font-weight-bold"
}, "resources/js/Router/router.js")], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "timeline-body"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "text-uppercase"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "text-maroon"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_18 = {
  "class": "mt-3"
};
var _hoisted_19 = {
  "class": "timeline-item"
};
var _hoisted_20 = {
  "class": "timeline-header no-border"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "3) Database:", -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "text-success font-weight-bold"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "timeline-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" add your needed field in "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-maroon font-weight-bold"
}, "migration"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" file, and run this command "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-maroon font-weight-bold"
}, "php artisan migrate")], -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "mt-3"
};
var _hoisted_25 = {
  "class": "timeline-item"
};
var _hoisted_26 = {
  "class": "timeline-header no-border"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Vue File:", -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "text-success font-weight-bold"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "timeline-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Customize your "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
  "class": "text-maroon"
}, "Create.vue"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" form as the requirement "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-maroon"
}, " please provide validation rule for each and every field ")], -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "mt-3"
};
var _hoisted_31 = {
  "class": "timeline-item"
};
var _hoisted_32 = {
  "class": "timeline-header no-border"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Controller:", -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "text-success font-weight-bold"
};
var _hoisted_35 = {
  "class": "mt-3"
};
var _hoisted_36 = {
  "class": "timeline-item"
};
var _hoisted_37 = {
  "class": "timeline-header no-border"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Model:", -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "text-success font-weight-bold"
};
var _hoisted_40 = {
  "class": "mt-3"
};
var _hoisted_41 = {
  "class": "timeline-item"
};
var _hoisted_42 = {
  "class": "timeline-header no-border"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "Resource:", -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "text-success font-weight-bold"
};
var _hoisted_45 = {
  "class": "mt-3"
};
var _hoisted_46 = {
  "class": "timeline-item"
};
var _hoisted_47 = {
  "class": "timeline-header no-border"
};
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-refresh"
}, null, -1 /* HOISTED */);
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-capitalize"
}, "Update System Role", -1 /* HOISTED */);
var _hoisted_52 = [_hoisted_50, _hoisted_51];
var _hoisted_53 = ["href"];
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-refresh"
}, null, -1 /* HOISTED */);
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-capitalize"
}, "Clear", -1 /* HOISTED */);
var _hoisted_56 = [_hoisted_54, _hoisted_55];
var _hoisted_57 = {
  "class": "timeline-body mt-3"
};
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
  "class": "text-success"
}, "database/seeders/MenuSeeder.php", -1 /* HOISTED */);
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_60 = {
  "class": "text-success"
};
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
  "class": "text-success"
}, "Dashboard", -1 /* HOISTED */);
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
  "class": "text-maroon"
}, "( ctrl + f5 )", -1 /* HOISTED */);
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "mt-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-thumbs-up bg-blue text-white"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "timeline-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "timeline-header no-border"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" If you complete all the processes then your module is ready to work "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
  "class": "text-success"
}, "Congrats !!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Go ahead ")])])], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_view_page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("view-page");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_view_page, {
    defaultTable: false
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ==================== File Create ==================== "), !_ctx.$root.spinner ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" row "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" The time line "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Laravel Route item "), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Laravel Route item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Vue Route item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please copy below routes into router/index.js "), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" // ------------------"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.name) + " PORTION", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("------------------ "), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" { path: '/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "', name: '" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + ".index', component: () => import('./../views/admin/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "/index')}, ", 1 /* TEXT */), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" { path: '/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "/create', name: '" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + ".create', component: () => import('./../views/admin/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "/create')}, ", 1 /* TEXT */), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" { path: '/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "/:id', name: '" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + ".show', component: () => import('./../views/admin/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "/view')}, ", 1 /* TEXT */), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" { path: '/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "/:id/edit', name: '" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + ".edit', component: () => import('./../views/admin/" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.route) + "/create')}, ", 1 /* TEXT */), _hoisted_17])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Vue Route item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Database item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.database), 1 /* TEXT */)]), _hoisted_23])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Database item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" view File item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.vue_file), 1 /* TEXT */)]), _hoisted_29])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Vue File item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Controller item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.controller), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"timeline-body\">\r\n                    If this line does not exist :\r\n                    <span\r\n                      class=\"text-maroon font-weight-bold\"\r\n                    >use App\\Http\\Controllers\\Controller;</span>\r\n                    You just comment out of this line or\r\n                    <b\r\n                      class=\"text-maroon\"\r\n                    >remove this</b>\r\n                  </div>")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Controller item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" model item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.model), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END model item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Resource item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.resource), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Resource item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Setting item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" For menu and system update, Click below button"), _hoisted_48, _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.systemRoleUpdate && $options.systemRoleUpdate.apply($options, arguments);
        }),
        "class": "btn btn-xs mr-2 btn-success pull-left text-white"
      }, _hoisted_52), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        target: "_blank",
        href: _ctx.$root.baseurl + '/clear',
        "class": "btn btn-xs mr-2 btn-danger pull-left text-white"
      }, _hoisted_56, 8 /* PROPS */, _hoisted_53)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please add this menu to seeder file for backup "), _hoisted_58, _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your menu has been created and the "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" menu is at the top of the "), _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" menu. You will see after reloading. "), _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Finally reload the browser "), _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Setting item "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Setting item "), _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Setting item ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.col ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" /.row ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/views/admin/system/module/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/admin/system/module/index.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_4c522920__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4c522920 */ "./resources/js/views/admin/system/module/index.vue?vue&type=template&id=4c522920");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/views/admin/system/module/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_4c522920__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/admin/system/module/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/admin/system/module/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/system/module/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/module/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/system/module/index.vue?vue&type=template&id=4c522920":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/system/module/index.vue?vue&type=template&id=4c522920 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_4c522920__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_4c522920__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=4c522920 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/system/module/index.vue?vue&type=template&id=4c522920");


/***/ })

}]);