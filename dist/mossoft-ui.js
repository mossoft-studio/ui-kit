import { jsx as N, jsxs as ie, Fragment as at } from "react/jsx-runtime";
import * as B from "react";
import M, { memo as _i, useRef as G, useCallback as Ti, useState as fe, useEffect as oe, useMemo as to, useLayoutEffect as ro, useContext as no } from "react";
import { motion as yr, AnimatePresence as oo } from "framer-motion";
import { twMerge as Er } from "tailwind-merge";
import $i, { flushSync as io } from "react-dom";
const Vi = ({ name: e, className: t, ...r }) => /* @__PURE__ */ N(
  "svg",
  {
    className: `text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ N("use", { className: "w-full h-full object-contain", href: `#${e}` })
  }
), st = /* @__PURE__ */ _i(Vi), Bi = ({ style: e, text: t }) => /* @__PURE__ */ ie("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ N("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ N("span", { className: "text-base", children: t })
] }), ao = Bi, Mi = ({
  children: e,
  onClick: t,
  debounceTimeMs: r = 500,
  className: n,
  isLoading: o,
  variant: i,
  icon: a,
  disabled: s,
  ...c
}) => {
  const d = G(null), f = Ti(
    (u) => {
      d.current || (t == null || t(u), d.current = setTimeout(() => {
        d.current = null;
      }, r));
    },
    [t, r]
  ), l = [
    "relative inline-flex items-center justify-center font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    "rounded-2xl px-6 py-3 text-sm md:text-base",
    n,
    i === "primary" && "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    i === "secondary" && "bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary",
    i === "danger" && "bg-danger/10 text-danger hover:bg-danger/20 focus:ring-danger",
    i === "link" && "bg-transparent text-primary hover:underline px-2 py-1 focus:ring-primary",
    i === "small-primary" && "bg-primary text-white text-xs px-4 py-2 hover:bg-primary/90 focus:ring-primary",
    i === "small-secondary" && "bg-primary/20 text-primary text-xs px-4 py-2 hover:bg-primary/30 focus:ring-primary",
    i === "small-danger" && "bg-danger/10 text-danger text-xs px-4 py-2 hover:bg-danger/20 focus:ring-danger",
    i === "tab" && "bg-primary text-white text-sm md:text-base px-5 py-2 rounded-full focus:ring-primary"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ N(
    yr.button,
    {
      disabled: s || o,
      onClick: f,
      className: l,
      ...c,
      whileTap: { scale: 0.96 },
      whileHover: !s && !o ? { scale: 1.02 } : void 0,
      children: o ? /* @__PURE__ */ N(ao, { style: { width: 20, height: 20 } }) : /* @__PURE__ */ ie(at, { children: [
        e,
        a && /* @__PURE__ */ N(
          st,
          {
            name: a,
            className: `ml-2 ${i.includes("small") ? "w-4 h-4" : "w-5 h-5"}`
          }
        )
      ] })
    }
  );
}, jf = Mi, Li = ({ error: e }) => /* @__PURE__ */ N("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ N("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), xr = Li, Fi = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ ie(at, { children: [
  /* @__PURE__ */ ie(
    "label",
    {
      onClick: (d) => d.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ N(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ N("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ N(
          "input",
          {
            disabled: c,
            checked: s,
            onChange: (d) => e(d.target.checked),
            type: "checkbox",
            className: o
          }
        )
      ]
    }
  ),
  a && /* @__PURE__ */ N(xr, { error: a })
] }), Hf = Fi, Gi = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ N("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ N(at, { children: o.title ? /* @__PURE__ */ N(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ N(at, {}) })) }), zf = Gi;
function Dr(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var ct;
ct || (ct = {});
function _e() {
}
function ki(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function je(e) {
  return !!(e || "").match(/\d/);
}
function Ue(e) {
  return e == null;
}
function Wi(e) {
  return typeof e == "number" && isNaN(e);
}
function so(e) {
  return Ue(e) || Wi(e) || typeof e == "number" && !isFinite(e);
}
function co(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Ui(e) {
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
function ji(e, t, r) {
  var n = Ui(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Hi(e) {
  var t = G(e);
  t.current = e;
  var r = G(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Nr(e, t) {
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
function zi(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function lo(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function Zr(e, t) {
  return Array(t + 1).join(e);
}
function uo(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + Zr("0", Math.abs(a)) + o : a >= s ? o = o + Zr("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function Qr(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = Nr(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, c = parseFloat("0." + (a || "0")), d = a.length <= t ? "0." + a : c.toFixed(t), f = d.split("."), l = i;
  i && Number(f[0]) && (l = i.split("").reverse().reduce(function(h, m, y) {
    return h.length > y ? (Number(h[0]) + Number(m)).toString() + h.substring(1, h.length) : m + h;
  }, f[0]));
  var u = lo(f[1] || "", t, r), p = s ? "-" : "", g = n ? "." : "";
  return "" + p + l + g + u;
}
function Ve(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var fo = /* @__PURE__ */ ki(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), qi = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Yi(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Ht(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Ki() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function po(e) {
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
function mo(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Xi(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Ji(e, t, r, n, o, i, a) {
  a === void 0 && (a = Xi);
  var s = o.findIndex(function(x) {
    return x;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, n = n + c.length);
  for (var d = r.length, f = e.length, l = {}, u = new Array(d), p = 0; p < d; p++) {
    u[p] = -1;
    for (var g = 0, h = f; g < h; g++) {
      var m = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: p,
        formattedValueIndex: g
      });
      if (m && l[g] !== !0) {
        u[p] = g, l[g] = !0;
        break;
      }
    }
  }
  for (var y = n; y < d && (u[y] === -1 || !i(r[y])); )
    y++;
  var E = y === d || u[y] === -1 ? f : u[y];
  for (y = n - 1; y > 0 && u[y] === -1; )
    y--;
  var D = y === -1 || u[y] === -1 ? 0 : u[y] + 1;
  return D > E ? E : n - D < E - n ? D : E;
}
function Pt(e, t, r, n) {
  var o = e.length;
  if (t = Yi(t, 0, o), n === "left") {
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
function Zi(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(je(e[r]) || je(e[r - 1]));
  return t;
}
function go(e, t, r, n, o, i) {
  i === void 0 && (i = _e);
  var a = Hi(function(g, h) {
    var m, y;
    return so(g) ? (y = "", m = "") : typeof g == "number" || h ? (y = typeof g == "number" ? uo(g) : g, m = n(y)) : (y = o(g, void 0), m = n(y)), { formattedValue: m, numAsString: y };
  }), s = fe(function() {
    return a(Ue(e) ? t : e, r);
  }), c = s[0], d = s[1], f = function(g, h) {
    g.formattedValue !== c.formattedValue && d({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), i(g, h);
  }, l = e, u = r;
  Ue(e) && (l = c.numAsString, u = !0);
  var p = a(l, u);
  return to(function() {
    d(p);
  }, [p.formattedValue]), [c, f];
}
function Qi(e) {
  return e.replace(/[^0-9]/g, "");
}
function ea(e) {
  return e;
}
function vo(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = ea);
  var s = e.removeFormatting;
  s === void 0 && (s = Qi);
  var c = e.defaultValue, d = e.valueIsNumericString, f = e.onValueChange, l = e.isAllowed, u = e.onChange;
  u === void 0 && (u = _e);
  var p = e.onKeyDown;
  p === void 0 && (p = _e);
  var g = e.onMouseUp;
  g === void 0 && (g = _e);
  var h = e.onFocus;
  h === void 0 && (h = _e);
  var m = e.onBlur;
  m === void 0 && (m = _e);
  var y = e.value, E = e.getCaretBoundary;
  E === void 0 && (E = Zi);
  var D = e.isValidInputCharacter;
  D === void 0 && (D = je);
  var x = e.isCharacterSame, b = Dr(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), w = go(y, c, !!d, a, s, f), _ = w[0], I = _.formattedValue, W = _.numAsString, $ = w[1], U = G(), k = G({ formattedValue: I, numAsString: W }), re = function(C, P) {
    k.current = { formattedValue: C.formattedValue, numAsString: C.value }, $(C, P);
  }, ce = fe(!1), ne = ce[0], T = ce[1], R = G(null), L = G({
    setCaretTimeout: null,
    focusTimeout: null
  });
  oe(function() {
    return T(!0), function() {
      clearTimeout(L.current.setCaretTimeout), clearTimeout(L.current.focusTimeout);
    };
  }, []);
  var K = a, J = function(C, P) {
    var V = parseFloat(P);
    return {
      formattedValue: C,
      value: P,
      floatValue: isNaN(V) ? void 0 : V
    };
  }, Y = function(C, P, V) {
    C.selectionStart === 0 && C.selectionEnd === C.value.length || (Ve(C, P), L.current.setCaretTimeout = setTimeout(function() {
      C.value === V && C.selectionStart !== P && Ve(C, P);
    }, 0));
  }, Q = function(C, P, V) {
    return Pt(C, P, E(C), V);
  }, ue = function(C, P, V) {
    var ee = E(P), pe = Ji(P, I, C, V, ee, D, x);
    return pe = Pt(P, pe, ee), pe;
  }, we = function(C) {
    var P = C.formattedValue;
    P === void 0 && (P = "");
    var V = C.input, ee = C.source, pe = C.event, te = C.numAsString, X;
    if (V) {
      var Re = C.inputValue || V.value, Te = Ht(V);
      V.value = P, X = ue(Re, P, Te), X !== void 0 && Y(V, X, P);
    }
    P !== I && re(J(P, te), { event: pe, source: ee });
  };
  oe(function() {
    var C = k.current, P = C.formattedValue, V = C.numAsString;
    (I !== P || W !== V) && re(J(I, W), {
      event: void 0,
      source: ct.props
    });
  }, [I, W]);
  var ge = R.current ? Ht(R.current) : void 0, Ee = typeof window < "u" ? ro : oe;
  Ee(function() {
    var C = R.current;
    if (I !== k.current.formattedValue && C) {
      var P = ue(k.current.formattedValue, I, ge);
      C.value = I, Y(C, P, I);
    }
  }, [I]);
  var Ce = function(C, P, V) {
    var ee = P.target, pe = U.current ? qi(U.current, ee.selectionEnd) : fo(I, C), te = Object.assign(Object.assign({}, pe), { lastValue: I }), X = s(C, te), Re = K(X);
    if (X = s(Re, void 0), l && !l(J(Re, X))) {
      var Te = P.target, $e = Ht(Te), jt = ue(C, I, $e);
      return Te.value = I, Y(Te, jt, I), !1;
    }
    return we({
      formattedValue: Re,
      numAsString: X,
      inputValue: C,
      event: P,
      source: V,
      input: P.target
    }), !0;
  }, Oe = function(C, P) {
    P === void 0 && (P = 0);
    var V = C.selectionStart, ee = C.selectionEnd;
    U.current = { selectionStart: V, selectionEnd: ee + P };
  }, Ie = function(C) {
    var P = C.target, V = P.value, ee = Ce(V, C, ct.event);
    ee && u(C), U.current = void 0;
  }, Ae = function(C) {
    var P = C.target, V = C.key, ee = P.selectionStart, pe = P.selectionEnd, te = P.value;
    te === void 0 && (te = "");
    var X;
    V === "ArrowLeft" || V === "Backspace" ? X = Math.max(ee - 1, 0) : V === "ArrowRight" ? X = Math.min(ee + 1, te.length) : V === "Delete" && (X = ee);
    var Re = 0;
    V === "Delete" && ee === pe && (Re = 1);
    var Te = V === "ArrowLeft" || V === "ArrowRight";
    if (X === void 0 || ee !== pe && !Te) {
      p(C), Oe(P, Re);
      return;
    }
    var $e = X;
    if (Te) {
      var jt = V === "ArrowLeft" ? "left" : "right";
      $e = Q(te, X, jt), $e !== X && C.preventDefault();
    } else V === "Delete" && !D(te[X]) ? $e = Q(te, X, "right") : V === "Backspace" && !D(te[X]) && ($e = Q(te, X, "left"));
    $e !== X && Y(P, $e, te), p(C), Oe(P, Re);
  }, qe = function(C) {
    var P = C.target, V = function() {
      var ee = P.selectionStart, pe = P.selectionEnd, te = P.value;
      if (te === void 0 && (te = ""), ee === pe) {
        var X = Q(te, ee);
        X !== ee && Y(P, X, te);
      }
    };
    V(), requestAnimationFrame(function() {
      V();
    }), g(C), Oe(P);
  }, S = function(C) {
    C.persist && C.persist();
    var P = C.target, V = C.currentTarget;
    R.current = P, L.current.focusTimeout = setTimeout(function() {
      var ee = P.selectionStart, pe = P.selectionEnd, te = P.value;
      te === void 0 && (te = "");
      var X = Q(te, ee);
      X !== ee && !(ee === 0 && pe === te.length) && Y(P, X, te), h(Object.assign(Object.assign({}, C), { currentTarget: V }));
    }, 0);
  }, ve = function(C) {
    R.current = null, clearTimeout(L.current.focusTimeout), clearTimeout(L.current.setCaretTimeout), m(C);
  }, O = ne && Ki() ? "numeric" : void 0, Pe = Object.assign({ inputMode: O }, b, {
    type: t,
    value: I,
    onChange: Ie,
    onKeyDown: Ae,
    onMouseUp: qe,
    onFocus: S,
    onBlur: ve
  });
  if (r === "text")
    return o ? M.createElement(M.Fragment, null, o(I, b) || null) : M.createElement("span", Object.assign({}, b, { ref: i }), I);
  if (n) {
    var Ye = n;
    return M.createElement(Ye, Object.assign({}, Pe, { ref: i }));
  }
  return M.createElement("input", Object.assign({}, Pe, { ref: i }));
}
function en(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = Mt(t), d = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, u = Nr(e, a), p = u.beforeDecimal, g = u.afterDecimal, h = u.addNegation;
  return r !== void 0 && (g = lo(g, r, !!n)), d && (p = ji(p, d, s)), o && (p = o + p), i && (g = g + i), h && (p = "-" + p), e = p + (l && f || "") + g, e;
}
function Mt(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function ta(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function ra(e, t) {
  return new RegExp("(^-)|[0-9]|" + co(e), "g");
}
function na(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function oa(e, t, r) {
  var n;
  t === void 0 && (t = po(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, d = t.to, f = d.start, l = d.end, u = Mt(r), p = u.allowedDecimalSeparators, g = u.decimalSeparator, h = e[l] === g;
  if (je(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - f === 1 && p.indexOf(e[f]) !== -1) {
    var m = s === 0 ? "" : g;
    e = e.substring(0, f) + m + e.substring(f + 1, e.length);
  }
  var y = function(R, L, K) {
    var J = !1, Y = !1;
    i.startsWith("-") ? J = !1 : R.startsWith("--") ? (J = !1, Y = !0) : a.startsWith("-") && R.length === a.length ? J = !1 : R[0] === "-" && (J = !0);
    var Q = J ? 1 : 0;
    return Y && (Q = 2), Q && (R = R.substring(Q), L -= Q, K -= Q), { value: R, start: L, end: K, hasNegation: J };
  }, E = y(e, f, l), D = E.hasNegation;
  n = E, e = n.value, f = n.start, l = n.end;
  var x = y(t.lastValue, c.start, c.end), b = x.start, w = x.end, _ = x.value, I = e.substring(f, l);
  e.length && _.length && (b > _.length - a.length || w < i.length) && !(I && a.startsWith(I)) && (e = _);
  var W = 0;
  e.startsWith(i) ? W += i.length : f < i.length && (W = f), e = e.substring(W), l -= W;
  var $ = e.length, U = e.length - a.length;
  e.endsWith(a) ? $ = U : (l > U || l > e.length - a.length) && ($ = l), e = e.substring(0, $), e = ta(D ? "-" + e : e, o), e = (e.match(ra(g)) || []).join("");
  var k = e.indexOf(g);
  e = e.replace(new RegExp(co(g), "g"), function(R, L) {
    return L === k ? "." : "";
  });
  var re = Nr(e, o), ce = re.beforeDecimal, ne = re.afterDecimal, T = re.addNegation;
  return d.end - d.start < c.end - c.start && ce === "" && h && !parseFloat(ne) && (e = T ? "-" : ""), e;
}
function ia(e, t) {
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
function aa(e) {
  var t = Mt(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function sa(e) {
  e = aa(e);
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = _e);
  var i = e.onBlur;
  i === void 0 && (i = _e);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, d = e.prefix;
  d === void 0 && (d = "");
  var f = e.defaultValue, l = e.value, u = e.valueIsNumericString, p = e.onValueChange, g = Dr(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = Mt(e), m = h.decimalSeparator, y = h.allowedDecimalSeparators, E = function(T) {
    return en(T, e);
  }, D = function(T, R) {
    return oa(T, R, e);
  }, x = Ue(l) ? f : l, b = u ?? na(x, d, t);
  Ue(l) ? Ue(f) || (b = b || typeof f == "number") : b = b || typeof l == "number";
  var w = function(T) {
    return so(T) ? T : (typeof T == "number" && (T = uo(T)), b && typeof s == "number" ? Qr(T, s, !!c) : T);
  }, _ = go(w(l), w(f), !!b, E, D, p), I = _[0], W = I.numAsString, $ = I.formattedValue, U = _[1], k = function(T) {
    var R = T.target, L = T.key, K = R.selectionStart, J = R.selectionEnd, Y = R.value;
    if (Y === void 0 && (Y = ""), (L === "Backspace" || L === "Delete") && J < d.length) {
      T.preventDefault();
      return;
    }
    if (K !== J) {
      o(T);
      return;
    }
    L === "Backspace" && Y[0] === "-" && K === d.length + 1 && r && Ve(R, 1), s && c && (L === "Backspace" && Y[K - 1] === m ? (Ve(R, K - 1), T.preventDefault()) : L === "Delete" && Y[K] === m && T.preventDefault()), y != null && y.includes(L) && Y[K] === m && Ve(R, K + 1);
    var Q = a === !0 ? "," : a;
    L === "Backspace" && Y[K - 1] === Q && Ve(R, K - 1), L === "Delete" && Y[K] === Q && Ve(R, K + 1), o(T);
  }, re = function(T) {
    var R = W;
    if (R.match(/\d/g) || (R = ""), n || (R = zi(R)), c && s && (R = Qr(R, s, c)), R !== W) {
      var L = en(R, e);
      U({
        formattedValue: L,
        value: R,
        floatValue: parseFloat(R)
      }, {
        event: T,
        source: ct.event
      });
    }
    i(T);
  }, ce = function(T) {
    return T === m ? !0 : je(T);
  }, ne = function(T) {
    var R = T.currentValue, L = T.lastValue, K = T.formattedValue, J = T.currentValueIndex, Y = T.formattedValueIndex, Q = R[J], ue = K[Y], we = fo(L, R), ge = we.to, Ee = function(Ce) {
      return D(Ce).indexOf(".") + d.length;
    };
    return l === 0 && c && s && R[ge.start] === m && Ee(R) < J && Ee(K) > Y ? !1 : J >= ge.start && J < ge.end && y && y.includes(Q) && ue === m ? !0 : Q === ue;
  };
  return Object.assign(Object.assign({}, g), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: ce,
    isCharacterSame: ne,
    onValueChange: U,
    format: E,
    removeFormatting: D,
    getCaretBoundary: function(T) {
      return ia(T, e);
    },
    onKeyDown: k,
    onBlur: re
  });
}
function ca(e) {
  var t = sa(e);
  return M.createElement(vo, Object.assign({}, t));
}
function la(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), c = 0, d = r.length; c < d; c++)
    r[c] === i && (s[c] = e[a] || mo(o, a), a += 1);
  return s.join("");
}
function ua(e, t, r) {
  t === void 0 && (t = po(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(m) {
    return n[m] === o;
  }, d = function(m, y) {
    for (var E = "", D = 0; D < m.length; D++)
      c(y + D) && je(m[D]) && (E += m[D]);
    return E;
  }, f = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var l = "", u = 0; u < e.length; u++)
      if (c(u))
        je(e[u]) && (l += e[u]);
      else if (e[u] !== n[u])
        return f(e);
    return l;
  }
  var p = s.substring(0, i.start), g = e.substring(a.start, a.end), h = s.substring(i.end);
  return "" + d(p, 0) + f(g) + d(h, i.end);
}
function da(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(u, p) {
    var g = void 0;
    u === o && (a++, g = mo(n, a - 1), s === -1 && e[p] === g && (s = p)), c[p] = g;
  });
  for (var d = function(u) {
    return r[u] === o && e[u] !== c[u];
  }, f = 0, l = i.length; f < l; f++)
    i[f] = f === s || d(f) || d(f - 1);
  return i[r.indexOf(o)] = !0, i;
}
function fa(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function pa(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function ma(e) {
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = _e);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = Dr(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  fa(e);
  var d = function(g) {
    return da(g, e);
  }, f = function(g) {
    var h = g.key, m = g.target, y = m.selectionStart, E = m.selectionEnd, D = m.value;
    if (y !== E) {
      n(g);
      return;
    }
    var x = y;
    if (h === "Backspace" || h === "Delete") {
      var b = "right";
      if (h === "Backspace") {
        for (; x > 0 && t[x - 1] !== o; )
          x--;
        b = "left";
      } else {
        for (var w = t.length; x < w && t[x] !== o; )
          x++;
        b = "right";
      }
      x = Pt(D, x, d(D), b);
    } else t[x] !== o && h !== "ArrowLeft" && h !== "ArrowRight" && (x = Pt(D, x + 1, d(D), "right"));
    x !== y && Ve(m, x), n(g);
  }, l = Ue(i) ? a : i, u = s ?? pa(l, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: u });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: u,
    inputMode: r,
    format: function(g) {
      return la(g, p);
    },
    removeFormatting: function(g, h) {
      return ua(g, h, p);
    },
    getCaretBoundary: d,
    onKeyDown: f
  });
}
function ga(e) {
  var t = ma(e);
  return M.createElement(vo, Object.assign({}, t));
}
const va = {
  sm: {
    height: "h-10",
    paddingX: "px-2",
    text: "text-sm",
    postfixPadding: "pr-2",
    labelMb: "mb-1"
  },
  md: {
    height: "h-12",
    paddingX: "px-3",
    text: "text-base",
    postfixPadding: "pr-3",
    labelMb: "mb-1.5"
  },
  lg: {
    height: "h-14",
    paddingX: "px-4",
    text: "text-lg",
    postfixPadding: "pr-4",
    labelMb: "mb-2"
  }
}, ha = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, ba = ({
  size: e = "md",
  type: t,
  field: r,
  label: n,
  fieldState: o,
  postfix: i,
  labelClassName: a,
  className: s,
  numberWrapperClassname: c,
  format: d,
  wrapperClassName: f,
  decimalScale: l = 1,
  ...u
}) => {
  var y;
  const p = !!(o != null && o.error), g = va[e], h = `${g.height} w-full bg-white text-black placeholder:text-dark-gray ${g.text} rounded-xl border transition-colors duration-150 outline-none border-gray focus:border-primary disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed`, m = "!border-danger focus:border-danger";
  return /* @__PURE__ */ ie("label", { className: `relative block w-full ${f || ""}`, children: [
    d ? /* @__PURE__ */ N(
      ga,
      {
        format: d,
        onValueChange: (E) => {
          var D;
          r == null || r.onChange((D = E.value.replace("_", "")) == null ? void 0 : D.toString());
        },
        value: (y = r == null ? void 0 : r.value) == null ? void 0 : y.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: t,
        mask: "_",
        style: { fontSize: "16px" },
        className: `${h} ${g.paddingX} ${p ? m : ""} ${s || ""}`,
        "aria-invalid": p || void 0,
        ...u
      }
    ) : t === "number" ? /* @__PURE__ */ ie(
      "div",
      {
        className: `flex items-center justify-between rounded-xl border bg-white ${g.height} ${p ? "border-danger" : "border-gray"} ${c || ""}`,
        children: [
          /* @__PURE__ */ N(
            ca,
            {
              decimalScale: l,
              style: { fontSize: "16px" },
              onValueChange: (E) => {
                var D;
                return r == null ? void 0 : r.onChange(+((D = E.value.replace("_", "")) == null ? void 0 : D.toString()));
              },
              value: typeof (r == null ? void 0 : r.value) == "number" ? r == null ? void 0 : r.value : Number((r == null ? void 0 : r.value) ?? 0),
              className: `flex-1 bg-transparent border-0 ${g.paddingX} ${g.text} placeholder:text-dark-gray focus:outline-none`,
              "aria-invalid": p || void 0,
              ...u,
              ...ha.number
            }
          ),
          i ? /* @__PURE__ */ N(
            "span",
            {
              className: `${g.postfixPadding} ${g.text} text-dark-gray select-none`,
              children: i
            }
          ) : null
        ]
      }
    ) : /* @__PURE__ */ N(
      "input",
      {
        ...r,
        ...u,
        type: t,
        style: { fontSize: "16px" },
        className: `${h} ${g.paddingX} ${p ? m : ""} ${s || ""}`,
        "aria-invalid": p || void 0
      }
    ),
    /* @__PURE__ */ N("div", { className: "absolute w-full items-center flex justify-center flex-row min-h-6", children: /* @__PURE__ */ N(oo, { children: (o == null ? void 0 : o.error) && Object.keys(o.error).length > 0 && /* @__PURE__ */ N(
      yr.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ N(xr, { error: o.error })
      }
    ) }) })
  ] });
}, qf = ba, ya = ({
  children: e,
  className: t
}) => /* @__PURE__ */ N(
  "div",
  {
    className: Er(
      "bg-main rounded-2xl p-5 border-primary/10 border",
      t
    ),
    children: e
  }
), ho = ya, Ea = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = fe(null);
  return /* @__PURE__ */ N(ho, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ N("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ ie(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ N("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ N("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, Yf = Ea;
function bo(e, t) {
  const [r, n] = fe(e);
  return oe(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const xa = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = fe(!1), [a, s] = fe(""), c = bo(a, 100), d = G(null);
  oe(() => {
    const l = (u) => {
      d.current && !d.current.contains(u.target) && i(!1);
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, []);
  const f = (l) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(l)) && (t == null ? void 0 : t.value.filter((u) => u !== l)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, l] || [l]
    );
  };
  return /* @__PURE__ */ ie("div", { ref: d, className: "relative", children: [
    /* @__PURE__ */ ie("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ N(
        st,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ N(
        "input",
        {
          ...n,
          ref: d,
          className: Er(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && a || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var u;
              return (u = e.find((p) => p.value === l)) == null ? void 0 : u.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (l) => s(l.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ N("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var u;
      return /* @__PURE__ */ N(
        "li",
        {
          onClick: () => f(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ ie("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ N(st, { name: l.icon }),
            /* @__PURE__ */ N(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((u = t == null ? void 0 : t.value) == null ? void 0 : u.includes(l.value)) && "text-primary"}`,
                value: l.value,
                children: l.label
              }
            )
          ] })
        },
        l.value
      );
    }) })
  ] });
}, Kf = xa, Da = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = fe(r), s = bo(i, 300);
  return oe(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ ie("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ N(
      st,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ N(
      "input",
      {
        placeholder: e,
        onChange: (c) => a(c.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${n}`
      }
    )
  ] });
}, Xf = Da, Na = {
  sm: { height: "h-10", paddingX: "px-2", text: "text-sm" },
  md: { height: "h-12", paddingX: "px-3", text: "text-base" },
  lg: { height: "h-14", paddingX: "px-4", text: "text-lg" }
};
function et(...e) {
  return e.filter(Boolean).join(" ");
}
const Sa = ({
  value: e,
  onChange: t,
  options: r,
  placeholder: n,
  size: o = "md",
  field: i,
  disabled: a,
  fieldState: s,
  className: c,
  wrapperClassName: d
}) => {
  const [f, l] = fe(!1), u = G(null), p = Na[o], g = !!(s != null && s.error), h = to(
    () => Math.max(
      0,
      r.findIndex((x) => x.value === e)
    ),
    [r, e]
  ), [m, y] = fe(h);
  oe(() => y(h), [h]), oe(() => {
    const x = (b) => {
      u.current && (u.current.contains(b.target) || l(!1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []);
  const E = (x) => {
    var w;
    const b = r[x];
    b && ((w = i == null ? void 0 : i.onChange) == null || w.call(i, b.value), t(b.value), l(!1));
  }, D = r[h];
  return /* @__PURE__ */ ie("label", { className: `relative block w-full ${d || ""}`, children: [
    /* @__PURE__ */ ie("div", { ref: u, className: "relative", children: [
      /* @__PURE__ */ ie(
        "button",
        {
          type: "button",
          disabled: a,
          className: et(
            `${p.height} ${p.paddingX} ${p.text} w-full rounded-xl border bg-white text-black`,
            "flex items-center justify-between border-gray focus:border-primary transition outline-none",
            g && "!border-danger focus:border-danger",
            c
          ),
          onClick: () => l((x) => !x),
          children: [
            /* @__PURE__ */ N("span", { className: et("truncate", !D && "text-dark-gray"), children: D ? D.label : n }),
            /* @__PURE__ */ N(
              "svg",
              {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                className: et(
                  "ml-2 shrink-0 transition",
                  f ? "rotate-180 text-primary" : "text-dark-gray"
                ),
                children: /* @__PURE__ */ N(
                  "path",
                  {
                    d: "M7 10l5 5 5-5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              }
            )
          ]
        }
      ),
      f && /* @__PURE__ */ N(
        "ul",
        {
          className: et(
            "absolute z-50 mt-2 w-full rounded-xl border border-gray bg-white shadow",
            "max-h-72 overflow-auto"
          ),
          children: r.map((x, b) => {
            const w = x.value === e;
            return /* @__PURE__ */ ie(
              "li",
              {
                role: "option",
                "aria-selected": w,
                className: et(
                  "cursor-pointer px-3 py-2 text-sm flex items-center justify-between",
                  b === m && "bg-gray-trans",
                  w && "text-primary"
                ),
                onMouseEnter: () => y(b),
                onClick: () => E(b),
                children: [
                  /* @__PURE__ */ N("span", { className: "truncate", children: x.label }),
                  w && /* @__PURE__ */ N(
                    "svg",
                    {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      className: "text-primary",
                      children: /* @__PURE__ */ N(
                        "path",
                        {
                          d: "M20 6L9 17l-5-5",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  )
                ]
              },
              x.value
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ N("div", { className: "absolute w-full flex justify-center min-h-6", children: /* @__PURE__ */ N(oo, { children: g && /* @__PURE__ */ N(
      yr.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ N(xr, { error: s.error })
      }
    ) }) })
  ] });
}, Jf = Sa;
function lt(e) {
  "@babel/helpers - typeof";
  return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lt(e);
}
function wa(e, t) {
  if (lt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (lt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ca(e) {
  var t = wa(e, "string");
  return lt(t) == "symbol" ? t : t + "";
}
function Ia(e, t, r) {
  return (t = Ca(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function tn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tn(Object(r), !0).forEach(function(n) {
      Ia(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function me(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var nn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), zt = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, on = {
  INIT: "@@redux/INIT" + /* @__PURE__ */ zt(),
  REPLACE: "@@redux/REPLACE" + /* @__PURE__ */ zt(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + zt();
  }
};
function Oa(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Aa(e) {
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
  if (_a(e)) return "date";
  if (Ra(e)) return "error";
  var r = Pa(e);
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
function Pa(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ra(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function _a(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ke(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Aa(e)), t;
}
function yo(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? me(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? me(1) : "Expected the enhancer to be a function. Instead, received: '" + ke(r) + "'");
    return r(yo)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? me(2) : "Expected the root reducer to be a function. Instead, received: '" + ke(e) + "'");
  var o = e, i = t, a = [], s = a, c = !1;
  function d() {
    s === a && (s = a.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? me(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? me(4) : "Expected the listener to be a function. Instead, received: '" + ke(h) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? me(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return d(), s.push(h), function() {
      if (m) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? me(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, d();
        var E = s.indexOf(h);
        s.splice(E, 1), a = null;
      }
    };
  }
  function u(h) {
    if (!Oa(h))
      throw new Error(process.env.NODE_ENV === "production" ? me(7) : "Actions must be plain objects. Instead, the actual type was: '" + ke(h) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? me(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? me(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = o(i, h);
    } finally {
      c = !1;
    }
    for (var m = a = s, y = 0; y < m.length; y++) {
      var E = m[y];
      E();
    }
    return h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? me(10) : "Expected the nextReducer to be a function. Instead, received: '" + ke(h));
    o = h, u({
      type: on.REPLACE
    });
  }
  function g() {
    var h, m = l;
    return h = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(E) {
        if (typeof E != "object" || E === null)
          throw new Error(process.env.NODE_ENV === "production" ? me(11) : "Expected the observer to be an object. Instead, received: '" + ke(E) + "'");
        function D() {
          E.next && E.next(f());
        }
        D();
        var x = m(D);
        return {
          unsubscribe: x
        };
      }
    }, h[nn] = function() {
      return this;
    }, h;
  }
  return u({
    type: on.INIT
  }), n = {
    dispatch: u,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[nn] = g, n;
}
function an(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function sn(e, t) {
  if (typeof e == "function")
    return an(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? me(16) : "bindActionCreators expected an object or a function, but instead received: '" + ke(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = an(o, t));
  }
  return r;
}
function Eo() {
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
function Ta() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? me(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(c) {
        return c(a);
      });
      return i = Eo.apply(void 0, s)(o.dispatch), rn(rn({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function $a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Va(e) {
  e();
}
let Ba = Va;
const Ma = () => Ba, cn = /* @__PURE__ */ Symbol.for("react-redux-context"), ln = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function La() {
  var e;
  if (!B.createContext) return {};
  const t = (e = ln[cn]) != null ? e : ln[cn] = /* @__PURE__ */ new Map();
  let r = t.get(B.createContext);
  return r || (r = B.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(B.createContext, r)), r;
}
const xo = /* @__PURE__ */ La(), Fa = () => {
  throw new Error("uSES not initialized!");
};
function Be() {
  return Be = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Be.apply(null, arguments);
}
function Do(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var cr = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Ga() {
  if (un) return j;
  un = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function D(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case t:
          switch (b = b.type, b) {
            case c:
            case d:
            case n:
            case i:
            case o:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case f:
                case g:
                case p:
                case a:
                  return b;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function x(b) {
    return D(b) === d;
  }
  return j.AsyncMode = c, j.ConcurrentMode = d, j.ContextConsumer = s, j.ContextProvider = a, j.Element = t, j.ForwardRef = f, j.Fragment = n, j.Lazy = g, j.Memo = p, j.Portal = r, j.Profiler = i, j.StrictMode = o, j.Suspense = l, j.isAsyncMode = function(b) {
    return x(b) || D(b) === c;
  }, j.isConcurrentMode = x, j.isContextConsumer = function(b) {
    return D(b) === s;
  }, j.isContextProvider = function(b) {
    return D(b) === a;
  }, j.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, j.isForwardRef = function(b) {
    return D(b) === f;
  }, j.isFragment = function(b) {
    return D(b) === n;
  }, j.isLazy = function(b) {
    return D(b) === g;
  }, j.isMemo = function(b) {
    return D(b) === p;
  }, j.isPortal = function(b) {
    return D(b) === r;
  }, j.isProfiler = function(b) {
    return D(b) === i;
  }, j.isStrictMode = function(b) {
    return D(b) === o;
  }, j.isSuspense = function(b) {
    return D(b) === l;
  }, j.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === l || b === u || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === p || b.$$typeof === a || b.$$typeof === s || b.$$typeof === f || b.$$typeof === m || b.$$typeof === y || b.$$typeof === E || b.$$typeof === h);
  }, j.typeOf = D, j;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function ka() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function D(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === d || S === i || S === o || S === l || S === u || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === p || S.$$typeof === a || S.$$typeof === s || S.$$typeof === f || S.$$typeof === m || S.$$typeof === y || S.$$typeof === E || S.$$typeof === h);
    }
    function x(S) {
      if (typeof S == "object" && S !== null) {
        var ve = S.$$typeof;
        switch (ve) {
          case t:
            var O = S.type;
            switch (O) {
              case c:
              case d:
              case n:
              case i:
              case o:
              case l:
                return O;
              default:
                var Pe = O && O.$$typeof;
                switch (Pe) {
                  case s:
                  case f:
                  case g:
                  case p:
                  case a:
                    return Pe;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var b = c, w = d, _ = s, I = a, W = t, $ = f, U = n, k = g, re = p, ce = r, ne = i, T = o, R = l, L = !1;
    function K(S) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(S) || x(S) === c;
    }
    function J(S) {
      return x(S) === d;
    }
    function Y(S) {
      return x(S) === s;
    }
    function Q(S) {
      return x(S) === a;
    }
    function ue(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function we(S) {
      return x(S) === f;
    }
    function ge(S) {
      return x(S) === n;
    }
    function Ee(S) {
      return x(S) === g;
    }
    function Ce(S) {
      return x(S) === p;
    }
    function Oe(S) {
      return x(S) === r;
    }
    function Ie(S) {
      return x(S) === i;
    }
    function Ae(S) {
      return x(S) === o;
    }
    function qe(S) {
      return x(S) === l;
    }
    H.AsyncMode = b, H.ConcurrentMode = w, H.ContextConsumer = _, H.ContextProvider = I, H.Element = W, H.ForwardRef = $, H.Fragment = U, H.Lazy = k, H.Memo = re, H.Portal = ce, H.Profiler = ne, H.StrictMode = T, H.Suspense = R, H.isAsyncMode = K, H.isConcurrentMode = J, H.isContextConsumer = Y, H.isContextProvider = Q, H.isElement = ue, H.isForwardRef = we, H.isFragment = ge, H.isLazy = Ee, H.isMemo = Ce, H.isPortal = Oe, H.isProfiler = Ie, H.isStrictMode = Ae, H.isSuspense = qe, H.isValidElementType = D, H.typeOf = x;
  }()), H;
}
process.env.NODE_ENV === "production" ? cr.exports = /* @__PURE__ */ Ga() : cr.exports = /* @__PURE__ */ ka();
var Wa = cr.exports, Sr = Wa, Ua = {
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
}, ja = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ha = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, No = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, wr = {};
wr[Sr.ForwardRef] = Ha;
wr[Sr.Memo] = No;
function fn(e) {
  return Sr.isMemo(e) ? No : wr[e.$$typeof] || Ua;
}
var za = Object.defineProperty, qa = Object.getOwnPropertyNames, pn = Object.getOwnPropertySymbols, Ya = Object.getOwnPropertyDescriptor, Ka = Object.getPrototypeOf, mn = Object.prototype;
function So(e, t, r) {
  if (typeof t != "string") {
    if (mn) {
      var n = Ka(t);
      n && n !== mn && So(e, n, r);
    }
    var o = qa(t);
    pn && (o = o.concat(pn(t)));
    for (var i = fn(e), a = fn(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!ja[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var d = Ya(t, c);
        try {
          za(e, c, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var Xa = So;
const gn = /* @__PURE__ */ $a(Xa);
var lr = { exports: {} }, z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function Ja() {
  if (vn) return z;
  vn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var y = m.$$typeof;
      switch (y) {
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
                case c:
                case u:
                case l:
                case i:
                  return m;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return z.ContextConsumer = a, z.ContextProvider = i, z.Element = e, z.ForwardRef = c, z.Fragment = r, z.Lazy = u, z.Memo = l, z.Portal = t, z.Profiler = o, z.StrictMode = n, z.Suspense = d, z.SuspenseList = f, z.isAsyncMode = function() {
    return !1;
  }, z.isConcurrentMode = function() {
    return !1;
  }, z.isContextConsumer = function(m) {
    return h(m) === a;
  }, z.isContextProvider = function(m) {
    return h(m) === i;
  }, z.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, z.isForwardRef = function(m) {
    return h(m) === c;
  }, z.isFragment = function(m) {
    return h(m) === r;
  }, z.isLazy = function(m) {
    return h(m) === u;
  }, z.isMemo = function(m) {
    return h(m) === l;
  }, z.isPortal = function(m) {
    return h(m) === t;
  }, z.isProfiler = function(m) {
    return h(m) === o;
  }, z.isStrictMode = function(m) {
    return h(m) === n;
  }, z.isSuspense = function(m) {
    return h(m) === d;
  }, z.isSuspenseList = function(m) {
    return h(m) === f;
  }, z.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
  }, z.typeOf = h, z;
}
var q = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function Za() {
  return hn || (hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, h = !1, m = !1, y = !1, E = !1, D;
    D = Symbol.for("react.module.reference");
    function x(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || E || O === n || O === d || O === f || y || O === p || g || h || m || typeof O == "object" && O !== null && (O.$$typeof === u || O.$$typeof === l || O.$$typeof === i || O.$$typeof === a || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === D || O.getModuleId !== void 0));
    }
    function b(O) {
      if (typeof O == "object" && O !== null) {
        var Pe = O.$$typeof;
        switch (Pe) {
          case e:
            var Ye = O.type;
            switch (Ye) {
              case r:
              case o:
              case n:
              case d:
              case f:
                return Ye;
              default:
                var C = Ye && Ye.$$typeof;
                switch (C) {
                  case s:
                  case a:
                  case c:
                  case u:
                  case l:
                  case i:
                    return C;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var w = a, _ = i, I = e, W = c, $ = r, U = u, k = l, re = t, ce = o, ne = n, T = d, R = f, L = !1, K = !1;
    function J(O) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(O) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(O) {
      return b(O) === a;
    }
    function ue(O) {
      return b(O) === i;
    }
    function we(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function ge(O) {
      return b(O) === c;
    }
    function Ee(O) {
      return b(O) === r;
    }
    function Ce(O) {
      return b(O) === u;
    }
    function Oe(O) {
      return b(O) === l;
    }
    function Ie(O) {
      return b(O) === t;
    }
    function Ae(O) {
      return b(O) === o;
    }
    function qe(O) {
      return b(O) === n;
    }
    function S(O) {
      return b(O) === d;
    }
    function ve(O) {
      return b(O) === f;
    }
    q.ContextConsumer = w, q.ContextProvider = _, q.Element = I, q.ForwardRef = W, q.Fragment = $, q.Lazy = U, q.Memo = k, q.Portal = re, q.Profiler = ce, q.StrictMode = ne, q.Suspense = T, q.SuspenseList = R, q.isAsyncMode = J, q.isConcurrentMode = Y, q.isContextConsumer = Q, q.isContextProvider = ue, q.isElement = we, q.isForwardRef = ge, q.isFragment = Ee, q.isLazy = Ce, q.isMemo = Oe, q.isPortal = Ie, q.isProfiler = Ae, q.isStrictMode = qe, q.isSuspense = S, q.isSuspenseList = ve, q.isValidElementType = x, q.typeOf = b;
  }()), q;
}
process.env.NODE_ENV === "production" ? lr.exports = /* @__PURE__ */ Ja() : lr.exports = /* @__PURE__ */ Za();
var bn = lr.exports;
function Cr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function qt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Cr(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Qa(e, t, r) {
  qt(e, "mapStateToProps"), qt(t, "mapDispatchToProps"), qt(r, "mergeProps");
}
const es = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function ts(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, d, f, l, u;
  function p(E, D) {
    return c = E, d = D, f = e(c, d), l = t(n, d), u = r(f, l, d), s = !0, u;
  }
  function g() {
    return f = e(c, d), t.dependsOnOwnProps && (l = t(n, d)), u = r(f, l, d), u;
  }
  function h() {
    return e.dependsOnOwnProps && (f = e(c, d)), t.dependsOnOwnProps && (l = t(n, d)), u = r(f, l, d), u;
  }
  function m() {
    const E = e(c, d), D = !a(E, f);
    return f = E, D && (u = r(f, l, d)), u;
  }
  function y(E, D) {
    const x = !i(D, d), b = !o(E, c, D, d);
    return c = E, d = D, x && b ? g() : x ? h() : b ? m() : u;
  }
  return function(D, x) {
    return s ? y(D, x) : p(D, x);
  };
}
function rs(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Do(t, es);
  const a = r(e, i), s = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && Qa(a, s, c), ts(a, s, c, e, i);
}
function ns(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function os(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function wo(e, t, r) {
  os(e) || Cr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ur(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function yn(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Co(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = yn(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = yn(d), d = i(s, c)), process.env.NODE_ENV !== "production" && wo(d, o, t), d;
    }, i;
  };
}
function Ir(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function is(e) {
  return e && typeof e == "object" ? ur((t) => (
    // @ts-ignore
    ns(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Co(e, "mapDispatchToProps")
  ) : Ir(e, "mapDispatchToProps") : ur((t) => ({
    dispatch: t
  }));
}
function as(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Co(e, "mapStateToProps")
  ) : Ir(e, "mapStateToProps") : ur(() => ({}));
}
function ss(e, t, r) {
  return Be({}, r, e, t);
}
function cs(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(c, d, f) {
      const l = e(c, d, f);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && wo(a, n, "mergeProps")), a;
    };
  };
}
function ls(e) {
  return e ? typeof e == "function" ? cs(e) : Ir(e, "mergeProps") : () => ss;
}
function us() {
  const e = Ma();
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
const En = {
  notify() {
  },
  get: () => []
};
function Io(e, t) {
  let r, n = En, o = 0, i = !1;
  function a(h) {
    f();
    const m = n.subscribe(h);
    let y = !1;
    return () => {
      y || (y = !0, m(), l());
    };
  }
  function s() {
    n.notify();
  }
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function d() {
    return i;
  }
  function f() {
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = us());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = En);
  }
  function u() {
    i || (i = !0, f());
  }
  function p() {
    i && (i = !1, l());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: d,
    trySubscribe: u,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return g;
}
const ds = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Rt = ds ? B.useLayoutEffect : B.useEffect;
function xn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yt(e, t) {
  if (xn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !xn(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const fs = ["reactReduxForwardedRef"];
let ps = Fa;
const ms = [null, null], gs = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function vs(e, t, r) {
  Rt(() => e(...t), r);
}
function hs(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function bs(e, t, r, n, o, i, a, s, c, d, f) {
  if (!e) return () => {
  };
  let l = !1, u = null;
  const p = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let m, y;
    try {
      m = n(h, o.current);
    } catch (E) {
      y = E, u = E;
    }
    y || (u = null), m === i.current ? a.current || d() : (i.current = m, c.current = m, a.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, u)
      throw u;
  };
}
function ys(e, t) {
  return e === t;
}
let Dn = !1;
function Oo(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = ys,
  areOwnPropsEqual: i = Yt,
  areStatePropsEqual: a = Yt,
  areMergedPropsEqual: s = Yt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: d = xo
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Dn && (Dn = !0, Cr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = d, l = as(e), u = is(t), p = ls(r), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !bn.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${gs(m)}`);
    const y = m.displayName || m.name || "Component", E = `Connect(${y})`, D = {
      shouldHandleStateChanges: g,
      displayName: E,
      wrappedComponentName: y,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: u,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function x(_) {
      const [I, W, $] = B.useMemo(() => {
        const {
          reactReduxForwardedRef: S
        } = _, ve = Do(_, fs);
        return [_.context, S, ve];
      }, [_]), U = B.useMemo(() => I && I.Consumer && // @ts-ignore
      bn.isContextConsumer(/* @__PURE__ */ B.createElement(I.Consumer, null)) ? I : f, [I, f]), k = B.useContext(U), re = !!_.store && !!_.store.getState && !!_.store.dispatch, ce = !!k && !!k.store;
      if (process.env.NODE_ENV !== "production" && !re && !ce)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const ne = re ? _.store : k.store, T = ce ? k.getServerState : ne.getState, R = B.useMemo(() => rs(ne.dispatch, D), [ne]), [L, K] = B.useMemo(() => {
        if (!g) return ms;
        const S = Io(ne, re ? void 0 : k.subscription), ve = S.notifyNestedSubs.bind(S);
        return [S, ve];
      }, [ne, re, k]), J = B.useMemo(() => re ? k : Be({}, k, {
        subscription: L
      }), [re, k, L]), Y = B.useRef(), Q = B.useRef($), ue = B.useRef(), we = B.useRef(!1);
      B.useRef(!1);
      const ge = B.useRef(!1), Ee = B.useRef();
      Rt(() => (ge.current = !0, () => {
        ge.current = !1;
      }), []);
      const Ce = B.useMemo(() => () => ue.current && $ === Q.current ? ue.current : R(ne.getState(), $), [ne, $]), Oe = B.useMemo(() => (ve) => L ? bs(
        g,
        ne,
        L,
        // @ts-ignore
        R,
        Q,
        Y,
        we,
        ge,
        ue,
        K,
        ve
      ) : () => {
      }, [L]);
      vs(hs, [Q, Y, we, $, ue, K]);
      let Ie;
      try {
        Ie = ps(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Oe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ce,
          T ? () => R(T(), $) : Ce
        );
      } catch (S) {
        throw Ee.current && (S.message += `
The error may be correlated with this previous error:
${Ee.current.stack}

`), S;
      }
      Rt(() => {
        Ee.current = void 0, ue.current = void 0, Y.current = Ie;
      });
      const Ae = B.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ B.createElement(m, Be({}, Ie, {
          ref: W
        }))
      ), [W, m, Ie]);
      return B.useMemo(() => g ? /* @__PURE__ */ B.createElement(U.Provider, {
        value: J
      }, Ae) : Ae, [U, Ae, J]);
    }
    const w = B.memo(x);
    if (w.WrappedComponent = m, w.displayName = x.displayName = E, c) {
      const I = B.forwardRef(function($, U) {
        return /* @__PURE__ */ B.createElement(w, Be({}, $, {
          reactReduxForwardedRef: U
        }));
      });
      return I.displayName = E, I.WrappedComponent = m, gn(I, m);
    }
    return gn(w, m);
  };
}
function Es({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = B.useMemo(() => {
    const d = Io(e);
    return {
      store: e,
      subscription: d,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = B.useMemo(() => e.getState(), [e]);
  Rt(() => {
    const {
      subscription: d
    } = a;
    return d.onStateChange = d.notifyNestedSubs, d.trySubscribe(), s !== e.getState() && d.notifyNestedSubs(), () => {
      d.tryUnsubscribe(), d.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || xo;
  return /* @__PURE__ */ B.createElement(c.Provider, {
    value: a
  }, r);
}
function xs(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ao(e, t) {
  var r = fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = G(!0), o = G(r), i = n.current || !!(t && o.current.inputs && xs(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return oe(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Ds(e, t) {
  return Ao(function() {
    return e;
  }, t);
}
var F = Ao, A = Ds, Ns = process.env.NODE_ENV === "production", Kt = "Invariant failed";
function Nn(e, t) {
  if (Ns)
    throw new Error(Kt);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Kt, ": ").concat(r) : Kt;
  throw new Error(n);
}
var Se = function(t) {
  var r = t.top, n = t.right, o = t.bottom, i = t.left, a = n - i, s = o - r, c = {
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
  return c;
}, Or = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Sn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Ss = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Xt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ar = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Xt : n, i = t.border, a = i === void 0 ? Xt : i, s = t.padding, c = s === void 0 ? Xt : s, d = Se(Or(r, o)), f = Se(Sn(r, a)), l = Se(Sn(f, c));
  return {
    marginBox: d,
    borderBox: Se(r),
    paddingBox: f,
    contentBox: l,
    margin: o,
    border: a,
    padding: c
  };
}, xe = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Nn(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Nn()), o;
}, ws = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, _t = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Ss(n, r);
  return Ar({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Tt = function(t, r) {
  return r === void 0 && (r = ws()), _t(t, r);
}, Po = function(t, r) {
  var n = {
    top: xe(r.marginTop),
    right: xe(r.marginRight),
    bottom: xe(r.marginBottom),
    left: xe(r.marginLeft)
  }, o = {
    top: xe(r.paddingTop),
    right: xe(r.paddingRight),
    bottom: xe(r.paddingBottom),
    left: xe(r.paddingLeft)
  }, i = {
    top: xe(r.borderTopWidth),
    right: xe(r.borderRightWidth),
    bottom: xe(r.borderBottomWidth),
    left: xe(r.borderLeftWidth)
  };
  return Ar({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Ro = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Po(r, n);
}, wn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Cs(e, t) {
  return !!(e === t || wn(e) && wn(t));
}
function Is(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Cs(e[r], t[r]))
      return !1;
  return !0;
}
function ae(e, t) {
  t === void 0 && (t = Is);
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
var ut = function(t) {
  var r = [], n = null, o = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    r = s, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return o.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, o;
};
const Os = process.env.NODE_ENV === "production", As = /[ \t]{2,}/g, Ps = /^[ \t]*/gm, Cn = (e) => e.replace(As, " ").replace(Ps, "").trim(), Rs = (e) => Cn(`
  %c@hello-pangea/dnd

  %c${Cn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), _s = (e) => [Rs(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Ts = "__@hello-pangea/dnd-disable-dev-warnings";
function _o(e, t) {
  Os || typeof window < "u" && window[Ts] || console[e](..._s(t));
}
const Z = /* @__PURE__ */ _o.bind(null, "warn"), dr = /* @__PURE__ */ _o.bind(null, "error");
function Me() {
}
function $s(e, t) {
  return {
    ...e,
    ...t
  };
}
function De(e, t, r) {
  const n = t.map((o) => {
    const i = $s(r, o.options);
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
const Vs = process.env.NODE_ENV === "production", In = "Invariant failed";
class dt extends Error {
}
dt.prototype.toString = function() {
  return this.message;
};
function v(e, t) {
  throw Vs ? new dt(In) : new dt(`${In}: ${t || ""}`);
}
class Bs extends M.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Me, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Z(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof dt && (r.preventDefault(), process.env.NODE_ENV !== "production" && dr(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = De(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof dt) {
      process.env.NODE_ENV !== "production" && dr(t.message), this.setState({});
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
const Ms = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, $t = (e) => e + 1, Ls = (e) => `
  You have lifted an item in position ${$t(e.source.index)}
`, To = (e, t) => {
  const r = e.droppableId === t.droppableId, n = $t(e.index), o = $t(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, $o = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Fs = (e) => {
  const t = e.destination;
  if (t)
    return To(e.source, t);
  const r = e.combine;
  return r ? $o(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, On = (e) => `
  The item has returned to its starting position
  of ${$t(e.index)}
`, Gs = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${On(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${To(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${$o(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${On(e.source)}
  `;
}, ks = {
  dragHandleUsageInstructions: Ms,
  onDragStart: Ls,
  onDragUpdate: Fs,
  onDragEnd: Gs
};
var At = ks;
const se = {
  x: 0,
  y: 0
}, le = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), he = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Le = (e, t) => e.x === t.x && e.y === t.y, Ze = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), He = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, ft = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), An = (e, t) => Math.min(...t.map((r) => ft(e, r))), Vo = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ws = (e, t) => {
  const r = Se({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const yt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Pn = (e) => [{
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
}], Us = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, js = (e, t) => t ? yt(e, t.scroll.diff.displacement) : e, Hs = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, zs = (e, t) => t && t.shouldClipSubject ? Ws(t.pageMarginBox, e) : Se(e);
var Ke = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = js(e.marginBox, n), i = Hs(o, r, t), a = zs(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Pr = (e, t) => {
  e.frame || (process.env.NODE_ENV, v());
  const r = e.frame, n = he(t, r.scroll.initial), o = Ze(n), i = {
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
  }, a = Ke({
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
const Bo = /* @__PURE__ */ ae((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Mo = /* @__PURE__ */ ae((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Lt = /* @__PURE__ */ ae((e) => Object.values(e)), qs = /* @__PURE__ */ ae((e) => Object.values(e));
var ze = /* @__PURE__ */ ae((e, t) => qs(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Rr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Ft(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Gt = /* @__PURE__ */ ae((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Ys = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Rr(o))
    return null;
  function a(p) {
    const g = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: g
    };
  }
  const s = o.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const d = Gt(t, n);
  if (!c) {
    if (!d.length)
      return null;
    const p = d[d.length - 1];
    return a(p.descriptor.id);
  }
  const f = d.findIndex((p) => p.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Could not find displaced item in set") : v());
  const l = f - 1;
  if (l < 0)
    return null;
  const u = d[l];
  return a(u.descriptor.id);
}, Qe = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Lo = {
  point: se,
  value: 0
}, pt = {
  invisible: {},
  visible: {},
  all: []
}, Ks = {
  displaced: pt,
  displacedBy: Lo,
  at: null
};
var Xs = Ks, Ne = (e, t) => (r) => e <= r && r <= t, Fo = (e) => {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const c = n.top < e.top && n.bottom > e.bottom, d = n.left < e.left && n.right > e.right;
    return c && d ? !0 : c && a || d && i;
  };
}, Js = (e) => {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const _r = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Go = {
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
var Zs = (e) => (t) => {
  const r = Ne(t.top, t.bottom), n = Ne(t.left, t.right);
  return (o) => e === _r ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Qs = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : se;
  return yt(e, r);
}, ec = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, tc = (e, t, r) => r(t)(e), Tr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Qs(e, t) : e;
  return ec(i, t, o) && tc(i, r, o);
}, rc = (e) => Tr({
  ...e,
  isVisibleThroughFrameFn: Fo
}), ko = (e) => Tr({
  ...e,
  isVisibleThroughFrameFn: Js
}), nc = (e) => Tr({
  ...e,
  isVisibleThroughFrameFn: Zs(e.destination.axis)
}), oc = (e, t, r) => {
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
function ic(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Se(Or(r, n));
}
function mt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const d = ic(c, r), f = c.descriptor.id;
    if (s.all.push(f), !rc({
      target: d,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const u = oc(f, i, o), p = {
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
function ac(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Rn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = ac(e, {
    inHomeList: t
  });
  return {
    displaced: pt,
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
function Vt({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = Qe(e, r);
  if (a == null)
    return Rn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const d = t.find((g) => g.descriptor.index === a);
  if (!d)
    return Rn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const f = Gt(e, t), l = t.indexOf(d), u = f.slice(l);
  return {
    displaced: mt({
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
function Fe(e, t) {
  return !!t.effected[e];
}
var sc = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return Fe(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, cc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, lc = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: n,
  destination: o,
  insideDestination: i,
  previousImpact: a,
  viewport: s,
  afterCritical: c
}) => {
  const d = a.at;
  if (d || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot move in direction without previous impact location") : v()), d.type === "REORDER") {
    const l = cc({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return l == null ? null : Vt({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const f = sc({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: d.combine,
    afterCritical: c
  });
  return f == null ? null : Vt({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, uc = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Fe(r, t) ? o ? se : Ze(n.point) : o ? n.point : se;
}, dc = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Ft(t);
  n || (process.env.NODE_ENV, v());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = uc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return le(i, a);
};
const Wo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, fc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, $r = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, _n = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.end] + Wo(e, r), $r(e, t.marginBox, r)), Tn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.start] - fc(e, r), $r(e, t.marginBox, r)), pc = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => He(e.line, t.contentBox[e.start] + Wo(e, r), $r(e, t.contentBox, r));
var mc = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = ze(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return pc({
      axis: s,
      moveInto: n.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: d
  } = e, f = c.all[0];
  if (f) {
    const u = r[f];
    if (Fe(f, o))
      return Tn({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const p = _t(u.page, d.point);
    return Tn({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Fe(l.descriptor.id, o)) {
    const u = _t(l.page, Ze(o.displacedBy.point));
    return _n({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return _n({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, fr = (e, t) => {
  const r = e.frame;
  return r ? le(t, r.scroll.diff.displacement) : t;
};
const gc = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? mc({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : dc({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var kt = (e) => {
  const t = gc(e), r = e.droppable;
  return r ? fr(r, t) : t;
}, Uo = (e, t) => {
  const r = he(t, e.scroll.initial), n = Ze(r);
  return {
    frame: Se({
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
function $n(e, t) {
  return e.map((r) => t[r]);
}
function vc(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var hc = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = Uo(t, le(t.scroll.current, o)), a = r.frame ? Pr(r, le(r.frame.scroll.current, o)) : r, s = e.displaced, c = mt({
    afterDragging: $n(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = mt({
    afterDragging: $n(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, u = [s, c, d];
  return s.all.forEach((g) => {
    const h = vc(g, u);
    if (h) {
      l[g] = h;
      return;
    }
    f[g] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: f,
      visible: l
    }
  };
}, bc = (e, t) => le(e.scroll.diff.displacement, t), Vr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = bc(r, e), o = he(n, t.page.borderBox.center);
  return le(t.client.borderBox.center, o);
}, jo = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = he(r, e.page.borderBox.center), c = {
    target: yt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? nc(c) : ko(c);
}, yc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: n,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: a,
  previousClientSelection: s,
  afterCritical: c
}) => {
  if (!r.isEnabled)
    return null;
  const d = ze(r.descriptor.id, n), f = Qe(t, r), l = Ys({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: d,
    previousImpact: o
  }) || lc({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: n,
    destination: r,
    insideDestination: d,
    previousImpact: o,
    viewport: i,
    afterCritical: c
  });
  if (!l)
    return null;
  const u = kt({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: c
  });
  if (jo({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Vr({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = he(u, a), h = hc({
    impact: l,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: g
  });
  return {
    clientSelection: s,
    impact: h,
    scrollJumpRequest: g
  };
};
const de = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get clipped area from droppable") : v()), t;
};
var Ec = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ne(i[a.start], i[a.end]), c = Lt(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Fo(o.frame)(de(f))).filter((f) => {
    const l = de(f);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const l = de(f), u = Ne(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((f, l) => {
    const u = de(f)[a.crossAxisStart], p = de(l)[a.crossAxisStart];
    return e ? u - p : p - u;
  }).filter((f, l, u) => de(f)[a.crossAxisStart] === de(u[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((f) => Ne(de(f)[a.start], de(f)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((f, l) => de(f)[a.start] - de(l)[a.start])[0] : c.sort((f, l) => {
    const u = An(t, Pn(de(f))), p = An(t, Pn(de(l)));
    return u !== p ? u - p : de(f)[a.start] - de(l)[a.start];
  })[0];
};
const Vn = (e, t) => {
  const r = e.page.borderBox.center;
  return Fe(e.descriptor.id, t) ? he(r, t.displacedBy.point) : r;
}, xc = (e, t) => {
  const r = e.page.borderBox;
  return Fe(e.descriptor.id, t) ? yt(r, Ze(t.displacedBy.point)) : r;
};
var Dc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => ko({
  target: xc(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ft(e, fr(r, Vn(a, o))), d = ft(e, fr(r, Vn(s, o)));
  return c < d ? -1 : d < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Et = /* @__PURE__ */ ae(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: He(t.line, n)
  };
});
const Nc = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return He(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = ze(e.descriptor.id, r).reduce((d, f) => d + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : He(n.line, c);
}, Ho = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), zo = (e, t, r) => {
  const n = e.frame;
  Qe(t, e) && (process.env.NODE_ENV !== "production" ? v(!1, "Should not add placeholder space to home list") : v()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot add placeholder size to a subject when it already has one") : v());
  const o = Et(e.axis, t.displaceBy).point, i = Nc(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const f = Ke({
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
  const s = i ? le(n.scroll.max, i) : n.scroll.max, c = Ho(n, s), d = Ke({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: d,
    frame: c
  };
}, Sc = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot remove placeholder form subject when there was none") : v());
  const r = e.frame;
  if (!r) {
    const a = Ke({
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
  n || (process.env.NODE_ENV !== "production" ? v(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : v());
  const o = Ho(r, n), i = Ke({
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
var wc = ({
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
    const l = {
      displaced: pt,
      displacedBy: Lo,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = kt({
      impact: l,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), p = Qe(n, i) ? i : zo(i, n, o);
    return jo({
      draggable: n,
      destination: p,
      newPageBorderBoxCenter: u,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], d = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || c ? l : l + 1;
  })(), f = Et(i.axis, n.displaceBy);
  return Vt({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: pt,
    index: d
  });
}, Cc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Ec({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const d = ze(c.descriptor.id, o), f = Dc({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }), l = wc({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: d,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const u = kt({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Vr({
      pageBorderBoxCenter: u,
      draggable: r,
      viewport: a
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, be = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Ic = (e, t) => {
  const r = be(e);
  return r ? t[r] : null;
};
var Oc = ({
  state: e,
  type: t
}) => {
  const r = Ic(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: u
  } = e.dimensions;
  return s ? yc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Cc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: d,
    isOver: i,
    draggables: l,
    droppables: u,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function We(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function qo(e) {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Ac(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Pc({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = He(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: ft(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Rc({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Lt(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Ac(e, i))
      return !1;
    if (qo(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], f = Ne(i[a.crossAxisStart], i[a.crossAxisEnd]), l = f(c), u = f(d);
    return !l && !u ? !0 : l ? c < s : d > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Pc({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Yo = (e, t) => Se(yt(e, t));
var _c = (e, t) => {
  const r = e.frame;
  return r ? Yo(t, r.scroll.diff.value) : t;
};
function Ko({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Tc({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var $c = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = Et(r.axis, t.displaceBy), d = c.value, f = e[s.start], l = e[s.end], p = Gt(t, n).find((h) => {
    const m = h.descriptor.id, y = h.page.borderBox.center[s.line], E = Fe(m, a), D = Ko({
      displaced: o,
      id: m
    });
    return E ? D ? l <= y : f < y - d : D ? l <= y + d : f < y;
  }) || null, g = Tc({
    draggable: t,
    closest: p,
    inHomeList: Qe(t, r)
  });
  return Vt({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: c,
    index: g
  });
};
const Vc = 4;
var Bc = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Et(n.axis, e.displaceBy), c = s.value, d = t[a.start], f = t[a.end], u = Gt(e, o).find((g) => {
    const h = g.descriptor.id, m = g.page.borderBox, E = m[a.size] / Vc, D = Fe(h, i), x = Ko({
      displaced: r.displaced,
      id: h
    });
    return D ? x ? f > m[a.start] + E && f < m[a.end] - E : d > m[a.start] - c + E && d < m[a.end] - c - E : x ? f > m[a.start] + c + E && f < m[a.end] + c - E : d > m[a.start] + E && d < m[a.end] - E;
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
}, Xo = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Yo(t.page.borderBox, e), c = Rc({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!c)
    return Xs;
  const d = n[c], f = ze(d.descriptor.id, r), l = _c(d, s);
  return Bc({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: f,
    afterCritical: a
  }) || $c({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Br = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Mc = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = be(e), o = be(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = Sc(i);
  return Br(r, a);
};
var Lc = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Mc({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = be(o);
  if (!a)
    return i;
  const s = r[a];
  if (Qe(e, s) || s.subject.withPlaceholder)
    return i;
  const c = zo(s, e, t);
  return Br(i, c);
}, ot = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, d = he(c, e.initial.client.selection), f = {
    offset: d,
    selection: c,
    borderBoxCenter: le(e.initial.client.borderBoxCenter, d)
  }, l = {
    selection: le(f.selection, a.scroll.current),
    borderBoxCenter: le(f.borderBoxCenter, a.scroll.current),
    offset: le(f.offset, a.scroll.diff.value)
  }, u = {
    client: f,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: u
    };
  const p = s.draggables[e.critical.draggable.id], g = o || Xo({
    pageOffset: l.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Lc({
    draggable: p,
    impact: g,
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
    impact: g,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Fc(e, t) {
  return e.map((r) => t[r]);
}
var Jo = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Fc(i.all, r), s = mt({
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
}, Zo = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = kt({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Vr({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, Qo = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, v());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], d = be(n);
  d || (process.env.NODE_ENV !== "production" ? v(!1, "Must be over a destination in SNAP movement mode") : v());
  const f = s[d], l = Jo({
    impact: n,
    viewport: o,
    destination: f,
    draggables: a
  }), u = Zo({
    impact: l,
    draggable: c,
    droppable: f,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return ot({
    impact: l,
    clientSelection: u,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Gc = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ei = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Et(t.axis, e.displaceBy), i = ze(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Expected draggable to be inside home list") : v());
  const s = i.slice(a + 1), c = s.reduce((u, p) => (u[p.descriptor.id] = !0, u), {}), d = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: mt({
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
        destination: Gc(e.descriptor)
      }
    },
    afterCritical: d
  };
}, kc = (e, t) => ({
  draggables: e.draggables,
  droppables: Br(e.droppables, t)
});
const xt = (e) => {
  process.env.NODE_ENV;
}, Dt = (e) => {
  process.env.NODE_ENV;
};
var Wc = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = _t(e.client, t), o = Tt(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Uc = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Expected Droppable to have a frame") : v()), t;
}, jc = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Uc(a).scroll.diff.value, d = le(n, c);
    return Wc({
      draggable: o,
      offset: d,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Hc = ({
  state: e,
  published: t
}) => {
  xt();
  const r = t.modified.map((y) => {
    const E = e.dimensions.droppables[y.droppableId];
    return Pr(E, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Bo(r)
  }, o = Mo(jc({
    additions: t.additions,
    updatedDroppables: n,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((y) => {
    delete i[y];
  });
  const a = {
    droppables: n,
    draggables: i
  }, s = be(e.impact), c = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: u
  } = ei({
    draggable: d,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : l, g = Xo({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: u
  });
  Dt();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: g,
    onLiftImpact: l,
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
const pr = (e) => e.movementMode === "SNAP", Jt = (e, t, r) => {
  const n = kc(e.dimensions, t);
  return !pr(e) || r ? ot({
    state: e,
    dimensions: n
  }) : Qo({
    state: e,
    dimensions: n
  });
};
function Zt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Bn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var zc = (e = Bn, t) => {
  if (t.type === "FLUSH")
    return {
      ...Bn,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "INITIAL_PUBLISH must come after a IDLE phase") : v());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], d = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: se
    }, f = {
      client: d,
      page: {
        selection: le(d.selection, o.scroll.initial),
        borderBoxCenter: le(d.selection, o.scroll.initial),
        offset: le(d.selection, o.scroll.diff.value)
      }
    }, l = Lt(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: u,
      afterCritical: p
    } = ei({
      draggable: s,
      home: c,
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
      isWindowScrollAllowed: l,
      impact: u,
      afterCritical: p,
      onLiftImpact: u,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, `Collection cannot start from phase ${e.phase}`) : v()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : v()), Hc({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      client: r
    } = t.payload;
    return Le(r, e.current.client.selection) ? e : ot({
      state: e,
      clientSelection: r,
      impact: pr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Zt(e);
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = Pr(o, n);
    return Jt(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Attempting to move in an unsupported phase ${e.phase}`) : v());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : v()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? v(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : v());
    const i = {
      ...o,
      isEnabled: n
    };
    return Jt(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Attempting to move in an unsupported phase ${e.phase}`) : v());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : v()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? v(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : v());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return Jt(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot move by window in phase ${e.phase}`) : v()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? v(!1, "Window scrolling is currently not supported for fixed lists") : v());
    const r = t.payload.newScroll;
    if (Le(e.viewport.scroll.current, r))
      return Zt(e);
    const n = Uo(e.viewport, r);
    return pr(e) ? Qo({
      state: e,
      viewport: n
    }) : ot({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!We(e))
      return e;
    const r = t.payload.maxScroll;
    if (Le(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} received while not in DRAGGING phase`) : v());
    const r = Oc({
      state: e,
      type: t.type
    });
    return r ? ot({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? v(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : v()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot animate drop from phase ${e.phase}`) : v()), {
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
const qc = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Yc = (e) => ({
  type: "LIFT",
  payload: e
}), Kc = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Xc = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Jc = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Zc = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Qc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), el = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ti = (e) => ({
  type: "MOVE",
  payload: e
}), tl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), rl = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), nl = () => ({
  type: "MOVE_UP",
  payload: null
}), ol = () => ({
  type: "MOVE_DOWN",
  payload: null
}), il = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), al = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Mr = () => ({
  type: "FLUSH",
  payload: null
}), sl = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Lr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ri = (e) => ({
  type: "DROP",
  payload: e
}), cl = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ni = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function ll(e) {
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
  process.env.NODE_ENV !== "production" && Z(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function ul(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ze(e.droppable.id, t.draggables);
    ll(r);
  }
}
var dl = (e) => ({
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
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && r(Lr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase to start a drag") : v()), r(Mr()), r(qc({
    draggableId: i,
    movementMode: s
  }));
  const f = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: l,
    dimensions: u,
    viewport: p
  } = e.startPublishing(f);
  ul(l, u), r(Kc({
    critical: l,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, fl = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Fr = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, gt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, oi = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ge = `${oi.outOfTheWay}s ${Fr.outOfTheWay}`, it = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Fr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, Mn = (e) => Le(e, se) ? void 0 : `translate(${e.x}px, ${e.y}px)`, mr = {
  moveTo: Mn,
  drop: (e, t) => {
    const r = Mn(e);
    if (r)
      return t ? `${r} scale(${gt.scale.drop})` : r;
  }
}, {
  minDropTime: gr,
  maxDropTime: ii
} = oi, pl = ii - gr, Ln = 1500, ml = 0.6;
var gl = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = ft(e, t);
  if (n <= 0)
    return gr;
  if (n >= Ln)
    return ii;
  const o = n / Ln, i = gr + pl * o, a = r === "CANCEL" ? i * ml : i;
  return Number(a.toFixed(2));
}, vl = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = be(e), c = s ? a[s] : null, d = a[t.descriptor.droppableId], f = Zo({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || d,
    viewport: n
  });
  return he(f, t.client.borderBox.center);
}, hl = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Jo({
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
    displaced: pt
  },
  didDropInsideDroppable: !0
};
const bl = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(cl({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? v(!1, "A DROP action occurred while DROP_PENDING and still waiting") : v()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot drop in phase: ${o.phase}`) : v());
  const s = o.critical, c = o.dimensions, d = c.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: l
  } = hl({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = l ? Rr(f) : null, p = l ? Ft(f) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: p
  }, m = vl({
    impact: f,
    draggable: d,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), y = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: f
  };
  if (!(!Le(o.current.client.offset, m) || !!h.combine)) {
    t(Lr({
      completed: y
    }));
    return;
  }
  const D = gl({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(sl({
    newHomeClientOffset: m,
    dropDuration: D,
    completed: y
  }));
};
var yl = bl, ai = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function El(e) {
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
function xl({
  onWindowScroll: e
}) {
  function t() {
    e(ai());
  }
  const r = ut(t), n = El(r);
  let o = Me;
  function i() {
    return o !== Me;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start scroll listener when already active") : v()), o = De(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop scroll listener when not active") : v()), r.cancel(), o(), o = Me;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const Dl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Nl = (e) => {
  const t = xl({
    onWindowScroll: (r) => {
      e.dispatch(tl({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Dl(n) && t.stop(), r(n);
  };
};
var Sl = Nl, wl = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Z("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && Z(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Cl = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Could not find timer") : v());
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
const Il = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Ol = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Al = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, tt = (e, t) => {
  xt(), t(), Dt();
}, wt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Qt(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = wl(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Pl = (e, t) => {
  const r = Cl();
  let n = null;
  const o = (l, u) => {
    n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : v()), tt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: l,
        mode: u
      });
    });
  }, i = (l, u) => {
    n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v()), tt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(wt(l, u));
    });
  }, a = (l, u) => {
    n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v());
    const p = wt(l, u);
    n = {
      mode: u,
      lastCritical: l,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      tt("onDragStart", () => Qt(e().onDragStart, p, t, At.onDragStart));
    });
  }, s = (l, u) => {
    const p = Rr(u), g = Ft(u);
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragMove when onDragStart has not been called") : v());
    const h = !Al(l, n.lastCritical);
    h && (n.lastCritical = l);
    const m = !Il(n.lastLocation, p);
    m && (n.lastLocation = p);
    const y = !Ol(n.lastCombine, g);
    if (y && (n.lastCombine = g), !h && !m && !y)
      return;
    const E = {
      ...wt(l, n.mode),
      combine: g,
      destination: p
    };
    r.add(() => {
      tt("onDragUpdate", () => Qt(e().onDragUpdate, E, t, At.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Can only flush responders while dragging") : v()), r.flush();
  }, d = (l) => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : v()), n = null, tt("onDragEnd", () => Qt(e().onDragEnd, l, t, At.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: a,
    update: s,
    flush: c,
    drop: d,
    abort: () => {
      if (!n)
        return;
      const l = {
        ...wt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(l);
    }
  };
}, Rl = (e, t) => {
  const r = Pl(e, t);
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
const _l = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot finish a drop animating when no drop is occurring") : v()), e.dispatch(Lr({
    completed: n.completed
  }));
};
var Tl = _l;
const $l = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ni());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = De(window, [a]);
    });
  };
};
var Vl = $l, Bl = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Ml = (e) => {
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
const Ll = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Fl = (e) => (t) => (r) => (n) => {
  if (Ll(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : v()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Gl = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(ri({
    reason: n.reason
  })));
};
var kl = Gl;
const Wl = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? /* @__PURE__ */ window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Eo;
var Ul = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => yo(zc, Wl(Ta(fl(r), Bl(e), dl(e), yl, Tl, Vl, kl, Fl(i), Sl, Ml(t), Rl(n, o))));
const er = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function jl({
  registry: e,
  callbacks: t
}) {
  let r = er(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, xt();
      const {
        additions: c,
        removals: d,
        modified: f
      } = r, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(se)).sort((g, h) => g.descriptor.index - h.descriptor.index), u = Object.keys(f).map((g) => {
        const m = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: m
        };
      }), p = {
        additions: l,
        removals: Object.keys(d),
        modified: u
      };
      r = er(), Dt(), t.publish(p);
    }));
  };
  return {
    add: (c) => {
      const d = c.descriptor.id;
      r.additions[d] = c, r.modified[c.descriptor.droppableId] = !0, r.removals[d] && delete r.removals[d], o();
    },
    remove: (c) => {
      const d = c.descriptor;
      r.removals[d.id] = !0, r.modified[d.droppableId] = !0, r.additions[d.id] && delete r.additions[d.id], o();
    },
    stop: () => {
      n && (cancelAnimationFrame(n), n = null, r = er());
    }
  };
}
var si = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = he({
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
}, ci = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.documentElement") : v()), e;
}, li = () => {
  const e = ci();
  return si({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Hl = () => {
  const e = ai(), t = li(), r = e.y, n = e.x, o = ci(), i = o.clientWidth, a = o.clientHeight, s = n + i, c = r + a;
  return {
    frame: Se({
      top: r,
      left: n,
      right: s,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: se,
        displacement: se
      }
    }
  };
}, zl = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  xt();
  const n = Hl(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: Mo(s),
    droppables: Bo(a)
  };
  return Dt(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function Fn(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Z(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var ql = (e, t) => {
  let r = null;
  const n = jl({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (u, p) => {
    e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update is enabled flag of Droppable ${u} as it is not registered`) : v()), r && t.updateDroppableIsEnabled({
      id: u,
      isEnabled: p
    });
  }, i = (u, p) => {
    r && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update isCombineEnabled flag of Droppable ${u} as it is not registered`) : v()), t.updateDroppableIsCombineEnabled({
      id: u,
      isCombineEnabled: p
    }));
  }, a = (u, p) => {
    r && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update the scroll on Droppable ${u} as it is not registered`) : v()), t.updateDroppableScroll({
      id: u,
      newScroll: p
    }));
  }, s = (u, p) => {
    r && e.droppable.getById(u).callbacks.scroll(p);
  }, c = () => {
    if (!r)
      return;
    n.stop();
    const u = r.critical.droppable;
    e.droppable.getAllByType(u.type).forEach((p) => p.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, d = (u) => {
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Should only be subscribed when a collection is occurring") : v());
    const p = r.critical.draggable;
    u.type === "ADDITION" && Fn(e, p, u.value) && n.add(u.value), u.type === "REMOVAL" && Fn(e, p, u.value) && n.remove(u.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (u) => {
      r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start capturing critical dimensions as there is already a collection") : v());
      const p = e.draggable.getById(u.draggableId), g = e.droppable.getById(p.descriptor.droppableId), h = {
        draggable: p.descriptor,
        droppable: g.descriptor
      }, m = e.subscribe(d);
      return r = {
        critical: h,
        unsubscribe: m
      }, zl({
        critical: h,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ui = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Yl = (e) => {
  window.scrollBy(e.x, e.y);
};
const Kl = /* @__PURE__ */ ae((e) => Lt(e).filter((t) => !(!t.isEnabled || !t.frame))), Xl = (e, t) => Kl(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? v(!1, "Invalid result") : v()), qo(n.frame.pageMarginBox)(e))) || null;
var Jl = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Xl(e, r);
};
const vt = {
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
var Zl = (e, t, r = () => vt) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, di = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && Z(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, Gr = 1, Ql = (e, t, r = () => vt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Gr;
  const i = 1 - di({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, eu = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return Gr;
  const f = di({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, Gn = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = Ql(e, t, o);
  return i === 0 ? 0 : n ? Math.max(eu(i, r, o), Gr) : i;
}, kn = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Zl(e, n, i);
  return t[n.end] < t[n.start] ? Gn({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Gn({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, tu = ({
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
const ru = /* @__PURE__ */ Vo((e) => e === 0 ? 0 : e);
var fi = ({
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
  }, s = kn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: _r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = kn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Go,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = ru({
    x: c,
    y: s
  });
  if (Le(d, se))
    return null;
  const f = tu({
    container: t,
    subject: r,
    proposedScroll: d
  });
  return f ? Le(f, se) ? null : f : null;
};
const nu = /* @__PURE__ */ Vo((e) => e === 0 ? 0 : e > 0 ? 1 : -1), kr = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = le(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return Le(i, se) ? null : i;
  };
})(), pi = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = nu(r), i = kr({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Wr = (e, t) => pi({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), ou = (e, t) => {
  if (!Wr(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return kr({
    current: n,
    max: r,
    change: t
  });
}, Ur = (e, t) => {
  const r = e.frame;
  return r ? pi({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, iu = (e, t) => {
  const r = e.frame;
  return !r || !Ur(e, t) ? null : kr({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var au = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = fi({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Wr(e, a) ? a : null;
}, su = ({
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
  const s = fi({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Ur(e, s) ? s : null;
}, Wn = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, u = au({
      dragStartTime: t,
      viewport: l,
      subject: c,
      center: a,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (u) {
      n(u);
      return;
    }
  }
  const d = Jl({
    center: a,
    destination: be(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const f = su({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(d.descriptor.id, f);
}, cu = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => vt
}) => {
  const n = ut(e), o = ut(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fluid scroll if not dragging") : v());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: l
    } = i;
    Wn({
      state: d,
      scrollWindow: n,
      scrollDroppable: o,
      dragStartTime: l,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (d) => {
      xt(), i && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start auto scrolling when already started") : v());
      const f = Date.now();
      let l = !1;
      const u = () => {
        l = !0;
      };
      Wn({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: u,
        scrollDroppable: u,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: l
      }, Dt(), l && a(d);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, lu = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, c) => {
    const d = le(s.current.client.selection, c);
    e({
      client: d
    });
  }, o = (s, c) => {
    if (!Ur(s, c))
      return c;
    const d = iu(s, c);
    if (!d)
      return t(s.descriptor.id, c), null;
    const f = he(c, d);
    return t(s.descriptor.id, f), he(c, f);
  }, i = (s, c, d) => {
    if (!s || !Wr(c, d))
      return d;
    const f = ou(c, d);
    if (!f)
      return r(d), null;
    const l = he(d, f);
    return r(l), he(d, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const d = be(s.impact);
    d || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot perform a jump scroll when there is no destination") : v());
    const f = o(s.dimensions.droppables[d], c);
    if (!f)
      return;
    const l = s.viewport, u = i(s.isWindowScrollAllowed, l, f);
    u && n(s, u);
  };
}, uu = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = cu({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = lu({
    move: r,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(n().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          o.scroll(c);
          return;
        }
        c.scrollJumpRequest && i(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Xe = "data-rfd", Je = /* @__PURE__ */ (() => {
  const e = `${Xe}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), vr = /* @__PURE__ */ (() => {
  const e = `${Xe}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), du = /* @__PURE__ */ (() => {
  const e = `${Xe}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Un = {
  contextId: `${Xe}-scroll-container-context-id`
}, fu = (e) => (t) => `[${t}="${e}"]`, rt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), pu = "pointer-events: none;";
var mu = (e) => {
  const t = fu(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Je.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: pu,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${it.outOfTheWay};
    `;
    return {
      selector: t(vr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(du.contextId),
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
    always: rt(a, "always"),
    resting: rt(a, "resting"),
    dragging: rt(a, "dragging"),
    dropAnimating: rt(a, "dropAnimating"),
    userCancel: rt(a, "userCancel")
  };
};
const gu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ro : oe;
var ye = gu;
const tr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find the head to append a style to") : v()), e;
}, jn = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function vu(e, t) {
  const r = F(() => mu(e), [e]), n = G(null), o = G(null), i = A(ae((l) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), u.textContent = l;
  }), []), a = A((l) => {
    const u = n.current;
    u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), u.textContent = l;
  }, []);
  ye(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? v(!1, "style elements already mounted") : v());
    const l = jn(t), u = jn(t);
    return n.current = l, o.current = u, l.setAttribute(`${Xe}-always`, e), u.setAttribute(`${Xe}-dynamic`, e), tr().appendChild(l), tr().appendChild(u), a(r.always), i(r.resting), () => {
      const p = (g) => {
        const h = g.current;
        h || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot unmount ref as it is not set") : v()), tr().removeChild(h), g.current = null;
      };
      p(n), p(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = A(() => i(r.dragging), [i, r.dragging]), c = A((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), d = A(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return F(() => ({
    dragging: s,
    dropping: c,
    resting: d
  }), [s, c, d]);
}
function mi(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var gi = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Nt(e) {
  return e instanceof gi(e).HTMLElement;
}
function vi(e, t) {
  const r = `[${Je.contextId}="${e}"]`, n = mi(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Z(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Je.draggableId) === t);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && Z("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Z(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function hu(e) {
  const t = G({}), r = G(null), n = G(null), o = G(!1), i = A(function(u, p) {
    const g = {
      id: u,
      focus: p
    };
    return t.current[u] = g, function() {
      const m = t.current;
      m[u] !== g && delete m[u];
    };
  }, []), a = A(function(u) {
    const p = vi(e, u);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = A(function(u, p) {
    r.current === u && (r.current = p);
  }, []), c = A(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const u = r.current;
      u && a(u);
    }));
  }, [a]), d = A(function(u) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Je.draggableId) === u && (r.current = u);
  }, []);
  return ye(() => (o.current = !0, function() {
    o.current = !1;
    const u = n.current;
    u && cancelAnimationFrame(u);
  }), []), F(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, d, c, s]);
}
function bu() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(l) {
    return t.push(l), function() {
      const p = t.indexOf(l);
      p !== -1 && t.splice(p, 1);
    };
  }
  function n(l) {
    t.length && t.forEach((u) => u(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const u = o(l);
    return u || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find draggable entry with id [${l}]`) : v()), u;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, n({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, u) => {
      const p = e.draggables[u.descriptor.id];
      p && p.uniqueId === l.uniqueId && (delete e.draggables[u.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const u = l.descriptor.id, p = o(u);
      p && l.uniqueId === p.uniqueId && (delete e.draggables[u], e.droppables[l.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((u) => u.descriptor.type === l)
  };
  function s(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const u = s(l);
    return u || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find droppable entry with id [${l}]`) : v()), u;
  }
  const d = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const u = s(l.descriptor.id);
      u && l.uniqueId === u.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: c,
    findById: s,
    exists: (l) => !!s(l),
    getAllByType: (l) => Object.values(e.droppables).filter((u) => u.descriptor.type === l)
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
function yu() {
  const e = F(bu, []);
  return oe(() => function() {
    M.version.startsWith("16") || M.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var jr = /* @__PURE__ */ M.createContext(null), ht = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.body") : v()), e;
};
const Eu = {
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
var xu = Eu;
const Du = (e) => `rfd-announcement-${e}`;
function Nu(e) {
  const t = F(() => Du(e), [e]), r = G(null);
  return oe(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Be(i.style, xu), ht().appendChild(i), function() {
      setTimeout(function() {
        const c = ht();
        c.contains(i) && c.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), A((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && Z(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Su = 0;
const hi = {
  separator: "::"
};
function wu(e, t = hi) {
  return F(() => `${e}${t.separator}${Su++}`, [t.separator, e]);
}
function Cu(e, t = hi) {
  const r = M.useId();
  return F(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Hr = "useId" in M ? Cu : wu;
function Iu({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Ou({
  contextId: e,
  text: t
}) {
  const r = Hr("hidden-text", {
    separator: "-"
  }), n = F(() => Iu({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return oe(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", ht().appendChild(i), function() {
      const s = ht();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var Wt = /* @__PURE__ */ M.createContext(null), Au = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Pu = /(\d+)\.(\d+)\.(\d+)/, Hn = (e) => {
  const t = Pu.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? v(!1, `Unable to parse React version ${e}`) : v());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Ru = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var _u = (e, t) => {
  const r = Hn(e), n = Hn(t);
  Ru(r, n) || process.env.NODE_ENV !== "production" && Z(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const rr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Tu = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Z(`
      No <!doctype html> found.

      ${rr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Z(`
      Unexpected <!doctype> found: (${t.name})

      ${rr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Z(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${rr}
    `);
};
function zr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function St(e, t) {
  zr(() => {
    oe(() => {
      try {
        e();
      } catch (r) {
        dr(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function $u() {
  St(() => {
    _u(Au.react, M.version), Tu(document);
  }, []);
}
function qr(e) {
  const t = G(e);
  return oe(() => {
    t.current = e;
  }), t;
}
function Vu() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot claim lock as it is already claimed") : v());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot release lock when there is no lock") : v()), e = null;
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
function bt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Bu = 9, Mu = 13, Yr = 27, bi = 32, Lu = 33, Fu = 34, Gu = 35, ku = 36, Wu = 37, Uu = 38, ju = 39, Hu = 40, zu = {
  [Mu]: !0,
  [Bu]: !0
};
var yi = (e) => {
  zu[e.keyCode] && e.preventDefault();
};
const qu = /* @__PURE__ */ (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Ut = qu;
const Ei = 0, zn = 5;
function Yu(e, t) {
  return Math.abs(t.x - e.x) >= zn || Math.abs(t.y - e.y) >= zn;
}
const qn = {
  type: "IDLE"
};
function Ku({
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
      if (i !== Ei)
        return;
      const c = {
        x: a,
        y: s
      }, d = r();
      if (d.type === "DRAGGING") {
        o.preventDefault(), d.actions.move(c);
        return;
      }
      d.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot be IDLE") : v());
      const f = d.point;
      if (!Yu(f, c))
        return;
      o.preventDefault();
      const l = d.actions.fluidLift(c);
      n({
        type: "DRAGGING",
        actions: l
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
      if (o.keyCode === Yr) {
        o.preventDefault(), e();
        return;
      }
      yi(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase") : v()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Ut,
    fn: e
  }];
}
function Xu(e) {
  const t = G(qn), r = G(Me), n = F(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== Ei || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const u = e.findClosestDraggableId(l);
      if (!u)
        return;
      const p = e.tryGetLock(u, a, {
        sourceEvent: l
      });
      if (!p)
        return;
      l.preventDefault();
      const g = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), d(p, g);
    }
  }), [e]), o = F(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(f);
      if (!l)
        return;
      const u = e.findOptionsForDraggable(l);
      u && (u.shouldRespectForcePress || e.canGetLock(l) && f.preventDefault());
    }
  }), [e]), i = A(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = De(window, [o, n], l);
  }, [o, n]), a = A(() => {
    t.current.type !== "IDLE" && (t.current = qn, r.current(), i());
  }, [i]), s = A(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = A(function() {
    const l = {
      capture: !0,
      passive: !1
    }, u = Ku({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = De(window, u, l);
  }, [s, a]), d = A(function(l, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v()), t.current = {
      type: "PENDING",
      point: u,
      actions: l
    }, c();
  }, [c]);
  ye(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function Ju() {
}
const Zu = {
  [Fu]: !0,
  [Lu]: !0,
  [ku]: !0,
  [Gu]: !0
};
function Qu(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Yr) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === bi) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Hu) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Uu) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === ju) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Wu) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Zu[o.keyCode]) {
        o.preventDefault();
        return;
      }
      yi(o);
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
    eventName: Ut,
    fn: r
  }];
}
function ed(e) {
  const t = G(Ju), r = F(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== bi)
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
      let c = !0;
      const d = s.snapLift();
      t.current();
      function f() {
        c || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop capturing a keyboard drag when not capturing") : v()), c = !1, t.current(), n();
      }
      t.current = De(window, Qu(d, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = A(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = De(window, [r], i);
  }, [r]);
  ye(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const nr = {
  type: "IDLE"
}, td = 120, rd = 0.15;
function nd({
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
      r.keyCode === Yr && r.preventDefault(), e();
    }
  }, {
    eventName: Ut,
    fn: e
  }];
}
function od({
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
      o.type === "IDLE" && (process.env.NODE_ENV, v());
      const i = n.touches[0];
      if (!i || !(i.force >= rd))
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
    eventName: Ut,
    fn: e
  }];
}
function id(e) {
  const t = G(nr), r = G(Me), n = A(function() {
    return t.current;
  }, []), o = A(function(p) {
    t.current = p;
  }, []), i = F(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(p);
      if (!g)
        return;
      const h = e.tryGetLock(g, s, {
        sourceEvent: p
      });
      if (!h)
        return;
      const m = p.touches[0], {
        clientX: y,
        clientY: E
      } = m, D = {
        x: y,
        y: E
      };
      r.current(), l(h, D);
    }
  }), [e]), a = A(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = De(window, [i], p);
  }, [i]), s = A(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(nr), r.current(), a());
  }, [a, o]), c = A(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), d = A(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: s,
      getPhase: n
    }, h = De(window, od(g), p), m = De(window, nd(g), p);
    r.current = function() {
      h(), m();
    };
  }, [c, n, s]), f = A(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? v(!1, `Cannot start dragging from phase ${p.type}`) : v());
    const g = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, o]), l = A(function(p, g) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v());
    const h = setTimeout(f, td);
    o({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: h
    }), d();
  }, [d, n, o, f]);
  ye(function() {
    return a(), function() {
      r.current();
      const g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(nr));
    };
  }, [n, a, o]), ye(function() {
    return De(window, [{
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
function ad(e) {
  zr(() => {
    const t = qr(e);
    St(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot change the amount of sensor hooks after mounting") : v(!1));
    });
  });
}
const sd = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function xi(e, t) {
  if (t == null)
    return !1;
  if (sd.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : xi(e, t.parentElement);
}
function cd(e, t) {
  const r = t.target;
  return Nt(r) ? xi(e, r) : !1;
}
var ld = (e) => Se(e.getBoundingClientRect()).center;
function ud(e) {
  return e instanceof gi(e).Element;
}
const dd = /* @__PURE__ */ (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Di(e, t) {
  return e == null ? null : e[dd](t) ? e : Di(e.parentElement, t);
}
function fd(e, t) {
  return e.closest ? e.closest(t) : Di(e, t);
}
function pd(e) {
  return `[${Je.contextId}="${e}"]`;
}
function md(e, t) {
  const r = t.target;
  if (!ud(r))
    return process.env.NODE_ENV !== "production" && Z("event.target must be a Element"), null;
  const n = pd(e), o = fd(r, n);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && Z("drag handle must be a HTMLElement"), null) : null;
}
function gd(e, t) {
  const r = md(e, t);
  return r ? r.getAttribute(Je.draggableId) : null;
}
function vd(e, t) {
  const r = `[${vr.contextId}="${e}"]`, o = mi(document, r).find((i) => i.getAttribute(vr.id) === t);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && Z("Draggable element is not a HTMLElement"), null) : null;
}
function hd(e) {
  e.preventDefault();
}
function Ct({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && Z(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && Z(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Ni({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !ui(t.getState(), n)) : (process.env.NODE_ENV !== "production" && Z(`Unable to find draggable with id: ${n}`), !1);
}
function bd({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ni({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), d = vd(t, c.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && Z(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && cd(d, a))
    return null;
  const f = e.claim(i || Me);
  let l = "PRE_DRAG";
  function u() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function g(b, w) {
    Ct({
      expected: b,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(w());
  }
  const h = g.bind(null, "DRAGGING");
  function m(b) {
    function w() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (w(), process.env.NODE_ENV !== "production" ? v(!1, `Cannot lift in phase ${l}`) : v()), r.dispatch(Yc(b.liftActionArgs)), l = "DRAGGING";
    function _(I, W = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), W.shouldBlockNextClick) {
        const $ = De(window, [{
          eventName: "click",
          fn: hd,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      w(), r.dispatch(ri({
        reason: I
      }));
    }
    return {
      isActive: () => Ct({
        expected: "DRAGGING",
        phase: l,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: (I) => _("DROP", I),
      cancel: (I) => _("CANCEL", I),
      ...b.actions
    };
  }
  function y(b) {
    const w = ut((I) => {
      h(() => ti({
        client: I
      }));
    });
    return {
      ...m({
        liftActionArgs: {
          id: o,
          clientSelection: b,
          movementMode: "FLUID"
        },
        cleanup: () => w.cancel(),
        actions: {
          move: w
        }
      }),
      move: w
    };
  }
  function E() {
    const b = {
      moveUp: () => h(nl),
      moveRight: () => h(il),
      moveDown: () => h(ol),
      moveLeft: () => h(al)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: ld(d),
        movementMode: "SNAP"
      },
      cleanup: Me,
      actions: b
    });
  }
  function D() {
    Ct({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Ct({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: u,
    fluidLift: y,
    snapLift: E,
    abort: D
  };
}
const yd = [Xu, ed, id];
function Ed({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? yd : [], ...n || []], a = fe(() => Vu())[0], s = A(function(m, y) {
    bt(m) && !bt(y) && a.tryAbandon();
  }, [a]);
  ye(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const E = t.getState();
      s(m, E), m = E;
    });
  }, [a, t, s]), ye(() => a.tryAbandon, [a.tryAbandon]);
  const c = A((h) => Ni({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: h
  }), [a, r, t]), d = A((h, m, y) => bd({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), f = A((h) => gd(e, h), [e]), l = A((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), u = A(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Mr()));
  }, [a, t]), p = A(() => a.isClaimed(), [a]), g = F(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: u,
    isLockClaimed: p
  }), [c, d, f, l, u, p]);
  ad(i);
  for (let h = 0; h < i.length; h++)
    i[h](g);
}
const xd = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    M.version.startsWith("16") || M.version.startsWith("17") ? r() : io(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Dd = (e) => ({
  ...vt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...vt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function nt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find store from lazy ref") : v()), e.current;
}
function Nd(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = G(null);
  $u();
  const s = qr(e), c = A(() => xd(s.current), [s]), d = A(() => Dd(s.current), [s]), f = Nu(t), l = Ou({
    contextId: t,
    text: i
  }), u = vu(t, o), p = A(($) => {
    nt(a).dispatch($);
  }, []), g = F(() => sn({
    publishWhileDragging: Xc,
    updateDroppableScroll: Zc,
    updateDroppableIsEnabled: Qc,
    updateDroppableIsCombineEnabled: el,
    collectionStarting: Jc
  }, p), [p]), h = yu(), m = F(() => ql(h, g), [h, g]), y = F(() => uu({
    scrollWindow: Yl,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: d,
    ...sn({
      move: ti
    }, p)
  }), [m.scrollDroppable, p, d]), E = hu(t), D = F(() => Ul({
    announce: f,
    autoScroller: y,
    dimensionMarshal: m,
    focusMarshal: E,
    getResponders: c,
    styleMarshal: u
  }), [f, y, m, E, c, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== D && process.env.NODE_ENV !== "production" && Z("unexpected store change"), a.current = D;
  const x = A(() => {
    const $ = nt(a);
    $.getState().phase !== "IDLE" && $.dispatch(Mr());
  }, []), b = A(() => {
    const $ = nt(a).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), w = F(() => ({
    isDragging: b,
    tryAbort: x
  }), [b, x]);
  r(w);
  const _ = A(($) => ui(nt(a).getState(), $), []), I = A(() => We(nt(a).getState()), []), W = F(() => ({
    marshal: m,
    focus: E,
    contextId: t,
    canLift: _,
    isMovementAllowed: I,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, m, l, E, _, I, h]);
  return Ed({
    contextId: t,
    store: D,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), oe(() => x, [x]), M.createElement(Wt.Provider, {
    value: W
  }, M.createElement(Es, {
    context: jr,
    store: D
  }, e.children));
}
let Sd = 0;
function wd() {
  return F(() => `${Sd++}`, []);
}
function Cd() {
  return M.useId();
}
var Id = "useId" in M ? Cd : wd;
function Od(e) {
  const t = Id(), r = e.dragHandleUsageInstructions || At.dragHandleUsageInstructions;
  return M.createElement(Bs, null, (n) => M.createElement(Nd, {
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
const Yn = {
  dragging: 5e3,
  dropAnimating: 4500
}, Ad = (e, t) => t ? it.drop(t.duration) : e ? it.snap : it.fluid, Pd = (e, t) => {
  if (e)
    return t ? gt.opacity.drop : gt.opacity.combining;
}, Rd = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function _d(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Rd(e), c = !!i, d = c ? mr.drop(n, a) : mr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Ad(s, i),
    transform: d,
    opacity: Pd(a, c),
    zIndex: c ? Yn.dropAnimating : Yn.dragging,
    pointerEvents: "none"
  };
}
function Td(e) {
  return {
    transform: mr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function $d(e) {
  return e.type === "DRAGGING" ? _d(e) : Td(e);
}
function Vd(e, t, r = se) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Po(o, n), a = Tt(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: n.display
  }, c = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: s,
    displaceBy: c,
    client: i,
    page: a
  };
}
function Bd(e) {
  const t = Hr("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = F(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = A((p) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get dimension when no ref is set") : v()), Vd(r, g, p);
  }, [r, o]), f = F(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: d
  }), [r, d, c, t]), l = G(f), u = G(!0);
  ye(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), ye(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var Kr = /* @__PURE__ */ M.createContext(null);
function Si(e) {
  e && Nt(e) || (process.env.NODE_ENV !== "production" ? v(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : v());
}
function Md(e, t, r) {
  St(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? v(!1, "Draggable requires a draggableId") : v(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : v(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? v(!1, `${n(o)} requires an integer index prop`) : v(!1)), e.mapped.type !== "DRAGGING" && (Si(r()), e.isEnabled && (vi(t, o) || (process.env.NODE_ENV !== "production" ? v(!1, `${n(o)} Unable to find drag handle`) : v(!1))));
  });
}
function Ld(e) {
  zr(() => {
    const t = G(e);
    St(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Draggable isClone prop value changed during component life") : v(!1));
    }, [e]);
  });
}
function Bt(e) {
  const t = no(e);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find required context") : v()), t;
}
function Fd(e) {
  e.preventDefault();
}
const Gd = (e) => {
  const t = G(null), r = A((w = null) => {
    t.current = w;
  }, []), n = A(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Bt(Wt), {
    type: s,
    droppableId: c
  } = Bt(Kr), d = F(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: u,
    shouldRespectForcePress: p,
    canDragInteractiveElements: g,
    isClone: h,
    mapped: m,
    dropAnimationFinished: y
  } = e;
  if (Md(e, o, n), Ld(h), !h) {
    const w = F(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: u
    }), [d, a, n, g, p, u]);
    Bd(w);
  }
  const E = F(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Fd
  } : null, [o, i, l, u]), D = A((w) => {
    m.type === "DRAGGING" && m.dropping && w.propertyName === "transform" && (M.version.startsWith("16") || M.version.startsWith("17") ? y() : io(y));
  }, [y, m]), x = F(() => {
    const w = $d(m), _ = m.type === "DRAGGING" && m.dropping ? D : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: w,
        onTransitionEnd: _
      },
      dragHandleProps: E
    };
  }, [o, E, l, m, D, r]), b = F(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return M.createElement(M.Fragment, null, f(x, m.snapshot, b));
};
var kd = Gd, wi = (e, t) => e === t, Ci = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Wd = (e) => e.combine ? e.combine.draggableId : null, Ud = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function jd() {
  const e = ae((o, i) => ({
    x: o,
    y: i
  })), t = ae((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = ae((o, i, a, s, c = null, d = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: d,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: f,
      snapshot: t(i, s, c, d, null)
    }
  }));
  return (o, i) => {
    if (bt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = be(o.impact), d = Ud(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, f = d.mode, l = Ci(d), u = Wd(d), g = {
        duration: o.dropDuration,
        curve: Fr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: u ? gt.opacity.drop : null,
        scale: u ? gt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: g,
          draggingOver: l,
          combineWith: u,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, s, l, u, g)
        }
      };
    }
    return null;
  };
}
function Ii(e = null) {
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
const Hd = {
  mapped: {
    type: "SECONDARY",
    offset: se,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: /* @__PURE__ */ Ii(null)
  }
};
function zd() {
  const e = ae((a, s) => ({
    x: a,
    y: s
  })), t = ae(Ii), r = ae((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(se, a, !0) : null, o = (a, s, c, d) => {
    const f = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), u = Ft(c), p = u && u.draggableId === a ? s : null;
    if (!f) {
      if (!l)
        return n(p);
      if (c.displaced.invisible[a])
        return null;
      const m = Ze(d.displacedBy.point), y = e(m.x, m.y);
      return r(y, p, !0);
    }
    if (l)
      return n(p);
    const g = c.displacedBy.point, h = e(g.x, g.y);
    return r(h, p, f.shouldAnimate);
  };
  return (a, s) => {
    if (bt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : o(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const qd = () => {
  const e = jd(), t = zd();
  return (n, o) => e(n, o) || t(n, o) || Hd;
}, Yd = {
  dropAnimationFinished: ni
}, Kd = /* @__PURE__ */ Oo(qd, Yd, null, {
  context: jr,
  areStatePropsEqual: wi
})(kd);
var Xd = Kd;
function Oi(e) {
  return Bt(Kr).isUsingCloneFor === e.draggableId && !e.isClone ? null : M.createElement(Xd, e);
}
function Jd(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return M.createElement(Oi, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Xr = (e) => (t) => e === t, Zd = /* @__PURE__ */ Xr("scroll"), Qd = /* @__PURE__ */ Xr("auto"), ef = /* @__PURE__ */ Xr("visible"), Kn = (e, t) => t(e.overflowX) || t(e.overflowY), tf = (e, t) => t(e.overflowX) && t(e.overflowY), Ai = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Kn(r, Zd) || Kn(r, Qd);
}, rf = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = ht(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, v()), !Ai(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return tf(n, ef) || process.env.NODE_ENV !== "production" && Z(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Jr = (e) => e == null ? null : e === document.body ? rf() ? e : null : e === document.documentElement ? null : Ai(e) ? e : Jr(e.parentElement);
var nf = (e) => {
  !e || !Jr(e.parentElement) || process.env.NODE_ENV !== "production" && Z(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, hr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Pi = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Pi(e.parentElement) : !1;
var of = (e) => {
  const t = Jr(e), r = Pi(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, af = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: n,
  direction: o,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: u,
      client: p
    } = s, g = si({
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
        max: g,
        diff: {
          value: se,
          displacement: se
        }
      }
    };
  })(), d = o === "vertical" ? _r : Go, f = Ke({
    page: a,
    withPlaceholder: null,
    axis: d,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: d,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const sf = (e, t) => {
  const r = Ro(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, c = Or({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ar({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var cf = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, d = sf(e, c), f = Tt(d, n), l = (() => {
    if (!c)
      return null;
    const p = Ro(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: Tt(p, n),
      scroll: hr(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return af({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: d,
    page: f,
    closest: l
  });
};
const lf = {
  passive: !1
}, uf = {
  passive: !0
};
var Xn = (e) => e.shouldPublishImmediately ? lf : uf;
const It = (e) => e && e.env.closestScrollable || null;
function df(e) {
  const t = G(null), r = Bt(Wt), n = Hr("droppable"), {
    registry: o,
    marshal: i
  } = r, a = qr(e), s = F(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = G(s), d = F(() => ae((x, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? v(!1, "Can only update scroll when dragging") : v());
    const w = {
      x,
      y: b
    };
    i.updateDroppableScroll(s.id, w);
  }), [s.id, i]), f = A(() => {
    const x = t.current;
    return !x || !x.env.closestScrollable ? se : hr(x.env.closestScrollable);
  }, []), l = A(() => {
    const x = f();
    d(x.x, x.y);
  }, [f, d]), u = F(() => ut(l), [l]), p = A(() => {
    const x = t.current, b = It(x);
    if (x && b || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find scroll options while scrolling") : v()), x.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    u();
  }, [u, l]), g = A((x, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect a droppable while a drag is occurring") : v());
    const w = a.current, _ = w.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect without a droppable ref") : v());
    const I = of(_), W = {
      ref: _,
      descriptor: s,
      env: I,
      scrollOptions: b
    };
    t.current = W;
    const $ = cf({
      ref: _,
      descriptor: s,
      env: I,
      windowScroll: x,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), U = I.closestScrollable;
    return U && (U.setAttribute(Un.contextId, r.contextId), U.addEventListener("scroll", p, Xn(W.scrollOptions)), process.env.NODE_ENV !== "production" && nf(U)), $;
  }, [r.contextId, s, p, a]), h = A(() => {
    const x = t.current, b = It(x);
    return x && b || (process.env.NODE_ENV !== "production" ? v(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : v()), hr(b);
  }, []), m = A(() => {
    const x = t.current;
    x || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop drag when no active drag") : v());
    const b = It(x);
    t.current = null, b && (u.cancel(), b.removeAttribute(Un.contextId), b.removeEventListener("scroll", p, Xn(x.scrollOptions)));
  }, [p, u]), y = A((x) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll when there is no drag") : v());
    const w = It(b);
    w || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll a droppable with no closest scrollable") : v()), w.scrollTop += x.y, w.scrollLeft += x.x;
  }, []), E = F(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: y
  }), [m, g, h, y]), D = F(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: E
  }), [E, s, n]);
  ye(() => (c.current = D.descriptor, o.droppable.register(D), () => {
    t.current && (process.env.NODE_ENV !== "production" && Z("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(D);
  }), [E, s, m, D, i, o.droppable]), ye(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ye(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function or() {
}
const Jn = {
  width: 0,
  height: 0,
  margin: Us
}, ff = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Jn : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, pf = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = ff({
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
    transition: r !== "none" ? it.placeholder : null
  };
}, mf = (e) => {
  const t = G(null), r = A(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = fe(e.animate === "open");
  oe(() => s ? n !== "open" ? (r(), c(!1), or) : t.current ? or : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : or, [n, s, r]);
  const d = A((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = pf({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return M.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var gf = /* @__PURE__ */ M.memo(mf);
function ir(e) {
  return typeof e == "boolean";
}
function ar(e, t) {
  t.forEach((r) => r(e));
}
const vf = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? v(!1, "A Droppable requires a droppableId prop") : v()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : v());
}, function({
  props: t
}) {
  ir(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isDropDisabled must be a boolean") : v()), ir(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isCombineEnabled must be a boolean") : v()), ir(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? v(!1, "ignoreContainerClipping must be a boolean") : v());
}, function({
  getDroppableRef: t
}) {
  Si(t());
}], hf = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Z(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], bf = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? v(!1, "Must provide a clone render function (renderClone) for virtual lists") : v());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? v(!1, "Expected virtual list to not have a placeholder") : v());
}];
function yf(e) {
  St(() => {
    ar(e, vf), e.props.mode === "standard" && ar(e, hf), e.props.mode === "virtual" && ar(e, bf);
  });
}
class Ef extends M.PureComponent {
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
const xf = (e) => {
  const t = no(Wt);
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find app context") : v());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = G(null), i = G(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: d,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: u,
    isCombineEnabled: p,
    snapshot: g,
    useClone: h,
    updateViewportMaxScroll: m,
    getContainerForClone: y
  } = e, E = A(() => o.current, []), D = A((k = null) => {
    o.current = k;
  }, []), x = A(() => i.current, []), b = A((k = null) => {
    i.current = k;
  }, []);
  yf({
    props: e,
    getDroppableRef: E,
    getPlaceholderRef: x
  });
  const w = A(() => {
    n() && m({
      maxScroll: li()
    });
  }, [n, m]);
  df({
    droppableId: s,
    type: c,
    mode: d,
    direction: f,
    isDropDisabled: u,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: E
  });
  const _ = F(() => M.createElement(Ef, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: k,
    data: re,
    animate: ce
  }) => M.createElement(gf, {
    placeholder: re,
    onClose: k,
    innerRef: b,
    animate: ce,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, b]), I = F(() => ({
    innerRef: D,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, _, D]), W = h ? h.dragging.draggableId : null, $ = F(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: W
  }), [s, W, c]);
  function U() {
    if (!h)
      return null;
    const {
      dragging: k,
      render: re
    } = h, ce = M.createElement(Oi, {
      draggableId: k.draggableId,
      index: k.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ne, T) => re(ne, T, k));
    return $i.createPortal(ce, y());
  }
  return M.createElement(Kr.Provider, {
    value: $
  }, a(I, g), U());
};
var Df = xf;
function Nf() {
  return document.body || (process.env.NODE_ENV !== "production" ? v(!1, "document.body is not ready") : v()), document.body;
}
const Zn = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Nf
}, Ri = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Zn)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Zn[r]
    });
  return t;
}, sr = (e, t) => e === t.droppable.type, Qn = (e, t) => t.draggables[e.draggable.id], Sf = () => {
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
  }, r = ae((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = ae((i, a, s, c, d, f) => {
    const l = d.descriptor.id;
    if (d.descriptor.droppableId === i) {
      const g = f ? {
        render: f,
        dragging: r(d.descriptor)
      } : null, h = {
        isDraggingOver: s,
        draggingOverWith: s ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: d.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
        useClone: g
      };
    }
    if (!a)
      return t;
    if (!c)
      return e;
    const p = {
      isDraggingOver: s,
      draggingOverWith: l,
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
    const s = Ri(a), c = s.droppableId, d = s.type, f = !s.isDropDisabled, l = s.renderClone;
    if (bt(i)) {
      const u = i.critical;
      if (!sr(d, u))
        return t;
      const p = Qn(u, i.dimensions), g = be(i.impact) === c;
      return n(c, f, g, g, p, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!sr(d, u.critical))
        return t;
      const p = Qn(u.critical, i.dimensions);
      return n(c, f, Ci(u.result) === c, be(u.impact) === c, p, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!sr(d, u.critical))
        return t;
      const p = be(u.impact) === c, g = !!(u.impact.at && u.impact.at.type === "COMBINE"), h = u.critical.droppable.id === c;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, wf = {
  updateViewportMaxScroll: rl
}, Cf = /* @__PURE__ */ Oo(Sf, wf, (e, t, r) => ({
  ...Ri(r),
  ...e,
  ...t
}), {
  context: jr,
  areStatePropsEqual: wi
})(Df);
var If = Cf;
const Of = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: n,
  isDragDisabled: o = !0,
  isLoading: i,
  onRowClick: a,
  itemClickKey: s,
  haveLinks: c,
  className: d
}) => {
  const [f, l] = fe(null), [u, p] = fe(e);
  oe(() => {
    p(e);
  }, [e]);
  const g = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", h = (y) => {
    a == null || a(y), l(y);
  }, m = (y) => {
    if (!y.destination || !(u != null && u.length)) return;
    const E = y.source.index, D = y.destination.index, x = [...u], [b] = x.splice(E, 1);
    x.splice(D, 0, b), p(x);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ ie("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ N("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ N("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ N(ao, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ N(ho, { className: d, children: /* @__PURE__ */ N("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ N("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ N(Od, { onDragEnd: m, children: /* @__PURE__ */ N(If, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ ie("table", { className: "w-full", children: [
    /* @__PURE__ */ N("thead", { children: /* @__PURE__ */ N("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((E, D) => /* @__PURE__ */ N(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === E.name.find((x) => x) ? `-${E.name.find((x) => x) ?? ""}` : E.name.find((x) => x) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === E.name.find((x) => x) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: E.title
      },
      D
    )) }) }),
    /* @__PURE__ */ ie(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          u == null ? void 0 : u.map((E, D) => {
            var x;
            return /* @__PURE__ */ N(
              Jd,
              {
                isDragDisabled: o,
                draggableId: (x = E == null ? void 0 : E.id) == null ? void 0 : x.toString(),
                index: D,
                children: (b) => {
                  const w = {
                    ...b.draggableProps.style
                  };
                  return /* @__PURE__ */ N(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === u[D] && g}`,
                      onClick: () => h(
                        s ? E[s] : E.id
                      ),
                      ref: b.innerRef,
                      ...b.draggableProps,
                      ...b.dragHandleProps,
                      style: w,
                      children: t.map((_, I) => {
                        var $;
                        let W = ($ = _ == null ? void 0 : _.name) == null ? void 0 : $.reduce(
                          (U, k) => U == null ? void 0 : U[k],
                          u == null ? void 0 : u[D]
                        );
                        return /* @__PURE__ */ N(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: _.transform ? _.transform(W, D) : W
                          },
                          I
                        );
                      })
                    }
                  );
                }
              },
              E == null ? void 0 : E.id
            );
          }),
          y.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, Zf = Of, Af = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ N(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Qf = Af;
var br = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new WeakMap(), eo = 0, Pf = void 0;
function Rf(e) {
  return e ? (Ot.has(e) || (eo += 1, Ot.set(e, eo.toString())), Ot.get(e)) : "0";
}
function _f(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Rf(e.root) : e[t]}`).toString();
}
function Tf(e) {
  const t = _f(e);
  let r = br.get(t);
  if (!r) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const i = new IntersectionObserver((a) => {
      a.forEach((s) => {
        var c;
        const d = s.isIntersecting && o.some((f) => s.intersectionRatio >= f);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = d), (c = n.get(s.target)) == null || c.forEach((f) => {
          f(d, s);
        });
      });
    }, e);
    o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: n
    }, br.set(t, r);
  }
  return r;
}
function $f(e, t, r = {}, n = Pf) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const c = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: c,
      intersectionRect: c,
      rootBounds: c
    }), () => {
    };
  }
  const { id: o, observer: i, elements: a } = Tf(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), br.delete(o));
  };
}
function Vf({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: n,
  root: o,
  triggerOnce: i,
  skip: a,
  initialInView: s,
  fallbackInView: c,
  onChange: d
} = {}) {
  var f;
  const [l, u] = B.useState(null), p = B.useRef(d), [g, h] = B.useState({
    inView: !!s,
    entry: void 0
  });
  p.current = d, B.useEffect(
    () => {
      if (a || !l) return;
      let D;
      return D = $f(
        l,
        (x, b) => {
          h({
            inView: x,
            entry: b
          }), p.current && p.current(x, b), b.isIntersecting && i && D && (D(), D = void 0);
        },
        {
          root: o,
          rootMargin: n,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        c
      ), () => {
        D && D();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      l,
      o,
      n,
      i,
      a,
      r,
      c,
      t
    ]
  );
  const m = (f = g.entry) == null ? void 0 : f.target, y = B.useRef(void 0);
  !l && m && !i && !a && y.current !== m && (y.current = m, h({
    inView: !!s,
    entry: void 0
  }));
  const E = [u, g.inView, g.entry];
  return E.ref = E[0], E.inView = E[1], E.entry = E[2], E;
}
const Bf = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = fe(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return oe(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ N(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ N(
        st,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, Mf = Bf, Lf = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  emptyComponent: o,
  emptyClassName: i,
  loaderComponent: a,
  isScrollTopButton: s = !0
}) => {
  const {
    hasNextPage: c,
    fetchNextPage: d,
    isFetchingNextPage: f,
    isLoading: l,
    data: u,
    isPending: p
  } = e, g = u == null ? void 0 : u.pages.flatMap((y) => y), { ref: h, inView: m } = Vf();
  return oe(() => {
    m && c && d();
  }, [d, m, c]), /* @__PURE__ */ ie(at, { children: [
    s && /* @__PURE__ */ N(Mf, { className: n }),
    /* @__PURE__ */ N(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(g != null && g.length) && g.map((y, E) => t(y, E))
      }
    ),
    /* @__PURE__ */ N(
      "div",
      {
        className: Er(
          "flex mt-8 flex-row items-center justify-center",
          i
        ),
        ref: h,
        children: l || p ? a : g != null && g.length ? f ? a : null : o
      }
    )
  ] });
}, ep = Lf, tp = () => {
  const e = G(null);
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
  jf as Button,
  Hf as Checkbox,
  zf as Chips,
  xr as ErrorText,
  st as Icon,
  ep as InfiniteScroll,
  qf as Input,
  Yf as List,
  ao as Loader,
  Kf as MultiSelectSearch,
  Mf as ScrollTopButton,
  Xf as Search,
  Jf as Select,
  Zf as Table,
  Qf as Textarea,
  ho as Wrapper,
  bo as useDebounce,
  tp as useScroll
};
