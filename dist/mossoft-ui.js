import { jsx as V, jsxs as fe, Fragment as yr } from "react/jsx-runtime";
import * as H from "react";
import $, { useState as Ee, useEffect as ue, useRef as z, useMemo as ta, useLayoutEffect as xo, useContext as Eo } from "react";
import ra, { unstable_batchedUpdates as na, flushSync as So } from "react-dom";
const Mt = ({ name: e, className: t }) => /* @__PURE__ */ V("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ V(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), wo = ({ style: e, text: t }) => /* @__PURE__ */ fe("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ V("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ V("span", { className: "text-base", children: t })
] }), Sp = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: i,
  icon: a,
  disabled: s
}) => {
  const [l, d] = Ee(""), f = () => {
    o && n === "1C" && (d("Отправляем запрос в 1С"), setTimeout(
      () => d(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  ue(() => {
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
  return /* @__PURE__ */ fe(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: c,
      children: [
        o ? /* @__PURE__ */ V(wo, { text: n === "1C" ? l : void 0 }) : e,
        a && !o && /* @__PURE__ */ V(
          Mt,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Rr = ({ error: e }) => /* @__PURE__ */ V("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ V("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), wp = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ fe(yr, { children: [
  /* @__PURE__ */ fe(
    "label",
    {
      onClick: (d) => d.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ V(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ V("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ V(
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
  a && /* @__PURE__ */ V(Rr, { error: a })
] }), Dp = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ V("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ V(yr, { children: o.title ? /* @__PURE__ */ V(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ V(yr, {}) })) });
function Tr(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var mt;
(function(e) {
  e.event = "event", e.props = "prop";
})(mt || (mt = {}));
function Me() {
}
function oa(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function Ke(e) {
  return !!(e || "").match(/\d/);
}
function Ye(e) {
  return e == null;
}
function ia(e) {
  return typeof e == "number" && isNaN(e);
}
function Do(e) {
  return Ye(e) || ia(e) || typeof e == "number" && !isFinite(e);
}
function No(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function aa(e) {
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
function sa(e, t, r) {
  var n = aa(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function ca(e) {
  var t = z(e);
  t.current = e;
  var r = z(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Vr(e, t) {
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
function la(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function Co(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function fn(e, t) {
  return Array(t + 1).join(e);
}
function Oo(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + fn("0", Math.abs(a)) + o : a >= s ? o = o + fn("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function pn(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = Vr(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), d = a.length <= t ? "0." + a : l.toFixed(t), f = d.split("."), c = i;
  i && Number(f[0]) && (c = i.split("").reverse().reduce(function(v, m, y) {
    return v.length > y ? (Number(v[0]) + Number(m)).toString() + v.substring(1, v.length) : m + v;
  }, f[0]));
  var u = Co(f[1] || "", t, r), p = s ? "-" : "", g = n ? "." : "";
  return "" + p + c + g + u;
}
function ke(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Io = oa(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), ua = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function da(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Jt(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function fa() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function _o(e) {
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
function Ao(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function pa(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function ma(e, t, r, n, o, i, a) {
  a === void 0 && (a = pa);
  var s = o.findIndex(function(x) {
    return x;
  }), l = e.slice(0, s);
  !t && !r.startsWith(l) && (t = l, r = l + r, n = n + l.length);
  for (var d = r.length, f = e.length, c = {}, u = new Array(d), p = 0; p < d; p++) {
    u[p] = -1;
    for (var g = 0, v = f; g < v; g++) {
      var m = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: p,
        formattedValueIndex: g
      });
      if (m && c[g] !== !0) {
        u[p] = g, c[g] = !0;
        break;
      }
    }
  }
  for (var y = n; y < d && (u[y] === -1 || !i(r[y])); )
    y++;
  var E = y === d || u[y] === -1 ? f : u[y];
  for (y = n - 1; y > 0 && u[y] === -1; )
    y--;
  var S = y === -1 || u[y] === -1 ? 0 : u[y] + 1;
  return S > E ? E : n - S < E - n ? S : E;
}
function Bt(e, t, r, n) {
  var o = e.length;
  if (t = da(t, 0, o), n === "left") {
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
function ga(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(Ke(e[r]) || Ke(e[r - 1]));
  return t;
}
function Po(e, t, r, n, o, i) {
  i === void 0 && (i = Me);
  var a = ca(function(g, v) {
    var m, y;
    return Do(g) ? (y = "", m = "") : typeof g == "number" || v ? (y = typeof g == "number" ? Oo(g) : g, m = n(y)) : (y = o(g, void 0), m = n(y)), { formattedValue: m, numAsString: y };
  }), s = Ee(function() {
    return a(Ye(e) ? t : e, r);
  }), l = s[0], d = s[1], f = function(g, v) {
    g.formattedValue !== l.formattedValue && d({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), i(g, v);
  }, c = e, u = r;
  Ye(e) && (c = l.numAsString, u = !0);
  var p = a(c, u);
  return ta(function() {
    d(p);
  }, [p.formattedValue]), [l, f];
}
function va(e) {
  return e.replace(/[^0-9]/g, "");
}
function ha(e) {
  return e;
}
function Ro(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = ha);
  var s = e.removeFormatting;
  s === void 0 && (s = va);
  var l = e.defaultValue, d = e.valueIsNumericString, f = e.onValueChange, c = e.isAllowed, u = e.onChange;
  u === void 0 && (u = Me);
  var p = e.onKeyDown;
  p === void 0 && (p = Me);
  var g = e.onMouseUp;
  g === void 0 && (g = Me);
  var v = e.onFocus;
  v === void 0 && (v = Me);
  var m = e.onBlur;
  m === void 0 && (m = Me);
  var y = e.value, E = e.getCaretBoundary;
  E === void 0 && (E = ga);
  var S = e.isValidInputCharacter;
  S === void 0 && (S = Ke);
  var x = e.isCharacterSame, b = Tr(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), w = Po(y, l, !!d, a, s, f), C = w[0], D = C.formattedValue, M = C.numAsString, B = w[1], F = z(), O = z({ formattedValue: D, numAsString: M }), q = function(I, P) {
    O.current = { formattedValue: I.formattedValue, numAsString: I.value }, B(I, P);
  }, ee = Ee(!1), re = ee[0], R = ee[1], T = z(null), k = z({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ue(function() {
    return R(!0), function() {
      clearTimeout(k.current.setCaretTimeout), clearTimeout(k.current.focusTimeout);
    };
  }, []);
  var j = a, Z = function(I, P) {
    var W = parseFloat(P);
    return {
      formattedValue: I,
      value: P,
      floatValue: isNaN(W) ? void 0 : W
    };
  }, G = function(I, P, W) {
    I.selectionStart === 0 && I.selectionEnd === I.value.length || (ke(I, P), k.current.setCaretTimeout = setTimeout(function() {
      I.value === W && I.selectionStart !== P && ke(I, P);
    }, 0));
  }, ne = function(I, P, W) {
    return Bt(I, P, E(I), W);
  }, de = function(I, P, W) {
    var ie = E(P), me = ma(P, D, I, W, ie, S, x);
    return me = Bt(P, me, ie), me;
  }, Oe = function(I) {
    var P = I.formattedValue;
    P === void 0 && (P = "");
    var W = I.input, ie = I.source, me = I.event, ae = I.numAsString, Q;
    if (W) {
      var Te = I.inputValue || W.value, Be = Jt(W);
      W.value = P, Q = de(Te, P, Be), Q !== void 0 && G(W, Q, P);
    }
    P !== D && q(Z(P, ae), { event: me, source: ie });
  };
  ue(function() {
    var I = O.current, P = I.formattedValue, W = I.numAsString;
    (D !== P || M !== W) && q(Z(D, M), {
      event: void 0,
      source: mt.props
    });
  }, [D, M]);
  var ve = T.current ? Jt(T.current) : void 0, Se = typeof window < "u" ? xo : ue;
  Se(function() {
    var I = T.current;
    if (D !== O.current.formattedValue && I) {
      var P = de(O.current.formattedValue, D, ve);
      I.value = D, G(I, P, D);
    }
  }, [D]);
  var Ie = function(I, P, W) {
    var ie = P.target, me = F.current ? ua(F.current, ie.selectionEnd) : Io(D, I), ae = Object.assign(Object.assign({}, me), { lastValue: D }), Q = s(I, ae), Te = j(Q);
    if (Q = s(Te, void 0), c && !c(Z(Te, Q))) {
      var Be = P.target, Le = Jt(Be), Xt = de(I, D, Le);
      return Be.value = D, G(Be, Xt, D), !1;
    }
    return Oe({
      formattedValue: Te,
      numAsString: Q,
      inputValue: I,
      event: P,
      source: W,
      input: P.target
    }), !0;
  }, Ae = function(I, P) {
    P === void 0 && (P = 0);
    var W = I.selectionStart, ie = I.selectionEnd;
    F.current = { selectionStart: W, selectionEnd: ie + P };
  }, _e = function(I) {
    var P = I.target, W = P.value, ie = Ie(W, I, mt.event);
    ie && u(I), F.current = void 0;
  }, Pe = function(I) {
    var P = I.target, W = I.key, ie = P.selectionStart, me = P.selectionEnd, ae = P.value;
    ae === void 0 && (ae = "");
    var Q;
    W === "ArrowLeft" || W === "Backspace" ? Q = Math.max(ie - 1, 0) : W === "ArrowRight" ? Q = Math.min(ie + 1, ae.length) : W === "Delete" && (Q = ie);
    var Te = 0;
    W === "Delete" && ie === me && (Te = 1);
    var Be = W === "ArrowLeft" || W === "ArrowRight";
    if (Q === void 0 || ie !== me && !Be) {
      p(I), Ae(P, Te);
      return;
    }
    var Le = Q;
    if (Be) {
      var Xt = W === "ArrowLeft" ? "left" : "right";
      Le = ne(ae, Q, Xt), Le !== Q && I.preventDefault();
    } else W === "Delete" && !S(ae[Q]) ? Le = ne(ae, Q, "right") : W === "Backspace" && !S(ae[Q]) && (Le = ne(ae, Q, "left"));
    Le !== Q && G(P, Le, ae), p(I), Ae(P, Te);
  }, Ze = function(I) {
    var P = I.target, W = function() {
      var ie = P.selectionStart, me = P.selectionEnd, ae = P.value;
      if (ae === void 0 && (ae = ""), ie === me) {
        var Q = ne(ae, ie);
        Q !== ie && G(P, Q, ae);
      }
    };
    W(), requestAnimationFrame(function() {
      W();
    }), g(I), Ae(P);
  }, N = function(I) {
    I.persist && I.persist();
    var P = I.target, W = I.currentTarget;
    T.current = P, k.current.focusTimeout = setTimeout(function() {
      var ie = P.selectionStart, me = P.selectionEnd, ae = P.value;
      ae === void 0 && (ae = "");
      var Q = ne(ae, ie);
      Q !== ie && !(ie === 0 && me === ae.length) && G(P, Q, ae), v(Object.assign(Object.assign({}, I), { currentTarget: W }));
    }, 0);
  }, he = function(I) {
    T.current = null, clearTimeout(k.current.focusTimeout), clearTimeout(k.current.setCaretTimeout), m(I);
  }, _ = re && fa() ? "numeric" : void 0, Re = Object.assign({ inputMode: _ }, b, {
    type: t,
    value: D,
    onChange: _e,
    onKeyDown: Pe,
    onMouseUp: Ze,
    onFocus: N,
    onBlur: he
  });
  if (r === "text")
    return o ? $.createElement($.Fragment, null, o(D, b) || null) : $.createElement("span", Object.assign({}, b, { ref: i }), D);
  if (n) {
    var Qe = n;
    return $.createElement(Qe, Object.assign({}, Re, { ref: i }));
  }
  return $.createElement("input", Object.assign({}, Re, { ref: i }));
}
function mn(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = Ut(t), d = l.thousandSeparator, f = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, u = Vr(e, a), p = u.beforeDecimal, g = u.afterDecimal, v = u.addNegation;
  return r !== void 0 && (g = Co(g, r, !!n)), d && (p = sa(p, d, s)), o && (p = o + p), i && (g = g + i), v && (p = "-" + p), e = p + (c && f || "") + g, e;
}
function Ut(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function ba(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function ya(e, t) {
  return new RegExp("(^-)|[0-9]|" + No(e), "g");
}
function xa(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function Ea(e, t, r) {
  var n;
  t === void 0 && (t = _o(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, d = t.to, f = d.start, c = d.end, u = Ut(r), p = u.allowedDecimalSeparators, g = u.decimalSeparator, v = e[c] === g;
  if (Ke(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - f === 1 && p.indexOf(e[f]) !== -1) {
    var m = s === 0 ? "" : g;
    e = e.substring(0, f) + m + e.substring(f + 1, e.length);
  }
  var y = function(T, k, j) {
    var Z = !1, G = !1;
    i.startsWith("-") ? Z = !1 : T.startsWith("--") ? (Z = !1, G = !0) : a.startsWith("-") && T.length === a.length ? Z = !1 : T[0] === "-" && (Z = !0);
    var ne = Z ? 1 : 0;
    return G && (ne = 2), ne && (T = T.substring(ne), k -= ne, j -= ne), { value: T, start: k, end: j, hasNegation: Z };
  }, E = y(e, f, c), S = E.hasNegation;
  n = E, e = n.value, f = n.start, c = n.end;
  var x = y(t.lastValue, l.start, l.end), b = x.start, w = x.end, C = x.value, D = e.substring(f, c);
  e.length && C.length && (b > C.length - a.length || w < i.length) && !(D && a.startsWith(D)) && (e = C);
  var M = 0;
  e.startsWith(i) ? M += i.length : f < i.length && (M = f), e = e.substring(M), c -= M;
  var B = e.length, F = e.length - a.length;
  e.endsWith(a) ? B = F : (c > F || c > e.length - a.length) && (B = c), e = e.substring(0, B), e = ba(S ? "-" + e : e, o), e = (e.match(ya(g)) || []).join("");
  var O = e.indexOf(g);
  e = e.replace(new RegExp(No(g), "g"), function(T, k) {
    return k === O ? "." : "";
  });
  var q = Vr(e, o), ee = q.beforeDecimal, re = q.afterDecimal, R = q.addNegation;
  return d.end - d.start < l.end - l.start && ee === "" && v && !parseFloat(re) && (e = R ? "-" : ""), e;
}
function Sa(e, t) {
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
function wa(e) {
  var t = Ut(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function Da(e) {
  e = wa(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Me);
  var i = e.onBlur;
  i === void 0 && (i = Me);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, d = e.prefix;
  d === void 0 && (d = "");
  var f = e.defaultValue, c = e.value, u = e.valueIsNumericString, p = e.onValueChange, g = Tr(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), v = Ut(e), m = v.decimalSeparator, y = v.allowedDecimalSeparators, E = function(R) {
    return mn(R, e);
  }, S = function(R, T) {
    return Ea(R, T, e);
  }, x = Ye(c) ? f : c, b = u ?? xa(x, d, t);
  Ye(c) ? Ye(f) || (b = b || typeof f == "number") : b = b || typeof c == "number";
  var w = function(R) {
    return Do(R) ? R : (typeof R == "number" && (R = Oo(R)), b && typeof s == "number" ? pn(R, s, !!l) : R);
  }, C = Po(w(c), w(f), !!b, E, S, p), D = C[0], M = D.numAsString, B = D.formattedValue, F = C[1], O = function(R) {
    var T = R.target, k = R.key, j = T.selectionStart, Z = T.selectionEnd, G = T.value;
    if (G === void 0 && (G = ""), (k === "Backspace" || k === "Delete") && Z < d.length) {
      R.preventDefault();
      return;
    }
    if (j !== Z) {
      o(R);
      return;
    }
    k === "Backspace" && G[0] === "-" && j === d.length + 1 && r && ke(T, 1), s && l && (k === "Backspace" && G[j - 1] === m ? (ke(T, j - 1), R.preventDefault()) : k === "Delete" && G[j] === m && R.preventDefault()), y != null && y.includes(k) && G[j] === m && ke(T, j + 1);
    var ne = a === !0 ? "," : a;
    k === "Backspace" && G[j - 1] === ne && ke(T, j - 1), k === "Delete" && G[j] === ne && ke(T, j + 1), o(R);
  }, q = function(R) {
    var T = M;
    if (T.match(/\d/g) || (T = ""), n || (T = la(T)), l && s && (T = pn(T, s, l)), T !== M) {
      var k = mn(T, e);
      F({
        formattedValue: k,
        value: T,
        floatValue: parseFloat(T)
      }, {
        event: R,
        source: mt.event
      });
    }
    i(R);
  }, ee = function(R) {
    return R === m ? !0 : Ke(R);
  }, re = function(R) {
    var T = R.currentValue, k = R.lastValue, j = R.formattedValue, Z = R.currentValueIndex, G = R.formattedValueIndex, ne = T[Z], de = j[G], Oe = Io(k, T), ve = Oe.to, Se = function(Ie) {
      return S(Ie).indexOf(".") + d.length;
    };
    return c === 0 && l && s && T[ve.start] === m && Se(T) < Z && Se(j) > G ? !1 : Z >= ve.start && Z < ve.end && y && y.includes(ne) && de === m ? !0 : ne === de;
  };
  return Object.assign(Object.assign({}, g), {
    value: B,
    valueIsNumericString: !1,
    isValidInputCharacter: ee,
    isCharacterSame: re,
    onValueChange: F,
    format: E,
    removeFormatting: S,
    getCaretBoundary: function(R) {
      return Sa(R, e);
    },
    onKeyDown: O,
    onBlur: q
  });
}
function Na(e) {
  var t = Da(e);
  return $.createElement(Ro, Object.assign({}, t));
}
function Ca(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, d = r.length; l < d; l++)
    r[l] === i && (s[l] = e[a] || Ao(o, a), a += 1);
  return s.join("");
}
function Oa(e, t, r) {
  t === void 0 && (t = _o(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(m) {
    return n[m] === o;
  }, d = function(m, y) {
    for (var E = "", S = 0; S < m.length; S++)
      l(y + S) && Ke(m[S]) && (E += m[S]);
    return E;
  }, f = function(m) {
    return m.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", u = 0; u < e.length; u++)
      if (l(u))
        Ke(e[u]) && (c += e[u]);
      else if (e[u] !== n[u])
        return f(e);
    return c;
  }
  var p = s.substring(0, i.start), g = e.substring(a.start, a.end), v = s.substring(i.end);
  return "" + d(p, 0) + f(g) + d(v, i.end);
}
function Ia(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(u, p) {
    var g = void 0;
    u === o && (a++, g = Ao(n, a - 1), s === -1 && e[p] === g && (s = p)), l[p] = g;
  });
  for (var d = function(u) {
    return r[u] === o && e[u] !== l[u];
  }, f = 0, c = i.length; f < c; f++)
    i[f] = f === s || d(f) || d(f - 1);
  return i[r.indexOf(o)] = !0, i;
}
function _a(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function Aa(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Pa(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = Me);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = Tr(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  _a(e);
  var d = function(g) {
    return Ia(g, e);
  }, f = function(g) {
    var v = g.key, m = g.target, y = m.selectionStart, E = m.selectionEnd, S = m.value;
    if (y !== E) {
      n(g);
      return;
    }
    var x = y;
    if (v === "Backspace" || v === "Delete") {
      var b = "right";
      if (v === "Backspace") {
        for (; x > 0 && t[x - 1] !== o; )
          x--;
        b = "left";
      } else {
        for (var w = t.length; x < w && t[x] !== o; )
          x++;
        b = "right";
      }
      x = Bt(S, x, d(S), b);
    } else t[x] !== o && v !== "ArrowLeft" && v !== "ArrowRight" && (x = Bt(S, x + 1, d(S), "right"));
    x !== y && ke(m, x), n(g);
  }, c = Ye(i) ? a : i, u = s ?? Aa(c, t), p = Object.assign(Object.assign({}, e), { valueIsNumericString: u });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: u,
    inputMode: r,
    format: function(g) {
      return Ca(g, p);
    },
    removeFormatting: function(g, v) {
      return Oa(g, v, p);
    },
    getCaretBoundary: d,
    onKeyDown: f
  });
}
function Ra(e) {
  var t = Pa(e);
  return $.createElement(Ro, Object.assign({}, t));
}
const Ta = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, Np = ({
  type: e,
  field: t,
  fieldState: r,
  postfix: n,
  className: o,
  format: i,
  parentClassName: a,
  labelClassName: s,
  decimalScale: l = 1,
  formState: d,
  label: f,
  ...c
}) => {
  var g, v;
  const u = "!border-danger", { error: p } = r;
  return /* @__PURE__ */ fe("label", { children: [
    f && /* @__PURE__ */ V("span", { className: `text-primary ${s}`, children: f }),
    i ? /* @__PURE__ */ V(
      Ra,
      {
        onValueChange: (m) => {
          var y;
          t == null || t.onChange((y = m.value.replace("_", "")) == null ? void 0 : y.toString());
        },
        value: (g = t == null ? void 0 : t.value) == null ? void 0 : g.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${p ? u : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
        format: i,
        ...c
      }
    ) : e === "number" ? /* @__PURE__ */ fe(
      "div",
      {
        className: `${p ? u : ""} ${a} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ V(
            Na,
            {
              decimalScale: l,
              onValueChange: (m) => {
                var y;
                return t == null ? void 0 : t.onChange((y = m.value.replace("_", "")) == null ? void 0 : y.toString());
              },
              value: (v = t == null ? void 0 : t.value) == null ? void 0 : v.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
              ...c,
              ...Ta.number
            }
          ),
          n ? /* @__PURE__ */ V("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ V(
      "input",
      {
        ...t,
        ...c,
        type: e,
        className: `${p ? u : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`
      }
    ),
    /* @__PURE__ */ V(Rr, { error: p })
  ] });
}, To = ({
  children: e,
  className: t
}) => /* @__PURE__ */ V("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), Cp = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Ee(null);
  return /* @__PURE__ */ V(To, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ V("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ fe(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ V("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ V("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, Mr = "-", Va = (e) => {
  const t = Ba(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Mr);
      return s[0] === "" && s.length !== 1 && s.shift(), Vo(s, t) || Ma(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, Vo = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Vo(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(Mr);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, gn = /^\[(.+)\]$/, Ma = (e) => {
  if (gn.test(e)) {
    const t = gn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Ba = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return $a(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    xr(a, n, i, t);
  }), n;
}, xr = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : vn(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (La(o)) {
        xr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      xr(a, vn(t, i), r, n);
    });
  });
}, vn = (e, t) => {
  let r = e;
  return t.split(Mr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, La = (e) => e.isThemeGetter, $a = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, Fa = (e) => {
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
}, Mo = "!", ka = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const l = [];
    let d = 0, f = 0, c;
    for (let m = 0; m < s.length; m++) {
      let y = s[m];
      if (d === 0) {
        if (y === o && (n || s.slice(m, m + i) === t)) {
          l.push(s.slice(f, m)), f = m + i;
          continue;
        }
        if (y === "/") {
          c = m;
          continue;
        }
      }
      y === "[" ? d++ : y === "]" && d--;
    }
    const u = l.length === 0 ? s : s.substring(f), p = u.startsWith(Mo), g = p ? u.substring(1) : u, v = c && c > f ? c - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: v
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, Ga = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Wa = (e) => ({
  cache: Fa(e.cacheSize),
  parseClassName: ka(e),
  ...Va(e)
}), Ua = /\s+/, ja = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(Ua);
  let s = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const d = a[l], {
      modifiers: f,
      hasImportantModifier: c,
      baseClassName: u,
      maybePostfixModifierPosition: p
    } = r(d);
    let g = !!p, v = n(g ? u.substring(0, p) : u);
    if (!v) {
      if (!g) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = n(u), !v) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      g = !1;
    }
    const m = Ga(f).join(":"), y = c ? m + Mo : m, E = y + v;
    if (i.includes(E))
      continue;
    i.push(E);
    const S = o(v, g);
    for (let x = 0; x < S.length; ++x) {
      const b = S[x];
      i.push(y + b);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function za() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Bo(t)) && (n && (n += " "), n += r);
  return n;
}
const Bo = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Bo(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Ha(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const d = t.reduce((f, c) => c(f), e());
    return r = Wa(d), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const d = n(l);
    if (d)
      return d;
    const f = ja(l, r);
    return o(l, f), f;
  }
  return function() {
    return i(za.apply(null, arguments));
  };
}
const oe = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Lo = /^\[(?:([a-z-]+):)?(.+)\]$/i, qa = /^\d+\/\d+$/, Ya = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ka = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xa = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ja = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Za = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qa = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => et(e) || Ya.has(e) || qa.test(e), $e = (e) => ot(e, "length", ss), et = (e) => !!e && !Number.isNaN(Number(e)), Zt = (e) => ot(e, "number", et), st = (e) => !!e && Number.isInteger(Number(e)), es = (e) => e.endsWith("%") && et(e.slice(0, -1)), L = (e) => Lo.test(e), Fe = (e) => Ka.test(e), ts = /* @__PURE__ */ new Set(["length", "size", "percentage"]), rs = (e) => ot(e, ts, $o), ns = (e) => ot(e, "position", $o), os = /* @__PURE__ */ new Set(["image", "url"]), is = (e) => ot(e, os, ls), as = (e) => ot(e, "", cs), ct = () => !0, ot = (e, t, r) => {
  const n = Lo.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, ss = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xa.test(e) && !Ja.test(e)
), $o = () => !1, cs = (e) => Za.test(e), ls = (e) => Qa.test(e), us = () => {
  const e = oe("colors"), t = oe("spacing"), r = oe("blur"), n = oe("brightness"), o = oe("borderColor"), i = oe("borderRadius"), a = oe("borderSpacing"), s = oe("borderWidth"), l = oe("contrast"), d = oe("grayscale"), f = oe("hueRotate"), c = oe("invert"), u = oe("gap"), p = oe("gradientColorStops"), g = oe("gradientColorStopPositions"), v = oe("inset"), m = oe("margin"), y = oe("opacity"), E = oe("padding"), S = oe("saturate"), x = oe("scale"), b = oe("sepia"), w = oe("skew"), C = oe("space"), D = oe("translate"), M = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", L, t], O = () => [L, t], q = () => ["", Ve, $e], ee = () => ["auto", et, L], re = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], T = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", L], Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], G = () => [et, L];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ct],
      spacing: [Ve, $e],
      blur: ["none", "", Fe, L],
      brightness: G(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Fe, L],
      borderSpacing: O(),
      borderWidth: q(),
      contrast: G(),
      grayscale: j(),
      hueRotate: G(),
      invert: j(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [es, $e],
      inset: F(),
      margin: F(),
      opacity: G(),
      padding: O(),
      saturate: G(),
      scale: G(),
      sepia: j(),
      skew: G(),
      space: O(),
      translate: O()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", L]
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
        columns: [Fe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Z()
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
        object: [...re(), L]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", st, L]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: F()
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
        flex: ["1", "auto", "initial", "none", L]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: j()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: j()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", st, L]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ct]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", st, L]
        }, L]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ct]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [st, L]
        }, L]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ee()
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
        "auto-cols": ["auto", "min", "max", "fr", L]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", L]
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
        justify: ["normal", ...k()]
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
        content: ["normal", ...k(), "baseline"]
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
        "place-content": [...k(), "baseline"]
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
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
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
        "space-x": [C]
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
        "space-y": [C]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [L, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [L, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Fe]
        }, Fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [L, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Fe, $e]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Zt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ct]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", et, Zt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ve, L]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", L]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", L]
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
        "placeholder-opacity": [y]
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
        "text-opacity": [y]
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
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ve, $e]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ve, L]
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
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
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
        content: ["none", L]
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
        "bg-opacity": [y]
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
        bg: [...re(), ns]
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
        bg: ["auto", "cover", "contain", rs]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, is]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
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
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...R(), "hidden"]
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
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: R()
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
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ve, L]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ve, $e]
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
        ring: q()
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ve, $e]
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
        shadow: ["", "inner", "none", Fe, as]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ct]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...T(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": T()
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
        "drop-shadow": ["", "none", Fe, L]
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
        sepia: [b]
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
        "backdrop-opacity": [y]
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
        "backdrop-sepia": [b]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: G()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", L]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: G()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", L]
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
        scale: [x]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [x]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [x]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [st, L]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [w]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [w]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
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
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
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
        "will-change": ["auto", "scroll", "contents", "transform", L]
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
        stroke: [Ve, $e, Zt]
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
}, ds = /* @__PURE__ */ Ha(us);
function Fo(e, t) {
  const [r, n] = Ee(e);
  return ue(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const Op = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = Ee(!1), [a, s] = Ee(""), l = Fo(a, 100), d = z(null);
  ue(() => {
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
  return /* @__PURE__ */ fe("div", { ref: d, className: "relative", children: [
    /* @__PURE__ */ fe("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ V(
        Mt,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ V(
        "input",
        {
          ...n,
          ref: d,
          className: ds(
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
    o && /* @__PURE__ */ V("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var u;
      return /* @__PURE__ */ V(
        "li",
        {
          onClick: () => f(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ fe("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ V(Mt, { name: c.icon }),
            /* @__PURE__ */ V(
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
}, Ip = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = Ee(r), s = Fo(i, 300);
  return ue(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ fe("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ V(
      Mt,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ V(
      "input",
      {
        placeholder: e,
        onChange: (l) => a(l.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-light-gray border-[1px] border-light-gray rounded-[30px] md:border-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${n}`
      }
    )
  ] });
}, _p = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  labelClassName: i,
  parentClassName: a,
  formState: s,
  label: l,
  ...d
}) => /* @__PURE__ */ fe("label", { children: [
  l && /* @__PURE__ */ V("span", { className: `text-primary ${i}`, children: l }),
  /* @__PURE__ */ V(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ fe(
        "select",
        {
          ...n,
          ...d,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ V("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((f, c) => /* @__PURE__ */ V("option", { value: f.value, className: "text-black", children: f.label }, c))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ V(Rr, { error: o == null ? void 0 : o.error })
] });
function gt(e) {
  "@babel/helpers - typeof";
  return gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gt(e);
}
function fs(e, t) {
  if (gt(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ps(e) {
  var t = fs(e, "string");
  return gt(t) == "symbol" ? t : t + "";
}
function ms(e, t, r) {
  return (t = ps(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function hn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hn(Object(r), !0).forEach(function(n) {
      ms(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ge(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var yn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Qt = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, xn = {
  INIT: "@@redux/INIT" + Qt(),
  REPLACE: "@@redux/REPLACE" + Qt(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Qt();
  }
};
function gs(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function vs(e) {
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
  if (ys(e)) return "date";
  if (bs(e)) return "error";
  var r = hs(e);
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
function hs(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function bs(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ys(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function He(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = vs(e)), t;
}
function ko(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(1) : "Expected the enhancer to be a function. Instead, received: '" + He(r) + "'");
    return r(ko)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ge(2) : "Expected the root reducer to be a function. Instead, received: '" + He(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function d() {
    s === a && (s = a.slice());
  }
  function f() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ge(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(4) : "Expected the listener to be a function. Instead, received: '" + He(v) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ge(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var m = !0;
    return d(), s.push(v), function() {
      if (m) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? ge(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, d();
        var E = s.indexOf(v);
        s.splice(E, 1), a = null;
      }
    };
  }
  function u(v) {
    if (!gs(v))
      throw new Error(process.env.NODE_ENV === "production" ? ge(7) : "Actions must be plain objects. Instead, the actual type was: '" + He(v) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof v.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? ge(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? ge(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, v);
    } finally {
      l = !1;
    }
    for (var m = a = s, y = 0; y < m.length; y++) {
      var E = m[y];
      E();
    }
    return v;
  }
  function p(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? ge(10) : "Expected the nextReducer to be a function. Instead, received: '" + He(v));
    o = v, u({
      type: xn.REPLACE
    });
  }
  function g() {
    var v, m = c;
    return v = {
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
          throw new Error(process.env.NODE_ENV === "production" ? ge(11) : "Expected the observer to be an object. Instead, received: '" + He(E) + "'");
        function S() {
          E.next && E.next(f());
        }
        S();
        var x = m(S);
        return {
          unsubscribe: x
        };
      }
    }, v[yn] = function() {
      return this;
    }, v;
  }
  return u({
    type: xn.INIT
  }), n = {
    dispatch: u,
    subscribe: c,
    getState: f,
    replaceReducer: p
  }, n[yn] = g, n;
}
function En(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Sn(e, t) {
  if (typeof e == "function")
    return En(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? ge(16) : "bindActionCreators expected an object or a function, but instead received: '" + He(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = En(o, t));
  }
  return r;
}
function Go() {
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
function xs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? ge(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = Go.apply(void 0, s)(o.dispatch), bn(bn({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function Es(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} }, er = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Ss() {
  if (wn) return er;
  wn = 1;
  var e = $;
  function t(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, u) {
    var p = u(), g = n({ inst: { value: p, getSnapshot: u } }), v = g[0].inst, m = g[1];
    return i(function() {
      v.value = p, v.getSnapshot = u, l(v) && m({ inst: v });
    }, [c, p, u]), o(function() {
      return l(v) && m({ inst: v }), c(function() {
        l(v) && m({ inst: v });
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
  return er.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, er;
}
var tr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function ws() {
  return Dn || (Dn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = $, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(S) {
      {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), w = 1; w < x; w++)
          b[w - 1] = arguments[w];
        n("error", S, b);
      }
    }
    function n(S, x, b) {
      {
        var w = t.ReactDebugCurrentFrame, C = w.getStackAddendum();
        C !== "" && (x += "%s", b = b.concat([C]));
        var D = b.map(function(M) {
          return String(M);
        });
        D.unshift("Warning: " + x), Function.prototype.apply.call(console[S], console, D);
      }
    }
    function o(S, x) {
      return S === x && (S !== 0 || 1 / S === 1 / x) || S !== S && x !== x;
    }
    var i = typeof Object.is == "function" ? Object.is : o, a = e.useState, s = e.useEffect, l = e.useLayoutEffect, d = e.useDebugValue, f = !1, c = !1;
    function u(S, x, b) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var w = x();
      if (!c) {
        var C = x();
        i(w, C) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), c = !0);
      }
      var D = a({
        inst: {
          value: w,
          getSnapshot: x
        }
      }), M = D[0].inst, B = D[1];
      return l(function() {
        M.value = w, M.getSnapshot = x, p(M) && B({
          inst: M
        });
      }, [S, w, x]), s(function() {
        p(M) && B({
          inst: M
        });
        var F = function() {
          p(M) && B({
            inst: M
          });
        };
        return S(F);
      }, [S]), d(w), w;
    }
    function p(S) {
      var x = S.getSnapshot, b = S.value;
      try {
        var w = x();
        return !i(b, w);
      } catch {
        return !0;
      }
    }
    function g(S, x, b) {
      return x();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !v, y = m ? g : u, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    tr.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), tr;
}
process.env.NODE_ENV === "production" ? Er.exports = Ss() : Er.exports = ws();
var Br = Er.exports, rr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function Ds() {
  if (Nn) return rr;
  Nn = 1;
  var e = $, t = Br;
  function r(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return rr.useSyncExternalStoreWithSelector = function(d, f, c, u, p) {
    var g = i(null);
    if (g.current === null) {
      var v = { hasValue: !1, value: null };
      g.current = v;
    } else v = g.current;
    g = s(function() {
      function y(w) {
        if (!E) {
          if (E = !0, S = w, w = u(w), p !== void 0 && v.hasValue) {
            var C = v.value;
            if (p(C, w)) return x = C;
          }
          return x = w;
        }
        if (C = x, n(S, w)) return C;
        var D = u(w);
        return p !== void 0 && p(C, D) ? C : (S = w, x = D);
      }
      var E = !1, S, x, b = c === void 0 ? null : c;
      return [function() {
        return y(f());
      }, b === null ? void 0 : function() {
        return y(b());
      }];
    }, [f, c, u, p]);
    var m = o(d, g[0], g[1]);
    return a(function() {
      v.hasValue = !0, v.value = m;
    }, [m]), l(m), m;
  }, rr;
}
var nr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function Ns() {
  return Cn || (Cn = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = $, t = Br;
    function r(f, c) {
      return f === c && (f !== 0 || 1 / f === 1 / c) || f !== f && c !== c;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
    function d(f, c, u, p, g) {
      var v = i(null), m;
      v.current === null ? (m = {
        hasValue: !1,
        value: null
      }, v.current = m) : m = v.current;
      var y = s(function() {
        var b = !1, w, C, D = function(O) {
          if (!b) {
            b = !0, w = O;
            var q = p(O);
            if (g !== void 0 && m.hasValue) {
              var ee = m.value;
              if (g(ee, q))
                return C = ee, ee;
            }
            return C = q, q;
          }
          var re = w, R = C;
          if (n(re, O))
            return R;
          var T = p(O);
          return g !== void 0 && g(R, T) ? R : (w = O, C = T, T);
        }, M = u === void 0 ? null : u, B = function() {
          return D(c());
        }, F = M === null ? void 0 : function() {
          return D(M());
        };
        return [B, F];
      }, [c, u, p, g]), E = y[0], S = y[1], x = o(f, E, S);
      return a(function() {
        m.hasValue = !0, m.value = x;
      }, [x]), l(x), x;
    }
    nr.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), nr;
}
process.env.NODE_ENV === "production" ? Ds() : Ns();
function Cs(e) {
  e();
}
let Wo = Cs;
const Os = (e) => Wo = e, Is = () => Wo, On = Symbol.for("react-redux-context"), In = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function _s() {
  var e;
  if (!H.createContext) return {};
  const t = (e = In[On]) != null ? e : In[On] = /* @__PURE__ */ new Map();
  let r = t.get(H.createContext);
  return r || (r = H.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(H.createContext, r)), r;
}
const Uo = /* @__PURE__ */ _s(), As = () => {
  throw new Error("uSES not initialized!");
};
function Ge() {
  return Ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ge.apply(null, arguments);
}
function jo(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Sr = { exports: {} }, Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Ps() {
  if (_n) return Y;
  _n = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case t:
          switch (b = b.type, b) {
            case l:
            case d:
            case n:
            case i:
            case o:
            case c:
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
    return S(b) === d;
  }
  return Y.AsyncMode = l, Y.ConcurrentMode = d, Y.ContextConsumer = s, Y.ContextProvider = a, Y.Element = t, Y.ForwardRef = f, Y.Fragment = n, Y.Lazy = g, Y.Memo = p, Y.Portal = r, Y.Profiler = i, Y.StrictMode = o, Y.Suspense = c, Y.isAsyncMode = function(b) {
    return x(b) || S(b) === l;
  }, Y.isConcurrentMode = x, Y.isContextConsumer = function(b) {
    return S(b) === s;
  }, Y.isContextProvider = function(b) {
    return S(b) === a;
  }, Y.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Y.isForwardRef = function(b) {
    return S(b) === f;
  }, Y.isFragment = function(b) {
    return S(b) === n;
  }, Y.isLazy = function(b) {
    return S(b) === g;
  }, Y.isMemo = function(b) {
    return S(b) === p;
  }, Y.isPortal = function(b) {
    return S(b) === r;
  }, Y.isProfiler = function(b) {
    return S(b) === i;
  }, Y.isStrictMode = function(b) {
    return S(b) === o;
  }, Y.isSuspense = function(b) {
    return S(b) === c;
  }, Y.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === c || b === u || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === p || b.$$typeof === a || b.$$typeof === s || b.$$typeof === f || b.$$typeof === m || b.$$typeof === y || b.$$typeof === E || b.$$typeof === v);
  }, Y.typeOf = S, Y;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var An;
function Rs() {
  return An || (An = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, u = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function S(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === d || N === i || N === o || N === c || N === u || typeof N == "object" && N !== null && (N.$$typeof === g || N.$$typeof === p || N.$$typeof === a || N.$$typeof === s || N.$$typeof === f || N.$$typeof === m || N.$$typeof === y || N.$$typeof === E || N.$$typeof === v);
    }
    function x(N) {
      if (typeof N == "object" && N !== null) {
        var he = N.$$typeof;
        switch (he) {
          case t:
            var _ = N.type;
            switch (_) {
              case l:
              case d:
              case n:
              case i:
              case o:
              case c:
                return _;
              default:
                var Re = _ && _.$$typeof;
                switch (Re) {
                  case s:
                  case f:
                  case g:
                  case p:
                  case a:
                    return Re;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var b = l, w = d, C = s, D = a, M = t, B = f, F = n, O = g, q = p, ee = r, re = i, R = o, T = c, k = !1;
    function j(N) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(N) || x(N) === l;
    }
    function Z(N) {
      return x(N) === d;
    }
    function G(N) {
      return x(N) === s;
    }
    function ne(N) {
      return x(N) === a;
    }
    function de(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function Oe(N) {
      return x(N) === f;
    }
    function ve(N) {
      return x(N) === n;
    }
    function Se(N) {
      return x(N) === g;
    }
    function Ie(N) {
      return x(N) === p;
    }
    function Ae(N) {
      return x(N) === r;
    }
    function _e(N) {
      return x(N) === i;
    }
    function Pe(N) {
      return x(N) === o;
    }
    function Ze(N) {
      return x(N) === c;
    }
    K.AsyncMode = b, K.ConcurrentMode = w, K.ContextConsumer = C, K.ContextProvider = D, K.Element = M, K.ForwardRef = B, K.Fragment = F, K.Lazy = O, K.Memo = q, K.Portal = ee, K.Profiler = re, K.StrictMode = R, K.Suspense = T, K.isAsyncMode = j, K.isConcurrentMode = Z, K.isContextConsumer = G, K.isContextProvider = ne, K.isElement = de, K.isForwardRef = Oe, K.isFragment = ve, K.isLazy = Se, K.isMemo = Ie, K.isPortal = Ae, K.isProfiler = _e, K.isStrictMode = Pe, K.isSuspense = Ze, K.isValidElementType = S, K.typeOf = x;
  }()), K;
}
process.env.NODE_ENV === "production" ? Sr.exports = Ps() : Sr.exports = Rs();
var Ts = Sr.exports, Lr = Ts, Vs = {
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
}, Ms = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Bs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zo = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $r = {};
$r[Lr.ForwardRef] = Bs;
$r[Lr.Memo] = zo;
function Pn(e) {
  return Lr.isMemo(e) ? zo : $r[e.$$typeof] || Vs;
}
var Ls = Object.defineProperty, $s = Object.getOwnPropertyNames, Rn = Object.getOwnPropertySymbols, Fs = Object.getOwnPropertyDescriptor, ks = Object.getPrototypeOf, Tn = Object.prototype;
function Ho(e, t, r) {
  if (typeof t != "string") {
    if (Tn) {
      var n = ks(t);
      n && n !== Tn && Ho(e, n, r);
    }
    var o = $s(t);
    Rn && (o = o.concat(Rn(t)));
    for (var i = Pn(e), a = Pn(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!Ms[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var d = Fs(t, l);
        try {
          Ls(e, l, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var Gs = Ho;
const Vn = /* @__PURE__ */ Es(Gs);
var wr = { exports: {} }, X = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Ws() {
  if (Mn) return X;
  Mn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function v(m) {
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
                case l:
                case u:
                case c:
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
  return X.ContextConsumer = a, X.ContextProvider = i, X.Element = e, X.ForwardRef = l, X.Fragment = r, X.Lazy = u, X.Memo = c, X.Portal = t, X.Profiler = o, X.StrictMode = n, X.Suspense = d, X.SuspenseList = f, X.isAsyncMode = function() {
    return !1;
  }, X.isConcurrentMode = function() {
    return !1;
  }, X.isContextConsumer = function(m) {
    return v(m) === a;
  }, X.isContextProvider = function(m) {
    return v(m) === i;
  }, X.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, X.isForwardRef = function(m) {
    return v(m) === l;
  }, X.isFragment = function(m) {
    return v(m) === r;
  }, X.isLazy = function(m) {
    return v(m) === u;
  }, X.isMemo = function(m) {
    return v(m) === c;
  }, X.isPortal = function(m) {
    return v(m) === t;
  }, X.isProfiler = function(m) {
    return v(m) === o;
  }, X.isStrictMode = function(m) {
    return v(m) === n;
  }, X.isSuspense = function(m) {
    return v(m) === d;
  }, X.isSuspenseList = function(m) {
    return v(m) === f;
  }, X.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === f || m === p || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === c || m.$$typeof === i || m.$$typeof === a || m.$$typeof === l || m.$$typeof === g || m.getModuleId !== void 0);
  }, X.typeOf = v, X;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function Us() {
  return Bn || (Bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, v = !1, m = !1, y = !1, E = !1, S;
    S = Symbol.for("react.module.reference");
    function x(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === r || _ === o || E || _ === n || _ === d || _ === f || y || _ === p || g || v || m || typeof _ == "object" && _ !== null && (_.$$typeof === u || _.$$typeof === c || _.$$typeof === i || _.$$typeof === a || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === S || _.getModuleId !== void 0));
    }
    function b(_) {
      if (typeof _ == "object" && _ !== null) {
        var Re = _.$$typeof;
        switch (Re) {
          case e:
            var Qe = _.type;
            switch (Qe) {
              case r:
              case o:
              case n:
              case d:
              case f:
                return Qe;
              default:
                var I = Qe && Qe.$$typeof;
                switch (I) {
                  case s:
                  case a:
                  case l:
                  case u:
                  case c:
                  case i:
                    return I;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var w = a, C = i, D = e, M = l, B = r, F = u, O = c, q = t, ee = o, re = n, R = d, T = f, k = !1, j = !1;
    function Z(_) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(_) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ne(_) {
      return b(_) === a;
    }
    function de(_) {
      return b(_) === i;
    }
    function Oe(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === e;
    }
    function ve(_) {
      return b(_) === l;
    }
    function Se(_) {
      return b(_) === r;
    }
    function Ie(_) {
      return b(_) === u;
    }
    function Ae(_) {
      return b(_) === c;
    }
    function _e(_) {
      return b(_) === t;
    }
    function Pe(_) {
      return b(_) === o;
    }
    function Ze(_) {
      return b(_) === n;
    }
    function N(_) {
      return b(_) === d;
    }
    function he(_) {
      return b(_) === f;
    }
    J.ContextConsumer = w, J.ContextProvider = C, J.Element = D, J.ForwardRef = M, J.Fragment = B, J.Lazy = F, J.Memo = O, J.Portal = q, J.Profiler = ee, J.StrictMode = re, J.Suspense = R, J.SuspenseList = T, J.isAsyncMode = Z, J.isConcurrentMode = G, J.isContextConsumer = ne, J.isContextProvider = de, J.isElement = Oe, J.isForwardRef = ve, J.isFragment = Se, J.isLazy = Ie, J.isMemo = Ae, J.isPortal = _e, J.isProfiler = Pe, J.isStrictMode = Ze, J.isSuspense = N, J.isSuspenseList = he, J.isValidElementType = x, J.typeOf = b;
  }()), J;
}
process.env.NODE_ENV === "production" ? wr.exports = Ws() : wr.exports = Us();
var Ln = wr.exports;
function Fr(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function or(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Fr(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function js(e, t, r) {
  or(e, "mapStateToProps"), or(t, "mapDispatchToProps"), or(r, "mergeProps");
}
const zs = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Hs(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, d, f, c, u;
  function p(E, S) {
    return l = E, d = S, f = e(l, d), c = t(n, d), u = r(f, c, d), s = !0, u;
  }
  function g() {
    return f = e(l, d), t.dependsOnOwnProps && (c = t(n, d)), u = r(f, c, d), u;
  }
  function v() {
    return e.dependsOnOwnProps && (f = e(l, d)), t.dependsOnOwnProps && (c = t(n, d)), u = r(f, c, d), u;
  }
  function m() {
    const E = e(l, d), S = !a(E, f);
    return f = E, S && (u = r(f, c, d)), u;
  }
  function y(E, S) {
    const x = !i(S, d), b = !o(E, l, S, d);
    return l = E, d = S, x && b ? g() : x ? v() : b ? m() : u;
  }
  return function(S, x) {
    return s ? y(S, x) : p(S, x);
  };
}
function qs(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = jo(t, zs);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && js(a, s, l), Hs(a, s, l, e, i);
}
function Ys(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function Ks(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function qo(e, t, r) {
  Ks(e) || Fr(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Dr(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function $n(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Yo(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = $n(e);
      let d = i(s, l);
      return typeof d == "function" && (i.mapToProps = d, i.dependsOnOwnProps = $n(d), d = i(s, l)), process.env.NODE_ENV !== "production" && qo(d, o, t), d;
    }, i;
  };
}
function kr(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Xs(e) {
  return e && typeof e == "object" ? Dr((t) => (
    // @ts-ignore
    Ys(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Yo(e, "mapDispatchToProps")
  ) : kr(e, "mapDispatchToProps") : Dr((t) => ({
    dispatch: t
  }));
}
function Js(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Yo(e, "mapStateToProps")
  ) : kr(e, "mapStateToProps") : Dr(() => ({}));
}
function Zs(e, t, r) {
  return Ge({}, r, e, t);
}
function Qs(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, d, f) {
      const c = e(l, d, f);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && qo(a, n, "mergeProps")), a;
    };
  };
}
function ec(e) {
  return e ? typeof e == "function" ? Qs(e) : kr(e, "mergeProps") : () => Zs;
}
function tc() {
  const e = Is();
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
const Fn = {
  notify() {
  },
  get: () => []
};
function Ko(e, t) {
  let r, n = Fn, o = 0, i = !1;
  function a(v) {
    f();
    const m = n.subscribe(v);
    let y = !1;
    return () => {
      y || (y = !0, m(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    g.onStateChange && g.onStateChange();
  }
  function d() {
    return i;
  }
  function f() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = tc());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Fn);
  }
  function u() {
    i || (i = !0, f());
  }
  function p() {
    i && (i = !1, c());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: d,
    trySubscribe: u,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return g;
}
const rc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Lt = rc ? H.useLayoutEffect : H.useEffect;
function kn(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ir(e, t) {
  if (kn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !kn(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const nc = ["reactReduxForwardedRef"];
let Xo = As;
const oc = (e) => {
  Xo = e;
}, ic = [null, null], ac = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function sc(e, t, r) {
  Lt(() => e(...t), r);
}
function cc(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function lc(e, t, r, n, o, i, a, s, l, d, f) {
  if (!e) return () => {
  };
  let c = !1, u = null;
  const p = () => {
    if (c || !s.current)
      return;
    const v = t.getState();
    let m, y;
    try {
      m = n(v, o.current);
    } catch (E) {
      y = E, u = E;
    }
    y || (u = null), m === i.current ? a.current || d() : (i.current = m, l.current = m, a.current = !0, f());
  };
  return r.onStateChange = p, r.trySubscribe(), p(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, u)
      throw u;
  };
}
function uc(e, t) {
  return e === t;
}
let Gn = !1;
function Jo(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = uc,
  areOwnPropsEqual: i = ir,
  areStatePropsEqual: a = ir,
  areMergedPropsEqual: s = ir,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: d = Uo
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Gn && (Gn = !0, Fr('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = d, c = Js(e), u = Xs(t), p = ec(r), g = !!e;
  return (m) => {
    if (process.env.NODE_ENV !== "production" && !Ln.isValidElementType(m))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ac(m)}`);
    const y = m.displayName || m.name || "Component", E = `Connect(${y})`, S = {
      shouldHandleStateChanges: g,
      displayName: E,
      wrappedComponentName: y,
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
    function x(C) {
      const [D, M, B] = H.useMemo(() => {
        const {
          reactReduxForwardedRef: N
        } = C, he = jo(C, nc);
        return [C.context, N, he];
      }, [C]), F = H.useMemo(() => D && D.Consumer && // @ts-ignore
      Ln.isContextConsumer(/* @__PURE__ */ H.createElement(D.Consumer, null)) ? D : f, [D, f]), O = H.useContext(F), q = !!C.store && !!C.store.getState && !!C.store.dispatch, ee = !!O && !!O.store;
      if (process.env.NODE_ENV !== "production" && !q && !ee)
        throw new Error(`Could not find "store" in the context of "${E}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${E} in connect options.`);
      const re = q ? C.store : O.store, R = ee ? O.getServerState : re.getState, T = H.useMemo(() => qs(re.dispatch, S), [re]), [k, j] = H.useMemo(() => {
        if (!g) return ic;
        const N = Ko(re, q ? void 0 : O.subscription), he = N.notifyNestedSubs.bind(N);
        return [N, he];
      }, [re, q, O]), Z = H.useMemo(() => q ? O : Ge({}, O, {
        subscription: k
      }), [q, O, k]), G = H.useRef(), ne = H.useRef(B), de = H.useRef(), Oe = H.useRef(!1);
      H.useRef(!1);
      const ve = H.useRef(!1), Se = H.useRef();
      Lt(() => (ve.current = !0, () => {
        ve.current = !1;
      }), []);
      const Ie = H.useMemo(() => () => de.current && B === ne.current ? de.current : T(re.getState(), B), [re, B]), Ae = H.useMemo(() => (he) => k ? lc(
        g,
        re,
        k,
        // @ts-ignore
        T,
        ne,
        G,
        Oe,
        ve,
        de,
        j,
        he
      ) : () => {
      }, [k]);
      sc(cc, [ne, G, Oe, B, de, j]);
      let _e;
      try {
        _e = Xo(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Ae,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Ie,
          R ? () => T(R(), B) : Ie
        );
      } catch (N) {
        throw Se.current && (N.message += `
The error may be correlated with this previous error:
${Se.current.stack}

`), N;
      }
      Lt(() => {
        Se.current = void 0, de.current = void 0, G.current = _e;
      });
      const Pe = H.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ H.createElement(m, Ge({}, _e, {
          ref: M
        }))
      ), [M, m, _e]);
      return H.useMemo(() => g ? /* @__PURE__ */ H.createElement(F.Provider, {
        value: Z
      }, Pe) : Pe, [F, Pe, Z]);
    }
    const w = H.memo(x);
    if (w.WrappedComponent = m, w.displayName = x.displayName = E, l) {
      const D = H.forwardRef(function(B, F) {
        return /* @__PURE__ */ H.createElement(w, Ge({}, B, {
          reactReduxForwardedRef: F
        }));
      });
      return D.displayName = E, D.WrappedComponent = m, Vn(D, m);
    }
    return Vn(w, m);
  };
}
function dc({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = H.useMemo(() => {
    const d = Ko(e);
    return {
      store: e,
      subscription: d,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = H.useMemo(() => e.getState(), [e]);
  Lt(() => {
    const {
      subscription: d
    } = a;
    return d.onStateChange = d.notifyNestedSubs, d.trySubscribe(), s !== e.getState() && d.notifyNestedSubs(), () => {
      d.tryUnsubscribe(), d.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || Uo;
  return /* @__PURE__ */ H.createElement(l.Provider, {
    value: a
  }, r);
}
oc(Br.useSyncExternalStore);
Os(na);
function fc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Zo(e, t) {
  var r = Ee(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = z(!0), o = z(r), i = n.current || !!(t && o.current.inputs && fc(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function pc(e, t) {
  return Zo(function() {
    return e;
  }, t);
}
var U = Zo, A = pc, mc = process.env.NODE_ENV === "production", ar = "Invariant failed";
function Wn(e, t) {
  if (mc)
    throw new Error(ar);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(ar, ": ").concat(r) : ar;
  throw new Error(n);
}
var Ce = function(t) {
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
}, Gr = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Un = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, gc = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, sr = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Wr = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? sr : n, i = t.border, a = i === void 0 ? sr : i, s = t.padding, l = s === void 0 ? sr : s, d = Ce(Gr(r, o)), f = Ce(Un(r, a)), c = Ce(Un(f, l));
  return {
    marginBox: d,
    borderBox: Ce(r),
    paddingBox: f,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, we = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Wn(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Wn()), o;
}, vc = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, $t = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = gc(n, r);
  return Wr({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, Ft = function(t, r) {
  return r === void 0 && (r = vc()), $t(t, r);
}, Qo = function(t, r) {
  var n = {
    top: we(r.marginTop),
    right: we(r.marginRight),
    bottom: we(r.marginBottom),
    left: we(r.marginLeft)
  }, o = {
    top: we(r.paddingTop),
    right: we(r.paddingRight),
    bottom: we(r.paddingBottom),
    left: we(r.paddingLeft)
  }, i = {
    top: we(r.borderTopWidth),
    right: we(r.borderRightWidth),
    bottom: we(r.borderBottomWidth),
    left: we(r.borderLeftWidth)
  };
  return Wr({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, ei = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Qo(r, n);
}, jn = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function hc(e, t) {
  return !!(e === t || jn(e) && jn(t));
}
function bc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!hc(e[r], t[r]))
      return !1;
  return !0;
}
function se(e, t) {
  t === void 0 && (t = bc);
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
var vt = function(t) {
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
const yc = process.env.NODE_ENV === "production", xc = /[ \t]{2,}/g, Ec = /^[ \t]*/gm, zn = (e) => e.replace(xc, " ").replace(Ec, "").trim(), Sc = (e) => zn(`
  %c@hello-pangea/dnd

  %c${zn(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), wc = (e) => [Sc(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Dc = "__@hello-pangea/dnd-disable-dev-warnings";
function ti(e, t) {
  yc || typeof window < "u" && window[Dc] || console[e](...wc(t));
}
const te = ti.bind(null, "warn"), Nr = ti.bind(null, "error");
function We() {
}
function Nc(e, t) {
  return {
    ...e,
    ...t
  };
}
function De(e, t, r) {
  const n = t.map((o) => {
    const i = Nc(r, o.options);
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
const Cc = process.env.NODE_ENV === "production", Hn = "Invariant failed";
class ht extends Error {
}
ht.prototype.toString = function() {
  return this.message;
};
function h(e, t) {
  throw Cc ? new ht(Hn) : new ht(`${Hn}: ${t || ""}`);
}
class Oc extends $.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = We, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && te(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof ht && (r.preventDefault(), process.env.NODE_ENV !== "production" && Nr(o.message));
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
    if (t instanceof ht) {
      process.env.NODE_ENV !== "production" && Nr(t.message), this.setState({});
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
const Ic = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, kt = (e) => e + 1, _c = (e) => `
  You have lifted an item in position ${kt(e.source.index)}
`, ri = (e, t) => {
  const r = e.droppableId === t.droppableId, n = kt(e.index), o = kt(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, ni = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, Ac = (e) => {
  const t = e.destination;
  if (t)
    return ri(e.source, t);
  const r = e.combine;
  return r ? ni(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, qn = (e) => `
  The item has returned to its starting position
  of ${kt(e.index)}
`, Pc = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${qn(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${ri(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${ni(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${qn(e.source)}
  `;
}, Rc = {
  dragHandleUsageInstructions: Ic,
  onDragStart: _c,
  onDragUpdate: Ac,
  onDragEnd: Pc
};
var Vt = Rc;
const ce = {
  x: 0,
  y: 0
}, le = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), be = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Ue = (e, t) => e.x === t.x && e.y === t.y, it = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Xe = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, bt = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Yn = (e, t) => Math.min(...t.map((r) => bt(e, r))), oi = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Tc = (e, t) => {
  const r = Ce({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Nt = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Kn = (e) => [{
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
}], Vc = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Mc = (e, t) => t ? Nt(e, t.scroll.diff.displacement) : e, Bc = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Lc = (e, t) => t && t.shouldClipSubject ? Tc(t.pageMarginBox, e) : Ce(e);
var tt = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = Mc(e.marginBox, n), i = Bc(o, r, t), a = Lc(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Ur = (e, t) => {
  e.frame || (process.env.NODE_ENV, h());
  const r = e.frame, n = be(t, r.scroll.initial), o = it(n), i = {
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
  }, a = tt({
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
const ii = se((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), ai = se((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), jt = se((e) => Object.values(e)), $c = se((e) => Object.values(e));
var Je = se((e, t) => $c(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function jr(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function zt(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Ht = se((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Fc = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !jr(o))
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
  const s = o.displaced.all, l = s.length ? s[0] : null;
  if (e)
    return l ? a(l) : null;
  const d = Ht(t, n);
  if (!l) {
    if (!d.length)
      return null;
    const p = d[d.length - 1];
    return a(p.descriptor.id);
  }
  const f = d.findIndex((p) => p.descriptor.id === l);
  f === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find displaced item in set") : h());
  const c = f - 1;
  if (c < 0)
    return null;
  const u = d[c];
  return a(u.descriptor.id);
}, at = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const si = {
  point: ce,
  value: 0
}, yt = {
  invisible: {},
  visible: {},
  all: []
}, kc = {
  displaced: yt,
  displacedBy: si,
  at: null
};
var Gc = kc, Ne = (e, t) => (r) => e <= r && r <= t, ci = (e) => {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, d = n.left < e.left && n.right > e.right;
    return l && d ? !0 : l && a || d && i;
  };
}, Wc = (e) => {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const zr = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, li = {
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
var Uc = (e) => (t) => {
  const r = Ne(t.top, t.bottom), n = Ne(t.left, t.right);
  return (o) => e === zr ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const jc = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ce;
  return Nt(e, r);
}, zc = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, Hc = (e, t, r) => r(t)(e), Hr = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? jc(e, t) : e;
  return zc(i, t, o) && Hc(i, r, o);
}, qc = (e) => Hr({
  ...e,
  isVisibleThroughFrameFn: ci
}), ui = (e) => Hr({
  ...e,
  isVisibleThroughFrameFn: Wc
}), Yc = (e) => Hr({
  ...e,
  isVisibleThroughFrameFn: Uc(e.destination.axis)
}), Kc = (e, t, r) => {
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
function Xc(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Ce(Gr(r, n));
}
function xt({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const d = Xc(l, r), f = l.descriptor.id;
    if (s.all.push(f), !qc({
      target: d,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const u = Kc(f, i, o), p = {
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
function Jc(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Xn({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = Jc(e, {
    inHomeList: t
  });
  return {
    displaced: yt,
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
function Gt({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = at(e, r);
  if (a == null)
    return Xn({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const d = t.find((g) => g.descriptor.index === a);
  if (!d)
    return Xn({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const f = Ht(e, t), c = t.indexOf(d), u = f.slice(c);
  return {
    displaced: xt({
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
function je(e, t) {
  return !!t.effected[e];
}
var Zc = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return je(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, Qc = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, el = ({
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
  if (d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot move in direction without previous impact location") : h()), d.type === "REORDER") {
    const c = Qc({
      isMovingForward: e,
      isInHomeList: t,
      location: d.destination,
      insideDestination: i
    });
    return c == null ? null : Gt({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const f = Zc({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: d.combine,
    afterCritical: l
  });
  return f == null ? null : Gt({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, tl = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return je(r, t) ? o ? ce : it(n.point) : o ? n.point : ce;
}, rl = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = zt(t);
  n || (process.env.NODE_ENV, h());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = tl({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return le(i, a);
};
const di = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, nl = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, qr = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Jn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Xe(e.line, t.marginBox[e.end] + di(e, r), qr(e, t.marginBox, r)), Zn = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Xe(e.line, t.marginBox[e.start] - nl(e, r), qr(e, t.marginBox, r)), ol = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Xe(e.line, t.contentBox[e.start] + di(e, r), qr(e, t.contentBox, r));
var il = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = Je(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return ol({
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
    if (je(f, o))
      return Zn({
        axis: s,
        moveRelativeTo: u.page,
        isMoving: a
      });
    const p = $t(u.page, d.point);
    return Zn({
      axis: s,
      moveRelativeTo: p,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (je(c.descriptor.id, o)) {
    const u = $t(c.page, it(o.displacedBy.point));
    return Jn({
      axis: s,
      moveRelativeTo: u,
      isMoving: a
    });
  }
  return Jn({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, Cr = (e, t) => {
  const r = e.frame;
  return r ? le(t, r.scroll.diff.displacement) : t;
};
const al = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? il({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : rl({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var qt = (e) => {
  const t = al(e), r = e.droppable;
  return r ? Cr(r, t) : t;
}, fi = (e, t) => {
  const r = be(t, e.scroll.initial), n = it(r);
  return {
    frame: Ce({
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
function Qn(e, t) {
  return e.map((r) => t[r]);
}
function sl(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var cl = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = fi(t, le(t.scroll.current, o)), a = r.frame ? Ur(r, le(r.frame.scroll.current, o)) : r, s = e.displaced, l = xt({
    afterDragging: Qn(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), d = xt({
    afterDragging: Qn(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, c = {}, u = [s, l, d];
  return s.all.forEach((g) => {
    const v = sl(g, u);
    if (v) {
      c[g] = v;
      return;
    }
    f[g] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: f,
      visible: c
    }
  };
}, ll = (e, t) => le(e.scroll.diff.displacement, t), Yr = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = ll(r, e), o = be(n, t.page.borderBox.center);
  return le(t.client.borderBox.center, o);
}, pi = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = be(r, e.page.borderBox.center), l = {
    target: Nt(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? Yc(l) : ui(l);
}, ul = ({
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
  const d = Je(r.descriptor.id, n), f = at(t, r), c = Fc({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: d,
    previousImpact: o
  }) || el({
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
  const u = qt({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if (pi({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: u,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Yr({
        pageBorderBoxCenter: u,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const g = be(u, a), v = cl({
    impact: c,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: g
  });
  return {
    clientSelection: s,
    impact: v,
    scrollJumpRequest: g
  };
};
const pe = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get clipped area from droppable") : h()), t;
};
var dl = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Ne(i[a.start], i[a.end]), l = jt(n).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => ci(o.frame)(pe(f))).filter((f) => {
    const c = pe(f);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const c = pe(f), u = Ne(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || u(i[a.start]) || u(i[a.end]);
  }).sort((f, c) => {
    const u = pe(f)[a.crossAxisStart], p = pe(c)[a.crossAxisStart];
    return e ? u - p : p - u;
  }).filter((f, c, u) => pe(f)[a.crossAxisStart] === pe(u[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const d = l.filter((f) => Ne(pe(f)[a.start], pe(f)[a.end])(t[a.line]));
  return d.length === 1 ? d[0] : d.length > 1 ? d.sort((f, c) => pe(f)[a.start] - pe(c)[a.start])[0] : l.sort((f, c) => {
    const u = Yn(t, Kn(pe(f))), p = Yn(t, Kn(pe(c)));
    return u !== p ? u - p : pe(f)[a.start] - pe(c)[a.start];
  })[0];
};
const eo = (e, t) => {
  const r = e.page.borderBox.center;
  return je(e.descriptor.id, t) ? be(r, t.displacedBy.point) : r;
}, fl = (e, t) => {
  const r = e.page.borderBox;
  return je(e.descriptor.id, t) ? Nt(r, it(t.displacedBy.point)) : r;
};
var pl = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => ui({
  target: fl(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = bt(e, Cr(r, eo(a, o))), d = bt(e, Cr(r, eo(s, o)));
  return l < d ? -1 : d < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Ct = se(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: Xe(t.line, n)
  };
});
const ml = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return Xe(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = Je(e.descriptor.id, r).reduce((d, f) => d + f.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : Xe(n.line, l);
}, mi = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), gi = (e, t, r) => {
  const n = e.frame;
  at(t, e) && (process.env.NODE_ENV !== "production" ? h(!1, "Should not add placeholder space to home list") : h()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot add placeholder size to a subject when it already has one") : h());
  const o = Ct(e.axis, t.displaceBy).point, i = ml(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const f = tt({
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
  const s = i ? le(n.scroll.max, i) : n.scroll.max, l = mi(n, s), d = tt({
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
}, gl = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot remove placeholder form subject when there was none") : h());
  const r = e.frame;
  if (!r) {
    const a = tt({
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
  n || (process.env.NODE_ENV !== "production" ? h(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : h());
  const o = mi(r, n), i = tt({
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
var vl = ({
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
      displaced: yt,
      displacedBy: si,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, u = qt({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), p = at(n, i) ? i : gi(i, n, o);
    return pi({
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
  })(), f = Ct(i.axis, n.displaceBy);
  return Gt({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: yt,
    index: d
  });
}, hl = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = dl({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const d = Je(l.descriptor.id, o), f = pl({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: d,
    afterCritical: s
  }), c = vl({
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
  const u = qt({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: Yr({
      pageBorderBoxCenter: u,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, ye = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const bl = (e, t) => {
  const r = ye(e);
  return r ? t[r] : null;
};
var yl = ({
  state: e,
  type: t
}) => {
  const r = bl(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", d = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: u
  } = e.dimensions;
  return s ? ul({
    isMovingForward: l,
    previousPageBorderBoxCenter: f,
    draggable: d,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : hl({
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
function qe(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function vi(e) {
  const t = Ne(e.top, e.bottom), r = Ne(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function xl(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function El({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = Xe(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: bt(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function Sl({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = jt(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !xl(e, i))
      return !1;
    if (vi(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], d = e[a.crossAxisEnd], f = Ne(i[a.crossAxisStart], i[a.crossAxisEnd]), c = f(l), u = f(d);
    return !c && !u ? !0 : c ? l < s : d > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : El({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const hi = (e, t) => Ce(Nt(e, t));
var wl = (e, t) => {
  const r = e.frame;
  return r ? hi(t, r.scroll.diff.value) : t;
};
function bi({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function Dl({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var Nl = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = Ct(r.axis, t.displaceBy), d = l.value, f = e[s.start], c = e[s.end], p = Ht(t, n).find((v) => {
    const m = v.descriptor.id, y = v.page.borderBox.center[s.line], E = je(m, a), S = bi({
      displaced: o,
      id: m
    });
    return E ? S ? c <= y : f < y - d : S ? c <= y + d : f < y;
  }) || null, g = Dl({
    draggable: t,
    closest: p,
    inHomeList: at(t, r)
  });
  return Gt({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: g
  });
};
const Cl = 4;
var Ol = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Ct(n.axis, e.displaceBy), l = s.value, d = t[a.start], f = t[a.end], u = Ht(e, o).find((g) => {
    const v = g.descriptor.id, m = g.page.borderBox, E = m[a.size] / Cl, S = je(v, i), x = bi({
      displaced: r.displaced,
      id: v
    });
    return S ? x ? f > m[a.start] + E && f < m[a.end] - E : d > m[a.start] - l + E && d < m[a.end] - l - E : x ? f > m[a.start] + l + E && f < m[a.end] + l - E : d > m[a.start] + E && d < m[a.end] - E;
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
}, yi = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = hi(t.page.borderBox, e), l = Sl({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return Gc;
  const d = n[l], f = Je(d.descriptor.id, r), c = wl(d, s);
  return Ol({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: d,
    insideDestination: f,
    afterCritical: a
  }) || Nl({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: d,
    insideDestination: f,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, Kr = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const Il = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = ye(e), o = ye(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = gl(i);
  return Kr(r, a);
};
var _l = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = Il({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = ye(o);
  if (!a)
    return i;
  const s = r[a];
  if (at(e, s) || s.subject.withPlaceholder)
    return i;
  const l = gi(s, e, t);
  return Kr(i, l);
}, ft = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, d = be(l, e.initial.client.selection), f = {
    offset: d,
    selection: l,
    borderBoxCenter: le(e.initial.client.borderBoxCenter, d)
  }, c = {
    selection: le(f.selection, a.scroll.current),
    borderBoxCenter: le(f.borderBoxCenter, a.scroll.current),
    offset: le(f.offset, a.scroll.diff.value)
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
  const p = s.draggables[e.critical.draggable.id], g = o || yi({
    pageOffset: c.offset,
    draggable: p,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), v = _l({
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
      droppables: v
    },
    impact: g,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function Al(e, t) {
  return e.map((r) => t[r]);
}
var xi = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = Al(i.all, r), s = xt({
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
}, Ei = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = qt({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return Yr({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, Si = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, h());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], d = ye(n);
  d || (process.env.NODE_ENV !== "production" ? h(!1, "Must be over a destination in SNAP movement mode") : h());
  const f = s[d], c = xi({
    impact: n,
    viewport: o,
    destination: f,
    draggables: a
  }), u = Ei({
    impact: c,
    draggable: l,
    droppable: f,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return ft({
    impact: c,
    clientSelection: u,
    state: e,
    dimensions: i,
    viewport: o
  });
}, Pl = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), wi = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Ct(t.axis, e.displaceBy), i = Je(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Expected draggable to be inside home list") : h());
  const s = i.slice(a + 1), l = s.reduce((u, p) => (u[p.descriptor.id] = !0, u), {}), d = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: xt({
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
        destination: Pl(e.descriptor)
      }
    },
    afterCritical: d
  };
}, Rl = (e, t) => ({
  draggables: e.draggables,
  droppables: Kr(e.droppables, t)
});
const Ot = (e) => {
  process.env.NODE_ENV;
}, It = (e) => {
  process.env.NODE_ENV;
};
var Tl = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = $t(e.client, t), o = Ft(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, Vl = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Expected Droppable to have a frame") : h()), t;
}, Ml = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = Vl(a).scroll.diff.value, d = le(n, l);
    return Tl({
      draggable: o,
      offset: d,
      initialWindowScroll: r.scroll.initial
    });
  });
}, Bl = ({
  state: e,
  published: t
}) => {
  Ot();
  const r = t.modified.map((y) => {
    const E = e.dimensions.droppables[y.droppableId];
    return Ur(E, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...ii(r)
  }, o = ai(Ml({
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
  }, s = ye(e.impact), l = s ? a.droppables[s] : null, d = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: u
  } = wi({
    draggable: d,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : c, g = yi({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: u
  });
  It();
  const v = {
    ...e,
    phase: "DRAGGING",
    impact: g,
    onLiftImpact: c,
    dimensions: a,
    afterCritical: u,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? v : {
    ...v,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Or = (e) => e.movementMode === "SNAP", cr = (e, t, r) => {
  const n = Rl(e.dimensions, t);
  return !Or(e) || r ? ft({
    state: e,
    dimensions: n
  }) : Si({
    state: e,
    dimensions: n
  });
};
function lr(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const to = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var Ll = (e = to, t) => {
  if (t.type === "FLUSH")
    return {
      ...to,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "INITIAL_PUBLISH must come after a IDLE phase") : h());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], l = i.droppables[r.droppable.id], d = {
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
    }, c = jt(i.droppables).every((v) => !v.isFixedOnPage), {
      impact: u,
      afterCritical: p
    } = wi({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, `Collection cannot start from phase ${e.phase}`) : h()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : h()), Bl({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h());
    const {
      client: r
    } = t.payload;
    return Ue(r, e.current.client.selection) ? e : ft({
      state: e,
      clientSelection: r,
      impact: Or(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return lr(e);
    qe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} not permitted in phase ${e.phase}`) : h());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = Ur(o, n);
    return cr(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Attempting to move in an unsupported phase ${e.phase}`) : h());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : h()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? h(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : h());
    const i = {
      ...o,
      isEnabled: n
    };
    return cr(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Attempting to move in an unsupported phase ${e.phase}`) : h());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : h()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? h(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : h());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return cr(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    qe(e) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot move by window in phase ${e.phase}`) : h()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? h(!1, "Window scrolling is currently not supported for fixed lists") : h());
    const r = t.payload.newScroll;
    if (Ue(e.viewport.scroll.current, r))
      return lr(e);
    const n = fi(e.viewport, r);
    return Or(e) ? Si({
      state: e,
      viewport: n
    }) : ft({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!qe(e))
      return e;
    const r = t.payload.maxScroll;
    if (Ue(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, `${t.type} received while not in DRAGGING phase`) : h());
    const r = yl({
      state: e,
      type: t.type
    });
    return r ? ft({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? h(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : h()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot animate drop from phase ${e.phase}`) : h()), {
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
const $l = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Fl = (e) => ({
  type: "LIFT",
  payload: e
}), kl = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Gl = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Wl = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Ul = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), jl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), zl = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Di = (e) => ({
  type: "MOVE",
  payload: e
}), Hl = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), ql = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Yl = () => ({
  type: "MOVE_UP",
  payload: null
}), Kl = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Xl = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Jl = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Xr = () => ({
  type: "FLUSH",
  payload: null
}), Zl = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Jr = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Ni = (e) => ({
  type: "DROP",
  payload: e
}), Ql = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ci = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function eu(e) {
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
  process.env.NODE_ENV !== "production" && te(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function tu(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Je(e.droppable.id, t.draggables);
    eu(r);
  }
}
var ru = (e) => ({
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
  l.phase === "DROP_ANIMATING" && r(Jr({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase to start a drag") : h()), r(Xr()), r($l({
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
  tu(c, u), r(kl({
    critical: c,
    dimensions: u,
    clientSelection: a,
    movementMode: s,
    viewport: p
  }));
}, nu = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const Zr = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Et = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Oi = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ze = `${Oi.outOfTheWay}s ${Zr.outOfTheWay}`, pt = {
  fluid: `opacity ${ze}`,
  snap: `transform ${ze}, opacity ${ze}`,
  drop: (e) => {
    const t = `${e}s ${Zr.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ze}`,
  placeholder: `height ${ze}, width ${ze}, margin ${ze}`
}, ro = (e) => Ue(e, ce) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ir = {
  moveTo: ro,
  drop: (e, t) => {
    const r = ro(e);
    if (r)
      return t ? `${r} scale(${Et.scale.drop})` : r;
  }
}, {
  minDropTime: _r,
  maxDropTime: Ii
} = Oi, ou = Ii - _r, no = 1500, iu = 0.6;
var au = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = bt(e, t);
  if (n <= 0)
    return _r;
  if (n >= no)
    return Ii;
  const o = n / no, i = _r + ou * o, a = r === "CANCEL" ? i * iu : i;
  return Number(a.toFixed(2));
}, su = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = ye(e), l = s ? a[s] : null, d = a[t.descriptor.droppableId], f = Ei({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || d,
    viewport: n
  });
  return be(f, t.client.borderBox.center);
}, cu = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: xi({
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
    displaced: yt
  },
  didDropInsideDroppable: !0
};
const lu = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Ql({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? h(!1, "A DROP action occurred while DROP_PENDING and still waiting") : h()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot drop in phase: ${o.phase}`) : h());
  const s = o.critical, l = o.dimensions, d = l.draggables[o.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: c
  } = cu({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), u = c ? jr(f) : null, p = c ? zt(f) : null, g = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, v = {
    draggableId: d.descriptor.id,
    type: d.descriptor.type,
    source: g,
    reason: i,
    mode: o.movementMode,
    destination: u,
    combine: p
  }, m = su({
    impact: f,
    draggable: d,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), y = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: v,
    impact: f
  };
  if (!(!Ue(o.current.client.offset, m) || !!v.combine)) {
    t(Jr({
      completed: y
    }));
    return;
  }
  const S = au({
    current: o.current.client.offset,
    destination: m,
    reason: i
  });
  t(Zl({
    newHomeClientOffset: m,
    dropDuration: S,
    completed: y
  }));
};
var uu = lu, _i = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function du(e) {
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
function fu({
  onWindowScroll: e
}) {
  function t() {
    e(_i());
  }
  const r = vt(t), n = du(r);
  let o = We;
  function i() {
    return o !== We;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start scroll listener when already active") : h()), o = De(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop scroll listener when not active") : h()), r.cancel(), o(), o = We;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const pu = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", mu = (e) => {
  const t = fu({
    onWindowScroll: (r) => {
      e.dispatch(Hl({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && pu(n) && t.stop(), r(n);
  };
};
var gu = mu, vu = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && te("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && te(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, hu = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? h(!1, "Could not find timer") : h());
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
const bu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, yu = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, xu = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, lt = (e, t) => {
  Ot(), t(), It();
}, Pt = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function ur(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = vu(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var Eu = (e, t) => {
  const r = hu();
  let n = null;
  const o = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : h()), lt("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: c,
        mode: u
      });
    });
  }, i = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h()), lt("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Pt(c, u));
    });
  }, a = (c, u) => {
    n && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : h());
    const p = Pt(c, u);
    n = {
      mode: u,
      lastCritical: c,
      lastLocation: p.source,
      lastCombine: null
    }, r.add(() => {
      lt("onDragStart", () => ur(e().onDragStart, p, t, Vt.onDragStart));
    });
  }, s = (c, u) => {
    const p = jr(u), g = zt(u);
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragMove when onDragStart has not been called") : h());
    const v = !xu(c, n.lastCritical);
    v && (n.lastCritical = c);
    const m = !bu(n.lastLocation, p);
    m && (n.lastLocation = p);
    const y = !yu(n.lastCombine, g);
    if (y && (n.lastCombine = g), !v && !m && !y)
      return;
    const E = {
      ...Pt(c, n.mode),
      combine: g,
      destination: p
    };
    r.add(() => {
      lt("onDragUpdate", () => ur(e().onDragUpdate, E, t, Vt.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Can only flush responders while dragging") : h()), r.flush();
  }, d = (c) => {
    n || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : h()), n = null, lt("onDragEnd", () => ur(e().onDragEnd, c, t, Vt.onDragEnd));
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
        ...Pt(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      d(c);
    }
  };
}, Su = (e, t) => {
  const r = Eu(e, t);
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
const wu = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot finish a drop animating when no drop is occurring") : h()), e.dispatch(Jr({
    completed: n.completed
  }));
};
var Du = wu;
const Nu = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ci());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = De(window, [a]);
    });
  };
};
var Cu = Nu, Ou = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, Iu = (e) => {
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
const _u = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Au = (e) => (t) => (r) => (n) => {
  if (_u(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : h()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const Pu = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Ni({
    reason: n.reason
  })));
};
var Ru = Pu;
const Tu = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Go;
var Vu = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => ko(Ll, Tu(xs(nu(r), Ou(e), ru(e), uu, Du, Cu, Ru, Au(i), gu, Iu(t), Su(n, o))));
const dr = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function Mu({
  registry: e,
  callbacks: t
}) {
  let r = dr(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, Ot();
      const {
        additions: l,
        removals: d,
        modified: f
      } = r, c = Object.keys(l).map((g) => e.draggable.getById(g).getDimension(ce)).sort((g, v) => g.descriptor.index - v.descriptor.index), u = Object.keys(f).map((g) => {
        const m = e.droppable.getById(g).callbacks.getScrollWhileDragging();
        return {
          droppableId: g,
          scroll: m
        };
      }), p = {
        additions: c,
        removals: Object.keys(d),
        modified: u
      };
      r = dr(), It(), t.publish(p);
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
      n && (cancelAnimationFrame(n), n = null, r = dr());
    }
  };
}
var Ai = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = be({
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
}, Pi = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.documentElement") : h()), e;
}, Ri = () => {
  const e = Pi();
  return Ai({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Bu = () => {
  const e = _i(), t = Ri(), r = e.y, n = e.x, o = Pi(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: Ce({
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
        value: ce,
        displacement: ce
      }
    }
  };
}, Lu = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Ot();
  const n = Bu(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(o)), l = {
    draggables: ai(s),
    droppables: ii(a)
  };
  return It(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function oo(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && te(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var $u = (e, t) => {
  let r = null;
  const n = Mu({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (u, p) => {
    e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update is enabled flag of Droppable ${u} as it is not registered`) : h()), r && t.updateDroppableIsEnabled({
      id: u,
      isEnabled: p
    });
  }, i = (u, p) => {
    r && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update isCombineEnabled flag of Droppable ${u} as it is not registered`) : h()), t.updateDroppableIsCombineEnabled({
      id: u,
      isCombineEnabled: p
    }));
  }, a = (u, p) => {
    r && (e.droppable.exists(u) || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot update the scroll on Droppable ${u} as it is not registered`) : h()), t.updateDroppableScroll({
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
    r || (process.env.NODE_ENV !== "production" ? h(!1, "Should only be subscribed when a collection is occurring") : h());
    const p = r.critical.draggable;
    u.type === "ADDITION" && oo(e, p, u.value) && n.add(u.value), u.type === "REMOVAL" && oo(e, p, u.value) && n.remove(u.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (u) => {
      r && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start capturing critical dimensions as there is already a collection") : h());
      const p = e.draggable.getById(u.draggableId), g = e.droppable.getById(p.descriptor.droppableId), v = {
        draggable: p.descriptor,
        droppable: g.descriptor
      }, m = e.subscribe(d);
      return r = {
        critical: v,
        unsubscribe: m
      }, Lu({
        critical: v,
        registry: e,
        scrollOptions: u.scrollOptions
      });
    },
    stopPublishing: l
  };
}, Ti = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Fu = (e) => {
  window.scrollBy(e.x, e.y);
};
const ku = se((e) => jt(e).filter((t) => !(!t.isEnabled || !t.frame))), Gu = (e, t) => ku(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? h(!1, "Invalid result") : h()), vi(n.frame.pageMarginBox)(e))) || null;
var Wu = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Gu(e, r);
};
const St = {
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
var Uu = (e, t, r = () => St) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Vi = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && te(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, Qr = 1, ju = (e, t, r = () => St) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Qr;
  const i = 1 - Vi({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, zu = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, d = Date.now() - a;
  if (d >= i)
    return e;
  if (d < o)
    return Qr;
  const f = Vi({
    startOfRange: o,
    endOfRange: s,
    current: d
  }), c = e * n.ease(f);
  return Math.ceil(c);
}, io = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = ju(e, t, o);
  return i === 0 ? 0 : n ? Math.max(zu(i, r, o), Qr) : i;
}, ao = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Uu(e, n, i);
  return t[n.end] < t[n.start] ? io({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * io({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Hu = ({
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
const qu = oi((e) => e === 0 ? 0 : e);
var Mi = ({
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
  }, s = ao({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: zr,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = ao({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: li,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), d = qu({
    x: l,
    y: s
  });
  if (Ue(d, ce))
    return null;
  const f = Hu({
    container: t,
    subject: r,
    proposedScroll: d
  });
  return f ? Ue(f, ce) ? null : f : null;
};
const Yu = oi((e) => e === 0 ? 0 : e > 0 ? 1 : -1), en = /* @__PURE__ */ (() => {
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
    return Ue(i, ce) ? null : i;
  };
})(), Bi = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Yu(r), i = en({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, tn = (e, t) => Bi({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Ku = (e, t) => {
  if (!tn(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return en({
    current: n,
    max: r,
    change: t
  });
}, rn = (e, t) => {
  const r = e.frame;
  return r ? Bi({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, Xu = (e, t) => {
  const r = e.frame;
  return !r || !rn(e, t) ? null : en({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var Ju = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Mi({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && tn(e, a) ? a : null;
}, Zu = ({
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
  const s = Mi({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && rn(e, s) ? s : null;
}, so = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, u = Ju({
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
  const d = Wu({
    center: a,
    destination: ye(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!d)
    return;
  const f = Zu({
    dragStartTime: t,
    droppable: d,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && o(d.descriptor.id, f);
}, Qu = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => St
}) => {
  const n = vt(e), o = vt(t);
  let i = null;
  const a = (d) => {
    i || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot fluid scroll if not dragging") : h());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: c
    } = i;
    so({
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
      Ot(), i && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot start auto scrolling when already started") : h());
      const f = Date.now();
      let c = !1;
      const u = () => {
        c = !0;
      };
      so({
        state: d,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: u,
        scrollDroppable: u,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: c
      }, It(), c && a(d);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, ed = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, l) => {
    const d = le(s.current.client.selection, l);
    e({
      client: d
    });
  }, o = (s, l) => {
    if (!rn(s, l))
      return l;
    const d = Xu(s, l);
    if (!d)
      return t(s.descriptor.id, l), null;
    const f = be(l, d);
    return t(s.descriptor.id, f), be(l, f);
  }, i = (s, l, d) => {
    if (!s || !tn(l, d))
      return d;
    const f = Ku(l, d);
    if (!f)
      return r(d), null;
    const c = be(d, f);
    return r(c), be(d, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const d = ye(s.impact);
    d || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot perform a jump scroll when there is no destination") : h());
    const f = o(s.dimensions.droppables[d], l);
    if (!f)
      return;
    const c = s.viewport, u = i(s.isWindowScrollAllowed, c, f);
    u && n(s, u);
  };
}, td = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = Qu({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = ed({
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
const rt = "data-rfd", nt = (() => {
  const e = `${rt}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ar = (() => {
  const e = `${rt}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), rd = (() => {
  const e = `${rt}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), co = {
  contextId: `${rt}-scroll-container-context-id`
}, nd = (e) => (t) => `[${t}="${e}"]`, ut = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), od = "pointer-events: none;";
var id = (e) => {
  const t = nd(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(nt.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: od,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${pt.outOfTheWay};
    `;
    return {
      selector: t(Ar.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(rd.contextId),
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
    always: ut(a, "always"),
    resting: ut(a, "resting"),
    dragging: ut(a, "dragging"),
    dropAnimating: ut(a, "dropAnimating"),
    userCancel: ut(a, "userCancel")
  };
};
const ad = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? xo : ue;
var xe = ad;
const fr = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find the head to append a style to") : h()), e;
}, lo = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function sd(e, t) {
  const r = U(() => id(e), [e]), n = z(null), o = z(null), i = A(se((c) => {
    const u = o.current;
    u || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h()), u.textContent = c;
  }), []), a = A((c) => {
    const u = n.current;
    u || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot set dynamic style element if it is not set") : h()), u.textContent = c;
  }, []);
  xe(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? h(!1, "style elements already mounted") : h());
    const c = lo(t), u = lo(t);
    return n.current = c, o.current = u, c.setAttribute(`${rt}-always`, e), u.setAttribute(`${rt}-dynamic`, e), fr().appendChild(c), fr().appendChild(u), a(r.always), i(r.resting), () => {
      const p = (g) => {
        const v = g.current;
        v || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot unmount ref as it is not set") : h()), fr().removeChild(v), g.current = null;
      };
      p(n), p(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = A(() => i(r.dragging), [i, r.dragging]), l = A((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), d = A(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return U(() => ({
    dragging: s,
    dropping: l,
    resting: d
  }), [s, l, d]);
}
function Li(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var $i = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function _t(e) {
  return e instanceof $i(e).HTMLElement;
}
function Fi(e, t) {
  const r = `[${nt.contextId}="${e}"]`, n = Li(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && te(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(nt.draggableId) === t);
  return o ? _t(o) ? o : (process.env.NODE_ENV !== "production" && te("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && te(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function cd(e) {
  const t = z({}), r = z(null), n = z(null), o = z(!1), i = A(function(u, p) {
    const g = {
      id: u,
      focus: p
    };
    return t.current[u] = g, function() {
      const m = t.current;
      m[u] !== g && delete m[u];
    };
  }, []), a = A(function(u) {
    const p = Fi(e, u);
    p && p !== document.activeElement && p.focus();
  }, [e]), s = A(function(u, p) {
    r.current === u && (r.current = p);
  }, []), l = A(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const u = r.current;
      u && a(u);
    }));
  }, [a]), d = A(function(u) {
    r.current = null;
    const p = document.activeElement;
    p && p.getAttribute(nt.draggableId) === u && (r.current = u);
  }, []);
  return xe(() => (o.current = !0, function() {
    o.current = !1;
    const u = n.current;
    u && cancelAnimationFrame(u);
  }), []), U(() => ({
    register: i,
    tryRecordFocus: d,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, d, l, s]);
}
function ld() {
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
    return u || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find draggable entry with id [${c}]`) : h()), u;
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
    return u || (process.env.NODE_ENV !== "production" ? h(!1, `Cannot find droppable entry with id [${c}]`) : h()), u;
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
function ud() {
  const e = U(ld, []);
  return ue(() => function() {
    $.version.startsWith("16") || $.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var nn = $.createContext(null), wt = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot find document.body") : h()), e;
};
const dd = {
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
var fd = dd;
const pd = (e) => `rfd-announcement-${e}`;
function md(e) {
  const t = U(() => pd(e), [e]), r = z(null);
  return ue(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ge(i.style, fd), wt().appendChild(i), function() {
      setTimeout(function() {
        const l = wt();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), A((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && te(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let gd = 0;
const ki = {
  separator: "::"
};
function vd(e, t = ki) {
  return U(() => `${e}${t.separator}${gd++}`, [t.separator, e]);
}
function hd(e, t = ki) {
  const r = $.useId();
  return U(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var on = "useId" in $ ? hd : vd;
function bd({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function yd({
  contextId: e,
  text: t
}) {
  const r = on("hidden-text", {
    separator: "-"
  }), n = U(() => bd({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ue(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", wt().appendChild(i), function() {
      const s = wt();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var Yt = $.createContext(null), xd = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const Ed = /(\d+)\.(\d+)\.(\d+)/, uo = (e) => {
  const t = Ed.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? h(!1, `Unable to parse React version ${e}`) : h());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, Sd = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var wd = (e, t) => {
  const r = uo(e), n = uo(t);
  Sd(r, n) || process.env.NODE_ENV !== "production" && te(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const pr = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Dd = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && te(`
      No <!doctype html> found.

      ${pr}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && te(`
      Unexpected <!doctype> found: (${t.name})

      ${pr}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && te(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${pr}
    `);
};
function an(e) {
  process.env.NODE_ENV !== "production" && e();
}
function At(e, t) {
  an(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        Nr(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Nd() {
  At(() => {
    wd(xd.react, $.version), Dd(document);
  }, []);
}
function sn(e) {
  const t = z(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function Cd() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot claim lock as it is already claimed") : h());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot release lock when there is no lock") : h()), e = null;
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
function Dt(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Od = 9, Id = 13, cn = 27, Gi = 32, _d = 33, Ad = 34, Pd = 35, Rd = 36, Td = 37, Vd = 38, Md = 39, Bd = 40, Ld = {
  [Id]: !0,
  [Od]: !0
};
var Wi = (e) => {
  Ld[e.keyCode] && e.preventDefault();
};
const $d = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Kt = $d;
const Ui = 0, fo = 5;
function Fd(e, t) {
  return Math.abs(t.x - e.x) >= fo || Math.abs(t.y - e.y) >= fo;
}
const po = {
  type: "IDLE"
};
function kd({
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
      if (i !== Ui)
        return;
      const l = {
        x: a,
        y: s
      }, d = r();
      if (d.type === "DRAGGING") {
        o.preventDefault(), d.actions.move(l);
        return;
      }
      d.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot be IDLE") : h());
      const f = d.point;
      if (!Fd(f, l))
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
      if (o.keyCode === cn) {
        o.preventDefault(), e();
        return;
      }
      Wi(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Unexpected phase") : h()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Kt,
    fn: e
  }];
}
function Gd(e) {
  const t = z(po), r = z(We), n = U(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== Ui || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
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
      const g = {
        x: c.clientX,
        y: c.clientY
      };
      r.current(), d(p, g);
    }
  }), [e]), o = U(() => ({
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
  }), [e]), i = A(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = De(window, [o, n], c);
  }, [o, n]), a = A(() => {
    t.current.type !== "IDLE" && (t.current = po, r.current(), i());
  }, [i]), s = A(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = A(function() {
    const c = {
      capture: !0,
      passive: !1
    }, u = kd({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    r.current = De(window, u, c);
  }, [s, a]), d = A(function(c, u) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h()), t.current = {
      type: "PENDING",
      point: u,
      actions: c
    }, l();
  }, [l]);
  xe(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function Wd() {
}
const Ud = {
  [Ad]: !0,
  [_d]: !0,
  [Rd]: !0,
  [Pd]: !0
};
function jd(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === cn) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Gi) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Bd) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === Vd) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === Md) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === Td) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (Ud[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Wi(o);
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
    eventName: Kt,
    fn: r
  }];
}
function zd(e) {
  const t = z(Wd), r = U(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Gi)
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
        l || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop capturing a keyboard drag when not capturing") : h()), l = !1, t.current(), n();
      }
      t.current = De(window, jd(d, f), {
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
  xe(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const mr = {
  type: "IDLE"
}, Hd = 120, qd = 0.15;
function Yd({
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
      r.keyCode === cn && r.preventDefault(), e();
    }
  }, {
    eventName: Kt,
    fn: e
  }];
}
function Kd({
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
      o.type === "IDLE" && (process.env.NODE_ENV, h());
      const i = n.touches[0];
      if (!i || !(i.force >= qd))
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
    eventName: Kt,
    fn: e
  }];
}
function Xd(e) {
  const t = z(mr), r = z(We), n = A(function() {
    return t.current;
  }, []), o = A(function(p) {
    t.current = p;
  }, []), i = U(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const g = e.findClosestDraggableId(p);
      if (!g)
        return;
      const v = e.tryGetLock(g, s, {
        sourceEvent: p
      });
      if (!v)
        return;
      const m = p.touches[0], {
        clientX: y,
        clientY: E
      } = m, S = {
        x: y,
        y: E
      };
      r.current(), c(v, S);
    }
  }), [e]), a = A(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    r.current = De(window, [i], p);
  }, [i]), s = A(() => {
    const u = t.current;
    u.type !== "IDLE" && (u.type === "PENDING" && clearTimeout(u.longPressTimerId), o(mr), r.current(), a());
  }, [a, o]), l = A(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), d = A(function() {
    const p = {
      capture: !0,
      passive: !1
    }, g = {
      cancel: l,
      completed: s,
      getPhase: n
    }, v = De(window, Kd(g), p), m = De(window, Yd(g), p);
    r.current = function() {
      v(), m();
    };
  }, [l, n, s]), f = A(function() {
    const p = n();
    p.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? h(!1, `Cannot start dragging from phase ${p.type}`) : h());
    const g = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: g,
      hasMoved: !1
    });
  }, [n, o]), c = A(function(p, g) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? h(!1, "Expected to move from IDLE to PENDING drag") : h());
    const v = setTimeout(f, Hd);
    o({
      type: "PENDING",
      point: g,
      actions: p,
      longPressTimerId: v
    }), d();
  }, [d, n, o, f]);
  xe(function() {
    return a(), function() {
      r.current();
      const g = n();
      g.type === "PENDING" && (clearTimeout(g.longPressTimerId), o(mr));
    };
  }, [n, a, o]), xe(function() {
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
function Jd(e) {
  an(() => {
    const t = sn(e);
    At(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot change the amount of sensor hooks after mounting") : h(!1));
    });
  });
}
const Zd = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function ji(e, t) {
  if (t == null)
    return !1;
  if (Zd.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : ji(e, t.parentElement);
}
function Qd(e, t) {
  const r = t.target;
  return _t(r) ? ji(e, r) : !1;
}
var ef = (e) => Ce(e.getBoundingClientRect()).center;
function tf(e) {
  return e instanceof $i(e).Element;
}
const rf = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function zi(e, t) {
  return e == null ? null : e[rf](t) ? e : zi(e.parentElement, t);
}
function nf(e, t) {
  return e.closest ? e.closest(t) : zi(e, t);
}
function of(e) {
  return `[${nt.contextId}="${e}"]`;
}
function af(e, t) {
  const r = t.target;
  if (!tf(r))
    return process.env.NODE_ENV !== "production" && te("event.target must be a Element"), null;
  const n = of(e), o = nf(r, n);
  return o ? _t(o) ? o : (process.env.NODE_ENV !== "production" && te("drag handle must be a HTMLElement"), null) : null;
}
function sf(e, t) {
  const r = af(e, t);
  return r ? r.getAttribute(nt.draggableId) : null;
}
function cf(e, t) {
  const r = `[${Ar.contextId}="${e}"]`, o = Li(document, r).find((i) => i.getAttribute(Ar.id) === t);
  return o ? _t(o) ? o : (process.env.NODE_ENV !== "production" && te("Draggable element is not a HTMLElement"), null) : null;
}
function lf(e) {
  e.preventDefault();
}
function Rt({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && te(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && te(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Hi({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !Ti(t.getState(), n)) : (process.env.NODE_ENV !== "production" && te(`Unable to find draggable with id: ${n}`), !1);
}
function uf({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Hi({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), d = cf(t, l.descriptor.id);
  if (!d)
    return process.env.NODE_ENV !== "production" && te(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && Qd(d, a))
    return null;
  const f = e.claim(i || We);
  let c = "PRE_DRAG";
  function u() {
    return l.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(f);
  }
  function g(b, w) {
    Rt({
      expected: b,
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && r.dispatch(w());
  }
  const v = g.bind(null, "DRAGGING");
  function m(b) {
    function w() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (w(), process.env.NODE_ENV !== "production" ? h(!1, `Cannot lift in phase ${c}`) : h()), r.dispatch(Fl(b.liftActionArgs)), c = "DRAGGING";
    function C(D, M = {
      shouldBlockNextClick: !1
    }) {
      if (b.cleanup(), M.shouldBlockNextClick) {
        const B = De(window, [{
          eventName: "click",
          fn: lf,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(B);
      }
      w(), r.dispatch(Ni({
        reason: D
      }));
    }
    return {
      isActive: () => Rt({
        expected: "DRAGGING",
        phase: c,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: u,
      drop: (D) => C("DROP", D),
      cancel: (D) => C("CANCEL", D),
      ...b.actions
    };
  }
  function y(b) {
    const w = vt((D) => {
      v(() => Di({
        client: D
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
      moveUp: () => v(Yl),
      moveRight: () => v(Xl),
      moveDown: () => v(Kl),
      moveLeft: () => v(Jl)
    };
    return m({
      liftActionArgs: {
        id: o,
        clientSelection: ef(d),
        movementMode: "SNAP"
      },
      cleanup: We,
      actions: b
    });
  }
  function S() {
    Rt({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Rt({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: u,
    fluidLift: y,
    snapLift: E,
    abort: S
  };
}
const df = [Gd, zd, Xd];
function ff({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? df : [], ...n || []], a = Ee(() => Cd())[0], s = A(function(m, y) {
    Dt(m) && !Dt(y) && a.tryAbandon();
  }, [a]);
  xe(function() {
    let m = t.getState();
    return t.subscribe(() => {
      const E = t.getState();
      s(m, E), m = E;
    });
  }, [a, t, s]), xe(() => a.tryAbandon, [a.tryAbandon]);
  const l = A((v) => Hi({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: v
  }), [a, r, t]), d = A((v, m, y) => uf({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: v,
    forceSensorStop: m || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), f = A((v) => sf(e, v), [e]), c = A((v) => {
    const m = r.draggable.findById(v);
    return m ? m.options : null;
  }, [r.draggable]), u = A(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Xr()));
  }, [a, t]), p = A(() => a.isClaimed(), [a]), g = U(() => ({
    canGetLock: l,
    tryGetLock: d,
    findClosestDraggableId: f,
    findOptionsForDraggable: c,
    tryReleaseLock: u,
    isLockClaimed: p
  }), [l, d, f, c, u, p]);
  Jd(i);
  for (let v = 0; v < i.length; v++)
    i[v](g);
}
const pf = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    $.version.startsWith("16") || $.version.startsWith("17") ? r() : So(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), mf = (e) => ({
  ...St,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...St.durationDampening,
    ...e.autoScrollerOptions
  }
});
function dt(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find store from lazy ref") : h()), e.current;
}
function gf(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = z(null);
  Nd();
  const s = sn(e), l = A(() => pf(s.current), [s]), d = A(() => mf(s.current), [s]), f = md(t), c = yd({
    contextId: t,
    text: i
  }), u = sd(t, o), p = A((B) => {
    dt(a).dispatch(B);
  }, []), g = U(() => Sn({
    publishWhileDragging: Gl,
    updateDroppableScroll: Ul,
    updateDroppableIsEnabled: jl,
    updateDroppableIsCombineEnabled: zl,
    collectionStarting: Wl
  }, p), [p]), v = ud(), m = U(() => $u(v, g), [v, g]), y = U(() => td({
    scrollWindow: Fu,
    scrollDroppable: m.scrollDroppable,
    getAutoScrollerOptions: d,
    ...Sn({
      move: Di
    }, p)
  }), [m.scrollDroppable, p, d]), E = cd(t), S = U(() => Vu({
    announce: f,
    autoScroller: y,
    dimensionMarshal: m,
    focusMarshal: E,
    getResponders: l,
    styleMarshal: u
  }), [f, y, m, E, l, u]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== S && process.env.NODE_ENV !== "production" && te("unexpected store change"), a.current = S;
  const x = A(() => {
    const B = dt(a);
    B.getState().phase !== "IDLE" && B.dispatch(Xr());
  }, []), b = A(() => {
    const B = dt(a).getState();
    return B.phase === "DROP_ANIMATING" ? !0 : B.phase === "IDLE" ? !1 : B.isDragging;
  }, []), w = U(() => ({
    isDragging: b,
    tryAbort: x
  }), [b, x]);
  r(w);
  const C = A((B) => Ti(dt(a).getState(), B), []), D = A(() => qe(dt(a).getState()), []), M = U(() => ({
    marshal: m,
    focus: E,
    contextId: t,
    canLift: C,
    isMovementAllowed: D,
    dragHandleUsageInstructionsId: c,
    registry: v
  }), [t, m, c, E, C, D, v]);
  return ff({
    contextId: t,
    store: S,
    registry: v,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ue(() => x, [x]), $.createElement(Yt.Provider, {
    value: M
  }, $.createElement(dc, {
    context: nn,
    store: S
  }, e.children));
}
let vf = 0;
function hf() {
  return U(() => `${vf++}`, []);
}
function bf() {
  return $.useId();
}
var yf = "useId" in $ ? bf : hf;
function xf(e) {
  const t = yf(), r = e.dragHandleUsageInstructions || Vt.dragHandleUsageInstructions;
  return $.createElement(Oc, null, (n) => $.createElement(gf, {
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
const mo = {
  dragging: 5e3,
  dropAnimating: 4500
}, Ef = (e, t) => t ? pt.drop(t.duration) : e ? pt.snap : pt.fluid, Sf = (e, t) => {
  if (e)
    return t ? Et.opacity.drop : Et.opacity.combining;
}, wf = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Df(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = wf(e), l = !!i, d = l ? Ir.drop(n, a) : Ir.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: Ef(s, i),
    transform: d,
    opacity: Sf(a, l),
    zIndex: l ? mo.dropAnimating : mo.dragging,
    pointerEvents: "none"
  };
}
function Nf(e) {
  return {
    transform: Ir.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Cf(e) {
  return e.type === "DRAGGING" ? Df(e) : Nf(e);
}
function Of(e, t, r = ce) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Qo(o, n), a = Ft(i, r), s = {
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
function If(e) {
  const t = on("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = U(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), d = A((p) => {
    const g = o();
    return g || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot get dimension when no ref is set") : h()), Of(r, g, p);
  }, [r, o]), f = U(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: d
  }), [r, d, l, t]), c = z(f), u = z(!0);
  xe(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), xe(() => {
    if (u.current) {
      u.current = !1;
      return;
    }
    const p = c.current;
    c.current = f, n.draggable.update(f, p);
  }, [f, n.draggable]);
}
var ln = $.createContext(null);
function qi(e) {
  e && _t(e) || (process.env.NODE_ENV !== "production" ? h(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : h());
}
function _f(e, t, r) {
  At(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? h(!1, "Draggable requires a draggableId") : h(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : h(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? h(!1, `${n(o)} requires an integer index prop`) : h(!1)), e.mapped.type !== "DRAGGING" && (qi(r()), e.isEnabled && (Fi(t, o) || (process.env.NODE_ENV !== "production" ? h(!1, `${n(o)} Unable to find drag handle`) : h(!1))));
  });
}
function Af(e) {
  an(() => {
    const t = z(e);
    At(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Draggable isClone prop value changed during component life") : h(!1));
    }, [e]);
  });
}
function Wt(e) {
  const t = Eo(e);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find required context") : h()), t;
}
function Pf(e) {
  e.preventDefault();
}
const Rf = (e) => {
  const t = z(null), r = A((w = null) => {
    t.current = w;
  }, []), n = A(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Wt(Yt), {
    type: s,
    droppableId: l
  } = Wt(ln), d = U(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: f,
    draggableId: c,
    isEnabled: u,
    shouldRespectForcePress: p,
    canDragInteractiveElements: g,
    isClone: v,
    mapped: m,
    dropAnimationFinished: y
  } = e;
  if (_f(e, o, n), Af(v), !v) {
    const w = U(() => ({
      descriptor: d,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: g,
      shouldRespectForcePress: p,
      isEnabled: u
    }), [d, a, n, g, p, u]);
    If(w);
  }
  const E = U(() => u ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: Pf
  } : null, [o, i, c, u]), S = A((w) => {
    m.type === "DRAGGING" && m.dropping && w.propertyName === "transform" && ($.version.startsWith("16") || $.version.startsWith("17") ? y() : So(y));
  }, [y, m]), x = U(() => {
    const w = Cf(m), C = m.type === "DRAGGING" && m.dropping ? S : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: w,
        onTransitionEnd: C
      },
      dragHandleProps: E
    };
  }, [o, E, c, m, S, r]), b = U(() => ({
    draggableId: d.id,
    type: d.type,
    source: {
      index: d.index,
      droppableId: d.droppableId
    }
  }), [d.droppableId, d.id, d.index, d.type]);
  return $.createElement($.Fragment, null, f(x, m.snapshot, b));
};
var Tf = Rf, Yi = (e, t) => e === t, Ki = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const Vf = (e) => e.combine ? e.combine.draggableId : null, Mf = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function Bf() {
  const e = se((o, i) => ({
    x: o,
    y: i
  })), t = se((o, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = se((o, i, a, s, l = null, d = null, f = null) => ({
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
    if (Dt(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = ye(o.impact), d = Mf(o.impact), f = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, d, f);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], d = a.result, f = d.mode, c = Ki(d), u = Vf(d), g = {
        duration: o.dropDuration,
        curve: Zr.drop,
        moveTo: o.newHomeClientOffset,
        opacity: u ? Et.opacity.drop : null,
        scale: u ? Et.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
          dropping: g,
          draggingOver: c,
          combineWith: u,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, s, c, u, g)
        }
      };
    }
    return null;
  };
}
function Xi(e = null) {
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
const Lf = {
  mapped: {
    type: "SECONDARY",
    offset: ce,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Xi(null)
  }
};
function $f() {
  const e = se((a, s) => ({
    x: a,
    y: s
  })), t = se(Xi), r = se((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(ce, a, !0) : null, o = (a, s, l, d) => {
    const f = l.displaced.visible[a], c = !!(d.inVirtualList && d.effected[a]), u = zt(l), p = u && u.draggableId === a ? s : null;
    if (!f) {
      if (!c)
        return n(p);
      if (l.displaced.invisible[a])
        return null;
      const m = it(d.displacedBy.point), y = e(m.x, m.y);
      return r(y, p, !0);
    }
    if (c)
      return n(p);
    const g = l.displacedBy.point, v = e(g.x, g.y);
    return r(v, p, f.shouldAnimate);
  };
  return (a, s) => {
    if (Dt(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const Ff = () => {
  const e = Bf(), t = $f();
  return (n, o) => e(n, o) || t(n, o) || Lf;
}, kf = {
  dropAnimationFinished: Ci
}, Gf = Jo(Ff, kf, null, {
  context: nn,
  areStatePropsEqual: Yi
})(Tf);
var Wf = Gf;
function Ji(e) {
  return Wt(ln).isUsingCloneFor === e.draggableId && !e.isClone ? null : $.createElement(Wf, e);
}
function Uf(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return $.createElement(Ji, Ge({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const un = (e) => (t) => e === t, jf = un("scroll"), zf = un("auto"), Hf = un("visible"), go = (e, t) => t(e.overflowX) || t(e.overflowY), qf = (e, t) => t(e.overflowX) && t(e.overflowY), Zi = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return go(r, jf) || go(r, zf);
}, Yf = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = wt(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, h()), !Zi(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return qf(n, Hf) || process.env.NODE_ENV !== "production" && te(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, dn = (e) => e == null ? null : e === document.body ? Yf() ? e : null : e === document.documentElement ? null : Zi(e) ? e : dn(e.parentElement);
var Kf = (e) => {
  !e || !dn(e.parentElement) || process.env.NODE_ENV !== "production" && te(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Pr = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Qi = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Qi(e.parentElement) : !1;
var Xf = (e) => {
  const t = dn(e), r = Qi(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Jf = ({
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
    } = s, g = Ai({
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
  })(), d = o === "vertical" ? zr : li, f = tt({
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
const Zf = (e, t) => {
  const r = ei(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = Gr({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Wr({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Qf = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, d = Zf(e, l), f = Ft(d, n), c = (() => {
    if (!l)
      return null;
    const p = ei(l), g = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: Ft(p, n),
      scroll: Pr(l),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return Jf({
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
const ep = {
  passive: !1
}, tp = {
  passive: !0
};
var vo = (e) => e.shouldPublishImmediately ? ep : tp;
const Tt = (e) => e && e.env.closestScrollable || null;
function rp(e) {
  const t = z(null), r = Wt(Yt), n = on("droppable"), {
    registry: o,
    marshal: i
  } = r, a = sn(e), s = U(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = z(s), d = U(() => se((x, b) => {
    t.current || (process.env.NODE_ENV !== "production" ? h(!1, "Can only update scroll when dragging") : h());
    const w = {
      x,
      y: b
    };
    i.updateDroppableScroll(s.id, w);
  }), [s.id, i]), f = A(() => {
    const x = t.current;
    return !x || !x.env.closestScrollable ? ce : Pr(x.env.closestScrollable);
  }, []), c = A(() => {
    const x = f();
    d(x.x, x.y);
  }, [f, d]), u = U(() => vt(c), [c]), p = A(() => {
    const x = t.current, b = Tt(x);
    if (x && b || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find scroll options while scrolling") : h()), x.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    u();
  }, [u, c]), g = A((x, b) => {
    t.current && (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect a droppable while a drag is occurring") : h());
    const w = a.current, C = w.getDroppableRef();
    C || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot collect without a droppable ref") : h());
    const D = Xf(C), M = {
      ref: C,
      descriptor: s,
      env: D,
      scrollOptions: b
    };
    t.current = M;
    const B = Qf({
      ref: C,
      descriptor: s,
      env: D,
      windowScroll: x,
      direction: w.direction,
      isDropDisabled: w.isDropDisabled,
      isCombineEnabled: w.isCombineEnabled,
      shouldClipSubject: !w.ignoreContainerClipping
    }), F = D.closestScrollable;
    return F && (F.setAttribute(co.contextId, r.contextId), F.addEventListener("scroll", p, vo(M.scrollOptions)), process.env.NODE_ENV !== "production" && Kf(F)), B;
  }, [r.contextId, s, p, a]), v = A(() => {
    const x = t.current, b = Tt(x);
    return x && b || (process.env.NODE_ENV !== "production" ? h(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : h()), Pr(b);
  }, []), m = A(() => {
    const x = t.current;
    x || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot stop drag when no active drag") : h());
    const b = Tt(x);
    t.current = null, b && (u.cancel(), b.removeAttribute(co.contextId), b.removeEventListener("scroll", p, vo(x.scrollOptions)));
  }, [p, u]), y = A((x) => {
    const b = t.current;
    b || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll when there is no drag") : h());
    const w = Tt(b);
    w || (process.env.NODE_ENV !== "production" ? h(!1, "Cannot scroll a droppable with no closest scrollable") : h()), w.scrollTop += x.y, w.scrollLeft += x.x;
  }, []), E = U(() => ({
    getDimensionAndWatchScroll: g,
    getScrollWhileDragging: v,
    dragStopped: m,
    scroll: y
  }), [m, g, v, y]), S = U(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: E
  }), [E, s, n]);
  xe(() => (l.current = S.descriptor, o.droppable.register(S), () => {
    t.current && (process.env.NODE_ENV !== "production" && te("Unsupported: changing the droppableId or type of a Droppable during a drag"), m()), o.droppable.unregister(S);
  }), [E, s, m, S, i, o.droppable]), xe(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), xe(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function gr() {
}
const ho = {
  width: 0,
  height: 0,
  margin: Vc
}, np = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? ho : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, op = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = np({
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
    transition: r !== "none" ? pt.placeholder : null
  };
}, ip = (e) => {
  const t = z(null), r = A(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ee(e.animate === "open");
  ue(() => s ? n !== "open" ? (r(), l(!1), gr) : t.current ? gr : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : gr, [n, s, r]);
  const d = A((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), f = op({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return $.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: d,
    ref: e.innerRef
  });
};
var ap = $.memo(ip);
function vr(e) {
  return typeof e == "boolean";
}
function hr(e, t) {
  t.forEach((r) => r(e));
}
const sp = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? h(!1, "A Droppable requires a droppableId prop") : h()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? h(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : h());
}, function({
  props: t
}) {
  vr(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isDropDisabled must be a boolean") : h()), vr(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? h(!1, "isCombineEnabled must be a boolean") : h()), vr(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? h(!1, "ignoreContainerClipping must be a boolean") : h());
}, function({
  getDroppableRef: t
}) {
  qi(t());
}], cp = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && te(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], lp = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? h(!1, "Must provide a clone render function (renderClone) for virtual lists") : h());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? h(!1, "Expected virtual list to not have a placeholder") : h());
}];
function up(e) {
  At(() => {
    hr(e, sp), e.props.mode === "standard" && hr(e, cp), e.props.mode === "virtual" && hr(e, lp);
  });
}
class dp extends $.PureComponent {
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
const fp = (e) => {
  const t = Eo(Yt);
  t || (process.env.NODE_ENV !== "production" ? h(!1, "Could not find app context") : h());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = z(null), i = z(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: d,
    direction: f,
    ignoreContainerClipping: c,
    isDropDisabled: u,
    isCombineEnabled: p,
    snapshot: g,
    useClone: v,
    updateViewportMaxScroll: m,
    getContainerForClone: y
  } = e, E = A(() => o.current, []), S = A((O = null) => {
    o.current = O;
  }, []), x = A(() => i.current, []), b = A((O = null) => {
    i.current = O;
  }, []);
  up({
    props: e,
    getDroppableRef: E,
    getPlaceholderRef: x
  });
  const w = A(() => {
    n() && m({
      maxScroll: Ri()
    });
  }, [n, m]);
  rp({
    droppableId: s,
    type: l,
    mode: d,
    direction: f,
    isDropDisabled: u,
    isCombineEnabled: p,
    ignoreContainerClipping: c,
    getDroppableRef: E
  });
  const C = U(() => $.createElement(dp, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: O,
    data: q,
    animate: ee
  }) => $.createElement(ap, {
    placeholder: q,
    onClose: O,
    innerRef: b,
    animate: ee,
    contextId: r,
    onTransitionEnd: w
  })), [r, w, e.placeholder, e.shouldAnimatePlaceholder, b]), D = U(() => ({
    innerRef: S,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, C, S]), M = v ? v.dragging.draggableId : null, B = U(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: M
  }), [s, M, l]);
  function F() {
    if (!v)
      return null;
    const {
      dragging: O,
      render: q
    } = v, ee = $.createElement(Ji, {
      draggableId: O.draggableId,
      index: O.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (re, R) => q(re, R, O));
    return ra.createPortal(ee, y());
  }
  return $.createElement(ln.Provider, {
    value: B
  }, a(D, g), F());
};
var pp = fp;
function mp() {
  return document.body || (process.env.NODE_ENV !== "production" ? h(!1, "document.body is not ready") : h()), document.body;
}
const bo = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: mp
}, ea = (e) => {
  let t = {
    ...e
  }, r;
  for (r in bo)
    e[r] === void 0 && (t = {
      ...t,
      [r]: bo[r]
    });
  return t;
}, br = (e, t) => e === t.droppable.type, yo = (e, t) => t.draggables[e.draggable.id], gp = () => {
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
  })), n = se((i, a, s, l, d, f) => {
    const c = d.descriptor.id;
    if (d.descriptor.droppableId === i) {
      const g = f ? {
        render: f,
        dragging: r(d.descriptor)
      } : null, v = {
        isDraggingOver: s,
        draggingOverWith: s ? c : null,
        draggingFromThisWith: c,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: d.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: v,
        useClone: g
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
    const s = ea(a), l = s.droppableId, d = s.type, f = !s.isDropDisabled, c = s.renderClone;
    if (Dt(i)) {
      const u = i.critical;
      if (!br(d, u))
        return t;
      const p = yo(u, i.dimensions), g = ye(i.impact) === l;
      return n(l, f, g, g, p, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const u = i.completed;
      if (!br(d, u.critical))
        return t;
      const p = yo(u.critical, i.dimensions);
      return n(l, f, Ki(u.result) === l, ye(u.impact) === l, p, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const u = i.completed;
      if (!br(d, u.critical))
        return t;
      const p = ye(u.impact) === l, g = !!(u.impact.at && u.impact.at.type === "COMBINE"), v = u.critical.droppable.id === l;
      return p ? g ? e : t : v ? e : t;
    }
    return t;
  };
}, vp = {
  updateViewportMaxScroll: ql
}, hp = Jo(gp, vp, (e, t, r) => ({
  ...ea(r),
  ...e,
  ...t
}), {
  context: nn,
  areStatePropsEqual: Yi
})(pp);
var bp = hp;
const Ap = ({
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
  const [f, c] = Ee(null), [u, p] = Ee(e);
  ue(() => {
    p(e);
  }, [e]);
  const g = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", v = (y) => {
    a == null || a(y), c(y);
  }, m = (y) => {
    if (!y.destination || !(u != null && u.length)) return;
    const E = y.source.index, S = y.destination.index, x = [...u], [b] = x.splice(E, 1);
    x.splice(S, 0, b), p(x);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ fe("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ V("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ V("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ V(wo, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ V(To, { className: d, children: /* @__PURE__ */ V("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ V("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ V(xf, { onDragEnd: m, children: /* @__PURE__ */ V(bp, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ fe("table", { className: "w-full", children: [
    /* @__PURE__ */ V("thead", { children: /* @__PURE__ */ V("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((E, S) => /* @__PURE__ */ V(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === E.name.find((x) => x) ? `-${E.name.find((x) => x) ?? ""}` : E.name.find((x) => x) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === E.name.find((x) => x) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: E.title
      },
      S
    )) }) }),
    /* @__PURE__ */ fe(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          u == null ? void 0 : u.map((E, S) => {
            var x;
            return /* @__PURE__ */ V(
              Uf,
              {
                isDragDisabled: o,
                draggableId: (x = E == null ? void 0 : E.id) == null ? void 0 : x.toString(),
                index: S,
                children: (b) => {
                  const w = {
                    ...b.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ V(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === u[S] && g}`,
                      onClick: () => v(
                        s ? E[s] : E.id
                      ),
                      ref: b.innerRef,
                      ...b.draggableProps,
                      ...b.dragHandleProps,
                      style: w,
                      children: t.map((C, D) => {
                        var B;
                        let M = (B = C == null ? void 0 : C.name) == null ? void 0 : B.reduce(
                          (F, O) => F == null ? void 0 : F[O],
                          u == null ? void 0 : u[S]
                        );
                        return /* @__PURE__ */ V(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${l && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: C.transform ? C.transform(M, S) : M
                          },
                          D
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
}, Pp = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ V(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), Rp = () => {
  const e = z(null);
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
  Sp as Button,
  wp as Checkbox,
  Dp as Chips,
  Rr as ErrorText,
  Mt as Icon,
  Np as Input,
  Cp as List,
  wo as Loader,
  Op as MultiSelectSearch,
  Ip as Search,
  _p as Select,
  Ap as Table,
  Pp as Textarea,
  To as Wrapper,
  Fo as useDebounce,
  Rp as useScroll
};
