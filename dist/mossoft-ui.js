import { jsx as N, jsxs as ie, Fragment as at } from "react/jsx-runtime";
import * as L from "react";
import F, { memo as _i, useRef as U, useCallback as Ti, useState as de, useEffect as ae, useMemo as Er, useLayoutEffect as ro, useId as $i, useContext as no } from "react";
import { motion as Pt, AnimatePresence as oo } from "framer-motion";
import { twMerge as xr } from "tailwind-merge";
import Vi, { flushSync as io } from "react-dom";
const Bi = ({ name: e, className: t, ...r }) => /* @__PURE__ */ N(
  "svg",
  {
    className: `text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ N("use", { className: "w-full h-full object-contain", href: `#${e}` })
  }
), st = /* @__PURE__ */ _i(Bi), Mi = ({ style: e, text: t }) => /* @__PURE__ */ ie("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ N("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ N("span", { className: "text-base", children: t })
] }), ao = Mi, Li = {
  xs: "px-3 py-1.5 text-xs rounded-lg",
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-2xl"
}, Fi = ({
  children: e,
  onClick: t,
  debounceTimeMs: r = 500,
  className: n,
  isLoading: o,
  variant: i,
  size: a = "md",
  icon: s,
  disabled: c,
  ...d
}) => {
  const f = U(null), l = Ti(
    (g) => {
      f.current || (t == null || t(g), f.current = setTimeout(() => {
        f.current = null;
      }, r));
    },
    [t, r]
  ), u = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary",
    danger: "bg-danger/10 text-danger hover:bg-danger/20 focus:ring-danger",
    link: "bg-transparent text-primary hover:underline focus:ring-primary px-2 py-1",
    tab: "bg-primary text-white focus:ring-primary px-5 py-2 rounded-full"
  }[i], p = [
    "relative inline-flex items-center justify-center font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    Li[a],
    u,
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ N(
    Pt.button,
    {
      disabled: c || o,
      onClick: l,
      className: p,
      ...d,
      whileTap: { scale: 0.96 },
      whileHover: !c && !o ? { scale: 1.02 } : void 0,
      children: o ? /* @__PURE__ */ N(ao, { style: { width: 20, height: 20 } }) : /* @__PURE__ */ ie(at, { children: [
        e,
        s && /* @__PURE__ */ N(
          st,
          {
            name: s,
            className: `ml-2 ${a === "xs" ? "w-3 h-3" : a === "sm" ? "w-4 h-4" : "w-5 h-5"}`
          }
        )
      ] })
    }
  );
}, qf = Fi, Gi = ({ error: e }) => /* @__PURE__ */ N("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ N("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), Dr = Gi, ki = ({
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
  a && /* @__PURE__ */ N(Dr, { error: a })
] }), Yf = ki, Wi = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ N("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ N(at, { children: o.title ? /* @__PURE__ */ N(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ N(at, {}) })) }), Kf = Wi;
function Nr(e, t) {
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
function Ui(e) {
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
function ji(e) {
  return typeof e == "number" && isNaN(e);
}
function so(e) {
  return Ue(e) || ji(e) || typeof e == "number" && !isFinite(e);
}
function co(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Hi(e) {
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
function zi(e, t, r) {
  var n = Hi(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function qi(e) {
  var t = U(e);
  t.current = e;
  var r = U(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Sr(e, t) {
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
function Yi(e) {
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
function Qr(e, t) {
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
  return a < 0 ? o = "0." + Qr("0", Math.abs(a)) + o : a >= s ? o = o + Qr("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function en(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = Sr(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, c = parseFloat("0." + (a || "0")), d = a.length <= t ? "0." + a : c.toFixed(t), f = d.split("."), l = i;
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
var fo = /* @__PURE__ */ Ui(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), Ki = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function Xi(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function zt(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Ji() {
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
function Zi(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Qi(e, t, r, n, o, i, a) {
  a === void 0 && (a = Zi);
  var s = o.findIndex(function(E) {
    return E;
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
  var x = y === d || u[y] === -1 ? f : u[y];
  for (y = n - 1; y > 0 && u[y] === -1; )
    y--;
  var D = y === -1 || u[y] === -1 ? 0 : u[y] + 1;
  return D > x ? x : n - D < x - n ? D : x;
}
function Rt(e, t, r, n) {
  var o = e.length;
  if (t = Xi(t, 0, o), n === "left") {
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
function ea(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(je(e[r]) || je(e[r - 1]));
  return t;
}
function go(e, t, r, n, o, i) {
  i === void 0 && (i = _e);
  var a = qi(function(g, h) {
    var m, y;
    return so(g) ? (y = "", m = "") : typeof g == "number" || h ? (y = typeof g == "number" ? uo(g) : g, m = n(y)) : (y = o(g, void 0), m = n(y)), { formattedValue: m, numAsString: y };
  }), s = de(function() {
    return a(Ue(e) ? t : e, r);
  }), c = s[0], d = s[1], f = function(g, h) {
    g.formattedValue !== c.formattedValue && d({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), i(g, h);
  }, l = e, u = r;
  Ue(e) && (l = c.numAsString, u = !0);
  var p = a(l, u);
  return Er(function() {
    d(p);
  }, [p.formattedValue]), [c, f];
}
function ta(e) {
  return e.replace(/[^0-9]/g, "");
}
function ra(e) {
  return e;
}
function vo(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = ra);
  var s = e.removeFormatting;
  s === void 0 && (s = ta);
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
  var y = e.value, x = e.getCaretBoundary;
  x === void 0 && (x = ea);
  var D = e.isValidInputCharacter;
  D === void 0 && (D = je);
  var E = e.isCharacterSame, b = Nr(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), S = go(y, c, !!d, a, s, f), T = S[0], I = T.formattedValue, G = T.numAsString, $ = S[1], k = U(), M = U({ formattedValue: I, numAsString: G }), K = function(C, R) {
    M.current = { formattedValue: C.formattedValue, numAsString: C.value }, $(C, R);
  }, oe = de(!1), ne = oe[0], _ = oe[1], O = U(null), V = U({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ae(function() {
    return _(!0), function() {
      clearTimeout(V.current.setCaretTimeout), clearTimeout(V.current.focusTimeout);
    };
  }, []);
  var X = a, Z = function(C, R) {
    var B = parseFloat(R);
    return {
      formattedValue: C,
      value: R,
      floatValue: isNaN(B) ? void 0 : B
    };
  }, Y = function(C, R, B) {
    C.selectionStart === 0 && C.selectionEnd === C.value.length || (Ve(C, R), V.current.setCaretTimeout = setTimeout(function() {
      C.value === B && C.selectionStart !== R && Ve(C, R);
    }, 0));
  }, ee = function(C, R, B) {
    return Rt(C, R, x(C), B);
  }, ue = function(C, R, B) {
    var te = x(R), pe = Qi(R, I, C, B, te, D, E);
    return pe = Rt(R, pe, te), pe;
  }, we = function(C) {
    var R = C.formattedValue;
    R === void 0 && (R = "");
    var B = C.input, te = C.source, pe = C.event, re = C.numAsString, J;
    if (B) {
      var Re = C.inputValue || B.value, Te = zt(B);
      B.value = R, J = ue(Re, R, Te), J !== void 0 && Y(B, J, R);
    }
    R !== I && K(Z(R, re), { event: pe, source: te });
  };
  ae(function() {
    var C = M.current, R = C.formattedValue, B = C.numAsString;
    (I !== R || G !== B) && K(Z(I, G), {
      event: void 0,
      source: ct.props
    });
  }, [I, G]);
  var ge = O.current ? zt(O.current) : void 0, Ee = typeof window < "u" ? ro : ae;
  Ee(function() {
    var C = O.current;
    if (I !== M.current.formattedValue && C) {
      var R = ue(M.current.formattedValue, I, ge);
      C.value = I, Y(C, R, I);
    }
  }, [I]);
  var Ce = function(C, R, B) {
    var te = R.target, pe = k.current ? Ki(k.current, te.selectionEnd) : fo(I, C), re = Object.assign(Object.assign({}, pe), { lastValue: I }), J = s(C, re), Re = X(J);
    if (J = s(Re, void 0), l && !l(Z(Re, J))) {
      var Te = R.target, $e = zt(Te), Ht = ue(C, I, $e);
      return Te.value = I, Y(Te, Ht, I), !1;
    }
    return we({
      formattedValue: Re,
      numAsString: J,
      inputValue: C,
      event: R,
      source: B,
      input: R.target
    }), !0;
  }, Oe = function(C, R) {
    R === void 0 && (R = 0);
    var B = C.selectionStart, te = C.selectionEnd;
    k.current = { selectionStart: B, selectionEnd: te + R };
  }, Ie = function(C) {
    var R = C.target, B = R.value, te = Ce(B, C, ct.event);
    te && u(C), k.current = void 0;
  }, Ae = function(C) {
    var R = C.target, B = C.key, te = R.selectionStart, pe = R.selectionEnd, re = R.value;
    re === void 0 && (re = "");
    var J;
    B === "ArrowLeft" || B === "Backspace" ? J = Math.max(te - 1, 0) : B === "ArrowRight" ? J = Math.min(te + 1, re.length) : B === "Delete" && (J = te);
    var Re = 0;
    B === "Delete" && te === pe && (Re = 1);
    var Te = B === "ArrowLeft" || B === "ArrowRight";
    if (J === void 0 || te !== pe && !Te) {
      p(C), Oe(R, Re);
      return;
    }
    var $e = J;
    if (Te) {
      var Ht = B === "ArrowLeft" ? "left" : "right";
      $e = ee(re, J, Ht), $e !== J && C.preventDefault();
    } else B === "Delete" && !D(re[J]) ? $e = ee(re, J, "right") : B === "Backspace" && !D(re[J]) && ($e = ee(re, J, "left"));
    $e !== J && Y(R, $e, re), p(C), Oe(R, Re);
  }, qe = function(C) {
    var R = C.target, B = function() {
      var te = R.selectionStart, pe = R.selectionEnd, re = R.value;
      if (re === void 0 && (re = ""), te === pe) {
        var J = ee(re, te);
        J !== te && Y(R, J, re);
      }
    };
    B(), requestAnimationFrame(function() {
      B();
    }), g(C), Oe(R);
  }, w = function(C) {
    C.persist && C.persist();
    var R = C.target, B = C.currentTarget;
    O.current = R, V.current.focusTimeout = setTimeout(function() {
      var te = R.selectionStart, pe = R.selectionEnd, re = R.value;
      re === void 0 && (re = "");
      var J = ee(re, te);
      J !== te && !(te === 0 && pe === re.length) && Y(R, J, re), h(Object.assign(Object.assign({}, C), { currentTarget: B }));
    }, 0);
  }, ve = function(C) {
    O.current = null, clearTimeout(V.current.focusTimeout), clearTimeout(V.current.setCaretTimeout), m(C);
  }, A = ne && Ji() ? "numeric" : void 0, Pe = Object.assign({ inputMode: A }, b, {
    type: t,
    value: I,
    onChange: Ie,
    onKeyDown: Ae,
    onMouseUp: qe,
    onFocus: w,
    onBlur: ve
  });
  if (r === "text")
    return o ? F.createElement(F.Fragment, null, o(I, b) || null) : F.createElement("span", Object.assign({}, b, { ref: i }), I);
  if (n) {
    var Ye = n;
    return F.createElement(Ye, Object.assign({}, Pe, { ref: i }));
  }
  return F.createElement("input", Object.assign({}, Pe, { ref: i }));
}
function tn(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = Lt(t), d = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, u = Sr(e, a), p = u.beforeDecimal, g = u.afterDecimal, h = u.addNegation;
  return r !== void 0 && (g = lo(g, r, !!n)), d && (p = zi(p, d, s)), o && (p = o + p), i && (g = g + i), h && (p = "-" + p), e = p + (l && f || "") + g, e;
}
function Lt(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function na(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function oa(e, t) {
  return new RegExp("(^-)|[0-9]|" + co(e), "g");
}
function ia(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function aa(e, t, r) {
  var n;
  t === void 0 && (t = po(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, d = t.to, f = d.start, l = d.end, u = Lt(r), p = u.allowedDecimalSeparators, g = u.decimalSeparator, h = e[l] === g;
  if (je(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - f === 1 && p.indexOf(e[f]) !== -1) {
    var m = s === 0 ? "" : g;
    e = e.substring(0, f) + m + e.substring(f + 1, e.length);
  }
  var y = function(O, V, X) {
    var Z = !1, Y = !1;
    i.startsWith("-") ? Z = !1 : O.startsWith("--") ? (Z = !1, Y = !0) : a.startsWith("-") && O.length === a.length ? Z = !1 : O[0] === "-" && (Z = !0);
    var ee = Z ? 1 : 0;
    return Y && (ee = 2), ee && (O = O.substring(ee), V -= ee, X -= ee), { value: O, start: V, end: X, hasNegation: Z };
  }, x = y(e, f, l), D = x.hasNegation;
  n = x, e = n.value, f = n.start, l = n.end;
  var E = y(t.lastValue, c.start, c.end), b = E.start, S = E.end, T = E.value, I = e.substring(f, l);
  e.length && T.length && (b > T.length - a.length || S < i.length) && !(I && a.startsWith(I)) && (e = T);
  var G = 0;
  e.startsWith(i) ? G += i.length : f < i.length && (G = f), e = e.substring(G), l -= G;
  var $ = e.length, k = e.length - a.length;
  e.endsWith(a) ? $ = k : (l > k || l > e.length - a.length) && ($ = l), e = e.substring(0, $), e = na(D ? "-" + e : e, o), e = (e.match(oa(g)) || []).join("");
  var M = e.indexOf(g);
  e = e.replace(new RegExp(co(g), "g"), function(O, V) {
    return V === M ? "." : "";
  });
  var K = Sr(e, o), oe = K.beforeDecimal, ne = K.afterDecimal, _ = K.addNegation;
  return d.end - d.start < c.end - c.start && oe === "" && h && !parseFloat(ne) && (e = _ ? "-" : ""), e;
}
function sa(e, t) {
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
function ca(e) {
  var t = Lt(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function la(e) {
  e = ca(e);
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = _e);
  var i = e.onBlur;
  i === void 0 && (i = _e);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, d = e.prefix;
  d === void 0 && (d = "");
  var f = e.defaultValue, l = e.value, u = e.valueIsNumericString, p = e.onValueChange, g = Nr(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = Lt(e), m = h.decimalSeparator, y = h.allowedDecimalSeparators, x = function(_) {
    return tn(_, e);
  }, D = function(_, O) {
    return aa(_, O, e);
  }, E = Ue(l) ? f : l, b = u ?? ia(E, d, t);
  Ue(l) ? Ue(f) || (b = b || typeof f == "number") : b = b || typeof l == "number";
  var S = function(_) {
    return so(_) ? _ : (typeof _ == "number" && (_ = uo(_)), b && typeof s == "number" ? en(_, s, !!c) : _);
  }, T = go(S(l), S(f), !!b, x, D, p), I = T[0], G = I.numAsString, $ = I.formattedValue, k = T[1], M = function(_) {
    var O = _.target, V = _.key, X = O.selectionStart, Z = O.selectionEnd, Y = O.value;
    if (Y === void 0 && (Y = ""), (V === "Backspace" || V === "Delete") && Z < d.length) {
      _.preventDefault();
      return;
    }
    if (X !== Z) {
      o(_);
      return;
    }
    V === "Backspace" && Y[0] === "-" && X === d.length + 1 && r && Ve(O, 1), s && c && (V === "Backspace" && Y[X - 1] === m ? (Ve(O, X - 1), _.preventDefault()) : V === "Delete" && Y[X] === m && _.preventDefault()), y != null && y.includes(V) && Y[X] === m && Ve(O, X + 1);
    var ee = a === !0 ? "," : a;
    V === "Backspace" && Y[X - 1] === ee && Ve(O, X - 1), V === "Delete" && Y[X] === ee && Ve(O, X + 1), o(_);
  }, K = function(_) {
    var O = G;
    if (O.match(/\d/g) || (O = ""), n || (O = Yi(O)), c && s && (O = en(O, s, c)), O !== G) {
      var V = tn(O, e);
      k({
        formattedValue: V,
        value: O,
        floatValue: parseFloat(O)
      }, {
        event: _,
        source: ct.event
      });
    }
    i(_);
  }, oe = function(_) {
    return _ === m ? !0 : je(_);
  }, ne = function(_) {
    var O = _.currentValue, V = _.lastValue, X = _.formattedValue, Z = _.currentValueIndex, Y = _.formattedValueIndex, ee = O[Z], ue = X[Y], we = fo(V, O), ge = we.to, Ee = function(Ce) {
      return D(Ce).indexOf(".") + d.length;
    };
    return l === 0 && c && s && O[ge.start] === m && Ee(O) < Z && Ee(X) > Y ? !1 : Z >= ge.start && Z < ge.end && y && y.includes(ee) && ue === m ? !0 : ee === ue;
  };
  return Object.assign(Object.assign({}, g), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: oe,
    isCharacterSame: ne,
    onValueChange: k,
    format: x,
    removeFormatting: D,
    getCaretBoundary: function(_) {
      return sa(_, e);
    },
    onKeyDown: M,
    onBlur: K
  });
}
function ua(e) {
  var t = la(e);
  return F.createElement(vo, Object.assign({}, t));
}
function da(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), c = 0, d = r.length; c < d; c++)
    r[c] === i && (s[c] = e[a] || mo(o, a), a += 1);
  return s.join("");
}
function fa(e, t, r) {
  t === void 0 && (t = po(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(m) {
    return n[m] === o;
  }, d = function(m, y) {
    for (var x = "", D = 0; D < m.length; D++)
      c(y + D) && je(m[D]) && (x += m[D]);
    return x;
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
function pa(e, t) {
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
function ma(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function ga(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function va(e) {
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = _e);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = Nr(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  ma(e);
  var d = function(g) {
    return pa(g, e);
  }, f = function(g) {
    var h = g.key, m = g.target, y = m.selectionStart, x = m.selectionEnd, D = m.value;
    if (y !== x) {
      n(g);
      return;
    }
    var E = y;
    if (h === "Backspace" || h === "Delete") {
      var b = "right";
      if (h === "Backspace") {
        for (; E > 0 && t[E - 1] !== o; )
          E--;
        b = "left";
      } else {
        for (var S = t.length; E < S && t[E] !== o; )
          E++;
        b = "right";
      }
      E = Rt(D, E, d(D), b);
    } else t[E] !== o && h !== "ArrowLeft" && h !== "ArrowRight" && (E = Rt(D, E + 1, d(D), "right"));
    E !== y && Ve(m, E), n(g);
  }, l = Ue(i) ? a : i, u = s ?? ga(l, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: u });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: u,
    inputMode: r,
    format: function(g) {
      return da(g, p);
    },
    removeFormatting: function(g, h) {
      return fa(g, h, p);
    },
    getCaretBoundary: d,
    onKeyDown: f
  });
}
function ha(e) {
  var t = va(e);
  return F.createElement(vo, Object.assign({}, t));
}
const ba = {
  sm: {
    height: "h-10",
    paddingX: "px-2",
    text: "text-sm",
    postfixPadding: "pr-2",
    labelMb: "mb-1",
    labelLeft: "left-2"
  },
  md: {
    height: "h-12",
    paddingX: "px-3",
    text: "text-base",
    postfixPadding: "pr-3",
    labelMb: "mb-1.5",
    labelLeft: "left-3"
  },
  lg: {
    height: "h-14",
    paddingX: "px-4",
    text: "text-lg",
    postfixPadding: "pr-4",
    labelMb: "mb-2",
    labelLeft: "left-4"
  }
}, ya = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Ea = (e) => e == null || typeof e == "string" && e.trim() === "", xa = ({
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
  floatingLabel: u = !1,
  requiredMark: p,
  id: g,
  ...h
}) => {
  var ne;
  const m = !!(o != null && o.error), y = ba[e], x = $i(), D = g || x, [E, b] = de(!1), S = (r == null ? void 0 : r.value) ?? (h == null ? void 0 : h.value) ?? h.defaultValue, T = Er(
    () => !Ea(S) || S === 0,
    [S]
  ), I = u && !!n, G = I && (E || T || !!h.placeholder), $ = I ? G ? h.placeholder : "" : h.placeholder, k = `${y.height} w-full bg-white text-black placeholder:text-dark-gray ${y.text} rounded-xl border transition-colors duration-150 outline-none border-gray focus:border-primary disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed`, M = "!border-danger focus:border-danger", K = (_) => {
    var O;
    b(!0), (O = h.onFocus) == null || O.call(h, _);
  }, oe = (_) => {
    var O, V;
    b(!1), (O = r == null ? void 0 : r.onBlur) == null || O.call(r), (V = h.onBlur) == null || V.call(h, _);
  };
  return /* @__PURE__ */ ie("div", { className: `relative w-full ${f || ""}`, children: [
    I && /* @__PURE__ */ N(
      Pt.label,
      {
        htmlFor: D,
        className: `pointer-events-none absolute ${y.labelLeft} z-[1] ${a || ""}`,
        initial: !1,
        animate: G ? { top: -10, scale: 0.85, opacity: 1 } : { top: "50%", translateY: "-50%", scale: 1, opacity: 0.9 },
        transition: { type: "tween", duration: 0.18 },
        children: /* @__PURE__ */ ie("span", { className: "px-1 rounded bg-white text-dark-gray", children: [
          n,
          p ? /* @__PURE__ */ N("span", { className: "text-danger ml-0.5", children: "*" }) : null
        ] })
      }
    ),
    d ? /* @__PURE__ */ N(
      ha,
      {
        id: D,
        placeholder: $,
        format: d,
        onValueChange: (_) => {
          var O;
          r == null || r.onChange((O = _.value.replace("_", "")) == null ? void 0 : O.toString());
        },
        value: (ne = r == null ? void 0 : r.value) == null ? void 0 : ne.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: t,
        mask: "_",
        style: { fontSize: "16px" },
        className: `${k} ${y.paddingX} ${m ? M : ""} ${s || ""}`,
        "aria-invalid": m || void 0,
        onFocus: K,
        onBlur: oe,
        ...h
      }
    ) : t === "number" ? /* @__PURE__ */ ie(
      "div",
      {
        className: `flex items-center justify-between rounded-xl border bg-white ${y.height} ${m ? "border-danger" : "border-gray"} ${c || ""}`,
        children: [
          /* @__PURE__ */ N(
            ua,
            {
              id: D,
              placeholder: $,
              decimalScale: l,
              style: { fontSize: "16px" },
              onValueChange: (_) => {
                var O;
                return r == null ? void 0 : r.onChange(+((O = _.value.replace("_", "")) == null ? void 0 : O.toString()));
              },
              value: typeof (r == null ? void 0 : r.value) == "number" ? r == null ? void 0 : r.value : (r == null ? void 0 : r.value) === void 0 || (r == null ? void 0 : r.value) === null ? void 0 : Number(r == null ? void 0 : r.value),
              className: `flex-1 bg-transparent border-0 ${y.paddingX} ${y.text} placeholder:text-dark-gray focus:outline-none ${s || ""}`,
              "aria-invalid": m || void 0,
              onFocus: K,
              onBlur: oe,
              ...h,
              ...ya.number
            }
          ),
          i ? /* @__PURE__ */ N(
            "span",
            {
              className: `${y.postfixPadding} ${y.text} text-dark-gray select-none`,
              children: i
            }
          ) : null
        ]
      }
    ) : /* @__PURE__ */ N(
      "input",
      {
        id: D,
        ...r,
        ...h,
        type: t,
        placeholder: $,
        style: { fontSize: "16px" },
        className: `${k} ${y.paddingX} ${m ? M : ""} ${s || ""}`,
        "aria-invalid": m || void 0,
        onFocus: K,
        onBlur: oe
      }
    ),
    /* @__PURE__ */ N("div", { className: "absolute w-full items-center flex justify-center flex-row min-h-6", children: /* @__PURE__ */ N(oo, { children: (o == null ? void 0 : o.error) && Object.keys(o.error).length > 0 && /* @__PURE__ */ N(
      Pt.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ N(Dr, { error: o.error })
      }
    ) }) })
  ] });
}, Xf = xa, Da = ({
  children: e,
  className: t
}) => /* @__PURE__ */ N(
  "div",
  {
    className: xr(
      "bg-main rounded-2xl p-5 border-primary/10 border",
      t
    ),
    children: e
  }
), ho = Da, Na = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = de(null);
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
}, Jf = Na;
function bo(e, t) {
  const [r, n] = de(e);
  return ae(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Sa = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = de(!1), [a, s] = de(""), c = bo(a, 100), d = U(null);
  ae(() => {
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
          className: xr(
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
}, Zf = Sa, wa = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = de(r), s = bo(i, 300);
  return ae(() => {
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
}, Qf = wa, Ca = {
  sm: { height: "h-10", paddingX: "px-2", text: "text-sm" },
  md: { height: "h-12", paddingX: "px-3", text: "text-base" },
  lg: { height: "h-14", paddingX: "px-4", text: "text-lg" }
};
function et(...e) {
  return e.filter(Boolean).join(" ");
}
const Ia = ({
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
  const [f, l] = de(!1), u = U(null), p = Ca[o], g = !!(s != null && s.error), h = Er(
    () => (r == null ? void 0 : r.length) && Math.max(
      0,
      r.findIndex((E) => E.value === e)
    ),
    [r, e]
  ), [m, y] = de(h);
  ae(() => y(h), [h]), ae(() => {
    const E = (b) => {
      u.current && (u.current.contains(b.target) || l(!1));
    };
    return document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
  }, []);
  const x = (E) => {
    var S;
    if (!(r != null && r.length)) return;
    const b = r[E];
    b && ((S = i == null ? void 0 : i.onChange) == null || S.call(i, b.value), t == null || t(b.value), l(!1));
  }, D = r == null ? void 0 : r[h];
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
          onClick: () => l((E) => !E),
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
          children: r == null ? void 0 : r.map((E, b) => {
            const S = E.value === e;
            return /* @__PURE__ */ ie(
              "li",
              {
                role: "option",
                "aria-selected": S,
                className: et(
                  "cursor-pointer px-3 py-2 text-sm flex items-center justify-between",
                  b === m && "bg-gray-trans",
                  S && "text-primary"
                ),
                onMouseEnter: () => y(b),
                onClick: () => x(b),
                children: [
                  /* @__PURE__ */ N("span", { className: "truncate", children: E.label }),
                  S && /* @__PURE__ */ N(
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
              E.value
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ N("div", { className: "absolute w-full flex justify-center min-h-6", children: /* @__PURE__ */ N(oo, { children: g && /* @__PURE__ */ N(
      Pt.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ N(Dr, { error: s.error })
      }
    ) }) })
  ] });
}, ep = Ia;
function lt(e) {
  "@babel/helpers - typeof";
  return lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lt(e);
}
function Oa(e, t) {
  if (lt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (lt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Aa(e) {
  var t = Oa(e, "string");
  return lt(t) == "symbol" ? t : t + "";
}
function Pa(e, t, r) {
  return (t = Aa(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function rn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rn(Object(r), !0).forEach(function(n) {
      Pa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function me(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var on = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), qt = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, an = {
  INIT: "@@redux/INIT" + /* @__PURE__ */ qt(),
  REPLACE: "@@redux/REPLACE" + /* @__PURE__ */ qt(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + qt();
  }
};
function Ra(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function _a(e) {
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
  if (Va(e)) return "date";
  if ($a(e)) return "error";
  var r = Ta(e);
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
function Ta(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function $a(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Va(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ke(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = _a(e)), t;
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
        var x = s.indexOf(h);
        s.splice(x, 1), a = null;
      }
    };
  }
  function u(h) {
    if (!Ra(h))
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
      var x = m[y];
      x();
    }
    return h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? me(10) : "Expected the nextReducer to be a function. Instead, received: '" + ke(h));
    o = h, u({
      type: an.REPLACE
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
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error(process.env.NODE_ENV === "production" ? me(11) : "Expected the observer to be an object. Instead, received: '" + ke(x) + "'");
        function D() {
          x.next && x.next(f());
        }
        D();
        var E = m(D);
        return {
          unsubscribe: E
        };
      }
    }, h[on] = function() {
      return this;
    }, h;
  }
  return u({
    type: an.INIT
  }), n = {
    dispatch: u,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[on] = g, n;
}
function sn(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function cn(e, t) {
  if (typeof e == "function")
    return sn(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? me(16) : "bindActionCreators expected an object or a function, but instead received: '" + ke(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = sn(o, t));
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
function Ba() {
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
      return i = Eo.apply(void 0, s)(o.dispatch), nn(nn({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Ma(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function La(e) {
  e();
}
let Fa = La;
const Ga = () => Fa, ln = /* @__PURE__ */ Symbol.for("react-redux-context"), un = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ka() {
  var e;
  if (!L.createContext) return {};
  const t = (e = un[ln]) != null ? e : un[ln] = /* @__PURE__ */ new Map();
  let r = t.get(L.createContext);
  return r || (r = L.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(L.createContext, r)), r;
}
const xo = /* @__PURE__ */ ka(), Wa = () => {
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
var lr = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Ua() {
  if (dn) return j;
  dn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function D(b) {
    if (typeof b == "object" && b !== null) {
      var S = b.$$typeof;
      switch (S) {
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
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function E(b) {
    return D(b) === d;
  }
  return j.AsyncMode = c, j.ConcurrentMode = d, j.ContextConsumer = s, j.ContextProvider = a, j.Element = t, j.ForwardRef = f, j.Fragment = n, j.Lazy = g, j.Memo = p, j.Portal = r, j.Profiler = i, j.StrictMode = o, j.Suspense = l, j.isAsyncMode = function(b) {
    return E(b) || D(b) === c;
  }, j.isConcurrentMode = E, j.isContextConsumer = function(b) {
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
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === l || b === u || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === p || b.$$typeof === a || b.$$typeof === s || b.$$typeof === f || b.$$typeof === m || b.$$typeof === y || b.$$typeof === x || b.$$typeof === h);
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
var fn;
function ja() {
  return fn || (fn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function D(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === d || w === i || w === o || w === l || w === u || typeof w == "object" && w !== null && (w.$$typeof === g || w.$$typeof === p || w.$$typeof === a || w.$$typeof === s || w.$$typeof === f || w.$$typeof === m || w.$$typeof === y || w.$$typeof === x || w.$$typeof === h);
    }
    function E(w) {
      if (typeof w == "object" && w !== null) {
        var ve = w.$$typeof;
        switch (ve) {
          case t:
            var A = w.type;
            switch (A) {
              case c:
              case d:
              case n:
              case i:
              case o:
              case l:
                return A;
              default:
                var Pe = A && A.$$typeof;
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
    var b = c, S = d, T = s, I = a, G = t, $ = f, k = n, M = g, K = p, oe = r, ne = i, _ = o, O = l, V = !1;
    function X(w) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(w) || E(w) === c;
    }
    function Z(w) {
      return E(w) === d;
    }
    function Y(w) {
      return E(w) === s;
    }
    function ee(w) {
      return E(w) === a;
    }
    function ue(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function we(w) {
      return E(w) === f;
    }
    function ge(w) {
      return E(w) === n;
    }
    function Ee(w) {
      return E(w) === g;
    }
    function Ce(w) {
      return E(w) === p;
    }
    function Oe(w) {
      return E(w) === r;
    }
    function Ie(w) {
      return E(w) === i;
    }
    function Ae(w) {
      return E(w) === o;
    }
    function qe(w) {
      return E(w) === l;
    }
    H.AsyncMode = b, H.ConcurrentMode = S, H.ContextConsumer = T, H.ContextProvider = I, H.Element = G, H.ForwardRef = $, H.Fragment = k, H.Lazy = M, H.Memo = K, H.Portal = oe, H.Profiler = ne, H.StrictMode = _, H.Suspense = O, H.isAsyncMode = X, H.isConcurrentMode = Z, H.isContextConsumer = Y, H.isContextProvider = ee, H.isElement = ue, H.isForwardRef = we, H.isFragment = ge, H.isLazy = Ee, H.isMemo = Ce, H.isPortal = Oe, H.isProfiler = Ie, H.isStrictMode = Ae, H.isSuspense = qe, H.isValidElementType = D, H.typeOf = E;
  }()), H;
}
process.env.NODE_ENV === "production" ? lr.exports = /* @__PURE__ */ Ua() : lr.exports = /* @__PURE__ */ ja();
var Ha = lr.exports, wr = Ha, za = {
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
}, qa = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ya = {
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
}, Cr = {};
Cr[wr.ForwardRef] = Ya;
Cr[wr.Memo] = No;
function pn(e) {
  return wr.isMemo(e) ? No : Cr[e.$$typeof] || za;
}
var Ka = Object.defineProperty, Xa = Object.getOwnPropertyNames, mn = Object.getOwnPropertySymbols, Ja = Object.getOwnPropertyDescriptor, Za = Object.getPrototypeOf, gn = Object.prototype;
function So(e, t, r) {
  if (typeof t != "string") {
    if (gn) {
      var n = Za(t);
      n && n !== gn && So(e, n, r);
    }
    var o = Xa(t);
    mn && (o = o.concat(mn(t)));
    for (var i = pn(e), a = pn(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!qa[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var d = Ja(t, c);
        try {
          Ka(e, c, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var Qa = So;
const vn = /* @__PURE__ */ Ma(Qa);
var ur = { exports: {} }, z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function es() {
  if (hn) return z;
  hn = 1;
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
var bn;
function ts() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, h = !1, m = !1, y = !1, x = !1, D;
    D = Symbol.for("react.module.reference");
    function E(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || x || A === n || A === d || A === f || y || A === p || g || h || m || typeof A == "object" && A !== null && (A.$$typeof === u || A.$$typeof === l || A.$$typeof === i || A.$$typeof === a || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === D || A.getModuleId !== void 0));
    }
    function b(A) {
      if (typeof A == "object" && A !== null) {
        var Pe = A.$$typeof;
        switch (Pe) {
          case e:
            var Ye = A.type;
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
    var S = a, T = i, I = e, G = c, $ = r, k = u, M = l, K = t, oe = o, ne = n, _ = d, O = f, V = !1, X = !1;
    function Z(A) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(A) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(A) {
      return b(A) === a;
    }
    function ue(A) {
      return b(A) === i;
    }
    function we(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function ge(A) {
      return b(A) === c;
    }
    function Ee(A) {
      return b(A) === r;
    }
    function Ce(A) {
      return b(A) === u;
    }
    function Oe(A) {
      return b(A) === l;
    }
    function Ie(A) {
      return b(A) === t;
    }
    function Ae(A) {
      return b(A) === o;
    }
    function qe(A) {
      return b(A) === n;
    }
    function w(A) {
      return b(A) === d;
    }
    function ve(A) {
      return b(A) === f;
    }
    q.ContextConsumer = S, q.ContextProvider = T, q.Element = I, q.ForwardRef = G, q.Fragment = $, q.Lazy = k, q.Memo = M, q.Portal = K, q.Profiler = oe, q.StrictMode = ne, q.Suspense = _, q.SuspenseList = O, q.isAsyncMode = Z, q.isConcurrentMode = Y, q.isContextConsumer = ee, q.isContextProvider = ue, q.isElement = we, q.isForwardRef = ge, q.isFragment = Ee, q.isLazy = Ce, q.isMemo = Oe, q.isPortal = Ie, q.isProfiler = Ae, q.isStrictMode = qe, q.isSuspense = w, q.isSuspenseList = ve, q.isValidElementType = E, q.typeOf = b;
  }()), q;
}
process.env.NODE_ENV === "production" ? ur.exports = /* @__PURE__ */ es() : ur.exports = /* @__PURE__ */ ts();
var yn = ur.exports;
function Ir(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Yt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ir(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function rs(e, t, r) {
  Yt(e, "mapStateToProps"), Yt(t, "mapDispatchToProps"), Yt(r, "mergeProps");
}
const ns = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function os(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, d, f, l, u;
  function p(x, D) {
    return c = x, d = D, f = e(c, d), l = t(n, d), u = r(f, l, d), s = !0, u;
  }
  function g() {
    return f = e(c, d), t.dependsOnOwnProps && (l = t(n, d)), u = r(f, l, d), u;
  }
  function h() {
    return e.dependsOnOwnProps && (f = e(c, d)), t.dependsOnOwnProps && (l = t(n, d)), u = r(f, l, d), u;
  }
  function m() {
    const x = e(c, d), D = !a(x, f);
    return f = x, D && (u = r(f, l, d)), u;
  }
  function y(x, D) {
    const E = !i(D, d), b = !o(x, c, D, d);
    return c = x, d = D, E && b ? g() : E ? h() : b ? m() : u;
  }
  return function(D, E) {
    return s ? y(D, E) : p(D, E);
  };
}
function is(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Do(t, ns);
  const a = r(e, i), s = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && rs(a, s, c), os(a, s, c, e, i);
}
function as(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function ss(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function wo(e, t, r) {
  ss(e) || Ir(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function dr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function En(e) {
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
      i.mapToProps = e, i.dependsOnOwnProps = En(e);
      let d = i(s, c);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = En(d), d = i(s, c)), process.env.NODE_ENV !== "production" && wo(d, o, t), d;
    }, i;
  };
}
function Or(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function cs(e) {
  return e && typeof e == "object" ? dr((t) => (
    // @ts-ignore
    as(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Co(e, "mapDispatchToProps")
  ) : Or(e, "mapDispatchToProps") : dr((t) => ({
    dispatch: t
  }));
}
function ls(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Co(e, "mapStateToProps")
  ) : Or(e, "mapStateToProps") : dr(() => ({}));
}
function us(e, t, r) {
  return Be({}, r, e, t);
}
function ds(e) {
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
function fs(e) {
  return e ? typeof e == "function" ? ds(e) : Or(e, "mergeProps") : () => us;
}
function ps() {
  const e = Ga();
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
const xn = {
  notify() {
  },
  get: () => []
};
function Io(e, t) {
  let r, n = xn, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = ps());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = xn);
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
const ms = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _t = ms ? L.useLayoutEffect : L.useEffect;
function Dn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Kt(e, t) {
  if (Dn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Dn(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const gs = ["reactReduxForwardedRef"];
let vs = Wa;
const hs = [null, null], bs = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ys(e, t, r) {
  _t(() => e(...t), r);
}
function Es(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function xs(e, t, r, n, o, i, a, s, c, d, f) {
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
    } catch (x) {
      y = x, u = x;
    }
    y || (u = null), m === i.current ? a.current || d() : (i.current = m, c.current = m, a.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, u)
      throw u;
  };
}
function Ds(e, t) {
  return e === t;
}
let Nn = !1;
function Oo(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Ds,
  areOwnPropsEqual: i = Kt,
  areStatePropsEqual: a = Kt,
  areMergedPropsEqual: s = Kt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: d = xo
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Nn && (Nn = !0, Ir('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = d, l = ls(e), u = cs(t), p = fs(r), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !yn.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${bs(m)}`);
    const y = m.displayName || m.name || "Component", x = `Connect(${y})`, D = {
      shouldHandleStateChanges: g,
      displayName: x,
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
    function E(T) {
      const [I, G, $] = L.useMemo(() => {
        const {
          reactReduxForwardedRef: w
        } = T, ve = Do(T, gs);
        return [T.context, w, ve];
      }, [T]), k = L.useMemo(() => I && I.Consumer && // @ts-ignore
      yn.isContextConsumer(/* @__PURE__ */ L.createElement(I.Consumer, null)) ? I : f, [I, f]), M = L.useContext(k), K = !!T.store && !!T.store.getState && !!T.store.dispatch, oe = !!M && !!M.store;
      if (process.env.NODE_ENV !== "production" && !K && !oe)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const ne = K ? T.store : M.store, _ = oe ? M.getServerState : ne.getState, O = L.useMemo(() => is(ne.dispatch, D), [ne]), [V, X] = L.useMemo(() => {
        if (!g) return hs;
        const w = Io(ne, K ? void 0 : M.subscription), ve = w.notifyNestedSubs.bind(w);
        return [w, ve];
      }, [ne, K, M]), Z = L.useMemo(() => K ? M : Be({}, M, {
        subscription: V
      }), [K, M, V]), Y = L.useRef(), ee = L.useRef($), ue = L.useRef(), we = L.useRef(!1);
      L.useRef(!1);
      const ge = L.useRef(!1), Ee = L.useRef();
      _t(() => (ge.current = !0, () => {
        ge.current = !1;
      }), []);
      const Ce = L.useMemo(() => () => ue.current && $ === ee.current ? ue.current : O(ne.getState(), $), [ne, $]), Oe = L.useMemo(() => (ve) => V ? xs(
        g,
        ne,
        V,
        // @ts-ignore
        O,
        ee,
        Y,
        we,
        ge,
        ue,
        X,
        ve
      ) : () => {
      }, [V]);
      ys(Es, [ee, Y, we, $, ue, X]);
      let Ie;
      try {
        Ie = vs(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Oe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ce,
          _ ? () => O(_(), $) : Ce
        );
      } catch (w) {
        throw Ee.current && (w.message += `
The error may be correlated with this previous error:
${Ee.current.stack}

`), w;
      }
      _t(() => {
        Ee.current = void 0, ue.current = void 0, Y.current = Ie;
      });
      const Ae = L.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ L.createElement(m, Be({}, Ie, {
          ref: G
        }))
      ), [G, m, Ie]);
      return L.useMemo(() => g ? /* @__PURE__ */ L.createElement(k.Provider, {
        value: Z
      }, Ae) : Ae, [k, Ae, Z]);
    }
    const S = L.memo(E);
    if (S.WrappedComponent = m, S.displayName = E.displayName = x, c) {
      const I = L.forwardRef(function($, k) {
        return /* @__PURE__ */ L.createElement(S, Be({}, $, {
          reactReduxForwardedRef: k
        }));
      });
      return I.displayName = x, I.WrappedComponent = m, vn(I, m);
    }
    return vn(S, m);
  };
}
function Ns({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = L.useMemo(() => {
    const d = Io(e);
    return {
      store: e,
      subscription: d,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = L.useMemo(() => e.getState(), [e]);
  _t(() => {
    const {
      subscription: d
    } = a;
    return d.onStateChange = d.notifyNestedSubs, d.trySubscribe(), s !== e.getState() && d.notifyNestedSubs(), () => {
      d.tryUnsubscribe(), d.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || xo;
  return /* @__PURE__ */ L.createElement(c.Provider, {
    value: a
  }, r);
}
function Ss(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ao(e, t) {
  var r = de(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = U(!0), o = U(r), i = n.current || !!(t && o.current.inputs && Ss(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ae(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function ws(e, t) {
  return Ao(function() {
    return e;
  }, t);
}
var W = Ao, P = ws, Cs = process.env.NODE_ENV === "production", Xt = "Invariant failed";
function Sn(e, t) {
  if (Cs)
    throw new Error(Xt);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Xt, ": ").concat(r) : Xt;
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
}, Ar = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, wn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Is = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Jt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Pr = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Jt : n, i = t.border, a = i === void 0 ? Jt : i, s = t.padding, c = s === void 0 ? Jt : s, d = Se(Ar(r, o)), f = Se(wn(r, a)), l = Se(wn(f, c));
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Sn(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Sn()), o;
}, Os = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Tt = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Is(n, r);
  return Pr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, $t = function(t, r) {
  return r === void 0 && (r = Os()), Tt(t, r);
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
  return Pr({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Ro = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Po(r, n);
}, Cn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function As(e, t) {
  return !!(e === t || Cn(e) && Cn(t));
}
function Ps(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!As(e[r], t[r]))
      return !1;
  return !0;
}
function se(e, t) {
  t === void 0 && (t = Ps);
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
const Rs = process.env.NODE_ENV === "production", _s = /[ \t]{2,}/g, Ts = /^[ \t]*/gm, In = (e) => e.replace(_s, " ").replace(Ts, "").trim(), $s = (e) => In(`
  %c@hello-pangea/dnd

  %c${In(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Vs = (e) => [$s(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Bs = "__@hello-pangea/dnd-disable-dev-warnings";
function _o(e, t) {
  Rs || typeof window < "u" && window[Bs] || console[e](...Vs(t));
}
const Q = /* @__PURE__ */ _o.bind(null, "warn"), fr = /* @__PURE__ */ _o.bind(null, "error");
function Me() {
}
function Ms(e, t) {
  return {
    ...e,
    ...t
  };
}
function De(e, t, r) {
  const n = t.map((o) => {
    const i = Ms(r, o.options);
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
const Ls = process.env.NODE_ENV === "production", On = "Invariant failed";
class dt extends Error {
}
dt.prototype.toString = function() {
  return this.message;
};
function v(e, t) {
  throw Ls ? new dt(On) : new dt(`${On}: ${t || ""}`);
}
class Fs extends F.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Me, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Q(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof dt && (r.preventDefault(), process.env.NODE_ENV !== "production" && fr(o.message));
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
      process.env.NODE_ENV !== "production" && fr(t.message), this.setState({});
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
const Gs = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Vt = (e) => e + 1, ks = (e) => `
  You have lifted an item in position ${Vt(e.source.index)}
`, To = (e, t) => {
  const r = e.droppableId === t.droppableId, n = Vt(e.index), o = Vt(t.index);
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
    `, Ws = (e) => {
  const t = e.destination;
  if (t)
    return To(e.source, t);
  const r = e.combine;
  return r ? $o(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, An = (e) => `
  The item has returned to its starting position
  of ${Vt(e.index)}
`, Us = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${An(e.source)}
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
    ${An(e.source)}
  `;
}, js = {
  dragHandleUsageInstructions: Gs,
  onDragStart: ks,
  onDragUpdate: Ws,
  onDragEnd: Us
};
var At = js;
const ce = {
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
}, ft = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Pn = (e, t) => Math.min(...t.map((r) => ft(e, r))), Vo = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Hs = (e, t) => {
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
}), Rn = (e) => [{
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
}], zs = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, qs = (e, t) => t ? yt(e, t.scroll.diff.displacement) : e, Ys = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Ks = (e, t) => t && t.shouldClipSubject ? Hs(t.pageMarginBox, e) : Se(e);
var Ke = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = qs(e.marginBox, n), i = Ys(o, r, t), a = Ks(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Rr = (e, t) => {
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
const Bo = /* @__PURE__ */ se((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Mo = /* @__PURE__ */ se((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Ft = /* @__PURE__ */ se((e) => Object.values(e)), Xs = /* @__PURE__ */ se((e) => Object.values(e));
var ze = /* @__PURE__ */ se((e, t) => Xs(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function _r(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Gt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var kt = /* @__PURE__ */ se((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Js = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !_r(o))
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
  const d = kt(t, n);
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
  point: ce,
  value: 0
}, pt = {
  invisible: {},
  visible: {},
  all: []
}, Zs = {
  displaced: pt,
  displacedBy: Lo,
  at: null
};
var Qs = Zs, Ne = (e, t) => (r) => e <= r && r <= t, Fo = (e) => {
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
}, ec = (e) => {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Tr = {
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
var tc = (e) => (t) => {
  const r = Ne(t.top, t.bottom), n = Ne(t.left, t.right);
  return (o) => e === Tr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const rc = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ce;
  return yt(e, r);
}, nc = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, oc = (e, t, r) => r(t)(e), $r = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? rc(e, t) : e;
  return nc(i, t, o) && oc(i, r, o);
}, ic = (e) => $r({
  ...e,
  isVisibleThroughFrameFn: Fo
}), ko = (e) => $r({
  ...e,
  isVisibleThroughFrameFn: ec
}), ac = (e) => $r({
  ...e,
  isVisibleThroughFrameFn: tc(e.destination.axis)
}), sc = (e, t, r) => {
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
function cc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Se(Ar(r, n));
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
    const d = cc(c, r), f = c.descriptor.id;
    if (s.all.push(f), !ic({
      target: d,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const u = sc(f, i, o), p = {
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
function lc(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function _n({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = lc(e, {
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
function Bt({
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
    return _n({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const d = t.find((g) => g.descriptor.index === a);
  if (!d)
    return _n({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const f = kt(e, t), l = t.indexOf(d), u = f.slice(l);
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
var uc = ({
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
}, dc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, fc = ({
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
    const l = dc({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return l == null ? null : Bt({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const f = uc({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: d.combine,
    afterCritical: c
  });
  return f == null ? null : Bt({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, pc = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Fe(r, t) ? o ? ce : Ze(n.point) : o ? n.point : ce;
}, mc = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Gt(t);
  n || (process.env.NODE_ENV, v());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = pc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return le(i, a);
};
const Wo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, gc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Vr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Tn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.end] + Wo(e, r), Vr(e, t.marginBox, r)), $n = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.start] - gc(e, r), Vr(e, t.marginBox, r)), vc = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => He(e.line, t.contentBox[e.start] + Wo(e, r), Vr(e, t.contentBox, r));
var hc = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = ze(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return vc({
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
      return $n({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const p = Tt(u.page, d.point);
    return $n({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Fe(l.descriptor.id, o)) {
    const u = Tt(l.page, Ze(o.displacedBy.point));
    return Tn({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return Tn({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, pr = (e, t) => {
  const r = e.frame;
  return r ? le(t, r.scroll.diff.displacement) : t;
};
const bc = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? hc({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : mc({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Wt = (e) => {
  const t = bc(e), r = e.droppable;
  return r ? pr(r, t) : t;
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
function Vn(e, t) {
  return e.map((r) => t[r]);
}
function yc(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var Ec = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = Uo(t, le(t.scroll.current, o)), a = r.frame ? Rr(r, le(r.frame.scroll.current, o)) : r, s = e.displaced, c = mt({
    afterDragging: Vn(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = mt({
    afterDragging: Vn(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, u = [s, c, d];
  return s.all.forEach((g) => {
    const h = yc(g, u);
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
}, xc = (e, t) => le(e.scroll.diff.displacement, t), Br = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = xc(r, e), o = he(n, t.page.borderBox.center);
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
  return i ? ac(c) : ko(c);
}, Dc = ({
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
  const d = ze(r.descriptor.id, n), f = Qe(t, r), l = Js({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: d,
    previousImpact: o
  }) || fc({
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
  const u = Wt({
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
      clientSelection: Br({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const g = he(u, a), h = Ec({
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
const fe = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get clipped area from droppable") : v()), t;
};
var Nc = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ne(i[a.start], i[a.end]), c = Ft(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Fo(o.frame)(fe(f))).filter((f) => {
    const l = fe(f);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const l = fe(f), u = Ne(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((f, l) => {
    const u = fe(f)[a.crossAxisStart], p = fe(l)[a.crossAxisStart];
    return e ? u - p : p - u;
  }).filter((f, l, u) => fe(f)[a.crossAxisStart] === fe(u[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const d = c.filter((f) => Ne(fe(f)[a.start], fe(f)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((f, l) => fe(f)[a.start] - fe(l)[a.start])[0] : c.sort((f, l) => {
    const u = Pn(t, Rn(fe(f))), p = Pn(t, Rn(fe(l)));
    return u !== p ? u - p : fe(f)[a.start] - fe(l)[a.start];
  })[0];
};
const Bn = (e, t) => {
  const r = e.page.borderBox.center;
  return Fe(e.descriptor.id, t) ? he(r, t.displacedBy.point) : r;
}, Sc = (e, t) => {
  const r = e.page.borderBox;
  return Fe(e.descriptor.id, t) ? yt(r, Ze(t.displacedBy.point)) : r;
};
var wc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => ko({
  target: Sc(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = ft(e, pr(r, Bn(a, o))), d = ft(e, pr(r, Bn(s, o)));
  return c < d ? -1 : d < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Et = /* @__PURE__ */ se(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: He(t.line, n)
  };
});
const Cc = (e, t, r) => {
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
  const o = Et(e.axis, t.displaceBy).point, i = Cc(e, o, r), a = {
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
}, Ic = (e) => {
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
var Oc = ({
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
    }, u = Wt({
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
  return Bt({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: pt,
    index: d
  });
}, Ac = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = Nc({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const d = ze(c.descriptor.id, o), f = wc({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: d,
    afterCritical: s
  }), l = Oc({
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
  const u = Wt({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Br({
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
const Pc = (e, t) => {
  const r = be(e);
  return r ? t[r] : null;
};
var Rc = ({
  state: e,
  type: t
}) => {
  const r = Pc(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: u
  } = e.dimensions;
  return s ? Dc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: d,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Ac({
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
function _c(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Tc({
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
function $c({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Ft(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !_c(e, i))
      return !1;
    if (qo(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], d = e[a.crossAxisEnd], f = Ne(i[a.crossAxisStart], i[a.crossAxisEnd]), l = f(c), u = f(d);
    return !l && !u ? !0 : l ? c < s : d > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Tc({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Yo = (e, t) => Se(yt(e, t));
var Vc = (e, t) => {
  const r = e.frame;
  return r ? Yo(t, r.scroll.diff.value) : t;
};
function Ko({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Bc({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Mc = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = Et(r.axis, t.displaceBy), d = c.value, f = e[s.start], l = e[s.end], p = kt(t, n).find((h) => {
    const m = h.descriptor.id, y = h.page.borderBox.center[s.line], x = Fe(m, a), D = Ko({
      displaced: o,
      id: m
    });
    return x ? D ? l <= y : f < y - d : D ? l <= y + d : f < y;
  }) || null, g = Bc({
    draggable: t,
    closest: p,
    inHomeList: Qe(t, r)
  });
  return Bt({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: c,
    index: g
  });
};
const Lc = 4;
var Fc = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Et(n.axis, e.displaceBy), c = s.value, d = t[a.start], f = t[a.end], u = kt(e, o).find((g) => {
    const h = g.descriptor.id, m = g.page.borderBox, x = m[a.size] / Lc, D = Fe(h, i), E = Ko({
      displaced: r.displaced,
      id: h
    });
    return D ? E ? f > m[a.start] + x && f < m[a.end] - x : d > m[a.start] - c + x && d < m[a.end] - c - x : E ? f > m[a.start] + c + x && f < m[a.end] + c - x : d > m[a.start] + x && d < m[a.end] - x;
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
  const s = Yo(t.page.borderBox, e), c = $c({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!c)
    return Qs;
  const d = n[c], f = ze(d.descriptor.id, r), l = Vc(d, s);
  return Fc({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: f,
    afterCritical: a
  }) || Mc({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: d,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Mr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Gc = ({
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
  const a = Ic(i);
  return Mr(r, a);
};
var kc = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Gc({
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
  return Mr(i, c);
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
  }), h = kc({
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
function Wc(e, t) {
  return e.map((r) => t[r]);
}
var Jo = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Wc(i.all, r), s = mt({
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
  const a = Wt({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Br({
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
}, Uc = (e) => ({
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
        destination: Uc(e.descriptor)
      }
    },
    afterCritical: d
  };
}, jc = (e, t) => ({
  draggables: e.draggables,
  droppables: Mr(e.droppables, t)
});
const xt = (e) => {
  process.env.NODE_ENV;
}, Dt = (e) => {
  process.env.NODE_ENV;
};
var Hc = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = Tt(e.client, t), o = $t(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, zc = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Expected Droppable to have a frame") : v()), t;
}, qc = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = zc(a).scroll.diff.value, d = le(n, c);
    return Hc({
      draggable: o,
      offset: d,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Yc = ({
  state: e,
  published: t
}) => {
  xt();
  const r = t.modified.map((y) => {
    const x = e.dimensions.droppables[y.droppableId];
    return Rr(x, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...Bo(r)
  }, o = Mo(qc({
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
const mr = (e) => e.movementMode === "SNAP", Zt = (e, t, r) => {
  const n = jc(e.dimensions, t);
  return !mr(e) || r ? ot({
    state: e,
    dimensions: n
  }) : Qo({
    state: e,
    dimensions: n
  });
};
function Qt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Mn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Kc = (e = Mn, t) => {
  if (t.type === "FLUSH")
    return {
      ...Mn,
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
      offset: ce
    }, f = {
      client: d,
      page: {
        selection: le(d.selection, o.scroll.initial),
        borderBoxCenter: le(d.selection, o.scroll.initial),
        offset: le(d.selection, o.scroll.diff.value)
      }
    }, l = Ft(i.droppables).every((h) => !h.isFixedOnPage), {
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : v()), Yc({
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
      impact: mr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Qt(e);
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = Rr(o, n);
    return Zt(e, i, !1);
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
    return Zt(e, i, !0);
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
    return Zt(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot move by window in phase ${e.phase}`) : v()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? v(!1, "Window scrolling is currently not supported for fixed lists") : v());
    const r = t.payload.newScroll;
    if (Le(e.viewport.scroll.current, r))
      return Qt(e);
    const n = Uo(e.viewport, r);
    return mr(e) ? Qo({
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
    const r = Rc({
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
const Xc = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Jc = (e) => ({
  type: "LIFT",
  payload: e
}), Zc = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Qc = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), el = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), tl = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), rl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), nl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), ti = (e) => ({
  type: "MOVE",
  payload: e
}), ol = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), il = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), al = () => ({
  type: "MOVE_UP",
  payload: null
}), sl = () => ({
  type: "MOVE_DOWN",
  payload: null
}), cl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), ll = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Lr = () => ({
  type: "FLUSH",
  payload: null
}), ul = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Fr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ri = (e) => ({
  type: "DROP",
  payload: e
}), dl = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ni = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function fl(e) {
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
  process.env.NODE_ENV !== "production" && Q(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function pl(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ze(e.droppable.id, t.draggables);
    fl(r);
  }
}
var ml = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(Fr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase to start a drag") : v()), r(Lr()), r(Xc({
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
  pl(l, u), r(Zc({
    critical: l,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, gl = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Gr = {
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
}, Ge = `${oi.outOfTheWay}s ${Gr.outOfTheWay}`, it = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Gr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, Ln = (e) => Le(e, ce) ? void 0 : `translate(${e.x}px, ${e.y}px)`, gr = {
  moveTo: Ln,
  drop: (e, t) => {
    const r = Ln(e);
    if (r)
      return t ? `${r} scale(${gt.scale.drop})` : r;
  }
}, {
  minDropTime: vr,
  maxDropTime: ii
} = oi, vl = ii - vr, Fn = 1500, hl = 0.6;
var bl = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = ft(e, t);
  if (n <= 0)
    return vr;
  if (n >= Fn)
    return ii;
  const o = n / Fn, i = vr + vl * o, a = r === "CANCEL" ? i * hl : i;
  return Number(a.toFixed(2));
}, yl = ({
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
}, El = ({
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
const xl = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(dl({
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
  } = El({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = l ? _r(f) : null, p = l ? Gt(f) : null, g = {
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
  }, m = yl({
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
    t(Fr({
      completed: y
    }));
    return;
  }
  const D = bl({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(ul({
    newHomeClientOffset: m,
    dropDuration: D,
    completed: y
  }));
};
var Dl = xl, ai = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function Nl(e) {
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
function Sl({
  onWindowScroll: e
}) {
  function t() {
    e(ai());
  }
  const r = ut(t), n = Nl(r);
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
const wl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Cl = (e) => {
  const t = Sl({
    onWindowScroll: (r) => {
      e.dispatch(ol({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && wl(n) && t.stop(), r(n);
  };
};
var Il = Cl, Ol = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Q("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && Q(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Al = () => {
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
const Pl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Rl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, _l = (e, t) => {
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
function er(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Ol(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Tl = (e, t) => {
  const r = Al();
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
      tt("onDragStart", () => er(e().onDragStart, p, t, At.onDragStart));
    });
  }, s = (l, u) => {
    const p = _r(u), g = Gt(u);
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragMove when onDragStart has not been called") : v());
    const h = !_l(l, n.lastCritical);
    h && (n.lastCritical = l);
    const m = !Pl(n.lastLocation, p);
    m && (n.lastLocation = p);
    const y = !Rl(n.lastCombine, g);
    if (y && (n.lastCombine = g), !h && !m && !y)
      return;
    const x = {
      ...wt(l, n.mode),
      combine: g,
      destination: p
    };
    r.add(() => {
      tt("onDragUpdate", () => er(e().onDragUpdate, x, t, At.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Can only flush responders while dragging") : v()), r.flush();
  }, d = (l) => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : v()), n = null, tt("onDragEnd", () => er(e().onDragEnd, l, t, At.onDragEnd));
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
}, $l = (e, t) => {
  const r = Tl(e, t);
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
const Vl = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot finish a drop animating when no drop is occurring") : v()), e.dispatch(Fr({
    completed: n.completed
  }));
};
var Bl = Vl;
const Ml = (e) => {
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
var Ll = Ml, Fl = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Gl = (e) => {
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
const kl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Wl = (e) => (t) => (r) => (n) => {
  if (kl(n)) {
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
const Ul = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(ri({
    reason: n.reason
  })));
};
var jl = Ul;
const Hl = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? /* @__PURE__ */ window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Eo;
var zl = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => yo(Kc, Hl(Ba(gl(r), Fl(e), ml(e), Dl, Bl, Ll, jl, Wl(i), Il, Gl(t), $l(n, o))));
const tr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function ql({
  registry: e,
  callbacks: t
}) {
  let r = tr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, xt();
      const {
        additions: c,
        removals: d,
        modified: f
      } = r, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(ce)).sort((g, h) => g.descriptor.index - h.descriptor.index), u = Object.keys(f).map((g) => {
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
      r = tr(), Dt(), t.publish(p);
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
      n && (cancelAnimationFrame(n), n = null, r = tr());
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
}, Yl = () => {
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
        value: ce,
        displacement: ce
      }
    }
  };
}, Kl = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  xt();
  const n = Yl(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: Mo(s),
    droppables: Bo(a)
  };
  return Dt(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function Gn(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Q(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Xl = (e, t) => {
  let r = null;
  const n = ql({
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
    u.type === "ADDITION" && Gn(e, p, u.value) && n.add(u.value), u.type === "REMOVAL" && Gn(e, p, u.value) && n.remove(u.value);
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
      }, Kl({
        critical: h,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ui = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Jl = (e) => {
  window.scrollBy(e.x, e.y);
};
const Zl = /* @__PURE__ */ se((e) => Ft(e).filter((t) => !(!t.isEnabled || !t.frame))), Ql = (e, t) => Zl(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? v(!1, "Invalid result") : v()), qo(n.frame.pageMarginBox)(e))) || null;
var eu = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Ql(e, r);
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
var tu = (e, t, r = () => vt) => {
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
  return n === 0 ? (process.env.NODE_ENV !== "production" && Q(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, kr = 1, ru = (e, t, r = () => vt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return kr;
  const i = 1 - di({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, nu = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return kr;
  const f = di({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, kn = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = ru(e, t, o);
  return i === 0 ? 0 : n ? Math.max(nu(i, r, o), kr) : i;
}, Wn = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = tu(e, n, i);
  return t[n.end] < t[n.start] ? kn({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * kn({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, ou = ({
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
const iu = /* @__PURE__ */ Vo((e) => e === 0 ? 0 : e);
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
  }, s = Wn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Tr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Wn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Go,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = iu({
    x: c,
    y: s
  });
  if (Le(d, ce))
    return null;
  const f = ou({
    container: t,
    subject: r,
    proposedScroll: d
  });
  return f ? Le(f, ce) ? null : f : null;
};
const au = /* @__PURE__ */ Vo((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Wr = /* @__PURE__ */ (() => {
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
    return Le(i, ce) ? null : i;
  };
})(), pi = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = au(r), i = Wr({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Ur = (e, t) => pi({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), su = (e, t) => {
  if (!Ur(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Wr({
    current: n,
    max: r,
    change: t
  });
}, jr = (e, t) => {
  const r = e.frame;
  return r ? pi({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, cu = (e, t) => {
  const r = e.frame;
  return !r || !jr(e, t) ? null : Wr({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var lu = ({
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
  return a && Ur(e, a) ? a : null;
}, uu = ({
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
  return s && jr(e, s) ? s : null;
}, Un = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, u = lu({
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
  const d = eu({
    center: a,
    destination: be(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const f = uu({
    dragStartTime: t,
    droppable: d,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(d.descriptor.id, f);
}, du = ({
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
    Un({
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
      Un({
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
}, fu = ({
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
    if (!jr(s, c))
      return c;
    const d = cu(s, c);
    if (!d)
      return t(s.descriptor.id, c), null;
    const f = he(c, d);
    return t(s.descriptor.id, f), he(c, f);
  }, i = (s, c, d) => {
    if (!s || !Ur(c, d))
      return d;
    const f = su(c, d);
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
}, pu = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = du({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = fu({
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
})(), hr = /* @__PURE__ */ (() => {
  const e = `${Xe}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), mu = /* @__PURE__ */ (() => {
  const e = `${Xe}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), jn = {
  contextId: `${Xe}-scroll-container-context-id`
}, gu = (e) => (t) => `[${t}="${e}"]`, rt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), vu = "pointer-events: none;";
var hu = (e) => {
  const t = gu(e), r = (() => {
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
        dragging: vu,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${it.outOfTheWay};
    `;
    return {
      selector: t(hr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(mu.contextId),
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
const bu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ro : ae;
var ye = bu;
const rr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find the head to append a style to") : v()), e;
}, Hn = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function yu(e, t) {
  const r = W(() => hu(e), [e]), n = U(null), o = U(null), i = P(se((l) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), u.textContent = l;
  }), []), a = P((l) => {
    const u = n.current;
    u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), u.textContent = l;
  }, []);
  ye(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? v(!1, "style elements already mounted") : v());
    const l = Hn(t), u = Hn(t);
    return n.current = l, o.current = u, l.setAttribute(`${Xe}-always`, e), u.setAttribute(`${Xe}-dynamic`, e), rr().appendChild(l), rr().appendChild(u), a(r.always), i(r.resting), () => {
      const p = (g) => {
        const h = g.current;
        h || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot unmount ref as it is not set") : v()), rr().removeChild(h), g.current = null;
      };
      p(n), p(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = P(() => i(r.dragging), [i, r.dragging]), c = P((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), d = P(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return W(() => ({
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
    return process.env.NODE_ENV !== "production" && Q(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Je.draggableId) === t);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && Q("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Q(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function Eu(e) {
  const t = U({}), r = U(null), n = U(null), o = U(!1), i = P(function(u, p) {
    const g = {
      id: u,
      focus: p
    };
    return t.current[u] = g, function() {
      const m = t.current;
      m[u] !== g && delete m[u];
    };
  }, []), a = P(function(u) {
    const p = vi(e, u);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = P(function(u, p) {
    r.current === u && (r.current = p);
  }, []), c = P(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const u = r.current;
      u && a(u);
    }));
  }, [a]), d = P(function(u) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Je.draggableId) === u && (r.current = u);
  }, []);
  return ye(() => (o.current = !0, function() {
    o.current = !1;
    const u = n.current;
    u && cancelAnimationFrame(u);
  }), []), W(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, d, c, s]);
}
function xu() {
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
function Du() {
  const e = W(xu, []);
  return ae(() => function() {
    F.version.startsWith("16") || F.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Hr = /* @__PURE__ */ F.createContext(null), ht = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.body") : v()), e;
};
const Nu = {
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
var Su = Nu;
const wu = (e) => `rfd-announcement-${e}`;
function Cu(e) {
  const t = W(() => wu(e), [e]), r = U(null);
  return ae(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Be(i.style, Su), ht().appendChild(i), function() {
      setTimeout(function() {
        const c = ht();
        c.contains(i) && c.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), P((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && Q(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Iu = 0;
const hi = {
  separator: "::"
};
function Ou(e, t = hi) {
  return W(() => `${e}${t.separator}${Iu++}`, [t.separator, e]);
}
function Au(e, t = hi) {
  const r = F.useId();
  return W(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var zr = "useId" in F ? Au : Ou;
function Pu({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Ru({
  contextId: e,
  text: t
}) {
  const r = zr("hidden-text", {
    separator: "-"
  }), n = W(() => Pu({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ae(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", ht().appendChild(i), function() {
      const s = ht();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var Ut = /* @__PURE__ */ F.createContext(null), _u = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Tu = /(\d+)\.(\d+)\.(\d+)/, zn = (e) => {
  const t = Tu.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? v(!1, `Unable to parse React version ${e}`) : v());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, $u = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Vu = (e, t) => {
  const r = zn(e), n = zn(t);
  $u(r, n) || process.env.NODE_ENV !== "production" && Q(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const nr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Bu = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Q(`
      No <!doctype html> found.

      ${nr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Q(`
      Unexpected <!doctype> found: (${t.name})

      ${nr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Q(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${nr}
    `);
};
function qr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function St(e, t) {
  qr(() => {
    ae(() => {
      try {
        e();
      } catch (r) {
        fr(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Mu() {
  St(() => {
    Vu(_u.react, F.version), Bu(document);
  }, []);
}
function Yr(e) {
  const t = U(e);
  return ae(() => {
    t.current = e;
  }), t;
}
function Lu() {
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
const Fu = 9, Gu = 13, Kr = 27, bi = 32, ku = 33, Wu = 34, Uu = 35, ju = 36, Hu = 37, zu = 38, qu = 39, Yu = 40, Ku = {
  [Gu]: !0,
  [Fu]: !0
};
var yi = (e) => {
  Ku[e.keyCode] && e.preventDefault();
};
const Xu = /* @__PURE__ */ (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var jt = Xu;
const Ei = 0, qn = 5;
function Ju(e, t) {
  return Math.abs(t.x - e.x) >= qn || Math.abs(t.y - e.y) >= qn;
}
const Yn = {
  type: "IDLE"
};
function Zu({
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
      if (!Ju(f, c))
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
      if (o.keyCode === Kr) {
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
    eventName: jt,
    fn: e
  }];
}
function Qu(e) {
  const t = U(Yn), r = U(Me), n = W(() => ({
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
  }), [e]), o = W(() => ({
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
  }), [e]), i = P(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = De(window, [o, n], l);
  }, [o, n]), a = P(() => {
    t.current.type !== "IDLE" && (t.current = Yn, r.current(), i());
  }, [i]), s = P(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = P(function() {
    const l = {
      capture: !0,
      passive: !1
    }, u = Zu({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = De(window, u, l);
  }, [s, a]), d = P(function(l, u) {
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
function ed() {
}
const td = {
  [Wu]: !0,
  [ku]: !0,
  [ju]: !0,
  [Uu]: !0
};
function rd(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Kr) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === bi) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Yu) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === zu) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === qu) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Hu) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (td[o.keyCode]) {
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
    eventName: jt,
    fn: r
  }];
}
function nd(e) {
  const t = U(ed), r = W(() => ({
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
      t.current = De(window, rd(d, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = P(function() {
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
const or = {
  type: "IDLE"
}, od = 120, id = 0.15;
function ad({
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
      r.keyCode === Kr && r.preventDefault(), e();
    }
  }, {
    eventName: jt,
    fn: e
  }];
}
function sd({
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
      if (!i || !(i.force >= id))
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
    eventName: jt,
    fn: e
  }];
}
function cd(e) {
  const t = U(or), r = U(Me), n = P(function() {
    return t.current;
  }, []), o = P(function(p) {
    t.current = p;
  }, []), i = W(() => ({
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
        clientY: x
      } = m, D = {
        x: y,
        y: x
      };
      r.current(), l(h, D);
    }
  }), [e]), a = P(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = De(window, [i], p);
  }, [i]), s = P(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(or), r.current(), a());
  }, [a, o]), c = P(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), d = P(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: s,
      getPhase: n
    }, h = De(window, sd(g), p), m = De(window, ad(g), p);
    r.current = function() {
      h(), m();
    };
  }, [c, n, s]), f = P(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? v(!1, `Cannot start dragging from phase ${p.type}`) : v());
    const g = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, o]), l = P(function(p, g) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v());
    const h = setTimeout(f, od);
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
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(or));
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
function ld(e) {
  qr(() => {
    const t = Yr(e);
    St(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot change the amount of sensor hooks after mounting") : v(!1));
    });
  });
}
const ud = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function xi(e, t) {
  if (t == null)
    return !1;
  if (ud.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : xi(e, t.parentElement);
}
function dd(e, t) {
  const r = t.target;
  return Nt(r) ? xi(e, r) : !1;
}
var fd = (e) => Se(e.getBoundingClientRect()).center;
function pd(e) {
  return e instanceof gi(e).Element;
}
const md = /* @__PURE__ */ (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Di(e, t) {
  return e == null ? null : e[md](t) ? e : Di(e.parentElement, t);
}
function gd(e, t) {
  return e.closest ? e.closest(t) : Di(e, t);
}
function vd(e) {
  return `[${Je.contextId}="${e}"]`;
}
function hd(e, t) {
  const r = t.target;
  if (!pd(r))
    return process.env.NODE_ENV !== "production" && Q("event.target must be a Element"), null;
  const n = vd(e), o = gd(r, n);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && Q("drag handle must be a HTMLElement"), null) : null;
}
function bd(e, t) {
  const r = hd(e, t);
  return r ? r.getAttribute(Je.draggableId) : null;
}
function yd(e, t) {
  const r = `[${hr.contextId}="${e}"]`, o = mi(document, r).find((i) => i.getAttribute(hr.id) === t);
  return o ? Nt(o) ? o : (process.env.NODE_ENV !== "production" && Q("Draggable element is not a HTMLElement"), null) : null;
}
function Ed(e) {
  e.preventDefault();
}
function Ct({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && Q(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && Q(`
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
  return o ? !(!o.options.isEnabled || !ui(t.getState(), n)) : (process.env.NODE_ENV !== "production" && Q(`Unable to find draggable with id: ${n}`), !1);
}
function xd({
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
  const c = n.draggable.getById(o), d = yd(t, c.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && Q(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && dd(d, a))
    return null;
  const f = e.claim(i || Me);
  let l = "PRE_DRAG";
  function u() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function g(b, S) {
    Ct({
      expected: b,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(S());
  }
  const h = g.bind(null, "DRAGGING");
  function m(b) {
    function S() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (S(), process.env.NODE_ENV !== "production" ? v(!1, `Cannot lift in phase ${l}`) : v()), r.dispatch(Jc(b.liftActionArgs)), l = "DRAGGING";
    function T(I, G = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), G.shouldBlockNextClick) {
        const $ = De(window, [{
          eventName: "click",
          fn: Ed,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      S(), r.dispatch(ri({
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
      drop: (I) => T("DROP", I),
      cancel: (I) => T("CANCEL", I),
      ...b.actions
    };
  }
  function y(b) {
    const S = ut((I) => {
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
        cleanup: () => S.cancel(),
        actions: {
          move: S
        }
      }),
      move: S
    };
  }
  function x() {
    const b = {
      moveUp: () => h(al),
      moveRight: () => h(cl),
      moveDown: () => h(sl),
      moveLeft: () => h(ll)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: fd(d),
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
    snapLift: x,
    abort: D
  };
}
const Dd = [Qu, nd, cd];
function Nd({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? Dd : [], ...n || []], a = de(() => Lu())[0], s = P(function(m, y) {
    bt(m) && !bt(y) && a.tryAbandon();
  }, [a]);
  ye(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      s(m, x), m = x;
    });
  }, [a, t, s]), ye(() => a.tryAbandon, [a.tryAbandon]);
  const c = P((h) => Ni({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: h
  }), [a, r, t]), d = P((h, m, y) => xd({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), f = P((h) => bd(e, h), [e]), l = P((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), u = P(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Lr()));
  }, [a, t]), p = P(() => a.isClaimed(), [a]), g = W(() => ({
    canGetLock: c,
    tryGetLock: d,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: u,
    isLockClaimed: p
  }), [c, d, f, l, u, p]);
  ld(i);
  for (let h = 0; h < i.length; h++)
    i[h](g);
}
const Sd = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    F.version.startsWith("16") || F.version.startsWith("17") ? r() : io(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), wd = (e) => ({
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
function Cd(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = U(null);
  Mu();
  const s = Yr(e), c = P(() => Sd(s.current), [s]), d = P(() => wd(s.current), [s]), f = Cu(t), l = Ru({
    contextId: t,
    text: i
  }), u = yu(t, o), p = P(($) => {
    nt(a).dispatch($);
  }, []), g = W(() => cn({
    publishWhileDragging: Qc,
    updateDroppableScroll: tl,
    updateDroppableIsEnabled: rl,
    updateDroppableIsCombineEnabled: nl,
    collectionStarting: el
  }, p), [p]), h = Du(), m = W(() => Xl(h, g), [h, g]), y = W(() => pu({
    scrollWindow: Jl,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: d,
    ...cn({
      move: ti
    }, p)
  }), [m.scrollDroppable, p, d]), x = Eu(t), D = W(() => zl({
    announce: f,
    autoScroller: y,
    dimensionMarshal: m,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: u
  }), [f, y, m, x, c, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== D && process.env.NODE_ENV !== "production" && Q("unexpected store change"), a.current = D;
  const E = P(() => {
    const $ = nt(a);
    $.getState().phase !== "IDLE" && $.dispatch(Lr());
  }, []), b = P(() => {
    const $ = nt(a).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), S = W(() => ({
    isDragging: b,
    tryAbort: E
  }), [b, E]);
  r(S);
  const T = P(($) => ui(nt(a).getState(), $), []), I = P(() => We(nt(a).getState()), []), G = W(() => ({
    marshal: m,
    focus: x,
    contextId: t,
    canLift: T,
    isMovementAllowed: I,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, m, l, x, T, I, h]);
  return Nd({
    contextId: t,
    store: D,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ae(() => E, [E]), F.createElement(Ut.Provider, {
    value: G
  }, F.createElement(Ns, {
    context: Hr,
    store: D
  }, e.children));
}
let Id = 0;
function Od() {
  return W(() => `${Id++}`, []);
}
function Ad() {
  return F.useId();
}
var Pd = "useId" in F ? Ad : Od;
function Rd(e) {
  const t = Pd(), r = e.dragHandleUsageInstructions || At.dragHandleUsageInstructions;
  return F.createElement(Fs, null, (n) => F.createElement(Cd, {
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
const Kn = {
  dragging: 5e3,
  dropAnimating: 4500
}, _d = (e, t) => t ? it.drop(t.duration) : e ? it.snap : it.fluid, Td = (e, t) => {
  if (e)
    return t ? gt.opacity.drop : gt.opacity.combining;
}, $d = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Vd(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = $d(e), c = !!i, d = c ? gr.drop(n, a) : gr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: _d(s, i),
    transform: d,
    opacity: Td(a, c),
    zIndex: c ? Kn.dropAnimating : Kn.dragging,
    pointerEvents: "none"
  };
}
function Bd(e) {
  return {
    transform: gr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Md(e) {
  return e.type === "DRAGGING" ? Vd(e) : Bd(e);
}
function Ld(e, t, r = ce) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Po(o, n), a = $t(i, r), s = {
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
function Fd(e) {
  const t = zr("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = W(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = P((p) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get dimension when no ref is set") : v()), Ld(r, g, p);
  }, [r, o]), f = W(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: d
  }), [r, d, c, t]), l = U(f), u = U(!0);
  ye(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), ye(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var Xr = /* @__PURE__ */ F.createContext(null);
function Si(e) {
  e && Nt(e) || (process.env.NODE_ENV !== "production" ? v(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : v());
}
function Gd(e, t, r) {
  St(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? v(!1, "Draggable requires a draggableId") : v(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : v(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? v(!1, `${n(o)} requires an integer index prop`) : v(!1)), e.mapped.type !== "DRAGGING" && (Si(r()), e.isEnabled && (vi(t, o) || (process.env.NODE_ENV !== "production" ? v(!1, `${n(o)} Unable to find drag handle`) : v(!1))));
  });
}
function kd(e) {
  qr(() => {
    const t = U(e);
    St(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Draggable isClone prop value changed during component life") : v(!1));
    }, [e]);
  });
}
function Mt(e) {
  const t = no(e);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find required context") : v()), t;
}
function Wd(e) {
  e.preventDefault();
}
const Ud = (e) => {
  const t = U(null), r = P((S = null) => {
    t.current = S;
  }, []), n = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Mt(Ut), {
    type: s,
    droppableId: c
  } = Mt(Xr), d = W(() => ({
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
  if (Gd(e, o, n), kd(h), !h) {
    const S = W(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: u
    }), [d, a, n, g, p, u]);
    Fd(S);
  }
  const x = W(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Wd
  } : null, [o, i, l, u]), D = P((S) => {
    m.type === "DRAGGING" && m.dropping && S.propertyName === "transform" && (F.version.startsWith("16") || F.version.startsWith("17") ? y() : io(y));
  }, [y, m]), E = W(() => {
    const S = Md(m), T = m.type === "DRAGGING" && m.dropping ? D : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: S,
        onTransitionEnd: T
      },
      dragHandleProps: x
    };
  }, [o, x, l, m, D, r]), b = W(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return F.createElement(F.Fragment, null, f(E, m.snapshot, b));
};
var jd = Ud, wi = (e, t) => e === t, Ci = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Hd = (e) => e.combine ? e.combine.draggableId : null, zd = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function qd() {
  const e = se((o, i) => ({
    x: o,
    y: i
  })), t = se((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = se((o, i, a, s, c = null, d = null, f = null) => ({
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
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = be(o.impact), d = zd(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, c, d, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], d = a.result, f = d.mode, l = Ci(d), u = Hd(d), g = {
        duration: o.dropDuration,
        curve: Gr.drop,
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
const Yd = {
  mapped: {
    type: "SECONDARY",
    offset: ce,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: /* @__PURE__ */ Ii(null)
  }
};
function Kd() {
  const e = se((a, s) => ({
    x: a,
    y: s
  })), t = se(Ii), r = se((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(ce, a, !0) : null, o = (a, s, c, d) => {
    const f = c.displaced.visible[a], l = !!(d.inVirtualList && d.effected[a]), u = Gt(c), p = u && u.draggableId === a ? s : null;
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
const Xd = () => {
  const e = qd(), t = Kd();
  return (n, o) => e(n, o) || t(n, o) || Yd;
}, Jd = {
  dropAnimationFinished: ni
}, Zd = /* @__PURE__ */ Oo(Xd, Jd, null, {
  context: Hr,
  areStatePropsEqual: wi
})(jd);
var Qd = Zd;
function Oi(e) {
  return Mt(Xr).isUsingCloneFor === e.draggableId && !e.isClone ? null : F.createElement(Qd, e);
}
function ef(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return F.createElement(Oi, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Jr = (e) => (t) => e === t, tf = /* @__PURE__ */ Jr("scroll"), rf = /* @__PURE__ */ Jr("auto"), nf = /* @__PURE__ */ Jr("visible"), Xn = (e, t) => t(e.overflowX) || t(e.overflowY), of = (e, t) => t(e.overflowX) && t(e.overflowY), Ai = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Xn(r, tf) || Xn(r, rf);
}, af = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = ht(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, v()), !Ai(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return of(n, nf) || process.env.NODE_ENV !== "production" && Q(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Zr = (e) => e == null ? null : e === document.body ? af() ? e : null : e === document.documentElement ? null : Ai(e) ? e : Zr(e.parentElement);
var sf = (e) => {
  !e || !Zr(e.parentElement) || process.env.NODE_ENV !== "production" && Q(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, br = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Pi = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Pi(e.parentElement) : !1;
var cf = (e) => {
  const t = Zr(e), r = Pi(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, lf = ({
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
          value: ce,
          displacement: ce
        }
      }
    };
  })(), d = o === "vertical" ? Tr : Go, f = Ke({
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
const uf = (e, t) => {
  const r = Ro(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, c = Ar({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Pr({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var df = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, d = uf(e, c), f = $t(d, n), l = (() => {
    if (!c)
      return null;
    const p = Ro(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: $t(p, n),
      scroll: br(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return lf({
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
const ff = {
  passive: !1
}, pf = {
  passive: !0
};
var Jn = (e) => e.shouldPublishImmediately ? ff : pf;
const It = (e) => e && e.env.closestScrollable || null;
function mf(e) {
  const t = U(null), r = Mt(Ut), n = zr("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Yr(e), s = W(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = U(s), d = W(() => se((E, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? v(!1, "Can only update scroll when dragging") : v());
    const S = {
      x: E,
      y: b
    };
    i.updateDroppableScroll(s.id, S);
  }), [s.id, i]), f = P(() => {
    const E = t.current;
    return !E || !E.env.closestScrollable ? ce : br(E.env.closestScrollable);
  }, []), l = P(() => {
    const E = f();
    d(E.x, E.y);
  }, [f, d]), u = W(() => ut(l), [l]), p = P(() => {
    const E = t.current, b = It(E);
    if (E && b || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find scroll options while scrolling") : v()), E.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    u();
  }, [u, l]), g = P((E, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect a droppable while a drag is occurring") : v());
    const S = a.current, T = S.getDroppableRef();
    T || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect without a droppable ref") : v());
    const I = cf(T), G = {
      ref: T,
      descriptor: s,
      env: I,
      scrollOptions: b
    };
    t.current = G;
    const $ = df({
      ref: T,
      descriptor: s,
      env: I,
      windowScroll: E,
      direction: S.direction,
      isDropDisabled: S.isDropDisabled,
      isCombineEnabled: S.isCombineEnabled,
      shouldClipSubject: !S.ignoreContainerClipping
    }), k = I.closestScrollable;
    return k && (k.setAttribute(jn.contextId, r.contextId), k.addEventListener("scroll", p, Jn(G.scrollOptions)), process.env.NODE_ENV !== "production" && sf(k)), $;
  }, [r.contextId, s, p, a]), h = P(() => {
    const E = t.current, b = It(E);
    return E && b || (process.env.NODE_ENV !== "production" ? v(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : v()), br(b);
  }, []), m = P(() => {
    const E = t.current;
    E || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop drag when no active drag") : v());
    const b = It(E);
    t.current = null, b && (u.cancel(), b.removeAttribute(jn.contextId), b.removeEventListener("scroll", p, Jn(E.scrollOptions)));
  }, [p, u]), y = P((E) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll when there is no drag") : v());
    const S = It(b);
    S || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll a droppable with no closest scrollable") : v()), S.scrollTop += E.y, S.scrollLeft += E.x;
  }, []), x = W(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: y
  }), [m, g, h, y]), D = W(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: x
  }), [x, s, n]);
  ye(() => (c.current = D.descriptor, o.droppable.register(D), () => {
    t.current && (process.env.NODE_ENV !== "production" && Q("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(D);
  }), [x, s, m, D, i, o.droppable]), ye(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ye(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ir() {
}
const Zn = {
  width: 0,
  height: 0,
  margin: zs
}, gf = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Zn : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, vf = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = gf({
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
}, hf = (e) => {
  const t = U(null), r = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = de(e.animate === "open");
  ae(() => s ? n !== "open" ? (r(), c(!1), ir) : t.current ? ir : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : ir, [n, s, r]);
  const d = P((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = vf({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return F.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var bf = /* @__PURE__ */ F.memo(hf);
function ar(e) {
  return typeof e == "boolean";
}
function sr(e, t) {
  t.forEach((r) => r(e));
}
const yf = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? v(!1, "A Droppable requires a droppableId prop") : v()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : v());
}, function({
  props: t
}) {
  ar(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isDropDisabled must be a boolean") : v()), ar(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isCombineEnabled must be a boolean") : v()), ar(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? v(!1, "ignoreContainerClipping must be a boolean") : v());
}, function({
  getDroppableRef: t
}) {
  Si(t());
}], Ef = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Q(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], xf = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? v(!1, "Must provide a clone render function (renderClone) for virtual lists") : v());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? v(!1, "Expected virtual list to not have a placeholder") : v());
}];
function Df(e) {
  St(() => {
    sr(e, yf), e.props.mode === "standard" && sr(e, Ef), e.props.mode === "virtual" && sr(e, xf);
  });
}
class Nf extends F.PureComponent {
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
const Sf = (e) => {
  const t = no(Ut);
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find app context") : v());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = U(null), i = U(null), {
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
  } = e, x = P(() => o.current, []), D = P((M = null) => {
    o.current = M;
  }, []), E = P(() => i.current, []), b = P((M = null) => {
    i.current = M;
  }, []);
  Df({
    props: e,
    getDroppableRef: x,
    getPlaceholderRef: E
  });
  const S = P(() => {
    n() && m({
      maxScroll: li()
    });
  }, [n, m]);
  mf({
    droppableId: s,
    type: c,
    mode: d,
    direction: f,
    isDropDisabled: u,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: x
  });
  const T = W(() => F.createElement(Nf, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: M,
    data: K,
    animate: oe
  }) => F.createElement(bf, {
    placeholder: K,
    onClose: M,
    innerRef: b,
    animate: oe,
    contextId: r,
    onTransitionEnd: S
  })), [r, S, e.placeholder, e.shouldAnimatePlaceholder, b]), I = W(() => ({
    innerRef: D,
    placeholder: T,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, T, D]), G = h ? h.dragging.draggableId : null, $ = W(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: G
  }), [s, G, c]);
  function k() {
    if (!h)
      return null;
    const {
      dragging: M,
      render: K
    } = h, oe = F.createElement(Oi, {
      draggableId: M.draggableId,
      index: M.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ne, _) => K(ne, _, M));
    return Vi.createPortal(oe, y());
  }
  return F.createElement(Xr.Provider, {
    value: $
  }, a(I, g), k());
};
var wf = Sf;
function Cf() {
  return document.body || (process.env.NODE_ENV !== "production" ? v(!1, "document.body is not ready") : v()), document.body;
}
const Qn = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Cf
}, Ri = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Qn)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Qn[r]
    });
  return t;
}, cr = (e, t) => e === t.droppable.type, eo = (e, t) => t.draggables[e.draggable.id], If = () => {
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
  }, r = se((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = se((i, a, s, c, d, f) => {
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
      if (!cr(d, u))
        return t;
      const p = eo(u, i.dimensions), g = be(i.impact) === c;
      return n(c, f, g, g, p, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!cr(d, u.critical))
        return t;
      const p = eo(u.critical, i.dimensions);
      return n(c, f, Ci(u.result) === c, be(u.impact) === c, p, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!cr(d, u.critical))
        return t;
      const p = be(u.impact) === c, g = !!(u.impact.at && u.impact.at.type === "COMBINE"), h = u.critical.droppable.id === c;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, Of = {
  updateViewportMaxScroll: il
}, Af = /* @__PURE__ */ Oo(If, Of, (e, t, r) => ({
  ...Ri(r),
  ...e,
  ...t
}), {
  context: Hr,
  areStatePropsEqual: wi
})(wf);
var Pf = Af;
const Rf = ({
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
  const [f, l] = de(null), [u, p] = de(e);
  ae(() => {
    p(e);
  }, [e]);
  const g = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", h = (y) => {
    a == null || a(y), l(y);
  }, m = (y) => {
    if (!y.destination || !(u != null && u.length)) return;
    const x = y.source.index, D = y.destination.index, E = [...u], [b] = E.splice(x, 1);
    E.splice(D, 0, b), p(E);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ ie("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ N("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ N("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ N(ao, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ N(ho, { className: d, children: /* @__PURE__ */ N("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ N("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ N(Rd, { onDragEnd: m, children: /* @__PURE__ */ N(Pf, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ ie("table", { className: "w-full", children: [
    /* @__PURE__ */ N("thead", { children: /* @__PURE__ */ N("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((x, D) => /* @__PURE__ */ N(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === x.name.find((E) => E) ? `-${x.name.find((E) => E) ?? ""}` : x.name.find((E) => E) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === x.name.find((E) => E) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: x.title
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
          u == null ? void 0 : u.map((x, D) => {
            var E;
            return /* @__PURE__ */ N(
              ef,
              {
                isDragDisabled: o,
                draggableId: (E = x == null ? void 0 : x.id) == null ? void 0 : E.toString(),
                index: D,
                children: (b) => {
                  const S = {
                    ...b.draggableProps.style
                  };
                  return /* @__PURE__ */ N(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === u[D] && g}`,
                      onClick: () => h(
                        s ? x[s] : x.id
                      ),
                      ref: b.innerRef,
                      ...b.draggableProps,
                      ...b.dragHandleProps,
                      style: S,
                      children: t.map((T, I) => {
                        var $;
                        let G = ($ = T == null ? void 0 : T.name) == null ? void 0 : $.reduce(
                          (k, M) => k == null ? void 0 : k[M],
                          u == null ? void 0 : u[D]
                        );
                        return /* @__PURE__ */ N(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: T.transform ? T.transform(G, D) : G
                          },
                          I
                        );
                      })
                    }
                  );
                }
              },
              x == null ? void 0 : x.id
            );
          }),
          y.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, tp = Rf, _f = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ N(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), rp = _f;
var yr = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new WeakMap(), to = 0, Tf = void 0;
function $f(e) {
  return e ? (Ot.has(e) || (to += 1, Ot.set(e, to.toString())), Ot.get(e)) : "0";
}
function Vf(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? $f(e.root) : e[t]}`).toString();
}
function Bf(e) {
  const t = Vf(e);
  let r = yr.get(t);
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
    }, yr.set(t, r);
  }
  return r;
}
function Mf(e, t, r = {}, n = Tf) {
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
  const { id: o, observer: i, elements: a } = Bf(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), yr.delete(o));
  };
}
function Lf({
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
  const [l, u] = L.useState(null), p = L.useRef(d), [g, h] = L.useState({
    inView: !!s,
    entry: void 0
  });
  p.current = d, L.useEffect(
    () => {
      if (a || !l) return;
      let D;
      return D = Mf(
        l,
        (E, b) => {
          h({
            inView: E,
            entry: b
          }), p.current && p.current(E, b), b.isIntersecting && i && D && (D(), D = void 0);
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
  const m = (f = g.entry) == null ? void 0 : f.target, y = L.useRef(void 0);
  !l && m && !i && !a && y.current !== m && (y.current = m, h({
    inView: !!s,
    entry: void 0
  }));
  const x = [u, g.inView, g.entry];
  return x.ref = x[0], x.inView = x[1], x.entry = x[2], x;
}
const Ff = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = de(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return ae(() => (window.addEventListener("scroll", o), () => {
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
}, Gf = Ff, kf = ({
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
  } = e, g = u == null ? void 0 : u.pages.flatMap((y) => y), { ref: h, inView: m } = Lf();
  return ae(() => {
    m && c && d();
  }, [d, m, c]), /* @__PURE__ */ ie(at, { children: [
    s && /* @__PURE__ */ N(Gf, { className: n }),
    /* @__PURE__ */ N(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(g != null && g.length) && g.map((y, x) => t(y, x))
      }
    ),
    /* @__PURE__ */ N(
      "div",
      {
        className: xr(
          "flex mt-8 flex-row items-center justify-center",
          i
        ),
        ref: h,
        children: l || p ? a : g != null && g.length ? f ? a : null : o
      }
    )
  ] });
}, np = kf, op = () => {
  const e = U(null);
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
  qf as Button,
  Yf as Checkbox,
  Kf as Chips,
  Dr as ErrorText,
  st as Icon,
  np as InfiniteScroll,
  Xf as Input,
  Jf as List,
  ao as Loader,
  Zf as MultiSelectSearch,
  Gf as ScrollTopButton,
  Qf as Search,
  ep as Select,
  tp as Table,
  rp as Textarea,
  ho as Wrapper,
  bo as useDebounce,
  op as useScroll
};
