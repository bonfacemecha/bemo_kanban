"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_home_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  data: function data() {
    return {
      title: "",
      showModal: false,
      showModal2: false,
      card_id: ""
    };
  },
  mounted: function mounted() {
    this.getAllDeliverables();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["getAllDeliverables"])), {}, {
    storeDeliverable: function storeDeliverable() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/deliverables", {
        title: this.getDeliverable.title
      }).then(function (res) {
        _this.showModal = false;
        _this.getDeliverable.title = "";
        _this.getAllDeliverables();
      })["catch"](function (err) {
        console.log("Error : ".concat(err));
      });
    },
    storeTask: function storeTask(value) {
      var _this2 = this;
      console.log(value);
      var payload = {
        title: this.getTask.title,
        deliverable_id: value,
        description: this.getTask.description
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("/tasks", payload).then(function (res) {
        _this2.showModal2 = false;
        _this2.getTask.title = "";
        _this2.getTask.description = "";
        _this2.getAllDeliverables();
      })["catch"](function (err) {
        console.log("Error : ".concat(err));
      });
    },
    deleteCol: function deleteCol(value) {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/deliverables/" + value).then(function (res) {
        _this3.getAllDeliverables();
      })["catch"](function (err) {
        console.log("Error : ".concat(err));
      });
    },
    openModal: function openModal() {
      this.showModal = true;
    },
    closeModal: function closeModal() {
      this.showModal = false;
    },
    openModal2: function openModal2(value) {
      this.card_id = value;
      this.showModal2 = true;
    },
    closeModal2: function closeModal2() {
      this.showModal2 = false;
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getDeliverable", "allDeliverables", "getTask"]))
});

/***/ }),

/***/ "./resources/js/views/home/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/home/index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3ce4d0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3ce4d0e1& */ "./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3ce4d0e1___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3ce4d0e1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/home/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3ce4d0e1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3ce4d0e1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3ce4d0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3ce4d0e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/index.vue?vue&type=template&id=3ce4d0e1& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "columns" },
      [
        _vm._l(_vm.allDeliverables, function (col) {
          return _c(
            "div",
            { key: col.id, staticClass: "column" },
            [
              _c(
                "button",
                {
                  attrs: { title: "delete" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.deleteCol(col.id, $event)
                    },
                  },
                },
                [_vm._v("X")]
              ),
              _vm._v(" "),
              _c("h2", { staticClass: "column-title" }, [
                _vm._v(_vm._s(col.title)),
              ]),
              _vm._v(" "),
              _vm._l(col.tasks, function (item) {
                return _c("div", { key: item.id, staticClass: "card" }, [
                  _vm._v(
                    "\n                " + _vm._s(item.title) + "\n            "
                  ),
                ])
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#exampleModal" + col.id,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.openModal2(col.id)
                    },
                  },
                },
                [_vm._v("Add Card")]
              ),
              _vm._v(" "),
              _vm.showModal2 && _vm.card_id === col.id
                ? _c(
                    "div",
                    {
                      staticClass: "modal-overlay",
                      attrs: { id: "exampleModal" + col.id },
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("h1", { staticClass: "modal-title" }, [
                          _vm._v("Add New Card"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            attrs: { action: "", method: "post" },
                            on: {
                              submit: function ($event) {
                                $event.preventDefault()
                                return _vm.storeTask(col.id)
                              },
                            },
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.getTask.title,
                                  expression: "getTask.title",
                                },
                              ],
                              attrs: { type: "text", id: "title" },
                              domProps: { value: _vm.getTask.title },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.getTask,
                                    "title",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.getTask.description,
                                  expression: "getTask.description",
                                },
                              ],
                              attrs: { type: "text", id: "description" },
                              domProps: { value: _vm.getTask.description },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.getTask,
                                    "description",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("button", { attrs: { type: "submit" } }, [
                              _vm._v("submit"),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "modal-close-btn",
                            on: { click: _vm.closeModal2 },
                          },
                          [_vm._v("Close")]
                        ),
                      ]),
                    ]
                  )
                : _vm._e(),
            ],
            2
          )
        }),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("div", [
            _c(
              "button",
              {
                attrs: { "data-target": "#exampleModal2" },
                on: { click: _vm.openModal },
              },
              [_vm._v("Add Column")]
            ),
            _vm._v(" "),
            _vm.showModal
              ? _c(
                  "div",
                  {
                    staticClass: "modal-overlay",
                    attrs: { id: "exampleModal2" },
                  },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _c("h1", { staticClass: "modal-title" }, [
                        _vm._v("Add New Column"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          attrs: { action: "", method: "post" },
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.storeDeliverable.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.getDeliverable.title,
                                expression: "getDeliverable.title",
                              },
                            ],
                            attrs: { type: "text", id: "title" },
                            domProps: { value: _vm.getDeliverable.title },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.getDeliverable,
                                  "title",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("button", { attrs: { type: "submit" } }, [
                            _vm._v("submit"),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "modal-close-btn",
                          on: { click: _vm.closeModal },
                        },
                        [_vm._v("Close")]
                      ),
                    ]),
                  ]
                )
              : _vm._e(),
          ]),
        ]),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);