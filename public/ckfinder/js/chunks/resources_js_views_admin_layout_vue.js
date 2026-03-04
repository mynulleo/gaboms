"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([
    ["resources_js_views_admin_layout_vue"],
    {
        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=script&lang=js":
            /*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js"
                    );
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return (
                        (_typeof =
                            "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                                ? function (obj) {
                                      return typeof obj;
                                  }
                                : function (obj) {
                                      return obj &&
                                          "function" == typeof Symbol &&
                                          obj.constructor === Symbol &&
                                          obj !== Symbol.prototype
                                          ? "symbol"
                                          : typeof obj;
                                  }),
                        _typeof(obj)
                    );
                }
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly &&
                            (symbols = symbols.filter(function (sym) {
                                return Object.getOwnPropertyDescriptor(
                                    object,
                                    sym
                                ).enumerable;
                            })),
                            keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2
                            ? ownKeys(Object(source), !0).forEach(function (
                                  key
                              ) {
                                  _defineProperty(target, key, source[key]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  target,
                                  Object.getOwnPropertyDescriptors(source)
                              )
                            : ownKeys(Object(source)).forEach(function (key) {
                                  Object.defineProperty(
                                      target,
                                      key,
                                      Object.getOwnPropertyDescriptor(
                                          source,
                                          key
                                      )
                                  );
                              });
                    }
                    return target;
                }
                function _defineProperty(obj, key, value) {
                    key = _toPropertyKey(key);
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }
                function _toPropertyKey(arg) {
                    var key = _toPrimitive(arg, "string");
                    return _typeof(key) === "symbol" ? key : String(key);
                }
                function _toPrimitive(input, hint) {
                    if (_typeof(input) !== "object" || input === null)
                        return input;
                    var prim = input[Symbol.toPrimitive];
                    if (prim !== undefined) {
                        var res = prim.call(input, hint || "default");
                        if (_typeof(res) !== "object") return res;
                        throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                        );
                    }
                    return (hint === "string" ? String : Number)(input);
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
                        computed: _objectSpread(
                            {
                                isDashboardRoute: function isDashboardRoute() {
                                    return (
                                        this.$route.name === "dashboard.index"
                                    );
                                },
                            },
                            (0, vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(
                                "setting",
                                ["colors"]
                            )
                        ),
                        //   mounted() {
                        //     window.addEventListener("scroll", this.handleScroll);
                        //   },
                        //   beforeDestroy() {
                        //     window.removeEventListener("scroll", this.handleScroll);
                        //   },
                        methods: {
                            handleScroll: function handleScroll() {
                                var scrollPosition = window.scrollY;
                                if (scrollPosition < 50) {
                                    console.warn("Scroll");
                                }
                            },
                        },
                    };

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppFooter.vue?vue&type=script&lang=js":
            /*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppFooter.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {};

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=script&lang=js":
            /*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js"
                    );
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return (
                        (_typeof =
                            "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                                ? function (obj) {
                                      return typeof obj;
                                  }
                                : function (obj) {
                                      return obj &&
                                          "function" == typeof Symbol &&
                                          obj.constructor === Symbol &&
                                          obj !== Symbol.prototype
                                          ? "symbol"
                                          : typeof obj;
                                  }),
                        _typeof(obj)
                    );
                }
                function _regeneratorRuntime() {
                    "use strict";
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
                        function _regeneratorRuntime() {
                            return exports;
                        };
                    var exports = {},
                        Op = Object.prototype,
                        hasOwn = Op.hasOwnProperty,
                        defineProperty =
                            Object.defineProperty ||
                            function (obj, key, desc) {
                                obj[key] = desc.value;
                            },
                        $Symbol = "function" == typeof Symbol ? Symbol : {},
                        iteratorSymbol = $Symbol.iterator || "@@iterator",
                        asyncIteratorSymbol =
                            $Symbol.asyncIterator || "@@asyncIterator",
                        toStringTagSymbol =
                            $Symbol.toStringTag || "@@toStringTag";
                    function define(obj, key, value) {
                        return (
                            Object.defineProperty(obj, key, {
                                value: value,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                            }),
                            obj[key]
                        );
                    }
                    try {
                        define({}, "");
                    } catch (err) {
                        define = function define(obj, key, value) {
                            return (obj[key] = value);
                        };
                    }
                    function wrap(innerFn, outerFn, self, tryLocsList) {
                        var protoGenerator =
                                outerFn &&
                                outerFn.prototype instanceof Generator
                                    ? outerFn
                                    : Generator,
                            generator = Object.create(protoGenerator.prototype),
                            context = new Context(tryLocsList || []);
                        return (
                            defineProperty(generator, "_invoke", {
                                value: makeInvokeMethod(innerFn, self, context),
                            }),
                            generator
                        );
                    }
                    function tryCatch(fn, obj, arg) {
                        try {
                            return { type: "normal", arg: fn.call(obj, arg) };
                        } catch (err) {
                            return { type: "throw", arg: err };
                        }
                    }
                    exports.wrap = wrap;
                    var ContinueSentinel = {};
                    function Generator() {}
                    function GeneratorFunction() {}
                    function GeneratorFunctionPrototype() {}
                    var IteratorPrototype = {};
                    define(IteratorPrototype, iteratorSymbol, function () {
                        return this;
                    });
                    var getProto = Object.getPrototypeOf,
                        NativeIteratorPrototype =
                            getProto && getProto(getProto(values([])));
                    NativeIteratorPrototype &&
                        NativeIteratorPrototype !== Op &&
                        hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
                        (IteratorPrototype = NativeIteratorPrototype);
                    var Gp =
                        (GeneratorFunctionPrototype.prototype =
                        Generator.prototype =
                            Object.create(IteratorPrototype));
                    function defineIteratorMethods(prototype) {
                        ["next", "throw", "return"].forEach(function (method) {
                            define(prototype, method, function (arg) {
                                return this._invoke(method, arg);
                            });
                        });
                    }
                    function AsyncIterator(generator, PromiseImpl) {
                        function invoke(method, arg, resolve, reject) {
                            var record = tryCatch(
                                generator[method],
                                generator,
                                arg
                            );
                            if ("throw" !== record.type) {
                                var result = record.arg,
                                    value = result.value;
                                return value &&
                                    "object" == _typeof(value) &&
                                    hasOwn.call(value, "__await")
                                    ? PromiseImpl.resolve(value.__await).then(
                                          function (value) {
                                              invoke(
                                                  "next",
                                                  value,
                                                  resolve,
                                                  reject
                                              );
                                          },
                                          function (err) {
                                              invoke(
                                                  "throw",
                                                  err,
                                                  resolve,
                                                  reject
                                              );
                                          }
                                      )
                                    : PromiseImpl.resolve(value).then(
                                          function (unwrapped) {
                                              (result.value = unwrapped),
                                                  resolve(result);
                                          },
                                          function (error) {
                                              return invoke(
                                                  "throw",
                                                  error,
                                                  resolve,
                                                  reject
                                              );
                                          }
                                      );
                            }
                            reject(record.arg);
                        }
                        var previousPromise;
                        defineProperty(this, "_invoke", {
                            value: function value(method, arg) {
                                function callInvokeWithMethodAndArg() {
                                    return new PromiseImpl(function (
                                        resolve,
                                        reject
                                    ) {
                                        invoke(method, arg, resolve, reject);
                                    });
                                }
                                return (previousPromise = previousPromise
                                    ? previousPromise.then(
                                          callInvokeWithMethodAndArg,
                                          callInvokeWithMethodAndArg
                                      )
                                    : callInvokeWithMethodAndArg());
                            },
                        });
                    }
                    function makeInvokeMethod(innerFn, self, context) {
                        var state = "suspendedStart";
                        return function (method, arg) {
                            if ("executing" === state)
                                throw new Error("Generator is already running");
                            if ("completed" === state) {
                                if ("throw" === method) throw arg;
                                return { value: void 0, done: !0 };
                            }
                            for (
                                context.method = method, context.arg = arg;
                                ;

                            ) {
                                var delegate = context.delegate;
                                if (delegate) {
                                    var delegateResult = maybeInvokeDelegate(
                                        delegate,
                                        context
                                    );
                                    if (delegateResult) {
                                        if (delegateResult === ContinueSentinel)
                                            continue;
                                        return delegateResult;
                                    }
                                }
                                if ("next" === context.method)
                                    context.sent = context._sent = context.arg;
                                else if ("throw" === context.method) {
                                    if ("suspendedStart" === state)
                                        throw (
                                            ((state = "completed"), context.arg)
                                        );
                                    context.dispatchException(context.arg);
                                } else
                                    "return" === context.method &&
                                        context.abrupt("return", context.arg);
                                state = "executing";
                                var record = tryCatch(innerFn, self, context);
                                if ("normal" === record.type) {
                                    if (
                                        ((state = context.done
                                            ? "completed"
                                            : "suspendedYield"),
                                        record.arg === ContinueSentinel)
                                    )
                                        continue;
                                    return {
                                        value: record.arg,
                                        done: context.done,
                                    };
                                }
                                "throw" === record.type &&
                                    ((state = "completed"),
                                    (context.method = "throw"),
                                    (context.arg = record.arg));
                            }
                        };
                    }
                    function maybeInvokeDelegate(delegate, context) {
                        var methodName = context.method,
                            method = delegate.iterator[methodName];
                        if (undefined === method)
                            return (
                                (context.delegate = null),
                                ("throw" === methodName &&
                                    delegate.iterator["return"] &&
                                    ((context.method = "return"),
                                    (context.arg = undefined),
                                    maybeInvokeDelegate(delegate, context),
                                    "throw" === context.method)) ||
                                    ("return" !== methodName &&
                                        ((context.method = "throw"),
                                        (context.arg = new TypeError(
                                            "The iterator does not provide a '" +
                                                methodName +
                                                "' method"
                                        )))),
                                ContinueSentinel
                            );
                        var record = tryCatch(
                            method,
                            delegate.iterator,
                            context.arg
                        );
                        if ("throw" === record.type)
                            return (
                                (context.method = "throw"),
                                (context.arg = record.arg),
                                (context.delegate = null),
                                ContinueSentinel
                            );
                        var info = record.arg;
                        return info
                            ? info.done
                                ? ((context[delegate.resultName] = info.value),
                                  (context.next = delegate.nextLoc),
                                  "return" !== context.method &&
                                      ((context.method = "next"),
                                      (context.arg = undefined)),
                                  (context.delegate = null),
                                  ContinueSentinel)
                                : info
                            : ((context.method = "throw"),
                              (context.arg = new TypeError(
                                  "iterator result is not an object"
                              )),
                              (context.delegate = null),
                              ContinueSentinel);
                    }
                    function pushTryEntry(locs) {
                        var entry = { tryLoc: locs[0] };
                        1 in locs && (entry.catchLoc = locs[1]),
                            2 in locs &&
                                ((entry.finallyLoc = locs[2]),
                                (entry.afterLoc = locs[3])),
                            this.tryEntries.push(entry);
                    }
                    function resetTryEntry(entry) {
                        var record = entry.completion || {};
                        (record.type = "normal"),
                            delete record.arg,
                            (entry.completion = record);
                    }
                    function Context(tryLocsList) {
                        (this.tryEntries = [{ tryLoc: "root" }]),
                            tryLocsList.forEach(pushTryEntry, this),
                            this.reset(!0);
                    }
                    function values(iterable) {
                        if (iterable || "" === iterable) {
                            var iteratorMethod = iterable[iteratorSymbol];
                            if (iteratorMethod)
                                return iteratorMethod.call(iterable);
                            if ("function" == typeof iterable.next)
                                return iterable;
                            if (!isNaN(iterable.length)) {
                                var i = -1,
                                    next = function next() {
                                        for (; ++i < iterable.length; )
                                            if (hasOwn.call(iterable, i))
                                                return (
                                                    (next.value = iterable[i]),
                                                    (next.done = !1),
                                                    next
                                                );
                                        return (
                                            (next.value = undefined),
                                            (next.done = !0),
                                            next
                                        );
                                    };
                                return (next.next = next);
                            }
                        }
                        throw new TypeError(
                            _typeof(iterable) + " is not iterable"
                        );
                    }
                    return (
                        (GeneratorFunction.prototype =
                            GeneratorFunctionPrototype),
                        defineProperty(Gp, "constructor", {
                            value: GeneratorFunctionPrototype,
                            configurable: !0,
                        }),
                        defineProperty(
                            GeneratorFunctionPrototype,
                            "constructor",
                            { value: GeneratorFunction, configurable: !0 }
                        ),
                        (GeneratorFunction.displayName = define(
                            GeneratorFunctionPrototype,
                            toStringTagSymbol,
                            "GeneratorFunction"
                        )),
                        (exports.isGeneratorFunction = function (genFun) {
                            var ctor =
                                "function" == typeof genFun &&
                                genFun.constructor;
                            return (
                                !!ctor &&
                                (ctor === GeneratorFunction ||
                                    "GeneratorFunction" ===
                                        (ctor.displayName || ctor.name))
                            );
                        }),
                        (exports.mark = function (genFun) {
                            return (
                                Object.setPrototypeOf
                                    ? Object.setPrototypeOf(
                                          genFun,
                                          GeneratorFunctionPrototype
                                      )
                                    : ((genFun.__proto__ =
                                          GeneratorFunctionPrototype),
                                      define(
                                          genFun,
                                          toStringTagSymbol,
                                          "GeneratorFunction"
                                      )),
                                (genFun.prototype = Object.create(Gp)),
                                genFun
                            );
                        }),
                        (exports.awrap = function (arg) {
                            return { __await: arg };
                        }),
                        defineIteratorMethods(AsyncIterator.prototype),
                        define(
                            AsyncIterator.prototype,
                            asyncIteratorSymbol,
                            function () {
                                return this;
                            }
                        ),
                        (exports.AsyncIterator = AsyncIterator),
                        (exports.async = function (
                            innerFn,
                            outerFn,
                            self,
                            tryLocsList,
                            PromiseImpl
                        ) {
                            void 0 === PromiseImpl && (PromiseImpl = Promise);
                            var iter = new AsyncIterator(
                                wrap(innerFn, outerFn, self, tryLocsList),
                                PromiseImpl
                            );
                            return exports.isGeneratorFunction(outerFn)
                                ? iter
                                : iter.next().then(function (result) {
                                      return result.done
                                          ? result.value
                                          : iter.next();
                                  });
                        }),
                        defineIteratorMethods(Gp),
                        define(Gp, toStringTagSymbol, "Generator"),
                        define(Gp, iteratorSymbol, function () {
                            return this;
                        }),
                        define(Gp, "toString", function () {
                            return "[object Generator]";
                        }),
                        (exports.keys = function (val) {
                            var object = Object(val),
                                keys = [];
                            for (var key in object) keys.push(key);
                            return (
                                keys.reverse(),
                                function next() {
                                    for (; keys.length; ) {
                                        var key = keys.pop();
                                        if (key in object)
                                            return (
                                                (next.value = key),
                                                (next.done = !1),
                                                next
                                            );
                                    }
                                    return (next.done = !0), next;
                                }
                            );
                        }),
                        (exports.values = values),
                        (Context.prototype = {
                            constructor: Context,
                            reset: function reset(skipTempReset) {
                                if (
                                    ((this.prev = 0),
                                    (this.next = 0),
                                    (this.sent = this._sent = undefined),
                                    (this.done = !1),
                                    (this.delegate = null),
                                    (this.method = "next"),
                                    (this.arg = undefined),
                                    this.tryEntries.forEach(resetTryEntry),
                                    !skipTempReset)
                                )
                                    for (var name in this)
                                        "t" === name.charAt(0) &&
                                            hasOwn.call(this, name) &&
                                            !isNaN(+name.slice(1)) &&
                                            (this[name] = undefined);
                            },
                            stop: function stop() {
                                this.done = !0;
                                var rootRecord = this.tryEntries[0].completion;
                                if ("throw" === rootRecord.type)
                                    throw rootRecord.arg;
                                return this.rval;
                            },
                            dispatchException: function dispatchException(
                                exception
                            ) {
                                if (this.done) throw exception;
                                var context = this;
                                function handle(loc, caught) {
                                    return (
                                        (record.type = "throw"),
                                        (record.arg = exception),
                                        (context.next = loc),
                                        caught &&
                                            ((context.method = "next"),
                                            (context.arg = undefined)),
                                        !!caught
                                    );
                                }
                                for (
                                    var i = this.tryEntries.length - 1;
                                    i >= 0;
                                    --i
                                ) {
                                    var entry = this.tryEntries[i],
                                        record = entry.completion;
                                    if ("root" === entry.tryLoc)
                                        return handle("end");
                                    if (entry.tryLoc <= this.prev) {
                                        var hasCatch = hasOwn.call(
                                                entry,
                                                "catchLoc"
                                            ),
                                            hasFinally = hasOwn.call(
                                                entry,
                                                "finallyLoc"
                                            );
                                        if (hasCatch && hasFinally) {
                                            if (this.prev < entry.catchLoc)
                                                return handle(
                                                    entry.catchLoc,
                                                    !0
                                                );
                                            if (this.prev < entry.finallyLoc)
                                                return handle(entry.finallyLoc);
                                        } else if (hasCatch) {
                                            if (this.prev < entry.catchLoc)
                                                return handle(
                                                    entry.catchLoc,
                                                    !0
                                                );
                                        } else {
                                            if (!hasFinally)
                                                throw new Error(
                                                    "try statement without catch or finally"
                                                );
                                            if (this.prev < entry.finallyLoc)
                                                return handle(entry.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function abrupt(type, arg) {
                                for (
                                    var i = this.tryEntries.length - 1;
                                    i >= 0;
                                    --i
                                ) {
                                    var entry = this.tryEntries[i];
                                    if (
                                        entry.tryLoc <= this.prev &&
                                        hasOwn.call(entry, "finallyLoc") &&
                                        this.prev < entry.finallyLoc
                                    ) {
                                        var finallyEntry = entry;
                                        break;
                                    }
                                }
                                finallyEntry &&
                                    ("break" === type || "continue" === type) &&
                                    finallyEntry.tryLoc <= arg &&
                                    arg <= finallyEntry.finallyLoc &&
                                    (finallyEntry = null);
                                var record = finallyEntry
                                    ? finallyEntry.completion
                                    : {};
                                return (
                                    (record.type = type),
                                    (record.arg = arg),
                                    finallyEntry
                                        ? ((this.method = "next"),
                                          (this.next = finallyEntry.finallyLoc),
                                          ContinueSentinel)
                                        : this.complete(record)
                                );
                            },
                            complete: function complete(record, afterLoc) {
                                if ("throw" === record.type) throw record.arg;
                                return (
                                    "break" === record.type ||
                                    "continue" === record.type
                                        ? (this.next = record.arg)
                                        : "return" === record.type
                                        ? ((this.rval = this.arg = record.arg),
                                          (this.method = "return"),
                                          (this.next = "end"))
                                        : "normal" === record.type &&
                                          afterLoc &&
                                          (this.next = afterLoc),
                                    ContinueSentinel
                                );
                            },
                            finish: function finish(finallyLoc) {
                                for (
                                    var i = this.tryEntries.length - 1;
                                    i >= 0;
                                    --i
                                ) {
                                    var entry = this.tryEntries[i];
                                    if (entry.finallyLoc === finallyLoc)
                                        return (
                                            this.complete(
                                                entry.completion,
                                                entry.afterLoc
                                            ),
                                            resetTryEntry(entry),
                                            ContinueSentinel
                                        );
                                }
                            },
                            catch: function _catch(tryLoc) {
                                for (
                                    var i = this.tryEntries.length - 1;
                                    i >= 0;
                                    --i
                                ) {
                                    var entry = this.tryEntries[i];
                                    if (entry.tryLoc === tryLoc) {
                                        var record = entry.completion;
                                        if ("throw" === record.type) {
                                            var thrown = record.arg;
                                            resetTryEntry(entry);
                                        }
                                        return thrown;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function delegateYield(
                                iterable,
                                resultName,
                                nextLoc
                            ) {
                                return (
                                    (this.delegate = {
                                        iterator: values(iterable),
                                        resultName: resultName,
                                        nextLoc: nextLoc,
                                    }),
                                    "next" === this.method &&
                                        (this.arg = undefined),
                                    ContinueSentinel
                                );
                            },
                        }),
                        exports
                    );
                }
                function asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    key,
                    arg
                ) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (info.done) {
                        resolve(value);
                    } else {
                        Promise.resolve(value).then(_next, _throw);
                    }
                }
                function _asyncToGenerator(fn) {
                    return function () {
                        var self = this,
                            args = arguments;
                        return new Promise(function (resolve, reject) {
                            var gen = fn.apply(self, args);
                            function _next(value) {
                                asyncGeneratorStep(
                                    gen,
                                    resolve,
                                    reject,
                                    _next,
                                    _throw,
                                    "next",
                                    value
                                );
                            }
                            function _throw(err) {
                                asyncGeneratorStep(
                                    gen,
                                    resolve,
                                    reject,
                                    _next,
                                    _throw,
                                    "throw",
                                    err
                                );
                            }
                            _next(undefined);
                        });
                    };
                }
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly &&
                            (symbols = symbols.filter(function (sym) {
                                return Object.getOwnPropertyDescriptor(
                                    object,
                                    sym
                                ).enumerable;
                            })),
                            keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2
                            ? ownKeys(Object(source), !0).forEach(function (
                                  key
                              ) {
                                  _defineProperty(target, key, source[key]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  target,
                                  Object.getOwnPropertyDescriptors(source)
                              )
                            : ownKeys(Object(source)).forEach(function (key) {
                                  Object.defineProperty(
                                      target,
                                      key,
                                      Object.getOwnPropertyDescriptor(
                                          source,
                                          key
                                      )
                                  );
                              });
                    }
                    return target;
                }
                function _defineProperty(obj, key, value) {
                    key = _toPropertyKey(key);
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }
                function _toPropertyKey(arg) {
                    var key = _toPrimitive(arg, "string");
                    return _typeof(key) === "symbol" ? key : String(key);
                }
                function _toPrimitive(input, hint) {
                    if (_typeof(input) !== "object" || input === null)
                        return input;
                    var prim = input[Symbol.toPrimitive];
                    if (prim !== undefined) {
                        var res = prim.call(input, hint || "default");
                        if (_typeof(res) !== "object") return res;
                        throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                        );
                    }
                    return (hint === "string" ? String : Number)(input);
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
                        computed: _objectSpread(
                            {},
                            (0, vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(
                                "setting",
                                ["colors"]
                            )
                        ),
                        data: function data() {
                            return {
                                profile: false,
                                message: false,
                                notification: false,
                            };
                        },
                        methods: {
                            logout: function logout() {
                                var _this = this;
                                return _asyncToGenerator(
                                    /*#__PURE__*/ _regeneratorRuntime().mark(
                                        function _callee() {
                                            var res;
                                            return _regeneratorRuntime().wrap(
                                                function _callee$(_context) {
                                                    while (1)
                                                        switch (
                                                            (_context.prev =
                                                                _context.next)
                                                        ) {
                                                            case 0:
                                                                _context.next = 2;
                                                                return _this.callApi(
                                                                    "post",
                                                                    "logout"
                                                                );
                                                            case 2:
                                                                res =
                                                                    _context.sent;
                                                                if (
                                                                    res.status ==
                                                                    200
                                                                ) {
                                                                    _this.$store.dispatch(
                                                                        "auth/logout"
                                                                    );
                                                                    _this.$toast(
                                                                        res.data
                                                                            .message,
                                                                        "success"
                                                                    );
                                                                    window.location.href =
                                                                        _this
                                                                            .$root
                                                                            .baseurl +
                                                                        "/qpanel";
                                                                }
                                                            case 4:
                                                            case "end":
                                                                return _context.stop();
                                                        }
                                                },
                                                _callee
                                            );
                                        }
                                    )
                                )();
                            },
                            loggedInfo: function loggedInfo() {
                                var today = new Date();
                                var options = {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                };
                                var formattedDate = today.toLocaleDateString(
                                    "en-US",
                                    options
                                );
                                var loggedInfo = "You Logged as ".concat(
                                    this.ucfirst(this.$root.user.name)
                                );
                                return ""
                                    .concat(loggedInfo, ", ")
                                    .concat(formattedDate);
                            },
                        },
                        mounted: function mounted() {
                            // collapsed sidebar js
                            $(".control-bar i").click(function () {
                                $("body").toggleClass("collapsed-menu");
                            });
                            $(".mobile-control-bar i").click(function () {
                                $(".navigation-body").addClass(
                                    "show-mobile-sidebar"
                                );
                                body.style.overflow = "hidden";
                            });
                            $(".mobile-control-bar i").click(function () {
                                $(".toggle-overlay").addClass(
                                    "show-toggle-overlay"
                                );
                                body.style.overflow = "hidden";
                            });
                            $(".close-mobile-menu i").click(function () {
                                $(".navigation-body").removeClass(
                                    "show-mobile-sidebar"
                                );
                                body.style.overflow = "auto";
                            });
                            $(".close-mobile-menu i").click(function () {
                                $(".toggle-overlay").removeClass(
                                    "show-toggle-overlay"
                                );
                                body.style.overflow = "auto";
                            });
                            $(".toggle-overlay").click(function () {
                                $(".toggle-overlay").removeClass(
                                    "show-toggle-overlay"
                                );
                                body.style.overflow = "auto";
                            });
                            $(".toggle-overlay").click(function () {
                                $(".navigation-body").removeClass(
                                    "show-mobile-sidebar"
                                );
                                body.style.overflow = "auto";
                            });

                            // Request full screen js
                            var arrows =
                                document.querySelector(".fa-arrows-alt");
                            var body = document.querySelector("body");
                            var toggleFullscreen = function toggleFullscreen() {
                                if (document.fullscreenElement)
                                    document.exitFullscreen();
                                else body.requestFullscreen();
                            };

                            // fixed header part js
                            $(window).scroll(function () {
                                var scrolling = $(this).scrollTop();
                                if (scrolling > 0) {
                                    $(".top-header").addClass("fixed");
                                } else {
                                    $(".top-header").removeClass("fixed");
                                }
                            });
                        },
                    };

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=script&lang=js":
            /*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js"
                    );
                /* harmony import */ var _AppSidebarRecursive__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppSidebarRecursive */ "./resources/js/components/AppSidebarRecursive.vue"
                    );
                /* harmony import */ var _AppSidebarCollaspedRecursive__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppSidebarCollaspedRecursive */ "./resources/js/components/AppSidebarCollaspedRecursive.vue"
                    );
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return (
                        (_typeof =
                            "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                                ? function (obj) {
                                      return typeof obj;
                                  }
                                : function (obj) {
                                      return obj &&
                                          "function" == typeof Symbol &&
                                          obj.constructor === Symbol &&
                                          obj !== Symbol.prototype
                                          ? "symbol"
                                          : typeof obj;
                                  }),
                        _typeof(obj)
                    );
                }
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly &&
                            (symbols = symbols.filter(function (sym) {
                                return Object.getOwnPropertyDescriptor(
                                    object,
                                    sym
                                ).enumerable;
                            })),
                            keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function _objectSpread(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2
                            ? ownKeys(Object(source), !0).forEach(function (
                                  key
                              ) {
                                  _defineProperty(target, key, source[key]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                  target,
                                  Object.getOwnPropertyDescriptors(source)
                              )
                            : ownKeys(Object(source)).forEach(function (key) {
                                  Object.defineProperty(
                                      target,
                                      key,
                                      Object.getOwnPropertyDescriptor(
                                          source,
                                          key
                                      )
                                  );
                              });
                    }
                    return target;
                }
                function _defineProperty(obj, key, value) {
                    key = _toPropertyKey(key);
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true,
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }
                function _toPropertyKey(arg) {
                    var key = _toPrimitive(arg, "string");
                    return _typeof(key) === "symbol" ? key : String(key);
                }
                function _toPrimitive(input, hint) {
                    if (_typeof(input) !== "object" || input === null)
                        return input;
                    var prim = input[Symbol.toPrimitive];
                    if (prim !== undefined) {
                        var res = prim.call(input, hint || "default");
                        if (_typeof(res) !== "object") return res;
                        throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                        );
                    }
                    return (hint === "string" ? String : Number)(input);
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
                        components: {
                            RecursiveMenu:
                                _AppSidebarRecursive__WEBPACK_IMPORTED_MODULE_0__[
                                    "default"
                                ],
                            RecursiveMenuCollasped:
                                _AppSidebarCollaspedRecursive__WEBPACK_IMPORTED_MODULE_1__[
                                    "default"
                                ],
                        },
                        computed: _objectSpread(
                            {
                                activeRoute: function activeRoute() {
                                    return this.$route.name;
                                },
                                currentRouteName: function currentRouteName() {
                                    return this.$route.name;
                                },
                            },
                            (0, vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(
                                "setting",
                                ["colors"]
                            )
                        ),
                        data: function data() {
                            return {
                                keyword: "",
                                activeRouteSecondary: "",
                                currentActiveRoute: "",
                            };
                        },
                        watch: {
                            // keyword(prev, next) {
                            //   if (prev !== next) {
                            //     this.$store.dispatch("global/updateKeyword", current);
                            //   }
                            // },
                            $route: function $route(newRoute, lastRoute) {
                                this.isActiveRoute(this.currentRouteName);
                            },
                        },
                        methods: {
                            filterMenu: function filterMenu() {
                                // Code Here...
                            },
                            isActiveRoute: function isActiveRoute(routeName) {
                                var parts = routeName.split(".");
                                var extractedName = parts[0];
                                var makeActivableRoute = (extractedName +=
                                    ".index");
                                var element = document.querySelector(
                                    '[data-route="'.concat(
                                        makeActivableRoute,
                                        '"]'
                                    )
                                );
                                if (element) {
                                    this.currentActiveRoute =
                                        makeActivableRoute;
                                }
                            },
                            search: function search() {
                                this.$store.dispatch(
                                    "global/updateKeyword",
                                    this.keyword
                                );
                            },
                        },
                        mounted: function mounted() {
                            var Accordion = function Accordion(el, multiple) {
                                this.el = el || {};
                                this.multiple = multiple || false;
                                var links = this.el.find(".link");
                                links.on(
                                    "click",
                                    {
                                        el: this.el,
                                        multiple: this.multiple,
                                    },
                                    this.dropdown
                                );
                            };
                            Accordion.prototype.dropdown = function (e) {
                                var el = e.data.el;
                                (window.$this = window.$(this)),
                                    (window.$next = window.$this.next());
                                window.$next.slideToggle();
                                window.$this.parent().toggleClass("open");
                                if (!e.data.multiple) {
                                    el.find(".submenu")
                                        .not(window.$next)
                                        .slideUp()
                                        .parent()
                                        .removeClass("open");
                                }
                            };
                            new Accordion(window.$("#accordion"), false);
                        },
                        updated: function updated() {
                            // let Accordion = function (el, multiple) {
                            //   this.el = el || {};
                            //   this.multiple = multiple || false;
                            //   let links = this.el.find(".link");
                            //   links.on(
                            //     "click",
                            //     {
                            //       el: this.el,
                            //       multiple: this.multiple,
                            //     },
                            //     this.dropdown
                            //   );
                            // };
                            // Accordion.prototype.dropdown = function (e) {
                            //   let el = e.data.el;
                            //   (window.$this = window.$(this)), (window.$next = window.$this.next());
                            //   window.$next.slideToggle();
                            //   window.$this.parent().toggleClass("open");
                            //   if (!e.data.multiple) {
                            //     el.find(".submenu")
                            //       .not(window.$next)
                            //       .slideUp()
                            //       .parent()
                            //       .removeClass("open");
                            //   }
                            // };
                            // new Accordion(window.$("#accordion"), false);
                        },
                    };

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js":
            /*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
                        name: "AppSidebarCollaspedRecursive",
                        components: {
                            RecursiveChildMenu: function RecursiveChildMenu() {
                                return Promise.resolve(/*! import() */).then(
                                    __webpack_require__.bind(
                                        __webpack_require__,
                                        /*! ./AppSidebarCollaspedRecursive.vue */ "./resources/js/components/AppSidebarCollaspedRecursive.vue"
                                    )
                                );
                            },
                        },
                        props: ["child_menus", "root_menu"],
                    };

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarRecursive.vue?vue&type=script&lang=js":
            /*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarRecursive.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
                        name: "AppSidebarRecursive",
                        components: {
                            RecursiveChildMenu: function RecursiveChildMenu() {
                                return Promise.resolve(/*! import() */).then(
                                    __webpack_require__.bind(
                                        __webpack_require__,
                                        /*! ./AppSidebarRecursive.vue */ "./resources/js/components/AppSidebarRecursive.vue"
                                    )
                                );
                            },
                        },
                        props: [
                            "child_menus",
                            "root_menu",
                            "currentActiveRoute",
                        ],
                    };

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=script&lang=js":
            /*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _components_AppNav_vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./../../components/AppNav.vue */ "./resources/js/components/AppNav.vue"
                    );
                /* harmony import */ var _components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./../../components/AppFooter.vue */ "./resources/js/components/AppFooter.vue"
                    );
                /* harmony import */ var _components_AppSidebar_vue__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./../../components/AppSidebar.vue */ "./resources/js/components/AppSidebar.vue"
                    );
                /* harmony import */ var _components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ./../../components/AppBreadcrumb.vue */ "./resources/js/components/AppBreadcrumb.vue"
                    );
                /* harmony import */ var _components_elements_ValidationMessage_vue__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! ./../../components/elements/ValidationMessage.vue */ "./resources/js/components/elements/ValidationMessage.vue"
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
                        name: "App",
                        components: {
                            AppNav: _components_AppNav_vue__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                            AppFooter:
                                _components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_1__[
                                    "default"
                                ],
                            AppSidebar:
                                _components_AppSidebar_vue__WEBPACK_IMPORTED_MODULE_2__[
                                    "default"
                                ],
                            AppBreadcrumb:
                                _components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__[
                                    "default"
                                ],
                            ValidationMessage:
                                _components_elements_ValidationMessage_vue__WEBPACK_IMPORTED_MODULE_4__[
                                    "default"
                                ],
                        },
                        mounted: function mounted() {
                            $(window).on("load", function () {
                                $(".loading-main").delay(1000).fadeOut(300);
                            });
                        },
                    };

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true":
            /*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _withScopeId = function _withScopeId(n) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(
                            "data-v-584f0aa9"
                        ),
                        (n = n()),
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),
                        n
                    );
                };
                var _hoisted_1 = {
                    class: "row",
                };
                var _hoisted_2 = {
                    class: "col-sm-5",
                };
                var _hoisted_3 = {
                    class: "left-title",
                };
                var _hoisted_4 = {
                    key: 0,
                    style: {
                        "text-transform": "capitalize",
                    },
                };
                var _hoisted_5 = {
                    class: "col-sm-7",
                };
                var _hoisted_6 = {
                    class: "right-info text-end",
                };
                var _hoisted_7 = {
                    key: 0,
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_router_link = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-link"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "div",
                            {
                                class: "bread-crumb-part",
                                style: (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(
                                    "background-color: ".concat(
                                        _ctx.colors.breadcrumb_color
                                            ? _ctx.colors.breadcrumb_color
                                            : _ctx.databaseColor
                                                  .breadcrumb_color,
                                        ";"
                                    )
                                ),
                            },
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "div",
                                    _hoisted_1,
                                    [
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_2,
                                            [
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_3,
                                                    [
                                                        _ctx.breadcrumbs[0]
                                                            ? ((0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                              (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                  "h3",
                                                                  _hoisted_4,
                                                                  (0,
                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                      _ctx.capitalize(
                                                                          _ctx
                                                                              .breadcrumbs[
                                                                              Object.keys(
                                                                                  _ctx.breadcrumbs
                                                                              )
                                                                                  .length -
                                                                                  1
                                                                          ][
                                                                              "title"
                                                                          ]
                                                                      )
                                                                  ),
                                                                  1 /* TEXT */
                                                              ))
                                                            : (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                  "v-if",
                                                                  true
                                                              ),
                                                    ]
                                                ),
                                            ]
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                            ' <div class="col-md-3 col-lg-3 d-flex align-items-center justify-content-center">\r\n      </div> '
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_5,
                                            [
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_6,
                                                    [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                            "ul",
                                                            null,
                                                            [
                                                                (0,
                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                    "li",
                                                                    null,
                                                                    [
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                            _component_router_link,
                                                                            {
                                                                                to: {
                                                                                    name: "dashboard.index",
                                                                                },
                                                                            },
                                                                            {
                                                                                default:
                                                                                    (0,
                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                        function () {
                                                                                            return [
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                    "Dashboard"
                                                                                                ),
                                                                                            ];
                                                                                        }
                                                                                    ),
                                                                                _: 1 /* STABLE */,
                                                                            },
                                                                            8 /* PROPS */,
                                                                            [
                                                                                "to",
                                                                            ]
                                                                        ),
                                                                    ]
                                                                ),
                                                                !$options.isDashboardRoute
                                                                    ? ((0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                                                          true
                                                                      ),
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                          {
                                                                              key: 0,
                                                                          },
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                                                              _ctx.breadcrumbs,
                                                                              function (
                                                                                  menu,
                                                                                  index1
                                                                              ) {
                                                                                  return (
                                                                                      (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                      (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                          "li",
                                                                                          {
                                                                                              key: index1,
                                                                                              class: (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(
                                                                                                  menu.route ==
                                                                                                      _ctx
                                                                                                          .$route
                                                                                                          .name
                                                                                                      ? "active"
                                                                                                      : ""
                                                                                              ),
                                                                                              style: {
                                                                                                  "text-transform":
                                                                                                      "capitalize",
                                                                                              },
                                                                                          },
                                                                                          [
                                                                                              Object.keys(
                                                                                                  _ctx.breadcrumbs
                                                                                              )
                                                                                                  .length ==
                                                                                              index1 +
                                                                                                  1
                                                                                                  ? ((0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                        "a",
                                                                                                        _hoisted_7,
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                            menu.title
                                                                                                        ),
                                                                                                        1 /* TEXT */
                                                                                                    ))
                                                                                                  : menu.slug
                                                                                                  ? ((0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                        _component_router_link,
                                                                                                        {
                                                                                                            key: 1,
                                                                                                            to: {
                                                                                                                name: menu.route,
                                                                                                                params: {
                                                                                                                    slug: menu.slug,
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            default:
                                                                                                                (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                    function () {
                                                                                                                        return [
                                                                                                                            (0,
                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                    menu.title
                                                                                                                                ),
                                                                                                                                1 /* TEXT */
                                                                                                                            ),
                                                                                                                        ];
                                                                                                                    }
                                                                                                                ),

                                                                                                            _: 2 /* DYNAMIC */,
                                                                                                        },
                                                                                                        1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                                        [
                                                                                                            "to",
                                                                                                        ]
                                                                                                    ))
                                                                                                  : ((0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                        _component_router_link,
                                                                                                        {
                                                                                                            key: 2,
                                                                                                            to: {
                                                                                                                name: menu.route,
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            default:
                                                                                                                (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                    function () {
                                                                                                                        return [
                                                                                                                            (0,
                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                    menu.title
                                                                                                                                ),
                                                                                                                                1 /* TEXT */
                                                                                                                            ),
                                                                                                                        ];
                                                                                                                    }
                                                                                                                ),

                                                                                                            _: 2 /* DYNAMIC */,
                                                                                                        },
                                                                                                        1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                                        [
                                                                                                            "to",
                                                                                                        ]
                                                                                                    )),
                                                                                          ],
                                                                                          2 /* CLASS */
                                                                                      )
                                                                                  );
                                                                              }
                                                                          ),
                                                                          128 /* KEYED_FRAGMENT */
                                                                      ))
                                                                    : (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                          "v-if",
                                                                          true
                                                                      ),
                                                            ]
                                                        ),
                                                    ]
                                                ),
                                            ]
                                        ),
                                    ]
                                ),
                            ],
                            4 /* STYLE */
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e":
            /*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _hoisted_1 = {
                    class: "content-part footer-bottom-part mt-auto",
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "div",
                            _hoisted_1,
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "footer",
                                    null,
                                    " Copyright © " +
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                            new Date().toISOString().slice(0, 4)
                                        ) +
                                        " Nogor Solution Limited. All Rights Reserved. ",
                                    1 /* TEXT */
                                ),
                            ]
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=template&id=251ab46d&scoped=true":
            /*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=template&id=251ab46d&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _withScopeId = function _withScopeId(n) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(
                            "data-v-251ab46d"
                        ),
                        (n = n()),
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),
                        n
                    );
                };
                var _hoisted_1 = {
                    class: "topbar",
                };
                var _hoisted_2 = {
                    class: "row",
                };
                var _hoisted_3 = /*#__PURE__*/ (0,
                vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                    '<div class="col-2 col-sm-1 col-md-1 col-lg-3 left-info-col align-self-center" data-v-251ab46d><div class="left-info d-flex" data-v-251ab46d><div class="mobile-control-bar d-block d-lg-none" data-v-251ab46d><i class="fas fa-bars" aria-hidden="true" data-v-251ab46d></i></div><div class="control-bar d-none d-lg-block" data-v-251ab46d><i class="fas fa-bars" aria-hidden="true" data-v-251ab46d></i></div><div class="expand" data-v-251ab46d><i class="fas fa-arrows-alt" aria-hidden="true" data-v-251ab46d></i></div></div></div>',
                    1
                );
                var _hoisted_4 = {
                    class: "col-8 col-sm-7 col-md-8 col-lg-6 d-flex align-items-center justify-content-center",
                };
                var _hoisted_5 = {
                    class: "text-white bold text-center",
                };
                var _hoisted_6 = {
                    class: "col-2 col-sm-4 col-md-3 col-lg-3 right-info-col",
                };
                var _hoisted_7 = {
                    class: "right-info header-right-info text-end d-flex justify-content-end align-items-center",
                };
                var _hoisted_8 = {
                    class: "profile dropdown",
                };
                var _hoisted_9 = {
                    class: "dropdown-toggle",
                    id: "dropdownMenuButton1",
                    "data-bs-toggle": "dropdown",
                    "aria-expanded": "false",
                };
                var _hoisted_10 = {
                    class: "profile-image",
                };
                var _hoisted_11 = ["src"];
                var _hoisted_12 = {
                    class: "d-none d-sm-inline-block",
                };
                var _hoisted_13 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "i",
                        {
                            class: "px-1 fas fa-angle-down",
                            "aria-hidden": "true",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_14 = {
                    class: "dropdown-menu",
                    "aria-labelledby": "dropdownMenuButton1",
                };
                var _hoisted_15 = {
                    key: 0,
                };
                var _hoisted_16 = ["href"];
                var _hoisted_17 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "i",
                        {
                            class: "fa fa-broom text-aqua",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_18 = {
                    key: 1,
                };
                var _hoisted_19 = ["href"];
                var _hoisted_20 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "i",
                        {
                            class: "fa fa-sync",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_21 = ["href"];
                var _hoisted_22 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "i",
                        {
                            class: "fa fa-cog text-aqua",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_23 = ["href"];
                var _hoisted_24 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "i",
                        {
                            class: "fa fa-user-o",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_25 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "i",
                        {
                            class: "fas fa-sign-out-alt",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });

                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _ctx$user, _ctx$user2;
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "div",
                            {
                                class: "top-header",
                                style: (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(
                                    "background-color: ".concat(
                                        _ctx.colors.navbar_color
                                            ? _ctx.colors.navbar_color
                                            : _ctx.databaseColor.navbar_color,
                                        ";"
                                    )
                                ),
                            },
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "div",
                                    _hoisted_1,
                                    [
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_2,
                                            [
                                                _hoisted_3,
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_4,
                                                    [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                            "p",
                                                            _hoisted_5,
                                                            (0,
                                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                $options.loggedInfo()
                                                            ),
                                                            1 /* TEXT */
                                                        ),
                                                    ]
                                                ),
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_6,
                                                    [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                            "div",
                                                            _hoisted_7,
                                                            [
                                                                (0,
                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                    "div",
                                                                    _hoisted_8,
                                                                    [
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                            "ul",
                                                                            _hoisted_9,
                                                                            [
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "li",
                                                                                    _hoisted_10,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "img",
                                                                                            {
                                                                                                src:
                                                                                                    _ctx
                                                                                                        .user
                                                                                                        .profile !==
                                                                                                    ""
                                                                                                        ? _ctx
                                                                                                              .user
                                                                                                              .profile
                                                                                                        : "".concat(
                                                                                                              _ctx.asset,
                                                                                                              "profile.jpg"
                                                                                                          ),
                                                                                                alt: "profile",
                                                                                            },
                                                                                            null,
                                                                                            8 /* PROPS */,
                                                                                            _hoisted_11
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "li",
                                                                                    null,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "span",
                                                                                            _hoisted_12,
                                                                                            (0,
                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                (_ctx$user =
                                                                                                    _ctx.user) ===
                                                                                                    null ||
                                                                                                    _ctx$user ===
                                                                                                        void 0
                                                                                                    ? void 0
                                                                                                    : _ctx$user.name
                                                                                            ),
                                                                                            1 /* TEXT */
                                                                                        ),
                                                                                        _hoisted_13,
                                                                                    ]
                                                                                ),
                                                                            ]
                                                                        ),
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                            "ul",
                                                                            _hoisted_14,
                                                                            [
                                                                                _ctx
                                                                                    .$root
                                                                                    .global
                                                                                    .app_env ==
                                                                                "local"
                                                                                    ? ((0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                      (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                          "li",
                                                                                          _hoisted_15,
                                                                                          [
                                                                                              (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                  "a",
                                                                                                  {
                                                                                                      href: "".concat(
                                                                                                          _ctx
                                                                                                              .$root
                                                                                                              .baseurl,
                                                                                                          "/clear"
                                                                                                      ),
                                                                                                  },
                                                                                                  [
                                                                                                      _hoisted_17,
                                                                                                      (0,
                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                          "Cache Clear"
                                                                                                      ),
                                                                                                  ],
                                                                                                  8 /* PROPS */,
                                                                                                  _hoisted_16
                                                                                              ),
                                                                                          ]
                                                                                      ))
                                                                                    : (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                          "v-if",
                                                                                          true
                                                                                      ),
                                                                                _ctx
                                                                                    .$root
                                                                                    .global
                                                                                    .app_env ==
                                                                                "local"
                                                                                    ? ((0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                      (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                          "li",
                                                                                          _hoisted_18,
                                                                                          [
                                                                                              (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                  "a",
                                                                                                  {
                                                                                                      href: "".concat(
                                                                                                          _ctx
                                                                                                              .$root
                                                                                                              .baseurl,
                                                                                                          "/admin/systems-update"
                                                                                                      ),
                                                                                                  },
                                                                                                  [
                                                                                                      _hoisted_20,
                                                                                                      (0,
                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                          "Systems Update"
                                                                                                      ),
                                                                                                  ],
                                                                                                  8 /* PROPS */,
                                                                                                  _hoisted_19
                                                                                              ),
                                                                                          ]
                                                                                      ))
                                                                                    : (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                          "v-if",
                                                                                          true
                                                                                      ),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "li",
                                                                                    null,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "a",
                                                                                            {
                                                                                                href: "".concat(
                                                                                                    _ctx
                                                                                                        .$root
                                                                                                        .baseurl,
                                                                                                    "/admin/siteSetting/1/edit"
                                                                                                ),
                                                                                            },
                                                                                            [
                                                                                                _hoisted_22,
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                    "Settings"
                                                                                                ),
                                                                                            ],
                                                                                            8 /* PROPS */,
                                                                                            _hoisted_21
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "li",
                                                                                    null,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "a",
                                                                                            {
                                                                                                href: ""
                                                                                                    .concat(
                                                                                                        _ctx
                                                                                                            .$root
                                                                                                            .baseurl,
                                                                                                        "/admin/profile-details/"
                                                                                                    )
                                                                                                    .concat(
                                                                                                        (_ctx$user2 =
                                                                                                            _ctx.user) ===
                                                                                                            null ||
                                                                                                            _ctx$user2 ===
                                                                                                                void 0
                                                                                                            ? void 0
                                                                                                            : _ctx$user2.id
                                                                                                    ),
                                                                                            },
                                                                                            [
                                                                                                _hoisted_24,
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                    "Profile"
                                                                                                ),
                                                                                            ],
                                                                                            8 /* PROPS */,
                                                                                            _hoisted_23
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "li",
                                                                                    null,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "a",
                                                                                            {
                                                                                                href: "javascript:void(0)",
                                                                                                onClick:
                                                                                                    _cache[0] ||
                                                                                                    (_cache[0] =
                                                                                                        function (
                                                                                                            $event
                                                                                                        ) {
                                                                                                            return $options.logout();
                                                                                                        }),
                                                                                            },
                                                                                            [
                                                                                                _hoisted_25,
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                    " Logout "
                                                                                                ),
                                                                                            ]
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                            ]
                                                                        ),
                                                                    ]
                                                                ),
                                                            ]
                                                        ),
                                                    ]
                                                ),
                                            ]
                                        ),
                                    ]
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                    " navbar part start "
                                ),
                            ],
                            4 /* STYLE */
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true":
            /*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _withScopeId = function _withScopeId(n) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(
                            "data-v-22a4e926"
                        ),
                        (n = n()),
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),
                        n
                    );
                };
                var _hoisted_1 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "div",
                        {
                            class: "toggle-overlay d-block d-lg-none",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_2 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "div",
                        {
                            class: "close-mobile-menu d-block d-lg-none",
                        },
                        [
                            /*#__PURE__*/ (0,
                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                "i",
                                {
                                    class: "bi bi-arrow-left",
                                }
                            ),
                        ],
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_3 = ["src"];
                var _hoisted_4 = ["src"];
                var _hoisted_5 = ["src"];
                var _hoisted_6 = {
                    class: "navigation",
                    id: "my-scrollbar",
                    "data-scrollbar": "",
                };
                var _hoisted_7 = {
                    class: "top-heading title m-3",
                };
                var _hoisted_8 = {
                    class: "top-search-box position-relative",
                };
                var _hoisted_9 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "i",
                        {
                            class: "fas fa-search",
                        },
                        null,
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_10 = [_hoisted_9];
                var _hoisted_11 = {
                    class: "main-menus",
                };
                var _hoisted_12 = {
                    key: 0,
                    id: "accordion",
                    class: "accordion",
                };
                var _hoisted_13 = {
                    class: "link",
                };
                var _hoisted_14 = {
                    class: "icon",
                };
                var _hoisted_15 = ["innerHTML"];
                var _hoisted_16 = {
                    class: "title",
                };
                var _hoisted_17 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "span",
                        {
                            class: "arrow float-end",
                        },
                        [
                            /*#__PURE__*/ (0,
                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                "i",
                                {
                                    class: "fa fa-chevron-right right p-0",
                                }
                            ),
                        ],
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_18 = {
                    class: "icon",
                };
                var _hoisted_19 = ["innerHTML"];
                var _hoisted_20 = {
                    class: "title",
                };
                var _hoisted_21 = {
                    class: "icon",
                };
                var _hoisted_22 = ["innerHTML"];
                var _hoisted_23 = {
                    class: "title",
                };
                var _hoisted_24 = {
                    class: "collapsed-navigation d-none",
                };
                var _hoisted_25 = {
                    href: "#",
                };
                var _hoisted_26 = ["innerHTML"];
                var _hoisted_27 = {
                    class: "mini-dropdown-menu",
                };
                var _hoisted_28 = {
                    href: "#",
                };
                var _hoisted_29 = ["innerHTML"];
                var _hoisted_30 = {
                    class: "mini-dropdown-menu",
                };
                var _hoisted_31 = {
                    class: "menu-title",
                };
                var _hoisted_32 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "h6",
                        {
                            class: "full-brand",
                        },
                        [
                            /*#__PURE__*/ (0,
                            vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                " Developed By "
                            ),
                            /*#__PURE__*/ (0,
                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                "a",
                                {
                                    href: "https://quilltech.com/",
                                    target: "_blank",
                                    class: "d-block",
                                },
                                "Nogor Solutions Limited"
                            ),
                        ],
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_33 = {
                    class: "short-brand d-none",
                };
                var _hoisted_34 = ["src"];
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_router_link = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-link"
                    );
                    var _component_RecursiveMenu = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "RecursiveMenu"
                    );
                    var _component_RecursiveMenuCollasped = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "RecursiveMenuCollasped"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                            null,
                            [
                                _hoisted_1,
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "div",
                                    {
                                        class: "navigation-body shadow",
                                        style: (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(
                                            "background-color: ".concat(
                                                _ctx.colors.sidebar_color
                                                    ? _ctx.colors.sidebar_color
                                                    : _ctx.databaseColor
                                                          .sidebar_color,
                                                ";"
                                            )
                                        ),
                                    },
                                    [
                                        _hoisted_2,
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            {
                                                class: "logo",
                                                style: (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(
                                                    "background-color: ".concat(
                                                        _ctx.colors
                                                            .sidebar_top_color
                                                            ? _ctx.colors
                                                                  .sidebar_top_color
                                                            : _ctx.databaseColor
                                                                  .sidebar_top_color,
                                                        ";"
                                                    )
                                                ),
                                            },
                                            [
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                    _component_router_link,
                                                    {
                                                        to: {
                                                            name: "dashboard.index",
                                                        },
                                                    },
                                                    {
                                                        default: (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                            function () {
                                                                return [
                                                                    _ctx.site &&
                                                                    _ctx.site
                                                                        .logo
                                                                        ? ((0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                              "img",
                                                                              {
                                                                                  key: 0,
                                                                                  src: _ctx
                                                                                      .site
                                                                                      .logo,
                                                                                  class: "main-logo bg-white",
                                                                                  alt: "logo",
                                                                                  width: "120",
                                                                              },
                                                                              null,
                                                                              8 /* PROPS */,
                                                                              _hoisted_3
                                                                          ))
                                                                        : (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                              "v-if",
                                                                              true
                                                                          ),
                                                                    _ctx.site &&
                                                                    _ctx.site
                                                                        .logo_small
                                                                        ? ((0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                              "img",
                                                                              {
                                                                                  key: 1,
                                                                                  src: _ctx
                                                                                      .site
                                                                                      .logo_small,
                                                                                  class: "mini-logo d-none bg-white",
                                                                                  alt: "mini-logo",
                                                                                  width: "40",
                                                                              },
                                                                              null,
                                                                              8 /* PROPS */,
                                                                              _hoisted_4
                                                                          ))
                                                                        : _ctx.site &&
                                                                          _ctx.site &&
                                                                          _ctx
                                                                              .site
                                                                              .logo
                                                                        ? ((0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                              "img",
                                                                              {
                                                                                  key: 2,
                                                                                  src: _ctx
                                                                                      .site
                                                                                      .logo,
                                                                                  class: "mini-logo d-none",
                                                                                  alt: "mini-logo",
                                                                                  width: "40",
                                                                              },
                                                                              null,
                                                                              8 /* PROPS */,
                                                                              _hoisted_5
                                                                          ))
                                                                        : (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                              "v-if",
                                                                              true
                                                                          ),
                                                                ];
                                                            }
                                                        ),
                                                        _: 1 /* STABLE */,
                                                    },
                                                    8 /* PROPS */,
                                                    ["to"]
                                                ),
                                            ],
                                            4 /* STYLE */
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_6,
                                            [
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_7,
                                                    [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                            "div",
                                                            _hoisted_8,
                                                            [
                                                                (0,
                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                    (0,
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                        "input",
                                                                        {
                                                                            type: "text",
                                                                            class: "form-control",
                                                                            placeholder:
                                                                                "Type your keyword",
                                                                            "onUpdate:modelValue":
                                                                                _cache[0] ||
                                                                                (_cache[0] =
                                                                                    function (
                                                                                        $event
                                                                                    ) {
                                                                                        return ($data.keyword =
                                                                                            $event);
                                                                                    }),
                                                                            autocomplete:
                                                                                "off",
                                                                        },
                                                                        null,
                                                                        512 /* NEED_PATCH */
                                                                    ),
                                                                    [
                                                                        [
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.vModelText,
                                                                            $data.keyword,
                                                                        ],
                                                                    ]
                                                                ),
                                                                (0,
                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                    "button",
                                                                    {
                                                                        onClick:
                                                                            _cache[1] ||
                                                                            (_cache[1] =
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(
                                                                                    function () {
                                                                                        return (
                                                                                            $options.search &&
                                                                                            $options.search.apply(
                                                                                                $options,
                                                                                                arguments
                                                                                            )
                                                                                        );
                                                                                    },
                                                                                    [
                                                                                        "prevent",
                                                                                    ]
                                                                                )),
                                                                        class: "top-search-btn border",
                                                                        style: (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(
                                                                            "background-color: ".concat(
                                                                                _ctx
                                                                                    .colors
                                                                                    .sidebar_color
                                                                                    ? _ctx
                                                                                          .colors
                                                                                          .sidebar_color
                                                                                    : _ctx
                                                                                          .databaseColor
                                                                                          .sidebar_color,
                                                                                ";"
                                                                            )
                                                                        ),
                                                                    },
                                                                    _hoisted_10,
                                                                    4 /* STYLE */
                                                                ),
                                                            ]
                                                        ),
                                                    ]
                                                ),
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_11,
                                                    [
                                                        _ctx.filteredMenus &&
                                                        Object.keys(_ctx.menus)
                                                            .length > 0
                                                            ? ((0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                              (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                  "ul",
                                                                  _hoisted_12,
                                                                  [
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                          ' <li>\r\n            <router-link :to="{ name: \'dashboard.index\' }">\r\n              <span class="icon"><i class="fas fa-cog spin"></i></span>\r\n              <span class="title"> Dashboard </span>\r\n            </router-link>\r\n          </li> '
                                                                      ),
                                                                      ((0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                                                          true
                                                                      ),
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                          null,
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                                                              _ctx.filteredMenus,
                                                                              function (
                                                                                  root_menu,
                                                                                  index
                                                                              ) {
                                                                                  return (0,
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                      _ctx.$slots,
                                                                                      "default",
                                                                                      {},
                                                                                      function () {
                                                                                          return [
                                                                                              (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                  " ===================CHILDREN MENU=================== "
                                                                                              ),
                                                                                              root_menu.child_menus &&
                                                                                              Object.keys(
                                                                                                  root_menu.child_menus
                                                                                              )
                                                                                                  .length >
                                                                                                  0
                                                                                                  ? (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                                        _ctx.$slots,
                                                                                                        "default",
                                                                                                        {
                                                                                                            key: 0,
                                                                                                        },
                                                                                                        function () {
                                                                                                            return [
                                                                                                                ((0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                    "li",
                                                                                                                    {
                                                                                                                        key: index,
                                                                                                                        class: "sub-menu",
                                                                                                                    },
                                                                                                                    [
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                            "div",
                                                                                                                            _hoisted_13,
                                                                                                                            [
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                    "span",
                                                                                                                                    _hoisted_14,
                                                                                                                                    [
                                                                                                                                        root_menu.icon
                                                                                                                                            ? ((0,
                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                              (0,
                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                  "em",
                                                                                                                                                  {
                                                                                                                                                      key: 0,
                                                                                                                                                      innerHTML:
                                                                                                                                                          root_menu.icon,
                                                                                                                                                  },
                                                                                                                                                  null,
                                                                                                                                                  8 /* PROPS */,
                                                                                                                                                  _hoisted_15
                                                                                                                                              ))
                                                                                                                                            : (0,
                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                  "v-if",
                                                                                                                                                  true
                                                                                                                                              ),
                                                                                                                                    ]
                                                                                                                                ),
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                    "span",
                                                                                                                                    _hoisted_16,
                                                                                                                                    [
                                                                                                                                        (0,
                                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                            "span",
                                                                                                                                            null,
                                                                                                                                            (0,
                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                root_menu.menu_name
                                                                                                                                            ),
                                                                                                                                            1 /* TEXT */
                                                                                                                                        ),
                                                                                                                                        _hoisted_17,
                                                                                                                                    ]
                                                                                                                                ),
                                                                                                                            ]
                                                                                                                        ),
                                                                                                                        ((0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                                            _component_RecursiveMenu,
                                                                                                                            {
                                                                                                                                key:
                                                                                                                                    index +
                                                                                                                                    "A",
                                                                                                                                root_menu:
                                                                                                                                    root_menu.menu_name,
                                                                                                                                child_menus:
                                                                                                                                    root_menu.child_menus,
                                                                                                                                currentActiveRoute:
                                                                                                                                    $data.currentActiveRoute,
                                                                                                                            },
                                                                                                                            null,
                                                                                                                            8 /* PROPS */,
                                                                                                                            [
                                                                                                                                "root_menu",
                                                                                                                                "child_menus",
                                                                                                                                "currentActiveRoute",
                                                                                                                            ]
                                                                                                                        )),
                                                                                                                    ]
                                                                                                                )),
                                                                                                            ];
                                                                                                        },
                                                                                                        true
                                                                                                    )
                                                                                                  : ((0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                                                        {
                                                                                                            key: 1,
                                                                                                        },
                                                                                                        [
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                " ===================CHILDREN MENU=================== "
                                                                                                            ),
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                                                _ctx.$slots,
                                                                                                                "default",
                                                                                                                {},
                                                                                                                function () {
                                                                                                                    return [
                                                                                                                        root_menu.route_name &&
                                                                                                                        _ctx.$root.checkPermission(
                                                                                                                            root_menu.route_name
                                                                                                                        )
                                                                                                                            ? ((0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                              (0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                  "li",
                                                                                                                                  {
                                                                                                                                      key: index,
                                                                                                                                  },
                                                                                                                                  [
                                                                                                                                      (0,
                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                          " MENU  WITH PARAMS"
                                                                                                                                      ),
                                                                                                                                      root_menu.params
                                                                                                                                          ? ((0,
                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                            (0,
                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                                                                _component_router_link,
                                                                                                                                                {
                                                                                                                                                    key: 0,
                                                                                                                                                    to: {
                                                                                                                                                        name: root_menu.route_name,
                                                                                                                                                        params: {
                                                                                                                                                            slug: root_menu.params,
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    default:
                                                                                                                                                        (0,
                                                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                                            function () {
                                                                                                                                                                return [
                                                                                                                                                                    (0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                        "span",
                                                                                                                                                                        _hoisted_18,
                                                                                                                                                                        [
                                                                                                                                                                            root_menu.icon
                                                                                                                                                                                ? ((0,
                                                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                                                                  (0,
                                                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                                                      "em",
                                                                                                                                                                                      {
                                                                                                                                                                                          key: 0,
                                                                                                                                                                                          innerHTML:
                                                                                                                                                                                              root_menu.icon,
                                                                                                                                                                                      },
                                                                                                                                                                                      null,
                                                                                                                                                                                      8 /* PROPS */,
                                                                                                                                                                                      _hoisted_19
                                                                                                                                                                                  ))
                                                                                                                                                                                : (0,
                                                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                                                      "v-if",
                                                                                                                                                                                      true
                                                                                                                                                                                  ),
                                                                                                                                                                        ]
                                                                                                                                                                    ),
                                                                                                                                                                    (0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                        "span",
                                                                                                                                                                        _hoisted_20,
                                                                                                                                                                        [
                                                                                                                                                                            (0,
                                                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                "span",
                                                                                                                                                                                null,
                                                                                                                                                                                (0,
                                                                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                                    root_menu.menu_name
                                                                                                                                                                                ),
                                                                                                                                                                                1 /* TEXT */
                                                                                                                                                                            ),
                                                                                                                                                                        ]
                                                                                                                                                                    ),
                                                                                                                                                                ];
                                                                                                                                                            }
                                                                                                                                                        ),

                                                                                                                                                    _: 2 /* DYNAMIC */,
                                                                                                                                                },
                                                                                                                                                1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                                                                                [
                                                                                                                                                    "to",
                                                                                                                                                ]
                                                                                                                                            ))
                                                                                                                                          : ((0,
                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                            (0,
                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                                                                                                {
                                                                                                                                                    key: 1,
                                                                                                                                                },
                                                                                                                                                [
                                                                                                                                                    (0,
                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                        " SINGLE MENU "
                                                                                                                                                    ),
                                                                                                                                                    (0,
                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                                                                                                        _component_router_link,
                                                                                                                                                        {
                                                                                                                                                            to: {
                                                                                                                                                                name: root_menu.route_name,
                                                                                                                                                            },
                                                                                                                                                            class: (0,
                                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(
                                                                                                                                                                $data.currentActiveRoute ==
                                                                                                                                                                    root_menu.route_name
                                                                                                                                                                    ? "router-link-active active"
                                                                                                                                                                    : ""
                                                                                                                                                            ),
                                                                                                                                                            "data-route":
                                                                                                                                                                root_menu.route_name,
                                                                                                                                                            "data-lol":
                                                                                                                                                                $data.currentActiveRoute,
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            default:
                                                                                                                                                                (0,
                                                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                                                    function () {
                                                                                                                                                                        return [
                                                                                                                                                                            (0,
                                                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                "span",
                                                                                                                                                                                _hoisted_21,
                                                                                                                                                                                [
                                                                                                                                                                                    root_menu.icon
                                                                                                                                                                                        ? ((0,
                                                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                                                                          (0,
                                                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                                                              "em",
                                                                                                                                                                                              {
                                                                                                                                                                                                  key: 0,
                                                                                                                                                                                                  innerHTML:
                                                                                                                                                                                                      root_menu.icon,
                                                                                                                                                                                              },
                                                                                                                                                                                              null,
                                                                                                                                                                                              8 /* PROPS */,
                                                                                                                                                                                              _hoisted_22
                                                                                                                                                                                          ))
                                                                                                                                                                                        : (0,
                                                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                                                              "v-if",
                                                                                                                                                                                              true
                                                                                                                                                                                          ),
                                                                                                                                                                                ]
                                                                                                                                                                            ),
                                                                                                                                                                            (0,
                                                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                "span",
                                                                                                                                                                                _hoisted_23,
                                                                                                                                                                                [
                                                                                                                                                                                    (0,
                                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                        "span",
                                                                                                                                                                                        null,
                                                                                                                                                                                        (0,
                                                                                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                                            root_menu.menu_name
                                                                                                                                                                                        ),
                                                                                                                                                                                        1 /* TEXT */
                                                                                                                                                                                    ),
                                                                                                                                                                                ]
                                                                                                                                                                            ),
                                                                                                                                                                        ];
                                                                                                                                                                    }
                                                                                                                                                                ),

                                                                                                                                                            _: 2 /* DYNAMIC */,
                                                                                                                                                        },
                                                                                                                                                        1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                                                                                        [
                                                                                                                                                            "to",
                                                                                                                                                            "class",
                                                                                                                                                            "data-route",
                                                                                                                                                            "data-lol",
                                                                                                                                                        ]
                                                                                                                                                    ),
                                                                                                                                                ],
                                                                                                                                                2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                                                                                                                                            )),
                                                                                                                                  ]
                                                                                                                              ))
                                                                                                                            : (0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                  "v-if",
                                                                                                                                  true
                                                                                                                              ),
                                                                                                                    ];
                                                                                                                },
                                                                                                                true
                                                                                                            ),
                                                                                                        ],
                                                                                                        2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                                                                                                    )),
                                                                                          ];
                                                                                      },
                                                                                      true
                                                                                  );
                                                                              }
                                                                          ),
                                                                          256 /* UNKEYED_FRAGMENT */
                                                                      )),
                                                                  ]
                                                              ))
                                                            : (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                  "v-if",
                                                                  true
                                                              ),
                                                    ]
                                                ),
                                            ]
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                            " collapsed navigation start "
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_24,
                                            [
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "ul",
                                                    null,
                                                    [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                            ' <li>\r\n          <a href="#">\r\n            <i class="fas fa-cog spin"></i>\r\n          </a>\r\n          <div class="mini-dropdown-menu">\r\n            <ul>\r\n              <li class="menu-title">\r\n                <router-link :to="{ name: \'dashboard.index\' }" class="mini-dashboard">\r\n                  Dashboard\r\n                </router-link>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </li> '
                                                        ),
                                                        ((0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                                            true
                                                        ),
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                            vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                            null,
                                                            (0,
                                                            vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                                                _ctx.menus,
                                                                function (
                                                                    root_menu,
                                                                    index
                                                                ) {
                                                                    return (0,
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                        _ctx.$slots,
                                                                        "default",
                                                                        {},
                                                                        function () {
                                                                            return [
                                                                                root_menu.child_menus &&
                                                                                Object.keys(
                                                                                    root_menu.child_menus
                                                                                )
                                                                                    .length >
                                                                                    0
                                                                                    ? (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                          _ctx.$slots,
                                                                                          "default",
                                                                                          {
                                                                                              key: 0,
                                                                                          },
                                                                                          function () {
                                                                                              return [
                                                                                                  ((0,
                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                  (0,
                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                      "li",
                                                                                                      {
                                                                                                          key: index,
                                                                                                      },
                                                                                                      [
                                                                                                          (0,
                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                              "a",
                                                                                                              _hoisted_25,
                                                                                                              [
                                                                                                                  root_menu.icon
                                                                                                                      ? ((0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                            "em",
                                                                                                                            {
                                                                                                                                key: 0,
                                                                                                                                innerHTML:
                                                                                                                                    root_menu.icon,
                                                                                                                            },
                                                                                                                            null,
                                                                                                                            8 /* PROPS */,
                                                                                                                            _hoisted_26
                                                                                                                        ))
                                                                                                                      : (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                            "v-if",
                                                                                                                            true
                                                                                                                        ),
                                                                                                              ]
                                                                                                          ),
                                                                                                          (0,
                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                              "div",
                                                                                                              _hoisted_27,
                                                                                                              [
                                                                                                                  ((0,
                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                  (0,
                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                                      _component_RecursiveMenuCollasped,
                                                                                                                      {
                                                                                                                          key:
                                                                                                                              index +
                                                                                                                              "A",
                                                                                                                          root_menu:
                                                                                                                              root_menu.menu_name,
                                                                                                                          child_menus:
                                                                                                                              root_menu.child_menus,
                                                                                                                      },
                                                                                                                      null,
                                                                                                                      8 /* PROPS */,
                                                                                                                      [
                                                                                                                          "root_menu",
                                                                                                                          "child_menus",
                                                                                                                      ]
                                                                                                                  )),
                                                                                                              ]
                                                                                                          ),
                                                                                                      ]
                                                                                                  )),
                                                                                              ];
                                                                                          },
                                                                                          true
                                                                                      )
                                                                                    : (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                          _ctx.$slots,
                                                                                          "default",
                                                                                          {
                                                                                              key: 1,
                                                                                          },
                                                                                          function () {
                                                                                              return [
                                                                                                  root_menu.route_name &&
                                                                                                  _ctx.$root.checkPermission(
                                                                                                      root_menu.route_name
                                                                                                  )
                                                                                                      ? ((0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                            "li",
                                                                                                            {
                                                                                                                key:
                                                                                                                    index +
                                                                                                                    1,
                                                                                                            },
                                                                                                            [
                                                                                                                (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                    "a",
                                                                                                                    _hoisted_28,
                                                                                                                    [
                                                                                                                        root_menu.icon
                                                                                                                            ? ((0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                              (0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                  "em",
                                                                                                                                  {
                                                                                                                                      key: 0,
                                                                                                                                      innerHTML:
                                                                                                                                          root_menu.icon,
                                                                                                                                  },
                                                                                                                                  null,
                                                                                                                                  8 /* PROPS */,
                                                                                                                                  _hoisted_29
                                                                                                                              ))
                                                                                                                            : (0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                  "v-if",
                                                                                                                                  true
                                                                                                                              ),
                                                                                                                    ]
                                                                                                                ),
                                                                                                                (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                    "div",
                                                                                                                    _hoisted_30,
                                                                                                                    [
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                            "ul",
                                                                                                                            null,
                                                                                                                            [
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                    "li",
                                                                                                                                    _hoisted_31,
                                                                                                                                    [
                                                                                                                                        root_menu.params
                                                                                                                                            ? ((0,
                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                              (0,
                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                                                                  _component_router_link,
                                                                                                                                                  {
                                                                                                                                                      key: 0,
                                                                                                                                                      to: {
                                                                                                                                                          name: root_menu.route_name,
                                                                                                                                                          params: {
                                                                                                                                                              slug: root_menu.params,
                                                                                                                                                          },
                                                                                                                                                      },
                                                                                                                                                      class: "mini-dashboard",
                                                                                                                                                  },
                                                                                                                                                  {
                                                                                                                                                      default:
                                                                                                                                                          (0,
                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                                              function () {
                                                                                                                                                                  return [
                                                                                                                                                                      (0,
                                                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                                                          (0,
                                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                              root_menu.menu_name
                                                                                                                                                                          ),
                                                                                                                                                                          1 /* TEXT */
                                                                                                                                                                      ),
                                                                                                                                                                  ];
                                                                                                                                                              }
                                                                                                                                                          ),

                                                                                                                                                      _: 2 /* DYNAMIC */,
                                                                                                                                                  },
                                                                                                                                                  1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                                                                                  [
                                                                                                                                                      "to",
                                                                                                                                                  ]
                                                                                                                                              ))
                                                                                                                                            : ((0,
                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                              (0,
                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                                                                  _component_router_link,
                                                                                                                                                  {
                                                                                                                                                      key: 1,
                                                                                                                                                      to: {
                                                                                                                                                          name: root_menu.route_name,
                                                                                                                                                      },
                                                                                                                                                      class: "mini-dashboard",
                                                                                                                                                  },
                                                                                                                                                  {
                                                                                                                                                      default:
                                                                                                                                                          (0,
                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                                              function () {
                                                                                                                                                                  return [
                                                                                                                                                                      (0,
                                                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                                                          (0,
                                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                              root_menu.menu_name
                                                                                                                                                                          ),
                                                                                                                                                                          1 /* TEXT */
                                                                                                                                                                      ),
                                                                                                                                                                  ];
                                                                                                                                                              }
                                                                                                                                                          ),

                                                                                                                                                      _: 2 /* DYNAMIC */,
                                                                                                                                                  },
                                                                                                                                                  1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                                                                                  [
                                                                                                                                                      "to",
                                                                                                                                                  ]
                                                                                                                                              )),
                                                                                                                                    ]
                                                                                                                                ),
                                                                                                                            ]
                                                                                                                        ),
                                                                                                                    ]
                                                                                                                ),
                                                                                                            ]
                                                                                                        ))
                                                                                                      : (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                            "v-if",
                                                                                                            true
                                                                                                        ),
                                                                                              ];
                                                                                          },
                                                                                          true
                                                                                      ),
                                                                            ];
                                                                        },
                                                                        true
                                                                    );
                                                                }
                                                            ),
                                                            256 /* UNKEYED_FRAGMENT */
                                                        )),
                                                    ]
                                                ),
                                            ]
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                            " collapsed navigation end"
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            {
                                                class: "branding text-center",
                                                style: (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(
                                                    "background-color: ".concat(
                                                        _ctx.colors
                                                            .sidebar_footer_color
                                                            ? _ctx.colors
                                                                  .sidebar_footer_color
                                                            : _ctx.databaseColor
                                                                  .sidebar_footer_color,
                                                        ";"
                                                    )
                                                ),
                                            },
                                            [
                                                _hoisted_32,
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_33,
                                                    [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                            "img",
                                                            {
                                                                src: "".concat(
                                                                    _ctx.asset,
                                                                    "nogor-favicon.png"
                                                                ),
                                                                alt: "nogo-fevicon",
                                                            },
                                                            null,
                                                            8 /* PROPS */,
                                                            _hoisted_34
                                                        ),
                                                    ]
                                                ),
                                            ],
                                            4 /* STYLE */
                                        ),
                                    ],
                                    4 /* STYLE */
                                ),
                            ],
                            64 /* STABLE_FRAGMENT */
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772":
            /*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _hoisted_1 = {
                    class: "menu-title",
                };
                var _hoisted_2 = {
                    href: "#",
                    class: "mini-dashboard",
                };
                var _hoisted_3 = {
                    href: "javascript:void(0)",
                };
                var _hoisted_4 = ["innerHTML"];
                var _hoisted_5 = {
                    key: 1,
                    class: "fas fa-chevron-right",
                };
                var _hoisted_6 = ["innerHTML"];
                var _hoisted_7 = {
                    key: 1,
                    class: "fas fa-chevron-right",
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_recursive_child_menu = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "recursive-child-menu"
                    );
                    var _component_router_link = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-link"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "ul",
                            null,
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "li",
                                    _hoisted_1,
                                    [
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "a",
                                            _hoisted_2,
                                            (0,
                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                $props.root_menu
                                            ),
                                            1 /* TEXT */
                                        ),
                                    ]
                                ),
                                ((0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                    true
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                    vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    null,
                                    (0,
                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                        $props.child_menus,
                                        function (child_menu, index) {
                                            return (
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                    "li",
                                                    {
                                                        key: index,
                                                    },
                                                    [
                                                        Object.keys(
                                                            child_menu.child_menus
                                                        ).length > 0
                                                            ? (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                  _ctx.$slots,
                                                                  "default",
                                                                  {
                                                                      key: 0,
                                                                  },
                                                                  function () {
                                                                      return [
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                              "a",
                                                                              _hoisted_3,
                                                                              [
                                                                                  child_menu.icon
                                                                                      ? ((0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                            "em",
                                                                                            {
                                                                                                key: 0,
                                                                                                innerHTML:
                                                                                                    child_menu.icon,
                                                                                            },
                                                                                            null,
                                                                                            8 /* PROPS */,
                                                                                            _hoisted_4
                                                                                        ))
                                                                                      : ((0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                            "i",
                                                                                            _hoisted_5
                                                                                        )),
                                                                                  (0,
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                      " " +
                                                                                          (0,
                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                              child_menu.menu_name
                                                                                          ),
                                                                                      1 /* TEXT */
                                                                                  ),
                                                                              ]
                                                                          ),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                              " ===================Children Menu=================== "
                                                                          ),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                              _component_recursive_child_menu,
                                                                              {
                                                                                  root_menu:
                                                                                      child_menu.menu_name,
                                                                                  child_menus:
                                                                                      child_menu.child_menus,
                                                                              },
                                                                              null,
                                                                              8 /* PROPS */,
                                                                              [
                                                                                  "root_menu",
                                                                                  "child_menus",
                                                                              ]
                                                                          ),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                              " ===================Children Menu=================== "
                                                                          ),
                                                                      ];
                                                                  }
                                                              )
                                                            : (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                  _ctx.$slots,
                                                                  "default",
                                                                  {
                                                                      key: 1,
                                                                  },
                                                                  function () {
                                                                      return [
                                                                          _ctx.$root.checkPermission(
                                                                              child_menu.route_name
                                                                          )
                                                                              ? ((0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                    _component_router_link,
                                                                                    {
                                                                                        key: 0,
                                                                                        to: {
                                                                                            name: child_menu.route_name,
                                                                                            params: {
                                                                                                slug: child_menu.params,
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    {
                                                                                        default:
                                                                                            (0,
                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                function () {
                                                                                                    return [
                                                                                                        child_menu.icon
                                                                                                            ? ((0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                              (0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                  "em",
                                                                                                                  {
                                                                                                                      key: 0,
                                                                                                                      innerHTML:
                                                                                                                          child_menu.icon,
                                                                                                                  },
                                                                                                                  null,
                                                                                                                  8 /* PROPS */,
                                                                                                                  _hoisted_6
                                                                                                              ))
                                                                                                            : ((0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                              (0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                  "i",
                                                                                                                  _hoisted_7
                                                                                                              )),
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                            "   "
                                                                                                        ),
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                            "span",
                                                                                                            null,
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                child_menu.menu_name
                                                                                                            ),
                                                                                                            1 /* TEXT */
                                                                                                        ),
                                                                                                    ];
                                                                                                }
                                                                                            ),

                                                                                        _: 2 /* DYNAMIC */,
                                                                                    },
                                                                                    1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                    [
                                                                                        "to",
                                                                                    ]
                                                                                ))
                                                                              : (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                    "v-if",
                                                                                    true
                                                                                ),
                                                                      ];
                                                                  }
                                                              ),
                                                    ]
                                                )
                                            );
                                        }
                                    ),
                                    128 /* KEYED_FRAGMENT */
                                )),
                            ]
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarRecursive.vue?vue&type=template&id=9227b248":
            /*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarRecursive.vue?vue&type=template&id=9227b248 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _hoisted_1 = {
                    class: "submenu title",
                };
                var _hoisted_2 = {
                    href: "javascript:void(0)",
                    class: "sub-menu-main",
                };
                var _hoisted_3 = ["innerHTML"];
                var _hoisted_4 = {
                    key: 1,
                    class: "fa fa-circle-o text-aqua",
                };
                var _hoisted_5 = {
                    key: 2,
                    class: "float-end",
                };
                var _hoisted_6 = /*#__PURE__*/ (0,
                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                    "i",
                    {
                        class: "fa fa-chevron-right right p-0",
                    },
                    null,
                    -1 /* HOISTED */
                );
                var _hoisted_7 = [_hoisted_6];
                var _hoisted_8 = ["innerHTML"];
                var _hoisted_9 = {
                    key: 1,
                    class: "fa fa-circle-o text-aqua",
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_recursive_child_menu = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "recursive-child-menu"
                    );
                    var _component_router_link = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-link"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "ul",
                            _hoisted_1,
                            [
                                ((0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                    true
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                    vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                    null,
                                    (0,
                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                        $props.child_menus,
                                        function (child_menu, index) {
                                            return (
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                    "li",
                                                    {
                                                        key: index,
                                                    },
                                                    [
                                                        Object.keys(
                                                            child_menu.child_menus
                                                        ).length > 0
                                                            ? (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                  _ctx.$slots,
                                                                  "default",
                                                                  {
                                                                      key: 0,
                                                                  },
                                                                  function () {
                                                                      return [
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                              "a",
                                                                              _hoisted_2,
                                                                              [
                                                                                  child_menu.icon
                                                                                      ? ((0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                            "em",
                                                                                            {
                                                                                                key: 0,
                                                                                                innerHTML:
                                                                                                    child_menu.icon,
                                                                                            },
                                                                                            null,
                                                                                            8 /* PROPS */,
                                                                                            _hoisted_3
                                                                                        ))
                                                                                      : ((0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                            "i",
                                                                                            _hoisted_4
                                                                                        )),
                                                                                  (0,
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                      " " +
                                                                                          (0,
                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                              child_menu.menu_name
                                                                                          ) +
                                                                                          " ",
                                                                                      1 /* TEXT */
                                                                                  ),
                                                                                  Object.keys(
                                                                                      child_menu.child_menus
                                                                                  )
                                                                                      .length >
                                                                                  0
                                                                                      ? ((0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                            "span",
                                                                                            _hoisted_5,
                                                                                            _hoisted_7
                                                                                        ))
                                                                                      : (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                            "v-if",
                                                                                            true
                                                                                        ),
                                                                              ]
                                                                          ),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                              " ===================Children Menu=================== "
                                                                          ),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                              _component_recursive_child_menu,
                                                                              {
                                                                                  root_menu:
                                                                                      child_menu.menu_name,
                                                                                  child_menus:
                                                                                      child_menu.child_menus,
                                                                              },
                                                                              null,
                                                                              8 /* PROPS */,
                                                                              [
                                                                                  "root_menu",
                                                                                  "child_menus",
                                                                              ]
                                                                          ),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                              " ===================Children Menu=================== "
                                                                          ),
                                                                      ];
                                                                  }
                                                              )
                                                            : (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                  _ctx.$slots,
                                                                  "default",
                                                                  {
                                                                      key: 1,
                                                                  },
                                                                  function () {
                                                                      return [
                                                                          _ctx.$root.checkPermission(
                                                                              child_menu.route_name
                                                                          )
                                                                              ? ((0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                    _component_router_link,
                                                                                    {
                                                                                        key: 0,
                                                                                        to: {
                                                                                            name: child_menu.route_name,
                                                                                            params: {
                                                                                                slug: child_menu.params,
                                                                                            },
                                                                                        },
                                                                                        class: (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(
                                                                                            $props.currentActiveRoute ==
                                                                                                child_menu.route_name
                                                                                                ? "router-link-active active"
                                                                                                : ""
                                                                                        ),
                                                                                        "data-route":
                                                                                            child_menu.route_name,
                                                                                    },
                                                                                    {
                                                                                        default:
                                                                                            (0,
                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                function () {
                                                                                                    return [
                                                                                                        child_menu.icon
                                                                                                            ? ((0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                              (0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                  "em",
                                                                                                                  {
                                                                                                                      key: 0,
                                                                                                                      innerHTML:
                                                                                                                          child_menu.icon,
                                                                                                                  },
                                                                                                                  null,
                                                                                                                  8 /* PROPS */,
                                                                                                                  _hoisted_8
                                                                                                              ))
                                                                                                            : ((0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                              (0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                  "i",
                                                                                                                  _hoisted_9
                                                                                                              )),
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                            "span",
                                                                                                            null,
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                child_menu.menu_name
                                                                                                            ),
                                                                                                            1 /* TEXT */
                                                                                                        ),
                                                                                                    ];
                                                                                                }
                                                                                            ),

                                                                                        _: 2 /* DYNAMIC */,
                                                                                    },
                                                                                    1032 /* PROPS, DYNAMIC_SLOTS */,
                                                                                    [
                                                                                        "to",
                                                                                        "class",
                                                                                        "data-route",
                                                                                    ]
                                                                                ))
                                                                              : (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                    "v-if",
                                                                                    true
                                                                                ),
                                                                      ];
                                                                  }
                                                              ),
                                                    ]
                                                )
                                            );
                                        }
                                    ),
                                    128 /* KEYED_FRAGMENT */
                                )),
                            ]
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/elements/ValidationMessage.vue?vue&type=template&id=596af9a1":
            /*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/elements/ValidationMessage.vue?vue&type=template&id=596af9a1 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return (
                        (_typeof =
                            "function" == typeof Symbol &&
                            "symbol" == typeof Symbol.iterator
                                ? function (obj) {
                                      return typeof obj;
                                  }
                                : function (obj) {
                                      return obj &&
                                          "function" == typeof Symbol &&
                                          obj.constructor === Symbol &&
                                          obj !== Symbol.prototype
                                          ? "symbol"
                                          : typeof obj;
                                  }),
                        _typeof(obj)
                    );
                }

                var _hoisted_1 = {
                    class: "modal fade",
                    id: "validateModal",
                    tabindex: "-1",
                    "aria-labelledby": "validateModalLabel",
                    "aria-hidden": "true",
                };
                var _hoisted_2 = {
                    class: "modal-dialog modal-lg",
                };
                var _hoisted_3 = {
                    class: "modal-content",
                };
                var _hoisted_4 = /*#__PURE__*/ (0,
                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                    "div",
                    {
                        class: "modal-header",
                    },
                    [
                        /*#__PURE__*/ (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                            "h5",
                            {
                                class: "modal-title text-black",
                                id: "validateModalLabel",
                            },
                            " You need to fill empty mandatory fields "
                        ),
                        /*#__PURE__*/ (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                            "button",
                            {
                                type: "button",
                                class: "btn-close",
                                "data-bs-dismiss": "modal",
                                "aria-label": "Close",
                            }
                        ),
                    ],
                    -1 /* HOISTED */
                );
                var _hoisted_5 = {
                    class: "modal-body",
                };
                var _hoisted_6 = {
                    key: 0,
                    class: "col-12 py-2 mb-3",
                    style: {
                        background: "#fddede",
                    },
                };
                var _hoisted_7 = {
                    class: "error p-2",
                };
                var _hoisted_8 = /*#__PURE__*/ (0,
                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                    "br",
                    null,
                    null,
                    -1 /* HOISTED */
                );
                var _hoisted_9 = {
                    key: 1,
                    class: "col-12 py-2 mb-3",
                    style: {
                        background: "#fddede",
                    },
                };
                var _hoisted_10 = {
                    class: "error p-2",
                };
                var _hoisted_11 = /*#__PURE__*/ (0,
                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                    "br",
                    null,
                    null,
                    -1 /* HOISTED */
                );

                function render(_ctx, _cache) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "div",
                            _hoisted_1,
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "div",
                                    _hoisted_2,
                                    [
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_3,
                                            [
                                                _hoisted_4,
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_5,
                                                    [
                                                        _ctx.$root
                                                            .validation_errors &&
                                                        Object.keys(
                                                            _ctx.$root
                                                                .validation_errors
                                                        ).length > 0
                                                            ? ((0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                              (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                  "div",
                                                                  _hoisted_6,
                                                                  [
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                          "div",
                                                                          _hoisted_7,
                                                                          [
                                                                              ((0,
                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                                                                  true
                                                                              ),
                                                                              (0,
                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                                  null,
                                                                                  (0,
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                                                                      _ctx
                                                                                          .$root
                                                                                          .validation_errors,
                                                                                      function (
                                                                                          err,
                                                                                          errIndex
                                                                                      ) {
                                                                                          return (
                                                                                              (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                              (0,
                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                  "span",
                                                                                                  {
                                                                                                      key: errIndex,
                                                                                                      class: "text-danger",
                                                                                                  },
                                                                                                  [
                                                                                                      (0,
                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                          (0,
                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                              err[0]
                                                                                                          ) +
                                                                                                              " ",
                                                                                                          1 /* TEXT */
                                                                                                      ),
                                                                                                      _hoisted_8,
                                                                                                  ]
                                                                                              )
                                                                                          );
                                                                                      }
                                                                                  ),
                                                                                  128 /* KEYED_FRAGMENT */
                                                                              )),
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ))
                                                            : (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                  "v-if",
                                                                  true
                                                              ),
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                            " exception_errors "
                                                        ),
                                                        _ctx.$root
                                                            .exception_errors &&
                                                        Object.keys(
                                                            _ctx.$root
                                                                .exception_errors
                                                        ).length > 0
                                                            ? ((0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                              (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                  "div",
                                                                  _hoisted_9,
                                                                  [
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                          "div",
                                                                          _hoisted_10,
                                                                          [
                                                                              _typeof(
                                                                                  _ctx
                                                                                      .$root
                                                                                      .exception_errors
                                                                              ) ===
                                                                              "object"
                                                                                  ? (0,
                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                        _ctx.$slots,
                                                                                        "default",
                                                                                        {
                                                                                            key: 0,
                                                                                        },
                                                                                        function () {
                                                                                            return [
                                                                                                ((0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(
                                                                                                    true
                                                                                                ),
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                                                    null,
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(
                                                                                                        _ctx
                                                                                                            .$root
                                                                                                            .exception_errors,
                                                                                                        function (
                                                                                                            err,
                                                                                                            errIndex
                                                                                                        ) {
                                                                                                            return (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                                                _ctx.$slots,
                                                                                                                "default",
                                                                                                                {},
                                                                                                                function () {
                                                                                                                    return [
                                                                                                                        typeof err ===
                                                                                                                        "string"
                                                                                                                            ? ((0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                              (0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                  "span",
                                                                                                                                  {
                                                                                                                                      key: errIndex,
                                                                                                                                      class: "text-danger",
                                                                                                                                  },
                                                                                                                                  [
                                                                                                                                      (0,
                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                          (0,
                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                              err
                                                                                                                                          ) +
                                                                                                                                              " ",
                                                                                                                                          1 /* TEXT */
                                                                                                                                      ),
                                                                                                                                      _hoisted_11,
                                                                                                                                  ]
                                                                                                                              ))
                                                                                                                            : (0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                  "v-if",
                                                                                                                                  true
                                                                                                                              ),
                                                                                                                    ];
                                                                                                                }
                                                                                                            );
                                                                                                        }
                                                                                                    ),
                                                                                                    256 /* UNKEYED_FRAGMENT */
                                                                                                )),
                                                                                            ];
                                                                                        }
                                                                                    )
                                                                                  : (0,
                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(
                                                                                        _ctx.$slots,
                                                                                        "default",
                                                                                        {
                                                                                            key: 1,
                                                                                        },
                                                                                        function () {
                                                                                            return [
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                        _ctx
                                                                                                            .$root
                                                                                                            .exception_errors
                                                                                                    ),
                                                                                                    1 /* TEXT */
                                                                                                ),
                                                                                            ];
                                                                                        }
                                                                                    ),
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ))
                                                            : (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                  "v-if",
                                                                  true
                                                              ),
                                                    ]
                                                ),
                                            ]
                                        ),
                                    ]
                                ),
                            ]
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e&scoped=true":
            /*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _withScopeId = function _withScopeId(n) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(
                            "data-v-f0f01d2e"
                        ),
                        (n = n()),
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),
                        n
                    );
                };
                var _hoisted_1 = {
                    class: "dashboard",
                };
                var _hoisted_2 = {
                    class: "main-content-body d-flex flex-column",
                };
                var _hoisted_3 = {
                    class: "content-part",
                };
                var _hoisted_4 = {
                    key: 0,
                    class: "inner-content",
                };
                var _hoisted_5 = /*#__PURE__*/ _withScopeId(function () {
                    return /*#__PURE__*/ (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                        "div",
                        {
                            class: "global-form d-flex align-items-center justify-content-center",
                            style: {
                                height: "450px",
                            },
                        },
                        [
                            /*#__PURE__*/ (0,
                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                "div",
                                {
                                    class: "loading-main",
                                },
                                [
                                    /*#__PURE__*/ (0,
                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                        "div",
                                        {
                                            class: "loading-body",
                                        },
                                        [
                                            /*#__PURE__*/ (0,
                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                "div",
                                                null,
                                                [
                                                    /*#__PURE__*/ (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                        " <div></div>\r\n                  <div></div>\r\n                  <div></div>\r\n                  <div></div>\r\n                  <div></div>\r\n                  <div></div> "
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                        "span",
                                                        {
                                                            class: "loader",
                                                        }
                                                    ),
                                                ]
                                            ),
                                        ]
                                    ),
                                ]
                            ),
                        ],
                        -1 /* HOISTED */
                    );
                });
                var _hoisted_6 = [_hoisted_5];
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_AppSidebar = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppSidebar"
                    );
                    var _component_AppNav = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppNav"
                    );
                    var _component_AppBreadcrumb = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppBreadcrumb"
                    );
                    var _component_router_view = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-view"
                    );
                    var _component_AppFooter = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppFooter"
                    );
                    var _component_ValidationMessage = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "ValidationMessage"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "section",
                            _hoisted_1,
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                    _component_AppSidebar
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "div",
                                    _hoisted_2,
                                    [
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                            _component_AppNav
                                        ),
                                        _ctx.$root.spinner
                                            ? ((0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                              (0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                  {
                                                      key: 0,
                                                  },
                                                  [],
                                                  64 /* STABLE_FRAGMENT */
                                              ))
                                            : ((0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                              (0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                  vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                  {
                                                      key: 1,
                                                  },
                                                  [],
                                                  64 /* STABLE_FRAGMENT */
                                              )),
                                        !_ctx.$root.spinner
                                            ? ((0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                              (0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                  _component_AppBreadcrumb,
                                                  {
                                                      key: 2,
                                                  }
                                              ))
                                            : (0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                  "v-if",
                                                  true
                                              ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                            " All Inner Page "
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                            _component_router_view
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_3,
                                            [
                                                _ctx.$root.spinner
                                                    ? ((0,
                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                      (0,
                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                          "div",
                                                          _hoisted_4,
                                                          _hoisted_6
                                                      ))
                                                    : (0,
                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                          "v-if",
                                                          true
                                                      ),
                                            ]
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                            _component_AppFooter
                                        ),
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                            _component_ValidationMessage
                                        ),
                                    ]
                                ),
                            ]
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css":
            /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        function (i) {
                            return i[1];
                        }
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    "\n.bread-crumb-part[data-v-584f0aa9] {\r\n  z-index: 9 !important;\n}\r\n",
                    "",
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css":
            /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        function (i) {
                            return i[1];
                        }
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    "\n.margin-top-10[data-v-251ab46d] {\n    margin-top: 10px !important;\n}\n",
                    "",
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css":
            /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        function (i) {
                            return i[1];
                        }
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    "\n.top-search-box input[data-v-22a4e926] {\r\n  padding-right: 55px;\n}\n.top-search-btn[data-v-22a4e926] {\r\n  width: 40px;\r\n  height: 38px;\r\n  background-color: green;\r\n  border-radius: 2px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  color: #fff;\r\n  border: 0;\n}\r\n",
                    "",
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css":
            /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        function (i) {
                            return i[1];
                        }
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '\n.loader[data-v-f0f01d2e] {\r\n  width: 48px;\r\n  height: 48px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: relative;\r\n  border: 3px solid;\r\n  border-color: #000000 #000000 transparent;\r\n  box-sizing: border-box;\r\n  animation: rotation-f0f01d2e 1s linear infinite;\n}\n.loader[data-v-f0f01d2e]::after {\r\n  content: "";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  border: 3px solid;\r\n  border-color: transparent #ff3d00 #ff3d00;\r\n  width: 24px;\r\n  height: 24px;\r\n  border-radius: 50%;\r\n  animation: rotationBack-f0f01d2e 0.5s linear infinite;\r\n  transform-origin: center center;\n}\n@keyframes rotation-f0f01d2e {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(360deg);\n}\n}\n@keyframes rotationBack-f0f01d2e {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(-360deg);\n}\n}\r\n',
                    "",
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css":
            /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_style_index_0_id_584f0aa9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css"
                    );

                var options = {};

                options.insert = "head";
                options.singleton = false;

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_style_index_0_id_584f0aa9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ],
                        options
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_style_index_0_id_584f0aa9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ].locals || {};

                /***/
            },

        /***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css":
            /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_style_index_0_id_251ab46d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css"
                    );

                var options = {};

                options.insert = "head";
                options.singleton = false;

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_style_index_0_id_251ab46d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ],
                        options
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_style_index_0_id_251ab46d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ].locals || {};

                /***/
            },

        /***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css":
            /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_style_index_0_id_22a4e926_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css"
                    );

                var options = {};

                options.insert = "head";
                options.singleton = false;

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_style_index_0_id_22a4e926_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ],
                        options
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_style_index_0_id_22a4e926_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ].locals || {};

                /***/
            },

        /***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css":
            /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_style_index_0_id_f0f01d2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css"
                    );

                var options = {};

                options.insert = "head";
                options.singleton = false;

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_style_index_0_id_f0f01d2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ],
                        options
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_style_index_0_id_f0f01d2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ].locals || {};

                /***/
            },

        /***/ "./resources/js/components/AppBreadcrumb.vue":
            /*!***************************************************!*\
  !*** ./resources/js/components/AppBreadcrumb.vue ***!
  \***************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _AppBreadcrumb_vue_vue_type_template_id_584f0aa9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true */ "./resources/js/components/AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true"
                    );
                /* harmony import */ var _AppBreadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppBreadcrumb.vue?vue&type=script&lang=js */ "./resources/js/components/AppBreadcrumb.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _AppBreadcrumb_vue_vue_type_style_index_0_id_584f0aa9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css */ "./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                ])(
                    _AppBreadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _AppBreadcrumb_vue_vue_type_template_id_584f0aa9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        ["__scopeId", "data-v-584f0aa9"],
                        ["__file", "resources/js/components/AppBreadcrumb.vue"],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/components/AppFooter.vue":
            /*!***********************************************!*\
  !*** ./resources/js/components/AppFooter.vue ***!
  \***********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _AppFooter_vue_vue_type_template_id_4ab6097e__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppFooter.vue?vue&type=template&id=4ab6097e */ "./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e"
                    );
                /* harmony import */ var _AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppFooter.vue?vue&type=script&lang=js */ "./resources/js/components/AppFooter.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                ])(
                    _AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _AppFooter_vue_vue_type_template_id_4ab6097e__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        ["__file", "resources/js/components/AppFooter.vue"],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/components/AppNav.vue":
            /*!********************************************!*\
  !*** ./resources/js/components/AppNav.vue ***!
  \********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _AppNav_vue_vue_type_template_id_251ab46d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppNav.vue?vue&type=template&id=251ab46d&scoped=true */ "./resources/js/components/AppNav.vue?vue&type=template&id=251ab46d&scoped=true"
                    );
                /* harmony import */ var _AppNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppNav.vue?vue&type=script&lang=js */ "./resources/js/components/AppNav.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _AppNav_vue_vue_type_style_index_0_id_251ab46d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css */ "./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                ])(
                    _AppNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _AppNav_vue_vue_type_template_id_251ab46d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        ["__scopeId", "data-v-251ab46d"],
                        ["__file", "resources/js/components/AppNav.vue"],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/components/AppSidebar.vue":
            /*!************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue ***!
  \************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _AppSidebar_vue_vue_type_template_id_22a4e926_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true */ "./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true"
                    );
                /* harmony import */ var _AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppSidebar.vue?vue&type=script&lang=js */ "./resources/js/components/AppSidebar.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _AppSidebar_vue_vue_type_style_index_0_id_22a4e926_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css */ "./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                ])(
                    _AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _AppSidebar_vue_vue_type_template_id_22a4e926_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        ["__scopeId", "data-v-22a4e926"],
                        ["__file", "resources/js/components/AppSidebar.vue"],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/components/AppSidebarCollaspedRecursive.vue":
            /*!******************************************************************!*\
  !*** ./resources/js/components/AppSidebarCollaspedRecursive.vue ***!
  \******************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _AppSidebarCollaspedRecursive_vue_vue_type_template_id_0f382772__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772 */ "./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772"
                    );
                /* harmony import */ var _AppSidebarCollaspedRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js */ "./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                ])(
                    _AppSidebarCollaspedRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _AppSidebarCollaspedRecursive_vue_vue_type_template_id_0f382772__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        [
                            "__file",
                            "resources/js/components/AppSidebarCollaspedRecursive.vue",
                        ],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/components/AppSidebarRecursive.vue":
            /*!*********************************************************!*\
  !*** ./resources/js/components/AppSidebarRecursive.vue ***!
  \*********************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _AppSidebarRecursive_vue_vue_type_template_id_9227b248__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppSidebarRecursive.vue?vue&type=template&id=9227b248 */ "./resources/js/components/AppSidebarRecursive.vue?vue&type=template&id=9227b248"
                    );
                /* harmony import */ var _AppSidebarRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppSidebarRecursive.vue?vue&type=script&lang=js */ "./resources/js/components/AppSidebarRecursive.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                ])(
                    _AppSidebarRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _AppSidebarRecursive_vue_vue_type_template_id_9227b248__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        [
                            "__file",
                            "resources/js/components/AppSidebarRecursive.vue",
                        ],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/components/elements/ValidationMessage.vue":
            /*!****************************************************************!*\
  !*** ./resources/js/components/elements/ValidationMessage.vue ***!
  \****************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _ValidationMessage_vue_vue_type_template_id_596af9a1__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./ValidationMessage.vue?vue&type=template&id=596af9a1 */ "./resources/js/components/elements/ValidationMessage.vue?vue&type=template&id=596af9a1"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const script = {};

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                ])(script, [
                    [
                        "render",
                        _ValidationMessage_vue_vue_type_template_id_596af9a1__WEBPACK_IMPORTED_MODULE_0__.render,
                    ],
                    [
                        "__file",
                        "resources/js/components/elements/ValidationMessage.vue",
                    ],
                ]);
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/views/admin/layout.vue":
            /*!*********************************************!*\
  !*** ./resources/js/views/admin/layout.vue ***!
  \*********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _layout_vue_vue_type_template_id_f0f01d2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./layout.vue?vue&type=template&id=f0f01d2e&scoped=true */ "./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e&scoped=true"
                    );
                /* harmony import */ var _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./layout.vue?vue&type=script&lang=js */ "./resources/js/views/admin/layout.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _layout_vue_vue_type_style_index_0_id_f0f01d2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css */ "./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                ])(
                    _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _layout_vue_vue_type_template_id_f0f01d2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        ["__scopeId", "data-v-f0f01d2e"],
                        ["__file", "resources/js/views/admin/layout.vue"],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/js/components/AppBreadcrumb.vue?vue&type=script&lang=js":
            /*!***************************************************************************!*\
  !*** ./resources/js/components/AppBreadcrumb.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppBreadcrumb.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppFooter.vue?vue&type=script&lang=js":
            /*!***********************************************************************!*\
  !*** ./resources/js/components/AppFooter.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppFooter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppFooter.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppNav.vue?vue&type=script&lang=js":
            /*!********************************************************************!*\
  !*** ./resources/js/components/AppNav.vue?vue&type=script&lang=js ***!
  \********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppSidebar.vue?vue&type=script&lang=js":
            /*!************************************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue?vue&type=script&lang=js ***!
  \************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js":
            /*!******************************************************************************************!*\
  !*** ./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarCollaspedRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarCollaspedRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppSidebarRecursive.vue?vue&type=script&lang=js":
            /*!*********************************************************************************!*\
  !*** ./resources/js/components/AppSidebarRecursive.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarRecursive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebarRecursive.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarRecursive.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/js/views/admin/layout.vue?vue&type=script&lang=js":
            /*!*********************************************************************!*\
  !*** ./resources/js/views/admin/layout.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true":
            /*!*********************************************************************************************!*\
  !*** ./resources/js/components/AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true ***!
  \*********************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_template_id_584f0aa9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_template_id_584f0aa9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=template&id=584f0aa9&scoped=true"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e":
            /*!*****************************************************************************!*\
  !*** ./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e ***!
  \*****************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppFooter_vue_vue_type_template_id_4ab6097e__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppFooter_vue_vue_type_template_id_4ab6097e__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppFooter.vue?vue&type=template&id=4ab6097e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppFooter.vue?vue&type=template&id=4ab6097e"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppNav.vue?vue&type=template&id=251ab46d&scoped=true":
            /*!**************************************************************************************!*\
  !*** ./resources/js/components/AppNav.vue?vue&type=template&id=251ab46d&scoped=true ***!
  \**************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_template_id_251ab46d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_template_id_251ab46d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppNav.vue?vue&type=template&id=251ab46d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=template&id=251ab46d&scoped=true"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true":
            /*!******************************************************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true ***!
  \******************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_template_id_22a4e926_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_template_id_22a4e926_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&scoped=true"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772":
            /*!************************************************************************************************!*\
  !*** ./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772 ***!
  \************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarCollaspedRecursive_vue_vue_type_template_id_0f382772__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarCollaspedRecursive_vue_vue_type_template_id_0f382772__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarCollaspedRecursive.vue?vue&type=template&id=0f382772"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppSidebarRecursive.vue?vue&type=template&id=9227b248":
            /*!***************************************************************************************!*\
  !*** ./resources/js/components/AppSidebarRecursive.vue?vue&type=template&id=9227b248 ***!
  \***************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarRecursive_vue_vue_type_template_id_9227b248__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebarRecursive_vue_vue_type_template_id_9227b248__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebarRecursive.vue?vue&type=template&id=9227b248 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebarRecursive.vue?vue&type=template&id=9227b248"
                    );

                /***/
            },

        /***/ "./resources/js/components/elements/ValidationMessage.vue?vue&type=template&id=596af9a1":
            /*!**********************************************************************************************!*\
  !*** ./resources/js/components/elements/ValidationMessage.vue?vue&type=template&id=596af9a1 ***!
  \**********************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidationMessage_vue_vue_type_template_id_596af9a1__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ValidationMessage_vue_vue_type_template_id_596af9a1__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ValidationMessage.vue?vue&type=template&id=596af9a1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/elements/ValidationMessage.vue?vue&type=template&id=596af9a1"
                    );

                /***/
            },

        /***/ "./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e&scoped=true":
            /*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e&scoped=true ***!
  \***************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_template_id_f0f01d2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_template_id_f0f01d2e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layout.vue?vue&type=template&id=f0f01d2e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e&scoped=true"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css":
            /*!***********************************************************************************************************!*\
  !*** ./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css ***!
  \***********************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppBreadcrumb_vue_vue_type_style_index_0_id_584f0aa9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppBreadcrumb.vue?vue&type=style&index=0&id=584f0aa9&scoped=true&lang=css"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css":
            /*!****************************************************************************************************!*\
  !*** ./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css ***!
  \****************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppNav_vue_vue_type_style_index_0_id_251ab46d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppNav.vue?vue&type=style&index=0&id=251ab46d&scoped=true&lang=css"
                    );

                /***/
            },

        /***/ "./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css":
            /*!********************************************************************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css ***!
  \********************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_style_index_0_id_22a4e926_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&id=22a4e926&scoped=true&lang=css"
                    );

                /***/
            },

        /***/ "./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css":
            /*!*****************************************************************************************************!*\
  !*** ./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css ***!
  \*****************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_style_index_0_id_f0f01d2e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=style&index=0&id=f0f01d2e&scoped=true&lang=css"
                    );

                /***/
            },
    },
]);
