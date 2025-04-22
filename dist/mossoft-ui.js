import { jsx as w, jsxs as le, Fragment as it } from "react/jsx-runtime";
import { motion as eo, AnimatePresence as Ai } from "framer-motion";
import * as B from "react";
import M, { memo as Pi, useRef as W, useState as ye, useEffect as oe, useMemo as _i, useLayoutEffect as to, useContext as ro } from "react";
import { twMerge as br } from "tailwind-merge";
import Ri, { flushSync as no } from "react-dom";
const Ti = ({ name: e, className: t, ...r }) => /* @__PURE__ */ w(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ w(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), at = /* @__PURE__ */ Pi(Ti), $i = ({ style: e, text: t }) => /* @__PURE__ */ le("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ w("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ w("span", { className: "text-base", children: t })
] }), yr = $i, Vi = ({
  children: e,
  onClick: t,
  className: r,
  isLoading: n,
  variant: o,
  icon: i,
  disabled: a,
  ...s
}) => {
  const c = [
    "relative inline-flex items-center justify-center font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    "rounded-2xl px-6 py-3 text-sm md:text-base",
    r,
    o === "primary" && "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    o === "secondary" && "bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary",
    o === "danger" && "bg-danger/10 text-danger hover:bg-danger/20 focus:ring-danger",
    o === "link" && "bg-transparent text-primary hover:underline px-2 py-1 focus:ring-primary",
    o === "small-primary" && "bg-primary text-white text-xs px-4 py-2 hover:bg-primary/90 focus:ring-primary",
    o === "small-secondary" && "bg-primary/20 text-primary text-xs px-4 py-2 hover:bg-primary/30 focus:ring-primary",
    o === "small-danger" && "bg-danger/10 text-danger text-xs px-4 py-2 hover:bg-danger/20 focus:ring-danger",
    o === "tab" && "bg-primary text-white text-sm md:text-base px-5 py-2 rounded-full focus:ring-primary"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ w(
    eo.button,
    {
      disabled: a || n,
      onClick: t,
      className: c,
      ...s,
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, ease: "easeOut" },
      whileTap: { scale: 0.96 },
      whileHover: !a && !n ? { scale: 1.02 } : void 0,
      children: n ? /* @__PURE__ */ w(yr, { style: { width: 20, height: 20 } }) : /* @__PURE__ */ le(it, { children: [
        e,
        i && /* @__PURE__ */ w(
          at,
          {
            name: i,
            className: `ml-2 ${o.includes("small") ? "w-4 h-4" : "w-5 h-5"}`
          }
        )
      ] })
    }
  );
}, Gf = Vi, Bi = ({ error: e }) => /* @__PURE__ */ w("div", { className: "", children: e && Object.keys(e).length ? /* @__PURE__ */ w("span", { className: "block text-danger text-[12px] text-center", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), Er = Bi, Mi = ({
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
  a && /* @__PURE__ */ w(Er, { error: a })
] }), kf = Mi, Li = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ w("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ w(it, { children: o.title ? /* @__PURE__ */ w(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ w(it, {}) })) }), Wf = Li;
function xr(e, t) {
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
function Fi(e) {
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
function Gi(e) {
  return typeof e == "number" && isNaN(e);
}
function oo(e) {
  return Ue(e) || Gi(e) || typeof e == "number" && !isFinite(e);
}
function io(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function ki(e) {
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
function Wi(e, t, r) {
  var n = ki(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Ui(e) {
  var t = W(e);
  t.current = e;
  var r = W(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Dr(e, t) {
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
function ji(e) {
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
function Jr(e, t) {
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
  return a < 0 ? o = "0." + Jr("0", Math.abs(a)) + o : a >= s ? o = o + Jr("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function Zr(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = Dr(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, c = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : c.toFixed(t), f = u.split("."), l = i;
  i && Number(f[0]) && (l = i.split("").reverse().reduce(function(h, m, y) {
    return h.length > y ? (Number(h[0]) + Number(m)).toString() + h.substring(1, h.length) : m + h;
  }, f[0]));
  var d = ao(f[1] || "", t, r), p = s ? "-" : "", v = n ? "." : "";
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
var co = /* @__PURE__ */ Fi(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), Hi = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function zi(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function jt(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function qi() {
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
function Yi(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Ki(e, t, r, n, o, i, a) {
  a === void 0 && (a = Yi);
  var s = o.findIndex(function(D) {
    return D;
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
  var x = y === -1 || d[y] === -1 ? 0 : d[y] + 1;
  return x > E ? E : n - x < E - n ? x : E;
}
function At(e, t, r, n) {
  var o = e.length;
  if (t = zi(t, 0, o), n === "left") {
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
function Xi(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(je(e[r]) || je(e[r - 1]));
  return t;
}
function fo(e, t, r, n, o, i) {
  i === void 0 && (i = Re);
  var a = Ui(function(v, h) {
    var m, y;
    return oo(v) ? (y = "", m = "") : typeof v == "number" || h ? (y = typeof v == "number" ? so(v) : v, m = n(y)) : (y = o(v, void 0), m = n(y)), { formattedValue: m, numAsString: y };
  }), s = ye(function() {
    return a(Ue(e) ? t : e, r);
  }), c = s[0], u = s[1], f = function(v, h) {
    v.formattedValue !== c.formattedValue && u({
      formattedValue: v.formattedValue,
      numAsString: v.value
    }), i(v, h);
  }, l = e, d = r;
  Ue(e) && (l = c.numAsString, d = !0);
  var p = a(l, d);
  return _i(function() {
    u(p);
  }, [p.formattedValue]), [c, f];
}
function Ji(e) {
  return e.replace(/[^0-9]/g, "");
}
function Zi(e) {
  return e;
}
function po(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Zi);
  var s = e.removeFormatting;
  s === void 0 && (s = Ji);
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
  E === void 0 && (E = Xi);
  var x = e.isValidInputCharacter;
  x === void 0 && (x = je);
  var D = e.isCharacterSame, b = xr(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), C = fo(y, c, !!u, a, s, f), R = C[0], I = R.formattedValue, k = R.numAsString, $ = C[1], U = W(), G = W({ formattedValue: I, numAsString: k }), re = function(S, P) {
    G.current = { formattedValue: S.formattedValue, numAsString: S.value }, $(S, P);
  }, se = ye(!1), ne = se[0], T = se[1], _ = W(null), L = W({
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
    var ee = E(P), fe = Ki(P, I, S, V, ee, x, D);
    return fe = At(P, fe, ee), fe;
  }, Se = function(S) {
    var P = S.formattedValue;
    P === void 0 && (P = "");
    var V = S.input, ee = S.source, fe = S.event, te = S.numAsString, X;
    if (V) {
      var _e = S.inputValue || V.value, Te = jt(V);
      V.value = P, X = ue(_e, P, Te), X !== void 0 && Y(V, X, P);
    }
    P !== I && re(J(P, te), { event: fe, source: ee });
  };
  oe(function() {
    var S = G.current, P = S.formattedValue, V = S.numAsString;
    (I !== P || k !== V) && re(J(I, k), {
      event: void 0,
      source: st.props
    });
  }, [I, k]);
  var me = _.current ? jt(_.current) : void 0, Ee = typeof window < "u" ? to : oe;
  Ee(function() {
    var S = _.current;
    if (I !== G.current.formattedValue && S) {
      var P = ue(G.current.formattedValue, I, me);
      S.value = I, Y(S, P, I);
    }
  }, [I]);
  var Ce = function(S, P, V) {
    var ee = P.target, fe = U.current ? Hi(U.current, ee.selectionEnd) : co(I, S), te = Object.assign(Object.assign({}, fe), { lastValue: I }), X = s(S, te), _e = K(X);
    if (X = s(_e, void 0), l && !l(J(_e, X))) {
      var Te = P.target, $e = jt(Te), Ut = ue(S, I, $e);
      return Te.value = I, Y(Te, Ut, I), !1;
    }
    return Se({
      formattedValue: _e,
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
    var _e = 0;
    V === "Delete" && ee === fe && (_e = 1);
    var Te = V === "ArrowLeft" || V === "ArrowRight";
    if (X === void 0 || ee !== fe && !Te) {
      p(S), Oe(P, _e);
      return;
    }
    var $e = X;
    if (Te) {
      var Ut = V === "ArrowLeft" ? "left" : "right";
      $e = Q(te, X, Ut), $e !== X && S.preventDefault();
    } else V === "Delete" && !x(te[X]) ? $e = Q(te, X, "right") : V === "Backspace" && !x(te[X]) && ($e = Q(te, X, "left"));
    $e !== X && Y(P, $e, te), p(S), Oe(P, _e);
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
    }), v(S), Oe(P);
  }, N = function(S) {
    S.persist && S.persist();
    var P = S.target, V = S.currentTarget;
    _.current = P, L.current.focusTimeout = setTimeout(function() {
      var ee = P.selectionStart, fe = P.selectionEnd, te = P.value;
      te === void 0 && (te = "");
      var X = Q(te, ee);
      X !== ee && !(ee === 0 && fe === te.length) && Y(P, X, te), h(Object.assign(Object.assign({}, S), { currentTarget: V }));
    }, 0);
  }, ge = function(S) {
    _.current = null, clearTimeout(L.current.focusTimeout), clearTimeout(L.current.setCaretTimeout), m(S);
  }, O = ne && qi() ? "numeric" : void 0, Pe = Object.assign({ inputMode: O }, b, {
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
function Qr(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = Bt(t), u = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && n, d = Dr(e, a), p = d.beforeDecimal, v = d.afterDecimal, h = d.addNegation;
  return r !== void 0 && (v = ao(v, r, !!n)), u && (p = Wi(p, u, s)), o && (p = o + p), i && (v = v + i), h && (p = "-" + p), e = p + (l && f || "") + v, e;
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
function Qi(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function ea(e, t) {
  return new RegExp("(^-)|[0-9]|" + io(e), "g");
}
function ta(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function ra(e, t, r) {
  var n;
  t === void 0 && (t = lo(e));
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
  var y = function(_, L, K) {
    var J = !1, Y = !1;
    i.startsWith("-") ? J = !1 : _.startsWith("--") ? (J = !1, Y = !0) : a.startsWith("-") && _.length === a.length ? J = !1 : _[0] === "-" && (J = !0);
    var Q = J ? 1 : 0;
    return Y && (Q = 2), Q && (_ = _.substring(Q), L -= Q, K -= Q), { value: _, start: L, end: K, hasNegation: J };
  }, E = y(e, f, l), x = E.hasNegation;
  n = E, e = n.value, f = n.start, l = n.end;
  var D = y(t.lastValue, c.start, c.end), b = D.start, C = D.end, R = D.value, I = e.substring(f, l);
  e.length && R.length && (b > R.length - a.length || C < i.length) && !(I && a.startsWith(I)) && (e = R);
  var k = 0;
  e.startsWith(i) ? k += i.length : f < i.length && (k = f), e = e.substring(k), l -= k;
  var $ = e.length, U = e.length - a.length;
  e.endsWith(a) ? $ = U : (l > U || l > e.length - a.length) && ($ = l), e = e.substring(0, $), e = Qi(x ? "-" + e : e, o), e = (e.match(ea(v)) || []).join("");
  var G = e.indexOf(v);
  e = e.replace(new RegExp(io(v), "g"), function(_, L) {
    return L === G ? "." : "";
  });
  var re = Dr(e, o), se = re.beforeDecimal, ne = re.afterDecimal, T = re.addNegation;
  return u.end - u.start < c.end - c.start && se === "" && h && !parseFloat(ne) && (e = T ? "-" : ""), e;
}
function na(e, t) {
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
function oa(e) {
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
function ia(e) {
  e = oa(e);
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Re);
  var i = e.onBlur;
  i === void 0 && (i = Re);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var f = e.defaultValue, l = e.value, d = e.valueIsNumericString, p = e.onValueChange, v = xr(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), h = Bt(e), m = h.decimalSeparator, y = h.allowedDecimalSeparators, E = function(T) {
    return Qr(T, e);
  }, x = function(T, _) {
    return ra(T, _, e);
  }, D = Ue(l) ? f : l, b = d ?? ta(D, u, t);
  Ue(l) ? Ue(f) || (b = b || typeof f == "number") : b = b || typeof l == "number";
  var C = function(T) {
    return oo(T) ? T : (typeof T == "number" && (T = so(T)), b && typeof s == "number" ? Zr(T, s, !!c) : T);
  }, R = fo(C(l), C(f), !!b, E, x, p), I = R[0], k = I.numAsString, $ = I.formattedValue, U = R[1], G = function(T) {
    var _ = T.target, L = T.key, K = _.selectionStart, J = _.selectionEnd, Y = _.value;
    if (Y === void 0 && (Y = ""), (L === "Backspace" || L === "Delete") && J < u.length) {
      T.preventDefault();
      return;
    }
    if (K !== J) {
      o(T);
      return;
    }
    L === "Backspace" && Y[0] === "-" && K === u.length + 1 && r && Ve(_, 1), s && c && (L === "Backspace" && Y[K - 1] === m ? (Ve(_, K - 1), T.preventDefault()) : L === "Delete" && Y[K] === m && T.preventDefault()), y != null && y.includes(L) && Y[K] === m && Ve(_, K + 1);
    var Q = a === !0 ? "," : a;
    L === "Backspace" && Y[K - 1] === Q && Ve(_, K - 1), L === "Delete" && Y[K] === Q && Ve(_, K + 1), o(T);
  }, re = function(T) {
    var _ = k;
    if (_.match(/\d/g) || (_ = ""), n || (_ = ji(_)), c && s && (_ = Zr(_, s, c)), _ !== k) {
      var L = Qr(_, e);
      U({
        formattedValue: L,
        value: _,
        floatValue: parseFloat(_)
      }, {
        event: T,
        source: st.event
      });
    }
    i(T);
  }, se = function(T) {
    return T === m ? !0 : je(T);
  }, ne = function(T) {
    var _ = T.currentValue, L = T.lastValue, K = T.formattedValue, J = T.currentValueIndex, Y = T.formattedValueIndex, Q = _[J], ue = K[Y], Se = co(L, _), me = Se.to, Ee = function(Ce) {
      return x(Ce).indexOf(".") + u.length;
    };
    return l === 0 && c && s && _[me.start] === m && Ee(_) < J && Ee(K) > Y ? !1 : J >= me.start && J < me.end && y && y.includes(Q) && ue === m ? !0 : Q === ue;
  };
  return Object.assign(Object.assign({}, v), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: se,
    isCharacterSame: ne,
    onValueChange: U,
    format: E,
    removeFormatting: x,
    getCaretBoundary: function(T) {
      return na(T, e);
    },
    onKeyDown: G,
    onBlur: re
  });
}
function aa(e) {
  var t = ia(e);
  return M.createElement(po, Object.assign({}, t));
}
function sa(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || uo(o, a), a += 1);
  return s.join("");
}
function ca(e, t, r) {
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
  var p = s.substring(0, i.start), v = e.substring(a.start, a.end), h = s.substring(i.end);
  return "" + u(p, 0) + f(v) + u(h, i.end);
}
function la(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, p) {
    var v = void 0;
    d === o && (a++, v = uo(n, a - 1), s === -1 && e[p] === v && (s = p)), c[p] = v;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== c[d];
  }, f = 0, l = i.length; f < l; f++)
    i[f] = f === s || u(f) || u(f - 1);
  return i[r.indexOf(o)] = !0, i;
}
function ua(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function da(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function fa(e) {
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = Re);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = xr(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  ua(e);
  var u = function(v) {
    return la(v, e);
  }, f = function(v) {
    var h = v.key, m = v.target, y = m.selectionStart, E = m.selectionEnd, x = m.value;
    if (y !== E) {
      n(v);
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
    D !== y && Ve(m, D), n(v);
  }, l = Ue(i) ? a : i, d = s ?? da(l, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(v) {
      return sa(v, p);
    },
    removeFormatting: function(v, h) {
      return ca(v, h, p);
    },
    getCaretBoundary: u,
    onKeyDown: f
  });
}
function pa(e) {
  var t = fa(e);
  return M.createElement(po, Object.assign({}, t));
}
const ma = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, ga = ({
  type: e,
  field: t,
  label: r,
  fieldState: n,
  postfix: o,
  labelClassName: i,
  errorPlace: a = "right",
  parentClassName: s,
  className: c,
  formState: u,
  numberWrapperClassname: f,
  format: l,
  wrapperClassName: d,
  decimalScale: p = 1,
  ...v
}) => {
  var m, y;
  const h = "!border-danger";
  return /* @__PURE__ */ le("label", { className: `relative w-full ${d}`, children: [
    r && /* @__PURE__ */ w(
      "span",
      {
        className: `absolute left-[20px] -top-[10px] px-[6px] text-primary text-xs md:text-sm bg-white z-[1] ${i}`,
        children: r
      }
    ),
    l ? /* @__PURE__ */ w(
      pa,
      {
        onValueChange: (E) => {
          var x;
          t == null || t.onChange((x = E.value.replace("_", "")) == null ? void 0 : x.toString());
        },
        value: (m = t == null ? void 0 : t.value) == null ? void 0 : m.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        style: { fontSize: "16px" },
        className: `$${n != null && n.error ? h : ""} w-full border border-primary rounded-xl md:border-primary md:bg-white text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 outline-none ${c}`,
        format: l,
        ...v
      }
    ) : e === "number" ? /* @__PURE__ */ le(
      "div",
      {
        className: `$${n != null && n.error ? h : ""} ${s} flex items-center justify-between w-full border-[1px] border-primary rounded-xl bg-white transition-all duration-300`,
        children: [
          /* @__PURE__ */ w(
            aa,
            {
              decimalScale: p,
              style: { fontSize: "16px" },
              onValueChange: (E) => {
                var x;
                return t == null ? void 0 : t.onChange(+((x = E.value.replace("_", "")) == null ? void 0 : x.toString()));
              },
              value: +(t == null ? void 0 : t.value),
              className: `w-full border-[1px] border-primary rounded-xl md:border-primary bg-white text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...v,
              ...ma.number
            }
          ),
          o ? /* @__PURE__ */ w("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: o }) : null
        ]
      }
    ) : /* @__PURE__ */ w(
      "input",
      {
        ...t,
        ...v,
        type: e,
        style: { fontSize: "16px" },
        className: `$${n != null && n.error ? h : ""} w-full bg-white border outline-none border-primary rounded-xl text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    /* @__PURE__ */ w("div", { className: "absolute w-full items-center flex justify-center flex-row min-h-[24px]", children: /* @__PURE__ */ w(Ai, { children: (n == null ? void 0 : n.error) && ((y = Object.keys(n == null ? void 0 : n.error)) == null ? void 0 : y.length) > 0 && /* @__PURE__ */ w(
      eo.div,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        transition: { duration: 0.2 },
        className: "w-full flex justify-center",
        children: /* @__PURE__ */ w(Er, { error: n == null ? void 0 : n.error })
      }
    ) }) })
  ] });
}, Uf = ga, va = ({
  children: e,
  className: t
}) => /* @__PURE__ */ w(
  "div",
  {
    className: br(
      "bg-main rounded-[25px] py-5 px-[30px] border-primary/10 border",
      t
    ),
    children: e
  }
), mo = va, ha = ({ data: e, className: t, onClick: r }) => {
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
}, jf = ha;
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
const ba = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = ye(!1), [a, s] = ye(""), c = go(a, 100), u = W(null);
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
}, Hf = ba, ya = ({
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
}, zf = ya, Ea = ({
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
              t == null ? void 0 : t.map((p, v) => /* @__PURE__ */ w("option", { value: p.value, className: "text-black", children: p.label }, v))
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ w("div", { className: "absolute w-full items-center flex justify-center flex-row", children: (o == null ? void 0 : o.error) && ((d = Object.keys(o == null ? void 0 : o.error)) == null ? void 0 : d.length) && /* @__PURE__ */ w(Er, { error: o == null ? void 0 : o.error }) })
  ] });
}, qf = Ea;
function ct(e) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ct(e);
}
function xa(e, t) {
  if (ct(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ct(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Da(e) {
  var t = xa(e, "string");
  return ct(t) == "symbol" ? t : t + "";
}
function Na(e, t, r) {
  return (t = Da(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function en(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? en(Object(r), !0).forEach(function(n) {
      Na(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : en(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var rn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ht = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, nn = {
  INIT: "@@redux/INIT" + /* @__PURE__ */ Ht(),
  REPLACE: "@@redux/REPLACE" + /* @__PURE__ */ Ht(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ht();
  }
};
function wa(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Sa(e) {
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
  if (Oa(e)) return "date";
  if (Ia(e)) return "error";
  var r = Ca(e);
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
function Ca(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Ia(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Oa(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function ke(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Sa(e)), t;
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
    if (!wa(h))
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
      type: nn.REPLACE
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
        function x() {
          E.next && E.next(f());
        }
        x();
        var D = m(x);
        return {
          unsubscribe: D
        };
      }
    }, h[rn] = function() {
      return this;
    }, h;
  }
  return d({
    type: nn.INIT
  }), n = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: p
  }, n[rn] = v, n;
}
function on(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function an(e, t) {
  if (typeof e == "function")
    return on(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? pe(16) : "bindActionCreators expected an object or a function, but instead received: '" + ke(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = on(o, t));
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
function Aa() {
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
      return i = ho.apply(void 0, s)(o.dispatch), tn(tn({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function _a(e) {
  e();
}
let Ra = _a;
const Ta = () => Ra, sn = /* @__PURE__ */ Symbol.for("react-redux-context"), cn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function $a() {
  var e;
  if (!B.createContext) return {};
  const t = (e = cn[sn]) != null ? e : cn[sn] = /* @__PURE__ */ new Map();
  let r = t.get(B.createContext);
  return r || (r = B.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(B.createContext, r)), r;
}
const bo = /* @__PURE__ */ $a(), Va = () => {
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
var ln;
function Ba() {
  if (ln) return j;
  ln = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
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
  function D(b) {
    return x(b) === u;
  }
  return j.AsyncMode = c, j.ConcurrentMode = u, j.ContextConsumer = s, j.ContextProvider = a, j.Element = t, j.ForwardRef = f, j.Fragment = n, j.Lazy = v, j.Memo = p, j.Portal = r, j.Profiler = i, j.StrictMode = o, j.Suspense = l, j.isAsyncMode = function(b) {
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
    return x(b) === v;
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
    return typeof b == "string" || typeof b == "function" || b === n || b === u || b === i || b === o || b === l || b === d || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === p || b.$$typeof === a || b.$$typeof === s || b.$$typeof === f || b.$$typeof === m || b.$$typeof === y || b.$$typeof === E || b.$$typeof === h);
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
var un;
function Ma() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function x(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === u || N === i || N === o || N === l || N === d || typeof N == "object" && N !== null && (N.$$typeof === v || N.$$typeof === p || N.$$typeof === a || N.$$typeof === s || N.$$typeof === f || N.$$typeof === m || N.$$typeof === y || N.$$typeof === E || N.$$typeof === h);
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
                  case v:
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
    var b = c, C = u, R = s, I = a, k = t, $ = f, U = n, G = v, re = p, se = r, ne = i, T = o, _ = l, L = !1;
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
    function Se(N) {
      return D(N) === f;
    }
    function me(N) {
      return D(N) === n;
    }
    function Ee(N) {
      return D(N) === v;
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
    H.AsyncMode = b, H.ConcurrentMode = C, H.ContextConsumer = R, H.ContextProvider = I, H.Element = k, H.ForwardRef = $, H.Fragment = U, H.Lazy = G, H.Memo = re, H.Portal = se, H.Profiler = ne, H.StrictMode = T, H.Suspense = _, H.isAsyncMode = K, H.isConcurrentMode = J, H.isContextConsumer = Y, H.isContextProvider = Q, H.isElement = ue, H.isForwardRef = Se, H.isFragment = me, H.isLazy = Ee, H.isMemo = Ce, H.isPortal = Oe, H.isProfiler = Ie, H.isStrictMode = Ae, H.isSuspense = qe, H.isValidElementType = x, H.typeOf = D;
  }()), H;
}
process.env.NODE_ENV === "production" ? sr.exports = /* @__PURE__ */ Ba() : sr.exports = /* @__PURE__ */ Ma();
var La = sr.exports, Nr = La, Fa = {
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
}, Ga = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ka = {
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
}, wr = {};
wr[Nr.ForwardRef] = ka;
wr[Nr.Memo] = Eo;
function dn(e) {
  return Nr.isMemo(e) ? Eo : wr[e.$$typeof] || Fa;
}
var Wa = Object.defineProperty, Ua = Object.getOwnPropertyNames, fn = Object.getOwnPropertySymbols, ja = Object.getOwnPropertyDescriptor, Ha = Object.getPrototypeOf, pn = Object.prototype;
function xo(e, t, r) {
  if (typeof t != "string") {
    if (pn) {
      var n = Ha(t);
      n && n !== pn && xo(e, n, r);
    }
    var o = Ua(t);
    fn && (o = o.concat(fn(t)));
    for (var i = dn(e), a = dn(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!Ga[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = ja(t, c);
        try {
          Wa(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var za = xo;
const mn = /* @__PURE__ */ Pa(za);
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
var gn;
function qa() {
  if (gn) return z;
  gn = 1;
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
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === l || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
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
var vn;
function Ya() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, m = !1, y = !1, E = !1, x;
    x = Symbol.for("react.module.reference");
    function D(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === r || O === o || E || O === n || O === u || O === f || y || O === p || v || h || m || typeof O == "object" && O !== null && (O.$$typeof === d || O.$$typeof === l || O.$$typeof === i || O.$$typeof === a || O.$$typeof === c || // This needs to include all possible module reference object
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
    var C = a, R = i, I = e, k = c, $ = r, U = d, G = l, re = t, se = o, ne = n, T = u, _ = f, L = !1, K = !1;
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
    function Se(O) {
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
    q.ContextConsumer = C, q.ContextProvider = R, q.Element = I, q.ForwardRef = k, q.Fragment = $, q.Lazy = U, q.Memo = G, q.Portal = re, q.Profiler = se, q.StrictMode = ne, q.Suspense = T, q.SuspenseList = _, q.isAsyncMode = J, q.isConcurrentMode = Y, q.isContextConsumer = Q, q.isContextProvider = ue, q.isElement = Se, q.isForwardRef = me, q.isFragment = Ee, q.isLazy = Ce, q.isMemo = Oe, q.isPortal = Ie, q.isProfiler = Ae, q.isStrictMode = qe, q.isSuspense = N, q.isSuspenseList = ge, q.isValidElementType = D, q.typeOf = b;
  }()), q;
}
process.env.NODE_ENV === "production" ? cr.exports = /* @__PURE__ */ qa() : cr.exports = /* @__PURE__ */ Ya();
var hn = cr.exports;
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
function Ka(e, t, r) {
  zt(e, "mapStateToProps"), zt(t, "mapDispatchToProps"), zt(r, "mergeProps");
}
const Xa = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Ja(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function p(E, x) {
    return c = E, u = x, f = e(c, u), l = t(n, u), d = r(f, l, u), s = !0, d;
  }
  function v() {
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
    return c = E, u = x, D && b ? v() : D ? h() : b ? m() : d;
  }
  return function(x, D) {
    return s ? y(x, D) : p(x, D);
  };
}
function Za(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = yo(t, Xa);
  const a = r(e, i), s = n(e, i), c = o(e, i);
  return process.env.NODE_ENV !== "production" && Ka(a, s, c), Ja(a, s, c, e, i);
}
function Qa(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function es(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Do(e, t, r) {
  es(e) || Sr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
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
function bn(e) {
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
      i.mapToProps = e, i.dependsOnOwnProps = bn(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = bn(u), u = i(s, c)), process.env.NODE_ENV !== "production" && Do(u, o, t), u;
    }, i;
  };
}
function Cr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function ts(e) {
  return e && typeof e == "object" ? lr((t) => (
    // @ts-ignore
    Qa(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    No(e, "mapDispatchToProps")
  ) : Cr(e, "mapDispatchToProps") : lr((t) => ({
    dispatch: t
  }));
}
function rs(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    No(e, "mapStateToProps")
  ) : Cr(e, "mapStateToProps") : lr(() => ({}));
}
function ns(e, t, r) {
  return Be({}, r, e, t);
}
function os(e) {
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
function is(e) {
  return e ? typeof e == "function" ? os(e) : Cr(e, "mergeProps") : () => ns;
}
function as() {
  const e = Ta();
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
const yn = {
  notify() {
  },
  get: () => []
};
function wo(e, t) {
  let r, n = yn, o = 0, i = !1;
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
    o++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), n = as());
  }
  function l() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = yn);
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
const ss = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Pt = ss ? B.useLayoutEffect : B.useEffect;
function En(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function qt(e, t) {
  if (En(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !En(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const cs = ["reactReduxForwardedRef"];
let ls = Va;
const us = [null, null], ds = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function fs(e, t, r) {
  Pt(() => e(...t), r);
}
function ps(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function ms(e, t, r, n, o, i, a, s, c, u, f) {
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
function gs(e, t) {
  return e === t;
}
let xn = !1;
function So(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = gs,
  areOwnPropsEqual: i = qt,
  areStatePropsEqual: a = qt,
  areMergedPropsEqual: s = qt,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = bo
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !xn && (xn = !0, Sr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = rs(e), d = ts(t), p = is(r), v = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !hn.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ds(m)}`);
    const y = m.displayName || m.name || "Component", E = `Connect(${y})`, x = {
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
    function D(R) {
      const [I, k, $] = B.useMemo(() => {
        const {
          reactReduxForwardedRef: N
        } = R, ge = yo(R, cs);
        return [R.context, N, ge];
      }, [R]), U = B.useMemo(() => I && I.Consumer && // @ts-ignore
      hn.isContextConsumer(/* @__PURE__ */ B.createElement(I.Consumer, null)) ? I : f, [I, f]), G = B.useContext(U), re = !!R.store && !!R.store.getState && !!R.store.dispatch, se = !!G && !!G.store;
      if (process.env.NODE_ENV !== "production" && !re && !se)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const ne = re ? R.store : G.store, T = se ? G.getServerState : ne.getState, _ = B.useMemo(() => Za(ne.dispatch, x), [ne]), [L, K] = B.useMemo(() => {
        if (!v) return us;
        const N = wo(ne, re ? void 0 : G.subscription), ge = N.notifyNestedSubs.bind(N);
        return [N, ge];
      }, [ne, re, G]), J = B.useMemo(() => re ? G : Be({}, G, {
        subscription: L
      }), [re, G, L]), Y = B.useRef(), Q = B.useRef($), ue = B.useRef(), Se = B.useRef(!1);
      B.useRef(!1);
      const me = B.useRef(!1), Ee = B.useRef();
      Pt(() => (me.current = !0, () => {
        me.current = !1;
      }), []);
      const Ce = B.useMemo(() => () => ue.current && $ === Q.current ? ue.current : _(ne.getState(), $), [ne, $]), Oe = B.useMemo(() => (ge) => L ? ms(
        v,
        ne,
        L,
        // @ts-ignore
        _,
        Q,
        Y,
        Se,
        me,
        ue,
        K,
        ge
      ) : () => {
      }, [L]);
      fs(ps, [Q, Y, Se, $, ue, K]);
      let Ie;
      try {
        Ie = ls(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Oe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ce,
          T ? () => _(T(), $) : Ce
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
          ref: k
        }))
      ), [k, m, Ie]);
      return B.useMemo(() => v ? /* @__PURE__ */ B.createElement(U.Provider, {
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
      return I.displayName = E, I.WrappedComponent = m, mn(I, m);
    }
    return mn(C, m);
  };
}
function vs({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = B.useMemo(() => {
    const u = wo(e);
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
function hs(e, t) {
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
  })[0], n = W(!0), o = W(r), i = n.current || !!(t && o.current.inputs && hs(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return oe(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function bs(e, t) {
  return Co(function() {
    return e;
  }, t);
}
var F = Co, A = bs, ys = process.env.NODE_ENV === "production", Yt = "Invariant failed";
function Dn(e, t) {
  if (ys)
    throw new Error(Yt);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Yt, ": ").concat(r) : Yt;
  throw new Error(n);
}
var we = function(t) {
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
}, Ir = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Nn = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Es = function(t, r) {
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
}, Or = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Kt : n, i = t.border, a = i === void 0 ? Kt : i, s = t.padding, c = s === void 0 ? Kt : s, u = we(Ir(r, o)), f = we(Nn(r, a)), l = we(Nn(f, c));
  return {
    marginBox: u,
    borderBox: we(r),
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
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Dn(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Dn()), o;
}, xs = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, _t = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Es(n, r);
  return Or({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Rt = function(t, r) {
  return r === void 0 && (r = xs()), _t(t, r);
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
  return Or({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Oo = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Io(r, n);
}, wn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Ds(e, t) {
  return !!(e === t || wn(e) && wn(t));
}
function Ns(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Ds(e[r], t[r]))
      return !1;
  return !0;
}
function ie(e, t) {
  t === void 0 && (t = Ns);
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
const ws = process.env.NODE_ENV === "production", Ss = /[ \t]{2,}/g, Cs = /^[ \t]*/gm, Sn = (e) => e.replace(Ss, " ").replace(Cs, "").trim(), Is = (e) => Sn(`
  %c@hello-pangea/dnd

  %c${Sn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Os = (e) => [Is(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], As = "__@hello-pangea/dnd-disable-dev-warnings";
function Ao(e, t) {
  ws || typeof window < "u" && window[As] || console[e](...Os(t));
}
const Z = /* @__PURE__ */ Ao.bind(null, "warn"), ur = /* @__PURE__ */ Ao.bind(null, "error");
function Me() {
}
function Ps(e, t) {
  return {
    ...e,
    ...t
  };
}
function De(e, t, r) {
  const n = t.map((o) => {
    const i = Ps(r, o.options);
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
const _s = process.env.NODE_ENV === "production", Cn = "Invariant failed";
class ut extends Error {
}
ut.prototype.toString = function() {
  return this.message;
};
function g(e, t) {
  throw _s ? new ut(Cn) : new ut(`${Cn}: ${t || ""}`);
}
class Rs extends M.Component {
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
const Ts = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Tt = (e) => e + 1, $s = (e) => `
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
}, _o = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Vs = (e) => {
  const t = e.destination;
  if (t)
    return Po(e.source, t);
  const r = e.combine;
  return r ? _o(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, In = (e) => `
  The item has returned to its starting position
  of ${Tt(e.index)}
`, Bs = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${In(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Po(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${_o(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${In(e.source)}
  `;
}, Ms = {
  dragHandleUsageInstructions: Ts,
  onDragStart: $s,
  onDragUpdate: Vs,
  onDragEnd: Bs
};
var Ot = Ms;
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
}, dt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), On = (e, t) => Math.min(...t.map((r) => dt(e, r))), Ro = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ls = (e, t) => {
  const r = we({
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
}), An = (e) => [{
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
}], Fs = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Gs = (e, t) => t ? bt(e, t.scroll.diff.displacement) : e, ks = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Ws = (e, t) => t && t.shouldClipSubject ? Ls(t.pageMarginBox, e) : we(e);
var Ke = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Gs(e.marginBox, n), i = ks(o, r, t), a = Ws(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Ar = (e, t) => {
  e.frame || (process.env.NODE_ENV, g());
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
const To = /* @__PURE__ */ ie((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), $o = /* @__PURE__ */ ie((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Mt = /* @__PURE__ */ ie((e) => Object.values(e)), Us = /* @__PURE__ */ ie((e) => Object.values(e));
var ze = /* @__PURE__ */ ie((e, t) => Us(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Pr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Lt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Ft = /* @__PURE__ */ ie((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), js = ({
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
const Vo = {
  point: ae,
  value: 0
}, ft = {
  invisible: {},
  visible: {},
  all: []
}, Hs = {
  displaced: ft,
  displacedBy: Vo,
  at: null
};
var zs = Hs, Ne = (e, t) => (r) => e <= r && r <= t, Bo = (e) => {
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
}, qs = (e) => {
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
var Ys = (e) => (t) => {
  const r = Ne(t.top, t.bottom), n = Ne(t.left, t.right);
  return (o) => e === _r ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Ks = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ae;
  return bt(e, r);
}, Xs = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, Js = (e, t, r) => r(t)(e), Rr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Ks(e, t) : e;
  return Xs(i, t, o) && Js(i, r, o);
}, Zs = (e) => Rr({
  ...e,
  isVisibleThroughFrameFn: Bo
}), Lo = (e) => Rr({
  ...e,
  isVisibleThroughFrameFn: qs
}), Qs = (e) => Rr({
  ...e,
  isVisibleThroughFrameFn: Ys(e.destination.axis)
}), ec = (e, t, r) => {
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
function tc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return we(Ir(r, n));
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
    const u = tc(c, r), f = c.descriptor.id;
    if (s.all.push(f), !Zs({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const d = ec(f, i, o), p = {
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
function rc(e, t) {
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
  const o = rc(e, {
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
var nc = ({
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
}, oc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, ic = ({
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
    const l = oc({
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
  const f = nc({
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
}, ac = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Fe(r, t) ? o ? ae : Ze(n.point) : o ? n.point : ae;
}, sc = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = Lt(t);
  n || (process.env.NODE_ENV, g());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = ac({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return ce(i, a);
};
const Fo = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, cc = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Tr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, _n = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.end] + Fo(e, r), Tr(e, t.marginBox, r)), Rn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => He(e.line, t.marginBox[e.start] - cc(e, r), Tr(e, t.marginBox, r)), lc = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => He(e.line, t.contentBox[e.start] + Fo(e, r), Tr(e, t.contentBox, r));
var uc = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = ze(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return lc({
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
    const p = _t(d.page, u.point);
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
    const d = _t(l.page, Ze(o.displacedBy.point));
    return _n({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return _n({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, dr = (e, t) => {
  const r = e.frame;
  return r ? ce(t, r.scroll.diff.displacement) : t;
};
const dc = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? uc({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : sc({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var Gt = (e) => {
  const t = dc(e), r = e.droppable;
  return r ? dr(r, t) : t;
}, Go = (e, t) => {
  const r = ve(t, e.scroll.initial), n = Ze(r);
  return {
    frame: we({
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
function Tn(e, t) {
  return e.map((r) => t[r]);
}
function fc(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var pc = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = Go(t, ce(t.scroll.current, o)), a = r.frame ? Ar(r, ce(r.frame.scroll.current, o)) : r, s = e.displaced, c = pt({
    afterDragging: Tn(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = pt({
    afterDragging: Tn(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [s, c, u];
  return s.all.forEach((v) => {
    const h = fc(v, d);
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
}, mc = (e, t) => ce(e.scroll.diff.displacement, t), $r = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = mc(r, e), o = ve(n, t.page.borderBox.center);
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
  return i ? Qs(c) : Lo(c);
}, gc = ({
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
  const u = ze(r.descriptor.id, n), f = Qe(t, r), l = js({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || ic({
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
      clientSelection: $r({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const v = ve(d, a), h = pc({
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
var vc = ({
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
    const d = On(t, An(de(f))), p = On(t, An(de(l)));
    return d !== p ? d - p : de(f)[a.start] - de(l)[a.start];
  })[0];
};
const $n = (e, t) => {
  const r = e.page.borderBox.center;
  return Fe(e.descriptor.id, t) ? ve(r, t.displacedBy.point) : r;
}, hc = (e, t) => {
  const r = e.page.borderBox;
  return Fe(e.descriptor.id, t) ? bt(r, Ze(t.displacedBy.point)) : r;
};
var bc = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => Lo({
  target: hc(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = dt(e, dr(r, $n(a, o))), u = dt(e, dr(r, $n(s, o)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, yt = /* @__PURE__ */ ie(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: He(t.line, n)
  };
});
const yc = (e, t, r) => {
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
  Qe(t, e) && (process.env.NODE_ENV !== "production" ? g(!1, "Should not add placeholder space to home list") : g()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot add placeholder size to a subject when it already has one") : g());
  const o = yt(e.axis, t.displaceBy).point, i = yc(e, o, r), a = {
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
}, Ec = (e) => {
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
var xc = ({
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
}, Dc = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = vc({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const u = ze(c.descriptor.id, o), f = bc({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }), l = xc({
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
    clientSelection: $r({
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
const Nc = (e, t) => {
  const r = he(e);
  return r ? t[r] : null;
};
var wc = ({
  state: e,
  type: t
}) => {
  const r = Nc(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return s ? gc({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Dc({
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
function Sc(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function Cc({
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
function Ic({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = Mt(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !Sc(e, i))
      return !1;
    if (jo(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], u = e[a.crossAxisEnd], f = Ne(i[a.crossAxisStart], i[a.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : Cc({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const Ho = (e, t) => we(bt(e, t));
var Oc = (e, t) => {
  const r = e.frame;
  return r ? Ho(t, r.scroll.diff.value) : t;
};
function zo({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Ac({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Pc = ({
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
  }) || null, v = Ac({
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
const _c = 4;
var Rc = ({
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
    const h = v.descriptor.id, m = v.page.borderBox, E = m[a.size] / _c, x = Fe(h, i), D = zo({
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
  const s = Ho(t.page.borderBox, e), c = Ic({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!c)
    return zs;
  const u = n[c], f = ze(u.descriptor.id, r), l = Oc(u, s);
  return Rc({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: f,
    afterCritical: a
  }) || Pc({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Vr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Tc = ({
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
  const a = Ec(i);
  return Vr(r, a);
};
var $c = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Tc({
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
  return Vr(i, c);
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
  const p = s.draggables[e.critical.draggable.id], v = o || qo({
    pageOffset: l.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), h = $c({
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
function Vc(e, t) {
  return e.map((r) => t[r]);
}
var Yo = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Vc(i.all, r), s = pt({
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
  return $r({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, Xo = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, g());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], u = he(n);
  u || (process.env.NODE_ENV !== "production" ? g(!1, "Must be over a destination in SNAP movement mode") : g());
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
}, Bc = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Jo = ({
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
        destination: Bc(e.descriptor)
      }
    },
    afterCritical: u
  };
}, Mc = (e, t) => ({
  draggables: e.draggables,
  droppables: Vr(e.droppables, t)
});
const Et = (e) => {
  process.env.NODE_ENV;
}, xt = (e) => {
  process.env.NODE_ENV;
};
var Lc = ({
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
}, Fc = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Expected Droppable to have a frame") : g()), t;
}, Gc = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], c = Fc(a).scroll.diff.value, u = ce(n, c);
    return Lc({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, kc = ({
  state: e,
  published: t
}) => {
  Et();
  const r = t.modified.map((y) => {
    const E = e.dimensions.droppables[y.droppableId];
    return Ar(E, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...To(r)
  }, o = $o(Gc({
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
  }), p = c && c.isCombineEnabled ? e.impact : l, v = qo({
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
  const n = Mc(e.dimensions, t);
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
const Vn = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Wc = (e = Vn, t) => {
  if (t.type === "FLUSH")
    return {
      ...Vn,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `Collection cannot start from phase ${e.phase}`) : g()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? g(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : g()), kc({
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
    const i = Ar(o, n);
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? g(!1, `${t.type} received while not in DRAGGING phase`) : g());
    const r = wc({
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
const Uc = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), jc = (e) => ({
  type: "LIFT",
  payload: e
}), Hc = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), zc = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), qc = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Yc = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Kc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Xc = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Zo = (e) => ({
  type: "MOVE",
  payload: e
}), Jc = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Zc = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Qc = () => ({
  type: "MOVE_UP",
  payload: null
}), el = () => ({
  type: "MOVE_DOWN",
  payload: null
}), tl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), rl = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Br = () => ({
  type: "FLUSH",
  payload: null
}), nl = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Mr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Qo = (e) => ({
  type: "DROP",
  payload: e
}), ol = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), ei = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function il(e) {
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
function al(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = ze(e.droppable.id, t.draggables);
    il(r);
  }
}
var sl = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(Mr({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Unexpected phase to start a drag") : g()), r(Br()), r(Uc({
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
  al(l, d), r(Hc({
    critical: l,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, cl = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Lr = {
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
}, Ge = `${ti.outOfTheWay}s ${Lr.outOfTheWay}`, ot = {
  fluid: `opacity ${Ge}`,
  snap: `transform ${Ge}, opacity ${Ge}`,
  drop: (e) => {
    const t = `${e}s ${Lr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ge}`,
  placeholder: `height ${Ge}, width ${Ge}, margin ${Ge}`
}, Bn = (e) => Le(e, ae) ? void 0 : `translate(${e.x}px, ${e.y}px)`, pr = {
  moveTo: Bn,
  drop: (e, t) => {
    const r = Bn(e);
    if (r)
      return t ? `${r} scale(${mt.scale.drop})` : r;
  }
}, {
  minDropTime: mr,
  maxDropTime: ri
} = ti, ll = ri - mr, Mn = 1500, ul = 0.6;
var dl = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = dt(e, t);
  if (n <= 0)
    return mr;
  if (n >= Mn)
    return ri;
  const o = n / Mn, i = mr + ll * o, a = r === "CANCEL" ? i * ul : i;
  return Number(a.toFixed(2));
}, fl = ({
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
}, pl = ({
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
const ml = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(ol({
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
  } = pl({
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
  }, m = fl({
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
    t(Mr({
      completed: y
    }));
    return;
  }
  const x = dl({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(nl({
    newHomeClientOffset: m,
    dropDuration: x,
    completed: y
  }));
};
var gl = ml, ni = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function vl(e) {
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
function hl({
  onWindowScroll: e
}) {
  function t() {
    e(ni());
  }
  const r = lt(t), n = vl(r);
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
const bl = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", yl = (e) => {
  const t = hl({
    onWindowScroll: (r) => {
      e.dispatch(Jc({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && bl(n) && t.stop(), r(n);
  };
};
var El = yl, xl = (e) => {
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
}, Dl = () => {
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
const Nl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, wl = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Sl = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, et = (e, t) => {
  Et(), t(), xt();
}, wt = (e, t) => ({
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
  const o = xl(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Cl = (e, t) => {
  const r = Dl();
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
      p && p(wt(l, d));
    });
  }, a = (l, d) => {
    n && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : g());
    const p = wt(l, d);
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
    const h = !Sl(l, n.lastCritical);
    h && (n.lastCritical = l);
    const m = !Nl(n.lastLocation, p);
    m && (n.lastLocation = p);
    const y = !wl(n.lastCombine, v);
    if (y && (n.lastCombine = v), !h && !m && !y)
      return;
    const E = {
      ...wt(l, n.mode),
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
        ...wt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, Il = (e, t) => {
  const r = Cl(e, t);
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
const Ol = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot finish a drop animating when no drop is occurring") : g()), e.dispatch(Mr({
    completed: n.completed
  }));
};
var Al = Ol;
const Pl = (e) => {
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
var _l = Pl, Rl = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Tl = (e) => {
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
const $l = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Vl = (e) => (t) => (r) => (n) => {
  if ($l(n)) {
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
const Bl = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Qo({
    reason: n.reason
  })));
};
var Ml = Bl;
const Ll = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? /* @__PURE__ */ window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : ho;
var Fl = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => vo(Wc, Ll(Aa(cl(r), Rl(e), sl(e), gl, Al, _l, Ml, Vl(i), El, Tl(t), Il(n, o))));
const Qt = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Gl({
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
      } = r, l = Object.keys(c).map((v) => e.draggable.getById(v).getDimension(ae)).sort((v, h) => v.descriptor.index - h.descriptor.index), d = Object.keys(f).map((v) => {
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
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.documentElement") : g()), e;
}, ai = () => {
  const e = ii();
  return oi({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, kl = () => {
  const e = ni(), t = ai(), r = e.y, n = e.x, o = ii(), i = o.clientWidth, a = o.clientHeight, s = n + i, c = r + a;
  return {
    frame: we({
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
}, Wl = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Et();
  const n = kl(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), c = {
    draggables: $o(s),
    droppables: To(a)
  };
  return xt(), {
    dimensions: c,
    critical: e,
    viewport: n
  };
};
function Ln(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Z(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Ul = (e, t) => {
  let r = null;
  const n = Gl({
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
    d.type === "ADDITION" && Ln(e, p, d.value) && n.add(d.value), d.type === "REMOVAL" && Ln(e, p, d.value) && n.remove(d.value);
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
      }, Wl({
        critical: h,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, si = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", jl = (e) => {
  window.scrollBy(e.x, e.y);
};
const Hl = /* @__PURE__ */ ie((e) => Mt(e).filter((t) => !(!t.isEnabled || !t.frame))), zl = (e, t) => Hl(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? g(!1, "Invalid result") : g()), jo(n.frame.pageMarginBox)(e))) || null;
var ql = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return zl(e, r);
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
var Yl = (e, t, r = () => gt) => {
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
}, Fr = 1, Kl = (e, t, r = () => gt) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Fr;
  const i = 1 - ci({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, Xl = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return Fr;
  const f = ci({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), l = e * n.ease(f);
  return Math.ceil(l);
}, Fn = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = Kl(e, t, o);
  return i === 0 ? 0 : n ? Math.max(Xl(i, r, o), Fr) : i;
}, Gn = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Yl(e, n, i);
  return t[n.end] < t[n.start] ? Fn({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Fn({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Jl = ({
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
const Zl = /* @__PURE__ */ Ro((e) => e === 0 ? 0 : e);
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
  }, s = Gn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: _r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Gn({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Mo,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = Zl({
    x: c,
    y: s
  });
  if (Le(u, ae))
    return null;
  const f = Jl({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? Le(f, ae) ? null : f : null;
};
const Ql = /* @__PURE__ */ Ro((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Gr = /* @__PURE__ */ (() => {
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
  }, o = Ql(r), i = Gr({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, kr = (e, t) => ui({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), eu = (e, t) => {
  if (!kr(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return Gr({
    current: n,
    max: r,
    change: t
  });
}, Wr = (e, t) => {
  const r = e.frame;
  return r ? ui({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, tu = (e, t) => {
  const r = e.frame;
  return !r || !Wr(e, t) ? null : Gr({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var ru = ({
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
  return a && kr(e, a) ? a : null;
}, nu = ({
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
  return s && Wr(e, s) ? s : null;
}, kn = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = ru({
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
  const u = ql({
    center: a,
    destination: he(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = nu({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(u.descriptor.id, f);
}, ou = ({
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
    kn({
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
      kn({
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
}, iu = ({
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
    if (!Wr(s, c))
      return c;
    const u = tu(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const f = ve(c, u);
    return t(s.descriptor.id, f), ve(c, f);
  }, i = (s, c, u) => {
    if (!s || !kr(c, u))
      return u;
    const f = eu(c, u);
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
    u || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot perform a jump scroll when there is no destination") : g());
    const f = o(s.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = s.viewport, d = i(s.isWindowScrollAllowed, l, f);
    d && n(s, d);
  };
}, au = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = ou({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = iu({
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
})(), su = /* @__PURE__ */ (() => {
  const e = `${Xe}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), Wn = {
  contextId: `${Xe}-scroll-container-context-id`
}, cu = (e) => (t) => `[${t}="${e}"]`, tt = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), lu = "pointer-events: none;";
var uu = (e) => {
  const t = cu(e), r = (() => {
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
        dragging: lu,
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
    selector: t(su.contextId),
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
const du = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? to : oe;
var be = du;
const er = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find the head to append a style to") : g()), e;
}, Un = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function fu(e, t) {
  const r = F(() => uu(e), [e]), n = W(null), o = W(null), i = A(ie((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), d.textContent = l;
  }), []), a = A((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot set dynamic style element if it is not set") : g()), d.textContent = l;
  }, []);
  be(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? g(!1, "style elements already mounted") : g());
    const l = Un(t), d = Un(t);
    return n.current = l, o.current = d, l.setAttribute(`${Xe}-always`, e), d.setAttribute(`${Xe}-dynamic`, e), er().appendChild(l), er().appendChild(d), a(r.always), i(r.resting), () => {
      const p = (v) => {
        const h = v.current;
        h || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot unmount ref as it is not set") : g()), er().removeChild(h), v.current = null;
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
function pu(e) {
  const t = W({}), r = W(null), n = W(null), o = W(!1), i = A(function(d, p) {
    const v = {
      id: d,
      focus: p
    };
    return t.current[d] = v, function() {
      const m = t.current;
      m[d] !== v && delete m[d];
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
function mu() {
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
function gu() {
  const e = F(mu, []);
  return oe(() => function() {
    M.version.startsWith("16") || M.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Ur = /* @__PURE__ */ M.createContext(null), vt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot find document.body") : g()), e;
};
const vu = {
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
var hu = vu;
const bu = (e) => `rfd-announcement-${e}`;
function yu(e) {
  const t = F(() => bu(e), [e]), r = W(null);
  return oe(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Be(i.style, hu), vt().appendChild(i), function() {
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
let Eu = 0;
const mi = {
  separator: "::"
};
function xu(e, t = mi) {
  return F(() => `${e}${t.separator}${Eu++}`, [t.separator, e]);
}
function Du(e, t = mi) {
  const r = M.useId();
  return F(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var jr = "useId" in M ? Du : xu;
function Nu({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function wu({
  contextId: e,
  text: t
}) {
  const r = jr("hidden-text", {
    separator: "-"
  }), n = F(() => Nu({
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
var kt = /* @__PURE__ */ M.createContext(null), Su = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Cu = /(\d+)\.(\d+)\.(\d+)/, jn = (e) => {
  const t = Cu.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? g(!1, `Unable to parse React version ${e}`) : g());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Iu = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var Ou = (e, t) => {
  const r = jn(e), n = jn(t);
  Iu(r, n) || process.env.NODE_ENV !== "production" && Z(`
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
var Au = (e) => {
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
function Hr(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Nt(e, t) {
  Hr(() => {
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
function Pu() {
  Nt(() => {
    Ou(Su.react, M.version), Au(document);
  }, []);
}
function zr(e) {
  const t = W(e);
  return oe(() => {
    t.current = e;
  }), t;
}
function _u() {
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
const Ru = 9, Tu = 13, qr = 27, gi = 32, $u = 33, Vu = 34, Bu = 35, Mu = 36, Lu = 37, Fu = 38, Gu = 39, ku = 40, Wu = {
  [Tu]: !0,
  [Ru]: !0
};
var vi = (e) => {
  Wu[e.keyCode] && e.preventDefault();
};
const Uu = /* @__PURE__ */ (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Wt = Uu;
const hi = 0, Hn = 5;
function ju(e, t) {
  return Math.abs(t.x - e.x) >= Hn || Math.abs(t.y - e.y) >= Hn;
}
const zn = {
  type: "IDLE"
};
function Hu({
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
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot be IDLE") : g());
      const f = u.point;
      if (!ju(f, c))
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
      if (o.keyCode === qr) {
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
function zu(e) {
  const t = W(zn), r = W(Me), n = F(() => ({
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
      const v = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(p, v);
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
    t.current.type !== "IDLE" && (t.current = zn, r.current(), i());
  }, [i]), s = A(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = A(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = Hu({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = De(window, d, l);
  }, [s, a]), u = A(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g()), t.current = {
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
function qu() {
}
const Yu = {
  [Vu]: !0,
  [$u]: !0,
  [Mu]: !0,
  [Bu]: !0
};
function Ku(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === qr) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === gi) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === ku) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Fu) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Gu) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Lu) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Yu[o.keyCode]) {
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
function Xu(e) {
  const t = W(qu), r = F(() => ({
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
        c || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop capturing a keyboard drag when not capturing") : g()), c = !1, t.current(), n();
      }
      t.current = De(window, Ku(u, f), {
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
}, Ju = 120, Zu = 0.15;
function Qu({
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
      r.keyCode === qr && r.preventDefault(), e();
    }
  }, {
    eventName: Wt,
    fn: e
  }];
}
function ed({
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
      if (!i || !(i.force >= Zu))
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
function td(e) {
  const t = W(rr), r = W(Me), n = A(function() {
    return t.current;
  }, []), o = A(function(p) {
    t.current = p;
  }, []), i = F(() => ({
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
    }, v = {
      cancel: c,
      completed: s,
      getPhase: n
    }, h = De(window, ed(v), p), m = De(window, Qu(v), p);
    r.current = function() {
      h(), m();
    };
  }, [c, n, s]), f = A(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? g(!1, `Cannot start dragging from phase ${p.type}`) : g());
    const v = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: v,
      hasMoved: !1
    });
  }, [n, o]), l = A(function(p, v) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? g(!1, "Expected to move from IDLE to PENDING drag") : g());
    const h = setTimeout(f, Ju);
    o({
      type: "PENDING",
      point: v,
      actions: p,
      longPressTimerId: h
    }), u();
  }, [u, n, o, f]);
  be(function() {
    return a(), function() {
      r.current();
      const v = n();
      v.type === "PENDING" && (clearTimeout(v.longPressTimerId), o(rr));
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
function rd(e) {
  Hr(() => {
    const t = zr(e);
    Nt(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot change the amount of sensor hooks after mounting") : g(!1));
    });
  });
}
const nd = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function bi(e, t) {
  if (t == null)
    return !1;
  if (nd.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : bi(e, t.parentElement);
}
function od(e, t) {
  const r = t.target;
  return Dt(r) ? bi(e, r) : !1;
}
var id = (e) => we(e.getBoundingClientRect()).center;
function ad(e) {
  return e instanceof fi(e).Element;
}
const sd = /* @__PURE__ */ (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function yi(e, t) {
  return e == null ? null : e[sd](t) ? e : yi(e.parentElement, t);
}
function cd(e, t) {
  return e.closest ? e.closest(t) : yi(e, t);
}
function ld(e) {
  return `[${Je.contextId}="${e}"]`;
}
function ud(e, t) {
  const r = t.target;
  if (!ad(r))
    return process.env.NODE_ENV !== "production" && Z("event.target must be a Element"), null;
  const n = ld(e), o = cd(r, n);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Z("drag handle must be a HTMLElement"), null) : null;
}
function dd(e, t) {
  const r = ud(e, t);
  return r ? r.getAttribute(Je.draggableId) : null;
}
function fd(e, t) {
  const r = `[${gr.contextId}="${e}"]`, o = di(document, r).find((i) => i.getAttribute(gr.id) === t);
  return o ? Dt(o) ? o : (process.env.NODE_ENV !== "production" && Z("Draggable element is not a HTMLElement"), null) : null;
}
function pd(e) {
  e.preventDefault();
}
function St({
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
function md({
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
  const c = n.draggable.getById(o), u = fd(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && Z(`Unable to find draggable element with id: ${o}`), null;
  if (a && !c.options.canDragInteractiveElements && od(u, a))
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
    St({
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
    l !== "PRE_DRAG" && (C(), process.env.NODE_ENV !== "production" ? g(!1, `Cannot lift in phase ${l}`) : g()), r.dispatch(jc(b.liftActionArgs)), l = "DRAGGING";
    function R(I, k = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), k.shouldBlockNextClick) {
        const $ = De(window, [{
          eventName: "click",
          fn: pd,
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
      isActive: () => St({
        expected: "DRAGGING",
        phase: l,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (I) => R("DROP", I),
      cancel: (I) => R("CANCEL", I),
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
      moveUp: () => h(Qc),
      moveRight: () => h(tl),
      moveDown: () => h(el),
      moveLeft: () => h(rl)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: id(u),
        movementMode: "SNAP"
      },
      cleanup: Me,
      actions: b
    });
  }
  function x() {
    St({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => St({
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
const gd = [zu, Xu, td];
function vd({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? gd : [], ...n || []], a = ye(() => _u())[0], s = A(function(m, y) {
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
  }), [a, r, t]), u = A((h, m, y) => md({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: m || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), f = A((h) => dd(e, h), [e]), l = A((h) => {
    const m = r.draggable.findById(h);
    return m ? m.options : null;
  }, [r.draggable]), d = A(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Br()));
  }, [a, t]), p = A(() => a.isClaimed(), [a]), v = F(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: p
  }), [c, u, f, l, d, p]);
  rd(i);
  for (let h = 0; h < i.length; h++)
    i[h](v);
}
const hd = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    M.version.startsWith("16") || M.version.startsWith("17") ? r() : no(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), bd = (e) => ({
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
function yd(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = W(null);
  Pu();
  const s = zr(e), c = A(() => hd(s.current), [s]), u = A(() => bd(s.current), [s]), f = yu(t), l = wu({
    contextId: t,
    text: i
  }), d = fu(t, o), p = A(($) => {
    rt(a).dispatch($);
  }, []), v = F(() => an({
    publishWhileDragging: zc,
    updateDroppableScroll: Yc,
    updateDroppableIsEnabled: Kc,
    updateDroppableIsCombineEnabled: Xc,
    collectionStarting: qc
  }, p), [p]), h = gu(), m = F(() => Ul(h, v), [h, v]), y = F(() => au({
    scrollWindow: jl,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: u,
    ...an({
      move: Zo
    }, p)
  }), [m.scrollDroppable, p, u]), E = pu(t), x = F(() => Fl({
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
    $.getState().phase !== "IDLE" && $.dispatch(Br());
  }, []), b = A(() => {
    const $ = rt(a).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = F(() => ({
    isDragging: b,
    tryAbort: D
  }), [b, D]);
  r(C);
  const R = A(($) => si(rt(a).getState(), $), []), I = A(() => We(rt(a).getState()), []), k = F(() => ({
    marshal: m,
    focus: E,
    contextId: t,
    canLift: R,
    isMovementAllowed: I,
    dragHandleUsageInstructionsId: l,
    registry: h
  }), [t, m, l, E, R, I, h]);
  return vd({
    contextId: t,
    store: x,
    registry: h,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), oe(() => D, [D]), M.createElement(kt.Provider, {
    value: k
  }, M.createElement(vs, {
    context: Ur,
    store: x
  }, e.children));
}
let Ed = 0;
function xd() {
  return F(() => `${Ed++}`, []);
}
function Dd() {
  return M.useId();
}
var Nd = "useId" in M ? Dd : xd;
function wd(e) {
  const t = Nd(), r = e.dragHandleUsageInstructions || Ot.dragHandleUsageInstructions;
  return M.createElement(Rs, null, (n) => M.createElement(yd, {
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
const qn = {
  dragging: 5e3,
  dropAnimating: 4500
}, Sd = (e, t) => t ? ot.drop(t.duration) : e ? ot.snap : ot.fluid, Cd = (e, t) => {
  if (e)
    return t ? mt.opacity.drop : mt.opacity.combining;
}, Id = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Od(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = Id(e), c = !!i, u = c ? pr.drop(n, a) : pr.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Sd(s, i),
    transform: u,
    opacity: Cd(a, c),
    zIndex: c ? qn.dropAnimating : qn.dragging,
    pointerEvents: "none"
  };
}
function Ad(e) {
  return {
    transform: pr.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Pd(e) {
  return e.type === "DRAGGING" ? Od(e) : Ad(e);
}
function _d(e, t, r = ae) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Io(o, n), a = Rt(i, r), s = {
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
function Rd(e) {
  const t = jr("draggable"), {
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
    const v = o();
    return v || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot get dimension when no ref is set") : g()), _d(r, v, p);
  }, [r, o]), f = F(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = W(f), d = W(!0);
  be(() => (n.draggable.register(l.current), () => n.draggable.unregister(l.current)), [n.draggable]), be(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const p = l.current;
    l.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var Yr = /* @__PURE__ */ M.createContext(null);
function xi(e) {
  e && Dt(e) || (process.env.NODE_ENV !== "production" ? g(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : g());
}
function Td(e, t, r) {
  Nt(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? g(!1, "Draggable requires a draggableId") : g(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? g(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : g(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? g(!1, `${n(o)} requires an integer index prop`) : g(!1)), e.mapped.type !== "DRAGGING" && (xi(r()), e.isEnabled && (pi(t, o) || (process.env.NODE_ENV !== "production" ? g(!1, `${n(o)} Unable to find drag handle`) : g(!1))));
  });
}
function $d(e) {
  Hr(() => {
    const t = W(e);
    Nt(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Draggable isClone prop value changed during component life") : g(!1));
    }, [e]);
  });
}
function Vt(e) {
  const t = ro(e);
  return t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find required context") : g()), t;
}
function Vd(e) {
  e.preventDefault();
}
const Bd = (e) => {
  const t = W(null), r = A((C = null) => {
    t.current = C;
  }, []), n = A(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Vt(kt), {
    type: s,
    droppableId: c
  } = Vt(Yr), u = F(() => ({
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
  if (Td(e, o, n), $d(h), !h) {
    const C = F(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: v,
      shouldRespectForcePress: p,
      isEnabled: d
    }), [u, a, n, v, p, d]);
    Rd(C);
  }
  const E = F(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Vd
  } : null, [o, i, l, d]), x = A((C) => {
    m.type === "DRAGGING" && m.dropping && C.propertyName === "transform" && (M.version.startsWith("16") || M.version.startsWith("17") ? y() : no(y));
  }, [y, m]), D = F(() => {
    const C = Pd(m), R = m.type === "DRAGGING" && m.dropping ? x : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": l,
        style: C,
        onTransitionEnd: R
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
var Md = Bd, Di = (e, t) => e === t, Ni = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Ld = (e) => e.combine ? e.combine.draggableId : null, Fd = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Gd() {
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
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], c = he(o.impact), u = Fd(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, c, u, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = o.dimensions.draggables[i.draggableId], u = a.result, f = u.mode, l = Ni(u), d = Ld(u), v = {
        duration: o.dropDuration,
        curve: Lr.drop,
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
const kd = {
  mapped: {
    type: "SECONDARY",
    offset: ae,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: /* @__PURE__ */ wi(null)
  }
};
function Wd() {
  const e = ie((a, s) => ({
    x: a,
    y: s
  })), t = ie(wi), r = ie((a, s = null, c) => ({
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
const Ud = () => {
  const e = Gd(), t = Wd();
  return (n, o) => e(n, o) || t(n, o) || kd;
}, jd = {
  dropAnimationFinished: ei
}, Hd = /* @__PURE__ */ So(Ud, jd, null, {
  context: Ur,
  areStatePropsEqual: Di
})(Md);
var zd = Hd;
function Si(e) {
  return Vt(Yr).isUsingCloneFor === e.draggableId && !e.isClone ? null : M.createElement(zd, e);
}
function qd(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return M.createElement(Si, Be({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const Kr = (e) => (t) => e === t, Yd = /* @__PURE__ */ Kr("scroll"), Kd = /* @__PURE__ */ Kr("auto"), Xd = /* @__PURE__ */ Kr("visible"), Yn = (e, t) => t(e.overflowX) || t(e.overflowY), Jd = (e, t) => t(e.overflowX) && t(e.overflowY), Ci = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Yn(r, Yd) || Yn(r, Kd);
}, Zd = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = vt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, g()), !Ci(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Jd(n, Xd) || process.env.NODE_ENV !== "production" && Z(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Xr = (e) => e == null ? null : e === document.body ? Zd() ? e : null : e === document.documentElement ? null : Ci(e) ? e : Xr(e.parentElement);
var Qd = (e) => {
  !e || !Xr(e.parentElement) || process.env.NODE_ENV !== "production" && Z(`
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
var ef = (e) => {
  const t = Xr(e), r = Ii(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, tf = ({
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
    } = s, v = oi({
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
          value: ae,
          displacement: ae
        }
      }
    };
  })(), u = o === "vertical" ? _r : Mo, f = Ke({
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
const rf = (e, t) => {
  const r = Oo(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, c = Ir({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Or({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var nf = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = rf(e, c), f = Rt(u, n), l = (() => {
    if (!c)
      return null;
    const p = Oo(c), v = {
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
  return tf({
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
const of = {
  passive: !1
}, af = {
  passive: !0
};
var Kn = (e) => e.shouldPublishImmediately ? of : af;
const Ct = (e) => e && e.env.closestScrollable || null;
function sf(e) {
  const t = W(null), r = Vt(kt), n = jr("droppable"), {
    registry: o,
    marshal: i
  } = r, a = zr(e), s = F(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = W(s), u = F(() => ie((D, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? g(!1, "Can only update scroll when dragging") : g());
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
    if (D && b || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find scroll options while scrolling") : g()), D.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), v = A((D, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect a droppable while a drag is occurring") : g());
    const C = a.current, R = C.getDroppableRef();
    R || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot collect without a droppable ref") : g());
    const I = ef(R), k = {
      ref: R,
      descriptor: s,
      env: I,
      scrollOptions: b
    };
    t.current = k;
    const $ = nf({
      ref: R,
      descriptor: s,
      env: I,
      windowScroll: D,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), U = I.closestScrollable;
    return U && (U.setAttribute(Wn.contextId, r.contextId), U.addEventListener("scroll", p, Kn(k.scrollOptions)), process.env.NODE_ENV !== "production" && Qd(U)), $;
  }, [r.contextId, s, p, a]), h = A(() => {
    const D = t.current, b = Ct(D);
    return D && b || (process.env.NODE_ENV !== "production" ? g(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : g()), vr(b);
  }, []), m = A(() => {
    const D = t.current;
    D || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot stop drag when no active drag") : g());
    const b = Ct(D);
    t.current = null, b && (d.cancel(), b.removeAttribute(Wn.contextId), b.removeEventListener("scroll", p, Kn(D.scrollOptions)));
  }, [p, d]), y = A((D) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll when there is no drag") : g());
    const C = Ct(b);
    C || (process.env.NODE_ENV !== "production" ? g(!1, "Cannot scroll a droppable with no closest scrollable") : g()), C.scrollTop += D.y, C.scrollLeft += D.x;
  }, []), E = F(() => ({
    getDimensionAndWatchScroll: v,
    getScrollWhileDragging: h,
    dragStopped: m,
    scroll: y
  }), [m, v, h, y]), x = F(() => ({
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
const Xn = {
  width: 0,
  height: 0,
  margin: Fs
}, cf = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Xn : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, lf = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = cf({
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
}, uf = (e) => {
  const t = W(null), r = A(() => {
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
  }, [n, i, o]), f = lf({
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
var df = /* @__PURE__ */ M.memo(uf);
function or(e) {
  return typeof e == "boolean";
}
function ir(e, t) {
  t.forEach((r) => r(e));
}
const ff = [function({
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
  xi(t());
}], pf = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Z(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], mf = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? g(!1, "Must provide a clone render function (renderClone) for virtual lists") : g());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? g(!1, "Expected virtual list to not have a placeholder") : g());
}];
function gf(e) {
  Nt(() => {
    ir(e, ff), e.props.mode === "standard" && ir(e, pf), e.props.mode === "virtual" && ir(e, mf);
  });
}
class vf extends M.PureComponent {
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
const hf = (e) => {
  const t = ro(kt);
  t || (process.env.NODE_ENV !== "production" ? g(!1, "Could not find app context") : g());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = W(null), i = W(null), {
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
  } = e, E = A(() => o.current, []), x = A((G = null) => {
    o.current = G;
  }, []), D = A(() => i.current, []), b = A((G = null) => {
    i.current = G;
  }, []);
  gf({
    props: e,
    getDroppableRef: E,
    getPlaceholderRef: D
  });
  const C = A(() => {
    n() && m({
      maxScroll: ai()
    });
  }, [n, m]);
  sf({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: p,
    ignoreContainerClipping: l,
    getDroppableRef: E
  });
  const R = F(() => M.createElement(vf, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: G,
    data: re,
    animate: se
  }) => M.createElement(df, {
    placeholder: re,
    onClose: G,
    innerRef: b,
    animate: se,
    contextId: r,
    onTransitionEnd: C
  })), [r, C, e.placeholder, e.shouldAnimatePlaceholder, b]), I = F(() => ({
    innerRef: x,
    placeholder: R,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, R, x]), k = h ? h.dragging.draggableId : null, $ = F(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: k
  }), [s, k, c]);
  function U() {
    if (!h)
      return null;
    const {
      dragging: G,
      render: re
    } = h, se = M.createElement(Si, {
      draggableId: G.draggableId,
      index: G.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (ne, T) => re(ne, T, G));
    return Ri.createPortal(se, y());
  }
  return M.createElement(Yr.Provider, {
    value: $
  }, a(I, v), U());
};
var bf = hf;
function yf() {
  return document.body || (process.env.NODE_ENV !== "production" ? g(!1, "document.body is not ready") : g()), document.body;
}
const Jn = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: yf
}, Oi = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Jn)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Jn[r]
    });
  return t;
}, ar = (e, t) => e === t.droppable.type, Zn = (e, t) => t.draggables[e.draggable.id], Ef = () => {
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
    const s = Oi(a), c = s.droppableId, u = s.type, f = !s.isDropDisabled, l = s.renderClone;
    if (ht(i)) {
      const d = i.critical;
      if (!ar(u, d))
        return t;
      const p = Zn(d, i.dimensions), v = he(i.impact) === c;
      return n(c, f, v, v, p, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!ar(u, d.critical))
        return t;
      const p = Zn(d.critical, i.dimensions);
      return n(c, f, Ni(d.result) === c, he(d.impact) === c, p, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!ar(u, d.critical))
        return t;
      const p = he(d.impact) === c, v = !!(d.impact.at && d.impact.at.type === "COMBINE"), h = d.critical.droppable.id === c;
      return p ? v ? e : t : h ? e : t;
    }
    return t;
  };
}, xf = {
  updateViewportMaxScroll: Zc
}, Df = /* @__PURE__ */ So(Ef, xf, (e, t, r) => ({
  ...Oi(r),
  ...e,
  ...t
}), {
  context: Ur,
  areStatePropsEqual: Di
})(bf);
var Nf = Df;
const wf = ({
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
  const v = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", h = (y) => {
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
  ] }) : i ? /* @__PURE__ */ w("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ w(yr, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ w(mo, { className: u, children: /* @__PURE__ */ w("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ w("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ w(wd, { onDragEnd: m, children: /* @__PURE__ */ w(Nf, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ le("table", { className: "w-full", children: [
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
              qd,
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
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === d[x] && v}`,
                      onClick: () => h(
                        s ? E[s] : E.id
                      ),
                      ref: b.innerRef,
                      ...b.draggableProps,
                      ...b.dragHandleProps,
                      style: C,
                      children: t.map((R, I) => {
                        var $;
                        let k = ($ = R == null ? void 0 : R.name) == null ? void 0 : $.reduce(
                          (U, G) => U == null ? void 0 : U[G],
                          d == null ? void 0 : d[x]
                        );
                        return /* @__PURE__ */ w(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: R.transform ? R.transform(k, x) : k
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
}, Yf = wf, Sf = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ w(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Kf = Sf;
var hr = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new WeakMap(), Qn = 0, Cf = void 0;
function If(e) {
  return e ? (It.has(e) || (Qn += 1, It.set(e, Qn.toString())), It.get(e)) : "0";
}
function Of(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? If(e.root) : e[t]}`).toString();
}
function Af(e) {
  const t = Of(e);
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
function Pf(e, t, r = {}, n = Cf) {
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
  const { id: o, observer: i, elements: a } = Af(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), hr.delete(o));
  };
}
function _f({
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
  const [l, d] = B.useState(null), p = B.useRef(u), [v, h] = B.useState({
    inView: !!s,
    entry: void 0
  });
  p.current = u, B.useEffect(
    () => {
      if (a || !l) return;
      let x;
      return x = Pf(
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
  const m = (f = v.entry) == null ? void 0 : f.target, y = B.useRef(void 0);
  !l && m && !i && !a && y.current !== m && (y.current = m, h({
    inView: !!s,
    entry: void 0
  }));
  const E = [d, v.inView, v.entry];
  return E.ref = E[0], E.inView = E[1], E.entry = E[2], E;
}
const Rf = ({ className: e }) => {
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
}, Tf = Rf, $f = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  emptyComponent: o,
  emptyClassName: i,
  isScrollTopButton: a = !0
}) => {
  const {
    hasNextPage: s,
    fetchNextPage: c,
    isFetchingNextPage: u,
    isLoading: f,
    data: l,
    isPending: d
  } = e, p = l == null ? void 0 : l.pages.flatMap((m) => m), { ref: v, inView: h } = _f();
  return oe(() => {
    h && s && c();
  }, [c, h, s]), /* @__PURE__ */ le(it, { children: [
    a && /* @__PURE__ */ w(Tf, { className: n }),
    /* @__PURE__ */ w(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((m, y) => t(m, y))
      }
    ),
    /* @__PURE__ */ w(
      "div",
      {
        className: br(
          "h-4 flex mt-8 flex-row items-center justify-center",
          i
        ),
        ref: v,
        children: (u || f || d) && /* @__PURE__ */ w(yr, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && o
      }
    )
  ] });
}, Xf = $f, Jf = () => {
  const e = W(null);
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
  Gf as Button,
  kf as Checkbox,
  Wf as Chips,
  Er as ErrorText,
  at as Icon,
  Xf as InfiniteScroll,
  Uf as Input,
  jf as List,
  yr as Loader,
  Hf as MultiSelectSearch,
  Tf as ScrollTopButton,
  zf as Search,
  qf as Select,
  Yf as Table,
  Kf as Textarea,
  mo as Wrapper,
  go as useDebounce,
  Jf as useScroll
};
