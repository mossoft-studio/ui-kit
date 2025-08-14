import { jsx as S, jsxs as oe, Fragment as it } from "react/jsx-runtime";
import * as L from "react";
import F, { memo as Ai, useRef as j, useCallback as _i, useState as me, useEffect as ie, useMemo as Qn, useLayoutEffect as eo, useContext as to } from "react";
import { motion as ro, AnimatePresence as Ri } from "framer-motion";
import { twMerge as br } from "tailwind-merge";
import Ti, { flushSync as no } from "react-dom";
const $i = ({ name: e, className: t, ...r }) => /* @__PURE__ */ S(
  "svg",
  {
    className: `text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ S("use", { className: "w-full h-full object-contain", href: `#${e}` })
  }
), at = /* @__PURE__ */ Ai($i), Vi = ({ style: e, text: t }) => /* @__PURE__ */ oe("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ S("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ S("span", { className: "text-base", children: t })
] }), oo = Vi, Bi = ({
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
  const u = j(null), f = _i(() => {
    u.current || (t == null || t(), u.current = setTimeout(() => {
      u.current = null;
    }, r));
  }, [t, r]), l = [
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
  return /* @__PURE__ */ S(
    ro.button,
    {
      disabled: s || o,
      onClick: f,
      className: l,
      ...c,
      whileTap: { scale: 0.96 },
      whileHover: !s && !o ? { scale: 1.02 } : void 0,
      children: o ? /* @__PURE__ */ S(oo, { style: { width: 20, height: 20 } }) : /* @__PURE__ */ oe(it, { children: [
        e,
        a && /* @__PURE__ */ S(
          at,
          {
            name: a,
            className: `ml-2 ${i.includes("small") ? "w-4 h-4" : "w-5 h-5"}`
          }
        )
      ] })
    }
  );
}, Wf = Bi, Mi = ({ error: e }) => /* @__PURE__ */ S("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ S("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), yr = Mi, Li = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ oe(it, { children: [
  /* @__PURE__ */ oe(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ S(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ S("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ S(
          "input",
          {
            disabled: c,
            checked: s,
            onChange: (u) => e(u.target.checked),
            type: "checkbox",
            className: o
          }
        )
      ]
    }
  ),
  a && /* @__PURE__ */ S(yr, { error: a })
] }), Uf = Li, Fi = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ S("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ S(it, { children: o.title ? /* @__PURE__ */ S(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ S(it, {}) })) }), jf = Fi;
function Er(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var st;
st || (st = {});
function Re() {
}
function Gi(e) {
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
function ki(e) {
  return typeof e == "number" && isNaN(e);
}
function io(e) {
  return Ue(e) || ki(e) || typeof e == "number" && !isFinite(e);
}
function ao(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function Wi(e) {
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
function Ui(e, t, r) {
  var n = Wi(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function ji(e) {
  var t = j(e);
  t.current = e;
  var r = j(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function xr(e, t) {
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
function Hi(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function so(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function Xr(e, t) {
  return Array(t + 1).join(e);
}
function co(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + Xr("0", Math.abs(a)) + o : a >= s ? o = o + Xr("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function Jr(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = xr(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, c = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : c.toFixed(t), f = u.split("."), l = i;
  i && Number(f[0]) && (l = i.split("").reverse().reduce(function(h, m, y) {
    return h.length > y ? (Number(h[0]) + Number(m)).toString() + h.substring(1, h.length) : m + h;
  }, f[0]));
  var d = so(f[1] || "", t, r), p = s ? "-" : "", v = n ? "." : "";
  return "" + p + l + v + d;
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
var lo = /* @__PURE__ */ Gi(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), zi = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function qi(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function jt(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Yi() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function uo(e) {
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
function fo(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Ki(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Xi(e, t, r, n, o, i, a) {
  a === void 0 && (a = Ki);
  var s = o.findIndex(function(x) {
    return x;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, n = n + c.length);
  for (var u = r.length, f = e.length, l = {}, d = new Array(u), p = 0; p < u; p++) {
    d[p] = -1;
    for (var v = 0, h = f; v < h; v++) {
      var m = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: p,
        formattedValueIndex: v
      });
      if (m && l[v] !== !0) {
        d[p] = v, l[v] = !0;
        break;
      }
    }
  }
  for (var y = n; y < u && (d[y] === -1 || !i(r[y])); )
    y++;
  var E = y === u || d[y] === -1 ? f : d[y];
  for (y = n - 1; y > 0 && d[y] === -1; )
    y--;
  var D = y === -1 || d[y] === -1 ? 0 : d[y] + 1;
  return D > E ? E : n - D < E - n ? D : E;
}
function Pt(e, t, r, n) {
  var o = e.length;
  if (t = qi(t, 0, o), n === "left") {
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
function Ji(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(je(e[r]) || je(e[r - 1]));
  return t;
}
function po(e, t, r, n, o, i) {
  i === void 0 && (i = Re);
  var a = ji(function(v, h) {
    var m, y;
    return io(v) ? (y = "", m = "") : typeof v == "number" || h ? (y = typeof v == "number" ? co(v) : v, m = n(y)) : (y = o(v, void 0), m = n(y)), { formattedValue: m, numAsString: y };
  }), s = me(function() {
    return a(Ue(e) ? t : e, r);
  }), c = s[0], u = s[1], f = function(v, h) {
    v.formattedValue !== c.formattedValue && u({
      formattedValue: v.formattedValue,
      numAsString: v.value
    }), i(v, h);
  }, l = e, d = r;
  Ue(e) && (l = c.numAsString, d = !0);
  var p = a(l, d);
  return Qn(function() {
    u(p);
  }, [p.formattedValue]), [c, f];
}
function Zi(e) {
  return e.replace(/[^0-9]/g, "");
}
function Qi(e) {
  return e;
}
function mo(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Qi);
  var s = e.removeFormatting;
  s === void 0 && (s = Zi);
  var c = e.defaultValue, u = e.valueIsNumericString, f = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = Re);
  var p = e.onKeyDown;
  p === void 0 && (p = Re);
  var v = e.onMouseUp;
  v === void 0 && (v = Re);
  var h = e.onFocus;
  h === void 0 && (h = Re);
  var m = e.onBlur;
  m === void 0 && (m = Re);
  var y = e.value, E = e.getCaretBoundary;
  E === void 0 && (E = Ji);
  var D = e.isValidInputCharacter;
  D === void 0 && (D = je);
  var x = e.isCharacterSame, b = Er(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), C = po(y, c, !!u, a, s, f), _ = C[0], I = _.formattedValue, M = _.numAsString, $ = C[1], k = j(), V = j({ formattedValue: I, numAsString: M }), W = function(w, A) {
    V.current = { formattedValue: w.formattedValue, numAsString: w.value }, $(w, A);
  }, ce = me(!1), ne = ce[0], T = ce[1], R = j(null), G = j({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ie(function() {
    return T(!0), function() {
      clearTimeout(G.current.setCaretTimeout), clearTimeout(G.current.focusTimeout);
    };
  }, []);
  var X = a, Z = function(w, A) {
    var B = parseFloat(A);
    return {
      formattedValue: w,
      value: A,
      floatValue: isNaN(B) ? void 0 : B
    };
  }, K = function(w, A, B) {
    w.selectionStart === 0 && w.selectionEnd === w.value.length || (Ve(w, A), G.current.setCaretTimeout = setTimeout(function() {
      w.value === B && w.selectionStart !== A && Ve(w, A);
    }, 0));
  }, ee = function(w, A, B) {
    return Pt(w, A, E(w), B);
  }, ue = function(w, A, B) {
    var te = E(A), fe = Xi(A, I, w, B, te, D, x);
    return fe = Pt(A, fe, te), fe;
  }, we = function(w) {
    var A = w.formattedValue;
    A === void 0 && (A = "");
    var B = w.input, te = w.source, fe = w.event, re = w.numAsString, J;
    if (B) {
      var _e = w.inputValue || B.value, Te = jt(B);
      B.value = A, J = ue(_e, A, Te), J !== void 0 && K(B, J, A);
    }
    A !== I && W(Z(A, re), { event: fe, source: te });
  };
  ie(function() {
    var w = V.current, A = w.formattedValue, B = w.numAsString;
    (I !== A || M !== B) && W(Z(I, M), {
      event: void 0,
      source: st.props
    });
  }, [I, M]);
  var ge = R.current ? jt(R.current) : void 0, Ee = typeof window < "u" ? eo : ie;
  Ee(function() {
    var w = R.current;
    if (I !== V.current.formattedValue && w) {
      var A = ue(V.current.formattedValue, I, ge);
      w.value = I, K(w, A, I);
    }
  }, [I]);
  var Ce = function(w, A, B) {
    var te = A.target, fe = k.current ? zi(k.current, te.selectionEnd) : lo(I, w), re = Object.assign(Object.assign({}, fe), { lastValue: I }), J = s(w, re), _e = X(J);
    if (J = s(_e, void 0), l && !l(Z(_e, J))) {
      var Te = A.target, $e = jt(Te), Ut = ue(w, I, $e);
      return Te.value = I, K(Te, Ut, I), !1;
    }
    return we({
      formattedValue: _e,
      numAsString: J,
      inputValue: w,
      event: A,
      source: B,
      input: A.target
    }), !0;
  }, Oe = function(w, A) {
    A === void 0 && (A = 0);
    var B = w.selectionStart, te = w.selectionEnd;
    k.current = { selectionStart: B, selectionEnd: te + A };
  }, Ie = function(w) {
    var A = w.target, B = A.value, te = Ce(B, w, st.event);
    te && d(w), k.current = void 0;
  }, Pe = function(w) {
    var A = w.target, B = w.key, te = A.selectionStart, fe = A.selectionEnd, re = A.value;
    re === void 0 && (re = "");
    var J;
    B === "ArrowLeft" || B === "Backspace" ? J = Math.max(te - 1, 0) : B === "ArrowRight" ? J = Math.min(te + 1, re.length) : B === "Delete" && (J = te);
    var _e = 0;
    B === "Delete" && te === fe && (_e = 1);
    var Te = B === "ArrowLeft" || B === "ArrowRight";
    if (J === void 0 || te !== fe && !Te) {
      p(w), Oe(A, _e);
      return;
    }
    var $e = J;
    if (Te) {
      var Ut = B === "ArrowLeft" ? "left" : "right";
      $e = ee(re, J, Ut), $e !== J && w.preventDefault();
    } else B === "Delete" && !D(re[J]) ? $e = ee(re, J, "right") : B === "Backspace" && !D(re[J]) && ($e = ee(re, J, "left"));
    $e !== J && K(A, $e, re), p(w), Oe(A, _e);
  }, qe = function(w) {
    var A = w.target, B = function() {
      var te = A.selectionStart, fe = A.selectionEnd, re = A.value;
      if (re === void 0 && (re = ""), te === fe) {
        var J = ee(re, te);
        J !== te && K(A, J, re);
      }
    };
    B(), requestAnimationFrame(function() {
      B();
    }), v(w), Oe(A);
  }, N = function(w) {
    w.persist && w.persist();
    var A = w.target, B = w.currentTarget;
    R.current = A, G.current.focusTimeout = setTimeout(function() {
      var te = A.selectionStart, fe = A.selectionEnd, re = A.value;
      re === void 0 && (re = "");
      var J = ee(re, te);
      J !== te && !(te === 0 && fe === re.length) && K(A, J, re), h(Object.assign(Object.assign({}, w), { currentTarget: B }));
    }, 0);
  }, ve = function(w) {
    R.current = null, clearTimeout(G.current.focusTimeout), clearTimeout(G.current.setCaretTimeout), m(w);
  }, O = ne && Yi() ? "numeric" : void 0, Ae = Object.assign({ inputMode: O }, b, {
    type: t,
    value: I,
    onChange: Ie,
    onKeyDown: Pe,
    onMouseUp: qe,
    onFocus: N,
    onBlur: ve
  });
  if (r === "text")
    return o ? F.createElement(F.Fragment, null, o(I, b) || null) : F.createElement("span", Object.assign({}, b, { ref: i }), I);
  if (n) {
    var Ye = n;
    return F.createElement(Ye, Object.assign({}, Ae, { ref: i }));
  }
  return F.createElement("input", Object.assign({}, Ae, { ref: i }));
}
function Zr(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = Bt(t), u = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, d = xr(e, a), p = d.beforeDecimal, v = d.afterDecimal, h = d.addNegation;
  return r !== void 0 && (v = so(v, r, !!n)), u && (p = Ui(p, u, s)), o && (p = o + p), i && (v = v + i), h && (p = "-" + p), e = p + (l && f || "") + v, e;
}
function Bt(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function ea(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function ta(e, t) {
  return new RegExp("(^-)|[0-9]|" + ao(e), "g");
}
function ra(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function na(e, t, r) {
  var n;
  t === void 0 && (t = uo(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, u = t.to, f = u.start, l = u.end, d = Bt(r), p = d.allowedDecimalSeparators, v = d.decimalSeparator, h = e[l] === v;
  if (je(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - f === 1 && p.indexOf(e[f]) !== -1) {
    var m = s === 0 ? "" : v;
    e = e.substring(0, f) + m + e.substring(f + 1, e.length);
  }
  var y = function(R, G, X) {
    var Z = !1, K = !1;
    i.startsWith("-") ? Z = !1 : R.startsWith("--") ? (Z = !1, K = !0) : a.startsWith("-") && R.length === a.length ? Z = !1 : R[0] === "-" && (Z = !0);
    var ee = Z ? 1 : 0;
    return K && (ee = 2), ee && (R = R.substring(ee), G -= ee, X -= ee), { value: R, start: G, end: X, hasNegation: Z };
  }, E = y(e, f, l), D = E.hasNegation;
  n = E, e = n.value, f = n.start, l = n.end;
  var x = y(t.lastValue, c.start, c.end), b = x.start, C = x.end, _ = x.value, I = e.substring(f, l);
  e.length && _.length && (b > _.length - a.length || C < i.length) && !(I && a.startsWith(I)) && (e = _);
  var M = 0;
  e.startsWith(i) ? M += i.length : f < i.length && (M = f), e = e.substring(M), l -= M;
  var $ = e.length, k = e.length - a.length;
  e.endsWith(a) ? $ = k : (l > k || l > e.length - a.length) && ($ = l), e = e.substring(0, $), e = ea(D ? "-" + e : e, o), e = (e.match(ta(v)) || []).join("");
  var V = e.indexOf(v);
  e = e.replace(new RegExp(ao(v), "g"), function(R, G) {
    return G === V ? "." : "";
  });
  var W = xr(e, o), ce = W.beforeDecimal, ne = W.afterDecimal, T = W.addNegation;
  return u.end - u.start < c.end - c.start && ce === "" && h && !parseFloat(ne) && (e = T ? "-" : ""), e;
}
function oa(e, t) {
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
function ia(e) {
  var t = Bt(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function aa(e) {
  e = ia(e);
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Re);
  var i = e.onBlur;
  i === void 0 && (i = Re);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var f = e.defaultValue, l = e.value, d = e.valueIsNumericString, p = e.onValueChange, v = Er(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = Bt(e), m = h.decimalSeparator, y = h.allowedDecimalSeparators, E = function(T) {
    return Zr(T, e);
  }, D = function(T, R) {
    return na(T, R, e);
  }, x = Ue(l) ? f : l, b = d ?? ra(x, u, t);
  Ue(l) ? Ue(f) || (b = b || typeof f == "number") : b = b || typeof l == "number";
  var C = function(T) {
    return io(T) ? T : (typeof T == "number" && (T = co(T)), b && typeof s == "number" ? Jr(T, s, !!c) : T);
  }, _ = po(C(l), C(f), !!b, E, D, p), I = _[0], M = I.numAsString, $ = I.formattedValue, k = _[1], V = function(T) {
    var R = T.target, G = T.key, X = R.selectionStart, Z = R.selectionEnd, K = R.value;
    if (K === void 0 && (K = ""), (G === "Backspace" || G === "Delete") && Z < u.length) {
      T.preventDefault();
      return;
    }
    if (X !== Z) {
      o(T);
      return;
    }
    G === "Backspace" && K[0] === "-" && X === u.length + 1 && r && Ve(R, 1), s && c && (G === "Backspace" && K[X - 1] === m ? (Ve(R, X - 1), T.preventDefault()) : G === "Delete" && K[X] === m && T.preventDefault()), y != null && y.includes(G) && K[X] === m && Ve(R, X + 1);
    var ee = a === !0 ? "," : a;
    G === "Backspace" && K[X - 1] === ee && Ve(R, X - 1), G === "Delete" && K[X] === ee && Ve(R, X + 1), o(T);
  }, W = function(T) {
    var R = M;
    if (R.match(/\d/g) || (R = ""), n || (R = Hi(R)), c && s && (R = Jr(R, s, c)), R !== M) {
      var G = Zr(R, e);
      k({
        formattedValue: G,
        value: R,
        floatValue: parseFloat(R)
      }, {
        event: T,
        source: st.event
      });
    }
    i(T);
  }, ce = function(T) {
    return T === m ? !0 : je(T);
  }, ne = function(T) {
    var R = T.currentValue, G = T.lastValue, X = T.formattedValue, Z = T.currentValueIndex, K = T.formattedValueIndex, ee = R[Z], ue = X[K], we = lo(G, R), ge = we.to, Ee = function(Ce) {
      return D(Ce).indexOf(".") + u.length;
    };
    return l === 0 && c && s && R[ge.start] === m && Ee(R) < Z && Ee(X) > K ? !1 : Z >= ge.start && Z < ge.end && y && y.includes(ee) && ue === m ? !0 : ee === ue;
  };
  return Object.assign(Object.assign({}, v), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: ce,
    isCharacterSame: ne,
    onValueChange: k,
    format: E,
    removeFormatting: D,
    getCaretBoundary: function(T) {
      return oa(T, e);
    },
    onKeyDown: V,
    onBlur: W
  });
}
function sa(e) {
  var t = aa(e);
  return F.createElement(mo, Object.assign({}, t));
}
function ca(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || fo(o, a), a += 1);
  return s.join("");
}
function la(e, t, r) {
  t === void 0 && (t = uo(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(m) {
    return n[m] === o;
  }, u = function(m, y) {
    for (var E = "", D = 0; D < m.length; D++)
      c(y + D) && je(m[D]) && (E += m[D]);
    return E;
  }, f = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var l = "", d = 0; d < e.length; d++)
      if (c(d))
        je(e[d]) && (l += e[d]);
      else if (e[d] !== n[d])
        return f(e);
    return l;
  }
  var p = s.substring(0, i.start), v = e.substring(a.start, a.end), h = s.substring(i.end);
  return "" + u(p, 0) + f(v) + u(h, i.end);
}
function ua(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, p) {
    var v = void 0;
    d === o && (a++, v = fo(n, a - 1), s === -1 && e[p] === v && (s = p)), c[p] = v;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== c[d];
  }, f = 0, l = i.length; f < l; f++)
    i[f] = f === s || u(f) || u(f - 1);
  return i[r.indexOf(o)] = !0, i;
}
function da(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function fa(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function pa(e) {
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = Re);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = Er(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  da(e);
  var u = function(v) {
    return ua(v, e);
  }, f = function(v) {
    var h = v.key, m = v.target, y = m.selectionStart, E = m.selectionEnd, D = m.value;
    if (y !== E) {
      n(v);
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
        for (var C = t.length; x < C && t[x] !== o; )
          x++;
        b = "right";
      }
      x = Pt(D, x, u(D), b);
    } else t[x] !== o && h !== "ArrowLeft" && h !== "ArrowRight" && (x = Pt(D, x + 1, u(D), "right"));
    x !== y && Ve(m, x), n(v);
  }, l = Ue(i) ? a : i, d = s ?? fa(l, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(v) {
      return ca(v, p);
    },
    removeFormatting: function(v, h) {
      return la(v, h, p);
    },
    getCaretBoundary: u,
    onKeyDown: f
  });
}
function ma(e) {
  var t = pa(e);
  return F.createElement(mo, Object.assign({}, t));
}
const ga = {
  sm: {
    height: "h-8",
    padding: "px-2",
    text: "text-sm",
    postfixPadding: "pr-2",
    innerTopPad: "pt-5"
  },
  md: {
    height: "h-10",
    padding: "px-3",
    text: "text-base",
    postfixPadding: "pr-3",
    innerTopPad: "pt-6"
  },
  lg: {
    height: "h-12",
    padding: "px-4",
    text: "text-lg",
    postfixPadding: "pr-4",
    innerTopPad: "pt-7"
  }
}, va = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, ha = ({
  size: e = "md",
  type: t,
  field: r,
  label: n,
  fieldState: o,
  postfix: i,
  labelClassName: a,
  className: s,
  numberWrapperClassname: c,
  format: u,
  wrapperClassName: f,
  decimalScale: l = 1,
  requiredMark: d,
  onFocus: p,
  onBlur: v,
  ...h
}) => {
  var k;
  const m = !!(o != null && o.error), y = ga[e], [E, D] = me(!1), x = (r == null ? void 0 : r.value) ?? (h == null ? void 0 : h.value) ?? (h == null ? void 0 : h.defaultValue), b = Qn(() => x === 0 ? !0 : !!x && String(x).length > 0, [x]), C = `w-full bg-white text-black placeholder:text-dark-gray ${y.text} font-normal rounded-xl border transition-[border,box-shadow] duration-200 outline-none border-gray focus:border-primary focus:shadow-[0_0_0_3px_rgba(20,162,184,0.10)] disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed`, _ = "!border-danger focus:shadow-[0_0_0_3px_rgba(254,72,69,0.12)]", I = () => n ? /* @__PURE__ */ oe(
    "span",
    {
      className: "pointer-events-none absolute left-3 -top-2 z-[1] inline-flex items-center px-1 rounded bg-white transition-all duration-200 " + (E || b ? "text-primary scale-90 -translate-y-1" : "text-dark-gray opacity-80 translate-y-3") + " " + (a || ""),
      children: [
        n,
        d ? /* @__PURE__ */ S("span", { className: "ml-0.5 text-danger", children: "*" }) : null
      ]
    }
  ) : null, M = (V) => {
    var W;
    D(!0), p == null || p(V), (W = h == null ? void 0 : h.onFocus) == null || W.call(h, V);
  }, $ = (V) => {
    var W;
    D(!1), v == null || v(V), (W = h == null ? void 0 : h.onBlur) == null || W.call(h, V);
  };
  return /* @__PURE__ */ oe("label", { className: `relative w-full ${f || ""}`, children: [
    /* @__PURE__ */ S(I, {}),
    u ? /* @__PURE__ */ S(
      ma,
      {
        format: u,
        onValueChange: (V) => {
          var W;
          r == null || r.onChange((W = V.value.replace("_", "")) == null ? void 0 : W.toString());
        },
        value: (k = r == null ? void 0 : r.value) == null ? void 0 : k.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: t,
        mask: "_",
        style: { fontSize: "16px" },
        className: `${C} ${y.padding} ${y.innerTopPad} ${m ? _ : ""} ${s || ""}`,
        "aria-invalid": m || void 0,
        onFocus: M,
        onBlur: $,
        ...h
      }
    ) : t === "number" ? /* @__PURE__ */ oe(
      "div",
      {
        className: `flex items-center justify-between rounded-xl border bg-white ${y.height} ${m ? "border-danger" : "border-gray"} ${c || ""}`,
        children: [
          /* @__PURE__ */ S(
            sa,
            {
              decimalScale: l,
              style: { fontSize: "16px" },
              onValueChange: (V) => {
                var W;
                return r == null ? void 0 : r.onChange(+((W = V.value.replace("_", "")) == null ? void 0 : W.toString()));
              },
              value: typeof (r == null ? void 0 : r.value) == "number" ? r == null ? void 0 : r.value : Number((r == null ? void 0 : r.value) ?? 0),
              className: `flex-1 bg-transparent border-0 ${y.padding} ${y.innerTopPad} ${y.text} placeholder:text-dark-gray focus:outline-none`,
              "aria-invalid": m || void 0,
              onFocus: M,
              onBlur: $,
              ...h,
              ...va.number
            }
          ),
          i ? /* @__PURE__ */ S(
            "span",
            {
              className: `${y.postfixPadding} ${y.text} text-dark-gray select-none`,
              children: i
            }
          ) : null
        ]
      }
    ) : /* @__PURE__ */ S(
      "input",
      {
        ...r,
        ...h,
        type: t,
        style: { fontSize: "16px" },
        className: `${C} ${y.padding} ${y.innerTopPad} ${m ? _ : ""} ${s || ""}`,
        "aria-invalid": m || void 0,
        onFocus: M,
        onBlur: $
      }
    ),
    /* @__PURE__ */ S("div", { className: "absolute w-full items-center flex justify-center flex-row min-h-[24px]", children: /* @__PURE__ */ S(Ri, { children: (o == null ? void 0 : o.error) && Object.keys(o.error).length > 0 && /* @__PURE__ */ S(
      ro.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ S(yr, { error: o.error })
      }
    ) }) })
  ] });
}, Hf = ha, ba = ({
  children: e,
  className: t
}) => /* @__PURE__ */ S(
  "div",
  {
    className: br(
      "bg-main rounded-2xl p-5 border-primary/10 border",
      t
    ),
    children: e
  }
), go = ba, ya = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = me(null);
  return /* @__PURE__ */ S(go, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ S("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ oe(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ S("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ S("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, zf = ya;
function vo(e, t) {
  const [r, n] = me(e);
  return ie(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Ea = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = me(!1), [a, s] = me(""), c = vo(a, 100), u = j(null);
  ie(() => {
    const l = (d) => {
      u.current && !u.current.contains(d.target) && i(!1);
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, []);
  const f = (l) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(l)) && (t == null ? void 0 : t.value.filter((d) => d !== l)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, l] || [l]
    );
  };
  return /* @__PURE__ */ oe("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ oe("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ S(
        at,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ S(
        "input",
        {
          ...n,
          ref: u,
          className: br(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && a || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var d;
              return (d = e.find((p) => p.value === l)) == null ? void 0 : d.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (l) => s(l.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ S("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var d;
      return /* @__PURE__ */ S(
        "li",
        {
          onClick: () => f(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ oe("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ S(at, { name: l.icon }),
            /* @__PURE__ */ S(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((d = t == null ? void 0 : t.value) == null ? void 0 : d.includes(l.value)) && "text-primary"}`,
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
}, qf = Ea, xa = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = me(r), s = vo(i, 300);
  return ie(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ oe("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ S(
      at,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ S(
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
}, Yf = xa, Da = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  wrapperClassName: i,
  labelClassName: a,
  parentClassName: s,
  formState: c,
  label: u,
  ...f
}) => {
  var d;
  return /* @__PURE__ */ oe("label", { className: `relative w-full ${i}`, children: [
    u && /* @__PURE__ */ S(
      "span",
      {
        className: `absolute left-[20px] -top-[10px] px-[6px] text-primary text-xs md:text-sm bg-white z-[1] ${a}`,
        children: u
      }
    ),
    /* @__PURE__ */ S(
      "div",
      {
        className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${s}`,
        children: /* @__PURE__ */ oe(
          "select",
          {
            ...n,
            ...f,
            defaultValue: "",
            className: `w-full ${o != null && o.error ? "!border-danger" : ""} cursor-pointer appearance-none bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
            children: [
              /* @__PURE__ */ S("option", { value: "", children: e }),
              t == null ? void 0 : t.map((p, v) => /* @__PURE__ */ S("option", { value: p.value, className: "text-black", children: p.label }, v))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ S("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((d = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : d.length) && /* @__PURE__ */ S(yr, { error: o == null ? void 0 : o.error }) })
  ] });
}, Kf = Da;
function ct(e) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ct(e);
}
function Na(e, t) {
  if (ct(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ct(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sa(e) {
  var t = Na(e, "string");
  return ct(t) == "symbol" ? t : t + "";
}
function wa(e, t, r) {
  return (t = Sa(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Qr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qr(Object(r), !0).forEach(function(n) {
      wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var tn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ht = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, rn = {
  INIT: "@@redux/INIT" + /* @__PURE__ */ Ht(),
  REPLACE: "@@redux/REPLACE" + /* @__PURE__ */ Ht(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ht();
  }
};
function Ca(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ia(e) {
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
  if (Aa(e)) return "date";
  if (Pa(e)) return "error";
  var r = Oa(e);
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
function Oa(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Pa(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Aa(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ke(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ia(e)), t;
}
function ho(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? pe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? pe(1) : "Expected the enhancer to be a function. Instead, received: '" + ke(r) + "'");
    return r(ho)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? pe(2) : "Expected the root reducer to be a function. Instead, received: '" + ke(e) + "'");
  var o = e, i = t, a = [], s = a, c = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? pe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(h) {
    if (typeof h != "function")
      throw new Error(process.env.NODE_ENV === "production" ? pe(4) : "Expected the listener to be a function. Instead, received: '" + ke(h) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? pe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return u(), s.push(h), function() {
      if (m) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? pe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, u();
        var E = s.indexOf(h);
        s.splice(E, 1), a = null;
      }
    };
  }
  function d(h) {
    if (!Ca(h))
      throw new Error(process.env.NODE_ENV === "production" ? pe(7) : "Actions must be plain objects. Instead, the actual type was: '" + ke(h) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof h.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? pe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? pe(9) : "Reducers may not dispatch actions.");
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
      throw new Error(process.env.NODE_ENV === "production" ? pe(10) : "Expected the nextReducer to be a function. Instead, received: '" + ke(h));
    o = h, d({
      type: rn.REPLACE
    });
  }
  function v() {
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
          throw new Error(process.env.NODE_ENV === "production" ? pe(11) : "Expected the observer to be an object. Instead, received: '" + ke(E) + "'");
        function D() {
          E.next && E.next(f());
        }
        D();
        var x = m(D);
        return {
          unsubscribe: x
        };
      }
    }, h[tn] = function() {
      return this;
    }, h;
  }
  return d({
    type: rn.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[tn] = v, n;
}
function nn(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function on(e, t) {
  if (typeof e == "function")
    return nn(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? pe(16) : "bindActionCreators expected an object or a function, but instead received: '" + ke(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = nn(o, t));
  }
  return r;
}
function bo() {
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
function _a() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? pe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(c) {
        return c(a);
      });
      return i = bo.apply(void 0, s)(o.dispatch), en(en({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ta(e) {
  e();
}
let $a = Ta;
const Va = () => $a, an = /* @__PURE__ */ Symbol.for("react-redux-context"), sn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ba() {
  var e;
  if (!L.createContext) return {};
  const t = (e = sn[an]) != null ? e : sn[an] = /* @__PURE__ */ new Map();
  let r = t.get(L.createContext);
  return r || (r = L.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(L.createContext, r)), r;
}
const yo = /* @__PURE__ */ Ba(), Ma = () => {
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
function Eo(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var sr = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function La() {
  if (cn) return H;
  cn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function D(b) {
    if (typeof b == "object" && b !== null) {
      var C = b.$$typeof;
      switch (C) {
        case t:
          switch (b = b.type, b) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case f:
                case v:
                case p:
                case a:
                  return b;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function x(b) {
    return D(b) === u;
  }
  return H.AsyncMode = c, H.ConcurrentMode = u, H.ContextConsumer = s, H.ContextProvider = a, H.Element = t, H.ForwardRef = f, H.Fragment = n, H.Lazy = v, H.Memo = p, H.Portal = r, H.Profiler = i, H.StrictMode = o, H.Suspense = l, H.isAsyncMode = function(b) {
    return x(b) || D(b) === c;
  }, H.isConcurrentMode = x, H.isContextConsumer = function(b) {
    return D(b) === s;
  }, H.isContextProvider = function(b) {
    return D(b) === a;
  }, H.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, H.isForwardRef = function(b) {
    return D(b) === f;
  }, H.isFragment = function(b) {
    return D(b) === n;
  }, H.isLazy = function(b) {
    return D(b) === v;
  }, H.isMemo = function(b) {
    return D(b) === p;
  }, H.isPortal = function(b) {
    return D(b) === r;
  }, H.isProfiler = function(b) {
    return D(b) === i;
  }, H.isStrictMode = function(b) {
    return D(b) === o;
  }, H.isSuspense = function(b) {
    return D(b) === l;
  }, H.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === l || b === d || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === p || b.$$typeof === a || b.$$typeof === s || b.$$typeof === f || b.$$typeof === m || b.$$typeof === y || b.$$typeof === E || b.$$typeof === h);
  }, H.typeOf = D, H;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function Fa() {
  return ln || (ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function D(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === i || N === o || N === l || N === d || typeof N == "object" && N !== null && (N.$$typeof === v || N.$$typeof === p || N.$$typeof === a || N.$$typeof === s || N.$$typeof === f || N.$$typeof === m || N.$$typeof === y || N.$$typeof === E || N.$$typeof === h);
    }
    function x(N) {
      if (typeof N == "object" && N !== null) {
        var ve = N.$$typeof;
        switch (ve) {
          case t:
            var O = N.type;
            switch (O) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case l:
                return O;
              default:
                var Ae = O && O.$$typeof;
                switch (Ae) {
                  case s:
                  case f:
                  case v:
                  case p:
                  case a:
                    return Ae;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var b = c, C = u, _ = s, I = a, M = t, $ = f, k = n, V = v, W = p, ce = r, ne = i, T = o, R = l, G = !1;
    function X(N) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(N) || x(N) === c;
    }
    function Z(N) {
      return x(N) === u;
    }
    function K(N) {
      return x(N) === s;
    }
    function ee(N) {
      return x(N) === a;
    }
    function ue(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function we(N) {
      return x(N) === f;
    }
    function ge(N) {
      return x(N) === n;
    }
    function Ee(N) {
      return x(N) === v;
    }
    function Ce(N) {
      return x(N) === p;
    }
    function Oe(N) {
      return x(N) === r;
    }
    function Ie(N) {
      return x(N) === i;
    }
    function Pe(N) {
      return x(N) === o;
    }
    function qe(N) {
      return x(N) === l;
    }
    z.AsyncMode = b, z.ConcurrentMode = C, z.ContextConsumer = _, z.ContextProvider = I, z.Element = M, z.ForwardRef = $, z.Fragment = k, z.Lazy = V, z.Memo = W, z.Portal = ce, z.Profiler = ne, z.StrictMode = T, z.Suspense = R, z.isAsyncMode = X, z.isConcurrentMode = Z, z.isContextConsumer = K, z.isContextProvider = ee, z.isElement = ue, z.isForwardRef = we, z.isFragment = ge, z.isLazy = Ee, z.isMemo = Ce, z.isPortal = Oe, z.isProfiler = Ie, z.isStrictMode = Pe, z.isSuspense = qe, z.isValidElementType = D, z.typeOf = x;
  }()), z;
}
process.env.NODE_ENV === "production" ? sr.exports = /* @__PURE__ */ La() : sr.exports = /* @__PURE__ */ Fa();
var Ga = sr.exports, Dr = Ga, ka = {
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
}, Wa = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ua = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Nr = {};
Nr[Dr.ForwardRef] = Ua;
Nr[Dr.Memo] = xo;
function un(e) {
  return Dr.isMemo(e) ? xo : Nr[e.$$typeof] || ka;
}
var ja = Object.defineProperty, Ha = Object.getOwnPropertyNames, dn = Object.getOwnPropertySymbols, za = Object.getOwnPropertyDescriptor, qa = Object.getPrototypeOf, fn = Object.prototype;
function Do(e, t, r) {
  if (typeof t != "string") {
    if (fn) {
      var n = qa(t);
      n && n !== fn && Do(e, n, r);
    }
    var o = Ha(t);
    dn && (o = o.concat(dn(t)));
    for (var i = un(e), a = un(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!Wa[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = za(t, c);
        try {
          ja(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ya = Do;
const pn = /* @__PURE__ */ Ra(Ya);
var cr = { exports: {} }, q = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function Ka() {
  if (mn) return q;
  mn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var y = m.$$typeof;
      switch (y) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case u:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case a:
                case c:
                case d:
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
  return q.ContextConsumer = a, q.ContextProvider = i, q.Element = e, q.ForwardRef = c, q.Fragment = r, q.Lazy = d, q.Memo = l, q.Portal = t, q.Profiler = o, q.StrictMode = n, q.Suspense = u, q.SuspenseList = f, q.isAsyncMode = function() {
    return !1;
  }, q.isConcurrentMode = function() {
    return !1;
  }, q.isContextConsumer = function(m) {
    return h(m) === a;
  }, q.isContextProvider = function(m) {
    return h(m) === i;
  }, q.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, q.isForwardRef = function(m) {
    return h(m) === c;
  }, q.isFragment = function(m) {
    return h(m) === r;
  }, q.isLazy = function(m) {
    return h(m) === d;
  }, q.isMemo = function(m) {
    return h(m) === l;
  }, q.isPortal = function(m) {
    return h(m) === t;
  }, q.isProfiler = function(m) {
    return h(m) === o;
  }, q.isStrictMode = function(m) {
    return h(m) === n;
  }, q.isSuspense = function(m) {
    return h(m) === u;
  }, q.isSuspenseList = function(m) {
    return h(m) === f;
  }, q.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
  }, q.typeOf = h, q;
}
var Y = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Xa() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, m = !1, y = !1, E = !1, D;
    D = Symbol.for("react.module.reference");
    function x(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || E || O === n || O === u || O === f || y || O === p || v || h || m || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === l || O.$$typeof === i || O.$$typeof === a || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === D || O.getModuleId !== void 0));
    }
    function b(O) {
      if (typeof O == "object" && O !== null) {
        var Ae = O.$$typeof;
        switch (Ae) {
          case e:
            var Ye = O.type;
            switch (Ye) {
              case r:
              case o:
              case n:
              case u:
              case f:
                return Ye;
              default:
                var w = Ye && Ye.$$typeof;
                switch (w) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return w;
                  default:
                    return Ae;
                }
            }
          case t:
            return Ae;
        }
      }
    }
    var C = a, _ = i, I = e, M = c, $ = r, k = d, V = l, W = t, ce = o, ne = n, T = u, R = f, G = !1, X = !1;
    function Z(O) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(O) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(O) {
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
      return b(O) === d;
    }
    function Oe(O) {
      return b(O) === l;
    }
    function Ie(O) {
      return b(O) === t;
    }
    function Pe(O) {
      return b(O) === o;
    }
    function qe(O) {
      return b(O) === n;
    }
    function N(O) {
      return b(O) === u;
    }
    function ve(O) {
      return b(O) === f;
    }
    Y.ContextConsumer = C, Y.ContextProvider = _, Y.Element = I, Y.ForwardRef = M, Y.Fragment = $, Y.Lazy = k, Y.Memo = V, Y.Portal = W, Y.Profiler = ce, Y.StrictMode = ne, Y.Suspense = T, Y.SuspenseList = R, Y.isAsyncMode = Z, Y.isConcurrentMode = K, Y.isContextConsumer = ee, Y.isContextProvider = ue, Y.isElement = we, Y.isForwardRef = ge, Y.isFragment = Ee, Y.isLazy = Ce, Y.isMemo = Oe, Y.isPortal = Ie, Y.isProfiler = Pe, Y.isStrictMode = qe, Y.isSuspense = N, Y.isSuspenseList = ve, Y.isValidElementType = x, Y.typeOf = b;
  }()), Y;
}
process.env.NODE_ENV === "production" ? cr.exports = /* @__PURE__ */ Ka() : cr.exports = /* @__PURE__ */ Xa();
var vn = cr.exports;
function Sr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function zt(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Sr(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Ja(e, t, r) {
  zt(e, "mapStateToProps"), zt(t, "mapDispatchToProps"), zt(r, "mergeProps");
}
const Za = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Qa(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function p(E, D) {
    return c = E, u = D, f = e(c, u), l = t(n, u), d = r(f, l, u), s = !0, d;
  }
  function v() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function h() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function m() {
    const E = e(c, u), D = !a(E, f);
    return f = E, D && (d = r(f, l, u)), d;
  }
  function y(E, D) {
    const x = !i(D, u), b = !o(E, c, D, u);
    return c = E, u = D, x && b ? v() : x ? h() : b ? m() : d;
  }
  return function(D, x) {
    return s ? y(D, x) : p(D, x);
  };
}
function es(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Eo(t, Za);
  const a = r(e, i), s = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && Ja(a, s, c), Qa(a, s, c, e, i);
}
function ts(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function rs(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function No(e, t, r) {
  rs(e) || Sr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function lr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function hn(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function So(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = hn(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = hn(u), u = i(s, c)), process.env.NODE_ENV !== "production" && No(u, o, t), u;
    }, i;
  };
}
function wr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function ns(e) {
  return e && typeof e == "object" ? lr((t) => (
    // @ts-ignore
    ts(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    So(e, "mapDispatchToProps")
  ) : wr(e, "mapDispatchToProps") : lr((t) => ({
    dispatch: t
  }));
}
function os(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    So(e, "mapStateToProps")
  ) : wr(e, "mapStateToProps") : lr(() => ({}));
}
function is(e, t, r) {
  return Be({}, r, e, t);
}
function as(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(c, u, f) {
      const l = e(c, u, f);
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && No(a, n, "mergeProps")), a;
    };
  };
}
function ss(e) {
  return e ? typeof e == "function" ? as(e) : wr(e, "mergeProps") : () => is;
}
function cs() {
  const e = Va();
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
const bn = {
  notify() {
  },
  get: () => []
};
function wo(e, t) {
  let r, n = bn, o = 0, i = !1;
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
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = cs());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = bn);
  }
  function d() {
    i || (i = !0, f());
  }
  function p() {
    i && (i = !1, l());
  }
  const v = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return v;
}
const ls = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", At = ls ? L.useLayoutEffect : L.useEffect;
function yn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function qt(e, t) {
  if (yn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !yn(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const us = ["reactReduxForwardedRef"];
let ds = Ma;
const fs = [null, null], ps = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ms(e, t, r) {
  At(() => e(...t), r);
}
function gs(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function vs(e, t, r, n, o, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const p = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let m, y;
    try {
      m = n(h, o.current);
    } catch (E) {
      y = E, d = E;
    }
    y || (d = null), m === i.current ? a.current || u() : (i.current = m, c.current = m, a.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function hs(e, t) {
  return e === t;
}
let En = !1;
function Co(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = hs,
  areOwnPropsEqual: i = qt,
  areStatePropsEqual: a = qt,
  areMergedPropsEqual: s = qt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = yo
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !En && (En = !0, Sr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = os(e), d = ns(t), p = ss(r), v = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !vn.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ps(m)}`);
    const y = m.displayName || m.name || "Component", E = `Connect(${y})`, D = {
      shouldHandleStateChanges: v,
      displayName: E,
      wrappedComponentName: y,
      WrappedComponent: m,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function x(_) {
      const [I, M, $] = L.useMemo(() => {
        const {
          reactReduxForwardedRef: N
        } = _, ve = Eo(_, us);
        return [_.context, N, ve];
      }, [_]), k = L.useMemo(() => I && I.Consumer && // @ts-ignore
      vn.isContextConsumer(/* @__PURE__ */ L.createElement(I.Consumer, null)) ? I : f, [I, f]), V = L.useContext(k), W = !!_.store && !!_.store.getState && !!_.store.dispatch, ce = !!V && !!V.store;
      if (process.env.NODE_ENV !== "production" && !W && !ce)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const ne = W ? _.store : V.store, T = ce ? V.getServerState : ne.getState, R = L.useMemo(() => es(ne.dispatch, D), [ne]), [G, X] = L.useMemo(() => {
        if (!v) return fs;
        const N = wo(ne, W ? void 0 : V.subscription), ve = N.notifyNestedSubs.bind(N);
        return [N, ve];
      }, [ne, W, V]), Z = L.useMemo(() => W ? V : Be({}, V, {
        subscription: G
      }), [W, V, G]), K = L.useRef(), ee = L.useRef($), ue = L.useRef(), we = L.useRef(!1);
      L.useRef(!1);
      const ge = L.useRef(!1), Ee = L.useRef();
      At(() => (ge.current = !0, () => {
        ge.current = !1;
      }), []);
      const Ce = L.useMemo(() => () => ue.current && $ === ee.current ? ue.current : R(ne.getState(), $), [ne, $]), Oe = L.useMemo(() => (ve) => G ? vs(
        v,
        ne,
        G,
        // @ts-ignore
        R,
        ee,
        K,
        we,
        ge,
        ue,
        X,
        ve
      ) : () => {
      }, [G]);
      ms(gs, [ee, K, we, $, ue, X]);
      let Ie;
      try {
        Ie = ds(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Oe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ce,
          T ? () => R(T(), $) : Ce
        );
      } catch (N) {
        throw Ee.current && (N.message += `
The error may be correlated with this previous error:
${Ee.current.stack}

`), N;
      }
      At(() => {
        Ee.current = void 0, ue.current = void 0, K.current = Ie;
      });
      const Pe = L.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ L.createElement(m, Be({}, Ie, {
          ref: M
        }))
      ), [M, m, Ie]);
      return L.useMemo(() => v ? /* @__PURE__ */ L.createElement(k.Provider, {
        value: Z
      }, Pe) : Pe, [k, Pe, Z]);
    }
    const C = L.memo(x);
    if (C.WrappedComponent = m, C.displayName = x.displayName = E, c) {
      const I = L.forwardRef(function($, k) {
        return /* @__PURE__ */ L.createElement(C, Be({}, $, {
          reactReduxForwardedRef: k
        }));
      });
      return I.displayName = E, I.WrappedComponent = m, pn(I, m);
    }
    return pn(C, m);
  };
}
function bs({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = L.useMemo(() => {
    const u = wo(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = L.useMemo(() => e.getState(), [e]);
  At(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || yo;
  return /* @__PURE__ */ L.createElement(c.Provider, {
    value: a
  }, r);
}
function ys(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Io(e, t) {
  var r = me(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = j(!0), o = j(r), i = n.current || !!(t && o.current.inputs && ys(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ie(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Es(e, t) {
  return Io(function() {
    return e;
  }, t);
}
var U = Io, P = Es, xs = process.env.NODE_ENV === "production", Yt = "Invariant failed";
function xn(e, t) {
  if (xs)
    throw new Error(Yt);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Yt, ": ").concat(r) : Yt;
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
}, Cr = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Dn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Ds = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Kt = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ir = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Kt : n, i = t.border, a = i === void 0 ? Kt : i, s = t.padding, c = s === void 0 ? Kt : s, u = Se(Cr(r, o)), f = Se(Dn(r, a)), l = Se(Dn(f, c));
  return {
    marginBox: u,
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? xn(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : xn()), o;
}, Ns = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, _t = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Ds(n, r);
  return Ir({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Rt = function(t, r) {
  return r === void 0 && (r = Ns()), _t(t, r);
}, Oo = function(t, r) {
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
  return Ir({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Po = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Oo(r, n);
}, Nn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Ss(e, t) {
  return !!(e === t || Nn(e) && Nn(t));
}
function ws(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Ss(e[r], t[r]))
      return !1;
  return !0;
}
function ae(e, t) {
  t === void 0 && (t = ws);
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
var lt = function(t) {
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
const Cs = process.env.NODE_ENV === "production", Is = /[ \t]{2,}/g, Os = /^[ \t]*/gm, Sn = (e) => e.replace(Is, " ").replace(Os, "").trim(), Ps = (e) => Sn(`
  %c@hello-pangea/dnd

  %c${Sn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), As = (e) => [Ps(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], _s = "__@hello-pangea/dnd-disable-dev-warnings";
function Ao(e, t) {
  Cs || typeof window < "u" && window[_s] || console[e](...As(t));
}
const Q = /* @__PURE__ */ Ao.bind(null, "warn"), ur = /* @__PURE__ */ Ao.bind(null, "error");
function Me() {
}
function Rs(e, t) {
  return {
    ...e,
    ...t
  };
}
function De(e, t, r) {
  const n = t.map((o) => {
    const i = Rs(r, o.options);
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
const Ts = process.env.NODE_ENV === "production", wn = "Invariant failed";
class ut extends Error {
}
ut.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw Ts ? new ut(wn) : new ut(`${wn}: ${t || ""}`);
}
class $s extends F.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Me, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Q(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof ut && (r.preventDefault(), process.env.NODE_ENV !== "production" && ur(o.message));
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
    if (t instanceof ut) {
      process.env.NODE_ENV !== "production" && ur(t.message), this.setState({});
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
const Vs = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Tt = (e) => e + 1, Bs = (e) => `
  You have lifted an item in position ${Tt(e.source.index)}
`, _o = (e, t) => {
  const r = e.droppableId === t.droppableId, n = Tt(e.index), o = Tt(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Ro = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Ms = (e) => {
  const t = e.destination;
  if (t)
    return _o(e.source, t);
  const r = e.combine;
  return r ? Ro(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Cn = (e) => `
  The item has returned to its starting position
  of ${Tt(e.index)}
`, Ls = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Cn(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${_o(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Ro(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Cn(e.source)}
  `;
}, Fs = {
  dragHandleUsageInstructions: Vs,
  onDragStart: Bs,
  onDragUpdate: Ms,
  onDragEnd: Ls
};
var Ot = Fs;
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
}, dt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), In = (e, t) => Math.min(...t.map((r) => dt(e, r))), To = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Gs = (e, t) => {
  const r = Se({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const bt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), On = (e) => [{
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
}], ks = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ws = (e, t) => t ? bt(e, t.scroll.diff.displacement) : e, Us = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, js = (e, t) => t && t.shouldClipSubject ? Gs(t.pageMarginBox, e) : Se(e);
var Ke = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Ws(e.marginBox, n), i = Us(o, r, t), a = js(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Or = (e, t) => {
  e.frame || (process.env.NODE_ENV, g());
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
const $o = /* @__PURE__ */ ae((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Vo = /* @__PURE__ */ ae((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Mt = /* @__PURE__ */ ae((e) => Object.values(e)), Hs = /* @__PURE__ */ ae((e) => Object.values(e));
var ze = /* @__PURE__ */ ae((e, t) => Hs(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Pr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Lt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Ft = /* @__PURE__ */ ae((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), zs = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Pr(o))
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
  const s = o.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const u = Ft(t, n);
  if (!c) {
    if (!u.length)
      return null;
    const p = u[u.length - 1];
    return a(p.descriptor.id);
  }
  const f = u.findIndex((p) => p.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find displaced item in set") : g());
  const l = f - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return a(d.descriptor.id);
}, Qe = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Bo = {
  point: se,
  value: 0
}, ft = {
  invisible: {},
  visible: {},
  all: []
}, qs = {
  displaced: ft,
  displacedBy: Bo,
  at: null
};
var Ys = qs, Ne = (e, t) => (r) => e <= r && r <= t, Mo = (e) => {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const c = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return c && u ? !0 : c && a || u && i;
  };
}, Ks = (e) => {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Ar = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Lo = {
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
var Xs = (e) => (t) => {
  const r = Ne(t.top, t.bottom), n = Ne(t.left, t.right);
  return (o) => e === Ar ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Js = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : se;
  return bt(e, r);
}, Zs = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, Qs = (e, t, r) => r(t)(e), _r = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Js(e, t) : e;
  return Zs(i, t, o) && Qs(i, r, o);
}, ec = (e) => _r({
  ...e,
  isVisibleThroughFrameFn: Mo
}), Fo = (e) => _r({
  ...e,
  isVisibleThroughFrameFn: Ks
}), tc = (e) => _r({
  ...e,
  isVisibleThroughFrameFn: Xs(e.destination.axis)
}), rc = (e, t, r) => {
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
function nc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Se(Cr(r, n));
}
function pt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, c) {
    const u = nc(c, r), f = c.descriptor.id;
    if (s.all.push(f), !ec({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const d = rc(f, i, o), p = {
      draggableId: f,
      shouldAnimate: d
    };
    return s.visible[f] = p, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function oc(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Pn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = oc(e, {
    inHomeList: t
  });
  return {
    displaced: ft,
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
function $t({
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
    return Pn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((v) => v.descriptor.index === a);
  if (!u)
    return Pn({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const f = Ft(e, t), l = t.indexOf(u), d = f.slice(l);
  return {
    displaced: pt({
      afterDragging: d,
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
var ic = ({
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
}, ac = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, sc = ({
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
  const u = a.at;
  if (u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot move in direction without previous impact location") : g()), u.type === "REORDER") {
    const l = ac({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return l == null ? null : $t({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const f = ic({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: c
  });
  return f == null ? null : $t({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, cc = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Fe(r, t) ? o ? se : Ze(n.point) : o ? n.point : se;
}, lc = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Lt(t);
  n || (process.env.NODE_ENV, g());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = cc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return le(i, a);
};
const Go = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, uc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Rr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, An = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.end] + Go(e, r), Rr(e, t.marginBox, r)), _n = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.start] - uc(e, r), Rr(e, t.marginBox, r)), dc = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => He(e.line, t.contentBox[e.start] + Go(e, r), Rr(e, t.contentBox, r));
var fc = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = ze(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return dc({
      axis: s,
      moveInto: n.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: u
  } = e, f = c.all[0];
  if (f) {
    const d = r[f];
    if (Fe(f, o))
      return _n({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const p = _t(d.page, u.point);
    return _n({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Fe(l.descriptor.id, o)) {
    const d = _t(l.page, Ze(o.displacedBy.point));
    return An({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return An({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, dr = (e, t) => {
  const r = e.frame;
  return r ? le(t, r.scroll.diff.displacement) : t;
};
const pc = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? fc({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : lc({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Gt = (e) => {
  const t = pc(e), r = e.droppable;
  return r ? dr(r, t) : t;
}, ko = (e, t) => {
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
function Rn(e, t) {
  return e.map((r) => t[r]);
}
function mc(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var gc = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = ko(t, le(t.scroll.current, o)), a = r.frame ? Or(r, le(r.frame.scroll.current, o)) : r, s = e.displaced, c = pt({
    afterDragging: Rn(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = pt({
    afterDragging: Rn(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [s, c, u];
  return s.all.forEach((v) => {
    const h = mc(v, d);
    if (h) {
      l[v] = h;
      return;
    }
    f[v] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: f,
      visible: l
    }
  };
}, vc = (e, t) => le(e.scroll.diff.displacement, t), Tr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = vc(r, e), o = he(n, t.page.borderBox.center);
  return le(t.client.borderBox.center, o);
}, Wo = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = he(r, e.page.borderBox.center), c = {
    target: bt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? tc(c) : Fo(c);
}, hc = ({
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
  const u = ze(r.descriptor.id, n), f = Qe(t, r), l = zs({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || sc({
    isMovingForward: e,
    isInHomeList: f,
    draggable: t,
    draggables: n,
    destination: r,
    insideDestination: u,
    previousImpact: o,
    viewport: i,
    afterCritical: c
  });
  if (!l)
    return null;
  const d = Gt({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: c
  });
  if (Wo({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Tr({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const v = he(d, a), h = gc({
    impact: l,
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
const de = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get clipped area from droppable") : g()), t;
};
var bc = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ne(i[a.start], i[a.end]), c = Mt(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Mo(o.frame)(de(f))).filter((f) => {
    const l = de(f);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const l = de(f), d = Ne(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((f, l) => {
    const d = de(f)[a.crossAxisStart], p = de(l)[a.crossAxisStart];
    return e ? d - p : p - d;
  }).filter((f, l, d) => de(f)[a.crossAxisStart] === de(d[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((f) => Ne(de(f)[a.start], de(f)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((f, l) => de(f)[a.start] - de(l)[a.start])[0] : c.sort((f, l) => {
    const d = In(t, On(de(f))), p = In(t, On(de(l)));
    return d !== p ? d - p : de(f)[a.start] - de(l)[a.start];
  })[0];
};
const Tn = (e, t) => {
  const r = e.page.borderBox.center;
  return Fe(e.descriptor.id, t) ? he(r, t.displacedBy.point) : r;
}, yc = (e, t) => {
  const r = e.page.borderBox;
  return Fe(e.descriptor.id, t) ? bt(r, Ze(t.displacedBy.point)) : r;
};
var Ec = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => Fo({
  target: yc(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = dt(e, dr(r, Tn(a, o))), u = dt(e, dr(r, Tn(s, o)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, yt = /* @__PURE__ */ ae(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: He(t.line, n)
  };
});
const xc = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return He(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], c = ze(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return c <= 0 ? null : He(n.line, c);
}, Uo = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), jo = (e, t, r) => {
  const n = e.frame;
  Qe(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g());
  const o = yt(e.axis, t.displaceBy).point, i = xc(e, o, r), a = {
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
  const s = i ? le(n.scroll.max, i) : n.scroll.max, c = Uo(n, s), u = Ke({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: u,
    frame: c
  };
}, Dc = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot remove placeholder form subject when there was none") : g());
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
  n || (process.env.NODE_ENV !== "production" ? g(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : g());
  const o = Uo(r, n), i = Ke({
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
var Nc = ({
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
      displaced: ft,
      displacedBy: Bo,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = Gt({
      impact: l,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), p = Qe(n, i) ? i : jo(i, n, o);
    return Wo({
      draggable: n,
      destination: p,
      newPageBorderBoxCenter: d,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || c ? l : l + 1;
  })(), f = yt(i.axis, n.displaceBy);
  return $t({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: ft,
    index: u
  });
}, Sc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = bc({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const u = ze(c.descriptor.id, o), f = Ec({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }), l = Nc({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: o,
    moveRelativeTo: f,
    insideDestination: u,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const d = Gt({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Tr({
      pageBorderBoxCenter: d,
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
const wc = (e, t) => {
  const r = be(e);
  return r ? t[r] : null;
};
var Cc = ({
  state: e,
  type: t
}) => {
  const r = wc(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return s ? hc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Sc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    isOver: i,
    draggables: l,
    droppables: d,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function We(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ho(e) {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function Ic(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Oc({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = He(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: dt(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Pc({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Mt(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Ic(e, i))
      return !1;
    if (Ho(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], u = e[a.crossAxisEnd], f = Ne(i[a.crossAxisStart], i[a.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Oc({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const zo = (e, t) => Se(bt(e, t));
var Ac = (e, t) => {
  const r = e.frame;
  return r ? zo(t, r.scroll.diff.value) : t;
};
function qo({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function _c({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Rc = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = yt(r.axis, t.displaceBy), u = c.value, f = e[s.start], l = e[s.end], p = Ft(t, n).find((h) => {
    const m = h.descriptor.id, y = h.page.borderBox.center[s.line], E = Fe(m, a), D = qo({
      displaced: o,
      id: m
    });
    return E ? D ? l <= y : f < y - u : D ? l <= y + u : f < y;
  }) || null, v = _c({
    draggable: t,
    closest: p,
    inHomeList: Qe(t, r)
  });
  return $t({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: c,
    index: v
  });
};
const Tc = 4;
var $c = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = yt(n.axis, e.displaceBy), c = s.value, u = t[a.start], f = t[a.end], d = Ft(e, o).find((v) => {
    const h = v.descriptor.id, m = v.page.borderBox, E = m[a.size] / Tc, D = Fe(h, i), x = qo({
      displaced: r.displaced,
      id: h
    });
    return D ? x ? f > m[a.start] + E && f < m[a.end] - E : u > m[a.start] - c + E && u < m[a.end] - c - E : x ? f > m[a.start] + c + E && f < m[a.end] + c - E : u > m[a.start] + E && u < m[a.end] - E;
  });
  return d ? {
    displacedBy: s,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: n.descriptor.id
      }
    }
  } : null;
}, Yo = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = zo(t.page.borderBox, e), c = Pc({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!c)
    return Ys;
  const u = n[c], f = ze(u.descriptor.id, r), l = Ac(u, s);
  return $c({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: f,
    afterCritical: a
  }) || Rc({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, $r = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Vc = ({
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
  const a = Dc(i);
  return $r(r, a);
};
var Bc = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Vc({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = be(o);
  if (!a)
    return i;
  const s = r[a];
  if (Qe(e, s) || s.subject.withPlaceholder)
    return i;
  const c = jo(s, e, t);
  return $r(i, c);
}, nt = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, u = he(c, e.initial.client.selection), f = {
    offset: u,
    selection: c,
    borderBoxCenter: le(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: le(f.selection, a.scroll.current),
    borderBoxCenter: le(f.borderBoxCenter, a.scroll.current),
    offset: le(f.offset, a.scroll.diff.value)
  }, d = {
    client: f,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: d
    };
  const p = s.draggables[e.critical.draggable.id], v = o || Yo({
    pageOffset: l.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Bc({
    draggable: p,
    impact: v,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: d,
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
function Mc(e, t) {
  return e.map((r) => t[r]);
}
var Ko = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Mc(i.all, r), s = pt({
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
}, Xo = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = Gt({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Tr({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, Jo = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, g());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], u = be(n);
  u || (process.env.NODE_ENV !== "production" ? g(!1, "Must be over a destination in SNAP movement mode") : g());
  const f = s[u], l = Ko({
    impact: n,
    viewport: o,
    destination: f,
    draggables: a
  }), d = Xo({
    impact: l,
    draggable: c,
    droppable: f,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return nt({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Lc = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Zo = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = yt(t.axis, e.displaceBy), i = ze(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Expected draggable to be inside home list") : g());
  const s = i.slice(a + 1), c = s.reduce((d, p) => (d[p.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: pt({
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
        destination: Lc(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Fc = (e, t) => ({
  draggables: e.draggables,
  droppables: $r(e.droppables, t)
});
const Et = (e) => {
  process.env.NODE_ENV;
}, xt = (e) => {
  process.env.NODE_ENV;
};
var Gc = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = _t(e.client, t), o = Rt(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, kc = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g()), t;
}, Wc = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = kc(a).scroll.diff.value, u = le(n, c);
    return Gc({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Uc = ({
  state: e,
  published: t
}) => {
  Et();
  const r = t.modified.map((y) => {
    const E = e.dimensions.droppables[y.droppableId];
    return Or(E, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...$o(r)
  }, o = Vo(Wc({
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
  }, s = be(e.impact), c = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = Zo({
    draggable: u,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : l, v = Yo({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: d
  });
  xt();
  const h = {
    ...e,
    phase: "DRAGGING",
    impact: v,
    onLiftImpact: l,
    dimensions: a,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? h : {
    ...h,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const fr = (e) => e.movementMode === "SNAP", Xt = (e, t, r) => {
  const n = Fc(e.dimensions, t);
  return !fr(e) || r ? nt({
    state: e,
    dimensions: n
  }) : Jo({
    state: e,
    dimensions: n
  });
};
function Jt(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const $n = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var jc = (e = $n, t) => {
  if (t.type === "FLUSH")
    return {
      ...$n,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "INITIAL_PUBLISH must come after a IDLE phase") : g());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: se
    }, f = {
      client: u,
      page: {
        selection: le(u.selection, o.scroll.initial),
        borderBoxCenter: le(u.selection, o.scroll.initial),
        offset: le(u.selection, o.scroll.diff.value)
      }
    }, l = Mt(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = Zo({
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
      impact: d,
      afterCritical: p,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `Collection cannot start from phase ${e.phase}`) : g()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g()), Uc({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      client: r
    } = t.payload;
    return Le(r, e.current.client.selection) ? e : nt({
      state: e,
      clientSelection: r,
      impact: fr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Jt(e);
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} not permitted in phase ${e.phase}`) : g());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = Or(o, n);
    return Xt(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : g()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? g(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : g());
    const i = {
      ...o,
      isEnabled: n
    };
    return Xt(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Attempting to move in an unsupported phase ${e.phase}`) : g());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : g()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? g(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : g());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return Xt(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot move by window in phase ${e.phase}`) : g()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? g(!1, "Window scrolling is currently not supported for fixed lists") : g());
    const r = t.payload.newScroll;
    if (Le(e.viewport.scroll.current, r))
      return Jt(e);
    const n = ko(e.viewport, r);
    return fr(e) ? Jo({
      state: e,
      viewport: n
    }) : nt({
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} received while not in DRAGGING phase`) : g());
    const r = Cc({
      state: e,
      type: t.type
    });
    return r ? nt({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? g(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : g()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot animate drop from phase ${e.phase}`) : g()), {
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
const Hc = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), zc = (e) => ({
  type: "LIFT",
  payload: e
}), qc = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Yc = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Kc = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Xc = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Jc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Zc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Qo = (e) => ({
  type: "MOVE",
  payload: e
}), Qc = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), el = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), tl = () => ({
  type: "MOVE_UP",
  payload: null
}), rl = () => ({
  type: "MOVE_DOWN",
  payload: null
}), nl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), ol = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Vr = () => ({
  type: "FLUSH",
  payload: null
}), il = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Br = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), ei = (e) => ({
  type: "DROP",
  payload: e
}), al = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ti = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function sl(e) {
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
function cl(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ze(e.droppable.id, t.draggables);
    sl(r);
  }
}
var ll = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(Br({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), r(Vr()), r(Hc({
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
    dimensions: d,
    viewport: p
  } = e.startPublishing(f);
  cl(l, d), r(qc({
    critical: l,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, ul = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Mr = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, mt = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, ri = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ge = `${ri.outOfTheWay}s ${Mr.outOfTheWay}`, ot = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Mr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, Vn = (e) => Le(e, se) ? void 0 : `translate(${e.x}px, ${e.y}px)`, pr = {
  moveTo: Vn,
  drop: (e, t) => {
    const r = Vn(e);
    if (r)
      return t ? `${r} scale(${mt.scale.drop})` : r;
  }
}, {
  minDropTime: mr,
  maxDropTime: ni
} = ri, dl = ni - mr, Bn = 1500, fl = 0.6;
var pl = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = dt(e, t);
  if (n <= 0)
    return mr;
  if (n >= Bn)
    return ni;
  const o = n / Bn, i = mr + dl * o, a = r === "CANCEL" ? i * fl : i;
  return Number(a.toFixed(2));
}, ml = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = be(e), c = s ? a[s] : null, u = a[t.descriptor.droppableId], f = Xo({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return he(f, t.client.borderBox.center);
}, gl = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Ko({
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
    displaced: ft
  },
  didDropInsideDroppable: !0
};
const vl = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(al({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? g(!1, "A DROP action occurred while DROP_PENDING and still waiting") : g()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot drop in phase: ${o.phase}`) : g());
  const s = o.critical, c = o.dimensions, u = c.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: l
  } = gl({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = l ? Pr(f) : null, p = l ? Lt(f) : null, v = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: v,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: p
  }, m = ml({
    impact: f,
    draggable: u,
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
    t(Br({
      completed: y
    }));
    return;
  }
  const D = pl({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(il({
    newHomeClientOffset: m,
    dropDuration: D,
    completed: y
  }));
};
var hl = vl, oi = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function bl(e) {
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
function yl({
  onWindowScroll: e
}) {
  function t() {
    e(oi());
  }
  const r = lt(t), n = bl(r);
  let o = Me;
  function i() {
    return o !== Me;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start scroll listener when already active") : g()), o = De(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop scroll listener when not active") : g()), r.cancel(), o(), o = Me;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const El = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", xl = (e) => {
  const t = yl({
    onWindowScroll: (r) => {
      e.dispatch(Qc({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && El(n) && t.stop(), r(n);
  };
};
var Dl = xl, Nl = (e) => {
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
}, Sl = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? g(!1, "Could not find timer") : g());
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
const wl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Cl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Il = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, et = (e, t) => {
  Et(), t(), xt();
}, St = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Zt(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Nl(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Ol = (e, t) => {
  const r = Sl();
  let n = null;
  const o = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : g()), et("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g()), et("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(St(l, d));
    });
  }, a = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g());
    const p = St(l, d);
    n = {
      mode: d,
      lastCritical: l,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      et("onDragStart", () => Zt(e().onDragStart, p, t, Ot.onDragStart));
    });
  }, s = (l, d) => {
    const p = Pr(d), v = Lt(d);
    n || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragMove when onDragStart has not been called") : g());
    const h = !Il(l, n.lastCritical);
    h && (n.lastCritical = l);
    const m = !wl(n.lastLocation, p);
    m && (n.lastLocation = p);
    const y = !Cl(n.lastCombine, v);
    if (y && (n.lastCombine = v), !h && !m && !y)
      return;
    const E = {
      ...St(l, n.mode),
      combine: v,
      destination: p
    };
    r.add(() => {
      et("onDragUpdate", () => Zt(e().onDragUpdate, E, t, Ot.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? g(!1, "Can only flush responders while dragging") : g()), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : g()), n = null, et("onDragEnd", () => Zt(e().onDragEnd, l, t, Ot.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: a,
    update: s,
    flush: c,
    drop: u,
    abort: () => {
      if (!n)
        return;
      const l = {
        ...St(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, Pl = (e, t) => {
  const r = Ol(e, t);
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
const Al = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(Br({
    completed: n.completed
  }));
};
var _l = Al;
const Rl = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ti());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = De(window, [a]);
    });
  };
};
var Tl = Rl, $l = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Vl = (e) => {
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
const Bl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Ml = (e) => (t) => (r) => (n) => {
  if (Bl(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : g()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Ll = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(ei({
    reason: n.reason
  })));
};
var Fl = Ll;
const Gl = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? /* @__PURE__ */ window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : bo;
var kl = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => ho(jc, Gl(_a(ul(r), $l(e), ll(e), hl, _l, Tl, Fl, Ml(i), Dl, Vl(t), Pl(n, o))));
const Qt = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Wl({
  registry: e,
  callbacks: t
}) {
  let r = Qt(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, Et();
      const {
        additions: c,
        removals: u,
        modified: f
      } = r, l = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(se)).sort((v, h) => v.descriptor.index - h.descriptor.index), d = Object.keys(f).map((v) => {
        const m = e.droppable.getById(v).callbacks.getScrollWhileDragging();
        return {
          droppableId: v,
          scroll: m
        };
      }), p = {
        additions: l,
        removals: Object.keys(u),
        modified: d
      };
      r = Qt(), xt(), t.publish(p);
    }));
  };
  return {
    add: (c) => {
      const u = c.descriptor.id;
      r.additions[u] = c, r.modified[c.descriptor.droppableId] = !0, r.removals[u] && delete r.removals[u], o();
    },
    remove: (c) => {
      const u = c.descriptor;
      r.removals[u.id] = !0, r.modified[u.droppableId] = !0, r.additions[u.id] && delete r.additions[u.id], o();
    },
    stop: () => {
      n && (cancelAnimationFrame(n), n = null, r = Qt());
    }
  };
}
var ii = ({
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
}, ai = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.documentElement") : g()), e;
}, si = () => {
  const e = ai();
  return ii({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Ul = () => {
  const e = oi(), t = si(), r = e.y, n = e.x, o = ai(), i = o.clientWidth, a = o.clientHeight, s = n + i, c = r + a;
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
}, jl = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Et();
  const n = Ul(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: Vo(s),
    droppables: $o(a)
  };
  return xt(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function Mn(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Q(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Hl = (e, t) => {
  let r = null;
  const n = Wl({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, p) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : g()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, i = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : g()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, a = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : g()), t.updateDroppableScroll({
      id: d,
      newScroll: p
    }));
  }, s = (d, p) => {
    r && e.droppable.getById(d).callbacks.scroll(p);
  }, c = () => {
    if (!r)
      return;
    n.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((p) => p.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? g(!1, "Should only be subscribed when a collection is occurring") : g());
    const p = r.critical.draggable;
    d.type === "ADDITION" && Mn(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && Mn(e, p, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start capturing critical dimensions as there is already a collection") : g());
      const p = e.draggable.getById(d.draggableId), v = e.droppable.getById(p.descriptor.droppableId), h = {
        draggable: p.descriptor,
        droppable: v.descriptor
      }, m = e.subscribe(u);
      return r = {
        critical: h,
        unsubscribe: m
      }, jl({
        critical: h,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, ci = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", zl = (e) => {
  window.scrollBy(e.x, e.y);
};
const ql = /* @__PURE__ */ ae((e) => Mt(e).filter((t) => !(!t.isEnabled || !t.frame))), Yl = (e, t) => ql(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), Ho(n.frame.pageMarginBox)(e))) || null;
var Kl = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Yl(e, r);
};
const gt = {
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
var Xl = (e, t, r = () => gt) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, li = ({
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
}, Lr = 1, Jl = (e, t, r = () => gt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Lr;
  const i = 1 - li({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, Zl = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return Lr;
  const f = li({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, Ln = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = Jl(e, t, o);
  return i === 0 ? 0 : n ? Math.max(Zl(i, r, o), Lr) : i;
}, Fn = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Xl(e, n, i);
  return t[n.end] < t[n.start] ? Ln({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Ln({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Ql = ({
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
const eu = /* @__PURE__ */ To((e) => e === 0 ? 0 : e);
var ui = ({
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
  }, s = Fn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Ar,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Fn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Lo,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = eu({
    x: c,
    y: s
  });
  if (Le(u, se))
    return null;
  const f = Ql({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? Le(f, se) ? null : f : null;
};
const tu = /* @__PURE__ */ To((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Fr = /* @__PURE__ */ (() => {
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
})(), di = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = tu(r), i = Fr({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Gr = (e, t) => di({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), ru = (e, t) => {
  if (!Gr(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Fr({
    current: n,
    max: r,
    change: t
  });
}, kr = (e, t) => {
  const r = e.frame;
  return r ? di({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, nu = (e, t) => {
  const r = e.frame;
  return !r || !kr(e, t) ? null : Fr({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var ou = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = ui({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Gr(e, a) ? a : null;
}, iu = ({
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
  const s = ui({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && kr(e, s) ? s : null;
}, Gn = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = ou({
      dragStartTime: t,
      viewport: l,
      subject: c,
      center: a,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (d) {
      n(d);
      return;
    }
  }
  const u = Kl({
    center: a,
    destination: be(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = iu({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(u.descriptor.id, f);
}, au = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => gt
}) => {
  const n = lt(e), o = lt(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fluid scroll if not dragging") : g());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: l
    } = i;
    Gn({
      state: u,
      scrollWindow: n,
      scrollDroppable: o,
      dragStartTime: l,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      Et(), i && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot start auto scrolling when already started") : g());
      const f = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      Gn({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: l
      }, xt(), l && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, su = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, c) => {
    const u = le(s.current.client.selection, c);
    e({
      client: u
    });
  }, o = (s, c) => {
    if (!kr(s, c))
      return c;
    const u = nu(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const f = he(c, u);
    return t(s.descriptor.id, f), he(c, f);
  }, i = (s, c, u) => {
    if (!s || !Gr(c, u))
      return u;
    const f = ru(c, u);
    if (!f)
      return r(u), null;
    const l = he(u, f);
    return r(l), he(u, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const u = be(s.impact);
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g());
    const f = o(s.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = s.viewport, d = i(s.isWindowScrollAllowed, l, f);
    d && n(s, d);
  };
}, cu = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = au({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = su({
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
})(), gr = /* @__PURE__ */ (() => {
  const e = `${Xe}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), lu = /* @__PURE__ */ (() => {
  const e = `${Xe}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), kn = {
  contextId: `${Xe}-scroll-container-context-id`
}, uu = (e) => (t) => `[${t}="${e}"]`, tt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), du = "pointer-events: none;";
var fu = (e) => {
  const t = uu(e), r = (() => {
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
        dragging: du,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${ot.outOfTheWay};
    `;
    return {
      selector: t(gr.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(lu.contextId),
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
    always: tt(a, "always"),
    resting: tt(a, "resting"),
    dragging: tt(a, "dragging"),
    dropAnimating: tt(a, "dropAnimating"),
    userCancel: tt(a, "userCancel")
  };
};
const pu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? eo : ie;
var ye = pu;
const er = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, Wn = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function mu(e, t) {
  const r = U(() => fu(e), [e]), n = j(null), o = j(null), i = P(ae((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), d.textContent = l;
  }), []), a = P((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), d.textContent = l;
  }, []);
  ye(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const l = Wn(t), d = Wn(t);
    return n.current = l, o.current = d, l.setAttribute(`${Xe}-always`, e), d.setAttribute(`${Xe}-dynamic`, e), er().appendChild(l), er().appendChild(d), a(r.always), i(r.resting), () => {
      const p = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), er().removeChild(h), v.current = null;
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
  }, [i, r.dropAnimating, r.userCancel]), u = P(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return U(() => ({
    dragging: s,
    dropping: c,
    resting: u
  }), [s, c, u]);
}
function fi(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var pi = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Dt(e) {
  return e instanceof pi(e).HTMLElement;
}
function mi(e, t) {
  const r = `[${Je.contextId}="${e}"]`, n = fi(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Q(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Je.draggableId) === t);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Q("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Q(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function gu(e) {
  const t = j({}), r = j(null), n = j(null), o = j(!1), i = P(function(d, p) {
    const v = {
      id: d,
      focus: p
    };
    return t.current[d] = v, function() {
      const m = t.current;
      m[d] !== v && delete m[d];
    };
  }, []), a = P(function(d) {
    const p = mi(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = P(function(d, p) {
    r.current === d && (r.current = p);
  }, []), c = P(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = P(function(d) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Je.draggableId) === d && (r.current = d);
  }, []);
  return ye(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), U(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, u, c, s]);
}
function vu() {
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
    t.length && t.forEach((d) => d(l));
  }
  function o(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const d = o(l);
    return d || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find draggable entry with id [${l}]`) : g()), d;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, n({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, d) => {
      const p = e.draggables[d.descriptor.id];
      p && p.uniqueId === l.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const d = l.descriptor.id, p = o(d);
      p && l.uniqueId === p.uniqueId && (delete e.draggables[d], e.droppables[l.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: o,
    exists: (l) => !!o(l),
    getAllByType: (l) => Object.values(e.draggables).filter((d) => d.descriptor.type === l)
  };
  function s(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const d = s(l);
    return d || (process.env.NODE_ENV !== "production" ? g(!1, `Cannot find droppable entry with id [${l}]`) : g()), d;
  }
  const u = {
    register: (l) => {
      e.droppables[l.descriptor.id] = l;
    },
    unregister: (l) => {
      const d = s(l.descriptor.id);
      d && l.uniqueId === d.uniqueId && delete e.droppables[l.descriptor.id];
    },
    getById: c,
    findById: s,
    exists: (l) => !!s(l),
    getAllByType: (l) => Object.values(e.droppables).filter((d) => d.descriptor.type === l)
  };
  function f() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: u,
    subscribe: r,
    clean: f
  };
}
function hu() {
  const e = U(vu, []);
  return ie(() => function() {
    F.version.startsWith("16") || F.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Wr = /* @__PURE__ */ F.createContext(null), vt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g()), e;
};
const bu = {
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
var yu = bu;
const Eu = (e) => `rfd-announcement-${e}`;
function xu(e) {
  const t = U(() => Eu(e), [e]), r = j(null);
  return ie(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Be(i.style, yu), vt().appendChild(i), function() {
      setTimeout(function() {
        const c = vt();
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
let Du = 0;
const gi = {
  separator: "::"
};
function Nu(e, t = gi) {
  return U(() => `${e}${t.separator}${Du++}`, [t.separator, e]);
}
function Su(e, t = gi) {
  const r = F.useId();
  return U(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Ur = "useId" in F ? Su : Nu;
function wu({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function Cu({
  contextId: e,
  text: t
}) {
  const r = Ur("hidden-text", {
    separator: "-"
  }), n = U(() => wu({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ie(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", vt().appendChild(i), function() {
      const s = vt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var kt = /* @__PURE__ */ F.createContext(null), Iu = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Ou = /(\d+)\.(\d+)\.(\d+)/, Un = (e) => {
  const t = Ou.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Pu = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Au = (e, t) => {
  const r = Un(e), n = Un(t);
  Pu(r, n) || process.env.NODE_ENV !== "production" && Q(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const tr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var _u = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Q(`
      No <!doctype html> found.

      ${tr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Q(`
      Unexpected <!doctype> found: (${t.name})

      ${tr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Q(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${tr}
    `);
};
function jr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Nt(e, t) {
  jr(() => {
    ie(() => {
      try {
        e();
      } catch (r) {
        ur(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Ru() {
  Nt(() => {
    Au(Iu.react, F.version), _u(document);
  }, []);
}
function Hr(e) {
  const t = j(e);
  return ie(() => {
    t.current = e;
  }), t;
}
function Tu() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot claim lock as it is already claimed") : g());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot release lock when there is no lock") : g()), e = null;
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
function ht(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const $u = 9, Vu = 13, zr = 27, vi = 32, Bu = 33, Mu = 34, Lu = 35, Fu = 36, Gu = 37, ku = 38, Wu = 39, Uu = 40, ju = {
  [Vu]: !0,
  [$u]: !0
};
var hi = (e) => {
  ju[e.keyCode] && e.preventDefault();
};
const Hu = /* @__PURE__ */ (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Wt = Hu;
const bi = 0, jn = 5;
function zu(e, t) {
  return Math.abs(t.x - e.x) >= jn || Math.abs(t.y - e.y) >= jn;
}
const Hn = {
  type: "IDLE"
};
function qu({
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
      if (i !== bi)
        return;
      const c = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot be IDLE") : g());
      const f = u.point;
      if (!zu(f, c))
        return;
      o.preventDefault();
      const l = u.actions.fluidLift(c);
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
      if (o.keyCode === zr) {
        o.preventDefault(), e();
        return;
      }
      hi(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase") : g()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Wt,
    fn: e
  }];
}
function Yu(e) {
  const t = j(Hn), r = j(Me), n = U(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== bi || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const d = e.findClosestDraggableId(l);
      if (!d)
        return;
      const p = e.tryGetLock(d, a, {
        sourceEvent: l
      });
      if (!p)
        return;
      l.preventDefault();
      const v = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(p, v);
    }
  }), [e]), o = U(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (f) => {
      if (f.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(f);
      if (!l)
        return;
      const d = e.findOptionsForDraggable(l);
      d && (d.shouldRespectForcePress || e.canGetLock(l) && f.preventDefault());
    }
  }), [e]), i = P(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = De(window, [o, n], l);
  }, [o, n]), a = P(() => {
    t.current.type !== "IDLE" && (t.current = Hn, r.current(), i());
  }, [i]), s = P(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = P(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = qu({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = De(window, d, l);
  }, [s, a]), u = P(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g()), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  ye(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function Ku() {
}
const Xu = {
  [Mu]: !0,
  [Bu]: !0,
  [Fu]: !0,
  [Lu]: !0
};
function Ju(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === zr) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === vi) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Uu) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === ku) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Wu) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Gu) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Xu[o.keyCode]) {
        o.preventDefault();
        return;
      }
      hi(o);
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
    eventName: Wt,
    fn: r
  }];
}
function Zu(e) {
  const t = j(Ku), r = U(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== vi)
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
      const u = s.snapLift();
      t.current();
      function f() {
        c || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop capturing a keyboard drag when not capturing") : g()), c = !1, t.current(), n();
      }
      t.current = De(window, Ju(u, f), {
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
const rr = {
  type: "IDLE"
}, Qu = 120, ed = 0.15;
function td({
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
      r.keyCode === zr && r.preventDefault(), e();
    }
  }, {
    eventName: Wt,
    fn: e
  }];
}
function rd({
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
      o.type === "IDLE" && (process.env.NODE_ENV, g());
      const i = n.touches[0];
      if (!i || !(i.force >= ed))
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
    eventName: Wt,
    fn: e
  }];
}
function nd(e) {
  const t = j(rr), r = j(Me), n = P(function() {
    return t.current;
  }, []), o = P(function(p) {
    t.current = p;
  }, []), i = U(() => ({
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
        clientX: y,
        clientY: E
      } = m, D = {
        x: y,
        y: E
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
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(rr), r.current(), a());
  }, [a, o]), c = P(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = P(function() {
    const p = {
      capture: !0,
      passive: !1
    }, v = {
      cancel: c,
      completed: s,
      getPhase: n
    }, h = De(window, rd(v), p), m = De(window, td(v), p);
    r.current = function() {
      h(), m();
    };
  }, [c, n, s]), f = P(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, `Cannot start dragging from phase ${p.type}`) : g());
    const v = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [n, o]), l = P(function(p, v) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g());
    const h = setTimeout(f, Qu);
    o({
      type: "PENDING",
      point: v,
      actions: p,
      longPressTimerId: h
    }), u();
  }, [u, n, o, f]);
  ye(function() {
    return a(), function() {
      r.current();
      const v = n();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(rr));
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
function od(e) {
  jr(() => {
    const t = Hr(e);
    Nt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const id = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function yi(e, t) {
  if (t == null)
    return !1;
  if (id.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : yi(e, t.parentElement);
}
function ad(e, t) {
  const r = t.target;
  return Dt(r) ? yi(e, r) : !1;
}
var sd = (e) => Se(e.getBoundingClientRect()).center;
function cd(e) {
  return e instanceof pi(e).Element;
}
const ld = /* @__PURE__ */ (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function Ei(e, t) {
  return e == null ? null : e[ld](t) ? e : Ei(e.parentElement, t);
}
function ud(e, t) {
  return e.closest ? e.closest(t) : Ei(e, t);
}
function dd(e) {
  return `[${Je.contextId}="${e}"]`;
}
function fd(e, t) {
  const r = t.target;
  if (!cd(r))
    return process.env.NODE_ENV !== "production" && Q("event.target must be a Element"), null;
  const n = dd(e), o = ud(r, n);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Q("drag handle must be a HTMLElement"), null) : null;
}
function pd(e, t) {
  const r = fd(e, t);
  return r ? r.getAttribute(Je.draggableId) : null;
}
function md(e, t) {
  const r = `[${gr.contextId}="${e}"]`, o = fi(document, r).find((i) => i.getAttribute(gr.id) === t);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Q("Draggable element is not a HTMLElement"), null) : null;
}
function gd(e) {
  e.preventDefault();
}
function wt({
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
function xi({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !ci(t.getState(), n)) : (process.env.NODE_ENV !== "production" && Q(`Unable to find draggable with id: ${n}`), !1);
}
function vd({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!xi({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = md(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && Q(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && ad(u, a))
    return null;
  const f = e.claim(i || Me);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function v(b, C) {
    wt({
      expected: b,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(C());
  }
  const h = v.bind(null, "DRAGGING");
  function m(b) {
    function C() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (C(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${l}`) : g()), r.dispatch(zc(b.liftActionArgs)), l = "DRAGGING";
    function _(I, M = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), M.shouldBlockNextClick) {
        const $ = De(window, [{
          eventName: "click",
          fn: gd,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      C(), r.dispatch(ei({
        reason: I
      }));
    }
    return {
      isActive: () => wt({
        expected: "DRAGGING",
        phase: l,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (I) => _("DROP", I),
      cancel: (I) => _("CANCEL", I),
      ...b.actions
    };
  }
  function y(b) {
    const C = lt((I) => {
      h(() => Qo({
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
        cleanup: () => C.cancel(),
        actions: {
          move: C
        }
      }),
      move: C
    };
  }
  function E() {
    const b = {
      moveUp: () => h(tl),
      moveRight: () => h(nl),
      moveDown: () => h(rl),
      moveLeft: () => h(ol)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: sd(u),
        movementMode: "SNAP"
      },
      cleanup: Me,
      actions: b
    });
  }
  function D() {
    wt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => wt({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: y,
    snapLift: E,
    abort: D
  };
}
const hd = [Yu, Zu, nd];
function bd({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? hd : [], ...n || []], a = me(() => Tu())[0], s = P(function(m, y) {
    ht(m) && !ht(y) && a.tryAbandon();
  }, [a]);
  ye(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const E = t.getState();
      s(m, E), m = E;
    });
  }, [a, t, s]), ye(() => a.tryAbandon, [a.tryAbandon]);
  const c = P((h) => xi({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: h
  }), [a, r, t]), u = P((h, m, y) => vd({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), f = P((h) => pd(e, h), [e]), l = P((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), d = P(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Vr()));
  }, [a, t]), p = P(() => a.isClaimed(), [a]), v = U(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  od(i);
  for (let h = 0; h < i.length; h++)
    i[h](v);
}
const yd = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    F.version.startsWith("16") || F.version.startsWith("17") ? r() : no(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), Ed = (e) => ({
  ...gt,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...gt.durationDampening,
    ...e.autoScrollerOptions
  }
});
function rt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find store from lazy ref") : g()), e.current;
}
function xd(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = j(null);
  Ru();
  const s = Hr(e), c = P(() => yd(s.current), [s]), u = P(() => Ed(s.current), [s]), f = xu(t), l = Cu({
    contextId: t,
    text: i
  }), d = mu(t, o), p = P(($) => {
    rt(a).dispatch($);
  }, []), v = U(() => on({
    publishWhileDragging: Yc,
    updateDroppableScroll: Xc,
    updateDroppableIsEnabled: Jc,
    updateDroppableIsCombineEnabled: Zc,
    collectionStarting: Kc
  }, p), [p]), h = hu(), m = U(() => Hl(h, v), [h, v]), y = U(() => cu({
    scrollWindow: zl,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: u,
    ...on({
      move: Qo
    }, p)
  }), [m.scrollDroppable, p, u]), E = gu(t), D = U(() => kl({
    announce: f,
    autoScroller: y,
    dimensionMarshal: m,
    focusMarshal: E,
    getResponders: c,
    styleMarshal: d
  }), [f, y, m, E, c, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== D && process.env.NODE_ENV !== "production" && Q("unexpected store change"), a.current = D;
  const x = P(() => {
    const $ = rt(a);
    $.getState().phase !== "IDLE" && $.dispatch(Vr());
  }, []), b = P(() => {
    const $ = rt(a).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = U(() => ({
    isDragging: b,
    tryAbort: x
  }), [b, x]);
  r(C);
  const _ = P(($) => ci(rt(a).getState(), $), []), I = P(() => We(rt(a).getState()), []), M = U(() => ({
    marshal: m,
    focus: E,
    contextId: t,
    canLift: _,
    isMovementAllowed: I,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, m, l, E, _, I, h]);
  return bd({
    contextId: t,
    store: D,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ie(() => x, [x]), F.createElement(kt.Provider, {
    value: M
  }, F.createElement(bs, {
    context: Wr,
    store: D
  }, e.children));
}
let Dd = 0;
function Nd() {
  return U(() => `${Dd++}`, []);
}
function Sd() {
  return F.useId();
}
var wd = "useId" in F ? Sd : Nd;
function Cd(e) {
  const t = wd(), r = e.dragHandleUsageInstructions || Ot.dragHandleUsageInstructions;
  return F.createElement($s, null, (n) => F.createElement(xd, {
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
const zn = {
  dragging: 5e3,
  dropAnimating: 4500
}, Id = (e, t) => t ? ot.drop(t.duration) : e ? ot.snap : ot.fluid, Od = (e, t) => {
  if (e)
    return t ? mt.opacity.drop : mt.opacity.combining;
}, Pd = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Ad(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Pd(e), c = !!i, u = c ? pr.drop(n, a) : pr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Id(s, i),
    transform: u,
    opacity: Od(a, c),
    zIndex: c ? zn.dropAnimating : zn.dragging,
    pointerEvents: "none"
  };
}
function _d(e) {
  return {
    transform: pr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Rd(e) {
  return e.type === "DRAGGING" ? Ad(e) : _d(e);
}
function Td(e, t, r = se) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Oo(o, n), a = Rt(i, r), s = {
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
function $d(e) {
  const t = Ur("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = U(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = P((p) => {
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), Td(r, v, p);
  }, [r, o]), f = U(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = j(f), d = j(!0);
  ye(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), ye(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var qr = /* @__PURE__ */ F.createContext(null);
function Di(e) {
  e && Dt(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g());
}
function Vd(e, t, r) {
  Nt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${n(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && (Di(r()), e.isEnabled && (mi(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${n(o)} Unable to find drag handle`) : g(!1))));
  });
}
function Bd(e) {
  jr(() => {
    const t = j(e);
    Nt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function Vt(e) {
  const t = to(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g()), t;
}
function Md(e) {
  e.preventDefault();
}
const Ld = (e) => {
  const t = j(null), r = P((C = null) => {
    t.current = C;
  }, []), n = P(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Vt(kt), {
    type: s,
    droppableId: c
  } = Vt(qr), u = U(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: v,
    isClone: h,
    mapped: m,
    dropAnimationFinished: y
  } = e;
  if (Vd(e, o, n), Bd(h), !h) {
    const C = U(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, a, n, v, p, d]);
    $d(C);
  }
  const E = U(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Md
  } : null, [o, i, l, d]), D = P((C) => {
    m.type === "DRAGGING" && m.dropping && C.propertyName === "transform" && (F.version.startsWith("16") || F.version.startsWith("17") ? y() : no(y));
  }, [y, m]), x = U(() => {
    const C = Rd(m), _ = m.type === "DRAGGING" && m.dropping ? D : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: C,
        onTransitionEnd: _
      },
      dragHandleProps: E
    };
  }, [o, E, l, m, D, r]), b = U(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return F.createElement(F.Fragment, null, f(x, m.snapshot, b));
};
var Fd = Ld, Ni = (e, t) => e === t, Si = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Gd = (e) => e.combine ? e.combine.draggableId : null, kd = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Wd() {
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
  })), r = ae((o, i, a, s, c = null, u = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: u,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: f,
      snapshot: t(i, s, c, u, null)
    }
  }));
  return (o, i) => {
    if (ht(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = be(o.impact), u = kd(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], u = a.result, f = u.mode, l = Si(u), d = Gd(u), v = {
        duration: o.dropDuration,
        curve: Mr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? mt.opacity.drop : null,
        scale: d ? mt.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: v,
          draggingOver: l,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, s, l, d, v)
        }
      };
    }
    return null;
  };
}
function wi(e = null) {
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
const Ud = {
  mapped: {
    type: "SECONDARY",
    offset: se,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: /* @__PURE__ */ wi(null)
  }
};
function jd() {
  const e = ae((a, s) => ({
    x: a,
    y: s
  })), t = ae(wi), r = ae((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(se, a, !0) : null, o = (a, s, c, u) => {
    const f = c.displaced.visible[a], l = !!(u.inVirtualList && u.effected[a]), d = Lt(c), p = d && d.draggableId === a ? s : null;
    if (!f) {
      if (!l)
        return n(p);
      if (c.displaced.invisible[a])
        return null;
      const m = Ze(u.displacedBy.point), y = e(m.x, m.y);
      return r(y, p, !0);
    }
    if (l)
      return n(p);
    const v = c.displacedBy.point, h = e(v.x, v.y);
    return r(h, p, f.shouldAnimate);
  };
  return (a, s) => {
    if (ht(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : o(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Hd = () => {
  const e = Wd(), t = jd();
  return (n, o) => e(n, o) || t(n, o) || Ud;
}, zd = {
  dropAnimationFinished: ti
}, qd = /* @__PURE__ */ Co(Hd, zd, null, {
  context: Wr,
  areStatePropsEqual: Ni
})(Fd);
var Yd = qd;
function Ci(e) {
  return Vt(qr).isUsingCloneFor === e.draggableId && !e.isClone ? null : F.createElement(Yd, e);
}
function Kd(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return F.createElement(Ci, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Yr = (e) => (t) => e === t, Xd = /* @__PURE__ */ Yr("scroll"), Jd = /* @__PURE__ */ Yr("auto"), Zd = /* @__PURE__ */ Yr("visible"), qn = (e, t) => t(e.overflowX) || t(e.overflowY), Qd = (e, t) => t(e.overflowX) && t(e.overflowY), Ii = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return qn(r, Xd) || qn(r, Jd);
}, ef = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = vt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Ii(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Qd(n, Zd) || process.env.NODE_ENV !== "production" && Q(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Kr = (e) => e == null ? null : e === document.body ? ef() ? e : null : e === document.documentElement ? null : Ii(e) ? e : Kr(e.parentElement);
var tf = (e) => {
  !e || !Kr(e.parentElement) || process.env.NODE_ENV !== "production" && Q(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, vr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Oi = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Oi(e.parentElement) : !1;
var rf = (e) => {
  const t = Kr(e), r = Oi(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, nf = ({
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
      scrollSize: d,
      client: p
    } = s, v = ii({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: p,
      scrollSize: d,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: v,
        diff: {
          value: se,
          displacement: se
        }
      }
    };
  })(), u = o === "vertical" ? Ar : Lo, f = Ke({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: f
  };
};
const of = (e, t) => {
  const r = Po(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, c = Cr({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Ir({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var af = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = of(e, c), f = Rt(u, n), l = (() => {
    if (!c)
      return null;
    const p = Po(c), v = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: Rt(p, n),
      scroll: vr(c),
      scrollSize: v,
      shouldClipSubject: s
    };
  })();
  return nf({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: f,
    closest: l
  });
};
const sf = {
  passive: !1
}, cf = {
  passive: !0
};
var Yn = (e) => e.shouldPublishImmediately ? sf : cf;
const Ct = (e) => e && e.env.closestScrollable || null;
function lf(e) {
  const t = j(null), r = Vt(kt), n = Ur("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Hr(e), s = U(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = j(s), u = U(() => ae((x, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
    const C = {
      x,
      y: b
    };
    i.updateDroppableScroll(s.id, C);
  }), [s.id, i]), f = P(() => {
    const x = t.current;
    return !x || !x.env.closestScrollable ? se : vr(x.env.closestScrollable);
  }, []), l = P(() => {
    const x = f();
    u(x.x, x.y);
  }, [f, u]), d = U(() => lt(l), [l]), p = P(() => {
    const x = t.current, b = Ct(x);
    if (x && b || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), x.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), v = P((x, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const C = a.current, _ = C.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const I = rf(_), M = {
      ref: _,
      descriptor: s,
      env: I,
      scrollOptions: b
    };
    t.current = M;
    const $ = af({
      ref: _,
      descriptor: s,
      env: I,
      windowScroll: x,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), k = I.closestScrollable;
    return k && (k.setAttribute(kn.contextId, r.contextId), k.addEventListener("scroll", p, Yn(M.scrollOptions)), process.env.NODE_ENV !== "production" && tf(k)), $;
  }, [r.contextId, s, p, a]), h = P(() => {
    const x = t.current, b = Ct(x);
    return x && b || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), vr(b);
  }, []), m = P(() => {
    const x = t.current;
    x || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const b = Ct(x);
    t.current = null, b && (d.cancel(), b.removeAttribute(kn.contextId), b.removeEventListener("scroll", p, Yn(x.scrollOptions)));
  }, [p, d]), y = P((x) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const C = Ct(b);
    C || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), C.scrollTop += x.y, C.scrollLeft += x.x;
  }, []), E = U(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: y
  }), [m, v, h, y]), D = U(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: E
  }), [E, s, n]);
  ye(() => (c.current = D.descriptor, o.droppable.register(D), () => {
    t.current && (process.env.NODE_ENV !== "production" && Q("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(D);
  }), [E, s, m, D, i, o.droppable]), ye(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ye(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function nr() {
}
const Kn = {
  width: 0,
  height: 0,
  margin: ks
}, uf = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Kn : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, df = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = uf({
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
    transition: r !== "none" ? ot.placeholder : null
  };
}, ff = (e) => {
  const t = j(null), r = P(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = me(e.animate === "open");
  ie(() => s ? n !== "open" ? (r(), c(!1), nr) : t.current ? nr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : nr, [n, s, r]);
  const u = P((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = df({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return F.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var pf = /* @__PURE__ */ F.memo(ff);
function or(e) {
  return typeof e == "boolean";
}
function ir(e, t) {
  t.forEach((r) => r(e));
}
const mf = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? g(!1, "A Droppable requires a droppableId prop") : g()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : g());
}, function({
  props: t
}) {
  or(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isDropDisabled must be a boolean") : g()), or(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? g(!1, "isCombineEnabled must be a boolean") : g()), or(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? g(!1, "ignoreContainerClipping must be a boolean") : g());
}, function({
  getDroppableRef: t
}) {
  Di(t());
}], gf = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Q(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], vf = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g());
}];
function hf(e) {
  Nt(() => {
    ir(e, mf), e.props.mode === "standard" && ir(e, gf), e.props.mode === "virtual" && ir(e, vf);
  });
}
class bf extends F.PureComponent {
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
const yf = (e) => {
  const t = to(kt);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = j(null), i = j(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: v,
    useClone: h,
    updateViewportMaxScroll: m,
    getContainerForClone: y
  } = e, E = P(() => o.current, []), D = P((V = null) => {
    o.current = V;
  }, []), x = P(() => i.current, []), b = P((V = null) => {
    i.current = V;
  }, []);
  hf({
    props: e,
    getDroppableRef: E,
    getPlaceholderRef: x
  });
  const C = P(() => {
    n() && m({
      maxScroll: si()
    });
  }, [n, m]);
  lf({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: E
  });
  const _ = U(() => F.createElement(bf, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: V,
    data: W,
    animate: ce
  }) => F.createElement(pf, {
    placeholder: W,
    onClose: V,
    innerRef: b,
    animate: ce,
    contextId: r,
    onTransitionEnd: C
  })), [r, C, e.placeholder, e.shouldAnimatePlaceholder, b]), I = U(() => ({
    innerRef: D,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, _, D]), M = h ? h.dragging.draggableId : null, $ = U(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: M
  }), [s, M, c]);
  function k() {
    if (!h)
      return null;
    const {
      dragging: V,
      render: W
    } = h, ce = F.createElement(Ci, {
      draggableId: V.draggableId,
      index: V.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ne, T) => W(ne, T, V));
    return Ti.createPortal(ce, y());
  }
  return F.createElement(qr.Provider, {
    value: $
  }, a(I, v), k());
};
var Ef = yf;
function xf() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g()), document.body;
}
const Xn = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: xf
}, Pi = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Xn)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Xn[r]
    });
  return t;
}, ar = (e, t) => e === t.droppable.type, Jn = (e, t) => t.draggables[e.draggable.id], Df = () => {
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
  })), n = ae((i, a, s, c, u, f) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const v = f ? {
        render: f,
        dragging: r(u.descriptor)
      } : null, h = {
        isDraggingOver: s,
        draggingOverWith: s ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: u.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
        useClone: v
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
      placeholder: u.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, a) => {
    const s = Pi(a), c = s.droppableId, u = s.type, f = !s.isDropDisabled, l = s.renderClone;
    if (ht(i)) {
      const d = i.critical;
      if (!ar(u, d))
        return t;
      const p = Jn(d, i.dimensions), v = be(i.impact) === c;
      return n(c, f, v, v, p, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!ar(u, d.critical))
        return t;
      const p = Jn(d.critical, i.dimensions);
      return n(c, f, Si(d.result) === c, be(d.impact) === c, p, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!ar(u, d.critical))
        return t;
      const p = be(d.impact) === c, v = !!(d.impact.at && d.impact.at.type === "COMBINE"), h = d.critical.droppable.id === c;
      return p ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, Nf = {
  updateViewportMaxScroll: el
}, Sf = /* @__PURE__ */ Co(Df, Nf, (e, t, r) => ({
  ...Pi(r),
  ...e,
  ...t
}), {
  context: Wr,
  areStatePropsEqual: Ni
})(Ef);
var wf = Sf;
const Cf = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: n,
  isDragDisabled: o = !0,
  isLoading: i,
  onRowClick: a,
  itemClickKey: s,
  haveLinks: c,
  className: u
}) => {
  const [f, l] = me(null), [d, p] = me(e);
  ie(() => {
    p(e);
  }, [e]);
  const v = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", h = (y) => {
    a == null || a(y), l(y);
  }, m = (y) => {
    if (!y.destination || !(d != null && d.length)) return;
    const E = y.source.index, D = y.destination.index, x = [...d], [b] = x.splice(E, 1);
    x.splice(D, 0, b), p(x);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ oe("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ S("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ S("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ S(oo, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ S(go, { className: u, children: /* @__PURE__ */ S("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ S("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ S(Cd, { onDragEnd: m, children: /* @__PURE__ */ S(wf, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ oe("table", { className: "w-full", children: [
    /* @__PURE__ */ S("thead", { children: /* @__PURE__ */ S("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((E, D) => /* @__PURE__ */ S(
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
    /* @__PURE__ */ oe(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          d == null ? void 0 : d.map((E, D) => {
            var x;
            return /* @__PURE__ */ S(
              Kd,
              {
                isDragDisabled: o,
                draggableId: (x = E == null ? void 0 : E.id) == null ? void 0 : x.toString(),
                index: D,
                children: (b) => {
                  const C = {
                    ...b.draggableProps.style
                  };
                  return /* @__PURE__ */ S(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === d[D] && v}`,
                      onClick: () => h(
                        s ? E[s] : E.id
                      ),
                      ref: b.innerRef,
                      ...b.draggableProps,
                      ...b.dragHandleProps,
                      style: C,
                      children: t.map((_, I) => {
                        var $;
                        let M = ($ = _ == null ? void 0 : _.name) == null ? void 0 : $.reduce(
                          (k, V) => k == null ? void 0 : k[V],
                          d == null ? void 0 : d[D]
                        );
                        return /* @__PURE__ */ S(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: _.transform ? _.transform(M, D) : M
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
}, Xf = Cf, If = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ S(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Jf = If;
var hr = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new WeakMap(), Zn = 0, Of = void 0;
function Pf(e) {
  return e ? (It.has(e) || (Zn += 1, It.set(e, Zn.toString())), It.get(e)) : "0";
}
function Af(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Pf(e.root) : e[t]}`).toString();
}
function _f(e) {
  const t = Af(e);
  let r = hr.get(t);
  if (!r) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const i = new IntersectionObserver((a) => {
      a.forEach((s) => {
        var c;
        const u = s.isIntersecting && o.some((f) => s.intersectionRatio >= f);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u), (c = n.get(s.target)) == null || c.forEach((f) => {
          f(u, s);
        });
      });
    }, e);
    o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: n
    }, hr.set(t, r);
  }
  return r;
}
function Rf(e, t, r = {}, n = Of) {
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
  const { id: o, observer: i, elements: a } = _f(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), hr.delete(o));
  };
}
function Tf({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: n,
  root: o,
  triggerOnce: i,
  skip: a,
  initialInView: s,
  fallbackInView: c,
  onChange: u
} = {}) {
  var f;
  const [l, d] = L.useState(null), p = L.useRef(u), [v, h] = L.useState({
    inView: !!s,
    entry: void 0
  });
  p.current = u, L.useEffect(
    () => {
      if (a || !l) return;
      let D;
      return D = Rf(
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
  const m = (f = v.entry) == null ? void 0 : f.target, y = L.useRef(void 0);
  !l && m && !i && !a && y.current !== m && (y.current = m, h({
    inView: !!s,
    entry: void 0
  }));
  const E = [d, v.inView, v.entry];
  return E.ref = E[0], E.inView = E[1], E.entry = E[2], E;
}
const $f = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = me(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return ie(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ S(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ S(
        at,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, Vf = $f, Bf = ({
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
    fetchNextPage: u,
    isFetchingNextPage: f,
    isLoading: l,
    data: d,
    isPending: p
  } = e, v = d == null ? void 0 : d.pages.flatMap((y) => y), { ref: h, inView: m } = Tf();
  return ie(() => {
    m && c && u();
  }, [u, m, c]), /* @__PURE__ */ oe(it, { children: [
    s && /* @__PURE__ */ S(Vf, { className: n }),
    /* @__PURE__ */ S(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(v != null && v.length) && v.map((y, E) => t(y, E))
      }
    ),
    /* @__PURE__ */ S(
      "div",
      {
        className: br(
          "flex mt-8 flex-row items-center justify-center",
          i
        ),
        ref: h,
        children: l || p ? a : v != null && v.length ? f ? a : null : o
      }
    )
  ] });
}, Zf = Bf, Qf = () => {
  const e = j(null);
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
  Wf as Button,
  Uf as Checkbox,
  jf as Chips,
  yr as ErrorText,
  at as Icon,
  Zf as InfiniteScroll,
  Hf as Input,
  zf as List,
  oo as Loader,
  qf as MultiSelectSearch,
  Vf as ScrollTopButton,
  Yf as Search,
  Kf as Select,
  Xf as Table,
  Jf as Textarea,
  go as Wrapper,
  vo as useDebounce,
  Qf as useScroll
};
