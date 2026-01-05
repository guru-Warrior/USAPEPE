(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && r(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
function Bg(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Bu = { exports: {} },
  gl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var i0;
function _v() {
  if (i0) return gl;
  i0 = 1;
  var n = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function o(r, c, d) {
    var f = null;
    if (
      (d !== void 0 && (f = "" + d),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: n, type: r, key: f, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (gl.Fragment = l), (gl.jsx = o), (gl.jsxs = o), gl;
}
var l0;
function Hv() {
  return l0 || ((l0 = 1), (Bu.exports = _v())), Bu.exports;
}
var g = Hv(),
  Vu = { exports: {} },
  it = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s0;
function Yv() {
  if (s0) return it;
  s0 = 1;
  var n = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    S = Symbol.iterator;
  function A(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (S && T[S]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    q = {};
  function G(T, V, Q) {
    (this.props = T),
      (this.context = V),
      (this.refs = q),
      (this.updater = Q || O);
  }
  (G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (T, V) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, V, "setState");
    }),
    (G.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function k() {}
  k.prototype = G.prototype;
  function F(T, V, Q) {
    (this.props = T),
      (this.context = V),
      (this.refs = q),
      (this.updater = Q || O);
  }
  var H = (F.prototype = new k());
  (H.constructor = F), U(H, G.prototype), (H.isPureReactComponent = !0);
  var st = Array.isArray,
    Y = { H: null, A: null, T: null, S: null, V: null },
    lt = Object.prototype.hasOwnProperty;
  function dt(T, V, Q, X, W, ht) {
    return (
      (Q = ht.ref),
      { $$typeof: n, type: T, key: V, ref: Q !== void 0 ? Q : null, props: ht }
    );
  }
  function I(T, V) {
    return dt(T.type, V, void 0, void 0, void 0, T.props);
  }
  function wt(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function qt(T) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (Q) {
        return V[Q];
      })
    );
  }
  var te = /\/+/g;
  function Gt(T, V) {
    return typeof T == "object" && T !== null && T.key != null
      ? qt("" + T.key)
      : V.toString(36);
  }
  function ea() {}
  function Xe(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(ea, ea)
            : ((T.status = "pending"),
              T.then(
                function (V) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = V));
                },
                function (V) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = V));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function Ft(T, V, Q, X, W) {
    var ht = typeof T;
    (ht === "undefined" || ht === "boolean") && (T = null);
    var nt = !1;
    if (T === null) nt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case n:
            case l:
              nt = !0;
              break;
            case b:
              return (nt = T._init), Ft(nt(T._payload), V, Q, X, W);
          }
      }
    if (nt)
      return (
        (W = W(T)),
        (nt = X === "" ? "." + Gt(T, 0) : X),
        st(W)
          ? ((Q = ""),
            nt != null && (Q = nt.replace(te, "$&/") + "/"),
            Ft(W, V, Q, "", function (va) {
              return va;
            }))
          : W != null &&
            (wt(W) &&
              (W = I(
                W,
                Q +
                  (W.key == null || (T && T.key === W.key)
                    ? ""
                    : ("" + W.key).replace(te, "$&/") + "/") +
                  nt
              )),
            V.push(W)),
        1
      );
    nt = 0;
    var pe = X === "" ? "." : X + ":";
    if (st(T))
      for (var Mt = 0; Mt < T.length; Mt++)
        (X = T[Mt]), (ht = pe + Gt(X, Mt)), (nt += Ft(X, V, Q, ht, W));
    else if (((Mt = A(T)), typeof Mt == "function"))
      for (T = Mt.call(T), Mt = 0; !(X = T.next()).done; )
        (X = X.value), (ht = pe + Gt(X, Mt++)), (nt += Ft(X, V, Q, ht, W));
    else if (ht === "object") {
      if (typeof T.then == "function") return Ft(Xe(T), V, Q, X, W);
      throw (
        ((V = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : V) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return nt;
  }
  function C(T, V, Q) {
    if (T == null) return T;
    var X = [],
      W = 0;
    return (
      Ft(T, X, "", "", function (ht) {
        return V.call(Q, ht, W++);
      }),
      X
    );
  }
  function _(T) {
    if (T._status === -1) {
      var V = T._result;
      (V = V()),
        V.then(
          function (Q) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = Q));
          },
          function (Q) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = Q));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = V));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var V = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(V)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function gt() {}
  return (
    (it.Children = {
      map: C,
      forEach: function (T, V, Q) {
        C(
          T,
          function () {
            V.apply(this, arguments);
          },
          Q
        );
      },
      count: function (T) {
        var V = 0;
        return (
          C(T, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (T) {
        return (
          C(T, function (V) {
            return V;
          }) || []
        );
      },
      only: function (T) {
        if (!wt(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (it.Component = G),
    (it.Fragment = o),
    (it.Profiler = c),
    (it.PureComponent = F),
    (it.StrictMode = r),
    (it.Suspense = p),
    (it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (it.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return Y.H.useMemoCache(T);
      },
    }),
    (it.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (it.cloneElement = function (T, V, Q) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var X = U({}, T.props),
        W = T.key,
        ht = void 0;
      if (V != null)
        for (nt in (V.ref !== void 0 && (ht = void 0),
        V.key !== void 0 && (W = "" + V.key),
        V))
          !lt.call(V, nt) ||
            nt === "key" ||
            nt === "__self" ||
            nt === "__source" ||
            (nt === "ref" && V.ref === void 0) ||
            (X[nt] = V[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) X.children = Q;
      else if (1 < nt) {
        for (var pe = Array(nt), Mt = 0; Mt < nt; Mt++)
          pe[Mt] = arguments[Mt + 2];
        X.children = pe;
      }
      return dt(T.type, W, void 0, void 0, ht, X);
    }),
    (it.createContext = function (T) {
      return (
        (T = {
          $$typeof: f,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: d, _context: T }),
        T
      );
    }),
    (it.createElement = function (T, V, Q) {
      var X,
        W = {},
        ht = null;
      if (V != null)
        for (X in (V.key !== void 0 && (ht = "" + V.key), V))
          lt.call(V, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (W[X] = V[X]);
      var nt = arguments.length - 2;
      if (nt === 1) W.children = Q;
      else if (1 < nt) {
        for (var pe = Array(nt), Mt = 0; Mt < nt; Mt++)
          pe[Mt] = arguments[Mt + 2];
        W.children = pe;
      }
      if (T && T.defaultProps)
        for (X in ((nt = T.defaultProps), nt))
          W[X] === void 0 && (W[X] = nt[X]);
      return dt(T, ht, void 0, void 0, null, W);
    }),
    (it.createRef = function () {
      return { current: null };
    }),
    (it.forwardRef = function (T) {
      return { $$typeof: m, render: T };
    }),
    (it.isValidElement = wt),
    (it.lazy = function (T) {
      return { $$typeof: b, _payload: { _status: -1, _result: T }, _init: _ };
    }),
    (it.memo = function (T, V) {
      return { $$typeof: y, type: T, compare: V === void 0 ? null : V };
    }),
    (it.startTransition = function (T) {
      var V = Y.T,
        Q = {};
      Y.T = Q;
      try {
        var X = T(),
          W = Y.S;
        W !== null && W(Q, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(gt, P);
      } catch (ht) {
        P(ht);
      } finally {
        Y.T = V;
      }
    }),
    (it.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (it.use = function (T) {
      return Y.H.use(T);
    }),
    (it.useActionState = function (T, V, Q) {
      return Y.H.useActionState(T, V, Q);
    }),
    (it.useCallback = function (T, V) {
      return Y.H.useCallback(T, V);
    }),
    (it.useContext = function (T) {
      return Y.H.useContext(T);
    }),
    (it.useDebugValue = function () {}),
    (it.useDeferredValue = function (T, V) {
      return Y.H.useDeferredValue(T, V);
    }),
    (it.useEffect = function (T, V, Q) {
      var X = Y.H;
      if (typeof Q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return X.useEffect(T, V);
    }),
    (it.useId = function () {
      return Y.H.useId();
    }),
    (it.useImperativeHandle = function (T, V, Q) {
      return Y.H.useImperativeHandle(T, V, Q);
    }),
    (it.useInsertionEffect = function (T, V) {
      return Y.H.useInsertionEffect(T, V);
    }),
    (it.useLayoutEffect = function (T, V) {
      return Y.H.useLayoutEffect(T, V);
    }),
    (it.useMemo = function (T, V) {
      return Y.H.useMemo(T, V);
    }),
    (it.useOptimistic = function (T, V) {
      return Y.H.useOptimistic(T, V);
    }),
    (it.useReducer = function (T, V, Q) {
      return Y.H.useReducer(T, V, Q);
    }),
    (it.useRef = function (T) {
      return Y.H.useRef(T);
    }),
    (it.useState = function (T) {
      return Y.H.useState(T);
    }),
    (it.useSyncExternalStore = function (T, V, Q) {
      return Y.H.useSyncExternalStore(T, V, Q);
    }),
    (it.useTransition = function () {
      return Y.H.useTransition();
    }),
    (it.version = "19.1.0"),
    it
  );
}
var o0;
function Ac() {
  return o0 || ((o0 = 1), (Vu.exports = Yv())), Vu.exports;
}
var Z = Ac();
const qv = Bg(Z);
var Lu = { exports: {} },
  yl = {},
  Uu = { exports: {} },
  _u = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0;
function Gv() {
  return (
    r0 ||
      ((r0 = 1),
      (function (n) {
        function l(C, _) {
          var P = C.length;
          C.push(_);
          t: for (; 0 < P; ) {
            var gt = (P - 1) >>> 1,
              T = C[gt];
            if (0 < c(T, _)) (C[gt] = _), (C[P] = T), (P = gt);
            else break t;
          }
        }
        function o(C) {
          return C.length === 0 ? null : C[0];
        }
        function r(C) {
          if (C.length === 0) return null;
          var _ = C[0],
            P = C.pop();
          if (P !== _) {
            C[0] = P;
            t: for (var gt = 0, T = C.length, V = T >>> 1; gt < V; ) {
              var Q = 2 * (gt + 1) - 1,
                X = C[Q],
                W = Q + 1,
                ht = C[W];
              if (0 > c(X, P))
                W < T && 0 > c(ht, X)
                  ? ((C[gt] = ht), (C[W] = P), (gt = W))
                  : ((C[gt] = X), (C[Q] = P), (gt = Q));
              else if (W < T && 0 > c(ht, P))
                (C[gt] = ht), (C[W] = P), (gt = W);
              else break t;
            }
          }
          return _;
        }
        function c(C, _) {
          var P = C.sortIndex - _.sortIndex;
          return P !== 0 ? P : C.id - _.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            m = f.now();
          n.unstable_now = function () {
            return f.now() - m;
          };
        }
        var p = [],
          y = [],
          b = 1,
          S = null,
          A = 3,
          O = !1,
          U = !1,
          q = !1,
          G = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        function st(C) {
          for (var _ = o(y); _ !== null; ) {
            if (_.callback === null) r(y);
            else if (_.startTime <= C)
              r(y), (_.sortIndex = _.expirationTime), l(p, _);
            else break;
            _ = o(y);
          }
        }
        function Y(C) {
          if (((q = !1), st(C), !U))
            if (o(p) !== null) (U = !0), lt || ((lt = !0), Gt());
            else {
              var _ = o(y);
              _ !== null && Ft(Y, _.startTime - C);
            }
        }
        var lt = !1,
          dt = -1,
          I = 5,
          wt = -1;
        function qt() {
          return G ? !0 : !(n.unstable_now() - wt < I);
        }
        function te() {
          if (((G = !1), lt)) {
            var C = n.unstable_now();
            wt = C;
            var _ = !0;
            try {
              t: {
                (U = !1), q && ((q = !1), F(dt), (dt = -1)), (O = !0);
                var P = A;
                try {
                  e: {
                    for (
                      st(C), S = o(p);
                      S !== null && !(S.expirationTime > C && qt());

                    ) {
                      var gt = S.callback;
                      if (typeof gt == "function") {
                        (S.callback = null), (A = S.priorityLevel);
                        var T = gt(S.expirationTime <= C);
                        if (((C = n.unstable_now()), typeof T == "function")) {
                          (S.callback = T), st(C), (_ = !0);
                          break e;
                        }
                        S === o(p) && r(p), st(C);
                      } else r(p);
                      S = o(p);
                    }
                    if (S !== null) _ = !0;
                    else {
                      var V = o(y);
                      V !== null && Ft(Y, V.startTime - C), (_ = !1);
                    }
                  }
                  break t;
                } finally {
                  (S = null), (A = P), (O = !1);
                }
                _ = void 0;
              }
            } finally {
              _ ? Gt() : (lt = !1);
            }
          }
        }
        var Gt;
        if (typeof H == "function")
          Gt = function () {
            H(te);
          };
        else if (typeof MessageChannel < "u") {
          var ea = new MessageChannel(),
            Xe = ea.port2;
          (ea.port1.onmessage = te),
            (Gt = function () {
              Xe.postMessage(null);
            });
        } else
          Gt = function () {
            k(te, 0);
          };
        function Ft(C, _) {
          dt = k(function () {
            C(n.unstable_now());
          }, _);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (n.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (I = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return A;
          }),
          (n.unstable_next = function (C) {
            switch (A) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = A;
            }
            var P = A;
            A = _;
            try {
              return C();
            } finally {
              A = P;
            }
          }),
          (n.unstable_requestPaint = function () {
            G = !0;
          }),
          (n.unstable_runWithPriority = function (C, _) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var P = A;
            A = C;
            try {
              return _();
            } finally {
              A = P;
            }
          }),
          (n.unstable_scheduleCallback = function (C, _, P) {
            var gt = n.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? gt + P : gt))
                : (P = gt),
              C)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = P + T),
              (C = {
                id: b++,
                callback: _,
                priorityLevel: C,
                startTime: P,
                expirationTime: T,
                sortIndex: -1,
              }),
              P > gt
                ? ((C.sortIndex = P),
                  l(y, C),
                  o(p) === null &&
                    C === o(y) &&
                    (q ? (F(dt), (dt = -1)) : (q = !0), Ft(Y, P - gt)))
                : ((C.sortIndex = T),
                  l(p, C),
                  U || O || ((U = !0), lt || ((lt = !0), Gt()))),
              C
            );
          }),
          (n.unstable_shouldYield = qt),
          (n.unstable_wrapCallback = function (C) {
            var _ = A;
            return function () {
              var P = A;
              A = _;
              try {
                return C.apply(this, arguments);
              } finally {
                A = P;
              }
            };
          });
      })(_u)),
    _u
  );
}
var u0;
function kv() {
  return u0 || ((u0 = 1), (Uu.exports = Gv())), Uu.exports;
}
var Hu = { exports: {} },
  ne = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c0;
function Xv() {
  if (c0) return ne;
  c0 = 1;
  var n = Ac();
  function l(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(p, y, b) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: p,
      containerInfo: y,
      implementation: b,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, y) {
    if (p === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ne.createPortal = function (p, y) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(l(299));
      return d(p, y, null, b);
    }),
    (ne.flushSync = function (p) {
      var y = f.T,
        b = r.p;
      try {
        if (((f.T = null), (r.p = 2), p)) return p();
      } finally {
        (f.T = y), (r.p = b), r.d.f();
      }
    }),
    (ne.preconnect = function (p, y) {
      typeof p == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        r.d.C(p, y));
    }),
    (ne.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p);
    }),
    (ne.preinit = function (p, y) {
      if (typeof p == "string" && y && typeof y.as == "string") {
        var b = y.as,
          S = m(b, y.crossOrigin),
          A = typeof y.integrity == "string" ? y.integrity : void 0,
          O = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        b === "style"
          ? r.d.S(p, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: O,
            })
          : b === "script" &&
            r.d.X(p, {
              crossOrigin: S,
              integrity: A,
              fetchPriority: O,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (ne.preinitModule = function (p, y) {
      if (typeof p == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var b = m(y.as, y.crossOrigin);
            r.d.M(p, {
              crossOrigin: b,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && r.d.M(p);
    }),
    (ne.preload = function (p, y) {
      if (
        typeof p == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var b = y.as,
          S = m(b, y.crossOrigin);
        r.d.L(p, b, {
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (ne.preloadModule = function (p, y) {
      if (typeof p == "string")
        if (y) {
          var b = m(y.as, y.crossOrigin);
          r.d.m(p, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else r.d.m(p);
    }),
    (ne.requestFormReset = function (p) {
      r.d.r(p);
    }),
    (ne.unstable_batchedUpdates = function (p, y) {
      return p(y);
    }),
    (ne.useFormState = function (p, y, b) {
      return f.H.useFormState(p, y, b);
    }),
    (ne.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (ne.version = "19.1.0"),
    ne
  );
}
var f0;
function Zv() {
  if (f0) return Hu.exports;
  f0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (l) {
        console.error(l);
      }
  }
  return n(), (Hu.exports = Xv()), Hu.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d0;
function Qv() {
  if (d0) return yl;
  d0 = 1;
  var n = kv(),
    l = Ac(),
    o = Zv();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var a = t, i = e; ; ) {
      var s = a.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((i = s.return), i !== null)) {
          a = i;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === a) return m(s), t;
          if (u === i) return m(s), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== i.return) (a = s), (i = u);
      else {
        for (var h = !1, v = s.child; v; ) {
          if (v === a) {
            (h = !0), (a = s), (i = u);
            break;
          }
          if (v === i) {
            (h = !0), (i = s), (a = u);
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = u.child; v; ) {
            if (v === a) {
              (h = !0), (a = u), (i = s);
              break;
            }
            if (v === i) {
              (h = !0), (i = u), (a = s);
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(r(189));
        }
      }
      if (a.alternate !== i) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : e;
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = y(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    A = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    G = Symbol.for("react.profiler"),
    k = Symbol.for("react.provider"),
    F = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    st = Symbol.for("react.forward_ref"),
    Y = Symbol.for("react.suspense"),
    lt = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    wt = Symbol.for("react.activity"),
    qt = Symbol.for("react.memo_cache_sentinel"),
    te = Symbol.iterator;
  function Gt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (te && t[te]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var ea = Symbol.for("react.client.reference");
  function Xe(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ea ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case U:
        return "Fragment";
      case G:
        return "Profiler";
      case q:
        return "StrictMode";
      case Y:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case wt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case O:
          return "Portal";
        case H:
          return (t.displayName || "Context") + ".Provider";
        case F:
          return (t._context.displayName || "Context") + ".Consumer";
        case st:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case dt:
          return (
            (e = t.displayName || null), e !== null ? e : Xe(t.type) || "Memo"
          );
        case I:
          (e = t._payload), (t = t._init);
          try {
            return Xe(t(e));
          } catch {}
      }
    return null;
  }
  var Ft = Array.isArray,
    C = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    gt = [],
    T = -1;
  function V(t) {
    return { current: t };
  }
  function Q(t) {
    0 > T || ((t.current = gt[T]), (gt[T] = null), T--);
  }
  function X(t, e) {
    T++, (gt[T] = t.current), (t.current = e);
  }
  var W = V(null),
    ht = V(null),
    nt = V(null),
    pe = V(null);
  function Mt(t, e) {
    switch ((X(nt, e), X(ht, t), X(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Cm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Cm(e)), (t = Rm(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Q(W), X(W, t);
  }
  function va() {
    Q(W), Q(ht), Q(nt);
  }
  function bo(t) {
    t.memoizedState !== null && X(pe, t);
    var e = W.current,
      a = Rm(e, t.type);
    e !== a && (X(ht, t), X(W, a));
  }
  function Ll(t) {
    ht.current === t && (Q(W), Q(ht)),
      pe.current === t && (Q(pe), (cl._currentValue = P));
  }
  var xo = Object.prototype.hasOwnProperty,
    So = n.unstable_scheduleCallback,
    To = n.unstable_cancelCallback,
    yp = n.unstable_shouldYield,
    pp = n.unstable_requestPaint,
    Ze = n.unstable_now,
    vp = n.unstable_getCurrentPriorityLevel,
    df = n.unstable_ImmediatePriority,
    hf = n.unstable_UserBlockingPriority,
    Ul = n.unstable_NormalPriority,
    bp = n.unstable_LowPriority,
    mf = n.unstable_IdlePriority,
    xp = n.log,
    Sp = n.unstable_setDisableYieldValue,
    vi = null,
    ve = null;
  function ba(t) {
    if (
      (typeof xp == "function" && Sp(t),
      ve && typeof ve.setStrictMode == "function")
    )
      try {
        ve.setStrictMode(vi, t);
      } catch {}
  }
  var be = Math.clz32 ? Math.clz32 : Ap,
    Tp = Math.log,
    Ep = Math.LN2;
  function Ap(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Tp(t) / Ep) | 0)) | 0;
  }
  var _l = 256,
    Hl = 4194304;
  function Pa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Yl(t, e, a) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      h = t.pingedLanes;
    t = t.warmLanes;
    var v = i & 134217727;
    return (
      v !== 0
        ? ((i = v & ~u),
          i !== 0
            ? (s = Pa(i))
            : ((h &= v),
              h !== 0
                ? (s = Pa(h))
                : a || ((a = v & ~t), a !== 0 && (s = Pa(a)))))
        : ((v = i & ~u),
          v !== 0
            ? (s = Pa(v))
            : h !== 0
            ? (s = Pa(h))
            : a || ((a = i & ~t), a !== 0 && (s = Pa(a)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          (e & u) === 0 &&
          ((u = s & -s),
          (a = e & -e),
          u >= a || (u === 32 && (a & 4194048) !== 0))
        ? e
        : s
    );
  }
  function bi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function jp(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gf() {
    var t = _l;
    return (_l <<= 1), (_l & 4194048) === 0 && (_l = 256), t;
  }
  function yf() {
    var t = Hl;
    return (Hl <<= 1), (Hl & 62914560) === 0 && (Hl = 4194304), t;
  }
  function Eo(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function xi(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function wp(t, e, a, i, s, u) {
    var h = t.pendingLanes;
    (t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      x = t.expirationTimes,
      M = t.hiddenUpdates;
    for (a = h & ~a; 0 < a; ) {
      var z = 31 - be(a),
        B = 1 << z;
      (v[z] = 0), (x[z] = -1);
      var N = M[z];
      if (N !== null)
        for (M[z] = null, z = 0; z < N.length; z++) {
          var D = N[z];
          D !== null && (D.lane &= -536870913);
        }
      a &= ~B;
    }
    i !== 0 && pf(t, i, 0),
      u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e));
  }
  function pf(t, e, a) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - be(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (a & 4194090));
  }
  function vf(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var i = 31 - be(a),
        s = 1 << i;
      (s & e) | (t[i] & e) && (t[i] |= e), (a &= ~s);
    }
  }
  function Ao(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function jo(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function bf() {
    var t = _.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : $m(t.type));
  }
  function Mp(t, e) {
    var a = _.p;
    try {
      return (_.p = t), e();
    } finally {
      _.p = a;
    }
  }
  var xa = Math.random().toString(36).slice(2),
    ee = "__reactFiber$" + xa,
    ue = "__reactProps$" + xa,
    Sn = "__reactContainer$" + xa,
    wo = "__reactEvents$" + xa,
    Np = "__reactListeners$" + xa,
    Dp = "__reactHandles$" + xa,
    xf = "__reactResources$" + xa,
    Si = "__reactMarker$" + xa;
  function Mo(t) {
    delete t[ee], delete t[ue], delete t[wo], delete t[Np], delete t[Dp];
  }
  function Tn(t) {
    var e = t[ee];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[Sn] || a[ee])) {
        if (
          ((a = e.alternate),
          e.child !== null || (a !== null && a.child !== null))
        )
          for (t = Um(t); t !== null; ) {
            if ((a = t[ee])) return a;
            t = Um(t);
          }
        return e;
      }
      (t = a), (a = t.parentNode);
    }
    return null;
  }
  function En(t) {
    if ((t = t[ee] || t[Sn])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ti(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function An(t) {
    var e = t[xf];
    return (
      e ||
        (e = t[xf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Zt(t) {
    t[Si] = !0;
  }
  var Sf = new Set(),
    Tf = {};
  function Ja(t, e) {
    jn(t, e), jn(t + "Capture", e);
  }
  function jn(t, e) {
    for (Tf[t] = e, t = 0; t < e.length; t++) Sf.add(e[t]);
  }
  var Op = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ef = {},
    Af = {};
  function zp(t) {
    return xo.call(Af, t)
      ? !0
      : xo.call(Ef, t)
      ? !1
      : Op.test(t)
      ? (Af[t] = !0)
      : ((Ef[t] = !0), !1);
  }
  function ql(t, e, a) {
    if (zp(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function Gl(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function aa(t, e, a, i) {
    if (i === null) t.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + i);
    }
  }
  var No, jf;
  function wn(t) {
    if (No === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        (No = (e && e[1]) || ""),
          (jf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      No +
      t +
      jf
    );
  }
  var Do = !1;
  function Oo(t, e) {
    if (!t || Do) return "";
    Do = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var B = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(B.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (D) {
                  var N = D;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (D) {
                  N = D;
                }
                t.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                N = D;
              }
              (B = t()) &&
                typeof B.catch == "function" &&
                B.catch(function () {});
            }
          } catch (D) {
            if (D && N && typeof D.stack == "string") return [D.stack, N.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        h = u[0],
        v = u[1];
      if (h && v) {
        var x = h.split(`
`),
          M = v.split(`
`);
        for (
          s = i = 0;
          i < x.length && !x[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < M.length && !M[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === x.length || s === M.length)
          for (
            i = x.length - 1, s = M.length - 1;
            1 <= i && 0 <= s && x[i] !== M[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (x[i] !== M[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || x[i] !== M[s])) {
                  var z =
                    `
` + x[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (Do = !1), (Error.prepareStackTrace = a);
    }
    return (a = t ? t.displayName || t.name : "") ? wn(a) : "";
  }
  function Cp(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return wn(t.type);
      case 16:
        return wn("Lazy");
      case 13:
        return wn("Suspense");
      case 19:
        return wn("SuspenseList");
      case 0:
      case 15:
        return Oo(t.type, !1);
      case 11:
        return Oo(t.type.render, !1);
      case 1:
        return Oo(t.type, !0);
      case 31:
        return wn("Activity");
      default:
        return "";
    }
  }
  function wf(t) {
    try {
      var e = "";
      do (e += Cp(t)), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function Me(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Mf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Rp(t) {
    var e = Mf(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      i = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (h) {
            (i = "" + h), u.call(this, h);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (h) {
            i = "" + h;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function kl(t) {
    t._valueTracker || (t._valueTracker = Rp(t));
  }
  function Nf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      i = "";
    return (
      t && (i = Mf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function Xl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Bp = /[\n"\\]/g;
  function Ne(t) {
    return t.replace(Bp, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function zo(t, e, a, i, s, u, h, v) {
    (t.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.type = h)
        : t.removeAttribute("type"),
      e != null
        ? h === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Me(e))
          : t.value !== "" + Me(e) && (t.value = "" + Me(e))
        : (h !== "submit" && h !== "reset") || t.removeAttribute("value"),
      e != null
        ? Co(t, h, Me(e))
        : a != null
        ? Co(t, h, Me(a))
        : i != null && t.removeAttribute("value"),
      s == null && u != null && (t.defaultChecked = !!u),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Me(v))
        : t.removeAttribute("name");
  }
  function Df(t, e, a, i, s, u, h, v) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) return;
      (a = a != null ? "" + Me(a) : ""),
        (e = e != null ? "" + Me(e) : a),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = v ? t.checked : !!i),
      (t.defaultChecked = !!i),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.name = h);
  }
  function Co(t, e, a) {
    (e === "number" && Xl(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function Mn(t, e, a, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < a.length; s++) e["$" + a[s]] = !0;
      for (a = 0; a < t.length; a++)
        (s = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== s && (t[a].selected = s),
          s && i && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + Me(a), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === a) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Of(t, e, a) {
    if (
      e != null &&
      ((e = "" + Me(e)), e !== t.value && (t.value = e), a == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Me(a) : "";
  }
  function zf(t, e, a, i) {
    if (e == null) {
      if (i != null) {
        if (a != null) throw Error(r(92));
        if (Ft(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        a = i;
      }
      a == null && (a = ""), (e = a);
    }
    (a = Me(e)),
      (t.defaultValue = a),
      (i = t.textContent),
      i === a && i !== "" && i !== null && (t.value = i);
  }
  function Nn(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Vp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cf(t, e, a) {
    var i = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, a)
      : typeof a != "number" || a === 0 || Vp.has(e)
      ? e === "float"
        ? (t.cssFloat = a)
        : (t[e] = ("" + a).trim())
      : (t[e] = a + "px");
  }
  function Rf(t, e, a) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), a != null)) {
      for (var i in a)
        !a.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in e)
        (i = e[s]), e.hasOwnProperty(s) && a[s] !== i && Cf(t, s, i);
    } else for (var u in e) e.hasOwnProperty(u) && Cf(t, u, e[u]);
  }
  function Ro(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Lp = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Up =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zl(t) {
    return Up.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Bo = null;
  function Vo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Dn = null,
    On = null;
  function Bf(t) {
    var e = En(t);
    if (e && (t = e.stateNode)) {
      var a = t[ue] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (zo(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ne("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < a.length;
              e++
            ) {
              var i = a[e];
              if (i !== t && i.form === t.form) {
                var s = i[ue] || null;
                if (!s) throw Error(r(90));
                zo(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              (i = a[e]), i.form === t.form && Nf(i);
          }
          break t;
        case "textarea":
          Of(t, a.value, a.defaultValue);
          break t;
        case "select":
          (e = a.value), e != null && Mn(t, !!a.multiple, e, !1);
      }
    }
  }
  var Lo = !1;
  function Vf(t, e, a) {
    if (Lo) return t(e, a);
    Lo = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Lo = !1),
        (Dn !== null || On !== null) &&
          (Os(), Dn && ((e = Dn), (t = On), (On = Dn = null), Bf(e), t)))
      )
        for (e = 0; e < t.length; e++) Bf(t[e]);
    }
  }
  function Ei(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var i = a[ue] || null;
    if (i === null) return null;
    a = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, e, typeof a));
    return a;
  }
  var na = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Uo = !1;
  if (na)
    try {
      var Ai = {};
      Object.defineProperty(Ai, "passive", {
        get: function () {
          Uo = !0;
        },
      }),
        window.addEventListener("test", Ai, Ai),
        window.removeEventListener("test", Ai, Ai);
    } catch {
      Uo = !1;
    }
  var Sa = null,
    _o = null,
    Ql = null;
  function Lf() {
    if (Ql) return Ql;
    var t,
      e = _o,
      a = e.length,
      i,
      s = "value" in Sa ? Sa.value : Sa.textContent,
      u = s.length;
    for (t = 0; t < a && e[t] === s[t]; t++);
    var h = a - t;
    for (i = 1; i <= h && e[a - i] === s[u - i]; i++);
    return (Ql = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Kl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Pl() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function ce(t) {
    function e(a, i, s, u, h) {
      (this._reactName = a),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = h),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((a = t[v]), (this[v] = a ? a(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Pl
          : Uf),
        (this.isPropagationStopped = Uf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Pl));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Pl));
        },
        persist: function () {},
        isPersistent: Pl,
      }),
      e
    );
  }
  var Fa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Jl = ce(Fa),
    ji = b({}, Fa, { view: 0, detail: 0 }),
    _p = ce(ji),
    Ho,
    Yo,
    wi,
    Fl = b({}, ji, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Go,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== wi &&
              (wi && t.type === "mousemove"
                ? ((Ho = t.screenX - wi.screenX), (Yo = t.screenY - wi.screenY))
                : (Yo = Ho = 0),
              (wi = t)),
            Ho);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Yo;
      },
    }),
    _f = ce(Fl),
    Hp = b({}, Fl, { dataTransfer: 0 }),
    Yp = ce(Hp),
    qp = b({}, ji, { relatedTarget: 0 }),
    qo = ce(qp),
    Gp = b({}, Fa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kp = ce(Gp),
    Xp = b({}, Fa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Zp = ce(Xp),
    Qp = b({}, Fa, { data: 0 }),
    Hf = ce(Qp),
    Kp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Pp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Fp(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Jp[t])
      ? !!e[t]
      : !1;
  }
  function Go() {
    return Fp;
  }
  var Wp = b({}, ji, {
      key: function (t) {
        if (t.key) {
          var e = Kp[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Kl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Pp[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Go,
      charCode: function (t) {
        return t.type === "keypress" ? Kl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Kl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    $p = ce(Wp),
    Ip = b({}, Fl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Yf = ce(Ip),
    t1 = b({}, ji, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Go,
    }),
    e1 = ce(t1),
    a1 = b({}, Fa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n1 = ce(a1),
    i1 = b({}, Fl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    l1 = ce(i1),
    s1 = b({}, Fa, { newState: 0, oldState: 0 }),
    o1 = ce(s1),
    r1 = [9, 13, 27, 32],
    ko = na && "CompositionEvent" in window,
    Mi = null;
  na && "documentMode" in document && (Mi = document.documentMode);
  var u1 = na && "TextEvent" in window && !Mi,
    qf = na && (!ko || (Mi && 8 < Mi && 11 >= Mi)),
    Gf = " ",
    kf = !1;
  function Xf(t, e) {
    switch (t) {
      case "keyup":
        return r1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var zn = !1;
  function c1(t, e) {
    switch (t) {
      case "compositionend":
        return Zf(e);
      case "keypress":
        return e.which !== 32 ? null : ((kf = !0), Gf);
      case "textInput":
        return (t = e.data), t === Gf && kf ? null : t;
      default:
        return null;
    }
  }
  function f1(t, e) {
    if (zn)
      return t === "compositionend" || (!ko && Xf(t, e))
        ? ((t = Lf()), (Ql = _o = Sa = null), (zn = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return qf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var d1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!d1[t.type] : e === "textarea";
  }
  function Kf(t, e, a, i) {
    Dn ? (On ? On.push(i) : (On = [i])) : (Dn = i),
      (e = Ls(e, "onChange")),
      0 < e.length &&
        ((a = new Jl("onChange", "change", null, a, i)),
        t.push({ event: a, listeners: e }));
  }
  var Ni = null,
    Di = null;
  function h1(t) {
    Mm(t, 0);
  }
  function Wl(t) {
    var e = Ti(t);
    if (Nf(e)) return t;
  }
  function Pf(t, e) {
    if (t === "change") return e;
  }
  var Jf = !1;
  if (na) {
    var Xo;
    if (na) {
      var Zo = "oninput" in document;
      if (!Zo) {
        var Ff = document.createElement("div");
        Ff.setAttribute("oninput", "return;"),
          (Zo = typeof Ff.oninput == "function");
      }
      Xo = Zo;
    } else Xo = !1;
    Jf = Xo && (!document.documentMode || 9 < document.documentMode);
  }
  function Wf() {
    Ni && (Ni.detachEvent("onpropertychange", $f), (Di = Ni = null));
  }
  function $f(t) {
    if (t.propertyName === "value" && Wl(Di)) {
      var e = [];
      Kf(e, Di, t, Vo(t)), Vf(h1, e);
    }
  }
  function m1(t, e, a) {
    t === "focusin"
      ? (Wf(), (Ni = e), (Di = a), Ni.attachEvent("onpropertychange", $f))
      : t === "focusout" && Wf();
  }
  function g1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wl(Di);
  }
  function y1(t, e) {
    if (t === "click") return Wl(e);
  }
  function p1(t, e) {
    if (t === "input" || t === "change") return Wl(e);
  }
  function v1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var xe = typeof Object.is == "function" ? Object.is : v1;
  function Oi(t, e) {
    if (xe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var a = Object.keys(t),
      i = Object.keys(e);
    if (a.length !== i.length) return !1;
    for (i = 0; i < a.length; i++) {
      var s = a[i];
      if (!xo.call(e, s) || !xe(t[s], e[s])) return !1;
    }
    return !0;
  }
  function If(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function td(t, e) {
    var a = If(t);
    t = 0;
    for (var i; a; ) {
      if (a.nodeType === 3) {
        if (((i = t + a.textContent.length), t <= e && i >= e))
          return { node: a, offset: e - t };
        t = i;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = If(a);
    }
  }
  function ed(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? ed(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function ad(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Xl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Xl(t.document);
    }
    return e;
  }
  function Qo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var b1 = na && "documentMode" in document && 11 >= document.documentMode,
    Cn = null,
    Ko = null,
    zi = null,
    Po = !1;
  function nd(t, e, a) {
    var i =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Po ||
      Cn == null ||
      Cn !== Xl(i) ||
      ((i = Cn),
      "selectionStart" in i && Qo(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (zi && Oi(zi, i)) ||
        ((zi = i),
        (i = Ls(Ko, "onSelect")),
        0 < i.length &&
          ((e = new Jl("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: i }),
          (e.target = Cn))));
  }
  function Wa(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var Rn = {
      animationend: Wa("Animation", "AnimationEnd"),
      animationiteration: Wa("Animation", "AnimationIteration"),
      animationstart: Wa("Animation", "AnimationStart"),
      transitionrun: Wa("Transition", "TransitionRun"),
      transitionstart: Wa("Transition", "TransitionStart"),
      transitioncancel: Wa("Transition", "TransitionCancel"),
      transitionend: Wa("Transition", "TransitionEnd"),
    },
    Jo = {},
    id = {};
  na &&
    ((id = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Rn.animationend.animation,
      delete Rn.animationiteration.animation,
      delete Rn.animationstart.animation),
    "TransitionEvent" in window || delete Rn.transitionend.transition);
  function $a(t) {
    if (Jo[t]) return Jo[t];
    if (!Rn[t]) return t;
    var e = Rn[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in id) return (Jo[t] = e[a]);
    return t;
  }
  var ld = $a("animationend"),
    sd = $a("animationiteration"),
    od = $a("animationstart"),
    x1 = $a("transitionrun"),
    S1 = $a("transitionstart"),
    T1 = $a("transitioncancel"),
    rd = $a("transitionend"),
    ud = new Map(),
    Fo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Fo.push("scrollEnd");
  function _e(t, e) {
    ud.set(t, e), Ja(e, [t]);
  }
  var cd = new WeakMap();
  function De(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = cd.get(t);
      return a !== void 0
        ? a
        : ((e = { value: t, source: e, stack: wf(e) }), cd.set(t, e), e);
    }
    return { value: t, source: e, stack: wf(e) };
  }
  var Oe = [],
    Bn = 0,
    Wo = 0;
  function $l() {
    for (var t = Bn, e = (Wo = Bn = 0); e < t; ) {
      var a = Oe[e];
      Oe[e++] = null;
      var i = Oe[e];
      Oe[e++] = null;
      var s = Oe[e];
      Oe[e++] = null;
      var u = Oe[e];
      if (((Oe[e++] = null), i !== null && s !== null)) {
        var h = i.pending;
        h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)),
          (i.pending = s);
      }
      u !== 0 && fd(a, s, u);
    }
  }
  function Il(t, e, a, i) {
    (Oe[Bn++] = t),
      (Oe[Bn++] = e),
      (Oe[Bn++] = a),
      (Oe[Bn++] = i),
      (Wo |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function $o(t, e, a, i) {
    return Il(t, e, a, i), ts(t);
  }
  function Vn(t, e) {
    return Il(t, null, null, e), ts(t);
  }
  function fd(t, e, a) {
    t.lanes |= a;
    var i = t.alternate;
    i !== null && (i.lanes |= a);
    for (var s = !1, u = t.return; u !== null; )
      (u.childLanes |= a),
        (i = u.alternate),
        i !== null && (i.childLanes |= a),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - be(a)),
          (t = u.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = a | 536870912)),
        u)
      : null;
  }
  function ts(t) {
    if (50 < al) throw ((al = 0), (iu = null), Error(r(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ln = {};
  function E1(t, e, a, i) {
    (this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Se(t, e, a, i) {
    return new E1(t, e, a, i);
  }
  function Io(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function ia(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Se(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function dd(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function es(t, e, a, i, s, u) {
    var h = 0;
    if (((i = t), typeof t == "function")) Io(t) && (h = 1);
    else if (typeof t == "string")
      h = jv(t, a, W.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case wt:
          return (t = Se(31, a, e, s)), (t.elementType = wt), (t.lanes = u), t;
        case U:
          return Ia(a.children, s, u, e);
        case q:
          (h = 8), (s |= 24);
          break;
        case G:
          return (
            (t = Se(12, a, e, s | 2)), (t.elementType = G), (t.lanes = u), t
          );
        case Y:
          return (t = Se(13, a, e, s)), (t.elementType = Y), (t.lanes = u), t;
        case lt:
          return (t = Se(19, a, e, s)), (t.elementType = lt), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case k:
              case H:
                h = 10;
                break t;
              case F:
                h = 9;
                break t;
              case st:
                h = 11;
                break t;
              case dt:
                h = 14;
                break t;
              case I:
                (h = 16), (i = null);
                break t;
            }
          (h = 29),
            (a = Error(r(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = Se(h, a, e, s)), (e.elementType = t), (e.type = i), (e.lanes = u), e
    );
  }
  function Ia(t, e, a, i) {
    return (t = Se(7, t, i, e)), (t.lanes = a), t;
  }
  function tr(t, e, a) {
    return (t = Se(6, t, null, e)), (t.lanes = a), t;
  }
  function er(t, e, a) {
    return (
      (e = Se(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Un = [],
    _n = 0,
    as = null,
    ns = 0,
    ze = [],
    Ce = 0,
    tn = null,
    la = 1,
    sa = "";
  function en(t, e) {
    (Un[_n++] = ns), (Un[_n++] = as), (as = t), (ns = e);
  }
  function hd(t, e, a) {
    (ze[Ce++] = la), (ze[Ce++] = sa), (ze[Ce++] = tn), (tn = t);
    var i = la;
    t = sa;
    var s = 32 - be(i) - 1;
    (i &= ~(1 << s)), (a += 1);
    var u = 32 - be(e) + s;
    if (30 < u) {
      var h = s - (s % 5);
      (u = (i & ((1 << h) - 1)).toString(32)),
        (i >>= h),
        (s -= h),
        (la = (1 << (32 - be(e) + s)) | (a << s) | i),
        (sa = u + t);
    } else (la = (1 << u) | (a << s) | i), (sa = t);
  }
  function ar(t) {
    t.return !== null && (en(t, 1), hd(t, 1, 0));
  }
  function nr(t) {
    for (; t === as; )
      (as = Un[--_n]), (Un[_n] = null), (ns = Un[--_n]), (Un[_n] = null);
    for (; t === tn; )
      (tn = ze[--Ce]),
        (ze[Ce] = null),
        (sa = ze[--Ce]),
        (ze[Ce] = null),
        (la = ze[--Ce]),
        (ze[Ce] = null);
  }
  var oe = null,
    Ct = null,
    yt = !1,
    an = null,
    Qe = !1,
    ir = Error(r(519));
  function nn(t) {
    var e = Error(r(418, ""));
    throw (Bi(De(e, t)), ir);
  }
  function md(t) {
    var e = t.stateNode,
      a = t.type,
      i = t.memoizedProps;
    switch (((e[ee] = t), (e[ue] = i), a)) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < il.length; a++) ct(il[a], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e),
          Df(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          kl(e);
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), zf(e, i.value, i.defaultValue, i.children), kl(e);
    }
    (a = i.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      i.suppressHydrationWarning === !0 ||
      zm(e.textContent, a)
        ? (i.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          i.onScroll != null && ct("scroll", e),
          i.onScrollEnd != null && ct("scrollend", e),
          i.onClick != null && (e.onclick = Us),
          (e = !0))
        : (e = !1),
      e || nn(t);
  }
  function gd(t) {
    for (oe = t.return; oe; )
      switch (oe.tag) {
        case 5:
        case 13:
          Qe = !1;
          return;
        case 27:
        case 3:
          Qe = !0;
          return;
        default:
          oe = oe.return;
      }
  }
  function Ci(t) {
    if (t !== oe) return !1;
    if (!yt) return gd(t), (yt = !0), !1;
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || xu(t.type, t.memoizedProps))),
        (a = !a)),
      a && Ct && nn(t),
      gd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (e === 0) {
                Ct = Ye(t.nextSibling);
                break t;
              }
              e--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || e++;
          t = t.nextSibling;
        }
        Ct = null;
      }
    } else
      e === 27
        ? ((e = Ct), Ua(t.type) ? ((t = Au), (Au = null), (Ct = t)) : (Ct = e))
        : (Ct = oe ? Ye(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ri() {
    (Ct = oe = null), (yt = !1);
  }
  function yd() {
    var t = an;
    return (
      t !== null &&
        (he === null ? (he = t) : he.push.apply(he, t), (an = null)),
      t
    );
  }
  function Bi(t) {
    an === null ? (an = [t]) : an.push(t);
  }
  var lr = V(null),
    ln = null,
    oa = null;
  function Ta(t, e, a) {
    X(lr, e._currentValue), (e._currentValue = a);
  }
  function ra(t) {
    (t._currentValue = lr.current), Q(lr);
  }
  function sr(t, e, a) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function or(t, e, a, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var h = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var v = u;
          u = s;
          for (var x = 0; x < e.length; x++)
            if (v.context === e[x]) {
              (u.lanes |= a),
                (v = u.alternate),
                v !== null && (v.lanes |= a),
                sr(u.return, a, t),
                i || (h = null);
              break t;
            }
          u = v.next;
        }
      } else if (s.tag === 18) {
        if (((h = s.return), h === null)) throw Error(r(341));
        (h.lanes |= a),
          (u = h.alternate),
          u !== null && (u.lanes |= a),
          sr(h, a, t),
          (h = null);
      } else h = s.child;
      if (h !== null) h.return = s;
      else
        for (h = s; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (((s = h.sibling), s !== null)) {
            (s.return = h.return), (h = s);
            break;
          }
          h = h.return;
        }
      s = h;
    }
  }
  function Vi(t, e, a, i) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var h = s.alternate;
        if (h === null) throw Error(r(387));
        if (((h = h.memoizedProps), h !== null)) {
          var v = s.type;
          xe(s.pendingProps.value, h.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (s === pe.current) {
        if (((h = s.alternate), h === null)) throw Error(r(387));
        h.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(cl) : (t = [cl]));
      }
      s = s.return;
    }
    t !== null && or(e, t, a, i), (e.flags |= 262144);
  }
  function is(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!xe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function sn(t) {
    (ln = t),
      (oa = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ae(t) {
    return pd(ln, t);
  }
  function ls(t, e) {
    return ln === null && sn(t), pd(t, e);
  }
  function pd(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), oa === null)) {
      if (t === null) throw Error(r(308));
      (oa = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else oa = oa.next = e;
    return a;
  }
  var A1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                });
            };
          },
    j1 = n.unstable_scheduleCallback,
    w1 = n.unstable_NormalPriority,
    kt = {
      $$typeof: H,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function rr() {
    return { controller: new A1(), data: new Map(), refCount: 0 };
  }
  function Li(t) {
    t.refCount--,
      t.refCount === 0 &&
        j1(w1, function () {
          t.controller.abort();
        });
  }
  var Ui = null,
    ur = 0,
    Hn = 0,
    Yn = null;
  function M1(t, e) {
    if (Ui === null) {
      var a = (Ui = []);
      (ur = 0),
        (Hn = fu()),
        (Yn = {
          status: "pending",
          value: void 0,
          then: function (i) {
            a.push(i);
          },
        });
    }
    return ur++, e.then(vd, vd), e;
  }
  function vd() {
    if (--ur === 0 && Ui !== null) {
      Yn !== null && (Yn.status = "fulfilled");
      var t = Ui;
      (Ui = null), (Hn = 0), (Yn = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function N1(t, e) {
    var a = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          a.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var s = 0; s < a.length; s++) (0, a[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < a.length; s++)
            (0, a[s])(void 0);
        }
      ),
      i
    );
  }
  var bd = C.S;
  C.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      M1(t, e),
      bd !== null && bd(t, e);
  };
  var on = V(null);
  function cr() {
    var t = on.current;
    return t !== null ? t : jt.pooledCache;
  }
  function ss(t, e) {
    e === null ? X(on, on.current) : X(on, e.pool);
  }
  function xd() {
    var t = cr();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var _i = Error(r(460)),
    Sd = Error(r(474)),
    os = Error(r(542)),
    fr = { then: function () {} };
  function Td(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function rs() {}
  function Ed(t, e, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(e) : a !== e && (e.then(rs, rs), (e = a)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), jd(t), t);
      default:
        if (typeof e.status == "string") e.then(rs, rs);
        else {
          if (((t = jt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), jd(t), t);
        }
        throw ((Hi = e), _i);
    }
  }
  var Hi = null;
  function Ad() {
    if (Hi === null) throw Error(r(459));
    var t = Hi;
    return (Hi = null), t;
  }
  function jd(t) {
    if (t === _i || t === os) throw Error(r(483));
  }
  var Ea = !1;
  function dr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function hr(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Aa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ja(t, e, a) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (pt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = ts(t)),
        fd(t, null, a),
        e
      );
    }
    return Il(t, i, e, a), ts(t);
  }
  function Yi(t, e, a) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (a |= i), (e.lanes = a), vf(t, a);
    }
  }
  function mr(t, e) {
    var a = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), a === i)) {
      var s = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var h = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          u === null ? (s = u = h) : (u = u.next = h), (a = a.next);
        } while (a !== null);
        u === null ? (s = u = e) : (u = u.next = e);
      } else s = u = e;
      (a = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = a);
      return;
    }
    (t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e);
  }
  var gr = !1;
  function qi() {
    if (gr) {
      var t = Yn;
      if (t !== null) throw t;
    }
  }
  function Gi(t, e, a, i) {
    gr = !1;
    var s = t.updateQueue;
    Ea = !1;
    var u = s.firstBaseUpdate,
      h = s.lastBaseUpdate,
      v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var x = v,
        M = x.next;
      (x.next = null), h === null ? (u = M) : (h.next = M), (h = x);
      var z = t.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (v = z.lastBaseUpdate),
        v !== h &&
          (v === null ? (z.firstBaseUpdate = M) : (v.next = M),
          (z.lastBaseUpdate = x)));
    }
    if (u !== null) {
      var B = s.baseState;
      (h = 0), (z = M = x = null), (v = u);
      do {
        var N = v.lane & -536870913,
          D = N !== v.lane;
        if (D ? (ft & N) === N : (i & N) === N) {
          N !== 0 && N === Hn && (gr = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var et = t,
              $ = v;
            N = e;
            var Tt = a;
            switch ($.tag) {
              case 1:
                if (((et = $.payload), typeof et == "function")) {
                  B = et.call(Tt, B, N);
                  break t;
                }
                B = et;
                break t;
              case 3:
                et.flags = (et.flags & -65537) | 128;
              case 0:
                if (
                  ((et = $.payload),
                  (N = typeof et == "function" ? et.call(Tt, B, N) : et),
                  N == null)
                )
                  break t;
                B = b({}, B, N);
                break t;
              case 2:
                Ea = !0;
            }
          }
          (N = v.callback),
            N !== null &&
              ((t.flags |= 64),
              D && (t.flags |= 8192),
              (D = s.callbacks),
              D === null ? (s.callbacks = [N]) : D.push(N));
        } else
          (D = {
            lane: N,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            z === null ? ((M = z = D), (x = B)) : (z = z.next = D),
            (h |= N);
        if (((v = v.next), v === null)) {
          if (((v = s.shared.pending), v === null)) break;
          (D = v),
            (v = D.next),
            (D.next = null),
            (s.lastBaseUpdate = D),
            (s.shared.pending = null);
        }
      } while (!0);
      z === null && (x = B),
        (s.baseState = x),
        (s.firstBaseUpdate = M),
        (s.lastBaseUpdate = z),
        u === null && (s.shared.lanes = 0),
        (Ra |= h),
        (t.lanes = h),
        (t.memoizedState = B);
    }
  }
  function wd(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Md(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) wd(a[t], e);
  }
  var qn = V(null),
    us = V(0);
  function Nd(t, e) {
    (t = ga), X(us, t), X(qn, e), (ga = t | e.baseLanes);
  }
  function yr() {
    X(us, ga), X(qn, qn.current);
  }
  function pr() {
    (ga = us.current), Q(qn), Q(us);
  }
  var wa = 0,
    ot = null,
    xt = null,
    _t = null,
    cs = !1,
    Gn = !1,
    rn = !1,
    fs = 0,
    ki = 0,
    kn = null,
    D1 = 0;
  function Vt() {
    throw Error(r(321));
  }
  function vr(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!xe(t[a], e[a])) return !1;
    return !0;
  }
  function br(t, e, a, i, s, u) {
    return (
      (wa = u),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (C.H = t === null || t.memoizedState === null ? fh : dh),
      (rn = !1),
      (u = a(i, s)),
      (rn = !1),
      Gn && (u = Od(e, a, i, s)),
      Dd(t),
      u
    );
  }
  function Dd(t) {
    C.H = ps;
    var e = xt !== null && xt.next !== null;
    if (((wa = 0), (_t = xt = ot = null), (cs = !1), (ki = 0), (kn = null), e))
      throw Error(r(300));
    t === null ||
      Qt ||
      ((t = t.dependencies), t !== null && is(t) && (Qt = !0));
  }
  function Od(t, e, a, i) {
    ot = t;
    var s = 0;
    do {
      if ((Gn && (kn = null), (ki = 0), (Gn = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (_t = xt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (C.H = L1), (u = e(a, i));
    } while (Gn);
    return u;
  }
  function O1() {
    var t = C.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Xi(e) : e),
      (t = t.useState()[0]),
      (xt !== null ? xt.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function xr() {
    var t = fs !== 0;
    return (fs = 0), t;
  }
  function Sr(t, e, a) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a);
  }
  function Tr(t) {
    if (cs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      cs = !1;
    }
    (wa = 0), (_t = xt = ot = null), (Gn = !1), (ki = fs = 0), (kn = null);
  }
  function fe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return _t === null ? (ot.memoizedState = _t = t) : (_t = _t.next = t), _t;
  }
  function Ht() {
    if (xt === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = xt.next;
    var e = _t === null ? ot.memoizedState : _t.next;
    if (e !== null) (_t = e), (xt = t);
    else {
      if (t === null)
        throw ot.alternate === null ? Error(r(467)) : Error(r(310));
      (xt = t),
        (t = {
          memoizedState: xt.memoizedState,
          baseState: xt.baseState,
          baseQueue: xt.baseQueue,
          queue: xt.queue,
          next: null,
        }),
        _t === null ? (ot.memoizedState = _t = t) : (_t = _t.next = t);
    }
    return _t;
  }
  function Er() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xi(t) {
    var e = ki;
    return (
      (ki += 1),
      kn === null && (kn = []),
      (t = Ed(kn, t, e)),
      (e = ot),
      (_t === null ? e.memoizedState : _t.next) === null &&
        ((e = e.alternate),
        (C.H = e === null || e.memoizedState === null ? fh : dh)),
      t
    );
  }
  function ds(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Xi(t);
      if (t.$$typeof === H) return ae(t);
    }
    throw Error(r(438, String(t)));
  }
  function Ar(t) {
    var e = null,
      a = ot.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var i = ot.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = Er()), (ot.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), i = 0; i < t; i++) a[i] = qt;
    return e.index++, a;
  }
  function ua(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function hs(t) {
    var e = Ht();
    return jr(e, xt, t);
  }
  function jr(t, e, a) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = a;
    var s = t.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (s !== null) {
        var h = s.next;
        (s.next = u.next), (u.next = h);
      }
      (e.baseQueue = s = u), (i.pending = null);
    }
    if (((u = t.baseState), s === null)) t.memoizedState = u;
    else {
      e = s.next;
      var v = (h = null),
        x = null,
        M = e,
        z = !1;
      do {
        var B = M.lane & -536870913;
        if (B !== M.lane ? (ft & B) === B : (wa & B) === B) {
          var N = M.revertLane;
          if (N === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              B === Hn && (z = !0);
          else if ((wa & N) === N) {
            (M = M.next), N === Hn && (z = !0);
            continue;
          } else
            (B = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              x === null ? ((v = x = B), (h = u)) : (x = x.next = B),
              (ot.lanes |= N),
              (Ra |= N);
          (B = M.action),
            rn && a(u, B),
            (u = M.hasEagerState ? M.eagerState : a(u, B));
        } else
          (N = {
            lane: B,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            x === null ? ((v = x = N), (h = u)) : (x = x.next = N),
            (ot.lanes |= B),
            (Ra |= B);
        M = M.next;
      } while (M !== null && M !== e);
      if (
        (x === null ? (h = u) : (x.next = v),
        !xe(u, t.memoizedState) && ((Qt = !0), z && ((a = Yn), a !== null)))
      )
        throw a;
      (t.memoizedState = u),
        (t.baseState = h),
        (t.baseQueue = x),
        (i.lastRenderedState = u);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function wr(t) {
    var e = Ht(),
      a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var i = a.dispatch,
      s = a.pending,
      u = e.memoizedState;
    if (s !== null) {
      a.pending = null;
      var h = (s = s.next);
      do (u = t(u, h.action)), (h = h.next);
      while (h !== s);
      xe(u, e.memoizedState) || (Qt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (a.lastRenderedState = u);
    }
    return [u, i];
  }
  function zd(t, e, a) {
    var i = ot,
      s = Ht(),
      u = yt;
    if (u) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = e();
    var h = !xe((xt || s).memoizedState, a);
    h && ((s.memoizedState = a), (Qt = !0)), (s = s.queue);
    var v = Bd.bind(null, i, s, t);
    if (
      (Zi(2048, 8, v, [t]),
      s.getSnapshot !== e || h || (_t !== null && _t.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Xn(9, ms(), Rd.bind(null, i, s, a, e), null),
        jt === null)
      )
        throw Error(r(349));
      u || (wa & 124) !== 0 || Cd(i, e, a);
    }
    return a;
  }
  function Cd(t, e, a) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = ot.updateQueue),
      e === null
        ? ((e = Er()), (ot.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t));
  }
  function Rd(t, e, a, i) {
    (e.value = a), (e.getSnapshot = i), Vd(e) && Ld(t);
  }
  function Bd(t, e, a) {
    return a(function () {
      Vd(e) && Ld(t);
    });
  }
  function Vd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !xe(t, a);
    } catch {
      return !0;
    }
  }
  function Ld(t) {
    var e = Vn(t, 2);
    e !== null && we(e, t, 2);
  }
  function Mr(t) {
    var e = fe();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), rn)) {
        ba(!0);
        try {
          a();
        } finally {
          ba(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ua,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ud(t, e, a, i) {
    return (t.baseState = a), jr(t, xt, typeof i == "function" ? i : ua);
  }
  function z1(t, e, a, i, s) {
    if (ys(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          u.listeners.push(h);
        },
      };
      C.T !== null ? a(!0) : (u.isTransition = !1),
        i(u),
        (a = e.pending),
        a === null
          ? ((u.next = e.pending = u), _d(e, u))
          : ((u.next = a.next), (e.pending = a.next = u));
    }
  }
  function _d(t, e) {
    var a = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = C.T,
        h = {};
      C.T = h;
      try {
        var v = a(s, i),
          x = C.S;
        x !== null && x(h, v), Hd(t, e, v);
      } catch (M) {
        Nr(t, e, M);
      } finally {
        C.T = u;
      }
    } else
      try {
        (u = a(s, i)), Hd(t, e, u);
      } catch (M) {
        Nr(t, e, M);
      }
  }
  function Hd(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (i) {
            Yd(t, e, i);
          },
          function (i) {
            return Nr(t, e, i);
          }
        )
      : Yd(t, e, a);
  }
  function Yd(t, e, a) {
    (e.status = "fulfilled"),
      (e.value = a),
      qd(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next),
        a === e ? (t.pending = null) : ((a = a.next), (e.next = a), _d(t, a)));
  }
  function Nr(t, e, a) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = a), qd(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function qd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Gd(t, e) {
    return e;
  }
  function kd(t, e) {
    if (yt) {
      var a = jt.formState;
      if (a !== null) {
        t: {
          var i = ot;
          if (yt) {
            if (Ct) {
              e: {
                for (var s = Ct, u = Qe; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (((s = Ye(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (u = s.data), (s = u === "F!" || u === "F" ? s : null);
              }
              if (s) {
                (Ct = Ye(s.nextSibling)), (i = s.data === "F!");
                break t;
              }
            }
            nn(i);
          }
          i = !1;
        }
        i && (e = a[0]);
      }
    }
    return (
      (a = fe()),
      (a.memoizedState = a.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gd,
        lastRenderedState: e,
      }),
      (a.queue = i),
      (a = rh.bind(null, ot, i)),
      (i.dispatch = a),
      (i = Mr(!1)),
      (u = Rr.bind(null, ot, !1, i.queue)),
      (i = fe()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (a = z1.bind(null, ot, s, u, a)),
      (s.dispatch = a),
      (i.memoizedState = t),
      [e, a, !1]
    );
  }
  function Xd(t) {
    var e = Ht();
    return Zd(e, xt, t);
  }
  function Zd(t, e, a) {
    if (
      ((e = jr(t, e, Gd)[0]),
      (t = hs(ua)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Xi(e);
      } catch (h) {
        throw h === _i ? os : h;
      }
    else i = e;
    e = Ht();
    var s = e.queue,
      u = s.dispatch;
    return (
      a !== e.memoizedState &&
        ((ot.flags |= 2048), Xn(9, ms(), C1.bind(null, s, a), null)),
      [i, u, t]
    );
  }
  function C1(t, e) {
    t.action = e;
  }
  function Qd(t) {
    var e = Ht(),
      a = xt;
    if (a !== null) return Zd(e, a, t);
    Ht(), (e = e.memoizedState), (a = Ht());
    var i = a.queue.dispatch;
    return (a.memoizedState = t), [e, i, !1];
  }
  function Xn(t, e, a, i) {
    return (
      (t = { tag: t, create: a, deps: i, inst: e, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = Er()), (ot.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((i = a.next), (a.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function ms() {
    return { destroy: void 0, resource: void 0 };
  }
  function Kd() {
    return Ht().memoizedState;
  }
  function gs(t, e, a, i) {
    var s = fe();
    (i = i === void 0 ? null : i),
      (ot.flags |= t),
      (s.memoizedState = Xn(1 | e, ms(), a, i));
  }
  function Zi(t, e, a, i) {
    var s = Ht();
    i = i === void 0 ? null : i;
    var u = s.memoizedState.inst;
    xt !== null && i !== null && vr(i, xt.memoizedState.deps)
      ? (s.memoizedState = Xn(e, u, a, i))
      : ((ot.flags |= t), (s.memoizedState = Xn(1 | e, u, a, i)));
  }
  function Pd(t, e) {
    gs(8390656, 8, t, e);
  }
  function Jd(t, e) {
    Zi(2048, 8, t, e);
  }
  function Fd(t, e) {
    return Zi(4, 2, t, e);
  }
  function Wd(t, e) {
    return Zi(4, 4, t, e);
  }
  function $d(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Id(t, e, a) {
    (a = a != null ? a.concat([t]) : null), Zi(4, 4, $d.bind(null, e, t), a);
  }
  function Dr() {}
  function th(t, e) {
    var a = Ht();
    e = e === void 0 ? null : e;
    var i = a.memoizedState;
    return e !== null && vr(e, i[1]) ? i[0] : ((a.memoizedState = [t, e]), t);
  }
  function eh(t, e) {
    var a = Ht();
    e = e === void 0 ? null : e;
    var i = a.memoizedState;
    if (e !== null && vr(e, i[1])) return i[0];
    if (((i = t()), rn)) {
      ba(!0);
      try {
        t();
      } finally {
        ba(!1);
      }
    }
    return (a.memoizedState = [i, e]), i;
  }
  function Or(t, e, a) {
    return a === void 0 || (wa & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = im()), (ot.lanes |= t), (Ra |= t), a);
  }
  function ah(t, e, a, i) {
    return xe(a, e)
      ? a
      : qn.current !== null
      ? ((t = Or(t, a, i)), xe(t, e) || (Qt = !0), t)
      : (wa & 42) === 0
      ? ((Qt = !0), (t.memoizedState = a))
      : ((t = im()), (ot.lanes |= t), (Ra |= t), e);
  }
  function nh(t, e, a, i, s) {
    var u = _.p;
    _.p = u !== 0 && 8 > u ? u : 8;
    var h = C.T,
      v = {};
    (C.T = v), Rr(t, !1, e, a);
    try {
      var x = s(),
        M = C.S;
      if (
        (M !== null && M(v, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var z = N1(x, i);
        Qi(t, e, z, je(t));
      } else Qi(t, e, i, je(t));
    } catch (B) {
      Qi(t, e, { then: function () {}, status: "rejected", reason: B }, je());
    } finally {
      (_.p = u), (C.T = h);
    }
  }
  function R1() {}
  function zr(t, e, a, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = ih(t).queue;
    nh(
      t,
      s,
      e,
      P,
      a === null
        ? R1
        : function () {
            return lh(t), a(i);
          }
    );
  }
  function ih(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ua,
        lastRenderedState: P,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ua,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function lh(t) {
    var e = ih(t).next.queue;
    Qi(t, e, {}, je());
  }
  function Cr() {
    return ae(cl);
  }
  function sh() {
    return Ht().memoizedState;
  }
  function oh() {
    return Ht().memoizedState;
  }
  function B1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = je();
          t = Aa(a);
          var i = ja(e, t, a);
          i !== null && (we(i, e, a), Yi(i, e, a)),
            (e = { cache: rr() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function V1(t, e, a) {
    var i = je();
    (a = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ys(t)
        ? uh(e, a)
        : ((a = $o(t, e, a, i)), a !== null && (we(a, t, i), ch(a, e, i)));
  }
  function rh(t, e, a) {
    var i = je();
    Qi(t, e, a, i);
  }
  function Qi(t, e, a, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ys(t)) uh(e, s);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var h = e.lastRenderedState,
            v = u(h, a);
          if (((s.hasEagerState = !0), (s.eagerState = v), xe(v, h)))
            return Il(t, e, s, 0), jt === null && $l(), !1;
        } catch {
        } finally {
        }
      if (((a = $o(t, e, s, i)), a !== null))
        return we(a, t, i), ch(a, e, i), !0;
    }
    return !1;
  }
  function Rr(t, e, a, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: fu(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ys(t))
    ) {
      if (e) throw Error(r(479));
    } else (e = $o(t, a, i, 2)), e !== null && we(e, t, 2);
  }
  function ys(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function uh(t, e) {
    Gn = cs = !0;
    var a = t.pending;
    a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (t.pending = e);
  }
  function ch(t, e, a) {
    if ((a & 4194048) !== 0) {
      var i = e.lanes;
      (i &= t.pendingLanes), (a |= i), (e.lanes = a), vf(t, a);
    }
  }
  var ps = {
      readContext: ae,
      use: ds,
      useCallback: Vt,
      useContext: Vt,
      useEffect: Vt,
      useImperativeHandle: Vt,
      useLayoutEffect: Vt,
      useInsertionEffect: Vt,
      useMemo: Vt,
      useReducer: Vt,
      useRef: Vt,
      useState: Vt,
      useDebugValue: Vt,
      useDeferredValue: Vt,
      useTransition: Vt,
      useSyncExternalStore: Vt,
      useId: Vt,
      useHostTransitionStatus: Vt,
      useFormState: Vt,
      useActionState: Vt,
      useOptimistic: Vt,
      useMemoCache: Vt,
      useCacheRefresh: Vt,
    },
    fh = {
      readContext: ae,
      use: ds,
      useCallback: function (t, e) {
        return (fe().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ae,
      useEffect: Pd,
      useImperativeHandle: function (t, e, a) {
        (a = a != null ? a.concat([t]) : null),
          gs(4194308, 4, $d.bind(null, e, t), a);
      },
      useLayoutEffect: function (t, e) {
        return gs(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        gs(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = fe();
        e = e === void 0 ? null : e;
        var i = t();
        if (rn) {
          ba(!0);
          try {
            t();
          } finally {
            ba(!1);
          }
        }
        return (a.memoizedState = [i, e]), i;
      },
      useReducer: function (t, e, a) {
        var i = fe();
        if (a !== void 0) {
          var s = a(e);
          if (rn) {
            ba(!0);
            try {
              a(e);
            } finally {
              ba(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = V1.bind(null, ot, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = fe();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Mr(t);
        var e = t.queue,
          a = rh.bind(null, ot, e);
        return (e.dispatch = a), [t.memoizedState, a];
      },
      useDebugValue: Dr,
      useDeferredValue: function (t, e) {
        var a = fe();
        return Or(a, t, e);
      },
      useTransition: function () {
        var t = Mr(!1);
        return (
          (t = nh.bind(null, ot, t.queue, !0, !1)),
          (fe().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, a) {
        var i = ot,
          s = fe();
        if (yt) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = e()), jt === null)) throw Error(r(349));
          (ft & 124) !== 0 || Cd(i, e, a);
        }
        s.memoizedState = a;
        var u = { value: a, getSnapshot: e };
        return (
          (s.queue = u),
          Pd(Bd.bind(null, i, u, t), [t]),
          (i.flags |= 2048),
          Xn(9, ms(), Rd.bind(null, i, u, a, e), null),
          a
        );
      },
      useId: function () {
        var t = fe(),
          e = jt.identifierPrefix;
        if (yt) {
          var a = sa,
            i = la;
          (a = (i & ~(1 << (32 - be(i) - 1))).toString(32) + a),
            (e = "«" + e + "R" + a),
            (a = fs++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "»");
        } else (a = D1++), (e = "«" + e + "r" + a.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Cr,
      useFormState: kd,
      useActionState: kd,
      useOptimistic: function (t) {
        var e = fe();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = a),
          (e = Rr.bind(null, ot, !0, a)),
          (a.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Ar,
      useCacheRefresh: function () {
        return (fe().memoizedState = B1.bind(null, ot));
      },
    },
    dh = {
      readContext: ae,
      use: ds,
      useCallback: th,
      useContext: ae,
      useEffect: Jd,
      useImperativeHandle: Id,
      useInsertionEffect: Fd,
      useLayoutEffect: Wd,
      useMemo: eh,
      useReducer: hs,
      useRef: Kd,
      useState: function () {
        return hs(ua);
      },
      useDebugValue: Dr,
      useDeferredValue: function (t, e) {
        var a = Ht();
        return ah(a, xt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = hs(ua)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : Xi(t), e];
      },
      useSyncExternalStore: zd,
      useId: sh,
      useHostTransitionStatus: Cr,
      useFormState: Xd,
      useActionState: Xd,
      useOptimistic: function (t, e) {
        var a = Ht();
        return Ud(a, xt, t, e);
      },
      useMemoCache: Ar,
      useCacheRefresh: oh,
    },
    L1 = {
      readContext: ae,
      use: ds,
      useCallback: th,
      useContext: ae,
      useEffect: Jd,
      useImperativeHandle: Id,
      useInsertionEffect: Fd,
      useLayoutEffect: Wd,
      useMemo: eh,
      useReducer: wr,
      useRef: Kd,
      useState: function () {
        return wr(ua);
      },
      useDebugValue: Dr,
      useDeferredValue: function (t, e) {
        var a = Ht();
        return xt === null ? Or(a, t, e) : ah(a, xt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = wr(ua)[0],
          e = Ht().memoizedState;
        return [typeof t == "boolean" ? t : Xi(t), e];
      },
      useSyncExternalStore: zd,
      useId: sh,
      useHostTransitionStatus: Cr,
      useFormState: Qd,
      useActionState: Qd,
      useOptimistic: function (t, e) {
        var a = Ht();
        return xt !== null
          ? Ud(a, xt, t, e)
          : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: Ar,
      useCacheRefresh: oh,
    },
    Zn = null,
    Ki = 0;
  function vs(t) {
    var e = Ki;
    return (Ki += 1), Zn === null && (Zn = []), Ed(Zn, t, e);
  }
  function Pi(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function bs(t, e) {
    throw e.$$typeof === S
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function hh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function mh(t) {
    function e(j, E) {
      if (t) {
        var w = j.deletions;
        w === null ? ((j.deletions = [E]), (j.flags |= 16)) : w.push(E);
      }
    }
    function a(j, E) {
      if (!t) return null;
      for (; E !== null; ) e(j, E), (E = E.sibling);
      return null;
    }
    function i(j) {
      for (var E = new Map(); j !== null; )
        j.key !== null ? E.set(j.key, j) : E.set(j.index, j), (j = j.sibling);
      return E;
    }
    function s(j, E) {
      return (j = ia(j, E)), (j.index = 0), (j.sibling = null), j;
    }
    function u(j, E, w) {
      return (
        (j.index = w),
        t
          ? ((w = j.alternate),
            w !== null
              ? ((w = w.index), w < E ? ((j.flags |= 67108866), E) : w)
              : ((j.flags |= 67108866), E))
          : ((j.flags |= 1048576), E)
      );
    }
    function h(j) {
      return t && j.alternate === null && (j.flags |= 67108866), j;
    }
    function v(j, E, w, R) {
      return E === null || E.tag !== 6
        ? ((E = tr(w, j.mode, R)), (E.return = j), E)
        : ((E = s(E, w)), (E.return = j), E);
    }
    function x(j, E, w, R) {
      var K = w.type;
      return K === U
        ? z(j, E, w.props.children, R, w.key)
        : E !== null &&
          (E.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === I &&
              hh(K) === E.type))
        ? ((E = s(E, w.props)), Pi(E, w), (E.return = j), E)
        : ((E = es(w.type, w.key, w.props, null, j.mode, R)),
          Pi(E, w),
          (E.return = j),
          E);
    }
    function M(j, E, w, R) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== w.containerInfo ||
        E.stateNode.implementation !== w.implementation
        ? ((E = er(w, j.mode, R)), (E.return = j), E)
        : ((E = s(E, w.children || [])), (E.return = j), E);
    }
    function z(j, E, w, R, K) {
      return E === null || E.tag !== 7
        ? ((E = Ia(w, j.mode, R, K)), (E.return = j), E)
        : ((E = s(E, w)), (E.return = j), E);
    }
    function B(j, E, w) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (E = tr("" + E, j.mode, w)), (E.return = j), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case A:
            return (
              (w = es(E.type, E.key, E.props, null, j.mode, w)),
              Pi(w, E),
              (w.return = j),
              w
            );
          case O:
            return (E = er(E, j.mode, w)), (E.return = j), E;
          case I:
            var R = E._init;
            return (E = R(E._payload)), B(j, E, w);
        }
        if (Ft(E) || Gt(E))
          return (E = Ia(E, j.mode, w, null)), (E.return = j), E;
        if (typeof E.then == "function") return B(j, vs(E), w);
        if (E.$$typeof === H) return B(j, ls(j, E), w);
        bs(j, E);
      }
      return null;
    }
    function N(j, E, w, R) {
      var K = E !== null ? E.key : null;
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return K !== null ? null : v(j, E, "" + w, R);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case A:
            return w.key === K ? x(j, E, w, R) : null;
          case O:
            return w.key === K ? M(j, E, w, R) : null;
          case I:
            return (K = w._init), (w = K(w._payload)), N(j, E, w, R);
        }
        if (Ft(w) || Gt(w)) return K !== null ? null : z(j, E, w, R, null);
        if (typeof w.then == "function") return N(j, E, vs(w), R);
        if (w.$$typeof === H) return N(j, E, ls(j, w), R);
        bs(j, w);
      }
      return null;
    }
    function D(j, E, w, R, K) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return (j = j.get(w) || null), v(E, j, "" + R, K);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            return (
              (j = j.get(R.key === null ? w : R.key) || null), x(E, j, R, K)
            );
          case O:
            return (
              (j = j.get(R.key === null ? w : R.key) || null), M(E, j, R, K)
            );
          case I:
            var rt = R._init;
            return (R = rt(R._payload)), D(j, E, w, R, K);
        }
        if (Ft(R) || Gt(R)) return (j = j.get(w) || null), z(E, j, R, K, null);
        if (typeof R.then == "function") return D(j, E, w, vs(R), K);
        if (R.$$typeof === H) return D(j, E, w, ls(E, R), K);
        bs(E, R);
      }
      return null;
    }
    function et(j, E, w, R) {
      for (
        var K = null, rt = null, J = E, tt = (E = 0), Pt = null;
        J !== null && tt < w.length;
        tt++
      ) {
        J.index > tt ? ((Pt = J), (J = null)) : (Pt = J.sibling);
        var mt = N(j, J, w[tt], R);
        if (mt === null) {
          J === null && (J = Pt);
          break;
        }
        t && J && mt.alternate === null && e(j, J),
          (E = u(mt, E, tt)),
          rt === null ? (K = mt) : (rt.sibling = mt),
          (rt = mt),
          (J = Pt);
      }
      if (tt === w.length) return a(j, J), yt && en(j, tt), K;
      if (J === null) {
        for (; tt < w.length; tt++)
          (J = B(j, w[tt], R)),
            J !== null &&
              ((E = u(J, E, tt)),
              rt === null ? (K = J) : (rt.sibling = J),
              (rt = J));
        return yt && en(j, tt), K;
      }
      for (J = i(J); tt < w.length; tt++)
        (Pt = D(J, j, tt, w[tt], R)),
          Pt !== null &&
            (t &&
              Pt.alternate !== null &&
              J.delete(Pt.key === null ? tt : Pt.key),
            (E = u(Pt, E, tt)),
            rt === null ? (K = Pt) : (rt.sibling = Pt),
            (rt = Pt));
      return (
        t &&
          J.forEach(function (Ga) {
            return e(j, Ga);
          }),
        yt && en(j, tt),
        K
      );
    }
    function $(j, E, w, R) {
      if (w == null) throw Error(r(151));
      for (
        var K = null, rt = null, J = E, tt = (E = 0), Pt = null, mt = w.next();
        J !== null && !mt.done;
        tt++, mt = w.next()
      ) {
        J.index > tt ? ((Pt = J), (J = null)) : (Pt = J.sibling);
        var Ga = N(j, J, mt.value, R);
        if (Ga === null) {
          J === null && (J = Pt);
          break;
        }
        t && J && Ga.alternate === null && e(j, J),
          (E = u(Ga, E, tt)),
          rt === null ? (K = Ga) : (rt.sibling = Ga),
          (rt = Ga),
          (J = Pt);
      }
      if (mt.done) return a(j, J), yt && en(j, tt), K;
      if (J === null) {
        for (; !mt.done; tt++, mt = w.next())
          (mt = B(j, mt.value, R)),
            mt !== null &&
              ((E = u(mt, E, tt)),
              rt === null ? (K = mt) : (rt.sibling = mt),
              (rt = mt));
        return yt && en(j, tt), K;
      }
      for (J = i(J); !mt.done; tt++, mt = w.next())
        (mt = D(J, j, tt, mt.value, R)),
          mt !== null &&
            (t &&
              mt.alternate !== null &&
              J.delete(mt.key === null ? tt : mt.key),
            (E = u(mt, E, tt)),
            rt === null ? (K = mt) : (rt.sibling = mt),
            (rt = mt));
      return (
        t &&
          J.forEach(function (Uv) {
            return e(j, Uv);
          }),
        yt && en(j, tt),
        K
      );
    }
    function Tt(j, E, w, R) {
      if (
        (typeof w == "object" &&
          w !== null &&
          w.type === U &&
          w.key === null &&
          (w = w.props.children),
        typeof w == "object" && w !== null)
      ) {
        switch (w.$$typeof) {
          case A:
            t: {
              for (var K = w.key; E !== null; ) {
                if (E.key === K) {
                  if (((K = w.type), K === U)) {
                    if (E.tag === 7) {
                      a(j, E.sibling),
                        (R = s(E, w.props.children)),
                        (R.return = j),
                        (j = R);
                      break t;
                    }
                  } else if (
                    E.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === I &&
                      hh(K) === E.type)
                  ) {
                    a(j, E.sibling),
                      (R = s(E, w.props)),
                      Pi(R, w),
                      (R.return = j),
                      (j = R);
                    break t;
                  }
                  a(j, E);
                  break;
                } else e(j, E);
                E = E.sibling;
              }
              w.type === U
                ? ((R = Ia(w.props.children, j.mode, R, w.key)),
                  (R.return = j),
                  (j = R))
                : ((R = es(w.type, w.key, w.props, null, j.mode, R)),
                  Pi(R, w),
                  (R.return = j),
                  (j = R));
            }
            return h(j);
          case O:
            t: {
              for (K = w.key; E !== null; ) {
                if (E.key === K)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === w.containerInfo &&
                    E.stateNode.implementation === w.implementation
                  ) {
                    a(j, E.sibling),
                      (R = s(E, w.children || [])),
                      (R.return = j),
                      (j = R);
                    break t;
                  } else {
                    a(j, E);
                    break;
                  }
                else e(j, E);
                E = E.sibling;
              }
              (R = er(w, j.mode, R)), (R.return = j), (j = R);
            }
            return h(j);
          case I:
            return (K = w._init), (w = K(w._payload)), Tt(j, E, w, R);
        }
        if (Ft(w)) return et(j, E, w, R);
        if (Gt(w)) {
          if (((K = Gt(w)), typeof K != "function")) throw Error(r(150));
          return (w = K.call(w)), $(j, E, w, R);
        }
        if (typeof w.then == "function") return Tt(j, E, vs(w), R);
        if (w.$$typeof === H) return Tt(j, E, ls(j, w), R);
        bs(j, w);
      }
      return (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
        ? ((w = "" + w),
          E !== null && E.tag === 6
            ? (a(j, E.sibling), (R = s(E, w)), (R.return = j), (j = R))
            : (a(j, E), (R = tr(w, j.mode, R)), (R.return = j), (j = R)),
          h(j))
        : a(j, E);
    }
    return function (j, E, w, R) {
      try {
        Ki = 0;
        var K = Tt(j, E, w, R);
        return (Zn = null), K;
      } catch (J) {
        if (J === _i || J === os) throw J;
        var rt = Se(29, J, null, j.mode);
        return (rt.lanes = R), (rt.return = j), rt;
      } finally {
      }
    };
  }
  var Qn = mh(!0),
    gh = mh(!1),
    Re = V(null),
    Ke = null;
  function Ma(t) {
    var e = t.alternate;
    X(Xt, Xt.current & 1),
      X(Re, t),
      Ke === null &&
        (e === null || qn.current !== null || e.memoizedState !== null) &&
        (Ke = t);
  }
  function yh(t) {
    if (t.tag === 22) {
      if ((X(Xt, Xt.current), X(Re, t), Ke === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ke = t);
      }
    } else Na();
  }
  function Na() {
    X(Xt, Xt.current), X(Re, Re.current);
  }
  function ca(t) {
    Q(Re), Ke === t && (Ke = null), Q(Xt);
  }
  var Xt = V(0);
  function xs(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Eu(a))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Br(t, e, a, i) {
    (e = t.memoizedState),
      (a = a(i, e)),
      (a = a == null ? e : b({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Vr = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var i = je(),
        s = Aa(i);
      (s.payload = e),
        a != null && (s.callback = a),
        (e = ja(t, s, i)),
        e !== null && (we(e, t, i), Yi(e, t, i));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var i = je(),
        s = Aa(i);
      (s.tag = 1),
        (s.payload = e),
        a != null && (s.callback = a),
        (e = ja(t, s, i)),
        e !== null && (we(e, t, i), Yi(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = je(),
        i = Aa(a);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = ja(t, i, a)),
        e !== null && (we(e, t, a), Yi(e, t, a));
    },
  };
  function ph(t, e, a, i, s, u, h) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, u, h)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Oi(a, i) || !Oi(s, u)
        : !0
    );
  }
  function vh(t, e, a, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(a, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, i),
      e.state !== t && Vr.enqueueReplaceState(e, e.state, null);
  }
  function un(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var i in e) i !== "ref" && (a[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = b({}, a));
      for (var s in t) a[s] === void 0 && (a[s] = t[s]);
    }
    return a;
  }
  var Ss =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function bh(t) {
    Ss(t);
  }
  function xh(t) {
    console.error(t);
  }
  function Sh(t) {
    Ss(t);
  }
  function Ts(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Th(t, e, a) {
    try {
      var i = t.onCaughtError;
      i(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Lr(t, e, a) {
    return (
      (a = Aa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Ts(t, e);
      }),
      a
    );
  }
  function Eh(t) {
    return (t = Aa(t)), (t.tag = 3), t;
  }
  function Ah(t, e, a, i) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = i.value;
      (t.payload = function () {
        return s(u);
      }),
        (t.callback = function () {
          Th(e, a, i);
        });
    }
    var h = a.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (t.callback = function () {
        Th(e, a, i),
          typeof s != "function" &&
            (Ba === null ? (Ba = new Set([this])) : Ba.add(this));
        var v = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function U1(t, e, a, i, s) {
    if (
      ((a.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = a.alternate),
        e !== null && Vi(e, a, s, !0),
        (a = Re.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Ke === null ? su() : a.alternate === null && Rt === 0 && (Rt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = s),
              i === fr
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([i])) : e.add(i),
                  ru(t, i, s)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              i === fr
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue),
                      a === null ? (e.retryQueue = new Set([i])) : a.add(i)),
                  ru(t, i, s)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return ru(t, i, s), su(), !1;
    }
    if (yt)
      return (
        (e = Re.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== ir && ((t = Error(r(422), { cause: i })), Bi(De(t, a))))
          : (i !== ir && ((e = Error(r(423), { cause: i })), Bi(De(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = De(i, a)),
            (s = Lr(t.stateNode, i, s)),
            mr(t, s),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var u = Error(r(520), { cause: i });
    if (
      ((u = De(u, a)),
      el === null ? (el = [u]) : el.push(u),
      Rt !== 4 && (Rt = 2),
      e === null)
    )
      return !0;
    (i = De(i, a)), (a = e);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = s & -s),
            (a.lanes |= t),
            (t = Lr(a.stateNode, i, t)),
            mr(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Ba === null || !Ba.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (s &= -s),
              (a.lanes |= s),
              (s = Eh(s)),
              Ah(s, t, a, i),
              mr(a, s),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var jh = Error(r(461)),
    Qt = !1;
  function Wt(t, e, a, i) {
    e.child = t === null ? gh(e, null, a, i) : Qn(e, t.child, a, i);
  }
  function wh(t, e, a, i, s) {
    a = a.render;
    var u = e.ref;
    if ("ref" in i) {
      var h = {};
      for (var v in i) v !== "ref" && (h[v] = i[v]);
    } else h = i;
    return (
      sn(e),
      (i = br(t, e, a, h, u, s)),
      (v = xr()),
      t !== null && !Qt
        ? (Sr(t, e, s), fa(t, e, s))
        : (yt && v && ar(e), (e.flags |= 1), Wt(t, e, i, s), e.child)
    );
  }
  function Mh(t, e, a, i, s) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" &&
        !Io(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((e.tag = 15), (e.type = u), Nh(t, e, u, i, s))
        : ((t = es(a.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Xr(t, s))) {
      var h = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Oi), a(h, i) && t.ref === e.ref)
      )
        return fa(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = ia(u, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Nh(t, e, a, i, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Oi(u, i) && t.ref === e.ref)
        if (((Qt = !1), (e.pendingProps = i = u), Xr(t, s)))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else return (e.lanes = t.lanes), fa(t, e, s);
    }
    return Ur(t, e, a, i, s);
  }
  function Dh(t, e, a) {
    var i = e.pendingProps,
      s = i.children,
      u = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((i = u !== null ? u.baseLanes | a : a), t !== null)) {
          for (s = e.child = t.child, u = 0; s !== null; )
            (u = u | s.lanes | s.childLanes), (s = s.sibling);
          e.childLanes = u & ~i;
        } else (e.childLanes = 0), (e.child = null);
        return Oh(t, e, i, a);
      }
      if ((a & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ss(e, u !== null ? u.cachePool : null),
          u !== null ? Nd(e, u) : yr(),
          yh(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Oh(t, e, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null
        ? (ss(e, u.cachePool), Nd(e, u), Na(), (e.memoizedState = null))
        : (t !== null && ss(e, null), yr(), Na());
    return Wt(t, e, s, a), e.child;
  }
  function Oh(t, e, a, i) {
    var s = cr();
    return (
      (s = s === null ? null : { parent: kt._currentValue, pool: s }),
      (e.memoizedState = { baseLanes: a, cachePool: s }),
      t !== null && ss(e, null),
      yr(),
      yh(e),
      t !== null && Vi(t, e, i, !0),
      null
    );
  }
  function Es(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Ur(t, e, a, i, s) {
    return (
      sn(e),
      (a = br(t, e, a, i, void 0, s)),
      (i = xr()),
      t !== null && !Qt
        ? (Sr(t, e, s), fa(t, e, s))
        : (yt && i && ar(e), (e.flags |= 1), Wt(t, e, a, s), e.child)
    );
  }
  function zh(t, e, a, i, s, u) {
    return (
      sn(e),
      (e.updateQueue = null),
      (a = Od(e, i, a, s)),
      Dd(t),
      (i = xr()),
      t !== null && !Qt
        ? (Sr(t, e, u), fa(t, e, u))
        : (yt && i && ar(e), (e.flags |= 1), Wt(t, e, a, u), e.child)
    );
  }
  function Ch(t, e, a, i, s) {
    if ((sn(e), e.stateNode === null)) {
      var u = Ln,
        h = a.contextType;
      typeof h == "object" && h !== null && (u = ae(h)),
        (u = new a(i, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Vr),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = i),
        (u.state = e.memoizedState),
        (u.refs = {}),
        dr(e),
        (h = a.contextType),
        (u.context = typeof h == "object" && h !== null ? ae(h) : Ln),
        (u.state = e.memoizedState),
        (h = a.getDerivedStateFromProps),
        typeof h == "function" && (Br(e, a, h, i), (u.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((h = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          h !== u.state && Vr.enqueueReplaceState(u, u.state, null),
          Gi(e, i, u, s),
          qi(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      u = e.stateNode;
      var v = e.memoizedProps,
        x = un(a, v);
      u.props = x;
      var M = u.context,
        z = a.contextType;
      (h = Ln), typeof z == "object" && z !== null && (h = ae(z));
      var B = a.getDerivedStateFromProps;
      (z =
        typeof B == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        z ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((v || M !== h) && vh(e, u, i, h)),
        (Ea = !1);
      var N = e.memoizedState;
      (u.state = N),
        Gi(e, i, u, s),
        qi(),
        (M = e.memoizedState),
        v || N !== M || Ea
          ? (typeof B == "function" && (Br(e, a, B, i), (M = e.memoizedState)),
            (x = Ea || ph(e, a, x, i, N, M, h))
              ? (z ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = M)),
            (u.props = i),
            (u.state = M),
            (u.context = h),
            (i = x))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (u = e.stateNode),
        hr(t, e),
        (h = e.memoizedProps),
        (z = un(a, h)),
        (u.props = z),
        (B = e.pendingProps),
        (N = u.context),
        (M = a.contextType),
        (x = Ln),
        typeof M == "object" && M !== null && (x = ae(M)),
        (v = a.getDerivedStateFromProps),
        (M =
          typeof v == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((h !== B || N !== x) && vh(e, u, i, x)),
        (Ea = !1),
        (N = e.memoizedState),
        (u.state = N),
        Gi(e, i, u, s),
        qi();
      var D = e.memoizedState;
      h !== B ||
      N !== D ||
      Ea ||
      (t !== null && t.dependencies !== null && is(t.dependencies))
        ? (typeof v == "function" && (Br(e, a, v, i), (D = e.memoizedState)),
          (z =
            Ea ||
            ph(e, a, z, i, N, D, x) ||
            (t !== null && t.dependencies !== null && is(t.dependencies)))
            ? (M ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(i, D, x),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, D, x)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (h === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (h === t.memoizedProps && N === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = D)),
          (u.props = i),
          (u.state = D),
          (u.context = x),
          (i = z))
        : (typeof u.componentDidUpdate != "function" ||
            (h === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (h === t.memoizedProps && N === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      Es(t, e),
      (i = (e.flags & 128) !== 0),
      u || i
        ? ((u = e.stateNode),
          (a =
            i && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = Qn(e, t.child, null, s)),
              (e.child = Qn(e, null, a, s)))
            : Wt(t, e, a, s),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = fa(t, e, s)),
      t
    );
  }
  function Rh(t, e, a, i) {
    return Ri(), (e.flags |= 256), Wt(t, e, a, i), e.child;
  }
  var _r = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Hr(t) {
    return { baseLanes: t, cachePool: xd() };
  }
  function Yr(t, e, a) {
    return (t = t !== null ? t.childLanes & ~a : 0), e && (t |= Be), t;
  }
  function Bh(t, e, a) {
    var i = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      h;
    if (
      ((h = u) ||
        (h =
          t !== null && t.memoizedState === null ? !1 : (Xt.current & 2) !== 0),
      h && ((s = !0), (e.flags &= -129)),
      (h = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (yt) {
        if ((s ? Ma(e) : Na(), yt)) {
          var v = Ct,
            x;
          if ((x = v)) {
            t: {
              for (x = v, v = Qe; x.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break t;
                }
                if (((x = Ye(x.nextSibling)), x === null)) {
                  v = null;
                  break t;
                }
              }
              v = x;
            }
            v !== null
              ? ((e.memoizedState = {
                  dehydrated: v,
                  treeContext: tn !== null ? { id: la, overflow: sa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (x = Se(18, null, null, 0)),
                (x.stateNode = v),
                (x.return = e),
                (e.child = x),
                (oe = e),
                (Ct = null),
                (x = !0))
              : (x = !1);
          }
          x || nn(e);
        }
        if (
          ((v = e.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return Eu(v) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        ca(e);
      }
      return (
        (v = i.children),
        (i = i.fallback),
        s
          ? (Na(),
            (s = e.mode),
            (v = As({ mode: "hidden", children: v }, s)),
            (i = Ia(i, s, a, null)),
            (v.return = e),
            (i.return = e),
            (v.sibling = i),
            (e.child = v),
            (s = e.child),
            (s.memoizedState = Hr(a)),
            (s.childLanes = Yr(t, h, a)),
            (e.memoizedState = _r),
            i)
          : (Ma(e), qr(e, v))
      );
    }
    if (
      ((x = t.memoizedState), x !== null && ((v = x.dehydrated), v !== null))
    ) {
      if (u)
        e.flags & 256
          ? (Ma(e), (e.flags &= -257), (e = Gr(t, e, a)))
          : e.memoizedState !== null
          ? (Na(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Na(),
            (s = i.fallback),
            (v = e.mode),
            (i = As({ mode: "visible", children: i.children }, v)),
            (s = Ia(s, v, a, null)),
            (s.flags |= 2),
            (i.return = e),
            (s.return = e),
            (i.sibling = s),
            (e.child = i),
            Qn(e, t.child, null, a),
            (i = e.child),
            (i.memoizedState = Hr(a)),
            (i.childLanes = Yr(t, h, a)),
            (e.memoizedState = _r),
            (e = s));
      else if ((Ma(e), Eu(v))) {
        if (((h = v.nextSibling && v.nextSibling.dataset), h)) var M = h.dgst;
        (h = M),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = h),
          Bi({ value: i, source: null, stack: null }),
          (e = Gr(t, e, a));
      } else if (
        (Qt || Vi(t, e, a, !1), (h = (a & t.childLanes) !== 0), Qt || h)
      ) {
        if (
          ((h = jt),
          h !== null &&
            ((i = a & -a),
            (i = (i & 42) !== 0 ? 1 : Ao(i)),
            (i = (i & (h.suspendedLanes | a)) !== 0 ? 0 : i),
            i !== 0 && i !== x.retryLane))
        )
          throw ((x.retryLane = i), Vn(t, i), we(h, t, i), jh);
        v.data === "$?" || su(), (e = Gr(t, e, a));
      } else
        v.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = x.treeContext),
            (Ct = Ye(v.nextSibling)),
            (oe = e),
            (yt = !0),
            (an = null),
            (Qe = !1),
            t !== null &&
              ((ze[Ce++] = la),
              (ze[Ce++] = sa),
              (ze[Ce++] = tn),
              (la = t.id),
              (sa = t.overflow),
              (tn = e)),
            (e = qr(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Na(),
        (s = i.fallback),
        (v = e.mode),
        (x = t.child),
        (M = x.sibling),
        (i = ia(x, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = x.subtreeFlags & 65011712),
        M !== null ? (s = ia(M, s)) : ((s = Ia(s, v, a, null)), (s.flags |= 2)),
        (s.return = e),
        (i.return = e),
        (i.sibling = s),
        (e.child = i),
        (i = s),
        (s = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Hr(a))
          : ((x = v.cachePool),
            x !== null
              ? ((M = kt._currentValue),
                (x = x.parent !== M ? { parent: M, pool: M } : x))
              : (x = xd()),
            (v = { baseLanes: v.baseLanes | a, cachePool: x })),
        (s.memoizedState = v),
        (s.childLanes = Yr(t, h, a)),
        (e.memoizedState = _r),
        i)
      : (Ma(e),
        (a = t.child),
        (t = a.sibling),
        (a = ia(a, { mode: "visible", children: i.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((h = e.deletions),
          h === null ? ((e.deletions = [t]), (e.flags |= 16)) : h.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function qr(t, e) {
    return (
      (e = As({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function As(t, e) {
    return (
      (t = Se(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Gr(t, e, a) {
    return (
      Qn(e, t.child, null, a),
      (t = qr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Vh(t, e, a) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), sr(t.return, e, a);
  }
  function kr(t, e, a, i, s) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: a,
          tailMode: s,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = a),
        (u.tailMode = s));
  }
  function Lh(t, e, a) {
    var i = e.pendingProps,
      s = i.revealOrder,
      u = i.tail;
    if ((Wt(t, e, i.children, a), (i = Xt.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Vh(t, a, e);
          else if (t.tag === 19) Vh(t, a, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      i &= 1;
    }
    switch ((X(Xt, i), s)) {
      case "forwards":
        for (a = e.child, s = null; a !== null; )
          (t = a.alternate),
            t !== null && xs(t) === null && (s = a),
            (a = a.sibling);
        (a = s),
          a === null
            ? ((s = e.child), (e.child = null))
            : ((s = a.sibling), (a.sibling = null)),
          kr(e, !1, s, a, u);
        break;
      case "backwards":
        for (a = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && xs(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = a), (a = s), (s = t);
        }
        kr(e, !0, a, null, u);
        break;
      case "together":
        kr(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function fa(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Ra |= e.lanes),
      (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Vi(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, a = ia(t, t.pendingProps), e.child = a, a.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (a = a.sibling = ia(t, t.pendingProps)),
          (a.return = e);
      a.sibling = null;
    }
    return e.child;
  }
  function Xr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && is(t)));
  }
  function _1(t, e, a) {
    switch (e.tag) {
      case 3:
        Mt(e, e.stateNode.containerInfo),
          Ta(e, kt, t.memoizedState.cache),
          Ri();
        break;
      case 27:
      case 5:
        bo(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ta(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Ma(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
            ? Bh(t, e, a)
            : (Ma(e), (t = fa(t, e, a)), t !== null ? t.sibling : null);
        Ma(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (a & e.childLanes) !== 0),
          i || (Vi(t, e, a, !1), (i = (a & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Lh(t, e, a);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          X(Xt, Xt.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Dh(t, e, a);
      case 24:
        Ta(e, kt, t.memoizedState.cache);
    }
    return fa(t, e, a);
  }
  function Uh(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Qt = !0;
      else {
        if (!Xr(t, a) && (e.flags & 128) === 0) return (Qt = !1), _1(t, e, a);
        Qt = (t.flags & 131072) !== 0;
      }
    else (Qt = !1), yt && (e.flags & 1048576) !== 0 && hd(e, ns, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var i = e.elementType,
            s = i._init;
          if (((i = s(i._payload)), (e.type = i), typeof i == "function"))
            Io(i)
              ? ((t = un(i, t)), (e.tag = 1), (e = Ch(null, e, i, t, a)))
              : ((e.tag = 0), (e = Ur(null, e, i, t, a)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === st)) {
                (e.tag = 11), (e = wh(null, e, i, t, a));
                break t;
              } else if (s === dt) {
                (e.tag = 14), (e = Mh(null, e, i, t, a));
                break t;
              }
            }
            throw ((e = Xe(i) || i), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ur(t, e, e.type, e.pendingProps, a);
      case 1:
        return (i = e.type), (s = un(i, e.pendingProps)), Ch(t, e, i, s, a);
      case 3:
        t: {
          if ((Mt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          i = e.pendingProps;
          var u = e.memoizedState;
          (s = u.element), hr(t, e), Gi(e, i, null, a);
          var h = e.memoizedState;
          if (
            ((i = h.cache),
            Ta(e, kt, i),
            i !== u.cache && or(e, [kt], a, !0),
            qi(),
            (i = h.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: h.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Rh(t, e, i, a);
              break t;
            } else if (i !== s) {
              (s = De(Error(r(424)), e)), Bi(s), (e = Rh(t, e, i, a));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ct = Ye(t.firstChild),
                  oe = e,
                  yt = !0,
                  an = null,
                  Qe = !0,
                  a = gh(e, null, i, a),
                  e.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Ri(), i === s)) {
              e = fa(t, e, a);
              break t;
            }
            Wt(t, e, i, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Es(t, e),
          t === null
            ? (a = qm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : yt ||
                ((a = e.type),
                (t = e.pendingProps),
                (i = _s(nt.current).createElement(a)),
                (i[ee] = e),
                (i[ue] = t),
                It(i, a, t),
                Zt(i),
                (e.stateNode = i))
            : (e.memoizedState = qm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          bo(e),
          t === null &&
            yt &&
            ((i = e.stateNode = _m(e.type, e.pendingProps, nt.current)),
            (oe = e),
            (Qe = !0),
            (s = Ct),
            Ua(e.type) ? ((Au = s), (Ct = Ye(i.firstChild))) : (Ct = s)),
          Wt(t, e, e.pendingProps.children, a),
          Es(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            yt &&
            ((s = i = Ct) &&
              ((i = dv(i, e.type, e.pendingProps, Qe)),
              i !== null
                ? ((e.stateNode = i),
                  (oe = e),
                  (Ct = Ye(i.firstChild)),
                  (Qe = !1),
                  (s = !0))
                : (s = !1)),
            s || nn(e)),
          bo(e),
          (s = e.type),
          (u = e.pendingProps),
          (h = t !== null ? t.memoizedProps : null),
          (i = u.children),
          xu(s, u) ? (i = null) : h !== null && xu(s, h) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = br(t, e, O1, null, null, a)), (cl._currentValue = s)),
          Es(t, e),
          Wt(t, e, i, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            yt &&
            ((t = a = Ct) &&
              ((a = hv(a, e.pendingProps, Qe)),
              a !== null
                ? ((e.stateNode = a), (oe = e), (Ct = null), (t = !0))
                : (t = !1)),
            t || nn(e)),
          null
        );
      case 13:
        return Bh(t, e, a);
      case 4:
        return (
          Mt(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = Qn(e, null, i, a)) : Wt(t, e, i, a),
          e.child
        );
      case 11:
        return wh(t, e, e.type, e.pendingProps, a);
      case 7:
        return Wt(t, e, e.pendingProps, a), e.child;
      case 8:
        return Wt(t, e, e.pendingProps.children, a), e.child;
      case 12:
        return Wt(t, e, e.pendingProps.children, a), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          Ta(e, e.type, i.value),
          Wt(t, e, i.children, a),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          sn(e),
          (s = ae(s)),
          (i = i(s)),
          (e.flags |= 1),
          Wt(t, e, i, a),
          e.child
        );
      case 14:
        return Mh(t, e, e.type, e.pendingProps, a);
      case 15:
        return Nh(t, e, e.type, e.pendingProps, a);
      case 19:
        return Lh(t, e, a);
      case 31:
        return (
          (i = e.pendingProps),
          (a = e.mode),
          (i = { mode: i.mode, children: i.children }),
          t === null
            ? ((a = As(i, a)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a))
            : ((a = ia(t.child, i)),
              (a.ref = e.ref),
              (e.child = a),
              (a.return = e),
              (e = a)),
          e
        );
      case 22:
        return Dh(t, e, a);
      case 24:
        return (
          sn(e),
          (i = ae(kt)),
          t === null
            ? ((s = cr()),
              s === null &&
                ((s = jt),
                (u = rr()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= a),
                (s = u)),
              (e.memoizedState = { parent: i, cache: s }),
              dr(e),
              Ta(e, kt, s))
            : ((t.lanes & a) !== 0 && (hr(t, e), Gi(e, null, null, a), qi()),
              (s = t.memoizedState),
              (u = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Ta(e, kt, i))
                : ((i = u.cache),
                  Ta(e, kt, i),
                  i !== s.cache && or(e, [kt], a, !0))),
          Wt(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function da(t) {
    t.flags |= 4;
  }
  function _h(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Qm(e))) {
      if (
        ((e = Re.current),
        e !== null &&
          ((ft & 4194048) === ft
            ? Ke !== null
            : ((ft & 62914560) !== ft && (ft & 536870912) === 0) || e !== Ke))
      )
        throw ((Hi = fr), Sd);
      t.flags |= 8192;
    }
  }
  function js(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? yf() : 536870912), (t.lanes |= e), (Fn |= e));
  }
  function Ji(t, e) {
    if (!yt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), (e = e.sibling);
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var i = null; a !== null; )
            a.alternate !== null && (i = a), (a = a.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (a |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (a |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = a), e;
  }
  function H1(t, e, a) {
    var i = e.pendingProps;
    switch ((nr(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(e), null;
      case 1:
        return Ot(e), null;
      case 3:
        return (
          (a = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          ra(kt),
          va(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ci(e)
              ? da(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), yd())),
          Ot(e),
          null
        );
      case 26:
        return (
          (a = e.memoizedState),
          t === null
            ? (da(e),
              a !== null ? (Ot(e), _h(e, a)) : (Ot(e), (e.flags &= -16777217)))
            : a
            ? a !== t.memoizedState
              ? (da(e), Ot(e), _h(e, a))
              : (Ot(e), (e.flags &= -16777217))
            : (t.memoizedProps !== i && da(e), Ot(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Ll(e), (a = nt.current);
        var s = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== i && da(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Ot(e), null;
          }
          (t = W.current),
            Ci(e) ? md(e) : ((t = _m(s, i, a)), (e.stateNode = t), da(e));
        }
        return Ot(e), null;
      case 5:
        if ((Ll(e), (a = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && da(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(r(166));
            return Ot(e), null;
          }
          if (((t = W.current), Ci(e))) md(e);
          else {
            switch (((s = _s(nt.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(a, { is: i.is })
                        : s.createElement(a);
                }
            }
            (t[ee] = e), (t[ue] = i);
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e) break t;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            e.stateNode = t;
            t: switch ((It(t, a, i), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && da(e);
          }
        }
        return Ot(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && da(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = nt.current), Ci(e))) {
            if (
              ((t = e.stateNode),
              (a = e.memoizedProps),
              (i = null),
              (s = oe),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[ee] = e),
              (t = !!(
                t.nodeValue === a ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                zm(t.nodeValue, a)
              )),
              t || nn(e);
          } else (t = _s(t).createTextNode(i)), (t[ee] = e), (e.stateNode = t);
        }
        return Ot(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ci(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[ee] = e;
            } else
              Ri(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ot(e), (s = !1);
          } else
            (s = yd()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (ca(e), e) : (ca(e), null);
        }
        if ((ca(e), (e.flags & 128) !== 0)) return (e.lanes = a), e;
        if (
          ((a = i !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          (i = e.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool);
          var u = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (u = i.memoizedState.cachePool.pool),
            u !== s && (i.flags |= 2048);
        }
        return (
          a !== t && a && (e.child.flags |= 8192),
          js(e, e.updateQueue),
          Ot(e),
          null
        );
      case 4:
        return va(), t === null && gu(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return ra(e.type), Ot(e), null;
      case 19:
        if ((Q(Xt), (s = e.memoizedState), s === null)) return Ot(e), null;
        if (((i = (e.flags & 128) !== 0), (u = s.rendering), u === null))
          if (i) Ji(s, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = xs(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      Ji(s, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      js(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;

                  )
                    dd(a, t), (a = a.sibling);
                  return X(Xt, (Xt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Ze() > Ns &&
              ((e.flags |= 128), (i = !0), Ji(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = xs(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                js(e, t),
                Ji(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !u.alternate &&
                  !yt)
              )
                return Ot(e), null;
            } else
              2 * Ze() - s.renderingStartTime > Ns &&
                a !== 536870912 &&
                ((e.flags |= 128), (i = !0), Ji(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = s.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (s.last = u));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = Ze()),
            (e.sibling = null),
            (t = Xt.current),
            X(Xt, i ? (t & 1) | 2 : t & 1),
            e)
          : (Ot(e), null);
      case 22:
      case 23:
        return (
          ca(e),
          pr(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ot(e),
          (a = e.updateQueue),
          a !== null && js(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== a && (e.flags |= 2048),
          t !== null && Q(on),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          ra(kt),
          Ot(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Y1(t, e) {
    switch ((nr(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          ra(kt),
          va(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ll(e), null;
      case 13:
        if (
          (ca(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          Ri();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Q(Xt), null;
      case 4:
        return va(), null;
      case 10:
        return ra(e.type), null;
      case 22:
      case 23:
        return (
          ca(e),
          pr(),
          t !== null && Q(on),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return ra(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hh(t, e) {
    switch ((nr(e), e.tag)) {
      case 3:
        ra(kt), va();
        break;
      case 26:
      case 27:
      case 5:
        Ll(e);
        break;
      case 4:
        va();
        break;
      case 13:
        ca(e);
        break;
      case 19:
        Q(Xt);
        break;
      case 10:
        ra(e.type);
        break;
      case 22:
      case 23:
        ca(e), pr(), t !== null && Q(on);
        break;
      case 24:
        ra(kt);
    }
  }
  function Fi(t, e) {
    try {
      var a = e.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        a = s;
        do {
          if ((a.tag & t) === t) {
            i = void 0;
            var u = a.create,
              h = a.inst;
            (i = u()), (h.destroy = i);
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (v) {
      At(e, e.return, v);
    }
  }
  function Da(t, e, a) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & t) === t) {
            var h = i.inst,
              v = h.destroy;
            if (v !== void 0) {
              (h.destroy = void 0), (s = e);
              var x = a,
                M = v;
              try {
                M();
              } catch (z) {
                At(s, x, z);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (z) {
      At(e, e.return, z);
    }
  }
  function Yh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Md(e, a);
      } catch (i) {
        At(t, t.return, i);
      }
    }
  }
  function qh(t, e, a) {
    (a.props = un(t.type, t.memoizedProps)), (a.state = t.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (i) {
      At(t, e, i);
    }
  }
  function Wi(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(i)) : (a.current = i);
      }
    } catch (s) {
      At(t, e, s);
    }
  }
  function Pe(t, e) {
    var a = t.ref,
      i = t.refCleanup;
    if (a !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          At(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (s) {
          At(t, e, s);
        }
      else a.current = null;
  }
  function Gh(t) {
    var e = t.type,
      a = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && i.focus();
          break t;
        case "img":
          a.src ? (i.src = a.src) : a.srcSet && (i.srcset = a.srcSet);
      }
    } catch (s) {
      At(t, t.return, s);
    }
  }
  function Zr(t, e, a) {
    try {
      var i = t.stateNode;
      ov(i, t.type, a, e), (i[ue] = e);
    } catch (s) {
      At(t, t.return, s);
    }
  }
  function kh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Ua(t.type)) ||
      t.tag === 4
    );
  }
  function Qr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || kh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Ua(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Kr(t, e, a) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(t, e)
          : ((e =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = Us));
    else if (
      i !== 4 &&
      (i === 27 && Ua(t.type) && ((a = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Kr(t, e, a), t = t.sibling; t !== null; )
        Kr(t, e, a), (t = t.sibling);
  }
  function ws(t, e, a) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (
      i !== 4 &&
      (i === 27 && Ua(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (ws(t, e, a), t = t.sibling; t !== null; )
        ws(t, e, a), (t = t.sibling);
  }
  function Xh(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      It(e, i, a), (e[ee] = t), (e[ue] = a);
    } catch (u) {
      At(t, t.return, u);
    }
  }
  var ha = !1,
    Lt = !1,
    Pr = !1,
    Zh = typeof WeakSet == "function" ? WeakSet : Set,
    Kt = null;
  function q1(t, e) {
    if (((t = t.containerInfo), (vu = Xs), (t = ad(t)), Qo(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var s = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break t;
            }
            var h = 0,
              v = -1,
              x = -1,
              M = 0,
              z = 0,
              B = t,
              N = null;
            e: for (;;) {
              for (
                var D;
                B !== a || (s !== 0 && B.nodeType !== 3) || (v = h + s),
                  B !== u || (i !== 0 && B.nodeType !== 3) || (x = h + i),
                  B.nodeType === 3 && (h += B.nodeValue.length),
                  (D = B.firstChild) !== null;

              )
                (N = B), (B = D);
              for (;;) {
                if (B === t) break e;
                if (
                  (N === a && ++M === s && (v = h),
                  N === u && ++z === i && (x = h),
                  (D = B.nextSibling) !== null)
                )
                  break;
                (B = N), (N = B.parentNode);
              }
              B = D;
            }
            a = v === -1 || x === -1 ? null : { start: v, end: x };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      bu = { focusedElem: t, selectionRange: a }, Xs = !1, Kt = e;
      Kt !== null;

    )
      if (
        ((e = Kt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (Kt = t);
      else
        for (; Kt !== null; ) {
          switch (((e = Kt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (a = e),
                  (s = u.memoizedProps),
                  (u = u.memoizedState),
                  (i = a.stateNode);
                try {
                  var et = un(a.type, s, a.elementType === a.type);
                  (t = i.getSnapshotBeforeUpdate(et, u)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch ($) {
                  At(a, a.return, $);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Tu(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Kt = t);
            break;
          }
          Kt = e.return;
        }
  }
  function Qh(t, e, a) {
    var i = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Oa(t, a), i & 4 && Fi(5, a);
        break;
      case 1:
        if ((Oa(t, a), i & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (h) {
              At(a, a.return, h);
            }
          else {
            var s = un(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              At(a, a.return, h);
            }
          }
        i & 64 && Yh(a), i & 512 && Wi(a, a.return);
        break;
      case 3:
        if ((Oa(t, a), i & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Md(t, e);
          } catch (h) {
            At(a, a.return, h);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Xh(a);
      case 26:
      case 5:
        Oa(t, a), e === null && i & 4 && Gh(a), i & 512 && Wi(a, a.return);
        break;
      case 12:
        Oa(t, a);
        break;
      case 13:
        Oa(t, a),
          i & 4 && Jh(t, a),
          i & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = F1.bind(null, a)), mv(t, a))));
        break;
      case 22:
        if (((i = a.memoizedState !== null || ha), !i)) {
          (e = (e !== null && e.memoizedState !== null) || Lt), (s = ha);
          var u = Lt;
          (ha = i),
            (Lt = e) && !u ? za(t, a, (a.subtreeFlags & 8772) !== 0) : Oa(t, a),
            (ha = s),
            (Lt = u);
        }
        break;
      case 30:
        break;
      default:
        Oa(t, a);
    }
  }
  function Kh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Kh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Mo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Nt = null,
    de = !1;
  function ma(t, e, a) {
    for (a = a.child; a !== null; ) Ph(t, e, a), (a = a.sibling);
  }
  function Ph(t, e, a) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(vi, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Lt || Pe(a, e),
          ma(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Lt || Pe(a, e);
        var i = Nt,
          s = de;
        Ua(a.type) && ((Nt = a.stateNode), (de = !1)),
          ma(t, e, a),
          sl(a.stateNode),
          (Nt = i),
          (de = s);
        break;
      case 5:
        Lt || Pe(a, e);
      case 6:
        if (
          ((i = Nt),
          (s = de),
          (Nt = null),
          ma(t, e, a),
          (Nt = i),
          (de = s),
          Nt !== null)
        )
          if (de)
            try {
              (Nt.nodeType === 9
                ? Nt.body
                : Nt.nodeName === "HTML"
                ? Nt.ownerDocument.body
                : Nt
              ).removeChild(a.stateNode);
            } catch (u) {
              At(a, e, u);
            }
          else
            try {
              Nt.removeChild(a.stateNode);
            } catch (u) {
              At(a, e, u);
            }
        break;
      case 18:
        Nt !== null &&
          (de
            ? ((t = Nt),
              Lm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                a.stateNode
              ),
              ml(t))
            : Lm(Nt, a.stateNode));
        break;
      case 4:
        (i = Nt),
          (s = de),
          (Nt = a.stateNode.containerInfo),
          (de = !0),
          ma(t, e, a),
          (Nt = i),
          (de = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Lt || Da(2, a, e), Lt || Da(4, a, e), ma(t, e, a);
        break;
      case 1:
        Lt ||
          (Pe(a, e),
          (i = a.stateNode),
          typeof i.componentWillUnmount == "function" && qh(a, e, i)),
          ma(t, e, a);
        break;
      case 21:
        ma(t, e, a);
        break;
      case 22:
        (Lt = (i = Lt) || a.memoizedState !== null), ma(t, e, a), (Lt = i);
        break;
      default:
        ma(t, e, a);
    }
  }
  function Jh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ml(t);
      } catch (a) {
        At(e, e.return, a);
      }
  }
  function G1(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Zh()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Zh()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Jr(t, e) {
    var a = G1(t);
    e.forEach(function (i) {
      var s = W1.bind(null, t, i);
      a.has(i) || (a.add(i), i.then(s, s));
    });
  }
  function Te(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var s = a[i],
          u = t,
          h = e,
          v = h;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Ua(v.type)) {
                (Nt = v.stateNode), (de = !1);
                break t;
              }
              break;
            case 5:
              (Nt = v.stateNode), (de = !1);
              break t;
            case 3:
            case 4:
              (Nt = v.stateNode.containerInfo), (de = !0);
              break t;
          }
          v = v.return;
        }
        if (Nt === null) throw Error(r(160));
        Ph(u, h, s),
          (Nt = null),
          (de = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Fh(e, t), (e = e.sibling);
  }
  var He = null;
  function Fh(t, e) {
    var a = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Te(e, t),
          Ee(t),
          i & 4 && (Da(3, t, t.return), Fi(3, t), Da(5, t, t.return));
        break;
      case 1:
        Te(e, t),
          Ee(t),
          i & 512 && (Lt || a === null || Pe(a, a.return)),
          i & 64 &&
            ha &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? i : a.concat(i)))));
        break;
      case 26:
        var s = He;
        if (
          (Te(e, t),
          Ee(t),
          i & 512 && (Lt || a === null || Pe(a, a.return)),
          i & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((i = t.memoizedState), a === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (a = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (i) {
                    case "title":
                      (u = s.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Si] ||
                          u[ee] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = s.createElement(i)),
                          s.head.insertBefore(
                            u,
                            s.querySelector("head > title")
                          )),
                        It(u, i, a),
                        (u[ee] = t),
                        Zt(u),
                        (i = u);
                      break t;
                    case "link":
                      var h = Xm("link", "href", s).get(i + (a.href || ""));
                      if (h) {
                        for (var v = 0; v < h.length; v++)
                          if (
                            ((u = h[v]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      (u = s.createElement(i)),
                        It(u, i, a),
                        s.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (h = Xm("meta", "content", s).get(
                          i + (a.content || "")
                        ))
                      ) {
                        for (v = 0; v < h.length; v++)
                          if (
                            ((u = h[v]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      (u = s.createElement(i)),
                        It(u, i, a),
                        s.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  (u[ee] = t), Zt(u), (i = u);
                }
                t.stateNode = i;
              } else Zm(s, t.type, t.stateNode);
            else t.stateNode = km(s, i, t.memoizedProps);
          else
            u !== i
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                i === null
                  ? Zm(s, t.type, t.stateNode)
                  : km(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Zr(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Te(e, t),
          Ee(t),
          i & 512 && (Lt || a === null || Pe(a, a.return)),
          a !== null && i & 4 && Zr(t, t.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Te(e, t),
          Ee(t),
          i & 512 && (Lt || a === null || Pe(a, a.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Nn(s, "");
          } catch (D) {
            At(t, t.return, D);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Zr(t, s, a !== null ? a.memoizedProps : s)),
          i & 1024 && (Pr = !0);
        break;
      case 6:
        if ((Te(e, t), Ee(t), i & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (i = t.memoizedProps), (a = t.stateNode);
          try {
            a.nodeValue = i;
          } catch (D) {
            At(t, t.return, D);
          }
        }
        break;
      case 3:
        if (
          ((qs = null),
          (s = He),
          (He = Hs(e.containerInfo)),
          Te(e, t),
          (He = s),
          Ee(t),
          i & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ml(e.containerInfo);
          } catch (D) {
            At(t, t.return, D);
          }
        Pr && ((Pr = !1), Wh(t));
        break;
      case 4:
        (i = He),
          (He = Hs(t.stateNode.containerInfo)),
          Te(e, t),
          Ee(t),
          (He = i);
        break;
      case 12:
        Te(e, t), Ee(t);
        break;
      case 13:
        Te(e, t),
          Ee(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (eu = Ze()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Jr(t, i)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var x = a !== null && a.memoizedState !== null,
          M = ha,
          z = Lt;
        if (
          ((ha = M || s),
          (Lt = z || x),
          Te(e, t),
          (Lt = z),
          (ha = M),
          Ee(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (a === null || x || ha || Lt || cn(t)),
              a = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                x = a = e;
                try {
                  if (((u = x.stateNode), s))
                    (h = u.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none");
                  else {
                    v = x.stateNode;
                    var B = x.memoizedProps.style,
                      N =
                        B != null && B.hasOwnProperty("display")
                          ? B.display
                          : null;
                    v.style.display =
                      N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (D) {
                  At(x, x.return, D);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = s ? "" : x.memoizedProps;
                } catch (D) {
                  At(x, x.return, D);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), (e = e.return);
            }
            a === e && (a = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((a = i.retryQueue),
            a !== null && ((i.retryQueue = null), Jr(t, a))));
        break;
      case 19:
        Te(e, t),
          Ee(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), Jr(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Te(e, t), Ee(t);
    }
  }
  function Ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, i = t.return; i !== null; ) {
          if (kh(i)) {
            a = i;
            break;
          }
          i = i.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode,
              u = Qr(t);
            ws(t, u, s);
            break;
          case 5:
            var h = a.stateNode;
            a.flags & 32 && (Nn(h, ""), (a.flags &= -33));
            var v = Qr(t);
            ws(t, v, h);
            break;
          case 3:
          case 4:
            var x = a.stateNode.containerInfo,
              M = Qr(t);
            Kr(t, M, x);
            break;
          default:
            throw Error(r(161));
        }
      } catch (z) {
        At(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Wh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Wh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Oa(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Qh(t, e.alternate, e), (e = e.sibling);
  }
  function cn(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Da(4, e, e.return), cn(e);
          break;
        case 1:
          Pe(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && qh(e, e.return, a),
            cn(e);
          break;
        case 27:
          sl(e.stateNode);
        case 26:
        case 5:
          Pe(e, e.return), cn(e);
          break;
        case 22:
          e.memoizedState === null && cn(e);
          break;
        case 30:
          cn(e);
          break;
        default:
          cn(e);
      }
      t = t.sibling;
    }
  }
  function za(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        u = e,
        h = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          za(s, u, a), Fi(4, u);
          break;
        case 1:
          if (
            (za(s, u, a),
            (i = u),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (M) {
              At(i, i.return, M);
            }
          if (((i = u), (s = i.updateQueue), s !== null)) {
            var v = i.stateNode;
            try {
              var x = s.shared.hiddenCallbacks;
              if (x !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < x.length; s++)
                  wd(x[s], v);
            } catch (M) {
              At(i, i.return, M);
            }
          }
          a && h & 64 && Yh(u), Wi(u, u.return);
          break;
        case 27:
          Xh(u);
        case 26:
        case 5:
          za(s, u, a), a && i === null && h & 4 && Gh(u), Wi(u, u.return);
          break;
        case 12:
          za(s, u, a);
          break;
        case 13:
          za(s, u, a), a && h & 4 && Jh(s, u);
          break;
        case 22:
          u.memoizedState === null && za(s, u, a), Wi(u, u.return);
          break;
        case 30:
          break;
        default:
          za(s, u, a);
      }
      e = e.sibling;
    }
  }
  function Fr(t, e) {
    var a = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Li(a));
  }
  function Wr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Li(t));
  }
  function Je(t, e, a, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) $h(t, e, a, i), (e = e.sibling);
  }
  function $h(t, e, a, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Je(t, e, a, i), s & 2048 && Fi(9, e);
        break;
      case 1:
        Je(t, e, a, i);
        break;
      case 3:
        Je(t, e, a, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Li(t)));
        break;
      case 12:
        if (s & 2048) {
          Je(t, e, a, i), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              h = u.id,
              v = u.onPostCommit;
            typeof v == "function" &&
              v(
                h,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (x) {
            At(e, e.return, x);
          }
        } else Je(t, e, a, i);
        break;
      case 13:
        Je(t, e, a, i);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (h = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Je(t, e, a, i)
              : $i(t, e)
            : u._visibility & 2
            ? Je(t, e, a, i)
            : ((u._visibility |= 2),
              Kn(t, e, a, i, (e.subtreeFlags & 10256) !== 0)),
          s & 2048 && Fr(h, e);
        break;
      case 24:
        Je(t, e, a, i), s & 2048 && Wr(e.alternate, e);
        break;
      default:
        Je(t, e, a, i);
    }
  }
  function Kn(t, e, a, i, s) {
    for (s = s && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var u = t,
        h = e,
        v = a,
        x = i,
        M = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Kn(u, h, v, x, s), Fi(8, h);
          break;
        case 23:
          break;
        case 22:
          var z = h.stateNode;
          h.memoizedState !== null
            ? z._visibility & 2
              ? Kn(u, h, v, x, s)
              : $i(u, h)
            : ((z._visibility |= 2), Kn(u, h, v, x, s)),
            s && M & 2048 && Fr(h.alternate, h);
          break;
        case 24:
          Kn(u, h, v, x, s), s && M & 2048 && Wr(h.alternate, h);
          break;
        default:
          Kn(u, h, v, x, s);
      }
      e = e.sibling;
    }
  }
  function $i(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            $i(a, i), s & 2048 && Fr(i.alternate, i);
            break;
          case 24:
            $i(a, i), s & 2048 && Wr(i.alternate, i);
            break;
          default:
            $i(a, i);
        }
        e = e.sibling;
      }
  }
  var Ii = 8192;
  function Pn(t) {
    if (t.subtreeFlags & Ii)
      for (t = t.child; t !== null; ) Ih(t), (t = t.sibling);
  }
  function Ih(t) {
    switch (t.tag) {
      case 26:
        Pn(t),
          t.flags & Ii &&
            t.memoizedState !== null &&
            Mv(He, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Pn(t);
        break;
      case 3:
      case 4:
        var e = He;
        (He = Hs(t.stateNode.containerInfo)), Pn(t), (He = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Ii), (Ii = 16777216), Pn(t), (Ii = e))
            : Pn(t));
        break;
      default:
        Pn(t);
    }
  }
  function tm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function tl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var i = e[a];
          (Kt = i), am(i, t);
        }
      tm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) em(t), (t = t.sibling);
  }
  function em(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tl(t), t.flags & 2048 && Da(9, t, t.return);
        break;
      case 3:
        tl(t);
        break;
      case 12:
        tl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Ms(t))
          : tl(t);
        break;
      default:
        tl(t);
    }
  }
  function Ms(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var i = e[a];
          (Kt = i), am(i, t);
        }
      tm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Da(8, e, e.return), Ms(e);
          break;
        case 22:
          (a = e.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Ms(e));
          break;
        default:
          Ms(e);
      }
      t = t.sibling;
    }
  }
  function am(t, e) {
    for (; Kt !== null; ) {
      var a = Kt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Da(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var i = a.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Li(a.memoizedState.cache);
      }
      if (((i = a.child), i !== null)) (i.return = a), (Kt = i);
      else
        t: for (a = t; Kt !== null; ) {
          i = Kt;
          var s = i.sibling,
            u = i.return;
          if ((Kh(i), i === a)) {
            Kt = null;
            break t;
          }
          if (s !== null) {
            (s.return = u), (Kt = s);
            break t;
          }
          Kt = u;
        }
    }
  }
  var k1 = {
      getCacheForType: function (t) {
        var e = ae(kt),
          a = e.data.get(t);
        return a === void 0 && ((a = t()), e.data.set(t, a)), a;
      },
    },
    X1 = typeof WeakMap == "function" ? WeakMap : Map,
    pt = 0,
    jt = null,
    ut = null,
    ft = 0,
    vt = 0,
    Ae = null,
    Ca = !1,
    Jn = !1,
    $r = !1,
    ga = 0,
    Rt = 0,
    Ra = 0,
    fn = 0,
    Ir = 0,
    Be = 0,
    Fn = 0,
    el = null,
    he = null,
    tu = !1,
    eu = 0,
    Ns = 1 / 0,
    Ds = null,
    Ba = null,
    $t = 0,
    Va = null,
    Wn = null,
    $n = 0,
    au = 0,
    nu = null,
    nm = null,
    al = 0,
    iu = null;
  function je() {
    if ((pt & 2) !== 0 && ft !== 0) return ft & -ft;
    if (C.T !== null) {
      var t = Hn;
      return t !== 0 ? t : fu();
    }
    return bf();
  }
  function im() {
    Be === 0 && (Be = (ft & 536870912) === 0 || yt ? gf() : 536870912);
    var t = Re.current;
    return t !== null && (t.flags |= 32), Be;
  }
  function we(t, e, a) {
    ((t === jt && (vt === 2 || vt === 9)) || t.cancelPendingCommit !== null) &&
      (In(t, 0), La(t, ft, Be, !1)),
      xi(t, a),
      ((pt & 2) === 0 || t !== jt) &&
        (t === jt &&
          ((pt & 2) === 0 && (fn |= a), Rt === 4 && La(t, ft, Be, !1)),
        Fe(t));
  }
  function lm(t, e, a) {
    if ((pt & 6) !== 0) throw Error(r(327));
    var i = (!a && (e & 124) === 0 && (e & t.expiredLanes) === 0) || bi(t, e),
      s = i ? K1(t, e) : ou(t, e, !0),
      u = i;
    do {
      if (s === 0) {
        Jn && !i && La(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), u && !Z1(a))) {
          (s = ou(t, e, !1)), (u = !1);
          continue;
        }
        if (s === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var h = 0;
          else
            (h = t.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0);
          if (h !== 0) {
            e = h;
            t: {
              var v = t;
              s = el;
              var x = v.current.memoizedState.isDehydrated;
              if ((x && (In(v, h).flags |= 256), (h = ou(v, h, !1)), h !== 2)) {
                if ($r && !x) {
                  (v.errorRecoveryDisabledLanes |= u), (fn |= u), (s = 4);
                  break t;
                }
                (u = he),
                  (he = s),
                  u !== null && (he === null ? (he = u) : he.push.apply(he, u));
              }
              s = h;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          In(t, 0), La(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), (u = s), u)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              La(i, e, Be, !Ca);
              break t;
            case 2:
              he = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((s = eu + 300 - Ze()), 10 < s)) {
            if ((La(i, e, Be, !Ca), Yl(i, 0, !0) !== 0)) break t;
            i.timeoutHandle = Bm(
              sm.bind(null, i, a, he, Ds, tu, e, Be, fn, Fn, Ca, u, 2, -0, 0),
              s
            );
            break t;
          }
          sm(i, a, he, Ds, tu, e, Be, fn, Fn, Ca, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Fe(t);
  }
  function sm(t, e, a, i, s, u, h, v, x, M, z, B, N, D) {
    if (
      ((t.timeoutHandle = -1),
      (B = e.subtreeFlags),
      (B & 8192 || (B & 16785408) === 16785408) &&
        ((ul = { stylesheets: null, count: 0, unsuspend: wv }),
        Ih(e),
        (B = Nv()),
        B !== null))
    ) {
      (t.cancelPendingCommit = B(
        hm.bind(null, t, e, u, a, i, s, h, v, x, z, 1, N, D)
      )),
        La(t, u, h, !M);
      return;
    }
    hm(t, e, u, a, i, s, h, v, x);
  }
  function Z1(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var i = 0; i < a.length; i++) {
          var s = a[i],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!xe(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
        (a.return = e), (e = a);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function La(t, e, a, i) {
    (e &= ~Ir),
      (e &= ~fn),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var u = 31 - be(s),
        h = 1 << u;
      (i[u] = -1), (s &= ~h);
    }
    a !== 0 && pf(t, a, e);
  }
  function Os() {
    return (pt & 6) === 0 ? (nl(0), !1) : !0;
  }
  function lu() {
    if (ut !== null) {
      if (vt === 0) var t = ut.return;
      else (t = ut), (oa = ln = null), Tr(t), (Zn = null), (Ki = 0), (t = ut);
      for (; t !== null; ) Hh(t.alternate, t), (t = t.return);
      ut = null;
    }
  }
  function In(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && ((t.timeoutHandle = -1), uv(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      lu(),
      (jt = t),
      (ut = a = ia(t.current, null)),
      (ft = e),
      (vt = 0),
      (Ae = null),
      (Ca = !1),
      (Jn = bi(t, e)),
      ($r = !1),
      (Fn = Be = Ir = fn = Ra = Rt = 0),
      (he = el = null),
      (tu = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - be(i),
          u = 1 << s;
        (e |= t[s]), (i &= ~u);
      }
    return (ga = e), $l(), a;
  }
  function om(t, e) {
    (ot = null),
      (C.H = ps),
      e === _i || e === os
        ? ((e = Ad()), (vt = 3))
        : e === Sd
        ? ((e = Ad()), (vt = 4))
        : (vt =
            e === jh
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Ae = e),
      ut === null && ((Rt = 1), Ts(t, De(e, t.current)));
  }
  function rm() {
    var t = C.H;
    return (C.H = ps), t === null ? ps : t;
  }
  function um() {
    var t = C.A;
    return (C.A = k1), t;
  }
  function su() {
    (Rt = 4),
      Ca || ((ft & 4194048) !== ft && Re.current !== null) || (Jn = !0),
      ((Ra & 134217727) === 0 && (fn & 134217727) === 0) ||
        jt === null ||
        La(jt, ft, Be, !1);
  }
  function ou(t, e, a) {
    var i = pt;
    pt |= 2;
    var s = rm(),
      u = um();
    (jt !== t || ft !== e) && ((Ds = null), In(t, e)), (e = !1);
    var h = Rt;
    t: do
      try {
        if (vt !== 0 && ut !== null) {
          var v = ut,
            x = Ae;
          switch (vt) {
            case 8:
              lu(), (h = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Re.current === null && (e = !0);
              var M = vt;
              if (((vt = 0), (Ae = null), ti(t, v, x, M), a && Jn)) {
                h = 0;
                break t;
              }
              break;
            default:
              (M = vt), (vt = 0), (Ae = null), ti(t, v, x, M);
          }
        }
        Q1(), (h = Rt);
        break;
      } catch (z) {
        om(t, z);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (oa = ln = null),
      (pt = i),
      (C.H = s),
      (C.A = u),
      ut === null && ((jt = null), (ft = 0), $l()),
      h
    );
  }
  function Q1() {
    for (; ut !== null; ) cm(ut);
  }
  function K1(t, e) {
    var a = pt;
    pt |= 2;
    var i = rm(),
      s = um();
    jt !== t || ft !== e
      ? ((Ds = null), (Ns = Ze() + 500), In(t, e))
      : (Jn = bi(t, e));
    t: do
      try {
        if (vt !== 0 && ut !== null) {
          e = ut;
          var u = Ae;
          e: switch (vt) {
            case 1:
              (vt = 0), (Ae = null), ti(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Td(u)) {
                (vt = 0), (Ae = null), fm(e);
                break;
              }
              (e = function () {
                (vt !== 2 && vt !== 9) || jt !== t || (vt = 7), Fe(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              vt = 7;
              break t;
            case 4:
              vt = 5;
              break t;
            case 7:
              Td(u)
                ? ((vt = 0), (Ae = null), fm(e))
                : ((vt = 0), (Ae = null), ti(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (ut.tag) {
                case 26:
                  h = ut.memoizedState;
                case 5:
                case 27:
                  var v = ut;
                  if (!h || Qm(h)) {
                    (vt = 0), (Ae = null);
                    var x = v.sibling;
                    if (x !== null) ut = x;
                    else {
                      var M = v.return;
                      M !== null ? ((ut = M), zs(M)) : (ut = null);
                    }
                    break e;
                  }
              }
              (vt = 0), (Ae = null), ti(t, e, u, 5);
              break;
            case 6:
              (vt = 0), (Ae = null), ti(t, e, u, 6);
              break;
            case 8:
              lu(), (Rt = 6);
              break t;
            default:
              throw Error(r(462));
          }
        }
        P1();
        break;
      } catch (z) {
        om(t, z);
      }
    while (!0);
    return (
      (oa = ln = null),
      (C.H = i),
      (C.A = s),
      (pt = a),
      ut !== null ? 0 : ((jt = null), (ft = 0), $l(), Rt)
    );
  }
  function P1() {
    for (; ut !== null && !yp(); ) cm(ut);
  }
  function cm(t) {
    var e = Uh(t.alternate, t, ga);
    (t.memoizedProps = t.pendingProps), e === null ? zs(t) : (ut = e);
  }
  function fm(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = zh(a, e, e.pendingProps, e.type, void 0, ft);
        break;
      case 11:
        e = zh(a, e, e.pendingProps, e.type.render, e.ref, ft);
        break;
      case 5:
        Tr(e);
      default:
        Hh(a, e), (e = ut = dd(e, ga)), (e = Uh(a, e, ga));
    }
    (t.memoizedProps = t.pendingProps), e === null ? zs(t) : (ut = e);
  }
  function ti(t, e, a, i) {
    (oa = ln = null), Tr(e), (Zn = null), (Ki = 0);
    var s = e.return;
    try {
      if (U1(t, s, e, a, ft)) {
        (Rt = 1), Ts(t, De(a, t.current)), (ut = null);
        return;
      }
    } catch (u) {
      if (s !== null) throw ((ut = s), u);
      (Rt = 1), Ts(t, De(a, t.current)), (ut = null);
      return;
    }
    e.flags & 32768
      ? (yt || i === 1
          ? (t = !0)
          : Jn || (ft & 536870912) !== 0
          ? (t = !1)
          : ((Ca = t = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = Re.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        dm(e, t))
      : zs(e);
  }
  function zs(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        dm(e, Ca);
        return;
      }
      t = e.return;
      var a = H1(e.alternate, e, ga);
      if (a !== null) {
        ut = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ut = e;
        return;
      }
      ut = e = t;
    } while (e !== null);
    Rt === 0 && (Rt = 5);
  }
  function dm(t, e) {
    do {
      var a = Y1(t.alternate, t);
      if (a !== null) {
        (a.flags &= 32767), (ut = a);
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ut = t;
        return;
      }
      ut = t = a;
    } while (t !== null);
    (Rt = 6), (ut = null);
  }
  function hm(t, e, a, i, s, u, h, v, x) {
    t.cancelPendingCommit = null;
    do Cs();
    while ($t !== 0);
    if ((pt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Wo),
        wp(t, a, u, h, v, x),
        t === jt && ((ut = jt = null), (ft = 0)),
        (Wn = e),
        (Va = t),
        ($n = a),
        (au = u),
        (nu = s),
        (nm = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            $1(Ul, function () {
              return vm(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = C.T), (C.T = null), (s = _.p), (_.p = 2), (h = pt), (pt |= 4);
        try {
          q1(t, e, a);
        } finally {
          (pt = h), (_.p = s), (C.T = i);
        }
      }
      ($t = 1), mm(), gm(), ym();
    }
  }
  function mm() {
    if ($t === 1) {
      $t = 0;
      var t = Va,
        e = Wn,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        (a = C.T), (C.T = null);
        var i = _.p;
        _.p = 2;
        var s = pt;
        pt |= 4;
        try {
          Fh(e, t);
          var u = bu,
            h = ad(t.containerInfo),
            v = u.focusedElem,
            x = u.selectionRange;
          if (
            h !== v &&
            v &&
            v.ownerDocument &&
            ed(v.ownerDocument.documentElement, v)
          ) {
            if (x !== null && Qo(v)) {
              var M = x.start,
                z = x.end;
              if ((z === void 0 && (z = M), "selectionStart" in v))
                (v.selectionStart = M),
                  (v.selectionEnd = Math.min(z, v.value.length));
              else {
                var B = v.ownerDocument || document,
                  N = (B && B.defaultView) || window;
                if (N.getSelection) {
                  var D = N.getSelection(),
                    et = v.textContent.length,
                    $ = Math.min(x.start, et),
                    Tt = x.end === void 0 ? $ : Math.min(x.end, et);
                  !D.extend && $ > Tt && ((h = Tt), (Tt = $), ($ = h));
                  var j = td(v, $),
                    E = td(v, Tt);
                  if (
                    j &&
                    E &&
                    (D.rangeCount !== 1 ||
                      D.anchorNode !== j.node ||
                      D.anchorOffset !== j.offset ||
                      D.focusNode !== E.node ||
                      D.focusOffset !== E.offset)
                  ) {
                    var w = B.createRange();
                    w.setStart(j.node, j.offset),
                      D.removeAllRanges(),
                      $ > Tt
                        ? (D.addRange(w), D.extend(E.node, E.offset))
                        : (w.setEnd(E.node, E.offset), D.addRange(w));
                  }
                }
              }
            }
            for (B = [], D = v; (D = D.parentNode); )
              D.nodeType === 1 &&
                B.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < B.length;
              v++
            ) {
              var R = B[v];
              (R.element.scrollLeft = R.left), (R.element.scrollTop = R.top);
            }
          }
          (Xs = !!vu), (bu = vu = null);
        } finally {
          (pt = s), (_.p = i), (C.T = a);
        }
      }
      (t.current = e), ($t = 2);
    }
  }
  function gm() {
    if ($t === 2) {
      $t = 0;
      var t = Va,
        e = Wn,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        (a = C.T), (C.T = null);
        var i = _.p;
        _.p = 2;
        var s = pt;
        pt |= 4;
        try {
          Qh(t, e.alternate, e);
        } finally {
          (pt = s), (_.p = i), (C.T = a);
        }
      }
      $t = 3;
    }
  }
  function ym() {
    if ($t === 4 || $t === 3) {
      ($t = 0), pp();
      var t = Va,
        e = Wn,
        a = $n,
        i = nm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? ($t = 5)
        : (($t = 0), (Wn = Va = null), pm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Ba = null),
        jo(a),
        (e = e.stateNode),
        ve && typeof ve.onCommitFiberRoot == "function")
      )
        try {
          ve.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (e = C.T), (s = _.p), (_.p = 2), (C.T = null);
        try {
          for (var u = t.onRecoverableError, h = 0; h < i.length; h++) {
            var v = i[h];
            u(v.value, { componentStack: v.stack });
          }
        } finally {
          (C.T = e), (_.p = s);
        }
      }
      ($n & 3) !== 0 && Cs(),
        Fe(t),
        (s = t.pendingLanes),
        (a & 4194090) !== 0 && (s & 42) !== 0
          ? t === iu
            ? al++
            : ((al = 0), (iu = t))
          : (al = 0),
        nl(0);
    }
  }
  function pm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Li(e)));
  }
  function Cs(t) {
    return mm(), gm(), ym(), vm();
  }
  function vm() {
    if ($t !== 5) return !1;
    var t = Va,
      e = au;
    au = 0;
    var a = jo($n),
      i = C.T,
      s = _.p;
    try {
      (_.p = 32 > a ? 32 : a), (C.T = null), (a = nu), (nu = null);
      var u = Va,
        h = $n;
      if ((($t = 0), (Wn = Va = null), ($n = 0), (pt & 6) !== 0))
        throw Error(r(331));
      var v = pt;
      if (
        ((pt |= 4),
        em(u.current),
        $h(u, u.current, h, a),
        (pt = v),
        nl(0, !1),
        ve && typeof ve.onPostCommitFiberRoot == "function")
      )
        try {
          ve.onPostCommitFiberRoot(vi, u);
        } catch {}
      return !0;
    } finally {
      (_.p = s), (C.T = i), pm(t, e);
    }
  }
  function bm(t, e, a) {
    (e = De(a, e)),
      (e = Lr(t.stateNode, e, 2)),
      (t = ja(t, e, 2)),
      t !== null && (xi(t, 2), Fe(t));
  }
  function At(t, e, a) {
    if (t.tag === 3) bm(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          bm(e, t, a);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Ba === null || !Ba.has(i)))
          ) {
            (t = De(a, t)),
              (a = Eh(2)),
              (i = ja(e, a, 2)),
              i !== null && (Ah(a, i, e, t), xi(i, 2), Fe(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function ru(t, e, a) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new X1();
      var s = new Set();
      i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(a) ||
      (($r = !0), s.add(a), (t = J1.bind(null, t, e, a)), e.then(t, t));
  }
  function J1(t, e, a) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      jt === t &&
        (ft & a) === a &&
        (Rt === 4 || (Rt === 3 && (ft & 62914560) === ft && 300 > Ze() - eu)
          ? (pt & 2) === 0 && In(t, 0)
          : (Ir |= a),
        Fn === ft && (Fn = 0)),
      Fe(t);
  }
  function xm(t, e) {
    e === 0 && (e = yf()), (t = Vn(t, e)), t !== null && (xi(t, e), Fe(t));
  }
  function F1(t) {
    var e = t.memoizedState,
      a = 0;
    e !== null && (a = e.retryLane), xm(t, a);
  }
  function W1(t, e) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (a = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(e), xm(t, a);
  }
  function $1(t, e) {
    return So(t, e);
  }
  var Rs = null,
    ei = null,
    uu = !1,
    Bs = !1,
    cu = !1,
    dn = 0;
  function Fe(t) {
    t !== ei &&
      t.next === null &&
      (ei === null ? (Rs = ei = t) : (ei = ei.next = t)),
      (Bs = !0),
      uu || ((uu = !0), tv());
  }
  function nl(t, e) {
    if (!cu && Bs) {
      cu = !0;
      do
        for (var a = !1, i = Rs; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var h = i.suspendedLanes,
                v = i.pingedLanes;
              (u = (1 << (31 - be(42 | t) + 1)) - 1),
                (u &= s & ~(h & ~v)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((a = !0), Am(i, u));
          } else
            (u = ft),
              (u = Yl(
                i,
                i === jt ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (u & 3) === 0 || bi(i, u) || ((a = !0), Am(i, u));
          i = i.next;
        }
      while (a);
      cu = !1;
    }
  }
  function I1() {
    Sm();
  }
  function Sm() {
    Bs = uu = !1;
    var t = 0;
    dn !== 0 && (rv() && (t = dn), (dn = 0));
    for (var e = Ze(), a = null, i = Rs; i !== null; ) {
      var s = i.next,
        u = Tm(i, e);
      u === 0
        ? ((i.next = null),
          a === null ? (Rs = s) : (a.next = s),
          s === null && (ei = a))
        : ((a = i), (t !== 0 || (u & 3) !== 0) && (Bs = !0)),
        (i = s);
    }
    nl(t);
  }
  function Tm(t, e) {
    for (
      var a = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var h = 31 - be(u),
        v = 1 << h,
        x = s[h];
      x === -1
        ? ((v & a) === 0 || (v & i) !== 0) && (s[h] = jp(v, e))
        : x <= e && (t.expiredLanes |= v),
        (u &= ~v);
    }
    if (
      ((e = jt),
      (a = ft),
      (a = Yl(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (i = t.callbackNode),
      a === 0 ||
        (t === e && (vt === 2 || vt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && To(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || bi(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((i !== null && To(i), jo(a))) {
        case 2:
        case 8:
          a = hf;
          break;
        case 32:
          a = Ul;
          break;
        case 268435456:
          a = mf;
          break;
        default:
          a = Ul;
      }
      return (
        (i = Em.bind(null, t)),
        (a = So(a, i)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      i !== null && i !== null && To(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Em(t, e) {
    if ($t !== 0 && $t !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var a = t.callbackNode;
    if (Cs() && t.callbackNode !== a) return null;
    var i = ft;
    return (
      (i = Yl(
        t,
        t === jt ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (lm(t, i, e),
          Tm(t, Ze()),
          t.callbackNode != null && t.callbackNode === a
            ? Em.bind(null, t)
            : null)
    );
  }
  function Am(t, e) {
    if (Cs()) return null;
    lm(t, e, !0);
  }
  function tv() {
    cv(function () {
      (pt & 6) !== 0 ? So(df, I1) : Sm();
    });
  }
  function fu() {
    return dn === 0 && (dn = gf()), dn;
  }
  function jm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Zl("" + t);
  }
  function wm(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function ev(t, e, a, i, s) {
    if (e === "submit" && a && a.stateNode === s) {
      var u = jm((s[ue] || null).action),
        h = i.submitter;
      h &&
        ((e = (e = h[ue] || null)
          ? jm(e.formAction)
          : h.getAttribute("formAction")),
        e !== null && ((u = e), (h = null)));
      var v = new Jl("action", "action", null, i, s);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (dn !== 0) {
                  var x = h ? wm(s, h) : new FormData(s);
                  zr(
                    a,
                    { pending: !0, data: x, method: s.method, action: u },
                    null,
                    x
                  );
                }
              } else
                typeof u == "function" &&
                  (v.preventDefault(),
                  (x = h ? wm(s, h) : new FormData(s)),
                  zr(
                    a,
                    { pending: !0, data: x, method: s.method, action: u },
                    u,
                    x
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var du = 0; du < Fo.length; du++) {
    var hu = Fo[du],
      av = hu.toLowerCase(),
      nv = hu[0].toUpperCase() + hu.slice(1);
    _e(av, "on" + nv);
  }
  _e(ld, "onAnimationEnd"),
    _e(sd, "onAnimationIteration"),
    _e(od, "onAnimationStart"),
    _e("dblclick", "onDoubleClick"),
    _e("focusin", "onFocus"),
    _e("focusout", "onBlur"),
    _e(x1, "onTransitionRun"),
    _e(S1, "onTransitionStart"),
    _e(T1, "onTransitionCancel"),
    _e(rd, "onTransitionEnd"),
    jn("onMouseEnter", ["mouseout", "mouseover"]),
    jn("onMouseLeave", ["mouseout", "mouseover"]),
    jn("onPointerEnter", ["pointerout", "pointerover"]),
    jn("onPointerLeave", ["pointerout", "pointerover"]),
    Ja(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ja(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ja("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ja(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ja(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ja(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var il =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    iv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(il)
    );
  function Mm(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var i = t[a],
        s = i.event;
      i = i.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = i.length - 1; 0 <= h; h--) {
            var v = i[h],
              x = v.instance,
              M = v.currentTarget;
            if (((v = v.listener), x !== u && s.isPropagationStopped()))
              break t;
            (u = v), (s.currentTarget = M);
            try {
              u(s);
            } catch (z) {
              Ss(z);
            }
            (s.currentTarget = null), (u = x);
          }
        else
          for (h = 0; h < i.length; h++) {
            if (
              ((v = i[h]),
              (x = v.instance),
              (M = v.currentTarget),
              (v = v.listener),
              x !== u && s.isPropagationStopped())
            )
              break t;
            (u = v), (s.currentTarget = M);
            try {
              u(s);
            } catch (z) {
              Ss(z);
            }
            (s.currentTarget = null), (u = x);
          }
      }
    }
  }
  function ct(t, e) {
    var a = e[wo];
    a === void 0 && (a = e[wo] = new Set());
    var i = t + "__bubble";
    a.has(i) || (Nm(e, t, 2, !1), a.add(i));
  }
  function mu(t, e, a) {
    var i = 0;
    e && (i |= 4), Nm(a, t, i, e);
  }
  var Vs = "_reactListening" + Math.random().toString(36).slice(2);
  function gu(t) {
    if (!t[Vs]) {
      (t[Vs] = !0),
        Sf.forEach(function (a) {
          a !== "selectionchange" && (iv.has(a) || mu(a, !1, t), mu(a, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Vs] || ((e[Vs] = !0), mu("selectionchange", !1, e));
    }
  }
  function Nm(t, e, a, i) {
    switch ($m(e)) {
      case 2:
        var s = zv;
        break;
      case 8:
        s = Cv;
        break;
      default:
        s = Du;
    }
    (a = s.bind(null, e, a, t)),
      (s = void 0),
      !Uo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: s })
          : t.addEventListener(e, a, !0)
        : s !== void 0
        ? t.addEventListener(e, a, { passive: s })
        : t.addEventListener(e, a, !1);
  }
  function yu(t, e, a, i, s) {
    var u = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var h = i.tag;
        if (h === 3 || h === 4) {
          var v = i.stateNode.containerInfo;
          if (v === s) break;
          if (h === 4)
            for (h = i.return; h !== null; ) {
              var x = h.tag;
              if ((x === 3 || x === 4) && h.stateNode.containerInfo === s)
                return;
              h = h.return;
            }
          for (; v !== null; ) {
            if (((h = Tn(v)), h === null)) return;
            if (((x = h.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              i = u = h;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    Vf(function () {
      var M = u,
        z = Vo(a),
        B = [];
      t: {
        var N = ud.get(t);
        if (N !== void 0) {
          var D = Jl,
            et = t;
          switch (t) {
            case "keypress":
              if (Kl(a) === 0) break t;
            case "keydown":
            case "keyup":
              D = $p;
              break;
            case "focusin":
              (et = "focus"), (D = qo);
              break;
            case "focusout":
              (et = "blur"), (D = qo);
              break;
            case "beforeblur":
            case "afterblur":
              D = qo;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = _f;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = Yp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = e1;
              break;
            case ld:
            case sd:
            case od:
              D = kp;
              break;
            case rd:
              D = n1;
              break;
            case "scroll":
            case "scrollend":
              D = _p;
              break;
            case "wheel":
              D = l1;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Zp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Yf;
              break;
            case "toggle":
            case "beforetoggle":
              D = o1;
          }
          var $ = (e & 4) !== 0,
            Tt = !$ && (t === "scroll" || t === "scrollend"),
            j = $ ? (N !== null ? N + "Capture" : null) : N;
          $ = [];
          for (var E = M, w; E !== null; ) {
            var R = E;
            if (
              ((w = R.stateNode),
              (R = R.tag),
              (R !== 5 && R !== 26 && R !== 27) ||
                w === null ||
                j === null ||
                ((R = Ei(E, j)), R != null && $.push(ll(E, R, w))),
              Tt)
            )
              break;
            E = E.return;
          }
          0 < $.length &&
            ((N = new D(N, et, null, a, z)),
            B.push({ event: N, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((N = t === "mouseover" || t === "pointerover"),
            (D = t === "mouseout" || t === "pointerout"),
            N &&
              a !== Bo &&
              (et = a.relatedTarget || a.fromElement) &&
              (Tn(et) || et[Sn]))
          )
            break t;
          if (
            (D || N) &&
            ((N =
              z.window === z
                ? z
                : (N = z.ownerDocument)
                ? N.defaultView || N.parentWindow
                : window),
            D
              ? ((et = a.relatedTarget || a.toElement),
                (D = M),
                (et = et ? Tn(et) : null),
                et !== null &&
                  ((Tt = d(et)),
                  ($ = et.tag),
                  et !== Tt || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                  (et = null))
              : ((D = null), (et = M)),
            D !== et)
          ) {
            if (
              (($ = _f),
              (R = "onMouseLeave"),
              (j = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                (($ = Yf),
                (R = "onPointerLeave"),
                (j = "onPointerEnter"),
                (E = "pointer")),
              (Tt = D == null ? N : Ti(D)),
              (w = et == null ? N : Ti(et)),
              (N = new $(R, E + "leave", D, a, z)),
              (N.target = Tt),
              (N.relatedTarget = w),
              (R = null),
              Tn(z) === M &&
                (($ = new $(j, E + "enter", et, a, z)),
                ($.target = w),
                ($.relatedTarget = Tt),
                (R = $)),
              (Tt = R),
              D && et)
            )
              e: {
                for ($ = D, j = et, E = 0, w = $; w; w = ai(w)) E++;
                for (w = 0, R = j; R; R = ai(R)) w++;
                for (; 0 < E - w; ) ($ = ai($)), E--;
                for (; 0 < w - E; ) (j = ai(j)), w--;
                for (; E--; ) {
                  if ($ === j || (j !== null && $ === j.alternate)) break e;
                  ($ = ai($)), (j = ai(j));
                }
                $ = null;
              }
            else $ = null;
            D !== null && Dm(B, N, D, $, !1),
              et !== null && Tt !== null && Dm(B, Tt, et, $, !0);
          }
        }
        t: {
          if (
            ((N = M ? Ti(M) : window),
            (D = N.nodeName && N.nodeName.toLowerCase()),
            D === "select" || (D === "input" && N.type === "file"))
          )
            var K = Pf;
          else if (Qf(N))
            if (Jf) K = p1;
            else {
              K = g1;
              var rt = m1;
            }
          else
            (D = N.nodeName),
              !D ||
              D.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? M && Ro(M.elementType) && (K = Pf)
                : (K = y1);
          if (K && (K = K(t, M))) {
            Kf(B, K, a, z);
            break t;
          }
          rt && rt(t, N, M),
            t === "focusout" &&
              M &&
              N.type === "number" &&
              M.memoizedProps.value != null &&
              Co(N, "number", N.value);
        }
        switch (((rt = M ? Ti(M) : window), t)) {
          case "focusin":
            (Qf(rt) || rt.contentEditable === "true") &&
              ((Cn = rt), (Ko = M), (zi = null));
            break;
          case "focusout":
            zi = Ko = Cn = null;
            break;
          case "mousedown":
            Po = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Po = !1), nd(B, a, z);
            break;
          case "selectionchange":
            if (b1) break;
          case "keydown":
          case "keyup":
            nd(B, a, z);
        }
        var J;
        if (ko)
          t: {
            switch (t) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break t;
              case "compositionend":
                tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break t;
            }
            tt = void 0;
          }
        else
          zn
            ? Xf(t, a) && (tt = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (tt = "onCompositionStart");
        tt &&
          (qf &&
            a.locale !== "ko" &&
            (zn || tt !== "onCompositionStart"
              ? tt === "onCompositionEnd" && zn && (J = Lf())
              : ((Sa = z),
                (_o = "value" in Sa ? Sa.value : Sa.textContent),
                (zn = !0))),
          (rt = Ls(M, tt)),
          0 < rt.length &&
            ((tt = new Hf(tt, t, null, a, z)),
            B.push({ event: tt, listeners: rt }),
            J ? (tt.data = J) : ((J = Zf(a)), J !== null && (tt.data = J)))),
          (J = u1 ? c1(t, a) : f1(t, a)) &&
            ((tt = Ls(M, "onBeforeInput")),
            0 < tt.length &&
              ((rt = new Hf("onBeforeInput", "beforeinput", null, a, z)),
              B.push({ event: rt, listeners: tt }),
              (rt.data = J))),
          ev(B, t, M, a, z);
      }
      Mm(B, e);
    });
  }
  function ll(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function Ls(t, e) {
    for (var a = e + "Capture", i = []; t !== null; ) {
      var s = t,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = Ei(t, a)),
          s != null && i.unshift(ll(t, s, u)),
          (s = Ei(t, e)),
          s != null && i.push(ll(t, s, u))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function ai(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Dm(t, e, a, i, s) {
    for (var u = e._reactName, h = []; a !== null && a !== i; ) {
      var v = a,
        x = v.alternate,
        M = v.stateNode;
      if (((v = v.tag), x !== null && x === i)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        M === null ||
        ((x = M),
        s
          ? ((M = Ei(a, u)), M != null && h.unshift(ll(a, M, x)))
          : s || ((M = Ei(a, u)), M != null && h.push(ll(a, M, x)))),
        (a = a.return);
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var lv = /\r\n?/g,
    sv = /\u0000|\uFFFD/g;
  function Om(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        lv,
        `
`
      )
      .replace(sv, "");
  }
  function zm(t, e) {
    return (e = Om(e)), Om(t) === e;
  }
  function Us() {}
  function St(t, e, a, i, s, u) {
    switch (a) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Nn(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Nn(t, "" + i);
        break;
      case "className":
        Gl(t, "class", i);
        break;
      case "tabIndex":
        Gl(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Gl(t, a, i);
        break;
      case "style":
        Rf(t, i, u);
        break;
      case "data":
        if (e !== "object") {
          Gl(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        (i = Zl("" + i)), t.setAttribute(a, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (e !== "input" && St(t, e, "name", s.name, s, null),
                St(t, e, "formEncType", s.formEncType, s, null),
                St(t, e, "formMethod", s.formMethod, s, null),
                St(t, e, "formTarget", s.formTarget, s, null))
              : (St(t, e, "encType", s.encType, s, null),
                St(t, e, "method", s.method, s, null),
                St(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(a);
          break;
        }
        (i = Zl("" + i)), t.setAttribute(a, i);
        break;
      case "onClick":
        i != null && (t.onclick = Us);
        break;
      case "onScroll":
        i != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((a = i.__html), a != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (a = Zl("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(a, "" + i)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(a, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(a, i)
          : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(a, i)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(a)
          : t.setAttribute(a, i);
        break;
      case "popover":
        ct("beforetoggle", t), ct("toggle", t), ql(t, "popover", i);
        break;
      case "xlinkActuate":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        aa(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        aa(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        aa(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        aa(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        ql(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Lp.get(a) || a), ql(t, a, i));
    }
  }
  function pu(t, e, a, i, s, u) {
    switch (a) {
      case "style":
        Rf(t, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((a = i.__html), a != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Nn(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Nn(t, "" + i);
        break;
      case "onScroll":
        i != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        i != null && ct("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Us);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Tf.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((s = a.endsWith("Capture")),
              (e = a.slice(2, s ? a.length - 7 : void 0)),
              (u = t[ue] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && t.removeEventListener(e, u, s),
              typeof i == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, i, s);
              break t;
            }
            a in t
              ? (t[a] = i)
              : i === !0
              ? t.setAttribute(a, "")
              : ql(t, a, i);
          }
    }
  }
  function It(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ct("error", t), ct("load", t);
        var i = !1,
          s = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var h = a[u];
            if (h != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  St(t, e, u, h, a, null);
              }
          }
        s && St(t, e, "srcSet", a.srcSet, a, null),
          i && St(t, e, "src", a.src, a, null);
        return;
      case "input":
        ct("invalid", t);
        var v = (u = h = s = null),
          x = null,
          M = null;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var z = a[i];
            if (z != null)
              switch (i) {
                case "name":
                  s = z;
                  break;
                case "type":
                  h = z;
                  break;
                case "checked":
                  x = z;
                  break;
                case "defaultChecked":
                  M = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  v = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(r(137, e));
                  break;
                default:
                  St(t, e, i, z, a, null);
              }
          }
        Df(t, u, v, x, M, h, s, !1), kl(t);
        return;
      case "select":
        ct("invalid", t), (i = h = u = null);
        for (s in a)
          if (a.hasOwnProperty(s) && ((v = a[s]), v != null))
            switch (s) {
              case "value":
                u = v;
                break;
              case "defaultValue":
                h = v;
                break;
              case "multiple":
                i = v;
              default:
                St(t, e, s, v, a, null);
            }
        (e = u),
          (a = h),
          (t.multiple = !!i),
          e != null ? Mn(t, !!i, e, !1) : a != null && Mn(t, !!i, a, !0);
        return;
      case "textarea":
        ct("invalid", t), (u = s = i = null);
        for (h in a)
          if (a.hasOwnProperty(h) && ((v = a[h]), v != null))
            switch (h) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                u = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(r(91));
                break;
              default:
                St(t, e, h, v, a, null);
            }
        zf(t, i, s, u), kl(t);
        return;
      case "option":
        for (x in a)
          if (a.hasOwnProperty(x) && ((i = a[x]), i != null))
            switch (x) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                St(t, e, x, i, a, null);
            }
        return;
      case "dialog":
        ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < il.length; i++) ct(il[i], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in a)
          if (a.hasOwnProperty(M) && ((i = a[M]), i != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                St(t, e, M, i, a, null);
            }
        return;
      default:
        if (Ro(e)) {
          for (z in a)
            a.hasOwnProperty(z) &&
              ((i = a[z]), i !== void 0 && pu(t, e, z, i, a, void 0));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && ((i = a[v]), i != null && St(t, e, v, i, a, null));
  }
  function ov(t, e, a, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          u = null,
          h = null,
          v = null,
          x = null,
          M = null,
          z = null;
        for (D in a) {
          var B = a[D];
          if (a.hasOwnProperty(D) && B != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = B;
              default:
                i.hasOwnProperty(D) || St(t, e, D, null, i, B);
            }
        }
        for (var N in i) {
          var D = i[N];
          if (((B = a[N]), i.hasOwnProperty(N) && (D != null || B != null)))
            switch (N) {
              case "type":
                u = D;
                break;
              case "name":
                s = D;
                break;
              case "checked":
                M = D;
                break;
              case "defaultChecked":
                z = D;
                break;
              case "value":
                h = D;
                break;
              case "defaultValue":
                v = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(r(137, e));
                break;
              default:
                D !== B && St(t, e, N, D, i, B);
            }
        }
        zo(t, h, v, x, M, z, u, s);
        return;
      case "select":
        D = h = v = N = null;
        for (u in a)
          if (((x = a[u]), a.hasOwnProperty(u) && x != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                D = x;
              default:
                i.hasOwnProperty(u) || St(t, e, u, null, i, x);
            }
        for (s in i)
          if (
            ((u = i[s]),
            (x = a[s]),
            i.hasOwnProperty(s) && (u != null || x != null))
          )
            switch (s) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                v = u;
                break;
              case "multiple":
                h = u;
              default:
                u !== x && St(t, e, s, u, i, x);
            }
        (e = v),
          (a = h),
          (i = D),
          N != null
            ? Mn(t, !!a, N, !1)
            : !!i != !!a &&
              (e != null ? Mn(t, !!a, e, !0) : Mn(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        D = N = null;
        for (v in a)
          if (
            ((s = a[v]),
            a.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(t, e, v, null, i, s);
            }
        for (h in i)
          if (
            ((s = i[h]),
            (u = a[h]),
            i.hasOwnProperty(h) && (s != null || u != null))
          )
            switch (h) {
              case "value":
                N = s;
                break;
              case "defaultValue":
                D = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && St(t, e, h, s, i, u);
            }
        Of(t, N, D);
        return;
      case "option":
        for (var et in a)
          if (
            ((N = a[et]),
            a.hasOwnProperty(et) && N != null && !i.hasOwnProperty(et))
          )
            switch (et) {
              case "selected":
                t.selected = !1;
                break;
              default:
                St(t, e, et, null, i, N);
            }
        for (x in i)
          if (
            ((N = i[x]),
            (D = a[x]),
            i.hasOwnProperty(x) && N !== D && (N != null || D != null))
          )
            switch (x) {
              case "selected":
                t.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                St(t, e, x, N, i, D);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in a)
          (N = a[$]),
            a.hasOwnProperty($) &&
              N != null &&
              !i.hasOwnProperty($) &&
              St(t, e, $, null, i, N);
        for (M in i)
          if (
            ((N = i[M]),
            (D = a[M]),
            i.hasOwnProperty(M) && N !== D && (N != null || D != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(r(137, e));
                break;
              default:
                St(t, e, M, N, i, D);
            }
        return;
      default:
        if (Ro(e)) {
          for (var Tt in a)
            (N = a[Tt]),
              a.hasOwnProperty(Tt) &&
                N !== void 0 &&
                !i.hasOwnProperty(Tt) &&
                pu(t, e, Tt, void 0, i, N);
          for (z in i)
            (N = i[z]),
              (D = a[z]),
              !i.hasOwnProperty(z) ||
                N === D ||
                (N === void 0 && D === void 0) ||
                pu(t, e, z, N, i, D);
          return;
        }
    }
    for (var j in a)
      (N = a[j]),
        a.hasOwnProperty(j) &&
          N != null &&
          !i.hasOwnProperty(j) &&
          St(t, e, j, null, i, N);
    for (B in i)
      (N = i[B]),
        (D = a[B]),
        !i.hasOwnProperty(B) ||
          N === D ||
          (N == null && D == null) ||
          St(t, e, B, N, i, D);
  }
  var vu = null,
    bu = null;
  function _s(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Cm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Rm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function xu(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Su = null;
  function rv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Su
        ? !1
        : ((Su = t), !0)
      : ((Su = null), !1);
  }
  var Bm = typeof setTimeout == "function" ? setTimeout : void 0,
    uv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vm = typeof Promise == "function" ? Promise : void 0,
    cv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vm < "u"
        ? function (t) {
            return Vm.resolve(null).then(t).catch(fv);
          }
        : Bm;
  function fv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Ua(t) {
    return t === "head";
  }
  function Lm(t, e) {
    var a = e,
      i = 0,
      s = 0;
    do {
      var u = a.nextSibling;
      if ((t.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$")) {
          if (0 < i && 8 > i) {
            a = i;
            var h = t.ownerDocument;
            if ((a & 1 && sl(h.documentElement), a & 2 && sl(h.body), a & 4))
              for (a = h.head, sl(a), h = a.firstChild; h; ) {
                var v = h.nextSibling,
                  x = h.nodeName;
                h[Si] ||
                  x === "SCRIPT" ||
                  x === "STYLE" ||
                  (x === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(h),
                  (h = v);
              }
          }
          if (s === 0) {
            t.removeChild(u), ml(e);
            return;
          }
          s--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? s++
            : (i = a.charCodeAt(0) - 48);
      else i = 0;
      a = u;
    } while (a);
    ml(e);
  }
  function Tu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Tu(a), Mo(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function dv(t, e, a, i) {
    for (; t.nodeType === 1; ) {
      var s = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[Si])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = Ye(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function hv(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = Ye(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Eu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function mv(t, e) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete") e();
    else {
      var i = function () {
        e(), a.removeEventListener("DOMContentLoaded", i);
      };
      a.addEventListener("DOMContentLoaded", i), (t._reactRetry = i);
    }
  }
  function Ye(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Au = null;
  function Um(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (e === 0) return t;
          e--;
        } else a === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function _m(t, e, a) {
    switch (((e = _s(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function sl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Mo(t);
  }
  var Ve = new Map(),
    Hm = new Set();
  function Hs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var ya = _.d;
  _.d = { f: gv, r: yv, D: pv, C: vv, L: bv, m: xv, X: Tv, S: Sv, M: Ev };
  function gv() {
    var t = ya.f(),
      e = Os();
    return t || e;
  }
  function yv(t) {
    var e = En(t);
    e !== null && e.tag === 5 && e.type === "form" ? lh(e) : ya.r(t);
  }
  var ni = typeof document > "u" ? null : document;
  function Ym(t, e, a) {
    var i = ni;
    if (i && typeof e == "string" && e) {
      var s = Ne(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
        Hm.has(s) ||
          (Hm.add(s),
          (t = { rel: t, crossOrigin: a, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            It(e, "link", t),
            Zt(e),
            i.head.appendChild(e)));
    }
  }
  function pv(t) {
    ya.D(t), Ym("dns-prefetch", t, null);
  }
  function vv(t, e) {
    ya.C(t, e), Ym("preconnect", t, e);
  }
  function bv(t, e, a) {
    ya.L(t, e, a);
    var i = ni;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Ne(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((s += '[imagesrcset="' + Ne(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (s += '[imagesizes="' + Ne(a.imageSizes) + '"]'))
        : (s += '[href="' + Ne(t) + '"]');
      var u = s;
      switch (e) {
        case "style":
          u = ii(t);
          break;
        case "script":
          u = li(t);
      }
      Ve.has(u) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && a && a.imageSrcSet ? void 0 : t,
            as: e,
          },
          a
        )),
        Ve.set(u, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(ol(u))) ||
          (e === "script" && i.querySelector(rl(u))) ||
          ((e = i.createElement("link")),
          It(e, "link", t),
          Zt(e),
          i.head.appendChild(e)));
    }
  }
  function xv(t, e) {
    ya.m(t, e);
    var a = ni;
    if (a && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Ne(i) + '"][href="' + Ne(t) + '"]',
        u = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = li(t);
      }
      if (
        !Ve.has(u) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        Ve.set(u, t),
        a.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(rl(u))) return;
        }
        (i = a.createElement("link")),
          It(i, "link", t),
          Zt(i),
          a.head.appendChild(i);
      }
    }
  }
  function Sv(t, e, a) {
    ya.S(t, e, a);
    var i = ni;
    if (i && t) {
      var s = An(i).hoistableStyles,
        u = ii(t);
      e = e || "default";
      var h = s.get(u);
      if (!h) {
        var v = { loading: 0, preload: null };
        if ((h = i.querySelector(ol(u)))) v.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = Ve.get(u)) && ju(t, a);
          var x = (h = i.createElement("link"));
          Zt(x),
            It(x, "link", t),
            (x._p = new Promise(function (M, z) {
              (x.onload = M), (x.onerror = z);
            })),
            x.addEventListener("load", function () {
              v.loading |= 1;
            }),
            x.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Ys(h, e, i);
        }
        (h = { type: "stylesheet", instance: h, count: 1, state: v }),
          s.set(u, h);
      }
    }
  }
  function Tv(t, e) {
    ya.X(t, e);
    var a = ni;
    if (a && t) {
      var i = An(a).hoistableScripts,
        s = li(t),
        u = i.get(s);
      u ||
        ((u = a.querySelector(rl(s))),
        u ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Ve.get(s)) && wu(t, e),
          (u = a.createElement("script")),
          Zt(u),
          It(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function Ev(t, e) {
    ya.M(t, e);
    var a = ni;
    if (a && t) {
      var i = An(a).hoistableScripts,
        s = li(t),
        u = i.get(s);
      u ||
        ((u = a.querySelector(rl(s))),
        u ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = Ve.get(s)) && wu(t, e),
          (u = a.createElement("script")),
          Zt(u),
          It(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(s, u));
    }
  }
  function qm(t, e, a, i) {
    var s = (s = nt.current) ? Hs(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = ii(a.href)),
            (a = An(s).hoistableStyles),
            (i = a.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              a.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = ii(a.href);
          var u = An(s).hoistableStyles,
            h = u.get(t);
          if (
            (h ||
              ((s = s.ownerDocument || s),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, h),
              (u = s.querySelector(ol(t))) &&
                !u._p &&
                ((h.instance = u), (h.state.loading = 5)),
              Ve.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ve.set(t, a),
                u || Av(s, t, a, h.state))),
            e && i === null)
          )
            throw Error(r(528, ""));
          return h;
        }
        if (e && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = li(a)),
              (a = An(s).hoistableScripts),
              (i = a.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function ii(t) {
    return 'href="' + Ne(t) + '"';
  }
  function ol(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Gm(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Av(t, e, a, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        It(e, "link", a),
        Zt(e),
        t.head.appendChild(e));
  }
  function li(t) {
    return '[src="' + Ne(t) + '"]';
  }
  function rl(t) {
    return "script[async]" + t;
  }
  function km(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Ne(a.href) + '"]');
          if (i) return (e.instance = i), Zt(i), i;
          var s = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Zt(i),
            It(i, "style", s),
            Ys(i, a.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = ii(a.href);
          var u = t.querySelector(ol(s));
          if (u) return (e.state.loading |= 4), (e.instance = u), Zt(u), u;
          (i = Gm(a)),
            (s = Ve.get(s)) && ju(i, s),
            (u = (t.ownerDocument || t).createElement("link")),
            Zt(u);
          var h = u;
          return (
            (h._p = new Promise(function (v, x) {
              (h.onload = v), (h.onerror = x);
            })),
            It(u, "link", i),
            (e.state.loading |= 4),
            Ys(u, a.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = li(a.src)),
            (s = t.querySelector(rl(u)))
              ? ((e.instance = s), Zt(s), s)
              : ((i = a),
                (s = Ve.get(u)) && ((i = b({}, a)), wu(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Zt(s),
                It(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Ys(i, a.precedence, t));
    return e.instance;
  }
  function Ys(t, e, a) {
    for (
      var i = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        u = s,
        h = 0;
      h < i.length;
      h++
    ) {
      var v = i[h];
      if (v.dataset.precedence === e) u = v;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function ju(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function wu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var qs = null;
  function Xm(t, e, a) {
    if (qs === null) {
      var i = new Map(),
        s = (qs = new Map());
      s.set(a, i);
    } else (s = qs), (i = s.get(a)), i || ((i = new Map()), s.set(a, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), a = a.getElementsByTagName(t), s = 0;
      s < a.length;
      s++
    ) {
      var u = a[s];
      if (
        !(
          u[Si] ||
          u[ee] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var v = i.get(h);
        v ? v.push(u) : i.set(h, [u]);
      }
    }
    return i;
  }
  function Zm(t, e, a) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function jv(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Qm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var ul = null;
  function wv() {}
  function Mv(t, e, a) {
    if (ul === null) throw Error(r(475));
    var i = ul;
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var s = ii(a.href),
          u = t.querySelector(ol(s));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = Gs.bind(i)), t.then(i, i)),
            (e.state.loading |= 4),
            (e.instance = u),
            Zt(u);
          return;
        }
        (u = t.ownerDocument || t),
          (a = Gm(a)),
          (s = Ve.get(s)) && ju(a, s),
          (u = u.createElement("link")),
          Zt(u);
        var h = u;
        (h._p = new Promise(function (v, x) {
          (h.onload = v), (h.onerror = x);
        })),
          It(u, "link", a),
          (e.instance = u);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (i.count++,
          (e = Gs.bind(i)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Nv() {
    if (ul === null) throw Error(r(475));
    var t = ul;
    return (
      t.stylesheets && t.count === 0 && Mu(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Mu(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Gs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Mu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var ks = null;
  function Mu(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ks = new Map()),
        e.forEach(Dv, t),
        (ks = null),
        Gs.call(t));
  }
  function Dv(t, e) {
    if (!(e.state.loading & 4)) {
      var a = ks.get(t);
      if (a) var i = a.get(null);
      else {
        (a = new Map()), ks.set(t, a);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < s.length;
          u++
        ) {
          var h = s[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (a.set(h.dataset.precedence, h), (i = h));
        }
        i && a.set(null, i);
      }
      (s = e.instance),
        (h = s.getAttribute("data-precedence")),
        (u = a.get(h) || i),
        u === i && a.set(null, s),
        a.set(h, s),
        this.count++,
        (i = Gs.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var cl = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function Ov(t, e, a, i, s, u, h, v) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Eo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Eo(0)),
      (this.hiddenUpdates = Eo(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function Km(t, e, a, i, s, u, h, v, x, M, z, B) {
    return (
      (t = new Ov(t, e, a, h, v, x, M, B)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Se(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = rr()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: i, isDehydrated: a, cache: e }),
      dr(u),
      t
    );
  }
  function Pm(t) {
    return t ? ((t = Ln), t) : Ln;
  }
  function Jm(t, e, a, i, s, u) {
    (s = Pm(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Aa(e)),
      (i.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (a = ja(t, i, e)),
      a !== null && (we(a, t, e), Yi(a, t, e));
  }
  function Fm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Nu(t, e) {
    Fm(t, e), (t = t.alternate) && Fm(t, e);
  }
  function Wm(t) {
    if (t.tag === 13) {
      var e = Vn(t, 67108864);
      e !== null && we(e, t, 67108864), Nu(t, 67108864);
    }
  }
  var Xs = !0;
  function zv(t, e, a, i) {
    var s = C.T;
    C.T = null;
    var u = _.p;
    try {
      (_.p = 2), Du(t, e, a, i);
    } finally {
      (_.p = u), (C.T = s);
    }
  }
  function Cv(t, e, a, i) {
    var s = C.T;
    C.T = null;
    var u = _.p;
    try {
      (_.p = 8), Du(t, e, a, i);
    } finally {
      (_.p = u), (C.T = s);
    }
  }
  function Du(t, e, a, i) {
    if (Xs) {
      var s = Ou(i);
      if (s === null) yu(t, e, i, Zs, a), Im(t, i);
      else if (Bv(s, t, e, a, i)) i.stopPropagation();
      else if ((Im(t, i), e & 4 && -1 < Rv.indexOf(t))) {
        for (; s !== null; ) {
          var u = En(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var h = Pa(u.pendingLanes);
                  if (h !== 0) {
                    var v = u;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; h; ) {
                      var x = 1 << (31 - be(h));
                      (v.entanglements[1] |= x), (h &= ~x);
                    }
                    Fe(u), (pt & 6) === 0 && ((Ns = Ze() + 500), nl(0));
                  }
                }
                break;
              case 13:
                (v = Vn(u, 2)), v !== null && we(v, u, 2), Os(), Nu(u, 2);
            }
          if (((u = Ou(i)), u === null && yu(t, e, i, Zs, a), u === s)) break;
          s = u;
        }
        s !== null && i.stopPropagation();
      } else yu(t, e, i, null, a);
    }
  }
  function Ou(t) {
    return (t = Vo(t)), zu(t);
  }
  var Zs = null;
  function zu(t) {
    if (((Zs = null), (t = Tn(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Zs = t), null;
  }
  function $m(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (vp()) {
          case df:
            return 2;
          case hf:
            return 8;
          case Ul:
          case bp:
            return 32;
          case mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Cu = !1,
    _a = null,
    Ha = null,
    Ya = null,
    fl = new Map(),
    dl = new Map(),
    qa = [],
    Rv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Im(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        _a = null;
        break;
      case "dragenter":
      case "dragleave":
        Ha = null;
        break;
      case "mouseover":
      case "mouseout":
        Ya = null;
        break;
      case "pointerover":
      case "pointerout":
        fl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        dl.delete(e.pointerId);
    }
  }
  function hl(t, e, a, i, s, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [s],
        }),
        e !== null && ((e = En(e)), e !== null && Wm(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function Bv(t, e, a, i, s) {
    switch (e) {
      case "focusin":
        return (_a = hl(_a, t, e, a, i, s)), !0;
      case "dragenter":
        return (Ha = hl(Ha, t, e, a, i, s)), !0;
      case "mouseover":
        return (Ya = hl(Ya, t, e, a, i, s)), !0;
      case "pointerover":
        var u = s.pointerId;
        return fl.set(u, hl(fl.get(u) || null, t, e, a, i, s)), !0;
      case "gotpointercapture":
        return (
          (u = s.pointerId), dl.set(u, hl(dl.get(u) || null, t, e, a, i, s)), !0
        );
    }
    return !1;
  }
  function t0(t) {
    var e = Tn(t.target);
    if (e !== null) {
      var a = d(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = f(a)), e !== null)) {
            (t.blockedOn = e),
              Mp(t.priority, function () {
                if (a.tag === 13) {
                  var i = je();
                  i = Ao(i);
                  var s = Vn(a, i);
                  s !== null && we(s, a, i), Nu(a, i);
                }
              });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Qs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Ou(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var i = new a.constructor(a.type, a);
        (Bo = i), a.target.dispatchEvent(i), (Bo = null);
      } else return (e = En(a)), e !== null && Wm(e), (t.blockedOn = a), !1;
      e.shift();
    }
    return !0;
  }
  function e0(t, e, a) {
    Qs(t) && a.delete(e);
  }
  function Vv() {
    (Cu = !1),
      _a !== null && Qs(_a) && (_a = null),
      Ha !== null && Qs(Ha) && (Ha = null),
      Ya !== null && Qs(Ya) && (Ya = null),
      fl.forEach(e0),
      dl.forEach(e0);
  }
  function Ks(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Cu ||
        ((Cu = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Vv)));
  }
  var Ps = null;
  function a0(t) {
    Ps !== t &&
      ((Ps = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Ps === t && (Ps = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (zu(i || a) === null) continue;
            break;
          }
          var u = En(a);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            zr(u, { pending: !0, data: s, method: a.method, action: i }, i, s));
        }
      }));
  }
  function ml(t) {
    function e(x) {
      return Ks(x, t);
    }
    _a !== null && Ks(_a, t),
      Ha !== null && Ks(Ha, t),
      Ya !== null && Ks(Ya, t),
      fl.forEach(e),
      dl.forEach(e);
    for (var a = 0; a < qa.length; a++) {
      var i = qa[a];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < qa.length && ((a = qa[0]), a.blockedOn === null); )
      t0(a), a.blockedOn === null && qa.shift();
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (i = 0; i < a.length; i += 3) {
        var s = a[i],
          u = a[i + 1],
          h = s[ue] || null;
        if (typeof u == "function") h || a0(a);
        else if (h) {
          var v = null;
          if (u && u.hasAttribute("formAction")) {
            if (((s = u), (h = u[ue] || null))) v = h.formAction;
            else if (zu(s) !== null) continue;
          } else v = h.action;
          typeof v == "function" ? (a[i + 1] = v) : (a.splice(i, 3), (i -= 3)),
            a0(a);
        }
      }
  }
  function Ru(t) {
    this._internalRoot = t;
  }
  (Js.prototype.render = Ru.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var a = e.current,
        i = je();
      Jm(a, i, t, e, null, null);
    }),
    (Js.prototype.unmount = Ru.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Jm(t.current, 2, null, t, null, null), Os(), (e[Sn] = null);
        }
      });
  function Js(t) {
    this._internalRoot = t;
  }
  Js.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = bf();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < qa.length && e !== 0 && e < qa[a].priority; a++);
      qa.splice(a, 0, t), a === 0 && t0(t);
    }
  };
  var n0 = l.version;
  if (n0 !== "19.1.0") throw Error(r(527, n0, "19.1.0"));
  _.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? y(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Lv = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fs.isDisabled && Fs.supportsFiber)
      try {
        (vi = Fs.inject(Lv)), (ve = Fs);
      } catch {}
  }
  return (
    (yl.createRoot = function (t, e) {
      if (!c(t)) throw Error(r(299));
      var a = !1,
        i = "",
        s = bh,
        u = xh,
        h = Sh,
        v = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (h = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (v = e.unstable_transitionCallbacks)),
        (e = Km(t, 1, !1, null, null, a, i, s, u, h, v, null)),
        (t[Sn] = e.current),
        gu(t),
        new Ru(e)
      );
    }),
    (yl.hydrateRoot = function (t, e, a) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        u = bh,
        h = xh,
        v = Sh,
        x = null,
        M = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (h = a.onCaughtError),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (x = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (M = a.formState)),
        (e = Km(t, 1, !0, e, a ?? null, i, s, u, h, v, x, M)),
        (e.context = Pm(null)),
        (a = e.current),
        (i = je()),
        (i = Ao(i)),
        (s = Aa(i)),
        (s.callback = null),
        ja(a, s, i),
        (a = i),
        (e.current.lanes = a),
        xi(e, a),
        Fe(e),
        (t[Sn] = e.current),
        gu(t),
        new Js(e)
      );
    }),
    (yl.version = "19.1.0"),
    yl
  );
}
var h0;
function Kv() {
  if (h0) return Lu.exports;
  h0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (l) {
        console.error(l);
      }
  }
  return n(), (Lu.exports = Qv()), Lu.exports;
}
var Pv = Kv();
const Jv = Bg(Pv),
  Vg = Z.createContext({});
function go(n) {
  const l = Z.useRef(null);
  return l.current === null && (l.current = n()), l.current;
}
const jc = typeof window < "u",
  wc = jc ? Z.useLayoutEffect : Z.useEffect,
  Mc = Z.createContext(null);
function Nc(n, l) {
  n.indexOf(l) === -1 && n.push(l);
}
function Dc(n, l) {
  const o = n.indexOf(l);
  o > -1 && n.splice(o, 1);
}
const ta = (n, l, o) => (o > l ? l : o < n ? n : o);
let Fv = () => {},
  Oc = () => {};
const pa = {},
  Lg = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function Ug(n) {
  return typeof n == "object" && n !== null;
}
const _g = (n) => /^0[^.\s]+$/u.test(n);
function zc(n) {
  let l;
  return () => (l === void 0 && (l = n()), l);
}
const ye = (n) => n,
  Wv = (n, l) => (o) => l(n(o)),
  Cl = (...n) => n.reduce(Wv),
  hi = (n, l, o) => {
    const r = l - n;
    return r === 0 ? 1 : (o - n) / r;
  };
class Cc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Nc(this.subscriptions, l), () => Dc(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, r);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const We = (n) => n * 1e3,
  $e = (n) => n / 1e3;
function Rc(n, l) {
  return l ? n * (1e3 / l) : 0;
}
const Hg = (n, l, o) =>
    (((1 - 3 * o + 3 * l) * n + (3 * o - 6 * l)) * n + 3 * l) * n,
  $v = 1e-7,
  Iv = 12;
function tb(n, l, o, r, c) {
  let d,
    f,
    m = 0;
  do (f = l + (o - l) / 2), (d = Hg(f, r, c) - n), d > 0 ? (o = f) : (l = f);
  while (Math.abs(d) > $v && ++m < Iv);
  return f;
}
function Rl(n, l, o, r) {
  if (n === l && o === r) return ye;
  const c = (d) => tb(d, 0, 1, n, o);
  return (d) => (d === 0 || d === 1 ? d : Hg(c(d), l, r));
}
const Yg = (n) => (l) => l <= 0.5 ? n(2 * l) / 2 : (2 - n(2 * (1 - l))) / 2,
  qg = (n) => (l) => 1 - n(1 - l),
  Gg = Rl(0.33, 1.53, 0.69, 0.99),
  Bc = qg(Gg),
  kg = Yg(Bc),
  Xg = (n) =>
    (n *= 2) < 1 ? 0.5 * Bc(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  Vc = (n) => 1 - Math.sin(Math.acos(n)),
  Zg = qg(Vc),
  Qg = Yg(Vc),
  eb = Rl(0.42, 0, 1, 1),
  ab = Rl(0, 0, 0.58, 1),
  Kg = Rl(0.42, 0, 0.58, 1),
  nb = (n) => Array.isArray(n) && typeof n[0] != "number",
  Pg = (n) => Array.isArray(n) && typeof n[0] == "number",
  ib = {
    linear: ye,
    easeIn: eb,
    easeInOut: Kg,
    easeOut: ab,
    circIn: Vc,
    circInOut: Qg,
    circOut: Zg,
    backIn: Bc,
    backInOut: kg,
    backOut: Gg,
    anticipate: Xg,
  },
  lb = (n) => typeof n == "string",
  m0 = (n) => {
    if (Pg(n)) {
      Oc(n.length === 4);
      const [l, o, r, c] = n;
      return Rl(l, o, r, c);
    } else if (lb(n)) return ib[n];
    return n;
  },
  Ws = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function sb(n, l) {
  let o = new Set(),
    r = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(b) {
    f.has(b) && (y.schedule(b), n()), b(m);
  }
  const y = {
    schedule: (b, S = !1, A = !1) => {
      const U = A && c ? o : r;
      return S && f.add(b), U.has(b) || U.add(b), b;
    },
    cancel: (b) => {
      r.delete(b), f.delete(b);
    },
    process: (b) => {
      if (((m = b), c)) {
        d = !0;
        return;
      }
      (c = !0),
        ([o, r] = [r, o]),
        o.forEach(p),
        o.clear(),
        (c = !1),
        d && ((d = !1), y.process(b));
    },
  };
  return y;
}
const ob = 40;
function Jg(n, l) {
  let o = !1,
    r = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    f = Ws.reduce((H, st) => ((H[st] = sb(d)), H), {}),
    {
      setup: m,
      read: p,
      resolveKeyframes: y,
      preUpdate: b,
      update: S,
      preRender: A,
      render: O,
      postRender: U,
    } = f,
    q = () => {
      const H = pa.useManualTiming ? c.timestamp : performance.now();
      (o = !1),
        pa.useManualTiming ||
          (c.delta = r ? 1e3 / 60 : Math.max(Math.min(H - c.timestamp, ob), 1)),
        (c.timestamp = H),
        (c.isProcessing = !0),
        m.process(c),
        p.process(c),
        y.process(c),
        b.process(c),
        S.process(c),
        A.process(c),
        O.process(c),
        U.process(c),
        (c.isProcessing = !1),
        o && l && ((r = !1), n(q));
    },
    G = () => {
      (o = !0), (r = !0), c.isProcessing || n(q);
    };
  return {
    schedule: Ws.reduce((H, st) => {
      const Y = f[st];
      return (
        (H[st] = (lt, dt = !1, I = !1) => (o || G(), Y.schedule(lt, dt, I))), H
      );
    }, {}),
    cancel: (H) => {
      for (let st = 0; st < Ws.length; st++) f[Ws[st]].cancel(H);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: Et,
  cancel: ke,
  state: Jt,
  steps: Yu,
} = Jg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ye, !0);
let ao;
function rb() {
  ao = void 0;
}
const ge = {
    now: () => (
      ao === void 0 &&
        ge.set(
          Jt.isProcessing || pa.useManualTiming
            ? Jt.timestamp
            : performance.now()
        ),
      ao
    ),
    set: (n) => {
      (ao = n), queueMicrotask(rb);
    },
  },
  Fg = (n) => (l) => typeof l == "string" && l.startsWith(n),
  Lc = Fg("--"),
  ub = Fg("var(--"),
  Uc = (n) => (ub(n) ? cb.test(n.split("/*")[0].trim()) : !1),
  cb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  gi = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  wl = { ...gi, transform: (n) => ta(0, 1, n) },
  $s = { ...gi, default: 1 },
  xl = (n) => Math.round(n * 1e5) / 1e5,
  _c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function fb(n) {
  return n == null;
}
const db =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Hc = (n, l) => (o) =>
    !!(
      (typeof o == "string" && db.test(o) && o.startsWith(n)) ||
      (l && !fb(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  Wg = (n, l, o) => (r) => {
    if (typeof r != "string") return r;
    const [c, d, f, m] = r.match(_c);
    return {
      [n]: parseFloat(c),
      [l]: parseFloat(d),
      [o]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  hb = (n) => ta(0, 255, n),
  qu = { ...gi, transform: (n) => Math.round(hb(n)) },
  pn = {
    test: Hc("rgb", "red"),
    parse: Wg("red", "green", "blue"),
    transform: ({ red: n, green: l, blue: o, alpha: r = 1 }) =>
      "rgba(" +
      qu.transform(n) +
      ", " +
      qu.transform(l) +
      ", " +
      qu.transform(o) +
      ", " +
      xl(wl.transform(r)) +
      ")",
  };
function mb(n) {
  let l = "",
    o = "",
    r = "",
    c = "";
  return (
    n.length > 5
      ? ((l = n.substring(1, 3)),
        (o = n.substring(3, 5)),
        (r = n.substring(5, 7)),
        (c = n.substring(7, 9)))
      : ((l = n.substring(1, 2)),
        (o = n.substring(2, 3)),
        (r = n.substring(3, 4)),
        (c = n.substring(4, 5)),
        (l += l),
        (o += o),
        (r += r),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(o, 16),
      blue: parseInt(r, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const ic = { test: Hc("#"), parse: mb, transform: pn.transform },
  Bl = (n) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(n) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${n}`,
  }),
  Xa = Bl("deg"),
  Ie = Bl("%"),
  at = Bl("px"),
  gb = Bl("vh"),
  yb = Bl("vw"),
  g0 = {
    ...Ie,
    parse: (n) => Ie.parse(n) / 100,
    transform: (n) => Ie.transform(n * 100),
  },
  oi = {
    test: Hc("hsl", "hue"),
    parse: Wg("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: l, lightness: o, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Ie.transform(xl(l)) +
      ", " +
      Ie.transform(xl(o)) +
      ", " +
      xl(wl.transform(r)) +
      ")",
  },
  Yt = {
    test: (n) => pn.test(n) || ic.test(n) || oi.test(n),
    parse: (n) =>
      pn.test(n) ? pn.parse(n) : oi.test(n) ? oi.parse(n) : ic.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
        ? pn.transform(n)
        : oi.transform(n),
    getAnimatableNone: (n) => {
      const l = Yt.parse(n);
      return (l.alpha = 0), Yt.transform(l);
    },
  },
  pb =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function vb(n) {
  var l, o;
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (((l = n.match(_c)) == null ? void 0 : l.length) || 0) +
      (((o = n.match(pb)) == null ? void 0 : o.length) || 0) >
      0
  );
}
const $g = "number",
  Ig = "color",
  bb = "var",
  xb = "var(",
  y0 = "${}",
  Sb =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ml(n) {
  const l = n.toString(),
    o = [],
    r = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const m = l
    .replace(
      Sb,
      (p) => (
        Yt.test(p)
          ? (r.color.push(d), c.push(Ig), o.push(Yt.parse(p)))
          : p.startsWith(xb)
          ? (r.var.push(d), c.push(bb), o.push(p))
          : (r.number.push(d), c.push($g), o.push(parseFloat(p))),
        ++d,
        y0
      )
    )
    .split(y0);
  return { values: o, split: m, indexes: r, types: c };
}
function ty(n) {
  return Ml(n).values;
}
function ey(n) {
  const { split: l, types: o } = Ml(n),
    r = l.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < r; f++)
      if (((d += l[f]), c[f] !== void 0)) {
        const m = o[f];
        m === $g
          ? (d += xl(c[f]))
          : m === Ig
          ? (d += Yt.transform(c[f]))
          : (d += c[f]);
      }
    return d;
  };
}
const Tb = (n) =>
  typeof n == "number" ? 0 : Yt.test(n) ? Yt.getAnimatableNone(n) : n;
function Eb(n) {
  const l = ty(n);
  return ey(n)(l.map(Tb));
}
const Qa = {
  test: vb,
  parse: ty,
  createTransformer: ey,
  getAnimatableNone: Eb,
};
function Gu(n, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? n + (l - n) * 6 * o
      : o < 1 / 2
      ? l
      : o < 2 / 3
      ? n + (l - n) * (2 / 3 - o) * 6
      : n
  );
}
function Ab({ hue: n, saturation: l, lightness: o, alpha: r }) {
  (n /= 360), (l /= 100), (o /= 100);
  let c = 0,
    d = 0,
    f = 0;
  if (!l) c = d = f = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l,
      p = 2 * o - m;
    (c = Gu(p, m, n + 1 / 3)), (d = Gu(p, m, n)), (f = Gu(p, m, n - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: r,
  };
}
function ro(n, l) {
  return (o) => (o > 0 ? l : n);
}
const zt = (n, l, o) => n + (l - n) * o,
  ku = (n, l, o) => {
    const r = n * n,
      c = o * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  jb = [ic, pn, oi],
  wb = (n) => jb.find((l) => l.test(n));
function p0(n) {
  const l = wb(n);
  if (!l) return !1;
  let o = l.parse(n);
  return l === oi && (o = Ab(o)), o;
}
const v0 = (n, l) => {
    const o = p0(n),
      r = p0(l);
    if (!o || !r) return ro(n, l);
    const c = { ...o };
    return (d) => (
      (c.red = ku(o.red, r.red, d)),
      (c.green = ku(o.green, r.green, d)),
      (c.blue = ku(o.blue, r.blue, d)),
      (c.alpha = zt(o.alpha, r.alpha, d)),
      pn.transform(c)
    );
  },
  lc = new Set(["none", "hidden"]);
function Mb(n, l) {
  return lc.has(n) ? (o) => (o <= 0 ? n : l) : (o) => (o >= 1 ? l : n);
}
function Nb(n, l) {
  return (o) => zt(n, l, o);
}
function Yc(n) {
  return typeof n == "number"
    ? Nb
    : typeof n == "string"
    ? Uc(n)
      ? ro
      : Yt.test(n)
      ? v0
      : zb
    : Array.isArray(n)
    ? ay
    : typeof n == "object"
    ? Yt.test(n)
      ? v0
      : Db
    : ro;
}
function ay(n, l) {
  const o = [...n],
    r = o.length,
    c = n.map((d, f) => Yc(d)(d, l[f]));
  return (d) => {
    for (let f = 0; f < r; f++) o[f] = c[f](d);
    return o;
  };
}
function Db(n, l) {
  const o = { ...n, ...l },
    r = {};
  for (const c in o)
    n[c] !== void 0 && l[c] !== void 0 && (r[c] = Yc(n[c])(n[c], l[c]));
  return (c) => {
    for (const d in r) o[d] = r[d](c);
    return o;
  };
}
function Ob(n, l) {
  const o = [],
    r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      f = n.indexes[d][r[d]],
      m = n.values[f] ?? 0;
    (o[c] = m), r[d]++;
  }
  return o;
}
const zb = (n, l) => {
  const o = Qa.createTransformer(l),
    r = Ml(n),
    c = Ml(l);
  return r.indexes.var.length === c.indexes.var.length &&
    r.indexes.color.length === c.indexes.color.length &&
    r.indexes.number.length >= c.indexes.number.length
    ? (lc.has(n) && !c.values.length) || (lc.has(l) && !r.values.length)
      ? Mb(n, l)
      : Cl(ay(Ob(r, c), c.values), o)
    : ro(n, l);
};
function ny(n, l, o) {
  return typeof n == "number" && typeof l == "number" && typeof o == "number"
    ? zt(n, l, o)
    : Yc(n)(n, l);
}
const Cb = (n) => {
    const l = ({ timestamp: o }) => n(o);
    return {
      start: (o = !0) => Et.update(l, o),
      stop: () => ke(l),
      now: () => (Jt.isProcessing ? Jt.timestamp : ge.now()),
    };
  },
  iy = (n, l, o = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let d = 0; d < c; d++)
      r += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  uo = 2e4;
function qc(n) {
  let l = 0;
  const o = 50;
  let r = n.next(l);
  for (; !r.done && l < uo; ) (l += o), (r = n.next(l));
  return l >= uo ? 1 / 0 : l;
}
function Rb(n, l = 100, o) {
  const r = o({ ...n, keyframes: [0, l] }),
    c = Math.min(qc(r), uo);
  return {
    type: "keyframes",
    ease: (d) => r.next(c * d).value / l,
    duration: $e(c),
  };
}
const Bb = 5;
function ly(n, l, o) {
  const r = Math.max(l - Bb, 0);
  return Rc(o - n(r), l - r);
}
const Bt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Xu = 0.001;
function Vb({
  duration: n = Bt.duration,
  bounce: l = Bt.bounce,
  velocity: o = Bt.velocity,
  mass: r = Bt.mass,
}) {
  let c,
    d,
    f = 1 - l;
  (f = ta(Bt.minDamping, Bt.maxDamping, f)),
    (n = ta(Bt.minDuration, Bt.maxDuration, $e(n))),
    f < 1
      ? ((c = (y) => {
          const b = y * f,
            S = b * n,
            A = b - o,
            O = sc(y, f),
            U = Math.exp(-S);
          return Xu - (A / O) * U;
        }),
        (d = (y) => {
          const S = y * f * n,
            A = S * o + o,
            O = Math.pow(f, 2) * Math.pow(y, 2) * n,
            U = Math.exp(-S),
            q = sc(Math.pow(y, 2), f);
          return ((-c(y) + Xu > 0 ? -1 : 1) * ((A - O) * U)) / q;
        }))
      : ((c = (y) => {
          const b = Math.exp(-y * n),
            S = (y - o) * n + 1;
          return -Xu + b * S;
        }),
        (d = (y) => {
          const b = Math.exp(-y * n),
            S = (o - y) * (n * n);
          return b * S;
        }));
  const m = 5 / n,
    p = Ub(c, d, m);
  if (((n = We(n)), isNaN(p)))
    return { stiffness: Bt.stiffness, damping: Bt.damping, duration: n };
  {
    const y = Math.pow(p, 2) * r;
    return { stiffness: y, damping: f * 2 * Math.sqrt(r * y), duration: n };
  }
}
const Lb = 12;
function Ub(n, l, o) {
  let r = o;
  for (let c = 1; c < Lb; c++) r = r - n(r) / l(r);
  return r;
}
function sc(n, l) {
  return n * Math.sqrt(1 - l * l);
}
const _b = ["duration", "bounce"],
  Hb = ["stiffness", "damping", "mass"];
function b0(n, l) {
  return l.some((o) => n[o] !== void 0);
}
function Yb(n) {
  let l = {
    velocity: Bt.velocity,
    stiffness: Bt.stiffness,
    damping: Bt.damping,
    mass: Bt.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!b0(n, Hb) && b0(n, _b))
    if (n.visualDuration) {
      const o = n.visualDuration,
        r = (2 * Math.PI) / (o * 1.2),
        c = r * r,
        d = 2 * ta(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Bt.mass, stiffness: c, damping: d };
    } else {
      const o = Vb(n);
      (l = { ...l, ...o, mass: Bt.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function co(n = Bt.visualDuration, l = Bt.bounce) {
  const o =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: l }
      : n;
  let { restSpeed: r, restDelta: c } = o;
  const d = o.keyframes[0],
    f = o.keyframes[o.keyframes.length - 1],
    m = { done: !1, value: d },
    {
      stiffness: p,
      damping: y,
      mass: b,
      duration: S,
      velocity: A,
      isResolvedFromDuration: O,
    } = Yb({ ...o, velocity: -$e(o.velocity || 0) }),
    U = A || 0,
    q = y / (2 * Math.sqrt(p * b)),
    G = f - d,
    k = $e(Math.sqrt(p / b)),
    F = Math.abs(G) < 5;
  r || (r = F ? Bt.restSpeed.granular : Bt.restSpeed.default),
    c || (c = F ? Bt.restDelta.granular : Bt.restDelta.default);
  let H;
  if (q < 1) {
    const Y = sc(k, q);
    H = (lt) => {
      const dt = Math.exp(-q * k * lt);
      return (
        f -
        dt * (((U + q * k * G) / Y) * Math.sin(Y * lt) + G * Math.cos(Y * lt))
      );
    };
  } else if (q === 1) H = (Y) => f - Math.exp(-k * Y) * (G + (U + k * G) * Y);
  else {
    const Y = k * Math.sqrt(q * q - 1);
    H = (lt) => {
      const dt = Math.exp(-q * k * lt),
        I = Math.min(Y * lt, 300);
      return (
        f - (dt * ((U + q * k * G) * Math.sinh(I) + Y * G * Math.cosh(I))) / Y
      );
    };
  }
  const st = {
    calculatedDuration: (O && S) || null,
    next: (Y) => {
      const lt = H(Y);
      if (O) m.done = Y >= S;
      else {
        let dt = Y === 0 ? U : 0;
        q < 1 && (dt = Y === 0 ? We(U) : ly(H, Y, lt));
        const I = Math.abs(dt) <= r,
          wt = Math.abs(f - lt) <= c;
        m.done = I && wt;
      }
      return (m.value = m.done ? f : lt), m;
    },
    toString: () => {
      const Y = Math.min(qc(st), uo),
        lt = iy((dt) => st.next(Y * dt).value, Y, 30);
      return Y + "ms " + lt;
    },
    toTransition: () => {},
  };
  return st;
}
co.applyToOptions = (n) => {
  const l = Rb(n, 100, co);
  return (
    (n.ease = l.ease), (n.duration = We(l.duration)), (n.type = "keyframes"), n
  );
};
function oc({
  keyframes: n,
  velocity: l = 0,
  power: o = 0.8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: m,
  max: p,
  restDelta: y = 0.5,
  restSpeed: b,
}) {
  const S = n[0],
    A = { done: !1, value: S },
    O = (I) => (m !== void 0 && I < m) || (p !== void 0 && I > p),
    U = (I) =>
      m === void 0
        ? p
        : p === void 0 || Math.abs(m - I) < Math.abs(p - I)
        ? m
        : p;
  let q = o * l;
  const G = S + q,
    k = f === void 0 ? G : f(G);
  k !== G && (q = k - S);
  const F = (I) => -q * Math.exp(-I / r),
    H = (I) => k + F(I),
    st = (I) => {
      const wt = F(I),
        qt = H(I);
      (A.done = Math.abs(wt) <= y), (A.value = A.done ? k : qt);
    };
  let Y, lt;
  const dt = (I) => {
    O(A.value) &&
      ((Y = I),
      (lt = co({
        keyframes: [A.value, U(A.value)],
        velocity: ly(H, I, A.value),
        damping: c,
        stiffness: d,
        restDelta: y,
        restSpeed: b,
      })));
  };
  return (
    dt(0),
    {
      calculatedDuration: null,
      next: (I) => {
        let wt = !1;
        return (
          !lt && Y === void 0 && ((wt = !0), st(I), dt(I)),
          Y !== void 0 && I >= Y ? lt.next(I - Y) : (!wt && st(I), A)
        );
      },
    }
  );
}
function qb(n, l, o) {
  const r = [],
    c = o || pa.mix || ny,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let m = c(n[f], n[f + 1]);
    if (l) {
      const p = Array.isArray(l) ? l[f] || ye : l;
      m = Cl(p, m);
    }
    r.push(m);
  }
  return r;
}
function Gc(n, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const d = n.length;
  if ((Oc(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (l = [...l].reverse()));
  const m = qb(l, r, c),
    p = m.length,
    y = (b) => {
      if (f && b < n[0]) return l[0];
      let S = 0;
      if (p > 1) for (; S < n.length - 2 && !(b < n[S + 1]); S++);
      const A = hi(n[S], n[S + 1], b);
      return m[S](A);
    };
  return o ? (b) => y(ta(n[0], n[d - 1], b)) : y;
}
function Gb(n, l) {
  const o = n[n.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = hi(0, l, r);
    n.push(zt(o, 1, c));
  }
}
function sy(n) {
  const l = [0];
  return Gb(l, n.length - 1), l;
}
function kb(n, l) {
  return n.map((o) => o * l);
}
function Xb(n, l) {
  return n.map(() => l || Kg).splice(0, n.length - 1);
}
function Sl({
  duration: n = 300,
  keyframes: l,
  times: o,
  ease: r = "easeInOut",
}) {
  const c = nb(r) ? r.map(m0) : m0(r),
    d = { done: !1, value: l[0] },
    f = kb(o && o.length === l.length ? o : sy(l), n),
    m = Gc(f, l, { ease: Array.isArray(c) ? c : Xb(l, c) });
  return {
    calculatedDuration: n,
    next: (p) => ((d.value = m(p)), (d.done = p >= n), d),
  };
}
const Zb = (n) => n !== null;
function kc(n, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const d = n.filter(Zb),
    m = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : d.length - 1;
  return !m || r === void 0 ? d[m] : r;
}
const Qb = { decay: oc, inertia: oc, tween: Sl, keyframes: Sl, spring: co };
function oy(n) {
  typeof n.type == "string" && (n.type = Qb[n.type]);
}
class Xc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const Kb = (n) => n / 100;
class Zc extends Xc {
  constructor(l) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, c;
        const { motionValue: o } = this.options;
        o && o.updatedAt !== ge.now() && this.tick(ge.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (r = this.options).onStop) == null || c.call(r));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    oy(l);
    const {
      type: o = Sl,
      repeat: r = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: f = 0,
    } = l;
    let { keyframes: m } = l;
    const p = o || Sl;
    p !== Sl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Cl(Kb, ny(m[0], m[1]))), (m = [0, 100]));
    const y = p({ ...l, keyframes: m });
    d === "mirror" &&
      (this.mirroredGenerator = p({
        ...l,
        keyframes: [...m].reverse(),
        velocity: -f,
      })),
      y.calculatedDuration === null && (y.calculatedDuration = qc(y));
    const { calculatedDuration: b } = y;
    (this.calculatedDuration = b),
      (this.resolvedDuration = b + c),
      (this.totalDuration = this.resolvedDuration * (r + 1) - c),
      (this.generator = y);
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(l, o = !1) {
    const {
      generator: r,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: y = 0,
      keyframes: b,
      repeat: S,
      repeatType: A,
      repeatDelay: O,
      type: U,
      onUpdate: q,
      finalKeyframe: G,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      o ? (this.currentTime = l) : this.updateTime(l);
    const k = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      F = this.playbackSpeed >= 0 ? k < 0 : k > c;
    (this.currentTime = Math.max(k, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let H = this.currentTime,
      st = r;
    if (S) {
      const I = Math.min(this.currentTime, c) / m;
      let wt = Math.floor(I),
        qt = I % 1;
      !qt && I >= 1 && (qt = 1),
        qt === 1 && wt--,
        (wt = Math.min(wt, S + 1)),
        !!(wt % 2) &&
          (A === "reverse"
            ? ((qt = 1 - qt), O && (qt -= O / m))
            : A === "mirror" && (st = f)),
        (H = ta(0, 1, qt) * m);
    }
    const Y = F ? { done: !1, value: b[0] } : st.next(H);
    d && (Y.value = d(Y.value));
    let { done: lt } = Y;
    !F &&
      p !== null &&
      (lt =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const dt =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && lt));
    return (
      dt && U !== oc && (Y.value = kc(b, this.options, G, this.speed)),
      q && q(Y.value),
      dt && this.finish(),
      Y
    );
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return $e(this.calculatedDuration);
  }
  get time() {
    return $e(this.currentTime);
  }
  set time(l) {
    var o;
    (l = We(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      (o = this.driver) == null || o.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    this.updateTime(ge.now());
    const o = this.playbackSpeed !== l;
    (this.playbackSpeed = l), o && (this.time = $e(this.currentTime));
  }
  play() {
    var c, d;
    if (this.isStopped) return;
    const { driver: l = Cb, startTime: o } = this.options;
    this.driver || (this.driver = l((f) => this.tick(f))),
      (d = (c = this.options).onPlay) == null || d.call(c);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = o ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(ge.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var l, o;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (o = (l = this.options).onComplete) == null || o.call(l);
  }
  cancel() {
    var l, o;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (o = (l = this.options).onCancel) == null || o.call(l);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  attachTimeline(l) {
    var o;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (o = this.driver) == null || o.stop(),
      l.observe(this)
    );
  }
}
function Pb(n) {
  for (let l = 1; l < n.length; l++) n[l] ?? (n[l] = n[l - 1]);
}
const vn = (n) => (n * 180) / Math.PI,
  rc = (n) => {
    const l = vn(Math.atan2(n[1], n[0]));
    return uc(l);
  },
  Jb = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: rc,
    rotateZ: rc,
    skewX: (n) => vn(Math.atan(n[1])),
    skewY: (n) => vn(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  uc = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  x0 = rc,
  S0 = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  T0 = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  Fb = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: S0,
    scaleY: T0,
    scale: (n) => (S0(n) + T0(n)) / 2,
    rotateX: (n) => uc(vn(Math.atan2(n[6], n[5]))),
    rotateY: (n) => uc(vn(Math.atan2(-n[2], n[0]))),
    rotateZ: x0,
    rotate: x0,
    skewX: (n) => vn(Math.atan(n[4])),
    skewY: (n) => vn(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function cc(n) {
  return n.includes("scale") ? 1 : 0;
}
function fc(n, l) {
  if (!n || n === "none") return cc(l);
  const o = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o) (r = Fb), (c = o);
  else {
    const m = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = Jb), (c = m);
  }
  if (!c) return cc(l);
  const d = r[l],
    f = c[1].split(",").map($b);
  return typeof d == "function" ? d(f) : f[d];
}
const Wb = (n, l) => {
  const { transform: o = "none" } = getComputedStyle(n);
  return fc(o, l);
};
function $b(n) {
  return parseFloat(n.trim());
}
const yi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  pi = new Set(yi),
  E0 = (n) => n === gi || n === at,
  Ib = new Set(["x", "y", "z"]),
  tx = yi.filter((n) => !Ib.has(n));
function ex(n) {
  const l = [];
  return (
    tx.forEach((o) => {
      const r = n.getValue(o);
      r !== void 0 &&
        (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const bn = {
  width: ({ x: n }, { paddingLeft: l = "0", paddingRight: o = "0" }) =>
    n.max - n.min - parseFloat(l) - parseFloat(o),
  height: ({ y: n }, { paddingTop: l = "0", paddingBottom: o = "0" }) =>
    n.max - n.min - parseFloat(l) - parseFloat(o),
  top: (n, { top: l }) => parseFloat(l),
  left: (n, { left: l }) => parseFloat(l),
  bottom: ({ y: n }, { top: l }) => parseFloat(l) + (n.max - n.min),
  right: ({ x: n }, { left: l }) => parseFloat(l) + (n.max - n.min),
  x: (n, { transform: l }) => fc(l, "x"),
  y: (n, { transform: l }) => fc(l, "y"),
};
bn.translateX = bn.x;
bn.translateY = bn.y;
const xn = new Set();
let dc = !1,
  hc = !1,
  mc = !1;
function ry() {
  if (hc) {
    const n = Array.from(xn).filter((r) => r.needsMeasurement),
      l = new Set(n.map((r) => r.element)),
      o = new Map();
    l.forEach((r) => {
      const c = ex(r);
      c.length && (o.set(r, c), r.render());
    }),
      n.forEach((r) => r.measureInitialState()),
      l.forEach((r) => {
        r.render();
        const c = o.get(r);
        c &&
          c.forEach(([d, f]) => {
            var m;
            (m = r.getValue(d)) == null || m.set(f);
          });
      }),
      n.forEach((r) => r.measureEndState()),
      n.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (hc = !1), (dc = !1), xn.forEach((n) => n.complete(mc)), xn.clear();
}
function uy() {
  xn.forEach((n) => {
    n.readKeyframes(), n.needsMeasurement && (hc = !0);
  });
}
function ax() {
  (mc = !0), uy(), ry(), (mc = !1);
}
class Qc {
  constructor(l, o, r, c, d, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = o),
      (this.name = r),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (xn.add(this),
          dc || ((dc = !0), Et.read(uy), Et.resolveKeyframes(ry)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: o,
      element: r,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const d = c == null ? void 0 : c.get(),
        f = l[l.length - 1];
      if (d !== void 0) l[0] = d;
      else if (r && o) {
        const m = r.readValue(o, f);
        m != null && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = f), c && d === void 0 && c.set(l[0]);
    }
    Pb(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      xn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (xn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const nx = (n) => n.startsWith("--");
function ix(n, l, o) {
  nx(l) ? n.style.setProperty(l, o) : (n.style[l] = o);
}
const cy = zc(() => window.ScrollTimeline !== void 0),
  lx = {};
function sx(n, l) {
  const o = zc(n);
  return () => lx[l] ?? o();
}
const fy = sx(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  bl = ([n, l, o, r]) => `cubic-bezier(${n}, ${l}, ${o}, ${r})`,
  A0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: bl([0, 0.65, 0.55, 1]),
    circOut: bl([0.55, 0, 1, 0.45]),
    backIn: bl([0.31, 0.01, 0.66, -0.59]),
    backOut: bl([0.33, 1.53, 0.69, 0.99]),
  };
function dy(n, l) {
  if (n)
    return typeof n == "function"
      ? fy()
        ? iy(n, l)
        : "ease-out"
      : Pg(n)
      ? bl(n)
      : Array.isArray(n)
      ? n.map((o) => dy(o, l) || A0.easeOut)
      : A0[n];
}
function ox(
  n,
  l,
  o,
  {
    delay: r = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: p,
  } = {},
  y = void 0
) {
  const b = { [l]: o };
  p && (b.offset = p);
  const S = dy(m, c);
  Array.isArray(S) && (b.easing = S);
  const A = {
    delay: r,
    duration: c,
    easing: Array.isArray(S) ? "linear" : S,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return y && (A.pseudoElement = y), n.animate(b, A);
}
function hy(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function rx({ type: n, ...l }) {
  return hy(n) && fy()
    ? n.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class ux extends Xc {
  constructor(l) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !l))
      return;
    const {
      element: o,
      name: r,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: p,
    } = l;
    (this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = l),
      Oc(typeof l.type != "string");
    const y = rx(l);
    (this.animation = ox(o, r, c, y, d)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const b = kc(c, this.options, m, this.speed);
          this.updateMotionValue ? this.updateMotionValue(b) : ix(o, r, b),
            this.animation.cancel();
        }
        p == null || p(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, o;
    (o = (l = this.animation).finish) == null || o.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var l, o;
    this.isPseudoElement ||
      (o = (l = this.animation).commitStyles) == null ||
      o.call(l);
  }
  get duration() {
    var o, r;
    const l =
      ((r =
        (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) ==
      null
        ? void 0
        : r.call(o).duration) || 0;
    return $e(Number(l));
  }
  get time() {
    return $e(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    (this.finishedTime = null), (this.animation.currentTime = We(l));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(l) {
    this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, observe: o }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      l && cy() ? ((this.animation.timeline = l), ye) : o(this)
    );
  }
}
const my = { anticipate: Xg, backInOut: kg, circInOut: Qg };
function cx(n) {
  return n in my;
}
function fx(n) {
  typeof n.ease == "string" && cx(n.ease) && (n.ease = my[n.ease]);
}
const j0 = 10;
class dx extends ux {
  constructor(l) {
    fx(l),
      oy(l),
      super(l),
      l.startTime && (this.startTime = l.startTime),
      (this.options = l);
  }
  updateMotionValue(l) {
    const {
      motionValue: o,
      onUpdate: r,
      onComplete: c,
      element: d,
      ...f
    } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const m = new Zc({ ...f, autoplay: !1 }),
      p = We(this.finishedTime ?? this.time);
    o.setWithVelocity(m.sample(p - j0).value, m.sample(p).value, j0), m.stop();
  }
}
const w0 = (n, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (Qa.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function hx(n) {
  const l = n[0];
  if (n.length === 1) return !0;
  for (let o = 0; o < n.length; o++) if (n[o] !== l) return !0;
}
function mx(n, l, o, r) {
  const c = n[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = n[n.length - 1],
    f = w0(c, l),
    m = w0(d, l);
  return !f || !m ? !1 : hx(n) || ((o === "spring" || hy(o)) && r);
}
function Kc(n) {
  return Ug(n) && "offsetHeight" in n;
}
const gx = new Set(["opacity", "clipPath", "filter", "transform"]),
  yx = zc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function px(n) {
  var y;
  const {
    motionValue: l,
    name: o,
    repeatDelay: r,
    repeatType: c,
    damping: d,
    type: f,
  } = n;
  if (!Kc((y = l == null ? void 0 : l.owner) == null ? void 0 : y.current))
    return !1;
  const { onUpdate: m, transformTemplate: p } = l.owner.getProps();
  return (
    yx() &&
    o &&
    gx.has(o) &&
    (o !== "transform" || !p) &&
    !m &&
    !r &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const vx = 40;
class bx extends Xc {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: p,
    motionValue: y,
    element: b,
    ...S
  }) {
    var U;
    super(),
      (this.stop = () => {
        var q, G;
        this._animation &&
          (this._animation.stop(),
          (q = this.stopTimeline) == null || q.call(this)),
          (G = this.keyframeResolver) == null || G.cancel();
      }),
      (this.createdAt = ge.now());
    const A = {
        autoplay: l,
        delay: o,
        type: r,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: p,
        motionValue: y,
        element: b,
        ...S,
      },
      O = (b == null ? void 0 : b.KeyframeResolver) || Qc;
    (this.keyframeResolver = new O(
      m,
      (q, G, k) => this.onKeyframesResolved(q, G, A, !k),
      p,
      y,
      b
    )),
      (U = this.keyframeResolver) == null || U.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: m,
      delay: p,
      isHandoff: y,
      onUpdate: b,
    } = r;
    (this.resolvedAt = ge.now()),
      mx(l, d, f, m) ||
        ((pa.instantAnimations || !p) && (b == null || b(kc(l, r, o))),
        (l[0] = l[l.length - 1]),
        (r.duration = 0),
        (r.repeat = 0));
    const A = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > vx
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...r,
        keyframes: l,
      },
      O =
        !y && px(A)
          ? new dx({ ...A, element: A.motionValue.owner.current })
          : new Zc(A);
    O.finished.then(() => this.notifyFinished()).catch(ye),
      this.pendingTimeline &&
        ((this.stopTimeline = O.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = O);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    var l;
    return (
      this._animation ||
        ((l = this.keyframeResolver) == null || l.resume(), ax()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    this._animation && this.animation.cancel(),
      (l = this.keyframeResolver) == null || l.cancel();
  }
}
const xx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Sx(n) {
  const l = xx.exec(n);
  if (!l) return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function gy(n, l, o = 1) {
  const [r, c] = Sx(n);
  if (!r) return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const f = d.trim();
    return Lg(f) ? parseFloat(f) : f;
  }
  return Uc(c) ? gy(c, l, o + 1) : c;
}
function Pc(n, l) {
  return (n == null ? void 0 : n[l]) ?? (n == null ? void 0 : n.default) ?? n;
}
const yy = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...yi,
  ]),
  Tx = { test: (n) => n === "auto", parse: (n) => n },
  py = (n) => (l) => l.test(n),
  vy = [gi, at, Ie, Xa, yb, gb, Tx],
  M0 = (n) => vy.find(py(n));
function Ex(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
    ? n === "none" || n === "0" || _g(n)
    : !0;
}
const Ax = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jx(n) {
  const [l, o] = n.slice(0, -1).split("(");
  if (l === "drop-shadow") return n;
  const [r] = o.match(_c) || [];
  if (!r) return n;
  const c = o.replace(r, "");
  let d = Ax.has(l) ? 1 : 0;
  return r !== o && (d *= 100), l + "(" + d + c + ")";
}
const wx = /\b([a-z-]*)\(.*?\)/gu,
  gc = {
    ...Qa,
    getAnimatableNone: (n) => {
      const l = n.match(wx);
      return l ? l.map(jx).join(" ") : n;
    },
  },
  N0 = { ...gi, transform: Math.round },
  Mx = {
    rotate: Xa,
    rotateX: Xa,
    rotateY: Xa,
    rotateZ: Xa,
    scale: $s,
    scaleX: $s,
    scaleY: $s,
    scaleZ: $s,
    skew: Xa,
    skewX: Xa,
    skewY: Xa,
    distance: at,
    translateX: at,
    translateY: at,
    translateZ: at,
    x: at,
    y: at,
    z: at,
    perspective: at,
    transformPerspective: at,
    opacity: wl,
    originX: g0,
    originY: g0,
    originZ: at,
  },
  Jc = {
    borderWidth: at,
    borderTopWidth: at,
    borderRightWidth: at,
    borderBottomWidth: at,
    borderLeftWidth: at,
    borderRadius: at,
    radius: at,
    borderTopLeftRadius: at,
    borderTopRightRadius: at,
    borderBottomRightRadius: at,
    borderBottomLeftRadius: at,
    width: at,
    maxWidth: at,
    height: at,
    maxHeight: at,
    top: at,
    right: at,
    bottom: at,
    left: at,
    padding: at,
    paddingTop: at,
    paddingRight: at,
    paddingBottom: at,
    paddingLeft: at,
    margin: at,
    marginTop: at,
    marginRight: at,
    marginBottom: at,
    marginLeft: at,
    backgroundPositionX: at,
    backgroundPositionY: at,
    ...Mx,
    zIndex: N0,
    fillOpacity: wl,
    strokeOpacity: wl,
    numOctaves: N0,
  },
  Nx = {
    ...Jc,
    color: Yt,
    backgroundColor: Yt,
    outlineColor: Yt,
    fill: Yt,
    stroke: Yt,
    borderColor: Yt,
    borderTopColor: Yt,
    borderRightColor: Yt,
    borderBottomColor: Yt,
    borderLeftColor: Yt,
    filter: gc,
    WebkitFilter: gc,
  },
  by = (n) => Nx[n];
function xy(n, l) {
  let o = by(n);
  return (
    o !== gc && (o = Qa), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
  );
}
const Dx = new Set(["auto", "none", "0"]);
function Ox(n, l, o) {
  let r = 0,
    c;
  for (; r < n.length && !c; ) {
    const d = n[r];
    typeof d == "string" && !Dx.has(d) && Ml(d).values.length && (c = n[r]),
      r++;
  }
  if (c && o) for (const d of l) n[d] = xy(o, c);
}
class zx extends Qc {
  constructor(l, o, r, c, d) {
    super(l, o, r, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let p = 0; p < l.length; p++) {
      let y = l[p];
      if (typeof y == "string" && ((y = y.trim()), Uc(y))) {
        const b = gy(y, o.current);
        b !== void 0 && (l[p] = b),
          p === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if ((this.resolveNoneKeyframes(), !yy.has(r) || l.length !== 2)) return;
    const [c, d] = l,
      f = M0(c),
      m = M0(d);
    if (f !== m)
      if (E0(f) && E0(m))
        for (let p = 0; p < l.length; p++) {
          const y = l[p];
          typeof y == "string" && (l[p] = parseFloat(y));
        }
      else bn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      r = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || Ex(l[c])) && r.push(c);
    r.length && Ox(l, r, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = bn[r](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (o[0] = this.measuredOrigin);
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: o, unresolvedKeyframes: r } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = r.length - 1,
      f = r[d];
    (r[d] = bn[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([p, y]) => {
          l.getValue(p).set(y);
        }),
      this.resolveNoneKeyframes();
  }
}
function Sy(n, l, o) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    const c = document.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n);
}
const Ty = (n, l) => (l && typeof n == "number" ? l.transform(n) : n),
  D0 = 30,
  Cx = (n) => !isNaN(parseFloat(n)),
  Tl = { current: void 0 };
class Rx {
  constructor(l, o = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, c = !0) => {
        var f, m;
        const d = ge.now();
        if (
          (this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((f = this.events.change) == null || f.notify(this.current),
            this.dependents))
        )
          for (const p of this.dependents) p.dirty();
        c &&
          ((m = this.events.renderRequest) == null || m.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = o.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = ge.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = Cx(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Cc());
    const r = this.events[l].add(o);
    return l === "change"
      ? () => {
          r(),
            Et.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, o) {
    (this.passiveEffect = l), (this.stopPassiveEffect = o);
  }
  set(l, o = !0) {
    !o || !this.passiveEffect
      ? this.updateAndNotify(l, o)
      : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, o, r) {
    this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(l, o = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return Tl.current && Tl.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = ge.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > D0
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, D0);
    return Rc(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((o) => {
        (this.hasAnimated = !0),
          (this.animation = l(o)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var l, o;
    (l = this.dependents) == null || l.clear(),
      (o = this.events.destroy) == null || o.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ge(n, l) {
  return new Rx(n, l);
}
const { schedule: Fc } = Jg(queueMicrotask, !1),
  qe = { x: !1, y: !1 };
function Ey() {
  return qe.x || qe.y;
}
function Bx(n) {
  return n === "x" || n === "y"
    ? qe[n]
      ? null
      : ((qe[n] = !0),
        () => {
          qe[n] = !1;
        })
    : qe.x || qe.y
    ? null
    : ((qe.x = qe.y = !0),
      () => {
        qe.x = qe.y = !1;
      });
}
function Ay(n, l) {
  const o = Sy(n),
    r = new AbortController(),
    c = { passive: !0, ...l, signal: r.signal };
  return [o, c, () => r.abort()];
}
function O0(n) {
  return !(n.pointerType === "touch" || Ey());
}
function Vx(n, l, o = {}) {
  const [r, c, d] = Ay(n, o),
    f = (m) => {
      if (!O0(m)) return;
      const { target: p } = m,
        y = l(p, m);
      if (typeof y != "function" || !p) return;
      const b = (S) => {
        O0(S) && (y(S), p.removeEventListener("pointerleave", b));
      };
      p.addEventListener("pointerleave", b, c);
    };
  return (
    r.forEach((m) => {
      m.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const jy = (n, l) => (l ? (n === l ? !0 : jy(n, l.parentElement)) : !1),
  Wc = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  Lx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Ux(n) {
  return Lx.has(n.tagName) || n.tabIndex !== -1;
}
const no = new WeakSet();
function z0(n) {
  return (l) => {
    l.key === "Enter" && n(l);
  };
}
function Zu(n, l) {
  n.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const _x = (n, l) => {
  const o = n.currentTarget;
  if (!o) return;
  const r = z0(() => {
    if (no.has(o)) return;
    Zu(o, "down");
    const c = z0(() => {
        Zu(o, "up");
      }),
      d = () => Zu(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", d, l);
  });
  o.addEventListener("keydown", r, l),
    o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function C0(n) {
  return Wc(n) && !Ey();
}
function Hx(n, l, o = {}) {
  const [r, c, d] = Ay(n, o),
    f = (m) => {
      const p = m.currentTarget;
      if (!C0(m)) return;
      no.add(p);
      const y = l(p, m),
        b = (O, U) => {
          window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", A),
            no.has(p) && no.delete(p),
            C0(O) && typeof y == "function" && y(O, { success: U });
        },
        S = (O) => {
          b(
            O,
            p === window ||
              p === document ||
              o.useGlobalTarget ||
              jy(p, O.target)
          );
        },
        A = (O) => {
          b(O, !1);
        };
      window.addEventListener("pointerup", S, c),
        window.addEventListener("pointercancel", A, c);
    };
  return (
    r.forEach((m) => {
      (o.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        Kc(m) &&
          (m.addEventListener("focus", (y) => _x(y, c)),
          !Ux(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    d
  );
}
function $c(n) {
  return Ug(n) && "ownerSVGElement" in n;
}
const io = new WeakMap();
let Za;
const wy = (n, l, o) => (r, c) =>
    c && c[0]
      ? c[0][n + "Size"]
      : $c(r) && "getBBox" in r
      ? r.getBBox()[l]
      : r[o],
  Yx = wy("inline", "width", "offsetWidth"),
  qx = wy("block", "height", "offsetHeight");
function Gx({ target: n, borderBoxSize: l }) {
  var o;
  (o = io.get(n)) == null ||
    o.forEach((r) => {
      r(n, {
        get width() {
          return Yx(n, l);
        },
        get height() {
          return qx(n, l);
        },
      });
    });
}
function kx(n) {
  n.forEach(Gx);
}
function Xx() {
  typeof ResizeObserver > "u" || (Za = new ResizeObserver(kx));
}
function Zx(n, l) {
  Za || Xx();
  const o = Sy(n);
  return (
    o.forEach((r) => {
      let c = io.get(r);
      c || ((c = new Set()), io.set(r, c)),
        c.add(l),
        Za == null || Za.observe(r);
    }),
    () => {
      o.forEach((r) => {
        const c = io.get(r);
        c == null || c.delete(l),
          (c != null && c.size) || Za == null || Za.unobserve(r);
      });
    }
  );
}
const lo = new Set();
let ri;
function Qx() {
  (ri = () => {
    const n = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    lo.forEach((l) => l(n));
  }),
    window.addEventListener("resize", ri);
}
function Kx(n) {
  return (
    lo.add(n),
    ri || Qx(),
    () => {
      lo.delete(n),
        !lo.size &&
          typeof ri == "function" &&
          (window.removeEventListener("resize", ri), (ri = void 0));
    }
  );
}
function Px(n, l) {
  return typeof n == "function" ? Kx(n) : Zx(n, l);
}
function My(n, l) {
  let o;
  const r = () => {
    const { currentTime: c } = l,
      f = (c === null ? 0 : c.value) / 100;
    o !== f && n(f), (o = f);
  };
  return Et.preUpdate(r, !0), () => ke(r);
}
function Jx(n) {
  return $c(n) && n.tagName === "svg";
}
function Fx(...n) {
  const l = !Array.isArray(n[0]),
    o = l ? 0 : -1,
    r = n[0 + o],
    c = n[1 + o],
    d = n[2 + o],
    f = n[3 + o],
    m = Gc(c, d, f);
  return l ? m(r) : m;
}
const se = (n) => !!(n && n.getVelocity),
  Wx = [...vy, Yt, Qa],
  $x = (n) => Wx.find(py(n)),
  Ic = Z.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function Ix(n = !0) {
  const l = Z.useContext(Mc);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l,
    d = Z.useId();
  Z.useEffect(() => {
    if (n) return c(d);
  }, [n]);
  const f = Z.useCallback(() => n && r && r(d), [d, r, n]);
  return !o && r ? [!1, f] : [!0];
}
const Ny = Z.createContext({ strict: !1 }),
  R0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  mi = {};
for (const n in R0) mi[n] = { isEnabled: (l) => R0[n].some((o) => !!l[o]) };
function t2(n) {
  for (const l in n) mi[l] = { ...mi[l], ...n[l] };
}
const e2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function fo(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    e2.has(n)
  );
}
let Dy = (n) => !fo(n);
function a2(n) {
  typeof n == "function" && (Dy = (l) => (l.startsWith("on") ? !fo(l) : n(l)));
}
try {
  a2(require("@emotion/is-prop-valid").default);
} catch {}
function n2(n, l, o) {
  const r = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Dy(c) ||
        (o === !0 && fo(c)) ||
        (!l && !fo(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (r[c] = n[c]));
  return r;
}
function i2(n) {
  if (typeof Proxy > "u") return n;
  const l = new Map(),
    o = (...r) => n(...r);
  return new Proxy(o, {
    get: (r, c) =>
      c === "create" ? n : (l.has(c) || l.set(c, n(c)), l.get(c)),
  });
}
const yo = Z.createContext({});
function po(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Nl(n) {
  return typeof n == "string" || Array.isArray(n);
}
const tf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  ef = ["initial", ...tf];
function vo(n) {
  return po(n.animate) || ef.some((l) => Nl(n[l]));
}
function Oy(n) {
  return !!(vo(n) || n.variants);
}
function l2(n, l) {
  if (vo(n)) {
    const { initial: o, animate: r } = n;
    return {
      initial: o === !1 || Nl(o) ? o : void 0,
      animate: Nl(r) ? r : void 0,
    };
  }
  return n.inherit !== !1 ? l : {};
}
function s2(n) {
  const { initial: l, animate: o } = l2(n, Z.useContext(yo));
  return Z.useMemo(() => ({ initial: l, animate: o }), [B0(l), B0(o)]);
}
function B0(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const o2 = Symbol.for("motionComponentSymbol");
function ui(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function r2(n, l, o) {
  return Z.useCallback(
    (r) => {
      r && n.onMount && n.onMount(r),
        l && (r ? l.mount(r) : l.unmount()),
        o && (typeof o == "function" ? o(r) : ui(o) && (o.current = r));
    },
    [l]
  );
}
const af = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  u2 = "framerAppearId",
  zy = "data-" + af(u2),
  Cy = Z.createContext({});
function c2(n, l, o, r, c) {
  var q, G;
  const { visualElement: d } = Z.useContext(yo),
    f = Z.useContext(Ny),
    m = Z.useContext(Mc),
    p = Z.useContext(Ic).reducedMotion,
    y = Z.useRef(null);
  (r = r || f.renderer),
    !y.current &&
      r &&
      (y.current = r(n, {
        visualState: l,
        parent: d,
        props: o,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: p,
      }));
  const b = y.current,
    S = Z.useContext(Cy);
  b &&
    !b.projection &&
    c &&
    (b.type === "html" || b.type === "svg") &&
    f2(y.current, o, c, S);
  const A = Z.useRef(!1);
  Z.useInsertionEffect(() => {
    b && A.current && b.update(o, m);
  });
  const O = o[zy],
    U = Z.useRef(
      !!O &&
        !((q = window.MotionHandoffIsComplete) != null && q.call(window, O)) &&
        ((G = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : G.call(window, O))
    );
  return (
    wc(() => {
      b &&
        ((A.current = !0),
        (window.MotionIsMounted = !0),
        b.updateFeatures(),
        Fc.render(b.render),
        U.current && b.animationState && b.animationState.animateChanges());
    }),
    Z.useEffect(() => {
      b &&
        (!U.current && b.animationState && b.animationState.animateChanges(),
        U.current &&
          (queueMicrotask(() => {
            var k;
            (k = window.MotionHandoffMarkAsComplete) == null ||
              k.call(window, O);
          }),
          (U.current = !1)));
    }),
    b
  );
}
function f2(n, l, o, r) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: m,
    layoutScroll: p,
    layoutRoot: y,
    layoutCrossfade: b,
  } = l;
  (n.projection = new o(
    n.latestValues,
    l["data-framer-portal-id"] ? void 0 : Ry(n.parent)
  )),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (m && ui(m)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: r,
      crossfade: b,
      layoutScroll: p,
      layoutRoot: y,
    });
}
function Ry(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Ry(n.parent);
}
function d2({
  preloadedFeatures: n,
  createVisualElement: l,
  useRender: o,
  useVisualState: r,
  Component: c,
}) {
  n && t2(n);
  function d(m, p) {
    let y;
    const b = { ...Z.useContext(Ic), ...m, layoutId: h2(m) },
      { isStatic: S } = b,
      A = s2(m),
      O = r(m, S);
    if (!S && jc) {
      m2();
      const U = g2(b);
      (y = U.MeasureLayout),
        (A.visualElement = c2(c, O, b, l, U.ProjectionNode));
    }
    return g.jsxs(yo.Provider, {
      value: A,
      children: [
        y && A.visualElement
          ? g.jsx(y, { visualElement: A.visualElement, ...b })
          : null,
        o(c, m, r2(O, A.visualElement, p), O, S, A.visualElement),
      ],
    });
  }
  d.displayName = `motion.${
    typeof c == "string" ? c : `create(${c.displayName ?? c.name ?? ""})`
  }`;
  const f = Z.forwardRef(d);
  return (f[o2] = c), f;
}
function h2({ layoutId: n }) {
  const l = Z.useContext(Vg).id;
  return l && n !== void 0 ? l + "-" + n : n;
}
function m2(n, l) {
  Z.useContext(Ny).strict;
}
function g2(n) {
  const { drag: l, layout: o } = mi;
  if (!l && !o) return {};
  const r = { ...l, ...o };
  return {
    MeasureLayout:
      (l != null && l.isEnabled(n)) || (o != null && o.isEnabled(n))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Dl = {};
function y2(n) {
  for (const l in n) (Dl[l] = n[l]), Lc(l) && (Dl[l].isCSSVariable = !0);
}
function By(n, { layout: l, layoutId: o }) {
  return (
    pi.has(n) ||
    n.startsWith("origin") ||
    ((l || o !== void 0) && (!!Dl[n] || n === "opacity"))
  );
}
const p2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  v2 = yi.length;
function b2(n, l, o) {
  let r = "",
    c = !0;
  for (let d = 0; d < v2; d++) {
    const f = yi[d],
      m = n[f];
    if (m === void 0) continue;
    let p = !0;
    if (
      (typeof m == "number"
        ? (p = m === (f.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(m) === 0),
      !p || o)
    ) {
      const y = Ty(m, Jc[f]);
      if (!p) {
        c = !1;
        const b = p2[f] || f;
        r += `${b}(${y}) `;
      }
      o && (l[f] = y);
    }
  }
  return (r = r.trim()), o ? (r = o(l, c ? "" : r)) : c && (r = "none"), r;
}
function nf(n, l, o) {
  const { style: r, vars: c, transformOrigin: d } = n;
  let f = !1,
    m = !1;
  for (const p in l) {
    const y = l[p];
    if (pi.has(p)) {
      f = !0;
      continue;
    } else if (Lc(p)) {
      c[p] = y;
      continue;
    } else {
      const b = Ty(y, Jc[p]);
      p.startsWith("origin") ? ((m = !0), (d[p] = b)) : (r[p] = b);
    }
  }
  if (
    (l.transform ||
      (f || o
        ? (r.transform = b2(l, n.transform, o))
        : r.transform && (r.transform = "none")),
    m)
  ) {
    const { originX: p = "50%", originY: y = "50%", originZ: b = 0 } = d;
    r.transformOrigin = `${p} ${y} ${b}`;
  }
}
const lf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Vy(n, l, o) {
  for (const r in l) !se(l[r]) && !By(r, o) && (n[r] = l[r]);
}
function x2({ transformTemplate: n }, l) {
  return Z.useMemo(() => {
    const o = lf();
    return nf(o, l, n), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function S2(n, l) {
  const o = n.style || {},
    r = {};
  return Vy(r, o, n), Object.assign(r, x2(n, l)), r;
}
function T2(n, l) {
  const o = {},
    r = S2(n, l);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((o.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (o.tabIndex = 0),
    (o.style = r),
    o
  );
}
const E2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  A2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function j2(n, l, o = 1, r = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? E2 : A2;
  n[d.offset] = at.transform(-r);
  const f = at.transform(l),
    m = at.transform(o);
  n[d.array] = `${f} ${m}`;
}
function Ly(
  n,
  {
    attrX: l,
    attrY: o,
    attrScale: r,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...m
  },
  p,
  y,
  b
) {
  if ((nf(n, m, y), p)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  (n.attrs = n.style), (n.style = {});
  const { attrs: S, style: A } = n;
  S.transform && ((A.transform = S.transform), delete S.transform),
    (A.transform || S.transformOrigin) &&
      ((A.transformOrigin = S.transformOrigin ?? "50% 50%"),
      delete S.transformOrigin),
    A.transform &&
      ((A.transformBox = (b == null ? void 0 : b.transformBox) ?? "fill-box"),
      delete S.transformBox),
    l !== void 0 && (S.x = l),
    o !== void 0 && (S.y = o),
    r !== void 0 && (S.scale = r),
    c !== void 0 && j2(S, c, d, f, !1);
}
const Uy = () => ({ ...lf(), attrs: {} }),
  _y = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function w2(n, l, o, r) {
  const c = Z.useMemo(() => {
    const d = Uy();
    return (
      Ly(d, l, _y(r), n.transformTemplate, n.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [l]);
  if (n.style) {
    const d = {};
    Vy(d, n.style, n), (c.style = { ...d, ...c.style });
  }
  return c;
}
const M2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function sf(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(M2.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function N2(n = !1) {
  return (o, r, c, { latestValues: d }, f) => {
    const p = (sf(o) ? w2 : T2)(r, d, f, o),
      y = n2(r, typeof o == "string", n),
      b = o !== Z.Fragment ? { ...y, ...p, ref: c } : {},
      { children: S } = r,
      A = Z.useMemo(() => (se(S) ? S.get() : S), [S]);
    return Z.createElement(o, { ...b, children: A });
  };
}
function V0(n) {
  const l = [{}, {}];
  return (
    n == null ||
      n.values.forEach((o, r) => {
        (l[0][r] = o.get()), (l[1][r] = o.getVelocity());
      }),
    l
  );
}
function of(n, l, o, r) {
  if (typeof l == "function") {
    const [c, d] = V0(r);
    l = l(o !== void 0 ? o : n.custom, c, d);
  }
  if (
    (typeof l == "string" && (l = n.variants && n.variants[l]),
    typeof l == "function")
  ) {
    const [c, d] = V0(r);
    l = l(o !== void 0 ? o : n.custom, c, d);
  }
  return l;
}
function so(n) {
  return se(n) ? n.get() : n;
}
function D2({ scrapeMotionValuesFromProps: n, createRenderState: l }, o, r, c) {
  return { latestValues: O2(o, r, c, n), renderState: l() };
}
const Hy = (n) => (l, o) => {
  const r = Z.useContext(yo),
    c = Z.useContext(Mc),
    d = () => D2(n, l, r, c);
  return o ? d() : go(d);
};
function O2(n, l, o, r) {
  const c = {},
    d = r(n, {});
  for (const A in d) c[A] = so(d[A]);
  let { initial: f, animate: m } = n;
  const p = vo(n),
    y = Oy(n);
  l &&
    y &&
    !p &&
    n.inherit !== !1 &&
    (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let b = o ? o.initial === !1 : !1;
  b = b || f === !1;
  const S = b ? m : f;
  if (S && typeof S != "boolean" && !po(S)) {
    const A = Array.isArray(S) ? S : [S];
    for (let O = 0; O < A.length; O++) {
      const U = of(n, A[O]);
      if (U) {
        const { transitionEnd: q, transition: G, ...k } = U;
        for (const F in k) {
          let H = k[F];
          if (Array.isArray(H)) {
            const st = b ? H.length - 1 : 0;
            H = H[st];
          }
          H !== null && (c[F] = H);
        }
        for (const F in q) c[F] = q[F];
      }
    }
  }
  return c;
}
function rf(n, l, o) {
  var d;
  const { style: r } = n,
    c = {};
  for (const f in r)
    (se(r[f]) ||
      (l.style && se(l.style[f])) ||
      By(f, n) ||
      ((d = o == null ? void 0 : o.getValue(f)) == null
        ? void 0
        : d.liveStyle) !== void 0) &&
      (c[f] = r[f]);
  return c;
}
const z2 = {
  useVisualState: Hy({
    scrapeMotionValuesFromProps: rf,
    createRenderState: lf,
  }),
};
function Yy(n, l, o) {
  const r = rf(n, l, o);
  for (const c in n)
    if (se(n[c]) || se(l[c])) {
      const d =
        yi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      r[d] = n[c];
    }
  return r;
}
const C2 = {
  useVisualState: Hy({
    scrapeMotionValuesFromProps: Yy,
    createRenderState: Uy,
  }),
};
function R2(n, l) {
  return function (r, { forwardMotionProps: c } = { forwardMotionProps: !1 }) {
    const f = {
      ...(sf(r) ? C2 : z2),
      preloadedFeatures: n,
      useRender: N2(c),
      createVisualElement: l,
      Component: r,
    };
    return d2(f);
  };
}
function Ol(n, l, o) {
  const r = n.getProps();
  return of(r, l, o !== void 0 ? o : r.custom, n);
}
const yc = (n) => Array.isArray(n);
function B2(n, l, o) {
  n.hasValue(l) ? n.getValue(l).set(o) : n.addValue(l, Ge(o));
}
function V2(n) {
  return yc(n) ? n[n.length - 1] || 0 : n;
}
function L2(n, l) {
  const o = Ol(n, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...r };
  for (const f in d) {
    const m = V2(d[f]);
    B2(n, f, m);
  }
}
function U2(n) {
  return !!(se(n) && n.add);
}
function pc(n, l) {
  const o = n.getValue("willChange");
  if (U2(o)) return o.add(l);
  if (!o && pa.WillChange) {
    const r = new pa.WillChange("auto");
    n.addValue("willChange", r), r.add(l);
  }
}
function qy(n) {
  return n.props[zy];
}
const _2 = (n) => n !== null;
function H2(n, { repeat: l, repeatType: o = "loop" }, r) {
  const c = n.filter(_2),
    d = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const Y2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  q2 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  G2 = { type: "keyframes", duration: 0.8 },
  k2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  X2 = (n, { keyframes: l }) =>
    l.length > 2
      ? G2
      : pi.has(n)
      ? n.startsWith("scale")
        ? q2(l[1])
        : Y2
      : k2;
function Z2({
  when: n,
  delay: l,
  delayChildren: o,
  staggerChildren: r,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: m,
  from: p,
  elapsed: y,
  ...b
}) {
  return !!Object.keys(b).length;
}
const uf =
  (n, l, o, r = {}, c, d) =>
  (f) => {
    const m = Pc(r, n) || {},
      p = m.delay || r.delay || 0;
    let { elapsed: y = 0 } = r;
    y = y - We(p);
    const b = {
      keyframes: Array.isArray(o) ? o : [null, o],
      ease: "easeOut",
      velocity: l.getVelocity(),
      ...m,
      delay: -y,
      onUpdate: (A) => {
        l.set(A), m.onUpdate && m.onUpdate(A);
      },
      onComplete: () => {
        f(), m.onComplete && m.onComplete();
      },
      name: n,
      motionValue: l,
      element: d ? void 0 : c,
    };
    Z2(m) || Object.assign(b, X2(n, b)),
      b.duration && (b.duration = We(b.duration)),
      b.repeatDelay && (b.repeatDelay = We(b.repeatDelay)),
      b.from !== void 0 && (b.keyframes[0] = b.from);
    let S = !1;
    if (
      ((b.type === !1 || (b.duration === 0 && !b.repeatDelay)) &&
        ((b.duration = 0), b.delay === 0 && (S = !0)),
      (pa.instantAnimations || pa.skipAnimations) &&
        ((S = !0), (b.duration = 0), (b.delay = 0)),
      (b.allowFlatten = !m.type && !m.ease),
      S && !d && l.get() !== void 0)
    ) {
      const A = H2(b.keyframes, m);
      if (A !== void 0) {
        Et.update(() => {
          b.onUpdate(A), b.onComplete();
        });
        return;
      }
    }
    return m.isSync ? new Zc(b) : new bx(b);
  };
function Q2({ protectedKeys: n, needsAnimating: l }, o) {
  const r = n.hasOwnProperty(o) && l[o] !== !0;
  return (l[o] = !1), r;
}
function Gy(n, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d = n.getDefaultTransition(), transitionEnd: f, ...m } = l;
  r && (d = r);
  const p = [],
    y = c && n.animationState && n.animationState.getState()[c];
  for (const b in m) {
    const S = n.getValue(b, n.latestValues[b] ?? null),
      A = m[b];
    if (A === void 0 || (y && Q2(y, b))) continue;
    const O = { delay: o, ...Pc(d || {}, b) },
      U = S.get();
    if (
      U !== void 0 &&
      !S.isAnimating &&
      !Array.isArray(A) &&
      A === U &&
      !O.velocity
    )
      continue;
    let q = !1;
    if (window.MotionHandoffAnimation) {
      const k = qy(n);
      if (k) {
        const F = window.MotionHandoffAnimation(k, b, Et);
        F !== null && ((O.startTime = F), (q = !0));
      }
    }
    pc(n, b),
      S.start(
        uf(b, S, A, n.shouldReduceMotion && yy.has(b) ? { type: !1 } : O, n, q)
      );
    const G = S.animation;
    G && p.push(G);
  }
  return (
    f &&
      Promise.all(p).then(() => {
        Et.update(() => {
          f && L2(n, f);
        });
      }),
    p
  );
}
function vc(n, l, o = {}) {
  var p;
  const r = Ol(
    n,
    l,
    o.type === "exit"
      ? (p = n.presenceContext) == null
        ? void 0
        : p.custom
      : void 0
  );
  let { transition: c = n.getDefaultTransition() || {} } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = r ? () => Promise.all(Gy(n, r, o)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (y = 0) => {
            const {
              delayChildren: b = 0,
              staggerChildren: S,
              staggerDirection: A,
            } = c;
            return K2(n, l, b + y, S, A, o);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [y, b] = m === "beforeChildren" ? [d, f] : [f, d];
    return y().then(() => b());
  } else return Promise.all([d(), f(o.delay)]);
}
function K2(n, l, o = 0, r = 0, c = 1, d) {
  const f = [],
    m = (n.variantChildren.size - 1) * r,
    p = c === 1 ? (y = 0) => y * r : (y = 0) => m - y * r;
  return (
    Array.from(n.variantChildren)
      .sort(P2)
      .forEach((y, b) => {
        y.notify("AnimationStart", l),
          f.push(
            vc(y, l, { ...d, delay: o + p(b) }).then(() =>
              y.notify("AnimationComplete", l)
            )
          );
      }),
    Promise.all(f)
  );
}
function P2(n, l) {
  return n.sortNodePosition(l);
}
function J2(n, l, o = {}) {
  n.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map((d) => vc(n, d, o));
    r = Promise.all(c);
  } else if (typeof l == "string") r = vc(n, l, o);
  else {
    const c = typeof l == "function" ? Ol(n, l, o.custom) : l;
    r = Promise.all(Gy(n, c, o));
  }
  return r.then(() => {
    n.notify("AnimationComplete", l);
  });
}
function ky(n, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== n.length) return !1;
  for (let r = 0; r < o; r++) if (l[r] !== n[r]) return !1;
  return !0;
}
const F2 = ef.length;
function Xy(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const o = n.parent ? Xy(n.parent) || {} : {};
    return n.props.initial !== void 0 && (o.initial = n.props.initial), o;
  }
  const l = {};
  for (let o = 0; o < F2; o++) {
    const r = ef[o],
      c = n.props[r];
    (Nl(c) || c === !1) && (l[r] = c);
  }
  return l;
}
const W2 = [...tf].reverse(),
  $2 = tf.length;
function I2(n) {
  return (l) =>
    Promise.all(l.map(({ animation: o, options: r }) => J2(n, o, r)));
}
function t3(n) {
  let l = I2(n),
    o = L0(),
    r = !0;
  const c = (p) => (y, b) => {
    var A;
    const S = Ol(
      n,
      b,
      p === "exit"
        ? (A = n.presenceContext) == null
          ? void 0
          : A.custom
        : void 0
    );
    if (S) {
      const { transition: O, transitionEnd: U, ...q } = S;
      y = { ...y, ...q, ...U };
    }
    return y;
  };
  function d(p) {
    l = p(n);
  }
  function f(p) {
    const { props: y } = n,
      b = Xy(n.parent) || {},
      S = [],
      A = new Set();
    let O = {},
      U = 1 / 0;
    for (let G = 0; G < $2; G++) {
      const k = W2[G],
        F = o[k],
        H = y[k] !== void 0 ? y[k] : b[k],
        st = Nl(H),
        Y = k === p ? F.isActive : null;
      Y === !1 && (U = G);
      let lt = H === b[k] && H !== y[k] && st;
      if (
        (lt && r && n.manuallyAnimateOnMount && (lt = !1),
        (F.protectedKeys = { ...O }),
        (!F.isActive && Y === null) ||
          (!H && !F.prevProp) ||
          po(H) ||
          typeof H == "boolean")
      )
        continue;
      const dt = e3(F.prevProp, H);
      let I = dt || (k === p && F.isActive && !lt && st) || (G > U && st),
        wt = !1;
      const qt = Array.isArray(H) ? H : [H];
      let te = qt.reduce(c(k), {});
      Y === !1 && (te = {});
      const { prevResolvedValues: Gt = {} } = F,
        ea = { ...Gt, ...te },
        Xe = (_) => {
          (I = !0),
            A.has(_) && ((wt = !0), A.delete(_)),
            (F.needsAnimating[_] = !0);
          const P = n.getValue(_);
          P && (P.liveStyle = !1);
        };
      for (const _ in ea) {
        const P = te[_],
          gt = Gt[_];
        if (O.hasOwnProperty(_)) continue;
        let T = !1;
        yc(P) && yc(gt) ? (T = !ky(P, gt)) : (T = P !== gt),
          T
            ? P != null
              ? Xe(_)
              : A.add(_)
            : P !== void 0 && A.has(_)
            ? Xe(_)
            : (F.protectedKeys[_] = !0);
      }
      (F.prevProp = H),
        (F.prevResolvedValues = te),
        F.isActive && (O = { ...O, ...te }),
        r && n.blockInitialAnimation && (I = !1),
        I &&
          (!(lt && dt) || wt) &&
          S.push(...qt.map((_) => ({ animation: _, options: { type: k } })));
    }
    if (A.size) {
      const G = {};
      if (typeof y.initial != "boolean") {
        const k = Ol(n, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        k && k.transition && (G.transition = k.transition);
      }
      A.forEach((k) => {
        const F = n.getBaseTarget(k),
          H = n.getValue(k);
        H && (H.liveStyle = !0), (G[k] = F ?? null);
      }),
        S.push({ animation: G });
    }
    let q = !!S.length;
    return (
      r &&
        (y.initial === !1 || y.initial === y.animate) &&
        !n.manuallyAnimateOnMount &&
        (q = !1),
      (r = !1),
      q ? l(S) : Promise.resolve()
    );
  }
  function m(p, y) {
    var S;
    if (o[p].isActive === y) return Promise.resolve();
    (S = n.variantChildren) == null ||
      S.forEach((A) => {
        var O;
        return (O = A.animationState) == null ? void 0 : O.setActive(p, y);
      }),
      (o[p].isActive = y);
    const b = f(p);
    for (const A in o) o[A].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: f,
    setActive: m,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      (o = L0()), (r = !0);
    },
  };
}
function e3(n, l) {
  return typeof l == "string" ? l !== n : Array.isArray(l) ? !ky(l, n) : !1;
}
function hn(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function L0() {
  return {
    animate: hn(!0),
    whileInView: hn(),
    whileHover: hn(),
    whileTap: hn(),
    whileDrag: hn(),
    whileFocus: hn(),
    exit: hn(),
  };
}
class Ka {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
class a3 extends Ka {
  constructor(l) {
    super(l), l.animationState || (l.animationState = t3(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    po(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) == null || l.call(this);
  }
}
let n3 = 0;
class i3 extends Ka {
  constructor() {
    super(...arguments), (this.id = n3++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    o &&
      !l &&
      c.then(() => {
        o(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const l3 = { animation: { Feature: a3 }, exit: { Feature: i3 } };
function zl(n, l, o, r = { passive: !0 }) {
  return n.addEventListener(l, o, r), () => n.removeEventListener(l, o);
}
function Vl(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const s3 = (n) => (l) => Wc(l) && n(l, Vl(l));
function El(n, l, o, r) {
  return zl(n, l, s3(o), r);
}
function Zy({ top: n, left: l, right: o, bottom: r }) {
  return { x: { min: l, max: o }, y: { min: n, max: r } };
}
function o3({ x: n, y: l }) {
  return { top: l.min, right: n.max, bottom: l.max, left: n.min };
}
function r3(n, l) {
  if (!l) return n;
  const o = l({ x: n.left, y: n.top }),
    r = l({ x: n.right, y: n.bottom });
  return { top: o.y, left: o.x, bottom: r.y, right: r.x };
}
const Qy = 1e-4,
  u3 = 1 - Qy,
  c3 = 1 + Qy,
  Ky = 0.01,
  f3 = 0 - Ky,
  d3 = 0 + Ky;
function re(n) {
  return n.max - n.min;
}
function h3(n, l, o) {
  return Math.abs(n - l) <= o;
}
function U0(n, l, o, r = 0.5) {
  (n.origin = r),
    (n.originPoint = zt(l.min, l.max, n.origin)),
    (n.scale = re(o) / re(l)),
    (n.translate = zt(o.min, o.max, n.origin) - n.originPoint),
    ((n.scale >= u3 && n.scale <= c3) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= f3 && n.translate <= d3) || isNaN(n.translate)) &&
      (n.translate = 0);
}
function Al(n, l, o, r) {
  U0(n.x, l.x, o.x, r ? r.originX : void 0),
    U0(n.y, l.y, o.y, r ? r.originY : void 0);
}
function _0(n, l, o) {
  (n.min = o.min + l.min), (n.max = n.min + re(l));
}
function m3(n, l, o) {
  _0(n.x, l.x, o.x), _0(n.y, l.y, o.y);
}
function H0(n, l, o) {
  (n.min = l.min - o.min), (n.max = n.min + re(l));
}
function jl(n, l, o) {
  H0(n.x, l.x, o.x), H0(n.y, l.y, o.y);
}
const Y0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ci = () => ({ x: Y0(), y: Y0() }),
  q0 = () => ({ min: 0, max: 0 }),
  Ut = () => ({ x: q0(), y: q0() });
function Ue(n) {
  return [n("x"), n("y")];
}
function Qu(n) {
  return n === void 0 || n === 1;
}
function bc({ scale: n, scaleX: l, scaleY: o }) {
  return !Qu(n) || !Qu(l) || !Qu(o);
}
function yn(n) {
  return (
    bc(n) ||
    Py(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function Py(n) {
  return G0(n.x) || G0(n.y);
}
function G0(n) {
  return n && n !== "0%";
}
function ho(n, l, o) {
  const r = n - o,
    c = l * r;
  return o + c;
}
function k0(n, l, o, r, c) {
  return c !== void 0 && (n = ho(n, c, r)), ho(n, o, r) + l;
}
function xc(n, l = 0, o = 1, r, c) {
  (n.min = k0(n.min, l, o, r, c)), (n.max = k0(n.max, l, o, r, c));
}
function Jy(n, { x: l, y: o }) {
  xc(n.x, l.translate, l.scale, l.originPoint),
    xc(n.y, o.translate, o.scale, o.originPoint);
}
const X0 = 0.999999999999,
  Z0 = 1.0000000000001;
function g3(n, l, o, r = !1) {
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    (d = o[m]), (f = d.projectionDelta);
    const { visualElement: p } = d.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (r &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        di(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((l.x *= f.x.scale), (l.y *= f.y.scale), Jy(n, f)),
      r && yn(d.latestValues) && di(n, d.latestValues));
  }
  l.x < Z0 && l.x > X0 && (l.x = 1), l.y < Z0 && l.y > X0 && (l.y = 1);
}
function fi(n, l) {
  (n.min = n.min + l), (n.max = n.max + l);
}
function Q0(n, l, o, r, c = 0.5) {
  const d = zt(n.min, n.max, c);
  xc(n, l, o, d, r);
}
function di(n, l) {
  Q0(n.x, l.x, l.scaleX, l.scale, l.originX),
    Q0(n.y, l.y, l.scaleY, l.scale, l.originY);
}
function Fy(n, l) {
  return Zy(r3(n.getBoundingClientRect(), l));
}
function y3(n, l, o) {
  const r = Fy(n, o),
    { scroll: c } = l;
  return c && (fi(r.x, c.offset.x), fi(r.y, c.offset.y)), r;
}
const Wy = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  K0 = (n, l) => Math.abs(n - l);
function p3(n, l) {
  const o = K0(n.x, l.x),
    r = K0(n.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
class $y {
  constructor(
    l,
    o,
    { transformPagePoint: r, contextWindow: c, dragSnapToOrigin: d = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const S = Pu(this.lastMoveEventInfo, this.history),
          A = this.startEvent !== null,
          O = p3(S.offset, { x: 0, y: 0 }) >= 3;
        if (!A && !O) return;
        const { point: U } = S,
          { timestamp: q } = Jt;
        this.history.push({ ...U, timestamp: q });
        const { onStart: G, onMove: k } = this.handlers;
        A ||
          (G && G(this.lastMoveEvent, S),
          (this.startEvent = this.lastMoveEvent)),
          k && k(this.lastMoveEvent, S);
      }),
      (this.handlePointerMove = (S, A) => {
        (this.lastMoveEvent = S),
          (this.lastMoveEventInfo = Ku(A, this.transformPagePoint)),
          Et.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (S, A) => {
        this.end();
        const { onEnd: O, onSessionEnd: U, resumeAnimation: q } = this.handlers;
        if (
          (this.dragSnapToOrigin && q && q(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const G = Pu(
          S.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ku(A, this.transformPagePoint),
          this.history
        );
        this.startEvent && O && O(S, G), U && U(S, G);
      }),
      !Wc(l))
    )
      return;
    (this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = r),
      (this.contextWindow = c || window);
    const f = Vl(l),
      m = Ku(f, this.transformPagePoint),
      { point: p } = m,
      { timestamp: y } = Jt;
    this.history = [{ ...p, timestamp: y }];
    const { onSessionStart: b } = o;
    b && b(l, Pu(m, this.history)),
      (this.removeListeners = Cl(
        El(this.contextWindow, "pointermove", this.handlePointerMove),
        El(this.contextWindow, "pointerup", this.handlePointerUp),
        El(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), ke(this.updatePoint);
  }
}
function Ku(n, l) {
  return l ? { point: l(n.point) } : n;
}
function P0(n, l) {
  return { x: n.x - l.x, y: n.y - l.y };
}
function Pu({ point: n }, l) {
  return {
    point: n,
    delta: P0(n, Iy(l)),
    offset: P0(n, v3(l)),
    velocity: b3(l, 0.1),
  };
}
function v3(n) {
  return n[0];
}
function Iy(n) {
  return n[n.length - 1];
}
function b3(n, l) {
  if (n.length < 2) return { x: 0, y: 0 };
  let o = n.length - 1,
    r = null;
  const c = Iy(n);
  for (; o >= 0 && ((r = n[o]), !(c.timestamp - r.timestamp > We(l))); ) o--;
  if (!r) return { x: 0, y: 0 };
  const d = $e(c.timestamp - r.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - r.x) / d, y: (c.y - r.y) / d };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function x3(n, { min: l, max: o }, r) {
  return (
    l !== void 0 && n < l
      ? (n = r ? zt(l, n, r.min) : Math.max(n, l))
      : o !== void 0 && n > o && (n = r ? zt(o, n, r.max) : Math.min(n, o)),
    n
  );
}
function J0(n, l, o) {
  return {
    min: l !== void 0 ? n.min + l : void 0,
    max: o !== void 0 ? n.max + o - (n.max - n.min) : void 0,
  };
}
function S3(n, { top: l, left: o, bottom: r, right: c }) {
  return { x: J0(n.x, o, c), y: J0(n.y, l, r) };
}
function F0(n, l) {
  let o = l.min - n.min,
    r = l.max - n.max;
  return l.max - l.min < n.max - n.min && ([o, r] = [r, o]), { min: o, max: r };
}
function T3(n, l) {
  return { x: F0(n.x, l.x), y: F0(n.y, l.y) };
}
function E3(n, l) {
  let o = 0.5;
  const r = re(n),
    c = re(l);
  return (
    c > r
      ? (o = hi(l.min, l.max - r, n.min))
      : r > c && (o = hi(n.min, n.max - c, l.min)),
    ta(0, 1, o)
  );
}
function A3(n, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - n.min),
    l.max !== void 0 && (o.max = l.max - n.min),
    o
  );
}
const Sc = 0.35;
function j3(n = Sc) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Sc),
    { x: W0(n, "left", "right"), y: W0(n, "top", "bottom") }
  );
}
function W0(n, l, o) {
  return { min: $0(n, l), max: $0(n, o) };
}
function $0(n, l) {
  return typeof n == "number" ? n : n[l] || 0;
}
const w3 = new WeakMap();
class M3 {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ut()),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: o = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const c = (b) => {
        const { dragSnapToOrigin: S } = this.getProps();
        S ? this.pauseAnimation() : this.stopAnimation(),
          o && this.snapToCursor(Vl(b).point);
      },
      d = (b, S) => {
        const { drag: A, dragPropagation: O, onDragStart: U } = this.getProps();
        if (
          A &&
          !O &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Bx(A)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ue((G) => {
            let k = this.getAxisMotionValue(G).get() || 0;
            if (Ie.test(k)) {
              const { projection: F } = this.visualElement;
              if (F && F.layout) {
                const H = F.layout.layoutBox[G];
                H && (k = re(H) * (parseFloat(k) / 100));
              }
            }
            this.originPoint[G] = k;
          }),
          U && Et.postRender(() => U(b, S)),
          pc(this.visualElement, "transform");
        const { animationState: q } = this.visualElement;
        q && q.setActive("whileDrag", !0);
      },
      f = (b, S) => {
        const {
          dragPropagation: A,
          dragDirectionLock: O,
          onDirectionLock: U,
          onDrag: q,
        } = this.getProps();
        if (!A && !this.openDragLock) return;
        const { offset: G } = S;
        if (O && this.currentDirection === null) {
          (this.currentDirection = N3(G)),
            this.currentDirection !== null && U && U(this.currentDirection);
          return;
        }
        this.updateAxis("x", S.point, G),
          this.updateAxis("y", S.point, G),
          this.visualElement.render(),
          q && q(b, S);
      },
      m = (b, S) => this.stop(b, S),
      p = () =>
        Ue((b) => {
          var S;
          return (
            this.getAnimationState(b) === "paused" &&
            ((S = this.getAxisMotionValue(b).animation) == null
              ? void 0
              : S.play())
          );
        }),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new $y(
      l,
      {
        onSessionStart: c,
        onStart: d,
        onMove: f,
        onSessionEnd: m,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        contextWindow: Wy(this.visualElement),
      }
    );
  }
  stop(l, o) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: c } = o;
    this.startAnimation(c);
    const { onDragEnd: d } = this.getProps();
    d && Et.postRender(() => d(l, o));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1);
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !Is(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + r[l];
    this.constraints &&
      this.constraints[l] &&
      (f = x3(f, this.constraints[l], this.elastic[l])),
      d.set(f);
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: l, dragElastic: o } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
          ? void 0
          : d.layout,
      c = this.constraints;
    l && ui(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && r
      ? (this.constraints = S3(r.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = j3(o)),
      c !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ue((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = A3(r.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !ui(l)) return !1;
    const r = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = y3(r, c.root, this.visualElement.getTransformPagePoint());
    let f = T3(c.layout.layoutBox, d);
    if (o) {
      const m = o(o3(f));
      (this.hasMutatedConstraints = !!m), m && (f = Zy(m));
    }
    return f;
  }
  startAnimation(l) {
    const {
        drag: o,
        dragMomentum: r,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      p = this.constraints || {},
      y = Ue((b) => {
        if (!Is(b, o, this.currentDirection)) return;
        let S = (p && p[b]) || {};
        f && (S = { min: 0, max: 0 });
        const A = c ? 200 : 1e6,
          O = c ? 40 : 1e7,
          U = {
            type: "inertia",
            velocity: r ? l[b] : 0,
            bounceStiffness: A,
            bounceDamping: O,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...S,
          };
        return this.startAxisValueAnimation(b, U);
      });
    return Promise.all(y).then(m);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return (
      pc(this.visualElement, l), r.start(uf(l, r, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ue((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Ue((l) => {
      var o;
      return (o = this.getAxisMotionValue(l).animation) == null
        ? void 0
        : o.pause();
    });
  }
  getAnimationState(l) {
    var o;
    return (o = this.getAxisMotionValue(l).animation) == null
      ? void 0
      : o.state;
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[o];
    return (
      c ||
      this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
    );
  }
  snapToCursor(l) {
    Ue((o) => {
      const { drag: r } = this.getProps();
      if (!Is(o, r, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[o];
        d.set(l[o] - zt(f, m, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: o } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ui(o) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ue((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const p = m.get();
        c[f] = E3({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ue((f) => {
        if (!Is(f, l, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: p, max: y } = this.constraints[f];
        m.set(zt(p, y, c[f]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    w3.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = El(l, "pointerdown", (p) => {
        const { drag: y, dragListener: b = !0 } = this.getProps();
        y && b && this.start(p);
      }),
      r = () => {
        const { dragConstraints: p } = this.getProps();
        ui(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Et.read(r);
    const f = zl(window, "resize", () => this.scalePositionWithinConstraints()),
      m = c.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: y }) => {
          this.isDragging &&
            y &&
            (Ue((b) => {
              const S = this.getAxisMotionValue(b);
              S &&
                ((this.originPoint[b] += p[b].translate),
                S.set(S.get() + p[b].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      f(), o(), d(), m && m();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = Sc,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function Is(n, l, o) {
  return (l === !0 || l === n) && (o === null || o === n);
}
function N3(n, l = 10) {
  let o = null;
  return Math.abs(n.y) > l ? (o = "y") : Math.abs(n.x) > l && (o = "x"), o;
}
class D3 extends Ka {
  constructor(l) {
    super(l),
      (this.removeGroupControls = ye),
      (this.removeListeners = ye),
      (this.controls = new M3(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ye);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const I0 = (n) => (l, o) => {
  n && Et.postRender(() => n(l, o));
};
class O3 extends Ka {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ye);
  }
  onPointerDown(l) {
    this.session = new $y(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Wy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: o,
      onPan: r,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: I0(l),
      onStart: I0(o),
      onMove: r,
      onEnd: (d, f) => {
        delete this.session, c && Et.postRender(() => c(d, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = El(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const oo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function tg(n, l) {
  return l.max === l.min ? 0 : (n / (l.max - l.min)) * 100;
}
const pl = {
    correct: (n, l) => {
      if (!l.target) return n;
      if (typeof n == "string")
        if (at.test(n)) n = parseFloat(n);
        else return n;
      const o = tg(n, l.target.x),
        r = tg(n, l.target.y);
      return `${o}% ${r}%`;
    },
  },
  z3 = {
    correct: (n, { treeScale: l, projectionDelta: o }) => {
      const r = n,
        c = Qa.parse(n);
      if (c.length > 5) return r;
      const d = Qa.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        m = o.x.scale * l.x,
        p = o.y.scale * l.y;
      (c[0 + f] /= m), (c[1 + f] /= p);
      const y = zt(m, p, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= y),
        typeof c[3 + f] == "number" && (c[3 + f] /= y),
        d(c)
      );
    },
  };
class C3 extends Z.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: r,
        layoutId: c,
      } = this.props,
      { projection: d } = l;
    y2(R3),
      d &&
        (o.group && o.group.add(d),
        r && r.register && c && r.register(d),
        d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (oo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: o,
        visualElement: r,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: f } = r;
    return (
      f &&
        ((f.isPresent = d),
        c || l.layoutDependency !== o || o === void 0 || l.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              Et.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l &&
      (l.root.didUpdate(),
      Fc.postRender(() => {
        !l.currentAnimation && l.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: o,
        switchLayoutGroup: r,
      } = this.props,
      { projection: c } = l;
    c &&
      (c.scheduleCheckAfterUnmount(),
      o && o.group && o.group.remove(c),
      r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function tp(n) {
  const [l, o] = Ix(),
    r = Z.useContext(Vg);
  return g.jsx(C3, {
    ...n,
    layoutGroup: r,
    switchLayoutGroup: Z.useContext(Cy),
    isPresent: l,
    safeToRemove: o,
  });
}
const R3 = {
  borderRadius: {
    ...pl,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: pl,
  borderTopRightRadius: pl,
  borderBottomLeftRadius: pl,
  borderBottomRightRadius: pl,
  boxShadow: z3,
};
function B3(n, l, o) {
  const r = se(n) ? n : Ge(n);
  return r.start(uf("", r, l, o)), r.animation;
}
const V3 = (n, l) => n.depth - l.depth;
class L3 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    Nc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    Dc(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(V3),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function U3(n, l) {
  const o = ge.now(),
    r = ({ timestamp: c }) => {
      const d = c - o;
      d >= l && (ke(r), n(d - l));
    };
  return Et.setup(r, !0), () => ke(r);
}
const ep = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  _3 = ep.length,
  eg = (n) => (typeof n == "string" ? parseFloat(n) : n),
  ag = (n) => typeof n == "number" || at.test(n);
function H3(n, l, o, r, c, d) {
  c
    ? ((n.opacity = zt(0, o.opacity ?? 1, Y3(r))),
      (n.opacityExit = zt(l.opacity ?? 1, 0, q3(r))))
    : d && (n.opacity = zt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let f = 0; f < _3; f++) {
    const m = `border${ep[f]}Radius`;
    let p = ng(l, m),
      y = ng(o, m);
    if (p === void 0 && y === void 0) continue;
    p || (p = 0),
      y || (y = 0),
      p === 0 || y === 0 || ag(p) === ag(y)
        ? ((n[m] = Math.max(zt(eg(p), eg(y), r), 0)),
          (Ie.test(y) || Ie.test(p)) && (n[m] += "%"))
        : (n[m] = y);
  }
  (l.rotate || o.rotate) && (n.rotate = zt(l.rotate || 0, o.rotate || 0, r));
}
function ng(n, l) {
  return n[l] !== void 0 ? n[l] : n.borderRadius;
}
const Y3 = ap(0, 0.5, Zg),
  q3 = ap(0.5, 0.95, ye);
function ap(n, l, o) {
  return (r) => (r < n ? 0 : r > l ? 1 : o(hi(n, l, r)));
}
function ig(n, l) {
  (n.min = l.min), (n.max = l.max);
}
function Le(n, l) {
  ig(n.x, l.x), ig(n.y, l.y);
}
function lg(n, l) {
  (n.translate = l.translate),
    (n.scale = l.scale),
    (n.originPoint = l.originPoint),
    (n.origin = l.origin);
}
function sg(n, l, o, r, c) {
  return (
    (n -= l), (n = ho(n, 1 / o, r)), c !== void 0 && (n = ho(n, 1 / c, r)), n
  );
}
function G3(n, l = 0, o = 1, r = 0.5, c, d = n, f = n) {
  if (
    (Ie.test(l) &&
      ((l = parseFloat(l)), (l = zt(f.min, f.max, l / 100) - f.min)),
    typeof l != "number")
  )
    return;
  let m = zt(d.min, d.max, r);
  n === d && (m -= l),
    (n.min = sg(n.min, l, o, m, c)),
    (n.max = sg(n.max, l, o, m, c));
}
function og(n, l, [o, r, c], d, f) {
  G3(n, l[o], l[r], l[c], l.scale, d, f);
}
const k3 = ["x", "scaleX", "originX"],
  X3 = ["y", "scaleY", "originY"];
function rg(n, l, o, r) {
  og(n.x, l, k3, o ? o.x : void 0, r ? r.x : void 0),
    og(n.y, l, X3, o ? o.y : void 0, r ? r.y : void 0);
}
function ug(n) {
  return n.translate === 0 && n.scale === 1;
}
function np(n) {
  return ug(n.x) && ug(n.y);
}
function cg(n, l) {
  return n.min === l.min && n.max === l.max;
}
function Z3(n, l) {
  return cg(n.x, l.x) && cg(n.y, l.y);
}
function fg(n, l) {
  return (
    Math.round(n.min) === Math.round(l.min) &&
    Math.round(n.max) === Math.round(l.max)
  );
}
function ip(n, l) {
  return fg(n.x, l.x) && fg(n.y, l.y);
}
function dg(n) {
  return re(n.x) / re(n.y);
}
function hg(n, l) {
  return (
    n.translate === l.translate &&
    n.scale === l.scale &&
    n.originPoint === l.originPoint
  );
}
class Q3 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Nc(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (
      (Dc(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    const o = this.members.findIndex((c) => l === c);
    if (o === 0) return !1;
    let r;
    for (let c = o; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        r = d;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && ((this.prevLead = r), (this.lead = l), l.show(), r)) {
      r.instance && r.scheduleRender(),
        l.scheduleRender(),
        (l.resumeFrom = r),
        o && (l.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((l.snapshot = r.snapshot),
          (l.snapshot.latestValues = r.animationValues || r.latestValues)),
        l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: c } = l.options;
      c === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: o, resumingFrom: r } = l;
      o.onExitComplete && o.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function K3(n, l, o) {
  let r = "";
  const c = n.x.translate / l.x,
    d = n.y.translate / l.y,
    f = (o == null ? void 0 : o.z) || 0;
  if (
    ((c || d || f) && (r = `translate3d(${c}px, ${d}px, ${f}px) `),
    (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `),
    o)
  ) {
    const {
      transformPerspective: y,
      rotate: b,
      rotateX: S,
      rotateY: A,
      skewX: O,
      skewY: U,
    } = o;
    y && (r = `perspective(${y}px) ${r}`),
      b && (r += `rotate(${b}deg) `),
      S && (r += `rotateX(${S}deg) `),
      A && (r += `rotateY(${A}deg) `),
      O && (r += `skewX(${O}deg) `),
      U && (r += `skewY(${U}deg) `);
  }
  const m = n.x.scale * l.x,
    p = n.y.scale * l.y;
  return (m !== 1 || p !== 1) && (r += `scale(${m}, ${p})`), r || "none";
}
const Ju = ["", "X", "Y", "Z"],
  P3 = { visibility: "hidden" },
  J3 = 1e3;
let F3 = 0;
function Fu(n, l, o, r) {
  const { latestValues: c } = l;
  c[n] && ((o[n] = c[n]), l.setStaticValue(n, 0), r && (r[n] = 0));
}
function lp(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: l } = n.options;
  if (!l) return;
  const o = qy(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Et, !(c || d));
  }
  const { parent: r } = n;
  r && !r.hasCheckedOptimisedAppear && lp(r);
}
function sp({
  attachResizeListener: n,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: r,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = l == null ? void 0 : l()) {
      (this.id = F3++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(I3),
            this.nodes.forEach(iS),
            this.nodes.forEach(lS),
            this.nodes.forEach(tS);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new L3());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Cc()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = $c(f) && !Jx(f)), (this.instance = f);
      const { layoutId: m, layout: p, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0),
        n)
      ) {
        let b;
        const S = () => (this.root.updateBlockedByResize = !1);
        n(f, () => {
          (this.root.updateBlockedByResize = !0),
            b && b(),
            (b = U3(S, 250)),
            oo.hasAnimatedSinceResize &&
              ((oo.hasAnimatedSinceResize = !1), this.nodes.forEach(gg));
        });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: b,
              hasLayoutChanged: S,
              hasRelativeLayoutChanged: A,
              layout: O,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const U =
                  this.options.transition || y.getDefaultTransition() || cS,
                { onLayoutAnimationStart: q, onLayoutAnimationComplete: G } =
                  y.getProps(),
                k = !this.targetLayout || !ip(this.targetLayout, O),
                F = !S && A;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                F ||
                (S && (k || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const H = { ...Pc(U, "layout"), onPlay: q, onComplete: G };
                (y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((H.delay = 0), (H.type = !1)),
                  this.startAnimation(H),
                  this.setAnimationOrigin(b, F);
              } else
                S || gg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = O;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ke(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(sS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          lp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let b = 0; b < this.path.length; b++) {
        const S = this.path[b];
        (S.shouldResetTransform = !0),
          S.updateScroll("snapshot"),
          S.options.layoutRoot && S.willUpdate(!1);
      }
      const { layoutId: m, layout: p } = this.options;
      if (m === void 0 && !p) return;
      const y = this.getTransformTemplate();
      (this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mg);
        return;
      }
      this.isUpdating || this.nodes.forEach(aS),
        (this.isUpdating = !1),
        this.nodes.forEach(nS),
        this.nodes.forEach(W3),
        this.nodes.forEach($3),
        this.clearAllSnapshots();
      const m = ge.now();
      (Jt.delta = ta(0, 1e3 / 60, m - Jt.timestamp)),
        (Jt.timestamp = m),
        (Jt.isProcessing = !0),
        Yu.update.process(Jt),
        Yu.preRender.process(Jt),
        Yu.render.process(Jt),
        (Jt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Fc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(eS), this.sharedNodes.forEach(oS);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Et.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Et.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !re(this.snapshot.measuredBox.x) &&
          !re(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ut()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !np(this.projectionDelta),
        p = this.getTransformTemplate(),
        y = p ? p(this.latestValues, "") : void 0,
        b = y !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || yn(this.latestValues) || b) &&
        (c(this.instance, y),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return (
        f && (p = this.removeTransform(p)),
        fS(p),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var y;
      const { visualElement: f } = this.options;
      if (!f) return Ut();
      const m = f.measureViewportBox();
      if (
        !(
          ((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(dS)
        )
      ) {
        const { scroll: b } = this.root;
        b && (fi(m.x, b.offset.x), fi(m.y, b.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = Ut();
      if ((Le(m, f), (p = this.scroll) != null && p.wasRoot)) return m;
      for (let y = 0; y < this.path.length; y++) {
        const b = this.path[y],
          { scroll: S, options: A } = b;
        b !== this.root &&
          S &&
          A.layoutScroll &&
          (S.wasRoot && Le(m, f), fi(m.x, S.offset.x), fi(m.y, S.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1) {
      const p = Ut();
      Le(p, f);
      for (let y = 0; y < this.path.length; y++) {
        const b = this.path[y];
        !m &&
          b.options.layoutScroll &&
          b.scroll &&
          b !== b.root &&
          di(p, { x: -b.scroll.offset.x, y: -b.scroll.offset.y }),
          yn(b.latestValues) && di(p, b.latestValues);
      }
      return yn(this.latestValues) && di(p, this.latestValues), p;
    }
    removeTransform(f) {
      const m = Ut();
      Le(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const y = this.path[p];
        if (!y.instance || !yn(y.latestValues)) continue;
        bc(y.latestValues) && y.updateSnapshot();
        const b = Ut(),
          S = y.measurePageBox();
        Le(b, S),
          rg(m, y.latestValues, y.snapshot ? y.snapshot.layoutBox : void 0, b);
      }
      return yn(this.latestValues) && rg(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Jt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var A;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== m;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((A = this.parent) != null && A.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: b, layoutId: S } = this.options;
      if (!(!this.layout || !(b || S))) {
        if (
          ((this.resolvedRelativeTargetAt = Jt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const O = this.getClosestProjectingParent();
          O && O.layout && this.animationProgress !== 1
            ? ((this.relativeParent = O),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ut()),
              (this.relativeTargetOrigin = Ut()),
              jl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                O.layout.layoutBox
              ),
              Le(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ut()), (this.targetWithTransforms = Ut())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              m3(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Le(this.target, this.layout.layoutBox),
              Jy(this.target, this.targetDelta))
            : Le(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const O = this.getClosestProjectingParent();
          O &&
          !!O.resumingFrom == !!this.resumingFrom &&
          !O.options.layoutScroll &&
          O.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = O),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ut()),
              (this.relativeTargetOrigin = Ut()),
              jl(this.relativeTargetOrigin, this.target, O.target),
              Le(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          bc(this.parent.latestValues) ||
          Py(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var U;
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          ((U = this.parent) != null && U.isProjectionDirty)) &&
          (p = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Jt.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: y, layoutId: b } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || b))
      )
        return;
      Le(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x,
        A = this.treeScale.y;
      g3(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Ut()));
      const { target: O } = f;
      if (!O) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (lg(this.prevProjectionDelta.x, this.projectionDelta.x),
          lg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Al(this.projectionDelta, this.layoutCorrected, O, this.latestValues),
        (this.treeScale.x !== S ||
          this.treeScale.y !== A ||
          !hg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", O));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ci()),
        (this.projectionDelta = ci()),
        (this.projectionDeltaWithTransform = ci());
    }
    setAnimationOrigin(f, m = !1) {
      const p = this.snapshot,
        y = p ? p.latestValues : {},
        b = { ...this.latestValues },
        S = ci();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const A = Ut(),
        O = p ? p.source : void 0,
        U = this.layout ? this.layout.source : void 0,
        q = O !== U,
        G = this.getStack(),
        k = !G || G.members.length <= 1,
        F = !!(q && !k && this.options.crossfade === !0 && !this.path.some(uS));
      this.animationProgress = 0;
      let H;
      (this.mixTargetDelta = (st) => {
        const Y = st / 1e3;
        yg(S.x, f.x, Y),
          yg(S.y, f.y, Y),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (jl(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            rS(this.relativeTarget, this.relativeTargetOrigin, A, Y),
            H && Z3(this.relativeTarget, H) && (this.isProjectionDirty = !1),
            H || (H = Ut()),
            Le(H, this.relativeTarget)),
          q &&
            ((this.animationValues = b), H3(b, y, this.latestValues, Y, F, k)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Y);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var m, p, y;
      this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (y = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) ==
          null || y.stop(),
        this.pendingAnimation &&
          (ke(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Et.update(() => {
          (oo.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ge(0)),
            (this.currentAnimation = B3(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (b) => {
                this.mixTargetDelta(b), f.onUpdate && f.onUpdate(b);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(J3),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: p,
        layout: y,
        latestValues: b,
      } = f;
      if (!(!m || !p || !y)) {
        if (
          this !== f &&
          this.layout &&
          y &&
          op(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          p = this.target || Ut();
          const S = re(this.layout.layoutBox.x);
          (p.x.min = f.target.x.min), (p.x.max = p.x.min + S);
          const A = re(this.layout.layoutBox.y);
          (p.y.min = f.target.y.min), (p.y.max = p.y.min + A);
        }
        Le(m, p),
          di(m, b),
          Al(this.projectionDeltaWithTransform, this.layoutCorrected, m, b);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new Q3()),
        this.sharedNodes.get(f).add(m);
      const y = m.options.initialPromotionConfig;
      m.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity
            ? y.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: f } = this.options;
      return f
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: p } = {}) {
      const y = this.getStack();
      y && y.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const y = {};
      p.z && Fu("z", f, y, this.animationValues);
      for (let b = 0; b < Ju.length; b++)
        Fu(`rotate${Ju[b]}`, f, y, this.animationValues),
          Fu(`skew${Ju[b]}`, f, y, this.animationValues);
      f.render();
      for (const b in y)
        f.setStaticValue(b, y[b]),
          this.animationValues && (this.animationValues[b] = y[b]);
      f.scheduleRender();
    }
    getProjectionStyles(f) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return P3;
      const m = { visibility: "" },
        p = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (m.opacity = ""),
          (m.pointerEvents = so(f == null ? void 0 : f.pointerEvents) || ""),
          (m.transform = p ? p(this.latestValues, "") : "none"),
          m
        );
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        const O = {};
        return (
          this.options.layoutId &&
            ((O.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (O.pointerEvents = so(f == null ? void 0 : f.pointerEvents) || "")),
          this.hasProjected &&
            !yn(this.latestValues) &&
            ((O.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)),
          O
        );
      }
      const b = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(),
        (m.transform = K3(
          this.projectionDeltaWithTransform,
          this.treeScale,
          b
        )),
        p && (m.transform = p(b, m.transform));
      const { x: S, y: A } = this.projectionDelta;
      (m.transformOrigin = `${S.origin * 100}% ${A.origin * 100}% 0`),
        y.animationValues
          ? (m.opacity =
              y === this
                ? b.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : b.opacityExit)
          : (m.opacity =
              y === this
                ? b.opacity !== void 0
                  ? b.opacity
                  : ""
                : b.opacityExit !== void 0
                ? b.opacityExit
                : 0);
      for (const O in Dl) {
        if (b[O] === void 0) continue;
        const { correct: U, applyTo: q, isCSSVariable: G } = Dl[O],
          k = m.transform === "none" ? b[O] : U(b[O], y);
        if (q) {
          const F = q.length;
          for (let H = 0; H < F; H++) m[q[H]] = k;
        } else
          G ? (this.options.visualElement.renderState.vars[O] = k) : (m[O] = k);
      }
      return (
        this.options.layoutId &&
          (m.pointerEvents =
            y === this
              ? so(f == null ? void 0 : f.pointerEvents) || ""
              : "none"),
        m
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(mg),
        this.root.sharedNodes.clear();
    }
  };
}
function W3(n) {
  n.updateLayout();
}
function $3(n) {
  var o;
  const l = ((o = n.resumeFrom) == null ? void 0 : o.snapshot) || n.snapshot;
  if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: c } = n.layout,
      { animationType: d } = n.options,
      f = l.source !== n.layout.source;
    d === "size"
      ? Ue((S) => {
          const A = f ? l.measuredBox[S] : l.layoutBox[S],
            O = re(A);
          (A.min = r[S].min), (A.max = A.min + O);
        })
      : op(d, l.layoutBox, r) &&
        Ue((S) => {
          const A = f ? l.measuredBox[S] : l.layoutBox[S],
            O = re(r[S]);
          (A.max = A.min + O),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[S].max = n.relativeTarget[S].min + O));
        });
    const m = ci();
    Al(m, r, l.layoutBox);
    const p = ci();
    f ? Al(p, n.applyTransform(c, !0), l.measuredBox) : Al(p, r, l.layoutBox);
    const y = !np(m);
    let b = !1;
    if (!n.resumeFrom) {
      const S = n.getClosestProjectingParent();
      if (S && !S.resumeFrom) {
        const { snapshot: A, layout: O } = S;
        if (A && O) {
          const U = Ut();
          jl(U, l.layoutBox, A.layoutBox);
          const q = Ut();
          jl(q, r, O.layoutBox),
            ip(U, q) || (b = !0),
            S.options.layoutRoot &&
              ((n.relativeTarget = q),
              (n.relativeTargetOrigin = U),
              (n.relativeParent = S));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: r,
      snapshot: l,
      delta: p,
      layoutDelta: m,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: b,
    });
  } else if (n.isLead()) {
    const { onExitComplete: r } = n.options;
    r && r();
  }
  n.options.transition = void 0;
}
function I3(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function tS(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function eS(n) {
  n.clearSnapshot();
}
function mg(n) {
  n.clearMeasurements();
}
function aS(n) {
  n.isLayoutDirty = !1;
}
function nS(n) {
  const { visualElement: l } = n.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    n.resetTransform();
}
function gg(n) {
  n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0);
}
function iS(n) {
  n.resolveTargetDelta();
}
function lS(n) {
  n.calcProjection();
}
function sS(n) {
  n.resetSkewAndRotation();
}
function oS(n) {
  n.removeLeadSnapshot();
}
function yg(n, l, o) {
  (n.translate = zt(l.translate, 0, o)),
    (n.scale = zt(l.scale, 1, o)),
    (n.origin = l.origin),
    (n.originPoint = l.originPoint);
}
function pg(n, l, o, r) {
  (n.min = zt(l.min, o.min, r)), (n.max = zt(l.max, o.max, r));
}
function rS(n, l, o, r) {
  pg(n.x, l.x, o.x, r), pg(n.y, l.y, o.y, r);
}
function uS(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const cS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  vg = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  bg = vg("applewebkit/") && !vg("chrome/") ? Math.round : ye;
function xg(n) {
  (n.min = bg(n.min)), (n.max = bg(n.max));
}
function fS(n) {
  xg(n.x), xg(n.y);
}
function op(n, l, o) {
  return (
    n === "position" || (n === "preserve-aspect" && !h3(dg(l), dg(o), 0.2))
  );
}
function dS(n) {
  var l;
  return n !== n.root && ((l = n.scroll) == null ? void 0 : l.wasRoot);
}
const hS = sp({
    attachResizeListener: (n, l) => zl(n, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Wu = { current: void 0 },
  rp = sp({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!Wu.current) {
        const n = new hS({});
        n.mount(window), n.setOptions({ layoutScroll: !0 }), (Wu.current = n);
      }
      return Wu.current;
    },
    resetTransform: (n, l) => {
      n.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  mS = {
    pan: { Feature: O3 },
    drag: { Feature: D3, ProjectionNode: rp, MeasureLayout: tp },
  };
function Sg(n, l, o) {
  const { props: r } = n;
  n.animationState &&
    r.whileHover &&
    n.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    d = r[c];
  d && Et.postRender(() => d(l, Vl(l)));
}
class gS extends Ka {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = Vx(
        l,
        (o, r) => (Sg(this.node, r, "Start"), (c) => Sg(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class yS extends Ka {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Cl(
      zl(this.node.current, "focus", () => this.onFocus()),
      zl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Tg(n, l, o) {
  const { props: r } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    r.whileTap &&
    n.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    d = r[c];
  d && Et.postRender(() => d(l, Vl(l)));
}
class pS extends Ka {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = Hx(
        l,
        (o, r) => (
          Tg(this.node, r, "Start"),
          (c, { success: d }) => Tg(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Tc = new WeakMap(),
  $u = new WeakMap(),
  vS = (n) => {
    const l = Tc.get(n.target);
    l && l(n);
  },
  bS = (n) => {
    n.forEach(vS);
  };
function xS({ root: n, ...l }) {
  const o = n || document;
  $u.has(o) || $u.set(o, {});
  const r = $u.get(o),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(bS, { root: n, ...l })), r[c];
}
function SS(n, l, o) {
  const r = xS(l);
  return (
    Tc.set(n, o),
    r.observe(n),
    () => {
      Tc.delete(n), r.unobserve(n);
    }
  );
}
const TS = { some: 0, all: 1 };
class ES extends Ka {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(),
      { root: o, margin: r, amount: c = "some", once: d } = l,
      f = {
        root: o ? o.current : void 0,
        rootMargin: r,
        threshold: typeof c == "number" ? c : TS[c],
      },
      m = (p) => {
        const { isIntersecting: y } = p;
        if (
          this.isInView === y ||
          ((this.isInView = y), d && !y && this.hasEnteredView)
        )
          return;
        y && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", y);
        const { onViewportEnter: b, onViewportLeave: S } = this.node.getProps(),
          A = y ? b : S;
        A && A(p);
      };
    return SS(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(AS(l, o)) && this.startObserver();
  }
  unmount() {}
}
function AS({ viewport: n = {} }, { viewport: l = {} } = {}) {
  return (o) => n[o] !== l[o];
}
const jS = {
    inView: { Feature: ES },
    tap: { Feature: pS },
    focus: { Feature: yS },
    hover: { Feature: gS },
  },
  wS = { layout: { ProjectionNode: rp, MeasureLayout: tp } },
  mo = { current: null },
  cf = { current: !1 };
function up() {
  if (((cf.current = !0), !!jc))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (mo.current = n.matches);
      n.addListener(l), l();
    } else mo.current = !1;
}
const MS = new WeakMap();
function NS(n, l, o) {
  for (const r in l) {
    const c = l[r],
      d = o[r];
    if (se(c)) n.addValue(r, c);
    else if (se(d)) n.addValue(r, Ge(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(r)) {
        const f = n.getValue(r);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(r);
        n.addValue(r, Ge(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const r in o) l[r] === void 0 && n.removeValue(r);
  return l;
}
const Eg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class DS {
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: o,
      presenceContext: r,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: f,
    },
    m = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Qc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const A = ge.now();
        this.renderScheduledAt < A &&
          ((this.renderScheduledAt = A), Et.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: y } = f;
    (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = o.initial ? { ...p } : {}),
      (this.renderState = y),
      (this.parent = l),
      (this.props = o),
      (this.presenceContext = r),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = m),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = vo(o)),
      (this.isVariantNode = Oy(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: b, ...S } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this
    );
    for (const A in S) {
      const O = S[A];
      p[A] !== void 0 && se(O) && O.set(p[A], !1);
    }
  }
  mount(l) {
    (this.current = l),
      MS.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, r) => this.bindToMotionValue(r, o)),
      cf.current || up(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : mo.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      ke(this.notifyUpdate),
      ke(this.render),
      this.valueSubscriptions.forEach((l) => l()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(l, o) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = pi.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (m) => {
        (this.latestValues[l] = m),
          this.props.onUpdate && Et.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      d = o.on("renderRequest", this.scheduleRender);
    let f;
    window.MotionCheckAppearSync &&
      (f = window.MotionCheckAppearSync(this, l, o)),
      this.valueSubscriptions.set(l, () => {
        c(), d(), f && f(), o.owner && o.stop();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in mi) {
      const o = mi[l];
      if (!o) continue;
      const { isEnabled: r, Feature: c } = o;
      if (
        (!this.features[l] &&
          c &&
          r(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ut();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  update(l, o) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o);
    for (let r = 0; r < Eg.length; r++) {
      const c = Eg[r];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = l[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = NS(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(l),
        () => o.variantChildren.delete(l)
      );
  }
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r &&
      (r && this.removeValue(l),
      this.bindToMotionValue(l, o),
      this.values.set(l, o),
      (this.latestValues[l] = o.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return (
      r === void 0 &&
        o !== void 0 &&
        ((r = Ge(o === null ? void 0 : o, { owner: this })),
        this.addValue(l, r)),
      r
    );
  }
  readValue(l, o) {
    let r =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      r != null &&
        (typeof r == "string" && (Lg(r) || _g(r))
          ? (r = parseFloat(r))
          : !$x(r) && Qa.test(o) && (r = xy(l, o)),
        this.setBaseTarget(l, se(r) ? r.get() : r)),
      se(r) ? r.get() : r
    );
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  getBaseTarget(l) {
    var d;
    const { initial: o } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const f = of(
        this.props,
        o,
        (d = this.presenceContext) == null ? void 0 : d.custom
      );
      f && (r = f[l]);
    }
    if (o && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !se(c)
      ? c
      : this.initialValues[l] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new Cc()), this.events[l].add(o);
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
}
class cp extends DS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = zx);
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    return l.style ? l.style[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    se(l) &&
      (this.childSubscription = l.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
function fp(n, { style: l, vars: o }, r, c) {
  Object.assign(n.style, l, c && c.getProjectionStyles(r));
  for (const d in o) n.style.setProperty(d, o[d]);
}
function OS(n) {
  return window.getComputedStyle(n);
}
class zS extends cp {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = fp);
  }
  readValueFromInstance(l, o) {
    var r;
    if (pi.has(o))
      return (r = this.projection) != null && r.isProjecting ? cc(o) : Wb(l, o);
    {
      const c = OS(l),
        d = (Lc(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Fy(l, o);
  }
  build(l, o, r) {
    nf(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return rf(l, o, r);
  }
}
const dp = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function CS(n, l, o, r) {
  fp(n, l, void 0, r);
  for (const c in l.attrs) n.setAttribute(dp.has(c) ? c : af(c), l.attrs[c]);
}
class RS extends cp {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ut);
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (pi.has(o)) {
      const r = by(o);
      return (r && r.default) || 0;
    }
    return (o = dp.has(o) ? o : af(o)), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Yy(l, o, r);
  }
  build(l, o, r) {
    Ly(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    CS(l, o, r, c);
  }
  mount(l) {
    (this.isSVGTag = _y(l.tagName)), super.mount(l);
  }
}
const BS = (n, l) =>
    sf(n) ? new RS(l) : new zS(l, { allowProjection: n !== Z.Fragment }),
  VS = R2({ ...l3, ...jS, ...mS, ...wS }, BS),
  L = i2(VS),
  LS = 50,
  Ag = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  US = () => ({ time: 0, x: Ag(), y: Ag() }),
  _S = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function jg(n, l, o, r) {
  const c = o[l],
    { length: d, position: f } = _S[l],
    m = c.current,
    p = o.time;
  (c.current = n[`scroll${f}`]),
    (c.scrollLength = n[`scroll${d}`] - n[`client${d}`]),
    (c.offset.length = 0),
    (c.offset[0] = 0),
    (c.offset[1] = c.scrollLength),
    (c.progress = hi(0, c.scrollLength, c.current));
  const y = r - p;
  c.velocity = y > LS ? 0 : Rc(c.current - m, y);
}
function HS(n, l, o) {
  jg(n, "x", l, o), jg(n, "y", l, o), (l.time = o);
}
function YS(n, l) {
  const o = { x: 0, y: 0 };
  let r = n;
  for (; r && r !== l; )
    if (Kc(r))
      (o.x += r.offsetLeft), (o.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const c = r.getBoundingClientRect();
      r = r.parentElement;
      const d = r.getBoundingClientRect();
      (o.x += c.left - d.left), (o.y += c.top - d.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: c, y: d } = r.getBBox();
      (o.x += c), (o.y += d);
      let f = null,
        m = r.parentNode;
      for (; !f; ) m.tagName === "svg" && (f = m), (m = r.parentNode);
      r = f;
    } else break;
  return o;
}
const Ec = { start: 0, center: 0.5, end: 1 };
function wg(n, l, o = 0) {
  let r = 0;
  if ((n in Ec && (n = Ec[n]), typeof n == "string")) {
    const c = parseFloat(n);
    n.endsWith("px")
      ? (r = c)
      : n.endsWith("%")
      ? (n = c / 100)
      : n.endsWith("vw")
      ? (r = (c / 100) * document.documentElement.clientWidth)
      : n.endsWith("vh")
      ? (r = (c / 100) * document.documentElement.clientHeight)
      : (n = c);
  }
  return typeof n == "number" && (r = l * n), o + r;
}
const qS = [0, 0];
function GS(n, l, o, r) {
  let c = Array.isArray(n) ? n : qS,
    d = 0,
    f = 0;
  return (
    typeof n == "number"
      ? (c = [n, n])
      : typeof n == "string" &&
        ((n = n.trim()),
        n.includes(" ") ? (c = n.split(" ")) : (c = [n, Ec[n] ? n : "0"])),
    (d = wg(c[0], o, r)),
    (f = wg(c[1], l)),
    d - f
  );
}
const kS = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  XS = { x: 0, y: 0 };
function ZS(n) {
  return "getBBox" in n && n.tagName !== "svg"
    ? n.getBBox()
    : { width: n.clientWidth, height: n.clientHeight };
}
function QS(n, l, o) {
  const { offset: r = kS.All } = o,
    { target: c = n, axis: d = "y" } = o,
    f = d === "y" ? "height" : "width",
    m = c !== n ? YS(c, n) : XS,
    p = c === n ? { width: n.scrollWidth, height: n.scrollHeight } : ZS(c),
    y = { width: n.clientWidth, height: n.clientHeight };
  l[d].offset.length = 0;
  let b = !l[d].interpolate;
  const S = r.length;
  for (let A = 0; A < S; A++) {
    const O = GS(r[A], y[f], p[f], m[d]);
    !b && O !== l[d].interpolatorOffsets[A] && (b = !0), (l[d].offset[A] = O);
  }
  b &&
    ((l[d].interpolate = Gc(l[d].offset, sy(r), { clamp: !1 })),
    (l[d].interpolatorOffsets = [...l[d].offset])),
    (l[d].progress = ta(0, 1, l[d].interpolate(l[d].current)));
}
function KS(n, l = n, o) {
  if (((o.x.targetOffset = 0), (o.y.targetOffset = 0), l !== n)) {
    let r = l;
    for (; r && r !== n; )
      (o.x.targetOffset += r.offsetLeft),
        (o.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (o.x.targetLength = l === n ? l.scrollWidth : l.clientWidth),
    (o.y.targetLength = l === n ? l.scrollHeight : l.clientHeight),
    (o.x.containerLength = n.clientWidth),
    (o.y.containerLength = n.clientHeight);
}
function PS(n, l, o, r = {}) {
  return {
    measure: (c) => {
      KS(n, r.target, o), HS(n, o, c), (r.offset || r.target) && QS(n, o, r);
    },
    notify: () => l(o),
  };
}
const vl = new WeakMap(),
  Mg = new WeakMap(),
  Iu = new WeakMap(),
  Ng = (n) => (n === document.scrollingElement ? window : n);
function hp(n, { container: l = document.scrollingElement, ...o } = {}) {
  if (!l) return ye;
  let r = Iu.get(l);
  r || ((r = new Set()), Iu.set(l, r));
  const c = US(),
    d = PS(l, n, c, o);
  if ((r.add(d), !vl.has(l))) {
    const m = () => {
        for (const S of r) S.measure(Jt.timestamp);
        Et.preUpdate(p);
      },
      p = () => {
        for (const S of r) S.notify();
      },
      y = () => Et.read(m);
    vl.set(l, y);
    const b = Ng(l);
    window.addEventListener("resize", y, { passive: !0 }),
      l !== document.documentElement && Mg.set(l, Px(l, y)),
      b.addEventListener("scroll", y, { passive: !0 }),
      y();
  }
  const f = vl.get(l);
  return (
    Et.read(f, !1, !0),
    () => {
      var y;
      ke(f);
      const m = Iu.get(l);
      if (!m || (m.delete(d), m.size)) return;
      const p = vl.get(l);
      vl.delete(l),
        p &&
          (Ng(l).removeEventListener("scroll", p),
          (y = Mg.get(l)) == null || y(),
          window.removeEventListener("resize", p));
    }
  );
}
const Dg = new Map();
function JS(n) {
  const l = { value: 0 },
    o = hp((r) => {
      l.value = r[n.axis].progress * 100;
    }, n);
  return { currentTime: l, cancel: o };
}
function mp({ source: n, container: l, ...o }) {
  const { axis: r } = o;
  n && (l = n);
  const c = Dg.get(l) ?? new Map();
  Dg.set(l, c);
  const d = o.target ?? "self",
    f = c.get(d) ?? {},
    m = r + (o.offset ?? []).join(",");
  return (
    f[m] ||
      (f[m] =
        !o.target && cy()
          ? new ScrollTimeline({ source: l, axis: r })
          : JS({ container: l, ...o })),
    f[m]
  );
}
function FS(n, l) {
  const o = mp(l);
  return n.attachTimeline({
    timeline: l.target ? void 0 : o,
    observe: (r) => (
      r.pause(),
      My((c) => {
        r.time = r.duration * c;
      }, o)
    ),
  });
}
function WS(n) {
  return n.length === 2;
}
function $S(n, l) {
  return WS(n)
    ? hp((o) => {
        n(o[l.axis].progress, o);
      }, l)
    : My(n, mp(l));
}
function IS(
  n,
  { axis: l = "y", container: o = document.scrollingElement, ...r } = {}
) {
  if (!o) return ye;
  const c = { axis: l, container: o, ...r };
  return typeof n == "function" ? $S(n, c) : FS(n, c);
}
function Og(n, l) {
  Fv(!!(!l || l.current));
}
const t5 = () => ({
  scrollX: Ge(0),
  scrollY: Ge(0),
  scrollXProgress: Ge(0),
  scrollYProgress: Ge(0),
});
function e5({ container: n, target: l, layoutEffect: o = !0, ...r } = {}) {
  const c = go(t5);
  return (
    (o ? wc : Z.useEffect)(
      () => (
        Og("target", l),
        Og("container", n),
        IS(
          (f, { x: m, y: p }) => {
            c.scrollX.set(m.current),
              c.scrollXProgress.set(m.progress),
              c.scrollY.set(p.current),
              c.scrollYProgress.set(p.progress);
          },
          {
            ...r,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (l == null ? void 0 : l.current) || void 0,
          }
        )
      ),
      [n, l, JSON.stringify(r.offset)]
    ),
    c
  );
}
function a5(n) {
  const l = go(() => Ge(n)),
    { isStatic: o } = Z.useContext(Ic);
  if (o) {
    const [, r] = Z.useState(n);
    Z.useEffect(() => l.on("change", r), []);
  }
  return l;
}
function gp(n, l) {
  const o = a5(l()),
    r = () => o.set(l());
  return (
    r(),
    wc(() => {
      const c = () => Et.preRender(r, !1, !0),
        d = n.map((f) => f.on("change", c));
      return () => {
        d.forEach((f) => f()), ke(r);
      };
    }),
    o
  );
}
function n5(n) {
  (Tl.current = []), n();
  const l = gp(Tl.current, n);
  return (Tl.current = void 0), l;
}
function to(n, l, o, r) {
  if (typeof n == "function") return n5(n);
  const c = typeof l == "function" ? l : Fx(l, o, r);
  return Array.isArray(n) ? zg(n, c) : zg([n], ([d]) => c(d));
}
function zg(n, l) {
  const o = go(() => []);
  return gp(n, () => {
    o.length = 0;
    const r = n.length;
    for (let c = 0; c < r; c++) o[c] = n[c].get();
    return l(o);
  });
}
function i5() {
  !cf.current && up();
  const [n] = Z.useState(mo.current);
  return n;
}
const eo = {
    yellowBackground: "/assets/d0a5efae125f9e473009239fc4bdebaa8a6229f4.png",
    embossBackground: "/assets/74b30de28e4b42fc1bf8fdbade226877eea0190d.png",
    logo: "/assets/4f17fcdc4ac0975e3032292f95c190a533fb61f3.png",
    logoStroke: "/assets/406cbc950324bee528d5749f3c55ed1c9331eec7.png",
  },
  me = {
    background: "/assets/7c59ab0c17b874f45b5441c4a7cf7fcf1030a6b9.png",
    clouds: "/assets/7f8edc671544eca41a4f1740b2f658346014a0e7.png",
    flag: "/assets/6e201907b657a7f97df41634f6b0ac3137f4395a.png",
    people: {
      layer4: "/assets/1179c6067fd8f826c8489ae976ea95d7a0881a45.png",
      layer3: "/assets/99a4e5325efe0a2ed6408a923270e4d3ab33564f.png",
      layer23: "/assets/bac8dbf6d9033444c0e19b2ff8e2f20354546493.png",
      layer1: "/assets/f2e2ebdff0a46b1b5b48020aa7e8cfd322500589.png",
    },
    gradientOverlay: "/assets/ef67e9c79b8223ec50c3320e6bf553b7cd4b75b3.png",
  },
  le = {
    background: "/assets/a178466b4b1f1f526d796a91269e4a16c2ba1a42.png",
    gradientOverlay: "/assets/8763adc13df0c663c3e1a77ca8f18c13b4f3f988.png",
    backgroundFacePatterns:
      "/assets/b8b64ae22d53108e51a51b6d66fc208a4625f97e.png",
    faces: {
      face1: "/assets/7a1f9759de7d54173701b265e8f0650f4b57124d.png",
      face2: "/assets/da0cf1f2fb3ad7d53b1dc82443ea189443b0cbcd.png",
      face3: "/assets/61aacf34bd0c10d0e587b1f2065e3b3710d78003.png",
    },
    circles: {
      left: "/assets/74ecd91ef2462b288a6df66b50df0a000c5d1b36.png",
      middle: "/assets/b5314ddb18357655fabee6feb9eaaeea17aeed1b.png",
      right: "/assets/64c07f42a4fe1863a91786d2a60c7967b0377372.png",
    },
    circleTexts: "/assets/aa00b2af0d383215492432adea0ded0565a05273.png",
    boxes: {
      box1: {
        top: "/assets/c332f81816b0cfbc9b879808ba15c8c26994a8f7.png",
        middle: "/assets/0b8fd88d268724e503947f3d4732328d7995db32.png",
        bottom: "/assets/c2cec505481aaebd1a1d7e738d4565add485f5ee.png",
        text: "/assets/3aab4a16f9f5a554867e1ab8bd0be962acd3cb8a.png",
        icon: "/assets/31fd9675d9e88d9e3505290f8143082465a86ef4.png",
      },
      box2: {
        top: "/assets/6bcc8712b53d2f35b029db33c5ca458b80d79ce1.png",
        middle: "/assets/8383aac2bce5576456dd021c9444f3ad5b97fc95.png",
        bottom: "/assets/e18299d97a7d0d314685f345d3f6bca7b0971087.png",
        text: "/assets/eb91dd969c185798684f42ca23430253663ceb54.png",
        icon: "/assets/485fc6b3401ee100c6041be576cb999b817e35aa.png",
      },
      box3: {
        top: "/assets/4b8608beaa45833aea7f122b1b2ba7b787da27c6.png",
        middle: "/assets/5af7592df7a48bab84152d10c0dce3c8a0934291.png",
        bottom: "/assets/85f8c9007658e690db2d9ba79a4a4e55dc8eb89d.png",
        text: "/assets/6f81c1cef8679e49b110f65e4c29a36c5b1fee55.png",
        icon: "/assets/f1305a8a590852fe36d249fc624a934afe088402.png",
      },
    },
  },
  ff = (n) =>
    new Promise((l, o) => {
      const r = new Image();
      (r.onload = () => l()), (r.onerror = o), (r.src = n);
    }),
  l5 = async () => {
    const n = [
      eo.yellowBackground,
      eo.embossBackground,
      eo.logo,
      eo.logoStroke,
    ];
    try {
      await Promise.all(n.map(ff)),
        console.log("Menu assets preloaded successfully");
    } catch (l) {
      console.warn("Some menu assets failed to preload:", l);
    }
  },
  s5 = async () => {
    const n = [
      me.background,
      me.clouds,
      me.flag,
      ...Object.values(me.people),
      me.gradientOverlay,
    ];
    try {
      await Promise.all(n.map(ff)),
        console.log("Header assets preloaded successfully");
    } catch (l) {
      console.warn("Some header assets failed to preload:", l);
    }
  },
  o5 = async () => {
    const n = [
      le.background,
      le.gradientOverlay,
      le.backgroundFacePatterns,
      ...Object.values(le.faces),
      ...Object.values(le.circles),
      le.circleTexts,
      ...Object.values(le.boxes.box1),
      ...Object.values(le.boxes.box2),
      ...Object.values(le.boxes.box3),
    ];
    try {
      await Promise.all(n.map(ff)),
        console.log("Info assets preloaded successfully");
    } catch (l) {
      console.warn("Some info assets failed to preload:", l);
    }
  };
function r5() {
  const { scrollY: n } = e5(),
    [l, o] = Z.useState(new Set()),
    [r, c] = Z.useState(!1),
    d = i5(),
    f = to(n, [0, 500], [0, -50]),
    m = to(n, [0, 500], [0, -30]),
    p = to(n, [0, 500], [0, -20]),
    y = to(n, [0, 500], [0, -10]);
  Z.useEffect(() => {
    s5();
    const O = setTimeout(() => {
      c(!1);
    }, 2e3);
    return () => clearTimeout(O);
  }, []);
  const b = (O) => {
      o((U) => new Set([...U, O]));
    },
    S = l.size > 0,
    A = {
      background:
        "linear-gradient(135deg, #93c5fd 0%, #60a5fa 50%, #3b82f6 100%)",
      minHeight: "100vh",
    };
  return r
    ? g.jsx("div", {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: A,
        children: g.jsxs("div", {
          className: "text-center text-white",
          children: [
            g.jsx("div", {
              className:
                "animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4",
            }),
            g.jsx("h2", {
              className: "text-2xl font-bold mb-2",
              children: "Liberal Tears",
            }),
            g.jsx("p", { children: "Loading the patriotic collection..." }),
          ],
        }),
      })
    : S
    ? g.jsx(L.div, {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: A,
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: g.jsx("div", {
          className: "text-center text-white max-w-md mx-auto p-8",
          children: g.jsxs(L.div, {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { delay: 0.3, duration: 0.8 },
            children: [
              g.jsx("h1", {
                className:
                  "text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent",
                children: "Liberal Tears",
              }),
              g.jsx("div", { className: "text-6xl mb-6", children: "🇺🇸" }),
              g.jsx("p", {
                className: "text-xl md:text-2xl mb-4 opacity-90",
                children: "Patriotic Collection",
              }),
              g.jsx("p", {
                className: "text-lg opacity-75 mb-6",
                children:
                  "A premium gathering of the finest liberal tears, collected with American pride.",
              }),
              g.jsx("div", {
                className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                children: g.jsxs("p", {
                  className: "text-sm opacity-80",
                  children: [
                    "🌟 100% American Made",
                    g.jsx("br", {}),
                    "💧 Fresh Daily Collection",
                    g.jsx("br", {}),
                    "📱 Mobile Optimized Experience",
                  ],
                }),
              }),
            ],
          }),
        }),
      })
    : g.jsxs(L.section, {
        className: "relative w-full",
        style: {
          aspectRatio: "1920 / 1123",
          minHeight: S ? "100vh" : "auto",
          background: S ? A.background : "transparent",
          zIndex: 10,
        },
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: [
          S &&
            g.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center z-50",
              children: g.jsxs("div", {
                className:
                  "text-center text-white bg-black bg-opacity-50 p-8 rounded-lg",
                children: [
                  g.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Liberal Tears Header",
                  }),
                  g.jsx("p", {
                    className: "text-lg mb-2",
                    children: "Patriotic imagery loading...",
                  }),
                  g.jsx("p", {
                    className: "text-sm opacity-75",
                    children: "Images are loading... Please check back soon!",
                  }),
                ],
              }),
            }),
          g.jsx(L.div, {
            className: "absolute inset-0 w-full h-full",
            style: { y: f, willChange: "transform" },
            children: g.jsx("img", {
              src: me.background,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => b("background"),
              style: { display: l.has("background") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsxs("div", {
            className: "absolute",
            style: {
              left: 0,
              width: "100%",
              top: "45.9%",
              height: "54.1%",
              overflow: "hidden",
            },
            children: [
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  left: "-20%",
                  width: "140%",
                  height: "100%",
                  y: m,
                  willChange: "transform",
                },
                animate: d ? {} : { x: [0, 30, 0], y: [0, -5, 0] },
                transition: { duration: 20, repeat: 1 / 0, ease: "easeInOut" },
                children: g.jsx("img", {
                  src: me.clouds,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => b("clouds"),
                  style: { display: l.has("clouds") ? "none" : "block" },
                  loading: "lazy",
                }),
              }),
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  left: "-20%",
                  width: "140%",
                  height: "100%",
                  y: m,
                  scaleX: -1,
                  opacity: 0.7,
                  zIndex: -1,
                  willChange: "transform",
                },
                animate: d ? {} : { x: [0, -40, 0], y: [0, -8, 0] },
                transition: {
                  duration: 25,
                  repeat: 1 / 0,
                  ease: "easeInOut",
                  delay: 10,
                },
                children: g.jsx("img", {
                  src: me.clouds,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => b("clouds2"),
                  style: { display: l.has("clouds2") ? "none" : "block" },
                  loading: "lazy",
                }),
              }),
            ],
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              top: "0.09%",
              left: "7.76%",
              width: "83.33%",
              height: "99.64%",
              y: p,
              willChange: "transform",
            },
            animate: d
              ? {}
              : { rotateZ: [0, 1.5, 0, -1.5, 0], scale: [1, 1.02, 1, 1.02, 1] },
            transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
            children: g.jsx("img", {
              src: me.flag,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => b("flag"),
              style: { display: l.has("flag") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              top: "15%",
              left: "-5%",
              width: "110%",
              height: "85%",
              y,
              willChange: "transform",
            },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 0.5 },
            children: [
              // g.jsx(L.div, {
              //   className: "absolute",
              //   style: {
              //     bottom: "0%",
              //     left: "0%",
              //     width: "100%",
              //     height: "79.05%",
              //     willChange: "transform",
              //   },
              //   initial: { opacity: 0, x: -50 },
              //   animate: { opacity: 1, x: 0, y: d ? 0 : [0, -8, 0] },
              //   transition: {
              //     opacity: { duration: 0.8, delay: 0.8 },
              //     x: { duration: 0.8, delay: 0.8 },
              //     y: {
              //       duration: 6,
              //       repeat: 1 / 0,
              //       ease: "easeInOut",
              //       delay: 1,
              //     },
              //   },
              //   children: g.jsx("img", {
              //     src: me.people.layer4,
              //     alt: "",
              //     className: "w-full h-full object-cover",
              //     onError: () => b("peopleLayer4"),
              //     style: { display: l.has("peopleLayer4") ? "none" : "block" },
              //     loading: "lazy",
              //   }),
              // }),
              // g.jsx(L.div, {
              //   className: "absolute",
              //   style: {
              //     bottom: "0%",
              //     left: "69.32%",
              //     width: "27.60%",
              //     height: "78.94%",
              //     willChange: "transform",
              //   },
              //   initial: { opacity: 0, x: 50 },
              //   animate: { opacity: 1, x: 0, y: d ? 0 : [0, -6, 0] },
              //   transition: {
              //     opacity: { duration: 0.8, delay: 1 },
              //     x: { duration: 0.8, delay: 1 },
              //     y: {
              //       duration: 7,
              //       repeat: 1 / 0,
              //       ease: "easeInOut",
              //       delay: 1.5,
              //     },
              //   },
              //   children: g.jsx("img", {
              //     src: me.people.layer3,
              //     alt: "",
              //     className: "w-full h-full object-cover",
              //     onError: () => b("peopleLayer3"),
              //     style: { display: l.has("peopleLayer3") ? "none" : "block" },
              //     loading: "lazy",
              //   }),
              // }),
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  top: "11.57%",
                  left: "19.32%",
                  width: "61.88%",
                  height: "88.43%",
                  willChange: "transform",
                },
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1, y: d ? 0 : [0, -10, 0] },
                transition: {
                  opacity: { duration: 0.8, delay: 1.2 },
                  scale: { duration: 0.8, delay: 1.2 },
                  y: {
                    duration: 8,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2,
                  },
                },
                children: g.jsx("img", {
                  src: me.people.layer23,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => b("peopleLayer23"),
                  style: { display: l.has("peopleLayer23") ? "none" : "block" },
                  loading: "lazy",
                }),
              }),
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  top: "0%",
                  left: "13.91%",
                  width: "71.04%",
                  height: "100%",
                  willChange: "transform",
                },
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: d ? 0 : [0, -12, 0] },
                transition: {
                  opacity: { duration: 1, delay: 1.4 },
                  y: {
                    duration: 5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2.5,
                  },
                },
                children: g.jsx("img", {
                  src: me.people.layer1,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => b("peopleLayer1"),
                  style: { display: l.has("peopleLayer1") ? "none" : "block" },
                  loading: "lazy",
                }),
              }),
            ],
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              bottom: "0%",
              left: "0%",
              width: "100%",
              height: "37.94%",
              willChange: "transform",
            },
            initial: { opacity: 0 },
            animate: { opacity: d ? 0.3 : [0.25, 0.35, 0.25] },
            transition: {
              opacity: {
                duration: 4,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 1.8,
              },
            },
            children: g.jsx("img", {
              src: me.gradientOverlay,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => b("gradientOverlay"),
              style: { display: l.has("gradientOverlay") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
        ],
      });
}
function u5() {
  const [n, l] = Z.useState(!1);
  Z.useEffect(() => {
    l5();
    const f = setTimeout(() => {
      l(!1);
    }, 1e3);
    return () => clearTimeout(f);
  }, []);
  const o = () => {
      const f = document.getElementById("section-mug");
      f && f.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    r = () => {
      const f = document.getElementById("section-mission");
      f && f.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    c = () => {
      const f = document.getElementById("section-contact");
      f && f.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    d = {
      background:
        "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
      height: "86px",
    };
  return n
    ? g.jsx("div", {
        className: "relative w-full",
        style: { aspectRatio: "1920 / 43", ...d },
        children: g.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center",
          children: g.jsxs("div", {
            className: "flex items-center space-x-3 text-white",
            children: [
              g.jsx("div", {
                className:
                  "animate-spin rounded-full h-6 w-6 border-b-2 border-white",
              }),
              g.jsx("span", {
                className: "text-sm font-medium",
                children: "Loading menu...",
              }),
            ],
          }),
        }),
      })
    : g.jsx(L.section, {
        className: "relative w-full px-8",
        style: { aspectRatio: "1920 / 86", zIndex: 10, background: "#ffb51b" },
        initial: { opacity: 0, y: -30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: g.jsx("div", {
          className: "absolute inset-0 w-full h-full",
          children: g.jsxs("nav", {
            className: "flex w-full h-full",
            children: [
              g.jsx("button", {
                className:
                  "flex-1 text-black font-bold text-xl transition-all duration-200 flex items-center justify-center h-full border-r-2 border-black",
                style: {
                  fontFamily: "CCYouBlockhead, sans-serif",
                  backgroundColor: "#f3f4f6",
                  borderLeft: "2px solid #000000",
                  borderRight: "2px solid #000000",
                  borderBottom: "2px solid #000000",
                  boxShadow:
                    "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
                  textShadow: "1px 1px 0px rgba(255, 255, 255, 0.8)",
                },
                onMouseEnter: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#fdce5c"),
                    (m.style.boxShadow =
                      "inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)");
                },
                onMouseLeave: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#f3f4f6"),
                    (m.style.boxShadow =
                      "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)");
                },
                onClick: o,
                children: "About Us",
              }),
              g.jsx("button", {
                className:
                  "flex-1 text-black font-bold text-xl transition-all duration-200 flex items-center justify-center h-full border-r-2 border-black",
                style: {
                  fontFamily: "CCYouBlockhead, sans-serif",
                  backgroundColor: "#f3f4f6",
                  borderLeft: "2px solid #000000",
                  borderRight: "2px solid #000000",
                  borderBottom: "2px solid #000000",
                  boxShadow:
                    "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
                  textShadow: "1px 1px 0px rgba(255, 255, 255, 0.8)",
                },
                onMouseEnter: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#fdce5c"),
                    (m.style.boxShadow =
                      "inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)");
                },
                onMouseLeave: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#f3f4f6"),
                    (m.style.boxShadow =
                      "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)");
                },
                onClick: r,
                children: "EXECUTIVE ORDER",
              }),
              g.jsx("button", {
                className:
                  "flex-1 text-black font-bold text-xl transition-all duration-200 flex items-center justify-center h-full border-r-2 border-black",
                style: {
                  fontFamily: "CCYouBlockhead, sans-serif",
                  backgroundColor: "#f3f4f6",
                  borderLeft: "2px solid #000000",
                  borderRight: "2px solid #000000",
                  borderBottom: "2px solid #000000",
                  boxShadow:
                    "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
                  textShadow: "1px 1px 0px rgba(255, 255, 255, 0.8)",
                },
                onClick: (f) => {
                  window.open('https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon')
                },
                onMouseEnter: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#fdce5c"),
                    (m.style.boxShadow =
                      "inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)");
                },
                onMouseLeave: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#f3f4f6"),
                    (m.style.boxShadow =
                      "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)");
                },
                children: "BUY",
              }),
              g.jsx("button", {
                className:
                  "flex-1 text-black font-bold text-xl transition-all duration-200 flex items-center justify-center h-full",
                style: {
                  fontFamily: "CCYouBlockhead, sans-serif",
                  backgroundColor: "#f3f4f6",
                  borderLeft: "2px solid #000000",
                  borderRight: "2px solid #000000",
                  borderBottom: "2px solid #000000",
                  boxShadow:
                    "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
                  textShadow: "1px 1px 0px rgba(255, 255, 255, 0.8)",
                },
                onMouseEnter: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#fdce5c"),
                    (m.style.boxShadow =
                      "inset 0 1px 2px rgba(255, 255, 255, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)");
                },
                onMouseLeave: (f) => {
                  const m = f.target;
                  (m.style.backgroundColor = "#f3f4f6"),
                    (m.style.boxShadow =
                      "inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)");
                },
                onClick: c,
                children: "Contact Us",
              }),
            ],
          }),
        }),
      });
}
function si({ children: n, className: l = "", id: o }) {
  return g.jsx("section", {
    id: o,
    className: `w-full ${l}`,
    children: g.jsx("div", { className: "relative w-full", children: n }),
  });
}
const Dt = {
    imgBrickBackground: "/assets/92d34e1fd9a57628fff8b5a372d34cecb2111958.png",
    imgDisplay: "/assets/9518b06b59fe78e1dc7d703f7fa0a88b3e15fec3.png",
    imgBottom: "/assets/c0b3842f55cdf34ad42c4019b340f1815f56a0ee.png",
    imgBarrelBack: "/assets/27f98f4b7fc8ed73b5262979f212fd0525f47893.png",
    imgWaterBase: "/assets/b67d425575a9295ef345f43bc16991df7af2120d.png",
    imgWave: "/assets/a2c40ab029d0a30a214b224ec606ca12749fa42e.png",
    imgSplash: "/assets/5d6f4f8b5aa36e3b83167892a923f8905fd69c61.png",
    imgSplash2: "/assets/50c05da96a45834a73cea030243d2960f5f689ca.png",
    imgNeckSplash: "/assets/13818c650c1e505af88f9cbed0f69be45c582c8f.png",
    imgParts: "/assets/1a7ed418e16814312edbdccb7bf65fd05b402713.png",
    imgHead8: "/assets/0b3ca90fc4b92e34a65a999a4fcda2d04187bbfd.png",
    imgHead7: "/assets/f1b4cecfa814119a422c7ab5d07855330fd922ab.png",
    imgHead6: "/assets/798d8bde6ee54679f1160bf4a7cc687b6ac47111.png",
    imgHead5: "/assets/a17a59b11706df87d6197dd4ad4d8167c449b324.png",
    imgHead4: "/assets/ec1deee3ff59d2a7a3c014d65742979ff568addd.png",
    imgHead3: "/assets/e3780bb15cd001c2276aaeca00d2211d5a27416b.png",
    imgHead2: "/assets/6d7b0a347230b9933d561b310a6c06400ff6983b.png",
    imgHead1: "/assets/d03efd75403156f03aebd8abca0959198b5a819d.png",
    imgTearsOfHeads: "/assets/f10304036802c4e9a13940af74e2611d6fbf3a23.png",
    imgBarrelFront: "/assets/69e777abc5d29eaa6a2af4d295e6b0207d961110.png",
    imgGirl: "/assets/9c0f7c5ab98db35800732d34d9a68a6fed0bfe06.png",
    imgJailMaduro: "/assets/jailmaduro.png",
    imgMug: "/assets/a1287f80c0ccb664ae8267a0d6cd6fa4986a26a9.png",
    imgTap: "/assets/9ddf8c4b25d745e3071ab4482ff8d13746b117ea.png",
    imgBubble: "/assets/e88595f10c870ccd17af69d11b6c17e2a3d18048.png",
  },
  tc = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
  };
function c5() {
  const [n, l] = Z.useState(new Set()),
    [o, r] = Z.useState(!1);
  Z.useEffect(() => {
    const f = setTimeout(() => {
      r(!1);
    }, 3e3);
    return () => clearTimeout(f);
  }, []);
  const c = (f) => {
      l((m) => new Set([...m, f]));
    },
    d = n.size > 0;
  return o
    ? g.jsx("div", {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: tc,
        children: g.jsxs("div", {
          className: "text-center text-white",
          children: [
            g.jsx("div", {
              className:
                "animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4",
            }),
            g.jsx("h2", {
              className: "text-2xl font-bold mb-2",
              children: "Liberal Tears",
            }),
            g.jsx("p", { children: "Loading the sweetest collection..." }),
          ],
        }),
      })
    : d
    ? g.jsx(L.div, {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: tc,
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: g.jsx("div", {
          className: "text-center text-white max-w-md mx-auto p-8",
          children: g.jsxs(L.div, {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { delay: 0.3, duration: 0.8 },
            children: [
              g.jsx("h1", {
                className:
                  "text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent",
                children: "Liberal Tears",
              }),
              g.jsx("div", { className: "text-6xl mb-6", children: "🥤" }),
              g.jsx("p", {
                className: "text-xl md:text-2xl mb-4 opacity-90",
                children: "The Sweetest Collection",
              }),
              g.jsx("p", {
                className: "text-lg opacity-75 mb-6",
                children:
                  "A premium selection of the finest liberal tears, carefully harvested from social media meltdowns and election nights.",
              }),
              g.jsx("div", {
                className: "bg-white/10 rounded-lg p-4 backdrop-blur-sm",
                children: g.jsxs("p", {
                  className: "text-sm opacity-80",
                  children: [
                    "🌟 100% Organic Salt Content",
                    g.jsx("br", {}),
                    "💧 Fresh Daily Harvest",
                    g.jsx("br", {}),
                    "📱 Mobile Optimized Experience",
                  ],
                }),
              }),
            ],
          }),
        }),
      })
    : g.jsxs(L.div, {
        className: "relative w-full",
        style: {
          aspectRatio: "1920 / 2918",
          minHeight: d ? "100vh" : "auto",
          background: d ? tc.background : "transparent",
          position: "relative",
          zIndex: 200,
        },
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 0.2, ease: "easeOut" },
        children: [
          g.jsx("img", {
            src: Dt.imgBrickBackground,
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover",
            onError: () => c("imgBrickBackground"),
            draggable: "false",
            style: { display: n.has("imgBrickBackground") ? "none" : "block" },
            loading: "lazy",
          }),
          d &&
            g.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center z-50",
              children: g.jsxs("div", {
                className:
                  "text-center text-white bg-black bg-opacity-50 p-8 rounded-lg",
                children: [
                  g.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Liberal Tears Collection",
                  }),
                  g.jsx("p", {
                    className: "text-lg mb-2",
                    children: "The sweetest taste of victory!",
                  }),
                  g.jsx("p", {
                    className: "text-sm opacity-75",
                    children: "Images are loading... Please check back soon!",
                  }),
                ],
              }),
            }),
          g.jsx(L.div, {
            className: "absolute flex items-center justify-center",
            style: {
              left: "16.56%",
              top: "0.79%",
              width: "65%",
              height: "7.37%",
              backgroundImage: `url(${Dt.imgDisplay})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            },
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            children: g.jsx("h1", {
              className: "text-white font-bold text-center px-2",
              style: {
                fontFamily: "CCYouBlockhead, Arial, sans-serif",
                fontSize: "clamp(0.8rem, 5vw, 4rem)",
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.9)",
                letterSpacing: "clamp(0.5px, 0.5vw, 3px)",
                color: "#ffffff",
                whiteSpace: "nowrap",
                width: "100%",
              },
              children: "America PEPE",
            }),
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "0%",
              top: "6.96%",
              width: "100%",
              height: "92.63%",
            },
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1, delay: 0.5, ease: "easeOut" },
            children: [
              g.jsx("div", {
                className: "absolute",
                style: {
                  left: "0%",
                  top: "67.70%",
                  width: "100%",
                  height: "32.30%",
                },
                children: g.jsx("img", {
                  src: Dt.imgBottom,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgBottom"),
                  style: { display: n.has("imgBottom") ? "none" : "block" },
                  loading: "lazy",
                }),
              }),
              g.jsx("div", {
                className: "absolute",
                style: {
                  left: "0%",
                  top: "2.92%",
                  width: "100%",
                  height: "37.66%",
                },
                children: g.jsx("img", {
                  src: Dt.imgBarrelBack,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgBarrelBack"),
                  style: { display: n.has("imgBarrelBack") ? "none" : "block" },
                  loading: "lazy",
                }),
              }),
              g.jsxs("div", {
                className: "absolute",
                style: {
                  left: "0%",
                  top: "1.52%",
                  width: "100%",
                  height: "44.33%",
                },
                children: [
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "0%",
                      top: "0%",
                      width: "100%",
                      height: "100%",
                    },
                    animate: { scale: [1, 1.02, 1], opacity: [0.9, 1, 0.9] },
                    transition: {
                      duration: 4,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                    children: g.jsx("img", {
                      src: Dt.imgWaterBase,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgWaterBase"),
                      style: {
                        display: n.has("imgWaterBase") ? "none" : "block",
                      },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "0%",
                      top: "5.43%",
                      width: "100%",
                      height: "86.48%",
                    },
                    animate: {
                      x: [0, 10, 0, -10, 0],
                      y: [0, -3, 0, 3, 0],
                      scale: [1, 1.03, 1, 1.01, 1],
                    },
                    transition: {
                      duration: 6,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                    children: g.jsx("img", {
                      src: Dt.imgWave,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgWave"),
                      style: { display: n.has("imgWave") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "0%",
                      top: "26.21%",
                      width: "100%",
                      height: "62.44%",
                    },
                    animate: {
                      scale: [1, 1.05, 0.98, 1.02, 1],
                      rotate: [0, 1, -1, 0.5, 0],
                      opacity: [0.8, 1, 0.9, 1, 0.8],
                    },
                    transition: {
                      duration: 3.5,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                    children: g.jsx("img", {
                      src: Dt.imgSplash,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgSplash"),
                      style: { display: n.has("imgSplash") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "0%",
                      top: "25.88%",
                      width: "98.54%",
                      height: "51.33%",
                    },
                    animate: {
                      scale: [1, 0.97, 1.04, 1],
                      x: [0, 5, -3, 0],
                      opacity: [0.7, 0.9, 0.8, 0.7],
                    },
                    transition: {
                      duration: 4.5,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                      delay: 1,
                    },
                    children: g.jsx("img", {
                      src: Dt.imgSplash2,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgSplash2"),
                      style: {
                        display: n.has("imgSplash2") ? "none" : "block",
                      },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "0%",
                      top: "28.63%",
                      width: "96.61%",
                      height: "54.09%",
                    },
                    animate: {
                      scale: [1, 1.06, 0.96, 1.03, 1],
                      y: [0, -5, 3, -2, 0],
                      rotate: [0, -0.5, 1, -0.3, 0],
                    },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                    children: g.jsx("img", {
                      src: Dt.imgNeckSplash,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgNeckSplash"),
                      style: {
                        display: n.has("imgNeckSplash") ? "none" : "block",
                      },
                      loading: "lazy",
                    }),
                  }),
                ],
              }),
              g.jsxs(L.div, {
                className: "absolute",
                style: {
                  left: "2.81%",
                  top: "0%",
                  width: "92.60%",
                  height: "36.36%",
                },
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1.2, delay: 0.8, ease: "easeOut" },
                children: [
                  g.jsx("div", {
                    className: "absolute",
                    style: {
                      left: "4.05%",
                      top: "20.85%",
                      width: "94.15%",
                      height: "79.15%",
                    },
                    children: g.jsx("img", {
                      src: Dt.imgParts,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgParts"),
                      style: { display: n.has("imgParts") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "0.11%",
                      top: "0%",
                      width: "24.01%",
                      height: "51.68%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: { opacity: 1, scale: 1, y: [0, -8, 5, -3, 0] },
                    transition: {
                      opacity: { duration: 0.6, delay: 1 },
                      scale: { duration: 0.6, delay: 1 },
                      y: {
                        duration: 7,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 1.2,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead8,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead8"),
                      style: { display: n.has("imgHead8") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "20.63%",
                      top: "15.46%",
                      width: "24.01%",
                      height: "44.76%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: { opacity: 1, scale: 1, y: [0, 6, -4, 2, 0] },
                    transition: {
                      opacity: { duration: 0.6, delay: 1.1 },
                      scale: { duration: 0.6, delay: 1.1 },
                      y: {
                        duration: 8.5,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2.3,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead7,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead7"),
                      style: { display: n.has("imgHead7") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "38.69%",
                      top: "0.10%",
                      width: "23.78%",
                      height: "45.98%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: {
                      opacity: 1,
                      scale: [1, 0.98, 1.03, 1],
                      y: [0, -5, 7, -2, 0],
                    },
                    transition: {
                      opacity: { duration: 0.6, delay: 1.2 },
                      scale: {
                        duration: 6.5,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 3.3,
                      },
                      y: {
                        duration: 6.5,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 3.3,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead6,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead6"),
                      style: { display: n.has("imgHead6") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "81.26%",
                      top: "1.42%",
                      width: "18.38%",
                      height: "42.02%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: [0, 4, -6, 3, 0],
                      x: [0, -2, 3, 0],
                    },
                    transition: {
                      opacity: { duration: 0.6, delay: 1.3 },
                      scale: { duration: 0.6, delay: 1.3 },
                      y: {
                        duration: 7.8,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2.1,
                      },
                      x: {
                        duration: 7.8,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2.1,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead5,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead5"),
                      style: { display: n.has("imgHead5") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "60.58%",
                      top: "14.95%",
                      width: "23.67%",
                      height: "42.02%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: {
                      opacity: 1,
                      scale: [1, 1.01, 0.99, 1],
                      y: [0, -7, 4, -1, 0],
                    },
                    transition: {
                      opacity: { duration: 0.6, delay: 1.4 },
                      scale: {
                        duration: 8,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2.9,
                      },
                      y: {
                        duration: 8,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2.9,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead4,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead4"),
                      style: { display: n.has("imgHead4") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "8.94%",
                      top: "50.86%",
                      width: "17.99%",
                      height: "43.95%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: [0, 5, -3, 6, 0],
                      x: [0, 2, -1, 0],
                    },
                    transition: {
                      opacity: { duration: 0.6, delay: 1.5 },
                      scale: { duration: 0.6, delay: 1.5 },
                      y: {
                        duration: 9,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 4.3,
                      },
                      x: {
                        duration: 9,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 4.3,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead3,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead3"),
                      style: { display: n.has("imgHead3") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "39.53%",
                      top: "47.81%",
                      width: "25.98%",
                      height: "45.98%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: {
                      opacity: 1,
                      scale: [1, 0.98, 1.02, 1],
                      y: [0, -4, 8, -2, 0],
                    },
                    transition: {
                      opacity: { duration: 0.6, delay: 1.6 },
                      scale: {
                        duration: 7.2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2.1,
                      },
                      y: {
                        duration: 7.2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2.1,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead2,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead2"),
                      style: { display: n.has("imgHead2") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx(L.div, {
                    className: "absolute",
                    style: {
                      left: "75.56%",
                      top: "46.08%",
                      width: "19.91%",
                      height: "46.39%",
                    },
                    initial: { opacity: 0, scale: 0.8, y: 30 },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: [0, 6, -5, 2, 0],
                      x: [0, -3, 1, 0],
                    },
                    transition: {
                      opacity: { duration: 0.6, delay: 1.7 },
                      scale: { duration: 0.6, delay: 1.7 },
                      y: {
                        duration: 8.3,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 3.5,
                      },
                      x: {
                        duration: 8.3,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 3.5,
                      },
                    },
                    children: g.jsx("img", {
                      src: Dt.imgHead1,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgHead1"),
                      style: { display: n.has("imgHead1") ? "none" : "block" },
                      loading: "lazy",
                    }),
                  }),
                  g.jsx("div", {
                    className: "absolute",
                    style: {
                      left: "0%",
                      top: "19.74%",
                      width: "100%",
                      height: "66.43%",
                    },
                    children: g.jsx("img", {
                      src: Dt.imgTearsOfHeads,
                      alt: "",
                      className: "w-full h-full object-cover",
                      onError: () => c("imgTearsOfHeads"),
                      style: {
                        display: n.has("imgTearsOfHeads") ? "none" : "block",
                      },
                      loading: "lazy",
                    }),
                  }),
                ],
              }),
              g.jsx("div", {
                className: "absolute",
                style: {
                  left: "0%",
                  top: "32.84%",
                  width: "100%",
                  height: "65.53%",
                },
                children: g.jsx("img", {
                  src: Dt.imgBarrelFront,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgBarrelFront"),
                  style: {
                    display: n.has("imgBarrelFront") ? "none" : "block",
                  },
                  loading: "lazy",
                }),
              }),
            ],
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "0%",
              top: "55.86%",
              width: "60.26%",
              height: "43.83%",
            },
            initial: { opacity: 0, x: -50 },
            animate: {
              opacity: 1,
              x: 0,
              y: [0, -2, 1, 0],
              scale: [1, 1.005, 1],
              rotate: [0, 0.3, -0.2, 0],
            },
            transition: {
              duration: 1.2,
              delay: 0.8,
              y: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
              scale: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
              rotate: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
            },
            children: g.jsx("img", {
              src: Dt.imgGirl,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("imgGirl"),
              style: { display: n.has("imgGirl") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              right: "0%",
              bottom: "0%",
              width: "20%",
            },
            initial: { opacity: 0, x: -50 },
            animate: {
              opacity: 1,
              x: 0,
              y: [0, -2, 1, 0],
              scale: [1, 1.005, 1],
              rotate: [0, 0.3, -0.2, 0],
            },
            transition: {
              duration: 1.2,
              delay: 0.8,
              y: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
              scale: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
              rotate: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
            },
            children: g.jsx("img", {
              src: Dt.imgJailMaduro,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("imgJailMaduro"),
              style: { display: n.has("imgJailMaduro") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "41.88%",
              top: "73.58%",
              width: "21.25%",
              height: "13.57%",
            },
            initial: { opacity: 0, scale: 0.8 },
            animate: {
              opacity: 1,
              scale: 1,
              y: [0, -1, 2, 0],
              rotate: [0, 1, -0.5, 0],
            },
            transition: {
              opacity: { duration: 0.6, delay: 2 },
              scale: { duration: 0.6, delay: 2 },
              y: { duration: 4, repeat: 1 / 0, ease: "easeInOut", delay: 2.5 },
              rotate: {
                duration: 4,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 3,
              },
            },
            // children: g.jsx("img", {
            //   src: Dt.imgMug,
            //   alt: "",
            //   className: "w-full h-full object-cover",
            //   onError: () => c("imgMug"),
            //   style: { display: n.has("imgMug") ? "none" : "block" },
            //   loading: "lazy",
            // }),
          }),
          // g.jsx(L.div, {
          //   className: "absolute",
          //   style: {
          //     left: "43.07%",
          //     top: "58.11%",
          //     width: "17.08%",
          //     height: "15.66%",
          //   },
          //   initial: { opacity: 0, y: -20 },
          //   animate: {
          //     opacity: 1,
          //     y: 0,
          //     rotate: [0, 2, -1, 1, 0],
          //     scale: [1, 1.01, 0.99, 1],
          //   },
          //   transition: {
          //     opacity: { duration: 0.6, delay: 1.9 },
          //     y: { duration: 0.6, delay: 1.9 },
          //     rotate: {
          //       duration: 6,
          //       repeat: 1 / 0,
          //       ease: "easeInOut",
          //       delay: 3,
          //     },
          //     scale: {
          //       duration: 6,
          //       repeat: 1 / 0,
          //       ease: "easeInOut",
          //       delay: 3,
          //     },
          //   },
          //   children: g.jsx("img", {
          //     src: Dt.imgTap,
          //     alt: "",
          //     className: "w-full h-full object-cover",
          //     onError: () => c("imgTap"),
          //     style: { display: n.has("imgTap") ? "none" : "block" },
          //     loading: "lazy",
          //   }),
          // }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "16.15%",
              top: "44.82%",
              width: "67.66%",
              height: "18.37%",
            },
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, delay: 2.2, ease: "easeOut" },
            children: [
              g.jsx("div", {
                className: "absolute",
                style: { left: "0%", top: "0%", width: "100%", height: "100%" },
                children: g.jsx("img", {
                  src: Dt.imgBubble,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgBubble"),
                  style: { display: n.has("imgBubble") ? "none" : "block" },
                  loading: "lazy",
                }),
              }),
              g.jsx("div", {
                className: "absolute flex items-center justify-center p-2",
                style: {
                  left: "3.92%",
                  top: "10.26%",
                  width: "92.53%",
                  height: "37.69%",
                },
                children: g.jsx(L.div, {
                  className:
                    "text-center w-full h-full flex items-center justify-center",
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.6, delay: 2.5 },
                  children: g.jsx("h2", {
                    className: "text-black font-bold w-full",
                    style: {
                      fontFamily: "CCYouBlockhead, comic sans ms, cursive",
                      fontSize: "min(3vw, 4vh, 1.8rem)",
                      textShadow:
                        "1px 1px 0px rgba(255,255,255,0.8), -1px -1px 0px rgba(255,255,255,0.8), 1px -1px 0px rgba(255,255,255,0.8), -1px 1px 0px rgba(255,255,255,0.8)",
                      letterSpacing: "0.01em",
                      lineHeight: "1.1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    },
                    children:
                      "A fun entry point into crypto. Backed by builders. Fueled by memes.",
                  }),
                }),
              }),
            ],
          }),
        ],
      });
}
const ka = {
    imgBackground: "/assets/bf400c69c74ddf88d20658d36007c59e51491658.png",
    imgShadowForHandle: "/assets/c98440642da1aca00827da27f3b87501edbf4c04.png",
    imgLeftPanel: "/assets/8ca7fa14fa74de138e10b7a953227e73b7865465.png",
    imgMug: "/assets/5f1152d1d42fb7d76e4b8e3b2845286cc17805a4.png",
  },
  Cg = {
    background:
      "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)",
    minHeight: "60vh",
  };
function f5() {
  const [n, l] = Z.useState(new Set()),
    o = (c) => {
      l((d) => new Set([...d, c]));
    },
    r = n.size > 0;
  return r
    ? g.jsx(L.div, {
        className:
          "relative w-full min-h-[60vh] flex items-center justify-center",
        style: Cg,
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: g.jsx("div", {
          className: "text-center text-white max-w-2xl mx-auto p-8",
          children: g.jsxs(L.div, {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { delay: 0.3, duration: 0.8 },
            children: [
              g.jsx("h2", {
                className:
                  "text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent",
                style: { fontFamily: "CCYouBlockhead, Arial, sans-serif" },
                children: "About Us",
              }),
              g.jsx("div", { className: "text-8xl mb-6", children: "☕" }),
              g.jsx("h3", {
                className: "text-2xl md:text-3xl font-bold mb-4",
                style: { fontFamily: "CCYouBlockhead, Arial, sans-serif" },
                children: "The Perfect Brew",
              }),
              g.jsx("p", {
                className: "text-lg md:text-xl opacity-90 mb-6",
                style: { fontFamily: "CCYouBlockhead, Arial, sans-serif" },
                children:
                  "Every drop of liberal tears, perfectly collected from above",
              }),
              g.jsx("div", {
                className: "bg-white/10 rounded-lg p-6 backdrop-blur-sm",
                children: g.jsxs("p", {
                  className: "text-base opacity-80",
                  style: { fontFamily: "CCYouBlockhead, Arial, sans-serif" },
                  children: [
                    "☕ Premium Collection Method",
                    g.jsx("br", {}),
                    "💧 Artisanal Tear Harvesting",
                    g.jsx("br", {}),
                    "🇺🇸 100% American Pride",
                  ],
                }),
              }),
            ],
          }),
        }),
      })
    : g.jsxs(L.section, {
        className: "relative w-full",
        style: {
          aspectRatio: "1920 / 1280",
          minHeight: r ? "60vh" : "auto",
          background: r ? Cg.background : "transparent",
        },
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: [
          g.jsx("div", {
            className:
              "absolute bg-center bg-cover bg-no-repeat w-full h-full left-0 top-0",
            style: { backgroundImage: `url('${ka.imgBackground}')` },
            children: g.jsx("img", {
              src: ka.imgBackground,
              alt: "",
              className: "opacity-0 w-full h-full object-cover",
              onError: () => o("imgBackground"),
              loading: "lazy",
            }),
          }),
          g.jsx("div", {
            className: "absolute bg-center bg-cover bg-no-repeat",
            style: {
              backgroundImage: `url('${ka.imgShadowForHandle}')`,
              height: "93.125%",
              left: "48.07%",
              top: "3.36%",
              width: "51.93%",
            },
            children: g.jsx("img", {
              src: ka.imgShadowForHandle,
              alt: "",
              className: "opacity-0 w-full h-full object-contain",
              onError: () => o("imgShadowForHandle"),
              loading: "lazy",
            }),
          }),
          g.jsx("div", {
            className: "absolute bg-center bg-cover bg-no-repeat",
            style: {
              backgroundImage: `url('${ka.imgLeftPanel}')`,
              height: "77.89%",
              left: "2.08%",
              top: "10.78%",
              width: "44.01%",
            },
            children: g.jsx("img", {
              src: ka.imgLeftPanel,
              alt: "",
              className: "opacity-0 w-full h-full object-contain",
              onError: () => o("imgLeftPanel"),
              loading: "lazy",
            }),
          }),
          g.jsx("div", {
            className: "absolute bg-center bg-cover bg-no-repeat",
            style: {
              backgroundImage: `url('${ka.imgMug}')`,
              height: "93.125%",
              left: "18.75%",
              top: "3.44%",
              width: "73.49%",
            },
            children: g.jsx("img", {
              src: ka.imgMug,
              alt: "",
              className: "opacity-0 w-full h-full object-contain",
              onError: () => o("imgMug"),
              loading: "lazy",
            }),
          }),
          g.jsxs(L.div, {
            className:
              "absolute flex flex-col items-center justify-center text-center",
            style: {
              left: "35%",
              top: "25%",
              width: "30%",
              height: "45%",
              zIndex: 10,
            },
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1, delay: 0.5, ease: "easeOut" },
            children: [
              g.jsx(L.h1, {
                className: "font-bold text-gray-800 m-3",
                style: {
                  fontFamily: "CCYouBlockhead, Arial, sans-serif",
                  textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                  fontSize: "clamp(0.5rem, 2.5vw, 1.2rem)",
                  lineHeight: "1.2",
                },
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
                children: "ABOUT US",
              }),
              g.jsx("div", {
                className:
                  "text-gray-800 w-full h-full flex items-center justify-center",
                children: g.jsxs(L.div, {
                  className: "text-center",
                  style: {
                    fontFamily: "CCYouBlockhead, Arial, sans-serif",
                    fontSize: "clamp(0.25rem, 1vw, 1rem)",
                    lineHeight: "1.6",
                    transformOrigin: "center",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    overflow: "visible",
                  },
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.8, delay: 0.8 },
                  children: [
                    "We're more than a meme, more than a token we're a revolution.",
                    g.jsx("br", {}),
                    g.jsx("br", {}),
                    "American PEPE was forged for patriots sick of global tyrants squandering freedom.",
                    g.jsx("br", {}),
                    g.jsx("br", {}),
                    "It's a rally cry that weakness loses wars, like Maduro's capture shows action triumphs.",
                    g.jsx("br", {}),
                    g.jsx("br", {}),
                    "We're rallying the warriors. The innovators. The rebels.",
                    g.jsx("br", {}),
                    g.jsx("br", {}),
                    "Folks eager to master, grasp, and seize their destiny in the crypto frontier.",
                  ],
                }),
              }),
            ],
          }),
        ],
      });
}
const mn = {
    layer81: "/assets/270afa69edb366b9c3845caaa1a5ff47c3b07909.png",
    layer82: "/assets/23f662d9c0bdd2ad5d81e264e5825d62137ff7bf.png",
    layer80: "/assets/a6fd5608e49693c5f516ca1c44103c9bcdd5f7f0.png",
    layer83: "/assets/ec057edcd02e2e04e27946f9b843cbab7816a7e0.png",
    layer84: "/assets/b223b504170c044a93e4fa56080eebb89c366e47.png",
    layer85: "/assets/c824336489904515cfb118f88fbbe7a44f2f015c.png",
    layer2: "/assets/df5324b405674e838dc0119d78eaff5e0ce9f1db.png",
  },
  Rg = {
    background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)",
  };
function gn() {
  const [n, l] = Z.useState(new Set()),
    [o, r] = Z.useState(!1);
  Z.useEffect(() => {
    const f = setTimeout(() => {
      r(!1);
    }, 1500);
    return () => clearTimeout(f);
  }, []);
  const c = (f) => {
      l((m) => new Set([...m, f]));
    },
    d = n.size > 0;
  return o
    ? g.jsx("div", {
        className: "relative w-full flex items-center justify-center",
        style: { aspectRatio: "1920 / 151", ...Rg },
        children: g.jsx("div", {
          className: "text-center text-white",
          children: g.jsxs("div", {
            className: "flex items-center justify-center space-x-2",
            children: [
              g.jsx("div", {
                className: "w-4 h-4 bg-white rounded-full animate-pulse",
              }),
              g.jsx("div", {
                className:
                  "w-4 h-4 bg-white rounded-full animate-pulse delay-75",
              }),
              g.jsx("div", {
                className:
                  "w-4 h-4 bg-white rounded-full animate-pulse delay-150",
              }),
            ],
          }),
        }),
      })
    : d
    ? g.jsx(L.div, {
        className:
          "relative w-full flex items-center justify-center overflow-hidden",
        style: { aspectRatio: "1920 / 151", ...Rg },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 },
        children: g.jsx("div", {
          className: "flex items-center justify-center w-full",
          children: g.jsx(L.div, {
            className: "flex items-center space-x-8",
            animate: {
              filter: [
                "hue-rotate(0deg)",
                "hue-rotate(180deg)",
                "hue-rotate(360deg)",
              ],
            },
            transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
            children: Array.from({ length: 15 }).map((f, m) =>
              g.jsx(
                L.div,
                {
                  className: "text-white text-2xl",
                  initial: { opacity: 0.8 },
                  animate: {
                    opacity: [0.8, 1, 0.8],
                    filter: [
                      "hue-rotate(0deg)",
                      "hue-rotate(240deg)",
                      "hue-rotate(0deg)",
                    ],
                  },
                  transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    delay: m * 0.2,
                    ease: "easeInOut",
                  },
                  children: "⭐",
                },
                m
              )
            ),
          }),
        }),
      })
    : g.jsxs(L.section, {
        className: "relative w-full",
        style: { aspectRatio: "1920 / 151", overflow: "hidden", zIndex: 1e3 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        children: [
          g.jsx("div", {
            className: "absolute",
            style: {
              left: "0%",
              top: "1.99%",
              width: "100%",
              height: "95.36%",
            },
            children: g.jsx("img", {
              src: mn.layer81,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("layer81"),
              style: { display: n.has("layer81") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx("div", {
            className: "absolute",
            style: {
              left: "0%",
              top: "17.22%",
              width: "100%",
              height: "64.9%",
            },
            children: g.jsx("img", {
              src: mn.layer82,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("layer82"),
              style: { display: n.has("layer82") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "1.41%",
              top: "35.1%",
              width: "97.19%",
              height: "37.75%",
              willChange: "filter",
            },
            animate: { filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] },
            transition: {
              duration: 6,
              repeat: 1 / 0,
              ease: "linear",
              repeatType: "loop",
            },
            children: g.jsx("img", {
              src: mn.layer80,
              alt: "",
              className: "w-full h-full object-contain",
              onError: () => c("layer80"),
              style: { display: n.has("layer80") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx("div", {
            className: "absolute",
            style: {
              left: "0%",
              top: "19.21%",
              width: "100%",
              height: "60.93%",
            },
            children: g.jsx("img", {
              src: mn.layer83,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("layer83"),
              style: { display: n.has("layer83") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx("div", {
            className: "absolute",
            style: {
              left: "0.31%",
              top: "25.17%",
              width: "99.38%",
              height: "56.95%",
            },
            children: g.jsx("img", {
              src: mn.layer84,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("layer84"),
              style: { display: n.has("layer84") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx("div", {
            className: "absolute",
            style: {
              left: "0%",
              top: "1.99%",
              width: "100%",
              height: "95.36%",
            },
            children: g.jsx("img", {
              src: mn.layer85,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("layer85"),
              style: { display: n.has("layer85") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "0%",
              top: "0%",
              width: "100%",
              height: "100%",
              willChange: "filter",
            },
            animate: { filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] },
            transition: {
              duration: 8,
              repeat: 1 / 0,
              ease: "linear",
              delay: 1,
              repeatType: "loop",
            },
            children: g.jsx("img", {
              src: mn.layer2,
              alt: "",
              className: "w-full h-full object-contain",
              onError: () => c("layer2"),
              style: { display: n.has("layer2") ? "none" : "block" },
              loading: "lazy",
            }),
          }),
        ],
      });
}
function d5({ index: n, faces: l, onImageError: o }) {
  const r = n % 3;
  return g.jsx(L.div, {
    className: "w-full h-full flex items-center justify-center",
    style: {
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      perspective: 1e3,
    },
    initial: { opacity: 0, scale: 0.8, rotateZ: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
      rotateZ: [0, 5, -5, 0],
      x: [0, 2, -2, 0],
      y: [0, -1, 1, 0],
    },
    transition: {
      duration: 2.5 + ((n * 0.17) % 4),
      repeat: 1 / 0,
      delay: (n * 0.23) % 3,
    },
    children: g.jsx("img", {
      src: l[r],
      alt: "",
      className: "w-full h-full object-contain",
      style: {
        maxWidth: "80px",
        maxHeight: "80px",
        filter: "brightness(0.9)",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      },
      onError: () => o(`backgroundFace${n}`),
      loading: "lazy",
      decoding: "async",
    }),
  });
}
const ec = { background: "linear-gradient(180deg, #3b4eb8 0%, #dc2626 100%)" };
function h5() {
  const [n, l] = Z.useState(new Set()),
    [o, r] = Z.useState(!1);
  Z.useEffect(() => {
    o5();
    const f = setTimeout(() => {
      r(!1);
    }, 2e3);
    return () => clearTimeout(f);
  }, []);
  const c = (f) => {
      l((m) => new Set([...m, f]));
    },
    d = n.size > 0;
  return o
    ? g.jsx("div", {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: ec,
        children: g.jsxs("div", {
          className: "text-center text-white",
          children: [
            g.jsx("div", {
              className:
                "animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4",
            }),
            g.jsx("h2", {
              className: "text-2xl font-bold mb-2",
              children: "Info Section",
            }),
            g.jsx("p", { children: "Loading the information..." }),
          ],
        }),
      })
    : d
    ? g.jsx(L.div, {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: ec,
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: g.jsx("div", {
          className: "text-center text-white max-w-4xl mx-auto p-8",
          children: g.jsxs(L.div, {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { delay: 0.3, duration: 0.8 },
            children: [
              g.jsx("h2", {
                className: "text-4xl font-bold mb-8",
                children: "How it Works",
              }),
              g.jsxs("div", {
                className: "flex justify-center gap-4 sm:gap-8 md:gap-12",
                children: [
                  g.jsxs("div", {
                    className: "text-center flex-1 min-w-0",
                    children: [
                      g.jsx("h3", {
                        className: "text-xl sm:text-2xl font-bold mb-2",
                        children: "TAP",
                      }),
                      g.jsx("p", {
                        className: "text-sm sm:text-base",
                        children: "Access the liberal tears collection",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "text-center flex-1 min-w-0",
                    children: [
                      g.jsx("h3", {
                        className: "text-xl sm:text-2xl font-bold mb-2",
                        children: "COLLECT TEARS",
                      }),
                      g.jsx("p", {
                        className: "text-sm sm:text-base",
                        children: "Gather the sweetest tears of defeat",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "text-center flex-1 min-w-0",
                    children: [
                      g.jsx("h3", {
                        className: "text-xl sm:text-2xl font-bold mb-2",
                        children: "GET REWARDS",
                      }),
                      g.jsx("p", {
                        className: "text-sm sm:text-base",
                        children: "Enjoy the satisfaction of victory",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    : g.jsxs(L.div, {
        className: "relative w-full",
        style: {
          aspectRatio: "1920 / 1000",
          minHeight: d ? "100vh" : "auto",
          background: d ? ec.background : "transparent",
          position: "relative",
          zIndex: 150,
        },
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 0.2, ease: "easeOut" },
        children: [
          g.jsx("img", {
            src: le.background,
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover",
            onError: () => c("background"),
            style: { display: n.has("background") ? "none" : "block" },
            loading: "lazy",
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "0%",
              top: "0%",
              width: "100%",
              height: "100%",
              mixBlendMode: "luminosity",
              opacity: 0.231,
              overflow: "hidden",
              willChange: "opacity",
              contain: "layout style paint",
              transform: "translateZ(0)",
            },
            initial: { opacity: 0 },
            animate: { opacity: 0.231 },
            transition: { duration: 2, delay: 0.5, type: "tween" },
            children: g.jsx("div", {
              className: "w-full h-full grid grid-cols-10 gap-1",
              style: {
                gridTemplateRows: "repeat(6, 1fr)",
                padding: "8px",
                contain: "layout style",
                willChange: "auto",
              },
              children: Array.from({ length: 60 }, (f, m) => {
                const p = [le.faces.face1, le.faces.face2, le.faces.face3];
                return g.jsx(d5, { index: m, faces: p, onImageError: c }, m);
              }),
            }),
          }),
          g.jsx(L.div, {
            className:
              "absolute inset-0 flex items-center justify-center z-10 px-2 sm:px-4 md:px-8 w-full h-full",
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1, delay: 0.8 },
            children: g.jsxs("div", {
              className:
                "flex items-start justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl px-4",
              children: [
                g.jsxs(L.div, {
                  className: "flex flex-col items-center text-center flex-1",
                  initial: { opacity: 0, x: -50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 1.2 },
                  style: { margin: "15px" },
                  children: [
                    g.jsx("div", {
                      className:
                        "w-full aspect-square max-w-15 flex-shrink-0 mb-2",
                      children: g.jsx("img", {
                        src: le.circles.left,
                        alt: "",
                        className: "w-full h-full object-contain",
                        style: {
                          display: n.has("leftCircle") ? "none" : "block",
                        },
                        onError: () => c("leftCircle"),
                        loading: "lazy",
                      }),
                    }),
                    g.jsx("div", {
                      className: "h-12 flex items-center justify-center",
                      children: g.jsx("h1", {
                        className:
                          "text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight text-center px-1",
                        style: {
                          fontFamily: "CCYouBlockhead, Arial, sans-serif",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                          color: "white",
                          fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
                        },
                        children: "TAP",
                      }),
                    }),
                  ],
                }),
                g.jsxs(L.div, {
                  className: "flex flex-col items-center text-center flex-1",
                  initial: { opacity: 0, y: -30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 1 },
                  style: { margin: "15px" },
                  children: [
                    g.jsx("div", {
                      className:
                        "w-full aspect-square max-w-15 flex-shrink-0 mb-2",
                      children: g.jsx("img", {
                        src: le.circles.middle,
                        alt: "",
                        className: "w-full h-full object-contain",
                        style: {
                          display: n.has("middleCircle") ? "none" : "block",
                        },
                        onError: () => c("middleCircle"),
                        loading: "lazy",
                      }),
                    }),
                    g.jsx("div", {
                      className: "h-12 flex items-center justify-center",
                      children: g.jsx("h1", {
                        className:
                          "text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight text-center px-1",
                        style: {
                          fontFamily: "CCYouBlockhead, Arial, sans-serif",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                          color: "white",
                          fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
                        },
                        children: "COLLECT TEARS",
                      }),
                    }),
                  ],
                }),
                g.jsxs(L.div, {
                  className: "flex flex-col items-center text-center flex-1",
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 1.4 },
                  style: { margin: "15px" },
                  children: [
                    g.jsx("div", {
                      className:
                        "w-full aspect-square max-w-15 flex-shrink-0 mb-2",
                      children: g.jsx("img", {
                        src: le.circles.right,
                        alt: "",
                        className: "w-full h-full object-contain",
                        style: {
                          display: n.has("rightCircle") ? "none" : "block",
                        },
                        onError: () => c("rightCircle"),
                        loading: "lazy",
                      }),
                    }),
                    g.jsx("div", {
                      className: "h-12 flex items-center justify-center",
                      children: g.jsx("h1", {
                        className:
                          "text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight text-center px-1",
                        style: {
                          fontFamily: "CCYouBlockhead, Arial, sans-serif",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                          color: "white",
                          fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
                        },
                        children: "GET REWARDS",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
const ie = {
    imgBackground: "/assets/6cc9e46785116c2d2e90a743a3ecb5baf7fe3fd1.png",
    imgRightCurtain225: "/assets/6905c0805b374cbdab5506e41624c137a14e0f07.png",
    imgRightCurtain226: "/assets/829e4355c66f635db0087968ce2fc91b36f3b972.png",
    imgRightCurtain227: "/assets/6c8bd4cc7133d4ab008348e5dcfc390696f2e815.png",
    imgRightCurtain3: "/assets/84407fb301cfe8ac67f02256643dc40f8ab5cb01.png",
    imgLeftCurtain225: "/assets/0e006bdb252f1f1705f7df834a5c24f8646f26e3.png",
    imgLeftCurtain226: "/assets/966dcad0bd18d90ae65625f350eb9eee4530351e.png",
    imgLeftCurtain227: "/assets/08faa9938cab9fc00076ba8f30a52ee0d7278888.png",
    imgLeftCurtain3: "/assets/3920cf6b1e1999b689f78aee97397bfd8d09bacb.png",
    imgTable: "/assets/9258301d294949561323118eebcab700203ab25f.png",
    imgPaperBg: "/assets/43abe4ca16233bb484463290ab775e56aa906006.png",
    imgSignature: "/assets/5e2ece15949fbda549c22d734117d64ccda98cb1.png",
    imgLogo: "/assets/800b9b7db8428316254043586c90fc77a85c520f.png",
    imgFlag: "/assets/474f88457cf9a2b1cc491b5a51d7944c3a65054b.png",
    imgLeftHand: "/assets/7bb94eeacf41efdd86b0d3d7315bd11ef25481f9.png",
    imgRightHand: "/assets/835251b379e35e0a62a927a54d4888e3c7fda228.png",
  },
  ac = {
    background:
      "linear-gradient(135deg, #1e3a8a 0%, #dc2626 50%, #7c2d12 100%)",
    minHeight: "100vh",
  };
function m5() {
  const [n, l] = Z.useState(new Set()),
    [o, r] = Z.useState(!1);
  Z.useEffect(() => {
    const f = setTimeout(() => {
      r(!1);
    }, 3e3);
    return () => clearTimeout(f);
  }, []);
  const c = (f) => {
      l((m) => new Set([...m, f]));
    },
    d = n.size > 0;
  return o
    ? g.jsx("div", {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: ac,
        children: g.jsxs("div", {
          className: "text-center text-white",
          children: [
            g.jsx("div", {
              className:
                "animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4",
            }),
            g.jsx("h2", {
              className: "text-2xl font-bold mb-2",
              children: "Our Mission",
            }),
            g.jsx("p", { children: "Loading the declaration..." }),
          ],
        }),
      })
    : d
    ? g.jsx(L.div, {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: ac,
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: g.jsx("div", {
          className: "text-center text-white max-w-4xl mx-auto p-8",
          children: g.jsxs(L.div, {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { delay: 0.3, duration: 0.8 },
            children: [
              g.jsx("h2", {
                className: "text-4xl font-bold mb-6",
                children: "Our Mission",
              }),
              g.jsxs("div", {
                className: "bg-white text-black p-8 rounded-lg shadow-lg",
                children: [
                  g.jsx("p", {
                    className: "text-lg mb-4",
                    children:
                      "We, the collectors of Liberal Tears, pledge to continue our sacred duty of harvesting the finest quality tears from the most triggered liberals across the land.",
                  }),
                  g.jsx("p", {
                    className: "text-base",
                    children:
                      "With each drop collected, we strengthen our resolve and sweeten our victory. This is our mission, this is our calling.",
                  }),
                  g.jsx("div", {
                    className: "mt-6 text-right",
                    children: g.jsx("span", {
                      className: "font-script text-2xl",
                      children: "Liberal Tears Co.",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    : g.jsxs(L.div, {
        className: "relative w-full",
        style: {
          aspectRatio: "1920 / 1838",
          minHeight: d ? "100vh" : "auto",
          background: d ? ac.background : "transparent",
          position: "relative",
          zIndex: 100,
        },
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 0.2, ease: "easeOut" },
        children: [
          g.jsx("img", {
            src: ie.imgBackground,
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover",
            onError: () => c("imgBackground"),
            style: { display: n.has("imgBackground") ? "none" : "block" },
            loading: "lazy",
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "0%",
              top: "-10%",
              width: "32.45%",
              height: "58.26%",
            },
            animate: {
              x: [0, -15, 8, -5, 0],
              y: [0, -3, 5, -2, 0],
              scale: [1, 1.03, 0.97, 1.01, 1],
              rotate: [0, -1, 0.8, -0.3, 0],
            },
            transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
            children: [
              g.jsx("img", {
                src: ie.imgLeftCurtain225,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0%",
                  top: "3.95%",
                  width: "87.16%",
                  height: "84.45%",
                },
                onError: () => c("imgLeftCurtain225"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: ie.imgLeftCurtain226,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0%",
                  top: "5.41%",
                  width: "99.36%",
                  height: "82.98%",
                },
                onError: () => c("imgLeftCurtain226"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: ie.imgLeftCurtain227,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "13.80%",
                  top: "0.56%",
                  width: "39.16%",
                  height: "26.61%",
                },
                onError: () => c("imgLeftCurtain227"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: ie.imgLeftCurtain3,
                alt: "",
                className: "absolute object-cover",
                style: { left: "0%", top: "0%", width: "100%", height: "100%" },
                onError: () => c("imgLeftCurtain3"),
                loading: "lazy",
              }),
            ],
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "67.40%",
              top: "-10%",
              width: "32.60%",
              height: "59.02%",
            },
            animate: {
              x: [0, 12, -8, 6, 0],
              y: [0, 4, -3, 2, 0],
              scale: [1, 0.96, 1.04, 0.99, 1],
              rotate: [0, 1.2, -0.9, 0.4, 0],
            },
            transition: {
              duration: 7,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: 1,
            },
            children: [
              g.jsx("img", {
                src: ie.imgRightCurtain225,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0%",
                  top: "2.11%",
                  width: "88.02%",
                  height: "86.46%",
                },
                onError: () => c("imgRightCurtain225"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: ie.imgRightCurtain226,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0%",
                  top: "2.11%",
                  width: "99.36%",
                  height: "86.46%",
                },
                onError: () => c("imgRightCurtain226"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: ie.imgRightCurtain227,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "14.22%",
                  top: "4.44%",
                  width: "39.46%",
                  height: "23.86%",
                },
                onError: () => c("imgRightCurtain227"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: ie.imgRightCurtain3,
                alt: "",
                className: "absolute object-cover",
                style: { left: "0%", top: "0%", width: "100%", height: "100%" },
                onError: () => c("imgRightCurtain3"),
                loading: "lazy",
              }),
            ],
          }),
          g.jsx("div", {
            className: "absolute",
            style: {
              left: "0%",
              top: "39.93%",
              width: "100%",
              height: "60.07%",
            },
            children: g.jsx("img", {
              src: ie.imgTable,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("imgTable"),
              loading: "lazy",
            }),
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "7.14%",
              top: "4.57%",
              width: "83.07%",
              height: "95.43%",
            },
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1, delay: 0.5, ease: "easeOut" },
            children: [
              g.jsx("img", {
                src: ie.imgPaperBg,
                alt: "",
                className: "absolute w-full h-full object-cover",
                onError: () => c("imgPaperBg"),
                loading: "lazy",
              }),
              g.jsx("div", {
                className: "absolute",
                style: {
                  left: "0",
                  top: "0%",
                  height: "70%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: "clamp(1rem, 5vw, 5rem)",
                },
                children: g.jsx("div", {
                  className: "h-full flex flex-col items-center justify-center",
                  style: {
                    width: "clamp(60%, 50vw, 50%)",
                    padding:
                      "clamp(0.5rem, 2vw, 2rem) clamp(0.5rem, 1.5vw, 2rem)",
                  },
                  children: g.jsxs(L.div, {
                    className: "text-center w-full max-w-full",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1, delay: 1.2 },
                    children: [
                      g.jsx("h1", {
                        className: "text-black font-bold mb-4",
                        style: {
                          fontFamily: "CCYouBlockhead, Arial, sans-serif",
                          fontSize: "clamp(0.5rem, 1.5vw, 1.5rem)",
                          letterSpacing: "clamp(1px, 0.2vw, 2px)",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                        },
                        children: "EXECUTIVE ORDER ON AMERICAN PEPE",
                      }),
                      g.jsxs("div", {
                        className: "text-black text-center",
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "clamp(0.5rem, 1.5vw, 1rem)",
                        },
                        children: [
                          g.jsxs(L.p, {
                            className: "leading-relaxed",
                            style: {
                              fontFamily: "CCYouBlockhead, Arial, sans-serif",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              lineHeight: "1.5",
                              wordWrap: "break-word",
                              hyphens: "auto",
                            },
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 1.5, duration: 0.8 },
                            children: [
                              "WHEREAS, American PEPE is more than a meme—it's a huge movement, folks!",
                              g.jsx("br", {}),
                              "Our mission is to bring folks together around a big, winning idea: whining gets you nowhere, but real action wins everything.",
                            ],
                          }),
                          g.jsx(L.p, {
                            className: "leading-relaxed",
                            style: {
                              fontFamily: "CCYouBlockhead, Arial, sans-serif",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              lineHeight: "1.5",
                              wordWrap: "break-word",
                              hyphens: "auto",
                            },
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 1.8, duration: 0.8 },
                            children:
                              "We're building a meme so tough it turns into a battle cry, a badge for patriots sick of squandered chances and fake deals.",
                          }),
                          g.jsx(L.p, {
                            className: "leading-relaxed",
                            style: {
                              fontFamily: "CCYouBlockhead, Arial, sans-serif",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              lineHeight: "1.5",
                              wordWrap: "break-word",
                              hyphens: "auto",
                            },
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 2.1, duration: 0.8 },
                            children:
                              "With tales of grit, comeback, and total turnaround, we're gonna wake people up and flip their thinking.",
                          }),
                          g.jsx(L.p, {
                            className: "leading-relaxed",
                            style: {
                              fontFamily: "CCYouBlockhead, Arial, sans-serif",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              lineHeight: "1.5",
                              wordWrap: "break-word",
                              hyphens: "auto",
                            },
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 2.4, duration: 0.8 },
                            children:
                              "To prove that when Americans grab the reins of their fate, when they hustle, create, and push hard, they don't just save themselves—they rebuild their towns.",
                          }),
                          g.jsxs(L.p, {
                            className: "leading-relaxed",
                            style: {
                              fontFamily: "CCYouBlockhead, Arial, sans-serif",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              lineHeight: "1.5",
                              wordWrap: "break-word",
                              hyphens: "auto",
                            },
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 2.7, duration: 0.8 },
                            children: [
                              "We know that by blasting this truth everywhere, by backing and lifting those geared to fight, we can create massive change.",
                              g.jsx("br", {}),
                              g.jsx("br", {}),
                              g.jsx("br", {}),
                              "Together, we'll show that with the tough mindset, killer drive, and sharp goal, we can forge a stronger, freer, and brighter America—just like taking down tyrants like Maduro proves winners act fast.",
                            ],
                          }),
                          g.jsxs(L.p, {
                            className: "leading-relaxed font-bold",
                            style: {
                              fontFamily: "CCYouBlockhead, Arial, sans-serif",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              lineHeight: "1.5",
                              wordWrap: "break-word",
                              hyphens: "auto",
                            },
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { delay: 3, duration: 0.8 },
                            children: [
                              "American PEPE is our shout to the globe: don't sit around for fixes.",
                              g.jsx("br", {}),
                              g.jsx("br", {}),
                              "Get it done!",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  left: "57.30%",
                  top: "81.02%",
                  width: "15.99%",
                  height: "5.87%",
                },
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 2.5 },
                children: g.jsx("img", {
                  src: ie.imgSignature,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgSignature"),
                  loading: "lazy",
                }),
              }),
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  left: "72.73%",
                  top: "73.60%",
                  width: "17.05%",
                  height: "15.45%",
                },
                initial: { opacity: 0, rotate: -10 },
                animate: { opacity: 1, rotate: 0 },
                transition: { duration: 1, delay: 2.2 },
                children: g.jsx("img", {
                  src: ie.imgLogo,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgLogo"),
                  loading: "lazy",
                }),
              }),
            ],
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "26.30%",
              top: "78.59%",
              width: "15.31%",
              height: "8.49%",
            },
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 1, delay: 1.8 },
            children: g.jsx("img", {
              src: ie.imgFlag,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("imgFlag"),
              loading: "lazy",
            }),
          }),
          g.jsxs("div", {
            className: "absolute",
            style: {
              left: "0%",
              top: "58.53%",
              width: "100%",
              height: "41.52%",
            },
            children: [
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  left: "0%",
                  top: "0%",
                  width: "41.98%",
                  height: "100%",
                },
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0, y: [0, -2, 1, 0] },
                transition: {
                  opacity: { duration: 1, delay: 1.5 },
                  x: { duration: 1, delay: 1.5 },
                  y: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2,
                  },
                },
                children: g.jsx("img", {
                  src: ie.imgLeftHand,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgLeftHand"),
                  loading: "lazy",
                }),
              }),
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  left: "80.52%",
                  top: "15.99%",
                  width: "19.48%",
                  height: "80.34%",
                },
                initial: { opacity: 0, x: 50 },
                animate: {
                  opacity: 1,
                  x: 0,
                  y: [0, -3, 2, -1, 0],
                  rotate: [0, 1, -0.5, 0.3, 0],
                },
                transition: {
                  opacity: { duration: 1, delay: 2 },
                  x: { duration: 1, delay: 2 },
                  y: {
                    duration: 3,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2.5,
                  },
                  rotate: {
                    duration: 3,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2.5,
                  },
                },
                children: g.jsx("img", {
                  src: ie.imgRightHand,
                  alt: "",
                  className: "w-full h-full object-cover",
                  onError: () => c("imgRightHand"),
                  loading: "lazy",
                }),
              }),
            ],
          }),
        ],
      });
}
const bt = {
    imgWallBg: "/assets/70a8612c7f0795b875dc195070f685b5de4e8aff.png",
    imgSky: "/assets/3bab8b13acb99d8fe8a26ba301714a0e02e6c438.png",
    imgBushes: "/assets/65a6ef40bfa1f62e3fe3037bab1e65a963642025.png",
    imgGrass: "/assets/ea1bef6cbf4f2ddaa6f790680a906f29dced777e.png",
    imgWhiteHouse: "/assets/db6697a4debcaa0aa61427b93c8355e8548acd78.png",
    imgFrame: "/assets/db50a53ce51217952e656d46e26b3e415bc5e786.png",
    imgWallColor: "/assets/d86d0817dd36cefdd40dbaabff529ee402f70583.png",
    imgPictureFrame: "/assets/1101a4a9c8faa4c007cb982446917511f5341e2b.png",
    imgPictureBg: "/assets/c11d7f67c7f689a107329a8d81b8c3874f81d3ec.png",
    imgBody: "/assets/37a948a35b84db3ecbba3554dfa069e6283875e6.png",
    imgContour: "/assets/73600c0839dd36eafc5eac7e85587b456561bd5b.png",
    imgHead: "/assets/e4859a6f61eb42ac0f1eed0aca41633155dfb451.png",
    imgChairs: "/assets/78694b912446b812afb1c47654e5870238a9f113.png",
    imgTable: "/assets/5eb1055e5ccfef77527c349cc68fbac777e743f7.png",
    imgGirl: "/assets/7f724202c69364f2b148707a22ef9fcd673f582b.png",
    imgGirlEyesShine: "/assets/24c3c45865577538bb9b56176c387a7e83fe0c8d.png",
    imgTearGuy: "/assets/e5faf5822db60425c0e0e276ebb807a8e1d9d990.png",
    imgTearGuyEyesShine: "/assets/6ee7c70855598f5e60a83cf32bea5f12c06621a2.png",
    imgMainContour: "/assets/695699837fb68c5d5e255cf2ed3da311c05a27e1.png",
    imgPuzzleEdgeMain: "/assets/a35b2eae8e9854db49a256cb37fb8e25a593293c.png",
    imgLight: "/assets/7ffcdd7829b4d90b55169d3d46e6ad6c8d02466c.png",
    imgPuzzleContentMain:
      "/assets/cdf09d8fb264da378a8c4417d0457eb0f1270eeb.png",
    imgPuzzleLines: "/assets/ddeb204d6c569d404bcaa29dff16dfab92dea334.png",
    imgPuzzleContentSide:
      "/assets/22fb2df636e12975637401b306dd718d888763bf.png",
    imgPuzzleEdge: "/assets/6bd34a95b1b280bd1a5628d69450986cde4d4bc7.png",
    imgPuzzleContour: "/assets/abc020c4e98c84d10cf00ef17840b3fc2732cc63.png",
    imgMug: "/assets/4db2fbeeff6e040fd5961c6858e98fa6b3be8dca.png",
    imgCoins: "/assets/b911d10281dffe40d88c0e2cdbe573680835e5c5.png",
    imgTextBubble: "/assets/a3d1e88595f10c870ccd17af69d11b6c17e2a3d1.png",
  },
  nc = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
  };
function g5() {
  const [n, l] = Z.useState(new Set()),
    [o, r] = Z.useState(!1);
  Z.useEffect(() => {
    const f = setTimeout(() => {
      r(!1);
    }, 3e3);
    return () => clearTimeout(f);
  }, []);
  const c = (f) => {
      l((m) => new Set([...m, f]));
    },
    d = n.size > 0;
  return o
    ? g.jsx("div", {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: nc,
        children: g.jsxs("div", {
          className: "text-center text-white",
          children: [
            g.jsx("div", {
              className:
                "animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4",
            }),
            g.jsx("h2", {
              className: "text-2xl font-bold mb-2",
              children: "Puzzle Time",
            }),
            g.jsx("p", { children: "Loading the puzzle pieces..." }),
          ],
        }),
      })
    : d
    ? g.jsx(L.div, {
        className:
          "relative w-full min-h-screen flex items-center justify-center",
        style: nc,
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
        children: g.jsx("div", {
          className: "text-center text-white max-w-md mx-auto p-8",
          children: g.jsxs(L.div, {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { delay: 0.3, duration: 0.8 },
            children: [
              g.jsx("h2", {
                className: "text-3xl font-bold mb-4",
                children: "Puzzle Component",
              }),
              g.jsx("p", {
                className: "text-lg",
                children: "Images are loading... Please check back soon!",
              }),
            ],
          }),
        }),
      })
    : g.jsxs(L.div, {
        className: "relative w-full",
        style: {
          aspectRatio: "1920 / 1280",
          minHeight: d ? "100vh" : "auto",
          background: d ? nc.background : "transparent",
          position: "relative",
          zIndex: 100,
        },
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 0.2, ease: "easeOut" },
        children: [
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "48.02%",
              top: "0%",
              width: "52.00%",
              height: "90.55%",
            },
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            children: [
              g.jsx("img", {
                src: bt.imgWallBg,
                alt: "",
                className: "absolute inset-0 w-full h-full object-cover",
                onError: () => c("imgWallBg"),
                style: { display: n.has("imgWallBg") ? "none" : "block" },
                loading: "lazy",
              }),
              g.jsxs("div", {
                className: "absolute",
                style: {
                  left: "7.71%",
                  top: "0%",
                  width: "92.29%",
                  height: "75.15%",
                },
                children: [
                  g.jsx("img", {
                    src: bt.imgSky,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "6.19%",
                      top: "0%",
                      width: "93.81%",
                      height: "92.65%",
                    },
                    onError: () => c("imgSky"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgBushes,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "5.75%",
                      top: "5.74%",
                      width: "94.25%",
                      height: "73.04%",
                    },
                    onError: () => c("imgBushes"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgGrass,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "7.27%",
                      top: "71.42%",
                      width: "92.73%",
                      height: "21.24%",
                    },
                    onError: () => c("imgGrass"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgWhiteHouse,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "6.95%",
                      top: "0%",
                      width: "93.05%",
                      height: "85.65%",
                    },
                    onError: () => c("imgWhiteHouse"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgFrame,
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover",
                    onError: () => c("imgFrame"),
                    loading: "lazy",
                  }),
                ],
              }),
            ],
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: { left: "0%", top: "0%", width: "49.53%", height: "84.30%" },
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
            children: [
              g.jsx("img", {
                src: bt.imgWallColor,
                alt: "",
                className: "absolute inset-0 w-full h-full object-cover",
                onError: () => c("imgWallColor"),
                loading: "lazy",
              }),
              g.jsxs(L.div, {
                className: "absolute",
                style: {
                  left: "4.00%",
                  top: "0%",
                  width: "50.47%",
                  height: "51.71%",
                },
                animate: { y: [0, -3, 0, -1.5, 0] },
                transition: {
                  duration: 4,
                  repeat: 1 / 0,
                  ease: "easeInOut",
                  delay: 2,
                },
                children: [
                  g.jsx("img", {
                    src: bt.imgPictureFrame,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "0.21%",
                      top: "0%",
                      width: "98.33%",
                      height: "99.10%",
                    },
                    onError: () => c("imgPictureFrame"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgPictureBg,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "17.92%",
                      top: "0%",
                      width: "67.29%",
                      height: "86.38%",
                    },
                    onError: () => c("imgPictureBg"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgBody,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "18.13%",
                      top: "33.87%",
                      width: "63.33%",
                      height: "52.51%",
                    },
                    onError: () => c("imgBody"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgContour,
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover",
                    onError: () => c("imgContour"),
                    loading: "lazy",
                  }),
                  g.jsx("img", {
                    src: bt.imgHead,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "32.50%",
                      top: "2.87%",
                      width: "64.17%",
                      height: "92.65%",
                    },
                    onError: () => c("imgHead"),
                    loading: "lazy",
                  }),
                ],
              }),
            ],
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "0%",
              top: "8.44%",
              width: "100%",
              height: "91.56%",
            },
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 0.5, ease: "easeOut" },
            children: [
              g.jsx("img", {
                src: bt.imgChairs,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "6.41%",
                  top: "21.67%",
                  width: "85.21%",
                  height: "54.18%",
                },
                onError: () => c("imgChairs"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: bt.imgTable,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0%",
                  top: "66.13%",
                  width: "100%",
                  height: "33.87%",
                },
                onError: () => c("imgTable"),
                loading: "lazy",
              }),
              g.jsxs(L.div, {
                className: "absolute",
                style: {
                  left: "13.39%",
                  top: "0.09%",
                  width: "39.27%",
                  height: "72.78%",
                },
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
                children: [
                  g.jsx("img", {
                    src: bt.imgGirl,
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover",
                    onError: () => c("imgGirl"),
                    loading: "lazy",
                  }),
                  // g.jsx(L.img, {
                  //   src: bt.imgGirlEyesShine,
                  //   alt: "",
                  //   className: "absolute object-cover",
                  //   style: {
                  //     left: "59.42%",
                  //     top: "31.89%",
                  //     width: "15.12%",
                  //     height: "2.58%",
                  //   },
                  //   onError: () => c("imgGirlEyesShine"),
                  //   loading: "lazy",
                  //   animate: { opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] },
                  //   transition: {
                  //     duration: 2,
                  //     repeat: 1 / 0,
                  //     ease: "easeInOut",
                  //   },
                  // }),
                ],
              }),
              g.jsxs(L.div, {
                className: "absolute",
                style: {
                  left: "43.13%",
                  top: "2.22%",
                  width: "39.53%",
                  height: "75.00%",
                },
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 1, ease: "easeOut" },
                children: [
                  g.jsx("img", {
                    src: bt.imgTearGuy,
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover",
                    onError: () => c("imgTearGuy"),
                    loading: "lazy",
                  }),
                  g.jsx(L.img, {
                    src: bt.imgTearGuyEyesShine,
                    alt: "",
                    className: "absolute object-cover",
                    style: {
                      left: "48.35%",
                      top: "25.26%",
                      width: "29.25%",
                      height: "13.65%",
                    },
                    onError: () => c("imgTearGuyEyesShine"),
                    loading: "lazy",
                    animate: { opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }),
                ],
              }),
              g.jsx(L.div, {
                className: "absolute",
                style: {
                  left: "40.00%",
                  top: "-15.00%",
                  width: "30.00%",
                  height: "35.00%",
                  zIndex: 1e3,
                },
                initial: { opacity: 0, scale: 0.3, x: -20 },
                animate: { opacity: 1, scale: 1, x: 0 },
                transition: {
                  opacity: { duration: 0.6, delay: 1.8 },
                  scale: { duration: 0.8, delay: 1.8, ease: "backOut" },
                  x: { duration: 0.6, delay: 1.8 },
                },
                children: g.jsxs("div", {
                  className: "relative w-full h-full",
                  children: [
                    g.jsx("img", {
                      src: bt.imgTextBubble,
                      alt: "",
                      className:
                        "absolute inset-0 w-full h-full object-contain",
                      onError: () => c("imgTextBubble"),
                      loading: "lazy",
                    }),
                    g.jsx("div", {
                      className:
                        "absolute inset-0 flex items-start justify-start pl-8 pt-2",
                      style: {
                        top: "25%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                      },
                      children: g.jsxs("div", {
                        className: "max-w-full",
                        style: { textAlign: "center", padding: "0 10px" },
                        children: [
                          g.jsx("p", {
                            className:
                              "font-bold text-gray-800 leading-tight mb-2",
                            style: {
                              fontFamily: "CCYouBlockhead, sans-serif",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              letterSpacing: "clamp(0.5px, 0.1vw, 1px)",
                            },
                            children: "Contract Address:",
                          }),
                          g.jsx("p", {
                            className: "text-blue-600 break-all",
                            style: {
                              fontFamily: "CCYouBlockhead, monospace",
                              fontSize: "clamp(0.25rem, 1vw, 1rem)",
                              lineHeight: "1.2",
                              color: "#004299",
                            },
                            children:
                              "0xcomingsoon",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              g.jsx("img", {
                src: bt.imgMainContour,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0%",
                  top: "0%",
                  width: "100%",
                  height: "98.81%",
                },
                onError: () => c("imgMainContour"),
                loading: "lazy",
              }),
            ],
          }),
          g.jsxs(L.div, {
            className: "absolute",
            style: {
              left: "12.87%",
              top: "71.72%",
              width: "87.13%",
              height: "25.78%",
            },
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1, delay: 1.2, ease: "easeOut" },
            children: [
              g.jsx("img", {
                src: bt.imgPuzzleEdgeMain,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "23.43%",
                  top: "0.91%",
                  width: "40.93%",
                  height: "98.18%",
                },
                onError: () => c("imgPuzzleEdgeMain"),
                loading: "lazy",
              }),
              g.jsx(L.img, {
                src: bt.imgLight,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "23.85%",
                  top: "1.52%",
                  width: "40.41%",
                  height: "96.67%",
                },
                onError: () => c("imgLight"),
                loading: "lazy",
                animate: { opacity: [0.8, 1, 0.8], scale: [1, 1.02, 1] },
                transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
              }),
              g.jsx("img", {
                src: bt.imgPuzzleContentMain,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "24.93%",
                  top: "5.76%",
                  width: "37.48%",
                  height: "86.36%",
                },
                onError: () => c("imgPuzzleContentMain"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: bt.imgPuzzleLines,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "23.25%",
                  top: "0%",
                  width: "41.24%",
                  height: "100%",
                },
                onError: () => c("imgPuzzleLines"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: bt.imgPuzzleContentSide,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0.30%",
                  top: "12.42%",
                  width: "99.70%",
                  height: "68.18%",
                },
                onError: () => c("imgPuzzleContentSide"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: bt.imgPuzzleEdge,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "2.57%",
                  top: "18.79%",
                  width: "97.43%",
                  height: "63.33%",
                },
                onError: () => c("imgPuzzleEdge"),
                loading: "lazy",
              }),
              g.jsx("img", {
                src: bt.imgPuzzleContour,
                alt: "",
                className: "absolute object-cover",
                style: {
                  left: "0%",
                  top: "10.91%",
                  width: "100%",
                  height: "72.73%",
                },
                onError: () => c("imgPuzzleContour"),
                loading: "lazy",
              }),
            ],
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "80.21%",
              top: "68.36%",
              width: "14.95%",
              height: "22.11%",
            },
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1, y: [0, -2, 0] },
            transition: {
              opacity: { duration: 0.6, delay: 1.4 },
              scale: { duration: 0.6, delay: 1.4 },
              y: { duration: 3, repeat: 1 / 0, ease: "easeInOut", delay: 2 },
            },
            children: g.jsx("img", {
              src: bt.imgMug,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("imgMug"),
              loading: "lazy",
            }),
          }),
          g.jsx(L.div, {
            className: "absolute",
            style: {
              left: "0.36%",
              top: "74.61%",
              width: "14.53%",
              height: "11.72%",
            },
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0, rotate: [0, 1, -1, 0] },
            transition: {
              opacity: { duration: 0.6, delay: 1.6 },
              x: { duration: 0.6, delay: 1.6 },
              rotate: {
                duration: 8,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 3,
              },
            },
            children: g.jsx("img", {
              src: bt.imgCoins,
              alt: "",
              className: "w-full h-full object-cover",
              onError: () => c("imgCoins"),
              loading: "lazy",
            }),
          }),
        ],
      });
}
function y5() {
  const [n, l] = Z.useState(!1);
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx("style", {
        children: `
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .rainbow-bg {
          background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000);
          background-size: 400% 400%;
          animation: rainbow 2s ease infinite;
        }
      `,
      }),
      g.jsxs(L.div, {
        className:
          "w-full min-h-[50px] flex items-center justify-center relative",
        style: {
          backgroundColor: n ? "transparent" : "#324088",
          width: "100%",
          fontSize: "clamp(0.25rem, 1vw, 1rem)",
          borderTop: "5px solid black",
          borderBottom: "3px solid black",
        },
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
        viewport: { once: !0 },
        children: [
          n &&
            g.jsx("div", {
              className: "rainbow-bg absolute inset-0 w-full h-full",
            }),
          g.jsxs("div", {
            className:
              "flex items-center justify-center space-x-8 py-4 relative z-10",
            style: {gap: 20},
            children: [
              g.jsxs("a", {
                href: "https://x.com/usapepe_vip",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "bg-white px-6 py-3 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform inline-flex items-center space-x-2 no-underline",
                style: {
                  fontFamily: "CCYouBlockhead, sans-serif",
                  color: "#5fcafc",
                  padding: "0 5px",
                },
                onMouseEnter: (o) => {
                  o.currentTarget.style.color = "#55f5f5";
                },
                onMouseLeave: (o) => {
                  o.currentTarget.style.color = "#5fcafc";
                },
                children: [
                  g.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: g.jsx("path", {
                      d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                    }),
                  }),
                  g.jsx("span", {
                    className: "px-5",
                    children: "X",
                  }),
                ],
              }),
              g.jsxs("a", {
                href: "https://t.me/usapepe_vip",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "bg-white px-6 py-3 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform inline-flex items-center space-x-2 no-underline",
                style: {
                  fontFamily: "CCYouBlockhead, sans-serif",
                  color: "#5fcafc",
                  padding: "0 5px",
                },
                onMouseEnter: (o) => {
                  o.currentTarget.style.color = "#55f5f5";
                },
                onMouseLeave: (o) => {
                  o.currentTarget.style.color = "#5fcafc";
                },
                children: [
                  g.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: g.jsx("path", {
                      d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                    }),
                  }),
                  g.jsx("span", {
                    className: "px-5",
                    children: "Telegram",
                  }),
                ],
              }),
              g.jsxs("a", {
                href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "bg-white px-6 py-3 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform inline-flex items-center space-x-2 no-underline",
                style: {
                  fontFamily: "CCYouBlockhead, sans-serif",
                  color: "#5fcafc",
                  padding: "0 5px",
                },
                onMouseEnter: (o) => {
                  o.currentTarget.style.color = "#55f5f5";
                },
                onMouseLeave: (o) => {
                  o.currentTarget.style.color = "#5fcafc";
                },
                children: [
                  g.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: g.jsx("path", {
                      d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                    }),
                  }),
                  g.jsx("span", {
                    className: "px-5",
                    children: "DEXTools",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function p5() {
  return (
    Z.useEffect(() => {
      const n = (c) => {
          const d = c.target;
          if (d.tagName === "IMG" || d.style.backgroundImage)
            return c.preventDefault(), !1;
        },
        l = (c) => {
          if (c.target.tagName === "IMG") return c.preventDefault(), !1;
        };
      document.addEventListener("dragstart", n),
        document.addEventListener("contextmenu", l),
        document.querySelectorAll("img").forEach((c) => {
          (c.draggable = !1), c.setAttribute("draggable", "false");
        });
      const r = new MutationObserver((c) => {
        c.forEach((d) => {
          d.addedNodes.forEach((f) => {
            if (f.nodeType === 1) {
              const m = f;
              m.tagName === "IMG" &&
                ((m.draggable = !1), m.setAttribute("draggable", "false")),
                m.querySelectorAll("img").forEach((y) => {
                  (y.draggable = !1), y.setAttribute("draggable", "false");
                });
            }
          });
        });
      });
      return (
        r.observe(document.body, { childList: !0, subtree: !0 }),
        () => {
          document.removeEventListener("dragstart", n),
            document.removeEventListener("contextmenu", l),
            r.disconnect();
        }
      );
    }, []),
    g.jsxs(g.Fragment, {
      children: [
        g.jsx("style", {
          children: `
        .app-container {
          min-height: 100vh;
          width: 100%;
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom, #1e3a8a, #7c2d12, #dc2626);
          overflow-x: hidden;
        }
        
        .content-wrapper {
          max-width: 1640px;
          margin: 0 auto;
          position: relative;
        }
        
        .content-wrapper::before,
        .content-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 20px;
          background-image: url('/assets/box-border.png');
          background-repeat: repeat-y;
          background-size: 20px auto;
          z-index: 10;
          pointer-events: none;
          display: none;
        }
        
        @media (min-width: 1640px) {
          .content-wrapper::before,
          .content-wrapper::after {
            display: block;
          }
        }
        
        .content-wrapper::before {
          left: 0;
        }
        
        .content-wrapper::after {
          right: 0;
        }
        
        .content-inner {
          margin: 0 auto;
          background: white;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow-x: hidden;
        }
        
        @media (min-width: 1600px) {
          .content-inner {
            width: 1600px;
          }
        }
      `,
        }),
        g.jsx("div", {
          className: "app-container w-full",
          children: g.jsx("div", {
            className: "content-wrapper",
            children: g.jsxs("div", {
              className: "content-inner",
              children: [
                g.jsx(gn, {}),
                g.jsx(u5, {}),
                g.jsx(r5, {}),
                g.jsx("div", {
                  style: { marginTop: "-1rem" },
                  children: g.jsx(gn, {}),
                }),
                g.jsx(si, { id: "section-2", children: g.jsx(c5, {}) }),
                g.jsx("div", {
                  style: { marginTop: "-1rem" },
                  children: g.jsx(gn, {}),
                }),
                g.jsx(si, { id: "section-mug", children: g.jsx(f5, {}) }),
                g.jsx("div", {
                  style: { marginTop: "-1rem" },
                  children: g.jsx(gn, {}),
                }),
                g.jsx(si, { id: "section-3", children: g.jsx(h5, {}) }),
                g.jsx("div", {
                  style: { marginTop: "-1rem" },
                  children: g.jsx(gn, {}),
                }),
                g.jsx(si, { id: "section-mission", children: g.jsx(m5, {}) }),
                g.jsx("div", {
                  style: { marginTop: "-1rem" },
                  children: g.jsx(gn, {}),
                }),
                g.jsx(si, { id: "section-puzzle", children: g.jsx(g5, {}) }),
                g.jsx(si, { id: "section-contact", children: g.jsx(y5, {}) }),
                g.jsx(gn, {}),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
Jv.createRoot(document.getElementById("root")).render(
  g.jsx(qv.StrictMode, { children: g.jsx(p5, {}) })
);
