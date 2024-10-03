import * as te from "react";
import W, { useState as Be, useEffect as Ee, useRef as Q, useMemo as Za, useLayoutEffect as Qo, useContext as ei } from "react";
import Qa, { unstable_batchedUpdates as es, flushSync as ti } from "react-dom";
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jr = { exports: {} }, St = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function rs() {
  if (Wn) return St;
  Wn = 1;
  var e = W, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, d) {
    var f, c = {}, u = null, p = null;
    d !== void 0 && (u = "" + d), l.key !== void 0 && (u = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (f in l) n.call(l, f) && !i.hasOwnProperty(f) && (c[f] = l[f]);
    if (s && s.defaultProps) for (f in l = s.defaultProps, l) c[f] === void 0 && (c[f] = l[f]);
    return { $$typeof: t, type: s, key: u, ref: p, props: c, _owner: o.current };
  }
  return St.Fragment = r, St.jsx = a, St.jsxs = a, St;
}
var Dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Un;
function ns() {
  return Un || (Un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = W, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function m(g) {
      if (g === null || typeof g != "object")
        return null;
      var D = v && g[v] || g[h];
      return typeof D == "function" ? D : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(g) {
      {
        for (var D = arguments.length, _ = new Array(D > 1 ? D - 1 : 0), k = 1; k < D; k++)
          _[k - 1] = arguments[k];
        S("error", g, _);
      }
    }
    function S(g, D, _) {
      {
        var k = x.ReactDebugCurrentFrame, ne = k.getStackAddendum();
        ne !== "" && (D += "%s", _ = _.concat([ne]));
        var de = _.map(function(Z) {
          return String(Z);
        });
        de.unshift("Warning: " + D), Function.prototype.apply.call(console[g], console, de);
      }
    }
    var E = !1, y = !1, N = !1, R = !1, C = !1, B;
    B = Symbol.for("react.module.reference");
    function F(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === n || g === i || C || g === o || g === d || g === f || R || g === p || E || y || N || typeof g == "object" && g !== null && (g.$$typeof === u || g.$$typeof === c || g.$$typeof === a || g.$$typeof === s || g.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === B || g.getModuleId !== void 0));
    }
    function U(g, D, _) {
      var k = g.displayName;
      if (k)
        return k;
      var ne = D.displayName || D.name || "";
      return ne !== "" ? _ + "(" + ne + ")" : _;
    }
    function A(g) {
      return g.displayName || "Context";
    }
    function H(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            var D = g;
            return A(D) + ".Consumer";
          case a:
            var _ = g;
            return A(_._context) + ".Provider";
          case l:
            return U(g, g.render, "ForwardRef");
          case c:
            var k = g.displayName || null;
            return k !== null ? k : H(g.type) || "Memo";
          case u: {
            var ne = g, de = ne._payload, Z = ne._init;
            try {
              return H(Z(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, re = 0, M, $, j, q, ee, z, le;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Fe() {
      {
        if (re === 0) {
          M = console.log, $ = console.info, j = console.warn, q = console.error, ee = console.group, z = console.groupCollapsed, le = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        re++;
      }
    }
    function De() {
      {
        if (re--, re === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, g, {
              value: M
            }),
            info: J({}, g, {
              value: $
            }),
            warn: J({}, g, {
              value: j
            }),
            error: J({}, g, {
              value: q
            }),
            group: J({}, g, {
              value: ee
            }),
            groupCollapsed: J({}, g, {
              value: z
            }),
            groupEnd: J({}, g, {
              value: le
            })
          });
        }
        re < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = x.ReactCurrentDispatcher, Ie;
    function _e(g, D, _) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (ne) {
            var k = ne.stack.trim().match(/\n( *(at )?)/);
            Ie = k && k[1] || "";
          }
        return `
` + Ie + g;
      }
    }
    var Re = !1, Ae;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new Ze();
    }
    function I(g, D) {
      if (!g || Re)
        return "";
      {
        var _ = Ae.get(g);
        if (_ !== void 0)
          return _;
      }
      var k;
      Re = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = we.current, we.current = null, Fe();
      try {
        if (D) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Te) {
              k = Te;
            }
            Reflect.construct(g, [], Z);
          } else {
            try {
              Z.call();
            } catch (Te) {
              k = Te;
            }
            g.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            k = Te;
          }
          g();
        }
      } catch (Te) {
        if (Te && k && typeof Te.stack == "string") {
          for (var K = Te.stack.split(`
`), Ce = k.stack.split(`
`), ge = K.length - 1, ve = Ce.length - 1; ge >= 1 && ve >= 0 && K[ge] !== Ce[ve]; )
            ve--;
          for (; ge >= 1 && ve >= 0; ge--, ve--)
            if (K[ge] !== Ce[ve]) {
              if (ge !== 1 || ve !== 1)
                do
                  if (ge--, ve--, ve < 0 || K[ge] !== Ce[ve]) {
                    var je = `
` + K[ge].replace(" at new ", " at ");
                    return g.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", g.displayName)), typeof g == "function" && Ae.set(g, je), je;
                  }
                while (ge >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        Re = !1, we.current = de, De(), Error.prepareStackTrace = ne;
      }
      var gt = g ? g.displayName || g.name : "", at = gt ? _e(gt) : "";
      return typeof g == "function" && Ae.set(g, at), at;
    }
    function Ne(g, D, _) {
      return I(g, !1);
    }
    function T(g) {
      var D = g.prototype;
      return !!(D && D.isReactComponent);
    }
    function Pe(g, D, _) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return I(g, T(g));
      if (typeof g == "string")
        return _e(g);
      switch (g) {
        case d:
          return _e("Suspense");
        case f:
          return _e("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            return Ne(g.render);
          case c:
            return Pe(g.type, D, _);
          case u: {
            var k = g, ne = k._payload, de = k._init;
            try {
              return Pe(de(ne), D, _);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, P = {}, V = x.ReactDebugCurrentFrame;
    function G(g) {
      if (g) {
        var D = g._owner, _ = Pe(g.type, g._source, D ? D.type : null);
        V.setExtraStackFrame(_);
      } else
        V.setExtraStackFrame(null);
    }
    function fe(g, D, _, k, ne) {
      {
        var de = Function.call.bind(ke);
        for (var Z in g)
          if (de(g, Z)) {
            var K = void 0;
            try {
              if (typeof g[Z] != "function") {
                var Ce = Error((k || "React class") + ": " + _ + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              K = g[Z](D, Z, k, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              K = ge;
            }
            K && !(K instanceof Error) && (G(ne), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", _, Z, typeof K), G(null)), K instanceof Error && !(K.message in P) && (P[K.message] = !0, G(ne), w("Failed %s type: %s", _, K.message), G(null));
          }
      }
    }
    var Se = Array.isArray;
    function ue(g) {
      return Se(g);
    }
    function ce(g) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, _ = D && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return _;
      }
    }
    function ze(g) {
      try {
        return He(g), !1;
      } catch {
        return !0;
      }
    }
    function He(g) {
      return "" + g;
    }
    function Ye(g) {
      if (ze(g))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(g)), He(g);
    }
    var Ke = x.ReactCurrentOwner, Va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Vn, Mn, mr;
    mr = {};
    function Ma(g) {
      if (ke.call(g, "ref")) {
        var D = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function $a(g) {
      if (ke.call(g, "key")) {
        var D = Object.getOwnPropertyDescriptor(g, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function La(g, D) {
      if (typeof g.ref == "string" && Ke.current && D && Ke.current.stateNode !== D) {
        var _ = H(Ke.current.type);
        mr[_] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Ke.current.type), g.ref), mr[_] = !0);
      }
    }
    function Ba(g, D) {
      {
        var _ = function() {
          Vn || (Vn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        _.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Fa(g, D) {
      {
        var _ = function() {
          Mn || (Mn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        _.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var ka = function(g, D, _, k, ne, de, Z) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: D,
        ref: _,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function ja(g, D, _, k, ne) {
      {
        var de, Z = {}, K = null, Ce = null;
        _ !== void 0 && (Ye(_), K = "" + _), $a(D) && (Ye(D.key), K = "" + D.key), Ma(D) && (Ce = D.ref, La(D, ne));
        for (de in D)
          ke.call(D, de) && !Va.hasOwnProperty(de) && (Z[de] = D[de]);
        if (g && g.defaultProps) {
          var ge = g.defaultProps;
          for (de in ge)
            Z[de] === void 0 && (Z[de] = ge[de]);
        }
        if (K || Ce) {
          var ve = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          K && Ba(Z, ve), Ce && Fa(Z, ve);
        }
        return ka(g, K, Ce, ne, k, Ke.current, Z);
      }
    }
    var gr = x.ReactCurrentOwner, $n = x.ReactDebugCurrentFrame;
    function mt(g) {
      if (g) {
        var D = g._owner, _ = Pe(g.type, g._source, D ? D.type : null);
        $n.setExtraStackFrame(_);
      } else
        $n.setExtraStackFrame(null);
    }
    var vr;
    vr = !1;
    function hr(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function Ln() {
      {
        if (gr.current) {
          var g = H(gr.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Ga(g) {
      return "";
    }
    var Bn = {};
    function Wa(g) {
      {
        var D = Ln();
        if (!D) {
          var _ = typeof g == "string" ? g : g.displayName || g.name;
          _ && (D = `

Check the top-level render call using <` + _ + ">.");
        }
        return D;
      }
    }
    function Fn(g, D) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var _ = Wa(D);
        if (Bn[_])
          return;
        Bn[_] = !0;
        var k = "";
        g && g._owner && g._owner !== gr.current && (k = " It was passed a child from " + H(g._owner.type) + "."), mt(g), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, k), mt(null);
      }
    }
    function kn(g, D) {
      {
        if (typeof g != "object")
          return;
        if (ue(g))
          for (var _ = 0; _ < g.length; _++) {
            var k = g[_];
            hr(k) && Fn(k, D);
          }
        else if (hr(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var ne = m(g);
          if (typeof ne == "function" && ne !== g.entries)
            for (var de = ne.call(g), Z; !(Z = de.next()).done; )
              hr(Z.value) && Fn(Z.value, D);
        }
      }
    }
    function Ua(g) {
      {
        var D = g.type;
        if (D == null || typeof D == "string")
          return;
        var _;
        if (typeof D == "function")
          _ = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === c))
          _ = D.propTypes;
        else
          return;
        if (_) {
          var k = H(D);
          fe(_, g.props, "prop", k, g);
        } else if (D.PropTypes !== void 0 && !vr) {
          vr = !0;
          var ne = H(D);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function za(g) {
      {
        for (var D = Object.keys(g.props), _ = 0; _ < D.length; _++) {
          var k = D[_];
          if (k !== "children" && k !== "key") {
            mt(g), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), mt(null);
            break;
          }
        }
        g.ref !== null && (mt(g), w("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    var jn = {};
    function Gn(g, D, _, k, ne, de) {
      {
        var Z = F(g);
        if (!Z) {
          var K = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = Ga();
          Ce ? K += Ce : K += Ln();
          var ge;
          g === null ? ge = "null" : ue(g) ? ge = "array" : g !== void 0 && g.$$typeof === t ? (ge = "<" + (H(g.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof g, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, K);
        }
        var ve = ja(g, D, _, ne, de);
        if (ve == null)
          return ve;
        if (Z) {
          var je = D.children;
          if (je !== void 0)
            if (k)
              if (ue(je)) {
                for (var gt = 0; gt < je.length; gt++)
                  kn(je[gt], g);
                Object.freeze && Object.freeze(je);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kn(je, g);
        }
        if (ke.call(D, "key")) {
          var at = H(g), Te = Object.keys(D).filter(function(Ja) {
            return Ja !== "key";
          }), br = Te.length > 0 ? "{key: someKey, " + Te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!jn[at + br]) {
            var Xa = Te.length > 0 ? "{" + Te.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, br, at, Xa, at), jn[at + br] = !0;
          }
        }
        return g === n ? za(ve) : Ua(ve), ve;
      }
    }
    function Ha(g, D, _) {
      return Gn(g, D, _, !0);
    }
    function Ya(g, D, _) {
      return Gn(g, D, _, !1);
    }
    var qa = Ya, Ka = Ha;
    Dt.Fragment = n, Dt.jsx = qa, Dt.jsxs = Ka;
  }()), Dt;
}
process.env.NODE_ENV === "production" ? jr.exports = rs() : jr.exports = ns();
var O = jr.exports;
const Qt = ({ name: e, className: t }) => /* @__PURE__ */ O.jsx("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ O.jsx(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), ri = ({ style: e, text: t }) => /* @__PURE__ */ O.jsxs("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ O.jsx("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ O.jsx("span", { className: "text-base", children: t })
] }), xm = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: i,
  icon: a,
  disabled: s
}) => {
  const [l, d] = Be(""), f = () => {
    o && n === "1C" && (d("Отправляем запрос в 1С"), setTimeout(
      () => d(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  Ee(() => {
    n === "1C" && f();
  }, [o]);
  const c = [
    "flex items-center justify-center py-[14px] px-[6px] w-full h-fit rounded-[30px] md:rounded-[15px] text-base md:text-lg uppercase font-medium border border-transparent active:opacity-[0.6] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-[0.6]",
    r,
    i === "primary" && "text-white bg-primary",
    i === "secondary" && "text-primary bg-primary bg-opacity-10",
    i === "small-secondary" && "!normal-case !py-[6px] !text-sm text-primary bg-primary bg-opacity-20",
    i === "small-primary" && "!normal-case !py-[6px] !text-sm text-white bg-primary",
    i === "small-danger" && "!normal-case !py-[6px] !text-sm text-danger bg-danger bg-opacity-10",
    i === "danger" && "text-danger bg-danger bg-opacity-10",
    i === "link" && "text-primary !text-sm !py-0 !px-1 !normal-case !w-fit",
    i === "tab" && "bg-primary text-white text-sm md:!text-base !px-5 !py-2 !font-normal rounded-[30px] md:!rounded-[15px] !normal-case !w-fit"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ O.jsxs(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: c,
      children: [
        o ? /* @__PURE__ */ O.jsx(ri, { text: n === "1C" ? l : void 0 }) : e,
        a && !o && /* @__PURE__ */ O.jsx(
          Qt,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, en = ({ error: e }) => e && Object.keys(e).length ? /* @__PURE__ */ O.jsx("span", { className: "block text-danger text-[10px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null, Em = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
  /* @__PURE__ */ O.jsxs(
    "label",
    {
      onClick: (d) => d.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ O.jsx(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ O.jsx("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ O.jsx(
          "input",
          {
            disabled: l,
            checked: s,
            onChange: (d) => e(d.target.checked),
            type: "checkbox",
            className: o
          }
        )
      ]
    }
  ),
  a && /* @__PURE__ */ O.jsx(en, { error: a })
] }), wm = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ O.jsx("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ O.jsx(O.Fragment, { children: o.title ? /* @__PURE__ */ O.jsx(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ O.jsx(O.Fragment, {}) })) });
function tn(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var Pt;
(function(e) {
  e.event = "event", e.props = "prop";
})(Pt || (Pt = {}));
function Je() {
}
function os(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function dt(e) {
  return !!(e || "").match(/\d/);
}
function ut(e) {
  return e == null;
}
function is(e) {
  return typeof e == "number" && isNaN(e);
}
function ni(e) {
  return ut(e) || is(e) || typeof e == "number" && !isFinite(e);
}
function oi(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function as(e) {
  switch (e) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case "thousand":
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function ss(e, t, r) {
  var n = as(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function cs(e) {
  var t = Q(e);
  t.current = e;
  var r = Q(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function rn(e, t) {
  t === void 0 && (t = !0);
  var r = e[0] === "-", n = r && t;
  e = e.replace("-", "");
  var o = e.split("."), i = o[0], a = o[1] || "";
  return {
    beforeDecimal: i,
    afterDecimal: a,
    hasNegation: r,
    addNegation: n
  };
}
function ls(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function ii(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function zn(e, t) {
  return Array(t + 1).join(e);
}
function ai(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + zn("0", Math.abs(a)) + o : a >= s ? o = o + zn("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function Hn(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = rn(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), d = a.length <= t ? "0." + a : l.toFixed(t), f = d.split("."), c = i;
  i && Number(f[0]) && (c = i.split("").reverse().reduce(function(h, m, x) {
    return h.length > x ? (Number(h[0]) + Number(m)).toString() + h.substring(1, h.length) : m + h;
  }, f[0]));
  var u = ii(f[1] || "", t, r), p = s ? "-" : "", v = n ? "." : "";
  return "" + p + c + v + u;
}
function tt(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var si = os(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), us = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function ds(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function yr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function fs() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function ci(e) {
  return {
    from: {
      start: 0,
      end: 0
    },
    to: {
      start: 0,
      end: e.length
    },
    lastValue: ""
  };
}
function li(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function ps(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function ms(e, t, r, n, o, i, a) {
  a === void 0 && (a = ps);
  var s = o.findIndex(function(E) {
    return E;
  }), l = e.slice(0, s);
  !t && !r.startsWith(l) && (t = l, r = l + r, n = n + l.length);
  for (var d = r.length, f = e.length, c = {}, u = new Array(d), p = 0; p < d; p++) {
    u[p] = -1;
    for (var v = 0, h = f; v < h; v++) {
      var m = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: p,
        formattedValueIndex: v
      });
      if (m && c[v] !== !0) {
        u[p] = v, c[v] = !0;
        break;
      }
    }
  }
  for (var x = n; x < d && (u[x] === -1 || !i(r[x])); )
    x++;
  var w = x === d || u[x] === -1 ? f : u[x];
  for (x = n - 1; x > 0 && u[x] === -1; )
    x--;
  var S = x === -1 || u[x] === -1 ? 0 : u[x] + 1;
  return S > w ? w : n - S < w - n ? S : w;
}
function er(e, t, r, n) {
  var o = e.length;
  if (t = ds(t, 0, o), n === "left") {
    for (; t >= 0 && !r[t]; )
      t--;
    t === -1 && (t = r.indexOf(!0));
  } else {
    for (; t <= o && !r[t]; )
      t++;
    t > o && (t = r.lastIndexOf(!0));
  }
  return t === -1 && (t = o), t;
}
function gs(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(dt(e[r]) || dt(e[r - 1]));
  return t;
}
function ui(e, t, r, n, o, i) {
  i === void 0 && (i = Je);
  var a = cs(function(v, h) {
    var m, x;
    return ni(v) ? (x = "", m = "") : typeof v == "number" || h ? (x = typeof v == "number" ? ai(v) : v, m = n(x)) : (x = o(v, void 0), m = n(x)), { formattedValue: m, numAsString: x };
  }), s = Be(function() {
    return a(ut(e) ? t : e, r);
  }), l = s[0], d = s[1], f = function(v, h) {
    v.formattedValue !== l.formattedValue && d({
      formattedValue: v.formattedValue,
      numAsString: v.value
    }), i(v, h);
  }, c = e, u = r;
  ut(e) && (c = l.numAsString, u = !0);
  var p = a(c, u);
  return Za(function() {
    d(p);
  }, [p.formattedValue]), [l, f];
}
function vs(e) {
  return e.replace(/[^0-9]/g, "");
}
function hs(e) {
  return e;
}
function di(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = hs);
  var s = e.removeFormatting;
  s === void 0 && (s = vs);
  var l = e.defaultValue, d = e.valueIsNumericString, f = e.onValueChange, c = e.isAllowed, u = e.onChange;
  u === void 0 && (u = Je);
  var p = e.onKeyDown;
  p === void 0 && (p = Je);
  var v = e.onMouseUp;
  v === void 0 && (v = Je);
  var h = e.onFocus;
  h === void 0 && (h = Je);
  var m = e.onBlur;
  m === void 0 && (m = Je);
  var x = e.value, w = e.getCaretBoundary;
  w === void 0 && (w = gs);
  var S = e.isValidInputCharacter;
  S === void 0 && (S = dt);
  var E = e.isCharacterSame, y = tn(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), N = ui(x, l, !!d, a, s, f), R = N[0], C = R.formattedValue, B = R.numAsString, F = N[1], U = Q(), A = Q({ formattedValue: C, numAsString: B }), H = function(P, V) {
    A.current = { formattedValue: P.formattedValue, numAsString: P.value }, F(P, V);
  }, J = Be(!1), re = J[0], M = J[1], $ = Q(null), j = Q({
    setCaretTimeout: null,
    focusTimeout: null
  });
  Ee(function() {
    return M(!0), function() {
      clearTimeout(j.current.setCaretTimeout), clearTimeout(j.current.focusTimeout);
    };
  }, []);
  var q = a, ee = function(P, V) {
    var G = parseFloat(V);
    return {
      formattedValue: P,
      value: V,
      floatValue: isNaN(G) ? void 0 : G
    };
  }, z = function(P, V, G) {
    P.selectionStart === 0 && P.selectionEnd === P.value.length || (tt(P, V), j.current.setCaretTimeout = setTimeout(function() {
      P.value === G && P.selectionStart !== V && tt(P, V);
    }, 0));
  }, le = function(P, V, G) {
    return er(P, V, w(P), G);
  }, he = function(P, V, G) {
    var fe = w(V), Se = ms(V, C, P, G, fe, S, E);
    return Se = er(V, Se, fe), Se;
  }, Fe = function(P) {
    var V = P.formattedValue;
    V === void 0 && (V = "");
    var G = P.input, fe = P.source, Se = P.event, ue = P.numAsString, ce;
    if (G) {
      var ze = P.inputValue || G.value, He = yr(G);
      G.value = V, ce = he(ze, V, He), ce !== void 0 && z(G, ce, V);
    }
    V !== C && H(ee(V, ue), { event: Se, source: fe });
  };
  Ee(function() {
    var P = A.current, V = P.formattedValue, G = P.numAsString;
    (C !== V || B !== G) && H(ee(C, B), {
      event: void 0,
      source: Pt.props
    });
  }, [C, B]);
  var De = $.current ? yr($.current) : void 0, we = typeof window < "u" ? Qo : Ee;
  we(function() {
    var P = $.current;
    if (C !== A.current.formattedValue && P) {
      var V = he(A.current.formattedValue, C, De);
      P.value = C, z(P, V, C);
    }
  }, [C]);
  var Ie = function(P, V, G) {
    var fe = V.target, Se = U.current ? us(U.current, fe.selectionEnd) : si(C, P), ue = Object.assign(Object.assign({}, Se), { lastValue: C }), ce = s(P, ue), ze = q(ce);
    if (ce = s(ze, void 0), c && !c(ee(ze, ce))) {
      var He = V.target, Ye = yr(He), Ke = he(P, C, Ye);
      return He.value = C, z(He, Ke, C), !1;
    }
    return Fe({
      formattedValue: ze,
      numAsString: ce,
      inputValue: P,
      event: V,
      source: G,
      input: V.target
    }), !0;
  }, _e = function(P, V) {
    V === void 0 && (V = 0);
    var G = P.selectionStart, fe = P.selectionEnd;
    U.current = { selectionStart: G, selectionEnd: fe + V };
  }, Re = function(P) {
    var V = P.target, G = V.value, fe = Ie(G, P, Pt.event);
    fe && u(P), U.current = void 0;
  }, Ae = function(P) {
    var V = P.target, G = P.key, fe = V.selectionStart, Se = V.selectionEnd, ue = V.value;
    ue === void 0 && (ue = "");
    var ce;
    G === "ArrowLeft" || G === "Backspace" ? ce = Math.max(fe - 1, 0) : G === "ArrowRight" ? ce = Math.min(fe + 1, ue.length) : G === "Delete" && (ce = fe);
    var ze = 0;
    G === "Delete" && fe === Se && (ze = 1);
    var He = G === "ArrowLeft" || G === "ArrowRight";
    if (ce === void 0 || fe !== Se && !He) {
      p(P), _e(V, ze);
      return;
    }
    var Ye = ce;
    if (He) {
      var Ke = G === "ArrowLeft" ? "left" : "right";
      Ye = le(ue, ce, Ke), Ye !== ce && P.preventDefault();
    } else G === "Delete" && !S(ue[ce]) ? Ye = le(ue, ce, "right") : G === "Backspace" && !S(ue[ce]) && (Ye = le(ue, ce, "left"));
    Ye !== ce && z(V, Ye, ue), p(P), _e(V, ze);
  }, Ze = function(P) {
    var V = P.target, G = function() {
      var fe = V.selectionStart, Se = V.selectionEnd, ue = V.value;
      if (ue === void 0 && (ue = ""), fe === Se) {
        var ce = le(ue, fe);
        ce !== fe && z(V, ce, ue);
      }
    };
    G(), requestAnimationFrame(function() {
      G();
    }), v(P), _e(V);
  }, I = function(P) {
    P.persist && P.persist();
    var V = P.target, G = P.currentTarget;
    $.current = V, j.current.focusTimeout = setTimeout(function() {
      var fe = V.selectionStart, Se = V.selectionEnd, ue = V.value;
      ue === void 0 && (ue = "");
      var ce = le(ue, fe);
      ce !== fe && !(fe === 0 && Se === ue.length) && z(V, ce, ue), h(Object.assign(Object.assign({}, P), { currentTarget: G }));
    }, 0);
  }, Ne = function(P) {
    $.current = null, clearTimeout(j.current.focusTimeout), clearTimeout(j.current.setCaretTimeout), m(P);
  }, T = re && fs() ? "numeric" : void 0, Pe = Object.assign({ inputMode: T }, y, {
    type: t,
    value: C,
    onChange: Re,
    onKeyDown: Ae,
    onMouseUp: Ze,
    onFocus: I,
    onBlur: Ne
  });
  if (r === "text")
    return o ? W.createElement(W.Fragment, null, o(C, y) || null) : W.createElement("span", Object.assign({}, y, { ref: i }), C);
  if (n) {
    var ke = n;
    return W.createElement(ke, Object.assign({}, Pe, { ref: i }));
  }
  return W.createElement("input", Object.assign({}, Pe, { ref: i }));
}
function Yn(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = sr(t), d = l.thousandSeparator, f = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, u = rn(e, a), p = u.beforeDecimal, v = u.afterDecimal, h = u.addNegation;
  return r !== void 0 && (v = ii(v, r, !!n)), d && (p = ss(p, d, s)), o && (p = o + p), i && (v = v + i), h && (p = "-" + p), e = p + (c && f || "") + v, e;
}
function sr(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function bs(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function ys(e, t) {
  return new RegExp("(^-)|[0-9]|" + oi(e), "g");
}
function xs(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Es(e, t, r) {
  var n;
  t === void 0 && (t = ci(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, d = t.to, f = d.start, c = d.end, u = sr(r), p = u.allowedDecimalSeparators, v = u.decimalSeparator, h = e[c] === v;
  if (dt(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - f === 1 && p.indexOf(e[f]) !== -1) {
    var m = s === 0 ? "" : v;
    e = e.substring(0, f) + m + e.substring(f + 1, e.length);
  }
  var x = function($, j, q) {
    var ee = !1, z = !1;
    i.startsWith("-") ? ee = !1 : $.startsWith("--") ? (ee = !1, z = !0) : a.startsWith("-") && $.length === a.length ? ee = !1 : $[0] === "-" && (ee = !0);
    var le = ee ? 1 : 0;
    return z && (le = 2), le && ($ = $.substring(le), j -= le, q -= le), { value: $, start: j, end: q, hasNegation: ee };
  }, w = x(e, f, c), S = w.hasNegation;
  n = w, e = n.value, f = n.start, c = n.end;
  var E = x(t.lastValue, l.start, l.end), y = E.start, N = E.end, R = E.value, C = e.substring(f, c);
  e.length && R.length && (y > R.length - a.length || N < i.length) && !(C && a.startsWith(C)) && (e = R);
  var B = 0;
  e.startsWith(i) ? B += i.length : f < i.length && (B = f), e = e.substring(B), c -= B;
  var F = e.length, U = e.length - a.length;
  e.endsWith(a) ? F = U : (c > U || c > e.length - a.length) && (F = c), e = e.substring(0, F), e = bs(S ? "-" + e : e, o), e = (e.match(ys(v)) || []).join("");
  var A = e.indexOf(v);
  e = e.replace(new RegExp(oi(v), "g"), function($, j) {
    return j === A ? "." : "";
  });
  var H = rn(e, o), J = H.beforeDecimal, re = H.afterDecimal, M = H.addNegation;
  return d.end - d.start < l.end - l.start && J === "" && h && !parseFloat(re) && (e = M ? "-" : ""), e;
}
function ws(e, t) {
  var r = t.prefix;
  r === void 0 && (r = "");
  var n = t.suffix;
  n === void 0 && (n = "");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), i = e[0] === "-";
  o.fill(!1, 0, r.length + (i ? 1 : 0));
  var a = e.length;
  return o.fill(!1, a - n.length + 1, a + 1), o;
}
function Ss(e) {
  var t = sr(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
  o === void 0 && (o = "");
  var i = e.allowNegative;
  if (i === void 0 && (i = !0), r === n)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + r + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + n + ` (default value for decimalSeparator is .)
     `);
  return o.startsWith("-") && i && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + o + `
      allowNegative: ` + i + `
    `), i = !1), Object.assign(Object.assign({}, e), { allowNegative: i });
}
function Ds(e) {
  e = Ss(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Je);
  var i = e.onBlur;
  i === void 0 && (i = Je);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, d = e.prefix;
  d === void 0 && (d = "");
  var f = e.defaultValue, c = e.value, u = e.valueIsNumericString, p = e.onValueChange, v = tn(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = sr(e), m = h.decimalSeparator, x = h.allowedDecimalSeparators, w = function(M) {
    return Yn(M, e);
  }, S = function(M, $) {
    return Es(M, $, e);
  }, E = ut(c) ? f : c, y = u ?? xs(E, d, t);
  ut(c) ? ut(f) || (y = y || typeof f == "number") : y = y || typeof c == "number";
  var N = function(M) {
    return ni(M) ? M : (typeof M == "number" && (M = ai(M)), y && typeof s == "number" ? Hn(M, s, !!l) : M);
  }, R = ui(N(c), N(f), !!y, w, S, p), C = R[0], B = C.numAsString, F = C.formattedValue, U = R[1], A = function(M) {
    var $ = M.target, j = M.key, q = $.selectionStart, ee = $.selectionEnd, z = $.value;
    if (z === void 0 && (z = ""), (j === "Backspace" || j === "Delete") && ee < d.length) {
      M.preventDefault();
      return;
    }
    if (q !== ee) {
      o(M);
      return;
    }
    j === "Backspace" && z[0] === "-" && q === d.length + 1 && r && tt($, 1), s && l && (j === "Backspace" && z[q - 1] === m ? (tt($, q - 1), M.preventDefault()) : j === "Delete" && z[q] === m && M.preventDefault()), x != null && x.includes(j) && z[q] === m && tt($, q + 1);
    var le = a === !0 ? "," : a;
    j === "Backspace" && z[q - 1] === le && tt($, q - 1), j === "Delete" && z[q] === le && tt($, q + 1), o(M);
  }, H = function(M) {
    var $ = B;
    if ($.match(/\d/g) || ($ = ""), n || ($ = ls($)), l && s && ($ = Hn($, s, l)), $ !== B) {
      var j = Yn($, e);
      U({
        formattedValue: j,
        value: $,
        floatValue: parseFloat($)
      }, {
        event: M,
        source: Pt.event
      });
    }
    i(M);
  }, J = function(M) {
    return M === m ? !0 : dt(M);
  }, re = function(M) {
    var $ = M.currentValue, j = M.lastValue, q = M.formattedValue, ee = M.currentValueIndex, z = M.formattedValueIndex, le = $[ee], he = q[z], Fe = si(j, $), De = Fe.to, we = function(Ie) {
      return S(Ie).indexOf(".") + d.length;
    };
    return c === 0 && l && s && $[De.start] === m && we($) < ee && we(q) > z ? !1 : ee >= De.start && ee < De.end && x && x.includes(le) && he === m ? !0 : le === he;
  };
  return Object.assign(Object.assign({}, v), {
    value: F,
    valueIsNumericString: !1,
    isValidInputCharacter: J,
    isCharacterSame: re,
    onValueChange: U,
    format: w,
    removeFormatting: S,
    getCaretBoundary: function(M) {
      return ws(M, e);
    },
    onKeyDown: A,
    onBlur: H
  });
}
function Ns(e) {
  var t = Ds(e);
  return W.createElement(di, Object.assign({}, t));
}
function Cs(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, d = r.length; l < d; l++)
    r[l] === i && (s[l] = e[a] || li(o, a), a += 1);
  return s.join("");
}
function Os(e, t, r) {
  t === void 0 && (t = ci(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(m) {
    return n[m] === o;
  }, d = function(m, x) {
    for (var w = "", S = 0; S < m.length; S++)
      l(x + S) && dt(m[S]) && (w += m[S]);
    return w;
  }, f = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", u = 0; u < e.length; u++)
      if (l(u))
        dt(e[u]) && (c += e[u]);
      else if (e[u] !== n[u])
        return f(e);
    return c;
  }
  var p = s.substring(0, i.start), v = e.substring(a.start, a.end), h = s.substring(i.end);
  return "" + d(p, 0) + f(v) + d(h, i.end);
}
function Is(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(u, p) {
    var v = void 0;
    u === o && (a++, v = li(n, a - 1), s === -1 && e[p] === v && (s = p)), l[p] = v;
  });
  for (var d = function(u) {
    return r[u] === o && e[u] !== l[u];
  }, f = 0, c = i.length; f < c; f++)
    i[f] = f === s || d(f) || d(f - 1);
  return i[r.indexOf(o)] = !0, i;
}
function _s(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Rs(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function As(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = Je);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = tn(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  _s(e);
  var d = function(v) {
    return Is(v, e);
  }, f = function(v) {
    var h = v.key, m = v.target, x = m.selectionStart, w = m.selectionEnd, S = m.value;
    if (x !== w) {
      n(v);
      return;
    }
    var E = x;
    if (h === "Backspace" || h === "Delete") {
      var y = "right";
      if (h === "Backspace") {
        for (; E > 0 && t[E - 1] !== o; )
          E--;
        y = "left";
      } else {
        for (var N = t.length; E < N && t[E] !== o; )
          E++;
        y = "right";
      }
      E = er(S, E, d(S), y);
    } else t[E] !== o && h !== "ArrowLeft" && h !== "ArrowRight" && (E = er(S, E + 1, d(S), "right"));
    E !== x && tt(m, E), n(v);
  }, c = ut(i) ? a : i, u = s ?? Rs(c, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: u });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: u,
    inputMode: r,
    format: function(v) {
      return Cs(v, p);
    },
    removeFormatting: function(v, h) {
      return Os(v, h, p);
    },
    getCaretBoundary: d,
    onKeyDown: f
  });
}
function Ps(e) {
  var t = As(e);
  return W.createElement(di, Object.assign({}, t));
}
const Ts = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Sm = ({
  type: e,
  field: t,
  fieldState: r,
  postfix: n,
  className: o,
  format: i,
  parentClassName: a,
  decimalScale: s = 1,
  ...l
}) => {
  var f, c;
  const d = "!border-danger";
  return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    i ? /* @__PURE__ */ O.jsx(
      Ps,
      {
        onValueChange: (u) => {
          var p;
          t == null || t.onChange((p = u.value.replace("_", "")) == null ? void 0 : p.toString());
        },
        value: (f = t == null ? void 0 : t.value) == null ? void 0 : f.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${!!(r != null && r.error) && d} ${o} w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300`,
        format: i,
        ...l
      }
    ) : e === "number" ? /* @__PURE__ */ O.jsxs(
      "div",
      {
        className: `${!!(r != null && r.error) && d} ${a} flex items-center justify-between w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ O.jsx(
            Ns,
            {
              decimalScale: s,
              onValueChange: (u) => {
                var p;
                return t == null ? void 0 : t.onChange((p = u.value.replace("_", "")) == null ? void 0 : p.toString());
              },
              value: (c = t == null ? void 0 : t.value) == null ? void 0 : c.toString(),
              className: `${o} w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300`,
              ...l,
              ...Ts.number
            }
          ),
          n ? /* @__PURE__ */ O.jsx("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ O.jsx(
      "input",
      {
        ...t,
        ...l,
        type: e,
        className: `${!!(r != null && r.error) && d} ${o} w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300`
      }
    ),
    /* @__PURE__ */ O.jsx(en, { error: r == null ? void 0 : r.error })
  ] });
}, fi = ({
  children: e,
  className: t
}) => /* @__PURE__ */ O.jsx("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), Dm = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Be(null);
  return /* @__PURE__ */ O.jsx(fi, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ O.jsx("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ O.jsxs(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ O.jsx("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ O.jsx("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, nn = "-", Vs = (e) => {
  const t = $s(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(nn);
      return s[0] === "" && s.length !== 1 && s.shift(), pi(s, t) || Ms(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, pi = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? pi(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(nn);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, qn = /^\[(.+)\]$/, Ms = (e) => {
  if (qn.test(e)) {
    const t = qn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, $s = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bs(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    Gr(a, n, i, t);
  }), n;
}, Gr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Kn(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ls(o)) {
        Gr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Gr(a, Kn(t, i), r, n);
    });
  });
}, Kn = (e, t) => {
  let r = e;
  return t.split(nn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ls = (e) => e.isThemeGetter, Bs = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, Fs = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = n.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : o(i, a);
    }
  };
}, mi = "!", ks = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const l = [];
    let d = 0, f = 0, c;
    for (let m = 0; m < s.length; m++) {
      let x = s[m];
      if (d === 0) {
        if (x === o && (n || s.slice(m, m + i) === t)) {
          l.push(s.slice(f, m)), f = m + i;
          continue;
        }
        if (x === "/") {
          c = m;
          continue;
        }
      }
      x === "[" ? d++ : x === "]" && d--;
    }
    const u = l.length === 0 ? s : s.substring(f), p = u.startsWith(mi), v = p ? u.substring(1) : u, h = c && c > f ? c - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: h
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, js = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Gs = (e) => ({
  cache: Fs(e.cacheSize),
  parseClassName: ks(e),
  ...Vs(e)
}), Ws = /\s+/, Us = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(Ws);
  let s = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const d = a[l], {
      modifiers: f,
      hasImportantModifier: c,
      baseClassName: u,
      maybePostfixModifierPosition: p
    } = r(d);
    let v = !!p, h = n(v ? u.substring(0, p) : u);
    if (!h) {
      if (!v) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (h = n(u), !h) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      v = !1;
    }
    const m = js(f).join(":"), x = c ? m + mi : m, w = x + h;
    if (i.includes(w))
      continue;
    i.push(w);
    const S = o(h, v);
    for (let E = 0; E < S.length; ++E) {
      const y = S[E];
      i.push(x + y);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function zs() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = gi(t)) && (n && (n += " "), n += r);
  return n;
}
const gi = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = gi(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Hs(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const d = t.reduce((f, c) => c(f), e());
    return r = Gs(d), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const d = n(l);
    if (d)
      return d;
    const f = Us(l, r);
    return o(l, f), f;
  }
  return function() {
    return i(zs.apply(null, arguments));
  };
}
const me = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, vi = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ys = /^\d+\/\d+$/, qs = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ks = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Js = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Zs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xe = (e) => vt(e) || qs.has(e) || Ys.test(e), Qe = (e) => xt(e, "length", sc), vt = (e) => !!e && !Number.isNaN(Number(e)), xr = (e) => xt(e, "number", vt), Nt = (e) => !!e && Number.isInteger(Number(e)), ec = (e) => e.endsWith("%") && vt(e.slice(0, -1)), Y = (e) => vi.test(e), et = (e) => Ks.test(e), tc = /* @__PURE__ */ new Set(["length", "size", "percentage"]), rc = (e) => xt(e, tc, hi), nc = (e) => xt(e, "position", hi), oc = /* @__PURE__ */ new Set(["image", "url"]), ic = (e) => xt(e, oc, lc), ac = (e) => xt(e, "", cc), Ct = () => !0, xt = (e, t, r) => {
  const n = vi.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, sc = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xs.test(e) && !Js.test(e)
), hi = () => !1, cc = (e) => Zs.test(e), lc = (e) => Qs.test(e), uc = () => {
  const e = me("colors"), t = me("spacing"), r = me("blur"), n = me("brightness"), o = me("borderColor"), i = me("borderRadius"), a = me("borderSpacing"), s = me("borderWidth"), l = me("contrast"), d = me("grayscale"), f = me("hueRotate"), c = me("invert"), u = me("gap"), p = me("gradientColorStops"), v = me("gradientColorStopPositions"), h = me("inset"), m = me("margin"), x = me("opacity"), w = me("padding"), S = me("saturate"), E = me("scale"), y = me("sepia"), N = me("skew"), R = me("space"), C = me("translate"), B = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", Y, t], A = () => [Y, t], H = () => ["", Xe, Qe], J = () => ["auto", vt, Y], re = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", Y], ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [vt, Y];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ct],
      spacing: [Xe, Qe],
      blur: ["none", "", et, Y],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", et, Y],
      borderSpacing: A(),
      borderWidth: H(),
      contrast: z(),
      grayscale: q(),
      hueRotate: z(),
      invert: q(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ec, Qe],
      inset: U(),
      margin: U(),
      opacity: z(),
      padding: A(),
      saturate: z(),
      scale: z(),
      sepia: q(),
      skew: z(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Y]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [et]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ee()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...re(), Y]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Nt, Y]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: U()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Nt, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ct]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Nt, Y]
        }, Y]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": J()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": J()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ct]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Nt, Y]
        }, Y]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": J()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": J()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [u]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [u]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [u]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...j()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...j(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...j(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [R]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [R]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Y, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Y, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [et]
        }, et]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Y, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Y, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Y, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", et, Qe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", xr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ct]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", vt, xr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Xe, Y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...M(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Xe, Qe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Xe, Y]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Y]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...re(), nc]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", rc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ic]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...M(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...M()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Xe, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Xe, Qe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: H()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Xe, Qe]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", et, ac]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ct]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", et, Y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [y]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [y]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: z()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: z()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Y]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Nt, Y]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [C]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [C]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Y]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Xe, Qe, xr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, dc = /* @__PURE__ */ Hs(uc);
function bi(e, t) {
  const [r, n] = Be(e);
  return Ee(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Nm = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = Be(!1), [a, s] = Be(""), l = bi(a, 100), d = Q(null);
  Ee(() => {
    const c = (u) => {
      d.current && !d.current.contains(u.target) && i(!1);
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, []);
  const f = (c) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(c)) && (t == null ? void 0 : t.value.filter((u) => u !== c)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, c] || [c]
    );
  };
  return /* @__PURE__ */ O.jsxs("div", { ref: d, className: "relative", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ O.jsx(
        Qt,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ O.jsx(
        "input",
        {
          ...n,
          ref: d,
          className: dc(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && a || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (c) => {
              var u;
              return (u = e.find((p) => p.value === c)) == null ? void 0 : u.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (c) => s(c.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ O.jsx("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var u;
      return /* @__PURE__ */ O.jsx(
        "li",
        {
          onClick: () => f(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ O.jsxs("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ O.jsx(Qt, { name: c.icon }),
            /* @__PURE__ */ O.jsx(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((u = t == null ? void 0 : t.value) == null ? void 0 : u.includes(c.value)) && "text-primary"}`,
                value: c.value,
                children: c.label
              }
            )
          ] })
        },
        c.value
      );
    }) })
  ] });
}, Cm = ({ placeholder: e, setValue: t, value: r, parentClassName: n }) => {
  const [o, i] = Be(r), a = bi(o, 300);
  return Ee(() => {
    t == null || t(a);
  }, [a]), /* @__PURE__ */ O.jsxs("div", { className: `relative h-fit w-full ${n}`, children: [
    /* @__PURE__ */ O.jsx(
      Qt,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ O.jsx(
      "input",
      {
        placeholder: e,
        onChange: (s) => i(s.target.value),
        value: o,
        type: "search",
        className: "!pl-[40px] md:!pl-[50px] w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300"
      }
    )
  ] });
}, Om = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  parentClassName: i,
  ...a
}) => /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
  /* @__PURE__ */ O.jsx(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${i}`,
      children: /* @__PURE__ */ O.jsxs(
        "select",
        {
          ...n,
          ...a,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ O.jsx("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((s, l) => /* @__PURE__ */ O.jsx("option", { value: s.value, className: "text-black", children: s.label }, l))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ O.jsx(en, { error: o == null ? void 0 : o.error })
] });
function Tt(e) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(e);
}
function fc(e, t) {
  if (Tt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Tt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pc(e) {
  var t = fc(e, "string");
  return Tt(t) == "symbol" ? t : t + "";
}
function mc(e, t, r) {
  return (t = pc(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Xn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xn(Object(r), !0).forEach(function(n) {
      mc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ve(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Zn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Er = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Qn = {
  INIT: "@@redux/INIT" + Er(),
  REPLACE: "@@redux/REPLACE" + Er(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Er();
  }
};
function gc(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function vc(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  var t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e)) return "array";
  if (yc(e)) return "date";
  if (bc(e)) return "error";
  var r = hc(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function hc(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function bc(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function yc(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ct(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = vc(e)), t;
}
function yi(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ve(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ve(1) : "Expected the enhancer to be a function. Instead, received: '" + ct(r) + "'");
    return r(yi)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ve(2) : "Expected the root reducer to be a function. Instead, received: '" + ct(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function d() {
    s === a && (s = a.slice());
  }
  function f() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ve(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ve(4) : "Expected the listener to be a function. Instead, received: '" + ct(h) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ve(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return d(), s.push(h), function() {
      if (m) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? Ve(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, d();
        var w = s.indexOf(h);
        s.splice(w, 1), a = null;
      }
    };
  }
  function u(h) {
    if (!gc(h))
      throw new Error(process.env.NODE_ENV === "production" ? Ve(7) : "Actions must be plain objects. Instead, the actual type was: '" + ct(h) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ve(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ve(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, h);
    } finally {
      l = !1;
    }
    for (var m = a = s, x = 0; x < m.length; x++) {
      var w = m[x];
      w();
    }
    return h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ve(10) : "Expected the nextReducer to be a function. Instead, received: '" + ct(h));
    o = h, u({
      type: Qn.REPLACE
    });
  }
  function v() {
    var h, m = c;
    return h = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(w) {
        if (typeof w != "object" || w === null)
          throw new Error(process.env.NODE_ENV === "production" ? Ve(11) : "Expected the observer to be an object. Instead, received: '" + ct(w) + "'");
        function S() {
          w.next && w.next(f());
        }
        S();
        var E = m(S);
        return {
          unsubscribe: E
        };
      }
    }, h[Zn] = function() {
      return this;
    }, h;
  }
  return u({
    type: Qn.INIT
  }), n = {
    dispatch: u,
    subscribe: c,
    getState: f,
    replaceReducer: p
  }, n[Zn] = v, n;
}
function eo(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function to(e, t) {
  if (typeof e == "function")
    return eo(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ve(16) : "bindActionCreators expected an object or a function, but instead received: '" + ct(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = eo(o, t));
  }
  return r;
}
function xi() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0 ? function(n) {
    return n;
  } : t.length === 1 ? t[0] : t.reduce(function(n, o) {
    return function() {
      return n(o.apply(void 0, arguments));
    };
  });
}
function xc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ve(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = xi.apply(void 0, s)(o.dispatch), Jn(Jn({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var Wr = { exports: {} }, wr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Ec() {
  if (ro) return wr;
  ro = 1;
  var e = W;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, u) {
    var p = u(), v = n({ inst: { value: p, getSnapshot: u } }), h = v[0].inst, m = v[1];
    return i(function() {
      h.value = p, h.getSnapshot = u, l(h) && m({ inst: h });
    }, [c, p, u]), o(function() {
      return l(h) && m({ inst: h }), c(function() {
        l(h) && m({ inst: h });
      });
    }, [c]), a(p), p;
  }
  function l(c) {
    var u = c.getSnapshot;
    c = c.value;
    try {
      var p = u();
      return !r(c, p);
    } catch {
      return !0;
    }
  }
  function d(c, u) {
    return u();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : s;
  return wr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, wr;
}
var Sr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function wc() {
  return no || (no = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = W, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(S) {
      {
        for (var E = arguments.length, y = new Array(E > 1 ? E - 1 : 0), N = 1; N < E; N++)
          y[N - 1] = arguments[N];
        n("error", S, y);
      }
    }
    function n(S, E, y) {
      {
        var N = t.ReactDebugCurrentFrame, R = N.getStackAddendum();
        R !== "" && (E += "%s", y = y.concat([R]));
        var C = y.map(function(B) {
          return String(B);
        });
        C.unshift("Warning: " + E), Function.prototype.apply.call(console[S], console, C);
      }
    }
    function o(S, E) {
      return S === E && (S !== 0 || 1 / S === 1 / E) || S !== S && E !== E;
    }
    var i = typeof Object.is == "function" ? Object.is : o, a = e.useState, s = e.useEffect, l = e.useLayoutEffect, d = e.useDebugValue, f = !1, c = !1;
    function u(S, E, y) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = E();
      if (!c) {
        var R = E();
        i(N, R) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var C = a({
        inst: {
          value: N,
          getSnapshot: E
        }
      }), B = C[0].inst, F = C[1];
      return l(function() {
        B.value = N, B.getSnapshot = E, p(B) && F({
          inst: B
        });
      }, [S, N, E]), s(function() {
        p(B) && F({
          inst: B
        });
        var U = function() {
          p(B) && F({
            inst: B
          });
        };
        return S(U);
      }, [S]), d(N), N;
    }
    function p(S) {
      var E = S.getSnapshot, y = S.value;
      try {
        var N = E();
        return !i(y, N);
      } catch {
        return !0;
      }
    }
    function v(S, E, y) {
      return E();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !h, x = m ? v : u, w = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x;
    Sr.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Sr;
}
process.env.NODE_ENV === "production" ? Wr.exports = Ec() : Wr.exports = wc();
var on = Wr.exports, Dr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function Sc() {
  if (oo) return Dr;
  oo = 1;
  var e = W, t = on;
  function r(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Dr.useSyncExternalStoreWithSelector = function(d, f, c, u, p) {
    var v = i(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else h = v.current;
    v = s(function() {
      function x(N) {
        if (!w) {
          if (w = !0, S = N, N = u(N), p !== void 0 && h.hasValue) {
            var R = h.value;
            if (p(R, N)) return E = R;
          }
          return E = N;
        }
        if (R = E, n(S, N)) return R;
        var C = u(N);
        return p !== void 0 && p(R, C) ? R : (S = N, E = C);
      }
      var w = !1, S, E, y = c === void 0 ? null : c;
      return [function() {
        return x(f());
      }, y === null ? void 0 : function() {
        return x(y());
      }];
    }, [f, c, u, p]);
    var m = o(d, v[0], v[1]);
    return a(function() {
      h.hasValue = !0, h.value = m;
    }, [m]), l(m), m;
  }, Dr;
}
var Nr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var io;
function Dc() {
  return io || (io = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = W, t = on;
    function r(f, c) {
      return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
    function d(f, c, u, p, v) {
      var h = i(null), m;
      h.current === null ? (m = {
        hasValue: !1,
        value: null
      }, h.current = m) : m = h.current;
      var x = s(function() {
        var y = !1, N, R, C = function(A) {
          if (!y) {
            y = !0, N = A;
            var H = p(A);
            if (v !== void 0 && m.hasValue) {
              var J = m.value;
              if (v(J, H))
                return R = J, J;
            }
            return R = H, H;
          }
          var re = N, M = R;
          if (n(re, A))
            return M;
          var $ = p(A);
          return v !== void 0 && v(M, $) ? M : (N = A, R = $, $);
        }, B = u === void 0 ? null : u, F = function() {
          return C(c());
        }, U = B === null ? void 0 : function() {
          return C(B());
        };
        return [F, U];
      }, [c, u, p, v]), w = x[0], S = x[1], E = o(f, w, S);
      return a(function() {
        m.hasValue = !0, m.value = E;
      }, [E]), l(E), E;
    }
    Nr.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Nr;
}
process.env.NODE_ENV === "production" ? Sc() : Dc();
function Nc(e) {
  e();
}
let Ei = Nc;
const Cc = (e) => Ei = e, Oc = () => Ei, ao = Symbol.for("react-redux-context"), so = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ic() {
  var e;
  if (!te.createContext) return {};
  const t = (e = so[ao]) != null ? e : so[ao] = /* @__PURE__ */ new Map();
  let r = t.get(te.createContext);
  return r || (r = te.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(te.createContext, r)), r;
}
const wi = /* @__PURE__ */ Ic(), _c = () => {
  throw new Error("uSES not initialized!");
};
function rt() {
  return rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rt.apply(null, arguments);
}
function Si(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Ur = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Rc() {
  if (co) return oe;
  co = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function S(y) {
    if (typeof y == "object" && y !== null) {
      var N = y.$$typeof;
      switch (N) {
        case t:
          switch (y = y.type, y) {
            case l:
            case d:
            case n:
            case i:
            case o:
            case c:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case f:
                case v:
                case p:
                case a:
                  return y;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function E(y) {
    return S(y) === d;
  }
  return oe.AsyncMode = l, oe.ConcurrentMode = d, oe.ContextConsumer = s, oe.ContextProvider = a, oe.Element = t, oe.ForwardRef = f, oe.Fragment = n, oe.Lazy = v, oe.Memo = p, oe.Portal = r, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = c, oe.isAsyncMode = function(y) {
    return E(y) || S(y) === l;
  }, oe.isConcurrentMode = E, oe.isContextConsumer = function(y) {
    return S(y) === s;
  }, oe.isContextProvider = function(y) {
    return S(y) === a;
  }, oe.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, oe.isForwardRef = function(y) {
    return S(y) === f;
  }, oe.isFragment = function(y) {
    return S(y) === n;
  }, oe.isLazy = function(y) {
    return S(y) === v;
  }, oe.isMemo = function(y) {
    return S(y) === p;
  }, oe.isPortal = function(y) {
    return S(y) === r;
  }, oe.isProfiler = function(y) {
    return S(y) === i;
  }, oe.isStrictMode = function(y) {
    return S(y) === o;
  }, oe.isSuspense = function(y) {
    return S(y) === c;
  }, oe.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === d || y === i || y === o || y === c || y === u || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === p || y.$$typeof === a || y.$$typeof === s || y.$$typeof === f || y.$$typeof === m || y.$$typeof === x || y.$$typeof === w || y.$$typeof === h);
  }, oe.typeOf = S, oe;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Ac() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === d || I === i || I === o || I === c || I === u || typeof I == "object" && I !== null && (I.$$typeof === v || I.$$typeof === p || I.$$typeof === a || I.$$typeof === s || I.$$typeof === f || I.$$typeof === m || I.$$typeof === x || I.$$typeof === w || I.$$typeof === h);
    }
    function E(I) {
      if (typeof I == "object" && I !== null) {
        var Ne = I.$$typeof;
        switch (Ne) {
          case t:
            var T = I.type;
            switch (T) {
              case l:
              case d:
              case n:
              case i:
              case o:
              case c:
                return T;
              default:
                var Pe = T && T.$$typeof;
                switch (Pe) {
                  case s:
                  case f:
                  case v:
                  case p:
                  case a:
                    return Pe;
                  default:
                    return Ne;
                }
            }
          case r:
            return Ne;
        }
      }
    }
    var y = l, N = d, R = s, C = a, B = t, F = f, U = n, A = v, H = p, J = r, re = i, M = o, $ = c, j = !1;
    function q(I) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(I) || E(I) === l;
    }
    function ee(I) {
      return E(I) === d;
    }
    function z(I) {
      return E(I) === s;
    }
    function le(I) {
      return E(I) === a;
    }
    function he(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function Fe(I) {
      return E(I) === f;
    }
    function De(I) {
      return E(I) === n;
    }
    function we(I) {
      return E(I) === v;
    }
    function Ie(I) {
      return E(I) === p;
    }
    function _e(I) {
      return E(I) === r;
    }
    function Re(I) {
      return E(I) === i;
    }
    function Ae(I) {
      return E(I) === o;
    }
    function Ze(I) {
      return E(I) === c;
    }
    ie.AsyncMode = y, ie.ConcurrentMode = N, ie.ContextConsumer = R, ie.ContextProvider = C, ie.Element = B, ie.ForwardRef = F, ie.Fragment = U, ie.Lazy = A, ie.Memo = H, ie.Portal = J, ie.Profiler = re, ie.StrictMode = M, ie.Suspense = $, ie.isAsyncMode = q, ie.isConcurrentMode = ee, ie.isContextConsumer = z, ie.isContextProvider = le, ie.isElement = he, ie.isForwardRef = Fe, ie.isFragment = De, ie.isLazy = we, ie.isMemo = Ie, ie.isPortal = _e, ie.isProfiler = Re, ie.isStrictMode = Ae, ie.isSuspense = Ze, ie.isValidElementType = S, ie.typeOf = E;
  }()), ie;
}
process.env.NODE_ENV === "production" ? Ur.exports = Rc() : Ur.exports = Ac();
var Pc = Ur.exports, an = Pc, Tc = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Vc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Mc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Di = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, sn = {};
sn[an.ForwardRef] = Mc;
sn[an.Memo] = Di;
function uo(e) {
  return an.isMemo(e) ? Di : sn[e.$$typeof] || Tc;
}
var $c = Object.defineProperty, Lc = Object.getOwnPropertyNames, fo = Object.getOwnPropertySymbols, Bc = Object.getOwnPropertyDescriptor, Fc = Object.getPrototypeOf, po = Object.prototype;
function Ni(e, t, r) {
  if (typeof t != "string") {
    if (po) {
      var n = Fc(t);
      n && n !== po && Ni(e, n, r);
    }
    var o = Lc(t);
    fo && (o = o.concat(fo(t)));
    for (var i = uo(e), a = uo(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Vc[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var d = Bc(t, l);
        try {
          $c(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var kc = Ni;
const mo = /* @__PURE__ */ ts(kc);
var zr = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function jc() {
  if (go) return ae;
  go = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case d:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case l:
                case u:
                case c:
                case i:
                  return m;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return ae.ContextConsumer = a, ae.ContextProvider = i, ae.Element = e, ae.ForwardRef = l, ae.Fragment = r, ae.Lazy = u, ae.Memo = c, ae.Portal = t, ae.Profiler = o, ae.StrictMode = n, ae.Suspense = d, ae.SuspenseList = f, ae.isAsyncMode = function() {
    return !1;
  }, ae.isConcurrentMode = function() {
    return !1;
  }, ae.isContextConsumer = function(m) {
    return h(m) === a;
  }, ae.isContextProvider = function(m) {
    return h(m) === i;
  }, ae.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ae.isForwardRef = function(m) {
    return h(m) === l;
  }, ae.isFragment = function(m) {
    return h(m) === r;
  }, ae.isLazy = function(m) {
    return h(m) === u;
  }, ae.isMemo = function(m) {
    return h(m) === c;
  }, ae.isPortal = function(m) {
    return h(m) === t;
  }, ae.isProfiler = function(m) {
    return h(m) === o;
  }, ae.isStrictMode = function(m) {
    return h(m) === n;
  }, ae.isSuspense = function(m) {
    return h(m) === d;
  }, ae.isSuspenseList = function(m) {
    return h(m) === f;
  }, ae.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === c || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === v || m.getModuleId !== void 0);
  }, ae.typeOf = h, ae;
}
var se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function Gc() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, m = !1, x = !1, w = !1, S;
    S = Symbol.for("react.module.reference");
    function E(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === o || w || T === n || T === d || T === f || x || T === p || v || h || m || typeof T == "object" && T !== null && (T.$$typeof === u || T.$$typeof === c || T.$$typeof === i || T.$$typeof === a || T.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === S || T.getModuleId !== void 0));
    }
    function y(T) {
      if (typeof T == "object" && T !== null) {
        var Pe = T.$$typeof;
        switch (Pe) {
          case e:
            var ke = T.type;
            switch (ke) {
              case r:
              case o:
              case n:
              case d:
              case f:
                return ke;
              default:
                var P = ke && ke.$$typeof;
                switch (P) {
                  case s:
                  case a:
                  case l:
                  case u:
                  case c:
                  case i:
                    return P;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var N = a, R = i, C = e, B = l, F = r, U = u, A = c, H = t, J = o, re = n, M = d, $ = f, j = !1, q = !1;
    function ee(T) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(T) {
      return q || (q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function le(T) {
      return y(T) === a;
    }
    function he(T) {
      return y(T) === i;
    }
    function Fe(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function De(T) {
      return y(T) === l;
    }
    function we(T) {
      return y(T) === r;
    }
    function Ie(T) {
      return y(T) === u;
    }
    function _e(T) {
      return y(T) === c;
    }
    function Re(T) {
      return y(T) === t;
    }
    function Ae(T) {
      return y(T) === o;
    }
    function Ze(T) {
      return y(T) === n;
    }
    function I(T) {
      return y(T) === d;
    }
    function Ne(T) {
      return y(T) === f;
    }
    se.ContextConsumer = N, se.ContextProvider = R, se.Element = C, se.ForwardRef = B, se.Fragment = F, se.Lazy = U, se.Memo = A, se.Portal = H, se.Profiler = J, se.StrictMode = re, se.Suspense = M, se.SuspenseList = $, se.isAsyncMode = ee, se.isConcurrentMode = z, se.isContextConsumer = le, se.isContextProvider = he, se.isElement = Fe, se.isForwardRef = De, se.isFragment = we, se.isLazy = Ie, se.isMemo = _e, se.isPortal = Re, se.isProfiler = Ae, se.isStrictMode = Ze, se.isSuspense = I, se.isSuspenseList = Ne, se.isValidElementType = E, se.typeOf = y;
  }()), se;
}
process.env.NODE_ENV === "production" ? zr.exports = jc() : zr.exports = Gc();
var ho = zr.exports;
function cn(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Cr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || cn(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Wc(e, t, r) {
  Cr(e, "mapStateToProps"), Cr(t, "mapDispatchToProps"), Cr(r, "mergeProps");
}
const Uc = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function zc(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, d, f, c, u;
  function p(w, S) {
    return l = w, d = S, f = e(l, d), c = t(n, d), u = r(f, c, d), s = !0, u;
  }
  function v() {
    return f = e(l, d), t.dependsOnOwnProps && (c = t(n, d)), u = r(f, c, d), u;
  }
  function h() {
    return e.dependsOnOwnProps && (f = e(l, d)), t.dependsOnOwnProps && (c = t(n, d)), u = r(f, c, d), u;
  }
  function m() {
    const w = e(l, d), S = !a(w, f);
    return f = w, S && (u = r(f, c, d)), u;
  }
  function x(w, S) {
    const E = !i(S, d), y = !o(w, l, S, d);
    return l = w, d = S, E && y ? v() : E ? h() : y ? m() : u;
  }
  return function(S, E) {
    return s ? x(S, E) : p(S, E);
  };
}
function Hc(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Si(t, Uc);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && Wc(a, s, l), zc(a, s, l, e, i);
}
function Yc(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function qc(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Ci(e, t, r) {
  qc(e) || cn(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Hr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function bo(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Oi(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = bo(e);
      let d = i(s, l);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = bo(d), d = i(s, l)), process.env.NODE_ENV !== "production" && Ci(d, o, t), d;
    }, i;
  };
}
function ln(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Kc(e) {
  return e && typeof e == "object" ? Hr((t) => (
    // @ts-ignore
    Yc(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Oi(e, "mapDispatchToProps")
  ) : ln(e, "mapDispatchToProps") : Hr((t) => ({
    dispatch: t
  }));
}
function Xc(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Oi(e, "mapStateToProps")
  ) : ln(e, "mapStateToProps") : Hr(() => ({}));
}
function Jc(e, t, r) {
  return rt({}, r, e, t);
}
function Zc(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, d, f) {
      const c = e(l, d, f);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && Ci(a, n, "mergeProps")), a;
    };
  };
}
function Qc(e) {
  return e ? typeof e == "function" ? Zc(e) : ln(e, "mergeProps") : () => Jc;
}
function el() {
  const e = Oc();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      let n = [], o = t;
      for (; o; )
        n.push(o), o = o.next;
      return n;
    },
    subscribe(n) {
      let o = !0, i = r = {
        callback: n,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !o || t === null || (o = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const yo = {
  notify() {
  },
  get: () => []
};
function Ii(e, t) {
  let r, n = yo, o = 0, i = !1;
  function a(h) {
    f();
    const m = n.subscribe(h);
    let x = !1;
    return () => {
      x || (x = !0, m(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    v.onStateChange && v.onStateChange();
  }
  function d() {
    return i;
  }
  function f() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = el());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = yo);
  }
  function u() {
    i || (i = !0, f());
  }
  function p() {
    i && (i = !1, c());
  }
  const v = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: d,
    trySubscribe: u,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return v;
}
const tl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", tr = tl ? te.useLayoutEffect : te.useEffect;
function xo(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Or(e, t) {
  if (xo(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !xo(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const rl = ["reactReduxForwardedRef"];
let _i = _c;
const nl = (e) => {
  _i = e;
}, ol = [null, null], il = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function al(e, t, r) {
  tr(() => e(...t), r);
}
function sl(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function cl(e, t, r, n, o, i, a, s, l, d, f) {
  if (!e) return () => {
  };
  let c = !1, u = null;
  const p = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let m, x;
    try {
      m = n(h, o.current);
    } catch (w) {
      x = w, u = w;
    }
    x || (u = null), m === i.current ? a.current || d() : (i.current = m, l.current = m, a.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, u)
      throw u;
  };
}
function ll(e, t) {
  return e === t;
}
let Eo = !1;
function Ri(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = ll,
  areOwnPropsEqual: i = Or,
  areStatePropsEqual: a = Or,
  areMergedPropsEqual: s = Or,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: d = wi
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Eo && (Eo = !0, cn('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = d, c = Xc(e), u = Kc(t), p = Qc(r), v = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !ho.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${il(m)}`);
    const x = m.displayName || m.name || "Component", w = `Connect(${x})`, S = {
      shouldHandleStateChanges: v,
      displayName: w,
      wrappedComponentName: x,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: u,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(R) {
      const [C, B, F] = te.useMemo(() => {
        const {
          reactReduxForwardedRef: I
        } = R, Ne = Si(R, rl);
        return [R.context, I, Ne];
      }, [R]), U = te.useMemo(() => C && C.Consumer && // @ts-ignore
      ho.isContextConsumer(/* @__PURE__ */ te.createElement(C.Consumer, null)) ? C : f, [C, f]), A = te.useContext(U), H = !!R.store && !!R.store.getState && !!R.store.dispatch, J = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !H && !J)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const re = H ? R.store : A.store, M = J ? A.getServerState : re.getState, $ = te.useMemo(() => Hc(re.dispatch, S), [re]), [j, q] = te.useMemo(() => {
        if (!v) return ol;
        const I = Ii(re, H ? void 0 : A.subscription), Ne = I.notifyNestedSubs.bind(I);
        return [I, Ne];
      }, [re, H, A]), ee = te.useMemo(() => H ? A : rt({}, A, {
        subscription: j
      }), [H, A, j]), z = te.useRef(), le = te.useRef(F), he = te.useRef(), Fe = te.useRef(!1);
      te.useRef(!1);
      const De = te.useRef(!1), we = te.useRef();
      tr(() => (De.current = !0, () => {
        De.current = !1;
      }), []);
      const Ie = te.useMemo(() => () => he.current && F === le.current ? he.current : $(re.getState(), F), [re, F]), _e = te.useMemo(() => (Ne) => j ? cl(
        v,
        re,
        j,
        // @ts-ignore
        $,
        le,
        z,
        Fe,
        De,
        he,
        q,
        Ne
      ) : () => {
      }, [j]);
      al(sl, [le, z, Fe, F, he, q]);
      let Re;
      try {
        Re = _i(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          _e,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ie,
          M ? () => $(M(), F) : Ie
        );
      } catch (I) {
        throw we.current && (I.message += `
The error may be correlated with this previous error:
${we.current.stack}

`), I;
      }
      tr(() => {
        we.current = void 0, he.current = void 0, z.current = Re;
      });
      const Ae = te.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ te.createElement(m, rt({}, Re, {
          ref: B
        }))
      ), [B, m, Re]);
      return te.useMemo(() => v ? /* @__PURE__ */ te.createElement(U.Provider, {
        value: ee
      }, Ae) : Ae, [U, Ae, ee]);
    }
    const N = te.memo(E);
    if (N.WrappedComponent = m, N.displayName = E.displayName = w, l) {
      const C = te.forwardRef(function(F, U) {
        return /* @__PURE__ */ te.createElement(N, rt({}, F, {
          reactReduxForwardedRef: U
        }));
      });
      return C.displayName = w, C.WrappedComponent = m, mo(C, m);
    }
    return mo(N, m);
  };
}
function ul({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = te.useMemo(() => {
    const d = Ii(e);
    return {
      store: e,
      subscription: d,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = te.useMemo(() => e.getState(), [e]);
  tr(() => {
    const {
      subscription: d
    } = a;
    return d.onStateChange = d.notifyNestedSubs, d.trySubscribe(), s !== e.getState() && d.notifyNestedSubs(), () => {
      d.tryUnsubscribe(), d.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || wi;
  return /* @__PURE__ */ te.createElement(l.Provider, {
    value: a
  }, r);
}
nl(on.useSyncExternalStore);
Cc(es);
function dl(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ai(e, t) {
  var r = Be(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = Q(!0), o = Q(r), i = n.current || !!(t && o.current.inputs && dl(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return Ee(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function fl(e, t) {
  return Ai(function() {
    return e;
  }, t);
}
var X = Ai, L = fl, pl = process.env.NODE_ENV === "production", Ir = "Invariant failed";
function wo(e, t) {
  if (pl)
    throw new Error(Ir);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Ir, ": ").concat(r) : Ir;
  throw new Error(n);
}
var qe = function(t) {
  var r = t.top, n = t.right, o = t.bottom, i = t.left, a = n - i, s = o - r, l = {
    top: r,
    right: n,
    bottom: o,
    left: i,
    width: a,
    height: s,
    x: i,
    y: r,
    center: {
      x: (n + i) / 2,
      y: (o + r) / 2
    }
  };
  return l;
}, un = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, So = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, ml = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, _r = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, dn = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? _r : n, i = t.border, a = i === void 0 ? _r : i, s = t.padding, l = s === void 0 ? _r : s, d = qe(un(r, o)), f = qe(So(r, a)), c = qe(So(f, l));
  return {
    marginBox: d,
    borderBox: qe(r),
    paddingBox: f,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, Ge = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? wo(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : wo()), o;
}, gl = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, rr = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = ml(n, r);
  return dn({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, nr = function(t, r) {
  return r === void 0 && (r = gl()), rr(t, r);
}, Pi = function(t, r) {
  var n = {
    top: Ge(r.marginTop),
    right: Ge(r.marginRight),
    bottom: Ge(r.marginBottom),
    left: Ge(r.marginLeft)
  }, o = {
    top: Ge(r.paddingTop),
    right: Ge(r.paddingRight),
    bottom: Ge(r.paddingBottom),
    left: Ge(r.paddingLeft)
  }, i = {
    top: Ge(r.borderTopWidth),
    right: Ge(r.borderRightWidth),
    bottom: Ge(r.borderBottomWidth),
    left: Ge(r.borderLeftWidth)
  };
  return dn({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Ti = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Pi(r, n);
}, Do = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function vl(e, t) {
  return !!(e === t || Do(e) && Do(t));
}
function hl(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!vl(e[r], t[r]))
      return !1;
  return !0;
}
function be(e, t) {
  t === void 0 && (t = hl);
  var r = null;
  function n() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (r && r.lastThis === this && t(o, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, o);
    return r = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
var Vt = function(t) {
  var r = [], n = null, o = function() {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    r = s, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return o.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, o;
};
const bl = process.env.NODE_ENV === "production", yl = /[ \t]{2,}/g, xl = /^[ \t]*/gm, No = (e) => e.replace(yl, " ").replace(xl, "").trim(), El = (e) => No(`
  %c@hello-pangea/dnd

  %c${No(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), wl = (e) => [El(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Sl = "__@hello-pangea/dnd-disable-dev-warnings";
function Vi(e, t) {
  bl || typeof window < "u" && window[Sl] || console[e](...wl(t));
}
const pe = Vi.bind(null, "warn"), Yr = Vi.bind(null, "error");
function nt() {
}
function Dl(e, t) {
  return {
    ...e,
    ...t
  };
}
function We(e, t, r) {
  const n = t.map((o) => {
    const i = Dl(r, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    n.forEach((i) => {
      i();
    });
  };
}
const Nl = process.env.NODE_ENV === "production", Co = "Invariant failed";
class Mt extends Error {
}
Mt.prototype.toString = function() {
  return this.message;
};
function b(e, t) {
  throw Nl ? new Mt(Co) : new Mt(`${Co}: ${t || ""}`);
}
class Cl extends W.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = nt, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && pe(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Mt && (r.preventDefault(), process.env.NODE_ENV !== "production" && Yr(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = We(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Mt) {
      process.env.NODE_ENV !== "production" && Yr(t.message), this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const Ol = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, or = (e) => e + 1, Il = (e) => `
  You have lifted an item in position ${or(e.source.index)}
`, Mi = (e, t) => {
  const r = e.droppableId === t.droppableId, n = or(e.index), o = or(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, $i = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, _l = (e) => {
  const t = e.destination;
  if (t)
    return Mi(e.source, t);
  const r = e.combine;
  return r ? $i(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Oo = (e) => `
  The item has returned to its starting position
  of ${or(e.index)}
`, Rl = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Oo(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Mi(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${$i(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Oo(e.source)}
  `;
}, Al = {
  dragHandleUsageInstructions: Ol,
  onDragStart: Il,
  onDragUpdate: _l,
  onDragEnd: Rl
};
var Zt = Al;
const ye = {
  x: 0,
  y: 0
}, xe = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Me = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), ot = (e, t) => e.x === t.x && e.y === t.y, Et = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), ft = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, $t = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Io = (e, t) => Math.min(...t.map((r) => $t(e, r))), Li = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Pl = (e, t) => {
  const r = qe({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Wt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), _o = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], Tl = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Vl = (e, t) => t ? Wt(e, t.scroll.diff.displacement) : e, Ml = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, $l = (e, t) => t && t.shouldClipSubject ? Pl(t.pageMarginBox, e) : qe(e);
var ht = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Vl(e.marginBox, n), i = Ml(o, r, t), a = $l(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, fn = (e, t) => {
  e.frame || (process.env.NODE_ENV, b());
  const r = e.frame, n = Me(t, r.scroll.initial), o = Et(n), i = {
    ...r,
    scroll: {
      initial: r.scroll.initial,
      current: t,
      diff: {
        value: n,
        displacement: o
      },
      max: r.scroll.max
    }
  }, a = ht({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: a
  };
};
const Bi = be((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Fi = be((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), cr = be((e) => Object.values(e)), Ll = be((e) => Object.values(e));
var pt = be((e, t) => Ll(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function pn(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function lr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var ur = be((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Bl = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !pn(o))
    return null;
  function a(p) {
    const v = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: v
    };
  }
  const s = o.displaced.all, l = s.length ? s[0] : null;
  if (e)
    return l ? a(l) : null;
  const d = ur(t, n);
  if (!l) {
    if (!d.length)
      return null;
    const p = d[d.length - 1];
    return a(p.descriptor.id);
  }
  const f = d.findIndex((p) => p.descriptor.id === l);
  f === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find displaced item in set") : b());
  const c = f - 1;
  if (c < 0)
    return null;
  const u = d[c];
  return a(u.descriptor.id);
}, wt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const ki = {
  point: ye,
  value: 0
}, Lt = {
  invisible: {},
  visible: {},
  all: []
}, Fl = {
  displaced: Lt,
  displacedBy: ki,
  at: null
};
var kl = Fl, Ue = (e, t) => (r) => e <= r && r <= t, ji = (e) => {
  const t = Ue(e.top, e.bottom), r = Ue(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, d = n.left < e.left && n.right > e.right;
    return l && d ? !0 : l && a || d && i;
  };
}, jl = (e) => {
  const t = Ue(e.top, e.bottom), r = Ue(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const mn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Gi = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var Gl = (e) => (t) => {
  const r = Ue(t.top, t.bottom), n = Ue(t.left, t.right);
  return (o) => e === mn ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Wl = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ye;
  return Wt(e, r);
}, Ul = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, zl = (e, t, r) => r(t)(e), gn = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Wl(e, t) : e;
  return Ul(i, t, o) && zl(i, r, o);
}, Hl = (e) => gn({
  ...e,
  isVisibleThroughFrameFn: ji
}), Wi = (e) => gn({
  ...e,
  isVisibleThroughFrameFn: jl
}), Yl = (e) => gn({
  ...e,
  isVisibleThroughFrameFn: Gl(e.destination.axis)
}), ql = (e, t, r) => {
  if (typeof r == "boolean")
    return r;
  if (!t)
    return !0;
  const {
    invisible: n,
    visible: o
  } = t;
  if (n[e])
    return !1;
  const i = o[e];
  return i ? i.shouldAnimate : !0;
};
function Kl(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return qe(un(r, n));
}
function Bt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const d = Kl(l, r), f = l.descriptor.id;
    if (s.all.push(f), !Hl({
      target: d,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const u = ql(f, i, o), p = {
      draggableId: f,
      shouldAnimate: u
    };
    return s.visible[f] = p, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function Xl(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Ro({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = Xl(e, {
    inHomeList: t
  });
  return {
    displaced: Lt,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: o
      }
    }
  };
}
function ir({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = wt(e, r);
  if (a == null)
    return Ro({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const d = t.find((v) => v.descriptor.index === a);
  if (!d)
    return Ro({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const f = ur(e, t), c = t.indexOf(d), u = f.slice(c);
  return {
    displaced: Bt({
      afterDragging: u,
      destination: r,
      displacedBy: o,
      last: i,
      viewport: n.frame,
      forceShouldAnimate: s
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: a
      }
    }
  };
}
function it(e, t) {
  return !!t.effected[e];
}
var Jl = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return it(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, Zl = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, Ql = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: n,
  destination: o,
  insideDestination: i,
  previousImpact: a,
  viewport: s,
  afterCritical: l
}) => {
  const d = a.at;
  if (d || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot move in direction without previous impact location") : b()), d.type === "REORDER") {
    const c = Zl({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return c == null ? null : ir({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const f = Jl({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: d.combine,
    afterCritical: l
  });
  return f == null ? null : ir({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, eu = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return it(r, t) ? o ? ye : Et(n.point) : o ? n.point : ye;
}, tu = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = lr(t);
  n || (process.env.NODE_ENV, b());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = eu({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return xe(i, a);
};
const Ui = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, ru = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, vn = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Ao = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => ft(e.line, t.marginBox[e.end] + Ui(e, r), vn(e, t.marginBox, r)), Po = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => ft(e.line, t.marginBox[e.start] - ru(e, r), vn(e, t.marginBox, r)), nu = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => ft(e.line, t.contentBox[e.start] + Ui(e, r), vn(e, t.contentBox, r));
var ou = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = pt(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return nu({
      axis: s,
      moveInto: n.page,
      isMoving: a
    });
  const {
    displaced: l,
    displacedBy: d
  } = e, f = l.all[0];
  if (f) {
    const u = r[f];
    if (it(f, o))
      return Po({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const p = rr(u.page, d.point);
    return Po({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (it(c.descriptor.id, o)) {
    const u = rr(c.page, Et(o.displacedBy.point));
    return Ao({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return Ao({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, qr = (e, t) => {
  const r = e.frame;
  return r ? xe(t, r.scroll.diff.displacement) : t;
};
const iu = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? ou({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : tu({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var dr = (e) => {
  const t = iu(e), r = e.droppable;
  return r ? qr(r, t) : t;
}, zi = (e, t) => {
  const r = Me(t, e.scroll.initial), n = Et(r);
  return {
    frame: qe({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: r,
        displacement: n
      }
    }
  };
};
function To(e, t) {
  return e.map((r) => t[r]);
}
function au(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var su = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = zi(t, xe(t.scroll.current, o)), a = r.frame ? fn(r, xe(r.frame.scroll.current, o)) : r, s = e.displaced, l = Bt({
    afterDragging: To(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = Bt({
    afterDragging: To(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, c = {}, u = [s, l, d];
  return s.all.forEach((v) => {
    const h = au(v, u);
    if (h) {
      c[v] = h;
      return;
    }
    f[v] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: f,
      visible: c
    }
  };
}, cu = (e, t) => xe(e.scroll.diff.displacement, t), hn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = cu(r, e), o = Me(n, t.page.borderBox.center);
  return xe(t.client.borderBox.center, o);
}, Hi = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Me(r, e.page.borderBox.center), l = {
    target: Wt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? Yl(l) : Wi(l);
}, lu = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: n,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: a,
  previousClientSelection: s,
  afterCritical: l
}) => {
  if (!r.isEnabled)
    return null;
  const d = pt(r.descriptor.id, n), f = wt(t, r), c = Bl({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: d,
    previousImpact: o
  }) || Ql({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: n,
    destination: r,
    insideDestination: d,
    previousImpact: o,
    viewport: i,
    afterCritical: l
  });
  if (!c)
    return null;
  const u = dr({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if (Hi({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: hn({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const v = Me(u, a), h = su({
    impact: c,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: v
  });
  return {
    clientSelection: s,
    impact: h,
    scrollJumpRequest: v
  };
};
const Oe = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get clipped area from droppable") : b()), t;
};
var uu = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ue(i[a.start], i[a.end]), l = cr(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => ji(o.frame)(Oe(f))).filter((f) => {
    const c = Oe(f);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const c = Oe(f), u = Ue(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((f, c) => {
    const u = Oe(f)[a.crossAxisStart], p = Oe(c)[a.crossAxisStart];
    return e ? u - p : p - u;
  }).filter((f, c, u) => Oe(f)[a.crossAxisStart] === Oe(u[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const d = l.filter((f) => Ue(Oe(f)[a.start], Oe(f)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((f, c) => Oe(f)[a.start] - Oe(c)[a.start])[0] : l.sort((f, c) => {
    const u = Io(t, _o(Oe(f))), p = Io(t, _o(Oe(c)));
    return u !== p ? u - p : Oe(f)[a.start] - Oe(c)[a.start];
  })[0];
};
const Vo = (e, t) => {
  const r = e.page.borderBox.center;
  return it(e.descriptor.id, t) ? Me(r, t.displacedBy.point) : r;
}, du = (e, t) => {
  const r = e.page.borderBox;
  return it(e.descriptor.id, t) ? Wt(r, Et(t.displacedBy.point)) : r;
};
var fu = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => Wi({
  target: du(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = $t(e, qr(r, Vo(a, o))), d = $t(e, qr(r, Vo(s, o)));
  return l < d ? -1 : d < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Ut = be(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: ft(t.line, n)
  };
});
const pu = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return ft(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = pt(e.descriptor.id, r).reduce((d, f) => d + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : ft(n.line, l);
}, Yi = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), qi = (e, t, r) => {
  const n = e.frame;
  wt(t, e) && (process.env.NODE_ENV !== "production" ? b(!1, "Should not add placeholder space to home list") : b()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot add placeholder size to a subject when it already has one") : b());
  const o = Ut(e.axis, t.displaceBy).point, i = pu(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const f = ht({
      page: e.subject.page,
      withPlaceholder: a,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: f
    };
  }
  const s = i ? xe(n.scroll.max, i) : n.scroll.max, l = Yi(n, s), d = ht({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: l
  });
  return {
    ...e,
    subject: d,
    frame: l
  };
}, mu = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot remove placeholder form subject when there was none") : b());
  const r = e.frame;
  if (!r) {
    const a = ht({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: a
    };
  }
  const n = t.oldFrameMaxScroll;
  n || (process.env.NODE_ENV !== "production" ? b(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : b());
  const o = Yi(r, n), i = ht({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: i,
    frame: o
  };
};
var gu = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: r,
  draggable: n,
  draggables: o,
  destination: i,
  viewport: a,
  afterCritical: s
}) => {
  if (!t) {
    if (r.length)
      return null;
    const c = {
      displaced: Lt,
      displacedBy: ki,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = dr({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), p = wt(n, i) ? i : qi(i, n, o);
    return Hi({
      draggable: n,
      destination: p,
      newPageBorderBoxCenter: u,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? c : null;
  }
  const l = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], d = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || l ? c : c + 1;
  })(), f = Ut(i.axis, n.displaceBy);
  return ir({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: Lt,
    index: d
  });
}, vu = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = uu({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const d = pt(l.descriptor.id, o), f = fu({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: d,
    afterCritical: s
  }), c = gu({
    previousPageBorderBoxCenter: t,
    destination: l,
    draggable: r,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: d,
    viewport: a,
    afterCritical: s
  });
  if (!c)
    return null;
  const u = dr({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: hn({
      pageBorderBoxCenter: u,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, $e = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const hu = (e, t) => {
  const r = $e(e);
  return r ? t[r] : null;
};
var bu = ({
  state: e,
  type: t
}) => {
  const r = hu(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: u
  } = e.dimensions;
  return s ? lu({
    isMovingForward: l,
    previousPageBorderBoxCenter: f,
    draggable: d,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : vu({
    isMovingForward: l,
    previousPageBorderBoxCenter: f,
    draggable: d,
    isOver: i,
    draggables: c,
    droppables: u,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function lt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ki(e) {
  const t = Ue(e.top, e.bottom), r = Ue(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function yu(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function xu({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = ft(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: $t(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Eu({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = cr(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !yu(e, i))
      return !1;
    if (Ki(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], d = e[a.crossAxisEnd], f = Ue(i[a.crossAxisStart], i[a.crossAxisEnd]), c = f(l), u = f(d);
    return !c && !u ? !0 : c ? l < s : d > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : xu({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Xi = (e, t) => qe(Wt(e, t));
var wu = (e, t) => {
  const r = e.frame;
  return r ? Xi(t, r.scroll.diff.value) : t;
};
function Ji({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Su({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Du = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = Ut(r.axis, t.displaceBy), d = l.value, f = e[s.start], c = e[s.end], p = ur(t, n).find((h) => {
    const m = h.descriptor.id, x = h.page.borderBox.center[s.line], w = it(m, a), S = Ji({
      displaced: o,
      id: m
    });
    return w ? S ? c <= x : f < x - d : S ? c <= x + d : f < x;
  }) || null, v = Su({
    draggable: t,
    closest: p,
    inHomeList: wt(t, r)
  });
  return ir({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: v
  });
};
const Nu = 4;
var Cu = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Ut(n.axis, e.displaceBy), l = s.value, d = t[a.start], f = t[a.end], u = ur(e, o).find((v) => {
    const h = v.descriptor.id, m = v.page.borderBox, w = m[a.size] / Nu, S = it(h, i), E = Ji({
      displaced: r.displaced,
      id: h
    });
    return S ? E ? f > m[a.start] + w && f < m[a.end] - w : d > m[a.start] - l + w && d < m[a.end] - l - w : E ? f > m[a.start] + l + w && f < m[a.end] + l - w : d > m[a.start] + w && d < m[a.end] - w;
  });
  return u ? {
    displacedBy: s,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: u.descriptor.id,
        droppableId: n.descriptor.id
      }
    }
  } : null;
}, Zi = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Xi(t.page.borderBox, e), l = Eu({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return kl;
  const d = n[l], f = pt(d.descriptor.id, r), c = wu(d, s);
  return Cu({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: f,
    afterCritical: a
  }) || Du({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: d,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, bn = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Ou = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = $e(e), o = $e(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = mu(i);
  return bn(r, a);
};
var Iu = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Ou({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = $e(o);
  if (!a)
    return i;
  const s = r[a];
  if (wt(e, s) || s.subject.withPlaceholder)
    return i;
  const l = qi(s, e, t);
  return bn(i, l);
}, Rt = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, d = Me(l, e.initial.client.selection), f = {
    offset: d,
    selection: l,
    borderBoxCenter: xe(e.initial.client.borderBoxCenter, d)
  }, c = {
    selection: xe(f.selection, a.scroll.current),
    borderBoxCenter: xe(f.borderBoxCenter, a.scroll.current),
    offset: xe(f.offset, a.scroll.diff.value)
  }, u = {
    client: f,
    page: c
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: u
    };
  const p = s.draggables[e.critical.draggable.id], v = o || Zi({
    pageOffset: c.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Iu({
    draggable: p,
    impact: v,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: u,
    dimensions: {
      draggables: s.draggables,
      droppables: h
    },
    impact: v,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function _u(e, t) {
  return e.map((r) => t[r]);
}
var Qi = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = _u(i.all, r), s = Bt({
    afterDragging: a,
    destination: n,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: s
  };
}, ea = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = dr({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return hn({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, ta = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, b());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], d = $e(n);
  d || (process.env.NODE_ENV !== "production" ? b(!1, "Must be over a destination in SNAP movement mode") : b());
  const f = s[d], c = Qi({
    impact: n,
    viewport: o,
    destination: f,
    draggables: a
  }), u = ea({
    impact: c,
    draggable: l,
    droppable: f,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Rt({
    impact: c,
    clientSelection: u,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Ru = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ra = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Ut(t.axis, e.displaceBy), i = pt(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Expected draggable to be inside home list") : b());
  const s = i.slice(a + 1), l = s.reduce((u, p) => (u[p.descriptor.id] = !0, u), {}), d = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: Bt({
        afterDragging: s,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: n.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: Ru(e.descriptor)
      }
    },
    afterCritical: d
  };
}, Au = (e, t) => ({
  draggables: e.draggables,
  droppables: bn(e.droppables, t)
});
const zt = (e) => {
  process.env.NODE_ENV;
}, Ht = (e) => {
  process.env.NODE_ENV;
};
var Pu = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = rr(e.client, t), o = nr(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Tu = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Expected Droppable to have a frame") : b()), t;
}, Vu = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = Tu(a).scroll.diff.value, d = xe(n, l);
    return Pu({
      draggable: o,
      offset: d,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Mu = ({
  state: e,
  published: t
}) => {
  zt();
  const r = t.modified.map((x) => {
    const w = e.dimensions.droppables[x.droppableId];
    return fn(w, x.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Bi(r)
  }, o = Fi(Vu({
    additions: t.additions,
    updatedDroppables: n,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((x) => {
    delete i[x];
  });
  const a = {
    droppables: n,
    draggables: i
  }, s = $e(e.impact), l = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: u
  } = ra({
    draggable: d,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : c, v = Zi({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: u
  });
  Ht();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: v,
    onLiftImpact: c,
    dimensions: a,
    afterCritical: u,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? h : {
    ...h,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Kr = (e) => e.movementMode === "SNAP", Rr = (e, t, r) => {
  const n = Au(e.dimensions, t);
  return !Kr(e) || r ? Rt({
    state: e,
    dimensions: n
  }) : ta({
    state: e,
    dimensions: n
  });
};
function Ar(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Mo = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var $u = (e = Mo, t) => {
  if (t.type === "FLUSH")
    return {
      ...Mo,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "INITIAL_PUBLISH must come after a IDLE phase") : b());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], l = i.droppables[r.droppable.id], d = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: ye
    }, f = {
      client: d,
      page: {
        selection: xe(d.selection, o.scroll.initial),
        borderBoxCenter: xe(d.selection, o.scroll.initial),
        offset: xe(d.selection, o.scroll.diff.value)
      }
    }, c = cr(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: u,
      afterCritical: p
    } = ra({
      draggable: s,
      home: l,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: a,
      dimensions: i,
      initial: f,
      current: f,
      isWindowScrollAllowed: c,
      impact: u,
      afterCritical: p,
      onLiftImpact: u,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, `Collection cannot start from phase ${e.phase}`) : b()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : b()), Mu({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    lt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      client: r
    } = t.payload;
    return ot(r, e.current.client.selection) ? e : Rt({
      state: e,
      clientSelection: r,
      impact: Kr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Ar(e);
    lt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = fn(o, n);
    return Rr(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    lt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : b()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : b());
    const i = {
      ...o,
      isEnabled: n
    };
    return Rr(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    lt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : b()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? b(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : b());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return Rr(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    lt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot move by window in phase ${e.phase}`) : b()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? b(!1, "Window scrolling is currently not supported for fixed lists") : b());
    const r = t.payload.newScroll;
    if (ot(e.viewport.scroll.current, r))
      return Ar(e);
    const n = zi(e.viewport, r);
    return Kr(e) ? ta({
      state: e,
      viewport: n
    }) : Rt({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!lt(e))
      return e;
    const r = t.payload.maxScroll;
    if (ot(r, e.viewport.scroll.max))
      return e;
    const n = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: r
      }
    };
    return {
      ...e,
      viewport: n
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} received while not in DRAGGING phase`) : b());
    const r = bu({
      state: e,
      type: t.type
    });
    return r ? Rt({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? b(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : b()), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: r
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: r,
      dropDuration: n,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot animate drop from phase ${e.phase}`) : b()), {
      phase: "DROP_ANIMATING",
      completed: r,
      dropDuration: n,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: r
    } = t.payload;
    return {
      phase: "IDLE",
      completed: r,
      shouldFlush: !1
    };
  }
  return e;
};
const Lu = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Bu = (e) => ({
  type: "LIFT",
  payload: e
}), Fu = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), ku = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), ju = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Gu = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Wu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Uu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), na = (e) => ({
  type: "MOVE",
  payload: e
}), zu = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Hu = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Yu = () => ({
  type: "MOVE_UP",
  payload: null
}), qu = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Ku = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Xu = () => ({
  type: "MOVE_LEFT",
  payload: null
}), yn = () => ({
  type: "FLUSH",
  payload: null
}), Ju = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), xn = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), oa = (e) => ({
  type: "DROP",
  payload: e
}), Zu = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ia = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Qu(e) {
  if (e.length <= 1)
    return;
  const t = e.map((o) => o.descriptor.index), r = {};
  for (let o = 1; o < t.length; o++) {
    const i = t[o], a = t[o - 1];
    i !== a + 1 && (r[i] = !0);
  }
  if (!Object.keys(r).length)
    return;
  const n = t.map((o) => !!r[o] ? `[🔥${o}]` : `${o}`).join(", ");
  process.env.NODE_ENV !== "production" && pe(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function ed(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = pt(e.droppable.id, t.draggables);
    Qu(r);
  }
}
var td = (e) => ({
  getState: t,
  dispatch: r
}) => (n) => (o) => {
  if (o.type !== "LIFT") {
    n(o);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = o.payload, l = t();
  l.phase === "DROP_ANIMATING" && r(xn({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase to start a drag") : b()), r(yn()), r(Lu({
    draggableId: i,
    movementMode: s
  }));
  const f = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: c,
    dimensions: u,
    viewport: p
  } = e.startPublishing(f);
  ed(c, u), r(Fu({
    critical: c,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, rd = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const En = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Ft = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, aa = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, st = `${aa.outOfTheWay}s ${En.outOfTheWay}`, At = {
  fluid: `opacity ${st}`,
  snap: `transform ${st}, opacity ${st}`,
  drop: (e) => {
    const t = `${e}s ${En.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${st}`,
  placeholder: `height ${st}, width ${st}, margin ${st}`
}, $o = (e) => ot(e, ye) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Xr = {
  moveTo: $o,
  drop: (e, t) => {
    const r = $o(e);
    if (r)
      return t ? `${r} scale(${Ft.scale.drop})` : r;
  }
}, {
  minDropTime: Jr,
  maxDropTime: sa
} = aa, nd = sa - Jr, Lo = 1500, od = 0.6;
var id = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = $t(e, t);
  if (n <= 0)
    return Jr;
  if (n >= Lo)
    return sa;
  const o = n / Lo, i = Jr + nd * o, a = r === "CANCEL" ? i * od : i;
  return Number(a.toFixed(2));
}, ad = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = $e(e), l = s ? a[s] : null, d = a[t.descriptor.droppableId], f = ea({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || d,
    viewport: n
  });
  return Me(f, t.client.borderBox.center);
}, sd = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Qi({
    draggables: e,
    impact: i,
    destination: n,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : r.at.type === "REORDER" ? {
  impact: r,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...r,
    displaced: Lt
  },
  didDropInsideDroppable: !0
};
const cd = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Zu({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? b(!1, "A DROP action occurred while DROP_PENDING and still waiting") : b()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot drop in phase: ${o.phase}`) : b());
  const s = o.critical, l = o.dimensions, d = l.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: c
  } = sd({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = c ? pn(f) : null, p = c ? lr(f) : null, v = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: v,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: p
  }, m = ad({
    impact: f,
    draggable: d,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), x = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: f
  };
  if (!(!ot(o.current.client.offset, m) || !!h.combine)) {
    t(xn({
      completed: x
    }));
    return;
  }
  const S = id({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(Ju({
    newHomeClientOffset: m,
    dropDuration: S,
    completed: x
  }));
};
var ld = cd, ca = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function ud(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function dd({
  onWindowScroll: e
}) {
  function t() {
    e(ca());
  }
  const r = Vt(t), n = ud(r);
  let o = nt;
  function i() {
    return o !== nt;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start scroll listener when already active") : b()), o = We(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop scroll listener when not active") : b()), r.cancel(), o(), o = nt;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const fd = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", pd = (e) => {
  const t = dd({
    onWindowScroll: (r) => {
      e.dispatch(zu({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && fd(n) && t.stop(), r(n);
  };
};
var md = pd, gd = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && pe("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && pe(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, vd = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Could not find timer") : b());
    const [a] = e.splice(i, 1);
    a.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), a = {
        timerId: i,
        callback: o
      };
      e.push(a);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((i) => {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
};
const hd = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, bd = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, yd = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Ot = (e, t) => {
  zt(), t(), Ht();
}, Kt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Pr(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = gd(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var xd = (e, t) => {
  const r = vd();
  let n = null;
  const o = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : b()), Ot("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: c,
        mode: u
      });
    });
  }, i = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b()), Ot("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Kt(c, u));
    });
  }, a = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b());
    const p = Kt(c, u);
    n = {
      mode: u,
      lastCritical: c,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      Ot("onDragStart", () => Pr(e().onDragStart, p, t, Zt.onDragStart));
    });
  }, s = (c, u) => {
    const p = pn(u), v = lr(u);
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragMove when onDragStart has not been called") : b());
    const h = !yd(c, n.lastCritical);
    h && (n.lastCritical = c);
    const m = !hd(n.lastLocation, p);
    m && (n.lastLocation = p);
    const x = !bd(n.lastCombine, v);
    if (x && (n.lastCombine = v), !h && !m && !x)
      return;
    const w = {
      ...Kt(c, n.mode),
      combine: v,
      destination: p
    };
    r.add(() => {
      Ot("onDragUpdate", () => Pr(e().onDragUpdate, w, t, Zt.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Can only flush responders while dragging") : b()), r.flush();
  }, d = (c) => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : b()), n = null, Ot("onDragEnd", () => Pr(e().onDragEnd, c, t, Zt.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: a,
    update: s,
    flush: l,
    drop: d,
    abort: () => {
      if (!n)
        return;
      const c = {
        ...Kt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(c);
    }
  };
}, Ed = (e, t) => {
  const r = xd(e, t);
  return (n) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      r.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const s = i.payload.critical;
      r.beforeStart(s, i.payload.movementMode), o(i), r.start(s, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const s = i.payload.completed.result;
      r.flush(), o(i), r.drop(s);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      r.abort();
      return;
    }
    const a = n.getState();
    a.phase === "DRAGGING" && r.update(a.critical, a.impact);
  };
};
const wd = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot finish a drop animating when no drop is occurring") : b()), e.dispatch(xn({
    completed: n.completed
  }));
};
var Sd = wd;
const Dd = (e) => {
  let t = null, r = null;
  function n() {
    r && (cancelAnimationFrame(r), r = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && n(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ia());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = We(window, [a]);
    });
  };
};
var Nd = Dd, Cd = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Od = (e) => {
  let t = !1;
  return () => (r) => (n) => {
    if (n.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(n.payload.critical.draggable.id), r(n), e.tryRestoreFocusRecorded();
      return;
    }
    if (r(n), !!t) {
      if (n.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (n.type === "DROP_COMPLETE") {
        t = !1;
        const o = n.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const Id = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var _d = (e) => (t) => (r) => (n) => {
  if (Id(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : b()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Rd = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(oa({
    reason: n.reason
  })));
};
var Ad = Rd;
const Pd = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : xi;
var Td = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => yi($u, Pd(xc(rd(r), Cd(e), td(e), ld, Sd, Nd, Ad, _d(i), md, Od(t), Ed(n, o))));
const Tr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Vd({
  registry: e,
  callbacks: t
}) {
  let r = Tr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, zt();
      const {
        additions: l,
        removals: d,
        modified: f
      } = r, c = Object.keys(l).map((v) => e.draggable.getById(v).getDimension(ye)).sort((v, h) => v.descriptor.index - h.descriptor.index), u = Object.keys(f).map((v) => {
        const m = e.droppable.getById(v).callbacks.getScrollWhileDragging();
        return {
          droppableId: v,
          scroll: m
        };
      }), p = {
        additions: c,
        removals: Object.keys(d),
        modified: u
      };
      r = Tr(), Ht(), t.publish(p);
    }));
  };
  return {
    add: (l) => {
      const d = l.descriptor.id;
      r.additions[d] = l, r.modified[l.descriptor.droppableId] = !0, r.removals[d] && delete r.removals[d], o();
    },
    remove: (l) => {
      const d = l.descriptor;
      r.removals[d.id] = !0, r.modified[d.droppableId] = !0, r.additions[d.id] && delete r.additions[d.id], o();
    },
    stop: () => {
      n && (cancelAnimationFrame(n), n = null, r = Tr());
    }
  };
}
var la = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Me({
    x: t,
    y: e
  }, {
    x: n,
    y: r
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, ua = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.documentElement") : b()), e;
}, da = () => {
  const e = ua();
  return la({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Md = () => {
  const e = ca(), t = da(), r = e.y, n = e.x, o = ua(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: qe({
      top: r,
      left: n,
      right: s,
      bottom: l
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: ye,
        displacement: ye
      }
    }
  };
}, $d = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  zt();
  const n = Md(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), l = {
    draggables: Fi(s),
    droppables: Bi(a)
  };
  return Ht(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function Bo(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && pe(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Ld = (e, t) => {
  let r = null;
  const n = Vd({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (u, p) => {
    e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update is enabled flag of Droppable ${u} as it is not registered`) : b()), r && t.updateDroppableIsEnabled({
      id: u,
      isEnabled: p
    });
  }, i = (u, p) => {
    r && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update isCombineEnabled flag of Droppable ${u} as it is not registered`) : b()), t.updateDroppableIsCombineEnabled({
      id: u,
      isCombineEnabled: p
    }));
  }, a = (u, p) => {
    r && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot update the scroll on Droppable ${u} as it is not registered`) : b()), t.updateDroppableScroll({
      id: u,
      newScroll: p
    }));
  }, s = (u, p) => {
    r && e.droppable.getById(u).callbacks.scroll(p);
  }, l = () => {
    if (!r)
      return;
    n.stop();
    const u = r.critical.droppable;
    e.droppable.getAllByType(u.type).forEach((p) => p.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, d = (u) => {
    r || (process.env.NODE_ENV !== "production" ? b(!1, "Should only be subscribed when a collection is occurring") : b());
    const p = r.critical.draggable;
    u.type === "ADDITION" && Bo(e, p, u.value) && n.add(u.value), u.type === "REMOVAL" && Bo(e, p, u.value) && n.remove(u.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (u) => {
      r && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start capturing critical dimensions as there is already a collection") : b());
      const p = e.draggable.getById(u.draggableId), v = e.droppable.getById(p.descriptor.droppableId), h = {
        draggable: p.descriptor,
        droppable: v.descriptor
      }, m = e.subscribe(d);
      return r = {
        critical: h,
        unsubscribe: m
      }, $d({
        critical: h,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: l
  };
}, fa = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Bd = (e) => {
  window.scrollBy(e.x, e.y);
};
const Fd = be((e) => cr(e).filter((t) => !(!t.isEnabled || !t.frame))), kd = (e, t) => Fd(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? b(!1, "Invalid result") : b()), Ki(n.frame.pageMarginBox)(e))) || null;
var jd = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return kd(e, r);
};
const kt = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var Gd = (e, t, r = () => kt) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, pa = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && pe(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, wn = 1, Wd = (e, t, r = () => kt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return wn;
  const i = 1 - pa({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, Ud = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return wn;
  const f = pa({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), c = e * n.ease(f);
  return Math.ceil(c);
}, Fo = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = Wd(e, t, o);
  return i === 0 ? 0 : n ? Math.max(Ud(i, r, o), wn) : i;
}, ko = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Gd(e, n, i);
  return t[n.end] < t[n.start] ? Fo({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Fo({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, zd = ({
  container: e,
  subject: t,
  proposedScroll: r
}) => {
  const n = t.height > e.height, o = t.width > e.width;
  return !o && !n ? r : o && n ? null : {
    x: o ? 0 : r.x,
    y: n ? 0 : r.y
  };
};
const Hd = Li((e) => e === 0 ? 0 : e);
var ma = ({
  dragStartTime: e,
  container: t,
  subject: r,
  center: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = {
    top: n.y - t.top,
    right: t.right - n.x,
    bottom: t.bottom - n.y,
    left: n.x - t.left
  }, s = ko({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: mn,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = ko({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Gi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = Hd({
    x: l,
    y: s
  });
  if (ot(d, ye))
    return null;
  const f = zd({
    container: t,
    subject: r,
    proposedScroll: d
  });
  return f ? ot(f, ye) ? null : f : null;
};
const Yd = Li((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Sn = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = xe(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return ot(i, ye) ? null : i;
  };
})(), ga = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Yd(r), i = Sn({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Dn = (e, t) => ga({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), qd = (e, t) => {
  if (!Dn(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Sn({
    current: n,
    max: r,
    change: t
  });
}, Nn = (e, t) => {
  const r = e.frame;
  return r ? ga({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, Kd = (e, t) => {
  const r = e.frame;
  return !r || !Nn(e, t) ? null : Sn({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var Xd = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = ma({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Dn(e, a) ? a : null;
}, Jd = ({
  droppable: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.frame;
  if (!a)
    return null;
  const s = ma({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Nn(e, s) ? s : null;
}, jo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, u = Xd({
      dragStartTime: t,
      viewport: c,
      subject: l,
      center: a,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (u) {
      n(u);
      return;
    }
  }
  const d = jd({
    center: a,
    destination: $e(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const f = Jd({
    dragStartTime: t,
    droppable: d,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(d.descriptor.id, f);
}, Zd = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => kt
}) => {
  const n = Vt(e), o = Vt(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fluid scroll if not dragging") : b());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: c
    } = i;
    jo({
      state: d,
      scrollWindow: n,
      scrollDroppable: o,
      dragStartTime: c,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (d) => {
      zt(), i && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start auto scrolling when already started") : b());
      const f = Date.now();
      let c = !1;
      const u = () => {
        c = !0;
      };
      jo({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: u,
        scrollDroppable: u,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: c
      }, Ht(), c && a(d);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, Qd = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, l) => {
    const d = xe(s.current.client.selection, l);
    e({
      client: d
    });
  }, o = (s, l) => {
    if (!Nn(s, l))
      return l;
    const d = Kd(s, l);
    if (!d)
      return t(s.descriptor.id, l), null;
    const f = Me(l, d);
    return t(s.descriptor.id, f), Me(l, f);
  }, i = (s, l, d) => {
    if (!s || !Dn(l, d))
      return d;
    const f = qd(l, d);
    if (!f)
      return r(d), null;
    const c = Me(d, f);
    return r(c), Me(d, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const d = $e(s.impact);
    d || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot perform a jump scroll when there is no destination") : b());
    const f = o(s.dimensions.droppables[d], l);
    if (!f)
      return;
    const c = s.viewport, u = i(s.isWindowScrollAllowed, c, f);
    u && n(s, u);
  };
}, ef = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = Zd({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = Qd({
    move: r,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (l) => {
      if (!(n().disabled || l.phase !== "DRAGGING")) {
        if (l.movementMode === "FLUID") {
          o.scroll(l);
          return;
        }
        l.scrollJumpRequest && i(l);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const bt = "data-rfd", yt = (() => {
  const e = `${bt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Zr = (() => {
  const e = `${bt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), tf = (() => {
  const e = `${bt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Go = {
  contextId: `${bt}-scroll-container-context-id`
}, rf = (e) => (t) => `[${t}="${e}"]`, It = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), nf = "pointer-events: none;";
var of = (e) => {
  const t = rf(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(yt.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: nf,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${At.outOfTheWay};
    `;
    return {
      selector: t(Zr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(tf.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, a = [n, r, o, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: It(a, "always"),
    resting: It(a, "resting"),
    dragging: It(a, "dragging"),
    dropAnimating: It(a, "dropAnimating"),
    userCancel: It(a, "userCancel")
  };
};
const af = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Qo : Ee;
var Le = af;
const Vr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find the head to append a style to") : b()), e;
}, Wo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function sf(e, t) {
  const r = X(() => of(e), [e]), n = Q(null), o = Q(null), i = L(be((c) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), u.textContent = c;
  }), []), a = L((c) => {
    const u = n.current;
    u || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), u.textContent = c;
  }, []);
  Le(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? b(!1, "style elements already mounted") : b());
    const c = Wo(t), u = Wo(t);
    return n.current = c, o.current = u, c.setAttribute(`${bt}-always`, e), u.setAttribute(`${bt}-dynamic`, e), Vr().appendChild(c), Vr().appendChild(u), a(r.always), i(r.resting), () => {
      const p = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot unmount ref as it is not set") : b()), Vr().removeChild(h), v.current = null;
      };
      p(n), p(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = L(() => i(r.dragging), [i, r.dragging]), l = L((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), d = L(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return X(() => ({
    dragging: s,
    dropping: l,
    resting: d
  }), [s, l, d]);
}
function va(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ha = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Yt(e) {
  return e instanceof ha(e).HTMLElement;
}
function ba(e, t) {
  const r = `[${yt.contextId}="${e}"]`, n = va(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && pe(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(yt.draggableId) === t);
  return o ? Yt(o) ? o : (process.env.NODE_ENV !== "production" && pe("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && pe(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function cf(e) {
  const t = Q({}), r = Q(null), n = Q(null), o = Q(!1), i = L(function(u, p) {
    const v = {
      id: u,
      focus: p
    };
    return t.current[u] = v, function() {
      const m = t.current;
      m[u] !== v && delete m[u];
    };
  }, []), a = L(function(u) {
    const p = ba(e, u);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = L(function(u, p) {
    r.current === u && (r.current = p);
  }, []), l = L(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const u = r.current;
      u && a(u);
    }));
  }, [a]), d = L(function(u) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(yt.draggableId) === u && (r.current = u);
  }, []);
  return Le(() => (o.current = !0, function() {
    o.current = !1;
    const u = n.current;
    u && cancelAnimationFrame(u);
  }), []), X(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, d, l, s]);
}
function lf() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(c) {
    return t.push(c), function() {
      const p = t.indexOf(c);
      p !== -1 && t.splice(p, 1);
    };
  }
  function n(c) {
    t.length && t.forEach((u) => u(c));
  }
  function o(c) {
    return e.draggables[c] || null;
  }
  function i(c) {
    const u = o(c);
    return u || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find draggable entry with id [${c}]`) : b()), u;
  }
  const a = {
    register: (c) => {
      e.draggables[c.descriptor.id] = c, n({
        type: "ADDITION",
        value: c
      });
    },
    update: (c, u) => {
      const p = e.draggables[u.descriptor.id];
      p && p.uniqueId === c.uniqueId && (delete e.draggables[u.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const u = c.descriptor.id, p = o(u);
      p && c.uniqueId === p.uniqueId && (delete e.draggables[u], e.droppables[c.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: c
      }));
    },
    getById: i,
    findById: o,
    exists: (c) => !!o(c),
    getAllByType: (c) => Object.values(e.draggables).filter((u) => u.descriptor.type === c)
  };
  function s(c) {
    return e.droppables[c] || null;
  }
  function l(c) {
    const u = s(c);
    return u || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot find droppable entry with id [${c}]`) : b()), u;
  }
  const d = {
    register: (c) => {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: (c) => {
      const u = s(c.descriptor.id);
      u && c.uniqueId === u.uniqueId && delete e.droppables[c.descriptor.id];
    },
    getById: l,
    findById: s,
    exists: (c) => !!s(c),
    getAllByType: (c) => Object.values(e.droppables).filter((u) => u.descriptor.type === c)
  };
  function f() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: d,
    subscribe: r,
    clean: f
  };
}
function uf() {
  const e = X(lf, []);
  return Ee(() => function() {
    W.version.startsWith("16") || W.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Cn = W.createContext(null), jt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.body") : b()), e;
};
const df = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var ff = df;
const pf = (e) => `rfd-announcement-${e}`;
function mf(e) {
  const t = X(() => pf(e), [e]), r = Q(null);
  return Ee(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), rt(i.style, ff), jt().appendChild(i), function() {
      setTimeout(function() {
        const l = jt();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), L((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && pe(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let gf = 0;
const ya = {
  separator: "::"
};
function vf(e, t = ya) {
  return X(() => `${e}${t.separator}${gf++}`, [t.separator, e]);
}
function hf(e, t = ya) {
  const r = W.useId();
  return X(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var On = "useId" in W ? hf : vf;
function bf({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function yf({
  contextId: e,
  text: t
}) {
  const r = On("hidden-text", {
    separator: "-"
  }), n = X(() => bf({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return Ee(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", jt().appendChild(i), function() {
      const s = jt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var fr = W.createContext(null), xf = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Ef = /(\d+)\.(\d+)\.(\d+)/, Uo = (e) => {
  const t = Ef.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? b(!1, `Unable to parse React version ${e}`) : b());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, wf = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Sf = (e, t) => {
  const r = Uo(e), n = Uo(t);
  wf(r, n) || process.env.NODE_ENV !== "production" && pe(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Mr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Df = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && pe(`
      No <!doctype html> found.

      ${Mr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && pe(`
      Unexpected <!doctype> found: (${t.name})

      ${Mr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && pe(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Mr}
    `);
};
function In(e) {
  process.env.NODE_ENV !== "production" && e();
}
function qt(e, t) {
  In(() => {
    Ee(() => {
      try {
        e();
      } catch (r) {
        Yr(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Nf() {
  qt(() => {
    Sf(xf.react, W.version), Df(document);
  }, []);
}
function _n(e) {
  const t = Q(e);
  return Ee(() => {
    t.current = e;
  }), t;
}
function Cf() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot claim lock as it is already claimed") : b());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot release lock when there is no lock") : b()), e = null;
  }
  function i() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: r,
    claim: n,
    release: o,
    tryAbandon: i
  };
}
function Gt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Of = 9, If = 13, Rn = 27, xa = 32, _f = 33, Rf = 34, Af = 35, Pf = 36, Tf = 37, Vf = 38, Mf = 39, $f = 40, Lf = {
  [If]: !0,
  [Of]: !0
};
var Ea = (e) => {
  Lf[e.keyCode] && e.preventDefault();
};
const Bf = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var pr = Bf;
const wa = 0, zo = 5;
function Ff(e, t) {
  return Math.abs(t.x - e.x) >= zo || Math.abs(t.y - e.y) >= zo;
}
const Ho = {
  type: "IDLE"
};
function kf({
  cancel: e,
  completed: t,
  getPhase: r,
  setPhase: n
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: i,
        clientX: a,
        clientY: s
      } = o;
      if (i !== wa)
        return;
      const l = {
        x: a,
        y: s
      }, d = r();
      if (d.type === "DRAGGING") {
        o.preventDefault(), d.actions.move(l);
        return;
      }
      d.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot be IDLE") : b());
      const f = d.point;
      if (!Ff(f, l))
        return;
      o.preventDefault();
      const c = d.actions.fluidLift(l);
      n({
        type: "DRAGGING",
        actions: c
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const i = r();
      if (i.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      r().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (r().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === Rn) {
        o.preventDefault(), e();
        return;
      }
      Ea(o);
    }
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      r().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const i = r();
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase") : b()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: pr,
    fn: e
  }];
}
function jf(e) {
  const t = Q(Ho), r = Q(nt), n = X(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== wa || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const u = e.findClosestDraggableId(c);
      if (!u)
        return;
      const p = e.tryGetLock(u, a, {
        sourceEvent: c
      });
      if (!p)
        return;
      c.preventDefault();
      const v = {
        x: c.clientX,
        y: c.clientY
      };
      r.current(), d(p, v);
    }
  }), [e]), o = X(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const c = e.findClosestDraggableId(f);
      if (!c)
        return;
      const u = e.findOptionsForDraggable(c);
      u && (u.shouldRespectForcePress || e.canGetLock(c) && f.preventDefault());
    }
  }), [e]), i = L(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = We(window, [o, n], c);
  }, [o, n]), a = L(() => {
    t.current.type !== "IDLE" && (t.current = Ho, r.current(), i());
  }, [i]), s = L(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = L(function() {
    const c = {
      capture: !0,
      passive: !1
    }, u = kf({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = We(window, u, c);
  }, [s, a]), d = L(function(c, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b()), t.current = {
      type: "PENDING",
      point: u,
      actions: c
    }, l();
  }, [l]);
  Le(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function Gf() {
}
const Wf = {
  [Rf]: !0,
  [_f]: !0,
  [Pf]: !0,
  [Af]: !0
};
function Uf(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Rn) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === xa) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === $f) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Vf) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Mf) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Tf) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Wf[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Ea(o);
    }
  }, {
    eventName: "mousedown",
    fn: r
  }, {
    eventName: "mouseup",
    fn: r
  }, {
    eventName: "click",
    fn: r
  }, {
    eventName: "touchstart",
    fn: r
  }, {
    eventName: "resize",
    fn: r
  }, {
    eventName: "wheel",
    fn: r,
    options: {
      passive: !0
    }
  }, {
    eventName: pr,
    fn: r
  }];
}
function zf(e) {
  const t = Q(Gf), r = X(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== xa)
        return;
      const a = e.findClosestDraggableId(i);
      if (!a)
        return;
      const s = e.tryGetLock(a, f, {
        sourceEvent: i
      });
      if (!s)
        return;
      i.preventDefault();
      let l = !0;
      const d = s.snapLift();
      t.current();
      function f() {
        l || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop capturing a keyboard drag when not capturing") : b()), l = !1, t.current(), n();
      }
      t.current = We(window, Uf(d, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = L(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = We(window, [r], i);
  }, [r]);
  Le(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const $r = {
  type: "IDLE"
}, Hf = 120, Yf = 0.15;
function qf({
  cancel: e,
  getPhase: t
}) {
  return [{
    eventName: "orientationchange",
    fn: e
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "contextmenu",
    fn: (r) => {
      r.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (r) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      r.keyCode === Rn && r.preventDefault(), e();
    }
  }, {
    eventName: pr,
    fn: e
  }];
}
function Kf({
  cancel: e,
  completed: t,
  getPhase: r
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (n) => {
      const o = r();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: i,
        clientY: a
      } = n.touches[0], s = {
        x: i,
        y: a
      };
      n.preventDefault(), o.actions.move(s);
    }
  }, {
    eventName: "touchend",
    fn: (n) => {
      const o = r();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      n.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (n) => {
      if (r().type !== "DRAGGING") {
        e();
        return;
      }
      n.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (n) => {
      const o = r();
      o.type === "IDLE" && (process.env.NODE_ENV, b());
      const i = n.touches[0];
      if (!i || !(i.force >= Yf))
        return;
      const s = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        s && e();
        return;
      }
      if (s) {
        if (o.hasMoved) {
          n.preventDefault();
          return;
        }
        e();
        return;
      }
      n.preventDefault();
    }
  }, {
    eventName: pr,
    fn: e
  }];
}
function Xf(e) {
  const t = Q($r), r = Q(nt), n = L(function() {
    return t.current;
  }, []), o = L(function(p) {
    t.current = p;
  }, []), i = X(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const v = e.findClosestDraggableId(p);
      if (!v)
        return;
      const h = e.tryGetLock(v, s, {
        sourceEvent: p
      });
      if (!h)
        return;
      const m = p.touches[0], {
        clientX: x,
        clientY: w
      } = m, S = {
        x,
        y: w
      };
      r.current(), c(h, S);
    }
  }), [e]), a = L(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = We(window, [i], p);
  }, [i]), s = L(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o($r), r.current(), a());
  }, [a, o]), l = L(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), d = L(function() {
    const p = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: l,
      completed: s,
      getPhase: n
    }, h = We(window, Kf(v), p), m = We(window, qf(v), p);
    r.current = function() {
      h(), m();
    };
  }, [l, n, s]), f = L(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, `Cannot start dragging from phase ${p.type}`) : b());
    const v = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [n, o]), c = L(function(p, v) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b());
    const h = setTimeout(f, Hf);
    o({
      type: "PENDING",
      point: v,
      actions: p,
      longPressTimerId: h
    }), d();
  }, [d, n, o, f]);
  Le(function() {
    return a(), function() {
      r.current();
      const v = n();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o($r));
    };
  }, [n, a, o]), Le(function() {
    return We(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
function Jf(e) {
  In(() => {
    const t = _n(e);
    qt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot change the amount of sensor hooks after mounting") : b(!1));
    });
  });
}
const Zf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Sa(e, t) {
  if (t == null)
    return !1;
  if (Zf.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Sa(e, t.parentElement);
}
function Qf(e, t) {
  const r = t.target;
  return Yt(r) ? Sa(e, r) : !1;
}
var ep = (e) => qe(e.getBoundingClientRect()).center;
function tp(e) {
  return e instanceof ha(e).Element;
}
const rp = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Da(e, t) {
  return e == null ? null : e[rp](t) ? e : Da(e.parentElement, t);
}
function np(e, t) {
  return e.closest ? e.closest(t) : Da(e, t);
}
function op(e) {
  return `[${yt.contextId}="${e}"]`;
}
function ip(e, t) {
  const r = t.target;
  if (!tp(r))
    return process.env.NODE_ENV !== "production" && pe("event.target must be a Element"), null;
  const n = op(e), o = np(r, n);
  return o ? Yt(o) ? o : (process.env.NODE_ENV !== "production" && pe("drag handle must be a HTMLElement"), null) : null;
}
function ap(e, t) {
  const r = ip(e, t);
  return r ? r.getAttribute(yt.draggableId) : null;
}
function sp(e, t) {
  const r = `[${Zr.contextId}="${e}"]`, o = va(document, r).find((i) => i.getAttribute(Zr.id) === t);
  return o ? Yt(o) ? o : (process.env.NODE_ENV !== "production" && pe("Draggable element is not a HTMLElement"), null) : null;
}
function cp(e) {
  e.preventDefault();
}
function Xt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && pe(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && pe(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Na({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !fa(t.getState(), n)) : (process.env.NODE_ENV !== "production" && pe(`Unable to find draggable with id: ${n}`), !1);
}
function lp({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Na({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), d = sp(t, l.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && pe(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && Qf(d, a))
    return null;
  const f = e.claim(i || nt);
  let c = "PRE_DRAG";
  function u() {
    return l.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function v(y, N) {
    Xt({
      expected: y,
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(N());
  }
  const h = v.bind(null, "DRAGGING");
  function m(y) {
    function N() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (N(), process.env.NODE_ENV !== "production" ? b(!1, `Cannot lift in phase ${c}`) : b()), r.dispatch(Bu(y.liftActionArgs)), c = "DRAGGING";
    function R(C, B = {
      shouldBlockNextClick: !1
    }) {
      if (y.cleanup(), B.shouldBlockNextClick) {
        const F = We(window, [{
          eventName: "click",
          fn: cp,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(F);
      }
      N(), r.dispatch(oa({
        reason: C
      }));
    }
    return {
      isActive: () => Xt({
        expected: "DRAGGING",
        phase: c,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: (C) => R("DROP", C),
      cancel: (C) => R("CANCEL", C),
      ...y.actions
    };
  }
  function x(y) {
    const N = Vt((C) => {
      h(() => na({
        client: C
      }));
    });
    return {
      ...m({
        liftActionArgs: {
          id: o,
          clientSelection: y,
          movementMode: "FLUID"
        },
        cleanup: () => N.cancel(),
        actions: {
          move: N
        }
      }),
      move: N
    };
  }
  function w() {
    const y = {
      moveUp: () => h(Yu),
      moveRight: () => h(Ku),
      moveDown: () => h(qu),
      moveLeft: () => h(Xu)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: ep(d),
        movementMode: "SNAP"
      },
      cleanup: nt,
      actions: y
    });
  }
  function S() {
    Xt({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Xt({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: u,
    fluidLift: x,
    snapLift: w,
    abort: S
  };
}
const up = [jf, zf, Xf];
function dp({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? up : [], ...n || []], a = Be(() => Cf())[0], s = L(function(m, x) {
    Gt(m) && !Gt(x) && a.tryAbandon();
  }, [a]);
  Le(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(m, w), m = w;
    });
  }, [a, t, s]), Le(() => a.tryAbandon, [a.tryAbandon]);
  const l = L((h) => Na({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: h
  }), [a, r, t]), d = L((h, m, x) => lp({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: x && x.sourceEvent ? x.sourceEvent : null
  }), [e, a, r, t]), f = L((h) => ap(e, h), [e]), c = L((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), u = L(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(yn()));
  }, [a, t]), p = L(() => a.isClaimed(), [a]), v = X(() => ({
    canGetLock: l,
    tryGetLock: d,
    findClosestDraggableId: f,
    findOptionsForDraggable: c,
    tryReleaseLock: u,
    isLockClaimed: p
  }), [l, d, f, c, u, p]);
  Jf(i);
  for (let h = 0; h < i.length; h++)
    i[h](v);
}
const fp = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    W.version.startsWith("16") || W.version.startsWith("17") ? r() : ti(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), pp = (e) => ({
  ...kt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...kt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function _t(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find store from lazy ref") : b()), e.current;
}
function mp(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = Q(null);
  Nf();
  const s = _n(e), l = L(() => fp(s.current), [s]), d = L(() => pp(s.current), [s]), f = mf(t), c = yf({
    contextId: t,
    text: i
  }), u = sf(t, o), p = L((F) => {
    _t(a).dispatch(F);
  }, []), v = X(() => to({
    publishWhileDragging: ku,
    updateDroppableScroll: Gu,
    updateDroppableIsEnabled: Wu,
    updateDroppableIsCombineEnabled: Uu,
    collectionStarting: ju
  }, p), [p]), h = uf(), m = X(() => Ld(h, v), [h, v]), x = X(() => ef({
    scrollWindow: Bd,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: d,
    ...to({
      move: na
    }, p)
  }), [m.scrollDroppable, p, d]), w = cf(t), S = X(() => Td({
    announce: f,
    autoScroller: x,
    dimensionMarshal: m,
    focusMarshal: w,
    getResponders: l,
    styleMarshal: u
  }), [f, x, m, w, l, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== S && process.env.NODE_ENV !== "production" && pe("unexpected store change"), a.current = S;
  const E = L(() => {
    const F = _t(a);
    F.getState().phase !== "IDLE" && F.dispatch(yn());
  }, []), y = L(() => {
    const F = _t(a).getState();
    return F.phase === "DROP_ANIMATING" ? !0 : F.phase === "IDLE" ? !1 : F.isDragging;
  }, []), N = X(() => ({
    isDragging: y,
    tryAbort: E
  }), [y, E]);
  r(N);
  const R = L((F) => fa(_t(a).getState(), F), []), C = L(() => lt(_t(a).getState()), []), B = X(() => ({
    marshal: m,
    focus: w,
    contextId: t,
    canLift: R,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: h
  }), [t, m, c, w, R, C, h]);
  return dp({
    contextId: t,
    store: S,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Ee(() => E, [E]), W.createElement(fr.Provider, {
    value: B
  }, W.createElement(ul, {
    context: Cn,
    store: S
  }, e.children));
}
let gp = 0;
function vp() {
  return X(() => `${gp++}`, []);
}
function hp() {
  return W.useId();
}
var bp = "useId" in W ? hp : vp;
function yp(e) {
  const t = bp(), r = e.dragHandleUsageInstructions || Zt.dragHandleUsageInstructions;
  return W.createElement(Cl, null, (n) => W.createElement(mp, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: n,
    dragHandleUsageInstructions: r,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const Yo = {
  dragging: 5e3,
  dropAnimating: 4500
}, xp = (e, t) => t ? At.drop(t.duration) : e ? At.snap : At.fluid, Ep = (e, t) => {
  if (e)
    return t ? Ft.opacity.drop : Ft.opacity.combining;
}, wp = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Sp(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = wp(e), l = !!i, d = l ? Xr.drop(n, a) : Xr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: xp(s, i),
    transform: d,
    opacity: Ep(a, l),
    zIndex: l ? Yo.dropAnimating : Yo.dragging,
    pointerEvents: "none"
  };
}
function Dp(e) {
  return {
    transform: Xr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Np(e) {
  return e.type === "DRAGGING" ? Sp(e) : Dp(e);
}
function Cp(e, t, r = ye) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Pi(o, n), a = nr(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: n.display
  }, l = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: s,
    displaceBy: l,
    client: i,
    page: a
  };
}
function Op(e) {
  const t = On("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = X(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = L((p) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get dimension when no ref is set") : b()), Cp(r, v, p);
  }, [r, o]), f = X(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: d
  }), [r, d, l, t]), c = Q(f), u = Q(!0);
  Le(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Le(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const p = c.current;
    c.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var An = W.createContext(null);
function Ca(e) {
  e && Yt(e) || (process.env.NODE_ENV !== "production" ? b(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : b());
}
function Ip(e, t, r) {
  qt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? b(!1, "Draggable requires a draggableId") : b(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : b(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? b(!1, `${n(o)} requires an integer index prop`) : b(!1)), e.mapped.type !== "DRAGGING" && (Ca(r()), e.isEnabled && (ba(t, o) || (process.env.NODE_ENV !== "production" ? b(!1, `${n(o)} Unable to find drag handle`) : b(!1))));
  });
}
function _p(e) {
  In(() => {
    const t = Q(e);
    qt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Draggable isClone prop value changed during component life") : b(!1));
    }, [e]);
  });
}
function ar(e) {
  const t = ei(e);
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find required context") : b()), t;
}
function Rp(e) {
  e.preventDefault();
}
const Ap = (e) => {
  const t = Q(null), r = L((N = null) => {
    t.current = N;
  }, []), n = L(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = ar(fr), {
    type: s,
    droppableId: l
  } = ar(An), d = X(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: f,
    draggableId: c,
    isEnabled: u,
    shouldRespectForcePress: p,
    canDragInteractiveElements: v,
    isClone: h,
    mapped: m,
    dropAnimationFinished: x
  } = e;
  if (Ip(e, o, n), _p(h), !h) {
    const N = X(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: u
    }), [d, a, n, v, p, u]);
    Op(N);
  }
  const w = X(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Rp
  } : null, [o, i, c, u]), S = L((N) => {
    m.type === "DRAGGING" && m.dropping && N.propertyName === "transform" && (W.version.startsWith("16") || W.version.startsWith("17") ? x() : ti(x));
  }, [x, m]), E = X(() => {
    const N = Np(m), R = m.type === "DRAGGING" && m.dropping ? S : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: N,
        onTransitionEnd: R
      },
      dragHandleProps: w
    };
  }, [o, w, c, m, S, r]), y = X(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return W.createElement(W.Fragment, null, f(E, m.snapshot, y));
};
var Pp = Ap, Oa = (e, t) => e === t, Ia = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Tp = (e) => e.combine ? e.combine.draggableId : null, Vp = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Mp() {
  const e = be((o, i) => ({
    x: o,
    y: i
  })), t = be((o, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = be((o, i, a, s, l = null, d = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: l,
      combineWith: d,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: f,
      snapshot: t(i, s, l, d, null)
    }
  }));
  return (o, i) => {
    if (Gt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = $e(o.impact), d = Vp(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, d, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], d = a.result, f = d.mode, c = Ia(d), u = Tp(d), v = {
        duration: o.dropDuration,
        curve: En.drop,
        moveTo: o.newHomeClientOffset,
        opacity: u ? Ft.opacity.drop : null,
        scale: u ? Ft.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
          dropping: v,
          draggingOver: c,
          combineWith: u,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, s, c, u, v)
        }
      };
    }
    return null;
  };
}
function _a(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const $p = {
  mapped: {
    type: "SECONDARY",
    offset: ye,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: _a(null)
  }
};
function Lp() {
  const e = be((a, s) => ({
    x: a,
    y: s
  })), t = be(_a), r = be((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(ye, a, !0) : null, o = (a, s, l, d) => {
    const f = l.displaced.visible[a], c = !!(d.inVirtualList && d.effected[a]), u = lr(l), p = u && u.draggableId === a ? s : null;
    if (!f) {
      if (!c)
        return n(p);
      if (l.displaced.invisible[a])
        return null;
      const m = Et(d.displacedBy.point), x = e(m.x, m.y);
      return r(x, p, !0);
    }
    if (c)
      return n(p);
    const v = l.displacedBy.point, h = e(v.x, v.y);
    return r(h, p, f.shouldAnimate);
  };
  return (a, s) => {
    if (Gt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const Bp = () => {
  const e = Mp(), t = Lp();
  return (n, o) => e(n, o) || t(n, o) || $p;
}, Fp = {
  dropAnimationFinished: ia
}, kp = Ri(Bp, Fp, null, {
  context: Cn,
  areStatePropsEqual: Oa
})(Pp);
var jp = kp;
function Ra(e) {
  return ar(An).isUsingCloneFor === e.draggableId && !e.isClone ? null : W.createElement(jp, e);
}
function Gp(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return W.createElement(Ra, rt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Pn = (e) => (t) => e === t, Wp = Pn("scroll"), Up = Pn("auto"), zp = Pn("visible"), qo = (e, t) => t(e.overflowX) || t(e.overflowY), Hp = (e, t) => t(e.overflowX) && t(e.overflowY), Aa = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return qo(r, Wp) || qo(r, Up);
}, Yp = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = jt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, b()), !Aa(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Hp(n, zp) || process.env.NODE_ENV !== "production" && pe(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Tn = (e) => e == null ? null : e === document.body ? Yp() ? e : null : e === document.documentElement ? null : Aa(e) ? e : Tn(e.parentElement);
var qp = (e) => {
  !e || !Tn(e.parentElement) || process.env.NODE_ENV !== "production" && pe(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Qr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Pa = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Pa(e.parentElement) : !1;
var Kp = (e) => {
  const t = Tn(e), r = Pa(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Xp = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: n,
  direction: o,
  client: i,
  page: a,
  closest: s
}) => {
  const l = (() => {
    if (!s)
      return null;
    const {
      scrollSize: u,
      client: p
    } = s, v = la({
      scrollHeight: u.scrollHeight,
      scrollWidth: u.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: u,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: v,
        diff: {
          value: ye,
          displacement: ye
        }
      }
    };
  })(), d = o === "vertical" ? mn : Gi, f = ht({
    page: a,
    withPlaceholder: null,
    axis: d,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: d,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: f
  };
};
const Jp = (e, t) => {
  const r = Ti(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = un({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return dn({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Zp = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, d = Jp(e, l), f = nr(d, n), c = (() => {
    if (!l)
      return null;
    const p = Ti(l), v = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: nr(p, n),
      scroll: Qr(l),
      scrollSize: v,
      shouldClipSubject: s
    };
  })();
  return Xp({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: d,
    page: f,
    closest: c
  });
};
const Qp = {
  passive: !1
}, em = {
  passive: !0
};
var Ko = (e) => e.shouldPublishImmediately ? Qp : em;
const Jt = (e) => e && e.env.closestScrollable || null;
function tm(e) {
  const t = Q(null), r = ar(fr), n = On("droppable"), {
    registry: o,
    marshal: i
  } = r, a = _n(e), s = X(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = Q(s), d = X(() => be((E, y) => {
    t.current || (process.env.NODE_ENV !== "production" ? b(!1, "Can only update scroll when dragging") : b());
    const N = {
      x: E,
      y
    };
    i.updateDroppableScroll(s.id, N);
  }), [s.id, i]), f = L(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? ye : Qr(E.env.closestScrollable);
  }, []), c = L(() => {
    const E = f();
    d(E.x, E.y);
  }, [f, d]), u = X(() => Vt(c), [c]), p = L(() => {
    const E = t.current, y = Jt(E);
    if (E && y || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find scroll options while scrolling") : b()), E.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    u();
  }, [u, c]), v = L((E, y) => {
    t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect a droppable while a drag is occurring") : b());
    const N = a.current, R = N.getDroppableRef();
    R || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect without a droppable ref") : b());
    const C = Kp(R), B = {
      ref: R,
      descriptor: s,
      env: C,
      scrollOptions: y
    };
    t.current = B;
    const F = Zp({
      ref: R,
      descriptor: s,
      env: C,
      windowScroll: E,
      direction: N.direction,
      isDropDisabled: N.isDropDisabled,
      isCombineEnabled: N.isCombineEnabled,
      shouldClipSubject: !N.ignoreContainerClipping
    }), U = C.closestScrollable;
    return U && (U.setAttribute(Go.contextId, r.contextId), U.addEventListener("scroll", p, Ko(B.scrollOptions)), process.env.NODE_ENV !== "production" && qp(U)), F;
  }, [r.contextId, s, p, a]), h = L(() => {
    const E = t.current, y = Jt(E);
    return E && y || (process.env.NODE_ENV !== "production" ? b(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : b()), Qr(y);
  }, []), m = L(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop drag when no active drag") : b());
    const y = Jt(E);
    t.current = null, y && (u.cancel(), y.removeAttribute(Go.contextId), y.removeEventListener("scroll", p, Ko(E.scrollOptions)));
  }, [p, u]), x = L((E) => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll when there is no drag") : b());
    const N = Jt(y);
    N || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll a droppable with no closest scrollable") : b()), N.scrollTop += E.y, N.scrollLeft += E.x;
  }, []), w = X(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: x
  }), [m, v, h, x]), S = X(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  Le(() => (l.current = S.descriptor, o.droppable.register(S), () => {
    t.current && (process.env.NODE_ENV !== "production" && pe("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(S);
  }), [w, s, m, S, i, o.droppable]), Le(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Le(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Lr() {
}
const Xo = {
  width: 0,
  height: 0,
  margin: Tl
}, rm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Xo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, nm = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = rm({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: n.width,
    height: n.height,
    marginTop: n.margin.top,
    marginRight: n.margin.right,
    marginBottom: n.margin.bottom,
    marginLeft: n.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? At.placeholder : null
  };
}, om = (e) => {
  const t = Q(null), r = L(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Be(e.animate === "open");
  Ee(() => s ? n !== "open" ? (r(), l(!1), Lr) : t.current ? Lr : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Lr, [n, s, r]);
  const d = L((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = nm({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return W.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var im = W.memo(om);
function Br(e) {
  return typeof e == "boolean";
}
function Fr(e, t) {
  t.forEach((r) => r(e));
}
const am = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? b(!1, "A Droppable requires a droppableId prop") : b()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : b());
}, function({
  props: t
}) {
  Br(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isDropDisabled must be a boolean") : b()), Br(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isCombineEnabled must be a boolean") : b()), Br(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? b(!1, "ignoreContainerClipping must be a boolean") : b());
}, function({
  getDroppableRef: t
}) {
  Ca(t());
}], sm = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && pe(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], cm = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? b(!1, "Must provide a clone render function (renderClone) for virtual lists") : b());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? b(!1, "Expected virtual list to not have a placeholder") : b());
}];
function lm(e) {
  qt(() => {
    Fr(e, am), e.props.mode === "standard" && Fr(e, sm), e.props.mode === "virtual" && Fr(e, cm);
  });
}
class um extends W.PureComponent {
  constructor(...t) {
    super(...t), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, r) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : r.isVisible ? {
      isVisible: !0,
      data: r.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const dm = (e) => {
  const t = ei(fr);
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find app context") : b());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = Q(null), i = Q(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: d,
    direction: f,
    ignoreContainerClipping: c,
    isDropDisabled: u,
    isCombineEnabled: p,
    snapshot: v,
    useClone: h,
    updateViewportMaxScroll: m,
    getContainerForClone: x
  } = e, w = L(() => o.current, []), S = L((A = null) => {
    o.current = A;
  }, []), E = L(() => i.current, []), y = L((A = null) => {
    i.current = A;
  }, []);
  lm({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: E
  });
  const N = L(() => {
    n() && m({
      maxScroll: da()
    });
  }, [n, m]);
  tm({
    droppableId: s,
    type: l,
    mode: d,
    direction: f,
    isDropDisabled: u,
    isCombineEnabled: p,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const R = X(() => W.createElement(um, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: A,
    data: H,
    animate: J
  }) => W.createElement(im, {
    placeholder: H,
    onClose: A,
    innerRef: y,
    animate: J,
    contextId: r,
    onTransitionEnd: N
  })), [r, N, e.placeholder, e.shouldAnimatePlaceholder, y]), C = X(() => ({
    innerRef: S,
    placeholder: R,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, R, S]), B = h ? h.dragging.draggableId : null, F = X(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: B
  }), [s, B, l]);
  function U() {
    if (!h)
      return null;
    const {
      dragging: A,
      render: H
    } = h, J = W.createElement(Ra, {
      draggableId: A.draggableId,
      index: A.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (re, M) => H(re, M, A));
    return Qa.createPortal(J, x());
  }
  return W.createElement(An.Provider, {
    value: F
  }, a(C, v), U());
};
var fm = dm;
function pm() {
  return document.body || (process.env.NODE_ENV !== "production" ? b(!1, "document.body is not ready") : b()), document.body;
}
const Jo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: pm
}, Ta = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Jo)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Jo[r]
    });
  return t;
}, kr = (e, t) => e === t.droppable.type, Zo = (e, t) => t.draggables[e.draggable.id], mm = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, r = be((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = be((i, a, s, l, d, f) => {
    const c = d.descriptor.id;
    if (d.descriptor.droppableId === i) {
      const v = f ? {
        render: f,
        dragging: r(d.descriptor)
      } : null, h = {
        isDraggingOver: s,
        draggingOverWith: s ? c : null,
        draggingFromThisWith: c,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: d.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
        useClone: v
      };
    }
    if (!a)
      return t;
    if (!l)
      return e;
    const p = {
      isDraggingOver: s,
      draggingOverWith: c,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: d.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, a) => {
    const s = Ta(a), l = s.droppableId, d = s.type, f = !s.isDropDisabled, c = s.renderClone;
    if (Gt(i)) {
      const u = i.critical;
      if (!kr(d, u))
        return t;
      const p = Zo(u, i.dimensions), v = $e(i.impact) === l;
      return n(l, f, v, v, p, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!kr(d, u.critical))
        return t;
      const p = Zo(u.critical, i.dimensions);
      return n(l, f, Ia(u.result) === l, $e(u.impact) === l, p, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!kr(d, u.critical))
        return t;
      const p = $e(u.impact) === l, v = !!(u.impact.at && u.impact.at.type === "COMBINE"), h = u.critical.droppable.id === l;
      return p ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, gm = {
  updateViewportMaxScroll: Hu
}, vm = Ri(mm, gm, (e, t, r) => ({
  ...Ta(r),
  ...e,
  ...t
}), {
  context: Cn,
  areStatePropsEqual: Oa
})(fm);
var hm = vm;
const Im = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: n,
  isDragDisabled: o = !0,
  isLoading: i,
  onRowClick: a,
  itemClickKey: s,
  haveLinks: l,
  className: d
}) => {
  const [f, c] = Be(null), [u, p] = Be(e);
  Ee(() => {
    p(e);
  }, [e]);
  const v = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", h = (x) => {
    a == null || a(x), c(x);
  }, m = (x) => {
    if (!x.destination || !(u != null && u.length)) return;
    const w = x.source.index, S = x.destination.index, E = [...u], [y] = E.splice(w, 1);
    E.splice(S, 0, y), p(E);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ O.jsxs("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ O.jsx("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ O.jsx("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ O.jsx(ri, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ O.jsx(fi, { className: d, children: /* @__PURE__ */ O.jsx("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ O.jsx("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ O.jsx(yp, { onDragEnd: m, children: /* @__PURE__ */ O.jsx(hm, { droppableId: "dropArray", direction: "vertical", children: (x) => /* @__PURE__ */ O.jsxs("table", { className: "w-full", children: [
    /* @__PURE__ */ O.jsx("thead", { children: /* @__PURE__ */ O.jsx("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((w, S) => /* @__PURE__ */ O.jsx(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === w.name.find((E) => E) ? `-${w.name.find((E) => E) ?? ""}` : w.name.find((E) => E) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === w.name.find((E) => E) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: w.title
      },
      S
    )) }) }),
    /* @__PURE__ */ O.jsxs(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...x.droppableProps,
        ref: x.innerRef,
        children: [
          u == null ? void 0 : u.map((w, S) => {
            var E;
            return /* @__PURE__ */ O.jsx(
              Gp,
              {
                isDragDisabled: o,
                draggableId: (E = w == null ? void 0 : w.id) == null ? void 0 : E.toString(),
                index: S,
                children: (y) => {
                  const N = {
                    ...y.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ O.jsx(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === u[S] && v}`,
                      onClick: () => h(
                        s ? w[s] : w.id
                      ),
                      ref: y.innerRef,
                      ...y.draggableProps,
                      ...y.dragHandleProps,
                      style: N,
                      children: t.map((R, C) => {
                        var F;
                        let B = (F = R == null ? void 0 : R.name) == null ? void 0 : F.reduce(
                          (U, A) => U == null ? void 0 : U[A],
                          u == null ? void 0 : u[S]
                        );
                        return /* @__PURE__ */ O.jsx(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${l && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: R.transform ? R.transform(B, S) : B
                          },
                          C
                        );
                      })
                    }
                  );
                }
              },
              w == null ? void 0 : w.id
            );
          }),
          x.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, _m = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ O.jsx(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Rm = () => {
  const e = Q(null);
  return [() => {
    var r;
    return (r = e.current) == null ? void 0 : r.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, e];
};
export {
  xm as Button,
  Em as Checkbox,
  wm as Chips,
  en as ErrorText,
  Qt as Icon,
  Sm as Input,
  Dm as List,
  ri as Loader,
  Nm as MultiSelectSearch,
  Cm as Search,
  Om as Select,
  Im as Table,
  _m as Textarea,
  fi as Wrapper,
  bi as useDebounce,
  Rm as useScroll
};
