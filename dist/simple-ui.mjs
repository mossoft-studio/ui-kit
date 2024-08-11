import * as ee from "react";
import W, { useState as Me, useEffect as Ee, useRef as Q, useMemo as Ka, useLayoutEffect as Xo, useContext as Jo } from "react";
import Xa, { unstable_batchedUpdates as Ja, flushSync as Zo } from "react-dom";
function Za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fr = { exports: {} }, wt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Qa() {
  if (kn) return wt;
  kn = 1;
  var e = W, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, d) {
    var f, c = {}, u = null, p = null;
    d !== void 0 && (u = "" + d), l.key !== void 0 && (u = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (f in l) n.call(l, f) && !i.hasOwnProperty(f) && (c[f] = l[f]);
    if (s && s.defaultProps) for (f in l = s.defaultProps, l) c[f] === void 0 && (c[f] = l[f]);
    return { $$typeof: t, type: s, key: u, ref: p, props: c, _owner: o.current };
  }
  return wt.Fragment = r, wt.jsx = a, wt.jsxs = a, wt;
}
var St = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function es() {
  return jn || (jn = 1, process.env.NODE_ENV !== "production" && function() {
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
    function Y(g) {
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
            return k !== null ? k : Y(g.type) || "Memo";
          case u: {
            var ne = g, de = ne._payload, Z = ne._init;
            try {
              return Y(Z(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, te = 0, $, L, j, K, re, z, le;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Le() {
      {
        if (te === 0) {
          $ = console.log, L = console.info, j = console.warn, K = console.error, re = console.group, z = console.groupCollapsed, le = console.groupEnd;
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
        te++;
      }
    }
    function Ce() {
      {
        if (te--, te === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, g, {
              value: $
            }),
            info: J({}, g, {
              value: L
            }),
            warn: J({}, g, {
              value: j
            }),
            error: J({}, g, {
              value: K
            }),
            group: J({}, g, {
              value: re
            }),
            groupCollapsed: J({}, g, {
              value: z
            }),
            groupEnd: J({}, g, {
              value: le
            })
          });
        }
        te < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = x.ReactCurrentDispatcher, Be;
    function Oe(g, D, _) {
      {
        if (Be === void 0)
          try {
            throw Error();
          } catch (ne) {
            var k = ne.stack.trim().match(/\n( *(at )?)/);
            Be = k && k[1] || "";
          }
        return `
` + Be + g;
      }
    }
    var Ie = !1, _e;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      _e = new Ze();
    }
    function I(g, D) {
      if (!g || Ie)
        return "";
      {
        var _ = _e.get(g);
        if (_ !== void 0)
          return _;
      }
      var k;
      Ie = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = Pe.current, Pe.current = null, Le();
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
            } catch (Ke) {
              k = Ke;
            }
            Reflect.construct(g, [], Z);
          } else {
            try {
              Z.call();
            } catch (Ke) {
              k = Ke;
            }
            g.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            k = Ke;
          }
          g();
        }
      } catch (Ke) {
        if (Ke && k && typeof Ke.stack == "string") {
          for (var q = Ke.stack.split(`
`), De = k.stack.split(`
`), ge = q.length - 1, ve = De.length - 1; ge >= 1 && ve >= 0 && q[ge] !== De[ve]; )
            ve--;
          for (; ge >= 1 && ve >= 0; ge--, ve--)
            if (q[ge] !== De[ve]) {
              if (ge !== 1 || ve !== 1)
                do
                  if (ge--, ve--, ve < 0 || q[ge] !== De[ve]) {
                    var Fe = `
` + q[ge].replace(" at new ", " at ");
                    return g.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", g.displayName)), typeof g == "function" && _e.set(g, Fe), Fe;
                  }
                while (ge >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, Pe.current = de, Ce(), Error.prepareStackTrace = ne;
      }
      var mt = g ? g.displayName || g.name : "", Fn = mt ? Oe(mt) : "";
      return typeof g == "function" && _e.set(g, Fn), Fn;
    }
    function Se(g, D, _) {
      return I(g, !1);
    }
    function T(g) {
      var D = g.prototype;
      return !!(D && D.isReactComponent);
    }
    function Re(g, D, _) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return I(g, T(g));
      if (typeof g == "string")
        return Oe(g);
      switch (g) {
        case d:
          return Oe("Suspense");
        case f:
          return Oe("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            return Se(g.render);
          case c:
            return Re(g.type, D, _);
          case u: {
            var k = g, ne = k._payload, de = k._init;
            try {
              return Re(de(ne), D, _);
            } catch {
            }
          }
        }
      return "";
    }
    var We = Object.prototype.hasOwnProperty, P = {}, V = x.ReactDebugCurrentFrame;
    function G(g) {
      if (g) {
        var D = g._owner, _ = Re(g.type, g._source, D ? D.type : null);
        V.setExtraStackFrame(_);
      } else
        V.setExtraStackFrame(null);
    }
    function fe(g, D, _, k, ne) {
      {
        var de = Function.call.bind(We);
        for (var Z in g)
          if (de(g, Z)) {
            var q = void 0;
            try {
              if (typeof g[Z] != "function") {
                var De = Error((k || "React class") + ": " + _ + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw De.name = "Invariant Violation", De;
              }
              q = g[Z](D, Z, k, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              q = ge;
            }
            q && !(q instanceof Error) && (G(ne), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", _, Z, typeof q), G(null)), q instanceof Error && !(q.message in P) && (P[q.message] = !0, G(ne), w("Failed %s type: %s", _, q.message), G(null));
          }
      }
    }
    var we = Array.isArray;
    function ue(g) {
      return we(g);
    }
    function ce(g) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, _ = D && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return _;
      }
    }
    function Ue(g) {
      try {
        return ze(g), !1;
      } catch {
        return !0;
      }
    }
    function ze(g) {
      return "" + g;
    }
    function He(g) {
      if (Ue(g))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ce(g)), ze(g);
    }
    var qe = x.ReactCurrentOwner, Ta = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, An, Pn, pr;
    pr = {};
    function Va(g) {
      if (We.call(g, "ref")) {
        var D = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function $a(g) {
      if (We.call(g, "key")) {
        var D = Object.getOwnPropertyDescriptor(g, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Ma(g, D) {
      if (typeof g.ref == "string" && qe.current && D && qe.current.stateNode !== D) {
        var _ = Y(qe.current.type);
        pr[_] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(qe.current.type), g.ref), pr[_] = !0);
      }
    }
    function La(g, D) {
      {
        var _ = function() {
          An || (An = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        _.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Ba(g, D) {
      {
        var _ = function() {
          Pn || (Pn = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        _.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Fa = function(g, D, _, k, ne, de, Z) {
      var q = {
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
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function ka(g, D, _, k, ne) {
      {
        var de, Z = {}, q = null, De = null;
        _ !== void 0 && (He(_), q = "" + _), $a(D) && (He(D.key), q = "" + D.key), Va(D) && (De = D.ref, Ma(D, ne));
        for (de in D)
          We.call(D, de) && !Ta.hasOwnProperty(de) && (Z[de] = D[de]);
        if (g && g.defaultProps) {
          var ge = g.defaultProps;
          for (de in ge)
            Z[de] === void 0 && (Z[de] = ge[de]);
        }
        if (q || De) {
          var ve = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          q && La(Z, ve), De && Ba(Z, ve);
        }
        return Fa(g, q, De, ne, k, qe.current, Z);
      }
    }
    var mr = x.ReactCurrentOwner, Tn = x.ReactDebugCurrentFrame;
    function pt(g) {
      if (g) {
        var D = g._owner, _ = Re(g.type, g._source, D ? D.type : null);
        Tn.setExtraStackFrame(_);
      } else
        Tn.setExtraStackFrame(null);
    }
    var gr;
    gr = !1;
    function vr(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function Vn() {
      {
        if (mr.current) {
          var g = Y(mr.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function ja(g) {
      return "";
    }
    var $n = {};
    function Ga(g) {
      {
        var D = Vn();
        if (!D) {
          var _ = typeof g == "string" ? g : g.displayName || g.name;
          _ && (D = `

Check the top-level render call using <` + _ + ">.");
        }
        return D;
      }
    }
    function Mn(g, D) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var _ = Ga(D);
        if ($n[_])
          return;
        $n[_] = !0;
        var k = "";
        g && g._owner && g._owner !== mr.current && (k = " It was passed a child from " + Y(g._owner.type) + "."), pt(g), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, k), pt(null);
      }
    }
    function Ln(g, D) {
      {
        if (typeof g != "object")
          return;
        if (ue(g))
          for (var _ = 0; _ < g.length; _++) {
            var k = g[_];
            vr(k) && Mn(k, D);
          }
        else if (vr(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var ne = m(g);
          if (typeof ne == "function" && ne !== g.entries)
            for (var de = ne.call(g), Z; !(Z = de.next()).done; )
              vr(Z.value) && Mn(Z.value, D);
        }
      }
    }
    function Wa(g) {
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
          var k = Y(D);
          fe(_, g.props, "prop", k, g);
        } else if (D.PropTypes !== void 0 && !gr) {
          gr = !0;
          var ne = Y(D);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ua(g) {
      {
        for (var D = Object.keys(g.props), _ = 0; _ < D.length; _++) {
          var k = D[_];
          if (k !== "children" && k !== "key") {
            pt(g), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), pt(null);
            break;
          }
        }
        g.ref !== null && (pt(g), w("Invalid attribute `ref` supplied to `React.Fragment`."), pt(null));
      }
    }
    function Bn(g, D, _, k, ne, de) {
      {
        var Z = F(g);
        if (!Z) {
          var q = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var De = ja();
          De ? q += De : q += Vn();
          var ge;
          g === null ? ge = "null" : ue(g) ? ge = "array" : g !== void 0 && g.$$typeof === t ? (ge = "<" + (Y(g.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof g, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, q);
        }
        var ve = ka(g, D, _, ne, de);
        if (ve == null)
          return ve;
        if (Z) {
          var Fe = D.children;
          if (Fe !== void 0)
            if (k)
              if (ue(Fe)) {
                for (var mt = 0; mt < Fe.length; mt++)
                  Ln(Fe[mt], g);
                Object.freeze && Object.freeze(Fe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ln(Fe, g);
        }
        return g === n ? Ua(ve) : Wa(ve), ve;
      }
    }
    function za(g, D, _) {
      return Bn(g, D, _, !0);
    }
    function Ha(g, D, _) {
      return Bn(g, D, _, !1);
    }
    var Ya = Ha, qa = za;
    St.Fragment = n, St.jsx = Ya, St.jsxs = qa;
  }()), St;
}
process.env.NODE_ENV === "production" ? Fr.exports = Qa() : Fr.exports = es();
var O = Fr.exports;
const Zt = ({ name: e, className: t }) => /* @__PURE__ */ O.jsx("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ O.jsx(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), Qo = ({ style: e, text: t }) => /* @__PURE__ */ O.jsxs("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ O.jsx("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ O.jsx("span", { className: "text-base", children: t })
] }), vm = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: i,
  icon: a,
  disabled: s
}) => {
  const [l, d] = Me(""), f = () => {
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
        o ? /* @__PURE__ */ O.jsx(Qo, { text: n === "1C" ? l : void 0 }) : e,
        a && !o && /* @__PURE__ */ O.jsx(
          Zt,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Zr = ({ error: e }) => e && Object.keys(e).length ? /* @__PURE__ */ O.jsx("span", { className: "block text-danger text-[10px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null, hm = ({
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
  a && /* @__PURE__ */ O.jsx(Zr, { error: a })
] }), bm = ({
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
  /* @__PURE__ */ O.jsx(Zr, { error: o == null ? void 0 : o.error })
] }), ym = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ O.jsx(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
);
function Qr(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var At;
(function(e) {
  e.event = "event", e.props = "prop";
})(At || (At = {}));
function Je() {
}
function ts(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function ut(e) {
  return !!(e || "").match(/\d/);
}
function lt(e) {
  return e == null;
}
function rs(e) {
  return typeof e == "number" && isNaN(e);
}
function ei(e) {
  return lt(e) || rs(e) || typeof e == "number" && !isFinite(e);
}
function ti(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function ns(e) {
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
function os(e, t, r) {
  var n = ns(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function is(e) {
  var t = Q(e);
  t.current = e;
  var r = Q(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function en(e, t) {
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
function as(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function ri(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function Gn(e, t) {
  return Array(t + 1).join(e);
}
function ni(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + Gn("0", Math.abs(a)) + o : a >= s ? o = o + Gn("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function Wn(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = en(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), d = a.length <= t ? "0." + a : l.toFixed(t), f = d.split("."), c = i;
  i && Number(f[0]) && (c = i.split("").reverse().reduce(function(h, m, x) {
    return h.length > x ? (Number(h[0]) + Number(m)).toString() + h.substring(1, h.length) : m + h;
  }, f[0]));
  var u = ri(f[1] || "", t, r), p = s ? "-" : "", v = n ? "." : "";
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
var oi = ts(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), ss = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function cs(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function hr(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function ls() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function ii(e) {
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
function ai(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function us(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function ds(e, t, r, n, o, i, a) {
  a === void 0 && (a = us);
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
function Qt(e, t, r, n) {
  var o = e.length;
  if (t = cs(t, 0, o), n === "left") {
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
function fs(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(ut(e[r]) || ut(e[r - 1]));
  return t;
}
function si(e, t, r, n, o, i) {
  i === void 0 && (i = Je);
  var a = is(function(v, h) {
    var m, x;
    return ei(v) ? (x = "", m = "") : typeof v == "number" || h ? (x = typeof v == "number" ? ni(v) : v, m = n(x)) : (x = o(v, void 0), m = n(x)), { formattedValue: m, numAsString: x };
  }), s = Me(function() {
    return a(lt(e) ? t : e, r);
  }), l = s[0], d = s[1], f = function(v, h) {
    v.formattedValue !== l.formattedValue && d({
      formattedValue: v.formattedValue,
      numAsString: v.value
    }), i(v, h);
  }, c = e, u = r;
  lt(e) && (c = l.numAsString, u = !0);
  var p = a(c, u);
  return Ka(function() {
    d(p);
  }, [p.formattedValue]), [l, f];
}
function ps(e) {
  return e.replace(/[^0-9]/g, "");
}
function ms(e) {
  return e;
}
function ci(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = ms);
  var s = e.removeFormatting;
  s === void 0 && (s = ps);
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
  w === void 0 && (w = fs);
  var S = e.isValidInputCharacter;
  S === void 0 && (S = ut);
  var E = e.isCharacterSame, y = Qr(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), N = si(x, l, !!d, a, s, f), R = N[0], C = R.formattedValue, B = R.numAsString, F = N[1], U = Q(), A = Q({ formattedValue: C, numAsString: B }), Y = function(P, V) {
    A.current = { formattedValue: P.formattedValue, numAsString: P.value }, F(P, V);
  }, J = Me(!1), te = J[0], $ = J[1], L = Q(null), j = Q({
    setCaretTimeout: null,
    focusTimeout: null
  });
  Ee(function() {
    return $(!0), function() {
      clearTimeout(j.current.setCaretTimeout), clearTimeout(j.current.focusTimeout);
    };
  }, []);
  var K = a, re = function(P, V) {
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
    return Qt(P, V, w(P), G);
  }, he = function(P, V, G) {
    var fe = w(V), we = ds(V, C, P, G, fe, S, E);
    return we = Qt(V, we, fe), we;
  }, Le = function(P) {
    var V = P.formattedValue;
    V === void 0 && (V = "");
    var G = P.input, fe = P.source, we = P.event, ue = P.numAsString, ce;
    if (G) {
      var Ue = P.inputValue || G.value, ze = hr(G);
      G.value = V, ce = he(Ue, V, ze), ce !== void 0 && z(G, ce, V);
    }
    V !== C && Y(re(V, ue), { event: we, source: fe });
  };
  Ee(function() {
    var P = A.current, V = P.formattedValue, G = P.numAsString;
    (C !== V || B !== G) && Y(re(C, B), {
      event: void 0,
      source: At.props
    });
  }, [C, B]);
  var Ce = L.current ? hr(L.current) : void 0, Pe = typeof window < "u" ? Xo : Ee;
  Pe(function() {
    var P = L.current;
    if (C !== A.current.formattedValue && P) {
      var V = he(A.current.formattedValue, C, Ce);
      P.value = C, z(P, V, C);
    }
  }, [C]);
  var Be = function(P, V, G) {
    var fe = V.target, we = U.current ? ss(U.current, fe.selectionEnd) : oi(C, P), ue = Object.assign(Object.assign({}, we), { lastValue: C }), ce = s(P, ue), Ue = K(ce);
    if (ce = s(Ue, void 0), c && !c(re(Ue, ce))) {
      var ze = V.target, He = hr(ze), qe = he(P, C, He);
      return ze.value = C, z(ze, qe, C), !1;
    }
    return Le({
      formattedValue: Ue,
      numAsString: ce,
      inputValue: P,
      event: V,
      source: G,
      input: V.target
    }), !0;
  }, Oe = function(P, V) {
    V === void 0 && (V = 0);
    var G = P.selectionStart, fe = P.selectionEnd;
    U.current = { selectionStart: G, selectionEnd: fe + V };
  }, Ie = function(P) {
    var V = P.target, G = V.value, fe = Be(G, P, At.event);
    fe && u(P), U.current = void 0;
  }, _e = function(P) {
    var V = P.target, G = P.key, fe = V.selectionStart, we = V.selectionEnd, ue = V.value;
    ue === void 0 && (ue = "");
    var ce;
    G === "ArrowLeft" || G === "Backspace" ? ce = Math.max(fe - 1, 0) : G === "ArrowRight" ? ce = Math.min(fe + 1, ue.length) : G === "Delete" && (ce = fe);
    var Ue = 0;
    G === "Delete" && fe === we && (Ue = 1);
    var ze = G === "ArrowLeft" || G === "ArrowRight";
    if (ce === void 0 || fe !== we && !ze) {
      p(P), Oe(V, Ue);
      return;
    }
    var He = ce;
    if (ze) {
      var qe = G === "ArrowLeft" ? "left" : "right";
      He = le(ue, ce, qe), He !== ce && P.preventDefault();
    } else G === "Delete" && !S(ue[ce]) ? He = le(ue, ce, "right") : G === "Backspace" && !S(ue[ce]) && (He = le(ue, ce, "left"));
    He !== ce && z(V, He, ue), p(P), Oe(V, Ue);
  }, Ze = function(P) {
    var V = P.target, G = function() {
      var fe = V.selectionStart, we = V.selectionEnd, ue = V.value;
      if (ue === void 0 && (ue = ""), fe === we) {
        var ce = le(ue, fe);
        ce !== fe && z(V, ce, ue);
      }
    };
    G(), requestAnimationFrame(function() {
      G();
    }), v(P), Oe(V);
  }, I = function(P) {
    P.persist && P.persist();
    var V = P.target, G = P.currentTarget;
    L.current = V, j.current.focusTimeout = setTimeout(function() {
      var fe = V.selectionStart, we = V.selectionEnd, ue = V.value;
      ue === void 0 && (ue = "");
      var ce = le(ue, fe);
      ce !== fe && !(fe === 0 && we === ue.length) && z(V, ce, ue), h(Object.assign(Object.assign({}, P), { currentTarget: G }));
    }, 0);
  }, Se = function(P) {
    L.current = null, clearTimeout(j.current.focusTimeout), clearTimeout(j.current.setCaretTimeout), m(P);
  }, T = te && ls() ? "numeric" : void 0, Re = Object.assign({ inputMode: T }, y, {
    type: t,
    value: C,
    onChange: Ie,
    onKeyDown: _e,
    onMouseUp: Ze,
    onFocus: I,
    onBlur: Se
  });
  if (r === "text")
    return o ? W.createElement(W.Fragment, null, o(C, y) || null) : W.createElement("span", Object.assign({}, y, { ref: i }), C);
  if (n) {
    var We = n;
    return W.createElement(We, Object.assign({}, Re, { ref: i }));
  }
  return W.createElement("input", Object.assign({}, Re, { ref: i }));
}
function Un(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = ar(t), d = l.thousandSeparator, f = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, u = en(e, a), p = u.beforeDecimal, v = u.afterDecimal, h = u.addNegation;
  return r !== void 0 && (v = ri(v, r, !!n)), d && (p = os(p, d, s)), o && (p = o + p), i && (v = v + i), h && (p = "-" + p), e = p + (c && f || "") + v, e;
}
function ar(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function gs(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function vs(e, t) {
  return new RegExp("(^-)|[0-9]|" + ti(e), "g");
}
function hs(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function bs(e, t, r) {
  var n;
  t === void 0 && (t = ii(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, d = t.to, f = d.start, c = d.end, u = ar(r), p = u.allowedDecimalSeparators, v = u.decimalSeparator, h = e[c] === v;
  if (ut(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - f === 1 && p.indexOf(e[f]) !== -1) {
    var m = s === 0 ? "" : v;
    e = e.substring(0, f) + m + e.substring(f + 1, e.length);
  }
  var x = function(L, j, K) {
    var re = !1, z = !1;
    i.startsWith("-") ? re = !1 : L.startsWith("--") ? (re = !1, z = !0) : a.startsWith("-") && L.length === a.length ? re = !1 : L[0] === "-" && (re = !0);
    var le = re ? 1 : 0;
    return z && (le = 2), le && (L = L.substring(le), j -= le, K -= le), { value: L, start: j, end: K, hasNegation: re };
  }, w = x(e, f, c), S = w.hasNegation;
  n = w, e = n.value, f = n.start, c = n.end;
  var E = x(t.lastValue, l.start, l.end), y = E.start, N = E.end, R = E.value, C = e.substring(f, c);
  e.length && R.length && (y > R.length - a.length || N < i.length) && !(C && a.startsWith(C)) && (e = R);
  var B = 0;
  e.startsWith(i) ? B += i.length : f < i.length && (B = f), e = e.substring(B), c -= B;
  var F = e.length, U = e.length - a.length;
  e.endsWith(a) ? F = U : (c > U || c > e.length - a.length) && (F = c), e = e.substring(0, F), e = gs(S ? "-" + e : e, o), e = (e.match(vs(v)) || []).join("");
  var A = e.indexOf(v);
  e = e.replace(new RegExp(ti(v), "g"), function(L, j) {
    return j === A ? "." : "";
  });
  var Y = en(e, o), J = Y.beforeDecimal, te = Y.afterDecimal, $ = Y.addNegation;
  return d.end - d.start < l.end - l.start && J === "" && h && !parseFloat(te) && (e = $ ? "-" : ""), e;
}
function ys(e, t) {
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
function xs(e) {
  var t = ar(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function Es(e) {
  e = xs(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Je);
  var i = e.onBlur;
  i === void 0 && (i = Je);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, d = e.prefix;
  d === void 0 && (d = "");
  var f = e.defaultValue, c = e.value, u = e.valueIsNumericString, p = e.onValueChange, v = Qr(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = ar(e), m = h.decimalSeparator, x = h.allowedDecimalSeparators, w = function($) {
    return Un($, e);
  }, S = function($, L) {
    return bs($, L, e);
  }, E = lt(c) ? f : c, y = u ?? hs(E, d, t);
  lt(c) ? lt(f) || (y = y || typeof f == "number") : y = y || typeof c == "number";
  var N = function($) {
    return ei($) ? $ : (typeof $ == "number" && ($ = ni($)), y && typeof s == "number" ? Wn($, s, !!l) : $);
  }, R = si(N(c), N(f), !!y, w, S, p), C = R[0], B = C.numAsString, F = C.formattedValue, U = R[1], A = function($) {
    var L = $.target, j = $.key, K = L.selectionStart, re = L.selectionEnd, z = L.value;
    if (z === void 0 && (z = ""), (j === "Backspace" || j === "Delete") && re < d.length) {
      $.preventDefault();
      return;
    }
    if (K !== re) {
      o($);
      return;
    }
    j === "Backspace" && z[0] === "-" && K === d.length + 1 && r && tt(L, 1), s && l && (j === "Backspace" && z[K - 1] === m ? (tt(L, K - 1), $.preventDefault()) : j === "Delete" && z[K] === m && $.preventDefault()), x != null && x.includes(j) && z[K] === m && tt(L, K + 1);
    var le = a === !0 ? "," : a;
    j === "Backspace" && z[K - 1] === le && tt(L, K - 1), j === "Delete" && z[K] === le && tt(L, K + 1), o($);
  }, Y = function($) {
    var L = B;
    if (L.match(/\d/g) || (L = ""), n || (L = as(L)), l && s && (L = Wn(L, s, l)), L !== B) {
      var j = Un(L, e);
      U({
        formattedValue: j,
        value: L,
        floatValue: parseFloat(L)
      }, {
        event: $,
        source: At.event
      });
    }
    i($);
  }, J = function($) {
    return $ === m ? !0 : ut($);
  }, te = function($) {
    var L = $.currentValue, j = $.lastValue, K = $.formattedValue, re = $.currentValueIndex, z = $.formattedValueIndex, le = L[re], he = K[z], Le = oi(j, L), Ce = Le.to;
    return re >= Ce.start && re < Ce.end && x && x.includes(le) && he === m ? !0 : le === he;
  };
  return Object.assign(Object.assign({}, v), {
    value: F,
    valueIsNumericString: !1,
    isValidInputCharacter: J,
    isCharacterSame: te,
    onValueChange: U,
    format: w,
    removeFormatting: S,
    getCaretBoundary: function($) {
      return ys($, e);
    },
    onKeyDown: A,
    onBlur: Y
  });
}
function ws(e) {
  var t = Es(e);
  return W.createElement(ci, Object.assign({}, t));
}
function Ss(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, d = r.length; l < d; l++)
    r[l] === i && (s[l] = e[a] || ai(o, a), a += 1);
  return s.join("");
}
function Ds(e, t, r) {
  t === void 0 && (t = ii(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(m) {
    return n[m] === o;
  }, d = function(m, x) {
    for (var w = "", S = 0; S < m.length; S++)
      l(x + S) && ut(m[S]) && (w += m[S]);
    return w;
  }, f = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", u = 0; u < e.length; u++)
      if (l(u))
        ut(e[u]) && (c += e[u]);
      else if (e[u] !== n[u])
        return f(e);
    return c;
  }
  var p = s.substring(0, i.start), v = e.substring(a.start, a.end), h = s.substring(i.end);
  return "" + d(p, 0) + f(v) + d(h, i.end);
}
function Ns(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(u, p) {
    var v = void 0;
    u === o && (a++, v = ai(n, a - 1), s === -1 && e[p] === v && (s = p)), l[p] = v;
  });
  for (var d = function(u) {
    return r[u] === o && e[u] !== l[u];
  }, f = 0, c = i.length; f < c; f++)
    i[f] = f === s || d(f) || d(f - 1);
  return i[r.indexOf(o)] = !0, i;
}
function Cs(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Os(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Is(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = Je);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = Qr(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Cs(e);
  var d = function(v) {
    return Ns(v, e);
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
      E = Qt(S, E, d(S), y);
    } else t[E] !== o && h !== "ArrowLeft" && h !== "ArrowRight" && (E = Qt(S, E + 1, d(S), "right"));
    E !== x && tt(m, E), n(v);
  }, c = lt(i) ? a : i, u = s ?? Os(c, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: u });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: u,
    inputMode: r,
    format: function(v) {
      return Ss(v, p);
    },
    removeFormatting: function(v, h) {
      return Ds(v, h, p);
    },
    getCaretBoundary: d,
    onKeyDown: f
  });
}
function _s(e) {
  var t = Is(e);
  return W.createElement(ci, Object.assign({}, t));
}
const Rs = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, xm = ({
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
      _s,
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
            ws,
            {
              decimalScale: s,
              onValueChange: (u) => {
                var p;
                return t == null ? void 0 : t.onChange((p = u.value.replace("_", "")) == null ? void 0 : p.toString());
              },
              value: (c = t == null ? void 0 : t.value) == null ? void 0 : c.toString(),
              className: `${o} w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300`,
              ...l,
              ...Rs.number
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
    /* @__PURE__ */ O.jsx(Zr, { error: r == null ? void 0 : r.error })
  ] });
}, Em = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ O.jsx("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ O.jsx(O.Fragment, { children: o.title ? /* @__PURE__ */ O.jsx(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ O.jsx(O.Fragment, {}) })) });
function Pt(e) {
  "@babel/helpers - typeof";
  return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pt(e);
}
function As(e, t) {
  if (Pt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Pt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ps(e) {
  var t = As(e, "string");
  return Pt(t) == "symbol" ? t : t + "";
}
function Ts(e, t, r) {
  return (t = Ps(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function zn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zn(Object(r), !0).forEach(function(n) {
      Ts(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ae(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Yn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), br = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, qn = {
  INIT: "@@redux/INIT" + br(),
  REPLACE: "@@redux/REPLACE" + br(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + br();
  }
};
function Vs(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function $s(e) {
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
  if (Bs(e)) return "date";
  if (Ls(e)) return "error";
  var r = Ms(e);
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
function Ms(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ls(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Bs(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function st(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = $s(e)), t;
}
function li(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ae(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ae(1) : "Expected the enhancer to be a function. Instead, received: '" + st(r) + "'");
    return r(li)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ae(2) : "Expected the root reducer to be a function. Instead, received: '" + st(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function d() {
    s === a && (s = a.slice());
  }
  function f() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ae(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ae(4) : "Expected the listener to be a function. Instead, received: '" + st(h) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ae(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return d(), s.push(h), function() {
      if (m) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? Ae(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, d();
        var w = s.indexOf(h);
        s.splice(w, 1), a = null;
      }
    };
  }
  function u(h) {
    if (!Vs(h))
      throw new Error(process.env.NODE_ENV === "production" ? Ae(7) : "Actions must be plain objects. Instead, the actual type was: '" + st(h) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ae(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? Ae(9) : "Reducers may not dispatch actions.");
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
      throw new Error(process.env.NODE_ENV === "production" ? Ae(10) : "Expected the nextReducer to be a function. Instead, received: '" + st(h));
    o = h, u({
      type: qn.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? Ae(11) : "Expected the observer to be an object. Instead, received: '" + st(w) + "'");
        function S() {
          w.next && w.next(f());
        }
        S();
        var E = m(S);
        return {
          unsubscribe: E
        };
      }
    }, h[Yn] = function() {
      return this;
    }, h;
  }
  return u({
    type: qn.INIT
  }), n = {
    dispatch: u,
    subscribe: c,
    getState: f,
    replaceReducer: p
  }, n[Yn] = v, n;
}
function Kn(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Xn(e, t) {
  if (typeof e == "function")
    return Kn(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Ae(16) : "bindActionCreators expected an object or a function, but instead received: '" + st(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = Kn(o, t));
  }
  return r;
}
function ui() {
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
function Fs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Ae(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = ui.apply(void 0, s)(o.dispatch), Hn(Hn({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var kr = { exports: {} }, yr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function ks() {
  if (Jn) return yr;
  Jn = 1;
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
  return yr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, yr;
}
var xr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function js() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
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
    xr.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xr;
}
process.env.NODE_ENV === "production" ? kr.exports = ks() : kr.exports = js();
var tn = kr.exports, Er = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function Gs() {
  if (Qn) return Er;
  Qn = 1;
  var e = W, t = tn;
  function r(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Er.useSyncExternalStoreWithSelector = function(d, f, c, u, p) {
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
  }, Er;
}
var wr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function Ws() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = W, t = tn;
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
            var Y = p(A);
            if (v !== void 0 && m.hasValue) {
              var J = m.value;
              if (v(J, Y))
                return R = J, J;
            }
            return R = Y, Y;
          }
          var te = N, $ = R;
          if (n(te, A))
            return $;
          var L = p(A);
          return v !== void 0 && v($, L) ? $ : (N = A, R = L, L);
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
    wr.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), wr;
}
process.env.NODE_ENV === "production" ? Gs() : Ws();
function Us(e) {
  e();
}
let di = Us;
const zs = (e) => di = e, Hs = () => di, to = Symbol.for("react-redux-context"), ro = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ys() {
  var e;
  if (!ee.createContext) return {};
  const t = (e = ro[to]) != null ? e : ro[to] = /* @__PURE__ */ new Map();
  let r = t.get(ee.createContext);
  return r || (r = ee.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(ee.createContext, r)), r;
}
const fi = /* @__PURE__ */ Ys(), qs = () => {
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
function pi(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var jr = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var no;
function Ks() {
  if (no) return oe;
  no = 1;
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
var oo;
function Xs() {
  return oo || (oo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function S(I) {
      return typeof I == "string" || typeof I == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      I === n || I === d || I === i || I === o || I === c || I === u || typeof I == "object" && I !== null && (I.$$typeof === v || I.$$typeof === p || I.$$typeof === a || I.$$typeof === s || I.$$typeof === f || I.$$typeof === m || I.$$typeof === x || I.$$typeof === w || I.$$typeof === h);
    }
    function E(I) {
      if (typeof I == "object" && I !== null) {
        var Se = I.$$typeof;
        switch (Se) {
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
                var Re = T && T.$$typeof;
                switch (Re) {
                  case s:
                  case f:
                  case v:
                  case p:
                  case a:
                    return Re;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var y = l, N = d, R = s, C = a, B = t, F = f, U = n, A = v, Y = p, J = r, te = i, $ = o, L = c, j = !1;
    function K(I) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), re(I) || E(I) === l;
    }
    function re(I) {
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
    function Le(I) {
      return E(I) === f;
    }
    function Ce(I) {
      return E(I) === n;
    }
    function Pe(I) {
      return E(I) === v;
    }
    function Be(I) {
      return E(I) === p;
    }
    function Oe(I) {
      return E(I) === r;
    }
    function Ie(I) {
      return E(I) === i;
    }
    function _e(I) {
      return E(I) === o;
    }
    function Ze(I) {
      return E(I) === c;
    }
    ie.AsyncMode = y, ie.ConcurrentMode = N, ie.ContextConsumer = R, ie.ContextProvider = C, ie.Element = B, ie.ForwardRef = F, ie.Fragment = U, ie.Lazy = A, ie.Memo = Y, ie.Portal = J, ie.Profiler = te, ie.StrictMode = $, ie.Suspense = L, ie.isAsyncMode = K, ie.isConcurrentMode = re, ie.isContextConsumer = z, ie.isContextProvider = le, ie.isElement = he, ie.isForwardRef = Le, ie.isFragment = Ce, ie.isLazy = Pe, ie.isMemo = Be, ie.isPortal = Oe, ie.isProfiler = Ie, ie.isStrictMode = _e, ie.isSuspense = Ze, ie.isValidElementType = S, ie.typeOf = E;
  }()), ie;
}
process.env.NODE_ENV === "production" ? jr.exports = Ks() : jr.exports = Xs();
var Js = jr.exports, rn = Js, Zs = {
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
}, Qs = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ec = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, mi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, nn = {};
nn[rn.ForwardRef] = ec;
nn[rn.Memo] = mi;
function io(e) {
  return rn.isMemo(e) ? mi : nn[e.$$typeof] || Zs;
}
var tc = Object.defineProperty, rc = Object.getOwnPropertyNames, ao = Object.getOwnPropertySymbols, nc = Object.getOwnPropertyDescriptor, oc = Object.getPrototypeOf, so = Object.prototype;
function gi(e, t, r) {
  if (typeof t != "string") {
    if (so) {
      var n = oc(t);
      n && n !== so && gi(e, n, r);
    }
    var o = rc(t);
    ao && (o = o.concat(ao(t)));
    for (var i = io(e), a = io(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Qs[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var d = nc(t, l);
        try {
          tc(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var ic = gi;
const co = /* @__PURE__ */ Za(ic);
var Gr = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function ac() {
  if (lo) return ae;
  lo = 1;
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
var uo;
function sc() {
  return uo || (uo = 1, process.env.NODE_ENV !== "production" && function() {
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
        var Re = T.$$typeof;
        switch (Re) {
          case e:
            var We = T.type;
            switch (We) {
              case r:
              case o:
              case n:
              case d:
              case f:
                return We;
              default:
                var P = We && We.$$typeof;
                switch (P) {
                  case s:
                  case a:
                  case l:
                  case u:
                  case c:
                  case i:
                    return P;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var N = a, R = i, C = e, B = l, F = r, U = u, A = c, Y = t, J = o, te = n, $ = d, L = f, j = !1, K = !1;
    function re(T) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(T) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function le(T) {
      return y(T) === a;
    }
    function he(T) {
      return y(T) === i;
    }
    function Le(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function Ce(T) {
      return y(T) === l;
    }
    function Pe(T) {
      return y(T) === r;
    }
    function Be(T) {
      return y(T) === u;
    }
    function Oe(T) {
      return y(T) === c;
    }
    function Ie(T) {
      return y(T) === t;
    }
    function _e(T) {
      return y(T) === o;
    }
    function Ze(T) {
      return y(T) === n;
    }
    function I(T) {
      return y(T) === d;
    }
    function Se(T) {
      return y(T) === f;
    }
    se.ContextConsumer = N, se.ContextProvider = R, se.Element = C, se.ForwardRef = B, se.Fragment = F, se.Lazy = U, se.Memo = A, se.Portal = Y, se.Profiler = J, se.StrictMode = te, se.Suspense = $, se.SuspenseList = L, se.isAsyncMode = re, se.isConcurrentMode = z, se.isContextConsumer = le, se.isContextProvider = he, se.isElement = Le, se.isForwardRef = Ce, se.isFragment = Pe, se.isLazy = Be, se.isMemo = Oe, se.isPortal = Ie, se.isProfiler = _e, se.isStrictMode = Ze, se.isSuspense = I, se.isSuspenseList = Se, se.isValidElementType = E, se.typeOf = y;
  }()), se;
}
process.env.NODE_ENV === "production" ? Gr.exports = ac() : Gr.exports = sc();
var fo = Gr.exports;
function on(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Sr(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || on(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function cc(e, t, r) {
  Sr(e, "mapStateToProps"), Sr(t, "mapDispatchToProps"), Sr(r, "mergeProps");
}
const lc = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function uc(e, t, r, n, {
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
function dc(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = pi(t, lc);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && cc(a, s, l), uc(a, s, l, e, i);
}
function fc(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function pc(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function vi(e, t, r) {
  pc(e) || on(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Wr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function po(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function hi(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = po(e);
      let d = i(s, l);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = po(d), d = i(s, l)), process.env.NODE_ENV !== "production" && vi(d, o, t), d;
    }, i;
  };
}
function an(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function mc(e) {
  return e && typeof e == "object" ? Wr((t) => (
    // @ts-ignore
    fc(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    hi(e, "mapDispatchToProps")
  ) : an(e, "mapDispatchToProps") : Wr((t) => ({
    dispatch: t
  }));
}
function gc(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    hi(e, "mapStateToProps")
  ) : an(e, "mapStateToProps") : Wr(() => ({}));
}
function vc(e, t, r) {
  return rt({}, r, e, t);
}
function hc(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, d, f) {
      const c = e(l, d, f);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && vi(a, n, "mergeProps")), a;
    };
  };
}
function bc(e) {
  return e ? typeof e == "function" ? hc(e) : an(e, "mergeProps") : () => vc;
}
function yc() {
  const e = Hs();
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
const mo = {
  notify() {
  },
  get: () => []
};
function bi(e, t) {
  let r, n = mo, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = yc());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = mo);
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
const xc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", er = xc ? ee.useLayoutEffect : ee.useEffect;
function go(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Dr(e, t) {
  if (go(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !go(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const Ec = ["reactReduxForwardedRef"];
let yi = qs;
const wc = (e) => {
  yi = e;
}, Sc = [null, null], Dc = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Nc(e, t, r) {
  er(() => e(...t), r);
}
function Cc(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Oc(e, t, r, n, o, i, a, s, l, d, f) {
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
function Ic(e, t) {
  return e === t;
}
let vo = !1;
function xi(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Ic,
  areOwnPropsEqual: i = Dr,
  areStatePropsEqual: a = Dr,
  areMergedPropsEqual: s = Dr,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: d = fi
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !vo && (vo = !0, on('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = d, c = gc(e), u = mc(t), p = bc(r), v = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !fo.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${Dc(m)}`);
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
      const [C, B, F] = ee.useMemo(() => {
        const {
          reactReduxForwardedRef: I
        } = R, Se = pi(R, Ec);
        return [R.context, I, Se];
      }, [R]), U = ee.useMemo(() => C && C.Consumer && // @ts-ignore
      fo.isContextConsumer(/* @__PURE__ */ ee.createElement(C.Consumer, null)) ? C : f, [C, f]), A = ee.useContext(U), Y = !!R.store && !!R.store.getState && !!R.store.dispatch, J = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !Y && !J)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const te = Y ? R.store : A.store, $ = J ? A.getServerState : te.getState, L = ee.useMemo(() => dc(te.dispatch, S), [te]), [j, K] = ee.useMemo(() => {
        if (!v) return Sc;
        const I = bi(te, Y ? void 0 : A.subscription), Se = I.notifyNestedSubs.bind(I);
        return [I, Se];
      }, [te, Y, A]), re = ee.useMemo(() => Y ? A : rt({}, A, {
        subscription: j
      }), [Y, A, j]), z = ee.useRef(), le = ee.useRef(F), he = ee.useRef(), Le = ee.useRef(!1);
      ee.useRef(!1);
      const Ce = ee.useRef(!1), Pe = ee.useRef();
      er(() => (Ce.current = !0, () => {
        Ce.current = !1;
      }), []);
      const Be = ee.useMemo(() => () => he.current && F === le.current ? he.current : L(te.getState(), F), [te, F]), Oe = ee.useMemo(() => (Se) => j ? Oc(
        v,
        te,
        j,
        // @ts-ignore
        L,
        le,
        z,
        Le,
        Ce,
        he,
        K,
        Se
      ) : () => {
      }, [j]);
      Nc(Cc, [le, z, Le, F, he, K]);
      let Ie;
      try {
        Ie = yi(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Oe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Be,
          $ ? () => L($(), F) : Be
        );
      } catch (I) {
        throw Pe.current && (I.message += `
The error may be correlated with this previous error:
${Pe.current.stack}

`), I;
      }
      er(() => {
        Pe.current = void 0, he.current = void 0, z.current = Ie;
      });
      const _e = ee.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ ee.createElement(m, rt({}, Ie, {
          ref: B
        }))
      ), [B, m, Ie]);
      return ee.useMemo(() => v ? /* @__PURE__ */ ee.createElement(U.Provider, {
        value: re
      }, _e) : _e, [U, _e, re]);
    }
    const N = ee.memo(E);
    if (N.WrappedComponent = m, N.displayName = E.displayName = w, l) {
      const C = ee.forwardRef(function(F, U) {
        return /* @__PURE__ */ ee.createElement(N, rt({}, F, {
          reactReduxForwardedRef: U
        }));
      });
      return C.displayName = w, C.WrappedComponent = m, co(C, m);
    }
    return co(N, m);
  };
}
function _c({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = ee.useMemo(() => {
    const d = bi(e);
    return {
      store: e,
      subscription: d,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = ee.useMemo(() => e.getState(), [e]);
  er(() => {
    const {
      subscription: d
    } = a;
    return d.onStateChange = d.notifyNestedSubs, d.trySubscribe(), s !== e.getState() && d.notifyNestedSubs(), () => {
      d.tryUnsubscribe(), d.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || fi;
  return /* @__PURE__ */ ee.createElement(l.Provider, {
    value: a
  }, r);
}
wc(tn.useSyncExternalStore);
zs(Ja);
function Rc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ei(e, t) {
  var r = Me(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = Q(!0), o = Q(r), i = n.current || !!(t && o.current.inputs && Rc(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return Ee(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Ac(e, t) {
  return Ei(function() {
    return e;
  }, t);
}
var X = Ei, M = Ac, Pc = process.env.NODE_ENV === "production", Nr = "Invariant failed";
function ho(e, t) {
  if (Pc)
    throw new Error(Nr);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Nr, ": ").concat(r) : Nr;
  throw new Error(n);
}
var Ye = function(t) {
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
}, sn = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, bo = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Tc = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Cr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, cn = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Cr : n, i = t.border, a = i === void 0 ? Cr : i, s = t.padding, l = s === void 0 ? Cr : s, d = Ye(sn(r, o)), f = Ye(bo(r, a)), c = Ye(bo(f, l));
  return {
    marginBox: d,
    borderBox: Ye(r),
    paddingBox: f,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, ke = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? ho(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : ho()), o;
}, Vc = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, tr = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Tc(n, r);
  return cn({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, rr = function(t, r) {
  return r === void 0 && (r = Vc()), tr(t, r);
}, wi = function(t, r) {
  var n = {
    top: ke(r.marginTop),
    right: ke(r.marginRight),
    bottom: ke(r.marginBottom),
    left: ke(r.marginLeft)
  }, o = {
    top: ke(r.paddingTop),
    right: ke(r.paddingRight),
    bottom: ke(r.paddingBottom),
    left: ke(r.paddingLeft)
  }, i = {
    top: ke(r.borderTopWidth),
    right: ke(r.borderRightWidth),
    bottom: ke(r.borderBottomWidth),
    left: ke(r.borderLeftWidth)
  };
  return cn({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Si = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return wi(r, n);
}, yo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function $c(e, t) {
  return !!(e === t || yo(e) && yo(t));
}
function Mc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!$c(e[r], t[r]))
      return !1;
  return !0;
}
function be(e, t) {
  t === void 0 && (t = Mc);
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
var Tt = function(t) {
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
const Lc = process.env.NODE_ENV === "production", Bc = /[ \t]{2,}/g, Fc = /^[ \t]*/gm, xo = (e) => e.replace(Bc, " ").replace(Fc, "").trim(), kc = (e) => xo(`
  %c@hello-pangea/dnd

  %c${xo(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), jc = (e) => [kc(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Gc = "__@hello-pangea/dnd-disable-dev-warnings";
function Di(e, t) {
  Lc || typeof window < "u" && window[Gc] || console[e](...jc(t));
}
const pe = Di.bind(null, "warn"), Ur = Di.bind(null, "error");
function nt() {
}
function Wc(e, t) {
  return {
    ...e,
    ...t
  };
}
function je(e, t, r) {
  const n = t.map((o) => {
    const i = Wc(r, o.options);
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
const Uc = process.env.NODE_ENV === "production", Eo = "Invariant failed";
class Vt extends Error {
}
Vt.prototype.toString = function() {
  return this.message;
};
function b(e, t) {
  throw Uc ? new Vt(Eo) : new Vt(`${Eo}: ${t || ""}`);
}
class zc extends W.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = nt, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && pe(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Vt && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ur(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = je(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Vt) {
      process.env.NODE_ENV !== "production" && Ur(t.message), this.setState({});
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
const Hc = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, nr = (e) => e + 1, Yc = (e) => `
  You have lifted an item in position ${nr(e.source.index)}
`, Ni = (e, t) => {
  const r = e.droppableId === t.droppableId, n = nr(e.index), o = nr(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Ci = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, qc = (e) => {
  const t = e.destination;
  if (t)
    return Ni(e.source, t);
  const r = e.combine;
  return r ? Ci(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, wo = (e) => `
  The item has returned to its starting position
  of ${nr(e.index)}
`, Kc = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${wo(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Ni(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Ci(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${wo(e.source)}
  `;
}, Xc = {
  dragHandleUsageInstructions: Hc,
  onDragStart: Yc,
  onDragUpdate: qc,
  onDragEnd: Kc
};
var Jt = Xc;
const ye = {
  x: 0,
  y: 0
}, xe = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Te = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), ot = (e, t) => e.x === t.x && e.y === t.y, yt = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), dt = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, $t = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), So = (e, t) => Math.min(...t.map((r) => $t(e, r))), Oi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Jc = (e, t) => {
  const r = Ye({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Gt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Do = (e) => [{
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
}], Zc = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Qc = (e, t) => t ? Gt(e, t.scroll.diff.displacement) : e, el = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, tl = (e, t) => t && t.shouldClipSubject ? Jc(t.pageMarginBox, e) : Ye(e);
var vt = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Qc(e.marginBox, n), i = el(o, r, t), a = tl(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, ln = (e, t) => {
  e.frame || (process.env.NODE_ENV, b());
  const r = e.frame, n = Te(t, r.scroll.initial), o = yt(n), i = {
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
  }, a = vt({
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
const Ii = be((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), _i = be((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), sr = be((e) => Object.values(e)), rl = be((e) => Object.values(e));
var ft = be((e, t) => rl(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function un(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function cr(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var lr = be((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), nl = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !un(o))
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
  const d = lr(t, n);
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
}, xt = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ri = {
  point: ye,
  value: 0
}, Mt = {
  invisible: {},
  visible: {},
  all: []
}, ol = {
  displaced: Mt,
  displacedBy: Ri,
  at: null
};
var il = ol, Ge = (e, t) => (r) => e <= r && r <= t, Ai = (e) => {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, d = n.left < e.left && n.right > e.right;
    return l && d ? !0 : l && a || d && i;
  };
}, al = (e) => {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const dn = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Pi = {
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
var sl = (e) => (t) => {
  const r = Ge(t.top, t.bottom), n = Ge(t.left, t.right);
  return (o) => e === dn ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const cl = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ye;
  return Gt(e, r);
}, ll = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, ul = (e, t, r) => r(t)(e), fn = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? cl(e, t) : e;
  return ll(i, t, o) && ul(i, r, o);
}, dl = (e) => fn({
  ...e,
  isVisibleThroughFrameFn: Ai
}), Ti = (e) => fn({
  ...e,
  isVisibleThroughFrameFn: al
}), fl = (e) => fn({
  ...e,
  isVisibleThroughFrameFn: sl(e.destination.axis)
}), pl = (e, t, r) => {
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
function ml(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Ye(sn(r, n));
}
function Lt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const d = ml(l, r), f = l.descriptor.id;
    if (s.all.push(f), !dl({
      target: d,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const u = pl(f, i, o), p = {
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
function gl(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function No({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = gl(e, {
    inHomeList: t
  });
  return {
    displaced: Mt,
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
function or({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = xt(e, r);
  if (a == null)
    return No({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const d = t.find((v) => v.descriptor.index === a);
  if (!d)
    return No({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const f = lr(e, t), c = t.indexOf(d), u = f.slice(c);
  return {
    displaced: Lt({
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
var vl = ({
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
}, hl = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, bl = ({
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
    const c = hl({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return c == null ? null : or({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const f = vl({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: d.combine,
    afterCritical: l
  });
  return f == null ? null : or({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, yl = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return it(r, t) ? o ? ye : yt(n.point) : o ? n.point : ye;
}, xl = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = cr(t);
  n || (process.env.NODE_ENV, b());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = yl({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return xe(i, a);
};
const Vi = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, El = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, pn = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Co = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => dt(e.line, t.marginBox[e.end] + Vi(e, r), pn(e, t.marginBox, r)), Oo = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => dt(e.line, t.marginBox[e.start] - El(e, r), pn(e, t.marginBox, r)), wl = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => dt(e.line, t.contentBox[e.start] + Vi(e, r), pn(e, t.contentBox, r));
var Sl = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = ft(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return wl({
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
      return Oo({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const p = tr(u.page, d.point);
    return Oo({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (it(c.descriptor.id, o)) {
    const u = tr(c.page, yt(o.displacedBy.point));
    return Co({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return Co({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, zr = (e, t) => {
  const r = e.frame;
  return r ? xe(t, r.scroll.diff.displacement) : t;
};
const Dl = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? Sl({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : xl({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var ur = (e) => {
  const t = Dl(e), r = e.droppable;
  return r ? zr(r, t) : t;
}, $i = (e, t) => {
  const r = Te(t, e.scroll.initial), n = yt(r);
  return {
    frame: Ye({
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
function Io(e, t) {
  return e.map((r) => t[r]);
}
function Nl(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Cl = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = $i(t, xe(t.scroll.current, o)), a = r.frame ? ln(r, xe(r.frame.scroll.current, o)) : r, s = e.displaced, l = Lt({
    afterDragging: Io(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = Lt({
    afterDragging: Io(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, c = {}, u = [s, l, d];
  return s.all.forEach((v) => {
    const h = Nl(v, u);
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
}, Ol = (e, t) => xe(e.scroll.diff.displacement, t), mn = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Ol(r, e), o = Te(n, t.page.borderBox.center);
  return xe(t.client.borderBox.center, o);
}, Mi = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = Te(r, e.page.borderBox.center), l = {
    target: Gt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? fl(l) : Ti(l);
}, Il = ({
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
  const d = ft(r.descriptor.id, n), f = xt(t, r), c = nl({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: d,
    previousImpact: o
  }) || bl({
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
  const u = ur({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if (Mi({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: mn({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const v = Te(u, a), h = Cl({
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
const Ne = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get clipped area from droppable") : b()), t;
};
var _l = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ge(i[a.start], i[a.end]), l = sr(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Ai(o.frame)(Ne(f))).filter((f) => {
    const c = Ne(f);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const c = Ne(f), u = Ge(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((f, c) => {
    const u = Ne(f)[a.crossAxisStart], p = Ne(c)[a.crossAxisStart];
    return e ? u - p : p - u;
  }).filter((f, c, u) => Ne(f)[a.crossAxisStart] === Ne(u[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const d = l.filter((f) => Ge(Ne(f)[a.start], Ne(f)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((f, c) => Ne(f)[a.start] - Ne(c)[a.start])[0] : l.sort((f, c) => {
    const u = So(t, Do(Ne(f))), p = So(t, Do(Ne(c)));
    return u !== p ? u - p : Ne(f)[a.start] - Ne(c)[a.start];
  })[0];
};
const _o = (e, t) => {
  const r = e.page.borderBox.center;
  return it(e.descriptor.id, t) ? Te(r, t.displacedBy.point) : r;
}, Rl = (e, t) => {
  const r = e.page.borderBox;
  return it(e.descriptor.id, t) ? Gt(r, yt(t.displacedBy.point)) : r;
};
var Al = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => Ti({
  target: Rl(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = $t(e, zr(r, _o(a, o))), d = $t(e, zr(r, _o(s, o)));
  return l < d ? -1 : d < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Wt = be(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: dt(t.line, n)
  };
});
const Pl = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return dt(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = ft(e.descriptor.id, r).reduce((d, f) => d + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : dt(n.line, l);
}, Li = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Bi = (e, t, r) => {
  const n = e.frame;
  xt(t, e) && (process.env.NODE_ENV !== "production" ? b(!1, "Should not add placeholder space to home list") : b()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot add placeholder size to a subject when it already has one") : b());
  const o = Wt(e.axis, t.displaceBy).point, i = Pl(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const f = vt({
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
  const s = i ? xe(n.scroll.max, i) : n.scroll.max, l = Li(n, s), d = vt({
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
}, Tl = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot remove placeholder form subject when there was none") : b());
  const r = e.frame;
  if (!r) {
    const a = vt({
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
  const o = Li(r, n), i = vt({
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
var Vl = ({
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
      displaced: Mt,
      displacedBy: Ri,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = ur({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), p = xt(n, i) ? i : Bi(i, n, o);
    return Mi({
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
  })(), f = Wt(i.axis, n.displaceBy);
  return or({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: Mt,
    index: d
  });
}, $l = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = _l({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const d = ft(l.descriptor.id, o), f = Al({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: d,
    afterCritical: s
  }), c = Vl({
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
  const u = ur({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: mn({
      pageBorderBoxCenter: u,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, Ve = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Ml = (e, t) => {
  const r = Ve(e);
  return r ? t[r] : null;
};
var Ll = ({
  state: e,
  type: t
}) => {
  const r = Ml(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: u
  } = e.dimensions;
  return s ? Il({
    isMovingForward: l,
    previousPageBorderBoxCenter: f,
    draggable: d,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : $l({
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
function ct(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Fi(e) {
  const t = Ge(e.top, e.bottom), r = Ge(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Bl(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Fl({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = dt(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: $t(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function kl({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = sr(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Bl(e, i))
      return !1;
    if (Fi(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], d = e[a.crossAxisEnd], f = Ge(i[a.crossAxisStart], i[a.crossAxisEnd]), c = f(l), u = f(d);
    return !c && !u ? !0 : c ? l < s : d > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Fl({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const ki = (e, t) => Ye(Gt(e, t));
var jl = (e, t) => {
  const r = e.frame;
  return r ? ki(t, r.scroll.diff.value) : t;
};
function ji({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Gl({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Wl = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = Wt(r.axis, t.displaceBy), d = l.value, f = e[s.start], c = e[s.end], p = lr(t, n).find((h) => {
    const m = h.descriptor.id, x = h.page.borderBox.center[s.line], w = it(m, a), S = ji({
      displaced: o,
      id: m
    });
    return w ? S ? c <= x : f < x - d : S ? c <= x + d : f < x;
  }) || null, v = Gl({
    draggable: t,
    closest: p,
    inHomeList: xt(t, r)
  });
  return or({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: v
  });
};
const Ul = 4;
var zl = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Wt(n.axis, e.displaceBy), l = s.value, d = t[a.start], f = t[a.end], u = lr(e, o).find((v) => {
    const h = v.descriptor.id, m = v.page.borderBox, w = m[a.size] / Ul, S = it(h, i), E = ji({
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
}, Gi = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = ki(t.page.borderBox, e), l = kl({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return il;
  const d = n[l], f = ft(d.descriptor.id, r), c = jl(d, s);
  return zl({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: f,
    afterCritical: a
  }) || Wl({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: d,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, gn = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Hl = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = Ve(e), o = Ve(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = Tl(i);
  return gn(r, a);
};
var Yl = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Hl({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = Ve(o);
  if (!a)
    return i;
  const s = r[a];
  if (xt(e, s) || s.subject.withPlaceholder)
    return i;
  const l = Bi(s, e, t);
  return gn(i, l);
}, _t = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, d = Te(l, e.initial.client.selection), f = {
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
  const p = s.draggables[e.critical.draggable.id], v = o || Gi({
    pageOffset: c.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Yl({
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
function ql(e, t) {
  return e.map((r) => t[r]);
}
var Wi = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = ql(i.all, r), s = Lt({
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
}, Ui = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = ur({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return mn({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, zi = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, b());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], d = Ve(n);
  d || (process.env.NODE_ENV !== "production" ? b(!1, "Must be over a destination in SNAP movement mode") : b());
  const f = s[d], c = Wi({
    impact: n,
    viewport: o,
    destination: f,
    draggables: a
  }), u = Ui({
    impact: c,
    draggable: l,
    droppable: f,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return _t({
    impact: c,
    clientSelection: u,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Kl = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Hi = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Wt(t.axis, e.displaceBy), i = ft(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? b(!1, "Expected draggable to be inside home list") : b());
  const s = i.slice(a + 1), l = s.reduce((u, p) => (u[p.descriptor.id] = !0, u), {}), d = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: Lt({
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
        destination: Kl(e.descriptor)
      }
    },
    afterCritical: d
  };
}, Xl = (e, t) => ({
  draggables: e.draggables,
  droppables: gn(e.droppables, t)
});
const Ut = (e) => {
  process.env.NODE_ENV;
}, zt = (e) => {
  process.env.NODE_ENV;
};
var Jl = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = tr(e.client, t), o = rr(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Zl = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Expected Droppable to have a frame") : b()), t;
}, Ql = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = Zl(a).scroll.diff.value, d = xe(n, l);
    return Jl({
      draggable: o,
      offset: d,
      initialWindowScroll: r.scroll.initial
    });
  });
}, eu = ({
  state: e,
  published: t
}) => {
  Ut();
  const r = t.modified.map((x) => {
    const w = e.dimensions.droppables[x.droppableId];
    return ln(w, x.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Ii(r)
  }, o = _i(Ql({
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
  }, s = Ve(e.impact), l = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: u
  } = Hi({
    draggable: d,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : c, v = Gi({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: u
  });
  zt();
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
const Hr = (e) => e.movementMode === "SNAP", Or = (e, t, r) => {
  const n = Xl(e.dimensions, t);
  return !Hr(e) || r ? _t({
    state: e,
    dimensions: n
  }) : zi({
    state: e,
    dimensions: n
  });
};
function Ir(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Ro = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var tu = (e = Ro, t) => {
  if (t.type === "FLUSH")
    return {
      ...Ro,
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
    }, c = sr(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: u,
      afterCritical: p
    } = Hi({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? b(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : b()), eu({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      client: r
    } = t.payload;
    return ot(r, e.current.client.selection) ? e : _t({
      state: e,
      clientSelection: r,
      impact: Hr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Ir(e);
    ct(e) || (process.env.NODE_ENV !== "production" ? b(!1, `${t.type} not permitted in phase ${e.phase}`) : b());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = ln(o, n);
    return Or(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
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
    return Or(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Attempting to move in an unsupported phase ${e.phase}`) : b());
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
    return Or(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    ct(e) || (process.env.NODE_ENV !== "production" ? b(!1, `Cannot move by window in phase ${e.phase}`) : b()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? b(!1, "Window scrolling is currently not supported for fixed lists") : b());
    const r = t.payload.newScroll;
    if (ot(e.viewport.scroll.current, r))
      return Ir(e);
    const n = $i(e.viewport, r);
    return Hr(e) ? zi({
      state: e,
      viewport: n
    }) : _t({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!ct(e))
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
    const r = Ll({
      state: e,
      type: t.type
    });
    return r ? _t({
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
const ru = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), nu = (e) => ({
  type: "LIFT",
  payload: e
}), ou = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), iu = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), au = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), su = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), cu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), lu = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Yi = (e) => ({
  type: "MOVE",
  payload: e
}), uu = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), du = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), fu = () => ({
  type: "MOVE_UP",
  payload: null
}), pu = () => ({
  type: "MOVE_DOWN",
  payload: null
}), mu = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), gu = () => ({
  type: "MOVE_LEFT",
  payload: null
}), vn = () => ({
  type: "FLUSH",
  payload: null
}), vu = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), hn = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), qi = (e) => ({
  type: "DROP",
  payload: e
}), hu = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ki = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function bu(e) {
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
function yu(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ft(e.droppable.id, t.draggables);
    bu(r);
  }
}
var xu = (e) => ({
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
  l.phase === "DROP_ANIMATING" && r(hn({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Unexpected phase to start a drag") : b()), r(vn()), r(ru({
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
  yu(c, u), r(ou({
    critical: c,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, Eu = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const bn = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Bt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Xi = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, at = `${Xi.outOfTheWay}s ${bn.outOfTheWay}`, Rt = {
  fluid: `opacity ${at}`,
  snap: `transform ${at}, opacity ${at}`,
  drop: (e) => {
    const t = `${e}s ${bn.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${at}`,
  placeholder: `height ${at}, width ${at}, margin ${at}`
}, Ao = (e) => ot(e, ye) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Yr = {
  moveTo: Ao,
  drop: (e, t) => {
    const r = Ao(e);
    if (r)
      return t ? `${r} scale(${Bt.scale.drop})` : r;
  }
}, {
  minDropTime: qr,
  maxDropTime: Ji
} = Xi, wu = Ji - qr, Po = 1500, Su = 0.6;
var Du = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = $t(e, t);
  if (n <= 0)
    return qr;
  if (n >= Po)
    return Ji;
  const o = n / Po, i = qr + wu * o, a = r === "CANCEL" ? i * Su : i;
  return Number(a.toFixed(2));
}, Nu = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = Ve(e), l = s ? a[s] : null, d = a[t.descriptor.droppableId], f = Ui({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || d,
    viewport: n
  });
  return Te(f, t.client.borderBox.center);
}, Cu = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Wi({
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
    displaced: Mt
  },
  didDropInsideDroppable: !0
};
const Ou = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(hu({
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
  } = Cu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = c ? un(f) : null, p = c ? cr(f) : null, v = {
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
  }, m = Nu({
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
    t(hn({
      completed: x
    }));
    return;
  }
  const S = Du({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(vu({
    newHomeClientOffset: m,
    dropDuration: S,
    completed: x
  }));
};
var Iu = Ou, Zi = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function _u(e) {
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
function Ru({
  onWindowScroll: e
}) {
  function t() {
    e(Zi());
  }
  const r = Tt(t), n = _u(r);
  let o = nt;
  function i() {
    return o !== nt;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start scroll listener when already active") : b()), o = je(window, [n]);
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
const Au = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Pu = (e) => {
  const t = Ru({
    onWindowScroll: (r) => {
      e.dispatch(uu({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Au(n) && t.stop(), r(n);
  };
};
var Tu = Pu, Vu = (e) => {
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
}, $u = () => {
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
const Mu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Lu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Bu = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, Dt = (e, t) => {
  Ut(), t(), zt();
}, qt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function _r(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Vu(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Fu = (e, t) => {
  const r = $u();
  let n = null;
  const o = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : b()), Dt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: c,
        mode: u
      });
    });
  }, i = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b()), Dt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(qt(c, u));
    });
  }, a = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : b());
    const p = qt(c, u);
    n = {
      mode: u,
      lastCritical: c,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      Dt("onDragStart", () => _r(e().onDragStart, p, t, Jt.onDragStart));
    });
  }, s = (c, u) => {
    const p = un(u), v = cr(u);
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragMove when onDragStart has not been called") : b());
    const h = !Bu(c, n.lastCritical);
    h && (n.lastCritical = c);
    const m = !Mu(n.lastLocation, p);
    m && (n.lastLocation = p);
    const x = !Lu(n.lastCombine, v);
    if (x && (n.lastCombine = v), !h && !m && !x)
      return;
    const w = {
      ...qt(c, n.mode),
      combine: v,
      destination: p
    };
    r.add(() => {
      Dt("onDragUpdate", () => _r(e().onDragUpdate, w, t, Jt.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Can only flush responders while dragging") : b()), r.flush();
  }, d = (c) => {
    n || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : b()), n = null, Dt("onDragEnd", () => _r(e().onDragEnd, c, t, Jt.onDragEnd));
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
        ...qt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(c);
    }
  };
}, ku = (e, t) => {
  const r = Fu(e, t);
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
const ju = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot finish a drop animating when no drop is occurring") : b()), e.dispatch(hn({
    completed: n.completed
  }));
};
var Gu = ju;
const Wu = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ki());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = je(window, [a]);
    });
  };
};
var Uu = Wu, zu = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Hu = (e) => {
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
const Yu = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var qu = (e) => (t) => (r) => (n) => {
  if (Yu(n)) {
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
const Ku = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(qi({
    reason: n.reason
  })));
};
var Xu = Ku;
const Ju = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : ui;
var Zu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => li(tu, Ju(Fs(Eu(r), zu(e), xu(e), Iu, Gu, Uu, Xu, qu(i), Tu, Hu(t), ku(n, o))));
const Rr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Qu({
  registry: e,
  callbacks: t
}) {
  let r = Rr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, Ut();
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
      r = Rr(), zt(), t.publish(p);
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
      n && (cancelAnimationFrame(n), n = null, r = Rr());
    }
  };
}
var Qi = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = Te({
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
}, ea = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.documentElement") : b()), e;
}, ta = () => {
  const e = ea();
  return Qi({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, ed = () => {
  const e = Zi(), t = ta(), r = e.y, n = e.x, o = ea(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: Ye({
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
}, td = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Ut();
  const n = ed(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), l = {
    draggables: _i(s),
    droppables: Ii(a)
  };
  return zt(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function To(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && pe(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var rd = (e, t) => {
  let r = null;
  const n = Qu({
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
    u.type === "ADDITION" && To(e, p, u.value) && n.add(u.value), u.type === "REMOVAL" && To(e, p, u.value) && n.remove(u.value);
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
      }, td({
        critical: h,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: l
  };
}, ra = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", nd = (e) => {
  window.scrollBy(e.x, e.y);
};
const od = be((e) => sr(e).filter((t) => !(!t.isEnabled || !t.frame))), id = (e, t) => od(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? b(!1, "Invalid result") : b()), Fi(n.frame.pageMarginBox)(e))) || null;
var ad = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return id(e, r);
};
const Ft = {
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
var sd = (e, t, r = () => Ft) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, na = ({
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
}, yn = 1, cd = (e, t, r = () => Ft) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return yn;
  const i = 1 - na({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, ld = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return yn;
  const f = na({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), c = e * n.ease(f);
  return Math.ceil(c);
}, Vo = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = cd(e, t, o);
  return i === 0 ? 0 : n ? Math.max(ld(i, r, o), yn) : i;
}, $o = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = sd(e, n, i);
  return t[n.end] < t[n.start] ? Vo({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Vo({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, ud = ({
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
const dd = Oi((e) => e === 0 ? 0 : e);
var oa = ({
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
  }, s = $o({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: dn,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = $o({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Pi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = dd({
    x: l,
    y: s
  });
  if (ot(d, ye))
    return null;
  const f = ud({
    container: t,
    subject: r,
    proposedScroll: d
  });
  return f ? ot(f, ye) ? null : f : null;
};
const fd = Oi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), xn = /* @__PURE__ */ (() => {
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
})(), ia = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = fd(r), i = xn({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, En = (e, t) => ia({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), pd = (e, t) => {
  if (!En(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return xn({
    current: n,
    max: r,
    change: t
  });
}, wn = (e, t) => {
  const r = e.frame;
  return r ? ia({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, md = (e, t) => {
  const r = e.frame;
  return !r || !wn(e, t) ? null : xn({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var gd = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = oa({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && En(e, a) ? a : null;
}, vd = ({
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
  const s = oa({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && wn(e, s) ? s : null;
}, Mo = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, u = gd({
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
  const d = ad({
    center: a,
    destination: Ve(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const f = vd({
    dragStartTime: t,
    droppable: d,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(d.descriptor.id, f);
}, hd = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Ft
}) => {
  const n = Tt(e), o = Tt(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot fluid scroll if not dragging") : b());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: c
    } = i;
    Mo({
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
      Ut(), i && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot start auto scrolling when already started") : b());
      const f = Date.now();
      let c = !1;
      const u = () => {
        c = !0;
      };
      Mo({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: u,
        scrollDroppable: u,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: c
      }, zt(), c && a(d);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, bd = ({
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
    if (!wn(s, l))
      return l;
    const d = md(s, l);
    if (!d)
      return t(s.descriptor.id, l), null;
    const f = Te(l, d);
    return t(s.descriptor.id, f), Te(l, f);
  }, i = (s, l, d) => {
    if (!s || !En(l, d))
      return d;
    const f = pd(l, d);
    if (!f)
      return r(d), null;
    const c = Te(d, f);
    return r(c), Te(d, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const d = Ve(s.impact);
    d || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot perform a jump scroll when there is no destination") : b());
    const f = o(s.dimensions.droppables[d], l);
    if (!f)
      return;
    const c = s.viewport, u = i(s.isWindowScrollAllowed, c, f);
    u && n(s, u);
  };
}, yd = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = hd({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = bd({
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
const ht = "data-rfd", bt = (() => {
  const e = `${ht}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Kr = (() => {
  const e = `${ht}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), xd = (() => {
  const e = `${ht}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Lo = {
  contextId: `${ht}-scroll-container-context-id`
}, Ed = (e) => (t) => `[${t}="${e}"]`, Nt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), wd = "pointer-events: none;";
var Sd = (e) => {
  const t = Ed(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(bt.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: wd,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${Rt.outOfTheWay};
    `;
    return {
      selector: t(Kr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(xd.contextId),
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
    always: Nt(a, "always"),
    resting: Nt(a, "resting"),
    dragging: Nt(a, "dragging"),
    dropAnimating: Nt(a, "dropAnimating"),
    userCancel: Nt(a, "userCancel")
  };
};
const Dd = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Xo : Ee;
var $e = Dd;
const Ar = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find the head to append a style to") : b()), e;
}, Bo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function Nd(e, t) {
  const r = X(() => Sd(e), [e]), n = Q(null), o = Q(null), i = M(be((c) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), u.textContent = c;
  }), []), a = M((c) => {
    const u = n.current;
    u || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot set dynamic style element if it is not set") : b()), u.textContent = c;
  }, []);
  $e(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? b(!1, "style elements already mounted") : b());
    const c = Bo(t), u = Bo(t);
    return n.current = c, o.current = u, c.setAttribute(`${ht}-always`, e), u.setAttribute(`${ht}-dynamic`, e), Ar().appendChild(c), Ar().appendChild(u), a(r.always), i(r.resting), () => {
      const p = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot unmount ref as it is not set") : b()), Ar().removeChild(h), v.current = null;
      };
      p(n), p(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = M(() => i(r.dragging), [i, r.dragging]), l = M((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), d = M(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return X(() => ({
    dragging: s,
    dropping: l,
    resting: d
  }), [s, l, d]);
}
function aa(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var sa = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ht(e) {
  return e instanceof sa(e).HTMLElement;
}
function ca(e, t) {
  const r = `[${bt.contextId}="${e}"]`, n = aa(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && pe(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(bt.draggableId) === t);
  return o ? Ht(o) ? o : (process.env.NODE_ENV !== "production" && pe("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && pe(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Cd(e) {
  const t = Q({}), r = Q(null), n = Q(null), o = Q(!1), i = M(function(u, p) {
    const v = {
      id: u,
      focus: p
    };
    return t.current[u] = v, function() {
      const m = t.current;
      m[u] !== v && delete m[u];
    };
  }, []), a = M(function(u) {
    const p = ca(e, u);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = M(function(u, p) {
    r.current === u && (r.current = p);
  }, []), l = M(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const u = r.current;
      u && a(u);
    }));
  }, [a]), d = M(function(u) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(bt.draggableId) === u && (r.current = u);
  }, []);
  return $e(() => (o.current = !0, function() {
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
function Od() {
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
function Id() {
  const e = X(Od, []);
  return Ee(() => function() {
    W.version.startsWith("16") || W.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Sn = W.createContext(null), kt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot find document.body") : b()), e;
};
const _d = {
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
var Rd = _d;
const Ad = (e) => `rfd-announcement-${e}`;
function Pd(e) {
  const t = X(() => Ad(e), [e]), r = Q(null);
  return Ee(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), rt(i.style, Rd), kt().appendChild(i), function() {
      setTimeout(function() {
        const l = kt();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), M((o) => {
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
let Td = 0;
const la = {
  separator: "::"
};
function Vd(e, t = la) {
  return X(() => `${e}${t.separator}${Td++}`, [t.separator, e]);
}
function $d(e, t = la) {
  const r = W.useId();
  return X(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Dn = "useId" in W ? $d : Vd;
function Md({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Ld({
  contextId: e,
  text: t
}) {
  const r = Dn("hidden-text", {
    separator: "-"
  }), n = X(() => Md({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return Ee(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", kt().appendChild(i), function() {
      const s = kt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var dr = W.createContext(null), Bd = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Fd = /(\d+)\.(\d+)\.(\d+)/, Fo = (e) => {
  const t = Fd.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? b(!1, `Unable to parse React version ${e}`) : b());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, kd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var jd = (e, t) => {
  const r = Fo(e), n = Fo(t);
  kd(r, n) || process.env.NODE_ENV !== "production" && pe(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Pr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Gd = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && pe(`
      No <!doctype html> found.

      ${Pr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && pe(`
      Unexpected <!doctype> found: (${t.name})

      ${Pr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && pe(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Pr}
    `);
};
function Nn(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Yt(e, t) {
  Nn(() => {
    Ee(() => {
      try {
        e();
      } catch (r) {
        Ur(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Wd() {
  Yt(() => {
    jd(Bd.react, W.version), Gd(document);
  }, []);
}
function Cn(e) {
  const t = Q(e);
  return Ee(() => {
    t.current = e;
  }), t;
}
function Ud() {
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
function jt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const zd = 9, Hd = 13, On = 27, ua = 32, Yd = 33, qd = 34, Kd = 35, Xd = 36, Jd = 37, Zd = 38, Qd = 39, ef = 40, tf = {
  [Hd]: !0,
  [zd]: !0
};
var da = (e) => {
  tf[e.keyCode] && e.preventDefault();
};
const rf = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var fr = rf;
const fa = 0, ko = 5;
function nf(e, t) {
  return Math.abs(t.x - e.x) >= ko || Math.abs(t.y - e.y) >= ko;
}
const jo = {
  type: "IDLE"
};
function of({
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
      if (i !== fa)
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
      if (!nf(f, l))
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
      if (o.keyCode === On) {
        o.preventDefault(), e();
        return;
      }
      da(o);
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
    eventName: fr,
    fn: e
  }];
}
function af(e) {
  const t = Q(jo), r = Q(nt), n = X(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== fa || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
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
  }), [e]), i = M(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = je(window, [o, n], c);
  }, [o, n]), a = M(() => {
    t.current.type !== "IDLE" && (t.current = jo, r.current(), i());
  }, [i]), s = M(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = M(function() {
    const c = {
      capture: !0,
      passive: !1
    }, u = of({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = je(window, u, c);
  }, [s, a]), d = M(function(c, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b()), t.current = {
      type: "PENDING",
      point: u,
      actions: c
    }, l();
  }, [l]);
  $e(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function sf() {
}
const cf = {
  [qd]: !0,
  [Yd]: !0,
  [Xd]: !0,
  [Kd]: !0
};
function lf(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === On) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === ua) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === ef) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Zd) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Qd) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Jd) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (cf[o.keyCode]) {
        o.preventDefault();
        return;
      }
      da(o);
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
    eventName: fr,
    fn: r
  }];
}
function uf(e) {
  const t = Q(sf), r = X(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== ua)
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
      t.current = je(window, lf(d, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = M(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = je(window, [r], i);
  }, [r]);
  $e(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const Tr = {
  type: "IDLE"
}, df = 120, ff = 0.15;
function pf({
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
      r.keyCode === On && r.preventDefault(), e();
    }
  }, {
    eventName: fr,
    fn: e
  }];
}
function mf({
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
      if (!i || !(i.force >= ff))
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
    eventName: fr,
    fn: e
  }];
}
function gf(e) {
  const t = Q(Tr), r = Q(nt), n = M(function() {
    return t.current;
  }, []), o = M(function(p) {
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
  }), [e]), a = M(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = je(window, [i], p);
  }, [i]), s = M(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(Tr), r.current(), a());
  }, [a, o]), l = M(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), d = M(function() {
    const p = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: l,
      completed: s,
      getPhase: n
    }, h = je(window, mf(v), p), m = je(window, pf(v), p);
    r.current = function() {
      h(), m();
    };
  }, [l, n, s]), f = M(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? b(!1, `Cannot start dragging from phase ${p.type}`) : b());
    const v = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [n, o]), c = M(function(p, v) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? b(!1, "Expected to move from IDLE to PENDING drag") : b());
    const h = setTimeout(f, df);
    o({
      type: "PENDING",
      point: v,
      actions: p,
      longPressTimerId: h
    }), d();
  }, [d, n, o, f]);
  $e(function() {
    return a(), function() {
      r.current();
      const v = n();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(Tr));
    };
  }, [n, a, o]), $e(function() {
    return je(window, [{
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
function vf(e) {
  Nn(() => {
    const t = Cn(e);
    Yt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot change the amount of sensor hooks after mounting") : b(!1));
    });
  });
}
const hf = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function pa(e, t) {
  if (t == null)
    return !1;
  if (hf.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : pa(e, t.parentElement);
}
function bf(e, t) {
  const r = t.target;
  return Ht(r) ? pa(e, r) : !1;
}
var yf = (e) => Ye(e.getBoundingClientRect()).center;
function xf(e) {
  return e instanceof sa(e).Element;
}
const Ef = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function ma(e, t) {
  return e == null ? null : e[Ef](t) ? e : ma(e.parentElement, t);
}
function wf(e, t) {
  return e.closest ? e.closest(t) : ma(e, t);
}
function Sf(e) {
  return `[${bt.contextId}="${e}"]`;
}
function Df(e, t) {
  const r = t.target;
  if (!xf(r))
    return process.env.NODE_ENV !== "production" && pe("event.target must be a Element"), null;
  const n = Sf(e), o = wf(r, n);
  return o ? Ht(o) ? o : (process.env.NODE_ENV !== "production" && pe("drag handle must be a HTMLElement"), null) : null;
}
function Nf(e, t) {
  const r = Df(e, t);
  return r ? r.getAttribute(bt.draggableId) : null;
}
function Cf(e, t) {
  const r = `[${Kr.contextId}="${e}"]`, o = aa(document, r).find((i) => i.getAttribute(Kr.id) === t);
  return o ? Ht(o) ? o : (process.env.NODE_ENV !== "production" && pe("Draggable element is not a HTMLElement"), null) : null;
}
function Of(e) {
  e.preventDefault();
}
function Kt({
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
function ga({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !ra(t.getState(), n)) : (process.env.NODE_ENV !== "production" && pe(`Unable to find draggable with id: ${n}`), !1);
}
function If({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!ga({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), d = Cf(t, l.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && pe(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && bf(d, a))
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
    Kt({
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
    c !== "PRE_DRAG" && (N(), process.env.NODE_ENV !== "production" ? b(!1, `Cannot lift in phase ${c}`) : b()), r.dispatch(nu(y.liftActionArgs)), c = "DRAGGING";
    function R(C, B = {
      shouldBlockNextClick: !1
    }) {
      if (y.cleanup(), B.shouldBlockNextClick) {
        const F = je(window, [{
          eventName: "click",
          fn: Of,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(F);
      }
      N(), r.dispatch(qi({
        reason: C
      }));
    }
    return {
      isActive: () => Kt({
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
    const N = Tt((C) => {
      h(() => Yi({
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
      moveUp: () => h(fu),
      moveRight: () => h(mu),
      moveDown: () => h(pu),
      moveLeft: () => h(gu)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: yf(d),
        movementMode: "SNAP"
      },
      cleanup: nt,
      actions: y
    });
  }
  function S() {
    Kt({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Kt({
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
const _f = [af, uf, gf];
function Rf({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? _f : [], ...n || []], a = Me(() => Ud())[0], s = M(function(m, x) {
    jt(m) && !jt(x) && a.tryAbandon();
  }, [a]);
  $e(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(m, w), m = w;
    });
  }, [a, t, s]), $e(() => a.tryAbandon, [a.tryAbandon]);
  const l = M((h) => ga({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: h
  }), [a, r, t]), d = M((h, m, x) => If({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: x && x.sourceEvent ? x.sourceEvent : null
  }), [e, a, r, t]), f = M((h) => Nf(e, h), [e]), c = M((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), u = M(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(vn()));
  }, [a, t]), p = M(() => a.isClaimed(), [a]), v = X(() => ({
    canGetLock: l,
    tryGetLock: d,
    findClosestDraggableId: f,
    findOptionsForDraggable: c,
    tryReleaseLock: u,
    isLockClaimed: p
  }), [l, d, f, c, u, p]);
  vf(i);
  for (let h = 0; h < i.length; h++)
    i[h](v);
}
const Af = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    W.version.startsWith("16") || W.version.startsWith("17") ? r() : Zo(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Pf = (e) => ({
  ...Ft,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ft.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Ct(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find store from lazy ref") : b()), e.current;
}
function Tf(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = Q(null);
  Wd();
  const s = Cn(e), l = M(() => Af(s.current), [s]), d = M(() => Pf(s.current), [s]), f = Pd(t), c = Ld({
    contextId: t,
    text: i
  }), u = Nd(t, o), p = M((F) => {
    Ct(a).dispatch(F);
  }, []), v = X(() => Xn({
    publishWhileDragging: iu,
    updateDroppableScroll: su,
    updateDroppableIsEnabled: cu,
    updateDroppableIsCombineEnabled: lu,
    collectionStarting: au
  }, p), [p]), h = Id(), m = X(() => rd(h, v), [h, v]), x = X(() => yd({
    scrollWindow: nd,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: d,
    ...Xn({
      move: Yi
    }, p)
  }), [m.scrollDroppable, p, d]), w = Cd(t), S = X(() => Zu({
    announce: f,
    autoScroller: x,
    dimensionMarshal: m,
    focusMarshal: w,
    getResponders: l,
    styleMarshal: u
  }), [f, x, m, w, l, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== S && process.env.NODE_ENV !== "production" && pe("unexpected store change"), a.current = S;
  const E = M(() => {
    const F = Ct(a);
    F.getState().phase !== "IDLE" && F.dispatch(vn());
  }, []), y = M(() => {
    const F = Ct(a).getState();
    return F.phase === "DROP_ANIMATING" ? !0 : F.phase === "IDLE" ? !1 : F.isDragging;
  }, []), N = X(() => ({
    isDragging: y,
    tryAbort: E
  }), [y, E]);
  r(N);
  const R = M((F) => ra(Ct(a).getState(), F), []), C = M(() => ct(Ct(a).getState()), []), B = X(() => ({
    marshal: m,
    focus: w,
    contextId: t,
    canLift: R,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: h
  }), [t, m, c, w, R, C, h]);
  return Rf({
    contextId: t,
    store: S,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), Ee(() => E, [E]), W.createElement(dr.Provider, {
    value: B
  }, W.createElement(_c, {
    context: Sn,
    store: S
  }, e.children));
}
let Vf = 0;
function $f() {
  return X(() => `${Vf++}`, []);
}
function Mf() {
  return W.useId();
}
var Lf = "useId" in W ? Mf : $f;
function Bf(e) {
  const t = Lf(), r = e.dragHandleUsageInstructions || Jt.dragHandleUsageInstructions;
  return W.createElement(zc, null, (n) => W.createElement(Tf, {
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
const Go = {
  dragging: 5e3,
  dropAnimating: 4500
}, Ff = (e, t) => t ? Rt.drop(t.duration) : e ? Rt.snap : Rt.fluid, kf = (e, t) => {
  if (e)
    return t ? Bt.opacity.drop : Bt.opacity.combining;
}, jf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Gf(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = jf(e), l = !!i, d = l ? Yr.drop(n, a) : Yr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Ff(s, i),
    transform: d,
    opacity: kf(a, l),
    zIndex: l ? Go.dropAnimating : Go.dragging,
    pointerEvents: "none"
  };
}
function Wf(e) {
  return {
    transform: Yr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Uf(e) {
  return e.type === "DRAGGING" ? Gf(e) : Wf(e);
}
function zf(e, t, r = ye) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = wi(o, n), a = rr(i, r), s = {
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
function Hf(e) {
  const t = Dn("draggable"), {
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
  }), [i, s, a]), d = M((p) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot get dimension when no ref is set") : b()), zf(r, v, p);
  }, [r, o]), f = X(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: d
  }), [r, d, l, t]), c = Q(f), u = Q(!0);
  $e(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), $e(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const p = c.current;
    c.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var In = W.createContext(null);
function va(e) {
  e && Ht(e) || (process.env.NODE_ENV !== "production" ? b(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : b());
}
function Yf(e, t, r) {
  Yt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? b(!1, "Draggable requires a draggableId") : b(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : b(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? b(!1, `${n(o)} requires an integer index prop`) : b(!1)), e.mapped.type !== "DRAGGING" && (va(r()), e.isEnabled && (ca(t, o) || (process.env.NODE_ENV !== "production" ? b(!1, `${n(o)} Unable to find drag handle`) : b(!1))));
  });
}
function qf(e) {
  Nn(() => {
    const t = Q(e);
    Yt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Draggable isClone prop value changed during component life") : b(!1));
    }, [e]);
  });
}
function ir(e) {
  const t = Jo(e);
  return t || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find required context") : b()), t;
}
function Kf(e) {
  e.preventDefault();
}
const Xf = (e) => {
  const t = Q(null), r = M((N = null) => {
    t.current = N;
  }, []), n = M(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = ir(dr), {
    type: s,
    droppableId: l
  } = ir(In), d = X(() => ({
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
  if (Yf(e, o, n), qf(h), !h) {
    const N = X(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: u
    }), [d, a, n, v, p, u]);
    Hf(N);
  }
  const w = X(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Kf
  } : null, [o, i, c, u]), S = M((N) => {
    m.type === "DRAGGING" && m.dropping && N.propertyName === "transform" && (W.version.startsWith("16") || W.version.startsWith("17") ? x() : Zo(x));
  }, [x, m]), E = X(() => {
    const N = Uf(m), R = m.type === "DRAGGING" && m.dropping ? S : void 0;
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
var Jf = Xf, ha = (e, t) => e === t, ba = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Zf = (e) => e.combine ? e.combine.draggableId : null, Qf = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function ep() {
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
    if (jt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = Ve(o.impact), d = Qf(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, d, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], d = a.result, f = d.mode, c = ba(d), u = Zf(d), v = {
        duration: o.dropDuration,
        curve: bn.drop,
        moveTo: o.newHomeClientOffset,
        opacity: u ? Bt.opacity.drop : null,
        scale: u ? Bt.scale.drop : null
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
function ya(e = null) {
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
const tp = {
  mapped: {
    type: "SECONDARY",
    offset: ye,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ya(null)
  }
};
function rp() {
  const e = be((a, s) => ({
    x: a,
    y: s
  })), t = be(ya), r = be((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(ye, a, !0) : null, o = (a, s, l, d) => {
    const f = l.displaced.visible[a], c = !!(d.inVirtualList && d.effected[a]), u = cr(l), p = u && u.draggableId === a ? s : null;
    if (!f) {
      if (!c)
        return n(p);
      if (l.displaced.invisible[a])
        return null;
      const m = yt(d.displacedBy.point), x = e(m.x, m.y);
      return r(x, p, !0);
    }
    if (c)
      return n(p);
    const v = l.displacedBy.point, h = e(v.x, v.y);
    return r(h, p, f.shouldAnimate);
  };
  return (a, s) => {
    if (jt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const np = () => {
  const e = ep(), t = rp();
  return (n, o) => e(n, o) || t(n, o) || tp;
}, op = {
  dropAnimationFinished: Ki
}, ip = xi(np, op, null, {
  context: Sn,
  areStatePropsEqual: ha
})(Jf);
var ap = ip;
function xa(e) {
  return ir(In).isUsingCloneFor === e.draggableId && !e.isClone ? null : W.createElement(ap, e);
}
function sp(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return W.createElement(xa, rt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const _n = (e) => (t) => e === t, cp = _n("scroll"), lp = _n("auto"), up = _n("visible"), Wo = (e, t) => t(e.overflowX) || t(e.overflowY), dp = (e, t) => t(e.overflowX) && t(e.overflowY), Ea = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Wo(r, cp) || Wo(r, lp);
}, fp = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = kt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, b()), !Ea(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return dp(n, up) || process.env.NODE_ENV !== "production" && pe(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, wa = (e) => e == null ? null : e === document.body ? fp() ? e : null : e === document.documentElement ? null : Ea(e) ? e : wa(e.parentElement);
var Sa = wa, pp = (e) => {
  !e || !Sa(e.parentElement) || process.env.NODE_ENV !== "production" && pe(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Xr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Da = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Da(e.parentElement) : !1;
var mp = (e) => {
  const t = Sa(e), r = Da(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, gp = ({
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
    } = s, v = Qi({
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
  })(), d = o === "vertical" ? dn : Pi, f = vt({
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
const vp = (e, t) => {
  const r = Si(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = sn({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return cn({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var hp = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, d = vp(e, l), f = rr(d, n), c = (() => {
    if (!l)
      return null;
    const p = Si(l), v = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: rr(p, n),
      scroll: Xr(l),
      scrollSize: v,
      shouldClipSubject: s
    };
  })();
  return gp({
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
const bp = {
  passive: !1
}, yp = {
  passive: !0
};
var Uo = (e) => e.shouldPublishImmediately ? bp : yp;
const Xt = (e) => e && e.env.closestScrollable || null;
function xp(e) {
  const t = Q(null), r = ir(dr), n = Dn("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Cn(e), s = X(() => ({
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
  }), [s.id, i]), f = M(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? ye : Xr(E.env.closestScrollable);
  }, []), c = M(() => {
    const E = f();
    d(E.x, E.y);
  }, [f, d]), u = X(() => Tt(c), [c]), p = M(() => {
    const E = t.current, y = Xt(E);
    if (E && y || (process.env.NODE_ENV !== "production" ? b(!1, "Could not find scroll options while scrolling") : b()), E.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    u();
  }, [u, c]), v = M((E, y) => {
    t.current && (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect a droppable while a drag is occurring") : b());
    const N = a.current, R = N.getDroppableRef();
    R || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot collect without a droppable ref") : b());
    const C = mp(R), B = {
      ref: R,
      descriptor: s,
      env: C,
      scrollOptions: y
    };
    t.current = B;
    const F = hp({
      ref: R,
      descriptor: s,
      env: C,
      windowScroll: E,
      direction: N.direction,
      isDropDisabled: N.isDropDisabled,
      isCombineEnabled: N.isCombineEnabled,
      shouldClipSubject: !N.ignoreContainerClipping
    }), U = C.closestScrollable;
    return U && (U.setAttribute(Lo.contextId, r.contextId), U.addEventListener("scroll", p, Uo(B.scrollOptions)), process.env.NODE_ENV !== "production" && pp(U)), F;
  }, [r.contextId, s, p, a]), h = M(() => {
    const E = t.current, y = Xt(E);
    return E && y || (process.env.NODE_ENV !== "production" ? b(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : b()), Xr(y);
  }, []), m = M(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot stop drag when no active drag") : b());
    const y = Xt(E);
    t.current = null, y && (u.cancel(), y.removeAttribute(Lo.contextId), y.removeEventListener("scroll", p, Uo(E.scrollOptions)));
  }, [p, u]), x = M((E) => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? b(!1, "Cannot scroll when there is no drag") : b());
    const N = Xt(y);
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
  $e(() => (l.current = S.descriptor, o.droppable.register(S), () => {
    t.current && (process.env.NODE_ENV !== "production" && pe("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(S);
  }), [w, s, m, S, i, o.droppable]), $e(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), $e(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Vr() {
}
const zo = {
  width: 0,
  height: 0,
  margin: Zc
}, Ep = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? zo : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, wp = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = Ep({
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
    transition: r !== "none" ? Rt.placeholder : null
  };
}, Sp = (e) => {
  const t = Q(null), r = M(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Me(e.animate === "open");
  Ee(() => s ? n !== "open" ? (r(), l(!1), Vr) : t.current ? Vr : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Vr, [n, s, r]);
  const d = M((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = wp({
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
var Dp = W.memo(Sp);
function $r(e) {
  return typeof e == "boolean";
}
function Mr(e, t) {
  t.forEach((r) => r(e));
}
const Np = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? b(!1, "A Droppable requires a droppableId prop") : b()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? b(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : b());
}, function({
  props: t
}) {
  $r(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isDropDisabled must be a boolean") : b()), $r(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? b(!1, "isCombineEnabled must be a boolean") : b()), $r(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? b(!1, "ignoreContainerClipping must be a boolean") : b());
}, function({
  getDroppableRef: t
}) {
  va(t());
}], Cp = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && pe(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Op = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? b(!1, "Must provide a clone render function (renderClone) for virtual lists") : b());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? b(!1, "Expected virtual list to not have a placeholder") : b());
}];
function Ip(e) {
  Yt(() => {
    Mr(e, Np), e.props.mode === "standard" && Mr(e, Cp), e.props.mode === "virtual" && Mr(e, Op);
  });
}
class _p extends W.PureComponent {
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
const Rp = (e) => {
  const t = Jo(dr);
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
  } = e, w = M(() => o.current, []), S = M((A = null) => {
    o.current = A;
  }, []), E = M(() => i.current, []), y = M((A = null) => {
    i.current = A;
  }, []);
  Ip({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: E
  });
  const N = M(() => {
    n() && m({
      maxScroll: ta()
    });
  }, [n, m]);
  xp({
    droppableId: s,
    type: l,
    mode: d,
    direction: f,
    isDropDisabled: u,
    isCombineEnabled: p,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const R = X(() => W.createElement(_p, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: A,
    data: Y,
    animate: J
  }) => W.createElement(Dp, {
    placeholder: Y,
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
      render: Y
    } = h, J = W.createElement(xa, {
      draggableId: A.draggableId,
      index: A.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (te, $) => Y(te, $, A));
    return Xa.createPortal(J, x());
  }
  return W.createElement(In.Provider, {
    value: F
  }, a(C, v), U());
};
var Ap = Rp;
function Pp() {
  return document.body || (process.env.NODE_ENV !== "production" ? b(!1, "document.body is not ready") : b()), document.body;
}
const Ho = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Pp
}, Na = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Ho)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Ho[r]
    });
  return t;
}, Lr = (e, t) => e === t.droppable.type, Yo = (e, t) => t.draggables[e.draggable.id], Tp = () => {
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
    const s = Na(a), l = s.droppableId, d = s.type, f = !s.isDropDisabled, c = s.renderClone;
    if (jt(i)) {
      const u = i.critical;
      if (!Lr(d, u))
        return t;
      const p = Yo(u, i.dimensions), v = Ve(i.impact) === l;
      return n(l, f, v, v, p, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!Lr(d, u.critical))
        return t;
      const p = Yo(u.critical, i.dimensions);
      return n(l, f, ba(u.result) === l, Ve(u.impact) === l, p, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!Lr(d, u.critical))
        return t;
      const p = Ve(u.impact) === l, v = !!(u.impact.at && u.impact.at.type === "COMBINE"), h = u.critical.droppable.id === l;
      return p ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, Vp = {
  updateViewportMaxScroll: du
}, $p = xi(Tp, Vp, (e, t, r) => ({
  ...Na(r),
  ...e,
  ...t
}), {
  context: Sn,
  areStatePropsEqual: ha
})(Ap);
var Mp = $p;
const Ca = ({
  children: e,
  className: t
}) => /* @__PURE__ */ O.jsx("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), wm = ({
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
  const [f, c] = Me(null), [u, p] = Me(e);
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
  ] }) : i ? /* @__PURE__ */ O.jsx("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ O.jsx(Qo, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ O.jsx(Ca, { className: d, children: /* @__PURE__ */ O.jsx("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ O.jsx("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ O.jsx(Bf, { onDragEnd: m, children: /* @__PURE__ */ O.jsx(Mp, { droppableId: "dropArray", direction: "vertical", children: (x) => /* @__PURE__ */ O.jsxs("table", { className: "w-full", children: [
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
              sp,
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
};
function Oa(e, t) {
  const [r, n] = Me(e);
  return Ee(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Sm = ({ placeholder: e, setValue: t, value: r, parentClassName: n }) => {
  const [o, i] = Me(r), a = Oa(o, 300);
  return Ee(() => {
    t == null || t(a);
  }, [a]), /* @__PURE__ */ O.jsxs("div", { className: `relative h-fit w-full ${n}`, children: [
    /* @__PURE__ */ O.jsx(
      Zt,
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
}, Dm = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Me(null);
  return /* @__PURE__ */ O.jsx(Ca, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ O.jsx("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ O.jsxs(
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
}, Rn = "-", Lp = (e) => {
  const t = Fp(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Rn);
      return s[0] === "" && s.length !== 1 && s.shift(), Ia(s, t) || Bp(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, Ia = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Ia(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Rn);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, qo = /^\[(.+)\]$/, Bp = (e) => {
  if (qo.test(e)) {
    const t = qo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Fp = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return jp(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    Jr(a, n, i, t);
  }), n;
}, Jr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Ko(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (kp(o)) {
        Jr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Jr(a, Ko(t, i), r, n);
    });
  });
}, Ko = (e, t) => {
  let r = e;
  return t.split(Rn).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, kp = (e) => e.isThemeGetter, jp = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, Gp = (e) => {
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
}, _a = "!", Wp = (e) => {
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
    const u = l.length === 0 ? s : s.substring(f), p = u.startsWith(_a), v = p ? u.substring(1) : u, h = c && c > f ? c - f : void 0;
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
}, Up = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, zp = (e) => ({
  cache: Gp(e.cacheSize),
  parseClassName: Wp(e),
  ...Lp(e)
}), Hp = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [];
  let a = "";
  for (let s = e.length - 1; s >= 0; ) {
    for (; e[s] === " "; )
      --s;
    const l = e.lastIndexOf(" ", s), d = e.slice(l === -1 ? 0 : l + 1, s + 1);
    s = l;
    const {
      modifiers: f,
      hasImportantModifier: c,
      baseClassName: u,
      maybePostfixModifierPosition: p
    } = r(d);
    let v = !!p, h = n(v ? u.substring(0, p) : u);
    if (!h) {
      if (!v) {
        a = d + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (h = n(u), !h) {
        a = d + (a.length > 0 ? " " + a : a);
        continue;
      }
      v = !1;
    }
    const m = Up(f).join(":"), x = c ? m + _a : m, w = x + h;
    if (i.includes(w))
      continue;
    i.push(w);
    const S = o(h, v);
    for (let E = 0; E < S.length; ++E) {
      const y = S[E];
      i.push(x + y);
    }
    a = d + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Yp() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ra(t)) && (n && (n += " "), n += r);
  return n;
}
const Ra = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ra(e[n])) && (r && (r += " "), r += t);
  return r;
};
function qp(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const d = t.reduce((f, c) => c(f), e());
    return r = zp(d), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const d = n(l);
    if (d)
      return d;
    const f = Hp(l, r);
    return o(l, f), f;
  }
  return function() {
    return i(Yp.apply(null, arguments));
  };
}
const me = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Aa = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kp = /^\d+\/\d+$/, Xp = /* @__PURE__ */ new Set(["px", "full", "screen"]), Jp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, em = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tm = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xe = (e) => gt(e) || Xp.has(e) || Kp.test(e), Qe = (e) => Et(e, "length", lm), gt = (e) => !!e && !Number.isNaN(Number(e)), Br = (e) => Et(e, "number", gt), Ot = (e) => !!e && Number.isInteger(Number(e)), rm = (e) => e.endsWith("%") && gt(e.slice(0, -1)), H = (e) => Aa.test(e), et = (e) => Jp.test(e), nm = /* @__PURE__ */ new Set(["length", "size", "percentage"]), om = (e) => Et(e, nm, Pa), im = (e) => Et(e, "position", Pa), am = /* @__PURE__ */ new Set(["image", "url"]), sm = (e) => Et(e, am, dm), cm = (e) => Et(e, "", um), It = () => !0, Et = (e, t, r) => {
  const n = Aa.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, lm = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Zp.test(e) && !Qp.test(e)
), Pa = () => !1, um = (e) => em.test(e), dm = (e) => tm.test(e), fm = () => {
  const e = me("colors"), t = me("spacing"), r = me("blur"), n = me("brightness"), o = me("borderColor"), i = me("borderRadius"), a = me("borderSpacing"), s = me("borderWidth"), l = me("contrast"), d = me("grayscale"), f = me("hueRotate"), c = me("invert"), u = me("gap"), p = me("gradientColorStops"), v = me("gradientColorStopPositions"), h = me("inset"), m = me("margin"), x = me("opacity"), w = me("padding"), S = me("saturate"), E = me("scale"), y = me("sepia"), N = me("skew"), R = me("space"), C = me("translate"), B = () => ["auto", "contain", "none"], F = () => ["auto", "hidden", "clip", "visible", "scroll"], U = () => ["auto", H, t], A = () => [H, t], Y = () => ["", Xe, Qe], J = () => ["auto", gt, H], te = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], $ = () => ["solid", "dashed", "dotted", "double", "none"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], K = () => ["", "0", H], re = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], z = () => [gt, H];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [It],
      spacing: [Xe, Qe],
      blur: ["none", "", et, H],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", et, H],
      borderSpacing: A(),
      borderWidth: Y(),
      contrast: z(),
      grayscale: K(),
      hueRotate: z(),
      invert: K(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [rm, Qe],
      inset: U(),
      margin: U(),
      opacity: z(),
      padding: A(),
      saturate: z(),
      scale: z(),
      sepia: K(),
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
        aspect: ["auto", "square", "video", H]
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
        "break-after": re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": re()
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
        object: [...te(), H]
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
        z: ["auto", Ot, H]
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
        flex: ["1", "auto", "initial", "none", H]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: K()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: K()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ot, H]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [It]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ot, H]
        }, H]
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
        "grid-rows": [It]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ot, H]
        }, H]
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
        "auto-cols": ["auto", "min", "max", "fr", H]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", H]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [H, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [et]
        }, et]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [H, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Br]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [It]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", gt, Br]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Xe, H]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", H]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", H]
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
        decoration: [...$(), "wavy"]
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
        "underline-offset": ["auto", Xe, H]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
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
        content: ["none", H]
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
        bg: [...te(), im]
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
        bg: ["auto", "cover", "contain", om]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, sm]
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
        border: [...$(), "hidden"]
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
        divide: $()
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
        outline: ["", ...$()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Xe, H]
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
        ring: Y()
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
        shadow: ["", "inner", "none", et, cm]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [It]
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
        "mix-blend": [...L(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
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
        "drop-shadow": ["", "none", et, H]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
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
        ease: ["linear", "in", "out", "in-out", H]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", H]
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
        rotate: [Ot, H]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
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
        "will-change": ["auto", "scroll", "contents", "transform", H]
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
        stroke: [Xe, Qe, Br]
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
}, pm = /* @__PURE__ */ qp(fm), Nm = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = Me(!1), [a, s] = Me(""), l = Oa(a, 100), d = Q(null);
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
        Zt,
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
          className: pm(
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
            c.icon && /* @__PURE__ */ O.jsx(Zt, { name: c.icon }),
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
}, Cm = () => {
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
  vm as Button,
  hm as Checkbox,
  Em as Chips,
  Zr as ErrorText,
  Zt as Icon,
  xm as Input,
  Dm as List,
  Qo as Loader,
  Nm as MultiSelectSearch,
  Sm as Search,
  bm as Select,
  wm as Table,
  ym as Textarea,
  Ca as Wrapper,
  Oa as useDebounce,
  Cm as useScroll
};
