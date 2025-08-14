import { jsx as w, jsxs as le, Fragment as it } from "react/jsx-runtime";
import * as B from "react";
import M, { memo as Ai, useRef as k, useCallback as Pi, useState as ye, useEffect as oe, useMemo as Ri, useLayoutEffect as Qn, useContext as eo } from "react";
import { motion as to, AnimatePresence as _i } from "framer-motion";
import { twMerge as br } from "tailwind-merge";
import Ti, { flushSync as ro } from "react-dom";
const $i = ({ name: e, className: t, ...r }) => /* @__PURE__ */ w(
  "svg",
  {
    className: `text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ w("use", { className: "w-full h-full object-contain", href: `#${e}` })
  }
), at = /* @__PURE__ */ Ai($i), Vi = ({ style: e, text: t }) => /* @__PURE__ */ le("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ w("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ w("span", { className: "text-base", children: t })
] }), no = Vi, Bi = ({
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
  const u = k(null), f = Pi(() => {
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
  return /* @__PURE__ */ w(
    to.button,
    {
      disabled: s || o,
      onClick: f,
      className: l,
      ...c,
      whileTap: { scale: 0.96 },
      whileHover: !s && !o ? { scale: 1.02 } : void 0,
      children: o ? /* @__PURE__ */ w(no, { style: { width: 20, height: 20 } }) : /* @__PURE__ */ le(it, { children: [
        e,
        a && /* @__PURE__ */ w(
          at,
          {
            name: a,
            className: `ml-2 ${i.includes("small") ? "w-4 h-4" : "w-5 h-5"}`
          }
        )
      ] })
    }
  );
}, Wf = Bi, Mi = ({ error: e }) => /* @__PURE__ */ w("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ w("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), yr = Mi, Li = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ le(it, { children: [
  /* @__PURE__ */ le(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ w(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ w("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ w(
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
  a && /* @__PURE__ */ w(yr, { error: a })
] }), Uf = Li, Fi = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ w("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ w(it, { children: o.title ? /* @__PURE__ */ w(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ w(it, {}) })) }), jf = Fi;
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
function _e() {
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
function oo(e) {
  return Ue(e) || ki(e) || typeof e == "number" && !isFinite(e);
}
function io(e) {
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
  var t = k(e);
  t.current = e;
  var r = k(function() {
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
function ao(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function Xr(e, t) {
  return Array(t + 1).join(e);
}
function so(e) {
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
  var d = ao(f[1] || "", t, r), p = s ? "-" : "", g = n ? "." : "";
  return "" + p + l + g + d;
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
var co = /* @__PURE__ */ Gi(function(e, t) {
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
function lo(e) {
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
function uo(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Ki(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Xi(e, t, r, n, o, i, a) {
  a === void 0 && (a = Ki);
  var s = o.findIndex(function(D) {
    return D;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, n = n + c.length);
  for (var u = r.length, f = e.length, l = {}, d = new Array(u), p = 0; p < u; p++) {
    d[p] = -1;
    for (var g = 0, h = f; g < h; g++) {
      var m = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: p,
        formattedValueIndex: g
      });
      if (m && l[g] !== !0) {
        d[p] = g, l[g] = !0;
        break;
      }
    }
  }
  for (var y = n; y < u && (d[y] === -1 || !i(r[y])); )
    y++;
  var E = y === u || d[y] === -1 ? f : d[y];
  for (y = n - 1; y > 0 && d[y] === -1; )
    y--;
  var x = y === -1 || d[y] === -1 ? 0 : d[y] + 1;
  return x > E ? E : n - x < E - n ? x : E;
}
function At(e, t, r, n) {
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
function fo(e, t, r, n, o, i) {
  i === void 0 && (i = _e);
  var a = ji(function(g, h) {
    var m, y;
    return oo(g) ? (y = "", m = "") : typeof g == "number" || h ? (y = typeof g == "number" ? so(g) : g, m = n(y)) : (y = o(g, void 0), m = n(y)), { formattedValue: m, numAsString: y };
  }), s = ye(function() {
    return a(Ue(e) ? t : e, r);
  }), c = s[0], u = s[1], f = function(g, h) {
    g.formattedValue !== c.formattedValue && u({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), i(g, h);
  }, l = e, d = r;
  Ue(e) && (l = c.numAsString, d = !0);
  var p = a(l, d);
  return Ri(function() {
    u(p);
  }, [p.formattedValue]), [c, f];
}
function Zi(e) {
  return e.replace(/[^0-9]/g, "");
}
function Qi(e) {
  return e;
}
function po(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Qi);
  var s = e.removeFormatting;
  s === void 0 && (s = Zi);
  var c = e.defaultValue, u = e.valueIsNumericString, f = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = _e);
  var p = e.onKeyDown;
  p === void 0 && (p = _e);
  var g = e.onMouseUp;
  g === void 0 && (g = _e);
  var h = e.onFocus;
  h === void 0 && (h = _e);
  var m = e.onBlur;
  m === void 0 && (m = _e);
  var y = e.value, E = e.getCaretBoundary;
  E === void 0 && (E = Ji);
  var x = e.isValidInputCharacter;
  x === void 0 && (x = je);
  var D = e.isCharacterSame, b = Er(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), C = fo(y, c, !!u, a, s, f), _ = C[0], I = _.formattedValue, W = _.numAsString, $ = C[1], U = k(), G = k({ formattedValue: I, numAsString: W }), re = function(S, P) {
    G.current = { formattedValue: S.formattedValue, numAsString: S.value }, $(S, P);
  }, se = ye(!1), ne = se[0], T = se[1], R = k(null), L = k({
    setCaretTimeout: null,
    focusTimeout: null
  });
  oe(function() {
    return T(!0), function() {
      clearTimeout(L.current.setCaretTimeout), clearTimeout(L.current.focusTimeout);
    };
  }, []);
  var K = a, J = function(S, P) {
    var V = parseFloat(P);
    return {
      formattedValue: S,
      value: P,
      floatValue: isNaN(V) ? void 0 : V
    };
  }, Y = function(S, P, V) {
    S.selectionStart === 0 && S.selectionEnd === S.value.length || (Ve(S, P), L.current.setCaretTimeout = setTimeout(function() {
      S.value === V && S.selectionStart !== P && Ve(S, P);
    }, 0));
  }, Q = function(S, P, V) {
    return At(S, P, E(S), V);
  }, ue = function(S, P, V) {
    var ee = E(P), fe = Xi(P, I, S, V, ee, x, D);
    return fe = At(P, fe, ee), fe;
  }, we = function(S) {
    var P = S.formattedValue;
    P === void 0 && (P = "");
    var V = S.input, ee = S.source, fe = S.event, te = S.numAsString, X;
    if (V) {
      var Re = S.inputValue || V.value, Te = jt(V);
      V.value = P, X = ue(Re, P, Te), X !== void 0 && Y(V, X, P);
    }
    P !== I && re(J(P, te), { event: fe, source: ee });
  };
  oe(function() {
    var S = G.current, P = S.formattedValue, V = S.numAsString;
    (I !== P || W !== V) && re(J(I, W), {
      event: void 0,
      source: st.props
    });
  }, [I, W]);
  var me = R.current ? jt(R.current) : void 0, Ee = typeof window < "u" ? Qn : oe;
  Ee(function() {
    var S = R.current;
    if (I !== G.current.formattedValue && S) {
      var P = ue(G.current.formattedValue, I, me);
      S.value = I, Y(S, P, I);
    }
  }, [I]);
  var Ce = function(S, P, V) {
    var ee = P.target, fe = U.current ? zi(U.current, ee.selectionEnd) : co(I, S), te = Object.assign(Object.assign({}, fe), { lastValue: I }), X = s(S, te), Re = K(X);
    if (X = s(Re, void 0), l && !l(J(Re, X))) {
      var Te = P.target, $e = jt(Te), Ut = ue(S, I, $e);
      return Te.value = I, Y(Te, Ut, I), !1;
    }
    return we({
      formattedValue: Re,
      numAsString: X,
      inputValue: S,
      event: P,
      source: V,
      input: P.target
    }), !0;
  }, Oe = function(S, P) {
    P === void 0 && (P = 0);
    var V = S.selectionStart, ee = S.selectionEnd;
    U.current = { selectionStart: V, selectionEnd: ee + P };
  }, Ie = function(S) {
    var P = S.target, V = P.value, ee = Ce(V, S, st.event);
    ee && d(S), U.current = void 0;
  }, Ae = function(S) {
    var P = S.target, V = S.key, ee = P.selectionStart, fe = P.selectionEnd, te = P.value;
    te === void 0 && (te = "");
    var X;
    V === "ArrowLeft" || V === "Backspace" ? X = Math.max(ee - 1, 0) : V === "ArrowRight" ? X = Math.min(ee + 1, te.length) : V === "Delete" && (X = ee);
    var Re = 0;
    V === "Delete" && ee === fe && (Re = 1);
    var Te = V === "ArrowLeft" || V === "ArrowRight";
    if (X === void 0 || ee !== fe && !Te) {
      p(S), Oe(P, Re);
      return;
    }
    var $e = X;
    if (Te) {
      var Ut = V === "ArrowLeft" ? "left" : "right";
      $e = Q(te, X, Ut), $e !== X && S.preventDefault();
    } else V === "Delete" && !x(te[X]) ? $e = Q(te, X, "right") : V === "Backspace" && !x(te[X]) && ($e = Q(te, X, "left"));
    $e !== X && Y(P, $e, te), p(S), Oe(P, Re);
  }, qe = function(S) {
    var P = S.target, V = function() {
      var ee = P.selectionStart, fe = P.selectionEnd, te = P.value;
      if (te === void 0 && (te = ""), ee === fe) {
        var X = Q(te, ee);
        X !== ee && Y(P, X, te);
      }
    };
    V(), requestAnimationFrame(function() {
      V();
    }), g(S), Oe(P);
  }, N = function(S) {
    S.persist && S.persist();
    var P = S.target, V = S.currentTarget;
    R.current = P, L.current.focusTimeout = setTimeout(function() {
      var ee = P.selectionStart, fe = P.selectionEnd, te = P.value;
      te === void 0 && (te = "");
      var X = Q(te, ee);
      X !== ee && !(ee === 0 && fe === te.length) && Y(P, X, te), h(Object.assign(Object.assign({}, S), { currentTarget: V }));
    }, 0);
  }, ge = function(S) {
    R.current = null, clearTimeout(L.current.focusTimeout), clearTimeout(L.current.setCaretTimeout), m(S);
  }, O = ne && Yi() ? "numeric" : void 0, Pe = Object.assign({ inputMode: O }, b, {
    type: t,
    value: I,
    onChange: Ie,
    onKeyDown: Ae,
    onMouseUp: qe,
    onFocus: N,
    onBlur: ge
  });
  if (r === "text")
    return o ? M.createElement(M.Fragment, null, o(I, b) || null) : M.createElement("span", Object.assign({}, b, { ref: i }), I);
  if (n) {
    var Ye = n;
    return M.createElement(Ye, Object.assign({}, Pe, { ref: i }));
  }
  return M.createElement("input", Object.assign({}, Pe, { ref: i }));
}
function Zr(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = Bt(t), u = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, d = xr(e, a), p = d.beforeDecimal, g = d.afterDecimal, h = d.addNegation;
  return r !== void 0 && (g = ao(g, r, !!n)), u && (p = Ui(p, u, s)), o && (p = o + p), i && (g = g + i), h && (p = "-" + p), e = p + (l && f || "") + g, e;
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
  return new RegExp("(^-)|[0-9]|" + io(e), "g");
}
function ra(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function na(e, t, r) {
  var n;
  t === void 0 && (t = lo(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, u = t.to, f = u.start, l = u.end, d = Bt(r), p = d.allowedDecimalSeparators, g = d.decimalSeparator, h = e[l] === g;
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
  }, E = y(e, f, l), x = E.hasNegation;
  n = E, e = n.value, f = n.start, l = n.end;
  var D = y(t.lastValue, c.start, c.end), b = D.start, C = D.end, _ = D.value, I = e.substring(f, l);
  e.length && _.length && (b > _.length - a.length || C < i.length) && !(I && a.startsWith(I)) && (e = _);
  var W = 0;
  e.startsWith(i) ? W += i.length : f < i.length && (W = f), e = e.substring(W), l -= W;
  var $ = e.length, U = e.length - a.length;
  e.endsWith(a) ? $ = U : (l > U || l > e.length - a.length) && ($ = l), e = e.substring(0, $), e = ea(x ? "-" + e : e, o), e = (e.match(ta(g)) || []).join("");
  var G = e.indexOf(g);
  e = e.replace(new RegExp(io(g), "g"), function(R, L) {
    return L === G ? "." : "";
  });
  var re = xr(e, o), se = re.beforeDecimal, ne = re.afterDecimal, T = re.addNegation;
  return u.end - u.start < c.end - c.start && se === "" && h && !parseFloat(ne) && (e = T ? "-" : ""), e;
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
  o === void 0 && (o = _e);
  var i = e.onBlur;
  i === void 0 && (i = _e);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var f = e.defaultValue, l = e.value, d = e.valueIsNumericString, p = e.onValueChange, g = Er(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = Bt(e), m = h.decimalSeparator, y = h.allowedDecimalSeparators, E = function(T) {
    return Zr(T, e);
  }, x = function(T, R) {
    return na(T, R, e);
  }, D = Ue(l) ? f : l, b = d ?? ra(D, u, t);
  Ue(l) ? Ue(f) || (b = b || typeof f == "number") : b = b || typeof l == "number";
  var C = function(T) {
    return oo(T) ? T : (typeof T == "number" && (T = so(T)), b && typeof s == "number" ? Jr(T, s, !!c) : T);
  }, _ = fo(C(l), C(f), !!b, E, x, p), I = _[0], W = I.numAsString, $ = I.formattedValue, U = _[1], G = function(T) {
    var R = T.target, L = T.key, K = R.selectionStart, J = R.selectionEnd, Y = R.value;
    if (Y === void 0 && (Y = ""), (L === "Backspace" || L === "Delete") && J < u.length) {
      T.preventDefault();
      return;
    }
    if (K !== J) {
      o(T);
      return;
    }
    L === "Backspace" && Y[0] === "-" && K === u.length + 1 && r && Ve(R, 1), s && c && (L === "Backspace" && Y[K - 1] === m ? (Ve(R, K - 1), T.preventDefault()) : L === "Delete" && Y[K] === m && T.preventDefault()), y != null && y.includes(L) && Y[K] === m && Ve(R, K + 1);
    var Q = a === !0 ? "," : a;
    L === "Backspace" && Y[K - 1] === Q && Ve(R, K - 1), L === "Delete" && Y[K] === Q && Ve(R, K + 1), o(T);
  }, re = function(T) {
    var R = W;
    if (R.match(/\d/g) || (R = ""), n || (R = Hi(R)), c && s && (R = Jr(R, s, c)), R !== W) {
      var L = Zr(R, e);
      U({
        formattedValue: L,
        value: R,
        floatValue: parseFloat(R)
      }, {
        event: T,
        source: st.event
      });
    }
    i(T);
  }, se = function(T) {
    return T === m ? !0 : je(T);
  }, ne = function(T) {
    var R = T.currentValue, L = T.lastValue, K = T.formattedValue, J = T.currentValueIndex, Y = T.formattedValueIndex, Q = R[J], ue = K[Y], we = co(L, R), me = we.to, Ee = function(Ce) {
      return x(Ce).indexOf(".") + u.length;
    };
    return l === 0 && c && s && R[me.start] === m && Ee(R) < J && Ee(K) > Y ? !1 : J >= me.start && J < me.end && y && y.includes(Q) && ue === m ? !0 : Q === ue;
  };
  return Object.assign(Object.assign({}, g), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: se,
    isCharacterSame: ne,
    onValueChange: U,
    format: E,
    removeFormatting: x,
    getCaretBoundary: function(T) {
      return oa(T, e);
    },
    onKeyDown: G,
    onBlur: re
  });
}
function sa(e) {
  var t = aa(e);
  return M.createElement(po, Object.assign({}, t));
}
function ca(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || uo(o, a), a += 1);
  return s.join("");
}
function la(e, t, r) {
  t === void 0 && (t = lo(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(m) {
    return n[m] === o;
  }, u = function(m, y) {
    for (var E = "", x = 0; x < m.length; x++)
      c(y + x) && je(m[x]) && (E += m[x]);
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
  var p = s.substring(0, i.start), g = e.substring(a.start, a.end), h = s.substring(i.end);
  return "" + u(p, 0) + f(g) + u(h, i.end);
}
function ua(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, p) {
    var g = void 0;
    d === o && (a++, g = uo(n, a - 1), s === -1 && e[p] === g && (s = p)), c[p] = g;
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
  n === void 0 && (n = _e);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = Er(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  da(e);
  var u = function(g) {
    return ua(g, e);
  }, f = function(g) {
    var h = g.key, m = g.target, y = m.selectionStart, E = m.selectionEnd, x = m.value;
    if (y !== E) {
      n(g);
      return;
    }
    var D = y;
    if (h === "Backspace" || h === "Delete") {
      var b = "right";
      if (h === "Backspace") {
        for (; D > 0 && t[D - 1] !== o; )
          D--;
        b = "left";
      } else {
        for (var C = t.length; D < C && t[D] !== o; )
          D++;
        b = "right";
      }
      D = At(x, D, u(x), b);
    } else t[D] !== o && h !== "ArrowLeft" && h !== "ArrowRight" && (D = At(x, D + 1, u(x), "right"));
    D !== y && Ve(m, D), n(g);
  }, l = Ue(i) ? a : i, d = s ?? fa(l, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(g) {
      return ca(g, p);
    },
    removeFormatting: function(g, h) {
      return la(g, h, p);
    },
    getCaretBoundary: u,
    onKeyDown: f
  });
}
function ma(e) {
  var t = pa(e);
  return M.createElement(po, Object.assign({}, t));
}
const ga = {
  sm: {
    height: "h-8",
    paddingX: "px-2",
    text: "text-sm",
    postfixPadding: "pr-2",
    labelMb: "mb-1"
  },
  md: {
    height: "h-10",
    paddingX: "px-3",
    text: "text-base",
    postfixPadding: "pr-3",
    labelMb: "mb-1.5"
  },
  lg: {
    height: "h-12",
    paddingX: "px-4",
    text: "text-lg",
    postfixPadding: "pr-4",
    labelMb: "mb-2"
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
  ...d
}) => {
  var y;
  const p = !!(o != null && o.error), g = ga[e], h = `${g.height} w-full bg-white text-black placeholder:text-dark-gray ${g.text} rounded-xl border transition-colors duration-150 outline-none border-gray focus:border-primary disabled:bg-gray-trans disabled:text-dark-gray disabled:cursor-not-allowed`, m = "!border-danger focus:border-danger";
  return /* @__PURE__ */ le("label", { className: `block w-full ${f || ""}`, children: [
    u ? /* @__PURE__ */ w(
      ma,
      {
        format: u,
        onValueChange: (E) => {
          var x;
          r == null || r.onChange((x = E.value.replace("_", "")) == null ? void 0 : x.toString());
        },
        value: (y = r == null ? void 0 : r.value) == null ? void 0 : y.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: t,
        mask: "_",
        style: { fontSize: "16px" },
        className: `${h} ${g.paddingX} ${p ? m : ""} ${s || ""}`,
        "aria-invalid": p || void 0,
        ...d
      }
    ) : t === "number" ? /* @__PURE__ */ le(
      "div",
      {
        className: `flex items-center justify-between rounded-xl border bg-white ${g.height} ${p ? "border-danger" : "border-gray"} ${c || ""}`,
        children: [
          /* @__PURE__ */ w(
            sa,
            {
              decimalScale: l,
              style: { fontSize: "16px" },
              onValueChange: (E) => {
                var x;
                return r == null ? void 0 : r.onChange(+((x = E.value.replace("_", "")) == null ? void 0 : x.toString()));
              },
              value: typeof (r == null ? void 0 : r.value) == "number" ? r == null ? void 0 : r.value : Number((r == null ? void 0 : r.value) ?? 0),
              className: `flex-1 bg-transparent border-0 ${g.paddingX} ${g.text} placeholder:text-dark-gray focus:outline-none`,
              "aria-invalid": p || void 0,
              ...d,
              ...va.number
            }
          ),
          i ? /* @__PURE__ */ w(
            "span",
            {
              className: `${g.postfixPadding} ${g.text} text-dark-gray select-none`,
              children: i
            }
          ) : null
        ]
      }
    ) : /* @__PURE__ */ w(
      "input",
      {
        ...r,
        ...d,
        type: t,
        style: { fontSize: "16px" },
        className: `${h} ${g.paddingX} ${p ? m : ""} ${s || ""}`,
        "aria-invalid": p || void 0
      }
    ),
    /* @__PURE__ */ w("div", { className: "min-h-6 absolute w-full items-center flex justify-center flex-row", children: /* @__PURE__ */ w(_i, { children: (o == null ? void 0 : o.error) && Object.keys(o.error).length > 0 && /* @__PURE__ */ w(
      to.div,
      {
        initial: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: { duration: 0.15 },
        children: /* @__PURE__ */ w(yr, { error: o.error })
      }
    ) }) })
  ] });
}, Hf = ha, ba = ({
  children: e,
  className: t
}) => /* @__PURE__ */ w(
  "div",
  {
    className: br(
      "bg-main rounded-2xl p-5 border-primary/10 border",
      t
    ),
    children: e
  }
), mo = ba, ya = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = ye(null);
  return /* @__PURE__ */ w(mo, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ w("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ le(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ w("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ w("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, zf = ya;
function go(e, t) {
  const [r, n] = ye(e);
  return oe(() => {
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
  const [o, i] = ye(!1), [a, s] = ye(""), c = go(a, 100), u = k(null);
  oe(() => {
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
  return /* @__PURE__ */ le("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ le("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ w(
        at,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ w(
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
    o && /* @__PURE__ */ w("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var d;
      return /* @__PURE__ */ w(
        "li",
        {
          onClick: () => f(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ le("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ w(at, { name: l.icon }),
            /* @__PURE__ */ w(
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
  const [i, a] = ye(r), s = go(i, 300);
  return oe(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ le("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ w(
      at,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ w(
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
  return /* @__PURE__ */ le("label", { className: `relative w-full ${i}`, children: [
    u && /* @__PURE__ */ w(
      "span",
      {
        className: `absolute left-[20px] -top-[10px] px-[6px] text-primary text-xs md:text-sm bg-white z-[1] ${a}`,
        children: u
      }
    ),
    /* @__PURE__ */ w(
      "div",
      {
        className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${s}`,
        children: /* @__PURE__ */ le(
          "select",
          {
            ...n,
            ...f,
            defaultValue: "",
            className: `w-full ${o != null && o.error ? "!border-danger" : ""} cursor-pointer appearance-none bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
            children: [
              /* @__PURE__ */ w("option", { value: "", children: e }),
              t == null ? void 0 : t.map((p, g) => /* @__PURE__ */ w("option", { value: p.value, className: "text-black", children: p.label }, g))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ w("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((d = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : d.length) && /* @__PURE__ */ w(yr, { error: o == null ? void 0 : o.error }) })
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
  if (Pa(e)) return "date";
  if (Aa(e)) return "error";
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
function Aa(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Pa(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ke(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Ia(e)), t;
}
function vo(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? pe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? pe(1) : "Expected the enhancer to be a function. Instead, received: '" + ke(r) + "'");
    return r(vo)(e, t);
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
          throw new Error(process.env.NODE_ENV === "production" ? pe(11) : "Expected the observer to be an object. Instead, received: '" + ke(E) + "'");
        function x() {
          E.next && E.next(f());
        }
        x();
        var D = m(x);
        return {
          unsubscribe: D
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
  }, n[tn] = g, n;
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
function ho() {
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
function Ra() {
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
      return i = ho.apply(void 0, s)(o.dispatch), en(en({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function _a(e) {
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
  if (!B.createContext) return {};
  const t = (e = sn[an]) != null ? e : sn[an] = /* @__PURE__ */ new Map();
  let r = t.get(B.createContext);
  return r || (r = B.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(B.createContext, r)), r;
}
const bo = /* @__PURE__ */ Ba(), Ma = () => {
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
function yo(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var sr = { exports: {} }, j = {};
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
  if (cn) return j;
  cn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function x(b) {
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
                case g:
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
  function D(b) {
    return x(b) === u;
  }
  return j.AsyncMode = c, j.ConcurrentMode = u, j.ContextConsumer = s, j.ContextProvider = a, j.Element = t, j.ForwardRef = f, j.Fragment = n, j.Lazy = g, j.Memo = p, j.Portal = r, j.Profiler = i, j.StrictMode = o, j.Suspense = l, j.isAsyncMode = function(b) {
    return D(b) || x(b) === c;
  }, j.isConcurrentMode = D, j.isContextConsumer = function(b) {
    return x(b) === s;
  }, j.isContextProvider = function(b) {
    return x(b) === a;
  }, j.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, j.isForwardRef = function(b) {
    return x(b) === f;
  }, j.isFragment = function(b) {
    return x(b) === n;
  }, j.isLazy = function(b) {
    return x(b) === g;
  }, j.isMemo = function(b) {
    return x(b) === p;
  }, j.isPortal = function(b) {
    return x(b) === r;
  }, j.isProfiler = function(b) {
    return x(b) === i;
  }, j.isStrictMode = function(b) {
    return x(b) === o;
  }, j.isSuspense = function(b) {
    return x(b) === l;
  }, j.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === l || b === d || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === p || b.$$typeof === a || b.$$typeof === s || b.$$typeof === f || b.$$typeof === m || b.$$typeof === y || b.$$typeof === E || b.$$typeof === h);
  }, j.typeOf = x, j;
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
var ln;
function Fa() {
  return ln || (ln = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function x(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === i || N === o || N === l || N === d || typeof N == "object" && N !== null && (N.$$typeof === g || N.$$typeof === p || N.$$typeof === a || N.$$typeof === s || N.$$typeof === f || N.$$typeof === m || N.$$typeof === y || N.$$typeof === E || N.$$typeof === h);
    }
    function D(N) {
      if (typeof N == "object" && N !== null) {
        var ge = N.$$typeof;
        switch (ge) {
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
                var Pe = O && O.$$typeof;
                switch (Pe) {
                  case s:
                  case f:
                  case g:
                  case p:
                  case a:
                    return Pe;
                  default:
                    return ge;
                }
            }
          case r:
            return ge;
        }
      }
    }
    var b = c, C = u, _ = s, I = a, W = t, $ = f, U = n, G = g, re = p, se = r, ne = i, T = o, R = l, L = !1;
    function K(N) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(N) || D(N) === c;
    }
    function J(N) {
      return D(N) === u;
    }
    function Y(N) {
      return D(N) === s;
    }
    function Q(N) {
      return D(N) === a;
    }
    function ue(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function we(N) {
      return D(N) === f;
    }
    function me(N) {
      return D(N) === n;
    }
    function Ee(N) {
      return D(N) === g;
    }
    function Ce(N) {
      return D(N) === p;
    }
    function Oe(N) {
      return D(N) === r;
    }
    function Ie(N) {
      return D(N) === i;
    }
    function Ae(N) {
      return D(N) === o;
    }
    function qe(N) {
      return D(N) === l;
    }
    H.AsyncMode = b, H.ConcurrentMode = C, H.ContextConsumer = _, H.ContextProvider = I, H.Element = W, H.ForwardRef = $, H.Fragment = U, H.Lazy = G, H.Memo = re, H.Portal = se, H.Profiler = ne, H.StrictMode = T, H.Suspense = R, H.isAsyncMode = K, H.isConcurrentMode = J, H.isContextConsumer = Y, H.isContextProvider = Q, H.isElement = ue, H.isForwardRef = we, H.isFragment = me, H.isLazy = Ee, H.isMemo = Ce, H.isPortal = Oe, H.isProfiler = Ie, H.isStrictMode = Ae, H.isSuspense = qe, H.isValidElementType = x, H.typeOf = D;
  }()), H;
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
}, Eo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Nr = {};
Nr[Dr.ForwardRef] = Ua;
Nr[Dr.Memo] = Eo;
function un(e) {
  return Dr.isMemo(e) ? Eo : Nr[e.$$typeof] || ka;
}
var ja = Object.defineProperty, Ha = Object.getOwnPropertyNames, dn = Object.getOwnPropertySymbols, za = Object.getOwnPropertyDescriptor, qa = Object.getPrototypeOf, fn = Object.prototype;
function xo(e, t, r) {
  if (typeof t != "string") {
    if (fn) {
      var n = qa(t);
      n && n !== fn && xo(e, n, r);
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
var Ya = xo;
const pn = /* @__PURE__ */ _a(Ya);
var cr = { exports: {} }, z = {};
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
  if (mn) return z;
  mn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
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
  return z.ContextConsumer = a, z.ContextProvider = i, z.Element = e, z.ForwardRef = c, z.Fragment = r, z.Lazy = d, z.Memo = l, z.Portal = t, z.Profiler = o, z.StrictMode = n, z.Suspense = u, z.SuspenseList = f, z.isAsyncMode = function() {
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
    return h(m) === d;
  }, z.isMemo = function(m) {
    return h(m) === l;
  }, z.isPortal = function(m) {
    return h(m) === t;
  }, z.isProfiler = function(m) {
    return h(m) === o;
  }, z.isStrictMode = function(m) {
    return h(m) === n;
  }, z.isSuspense = function(m) {
    return h(m) === u;
  }, z.isSuspenseList = function(m) {
    return h(m) === f;
  }, z.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
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
var gn;
function Xa() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, h = !1, m = !1, y = !1, E = !1, x;
    x = Symbol.for("react.module.reference");
    function D(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || E || O === n || O === u || O === f || y || O === p || g || h || m || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === l || O.$$typeof === i || O.$$typeof === a || O.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === x || O.getModuleId !== void 0));
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
              case u:
              case f:
                return Ye;
              default:
                var S = Ye && Ye.$$typeof;
                switch (S) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return S;
                  default:
                    return Pe;
                }
            }
          case t:
            return Pe;
        }
      }
    }
    var C = a, _ = i, I = e, W = c, $ = r, U = d, G = l, re = t, se = o, ne = n, T = u, R = f, L = !1, K = !1;
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
    function me(O) {
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
    function Ae(O) {
      return b(O) === o;
    }
    function qe(O) {
      return b(O) === n;
    }
    function N(O) {
      return b(O) === u;
    }
    function ge(O) {
      return b(O) === f;
    }
    q.ContextConsumer = C, q.ContextProvider = _, q.Element = I, q.ForwardRef = W, q.Fragment = $, q.Lazy = U, q.Memo = G, q.Portal = re, q.Profiler = se, q.StrictMode = ne, q.Suspense = T, q.SuspenseList = R, q.isAsyncMode = J, q.isConcurrentMode = Y, q.isContextConsumer = Q, q.isContextProvider = ue, q.isElement = we, q.isForwardRef = me, q.isFragment = Ee, q.isLazy = Ce, q.isMemo = Oe, q.isPortal = Ie, q.isProfiler = Ae, q.isStrictMode = qe, q.isSuspense = N, q.isSuspenseList = ge, q.isValidElementType = D, q.typeOf = b;
  }()), q;
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
  function p(E, x) {
    return c = E, u = x, f = e(c, u), l = t(n, u), d = r(f, l, u), s = !0, d;
  }
  function g() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function h() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(n, u)), d = r(f, l, u), d;
  }
  function m() {
    const E = e(c, u), x = !a(E, f);
    return f = E, x && (d = r(f, l, u)), d;
  }
  function y(E, x) {
    const D = !i(x, u), b = !o(E, c, x, u);
    return c = E, u = x, D && b ? g() : D ? h() : b ? m() : d;
  }
  return function(x, D) {
    return s ? y(x, D) : p(x, D);
  };
}
function es(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = yo(t, Za);
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
function Do(e, t, r) {
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
function No(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = hn(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = hn(u), u = i(s, c)), process.env.NODE_ENV !== "production" && Do(u, o, t), u;
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
    No(e, "mapDispatchToProps")
  ) : wr(e, "mapDispatchToProps") : lr((t) => ({
    dispatch: t
  }));
}
function os(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    No(e, "mapStateToProps")
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
      return i ? o(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && Do(a, n, "mergeProps")), a;
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
function So(e, t) {
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
    g.onStateChange && g.onStateChange();
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
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return g;
}
const ls = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Pt = ls ? B.useLayoutEffect : B.useEffect;
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
  Pt(() => e(...t), r);
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
function wo(e, t, r, {
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
  context: u = bo
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !En && (En = !0, Sr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = os(e), d = ns(t), p = ss(r), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !vn.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ps(m)}`);
    const y = m.displayName || m.name || "Component", E = `Connect(${y})`, x = {
      shouldHandleStateChanges: g,
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
    function D(_) {
      const [I, W, $] = B.useMemo(() => {
        const {
          reactReduxForwardedRef: N
        } = _, ge = yo(_, us);
        return [_.context, N, ge];
      }, [_]), U = B.useMemo(() => I && I.Consumer && // @ts-ignore
      vn.isContextConsumer(/* @__PURE__ */ B.createElement(I.Consumer, null)) ? I : f, [I, f]), G = B.useContext(U), re = !!_.store && !!_.store.getState && !!_.store.dispatch, se = !!G && !!G.store;
      if (process.env.NODE_ENV !== "production" && !re && !se)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const ne = re ? _.store : G.store, T = se ? G.getServerState : ne.getState, R = B.useMemo(() => es(ne.dispatch, x), [ne]), [L, K] = B.useMemo(() => {
        if (!g) return fs;
        const N = So(ne, re ? void 0 : G.subscription), ge = N.notifyNestedSubs.bind(N);
        return [N, ge];
      }, [ne, re, G]), J = B.useMemo(() => re ? G : Be({}, G, {
        subscription: L
      }), [re, G, L]), Y = B.useRef(), Q = B.useRef($), ue = B.useRef(), we = B.useRef(!1);
      B.useRef(!1);
      const me = B.useRef(!1), Ee = B.useRef();
      Pt(() => (me.current = !0, () => {
        me.current = !1;
      }), []);
      const Ce = B.useMemo(() => () => ue.current && $ === Q.current ? ue.current : R(ne.getState(), $), [ne, $]), Oe = B.useMemo(() => (ge) => L ? vs(
        g,
        ne,
        L,
        // @ts-ignore
        R,
        Q,
        Y,
        we,
        me,
        ue,
        K,
        ge
      ) : () => {
      }, [L]);
      ms(gs, [Q, Y, we, $, ue, K]);
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
      Pt(() => {
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
    const C = B.memo(D);
    if (C.WrappedComponent = m, C.displayName = D.displayName = E, c) {
      const I = B.forwardRef(function($, U) {
        return /* @__PURE__ */ B.createElement(C, Be({}, $, {
          reactReduxForwardedRef: U
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
  const a = B.useMemo(() => {
    const u = So(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = B.useMemo(() => e.getState(), [e]);
  Pt(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || bo;
  return /* @__PURE__ */ B.createElement(c.Provider, {
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
function Co(e, t) {
  var r = ye(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = k(!0), o = k(r), i = n.current || !!(t && o.current.inputs && ys(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return oe(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Es(e, t) {
  return Co(function() {
    return e;
  }, t);
}
var F = Co, A = Es, xs = process.env.NODE_ENV === "production", Yt = "Invariant failed";
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
}, Rt = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Ds(n, r);
  return Ir({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, _t = function(t, r) {
  return r === void 0 && (r = Ns()), Rt(t, r);
}, Io = function(t, r) {
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
}, Oo = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Io(r, n);
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
function ie(e, t) {
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
const Cs = process.env.NODE_ENV === "production", Is = /[ \t]{2,}/g, Os = /^[ \t]*/gm, Sn = (e) => e.replace(Is, " ").replace(Os, "").trim(), As = (e) => Sn(`
  %c@hello-pangea/dnd

  %c${Sn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Ps = (e) => [As(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Rs = "__@hello-pangea/dnd-disable-dev-warnings";
function Ao(e, t) {
  Cs || typeof window < "u" && window[Rs] || console[e](...Ps(t));
}
const Z = /* @__PURE__ */ Ao.bind(null, "warn"), ur = /* @__PURE__ */ Ao.bind(null, "error");
function Me() {
}
function _s(e, t) {
  return {
    ...e,
    ...t
  };
}
function De(e, t, r) {
  const n = t.map((o) => {
    const i = _s(r, o.options);
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
function v(e, t) {
  throw Ts ? new ut(wn) : new ut(`${wn}: ${t || ""}`);
}
class $s extends M.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Me, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Z(`
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
`, Po = (e, t) => {
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
    return Po(e.source, t);
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
      ${Po(e.source, t)}
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
const ae = {
  x: 0,
  y: 0
}, ce = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), ve = (e, t) => ({
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
}, dt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), In = (e, t) => Math.min(...t.map((r) => dt(e, r))), _o = (e) => (t) => ({
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
  e.frame || (process.env.NODE_ENV, v());
  const r = e.frame, n = ve(t, r.scroll.initial), o = Ze(n), i = {
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
const To = /* @__PURE__ */ ie((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), $o = /* @__PURE__ */ ie((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Mt = /* @__PURE__ */ ie((e) => Object.values(e)), Hs = /* @__PURE__ */ ie((e) => Object.values(e));
var ze = /* @__PURE__ */ ie((e, t) => Hs(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Ar(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Lt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Ft = /* @__PURE__ */ ie((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), zs = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Ar(o))
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
  const u = Ft(t, n);
  if (!c) {
    if (!u.length)
      return null;
    const p = u[u.length - 1];
    return a(p.descriptor.id);
  }
  const f = u.findIndex((p) => p.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Could not find displaced item in set") : v());
  const l = f - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return a(d.descriptor.id);
}, Qe = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Vo = {
  point: ae,
  value: 0
}, ft = {
  invisible: {},
  visible: {},
  all: []
}, qs = {
  displaced: ft,
  displacedBy: Vo,
  at: null
};
var Ys = qs, Ne = (e, t) => (r) => e <= r && r <= t, Bo = (e) => {
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
const Pr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Mo = {
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
  return (o) => e === Pr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Js = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ae;
  return bt(e, r);
}, Zs = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, Qs = (e, t, r) => r(t)(e), Rr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Js(e, t) : e;
  return Zs(i, t, o) && Qs(i, r, o);
}, ec = (e) => Rr({
  ...e,
  isVisibleThroughFrameFn: Bo
}), Lo = (e) => Rr({
  ...e,
  isVisibleThroughFrameFn: Ks
}), tc = (e) => Rr({
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
function An({
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
    return An({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: r
    });
  const u = t.find((g) => g.descriptor.index === a);
  if (!u)
    return An({
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
  if (u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot move in direction without previous impact location") : v()), u.type === "REORDER") {
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
  return Fe(r, t) ? o ? ae : Ze(n.point) : o ? n.point : ae;
}, lc = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Lt(t);
  n || (process.env.NODE_ENV, v());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = cc({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return ce(i, a);
};
const Fo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, uc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, _r = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Pn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.end] + Fo(e, r), _r(e, t.marginBox, r)), Rn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.start] - uc(e, r), _r(e, t.marginBox, r)), dc = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => He(e.line, t.contentBox[e.start] + Fo(e, r), _r(e, t.contentBox, r));
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
      return Rn({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const p = Rt(d.page, u.point);
    return Rn({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Fe(l.descriptor.id, o)) {
    const d = Rt(l.page, Ze(o.displacedBy.point));
    return Pn({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return Pn({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, dr = (e, t) => {
  const r = e.frame;
  return r ? ce(t, r.scroll.diff.displacement) : t;
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
}, Go = (e, t) => {
  const r = ve(t, e.scroll.initial), n = Ze(r);
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
function _n(e, t) {
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
  const i = Go(t, ce(t.scroll.current, o)), a = r.frame ? Or(r, ce(r.frame.scroll.current, o)) : r, s = e.displaced, c = pt({
    afterDragging: _n(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = pt({
    afterDragging: _n(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [s, c, u];
  return s.all.forEach((g) => {
    const h = mc(g, d);
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
}, vc = (e, t) => ce(e.scroll.diff.displacement, t), Tr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = vc(r, e), o = ve(n, t.page.borderBox.center);
  return ce(t.client.borderBox.center, o);
}, ko = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = ve(r, e.page.borderBox.center), c = {
    target: bt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? tc(c) : Lo(c);
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
  if (ko({
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
  const g = ve(d, a), h = gc({
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
  const a = r.axis, s = Ne(i[a.start], i[a.end]), c = Mt(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => Bo(o.frame)(de(f))).filter((f) => {
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
  return Fe(e.descriptor.id, t) ? ve(r, t.displacedBy.point) : r;
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
}) => n.filter((a) => Lo({
  target: yc(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = dt(e, dr(r, Tn(a, o))), u = dt(e, dr(r, Tn(s, o)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, yt = /* @__PURE__ */ ie(function(t, r) {
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
}, Wo = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Uo = (e, t, r) => {
  const n = e.frame;
  Qe(t, e) && (process.env.NODE_ENV !== "production" ? v(!1, "Should not add placeholder space to home list") : v()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot add placeholder size to a subject when it already has one") : v());
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
  const s = i ? ce(n.scroll.max, i) : n.scroll.max, c = Wo(n, s), u = Ke({
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
  const o = Wo(r, n), i = Ke({
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
      displacedBy: Vo,
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
    }), p = Qe(n, i) ? i : Uo(i, n, o);
    return ko({
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
}, he = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const wc = (e, t) => {
  const r = he(e);
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
function jo(e) {
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
function Ac({
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
    if (jo(i)(e.center))
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
const Ho = (e, t) => Se(bt(e, t));
var Pc = (e, t) => {
  const r = e.frame;
  return r ? Ho(t, r.scroll.diff.value) : t;
};
function zo({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Rc({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var _c = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = yt(r.axis, t.displaceBy), u = c.value, f = e[s.start], l = e[s.end], p = Ft(t, n).find((h) => {
    const m = h.descriptor.id, y = h.page.borderBox.center[s.line], E = Fe(m, a), x = zo({
      displaced: o,
      id: m
    });
    return E ? x ? l <= y : f < y - u : x ? l <= y + u : f < y;
  }) || null, g = Rc({
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
    index: g
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
  const a = n.axis, s = yt(n.axis, e.displaceBy), c = s.value, u = t[a.start], f = t[a.end], d = Ft(e, o).find((g) => {
    const h = g.descriptor.id, m = g.page.borderBox, E = m[a.size] / Tc, x = Fe(h, i), D = zo({
      displaced: r.displaced,
      id: h
    });
    return x ? D ? f > m[a.start] + E && f < m[a.end] - E : u > m[a.start] - c + E && u < m[a.end] - c - E : D ? f > m[a.start] + c + E && f < m[a.end] + c - E : u > m[a.start] + E && u < m[a.end] - E;
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
}, qo = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = Ho(t.page.borderBox, e), c = Ac({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!c)
    return Ys;
  const u = n[c], f = ze(u.descriptor.id, r), l = Pc(u, s);
  return $c({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: f,
    afterCritical: a
  }) || _c({
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
  const n = he(e), o = he(t);
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
  }), a = he(o);
  if (!a)
    return i;
  const s = r[a];
  if (Qe(e, s) || s.subject.withPlaceholder)
    return i;
  const c = Uo(s, e, t);
  return $r(i, c);
}, nt = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, u = ve(c, e.initial.client.selection), f = {
    offset: u,
    selection: c,
    borderBoxCenter: ce(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: ce(f.selection, a.scroll.current),
    borderBoxCenter: ce(f.borderBoxCenter, a.scroll.current),
    offset: ce(f.offset, a.scroll.diff.value)
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
  const p = s.draggables[e.critical.draggable.id], g = o || qo({
    pageOffset: l.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = Bc({
    draggable: p,
    impact: g,
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
    impact: g,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Mc(e, t) {
  return e.map((r) => t[r]);
}
var Yo = ({
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
}, Ko = ({
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
}, Xo = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, v());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], u = he(n);
  u || (process.env.NODE_ENV !== "production" ? v(!1, "Must be over a destination in SNAP movement mode") : v());
  const f = s[u], l = Yo({
    impact: n,
    viewport: o,
    destination: f,
    draggables: a
  }), d = Ko({
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
}), Jo = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = yt(t.axis, e.displaceBy), i = ze(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? v(!1, "Expected draggable to be inside home list") : v());
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
  const n = Rt(e.client, t), o = _t(n, r);
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
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Expected Droppable to have a frame") : v()), t;
}, Wc = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = kc(a).scroll.diff.value, u = ce(n, c);
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
    ...To(r)
  }, o = $o(Wc({
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
  }, s = he(e.impact), c = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = Jo({
    draggable: u,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : l, g = qo({
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
    impact: g,
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
  }) : Xo({
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
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "INITIAL_PUBLISH must come after a IDLE phase") : v());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: ae
    }, f = {
      client: u,
      page: {
        selection: ce(u.selection, o.scroll.initial),
        borderBoxCenter: ce(u.selection, o.scroll.initial),
        offset: ce(u.selection, o.scroll.diff.value)
      }
    }, l = Mt(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: d,
      afterCritical: p
    } = Jo({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, `Collection cannot start from phase ${e.phase}`) : v()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : v()), Uc({
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
    return Le(r, e.current.client.selection) ? e : nt({
      state: e,
      clientSelection: r,
      impact: fr(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Jt(e);
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} not permitted in phase ${e.phase}`) : v());
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
    return Xt(e, i, !0);
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
    return Xt(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    We(e) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot move by window in phase ${e.phase}`) : v()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? v(!1, "Window scrolling is currently not supported for fixed lists") : v());
    const r = t.payload.newScroll;
    if (Le(e.viewport.scroll.current, r))
      return Jt(e);
    const n = Go(e.viewport, r);
    return fr(e) ? Xo({
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, `${t.type} received while not in DRAGGING phase`) : v());
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
}), Zo = (e) => ({
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
}), Qo = (e) => ({
  type: "DROP",
  payload: e
}), al = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ei = () => ({
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
  process.env.NODE_ENV !== "production" && Z(`
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
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Unexpected phase to start a drag") : v()), r(Vr()), r(Hc({
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
}, ti = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ge = `${ti.outOfTheWay}s ${Mr.outOfTheWay}`, ot = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Mr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, Vn = (e) => Le(e, ae) ? void 0 : `translate(${e.x}px, ${e.y}px)`, pr = {
  moveTo: Vn,
  drop: (e, t) => {
    const r = Vn(e);
    if (r)
      return t ? `${r} scale(${mt.scale.drop})` : r;
  }
}, {
  minDropTime: mr,
  maxDropTime: ri
} = ti, dl = ri - mr, Bn = 1500, fl = 0.6;
var pl = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = dt(e, t);
  if (n <= 0)
    return mr;
  if (n >= Bn)
    return ri;
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
  } = r, s = he(e), c = s ? a[s] : null, u = a[t.descriptor.droppableId], f = Ko({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || u,
    viewport: n
  });
  return ve(f, t.client.borderBox.center);
}, gl = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Yo({
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
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? v(!1, "A DROP action occurred while DROP_PENDING and still waiting") : v()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot drop in phase: ${o.phase}`) : v());
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
  }), d = l ? Ar(f) : null, p = l ? Lt(f) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, h = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: g,
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
  const x = pl({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(il({
    newHomeClientOffset: m,
    dropDuration: x,
    completed: y
  }));
};
var hl = vl, ni = () => ({
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
    e(ni());
  }
  const r = lt(t), n = bl(r);
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
}, Sl = () => {
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
    n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : v()), et("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v()), et("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(St(l, d));
    });
  }, a = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : v());
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
    const p = Ar(d), g = Lt(d);
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragMove when onDragStart has not been called") : v());
    const h = !Il(l, n.lastCritical);
    h && (n.lastCritical = l);
    const m = !wl(n.lastLocation, p);
    m && (n.lastLocation = p);
    const y = !Cl(n.lastCombine, g);
    if (y && (n.lastCombine = g), !h && !m && !y)
      return;
    const E = {
      ...St(l, n.mode),
      combine: g,
      destination: p
    };
    r.add(() => {
      et("onDragUpdate", () => Zt(e().onDragUpdate, E, t, Ot.onDragUpdate));
    });
  }, c = () => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Can only flush responders while dragging") : v()), r.flush();
  }, u = (l) => {
    n || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : v()), n = null, et("onDragEnd", () => Zt(e().onDragEnd, l, t, Ot.onDragEnd));
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
}, Al = (e, t) => {
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
const Pl = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot finish a drop animating when no drop is occurring") : v()), e.dispatch(Br({
    completed: n.completed
  }));
};
var Rl = Pl;
const _l = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(ei());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = De(window, [a]);
    });
  };
};
var Tl = _l, $l = (e) => () => (t) => (r) => {
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
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : v()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Ll = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Qo({
    reason: n.reason
  })));
};
var Fl = Ll;
const Gl = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? /* @__PURE__ */ window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : ho;
var kl = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => vo(jc, Gl(Ra(ul(r), $l(e), ll(e), hl, Rl, Tl, Fl, Ml(i), Dl, Vl(t), Al(n, o))));
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
      } = r, l = Object.keys(c).map((g) => e.draggable.getById(g).getDimension(ae)).sort((g, h) => g.descriptor.index - h.descriptor.index), d = Object.keys(f).map((g) => {
        const m = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
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
var oi = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = ve({
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
}, ii = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.documentElement") : v()), e;
}, ai = () => {
  const e = ii();
  return oi({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Ul = () => {
  const e = ni(), t = ai(), r = e.y, n = e.x, o = ii(), i = o.clientWidth, a = o.clientHeight, s = n + i, c = r + a;
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
        value: ae,
        displacement: ae
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
    draggables: $o(s),
    droppables: To(a)
  };
  return xt(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function Mn(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Z(`
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
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : v()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: p
    });
  }, i = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : v()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: p
    }));
  }, a = (d, p) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : v()), t.updateDroppableScroll({
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
    r || (process.env.NODE_ENV !== "production" ? v(!1, "Should only be subscribed when a collection is occurring") : v());
    const p = r.critical.draggable;
    d.type === "ADDITION" && Mn(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && Mn(e, p, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start capturing critical dimensions as there is already a collection") : v());
      const p = e.draggable.getById(d.draggableId), g = e.droppable.getById(p.descriptor.droppableId), h = {
        draggable: p.descriptor,
        droppable: g.descriptor
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
}, si = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", zl = (e) => {
  window.scrollBy(e.x, e.y);
};
const ql = /* @__PURE__ */ ie((e) => Mt(e).filter((t) => !(!t.isEnabled || !t.frame))), Yl = (e, t) => ql(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? v(!1, "Invalid result") : v()), jo(n.frame.pageMarginBox)(e))) || null;
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
}, ci = ({
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
}, Lr = 1, Jl = (e, t, r = () => gt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Lr;
  const i = 1 - ci({
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
  const f = ci({
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
const eu = /* @__PURE__ */ _o((e) => e === 0 ? 0 : e);
var li = ({
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
    axis: Pr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Fn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Mo,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = eu({
    x: c,
    y: s
  });
  if (Le(u, ae))
    return null;
  const f = Ql({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? Le(f, ae) ? null : f : null;
};
const tu = /* @__PURE__ */ _o((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Fr = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = ce(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return Le(i, ae) ? null : i;
  };
})(), ui = ({
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
}, Gr = (e, t) => ui({
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
  return r ? ui({
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
  const a = li({
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
  const s = li({
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
    destination: he(e.impact),
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
    i || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot fluid scroll if not dragging") : v());
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
      Et(), i && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot start auto scrolling when already started") : v());
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
    const u = ce(s.current.client.selection, c);
    e({
      client: u
    });
  }, o = (s, c) => {
    if (!kr(s, c))
      return c;
    const u = nu(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const f = ve(c, u);
    return t(s.descriptor.id, f), ve(c, f);
  }, i = (s, c, u) => {
    if (!s || !Gr(c, u))
      return u;
    const f = ru(c, u);
    if (!f)
      return r(u), null;
    const l = ve(u, f);
    return r(l), ve(u, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const u = he(s.impact);
    u || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot perform a jump scroll when there is no destination") : v());
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
const pu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Qn : oe;
var be = pu;
const er = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find the head to append a style to") : v()), e;
}, Wn = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function mu(e, t) {
  const r = F(() => fu(e), [e]), n = k(null), o = k(null), i = A(ie((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), d.textContent = l;
  }), []), a = A((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot set dynamic style element if it is not set") : v()), d.textContent = l;
  }, []);
  be(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? v(!1, "style elements already mounted") : v());
    const l = Wn(t), d = Wn(t);
    return n.current = l, o.current = d, l.setAttribute(`${Xe}-always`, e), d.setAttribute(`${Xe}-dynamic`, e), er().appendChild(l), er().appendChild(d), a(r.always), i(r.resting), () => {
      const p = (g) => {
        const h = g.current;
        h || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot unmount ref as it is not set") : v()), er().removeChild(h), g.current = null;
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
  }, [i, r.dropAnimating, r.userCancel]), u = A(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return F(() => ({
    dragging: s,
    dropping: c,
    resting: u
  }), [s, c, u]);
}
function di(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var fi = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Dt(e) {
  return e instanceof fi(e).HTMLElement;
}
function pi(e, t) {
  const r = `[${Je.contextId}="${e}"]`, n = di(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Z(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Je.draggableId) === t);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Z("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Z(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function gu(e) {
  const t = k({}), r = k(null), n = k(null), o = k(!1), i = A(function(d, p) {
    const g = {
      id: d,
      focus: p
    };
    return t.current[d] = g, function() {
      const m = t.current;
      m[d] !== g && delete m[d];
    };
  }, []), a = A(function(d) {
    const p = pi(e, d);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = A(function(d, p) {
    r.current === d && (r.current = p);
  }, []), c = A(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = A(function(d) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Je.draggableId) === d && (r.current = d);
  }, []);
  return be(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), F(() => ({
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
    return d || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find draggable entry with id [${l}]`) : v()), d;
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
    return d || (process.env.NODE_ENV !== "production" ? v(!1, `Cannot find droppable entry with id [${l}]`) : v()), d;
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
  const e = F(vu, []);
  return oe(() => function() {
    M.version.startsWith("16") || M.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Wr = /* @__PURE__ */ M.createContext(null), vt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot find document.body") : v()), e;
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
  const t = F(() => Eu(e), [e]), r = k(null);
  return oe(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Be(i.style, yu), vt().appendChild(i), function() {
      setTimeout(function() {
        const c = vt();
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
let Du = 0;
const mi = {
  separator: "::"
};
function Nu(e, t = mi) {
  return F(() => `${e}${t.separator}${Du++}`, [t.separator, e]);
}
function Su(e, t = mi) {
  const r = M.useId();
  return F(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Ur = "useId" in M ? Su : Nu;
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
  }), n = F(() => wu({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return oe(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", vt().appendChild(i), function() {
      const s = vt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var kt = /* @__PURE__ */ M.createContext(null), Iu = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Ou = /(\d+)\.(\d+)\.(\d+)/, Un = (e) => {
  const t = Ou.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? v(!1, `Unable to parse React version ${e}`) : v());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Au = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Pu = (e, t) => {
  const r = Un(e), n = Un(t);
  Au(r, n) || process.env.NODE_ENV !== "production" && Z(`
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
var Ru = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Z(`
      No <!doctype html> found.

      ${tr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Z(`
      Unexpected <!doctype> found: (${t.name})

      ${tr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Z(`
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
    oe(() => {
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
function _u() {
  Nt(() => {
    Pu(Iu.react, M.version), Ru(document);
  }, []);
}
function Hr(e) {
  const t = k(e);
  return oe(() => {
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
function ht(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const $u = 9, Vu = 13, zr = 27, gi = 32, Bu = 33, Mu = 34, Lu = 35, Fu = 36, Gu = 37, ku = 38, Wu = 39, Uu = 40, ju = {
  [Vu]: !0,
  [$u]: !0
};
var vi = (e) => {
  ju[e.keyCode] && e.preventDefault();
};
const Hu = /* @__PURE__ */ (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Wt = Hu;
const hi = 0, jn = 5;
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
      if (i !== hi)
        return;
      const c = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot be IDLE") : v());
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
      vi(o);
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
    eventName: Wt,
    fn: e
  }];
}
function Yu(e) {
  const t = k(Hn), r = k(Me), n = F(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== hi || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
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
      const g = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(p, g);
    }
  }), [e]), o = F(() => ({
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
  }), [e]), i = A(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = De(window, [o, n], l);
  }, [o, n]), a = A(() => {
    t.current.type !== "IDLE" && (t.current = Hn, r.current(), i());
  }, [i]), s = A(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = A(function() {
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
  }, [s, a]), u = A(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? v(!1, "Expected to move from IDLE to PENDING drag") : v()), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  be(function() {
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
      if (o.keyCode === gi) {
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
      vi(o);
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
  const t = k(Ku), r = F(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== gi)
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
        c || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop capturing a keyboard drag when not capturing") : v()), c = !1, t.current(), n();
      }
      t.current = De(window, Ju(u, f), {
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
  be(function() {
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
      o.type === "IDLE" && (process.env.NODE_ENV, v());
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
  const t = k(rr), r = k(Me), n = A(function() {
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
      } = m, x = {
        x: y,
        y: E
      };
      r.current(), l(h, x);
    }
  }), [e]), a = A(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = De(window, [i], p);
  }, [i]), s = A(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(rr), r.current(), a());
  }, [a, o]), c = A(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = A(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: c,
      completed: s,
      getPhase: n
    }, h = De(window, rd(g), p), m = De(window, td(g), p);
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
    const h = setTimeout(f, Qu);
    o({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: h
    }), u();
  }, [u, n, o, f]);
  be(function() {
    return a(), function() {
      r.current();
      const g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(rr));
    };
  }, [n, a, o]), be(function() {
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
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot change the amount of sensor hooks after mounting") : v(!1));
    });
  });
}
const id = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function bi(e, t) {
  if (t == null)
    return !1;
  if (id.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : bi(e, t.parentElement);
}
function ad(e, t) {
  const r = t.target;
  return Dt(r) ? bi(e, r) : !1;
}
var sd = (e) => Se(e.getBoundingClientRect()).center;
function cd(e) {
  return e instanceof fi(e).Element;
}
const ld = /* @__PURE__ */ (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function yi(e, t) {
  return e == null ? null : e[ld](t) ? e : yi(e.parentElement, t);
}
function ud(e, t) {
  return e.closest ? e.closest(t) : yi(e, t);
}
function dd(e) {
  return `[${Je.contextId}="${e}"]`;
}
function fd(e, t) {
  const r = t.target;
  if (!cd(r))
    return process.env.NODE_ENV !== "production" && Z("event.target must be a Element"), null;
  const n = dd(e), o = ud(r, n);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Z("drag handle must be a HTMLElement"), null) : null;
}
function pd(e, t) {
  const r = fd(e, t);
  return r ? r.getAttribute(Je.draggableId) : null;
}
function md(e, t) {
  const r = `[${gr.contextId}="${e}"]`, o = di(document, r).find((i) => i.getAttribute(gr.id) === t);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Z("Draggable element is not a HTMLElement"), null) : null;
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
function Ei({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !si(t.getState(), n)) : (process.env.NODE_ENV !== "production" && Z(`Unable to find draggable with id: ${n}`), !1);
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
  if (!Ei({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const c = n.draggable.getById(o), u = md(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && Z(`Unable to find draggable element with id: ${o}`), null;
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
  function g(b, C) {
    wt({
      expected: b,
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(C());
  }
  const h = g.bind(null, "DRAGGING");
  function m(b) {
    function C() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (C(), process.env.NODE_ENV !== "production" ? v(!1, `Cannot lift in phase ${l}`) : v()), r.dispatch(zc(b.liftActionArgs)), l = "DRAGGING";
    function _(I, W = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), W.shouldBlockNextClick) {
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
      C(), r.dispatch(Qo({
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
      h(() => Zo({
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
  function x() {
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
    abort: x
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
  const i = [...o ? hd : [], ...n || []], a = ye(() => Tu())[0], s = A(function(m, y) {
    ht(m) && !ht(y) && a.tryAbandon();
  }, [a]);
  be(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const E = t.getState();
      s(m, E), m = E;
    });
  }, [a, t, s]), be(() => a.tryAbandon, [a.tryAbandon]);
  const c = A((h) => Ei({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: h
  }), [a, r, t]), u = A((h, m, y) => vd({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), f = A((h) => pd(e, h), [e]), l = A((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), d = A(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Vr()));
  }, [a, t]), p = A(() => a.isClaimed(), [a]), g = F(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  od(i);
  for (let h = 0; h < i.length; h++)
    i[h](g);
}
const yd = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    M.version.startsWith("16") || M.version.startsWith("17") ? r() : ro(r);
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
  return e.current || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find store from lazy ref") : v()), e.current;
}
function xd(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = k(null);
  _u();
  const s = Hr(e), c = A(() => yd(s.current), [s]), u = A(() => Ed(s.current), [s]), f = xu(t), l = Cu({
    contextId: t,
    text: i
  }), d = mu(t, o), p = A(($) => {
    rt(a).dispatch($);
  }, []), g = F(() => on({
    publishWhileDragging: Yc,
    updateDroppableScroll: Xc,
    updateDroppableIsEnabled: Jc,
    updateDroppableIsCombineEnabled: Zc,
    collectionStarting: Kc
  }, p), [p]), h = hu(), m = F(() => Hl(h, g), [h, g]), y = F(() => cu({
    scrollWindow: zl,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: u,
    ...on({
      move: Zo
    }, p)
  }), [m.scrollDroppable, p, u]), E = gu(t), x = F(() => kl({
    announce: f,
    autoScroller: y,
    dimensionMarshal: m,
    focusMarshal: E,
    getResponders: c,
    styleMarshal: d
  }), [f, y, m, E, c, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== x && process.env.NODE_ENV !== "production" && Z("unexpected store change"), a.current = x;
  const D = A(() => {
    const $ = rt(a);
    $.getState().phase !== "IDLE" && $.dispatch(Vr());
  }, []), b = A(() => {
    const $ = rt(a).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = F(() => ({
    isDragging: b,
    tryAbort: D
  }), [b, D]);
  r(C);
  const _ = A(($) => si(rt(a).getState(), $), []), I = A(() => We(rt(a).getState()), []), W = F(() => ({
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
    store: x,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), oe(() => D, [D]), M.createElement(kt.Provider, {
    value: W
  }, M.createElement(bs, {
    context: Wr,
    store: x
  }, e.children));
}
let Dd = 0;
function Nd() {
  return F(() => `${Dd++}`, []);
}
function Sd() {
  return M.useId();
}
var wd = "useId" in M ? Sd : Nd;
function Cd(e) {
  const t = wd(), r = e.dragHandleUsageInstructions || Ot.dragHandleUsageInstructions;
  return M.createElement($s, null, (n) => M.createElement(xd, {
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
}, Ad = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Pd(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Ad(e), c = !!i, u = c ? pr.drop(n, a) : pr.moveTo(n);
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
function Rd(e) {
  return {
    transform: pr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function _d(e) {
  return e.type === "DRAGGING" ? Pd(e) : Rd(e);
}
function Td(e, t, r = ae) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Io(o, n), a = _t(i, r), s = {
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
  } = e, c = F(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = A((p) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot get dimension when no ref is set") : v()), Td(r, g, p);
  }, [r, o]), f = F(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = k(f), d = k(!0);
  be(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), be(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var qr = /* @__PURE__ */ M.createContext(null);
function xi(e) {
  e && Dt(e) || (process.env.NODE_ENV !== "production" ? v(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : v());
}
function Vd(e, t, r) {
  Nt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? v(!1, "Draggable requires a draggableId") : v(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : v(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? v(!1, `${n(o)} requires an integer index prop`) : v(!1)), e.mapped.type !== "DRAGGING" && (xi(r()), e.isEnabled && (pi(t, o) || (process.env.NODE_ENV !== "production" ? v(!1, `${n(o)} Unable to find drag handle`) : v(!1))));
  });
}
function Bd(e) {
  jr(() => {
    const t = k(e);
    Nt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Draggable isClone prop value changed during component life") : v(!1));
    }, [e]);
  });
}
function Vt(e) {
  const t = eo(e);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find required context") : v()), t;
}
function Md(e) {
  e.preventDefault();
}
const Ld = (e) => {
  const t = k(null), r = A((C = null) => {
    t.current = C;
  }, []), n = A(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Vt(kt), {
    type: s,
    droppableId: c
  } = Vt(qr), u = F(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: p,
    canDragInteractiveElements: g,
    isClone: h,
    mapped: m,
    dropAnimationFinished: y
  } = e;
  if (Vd(e, o, n), Bd(h), !h) {
    const C = F(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, a, n, g, p, d]);
    $d(C);
  }
  const E = F(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Md
  } : null, [o, i, l, d]), x = A((C) => {
    m.type === "DRAGGING" && m.dropping && C.propertyName === "transform" && (M.version.startsWith("16") || M.version.startsWith("17") ? y() : ro(y));
  }, [y, m]), D = F(() => {
    const C = _d(m), _ = m.type === "DRAGGING" && m.dropping ? x : void 0;
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
  }, [o, E, l, m, x, r]), b = F(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return M.createElement(M.Fragment, null, f(D, m.snapshot, b));
};
var Fd = Ld, Di = (e, t) => e === t, Ni = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Gd = (e) => e.combine ? e.combine.draggableId : null, kd = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Wd() {
  const e = ie((o, i) => ({
    x: o,
    y: i
  })), t = ie((o, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = ie((o, i, a, s, c = null, u = null, f = null) => ({
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
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = he(o.impact), u = kd(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], u = a.result, f = u.mode, l = Ni(u), d = Gd(u), g = {
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
          dropping: g,
          draggingOver: l,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, s, l, d, g)
        }
      };
    }
    return null;
  };
}
function Si(e = null) {
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
    offset: ae,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: /* @__PURE__ */ Si(null)
  }
};
function jd() {
  const e = ie((a, s) => ({
    x: a,
    y: s
  })), t = ie(Si), r = ie((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(ae, a, !0) : null, o = (a, s, c, u) => {
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
    const g = c.displacedBy.point, h = e(g.x, g.y);
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
  dropAnimationFinished: ei
}, qd = /* @__PURE__ */ wo(Hd, zd, null, {
  context: Wr,
  areStatePropsEqual: Di
})(Fd);
var Yd = qd;
function wi(e) {
  return Vt(qr).isUsingCloneFor === e.draggableId && !e.isClone ? null : M.createElement(Yd, e);
}
function Kd(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return M.createElement(wi, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Yr = (e) => (t) => e === t, Xd = /* @__PURE__ */ Yr("scroll"), Jd = /* @__PURE__ */ Yr("auto"), Zd = /* @__PURE__ */ Yr("visible"), qn = (e, t) => t(e.overflowX) || t(e.overflowY), Qd = (e, t) => t(e.overflowX) && t(e.overflowY), Ci = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return qn(r, Xd) || qn(r, Jd);
}, ef = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = vt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, v()), !Ci(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Qd(n, Zd) || process.env.NODE_ENV !== "production" && Z(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Kr = (e) => e == null ? null : e === document.body ? ef() ? e : null : e === document.documentElement ? null : Ci(e) ? e : Kr(e.parentElement);
var tf = (e) => {
  !e || !Kr(e.parentElement) || process.env.NODE_ENV !== "production" && Z(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, vr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ii = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ii(e.parentElement) : !1;
var rf = (e) => {
  const t = Kr(e), r = Ii(e);
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
    } = s, g = oi({
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
        max: g,
        diff: {
          value: ae,
          displacement: ae
        }
      }
    };
  })(), u = o === "vertical" ? Pr : Mo, f = Ke({
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
  const r = Oo(e);
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
  const c = r.closestScrollable, u = of(e, c), f = _t(u, n), l = (() => {
    if (!c)
      return null;
    const p = Oo(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: _t(p, n),
      scroll: vr(c),
      scrollSize: g,
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
  const t = k(null), r = Vt(kt), n = Ur("droppable"), {
    registry: o,
    marshal: i
  } = r, a = Hr(e), s = F(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = k(s), u = F(() => ie((D, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? v(!1, "Can only update scroll when dragging") : v());
    const C = {
      x: D,
      y: b
    };
    i.updateDroppableScroll(s.id, C);
  }), [s.id, i]), f = A(() => {
    const D = t.current;
    return !D || !D.env.closestScrollable ? ae : vr(D.env.closestScrollable);
  }, []), l = A(() => {
    const D = f();
    u(D.x, D.y);
  }, [f, u]), d = F(() => lt(l), [l]), p = A(() => {
    const D = t.current, b = Ct(D);
    if (D && b || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find scroll options while scrolling") : v()), D.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), g = A((D, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect a droppable while a drag is occurring") : v());
    const C = a.current, _ = C.getDroppableRef();
    _ || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot collect without a droppable ref") : v());
    const I = rf(_), W = {
      ref: _,
      descriptor: s,
      env: I,
      scrollOptions: b
    };
    t.current = W;
    const $ = af({
      ref: _,
      descriptor: s,
      env: I,
      windowScroll: D,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), U = I.closestScrollable;
    return U && (U.setAttribute(kn.contextId, r.contextId), U.addEventListener("scroll", p, Yn(W.scrollOptions)), process.env.NODE_ENV !== "production" && tf(U)), $;
  }, [r.contextId, s, p, a]), h = A(() => {
    const D = t.current, b = Ct(D);
    return D && b || (process.env.NODE_ENV !== "production" ? v(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : v()), vr(b);
  }, []), m = A(() => {
    const D = t.current;
    D || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot stop drag when no active drag") : v());
    const b = Ct(D);
    t.current = null, b && (d.cancel(), b.removeAttribute(kn.contextId), b.removeEventListener("scroll", p, Yn(D.scrollOptions)));
  }, [p, d]), y = A((D) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll when there is no drag") : v());
    const C = Ct(b);
    C || (process.env.NODE_ENV !== "production" ? v(!1, "Cannot scroll a droppable with no closest scrollable") : v()), C.scrollTop += D.y, C.scrollLeft += D.x;
  }, []), E = F(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: y
  }), [m, g, h, y]), x = F(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: E
  }), [E, s, n]);
  be(() => (c.current = x.descriptor, o.droppable.register(x), () => {
    t.current && (process.env.NODE_ENV !== "production" && Z("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(x);
  }), [E, s, m, x, i, o.droppable]), be(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), be(() => {
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
  const t = k(null), r = A(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, c] = ye(e.animate === "open");
  oe(() => s ? n !== "open" ? (r(), c(!1), nr) : t.current ? nr : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : nr, [n, s, r]);
  const u = A((l) => {
    l.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = df({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return M.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var pf = /* @__PURE__ */ M.memo(ff);
function or(e) {
  return typeof e == "boolean";
}
function ir(e, t) {
  t.forEach((r) => r(e));
}
const mf = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? v(!1, "A Droppable requires a droppableId prop") : v()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? v(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : v());
}, function({
  props: t
}) {
  or(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isDropDisabled must be a boolean") : v()), or(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? v(!1, "isCombineEnabled must be a boolean") : v()), or(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? v(!1, "ignoreContainerClipping must be a boolean") : v());
}, function({
  getDroppableRef: t
}) {
  xi(t());
}], gf = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Z(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], vf = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? v(!1, "Must provide a clone render function (renderClone) for virtual lists") : v());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? v(!1, "Expected virtual list to not have a placeholder") : v());
}];
function hf(e) {
  Nt(() => {
    ir(e, mf), e.props.mode === "standard" && ir(e, gf), e.props.mode === "virtual" && ir(e, vf);
  });
}
class bf extends M.PureComponent {
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
  const t = eo(kt);
  t || (process.env.NODE_ENV !== "production" ? v(!1, "Could not find app context") : v());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = k(null), i = k(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: p,
    snapshot: g,
    useClone: h,
    updateViewportMaxScroll: m,
    getContainerForClone: y
  } = e, E = A(() => o.current, []), x = A((G = null) => {
    o.current = G;
  }, []), D = A(() => i.current, []), b = A((G = null) => {
    i.current = G;
  }, []);
  hf({
    props: e,
    getDroppableRef: E,
    getPlaceholderRef: D
  });
  const C = A(() => {
    n() && m({
      maxScroll: ai()
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
  const _ = F(() => M.createElement(bf, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: G,
    data: re,
    animate: se
  }) => M.createElement(pf, {
    placeholder: re,
    onClose: G,
    innerRef: b,
    animate: se,
    contextId: r,
    onTransitionEnd: C
  })), [r, C, e.placeholder, e.shouldAnimatePlaceholder, b]), I = F(() => ({
    innerRef: x,
    placeholder: _,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, _, x]), W = h ? h.dragging.draggableId : null, $ = F(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: W
  }), [s, W, c]);
  function U() {
    if (!h)
      return null;
    const {
      dragging: G,
      render: re
    } = h, se = M.createElement(wi, {
      draggableId: G.draggableId,
      index: G.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ne, T) => re(ne, T, G));
    return Ti.createPortal(se, y());
  }
  return M.createElement(qr.Provider, {
    value: $
  }, a(I, g), U());
};
var Ef = yf;
function xf() {
  return document.body || (process.env.NODE_ENV !== "production" ? v(!1, "document.body is not ready") : v()), document.body;
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
}, Oi = (e) => {
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
  }, r = ie((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = ie((i, a, s, c, u, f) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const g = f ? {
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
      placeholder: u.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, a) => {
    const s = Oi(a), c = s.droppableId, u = s.type, f = !s.isDropDisabled, l = s.renderClone;
    if (ht(i)) {
      const d = i.critical;
      if (!ar(u, d))
        return t;
      const p = Jn(d, i.dimensions), g = he(i.impact) === c;
      return n(c, f, g, g, p, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!ar(u, d.critical))
        return t;
      const p = Jn(d.critical, i.dimensions);
      return n(c, f, Ni(d.result) === c, he(d.impact) === c, p, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!ar(u, d.critical))
        return t;
      const p = he(d.impact) === c, g = !!(d.impact.at && d.impact.at.type === "COMBINE"), h = d.critical.droppable.id === c;
      return p ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, Nf = {
  updateViewportMaxScroll: el
}, Sf = /* @__PURE__ */ wo(Df, Nf, (e, t, r) => ({
  ...Oi(r),
  ...e,
  ...t
}), {
  context: Wr,
  areStatePropsEqual: Di
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
  const [f, l] = ye(null), [d, p] = ye(e);
  oe(() => {
    p(e);
  }, [e]);
  const g = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", h = (y) => {
    a == null || a(y), l(y);
  }, m = (y) => {
    if (!y.destination || !(d != null && d.length)) return;
    const E = y.source.index, x = y.destination.index, D = [...d], [b] = D.splice(E, 1);
    D.splice(x, 0, b), p(D);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ le("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ w("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ w("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ w(no, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ w(mo, { className: u, children: /* @__PURE__ */ w("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ w("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ w(Cd, { onDragEnd: m, children: /* @__PURE__ */ w(wf, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ le("table", { className: "w-full", children: [
    /* @__PURE__ */ w("thead", { children: /* @__PURE__ */ w("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((E, x) => /* @__PURE__ */ w(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === E.name.find((D) => D) ? `-${E.name.find((D) => D) ?? ""}` : E.name.find((D) => D) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === E.name.find((D) => D) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: E.title
      },
      x
    )) }) }),
    /* @__PURE__ */ le(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          d == null ? void 0 : d.map((E, x) => {
            var D;
            return /* @__PURE__ */ w(
              Kd,
              {
                isDragDisabled: o,
                draggableId: (D = E == null ? void 0 : E.id) == null ? void 0 : D.toString(),
                index: x,
                children: (b) => {
                  const C = {
                    ...b.draggableProps.style
                  };
                  return /* @__PURE__ */ w(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === d[x] && g}`,
                      onClick: () => h(
                        s ? E[s] : E.id
                      ),
                      ref: b.innerRef,
                      ...b.draggableProps,
                      ...b.dragHandleProps,
                      style: C,
                      children: t.map((_, I) => {
                        var $;
                        let W = ($ = _ == null ? void 0 : _.name) == null ? void 0 : $.reduce(
                          (U, G) => U == null ? void 0 : U[G],
                          d == null ? void 0 : d[x]
                        );
                        return /* @__PURE__ */ w(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: _.transform ? _.transform(W, x) : W
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
}, Xf = Cf, If = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ w(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Jf = If;
var hr = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new WeakMap(), Zn = 0, Of = void 0;
function Af(e) {
  return e ? (It.has(e) || (Zn += 1, It.set(e, Zn.toString())), It.get(e)) : "0";
}
function Pf(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? Af(e.root) : e[t]}`).toString();
}
function Rf(e) {
  const t = Pf(e);
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
function _f(e, t, r = {}, n = Of) {
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
  const { id: o, observer: i, elements: a } = Rf(r), s = a.get(e) || [];
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
  const [l, d] = B.useState(null), p = B.useRef(u), [g, h] = B.useState({
    inView: !!s,
    entry: void 0
  });
  p.current = u, B.useEffect(
    () => {
      if (a || !l) return;
      let x;
      return x = _f(
        l,
        (D, b) => {
          h({
            inView: D,
            entry: b
          }), p.current && p.current(D, b), b.isIntersecting && i && x && (x(), x = void 0);
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
        x && x();
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
  const E = [d, g.inView, g.entry];
  return E.ref = E[0], E.inView = E[1], E.entry = E[2], E;
}
const $f = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = ye(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return oe(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ w(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ w(
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
  } = e, g = d == null ? void 0 : d.pages.flatMap((y) => y), { ref: h, inView: m } = Tf();
  return oe(() => {
    m && c && u();
  }, [u, m, c]), /* @__PURE__ */ le(it, { children: [
    s && /* @__PURE__ */ w(Vf, { className: n }),
    /* @__PURE__ */ w(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(g != null && g.length) && g.map((y, E) => t(y, E))
      }
    ),
    /* @__PURE__ */ w(
      "div",
      {
        className: br(
          "flex mt-8 flex-row items-center justify-center",
          i
        ),
        ref: h,
        children: l || p ? a : g != null && g.length ? f ? a : null : o
      }
    )
  ] });
}, Zf = Bf, Qf = () => {
  const e = k(null);
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
  no as Loader,
  qf as MultiSelectSearch,
  Vf as ScrollTopButton,
  Yf as Search,
  Kf as Select,
  Xf as Table,
  Jf as Textarea,
  mo as Wrapper,
  go as useDebounce,
  Qf as useScroll
};
