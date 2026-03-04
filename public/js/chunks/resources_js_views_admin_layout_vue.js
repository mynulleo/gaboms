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
                                                                    "logout",
                                                                    null,
                                                                    false
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
                                activeRouteNamePrefix:
                                    function activeRouteNamePrefix() {
                                        var parts = this.$route.name.split(".");
                                        return parts[0] + ".";
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
                                tooltipLength: 20,
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
                                                                _this.$root.spinner = true;
                                                                _context.next = 3;
                                                                return _this.callApi(
                                                                    "post",
                                                                    "logout"
                                                                );
                                                            case 3:
                                                                res =
                                                                    _context.sent;
                                                                if (
                                                                    res.status ==
                                                                    200
                                                                ) {
                                                                    _this.$root.spinner = false;
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
                                                            case 5:
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
                        },
                        mounted: function mounted() {
                            // Hide all sub-menus initially
                            $(".menu_item ul").hide();
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
                        props: {
                            child_menus: {
                                type: Array,
                                default: [],
                            },
                            currentActiveRoute: {
                                type: String,
                                default: "",
                            },
                            tooltipLength: {
                                type: Number,
                                default: 15,
                            },
                        },
                        computed: {
                            activeRouteNamePrefix:
                                function activeRouteNamePrefix() {
                                    var parts = this.$route.name.split(".");
                                    return parts[0] + ".";
                                },
                        },
                        mounted: function mounted() {
                            // Hide all sub-menus initially
                            $(".menu_item ul").hide();
                        },
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

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
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
                                                                                            return (
                                                                                                _cache[0] ||
                                                                                                (_cache[0] =
                                                                                                    [
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                            "Dashboard"
                                                                                                        ),
                                                                                                    ])
                                                                                            );
                                                                                        }
                                                                                    ),
                                                                                _: 1 /* STABLE */,
                                                                            }
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
                    class: "footer_area text-center",
                };
                function render(_ctx, _cache) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "footer",
                            _hoisted_1,
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "p",
                                    null,
                                    [
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                            " Copyright © " +
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                    new Date()
                                                        .toISOString()
                                                        .slice(0, 4)
                                                ) +
                                                " ",
                                            1 /* TEXT */
                                        ),
                                        _cache[0] ||
                                            (_cache[0] = (0,
                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                "a",
                                                {
                                                    href: "https://nogorsolutions.com",
                                                    target: "_blank",
                                                },
                                                "Quill Information Technology",
                                                -1 /* HOISTED */
                                            )),
                                        _cache[1] ||
                                            (_cache[1] = (0,
                                            vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                " All Rights Reserved. "
                                            )),
                                    ]
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

                var _hoisted_1 = {
                    class: "header_area w-100",
                };
                var _hoisted_2 = {
                    class: "row",
                };
                var _hoisted_3 = {
                    class: "col-md-4 col-4 align-self-center",
                };
                var _hoisted_4 = {
                    class: "header_left",
                };
                var _hoisted_5 = {
                    class: "main d-flex gap-2 align-items-center",
                };
                var _hoisted_6 = {
                    class: "sidebar_control_bar",
                };
                var _hoisted_7 = {
                    type: "button",
                    class: "sidebar_control_btn border-0",
                    "data-bs-toggle": "tooltip",
                    "data-bs-placement": "top",
                    "data-bs-title": "Navbar",
                };
                var _hoisted_8 = {
                    class: "col-md-8 col-8 align-self-center",
                };
                var _hoisted_9 = {
                    class: "header_right d-flex align-items-center justify-content-end gap-4",
                };
                var _hoisted_10 = {
                    class: "action_info d-flex gap-4 align-items-center",
                };
                var _hoisted_11 = {
                    class: "icon_box position-relative",
                };
                var _hoisted_12 = {
                    type: "button",
                    class: "icon_btn dropdown_menu bg-transparent border-0 position-relative",
                    "data-bs-toggle": "tooltip",
                    "data-bs-placement": "top",
                    "data-bs-title": "Messages",
                };
                var _hoisted_13 = {
                    class: "notification_number position-absolute rounded-pill d-flex justify-content-center align-items-center",
                };
                var _hoisted_14 = {
                    class: "information_box dropdown_menu_info messages_information position-absolute top-100 end-0 x_top_message_dropdown_box",
                };
                var _hoisted_15 = {
                    class: "list",
                };
                var _hoisted_16 = {
                    class: "list-unstyled",
                };
                var _hoisted_17 = {
                    class: "info",
                };
                var _hoisted_18 = {
                    class: "name",
                };
                var _hoisted_19 = {
                    class: "time",
                };
                var _hoisted_20 = {
                    key: 1,
                };
                var _hoisted_21 = {
                    class: "btm text-center",
                };
                var _hoisted_22 = {
                    class: "user_box position-relative",
                };
                var _hoisted_23 = {
                    type: "button",
                    class: "user_image dropdown_menu rounded-pill bg-transparent border-0 position-relative",
                    "data-bs-toggle": "tooltip",
                    "data-bs-placement": "top",
                    "data-bs-title": "Profile",
                };
                var _hoisted_24 = ["src"];
                var _hoisted_25 = {
                    class: "user_information position-absolute dropdown_menu_info",
                };
                var _hoisted_26 = {
                    class: "edit_image text-center",
                };
                var _hoisted_27 = {
                    class: "image position-relative",
                };
                var _hoisted_28 = ["src", "href"];
                var _hoisted_29 = {
                    class: "name text-center",
                };
                var _hoisted_30 = {
                    class: "nm",
                };
                var _hoisted_31 = {
                    class: "menus text-start",
                };
                var _hoisted_32 = {
                    class: "list-unstyled",
                };
                var _hoisted_33 = ["innerHTML"];
                var _hoisted_34 = ["innerHTML"];
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _ctx$$root$global,
                        _ctx$$root$global2,
                        _ctx$$root$global3,
                        _ctx$$root$global4,
                        _ctx$user$profile_thr,
                        _ctx$user,
                        _ctx$user$profile_one,
                        _ctx$user2,
                        _ctx$user3,
                        _ctx$$root$global5;
                    var _component_router_link = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-link"
                    );
                    var _directive_x_tooltip = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)(
                        "x-tooltip"
                    );
                    var _directive_x_zoom_image = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)(
                        "x-zoom-image"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "header",
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
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_4,
                                                    [
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
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                            ((0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                            (0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                "button",
                                                                                _hoisted_7,
                                                                                _cache[1] ||
                                                                                    (_cache[1] =
                                                                                        [
                                                                                            (0,
                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                                                                                                '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep" data-v-251ab46d><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-251ab46d></path><path d="M4 6h16" data-v-251ab46d></path><path d="M7 12h13" data-v-251ab46d></path><path d="M10 18h10" data-v-251ab46d></path></svg>',
                                                                                                1
                                                                                            ),
                                                                                        ])
                                                                            )),
                                                                            [
                                                                                [
                                                                                    _directive_x_tooltip,
                                                                                ],
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
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_8,
                                            [
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_9,
                                                    [
                                                        _cache[9] ||
                                                            (_cache[9] = (0,
                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                "div",
                                                                {
                                                                    class: "date_time position-relative",
                                                                },
                                                                [
                                                                    (0,
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                        "p",
                                                                        {
                                                                            id: "currentDateTime",
                                                                        }
                                                                    ),
                                                                ],
                                                                -1 /* HOISTED */
                                                            )),
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                            "div",
                                                            _hoisted_10,
                                                            [
                                                                (0,
                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                    "div",
                                                                    _hoisted_11,
                                                                    [
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                            ((0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                            (0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                "button",
                                                                                _hoisted_12,
                                                                                [
                                                                                    _cache[2] ||
                                                                                        (_cache[2] =
                                                                                            (0,
                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                                                                                                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message" data-v-251ab46d><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-251ab46d></path><path d="M8 9h8" data-v-251ab46d></path><path d="M8 13h6" data-v-251ab46d></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" data-v-251ab46d></path></svg>',
                                                                                                1
                                                                                            )),
                                                                                    (0,
                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                        "sup",
                                                                                        _hoisted_13,
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                            ((_ctx$$root$global =
                                                                                                _ctx
                                                                                                    .$root
                                                                                                    .global) ===
                                                                                                null ||
                                                                                            _ctx$$root$global ===
                                                                                                void 0 ||
                                                                                            (_ctx$$root$global =
                                                                                                _ctx$$root$global.notify_contacts) ===
                                                                                                null ||
                                                                                            _ctx$$root$global ===
                                                                                                void 0
                                                                                                ? void 0
                                                                                                : _ctx$$root$global.length) >
                                                                                                5
                                                                                                ? "5+"
                                                                                                : (_ctx$$root$global2 =
                                                                                                      _ctx
                                                                                                          .$root
                                                                                                          .global) ===
                                                                                                      null ||
                                                                                                  _ctx$$root$global2 ===
                                                                                                      void 0 ||
                                                                                                  (_ctx$$root$global2 =
                                                                                                      _ctx$$root$global2.notify_contacts) ===
                                                                                                      null ||
                                                                                                  _ctx$$root$global2 ===
                                                                                                      void 0
                                                                                                ? void 0
                                                                                                : _ctx$$root$global2.length
                                                                                        ),
                                                                                        1 /* TEXT */
                                                                                    ),
                                                                                ]
                                                                            )),
                                                                            [
                                                                                [
                                                                                    _directive_x_tooltip,
                                                                                ],
                                                                            ]
                                                                        ),
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                            "div",
                                                                            _hoisted_14,
                                                                            [
                                                                                _cache[6] ||
                                                                                    (_cache[6] =
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "div",
                                                                                            {
                                                                                                class: "top d-flex justify-content-between align-items-center gap-4",
                                                                                            },
                                                                                            [
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                    "h3",
                                                                                                    {
                                                                                                        class: "title",
                                                                                                    },
                                                                                                    "Messages"
                                                                                                ),
                                                                                            ],
                                                                                            -1 /* HOISTED */
                                                                                        )),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "div",
                                                                                    _hoisted_15,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "ul",
                                                                                            _hoisted_16,
                                                                                            [
                                                                                                ((_ctx$$root$global3 =
                                                                                                    _ctx
                                                                                                        .$root
                                                                                                        .global) ===
                                                                                                    null ||
                                                                                                _ctx$$root$global3 ===
                                                                                                    void 0 ||
                                                                                                (_ctx$$root$global3 =
                                                                                                    _ctx$$root$global3.notify_contacts) ===
                                                                                                    null ||
                                                                                                _ctx$$root$global3 ===
                                                                                                    void 0
                                                                                                    ? void 0
                                                                                                    : _ctx$$root$global3.length) >
                                                                                                0
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
                                                                                                              (_ctx$$root$global4 =
                                                                                                                  _ctx
                                                                                                                      .$root
                                                                                                                      .global) ===
                                                                                                                  null ||
                                                                                                                  _ctx$$root$global4 ===
                                                                                                                      void 0
                                                                                                                  ? void 0
                                                                                                                  : _ctx$$root$global4.notify_contacts,
                                                                                                              function (
                                                                                                                  notifyContact,
                                                                                                                  index
                                                                                                              ) {
                                                                                                                  return (
                                                                                                                      (0,
                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                      (0,
                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                          "li",
                                                                                                                          {
                                                                                                                              key: "notify_contact_".concat(
                                                                                                                                  index
                                                                                                                              ),
                                                                                                                          },
                                                                                                                          [
                                                                                                                              (0,
                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                                                                                  _component_router_link,
                                                                                                                                  {
                                                                                                                                      to: {
                                                                                                                                          name: "contacts.index",
                                                                                                                                      },
                                                                                                                                      class: "d-flex w-100 align-items-center",
                                                                                                                                  },
                                                                                                                                  {
                                                                                                                                      default:
                                                                                                                                          (0,
                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                              function () {
                                                                                                                                                  return [
                                                                                                                                                      _cache[3] ||
                                                                                                                                                          (_cache[3] =
                                                                                                                                                              (0,
                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                  "div",
                                                                                                                                                                  {
                                                                                                                                                                      class: "img mail",
                                                                                                                                                                  },
                                                                                                                                                                  [
                                                                                                                                                                      (0,
                                                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                          "svg",
                                                                                                                                                                          {
                                                                                                                                                                              xmlns: "http://www.w3.org/2000/svg",
                                                                                                                                                                              width: "24",
                                                                                                                                                                              height: "24",
                                                                                                                                                                              viewBox:
                                                                                                                                                                                  "0 0 24 24",
                                                                                                                                                                              fill: "none",
                                                                                                                                                                              stroke: "currentColor",
                                                                                                                                                                              "stroke-width":
                                                                                                                                                                                  "1.5",
                                                                                                                                                                              "stroke-linecap":
                                                                                                                                                                                  "round",
                                                                                                                                                                              "stroke-linejoin":
                                                                                                                                                                                  "round",
                                                                                                                                                                              class: "icon icon-tabler icons-tabler-outline icon-tabler-message",
                                                                                                                                                                          },
                                                                                                                                                                          [
                                                                                                                                                                              (0,
                                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                  "path",
                                                                                                                                                                                  {
                                                                                                                                                                                      stroke: "none",
                                                                                                                                                                                      d: "M0 0h24v24H0z",
                                                                                                                                                                                      fill: "none",
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              (0,
                                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                  "path",
                                                                                                                                                                                  {
                                                                                                                                                                                      d: "M8 9h8",
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              (0,
                                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                  "path",
                                                                                                                                                                                  {
                                                                                                                                                                                      d: "M8 13h6",
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                              (0,
                                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                                  "path",
                                                                                                                                                                                  {
                                                                                                                                                                                      d: "M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",
                                                                                                                                                                                  }
                                                                                                                                                                              ),
                                                                                                                                                                          ]
                                                                                                                                                                      ),
                                                                                                                                                                  ],
                                                                                                                                                                  -1 /* HOISTED */
                                                                                                                                                              )),
                                                                                                                                                      (0,
                                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                          "div",
                                                                                                                                                          _hoisted_17,
                                                                                                                                                          [
                                                                                                                                                              (0,
                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                  "h4",
                                                                                                                                                                  _hoisted_18,
                                                                                                                                                                  (0,
                                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                      notifyContact.name
                                                                                                                                                                  ),
                                                                                                                                                                  1 /* TEXT */
                                                                                                                                                              ),
                                                                                                                                                              (0,
                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                                  "p",
                                                                                                                                                                  null,
                                                                                                                                                                  (0,
                                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                      notifyContact.subject
                                                                                                                                                                  ),
                                                                                                                                                                  1 /* TEXT */
                                                                                                                                                              ),
                                                                                                                                                          ]
                                                                                                                                                      ),
                                                                                                                                                      (0,
                                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                          "div",
                                                                                                                                                          _hoisted_19,
                                                                                                                                                          (0,
                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                              notifyContact.created_time
                                                                                                                                                          ),
                                                                                                                                                          1 /* TEXT */
                                                                                                                                                      ),
                                                                                                                                                  ];
                                                                                                                                              }
                                                                                                                                          ),

                                                                                                                                      _: 2 /* DYNAMIC */,
                                                                                                                                  },
                                                                                                                                  1024 /* DYNAMIC_SLOTS */
                                                                                                                              ),
                                                                                                                          ]
                                                                                                                      )
                                                                                                                  );
                                                                                                              }
                                                                                                          ),
                                                                                                          128 /* KEYED_FRAGMENT */
                                                                                                      ))
                                                                                                    : ((0,
                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                      (0,
                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                          "li",
                                                                                                          _hoisted_20,
                                                                                                          _cache[4] ||
                                                                                                              (_cache[4] =
                                                                                                                  [
                                                                                                                      (0,
                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                                                                                                                          '<h4 class="no_list" data-v-251ab46d><div data-v-251ab46d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alarm-minus" data-v-251ab46d><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-251ab46d></path><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" data-v-251ab46d></path><path d="M7 4l-2.75 2" data-v-251ab46d></path><path d="M17 4l2.75 2" data-v-251ab46d></path><path d="M10 13h4" data-v-251ab46d></path></svg></div> No Messages Found </h4>',
                                                                                                                          1
                                                                                                                      ),
                                                                                                                  ])
                                                                                                      )),
                                                                                            ]
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "div",
                                                                                    _hoisted_21,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                                            _component_router_link,
                                                                                            {
                                                                                                to: {
                                                                                                    name: "contacts.index",
                                                                                                },
                                                                                                class: "view w-100",
                                                                                            },
                                                                                            {
                                                                                                default:
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                        function () {
                                                                                                            return (
                                                                                                                _cache[5] ||
                                                                                                                (_cache[5] =
                                                                                                                    [
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                            "View All"
                                                                                                                        ),
                                                                                                                    ])
                                                                                                            );
                                                                                                        }
                                                                                                    ),
                                                                                                _: 1 /* STABLE */,
                                                                                            }
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                            ]
                                                                        ),
                                                                    ]
                                                                ),
                                                                (0,
                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                    "div",
                                                                    _hoisted_22,
                                                                    [
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                            ((0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                            (0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                "button",
                                                                                _hoisted_23,
                                                                                [
                                                                                    (0,
                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                        "img",
                                                                                        {
                                                                                            class: "rounded-pill w-100 h-100 object-fit-cover",
                                                                                            src:
                                                                                                (_ctx$user$profile_thr =
                                                                                                    (_ctx$user =
                                                                                                        _ctx.user) ===
                                                                                                        null ||
                                                                                                    _ctx$user ===
                                                                                                        void 0
                                                                                                        ? void 0
                                                                                                        : _ctx$user.profile_three) !==
                                                                                                    null &&
                                                                                                _ctx$user$profile_thr !==
                                                                                                    void 0
                                                                                                    ? _ctx$user$profile_thr
                                                                                                    : "".concat(
                                                                                                          this
                                                                                                              .$root
                                                                                                              .baseurl,
                                                                                                          "/public/images/profile.jpg"
                                                                                                      ),
                                                                                            alt: "profile-user",
                                                                                        },
                                                                                        null,
                                                                                        8 /* PROPS */,
                                                                                        _hoisted_24
                                                                                    ),
                                                                                ]
                                                                            )),
                                                                            [
                                                                                [
                                                                                    _directive_x_tooltip,
                                                                                ],
                                                                            ]
                                                                        ),
                                                                        (0,
                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                            "div",
                                                                            _hoisted_25,
                                                                            [
                                                                                (0,
                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                    "div",
                                                                                    _hoisted_26,
                                                                                    [
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "div",
                                                                                            _hoisted_27,
                                                                                            [
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                        "img",
                                                                                                        {
                                                                                                            src:
                                                                                                                (_ctx$user$profile_one =
                                                                                                                    (_ctx$user2 =
                                                                                                                        _ctx.user) ===
                                                                                                                        null ||
                                                                                                                    _ctx$user2 ===
                                                                                                                        void 0
                                                                                                                        ? void 0
                                                                                                                        : _ctx$user2.profile_one) !==
                                                                                                                    null &&
                                                                                                                _ctx$user$profile_one !==
                                                                                                                    void 0
                                                                                                                    ? _ctx$user$profile_one
                                                                                                                    : "".concat(
                                                                                                                          this
                                                                                                                              .$root
                                                                                                                              .baseurl,
                                                                                                                          "/public/images/profile.jpg"
                                                                                                                      ),
                                                                                                            href:
                                                                                                                (_ctx$user3 =
                                                                                                                    _ctx.user) ===
                                                                                                                    null ||
                                                                                                                _ctx$user3 ===
                                                                                                                    void 0
                                                                                                                    ? void 0
                                                                                                                    : _ctx$user3.profile_two,
                                                                                                            alt: "profile-edit",
                                                                                                        },
                                                                                                        null,
                                                                                                        8 /* PROPS */,
                                                                                                        _hoisted_28
                                                                                                    ),
                                                                                                    [
                                                                                                        [
                                                                                                            _directive_x_zoom_image,
                                                                                                        ],
                                                                                                    ]
                                                                                                ),
                                                                                            ]
                                                                                        ),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "div",
                                                                                            _hoisted_29,
                                                                                            [
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                    "h4",
                                                                                                    _hoisted_30,
                                                                                                    (0,
                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                        _ctx
                                                                                                            .$root
                                                                                                            .user
                                                                                                            .name
                                                                                                    ),
                                                                                                    1 /* TEXT */
                                                                                                ),
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                                                    _component_router_link,
                                                                                                    {
                                                                                                        to: {
                                                                                                            name: "profile.profileDetails",
                                                                                                        },
                                                                                                        class: "edit",
                                                                                                    },
                                                                                                    {
                                                                                                        default:
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                function () {
                                                                                                                    return (
                                                                                                                        _cache[7] ||
                                                                                                                        (_cache[7] =
                                                                                                                            [
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                    "Edit Your Profile"
                                                                                                                                ),
                                                                                                                            ])
                                                                                                                    );
                                                                                                                }
                                                                                                            ),
                                                                                                        _: 1 /* STABLE */,
                                                                                                    }
                                                                                                ),
                                                                                            ]
                                                                                        ),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                            "div",
                                                                                            _hoisted_31,
                                                                                            [
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                    "ul",
                                                                                                    _hoisted_32,
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
                                                                                                                (_ctx$$root$global5 =
                                                                                                                    _ctx
                                                                                                                        .$root
                                                                                                                        .global) ===
                                                                                                                    null ||
                                                                                                                    _ctx$$root$global5 ===
                                                                                                                        void 0
                                                                                                                    ? void 0
                                                                                                                    : _ctx$$root$global5.profile_menus,
                                                                                                                function (
                                                                                                                    profileMenu,
                                                                                                                    profileMenuIndex
                                                                                                                ) {
                                                                                                                    return (
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                            "li",
                                                                                                                            {
                                                                                                                                key: "profile_menu_".concat(
                                                                                                                                    profileMenuIndex
                                                                                                                                ),
                                                                                                                            },
                                                                                                                            [
                                                                                                                                profileMenu.params
                                                                                                                                    ? ((0,
                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                      (0,
                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                                                          _component_router_link,
                                                                                                                                          {
                                                                                                                                              key: 0,
                                                                                                                                              to: {
                                                                                                                                                  name: profileMenu.route_name,
                                                                                                                                                  params: {
                                                                                                                                                      slug: profileMenu.params,
                                                                                                                                                  },
                                                                                                                                              },
                                                                                                                                          },
                                                                                                                                          {
                                                                                                                                              default:
                                                                                                                                                  (0,
                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                                      function () {
                                                                                                                                                          return [
                                                                                                                                                              profileMenu.icon
                                                                                                                                                                  ? ((0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                                                    (0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                                        "span",
                                                                                                                                                                        {
                                                                                                                                                                            key: 0,
                                                                                                                                                                            class: "menu_icon",
                                                                                                                                                                            innerHTML:
                                                                                                                                                                                profileMenu.icon,
                                                                                                                                                                        },
                                                                                                                                                                        null,
                                                                                                                                                                        8 /* PROPS */,
                                                                                                                                                                        _hoisted_33
                                                                                                                                                                    ))
                                                                                                                                                                  : (0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                                        "v-if",
                                                                                                                                                                        true
                                                                                                                                                                    ),
                                                                                                                                                              (0,
                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                                                  " " +
                                                                                                                                                                      (0,
                                                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                          profileMenu.menu_name
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
                                                                                                                                                  name: profileMenu.route_name,
                                                                                                                                              },
                                                                                                                                          },
                                                                                                                                          {
                                                                                                                                              default:
                                                                                                                                                  (0,
                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                                      function () {
                                                                                                                                                          return [
                                                                                                                                                              profileMenu.icon
                                                                                                                                                                  ? ((0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                                                    (0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                                        "span",
                                                                                                                                                                        {
                                                                                                                                                                            key: 0,
                                                                                                                                                                            innerHTML:
                                                                                                                                                                                profileMenu.icon,
                                                                                                                                                                        },
                                                                                                                                                                        null,
                                                                                                                                                                        8 /* PROPS */,
                                                                                                                                                                        _hoisted_34
                                                                                                                                                                    ))
                                                                                                                                                                  : (0,
                                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                                        "v-if",
                                                                                                                                                                        true
                                                                                                                                                                    ),
                                                                                                                                                              (0,
                                                                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                                                  " " +
                                                                                                                                                                      (0,
                                                                                                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                                          profileMenu.menu_name
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
                                                                                                                        )
                                                                                                                    );
                                                                                                                }
                                                                                                            ),
                                                                                                            128 /* KEYED_FRAGMENT */
                                                                                                        )),
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
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(
                                                                                                                                    function (
                                                                                                                                        $event
                                                                                                                                    ) {
                                                                                                                                        return $options.logout();
                                                                                                                                    },
                                                                                                                                    [
                                                                                                                                        "prevent",
                                                                                                                                    ]
                                                                                                                                )),
                                                                                                                    },
                                                                                                                    _cache[8] ||
                                                                                                                        (_cache[8] =
                                                                                                                            [
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                    "i",
                                                                                                                                    {
                                                                                                                                        class: "fa-solid fa-arrow-right-from-bracket",
                                                                                                                                    },
                                                                                                                                    null,
                                                                                                                                    -1 /* HOISTED */
                                                                                                                                ),
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                                    " Log Out "
                                                                                                                                ),
                                                                                                                            ])
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

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926":
            /*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
                    class: "sidebar position-fixed top-0 start-0 h-100 w-100",
                };
                var _hoisted_2 = {
                    class: "d-flex justify-content-between align-items-center gap-4",
                };
                var _hoisted_3 = {
                    class: "logo",
                };
                var _hoisted_4 = ["src"];
                var _hoisted_5 = {
                    class: "menu_list",
                };
                var _hoisted_6 = {
                    key: 0,
                    class: "list-unstyled",
                };
                var _hoisted_7 = ["data-bs-title"];
                var _hoisted_8 = ["innerHTML"];
                var _hoisted_9 = {
                    class: "menu_name",
                };
                var _hoisted_10 = ["innerHTML"];
                var _hoisted_11 = {
                    class: "menu_name",
                };
                var _hoisted_12 = ["innerHTML"];
                var _hoisted_13 = {
                    class: "menu_name",
                };
                var _hoisted_14 = {
                    class: "log_out",
                    "data-bs-toggle": "tooltip",
                    "data-bs-placement": "top",
                    "data-bs-title": "Log Out",
                };
                var _hoisted_15 = {
                    class: "log_out2 d-none",
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_router_link = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-link"
                    );
                    var _component_RecursiveMenu = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "RecursiveMenu"
                    );
                    var _directive_x_tooltip = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)(
                        "x-tooltip"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "aside",
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
                                                                var _ctx$site;
                                                                return [
                                                                    (0,
                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                        "img",
                                                                        {
                                                                            width: "140",
                                                                            src:
                                                                                (_ctx$site =
                                                                                    _ctx.site) ===
                                                                                    null ||
                                                                                _ctx$site ===
                                                                                    void 0
                                                                                    ? void 0
                                                                                    : _ctx$site.logo_small_two,
                                                                            alt: "logo",
                                                                        },
                                                                        null,
                                                                        8 /* PROPS */,
                                                                        _hoisted_4
                                                                    ),
                                                                ];
                                                            }
                                                        ),
                                                        _: 1 /* STABLE */,
                                                    }
                                                ),
                                            ]
                                        ),
                                        _cache[2] ||
                                            (_cache[2] = (0,
                                            vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                                                '<button class="close_mobile_sidebar bg-transparent border-0 d-block d-lg-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></button>',
                                                1
                                            )),
                                    ]
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "div",
                                    _hoisted_5,
                                    [
                                        _ctx.filteredMenus &&
                                        Object.keys(_ctx.menus).length > 0
                                            ? ((0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                              (0,
                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                  "ul",
                                                  _hoisted_6,
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
                                                              _ctx.filteredMenus,
                                                              function (
                                                                  root_menu,
                                                                  index
                                                              ) {
                                                                  var _root_menu$route_name,
                                                                      _root_menu$route_name2,
                                                                      _root_menu$route_name3;
                                                                  return (
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                          null,
                                                                          [
                                                                              root_menu.child_menus &&
                                                                              Object.keys(
                                                                                  root_menu.child_menus
                                                                              )
                                                                                  .length >
                                                                                  0
                                                                                  ? ((0,
                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                    (0,
                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                        "li",
                                                                                        {
                                                                                            class: "menu_item",
                                                                                            key: "parent_menu_".concat(
                                                                                                index
                                                                                            ),
                                                                                        },
                                                                                        [
                                                                                            (0,
                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                                                ((0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                (0,
                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                    "a",
                                                                                                    {
                                                                                                        href: "javascript:void(0)",
                                                                                                        "data-bs-toggle":
                                                                                                            "tooltip",
                                                                                                        "data-bs-placement":
                                                                                                            "right",
                                                                                                        "data-bs-title":
                                                                                                            root_menu.menu_name,
                                                                                                        class: (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(
                                                                                                            (_root_menu$route_name =
                                                                                                                root_menu.route_name) !==
                                                                                                                null &&
                                                                                                                _root_menu$route_name !==
                                                                                                                    void 0 &&
                                                                                                                _root_menu$route_name.startsWith(
                                                                                                                    $options.activeRouteNamePrefix
                                                                                                                )
                                                                                                                ? "router-link-active active"
                                                                                                                : ""
                                                                                                        ),
                                                                                                    },
                                                                                                    [
                                                                                                        root_menu.icon
                                                                                                            ? ((0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                              (0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                  "div",
                                                                                                                  {
                                                                                                                      key: 0,
                                                                                                                      class: "menu_icon",
                                                                                                                      innerHTML:
                                                                                                                          root_menu.icon,
                                                                                                                  },
                                                                                                                  null,
                                                                                                                  8 /* PROPS */,
                                                                                                                  _hoisted_8
                                                                                                              ))
                                                                                                            : (0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                  "v-if",
                                                                                                                  true
                                                                                                              ),
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                            "div",
                                                                                                            _hoisted_9,
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                _ctx.limitString(
                                                                                                                    root_menu.menu_name,
                                                                                                                    $data.tooltipLength
                                                                                                                )
                                                                                                            ),
                                                                                                            1 /* TEXT */
                                                                                                        ),
                                                                                                        _cache[3] ||
                                                                                                            (_cache[3] =
                                                                                                                (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                                                                                                                    '<div class="menu_info"><!-- &lt;div class=&quot;menu_number&quot;&gt;5&lt;/div&gt; --><div class="arrow_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 9l6 6l6 -6"></path></svg></div></div>',
                                                                                                                    1
                                                                                                                )),
                                                                                                    ],
                                                                                                    10 /* CLASS, PROPS */,
                                                                                                    _hoisted_7
                                                                                                )),
                                                                                                [
                                                                                                    [
                                                                                                        _directive_x_tooltip,
                                                                                                        root_menu
                                                                                                            .menu_name
                                                                                                            .length >=
                                                                                                            $data.tooltipLength,
                                                                                                    ],
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
                                                                                                    child_menus:
                                                                                                        root_menu.child_menus,
                                                                                                    currentActiveRoute:
                                                                                                        $data.currentActiveRoute,
                                                                                                },
                                                                                                null,
                                                                                                8 /* PROPS */,
                                                                                                [
                                                                                                    "child_menus",
                                                                                                    "currentActiveRoute",
                                                                                                ]
                                                                                            )),
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
                                                                                                          class: "menu_item",
                                                                                                          key: "parent_menu_".concat(
                                                                                                              index
                                                                                                          ),
                                                                                                      },
                                                                                                      [
                                                                                                          (0,
                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                              " MENU  WITH PARAMS"
                                                                                                          ),
                                                                                                          root_menu.params
                                                                                                              ? (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                                                                    ((0,
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
                                                                                                                            class: (0,
                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(
                                                                                                                                (_root_menu$route_name2 =
                                                                                                                                    root_menu.route_name) !==
                                                                                                                                    null &&
                                                                                                                                    _root_menu$route_name2 !==
                                                                                                                                        void 0 &&
                                                                                                                                    _root_menu$route_name2.startsWith(
                                                                                                                                        $options.activeRouteNamePrefix
                                                                                                                                    )
                                                                                                                                    ? "router-link-active active"
                                                                                                                                    : ""
                                                                                                                            ),
                                                                                                                            "data-bs-toggle":
                                                                                                                                "tooltip",
                                                                                                                            "data-bs-placement":
                                                                                                                                "right",
                                                                                                                            "data-bs-title":
                                                                                                                                root_menu.menu_name,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            default:
                                                                                                                                (0,
                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                    function () {
                                                                                                                                        return [
                                                                                                                                            root_menu.icon
                                                                                                                                                ? ((0,
                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                                  (0,
                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                      "div",
                                                                                                                                                      {
                                                                                                                                                          key: 0,
                                                                                                                                                          class: "menu_icon",
                                                                                                                                                          innerHTML:
                                                                                                                                                              root_menu.icon,
                                                                                                                                                      },
                                                                                                                                                      null,
                                                                                                                                                      8 /* PROPS */,
                                                                                                                                                      _hoisted_10
                                                                                                                                                  ))
                                                                                                                                                : (0,
                                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                      "v-if",
                                                                                                                                                      true
                                                                                                                                                  ),
                                                                                                                                            (0,
                                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                "div",
                                                                                                                                                _hoisted_11,
                                                                                                                                                (0,
                                                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                    _ctx.limitString(
                                                                                                                                                        root_menu.menu_name,
                                                                                                                                                        $data.tooltipLength
                                                                                                                                                    )
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
                                                                                                                            "data-bs-title",
                                                                                                                        ]
                                                                                                                    )),
                                                                                                                    [
                                                                                                                        [
                                                                                                                            _directive_x_tooltip,
                                                                                                                            root_menu
                                                                                                                                .menu_name
                                                                                                                                .length >=
                                                                                                                                $data.tooltipLength,
                                                                                                                        ],
                                                                                                                    ]
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
                                                                                                                            " SINGLE MENU "
                                                                                                                        ),
                                                                                                                        (0,
                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                                                                            ((0,
                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                            (0,
                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(
                                                                                                                                _component_router_link,
                                                                                                                                {
                                                                                                                                    to: {
                                                                                                                                        name: root_menu.route_name,
                                                                                                                                    },
                                                                                                                                    "data-bs-toggle":
                                                                                                                                        "tooltip",
                                                                                                                                    "data-bs-placement":
                                                                                                                                        "right",
                                                                                                                                    "data-bs-title":
                                                                                                                                        root_menu.menu_name,
                                                                                                                                    class: (0,
                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(
                                                                                                                                        (_root_menu$route_name3 =
                                                                                                                                            root_menu.route_name) !==
                                                                                                                                            null &&
                                                                                                                                            _root_menu$route_name3 !==
                                                                                                                                                void 0 &&
                                                                                                                                            _root_menu$route_name3.startsWith(
                                                                                                                                                $options.activeRouteNamePrefix
                                                                                                                                            )
                                                                                                                                            ? "router-link-active active"
                                                                                                                                            : ""
                                                                                                                                    ),
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    default:
                                                                                                                                        (0,
                                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(
                                                                                                                                            function () {
                                                                                                                                                return [
                                                                                                                                                    root_menu.icon
                                                                                                                                                        ? ((0,
                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                                                                          (0,
                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                                                              "div",
                                                                                                                                                              {
                                                                                                                                                                  key: 0,
                                                                                                                                                                  class: "menu_icon",
                                                                                                                                                                  innerHTML:
                                                                                                                                                                      root_menu.icon,
                                                                                                                                                              },
                                                                                                                                                              null,
                                                                                                                                                              8 /* PROPS */,
                                                                                                                                                              _hoisted_12
                                                                                                                                                          ))
                                                                                                                                                        : (0,
                                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                                                                                              "v-if",
                                                                                                                                                              true
                                                                                                                                                          ),
                                                                                                                                                    (0,
                                                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                                        "div",
                                                                                                                                                        _hoisted_13,
                                                                                                                                                        (0,
                                                                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                                                            _ctx.limitString(
                                                                                                                                                                root_menu.menu_name,
                                                                                                                                                                $data.tooltipLength
                                                                                                                                                            )
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
                                                                                                                                    "data-bs-title",
                                                                                                                                    "class",
                                                                                                                                ]
                                                                                                                            )),
                                                                                                                            [
                                                                                                                                [
                                                                                                                                    _directive_x_tooltip,
                                                                                                                                    root_menu
                                                                                                                                        .menu_name
                                                                                                                                        .length >=
                                                                                                                                        $data.tooltipLength,
                                                                                                                                ],
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
                                                                                        ],
                                                                                        64 /* STABLE_FRAGMENT */
                                                                                    )),
                                                                          ],
                                                                          64 /* STABLE_FRAGMENT */
                                                                      )
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
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                    ((0,
                                    vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                    (0,
                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                        "div",
                                        _hoisted_14,
                                        [
                                            (0,
                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                "a",
                                                {
                                                    href: "javascript:void(0)",
                                                    class: "logout_btn",
                                                    onClick:
                                                        _cache[0] ||
                                                        (_cache[0] = (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(
                                                            function () {
                                                                return (
                                                                    $options.logout &&
                                                                    $options.logout.apply(
                                                                        $options,
                                                                        arguments
                                                                    )
                                                                );
                                                            },
                                                            ["prevent"]
                                                        )),
                                                },
                                                _cache[4] ||
                                                    (_cache[4] = [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                                                            '<div class="text">Log Out</div><span class="sign"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M9 12h12l-3 -3"></path><path d="M18 15l3 -3"></path></svg></span>',
                                                            2
                                                        ),
                                                    ])
                                            ),
                                        ]
                                    )),
                                    [[_directive_x_tooltip]]
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "div",
                                    _hoisted_15,
                                    [
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "a",
                                            {
                                                href: "javascript:void(0)",
                                                class: "logout_btn2",
                                                onClick:
                                                    _cache[1] ||
                                                    (_cache[1] = (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(
                                                        function () {
                                                            return (
                                                                $options.logout &&
                                                                $options.logout.apply(
                                                                    $options,
                                                                    arguments
                                                                )
                                                            );
                                                        },
                                                        ["prevent"]
                                                    )),
                                            },
                                            _cache[5] ||
                                                (_cache[5] = [
                                                    (0,
                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(
                                                        '<span class="sign"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M9 12h12l-3 -3"></path><path d="M18 15l3 -3"></path></svg></span>',
                                                        1
                                                    ),
                                                ])
                                        ),
                                    ]
                                ),
                            ]
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
                                                                                                        _cache[0] ||
                                                                                                            (_cache[0] =
                                                                                                                (0,
                                                                                                                vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(
                                                                                                                    "   "
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
                function _toConsumableArray(arr) {
                    return (
                        _arrayWithoutHoles(arr) ||
                        _iterableToArray(arr) ||
                        _unsupportedIterableToArray(arr) ||
                        _nonIterableSpread()
                    );
                }
                function _nonIterableSpread() {
                    throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                }
                function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === "string")
                        return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === "Object" && o.constructor) n = o.constructor.name;
                    if (n === "Map" || n === "Set") return Array.from(o);
                    if (
                        n === "Arguments" ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                        return _arrayLikeToArray(o, minLen);
                }
                function _iterableToArray(iter) {
                    if (
                        (typeof Symbol !== "undefined" &&
                            iter[Symbol.iterator] != null) ||
                        iter["@@iterator"] != null
                    )
                        return Array.from(iter);
                }
                function _arrayWithoutHoles(arr) {
                    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
                }
                function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;
                    for (var i = 0, arr2 = new Array(len); i < len; i++)
                        arr2[i] = arr[i];
                    return arr2;
                }

                var _hoisted_1 = {
                    class: "list-unstyled sub_menu",
                };
                var _hoisted_2 = ["data-bs-title"];
                var _hoisted_3 = ["innerHTML"];
                var _hoisted_4 = {
                    key: 1,
                    class: "menu_icon",
                };
                var _hoisted_5 = {
                    class: "menu_name",
                };
                var _hoisted_6 = {
                    key: 2,
                    class: "menu_info",
                };
                var _hoisted_7 = ["innerHTML"];
                var _hoisted_8 = {
                    key: 1,
                    class: "menu_icon",
                };
                var _hoisted_9 = {
                    class: "menu_name",
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_AppSidebarRecursive = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppSidebarRecursive",
                        true
                    );
                    var _component_router_link = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-link"
                    );
                    var _directive_x_tooltip = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)(
                        "x-tooltip"
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
                                            var _child_menu$route_nam;
                                            return (
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                    "li",
                                                    {
                                                        key: "sub_menu_".concat(
                                                            index
                                                        ),
                                                    },
                                                    [
                                                        Object.keys(
                                                            child_menu.child_menus
                                                        ).length > 0
                                                            ? ((0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                              (0,
                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                                                  {
                                                                      key: 0,
                                                                  },
                                                                  [
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                          ((0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                          (0,
                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                              "a",
                                                                              {
                                                                                  href: "javascript:void(0)",
                                                                                  "data-bs-toggle":
                                                                                      "tooltip",
                                                                                  "data-bs-placement":
                                                                                      "right",
                                                                                  "data-bs-title":
                                                                                      child_menu.menu_name,
                                                                              },
                                                                              [
                                                                                  child_menu.icon
                                                                                      ? ((0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                        (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                            "div",
                                                                                            {
                                                                                                key: 0,
                                                                                                class: "menu_icon",
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
                                                                                            "div",
                                                                                            _hoisted_4,
                                                                                            _toConsumableArray(
                                                                                                _cache[0] ||
                                                                                                    (_cache[0] =
                                                                                                        [
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                "svg",
                                                                                                                {
                                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                                    width: "24",
                                                                                                                    height: "24",
                                                                                                                    viewBox:
                                                                                                                        "0 0 24 24",
                                                                                                                    fill: "none",
                                                                                                                    stroke: "currentColor",
                                                                                                                    "stroke-width":
                                                                                                                        "2",
                                                                                                                    "stroke-linecap":
                                                                                                                        "round",
                                                                                                                    "stroke-linejoin":
                                                                                                                        "round",
                                                                                                                    class: "icon icon-tabler icons-tabler-outline icon-tabler-minus",
                                                                                                                },
                                                                                                                [
                                                                                                                    (0,
                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                        "path",
                                                                                                                        {
                                                                                                                            stroke: "none",
                                                                                                                            d: "M0 0h24v24H0z",
                                                                                                                            fill: "none",
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    (0,
                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                        "path",
                                                                                                                        {
                                                                                                                            d: "M5 12l14 0",
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                                -1 /* HOISTED */
                                                                                                            ),
                                                                                                        ])
                                                                                            )
                                                                                        )),
                                                                                  (0,
                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                      "div",
                                                                                      _hoisted_5,
                                                                                      (0,
                                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                          _ctx.limitString(
                                                                                              child_menu.menu_name,
                                                                                              $props.tooltipLength
                                                                                          )
                                                                                      ),
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
                                                                                            "div",
                                                                                            _hoisted_6,
                                                                                            _toConsumableArray(
                                                                                                _cache[1] ||
                                                                                                    (_cache[1] =
                                                                                                        [
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                "div",
                                                                                                                {
                                                                                                                    class: "arrow_icon",
                                                                                                                },
                                                                                                                [
                                                                                                                    (0,
                                                                                                                    vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                        "svg",
                                                                                                                        {
                                                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                                                            width: "24",
                                                                                                                            height: "24",
                                                                                                                            viewBox:
                                                                                                                                "0 0 24 24",
                                                                                                                            fill: "none",
                                                                                                                            stroke: "currentColor",
                                                                                                                            "stroke-width":
                                                                                                                                "2",
                                                                                                                            "stroke-linecap":
                                                                                                                                "round",
                                                                                                                            "stroke-linejoin":
                                                                                                                                "round",
                                                                                                                            class: "icon icon-tabler icons-tabler-outline icon-tabler-chevron-down",
                                                                                                                        },
                                                                                                                        [
                                                                                                                            (0,
                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                "path",
                                                                                                                                {
                                                                                                                                    stroke: "none",
                                                                                                                                    d: "M0 0h24v24H0z",
                                                                                                                                    fill: "none",
                                                                                                                                }
                                                                                                                            ),
                                                                                                                            (0,
                                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                "path",
                                                                                                                                {
                                                                                                                                    d: "M6 9l6 6l6 -6",
                                                                                                                                }
                                                                                                                            ),
                                                                                                                        ]
                                                                                                                    ),
                                                                                                                ],
                                                                                                                -1 /* HOISTED */
                                                                                                            ),
                                                                                                        ])
                                                                                            )
                                                                                        ))
                                                                                      : (0,
                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                            "v-if",
                                                                                            true
                                                                                        ),
                                                                              ],
                                                                              8 /* PROPS */,
                                                                              _hoisted_2
                                                                          )),
                                                                          [
                                                                              [
                                                                                  _directive_x_tooltip,
                                                                                  child_menu
                                                                                      .menu_name
                                                                                      .length >=
                                                                                      $props.tooltipLength,
                                                                              ],
                                                                          ]
                                                                      ),
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                          " ===================Children Menu=================== "
                                                                      ),
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                                          _component_AppSidebarRecursive,
                                                                          {
                                                                              child_menus:
                                                                                  child_menu.child_menus,
                                                                              "tooltip-length": 16,
                                                                          },
                                                                          null,
                                                                          8 /* PROPS */,
                                                                          [
                                                                              "child_menus",
                                                                          ]
                                                                      ),
                                                                      (0,
                                                                      vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                          " ===================Children Menu=================== "
                                                                      ),
                                                                  ],
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
                                                                  [
                                                                      _ctx.$root.checkPermission(
                                                                          child_menu.route_name
                                                                      )
                                                                          ? (0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(
                                                                                ((0,
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
                                                                                            (_child_menu$route_nam =
                                                                                                child_menu.route_name) !==
                                                                                                null &&
                                                                                                _child_menu$route_nam !==
                                                                                                    void 0 &&
                                                                                                _child_menu$route_nam.startsWith(
                                                                                                    $options.activeRouteNamePrefix
                                                                                                )
                                                                                                ? "router-link-active active"
                                                                                                : ""
                                                                                        ),
                                                                                        "data-bs-toggle":
                                                                                            "tooltip",
                                                                                        "data-bs-placement":
                                                                                            "right",
                                                                                        "data-bs-title":
                                                                                            child_menu.menu_name,
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
                                                                                                                  "div",
                                                                                                                  {
                                                                                                                      key: 0,
                                                                                                                      class: "menu_icon",
                                                                                                                      innerHTML:
                                                                                                                          child_menu.icon,
                                                                                                                  },
                                                                                                                  null,
                                                                                                                  8 /* PROPS */,
                                                                                                                  _hoisted_7
                                                                                                              ))
                                                                                                            : ((0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                                                                                                              (0,
                                                                                                              vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                                                                                                                  "div",
                                                                                                                  _hoisted_8,
                                                                                                                  _toConsumableArray(
                                                                                                                      _cache[2] ||
                                                                                                                          (_cache[2] =
                                                                                                                              [
                                                                                                                                  (0,
                                                                                                                                  vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                      "svg",
                                                                                                                                      {
                                                                                                                                          xmlns: "http://www.w3.org/2000/svg",
                                                                                                                                          width: "24",
                                                                                                                                          height: "24",
                                                                                                                                          viewBox:
                                                                                                                                              "0 0 24 24",
                                                                                                                                          fill: "none",
                                                                                                                                          stroke: "currentColor",
                                                                                                                                          "stroke-width":
                                                                                                                                              "2",
                                                                                                                                          "stroke-linecap":
                                                                                                                                              "round",
                                                                                                                                          "stroke-linejoin":
                                                                                                                                              "round",
                                                                                                                                          class: "icon icon-tabler icons-tabler-outline icon-tabler-minus",
                                                                                                                                      },
                                                                                                                                      [
                                                                                                                                          (0,
                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                              "path",
                                                                                                                                              {
                                                                                                                                                  stroke: "none",
                                                                                                                                                  d: "M0 0h24v24H0z",
                                                                                                                                                  fill: "none",
                                                                                                                                              }
                                                                                                                                          ),
                                                                                                                                          (0,
                                                                                                                                          vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                                                              "path",
                                                                                                                                              {
                                                                                                                                                  d: "M5 12l14 0",
                                                                                                                                              }
                                                                                                                                          ),
                                                                                                                                      ],
                                                                                                                                      -1 /* HOISTED */
                                                                                                                                  ),
                                                                                                                              ])
                                                                                                                  )
                                                                                                              )),
                                                                                                        (0,
                                                                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                                                                            "div",
                                                                                                            _hoisted_9,
                                                                                                            (0,
                                                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                                                                                                _ctx.limitString(
                                                                                                                    child_menu.menu_name,
                                                                                                                    $props.tooltipLength
                                                                                                                )
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
                                                                                        "data-bs-title",
                                                                                    ]
                                                                                )),
                                                                                [
                                                                                    [
                                                                                        _directive_x_tooltip,
                                                                                        child_menu
                                                                                            .menu_name
                                                                                            .length >=
                                                                                            $props.tooltipLength,
                                                                                    ],
                                                                                ]
                                                                            )
                                                                          : (0,
                                                                            vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(
                                                                                "v-if",
                                                                                true
                                                                            ),
                                                                  ],
                                                                  64 /* STABLE_FRAGMENT */
                                                              )),
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

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e":
            /*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
                    class: "qcms",
                };
                var _hoisted_2 = {
                    class: "right_content",
                };
                var _hoisted_3 = {
                    class: "content_body position-relative",
                };
                var _hoisted_4 = {
                    class: "content_main",
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    var _component_AppSidebar = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppSidebar"
                    );
                    var _component_AppNav = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppNav"
                    );
                    var _component_router_view = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "router-view"
                    );
                    var _component_AppFooter = (0,
                    vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(
                        "AppFooter"
                    );
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "main",
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
                                        (0,
                                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                            "div",
                                            _hoisted_3,
                                            [
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                                    "div",
                                                    _hoisted_4,
                                                    [
                                                        (0,
                                                        vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                            _component_router_view
                                                        ),
                                                    ]
                                                ),
                                                (0,
                                                vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(
                                                    _component_AppFooter
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
                /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
                        _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    "\n.bread-crumb-part[data-v-584f0aa9] {\r\n  z-index: 9 !important;\n}\r\n",
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./resources/js/components/AppBreadcrumb.vue",
                        ],
                        names: [],
                        mappings: ";AA0FA;EACE,qBAAqB;AACvB",
                        sourcesContent: [
                            '<template>\r\n  <div\r\n    class="bread-crumb-part"\r\n    :style="`background-color: ${\r\n      colors.breadcrumb_color\r\n        ? colors.breadcrumb_color\r\n        : databaseColor.breadcrumb_color\r\n    };`"\r\n  >\r\n    <div class="row">\r\n      <div class="col-sm-5">\r\n        <div class="left-title">\r\n          <h3 style="text-transform: capitalize" v-if="breadcrumbs[0]">\r\n            {{\r\n              capitalize(\r\n                breadcrumbs[Object.keys(breadcrumbs).length - 1]["title"]\r\n              )\r\n            }}\r\n          </h3>\r\n        </div>\r\n      </div>\r\n      <!-- <div class="col-md-3 col-lg-3 d-flex align-items-center justify-content-center">\r\n      </div> -->\r\n      <div class="col-sm-7">\r\n        <div class="right-info text-end">\r\n          <ul>\r\n            <li>\r\n              <router-link :to="{ name: \'dashboard.index\' }"\r\n                >Dashboard</router-link\r\n              >\r\n            </li>\r\n            <template v-if="!isDashboardRoute">\r\n              <li\r\n                v-for="(menu, index1) in breadcrumbs"\r\n                :key="index1"\r\n                :class="menu.route == $route.name ? \'active\' : \'\'"\r\n                style="text-transform: capitalize"\r\n              >\r\n                <a v-if="Object.keys(breadcrumbs).length == index1 + 1">\r\n                  {{ menu.title }}\r\n                </a>\r\n                <router-link\r\n                  v-else-if="menu.slug"\r\n                  :to="{\r\n                    name: menu.route,\r\n                    params: { slug: menu.slug },\r\n                  }"\r\n                >\r\n                  {{ menu.title }}\r\n                </router-link>\r\n                <router-link v-else :to="{ name: menu.route }">\r\n                  {{ menu.title }}\r\n                </router-link>\r\n              </li>\r\n            </template>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { mapState } from "vuex";\r\n\r\nexport default {\r\n  computed: {\r\n    isDashboardRoute() {\r\n      return this.$route.name === "dashboard.index";\r\n    },\r\n    ...mapState("setting", ["colors"]),\r\n  },\r\n  //   mounted() {\r\n  //     window.addEventListener("scroll", this.handleScroll);\r\n  //   },\r\n  //   beforeDestroy() {\r\n  //     window.removeEventListener("scroll", this.handleScroll);\r\n  //   },\r\n  methods: {\r\n    handleScroll() {\r\n      const scrollPosition = window.scrollY;\r\n      if (scrollPosition < 50) {\r\n        console.warn("Scroll");\r\n      }\r\n    },\r\n  },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n.bread-crumb-part {\r\n  z-index: 9 !important;\r\n}\r\n</style>\r\n',
                        ],
                        sourceRoot: "",
                    },
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
                /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
                        _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    "\n.margin-top-10[data-v-251ab46d] {\r\n    margin-top: 10px !important;\n}\r\n",
                    "",
                    {
                        version: 3,
                        sources: [
                            "webpack://./resources/js/components/AppNav.vue",
                        ],
                        names: [],
                        mappings: ";AAwaA;IACI,2BAA2B;AAC/B",
                        sourcesContent: [
                            '<template>\r\n    <header class="header_area w-100">\r\n        <div class="row">\r\n            <div class="col-md-4 col-4 align-self-center">\r\n                <div class="header_left">\r\n                    <div class="main d-flex gap-2 align-items-center">\r\n                        <div class="sidebar_control_bar">\r\n                            <button\r\n                                type="button"\r\n                                class="sidebar_control_btn border-0"\r\n                                data-bs-toggle="tooltip"\r\n                                data-bs-placement="top"\r\n                                data-bs-title="Navbar"\r\n                                v-x-tooltip\r\n                            >\r\n                                <svg\r\n                                    xmlns="http://www.w3.org/2000/svg"\r\n                                    width="25"\r\n                                    height="25"\r\n                                    viewBox="0 0 24 24"\r\n                                    fill="none"\r\n                                    stroke="currentColor"\r\n                                    stroke-width="2"\r\n                                    stroke-linecap="round"\r\n                                    stroke-linejoin="round"\r\n                                    class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"\r\n                                >\r\n                                    <path\r\n                                        stroke="none"\r\n                                        d="M0 0h24v24H0z"\r\n                                        fill="none"\r\n                                    />\r\n                                    <path d="M4 6h16" />\r\n                                    <path d="M7 12h13" />\r\n                                    <path d="M10 18h10" />\r\n                                </svg>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-8 col-8 align-self-center">\r\n                <div\r\n                    class="header_right d-flex align-items-center justify-content-end gap-4"\r\n                >\r\n                    <div class="date_time position-relative">\r\n                        <p id="currentDateTime"></p>\r\n                    </div>\r\n                    <div class="action_info d-flex gap-4 align-items-center">\r\n                        <div class="icon_box position-relative">\r\n                            <button\r\n                                type="button"\r\n                                class="icon_btn dropdown_menu bg-transparent border-0 position-relative"\r\n                                data-bs-toggle="tooltip"\r\n                                data-bs-placement="top"\r\n                                data-bs-title="Messages"\r\n                                v-x-tooltip\r\n                            >\r\n                                <svg\r\n                                    xmlns="http://www.w3.org/2000/svg"\r\n                                    width="24"\r\n                                    height="24"\r\n                                    viewBox="0 0 24 24"\r\n                                    fill="none"\r\n                                    stroke="currentColor"\r\n                                    stroke-width="2"\r\n                                    stroke-linecap="round"\r\n                                    stroke-linejoin="round"\r\n                                    class="icon icon-tabler icons-tabler-outline icon-tabler-message"\r\n                                >\r\n                                    <path\r\n                                        stroke="none"\r\n                                        d="M0 0h24v24H0z"\r\n                                        fill="none"\r\n                                    />\r\n                                    <path d="M8 9h8" />\r\n                                    <path d="M8 13h6" />\r\n                                    <path\r\n                                        d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\r\n                                    />\r\n                                </svg>\r\n                                <sup\r\n                                    class="notification_number position-absolute rounded-pill d-flex justify-content-center align-items-center"\r\n                                    >{{\r\n                                        $root.global?.notify_contacts?.length >\r\n                                        5\r\n                                            ? "5+"\r\n                                            : $root.global?.notify_contacts\r\n                                                  ?.length\r\n                                    }}</sup\r\n                                >\r\n                            </button>\r\n                            <div\r\n                                class="information_box dropdown_menu_info messages_information position-absolute top-100 end-0 x_top_message_dropdown_box"\r\n                            >\r\n                                <div\r\n                                    class="top d-flex justify-content-between align-items-center gap-4"\r\n                                >\r\n                                    <h3 class="title">Messages</h3>\r\n                                </div>\r\n                                <div class="list">\r\n                                    <ul class="list-unstyled">\r\n                                        <template\r\n                                            v-if="\r\n                                                $root.global?.notify_contacts\r\n                                                    ?.length > 0\r\n                                            "\r\n                                        >\r\n                                            <li\r\n                                                v-for="(\r\n                                                    notifyContact, index\r\n                                                ) in $root.global\r\n                                                    ?.notify_contacts"\r\n                                                :key="`notify_contact_${index}`"\r\n                                            >\r\n                                                <router-link\r\n                                                    :to="{\r\n                                                        name: \'contacts.index\',\r\n                                                    }"\r\n                                                    class="d-flex w-100 align-items-center"\r\n                                                >\r\n                                                    <div class="img mail">\r\n                                                        <svg\r\n                                                            xmlns="http://www.w3.org/2000/svg"\r\n                                                            width="24"\r\n                                                            height="24"\r\n                                                            viewBox="0 0 24 24"\r\n                                                            fill="none"\r\n                                                            stroke="currentColor"\r\n                                                            stroke-width="1.5"\r\n                                                            stroke-linecap="round"\r\n                                                            stroke-linejoin="round"\r\n                                                            class="icon icon-tabler icons-tabler-outline icon-tabler-message"\r\n                                                        >\r\n                                                            <path\r\n                                                                stroke="none"\r\n                                                                d="M0 0h24v24H0z"\r\n                                                                fill="none"\r\n                                                            />\r\n                                                            <path d="M8 9h8" />\r\n                                                            <path d="M8 13h6" />\r\n                                                            <path\r\n                                                                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\r\n                                                            />\r\n                                                        </svg>\r\n                                                    </div>\r\n                                                    <div class="info">\r\n                                                        <h4 class="name">\r\n                                                            {{\r\n                                                                notifyContact.name\r\n                                                            }}\r\n                                                        </h4>\r\n                                                        <p>\r\n                                                            {{\r\n                                                                notifyContact.subject\r\n                                                            }}\r\n                                                        </p>\r\n                                                    </div>\r\n                                                    <div class="time">\r\n                                                        {{\r\n                                                            notifyContact.created_time\r\n                                                        }}\r\n                                                    </div>\r\n                                                </router-link>\r\n                                            </li>\r\n                                        </template>\r\n                                        <li v-else>\r\n                                            <h4 class="no_list">\r\n                                                <div>\r\n                                                    <svg\r\n                                                        xmlns="http://www.w3.org/2000/svg"\r\n                                                        width="24"\r\n                                                        height="24"\r\n                                                        viewBox="0 0 24 24"\r\n                                                        fill="none"\r\n                                                        stroke="currentColor"\r\n                                                        stroke-width="1.5"\r\n                                                        stroke-linecap="round"\r\n                                                        stroke-linejoin="round"\r\n                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-alarm-minus"\r\n                                                    >\r\n                                                        <path\r\n                                                            stroke="none"\r\n                                                            d="M0 0h24v24H0z"\r\n                                                            fill="none"\r\n                                                        />\r\n                                                        <path\r\n                                                            d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"\r\n                                                        />\r\n                                                        <path\r\n                                                            d="M7 4l-2.75 2"\r\n                                                        />\r\n                                                        <path\r\n                                                            d="M17 4l2.75 2"\r\n                                                        />\r\n                                                        <path d="M10 13h4" />\r\n                                                    </svg>\r\n                                                </div>\r\n                                                No Messages Found\r\n                                            </h4>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class="btm text-center">\r\n                                    <router-link\r\n                                        :to="{ name: \'contacts.index\' }"\r\n                                        class="view w-100"\r\n                                        >View All</router-link\r\n                                    >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class="user_box position-relative">\r\n                            <button\r\n                                type="button"\r\n                                class="user_image dropdown_menu rounded-pill bg-transparent border-0 position-relative"\r\n                                data-bs-toggle="tooltip"\r\n                                data-bs-placement="top"\r\n                                data-bs-title="Profile"\r\n                                v-x-tooltip\r\n                            >\r\n                                <img\r\n                                    class="rounded-pill w-100 h-100 object-fit-cover"\r\n                                    :src="\r\n                                        user?.profile_three ??\r\n                                        `${this.$root.baseurl}/public/images/profile.jpg`\r\n                                    "\r\n                                    alt="profile-user"\r\n                                />\r\n                            </button>\r\n                            <div\r\n                                class="user_information position-absolute dropdown_menu_info"\r\n                            >\r\n                                <div class="edit_image text-center">\r\n                                    <div class="image position-relative">\r\n                                        <img\r\n                                            :src="\r\n                                                user?.profile_one ??\r\n                                                `${this.$root.baseurl}/public/images/profile.jpg`\r\n                                            "\r\n                                            :href="user?.profile_two"\r\n                                            v-x-zoom-image\r\n                                            alt="profile-edit"\r\n                                        />\r\n                                    </div>\r\n                                    <div class="name text-center">\r\n                                        <h4 class="nm">\r\n                                            {{ $root.user.name }}\r\n                                        </h4>\r\n                                        <router-link\r\n                                            :to="{\r\n                                                name: \'profile.profileDetails\',\r\n                                            }"\r\n                                            class="edit"\r\n                                            >Edit Your Profile</router-link\r\n                                        >\r\n                                    </div>\r\n                                    <div class="menus text-start">\r\n                                        <ul class="list-unstyled">\r\n                                            <li\r\n                                                v-for="(\r\n                                                    profileMenu,\r\n                                                    profileMenuIndex\r\n                                                ) in $root.global\r\n                                                    ?.profile_menus"\r\n                                                :key="`profile_menu_${profileMenuIndex}`"\r\n                                            >\r\n                                                <router-link\r\n                                                    v-if="profileMenu.params"\r\n                                                    :to="{\r\n                                                        name: profileMenu.route_name,\r\n                                                        params: {\r\n                                                            slug: profileMenu.params,\r\n                                                        },\r\n                                                    }"\r\n                                                >\r\n                                                    <span\r\n                                                        class="menu_icon"\r\n                                                        v-if="profileMenu.icon"\r\n                                                        v-html="\r\n                                                            profileMenu.icon\r\n                                                        "\r\n                                                    ></span>\r\n                                                    {{ profileMenu.menu_name }}\r\n                                                </router-link>\r\n\r\n                                                <router-link\r\n                                                    v-else\r\n                                                    :to="{\r\n                                                        name: profileMenu.route_name,\r\n                                                    }"\r\n                                                >\r\n                                                    <span\r\n                                                        v-if="profileMenu.icon"\r\n                                                        v-html="\r\n                                                            profileMenu.icon\r\n                                                        "\r\n                                                    ></span>\r\n                                                    {{ profileMenu.menu_name }}\r\n                                                </router-link>\r\n                                            </li>\r\n\r\n                                            <li>\r\n                                                <a\r\n                                                    href="javascript:void(0)"\r\n                                                    @click.prevent="logout()"\r\n                                                >\r\n                                                    <i\r\n                                                        class="fa-solid fa-arrow-right-from-bracket"\r\n                                                    ></i>\r\n                                                    Log Out\r\n                                                </a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header>\r\n</template>\r\n\r\n<script>\r\nimport { mapState } from "vuex";\r\n\r\nexport default {\r\n    computed: {\r\n        ...mapState("setting", ["colors"]),\r\n    },\r\n    data() {\r\n        return {\r\n            profile: false,\r\n            message: false,\r\n            notification: false,\r\n        };\r\n    },\r\n    methods: {\r\n        async logout() {\r\n            const res = await this.callApi("post", "logout", null, false);\r\n            if (res.status == 200) {\r\n                this.$store.dispatch("auth/logout");\r\n                window.location.href = this.$root.baseurl + "/qpanel";\r\n            }\r\n        },\r\n\r\n        loggedInfo() {\r\n            const today = new Date();\r\n            const options = {\r\n                weekday: "long",\r\n                day: "numeric",\r\n                month: "long",\r\n                year: "numeric",\r\n            };\r\n            const formattedDate = today.toLocaleDateString("en-US", options);\r\n            const loggedInfo = `You Logged as ${this.ucfirst(\r\n                this.$root.user.name\r\n            )}`;\r\n\r\n            return `${loggedInfo}, ${formattedDate}`;\r\n        },\r\n    },\r\n\r\n    mounted() {\r\n        // collapsed sidebar js\r\n        $(".control-bar i").click(function () {\r\n            $("body").toggleClass("collapsed-menu");\r\n        });\r\n\r\n        $(".mobile-control-bar i").click(function () {\r\n            $(".navigation-body").addClass("show-mobile-sidebar");\r\n            body.style.overflow = "hidden";\r\n        });\r\n\r\n        $(".mobile-control-bar i").click(function () {\r\n            $(".toggle-overlay").addClass("show-toggle-overlay");\r\n            body.style.overflow = "hidden";\r\n        });\r\n\r\n        $(".close-mobile-menu i").click(function () {\r\n            $(".navigation-body").removeClass("show-mobile-sidebar");\r\n            body.style.overflow = "auto";\r\n        });\r\n\r\n        $(".close-mobile-menu i").click(function () {\r\n            $(".toggle-overlay").removeClass("show-toggle-overlay");\r\n            body.style.overflow = "auto";\r\n        });\r\n\r\n        $(".toggle-overlay").click(function () {\r\n            $(".toggle-overlay").removeClass("show-toggle-overlay");\r\n            body.style.overflow = "auto";\r\n        });\r\n\r\n        $(".toggle-overlay").click(function () {\r\n            $(".navigation-body").removeClass("show-mobile-sidebar");\r\n            body.style.overflow = "auto";\r\n        });\r\n\r\n        // Request full screen js\r\n        const arrows = document.querySelector(".fa-arrows-alt");\r\n        const body = document.querySelector("body");\r\n\r\n        const toggleFullscreen = () => {\r\n            if (document.fullscreenElement) document.exitFullscreen();\r\n            else body.requestFullscreen();\r\n        };\r\n\r\n        // fixed header part js\r\n        $(window).scroll(function () {\r\n            let scrolling = $(this).scrollTop();\r\n            if (scrolling > 0) {\r\n                $(".top-header").addClass("fixed");\r\n            } else {\r\n                $(".top-header").removeClass("fixed");\r\n            }\r\n        });\r\n    },\r\n};\r\n</script>\r\n\r\n<style scoped>\r\n.margin-top-10 {\r\n    margin-top: 10px !important;\r\n}\r\n</style>\r\n',
                        ],
                        sourceRoot: "",
                    },
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
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const script = {};

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__[
                    "default"
                ])(script, [
                    [
                        "render",
                        _AppFooter_vue_vue_type_template_id_4ab6097e__WEBPACK_IMPORTED_MODULE_0__.render,
                    ],
                    ["__file", "resources/js/components/AppFooter.vue"],
                ]);
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
                /* harmony import */ var _AppSidebar_vue_vue_type_template_id_22a4e926__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./AppSidebar.vue?vue&type=template&id=22a4e926 */ "./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926"
                    );
                /* harmony import */ var _AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./AppSidebar.vue?vue&type=script&lang=js */ "./resources/js/components/AppSidebar.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                ])(
                    _AppSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _AppSidebar_vue_vue_type_template_id_22a4e926__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
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
                /* harmony import */ var _layout_vue_vue_type_template_id_f0f01d2e__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./layout.vue?vue&type=template&id=f0f01d2e */ "./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e"
                    );
                /* harmony import */ var _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./layout.vue?vue&type=script&lang=js */ "./resources/js/views/admin/layout.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                ])(
                    _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _layout_vue_vue_type_template_id_f0f01d2e__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
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

        /***/ "./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926":
            /*!******************************************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926 ***!
  \******************************************************************************/
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
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_template_id_22a4e926__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppSidebar_vue_vue_type_template_id_22a4e926__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppSidebar.vue?vue&type=template&id=22a4e926 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926"
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

        /***/ "./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e":
            /*!***************************************************************************!*\
  !*** ./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e ***!
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
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_template_id_f0f01d2e__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_layout_vue_vue_type_template_id_f0f01d2e__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./layout.vue?vue&type=template&id=f0f01d2e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/layout.vue?vue&type=template&id=f0f01d2e"
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
    },
]);
//# sourceMappingURL=resources_js_views_admin_layout_vue.js.map
