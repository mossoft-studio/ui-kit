import { jsx as Q, jsxs as gt, Fragment as Wo } from "react/jsx-runtime";
import * as N from "react";
import _, { useState as Fe, useEffect as ne, useRef as L, useMemo as hS, useLayoutEffect as er, useContext as yt } from "react";
import ir, { unstable_batchedUpdates as ar, flushSync as tr } from "react-dom";
const Go = ({ name: e, className: t, ...r }) => /* @__PURE__ */ Q(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ Q(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), Fh = ({ style: e, text: t }) => /* @__PURE__ */ gt("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ Q("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ Q("span", { className: "text-base", children: t })
] }), D2 = ({
  children: e,
  onClick: t,
  className: r,
  loadType: o,
  isLoading: n,
  variant: i,
  icon: a,
  disabled: s,
  ...c
}) => {
  const [u, m] = Fe(""), l = () => {
    n && o === "1C" && (m("Отправляем запрос в 1С"), setTimeout(
      () => m(o === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  ne(() => {
    o === "1C" && l();
  }, [n]);
  const d = [
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
  return /* @__PURE__ */ gt(
    "button",
    {
      disabled: s || n,
      onClick: t,
      className: d,
      ...c,
      children: [
        n ? /* @__PURE__ */ Q(Fh, { text: o === "1C" ? u : void 0 }) : e,
        a && !n && /* @__PURE__ */ Q(
          Go,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Bc = ({ error: e }) => /* @__PURE__ */ Q("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ Q("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), N2 = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: o,
  className: n,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ gt(Wo, { children: [
  /* @__PURE__ */ gt(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${o}`,
      children: [
        /* @__PURE__ */ Q(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ Q("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ Q(
          "input",
          {
            disabled: c,
            checked: s,
            onChange: (u) => e(u.target.checked),
            type: "checkbox",
            className: n
          }
        )
      ]
    }
  ),
  a && /* @__PURE__ */ Q(Bc, { error: a })
] }), C2 = ({ items: e, disable: t, color: r, style: o }) => /* @__PURE__ */ Q("div", { className: "flex flex-wrap gap-[6px]", children: e.map((n) => /* @__PURE__ */ Q(Wo, { children: n.title ? /* @__PURE__ */ Q(
  "div",
  {
    style: o,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: n.title
  },
  n.title
) : /* @__PURE__ */ Q(Wo, {}) })) });
function Fc(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
      t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
  return r;
}
var An;
(function(e) {
  e.event = "event", e.props = "prop";
})(An || (An = {}));
function or() {
}
function yS(e) {
  var t, r = void 0;
  return function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t && o.length === t.length && o.every(function(i, a) {
      return i === t[a];
    }) || (t = o, r = e.apply(void 0, o)), r;
  };
}
function Mr(e) {
  return !!(e || "").match(/\d/);
}
function Vr(e) {
  return e == null;
}
function vS(e) {
  return typeof e == "number" && isNaN(e);
}
function jh(e) {
  return Vr(e) || vS(e) || typeof e == "number" && !isFinite(e);
}
function Wh(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function ES(e) {
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
function xS(e, t, r) {
  var o = ES(r), n = e.search(/[1-9]/);
  return n = n === -1 ? e.length : n, e.substring(0, n) + e.substring(n, e.length).replace(o, "$1" + t);
}
function OS(e) {
  var t = L(e);
  t.current = e;
  var r = L(function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t.current.apply(t, o);
  });
  return r.current;
}
function jc(e, t) {
  t === void 0 && (t = !0);
  var r = e[0] === "-", o = r && t;
  e = e.replace("-", "");
  var n = e.split("."), i = n[0], a = n[1] || "";
  return {
    beforeDecimal: i,
    afterDecimal: a,
    hasNegation: r,
    addNegation: o
  };
}
function SS(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), o = r[0].replace(/^0+/, "") || "0", n = r[1] || "";
  return (t ? "-" : "") + o + (n ? "." + n : "");
}
function Gh(e, t, r) {
  for (var o = "", n = r ? "0" : "", i = 0; i <= t - 1; i++)
    o += e[i] || n;
  return o;
}
function fd(e, t) {
  return Array(t + 1).join(e);
}
function kh(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var o = t.split(/[eE]/g), n = o[0], i = o[1];
  if (i = Number(i), !i)
    return r + n;
  n = n.replace(".", "");
  var a = 1 + i, s = n.length;
  return a < 0 ? n = "0." + fd("0", Math.abs(a)) + n : a >= s ? n = n + fd("0", a - s) : n = (n.substring(0, a) || "0") + "." + n.substring(a), r + n;
}
function md(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var o = (e.indexOf(".") !== -1 || r) && t, n = jc(e), i = n.beforeDecimal, a = n.afterDecimal, s = n.hasNegation, c = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : c.toFixed(t), m = u.split("."), l = i;
  i && Number(m[0]) && (l = i.split("").reverse().reduce(function(b, p, x) {
    return b.length > x ? (Number(b[0]) + Number(p)).toString() + b.substring(1, b.length) : p + b;
  }, m[0]));
  var d = Gh(m[1] || "", t, r), g = s ? "-" : "", h = o ? "." : "";
  return "" + g + l + h + d;
}
function dr(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var zh = yS(function(e, t) {
  for (var r = 0, o = 0, n = e.length, i = t.length; e[r] === t[r] && r < n; )
    r++;
  for (; e[n - 1 - o] === t[i - 1 - o] && i - o > r && n - o > r; )
    o++;
  return {
    from: { start: r, end: n - o },
    to: { start: r, end: i - o }
  };
}), wS = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function DS(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function pi(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function NS() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Hh(e) {
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
function Uh(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function CS(e) {
  var t = e.currentValue, r = e.formattedValue, o = e.currentValueIndex, n = e.formattedValueIndex;
  return t[o] === r[n];
}
function _S(e, t, r, o, n, i, a) {
  a === void 0 && (a = CS);
  var s = n.findIndex(function(y) {
    return y;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, o = o + c.length);
  for (var u = r.length, m = e.length, l = {}, d = new Array(u), g = 0; g < u; g++) {
    d[g] = -1;
    for (var h = 0, b = m; h < b; h++) {
      var p = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: g,
        formattedValueIndex: h
      });
      if (p && l[h] !== !0) {
        d[g] = h, l[h] = !0;
        break;
      }
    }
  }
  for (var x = o; x < u && (d[x] === -1 || !i(r[x])); )
    x++;
  var w = x === u || d[x] === -1 ? m : d[x];
  for (x = o - 1; x > 0 && d[x] === -1; )
    x--;
  var E = x === -1 || d[x] === -1 ? 0 : d[x] + 1;
  return E > w ? w : o - E < w - o ? E : w;
}
function ko(e, t, r, o) {
  var n = e.length;
  if (t = DS(t, 0, n), o === "left") {
    for (; t >= 0 && !r[t]; )
      t--;
    t === -1 && (t = r.indexOf(!0));
  } else {
    for (; t <= n && !r[t]; )
      t++;
    t > n && (t = r.lastIndexOf(!0));
  }
  return t === -1 && (t = n), t;
}
function IS(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, o = t.length; r < o; r++)
    t[r] = !!(Mr(e[r]) || Mr(e[r - 1]));
  return t;
}
function qh(e, t, r, o, n, i) {
  i === void 0 && (i = or);
  var a = OS(function(h, b) {
    var p, x;
    return jh(h) ? (x = "", p = "") : typeof h == "number" || b ? (x = typeof h == "number" ? kh(h) : h, p = o(x)) : (x = n(h, void 0), p = o(x)), { formattedValue: p, numAsString: x };
  }), s = Fe(function() {
    return a(Vr(e) ? t : e, r);
  }), c = s[0], u = s[1], m = function(h, b) {
    h.formattedValue !== c.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, l = e, d = r;
  Vr(e) && (l = c.numAsString, d = !0);
  var g = a(l, d);
  return hS(function() {
    u(g);
  }, [g.formattedValue]), [c, m];
}
function PS(e) {
  return e.replace(/[^0-9]/g, "");
}
function $S(e) {
  return e;
}
function Yh(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var o = e.customInput, n = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = $S);
  var s = e.removeFormatting;
  s === void 0 && (s = PS);
  var c = e.defaultValue, u = e.valueIsNumericString, m = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = or);
  var g = e.onKeyDown;
  g === void 0 && (g = or);
  var h = e.onMouseUp;
  h === void 0 && (h = or);
  var b = e.onFocus;
  b === void 0 && (b = or);
  var p = e.onBlur;
  p === void 0 && (p = or);
  var x = e.value, w = e.getCaretBoundary;
  w === void 0 && (w = IS);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = Mr);
  var y = e.isCharacterSame, f = Fc(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), v = qh(x, c, !!u, a, s, m), D = v[0], C = D.formattedValue, R = D.numAsString, $ = v[1], A = L(), P = L({ formattedValue: C, numAsString: R }), T = function(H, ie) {
    P.current = { formattedValue: H.formattedValue, numAsString: H.value }, $(H, ie);
  }, j = Fe(!1), k = j[0], V = j[1], W = L(null), F = L({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ne(function() {
    return V(!0), function() {
      clearTimeout(F.current.setCaretTimeout), clearTimeout(F.current.focusTimeout);
    };
  }, []);
  var G = a, z = function(H, ie) {
    var he = parseFloat(ie);
    return {
      formattedValue: H,
      value: ie,
      floatValue: isNaN(he) ? void 0 : he
    };
  }, B = function(H, ie, he) {
    H.selectionStart === 0 && H.selectionEnd === H.value.length || (dr(H, ie), F.current.setCaretTimeout = setTimeout(function() {
      H.value === he && H.selectionStart !== ie && dr(H, ie);
    }, 0));
  }, q = function(H, ie, he) {
    return ko(H, ie, w(H), he);
  }, Y = function(H, ie, he) {
    var it = w(ie), Lt = _S(ie, C, H, he, it, E, y);
    return Lt = ko(ie, Lt, it), Lt;
  }, K = function(H) {
    var ie = H.formattedValue;
    ie === void 0 && (ie = "");
    var he = H.input, it = H.source, Lt = H.event, at = H.numAsString, rt;
    if (he) {
      var rr = H.inputValue || he.value, sr = pi(he);
      he.value = ie, rt = Y(rr, ie, sr), rt !== void 0 && B(he, rt, ie);
    }
    ie !== C && T(z(ie, at), { event: Lt, source: it });
  };
  ne(function() {
    var H = P.current, ie = H.formattedValue, he = H.numAsString;
    (C !== ie || R !== he) && T(z(C, R), {
      event: void 0,
      source: An.props
    });
  }, [C, R]);
  var Z = W.current ? pi(W.current) : void 0, re = typeof window < "u" ? er : ne;
  re(function() {
    var H = W.current;
    if (C !== P.current.formattedValue && H) {
      var ie = Y(P.current.formattedValue, C, Z);
      H.value = C, B(H, ie, C);
    }
  }, [C]);
  var U = function(H, ie, he) {
    var it = ie.target, Lt = A.current ? wS(A.current, it.selectionEnd) : zh(C, H), at = Object.assign(Object.assign({}, Lt), { lastValue: C }), rt = s(H, at), rr = G(rt);
    if (rt = s(rr, void 0), l && !l(z(rr, rt))) {
      var sr = ie.target, cr = pi(sr), di = Y(H, C, cr);
      return sr.value = C, B(sr, di, C), !1;
    }
    return K({
      formattedValue: rr,
      numAsString: rt,
      inputValue: H,
      event: ie,
      source: he,
      input: ie.target
    }), !0;
  }, X = function(H, ie) {
    ie === void 0 && (ie = 0);
    var he = H.selectionStart, it = H.selectionEnd;
    A.current = { selectionStart: he, selectionEnd: it + ie };
  }, M = function(H) {
    var ie = H.target, he = ie.value, it = U(he, H, An.event);
    it && d(H), A.current = void 0;
  }, J = function(H) {
    var ie = H.target, he = H.key, it = ie.selectionStart, Lt = ie.selectionEnd, at = ie.value;
    at === void 0 && (at = "");
    var rt;
    he === "ArrowLeft" || he === "Backspace" ? rt = Math.max(it - 1, 0) : he === "ArrowRight" ? rt = Math.min(it + 1, at.length) : he === "Delete" && (rt = it);
    var rr = 0;
    he === "Delete" && it === Lt && (rr = 1);
    var sr = he === "ArrowLeft" || he === "ArrowRight";
    if (rt === void 0 || it !== Lt && !sr) {
      g(H), X(ie, rr);
      return;
    }
    var cr = rt;
    if (sr) {
      var di = he === "ArrowLeft" ? "left" : "right";
      cr = q(at, rt, di), cr !== rt && H.preventDefault();
    } else he === "Delete" && !E(at[rt]) ? cr = q(at, rt, "right") : he === "Backspace" && !E(at[rt]) && (cr = q(at, rt, "left"));
    cr !== rt && B(ie, cr, at), g(H), X(ie, rr);
  }, be = function(H) {
    var ie = H.target, he = function() {
      var it = ie.selectionStart, Lt = ie.selectionEnd, at = ie.value;
      if (at === void 0 && (at = ""), it === Lt) {
        var rt = q(at, it);
        rt !== it && B(ie, rt, at);
      }
    };
    he(), requestAnimationFrame(function() {
      he();
    }), h(H), X(ie);
  }, O = function(H) {
    H.persist && H.persist();
    var ie = H.target, he = H.currentTarget;
    W.current = ie, F.current.focusTimeout = setTimeout(function() {
      var it = ie.selectionStart, Lt = ie.selectionEnd, at = ie.value;
      at === void 0 && (at = "");
      var rt = q(at, it);
      rt !== it && !(it === 0 && Lt === at.length) && B(ie, rt, at), b(Object.assign(Object.assign({}, H), { currentTarget: he }));
    }, 0);
  }, te = function(H) {
    W.current = null, clearTimeout(F.current.focusTimeout), clearTimeout(F.current.setCaretTimeout), p(H);
  }, S = k && NS() ? "numeric" : void 0, ee = Object.assign({ inputMode: S }, f, {
    type: t,
    value: C,
    onChange: M,
    onKeyDown: J,
    onMouseUp: be,
    onFocus: O,
    onBlur: te
  });
  if (r === "text")
    return n ? _.createElement(_.Fragment, null, n(C, f) || null) : _.createElement("span", Object.assign({}, f, { ref: i }), C);
  if (o) {
    var me = o;
    return _.createElement(me, Object.assign({}, ee, { ref: i }));
  }
  return _.createElement("input", Object.assign({}, ee, { ref: i }));
}
function gd(e, t) {
  var r = t.decimalScale, o = t.fixedDecimalScale, n = t.prefix;
  n === void 0 && (n = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = oi(t), u = c.thousandSeparator, m = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && o, d = jc(e, a), g = d.beforeDecimal, h = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (h = Gh(h, r, !!o)), u && (g = xS(g, u, s)), n && (g = n + g), i && (h = h + i), b && (g = "-" + g), e = g + (l && m || "") + h, e;
}
function oi(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, o = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), o || (o = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: o
  };
}
function AS(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), o = new RegExp("(-)(.)*(-)"), n = r.test(e), i = o.test(e);
  return e = e.replace(/-/g, ""), n && !i && t && (e = "-" + e), e;
}
function TS(e, t) {
  return new RegExp("(^-)|[0-9]|" + Wh(e), "g");
}
function RS(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function VS(e, t, r) {
  var o;
  t === void 0 && (t = Hh(e));
  var n = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, u = t.to, m = u.start, l = u.end, d = oi(r), g = d.allowedDecimalSeparators, h = d.decimalSeparator, b = e[l] === h;
  if (Mr(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - m === 1 && g.indexOf(e[m]) !== -1) {
    var p = s === 0 ? "" : h;
    e = e.substring(0, m) + p + e.substring(m + 1, e.length);
  }
  var x = function(W, F, G) {
    var z = !1, B = !1;
    i.startsWith("-") ? z = !1 : W.startsWith("--") ? (z = !1, B = !0) : a.startsWith("-") && W.length === a.length ? z = !1 : W[0] === "-" && (z = !0);
    var q = z ? 1 : 0;
    return B && (q = 2), q && (W = W.substring(q), F -= q, G -= q), { value: W, start: F, end: G, hasNegation: z };
  }, w = x(e, m, l), E = w.hasNegation;
  o = w, e = o.value, m = o.start, l = o.end;
  var y = x(t.lastValue, c.start, c.end), f = y.start, v = y.end, D = y.value, C = e.substring(m, l);
  e.length && D.length && (f > D.length - a.length || v < i.length) && !(C && a.startsWith(C)) && (e = D);
  var R = 0;
  e.startsWith(i) ? R += i.length : m < i.length && (R = m), e = e.substring(R), l -= R;
  var $ = e.length, A = e.length - a.length;
  e.endsWith(a) ? $ = A : (l > A || l > e.length - a.length) && ($ = l), e = e.substring(0, $), e = AS(E ? "-" + e : e, n), e = (e.match(TS(h)) || []).join("");
  var P = e.indexOf(h);
  e = e.replace(new RegExp(Wh(h), "g"), function(W, F) {
    return F === P ? "." : "";
  });
  var T = jc(e, n), j = T.beforeDecimal, k = T.afterDecimal, V = T.addNegation;
  return u.end - u.start < c.end - c.start && j === "" && b && !parseFloat(k) && (e = V ? "-" : ""), e;
}
function MS(e, t) {
  var r = t.prefix;
  r === void 0 && (r = "");
  var o = t.suffix;
  o === void 0 && (o = "");
  var n = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), i = e[0] === "-";
  n.fill(!1, 0, r.length + (i ? 1 : 0));
  var a = e.length;
  return n.fill(!1, a - o.length + 1, a + 1), n;
}
function LS(e) {
  var t = oi(e), r = t.thousandSeparator, o = t.decimalSeparator, n = e.prefix;
  n === void 0 && (n = "");
  var i = e.allowNegative;
  if (i === void 0 && (i = !0), r === o)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + r + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + o + ` (default value for decimalSeparator is .)
     `);
  return n.startsWith("-") && i && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + n + `
      allowNegative: ` + i + `
    `), i = !1), Object.assign(Object.assign({}, e), { allowNegative: i });
}
function BS(e) {
  e = LS(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, o = e.allowLeadingZeros, n = e.onKeyDown;
  n === void 0 && (n = or);
  var i = e.onBlur;
  i === void 0 && (i = or);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var m = e.defaultValue, l = e.value, d = e.valueIsNumericString, g = e.onValueChange, h = Fc(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = oi(e), p = b.decimalSeparator, x = b.allowedDecimalSeparators, w = function(V) {
    return gd(V, e);
  }, E = function(V, W) {
    return VS(V, W, e);
  }, y = Vr(l) ? m : l, f = d ?? RS(y, u, t);
  Vr(l) ? Vr(m) || (f = f || typeof m == "number") : f = f || typeof l == "number";
  var v = function(V) {
    return jh(V) ? V : (typeof V == "number" && (V = kh(V)), f && typeof s == "number" ? md(V, s, !!c) : V);
  }, D = qh(v(l), v(m), !!f, w, E, g), C = D[0], R = C.numAsString, $ = C.formattedValue, A = D[1], P = function(V) {
    var W = V.target, F = V.key, G = W.selectionStart, z = W.selectionEnd, B = W.value;
    if (B === void 0 && (B = ""), (F === "Backspace" || F === "Delete") && z < u.length) {
      V.preventDefault();
      return;
    }
    if (G !== z) {
      n(V);
      return;
    }
    F === "Backspace" && B[0] === "-" && G === u.length + 1 && r && dr(W, 1), s && c && (F === "Backspace" && B[G - 1] === p ? (dr(W, G - 1), V.preventDefault()) : F === "Delete" && B[G] === p && V.preventDefault()), x != null && x.includes(F) && B[G] === p && dr(W, G + 1);
    var q = a === !0 ? "," : a;
    F === "Backspace" && B[G - 1] === q && dr(W, G - 1), F === "Delete" && B[G] === q && dr(W, G + 1), n(V);
  }, T = function(V) {
    var W = R;
    if (W.match(/\d/g) || (W = ""), o || (W = SS(W)), c && s && (W = md(W, s, c)), W !== R) {
      var F = gd(W, e);
      A({
        formattedValue: F,
        value: W,
        floatValue: parseFloat(W)
      }, {
        event: V,
        source: An.event
      });
    }
    i(V);
  }, j = function(V) {
    return V === p ? !0 : Mr(V);
  }, k = function(V) {
    var W = V.currentValue, F = V.lastValue, G = V.formattedValue, z = V.currentValueIndex, B = V.formattedValueIndex, q = W[z], Y = G[B], K = zh(F, W), Z = K.to, re = function(U) {
      return E(U).indexOf(".") + u.length;
    };
    return l === 0 && c && s && W[Z.start] === p && re(W) < z && re(G) > B ? !1 : z >= Z.start && z < Z.end && x && x.includes(q) && Y === p ? !0 : q === Y;
  };
  return Object.assign(Object.assign({}, h), {
    value: $,
    valueIsNumericString: !1,
    isValidInputCharacter: j,
    isCharacterSame: k,
    onValueChange: A,
    format: w,
    removeFormatting: E,
    getCaretBoundary: function(V) {
      return MS(V, e);
    },
    onKeyDown: P,
    onBlur: T
  });
}
function FS(e) {
  var t = BS(e);
  return _.createElement(Yh, Object.assign({}, t));
}
function jS(e, t) {
  var r = t.format, o = t.allowEmptyFormatting, n = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !o)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || Uh(n, a), a += 1);
  return s.join("");
}
function WS(e, t, r) {
  t === void 0 && (t = Hh(e));
  var o = r.format, n = r.patternChar;
  n === void 0 && (n = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(p) {
    return o[p] === n;
  }, u = function(p, x) {
    for (var w = "", E = 0; E < p.length; E++)
      c(x + E) && Mr(p[E]) && (w += p[E]);
    return w;
  }, m = function(p) {
    return p.replace(/[^0-9]/g, "");
  };
  if (!o.match(/\d/))
    return m(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === o.length) {
    for (var l = "", d = 0; d < e.length; d++)
      if (c(d))
        Mr(e[d]) && (l += e[d]);
      else if (e[d] !== o[d])
        return m(e);
    return l;
  }
  var g = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(g, 0) + m(h) + u(b, i.end);
}
function GS(e, t) {
  var r = t.format, o = t.mask, n = t.patternChar;
  n === void 0 && (n = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, g) {
    var h = void 0;
    d === n && (a++, h = Uh(o, a - 1), s === -1 && e[g] === h && (s = g)), c[g] = h;
  });
  for (var u = function(d) {
    return r[d] === n && e[d] !== c[d];
  }, m = 0, l = i.length; m < l; m++)
    i[m] = m === s || u(m) || u(m - 1);
  return i[r.indexOf(n)] = !0, i;
}
function kS(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function zS(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function HS(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var o = e.onKeyDown;
  o === void 0 && (o = or);
  var n = e.patternChar;
  n === void 0 && (n = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = Fc(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  kS(e);
  var u = function(h) {
    return GS(h, e);
  }, m = function(h) {
    var b = h.key, p = h.target, x = p.selectionStart, w = p.selectionEnd, E = p.value;
    if (x !== w) {
      o(h);
      return;
    }
    var y = x;
    if (b === "Backspace" || b === "Delete") {
      var f = "right";
      if (b === "Backspace") {
        for (; y > 0 && t[y - 1] !== n; )
          y--;
        f = "left";
      } else {
        for (var v = t.length; y < v && t[y] !== n; )
          y++;
        f = "right";
      }
      y = ko(E, y, u(E), f);
    } else t[y] !== n && b !== "ArrowLeft" && b !== "ArrowRight" && (y = ko(E, y + 1, u(E), "right"));
    y !== x && dr(p, y), o(h);
  }, l = Vr(i) ? a : i, d = s ?? zS(l, t), g = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(h) {
      return jS(h, g);
    },
    removeFormatting: function(h, b) {
      return WS(h, b, g);
    },
    getCaretBoundary: u,
    onKeyDown: m
  });
}
function US(e) {
  var t = HS(e);
  return _.createElement(Yh, Object.assign({}, t));
}
const qS = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, _2 = ({
  type: e,
  field: t,
  label: r,
  fieldState: o,
  postfix: n,
  labelClassName: i,
  errorPlace: a = "right",
  parentClassName: s,
  className: c,
  numberWrapperClassname: u,
  format: m,
  decimalScale: l = 1,
  ...d
}) => {
  var b, p;
  const g = "!border-danger", { error: h } = o;
  return /* @__PURE__ */ gt("label", { children: [
    r && /* @__PURE__ */ Q("span", { className: `text-primary ${i}`, children: r }),
    m ? /* @__PURE__ */ Q(
      US,
      {
        onValueChange: (x) => {
          var w;
          t == null || t.onChange((w = x.value.replace("_", "")) == null ? void 0 : w.toString());
        },
        value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${h ? g : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
        format: m,
        ...d
      }
    ) : e === "number" ? /* @__PURE__ */ gt(
      "div",
      {
        className: `${h ? g : ""} ${s} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ Q(
            FS,
            {
              decimalScale: l,
              onValueChange: (x) => {
                var w;
                return t == null ? void 0 : t.onChange((w = x.value.replace("_", "")) == null ? void 0 : w.toString());
              },
              value: (p = t == null ? void 0 : t.value) == null ? void 0 : p.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...d,
              ...qS.number
            }
          ),
          n ? /* @__PURE__ */ Q("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ Q(
      "input",
      {
        ...t,
        ...d,
        type: e,
        className: `${h ? g : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    h && /* @__PURE__ */ Q(Bc, { error: h })
  ] });
}, Kh = ({
  children: e,
  className: t
}) => /* @__PURE__ */ Q("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), I2 = ({ data: e, className: t, onClick: r }) => {
  const o = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [n] = Fe(null);
  return /* @__PURE__ */ Q(Kh, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ Q("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ gt(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${n === i.value && o}`,
      children: [
        /* @__PURE__ */ Q("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ Q("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, Wc = "-", YS = (e) => {
  const t = XS(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Wc);
      return s[0] === "" && s.length !== 1 && s.shift(), Xh(s, t) || KS(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && o[a] ? [...c, ...o[a]] : c;
    }
  };
}, Xh = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Xh(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join(Wc);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, bd = /^\[(.+)\]$/, KS = (e) => {
  if (bd.test(e)) {
    const t = bd.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, XS = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ZS(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    ss(a, o, i, t);
  }), o;
}, ss = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : hd(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (JS(n)) {
        ss(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, a]) => {
      ss(a, hd(t, i), r, o);
    });
  });
}, hd = (e, t) => {
  let r = e;
  return t.split(Wc).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, JS = (e) => e.isThemeGetter, ZS = (e, t) => t ? e.map(([r, o]) => {
  const n = o.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, n];
}) : e, QS = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (i, a) => {
    r.set(i, a), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let a = r.get(i);
      if (a !== void 0)
        return a;
      if ((a = o.get(i)) !== void 0)
        return n(i, a), a;
    },
    set(i, a) {
      r.has(i) ? r.set(i, a) : n(i, a);
    }
  };
}, Jh = "!", ew = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, n = t[0], i = t.length, a = (s) => {
    const c = [];
    let u = 0, m = 0, l;
    for (let p = 0; p < s.length; p++) {
      let x = s[p];
      if (u === 0) {
        if (x === n && (o || s.slice(p, p + i) === t)) {
          c.push(s.slice(m, p)), m = p + i;
          continue;
        }
        if (x === "/") {
          l = p;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const d = c.length === 0 ? s : s.substring(m), g = d.startsWith(Jh), h = g ? d.substring(1) : d, b = l && l > m ? l - m : void 0;
    return {
      modifiers: c,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: b
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, tw = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, rw = (e) => ({
  cache: QS(e.cacheSize),
  parseClassName: ew(e),
  ...YS(e)
}), nw = /\s+/, ow = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n
  } = t, i = [], a = e.trim().split(nw);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: m,
      hasImportantModifier: l,
      baseClassName: d,
      maybePostfixModifierPosition: g
    } = r(u);
    let h = !!g, b = o(h ? d.substring(0, g) : d);
    if (!b) {
      if (!h) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (b = o(d), !b) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      h = !1;
    }
    const p = tw(m).join(":"), x = l ? p + Jh : p, w = x + b;
    if (i.includes(w))
      continue;
    i.push(w);
    const E = n(b, h);
    for (let y = 0; y < E.length; ++y) {
      const f = E[y];
      i.push(x + f);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function iw() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Zh(t)) && (o && (o += " "), o += r);
  return o;
}
const Zh = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Zh(e[o])) && (r && (r += " "), r += t);
  return r;
};
function aw(e, ...t) {
  let r, o, n, i = a;
  function a(c) {
    const u = t.reduce((m, l) => l(m), e());
    return r = rw(u), o = r.cache.get, n = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = o(c);
    if (u)
      return u;
    const m = ow(c, r);
    return n(c, m), m;
  }
  return function() {
    return i(iw.apply(null, arguments));
  };
}
const ot = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Qh = /^\[(?:([a-z-]+):)?(.+)\]$/i, sw = /^\d+\/\d+$/, cw = /* @__PURE__ */ new Set(["px", "full", "screen"]), lw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, pw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, nr = (e) => tn(e) || cw.has(e) || sw.test(e), lr = (e) => mn(e, "length", xw), tn = (e) => !!e && !Number.isNaN(Number(e)), fi = (e) => mn(e, "number", tn), hn = (e) => !!e && Number.isInteger(Number(e)), mw = (e) => e.endsWith("%") && tn(e.slice(0, -1)), ge = (e) => Qh.test(e), ur = (e) => lw.test(e), gw = /* @__PURE__ */ new Set(["length", "size", "percentage"]), bw = (e) => mn(e, gw, ey), hw = (e) => mn(e, "position", ey), yw = /* @__PURE__ */ new Set(["image", "url"]), vw = (e) => mn(e, yw, Sw), Ew = (e) => mn(e, "", Ow), yn = () => !0, mn = (e, t, r) => {
  const o = Qh.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, xw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  uw.test(e) && !dw.test(e)
), ey = () => !1, Ow = (e) => pw.test(e), Sw = (e) => fw.test(e), ww = () => {
  const e = ot("colors"), t = ot("spacing"), r = ot("blur"), o = ot("brightness"), n = ot("borderColor"), i = ot("borderRadius"), a = ot("borderSpacing"), s = ot("borderWidth"), c = ot("contrast"), u = ot("grayscale"), m = ot("hueRotate"), l = ot("invert"), d = ot("gap"), g = ot("gradientColorStops"), h = ot("gradientColorStopPositions"), b = ot("inset"), p = ot("margin"), x = ot("opacity"), w = ot("padding"), E = ot("saturate"), y = ot("scale"), f = ot("sepia"), v = ot("skew"), D = ot("space"), C = ot("translate"), R = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", ge, t], P = () => [ge, t], T = () => ["", nr, lr], j = () => ["auto", tn, ge], k = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], G = () => ["", "0", ge], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [tn, ge];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [yn],
      spacing: [nr, lr],
      blur: ["none", "", ur, ge],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ur, ge],
      borderSpacing: P(),
      borderWidth: T(),
      contrast: B(),
      grayscale: G(),
      hueRotate: B(),
      invert: G(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [mw, lr],
      inset: A(),
      margin: A(),
      opacity: B(),
      padding: P(),
      saturate: B(),
      scale: B(),
      sepia: G(),
      skew: B(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ge]
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
        columns: [ur]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": z()
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
        object: [...k(), ge]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
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
        z: ["auto", hn, ge]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
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
        flex: ["1", "auto", "initial", "none", ge]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: G()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: G()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", hn, ge]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [yn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", hn, ge]
        }, ge]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": j()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": j()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [yn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [hn, ge]
        }, ge]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": j()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": j()
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
        "auto-cols": ["auto", "min", "max", "fr", ge]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ge]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...F()]
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
        content: ["normal", ...F(), "baseline"]
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
        "place-content": [...F(), "baseline"]
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
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ge, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ge, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ge, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ur]
        }, ur]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ge, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ge, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ge, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ge, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ur, lr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", fi]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ge]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", tn, fi]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", nr, ge]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ge]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ge]
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", nr, lr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", nr, ge]
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
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ge]
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
        content: ["none", ge]
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
        bg: [...k(), hw]
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
        bg: ["auto", "cover", "contain", bw]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vw]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
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
        border: [...V(), "hidden"]
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
        divide: V()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...V()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [nr, ge]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [nr, lr]
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
        ring: T()
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
        "ring-offset": [nr, lr]
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
        shadow: ["", "inner", "none", ur, Ew]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [yn]
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
        "mix-blend": [...W(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
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
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ur, ge]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [l]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [f]
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
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [l]
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
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [f]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ge]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: B()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ge]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: B()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ge]
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
        scale: [y]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [y]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [y]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [hn, ge]
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
        "skew-x": [v]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [v]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ge]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ge]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        "will-change": ["auto", "scroll", "contents", "transform", ge]
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
        stroke: [nr, lr, fi]
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
}, Dw = /* @__PURE__ */ aw(ww);
function ty(e, t) {
  const [r, o] = Fe(e);
  return ne(() => {
    const n = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e]), r;
}
const P2 = ({
  options: e,
  field: t,
  className: r,
  ...o
}) => {
  const [n, i] = Fe(!1), [a, s] = Fe(""), c = ty(a, 100), u = L(null);
  ne(() => {
    const l = (d) => {
      u.current && !u.current.contains(d.target) && i(!1);
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, []);
  const m = (l) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(l)) && (t == null ? void 0 : t.value.filter((d) => d !== l)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, l] || [l]
    );
  };
  return /* @__PURE__ */ gt("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ gt("div", { className: "h-fit w-full", children: [
      n && /* @__PURE__ */ Q(
        Go,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ Q(
        "input",
        {
          ...o,
          ref: u,
          className: Dw(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: n && a || !n && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (l) => {
              var d;
              return (d = e.find((g) => g.value === l)) == null ? void 0 : d.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: n ? "Поиск..." : "Выбрать",
          onChange: (l) => s(l.target.value),
          readOnly: !n
        }
      )
    ] }),
    n && /* @__PURE__ */ Q("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var d;
      return /* @__PURE__ */ Q(
        "li",
        {
          onClick: () => m(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ gt("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ Q(Go, { name: l.icon }),
            /* @__PURE__ */ Q(
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
}, $2 = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: o,
  parentClassName: n
}) => {
  const [i, a] = Fe(r), s = ty(i, 300);
  return ne(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ gt("div", { className: `relative h-fit w-full ${n}`, children: [
    /* @__PURE__ */ Q(
      Go,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ Q(
      "input",
      {
        placeholder: e,
        onChange: (c) => a(c.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${o}`
      }
    )
  ] });
}, A2 = ({
  placeholder: e,
  options: t,
  className: r,
  field: o,
  fieldState: n,
  labelClassName: i,
  parentClassName: a,
  formState: s,
  label: c,
  ...u
}) => /* @__PURE__ */ gt("label", { children: [
  c && /* @__PURE__ */ Q("span", { className: `text-primary ${i}`, children: c }),
  /* @__PURE__ */ Q(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ gt(
        "select",
        {
          ...o,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ Q("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((m, l) => /* @__PURE__ */ Q("option", { value: m.value, className: "text-black", children: m.label }, l))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ Q(Bc, { error: n == null ? void 0 : n.error })
] });
function Tn(e) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e);
}
function Nw(e, t) {
  if (Tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || "default");
    if (Tn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cw(e) {
  var t = Nw(e, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function _w(e, t, r) {
  return (t = Cw(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function yd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yd(Object(r), !0).forEach(function(o) {
      _w(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yd(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function Bt(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ed = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), mi = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, xd = {
  INIT: "@@redux/INIT" + mi(),
  REPLACE: "@@redux/REPLACE" + mi(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + mi();
  }
};
function Iw(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Pw(e) {
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
  if (Tw(e)) return "date";
  if (Aw(e)) return "error";
  var r = $w(e);
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
function $w(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Aw(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Tw(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Tr(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Pw(e)), t;
}
function ry(e, t, r) {
  var o;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Bt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Bt(1) : "Expected the enhancer to be a function. Instead, received: '" + Tr(r) + "'");
    return r(ry)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Bt(2) : "Expected the root reducer to be a function. Instead, received: '" + Tr(e) + "'");
  var n = e, i = t, a = [], s = a, c = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function m() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Bt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Bt(4) : "Expected the listener to be a function. Instead, received: '" + Tr(b) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Bt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var p = !0;
    return u(), s.push(b), function() {
      if (p) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? Bt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        p = !1, u();
        var w = s.indexOf(b);
        s.splice(w, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!Iw(b))
      throw new Error(process.env.NODE_ENV === "production" ? Bt(7) : "Actions must be plain objects. Instead, the actual type was: '" + Tr(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Bt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? Bt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = n(i, b);
    } finally {
      c = !1;
    }
    for (var p = a = s, x = 0; x < p.length; x++) {
      var w = p[x];
      w();
    }
    return b;
  }
  function g(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Bt(10) : "Expected the nextReducer to be a function. Instead, received: '" + Tr(b));
    n = b, d({
      type: xd.REPLACE
    });
  }
  function h() {
    var b, p = l;
    return b = {
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
          throw new Error(process.env.NODE_ENV === "production" ? Bt(11) : "Expected the observer to be an object. Instead, received: '" + Tr(w) + "'");
        function E() {
          w.next && w.next(m());
        }
        E();
        var y = p(E);
        return {
          unsubscribe: y
        };
      }
    }, b[Ed] = function() {
      return this;
    }, b;
  }
  return d({
    type: xd.INIT
  }), o = {
    dispatch: d,
    subscribe: l,
    getState: m,
    replaceReducer: g
  }, o[Ed] = h, o;
}
function Od(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Sd(e, t) {
  if (typeof e == "function")
    return Od(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? Bt(16) : "bindActionCreators expected an object or a function, but instead received: '" + Tr(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var o in e) {
    var n = e[o];
    typeof n == "function" && (r[o] = Od(n, t));
  }
  return r;
}
function ny() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0 ? function(o) {
    return o;
  } : t.length === 1 ? t[0] : t.reduce(function(o, n) {
    return function() {
      return o(n.apply(void 0, arguments));
    };
  });
}
function Rw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(o) {
    return function() {
      var n = o.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? Bt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: n.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(c) {
        return c(a);
      });
      return i = ny.apply(void 0, s)(n.dispatch), vd(vd({}, n), {}, {
        dispatch: i
      });
    };
  };
}
function Vw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cs = { exports: {} }, gi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function Mw() {
  if (wd) return gi;
  wd = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return gi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, gi;
}
var bi = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function Lw() {
  return Dd || (Dd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    bi.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), bi;
}
process.env.NODE_ENV === "production" ? cs.exports = Mw() : cs.exports = Lw();
var Gc = cs.exports, hi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function Bw() {
  if (Nd) return hi;
  Nd = 1;
  var e = _, t = Gc;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return hi.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, hi;
}
var yi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function Fw() {
  return Cd || (Cd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Gc, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    yi.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), yi;
}
process.env.NODE_ENV === "production" ? Bw() : Fw();
function jw(e) {
  e();
}
let oy = jw;
const Ww = (e) => oy = e, Gw = () => oy, _d = Symbol.for("react-redux-context"), Id = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kw() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Id[_d]) != null ? e : Id[_d] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const iy = /* @__PURE__ */ kw(), zw = () => {
  throw new Error("uSES not initialized!");
};
function pr() {
  return pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, pr.apply(null, arguments);
}
function ay(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ls = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pd;
function Hw() {
  if (Pd) return ve;
  Pd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return ve.AsyncMode = c, ve.ConcurrentMode = u, ve.ContextConsumer = s, ve.ContextProvider = a, ve.Element = t, ve.ForwardRef = m, ve.Fragment = o, ve.Lazy = h, ve.Memo = g, ve.Portal = r, ve.Profiler = i, ve.StrictMode = n, ve.Suspense = l, ve.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, ve.isConcurrentMode = y, ve.isContextConsumer = function(f) {
    return E(f) === s;
  }, ve.isContextProvider = function(f) {
    return E(f) === a;
  }, ve.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, ve.isForwardRef = function(f) {
    return E(f) === m;
  }, ve.isFragment = function(f) {
    return E(f) === o;
  }, ve.isLazy = function(f) {
    return E(f) === h;
  }, ve.isMemo = function(f) {
    return E(f) === g;
  }, ve.isPortal = function(f) {
    return E(f) === r;
  }, ve.isProfiler = function(f) {
    return E(f) === i;
  }, ve.isStrictMode = function(f) {
    return E(f) === n;
  }, ve.isSuspense = function(f) {
    return E(f) === l;
  }, ve.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, ve.typeOf = E, ve;
}
var Ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function Uw() {
  return $d || ($d = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Ee.AsyncMode = f, Ee.ConcurrentMode = v, Ee.ContextConsumer = D, Ee.ContextProvider = C, Ee.Element = R, Ee.ForwardRef = $, Ee.Fragment = A, Ee.Lazy = P, Ee.Memo = T, Ee.Portal = j, Ee.Profiler = k, Ee.StrictMode = V, Ee.Suspense = W, Ee.isAsyncMode = G, Ee.isConcurrentMode = z, Ee.isContextConsumer = B, Ee.isContextProvider = q, Ee.isElement = Y, Ee.isForwardRef = K, Ee.isFragment = Z, Ee.isLazy = re, Ee.isMemo = U, Ee.isPortal = X, Ee.isProfiler = M, Ee.isStrictMode = J, Ee.isSuspense = be, Ee.isValidElementType = E, Ee.typeOf = y;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? ls.exports = Hw() : ls.exports = Uw();
var qw = ls.exports, kc = qw, Yw = {
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
}, Kw = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Xw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, sy = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zc = {};
zc[kc.ForwardRef] = Xw;
zc[kc.Memo] = sy;
function Ad(e) {
  return kc.isMemo(e) ? sy : zc[e.$$typeof] || Yw;
}
var Jw = Object.defineProperty, Zw = Object.getOwnPropertyNames, Td = Object.getOwnPropertySymbols, Qw = Object.getOwnPropertyDescriptor, eD = Object.getPrototypeOf, Rd = Object.prototype;
function cy(e, t, r) {
  if (typeof t != "string") {
    if (Rd) {
      var o = eD(t);
      o && o !== Rd && cy(e, o, r);
    }
    var n = Zw(t);
    Td && (n = n.concat(Td(t)));
    for (var i = Ad(e), a = Ad(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!Kw[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = Qw(t, c);
        try {
          Jw(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var tD = cy;
const Vd = /* @__PURE__ */ Vw(tD);
var us = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function rD() {
  if (Md) return xe;
  Md = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return xe.ContextConsumer = a, xe.ContextProvider = i, xe.Element = e, xe.ForwardRef = c, xe.Fragment = r, xe.Lazy = d, xe.Memo = l, xe.Portal = t, xe.Profiler = n, xe.StrictMode = o, xe.Suspense = u, xe.SuspenseList = m, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(p) {
    return b(p) === a;
  }, xe.isContextProvider = function(p) {
    return b(p) === i;
  }, xe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, xe.isForwardRef = function(p) {
    return b(p) === c;
  }, xe.isFragment = function(p) {
    return b(p) === r;
  }, xe.isLazy = function(p) {
    return b(p) === d;
  }, xe.isMemo = function(p) {
    return b(p) === l;
  }, xe.isPortal = function(p) {
    return b(p) === t;
  }, xe.isProfiler = function(p) {
    return b(p) === n;
  }, xe.isStrictMode = function(p) {
    return b(p) === o;
  }, xe.isSuspense = function(p) {
    return b(p) === u;
  }, xe.isSuspenseList = function(p) {
    return b(p) === m;
  }, xe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, xe.typeOf = b, xe;
}
var Oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function nD() {
  return Ld || (Ld = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    Oe.ContextConsumer = v, Oe.ContextProvider = D, Oe.Element = C, Oe.ForwardRef = R, Oe.Fragment = $, Oe.Lazy = A, Oe.Memo = P, Oe.Portal = T, Oe.Profiler = j, Oe.StrictMode = k, Oe.Suspense = V, Oe.SuspenseList = W, Oe.isAsyncMode = z, Oe.isConcurrentMode = B, Oe.isContextConsumer = q, Oe.isContextProvider = Y, Oe.isElement = K, Oe.isForwardRef = Z, Oe.isFragment = re, Oe.isLazy = U, Oe.isMemo = X, Oe.isPortal = M, Oe.isProfiler = J, Oe.isStrictMode = be, Oe.isSuspense = O, Oe.isSuspenseList = te, Oe.isValidElementType = y, Oe.typeOf = f;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? us.exports = rD() : us.exports = nD();
var Bd = us.exports;
function Hc(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function vi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Hc(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function oD(e, t, r) {
  vi(e, "mapStateToProps"), vi(t, "mapDispatchToProps"), vi(r, "mergeProps");
}
const iD = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function aD(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(E, y) {
    return s ? x(E, y) : g(E, y);
  };
}
function sD(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = ay(t, iD);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && oD(a, s, c), aD(a, s, c, e, i);
}
function cD(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function lD(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function ly(e, t, r) {
  lD(e) || Hc(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ds(e) {
  return function(r) {
    const o = e(r);
    function n() {
      return o;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Fd(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function uy(e, t) {
  return function(o, {
    displayName: n
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Fd(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Fd(u), u = i(s, c)), process.env.NODE_ENV !== "production" && ly(u, n, t), u;
    }, i;
  };
}
function Uc(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function uD(e) {
  return e && typeof e == "object" ? ds((t) => (
    // @ts-ignore
    cD(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    uy(e, "mapDispatchToProps")
  ) : Uc(e, "mapDispatchToProps") : ds((t) => ({
    dispatch: t
  }));
}
function dD(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    uy(e, "mapStateToProps")
  ) : Uc(e, "mapStateToProps") : ds(() => ({}));
}
function pD(e, t, r) {
  return pr({}, r, e, t);
}
function fD(e) {
  return function(r, {
    displayName: o,
    areMergedPropsEqual: n
  }) {
    let i = !1, a;
    return function(c, u, m) {
      const l = e(c, u, m);
      return i ? n(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && ly(a, o, "mergeProps")), a;
    };
  };
}
function mD(e) {
  return e ? typeof e == "function" ? fD(e) : Uc(e, "mergeProps") : () => pD;
}
function gD() {
  const e = Gw();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const jd = {
  notify() {
  },
  get: () => []
};
function dy(e, t) {
  let r, o = jd, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = gD());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = jd);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const bD = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", zo = bD ? N.useLayoutEffect : N.useEffect;
function Wd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ei(e, t) {
  if (Wd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Wd(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const hD = ["reactReduxForwardedRef"];
let py = zw;
const yD = (e) => {
  py = e;
}, vD = [null, null], ED = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function xD(e, t, r) {
  zo(() => e(...t), r);
}
function OD(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function SD(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const b = t.getState();
    let p, x;
    try {
      p = o(b, n.current);
    } catch (w) {
      x = w, d = w;
    }
    x || (d = null), p === i.current ? a.current || u() : (i.current = p, c.current = p, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function wD(e, t) {
  return e === t;
}
let Gd = !1;
function fy(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = wD,
  areOwnPropsEqual: i = Ei,
  areStatePropsEqual: a = Ei,
  areMergedPropsEqual: s = Ei,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = iy
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Gd && (Gd = !0, Hc('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = dD(e), d = uD(t), g = mD(r), h = !!e;
  return (p) => {
    if (process.env.NODE_ENV !== "production" && !Bd.isValidElementType(p))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ED(p)}`);
    const x = p.displayName || p.name || "Component", w = `Connect(${x})`, E = {
      shouldHandleStateChanges: h,
      displayName: w,
      wrappedComponentName: x,
      WrappedComponent: p,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function y(D) {
      const [C, R, $] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: O
        } = D, te = ay(D, hD);
        return [D.context, O, te];
      }, [D]), A = N.useMemo(() => C && C.Consumer && // @ts-ignore
      Bd.isContextConsumer(/* @__PURE__ */ N.createElement(C.Consumer, null)) ? C : m, [C, m]), P = N.useContext(A), T = !!D.store && !!D.store.getState && !!D.store.dispatch, j = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !T && !j)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const k = T ? D.store : P.store, V = j ? P.getServerState : k.getState, W = N.useMemo(() => sD(k.dispatch, E), [k]), [F, G] = N.useMemo(() => {
        if (!h) return vD;
        const O = dy(k, T ? void 0 : P.subscription), te = O.notifyNestedSubs.bind(O);
        return [O, te];
      }, [k, T, P]), z = N.useMemo(() => T ? P : pr({}, P, {
        subscription: F
      }), [T, P, F]), B = N.useRef(), q = N.useRef($), Y = N.useRef(), K = N.useRef(!1);
      N.useRef(!1);
      const Z = N.useRef(!1), re = N.useRef();
      zo(() => (Z.current = !0, () => {
        Z.current = !1;
      }), []);
      const U = N.useMemo(() => () => Y.current && $ === q.current ? Y.current : W(k.getState(), $), [k, $]), X = N.useMemo(() => (te) => F ? SD(
        h,
        k,
        F,
        // @ts-ignore
        W,
        q,
        B,
        K,
        Z,
        Y,
        G,
        te
      ) : () => {
      }, [F]);
      xD(OD, [q, B, K, $, Y, G]);
      let M;
      try {
        M = py(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          X,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          U,
          V ? () => W(V(), $) : U
        );
      } catch (O) {
        throw re.current && (O.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), O;
      }
      zo(() => {
        re.current = void 0, Y.current = void 0, B.current = M;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(p, pr({}, M, {
          ref: R
        }))
      ), [R, p, M]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(A.Provider, {
        value: z
      }, J) : J, [A, J, z]);
    }
    const v = N.memo(y);
    if (v.WrappedComponent = p, v.displayName = y.displayName = w, c) {
      const C = N.forwardRef(function($, A) {
        return /* @__PURE__ */ N.createElement(v, pr({}, $, {
          reactReduxForwardedRef: A
        }));
      });
      return C.displayName = w, C.WrappedComponent = p, Vd(C, p);
    }
    return Vd(v, p);
  };
}
function DD({
  store: e,
  context: t,
  children: r,
  serverState: o,
  stabilityCheck: n = "once",
  noopCheck: i = "once"
}) {
  const a = N.useMemo(() => {
    const u = dy(e);
    return {
      store: e,
      subscription: u,
      getServerState: o ? () => o : void 0,
      stabilityCheck: n,
      noopCheck: i
    };
  }, [e, o, n, i]), s = N.useMemo(() => e.getState(), [e]);
  zo(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || iy;
  return /* @__PURE__ */ N.createElement(c.Provider, {
    value: a
  }, r);
}
yD(Gc.useSyncExternalStore);
Ww(ar);
function ND(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function my(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && ND(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function CD(e, t) {
  return my(function() {
    return e;
  }, t);
}
var ye = my, oe = CD, _D = process.env.NODE_ENV === "production", xi = "Invariant failed";
function kd(e, t) {
  if (_D)
    throw new Error(xi);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(xi, ": ").concat(r) : xi;
  throw new Error(o);
}
var Qt = function(t) {
  var r = t.top, o = t.right, n = t.bottom, i = t.left, a = o - i, s = n - r, c = {
    top: r,
    right: o,
    bottom: n,
    left: i,
    width: a,
    height: s,
    x: i,
    y: r,
    center: {
      x: (o + i) / 2,
      y: (n + r) / 2
    }
  };
  return c;
}, qc = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, zd = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, ID = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Oi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Yc = function(t) {
  var r = t.borderBox, o = t.margin, n = o === void 0 ? Oi : o, i = t.border, a = i === void 0 ? Oi : i, s = t.padding, c = s === void 0 ? Oi : s, u = Qt(qc(r, n)), m = Qt(zd(r, a)), l = Qt(zd(m, c));
  return {
    marginBox: u,
    borderBox: Qt(r),
    paddingBox: m,
    contentBox: l,
    margin: n,
    border: a,
    padding: c
  };
}, Gt = function(t) {
  var r = t.slice(0, -2), o = t.slice(-2);
  if (o !== "px")
    return 0;
  var n = Number(r);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? kd(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : kd()), n;
}, PD = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Ho = function(t, r) {
  var o = t.borderBox, n = t.border, i = t.margin, a = t.padding, s = ID(o, r);
  return Yc({
    borderBox: s,
    border: n,
    margin: i,
    padding: a
  });
}, Uo = function(t, r) {
  return r === void 0 && (r = PD()), Ho(t, r);
}, gy = function(t, r) {
  var o = {
    top: Gt(r.marginTop),
    right: Gt(r.marginRight),
    bottom: Gt(r.marginBottom),
    left: Gt(r.marginLeft)
  }, n = {
    top: Gt(r.paddingTop),
    right: Gt(r.paddingRight),
    bottom: Gt(r.paddingBottom),
    left: Gt(r.paddingLeft)
  }, i = {
    top: Gt(r.borderTopWidth),
    right: Gt(r.borderRightWidth),
    bottom: Gt(r.borderBottomWidth),
    left: Gt(r.borderLeftWidth)
  };
  return Yc({
    borderBox: t,
    margin: o,
    padding: n,
    border: i
  });
}, by = function(t) {
  var r = t.getBoundingClientRect(), o = window.getComputedStyle(t);
  return gy(r, o);
}, Hd = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function $D(e, t) {
  return !!(e === t || Hd(e) && Hd(t));
}
function AD(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!$D(e[r], t[r]))
      return !1;
  return !0;
}
function bt(e, t) {
  t === void 0 && (t = AD);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var Rn = function(t) {
  var r = [], o = null, n = function() {
    for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
      s[c] = arguments[c];
    r = s, !o && (o = requestAnimationFrame(function() {
      o = null, t.apply(void 0, r);
    }));
  };
  return n.cancel = function() {
    o && (cancelAnimationFrame(o), o = null);
  }, n;
};
const TD = process.env.NODE_ENV === "production", RD = /[ \t]{2,}/g, VD = /^[ \t]*/gm, Ud = (e) => e.replace(RD, " ").replace(VD, "").trim(), MD = (e) => Ud(`
  %c@hello-pangea/dnd

  %c${Ud(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), LD = (e) => [MD(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], BD = "__@hello-pangea/dnd-disable-dev-warnings";
function hy(e, t) {
  TD || typeof window < "u" && window[BD] || console[e](...LD(t));
}
const nt = hy.bind(null, "warn"), ps = hy.bind(null, "error");
function fr() {
}
function FD(e, t) {
  return {
    ...e,
    ...t
  };
}
function Jt(e, t, r) {
  const o = t.map((n) => {
    const i = FD(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((i) => {
      i();
    });
  };
}
const jD = process.env.NODE_ENV === "production", qd = "Invariant failed";
class Vn extends Error {
}
Vn.prototype.toString = function() {
  return this.message;
};
function I(e, t) {
  throw jD ? new Vn(qd) : new Vn(`${qd}: ${t || ""}`);
}
class WD extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = fr, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && nt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Vn && (r.preventDefault(), process.env.NODE_ENV !== "production" && ps(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Jt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Vn) {
      process.env.NODE_ENV !== "production" && ps(t.message), this.setState({});
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
const GD = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, qo = (e) => e + 1, kD = (e) => `
  You have lifted an item in position ${qo(e.source.index)}
`, yy = (e, t) => {
  const r = e.droppableId === t.droppableId, o = qo(e.index), n = qo(t.index);
  return r ? `
      You have moved the item from position ${o}
      to position ${n}
    ` : `
    You have moved the item from position ${o}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${n}
  `;
}, vy = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, zD = (e) => {
  const t = e.destination;
  if (t)
    return yy(e.source, t);
  const r = e.combine;
  return r ? vy(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Yd = (e) => `
  The item has returned to its starting position
  of ${qo(e.index)}
`, HD = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Yd(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${yy(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${vy(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Yd(e.source)}
  `;
}, UD = {
  dragHandleUsageInstructions: GD,
  onDragStart: kD,
  onDragUpdate: zD,
  onDragEnd: HD
};
var wo = UD;
const ht = {
  x: 0,
  y: 0
}, Ct = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Ft = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), mr = (e, t) => e.x === t.x && e.y === t.y, gn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Lr = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Mn = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Kd = (e, t) => Math.min(...t.map((r) => Mn(e, r))), Ey = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var qD = (e, t) => {
  const r = Qt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const io = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Xd = (e) => [{
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
}], YD = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, KD = (e, t) => t ? io(e, t.scroll.diff.displacement) : e, XD = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, JD = (e, t) => t && t.shouldClipSubject ? qD(t.pageMarginBox, e) : Qt(e);
var dn = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = KD(e.marginBox, o), i = XD(n, r, t), a = JD(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Kc = (e, t) => {
  e.frame || (process.env.NODE_ENV, I());
  const r = e.frame, o = Ft(t, r.scroll.initial), n = gn(o), i = {
    ...r,
    scroll: {
      initial: r.scroll.initial,
      current: t,
      diff: {
        value: o,
        displacement: n
      },
      max: r.scroll.max
    }
  }, a = dn({
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
const xy = bt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), Oy = bt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), ii = bt((e) => Object.values(e)), ZD = bt((e) => Object.values(e));
var Ur = bt((e, t) => ZD(t).filter((o) => e === o.descriptor.droppableId).sort((o, n) => o.descriptor.index - n.descriptor.index));
function Xc(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function ai(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var si = bt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), QD = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  previousImpact: n
}) => {
  if (!r.isCombineEnabled || !Xc(n))
    return null;
  function a(g) {
    const h = {
      type: "COMBINE",
      combine: {
        draggableId: g,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...n,
      at: h
    };
  }
  const s = n.displaced.all, c = s.length ? s[0] : null;
  if (e)
    return c ? a(c) : null;
  const u = si(t, o);
  if (!c) {
    if (!u.length)
      return null;
    const g = u[u.length - 1];
    return a(g.descriptor.id);
  }
  const m = u.findIndex((g) => g.descriptor.id === c);
  m === -1 && (process.env.NODE_ENV !== "production" ? I(!1, "Could not find displaced item in set") : I());
  const l = m - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return a(d.descriptor.id);
}, bn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Sy = {
  point: ht,
  value: 0
}, Ln = {
  invisible: {},
  visible: {},
  all: []
}, e0 = {
  displaced: Ln,
  displacedBy: Sy,
  at: null
};
var t0 = e0, Zt = (e, t) => (r) => e <= r && r <= t, wy = (e) => {
  const t = Zt(e.top, e.bottom), r = Zt(e.left, e.right);
  return (o) => {
    if (t(o.top) && t(o.bottom) && r(o.left) && r(o.right))
      return !0;
    const i = t(o.top) || t(o.bottom), a = r(o.left) || r(o.right);
    if (i && a)
      return !0;
    const c = o.top < e.top && o.bottom > e.bottom, u = o.left < e.left && o.right > e.right;
    return c && u ? !0 : c && a || u && i;
  };
}, r0 = (e) => {
  const t = Zt(e.top, e.bottom), r = Zt(e.left, e.right);
  return (o) => t(o.top) && t(o.bottom) && r(o.left) && r(o.right);
};
const Jc = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Dy = {
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
var n0 = (e) => (t) => {
  const r = Zt(t.top, t.bottom), o = Zt(t.left, t.right);
  return (n) => e === Jc ? r(n.top) && r(n.bottom) : o(n.left) && o(n.right);
};
const o0 = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : ht;
  return io(e, r);
}, i0 = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, a0 = (e, t, r) => r(t)(e), Zc = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: o,
  isVisibleThroughFrameFn: n
}) => {
  const i = o ? o0(e, t) : e;
  return i0(i, t, n) && a0(i, r, n);
}, s0 = (e) => Zc({
  ...e,
  isVisibleThroughFrameFn: wy
}), Ny = (e) => Zc({
  ...e,
  isVisibleThroughFrameFn: r0
}), c0 = (e) => Zc({
  ...e,
  isVisibleThroughFrameFn: n0(e.destination.axis)
}), l0 = (e, t, r) => {
  if (typeof r == "boolean")
    return r;
  if (!t)
    return !0;
  const {
    invisible: o,
    visible: n
  } = t;
  if (o[e])
    return !1;
  const i = n[e];
  return i ? i.shouldAnimate : !0;
};
function u0(e, t) {
  const r = e.page.marginBox, o = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Qt(qc(r, o));
}
function Bn({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: o,
  forceShouldAnimate: n,
  last: i
}) {
  return e.reduce(function(s, c) {
    const u = u0(c, r), m = c.descriptor.id;
    if (s.all.push(m), !s0({
      target: u,
      destination: t,
      viewport: o,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const d = l0(m, i, n), g = {
      draggableId: m,
      shouldAnimate: d
    };
    return s.visible[m] = g, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function d0(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Jd({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: o
}) {
  const n = d0(e, {
    inHomeList: t
  });
  return {
    displaced: Ln,
    displacedBy: r,
    at: {
      type: "REORDER",
      destination: {
        droppableId: o.descriptor.id,
        index: n
      }
    }
  };
}
function Yo({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: o,
  displacedBy: n,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = bn(e, r);
  if (a == null)
    return Jd({
      insideDestination: t,
      inHomeList: c,
      displacedBy: n,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return Jd({
      insideDestination: t,
      inHomeList: c,
      displacedBy: n,
      destination: r
    });
  const m = si(e, t), l = t.indexOf(u), d = m.slice(l);
  return {
    displaced: Bn({
      afterDragging: d,
      destination: r,
      displacedBy: n,
      last: i,
      viewport: o.frame,
      forceShouldAnimate: s
    }),
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: a
      }
    }
  };
}
function Sr(e, t) {
  return !!t.effected[e];
}
var p0 = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: o,
  afterCritical: n
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = o.draggableId, s = r[i].descriptor.index;
  return Sr(i, n) ? e ? s : s - 1 : e ? s + 1 : s;
}, f0 = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: o
}) => {
  if (!r.length)
    return null;
  const n = o.index, i = e ? n + 1 : n - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, m0 = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: r,
  draggables: o,
  destination: n,
  insideDestination: i,
  previousImpact: a,
  viewport: s,
  afterCritical: c
}) => {
  const u = a.at;
  if (u || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot move in direction without previous impact location") : I()), u.type === "REORDER") {
    const l = f0({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return l == null ? null : Yo({
      draggable: r,
      insideDestination: i,
      destination: n,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const m = p0({
    isMovingForward: e,
    destination: n,
    displaced: a.displaced,
    draggables: o,
    combine: u.combine,
    afterCritical: c
  });
  return m == null ? null : Yo({
    draggable: r,
    insideDestination: i,
    destination: n,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: m
  });
}, g0 = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: o
}) => {
  const n = !!(e.visible[r] || e.invisible[r]);
  return Sr(r, t) ? n ? ht : gn(o.point) : n ? o.point : ht;
}, b0 = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const o = ai(t);
  o || (process.env.NODE_ENV, I());
  const n = o.draggableId, i = r[n].page.borderBox.center, a = g0({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: n,
    displacedBy: t.displacedBy
  });
  return Ct(i, a);
};
const Cy = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, h0 = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Qc = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, Zd = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Lr(e.line, t.marginBox[e.end] + Cy(e, r), Qc(e, t.marginBox, r)), Qd = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => Lr(e.line, t.marginBox[e.start] - h0(e, r), Qc(e, t.marginBox, r)), y0 = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => Lr(e.line, t.contentBox[e.start] + Cy(e, r), Qc(e, t.contentBox, r));
var v0 = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: o,
  afterCritical: n
}) => {
  const i = Ur(o.descriptor.id, r), a = t.page, s = o.axis;
  if (!i.length)
    return y0({
      axis: s,
      moveInto: o.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: u
  } = e, m = c.all[0];
  if (m) {
    const d = r[m];
    if (Sr(m, n))
      return Qd({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const g = Ho(d.page, u.point);
    return Qd({
      axis: s,
      moveRelativeTo: g,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Sr(l.descriptor.id, n)) {
    const d = Ho(l.page, gn(n.displacedBy.point));
    return Zd({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return Zd({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, fs = (e, t) => {
  const r = e.frame;
  return r ? Ct(t, r.scroll.diff.displacement) : t;
};
const E0 = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  afterCritical: n
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? v0({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: n
  }) : b0({
    impact: e,
    draggables: o,
    afterCritical: n
  });
};
var ci = (e) => {
  const t = E0(e), r = e.droppable;
  return r ? fs(r, t) : t;
}, _y = (e, t) => {
  const r = Ft(t, e.scroll.initial), o = gn(r);
  return {
    frame: Qt({
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
        displacement: o
      }
    }
  };
};
function ep(e, t) {
  return e.map((r) => t[r]);
}
function x0(e, t) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r].visible[e];
    if (o)
      return o;
  }
  return null;
}
var O0 = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: o,
  maxScrollChange: n
}) => {
  const i = _y(t, Ct(t.scroll.current, n)), a = r.frame ? Kc(r, Ct(r.frame.scroll.current, n)) : r, s = e.displaced, c = Bn({
    afterDragging: ep(s.all, o),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Bn({
    afterDragging: ep(s.all, o),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), m = {}, l = {}, d = [s, c, u];
  return s.all.forEach((h) => {
    const b = x0(h, d);
    if (b) {
      l[h] = b;
      return;
    }
    m[h] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: m,
      visible: l
    }
  };
}, S0 = (e, t) => Ct(e.scroll.diff.displacement, t), el = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const o = S0(r, e), n = Ft(o, t.page.borderBox.center);
  return Ct(t.client.borderBox.center, n);
}, Iy = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: o,
  withDroppableDisplacement: n,
  onlyOnMainAxis: i = !1
}) => {
  const a = Ft(r, e.page.borderBox.center), c = {
    target: io(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: n,
    viewport: o
  };
  return i ? c0(c) : Ny(c);
}, w0 = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  draggables: o,
  previousImpact: n,
  viewport: i,
  previousPageBorderBoxCenter: a,
  previousClientSelection: s,
  afterCritical: c
}) => {
  if (!r.isEnabled)
    return null;
  const u = Ur(r.descriptor.id, o), m = bn(t, r), l = QD({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: n
  }) || m0({
    isMovingForward: e,
    isInHomeList: m,
    draggable: t,
    draggables: o,
    destination: r,
    insideDestination: u,
    previousImpact: n,
    viewport: i,
    afterCritical: c
  });
  if (!l)
    return null;
  const d = ci({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: o,
    afterCritical: c
  });
  if (Iy({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: el({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const h = Ft(d, a), b = O0({
    impact: l,
    viewport: i,
    destination: r,
    draggables: o,
    maxScrollChange: h
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: h
  };
};
const Mt = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot get clipped area from droppable") : I()), t;
};
var D0 = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: o,
  viewport: n
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Zt(i[a.start], i[a.end]), c = ii(o).filter((m) => m !== r).filter((m) => m.isEnabled).filter((m) => !!m.subject.active).filter((m) => wy(n.frame)(Mt(m))).filter((m) => {
    const l = Mt(m);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((m) => {
    const l = Mt(m), d = Zt(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((m, l) => {
    const d = Mt(m)[a.crossAxisStart], g = Mt(l)[a.crossAxisStart];
    return e ? d - g : g - d;
  }).filter((m, l, d) => Mt(m)[a.crossAxisStart] === Mt(d[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((m) => Zt(Mt(m)[a.start], Mt(m)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((m, l) => Mt(m)[a.start] - Mt(l)[a.start])[0] : c.sort((m, l) => {
    const d = Kd(t, Xd(Mt(m))), g = Kd(t, Xd(Mt(l)));
    return d !== g ? d - g : Mt(m)[a.start] - Mt(l)[a.start];
  })[0];
};
const tp = (e, t) => {
  const r = e.page.borderBox.center;
  return Sr(e.descriptor.id, t) ? Ft(r, t.displacedBy.point) : r;
}, N0 = (e, t) => {
  const r = e.page.borderBox;
  return Sr(e.descriptor.id, t) ? io(r, gn(t.displacedBy.point)) : r;
};
var C0 = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: o,
  afterCritical: n
}) => o.filter((a) => Ny({
  target: N0(a, n),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = Mn(e, fs(r, tp(a, n))), u = Mn(e, fs(r, tp(s, n)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, ao = bt(function(t, r) {
  const o = r[t.line];
  return {
    value: o,
    point: Lr(t.line, o)
  };
});
const _0 = (e, t, r) => {
  const o = e.axis;
  if (e.descriptor.mode === "virtual")
    return Lr(o.line, t[o.line]);
  const n = e.subject.page.contentBox[o.size], c = Ur(e.descriptor.id, r).reduce((u, m) => u + m.client.marginBox[o.size], 0) + t[o.line] - n;
  return c <= 0 ? null : Lr(o.line, c);
}, Py = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), $y = (e, t, r) => {
  const o = e.frame;
  bn(t, e) && (process.env.NODE_ENV !== "production" ? I(!1, "Should not add placeholder space to home list") : I()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot add placeholder size to a subject when it already has one") : I());
  const n = ao(e.axis, t.displaceBy).point, i = _0(e, n, r), a = {
    placeholderSize: n,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!o) {
    const m = dn({
      page: e.subject.page,
      withPlaceholder: a,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: m
    };
  }
  const s = i ? Ct(o.scroll.max, i) : o.scroll.max, c = Py(o, s), u = dn({
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
}, I0 = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot remove placeholder form subject when there was none") : I());
  const r = e.frame;
  if (!r) {
    const a = dn({
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
  const o = t.oldFrameMaxScroll;
  o || (process.env.NODE_ENV !== "production" ? I(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : I());
  const n = Py(r, o), i = dn({
    page: e.subject.page,
    axis: e.axis,
    frame: n,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: i,
    frame: n
  };
};
var P0 = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: r,
  draggable: o,
  draggables: n,
  destination: i,
  viewport: a,
  afterCritical: s
}) => {
  if (!t) {
    if (r.length)
      return null;
    const l = {
      displaced: Ln,
      displacedBy: Sy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = ci({
      impact: l,
      draggable: o,
      droppable: i,
      draggables: n,
      afterCritical: s
    }), g = bn(o, i) ? i : $y(i, o, n);
    return Iy({
      draggable: o,
      destination: g,
      newPageBorderBoxCenter: d,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? l : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const l = t.descriptor.index;
    return t.descriptor.id === o.descriptor.id || c ? l : l + 1;
  })(), m = ao(i.axis, o.displaceBy);
  return Yo({
    draggable: o,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: m,
    last: Ln,
    index: u
  });
}, $0 = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: o,
  draggables: n,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = D0({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: o,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const u = Ur(c.descriptor.id, n), m = C0({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }), l = P0({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: n,
    moveRelativeTo: m,
    insideDestination: u,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const d = ci({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: n,
    afterCritical: s
  });
  return {
    clientSelection: el({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, jt = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const A0 = (e, t) => {
  const r = jt(e);
  return r ? t[r] : null;
};
var T0 = ({
  state: e,
  type: t
}) => {
  const r = A0(e.impact, e.dimensions.droppables), o = !!r, n = e.dimensions.droppables[e.critical.droppable.id], i = r || n, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !o)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], m = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return s ? w0({
    isMovingForward: c,
    previousPageBorderBoxCenter: m,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : $0({
    isMovingForward: c,
    previousPageBorderBoxCenter: m,
    draggable: u,
    isOver: i,
    draggables: l,
    droppables: d,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Rr(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ay(e) {
  const t = Zt(e.top, e.bottom), r = Zt(e.left, e.right);
  return function(n) {
    return t(n.y) && r(n.x);
  };
}
function R0(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function V0({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const o = t.page.borderBox.center, n = r.map((i) => {
    const a = i.axis, s = Lr(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Mn(o, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return n[0] ? n[0].id : null;
}
function M0({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const o = ii(r).filter((n) => {
    if (!n.isEnabled)
      return !1;
    const i = n.subject.active;
    if (!i || !R0(e, i))
      return !1;
    if (Ay(i)(e.center))
      return !0;
    const a = n.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], u = e[a.crossAxisEnd], m = Zt(i[a.crossAxisStart], i[a.crossAxisEnd]), l = m(c), d = m(u);
    return !l && !d ? !0 : l ? c < s : u > s;
  });
  return o.length ? o.length === 1 ? o[0].descriptor.id : V0({
    pageBorderBox: e,
    draggable: t,
    candidates: o
  }) : null;
}
const Ty = (e, t) => Qt(io(e, t));
var L0 = (e, t) => {
  const r = e.frame;
  return r ? Ty(t, r.scroll.diff.value) : t;
};
function Ry({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function B0({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var F0 = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  last: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = ao(r.axis, t.displaceBy), u = c.value, m = e[s.start], l = e[s.end], g = si(t, o).find((b) => {
    const p = b.descriptor.id, x = b.page.borderBox.center[s.line], w = Sr(p, a), E = Ry({
      displaced: n,
      id: p
    });
    return w ? E ? l <= x : m < x - u : E ? l <= x + u : m < x;
  }) || null, h = B0({
    draggable: t,
    closest: g,
    inHomeList: bn(t, r)
  });
  return Yo({
    draggable: t,
    insideDestination: o,
    destination: r,
    viewport: i,
    last: n,
    displacedBy: c,
    index: h
  });
};
const j0 = 4;
var W0 = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: o,
  insideDestination: n,
  afterCritical: i
}) => {
  if (!o.isCombineEnabled)
    return null;
  const a = o.axis, s = ao(o.axis, e.displaceBy), c = s.value, u = t[a.start], m = t[a.end], d = si(e, n).find((h) => {
    const b = h.descriptor.id, p = h.page.borderBox, w = p[a.size] / j0, E = Sr(b, i), y = Ry({
      displaced: r.displaced,
      id: b
    });
    return E ? y ? m > p[a.start] + w && m < p[a.end] - w : u > p[a.start] - c + w && u < p[a.end] - c - w : y ? m > p[a.start] + c + w && m < p[a.end] + c - w : u > p[a.start] + w && u < p[a.end] - w;
  });
  return d ? {
    displacedBy: s,
    displaced: r.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: d.descriptor.id,
        droppableId: o.descriptor.id
      }
    }
  } : null;
}, Vy = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: o,
  previousImpact: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = Ty(t.page.borderBox, e), c = M0({
    pageBorderBox: s,
    draggable: t,
    droppables: o
  });
  if (!c)
    return t0;
  const u = o[c], m = Ur(u.descriptor.id, r), l = L0(u, s);
  return W0({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: n,
    destination: u,
    insideDestination: m,
    afterCritical: a
  }) || F0({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: m,
    last: n.displaced,
    viewport: i,
    afterCritical: a
  });
}, tl = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const G0 = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const o = jt(e), n = jt(t);
  if (!o || o === n)
    return r;
  const i = r[o];
  if (!i.subject.withPlaceholder)
    return r;
  const a = I0(i);
  return tl(r, a);
};
var k0 = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: o,
  impact: n
}) => {
  const i = G0({
    previousImpact: o,
    impact: n,
    droppables: r
  }), a = jt(n);
  if (!a)
    return i;
  const s = r[a];
  if (bn(e, s) || s.subject.withPlaceholder)
    return i;
  const c = $y(s, e, t);
  return tl(i, c);
}, On = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: o,
  impact: n,
  scrollJumpRequest: i
}) => {
  const a = o || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, u = Ft(c, e.initial.client.selection), m = {
    offset: u,
    selection: c,
    borderBoxCenter: Ct(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: Ct(m.selection, a.scroll.current),
    borderBoxCenter: Ct(m.borderBoxCenter, a.scroll.current),
    offset: Ct(m.offset, a.scroll.diff.value)
  }, d = {
    client: m,
    page: l
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: d
    };
  const g = s.draggables[e.critical.draggable.id], h = n || Vy({
    pageOffset: l.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = k0({
    draggable: g,
    impact: h,
    previousImpact: e.impact,
    draggables: s.draggables,
    droppables: s.droppables
  });
  return {
    ...e,
    current: d,
    dimensions: {
      draggables: s.draggables,
      droppables: b
    },
    impact: h,
    viewport: a,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function z0(e, t) {
  return e.map((r) => t[r]);
}
var My = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: o,
  forceShouldAnimate: n
}) => {
  const i = e.displaced, a = z0(i.all, r), s = Bn({
    afterDragging: a,
    destination: o,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: n,
    last: i
  });
  return {
    ...e,
    displaced: s
  };
}, Ly = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  viewport: n,
  afterCritical: i
}) => {
  const a = ci({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: i
  });
  return el({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: n
  });
}, By = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, I());
  const o = e.impact, n = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], u = jt(o);
  u || (process.env.NODE_ENV !== "production" ? I(!1, "Must be over a destination in SNAP movement mode") : I());
  const m = s[u], l = My({
    impact: o,
    viewport: n,
    destination: m,
    draggables: a
  }), d = Ly({
    impact: l,
    draggable: c,
    droppable: m,
    draggables: a,
    viewport: n,
    afterCritical: e.afterCritical
  });
  return On({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: n
  });
}, H0 = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Fy = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: o
}) => {
  const n = ao(t.axis, e.displaceBy), i = Ur(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? I(!1, "Expected draggable to be inside home list") : I());
  const s = i.slice(a + 1), c = s.reduce((d, g) => (d[g.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: n,
    effected: c
  };
  return {
    impact: {
      displaced: Bn({
        afterDragging: s,
        destination: t,
        displacedBy: n,
        last: null,
        viewport: o.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: n,
      at: {
        type: "REORDER",
        destination: H0(e.descriptor)
      }
    },
    afterCritical: u
  };
}, U0 = (e, t) => ({
  draggables: e.draggables,
  droppables: tl(e.droppables, t)
});
const so = (e) => {
  process.env.NODE_ENV;
}, co = (e) => {
  process.env.NODE_ENV;
};
var q0 = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const o = Ho(e.client, t), n = Uo(o, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: o
    },
    client: o,
    page: n
  };
}, Y0 = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? I(!1, "Expected Droppable to have a frame") : I()), t;
}, K0 = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const o = r.scroll.diff.value;
  return e.map((n) => {
    const i = n.descriptor.droppableId, a = t[i], c = Y0(a).scroll.diff.value, u = Ct(o, c);
    return q0({
      draggable: n,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, X0 = ({
  state: e,
  published: t
}) => {
  so();
  const r = t.modified.map((x) => {
    const w = e.dimensions.droppables[x.droppableId];
    return Kc(w, x.scroll);
  }), o = {
    ...e.dimensions.droppables,
    ...xy(r)
  }, n = Oy(K0({
    additions: t.additions,
    updatedDroppables: o,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...n
  };
  t.removals.forEach((x) => {
    delete i[x];
  });
  const a = {
    droppables: o,
    draggables: i
  }, s = jt(e.impact), c = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], m = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = Fy({
    draggable: u,
    home: m,
    draggables: i,
    viewport: e.viewport
  }), g = c && c.isCombineEnabled ? e.impact : l, h = Vy({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: g,
    viewport: e.viewport,
    afterCritical: d
  });
  co();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: h,
    onLiftImpact: l,
    dimensions: a,
    afterCritical: d,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? b : {
    ...b,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const ms = (e) => e.movementMode === "SNAP", Si = (e, t, r) => {
  const o = U0(e.dimensions, t);
  return !ms(e) || r ? On({
    state: e,
    dimensions: o
  }) : By({
    state: e,
    dimensions: o
  });
};
function wi(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const rp = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var J0 = (e = rp, t) => {
  if (t.type === "FLUSH")
    return {
      ...rp,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? I(!1, "INITIAL_PUBLISH must come after a IDLE phase") : I());
    const {
      critical: r,
      clientSelection: o,
      viewport: n,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: o,
      borderBoxCenter: s.client.borderBox.center,
      offset: ht
    }, m = {
      client: u,
      page: {
        selection: Ct(u.selection, n.scroll.initial),
        borderBoxCenter: Ct(u.selection, n.scroll.initial),
        offset: Ct(u.selection, n.scroll.diff.value)
      }
    }, l = ii(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: g
    } = Fy({
      draggable: s,
      home: c,
      draggables: i.draggables,
      viewport: n
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: r,
      movementMode: a,
      dimensions: i,
      initial: m,
      current: m,
      isWindowScrollAllowed: l,
      impact: d,
      afterCritical: g,
      onLiftImpact: d,
      viewport: n,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? I(!1, `Collection cannot start from phase ${e.phase}`) : I()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? I(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : I()), X0({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Rr(e) || (process.env.NODE_ENV !== "production" ? I(!1, `${t.type} not permitted in phase ${e.phase}`) : I());
    const {
      client: r
    } = t.payload;
    return mr(r, e.current.client.selection) ? e : On({
      state: e,
      clientSelection: r,
      impact: ms(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return wi(e);
    Rr(e) || (process.env.NODE_ENV !== "production" ? I(!1, `${t.type} not permitted in phase ${e.phase}`) : I());
    const {
      id: r,
      newScroll: o
    } = t.payload, n = e.dimensions.droppables[r];
    if (!n)
      return e;
    const i = Kc(n, o);
    return Si(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Rr(e) || (process.env.NODE_ENV !== "production" ? I(!1, `Attempting to move in an unsupported phase ${e.phase}`) : I());
    const {
      id: r,
      isEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : I()), n.isEnabled === o && (process.env.NODE_ENV !== "production" ? I(!1, `Trying to set droppable isEnabled to ${String(o)}
      but it is already ${String(n.isEnabled)}`) : I());
    const i = {
      ...n,
      isEnabled: o
    };
    return Si(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Rr(e) || (process.env.NODE_ENV !== "production" ? I(!1, `Attempting to move in an unsupported phase ${e.phase}`) : I());
    const {
      id: r,
      isCombineEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : I()), n.isCombineEnabled === o && (process.env.NODE_ENV !== "production" ? I(!1, `Trying to set droppable isCombineEnabled to ${String(o)}
      but it is already ${String(n.isCombineEnabled)}`) : I());
    const i = {
      ...n,
      isCombineEnabled: o
    };
    return Si(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Rr(e) || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot move by window in phase ${e.phase}`) : I()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? I(!1, "Window scrolling is currently not supported for fixed lists") : I());
    const r = t.payload.newScroll;
    if (mr(e.viewport.scroll.current, r))
      return wi(e);
    const o = _y(e.viewport, r);
    return ms(e) ? By({
      state: e,
      viewport: o
    }) : On({
      state: e,
      viewport: o
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Rr(e))
      return e;
    const r = t.payload.maxScroll;
    if (mr(r, e.viewport.scroll.max))
      return e;
    const o = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: r
      }
    };
    return {
      ...e,
      viewport: o
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? I(!1, `${t.type} received while not in DRAGGING phase`) : I());
    const r = T0({
      state: e,
      type: t.type
    });
    return r ? On({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? I(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : I()), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: r
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: r,
      dropDuration: o,
      newHomeClientOffset: n
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot animate drop from phase ${e.phase}`) : I()), {
      phase: "DROP_ANIMATING",
      completed: r,
      dropDuration: o,
      newHomeClientOffset: n,
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
const Z0 = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), Q0 = (e) => ({
  type: "LIFT",
  payload: e
}), eN = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), tN = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), rN = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), nN = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), oN = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), iN = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), jy = (e) => ({
  type: "MOVE",
  payload: e
}), aN = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), sN = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), cN = () => ({
  type: "MOVE_UP",
  payload: null
}), lN = () => ({
  type: "MOVE_DOWN",
  payload: null
}), uN = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), dN = () => ({
  type: "MOVE_LEFT",
  payload: null
}), rl = () => ({
  type: "FLUSH",
  payload: null
}), pN = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), nl = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Wy = (e) => ({
  type: "DROP",
  payload: e
}), fN = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Gy = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function mN(e) {
  if (e.length <= 1)
    return;
  const t = e.map((n) => n.descriptor.index), r = {};
  for (let n = 1; n < t.length; n++) {
    const i = t[n], a = t[n - 1];
    i !== a + 1 && (r[i] = !0);
  }
  if (!Object.keys(r).length)
    return;
  const o = t.map((n) => !!r[n] ? `[🔥${n}]` : `${n}`).join(", ");
  process.env.NODE_ENV !== "production" && nt(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${o}
  `);
}
function gN(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Ur(e.droppable.id, t.draggables);
    mN(r);
  }
}
var bN = (e) => ({
  getState: t,
  dispatch: r
}) => (o) => (n) => {
  if (n.type !== "LIFT") {
    o(n);
    return;
  }
  const {
    id: i,
    clientSelection: a,
    movementMode: s
  } = n.payload, c = t();
  c.phase === "DROP_ANIMATING" && r(nl({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? I(!1, "Unexpected phase to start a drag") : I()), r(rl()), r(Z0({
    draggableId: i,
    movementMode: s
  }));
  const m = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: l,
    dimensions: d,
    viewport: g
  } = e.startPublishing(m);
  gN(l, d), r(eN({
    critical: l,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: g
  }));
}, hN = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const ol = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Fn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, ky = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, wr = `${ky.outOfTheWay}s ${ol.outOfTheWay}`, Sn = {
  fluid: `opacity ${wr}`,
  snap: `transform ${wr}, opacity ${wr}`,
  drop: (e) => {
    const t = `${e}s ${ol.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${wr}`,
  placeholder: `height ${wr}, width ${wr}, margin ${wr}`
}, np = (e) => mr(e, ht) ? void 0 : `translate(${e.x}px, ${e.y}px)`, gs = {
  moveTo: np,
  drop: (e, t) => {
    const r = np(e);
    if (r)
      return t ? `${r} scale(${Fn.scale.drop})` : r;
  }
}, {
  minDropTime: bs,
  maxDropTime: zy
} = ky, yN = zy - bs, op = 1500, vN = 0.6;
var EN = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const o = Mn(e, t);
  if (o <= 0)
    return bs;
  if (o >= op)
    return zy;
  const n = o / op, i = bs + yN * n, a = r === "CANCEL" ? i * vN : i;
  return Number(a.toFixed(2));
}, xN = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: o,
  afterCritical: n
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = jt(e), c = s ? a[s] : null, u = a[t.descriptor.droppableId], m = Ly({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: n,
    droppable: c || u,
    viewport: o
  });
  return Ft(m, t.client.borderBox.center);
}, ON = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: o,
  viewport: n,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: My({
    draggables: e,
    impact: i,
    destination: o,
    viewport: n,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : r.at.type === "REORDER" ? {
  impact: r,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...r,
    displaced: Ln
  },
  didDropInsideDroppable: !0
};
const SN = ({
  getState: e,
  dispatch: t
}) => (r) => (o) => {
  if (o.type !== "DROP") {
    r(o);
    return;
  }
  const n = e(), i = o.payload.reason;
  if (n.phase === "COLLECTING") {
    t(fN({
      reason: i
    }));
    return;
  }
  if (n.phase === "IDLE")
    return;
  n.phase === "DROP_PENDING" && n.isWaiting && (process.env.NODE_ENV !== "production" ? I(!1, "A DROP action occurred while DROP_PENDING and still waiting") : I()), n.phase === "DRAGGING" || n.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot drop in phase: ${n.phase}`) : I());
  const s = n.critical, c = n.dimensions, u = c.draggables[n.critical.draggable.id], {
    impact: m,
    didDropInsideDroppable: l
  } = ON({
    reason: i,
    lastImpact: n.impact,
    afterCritical: n.afterCritical,
    onLiftImpact: n.onLiftImpact,
    home: n.dimensions.droppables[n.critical.droppable.id],
    viewport: n.viewport,
    draggables: n.dimensions.draggables
  }), d = l ? Xc(m) : null, g = l ? ai(m) : null, h = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: h,
    reason: i,
    mode: n.movementMode,
    destination: d,
    combine: g
  }, p = xN({
    impact: m,
    draggable: u,
    dimensions: c,
    viewport: n.viewport,
    afterCritical: n.afterCritical
  }), x = {
    critical: n.critical,
    afterCritical: n.afterCritical,
    result: b,
    impact: m
  };
  if (!(!mr(n.current.client.offset, p) || !!b.combine)) {
    t(nl({
      completed: x
    }));
    return;
  }
  const E = EN({
    current: n.current.client.offset,
    destination: p,
    reason: i
  });
  t(pN({
    newHomeClientOffset: p,
    dropDuration: E,
    completed: x
  }));
};
var wN = SN, Hy = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function DN(e) {
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
function NN({
  onWindowScroll: e
}) {
  function t() {
    e(Hy());
  }
  const r = Rn(t), o = DN(r);
  let n = fr;
  function i() {
    return n !== fr;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot start scroll listener when already active") : I()), n = Jt(window, [o]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot stop scroll listener when not active") : I()), r.cancel(), n(), n = fr;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const CN = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", _N = (e) => {
  const t = NN({
    onWindowScroll: (r) => {
      e.dispatch(aN({
        newScroll: r
      }));
    }
  });
  return (r) => (o) => {
    !t.isActive() && o.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && CN(o) && t.stop(), r(o);
  };
};
var IN = _N, PN = (e) => {
  let t = !1, r = !1;
  const o = setTimeout(() => {
    r = !0;
  }), n = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && nt("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && nt(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(o);
  };
  return n.wasCalled = () => t, n;
}, $N = () => {
  const e = [], t = (n) => {
    const i = e.findIndex((s) => s.timerId === n);
    i === -1 && (process.env.NODE_ENV !== "production" ? I(!1, "Could not find timer") : I());
    const [a] = e.splice(i, 1);
    a.callback();
  };
  return {
    add: (n) => {
      const i = setTimeout(() => t(i)), a = {
        timerId: i,
        callback: n
      };
      e.push(a);
    },
    flush: () => {
      if (!e.length)
        return;
      const n = [...e];
      e.length = 0, n.forEach((i) => {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
};
const AN = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, TN = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, RN = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, o = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && o;
}, vn = (e, t) => {
  so(), t(), co();
}, po = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Di(e, t, r, o) {
  if (!e) {
    r(o(t));
    return;
  }
  const n = PN(r);
  e(t, {
    announce: n
  }), n.wasCalled() || r(o(t));
}
var VN = (e, t) => {
  const r = $N();
  let o = null;
  const n = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : I()), vn("onBeforeCapture", () => {
      const g = e().onBeforeCapture;
      g && g({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : I()), vn("onBeforeDragStart", () => {
      const g = e().onBeforeDragStart;
      g && g(po(l, d));
    });
  }, a = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : I());
    const g = po(l, d);
    o = {
      mode: d,
      lastCritical: l,
      lastLocation: g.source,
      lastCombine: null
    }, r.add(() => {
      vn("onDragStart", () => Di(e().onDragStart, g, t, wo.onDragStart));
    });
  }, s = (l, d) => {
    const g = Xc(d), h = ai(d);
    o || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot fire onDragMove when onDragStart has not been called") : I());
    const b = !RN(l, o.lastCritical);
    b && (o.lastCritical = l);
    const p = !AN(o.lastLocation, g);
    p && (o.lastLocation = g);
    const x = !TN(o.lastCombine, h);
    if (x && (o.lastCombine = h), !b && !p && !x)
      return;
    const w = {
      ...po(l, o.mode),
      combine: h,
      destination: g
    };
    r.add(() => {
      vn("onDragUpdate", () => Di(e().onDragUpdate, w, t, wo.onDragUpdate));
    });
  }, c = () => {
    o || (process.env.NODE_ENV !== "production" ? I(!1, "Can only flush responders while dragging") : I()), r.flush();
  }, u = (l) => {
    o || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : I()), o = null, vn("onDragEnd", () => Di(e().onDragEnd, l, t, wo.onDragEnd));
  };
  return {
    beforeCapture: n,
    beforeStart: i,
    start: a,
    update: s,
    flush: c,
    drop: u,
    abort: () => {
      if (!o)
        return;
      const l = {
        ...po(o.lastCritical, o.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, MN = (e, t) => {
  const r = VN(e, t);
  return (o) => (n) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      r.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const s = i.payload.critical;
      r.beforeStart(s, i.payload.movementMode), n(i), r.start(s, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const s = i.payload.completed.result;
      r.flush(), n(i), r.drop(s);
      return;
    }
    if (n(i), i.type === "FLUSH") {
      r.abort();
      return;
    }
    const a = o.getState();
    a.phase === "DRAGGING" && r.update(a.critical, a.impact);
  };
};
const LN = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const o = e.getState();
  o.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot finish a drop animating when no drop is occurring") : I()), e.dispatch(nl({
    completed: o.completed
  }));
};
var BN = LN;
const FN = (e) => {
  let t = null, r = null;
  function o() {
    r && (cancelAnimationFrame(r), r = null), t && (t(), t = null);
  }
  return (n) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && o(), n(i), i.type !== "DROP_ANIMATE")
      return;
    const a = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Gy());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Jt(window, [a]);
    });
  };
};
var jN = FN, WN = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, GN = (e) => {
  let t = !1;
  return () => (r) => (o) => {
    if (o.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(o.payload.critical.draggable.id), r(o), e.tryRestoreFocusRecorded();
      return;
    }
    if (r(o), !!t) {
      if (o.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (o.type === "DROP_COMPLETE") {
        t = !1;
        const n = o.payload.completed.result;
        n.combine && e.tryShiftRecord(n.draggableId, n.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const kN = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var zN = (e) => (t) => (r) => (o) => {
  if (kN(o)) {
    e.stop(), r(o);
    return;
  }
  if (o.type === "INITIAL_PUBLISH") {
    r(o);
    const n = t.getState();
    n.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? I(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : I()), e.start(n);
    return;
  }
  r(o), e.scroll(t.getState());
};
const HN = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const o = e.getState();
  o.phase === "DROP_PENDING" && (o.isWaiting || e.dispatch(Wy({
    reason: o.reason
  })));
};
var UN = HN;
const qN = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : ny;
var YN = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: o,
  announce: n,
  autoScroller: i
}) => ry(J0, qN(Rw(hN(r), WN(e), bN(e), wN, BN, jN, UN, zN(i), IN, GN(t), MN(o, n))));
const Ni = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function KN({
  registry: e,
  callbacks: t
}) {
  let r = Ni(), o = null;
  const n = () => {
    o || (t.collectionStarting(), o = requestAnimationFrame(() => {
      o = null, so();
      const {
        additions: c,
        removals: u,
        modified: m
      } = r, l = Object.keys(c).map((h) => e.draggable.getById(h).getDimension(ht)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(m).map((h) => {
        const p = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: p
        };
      }), g = {
        additions: l,
        removals: Object.keys(u),
        modified: d
      };
      r = Ni(), co(), t.publish(g);
    }));
  };
  return {
    add: (c) => {
      const u = c.descriptor.id;
      r.additions[u] = c, r.modified[c.descriptor.droppableId] = !0, r.removals[u] && delete r.removals[u], n();
    },
    remove: (c) => {
      const u = c.descriptor;
      r.removals[u.id] = !0, r.modified[u.droppableId] = !0, r.additions[u.id] && delete r.additions[u.id], n();
    },
    stop: () => {
      o && (cancelAnimationFrame(o), o = null, r = Ni());
    }
  };
}
var Uy = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = Ft({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, qy = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot find document.documentElement") : I()), e;
}, Yy = () => {
  const e = qy();
  return Uy({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, XN = () => {
  const e = Hy(), t = Yy(), r = e.y, o = e.x, n = qy(), i = n.clientWidth, a = n.clientHeight, s = o + i, c = r + a;
  return {
    frame: Qt({
      top: r,
      left: o,
      right: s,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: ht,
        displacement: ht
      }
    }
  };
}, JN = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  so();
  const o = XN(), n = o.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((m) => m.callbacks.getDimensionAndWatchScroll(n, t)), s = r.draggable.getAllByType(e.draggable.type).map((m) => m.getDimension(n)), c = {
    draggables: Oy(s),
    droppables: xy(a)
  };
  return co(), {
    dimensions: c,
    critical: e,
    viewport: o
  };
};
function ip(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && nt(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var ZN = (e, t) => {
  let r = null;
  const o = KN({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), n = (d, g) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : I()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: g
    });
  }, i = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : I()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: g
    }));
  }, a = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : I()), t.updateDroppableScroll({
      id: d,
      newScroll: g
    }));
  }, s = (d, g) => {
    r && e.droppable.getById(d).callbacks.scroll(g);
  }, c = () => {
    if (!r)
      return;
    o.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((g) => g.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? I(!1, "Should only be subscribed when a collection is occurring") : I());
    const g = r.critical.draggable;
    d.type === "ADDITION" && ip(e, g, d.value) && o.add(d.value), d.type === "REMOVAL" && ip(e, g, d.value) && o.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: n,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot start capturing critical dimensions as there is already a collection") : I());
      const g = e.draggable.getById(d.draggableId), h = e.droppable.getById(g.descriptor.droppableId), b = {
        draggable: g.descriptor,
        droppable: h.descriptor
      }, p = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: p
      }, JN({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Ky = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", QN = (e) => {
  window.scrollBy(e.x, e.y);
};
const eC = bt((e) => ii(e).filter((t) => !(!t.isEnabled || !t.frame))), tC = (e, t) => eC(t).find((o) => (o.frame || (process.env.NODE_ENV !== "production" ? I(!1, "Invalid result") : I()), Ay(o.frame.pageMarginBox)(e))) || null;
var rC = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const n = r[t];
    return n.frame ? n : null;
  }
  return tC(e, r);
};
const jn = {
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
var nC = (e, t, r = () => jn) => {
  const o = r(), n = e[t.size] * o.startFromPercentage, i = e[t.size] * o.maxScrollAtPercentage;
  return {
    startScrollingFrom: n,
    maxScrollValueAt: i
  };
}, Xy = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const o = t - e;
  return o === 0 ? (process.env.NODE_ENV !== "production" && nt(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / o;
}, il = 1, oC = (e, t, r = () => jn) => {
  const o = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return o.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return il;
  const i = 1 - Xy({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = o.maxPixelScroll * o.ease(i);
  return Math.ceil(a);
}, iC = (e, t, r) => {
  const o = r(), n = o.durationDampening.accelerateAt, i = o.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < n)
    return il;
  const m = Xy({
    startOfRange: n,
    endOfRange: s,
    current: u
  }), l = e * o.ease(m);
  return Math.ceil(l);
}, ap = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: n
}) => {
  const i = oC(e, t, n);
  return i === 0 ? 0 : o ? Math.max(iC(i, r, n), il) : i;
}, sp = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = nC(e, o, i);
  return t[o.end] < t[o.start] ? ap({
    distanceToEdge: t[o.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }) : -1 * ap({
    distanceToEdge: t[o.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
}, aC = ({
  container: e,
  subject: t,
  proposedScroll: r
}) => {
  const o = t.height > e.height, n = t.width > e.width;
  return !n && !o ? r : n && o ? null : {
    x: n ? 0 : r.x,
    y: o ? 0 : r.y
  };
};
const sC = Ey((e) => e === 0 ? 0 : e);
var Jy = ({
  dragStartTime: e,
  container: t,
  subject: r,
  center: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = {
    top: o.y - t.top,
    right: t.right - o.x,
    bottom: t.bottom - o.y,
    left: o.x - t.left
  }, s = sp({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Jc,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), c = sp({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Dy,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), u = sC({
    x: c,
    y: s
  });
  if (mr(u, ht))
    return null;
  const m = aC({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return m ? mr(m, ht) ? null : m : null;
};
const cC = Ey((e) => e === 0 ? 0 : e > 0 ? 1 : -1), al = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: o
  }) => {
    const n = Ct(t, o), i = {
      x: e(n.x, r.x),
      y: e(n.y, r.y)
    };
    return mr(i, ht) ? null : i;
  };
})(), Zy = ({
  max: e,
  current: t,
  change: r
}) => {
  const o = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, n = cC(r), i = al({
    max: o,
    current: t,
    change: n
  });
  return !i || n.x !== 0 && i.x === 0 || n.y !== 0 && i.y === 0;
}, sl = (e, t) => Zy({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), lC = (e, t) => {
  if (!sl(e, t))
    return null;
  const r = e.scroll.max, o = e.scroll.current;
  return al({
    current: o,
    max: r,
    change: t
  });
}, cl = (e, t) => {
  const r = e.frame;
  return r ? Zy({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, uC = (e, t) => {
  const r = e.frame;
  return !r || !cl(e, t) ? null : al({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var dC = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = Jy({
    dragStartTime: o,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return a && sl(e, a) ? a : null;
}, pC = ({
  droppable: e,
  subject: t,
  center: r,
  dragStartTime: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = e.frame;
  if (!a)
    return null;
  const s = Jy({
    dragStartTime: o,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return s && cl(e, s) ? s : null;
}, cp = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: o,
  scrollDroppable: n,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = dC({
      dragStartTime: t,
      viewport: l,
      subject: c,
      center: a,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (d) {
      o(d);
      return;
    }
  }
  const u = rC({
    center: a,
    destination: jt(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const m = pC({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  m && n(u.descriptor.id, m);
}, fC = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => jn
}) => {
  const o = Rn(e), n = Rn(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot fluid scroll if not dragging") : I());
    const {
      shouldUseTimeDampening: m,
      dragStartTime: l
    } = i;
    cp({
      state: u,
      scrollWindow: o,
      scrollDroppable: n,
      dragStartTime: l,
      shouldUseTimeDampening: m,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      so(), i && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot start auto scrolling when already started") : I());
      const m = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      cp({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: m,
        shouldUseTimeDampening: l
      }, co(), l && a(u);
    },
    stop: () => {
      i && (o.cancel(), n.cancel(), i = null);
    },
    scroll: a
  };
}, mC = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const o = (s, c) => {
    const u = Ct(s.current.client.selection, c);
    e({
      client: u
    });
  }, n = (s, c) => {
    if (!cl(s, c))
      return c;
    const u = uC(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const m = Ft(c, u);
    return t(s.descriptor.id, m), Ft(c, m);
  }, i = (s, c, u) => {
    if (!s || !sl(c, u))
      return u;
    const m = lC(c, u);
    if (!m)
      return r(u), null;
    const l = Ft(u, m);
    return r(l), Ft(u, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const u = jt(s.impact);
    u || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot perform a jump scroll when there is no destination") : I());
    const m = n(s.dimensions.droppables[u], c);
    if (!m)
      return;
    const l = s.viewport, d = i(s.isWindowScrollAllowed, l, m);
    d && o(s, d);
  };
}, gC = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: o
}) => {
  const n = fC({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: o
  }), i = mC({
    move: r,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(o().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          n.scroll(c);
          return;
        }
        c.scrollJumpRequest && i(c);
      }
    },
    start: n.start,
    stop: n.stop
  };
};
const pn = "data-rfd", fn = (() => {
  const e = `${pn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), hs = (() => {
  const e = `${pn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), bC = (() => {
  const e = `${pn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), lp = {
  contextId: `${pn}-scroll-container-context-id`
}, hC = (e) => (t) => `[${t}="${e}"]`, En = (e, t) => e.map((r) => {
  const o = r.styles[t];
  return o ? `${r.selector} { ${o} }` : "";
}).join(" "), yC = "pointer-events: none;";
var vC = (e) => {
  const t = hC(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(fn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: yC,
        dropAnimating: s
      }
    };
  })(), o = (() => {
    const s = `
      transition: ${Sn.outOfTheWay};
    `;
    return {
      selector: t(hs.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), n = {
    selector: t(bC.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, a = [o, r, n, {
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
    always: En(a, "always"),
    resting: En(a, "resting"),
    dragging: En(a, "dragging"),
    dropAnimating: En(a, "dropAnimating"),
    userCancel: En(a, "userCancel")
  };
};
const EC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var Wt = EC;
const Ci = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot find the head to append a style to") : I()), e;
}, up = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function xC(e, t) {
  const r = ye(() => vC(e), [e]), o = L(null), n = L(null), i = oe(bt((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot set dynamic style element if it is not set") : I()), d.textContent = l;
  }), []), a = oe((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot set dynamic style element if it is not set") : I()), d.textContent = l;
  }, []);
  Wt(() => {
    !o.current && !n.current || (process.env.NODE_ENV !== "production" ? I(!1, "style elements already mounted") : I());
    const l = up(t), d = up(t);
    return o.current = l, n.current = d, l.setAttribute(`${pn}-always`, e), d.setAttribute(`${pn}-dynamic`, e), Ci().appendChild(l), Ci().appendChild(d), a(r.always), i(r.resting), () => {
      const g = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot unmount ref as it is not set") : I()), Ci().removeChild(b), h.current = null;
      };
      g(o), g(n);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = oe(() => i(r.dragging), [i, r.dragging]), c = oe((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = oe(() => {
    n.current && i(r.resting);
  }, [i, r.resting]);
  return ye(() => ({
    dragging: s,
    dropping: c,
    resting: u
  }), [s, c, u]);
}
function Qy(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ev = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function lo(e) {
  return e instanceof ev(e).HTMLElement;
}
function tv(e, t) {
  const r = `[${fn.contextId}="${e}"]`, o = Qy(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && nt(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(fn.draggableId) === t);
  return n ? lo(n) ? n : (process.env.NODE_ENV !== "production" && nt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && nt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function OC(e) {
  const t = L({}), r = L(null), o = L(null), n = L(!1), i = oe(function(d, g) {
    const h = {
      id: d,
      focus: g
    };
    return t.current[d] = h, function() {
      const p = t.current;
      p[d] !== h && delete p[d];
    };
  }, []), a = oe(function(d) {
    const g = tv(e, d);
    g && g !== document.activeElement && g.focus();
  }, [e]), s = oe(function(d, g) {
    r.current === d && (r.current = g);
  }, []), c = oe(function() {
    o.current || n.current && (o.current = requestAnimationFrame(() => {
      o.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = oe(function(d) {
    r.current = null;
    const g = document.activeElement;
    g && g.getAttribute(fn.draggableId) === d && (r.current = d);
  }, []);
  return Wt(() => (n.current = !0, function() {
    n.current = !1;
    const d = o.current;
    d && cancelAnimationFrame(d);
  }), []), ye(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, u, c, s]);
}
function SC() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(l) {
    return t.push(l), function() {
      const g = t.indexOf(l);
      g !== -1 && t.splice(g, 1);
    };
  }
  function o(l) {
    t.length && t.forEach((d) => d(l));
  }
  function n(l) {
    return e.draggables[l] || null;
  }
  function i(l) {
    const d = n(l);
    return d || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot find draggable entry with id [${l}]`) : I()), d;
  }
  const a = {
    register: (l) => {
      e.draggables[l.descriptor.id] = l, o({
        type: "ADDITION",
        value: l
      });
    },
    update: (l, d) => {
      const g = e.draggables[d.descriptor.id];
      g && g.uniqueId === l.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[l.descriptor.id] = l);
    },
    unregister: (l) => {
      const d = l.descriptor.id, g = n(d);
      g && l.uniqueId === g.uniqueId && (delete e.draggables[d], e.droppables[l.descriptor.droppableId] && o({
        type: "REMOVAL",
        value: l
      }));
    },
    getById: i,
    findById: n,
    exists: (l) => !!n(l),
    getAllByType: (l) => Object.values(e.draggables).filter((d) => d.descriptor.type === l)
  };
  function s(l) {
    return e.droppables[l] || null;
  }
  function c(l) {
    const d = s(l);
    return d || (process.env.NODE_ENV !== "production" ? I(!1, `Cannot find droppable entry with id [${l}]`) : I()), d;
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
  function m() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: u,
    subscribe: r,
    clean: m
  };
}
function wC() {
  const e = ye(SC, []);
  return ne(() => function() {
    _.version.startsWith("16") || _.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var ll = _.createContext(null), Wn = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot find document.body") : I()), e;
};
const DC = {
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
var NC = DC;
const CC = (e) => `rfd-announcement-${e}`;
function _C(e) {
  const t = ye(() => CC(e), [e]), r = L(null);
  return ne(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), pr(i.style, NC), Wn().appendChild(i), function() {
      setTimeout(function() {
        const c = Wn();
        c.contains(i) && c.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), oe((n) => {
    const i = r.current;
    if (i) {
      i.textContent = n;
      return;
    }
    process.env.NODE_ENV !== "production" && nt(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${n}"
    `);
  }, []);
}
let IC = 0;
const rv = {
  separator: "::"
};
function PC(e, t = rv) {
  return ye(() => `${e}${t.separator}${IC++}`, [t.separator, e]);
}
function $C(e, t = rv) {
  const r = _.useId();
  return ye(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var ul = "useId" in _ ? $C : PC;
function AC({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function TC({
  contextId: e,
  text: t
}) {
  const r = ul("hidden-text", {
    separator: "-"
  }), o = ye(() => AC({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ne(function() {
    const i = document.createElement("div");
    return i.id = o, i.textContent = t, i.style.display = "none", Wn().appendChild(i), function() {
      const s = Wn();
      s.contains(i) && s.removeChild(i);
    };
  }, [o, t]), o;
}
var li = _.createContext(null), RC = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const VC = /(\d+)\.(\d+)\.(\d+)/, dp = (e) => {
  const t = VC.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? I(!1, `Unable to parse React version ${e}`) : I());
  const r = Number(t[1]), o = Number(t[2]), n = Number(t[3]);
  return {
    major: r,
    minor: o,
    patch: n,
    raw: e
  };
}, MC = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var LC = (e, t) => {
  const r = dp(e), o = dp(t);
  MC(r, o) || process.env.NODE_ENV !== "production" && nt(`
    React version: [${o.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const _i = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var BC = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && nt(`
      No <!doctype html> found.

      ${_i}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && nt(`
      Unexpected <!doctype> found: (${t.name})

      ${_i}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && nt(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${_i}
    `);
};
function dl(e) {
  process.env.NODE_ENV !== "production" && e();
}
function uo(e, t) {
  dl(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        ps(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function FC() {
  uo(() => {
    LC(RC.react, _.version), BC(document);
  }, []);
}
function pl(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function jC() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function o(a) {
    e && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot claim lock as it is already claimed") : I());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function n() {
    e || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot release lock when there is no lock") : I()), e = null;
  }
  function i() {
    e && (e.abandon(), n());
  }
  return {
    isClaimed: t,
    isActive: r,
    claim: o,
    release: n,
    tryAbandon: i
  };
}
function Gn(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const WC = 9, GC = 13, fl = 27, nv = 32, kC = 33, zC = 34, HC = 35, UC = 36, qC = 37, YC = 38, KC = 39, XC = 40, JC = {
  [GC]: !0,
  [WC]: !0
};
var ov = (e) => {
  JC[e.keyCode] && e.preventDefault();
};
const ZC = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((o) => `on${o}` in document) || e;
})();
var ui = ZC;
const iv = 0, pp = 5;
function QC(e, t) {
  return Math.abs(t.x - e.x) >= pp || Math.abs(t.y - e.y) >= pp;
}
const fp = {
  type: "IDLE"
};
function e_({
  cancel: e,
  completed: t,
  getPhase: r,
  setPhase: o
}) {
  return [{
    eventName: "mousemove",
    fn: (n) => {
      const {
        button: i,
        clientX: a,
        clientY: s
      } = n;
      if (i !== iv)
        return;
      const c = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        n.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot be IDLE") : I());
      const m = u.point;
      if (!QC(m, c))
        return;
      n.preventDefault();
      const l = u.actions.fluidLift(c);
      o({
        type: "DRAGGING",
        actions: l
      });
    }
  }, {
    eventName: "mouseup",
    fn: (n) => {
      const i = r();
      if (i.type !== "DRAGGING") {
        e();
        return;
      }
      n.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (n) => {
      r().type === "DRAGGING" && n.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (n) => {
      if (r().type === "PENDING") {
        e();
        return;
      }
      if (n.keyCode === fl) {
        n.preventDefault(), e();
        return;
      }
      ov(n);
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
    fn: (n) => {
      const i = r();
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? I(!1, "Unexpected phase") : I()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      n.preventDefault();
    }
  }, {
    eventName: ui,
    fn: e
  }];
}
function t_(e) {
  const t = L(fp), r = L(fr), o = ye(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== iv || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
        return;
      const d = e.findClosestDraggableId(l);
      if (!d)
        return;
      const g = e.tryGetLock(d, a, {
        sourceEvent: l
      });
      if (!g)
        return;
      l.preventDefault();
      const h = {
        x: l.clientX,
        y: l.clientY
      };
      r.current(), u(g, h);
    }
  }), [e]), n = ye(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (m) => {
      if (m.defaultPrevented)
        return;
      const l = e.findClosestDraggableId(m);
      if (!l)
        return;
      const d = e.findOptionsForDraggable(l);
      d && (d.shouldRespectForcePress || e.canGetLock(l) && m.preventDefault());
    }
  }), [e]), i = oe(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = Jt(window, [n, o], l);
  }, [n, o]), a = oe(() => {
    t.current.type !== "IDLE" && (t.current = fp, r.current(), i());
  }, [i]), s = oe(() => {
    const m = t.current;
    a(), m.type === "DRAGGING" && m.actions.cancel({
      shouldBlockNextClick: !0
    }), m.type === "PENDING" && m.actions.abort();
  }, [a]), c = oe(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = e_({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (g) => {
        t.current = g;
      }
    });
    r.current = Jt(window, d, l);
  }, [s, a]), u = oe(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? I(!1, "Expected to move from IDLE to PENDING drag") : I()), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  Wt(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function r_() {
}
const n_ = {
  [zC]: !0,
  [kC]: !0,
  [UC]: !0,
  [HC]: !0
};
function o_(e, t) {
  function r() {
    t(), e.cancel();
  }
  function o() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (n) => {
      if (n.keyCode === fl) {
        n.preventDefault(), r();
        return;
      }
      if (n.keyCode === nv) {
        n.preventDefault(), o();
        return;
      }
      if (n.keyCode === XC) {
        n.preventDefault(), e.moveDown();
        return;
      }
      if (n.keyCode === YC) {
        n.preventDefault(), e.moveUp();
        return;
      }
      if (n.keyCode === KC) {
        n.preventDefault(), e.moveRight();
        return;
      }
      if (n.keyCode === qC) {
        n.preventDefault(), e.moveLeft();
        return;
      }
      if (n_[n.keyCode]) {
        n.preventDefault();
        return;
      }
      ov(n);
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
    eventName: ui,
    fn: r
  }];
}
function i_(e) {
  const t = L(r_), r = ye(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== nv)
        return;
      const a = e.findClosestDraggableId(i);
      if (!a)
        return;
      const s = e.tryGetLock(a, m, {
        sourceEvent: i
      });
      if (!s)
        return;
      i.preventDefault();
      let c = !0;
      const u = s.snapLift();
      t.current();
      function m() {
        c || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot stop capturing a keyboard drag when not capturing") : I()), c = !1, t.current(), o();
      }
      t.current = Jt(window, o_(u, m), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), o = oe(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Jt(window, [r], i);
  }, [r]);
  Wt(function() {
    return o(), function() {
      t.current();
    };
  }, [o]);
}
const Ii = {
  type: "IDLE"
}, a_ = 120, s_ = 0.15;
function c_({
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
      r.keyCode === fl && r.preventDefault(), e();
    }
  }, {
    eventName: ui,
    fn: e
  }];
}
function l_({
  cancel: e,
  completed: t,
  getPhase: r
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (o) => {
      const n = r();
      if (n.type !== "DRAGGING") {
        e();
        return;
      }
      n.hasMoved = !0;
      const {
        clientX: i,
        clientY: a
      } = o.touches[0], s = {
        x: i,
        y: a
      };
      o.preventDefault(), n.actions.move(s);
    }
  }, {
    eventName: "touchend",
    fn: (o) => {
      const n = r();
      if (n.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), n.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (o) => {
      if (r().type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (o) => {
      const n = r();
      n.type === "IDLE" && (process.env.NODE_ENV, I());
      const i = o.touches[0];
      if (!i || !(i.force >= s_))
        return;
      const s = n.actions.shouldRespectForcePress();
      if (n.type === "PENDING") {
        s && e();
        return;
      }
      if (s) {
        if (n.hasMoved) {
          o.preventDefault();
          return;
        }
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: ui,
    fn: e
  }];
}
function u_(e) {
  const t = L(Ii), r = L(fr), o = oe(function() {
    return t.current;
  }, []), n = oe(function(g) {
    t.current = g;
  }, []), i = ye(() => ({
    eventName: "touchstart",
    fn: function(g) {
      if (g.defaultPrevented)
        return;
      const h = e.findClosestDraggableId(g);
      if (!h)
        return;
      const b = e.tryGetLock(h, s, {
        sourceEvent: g
      });
      if (!b)
        return;
      const p = g.touches[0], {
        clientX: x,
        clientY: w
      } = p, E = {
        x,
        y: w
      };
      r.current(), l(b, E);
    }
  }), [e]), a = oe(function() {
    const g = {
      capture: !0,
      passive: !1
    };
    r.current = Jt(window, [i], g);
  }, [i]), s = oe(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), n(Ii), r.current(), a());
  }, [a, n]), c = oe(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = oe(function() {
    const g = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: c,
      completed: s,
      getPhase: o
    }, b = Jt(window, l_(h), g), p = Jt(window, c_(h), g);
    r.current = function() {
      b(), p();
    };
  }, [c, o, s]), m = oe(function() {
    const g = o();
    g.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? I(!1, `Cannot start dragging from phase ${g.type}`) : I());
    const h = g.actions.fluidLift(g.point);
    n({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [o, n]), l = oe(function(g, h) {
    o().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? I(!1, "Expected to move from IDLE to PENDING drag") : I());
    const b = setTimeout(m, a_);
    n({
      type: "PENDING",
      point: h,
      actions: g,
      longPressTimerId: b
    }), u();
  }, [u, o, n, m]);
  Wt(function() {
    return a(), function() {
      r.current();
      const h = o();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), n(Ii));
    };
  }, [o, a, n]), Wt(function() {
    return Jt(window, [{
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
function d_(e) {
  dl(() => {
    const t = pl(e);
    uo(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot change the amount of sensor hooks after mounting") : I(!1));
    });
  });
}
const p_ = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function av(e, t) {
  if (t == null)
    return !1;
  if (p_.includes(t.tagName.toLowerCase()))
    return !0;
  const o = t.getAttribute("contenteditable");
  return o === "true" || o === "" ? !0 : t === e ? !1 : av(e, t.parentElement);
}
function f_(e, t) {
  const r = t.target;
  return lo(r) ? av(e, r) : !1;
}
var m_ = (e) => Qt(e.getBoundingClientRect()).center;
function g_(e) {
  return e instanceof ev(e).Element;
}
const b_ = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((o) => o in Element.prototype) || e;
})();
function sv(e, t) {
  return e == null ? null : e[b_](t) ? e : sv(e.parentElement, t);
}
function h_(e, t) {
  return e.closest ? e.closest(t) : sv(e, t);
}
function y_(e) {
  return `[${fn.contextId}="${e}"]`;
}
function v_(e, t) {
  const r = t.target;
  if (!g_(r))
    return process.env.NODE_ENV !== "production" && nt("event.target must be a Element"), null;
  const o = y_(e), n = h_(r, o);
  return n ? lo(n) ? n : (process.env.NODE_ENV !== "production" && nt("drag handle must be a HTMLElement"), null) : null;
}
function E_(e, t) {
  const r = v_(e, t);
  return r ? r.getAttribute(fn.draggableId) : null;
}
function x_(e, t) {
  const r = `[${hs.contextId}="${e}"]`, n = Qy(document, r).find((i) => i.getAttribute(hs.id) === t);
  return n ? lo(n) ? n : (process.env.NODE_ENV !== "production" && nt("Draggable element is not a HTMLElement"), null) : null;
}
function O_(e) {
  e.preventDefault();
}
function fo({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: o
}) {
  return r() ? e !== t ? (o && process.env.NODE_ENV !== "production" && nt(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (o && process.env.NODE_ENV !== "production" && nt(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function cv({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: o
}) {
  if (e.isClaimed())
    return !1;
  const n = r.draggable.findById(o);
  return n ? !(!n.options.isEnabled || !Ky(t.getState(), o)) : (process.env.NODE_ENV !== "production" && nt(`Unable to find draggable with id: ${o}`), !1);
}
function S_({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: o,
  draggableId: n,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!cv({
    lockAPI: e,
    store: r,
    registry: o,
    draggableId: n
  }))
    return null;
  const c = o.draggable.getById(n), u = x_(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && nt(`Unable to find draggable element with id: ${n}`), null;
  if (a && !c.options.canDragInteractiveElements && f_(u, a))
    return null;
  const m = e.claim(i || fr);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function g() {
    return e.isActive(m);
  }
  function h(f, v) {
    fo({
      expected: f,
      phase: l,
      isLockActive: g,
      shouldWarn: !0
    }) && r.dispatch(v());
  }
  const b = h.bind(null, "DRAGGING");
  function p(f) {
    function v() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (v(), process.env.NODE_ENV !== "production" ? I(!1, `Cannot lift in phase ${l}`) : I()), r.dispatch(Q0(f.liftActionArgs)), l = "DRAGGING";
    function D(C, R = {
      shouldBlockNextClick: !1
    }) {
      if (f.cleanup(), R.shouldBlockNextClick) {
        const $ = Jt(window, [{
          eventName: "click",
          fn: O_,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      v(), r.dispatch(Wy({
        reason: C
      }));
    }
    return {
      isActive: () => fo({
        expected: "DRAGGING",
        phase: l,
        isLockActive: g,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (C) => D("DROP", C),
      cancel: (C) => D("CANCEL", C),
      ...f.actions
    };
  }
  function x(f) {
    const v = Rn((C) => {
      b(() => jy({
        client: C
      }));
    });
    return {
      ...p({
        liftActionArgs: {
          id: n,
          clientSelection: f,
          movementMode: "FLUID"
        },
        cleanup: () => v.cancel(),
        actions: {
          move: v
        }
      }),
      move: v
    };
  }
  function w() {
    const f = {
      moveUp: () => b(cN),
      moveRight: () => b(uN),
      moveDown: () => b(lN),
      moveLeft: () => b(dN)
    };
    return p({
      liftActionArgs: {
        id: n,
        clientSelection: m_(u),
        movementMode: "SNAP"
      },
      cleanup: fr,
      actions: f
    });
  }
  function E() {
    fo({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: g,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => fo({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: g,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: x,
    snapLift: w,
    abort: E
  };
}
const w_ = [t_, i_, u_];
function D_({
  contextId: e,
  store: t,
  registry: r,
  customSensors: o,
  enableDefaultSensors: n
}) {
  const i = [...n ? w_ : [], ...o || []], a = Fe(() => jC())[0], s = oe(function(p, x) {
    Gn(p) && !Gn(x) && a.tryAbandon();
  }, [a]);
  Wt(function() {
    let p = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(p, w), p = w;
    });
  }, [a, t, s]), Wt(() => a.tryAbandon, [a.tryAbandon]);
  const c = oe((b) => cv({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = oe((b, p, x) => S_({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: p || null,
    sourceEvent: x && x.sourceEvent ? x.sourceEvent : null
  }), [e, a, r, t]), m = oe((b) => E_(e, b), [e]), l = oe((b) => {
    const p = r.draggable.findById(b);
    return p ? p.options : null;
  }, [r.draggable]), d = oe(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(rl()));
  }, [a, t]), g = oe(() => a.isClaimed(), [a]), h = ye(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: m,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: g
  }), [c, u, m, l, d, g]);
  d_(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const N_ = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    _.version.startsWith("16") || _.version.startsWith("17") ? r() : tr(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), C_ = (e) => ({
  ...jn,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...jn.durationDampening,
    ...e.autoScrollerOptions
  }
});
function xn(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? I(!1, "Could not find store from lazy ref") : I()), e.current;
}
function __(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: o,
    nonce: n,
    dragHandleUsageInstructions: i
  } = e, a = L(null);
  FC();
  const s = pl(e), c = oe(() => N_(s.current), [s]), u = oe(() => C_(s.current), [s]), m = _C(t), l = TC({
    contextId: t,
    text: i
  }), d = xC(t, n), g = oe(($) => {
    xn(a).dispatch($);
  }, []), h = ye(() => Sd({
    publishWhileDragging: tN,
    updateDroppableScroll: nN,
    updateDroppableIsEnabled: oN,
    updateDroppableIsCombineEnabled: iN,
    collectionStarting: rN
  }, g), [g]), b = wC(), p = ye(() => ZN(b, h), [b, h]), x = ye(() => gC({
    scrollWindow: QN,
    scrollDroppable: p.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Sd({
      move: jy
    }, g)
  }), [p.scrollDroppable, g, u]), w = OC(t), E = ye(() => YN({
    announce: m,
    autoScroller: x,
    dimensionMarshal: p,
    focusMarshal: w,
    getResponders: c,
    styleMarshal: d
  }), [m, x, p, w, c, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && nt("unexpected store change"), a.current = E;
  const y = oe(() => {
    const $ = xn(a);
    $.getState().phase !== "IDLE" && $.dispatch(rl());
  }, []), f = oe(() => {
    const $ = xn(a).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), v = ye(() => ({
    isDragging: f,
    tryAbort: y
  }), [f, y]);
  r(v);
  const D = oe(($) => Ky(xn(a).getState(), $), []), C = oe(() => Rr(xn(a).getState()), []), R = ye(() => ({
    marshal: p,
    focus: w,
    contextId: t,
    canLift: D,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, p, l, w, D, C, b]);
  return D_({
    contextId: t,
    store: E,
    registry: b,
    customSensors: o || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ne(() => y, [y]), _.createElement(li.Provider, {
    value: R
  }, _.createElement(DD, {
    context: ll,
    store: E
  }, e.children));
}
let I_ = 0;
function P_() {
  return ye(() => `${I_++}`, []);
}
function $_() {
  return _.useId();
}
var A_ = "useId" in _ ? $_ : P_;
function T_(e) {
  const t = A_(), r = e.dragHandleUsageInstructions || wo.dragHandleUsageInstructions;
  return _.createElement(WD, null, (o) => _.createElement(__, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: o,
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
const mp = {
  dragging: 5e3,
  dropAnimating: 4500
}, R_ = (e, t) => t ? Sn.drop(t.duration) : e ? Sn.snap : Sn.fluid, V_ = (e, t) => {
  if (e)
    return t ? Fn.opacity.drop : Fn.opacity.combining;
}, M_ = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function L_(e) {
  const r = e.dimension.client, {
    offset: o,
    combineWith: n,
    dropping: i
  } = e, a = !!n, s = M_(e), c = !!i, u = c ? gs.drop(o, a) : gs.moveTo(o);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: R_(s, i),
    transform: u,
    opacity: V_(a, c),
    zIndex: c ? mp.dropAnimating : mp.dragging,
    pointerEvents: "none"
  };
}
function B_(e) {
  return {
    transform: gs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function F_(e) {
  return e.type === "DRAGGING" ? L_(e) : B_(e);
}
function j_(e, t, r = ht) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = gy(n, o), a = Uo(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function W_(e) {
  const t = ul("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ye(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = oe((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot get dimension when no ref is set") : I()), j_(r, h, g);
  }, [r, n]), m = ye(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  Wt(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Wt(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var ml = _.createContext(null);
function lv(e) {
  e && lo(e) || (process.env.NODE_ENV !== "production" ? I(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : I());
}
function G_(e, t, r) {
  uo(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? I(!1, "Draggable requires a draggableId") : I(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? I(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : I(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? I(!1, `${o(n)} requires an integer index prop`) : I(!1)), e.mapped.type !== "DRAGGING" && (lv(r()), e.isEnabled && (tv(t, n) || (process.env.NODE_ENV !== "production" ? I(!1, `${o(n)} Unable to find drag handle`) : I(!1))));
  });
}
function k_(e) {
  dl(() => {
    const t = L(e);
    uo(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? I(!1, "Draggable isClone prop value changed during component life") : I(!1));
    }, [e]);
  });
}
function Ko(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? I(!1, "Could not find required context") : I()), t;
}
function z_(e) {
  e.preventDefault();
}
const H_ = (e) => {
  const t = L(null), r = oe((v = null) => {
    t.current = v;
  }, []), o = oe(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Ko(li), {
    type: s,
    droppableId: c
  } = Ko(ml), u = ye(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (G_(e, n, o), k_(b), !b) {
    const v = ye(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    W_(v);
  }
  const w = ye(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: z_
  } : null, [n, i, l, d]), E = oe((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = ye(() => {
    const v = F_(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = ye(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var U_ = H_, uv = (e, t) => e === t, dv = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const q_ = (e) => e.combine ? e.combine.draggableId : null, Y_ = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function K_() {
  const e = bt((n, i) => ({
    x: n,
    y: i
  })), t = bt((n, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: n,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = bt((n, i, a, s, c = null, u = null, m = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: u,
      mode: i,
      offset: n,
      dimension: a,
      forceShouldAnimate: m,
      snapshot: t(i, s, c, u, null)
    }
  }));
  return (n, i) => {
    if (Gn(n)) {
      if (n.critical.draggable.id !== i.draggableId)
        return null;
      const a = n.current.client.offset, s = n.dimensions.draggables[i.draggableId], c = jt(n.impact), u = Y_(n.impact), m = n.forceShouldAnimate;
      return r(e(a.x, a.y), n.movementMode, s, i.isClone, c, u, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const a = n.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = n.dimensions.draggables[i.draggableId], u = a.result, m = u.mode, l = dv(u), d = q_(u), h = {
        duration: n.dropDuration,
        curve: ol.drop,
        moveTo: n.newHomeClientOffset,
        opacity: d ? Fn.opacity.drop : null,
        scale: d ? Fn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: c,
          dropping: h,
          draggingOver: l,
          combineWith: d,
          mode: m,
          forceShouldAnimate: null,
          snapshot: t(m, s, l, d, h)
        }
      };
    }
    return null;
  };
}
function pv(e = null) {
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
const X_ = {
  mapped: {
    type: "SECONDARY",
    offset: ht,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: pv(null)
  }
};
function J_() {
  const e = bt((a, s) => ({
    x: a,
    y: s
  })), t = bt(pv), r = bt((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), o = (a) => a ? r(ht, a, !0) : null, n = (a, s, c, u) => {
    const m = c.displaced.visible[a], l = !!(u.inVirtualList && u.effected[a]), d = ai(c), g = d && d.draggableId === a ? s : null;
    if (!m) {
      if (!l)
        return o(g);
      if (c.displaced.invisible[a])
        return null;
      const p = gn(u.displacedBy.point), x = e(p.x, p.y);
      return r(x, g, !0);
    }
    if (l)
      return o(g);
    const h = c.displacedBy.point, b = e(h.x, h.y);
    return r(b, g, m.shouldAnimate);
  };
  return (a, s) => {
    if (Gn(a))
      return a.critical.draggable.id === s.draggableId ? null : n(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : n(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const Z_ = () => {
  const e = K_(), t = J_();
  return (o, n) => e(o, n) || t(o, n) || X_;
}, Q_ = {
  dropAnimationFinished: Gy
}, e1 = fy(Z_, Q_, null, {
  context: ll,
  areStatePropsEqual: uv
})(U_);
var t1 = e1;
function fv(e) {
  return Ko(ml).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(t1, e);
}
function r1(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, o = !!e.shouldRespectForcePress;
  return _.createElement(fv, pr({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: o
  }));
}
const gl = (e) => (t) => e === t, n1 = gl("scroll"), o1 = gl("auto"), i1 = gl("visible"), gp = (e, t) => t(e.overflowX) || t(e.overflowY), a1 = (e, t) => t(e.overflowX) && t(e.overflowY), mv = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return gp(r, n1) || gp(r, o1);
}, s1 = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Wn(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, I()), !mv(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return a1(o, i1) || process.env.NODE_ENV !== "production" && nt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, bl = (e) => e == null ? null : e === document.body ? s1() ? e : null : e === document.documentElement ? null : mv(e) ? e : bl(e.parentElement);
var c1 = (e) => {
  !e || !bl(e.parentElement) || process.env.NODE_ENV !== "production" && nt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ys = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const gv = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : gv(e.parentElement) : !1;
var l1 = (e) => {
  const t = bl(e), r = gv(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, u1 = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: d,
      client: g
    } = s, h = Uy({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: g.paddingBox.height,
      width: g.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: g,
      scrollSize: d,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: h,
        diff: {
          value: ht,
          displacement: ht
        }
      }
    };
  })(), u = n === "vertical" ? Jc : Dy, m = dn({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const d1 = (e, t) => {
  const r = by(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, c = qc({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Yc({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var p1 = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = d1(e, c), m = Uo(u, o), l = (() => {
    if (!c)
      return null;
    const g = by(c), h = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: g,
      page: Uo(g, o),
      scroll: ys(c),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return u1({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const f1 = {
  passive: !1
}, m1 = {
  passive: !0
};
var bp = (e) => e.shouldPublishImmediately ? f1 : m1;
const mo = (e) => e && e.env.closestScrollable || null;
function g1(e) {
  const t = L(null), r = Ko(li), o = ul("droppable"), {
    registry: n,
    marshal: i
  } = r, a = pl(e), s = ye(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = ye(() => bt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? I(!1, "Can only update scroll when dragging") : I());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = oe(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? ht : ys(y.env.closestScrollable);
  }, []), l = oe(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = ye(() => Rn(l), [l]), g = oe(() => {
    const y = t.current, f = mo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? I(!1, "Could not find scroll options while scrolling") : I()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = oe((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? I(!1, "Cannot collect a droppable while a drag is occurring") : I());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot collect without a droppable ref") : I());
    const C = l1(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = p1({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(lp.contextId, r.contextId), A.addEventListener("scroll", g, bp(R.scrollOptions)), process.env.NODE_ENV !== "production" && c1(A)), $;
  }, [r.contextId, s, g, a]), b = oe(() => {
    const y = t.current, f = mo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? I(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : I()), ys(f);
  }, []), p = oe(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot stop drag when no active drag") : I());
    const f = mo(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(lp.contextId), f.removeEventListener("scroll", g, bp(y.scrollOptions)));
  }, [g, d]), x = oe((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot scroll when there is no drag") : I());
    const v = mo(f);
    v || (process.env.NODE_ENV !== "production" ? I(!1, "Cannot scroll a droppable with no closest scrollable") : I()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = ye(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = ye(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Wt(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && nt("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Wt(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Wt(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Pi() {
}
const hp = {
  width: 0,
  height: 0,
  margin: YD
}, b1 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? hp : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, h1 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = b1({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? Sn.placeholder : null
  };
}, y1 = (e) => {
  const t = L(null), r = oe(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), Pi) : t.current ? Pi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Pi, [o, s, r]);
  const u = oe((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = h1({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var v1 = _.memo(y1);
function $i(e) {
  return typeof e == "boolean";
}
function Ai(e, t) {
  t.forEach((r) => r(e));
}
const E1 = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? I(!1, "A Droppable requires a droppableId prop") : I()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? I(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : I());
}, function({
  props: t
}) {
  $i(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? I(!1, "isDropDisabled must be a boolean") : I()), $i(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? I(!1, "isCombineEnabled must be a boolean") : I()), $i(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? I(!1, "ignoreContainerClipping must be a boolean") : I());
}, function({
  getDroppableRef: t
}) {
  lv(t());
}], x1 = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && nt(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], O1 = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? I(!1, "Must provide a clone render function (renderClone) for virtual lists") : I());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? I(!1, "Expected virtual list to not have a placeholder") : I());
}];
function S1(e) {
  uo(() => {
    Ai(e, E1), e.props.mode === "standard" && Ai(e, x1), e.props.mode === "virtual" && Ai(e, O1);
  });
}
class w1 extends _.PureComponent {
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
const D1 = (e) => {
  const t = yt(li);
  t || (process.env.NODE_ENV !== "production" ? I(!1, "Could not find app context") : I());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = oe(() => n.current, []), E = oe((P = null) => {
    n.current = P;
  }, []), y = oe(() => i.current, []), f = oe((P = null) => {
    i.current = P;
  }, []);
  S1({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = oe(() => {
    o() && p({
      maxScroll: Yy()
    });
  }, [o, p]);
  g1({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = ye(() => _.createElement(w1, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(v1, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = ye(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = ye(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(fv, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(ml.Provider, {
    value: $
  }, a(C, h), A());
};
var N1 = D1;
function C1() {
  return document.body || (process.env.NODE_ENV !== "production" ? I(!1, "document.body is not ready") : I()), document.body;
}
const yp = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: C1
}, bv = (e) => {
  let t = {
    ...e
  }, r;
  for (r in yp)
    e[r] === void 0 && (t = {
      ...t,
      [r]: yp[r]
    });
  return t;
}, Ti = (e, t) => e === t.droppable.type, vp = (e, t) => t.draggables[e.draggable.id], _1 = () => {
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
  }, r = bt((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), o = bt((i, a, s, c, u, m) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const h = m ? {
        render: m,
        dragging: r(u.descriptor)
      } : null, b = {
        isDraggingOver: s,
        draggingOverWith: s ? l : null,
        draggingFromThisWith: l,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: u.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: b,
        useClone: h
      };
    }
    if (!a)
      return t;
    if (!c)
      return e;
    const g = {
      isDraggingOver: s,
      draggingOverWith: l,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: u.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: g,
      useClone: null
    };
  });
  return (i, a) => {
    const s = bv(a), c = s.droppableId, u = s.type, m = !s.isDropDisabled, l = s.renderClone;
    if (Gn(i)) {
      const d = i.critical;
      if (!Ti(u, d))
        return t;
      const g = vp(d, i.dimensions), h = jt(i.impact) === c;
      return o(c, m, h, h, g, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!Ti(u, d.critical))
        return t;
      const g = vp(d.critical, i.dimensions);
      return o(c, m, dv(d.result) === c, jt(d.impact) === c, g, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!Ti(u, d.critical))
        return t;
      const g = jt(d.impact) === c, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return g ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, I1 = {
  updateViewportMaxScroll: sN
}, P1 = fy(_1, I1, (e, t, r) => ({
  ...bv(r),
  ...e,
  ...t
}), {
  context: ll,
  areStatePropsEqual: uv
})(N1);
var $1 = P1;
const T2 = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: o,
  isDragDisabled: n = !0,
  isLoading: i,
  onRowClick: a,
  itemClickKey: s,
  haveLinks: c,
  className: u
}) => {
  const [m, l] = Fe(null), [d, g] = Fe(e);
  ne(() => {
    g(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (x) => {
    a == null || a(x), l(x);
  }, p = (x) => {
    if (!x.destination || !(d != null && d.length)) return;
    const w = x.source.index, E = x.destination.index, y = [...d], [f] = y.splice(w, 1);
    y.splice(E, 0, f), g(y);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ gt("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ Q("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ Q("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ Q(Fh, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ Q(Kh, { className: u, children: /* @__PURE__ */ Q("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ Q("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ Q(T_, { onDragEnd: p, children: /* @__PURE__ */ Q($1, { droppableId: "dropArray", direction: "vertical", children: (x) => /* @__PURE__ */ gt("table", { className: "w-full", children: [
    /* @__PURE__ */ Q("thead", { children: /* @__PURE__ */ Q("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((w, E) => /* @__PURE__ */ Q(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          o === w.name.find((y) => y) ? `-${w.name.find((y) => y) ?? ""}` : w.name.find((y) => y) ?? ""
        ),
        className: `${o && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${o === w.name.find((y) => y) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: w.title
      },
      E
    )) }) }),
    /* @__PURE__ */ gt(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...x.droppableProps,
        ref: x.innerRef,
        children: [
          d == null ? void 0 : d.map((w, E) => {
            var y;
            return /* @__PURE__ */ Q(
              r1,
              {
                isDragDisabled: n,
                draggableId: (y = w == null ? void 0 : w.id) == null ? void 0 : y.toString(),
                index: E,
                children: (f) => {
                  const v = {
                    ...f.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ Q(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${m === d[E] && h}`,
                      onClick: () => b(
                        s ? w[s] : w.id
                      ),
                      ref: f.innerRef,
                      ...f.draggableProps,
                      ...f.dragHandleProps,
                      style: v,
                      children: t.map((D, C) => {
                        var $;
                        let R = ($ = D == null ? void 0 : D.name) == null ? void 0 : $.reduce(
                          (A, P) => A == null ? void 0 : A[P],
                          d == null ? void 0 : d[E]
                        );
                        return /* @__PURE__ */ Q(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: D.transform ? D.transform(R, E) : R
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
}, R2 = ({ className: e, field: t, fieldState: r, ...o }) => /* @__PURE__ */ Q(
  "textarea",
  {
    ...t,
    ...o,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), A1 = ({ name: e, className: t, ...r }) => /* @__PURE__ */ Q(
  "svg",
  {
    className: `transition-all duration-300 text-dark-gray ${t}`,
    fill: "currentColor",
    ...r,
    children: /* @__PURE__ */ Q(
      "use",
      {
        className: "w-full h-full object-contain",
        href: `/icons/sprite.svg#${e}`
      }
    )
  }
), T1 = ({ style: e, text: t }) => /* @__PURE__ */ gt("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ Q("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ Q("span", { className: "text-base", children: t })
] });
var Ep;
(function(e) {
  e.event = "event", e.props = "prop";
})(Ep || (Ep = {}));
var Ri = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Ri(), "" + Ri();
function R1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0 ? function(o) {
    return o;
  } : t.length === 1 ? t[0] : t.reduce(function(o, n) {
    return function() {
      return o(n.apply(void 0, arguments));
    };
  });
}
function V1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vs = { exports: {} }, Vi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp;
function M1() {
  if (xp) return Vi;
  xp = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Vi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Vi;
}
var Op = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp;
function L1() {
  return Sp || (Sp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Op.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Op;
}
process.env.NODE_ENV === "production" ? vs.exports = M1() : vs.exports = L1();
var hl = vs.exports, Mi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp;
function B1() {
  if (wp) return Mi;
  wp = 1;
  var e = _, t = hl;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Mi.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Mi;
}
var Dp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Np;
function F1() {
  return Np || (Np = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = hl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Dp.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Dp;
}
process.env.NODE_ENV === "production" ? B1() : F1();
function j1(e) {
  e();
}
let hv = j1;
const W1 = (e) => hv = e, G1 = () => hv, Cp = Symbol.for("react-redux-context"), _p = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function k1() {
  var e;
  if (!N.createContext) return {};
  const t = (e = _p[Cp]) != null ? e : _p[Cp] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const z1 = /* @__PURE__ */ k1(), H1 = () => {
  throw new Error("uSES not initialized!");
};
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, rn.apply(null, arguments);
}
function yv(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Es = { exports: {} }, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;
function U1() {
  if (Ip) return Se;
  Ip = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return Se.AsyncMode = c, Se.ConcurrentMode = u, Se.ContextConsumer = s, Se.ContextProvider = a, Se.Element = t, Se.ForwardRef = m, Se.Fragment = o, Se.Lazy = h, Se.Memo = g, Se.Portal = r, Se.Profiler = i, Se.StrictMode = n, Se.Suspense = l, Se.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, Se.isConcurrentMode = y, Se.isContextConsumer = function(f) {
    return E(f) === s;
  }, Se.isContextProvider = function(f) {
    return E(f) === a;
  }, Se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, Se.isForwardRef = function(f) {
    return E(f) === m;
  }, Se.isFragment = function(f) {
    return E(f) === o;
  }, Se.isLazy = function(f) {
    return E(f) === h;
  }, Se.isMemo = function(f) {
    return E(f) === g;
  }, Se.isPortal = function(f) {
    return E(f) === r;
  }, Se.isProfiler = function(f) {
    return E(f) === i;
  }, Se.isStrictMode = function(f) {
    return E(f) === n;
  }, Se.isSuspense = function(f) {
    return E(f) === l;
  }, Se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, Se.typeOf = E, Se;
}
var je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp;
function q1() {
  return Pp || (Pp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    je.AsyncMode = f, je.ConcurrentMode = v, je.ContextConsumer = D, je.ContextProvider = C, je.Element = R, je.ForwardRef = $, je.Fragment = A, je.Lazy = P, je.Memo = T, je.Portal = j, je.Profiler = k, je.StrictMode = V, je.Suspense = W, je.isAsyncMode = G, je.isConcurrentMode = z, je.isContextConsumer = B, je.isContextProvider = q, je.isElement = Y, je.isForwardRef = K, je.isFragment = Z, je.isLazy = re, je.isMemo = U, je.isPortal = X, je.isProfiler = M, je.isStrictMode = J, je.isSuspense = be, je.isValidElementType = E, je.typeOf = y;
  }()), je;
}
process.env.NODE_ENV === "production" ? Es.exports = U1() : Es.exports = q1();
var Y1 = Es.exports, yl = Y1, K1 = {
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
}, X1 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, J1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vl = {};
vl[yl.ForwardRef] = J1;
vl[yl.Memo] = vv;
function $p(e) {
  return yl.isMemo(e) ? vv : vl[e.$$typeof] || K1;
}
var Z1 = Object.defineProperty, Q1 = Object.getOwnPropertyNames, Ap = Object.getOwnPropertySymbols, eI = Object.getOwnPropertyDescriptor, tI = Object.getPrototypeOf, Tp = Object.prototype;
function Ev(e, t, r) {
  if (typeof t != "string") {
    if (Tp) {
      var o = tI(t);
      o && o !== Tp && Ev(e, o, r);
    }
    var n = Q1(t);
    Ap && (n = n.concat(Ap(t)));
    for (var i = $p(e), a = $p(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!X1[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = eI(t, c);
        try {
          Z1(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var rI = Ev;
const Rp = /* @__PURE__ */ V1(rI);
var xs = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vp;
function nI() {
  if (Vp) return we;
  Vp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return we.ContextConsumer = a, we.ContextProvider = i, we.Element = e, we.ForwardRef = c, we.Fragment = r, we.Lazy = d, we.Memo = l, we.Portal = t, we.Profiler = n, we.StrictMode = o, we.Suspense = u, we.SuspenseList = m, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(p) {
    return b(p) === a;
  }, we.isContextProvider = function(p) {
    return b(p) === i;
  }, we.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, we.isForwardRef = function(p) {
    return b(p) === c;
  }, we.isFragment = function(p) {
    return b(p) === r;
  }, we.isLazy = function(p) {
    return b(p) === d;
  }, we.isMemo = function(p) {
    return b(p) === l;
  }, we.isPortal = function(p) {
    return b(p) === t;
  }, we.isProfiler = function(p) {
    return b(p) === n;
  }, we.isStrictMode = function(p) {
    return b(p) === o;
  }, we.isSuspense = function(p) {
    return b(p) === u;
  }, we.isSuspenseList = function(p) {
    return b(p) === m;
  }, we.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, we.typeOf = b, we;
}
var We = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mp;
function oI() {
  return Mp || (Mp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    We.ContextConsumer = v, We.ContextProvider = D, We.Element = C, We.ForwardRef = R, We.Fragment = $, We.Lazy = A, We.Memo = P, We.Portal = T, We.Profiler = j, We.StrictMode = k, We.Suspense = V, We.SuspenseList = W, We.isAsyncMode = z, We.isConcurrentMode = B, We.isContextConsumer = q, We.isContextProvider = Y, We.isElement = K, We.isForwardRef = Z, We.isFragment = re, We.isLazy = U, We.isMemo = X, We.isPortal = M, We.isProfiler = J, We.isStrictMode = be, We.isSuspense = O, We.isSuspenseList = te, We.isValidElementType = y, We.typeOf = f;
  }()), We;
}
process.env.NODE_ENV === "production" ? xs.exports = nI() : xs.exports = oI();
var Lp = xs.exports;
function El(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Li(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || El(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function iI(e, t, r) {
  Li(e, "mapStateToProps"), Li(t, "mapDispatchToProps"), Li(r, "mergeProps");
}
const aI = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function sI(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function cI(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = yv(t, aI);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && iI(a, s, c), sI(a, s, c, e, i);
}
function lI(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function uI(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function xv(e, t, r) {
  uI(e) || El(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Os(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Bp(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ov(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Bp(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Bp(s), s = n(i, a)), process.env.NODE_ENV !== "production" && xv(s, o, t), s;
    }, n;
  };
}
function xl(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function dI(e) {
  return e && typeof e == "object" ? Os((t) => (
    // @ts-ignore
    lI(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ov(e, "mapDispatchToProps")
  ) : xl(e, "mapDispatchToProps") : Os((t) => ({
    dispatch: t
  }));
}
function pI(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ov(e, "mapStateToProps")
  ) : xl(e, "mapStateToProps") : Os(() => ({}));
}
function fI(e, t, r) {
  return rn({}, r, e, t);
}
function mI(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && xv(i, r, "mergeProps")), i;
    };
  };
}
function gI(e) {
  return e ? typeof e == "function" ? mI(e) : xl(e, "mergeProps") : () => fI;
}
function bI() {
  const e = G1();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Fp = {
  notify() {
  },
  get: () => []
};
function hI(e, t) {
  let r, o = Fp, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = bI());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Fp);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const yI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ss = yI ? N.useLayoutEffect : N.useEffect;
function jp(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Bi(e, t) {
  if (jp(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !jp(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const vI = ["reactReduxForwardedRef"];
let Sv = H1;
const EI = (e) => {
  Sv = e;
}, xI = [null, null], OI = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function SI(e, t, r) {
  Ss(() => e(...t), r);
}
function wI(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function DI(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function NI(e, t) {
  return e === t;
}
let Wp = !1;
function wv(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = NI,
  areOwnPropsEqual: i = Bi,
  areStatePropsEqual: a = Bi,
  areMergedPropsEqual: s = Bi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = z1
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Wp && (Wp = !0, El('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = pI(e), d = dI(t), g = gI(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Lp.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${OI(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = yv(f, vI);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Lp.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => cI(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return xI;
        const M = hI(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : rn({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Ss(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? DI(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      SI(wI, [z, G, q, C, B, W]);
      let U;
      try {
        U = Sv(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Ss(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, rn({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, rn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Rp(f, b);
    }
    return Rp(y, b);
  };
}
EI(hl.useSyncExternalStore);
W1(ar);
function CI(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Dv(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && CI(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function _I(e, t) {
  return Dv(function() {
    return e;
  }, t);
}
var vt = Dv, st = _I, II = process.env.NODE_ENV === "production", Fi = "Invariant failed";
function Gp(e, t) {
  if (II)
    throw new Error(Fi);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Fi, ": ").concat(r) : Fi;
  throw new Error(o);
}
var qr = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, Nv = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, kp = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, PI = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, ji = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ol = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ji : r, n = e.border, i = n === void 0 ? ji : n, a = e.padding, s = a === void 0 ? ji : a, c = qr(Nv(t, o)), u = qr(kp(t, i)), m = qr(kp(u, s));
  return {
    marginBox: c,
    borderBox: qr(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, kt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Gp(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Gp()), o;
}, $I = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, AI = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = PI(r, t);
  return Ol({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ws = function(e, t) {
  return t === void 0 && (t = $I()), AI(e, t);
}, Cv = function(e, t) {
  var r = {
    top: kt(t.marginTop),
    right: kt(t.marginRight),
    bottom: kt(t.marginBottom),
    left: kt(t.marginLeft)
  }, o = {
    top: kt(t.paddingTop),
    right: kt(t.paddingRight),
    bottom: kt(t.paddingBottom),
    left: kt(t.paddingLeft)
  }, n = {
    top: kt(t.borderTopWidth),
    right: kt(t.borderRightWidth),
    bottom: kt(t.borderBottomWidth),
    left: kt(t.borderLeftWidth)
  };
  return Ol({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, _v = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Cv(t, r);
}, zp = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function TI(e, t) {
  return !!(e === t || zp(e) && zp(t));
}
function RI(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!TI(e[r], t[r]))
      return !1;
  return !0;
}
function _t(e, t) {
  t === void 0 && (t = RI);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var VI = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const MI = process.env.NODE_ENV === "production", LI = /[ \t]{2,}/g, BI = /^[ \t]*/gm, Hp = (e) => e.replace(LI, " ").replace(BI, "").trim(), FI = (e) => Hp(`
  %c@hello-pangea/dnd

  %c${Hp(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), jI = (e) => [FI(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], WI = "__@hello-pangea/dnd-disable-dev-warnings";
function Iv(e, t) {
  MI || typeof window < "u" && window[WI] || console[e](...jI(t));
}
const gr = Iv.bind(null, "warn"), Ds = Iv.bind(null, "error");
function GI() {
}
function kI(e, t) {
  return {
    ...e,
    ...t
  };
}
function zI(e, t, r) {
  const o = t.map((n) => {
    const i = kI(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const HI = process.env.NODE_ENV === "production", Up = "Invariant failed";
class kn extends Error {
}
kn.prototype.toString = function() {
  return this.message;
};
function ae(e, t) {
  throw HI ? new kn(Up) : new kn(`${Up}: ${t || ""}`);
}
class V2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = GI, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && gr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof kn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ds(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = zI(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof kn) {
      process.env.NODE_ENV !== "production" && Ds(t.message), this.setState({});
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
const Br = {
  x: 0,
  y: 0
}, UI = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), qI = (e, t) => e.x === t.x && e.y === t.y, YI = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), KI = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var XI = (e, t) => {
  const r = qr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const JI = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), ZI = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, QI = (e, t) => t ? JI(e, t.scroll.diff.displacement) : e, eP = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, tP = (e, t) => t && t.shouldClipSubject ? XI(t.pageMarginBox, e) : qr(e);
var rP = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = QI(e.marginBox, o), i = eP(n, r, t), a = tP(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
_t((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
_t((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const nP = _t((e) => Object.values(e)), oP = _t((e) => Object.values(e));
_t((e, t) => oP(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function iP(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
_t((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const aP = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, sP = {
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
_t(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: KI(e.line, r)
  };
});
var Do = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const cP = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), lP = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Sl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, zn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, uP = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Dr = `${uP.outOfTheWay}s ${Sl.outOfTheWay}`, No = {
  fluid: `opacity ${Dr}`,
  snap: `transform ${Dr}, opacity ${Dr}`,
  drop: (e) => {
    const t = `${e}s ${Sl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Dr}`,
  placeholder: `height ${Dr}, width ${Dr}, margin ${Dr}`
}, qp = (e) => qI(e, Br) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ns = {
  moveTo: qp,
  drop: (e, t) => {
    const r = qp(e);
    if (r)
      return t ? `${r} scale(${zn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Pv = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = UI({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, dP = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.documentElement") : ae()), e;
}, pP = () => {
  const e = dP();
  return Pv({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
_t((e) => nP(e).filter((t) => !(!t.isEnabled || !t.frame)));
const $v = "data-rfd", Yp = (() => {
  const e = `${$v}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Kp = {
  contextId: `${$v}-scroll-container-context-id`
}, fP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var wn = fP;
function mP(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var gP = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Av(e) {
  return e instanceof gP(e).HTMLElement;
}
function bP(e, t) {
  const r = `[${Yp.contextId}="${e}"]`, o = mP(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && gr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Yp.draggableId) === t);
  return n ? Av(n) ? n : (process.env.NODE_ENV !== "production" && gr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && gr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Tv = _.createContext(null), hP = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.body") : ae()), e;
};
let yP = 0;
const Rv = {
  separator: "::"
};
function vP(e, t = Rv) {
  return vt(() => `${e}${t.separator}${yP++}`, [t.separator, e]);
}
function EP(e, t = Rv) {
  const r = _.useId();
  return vt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Vv = "useId" in _ ? EP : vP, wl = _.createContext(null);
function Mv(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Dl(e, t) {
  Mv(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        Ds(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function xP(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function Nl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Xp = {
  dragging: 5e3,
  dropAnimating: 4500
}, OP = (e, t) => t ? No.drop(t.duration) : e ? No.snap : No.fluid, SP = (e, t) => {
  if (e)
    return t ? zn.opacity.drop : zn.opacity.combining;
}, wP = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function DP(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = wP(e), s = !!n, c = s ? Ns.drop(r, i) : Ns.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: OP(a, n),
    transform: c,
    opacity: SP(i, s),
    zIndex: s ? Xp.dropAnimating : Xp.dragging,
    pointerEvents: "none"
  };
}
function NP(e) {
  return {
    transform: Ns.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function CP(e) {
  return e.type === "DRAGGING" ? DP(e) : NP(e);
}
function _P(e, t, r = Br) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Cv(n, o), a = ws(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function IP(e) {
  const t = Vv("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = vt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = st((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot get dimension when no ref is set") : ae()), _P(r, h, g);
  }, [r, n]), m = vt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  wn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), wn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Cl = _.createContext(null);
function Lv(e) {
  e && Av(e) || (process.env.NODE_ENV !== "production" ? ae(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ae());
}
function PP(e, t, r) {
  Dl(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable requires a draggableId") : ae(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ae(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} requires an integer index prop`) : ae(!1)), e.mapped.type !== "DRAGGING" && (Lv(r()), e.isEnabled && (bP(t, n) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} Unable to find drag handle`) : ae(!1))));
  });
}
function $P(e) {
  Mv(() => {
    const t = L(e);
    Dl(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable isClone prop value changed during component life") : ae(!1));
    }, [e]);
  });
}
function Xo(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find required context") : ae()), t;
}
function AP(e) {
  e.preventDefault();
}
const TP = (e) => {
  const t = L(null), r = st((v = null) => {
    t.current = v;
  }, []), o = st(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Xo(wl), {
    type: s,
    droppableId: c
  } = Xo(Cl), u = vt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (PP(e, n, o), $P(b), !b) {
    const v = vt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    IP(v);
  }
  const w = vt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: AP
  } : null, [n, i, l, d]), E = st((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = vt(() => {
    const v = CP(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = vt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var RP = TP, Bv = (e, t) => e === t, Fv = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const VP = (e) => e.combine ? e.combine.draggableId : null, MP = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function LP() {
  const e = _t((o, n) => ({
    x: o,
    y: n
  })), t = _t((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = _t((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Nl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Do(o.impact), c = MP(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = Fv(c), l = VP(c), d = {
        duration: o.dropDuration,
        curve: Sl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? zn.opacity.drop : null,
        scale: l ? zn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function jv(e = null) {
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
const BP = {
  mapped: {
    type: "SECONDARY",
    offset: Br,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: jv(null)
  }
};
function FP() {
  const e = _t((i, a) => ({
    x: i,
    y: a
  })), t = _t(jv), r = _t((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Br, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = iP(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = YI(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Nl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const jP = () => {
  const e = LP(), t = FP();
  return (r, o) => e(r, o) || t(r, o) || BP;
}, WP = {
  dropAnimationFinished: lP
}, GP = wv(jP, WP, null, {
  context: Tv,
  areStatePropsEqual: Bv
})(RP);
var kP = GP;
function zP(e) {
  return Xo(Cl).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(kP, e);
}
const _l = (e) => (t) => e === t, HP = _l("scroll"), UP = _l("auto"), qP = _l("visible"), Jp = (e, t) => t(e.overflowX) || t(e.overflowY), YP = (e, t) => t(e.overflowX) && t(e.overflowY), Wv = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Jp(r, HP) || Jp(r, UP);
}, KP = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = hP(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ae()), !Wv(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return YP(o, qP) || process.env.NODE_ENV !== "production" && gr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Il = (e) => e == null ? null : e === document.body ? KP() ? e : null : e === document.documentElement ? null : Wv(e) ? e : Il(e.parentElement);
var XP = (e) => {
  !e || !Il(e.parentElement) || process.env.NODE_ENV !== "production" && gr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Cs = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Gv = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Gv(e.parentElement) : !1;
var JP = (e) => {
  const t = Il(e), r = Gv(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, ZP = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = Pv({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Br,
          displacement: Br
        }
      }
    };
  })(), u = n === "vertical" ? aP : sP, m = rP({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const QP = (e, t) => {
  const r = _v(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Nv({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Ol({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var e$ = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = QP(e, c), m = ws(u, o), l = (() => {
    if (!c)
      return null;
    const d = _v(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: ws(d, o),
      scroll: Cs(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return ZP({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const t$ = {
  passive: !1
}, r$ = {
  passive: !0
};
var Zp = (e) => e.shouldPublishImmediately ? t$ : r$;
const go = (e) => e && e.env.closestScrollable || null;
function n$(e) {
  const t = L(null), r = Xo(wl), o = Vv("droppable"), {
    registry: n,
    marshal: i
  } = r, a = xP(e), s = vt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = vt(() => _t((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only update scroll when dragging") : ae());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = st(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Br : Cs(y.env.closestScrollable);
  }, []), l = st(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = vt(() => VI(l), [l]), g = st(() => {
    const y = t.current, f = go(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find scroll options while scrolling") : ae()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = st((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect a droppable while a drag is occurring") : ae());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect without a droppable ref") : ae());
    const C = JP(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = e$({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Kp.contextId, r.contextId), A.addEventListener("scroll", g, Zp(R.scrollOptions)), process.env.NODE_ENV !== "production" && XP(A)), $;
  }, [r.contextId, s, g, a]), b = st(() => {
    const y = t.current, f = go(y);
    return y && f || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ae()), Cs(f);
  }, []), p = st(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot stop drag when no active drag") : ae());
    const f = go(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(Kp.contextId), f.removeEventListener("scroll", g, Zp(y.scrollOptions)));
  }, [g, d]), x = st((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll when there is no drag") : ae());
    const v = go(f);
    v || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll a droppable with no closest scrollable") : ae()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = vt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = vt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  wn(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && gr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), wn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), wn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Wi() {
}
const o$ = {
  width: 0,
  height: 0,
  margin: ZI
}, i$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? o$ : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, a$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = i$({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? No.placeholder : null
  };
}, s$ = (e) => {
  const t = L(null), r = st(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), Wi) : t.current ? Wi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Wi, [o, s, r]);
  const u = st((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = a$({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var c$ = _.memo(s$);
function Gi(e) {
  return typeof e == "boolean";
}
function ki(e, t) {
  t.forEach((r) => r(e));
}
const l$ = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ae(!1, "A Droppable requires a droppableId prop") : ae()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ae());
}, function({
  props: e
}) {
  Gi(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isDropDisabled must be a boolean") : ae()), Gi(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isCombineEnabled must be a boolean") : ae()), Gi(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ae(!1, "ignoreContainerClipping must be a boolean") : ae());
}, function({
  getDroppableRef: e
}) {
  Lv(e());
}], u$ = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && gr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], d$ = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ae(!1, "Must provide a clone render function (renderClone) for virtual lists") : ae());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ae(!1, "Expected virtual list to not have a placeholder") : ae());
}];
function p$(e) {
  Dl(() => {
    ki(e, l$), e.props.mode === "standard" && ki(e, u$), e.props.mode === "virtual" && ki(e, d$);
  });
}
class f$ extends _.PureComponent {
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
const m$ = (e) => {
  const t = yt(wl);
  t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find app context") : ae());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = st(() => n.current, []), E = st((P = null) => {
    n.current = P;
  }, []), y = st(() => i.current, []), f = st((P = null) => {
    i.current = P;
  }, []);
  p$({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = st(() => {
    o() && p({
      maxScroll: pP()
    });
  }, [o, p]);
  n$({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = vt(() => _.createElement(f$, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(c$, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = vt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = vt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(zP, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(Cl.Provider, {
    value: $
  }, a(C, h), A());
};
var g$ = m$;
function b$() {
  return document.body || (process.env.NODE_ENV !== "production" ? ae(!1, "document.body is not ready") : ae()), document.body;
}
const Qp = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: b$
}, kv = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Qp)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Qp[r]
    });
  return t;
}, zi = (e, t) => e === t.droppable.type, ef = (e, t) => t.draggables[e.draggable.id], h$ = () => {
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
  }, r = _t((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = _t((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = kv(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Nl(n)) {
      const l = n.critical;
      if (!zi(c, l))
        return t;
      const d = ef(l, n.dimensions), g = Do(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!zi(c, l.critical))
        return t;
      const d = ef(l.critical, n.dimensions);
      return o(s, u, Fv(l.result) === s, Do(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!zi(c, l.critical))
        return t;
      const d = Do(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, y$ = {
  updateViewportMaxScroll: cP
};
wv(h$, y$, (e, t, r) => ({
  ...kv(r),
  ...e,
  ...t
}), {
  context: Tv,
  areStatePropsEqual: Bv
})(g$);
var tf;
(function(e) {
  e.event = "event", e.props = "prop";
})(tf || (tf = {}));
var rf = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + rf(), "" + rf();
function v$(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _s = { exports: {} }, Hi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function E$() {
  if (nf) return Hi;
  nf = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Hi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Hi;
}
var of = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af;
function x$() {
  return af || (af = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    of.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), of;
}
process.env.NODE_ENV === "production" ? _s.exports = E$() : _s.exports = x$();
var Pl = _s.exports, Ui = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function O$() {
  if (sf) return Ui;
  sf = 1;
  var e = _, t = Pl;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Ui.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Ui;
}
var cf = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function S$() {
  return lf || (lf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Pl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    cf.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), cf;
}
process.env.NODE_ENV === "production" ? O$() : S$();
function w$(e) {
  e();
}
let zv = w$;
const D$ = (e) => zv = e, N$ = () => zv, uf = Symbol.for("react-redux-context"), df = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function C$() {
  var e;
  if (!N.createContext) return {};
  const t = (e = df[uf]) != null ? e : df[uf] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const _$ = /* @__PURE__ */ C$(), I$ = () => {
  throw new Error("uSES not initialized!");
};
function nn() {
  return nn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, nn.apply(null, arguments);
}
function Hv(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Is = { exports: {} }, De = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pf;
function P$() {
  if (pf) return De;
  pf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return De.AsyncMode = c, De.ConcurrentMode = u, De.ContextConsumer = s, De.ContextProvider = a, De.Element = t, De.ForwardRef = m, De.Fragment = o, De.Lazy = h, De.Memo = g, De.Portal = r, De.Profiler = i, De.StrictMode = n, De.Suspense = l, De.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, De.isConcurrentMode = y, De.isContextConsumer = function(f) {
    return E(f) === s;
  }, De.isContextProvider = function(f) {
    return E(f) === a;
  }, De.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, De.isForwardRef = function(f) {
    return E(f) === m;
  }, De.isFragment = function(f) {
    return E(f) === o;
  }, De.isLazy = function(f) {
    return E(f) === h;
  }, De.isMemo = function(f) {
    return E(f) === g;
  }, De.isPortal = function(f) {
    return E(f) === r;
  }, De.isProfiler = function(f) {
    return E(f) === i;
  }, De.isStrictMode = function(f) {
    return E(f) === n;
  }, De.isSuspense = function(f) {
    return E(f) === l;
  }, De.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, De.typeOf = E, De;
}
var Ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff;
function $$() {
  return ff || (ff = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Ge.AsyncMode = f, Ge.ConcurrentMode = v, Ge.ContextConsumer = D, Ge.ContextProvider = C, Ge.Element = R, Ge.ForwardRef = $, Ge.Fragment = A, Ge.Lazy = P, Ge.Memo = T, Ge.Portal = j, Ge.Profiler = k, Ge.StrictMode = V, Ge.Suspense = W, Ge.isAsyncMode = G, Ge.isConcurrentMode = z, Ge.isContextConsumer = B, Ge.isContextProvider = q, Ge.isElement = Y, Ge.isForwardRef = K, Ge.isFragment = Z, Ge.isLazy = re, Ge.isMemo = U, Ge.isPortal = X, Ge.isProfiler = M, Ge.isStrictMode = J, Ge.isSuspense = be, Ge.isValidElementType = E, Ge.typeOf = y;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? Is.exports = P$() : Is.exports = $$();
var A$ = Is.exports, $l = A$, T$ = {
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
}, R$ = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, V$ = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Uv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Al = {};
Al[$l.ForwardRef] = V$;
Al[$l.Memo] = Uv;
function mf(e) {
  return $l.isMemo(e) ? Uv : Al[e.$$typeof] || T$;
}
var M$ = Object.defineProperty, L$ = Object.getOwnPropertyNames, gf = Object.getOwnPropertySymbols, B$ = Object.getOwnPropertyDescriptor, F$ = Object.getPrototypeOf, bf = Object.prototype;
function qv(e, t, r) {
  if (typeof t != "string") {
    if (bf) {
      var o = F$(t);
      o && o !== bf && qv(e, o, r);
    }
    var n = L$(t);
    gf && (n = n.concat(gf(t)));
    for (var i = mf(e), a = mf(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!R$[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = B$(t, c);
        try {
          M$(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var j$ = qv;
const hf = /* @__PURE__ */ v$(j$);
var Ps = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function W$() {
  if (yf) return Ne;
  yf = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Ne.ContextConsumer = a, Ne.ContextProvider = i, Ne.Element = e, Ne.ForwardRef = c, Ne.Fragment = r, Ne.Lazy = d, Ne.Memo = l, Ne.Portal = t, Ne.Profiler = n, Ne.StrictMode = o, Ne.Suspense = u, Ne.SuspenseList = m, Ne.isAsyncMode = function() {
    return !1;
  }, Ne.isConcurrentMode = function() {
    return !1;
  }, Ne.isContextConsumer = function(p) {
    return b(p) === a;
  }, Ne.isContextProvider = function(p) {
    return b(p) === i;
  }, Ne.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ne.isForwardRef = function(p) {
    return b(p) === c;
  }, Ne.isFragment = function(p) {
    return b(p) === r;
  }, Ne.isLazy = function(p) {
    return b(p) === d;
  }, Ne.isMemo = function(p) {
    return b(p) === l;
  }, Ne.isPortal = function(p) {
    return b(p) === t;
  }, Ne.isProfiler = function(p) {
    return b(p) === n;
  }, Ne.isStrictMode = function(p) {
    return b(p) === o;
  }, Ne.isSuspense = function(p) {
    return b(p) === u;
  }, Ne.isSuspenseList = function(p) {
    return b(p) === m;
  }, Ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ne.typeOf = b, Ne;
}
var ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vf;
function G$() {
  return vf || (vf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    ke.ContextConsumer = v, ke.ContextProvider = D, ke.Element = C, ke.ForwardRef = R, ke.Fragment = $, ke.Lazy = A, ke.Memo = P, ke.Portal = T, ke.Profiler = j, ke.StrictMode = k, ke.Suspense = V, ke.SuspenseList = W, ke.isAsyncMode = z, ke.isConcurrentMode = B, ke.isContextConsumer = q, ke.isContextProvider = Y, ke.isElement = K, ke.isForwardRef = Z, ke.isFragment = re, ke.isLazy = U, ke.isMemo = X, ke.isPortal = M, ke.isProfiler = J, ke.isStrictMode = be, ke.isSuspense = O, ke.isSuspenseList = te, ke.isValidElementType = y, ke.typeOf = f;
  }()), ke;
}
process.env.NODE_ENV === "production" ? Ps.exports = W$() : Ps.exports = G$();
var Ef = Ps.exports;
function Tl(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function qi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Tl(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function k$(e, t, r) {
  qi(e, "mapStateToProps"), qi(t, "mapDispatchToProps"), qi(r, "mergeProps");
}
const z$ = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function H$(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function U$(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Hv(t, z$);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && k$(a, s, c), H$(a, s, c, e, i);
}
function q$(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function Y$(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Yv(e, t, r) {
  Y$(e) || Tl(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function $s(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function xf(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Kv(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = xf(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = xf(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Yv(s, o, t), s;
    }, n;
  };
}
function Rl(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function K$(e) {
  return e && typeof e == "object" ? $s((t) => (
    // @ts-ignore
    q$(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Kv(e, "mapDispatchToProps")
  ) : Rl(e, "mapDispatchToProps") : $s((t) => ({
    dispatch: t
  }));
}
function X$(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Kv(e, "mapStateToProps")
  ) : Rl(e, "mapStateToProps") : $s(() => ({}));
}
function J$(e, t, r) {
  return nn({}, r, e, t);
}
function Z$(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Yv(i, r, "mergeProps")), i;
    };
  };
}
function Q$(e) {
  return e ? typeof e == "function" ? Z$(e) : Rl(e, "mergeProps") : () => J$;
}
function eA() {
  const e = N$();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Of = {
  notify() {
  },
  get: () => []
};
function tA(e, t) {
  let r, o = Of, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = eA());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Of);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const rA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", As = rA ? N.useLayoutEffect : N.useEffect;
function Sf(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Yi(e, t) {
  if (Sf(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Sf(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const nA = ["reactReduxForwardedRef"];
let Xv = I$;
const oA = (e) => {
  Xv = e;
}, iA = [null, null], aA = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function sA(e, t, r) {
  As(() => e(...t), r);
}
function cA(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function lA(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function uA(e, t) {
  return e === t;
}
let wf = !1;
function Jv(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = uA,
  areOwnPropsEqual: i = Yi,
  areStatePropsEqual: a = Yi,
  areMergedPropsEqual: s = Yi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = _$
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !wf && (wf = !0, Tl('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = X$(e), d = K$(t), g = Q$(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Ef.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${aA(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = Hv(f, nA);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Ef.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => U$(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return iA;
        const M = tA(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : nn({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      As(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? lA(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      sA(cA, [z, G, q, C, B, W]);
      let U;
      try {
        U = Xv(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      As(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, nn({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, nn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, hf(f, b);
    }
    return hf(y, b);
  };
}
oA(Pl.useSyncExternalStore);
D$(ar);
function dA(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Zv(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && dA(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function pA(e, t) {
  return Zv(function() {
    return e;
  }, t);
}
var Et = Zv, ct = pA, fA = process.env.NODE_ENV === "production", Ki = "Invariant failed";
function Df(e, t) {
  if (fA)
    throw new Error(Ki);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Ki, ": ").concat(r) : Ki;
  throw new Error(o);
}
var Yr = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, Qv = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Nf = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, mA = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Xi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Vl = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Xi : r, n = e.border, i = n === void 0 ? Xi : n, a = e.padding, s = a === void 0 ? Xi : a, c = Yr(Qv(t, o)), u = Yr(Nf(t, i)), m = Yr(Nf(u, s));
  return {
    marginBox: c,
    borderBox: Yr(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, zt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Df(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Df()), o;
}, gA = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, bA = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = mA(r, t);
  return Vl({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Ts = function(e, t) {
  return t === void 0 && (t = gA()), bA(e, t);
}, eE = function(e, t) {
  var r = {
    top: zt(t.marginTop),
    right: zt(t.marginRight),
    bottom: zt(t.marginBottom),
    left: zt(t.marginLeft)
  }, o = {
    top: zt(t.paddingTop),
    right: zt(t.paddingRight),
    bottom: zt(t.paddingBottom),
    left: zt(t.paddingLeft)
  }, n = {
    top: zt(t.borderTopWidth),
    right: zt(t.borderRightWidth),
    bottom: zt(t.borderBottomWidth),
    left: zt(t.borderLeftWidth)
  };
  return Vl({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, tE = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return eE(t, r);
}, Cf = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function hA(e, t) {
  return !!(e === t || Cf(e) && Cf(t));
}
function yA(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!hA(e[r], t[r]))
      return !1;
  return !0;
}
function It(e, t) {
  t === void 0 && (t = yA);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var vA = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const EA = process.env.NODE_ENV === "production", xA = /[ \t]{2,}/g, OA = /^[ \t]*/gm, _f = (e) => e.replace(xA, " ").replace(OA, "").trim(), SA = (e) => _f(`
  %c@hello-pangea/dnd

  %c${_f(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), wA = (e) => [SA(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], DA = "__@hello-pangea/dnd-disable-dev-warnings";
function rE(e, t) {
  EA || typeof window < "u" && window[DA] || console[e](...wA(t));
}
const br = rE.bind(null, "warn"), Rs = rE.bind(null, "error");
function NA() {
}
function CA(e, t) {
  return {
    ...e,
    ...t
  };
}
function _A(e, t, r) {
  const o = t.map((n) => {
    const i = CA(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const IA = process.env.NODE_ENV === "production", If = "Invariant failed";
class Hn extends Error {
}
Hn.prototype.toString = function() {
  return this.message;
};
function se(e, t) {
  throw IA ? new Hn(If) : new Hn(`${If}: ${t || ""}`);
}
class M2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = NA, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && br(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Hn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Rs(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = _A(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Hn) {
      process.env.NODE_ENV !== "production" && Rs(t.message), this.setState({});
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
const Fr = {
  x: 0,
  y: 0
}, PA = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), $A = (e, t) => e.x === t.x && e.y === t.y, AA = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), TA = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var RA = (e, t) => {
  const r = Yr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const VA = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), MA = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, LA = (e, t) => t ? VA(e, t.scroll.diff.displacement) : e, BA = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, FA = (e, t) => t && t.shouldClipSubject ? RA(t.pageMarginBox, e) : Yr(e);
var jA = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = LA(e.marginBox, o), i = BA(n, r, t), a = FA(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
It((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
It((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const WA = It((e) => Object.values(e)), GA = It((e) => Object.values(e));
It((e, t) => GA(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function kA(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
It((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const zA = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, HA = {
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
It(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: TA(e.line, r)
  };
});
var Co = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const UA = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), qA = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Ml = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Un = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, YA = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Nr = `${YA.outOfTheWay}s ${Ml.outOfTheWay}`, _o = {
  fluid: `opacity ${Nr}`,
  snap: `transform ${Nr}, opacity ${Nr}`,
  drop: (e) => {
    const t = `${e}s ${Ml.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Nr}`,
  placeholder: `height ${Nr}, width ${Nr}, margin ${Nr}`
}, Pf = (e) => $A(e, Fr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Vs = {
  moveTo: Pf,
  drop: (e, t) => {
    const r = Pf(e);
    if (r)
      return t ? `${r} scale(${Un.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var nE = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = PA({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, KA = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.documentElement") : se()), e;
}, XA = () => {
  const e = KA();
  return nE({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
It((e) => WA(e).filter((t) => !(!t.isEnabled || !t.frame)));
const oE = "data-rfd", $f = (() => {
  const e = `${oE}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Af = {
  contextId: `${oE}-scroll-container-context-id`
}, JA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var Dn = JA;
function ZA(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var QA = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function iE(e) {
  return e instanceof QA(e).HTMLElement;
}
function eT(e, t) {
  const r = `[${$f.contextId}="${e}"]`, o = ZA(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && br(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute($f.draggableId) === t);
  return n ? iE(n) ? n : (process.env.NODE_ENV !== "production" && br("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && br(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var aE = _.createContext(null), tT = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.body") : se()), e;
};
let rT = 0;
const sE = {
  separator: "::"
};
function nT(e, t = sE) {
  return Et(() => `${e}${t.separator}${rT++}`, [t.separator, e]);
}
function oT(e, t = sE) {
  const r = _.useId();
  return Et(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var cE = "useId" in _ ? oT : nT, Ll = _.createContext(null);
function lE(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Bl(e, t) {
  lE(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        Rs(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function iT(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function Fl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Tf = {
  dragging: 5e3,
  dropAnimating: 4500
}, aT = (e, t) => t ? _o.drop(t.duration) : e ? _o.snap : _o.fluid, sT = (e, t) => {
  if (e)
    return t ? Un.opacity.drop : Un.opacity.combining;
}, cT = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function lT(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = cT(e), s = !!n, c = s ? Vs.drop(r, i) : Vs.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: aT(a, n),
    transform: c,
    opacity: sT(i, s),
    zIndex: s ? Tf.dropAnimating : Tf.dragging,
    pointerEvents: "none"
  };
}
function uT(e) {
  return {
    transform: Vs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function dT(e) {
  return e.type === "DRAGGING" ? lT(e) : uT(e);
}
function pT(e, t, r = Fr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = eE(n, o), a = Ts(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function fT(e) {
  const t = cE("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = Et(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ct((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot get dimension when no ref is set") : se()), pT(r, h, g);
  }, [r, n]), m = Et(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  Dn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Dn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var jl = _.createContext(null);
function uE(e) {
  e && iE(e) || (process.env.NODE_ENV !== "production" ? se(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : se());
}
function mT(e, t, r) {
  Bl(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? se(!1, "Draggable requires a draggableId") : se(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : se(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} requires an integer index prop`) : se(!1)), e.mapped.type !== "DRAGGING" && (uE(r()), e.isEnabled && (eT(t, n) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} Unable to find drag handle`) : se(!1))));
  });
}
function gT(e) {
  lE(() => {
    const t = L(e);
    Bl(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Draggable isClone prop value changed during component life") : se(!1));
    }, [e]);
  });
}
function Jo(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find required context") : se()), t;
}
function bT(e) {
  e.preventDefault();
}
const hT = (e) => {
  const t = L(null), r = ct((v = null) => {
    t.current = v;
  }, []), o = ct(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Jo(Ll), {
    type: s,
    droppableId: c
  } = Jo(jl), u = Et(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (mT(e, n, o), gT(b), !b) {
    const v = Et(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    fT(v);
  }
  const w = Et(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: bT
  } : null, [n, i, l, d]), E = ct((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = Et(() => {
    const v = dT(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = Et(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var yT = hT, dE = (e, t) => e === t, pE = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const vT = (e) => e.combine ? e.combine.draggableId : null, ET = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function xT() {
  const e = It((o, n) => ({
    x: o,
    y: n
  })), t = It((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = It((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Fl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Co(o.impact), c = ET(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = pE(c), l = vT(c), d = {
        duration: o.dropDuration,
        curve: Ml.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Un.opacity.drop : null,
        scale: l ? Un.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function fE(e = null) {
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
const OT = {
  mapped: {
    type: "SECONDARY",
    offset: Fr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: fE(null)
  }
};
function ST() {
  const e = It((i, a) => ({
    x: i,
    y: a
  })), t = It(fE), r = It((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Fr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = kA(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = AA(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Fl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const wT = () => {
  const e = xT(), t = ST();
  return (r, o) => e(r, o) || t(r, o) || OT;
}, DT = {
  dropAnimationFinished: qA
}, NT = Jv(wT, DT, null, {
  context: aE,
  areStatePropsEqual: dE
})(yT);
var CT = NT;
function _T(e) {
  return Jo(jl).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(CT, e);
}
const Wl = (e) => (t) => e === t, IT = Wl("scroll"), PT = Wl("auto"), $T = Wl("visible"), Rf = (e, t) => t(e.overflowX) || t(e.overflowY), AT = (e, t) => t(e.overflowX) && t(e.overflowY), mE = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Rf(r, IT) || Rf(r, PT);
}, TT = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = tT(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, se()), !mE(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return AT(o, $T) || process.env.NODE_ENV !== "production" && br(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Gl = (e) => e == null ? null : e === document.body ? TT() ? e : null : e === document.documentElement ? null : mE(e) ? e : Gl(e.parentElement);
var RT = (e) => {
  !e || !Gl(e.parentElement) || process.env.NODE_ENV !== "production" && br(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ms = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const gE = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : gE(e.parentElement) : !1;
var VT = (e) => {
  const t = Gl(e), r = gE(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, MT = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = nE({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Fr,
          displacement: Fr
        }
      }
    };
  })(), u = n === "vertical" ? zA : HA, m = jA({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const LT = (e, t) => {
  const r = tE(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Qv({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Vl({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var BT = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = LT(e, c), m = Ts(u, o), l = (() => {
    if (!c)
      return null;
    const d = tE(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Ts(d, o),
      scroll: Ms(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return MT({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const FT = {
  passive: !1
}, jT = {
  passive: !0
};
var Vf = (e) => e.shouldPublishImmediately ? FT : jT;
const bo = (e) => e && e.env.closestScrollable || null;
function WT(e) {
  const t = L(null), r = Jo(Ll), o = cE("droppable"), {
    registry: n,
    marshal: i
  } = r, a = iT(e), s = Et(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = Et(() => It((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? se(!1, "Can only update scroll when dragging") : se());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = ct(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Fr : Ms(y.env.closestScrollable);
  }, []), l = ct(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = Et(() => vA(l), [l]), g = ct(() => {
    const y = t.current, f = bo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find scroll options while scrolling") : se()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = ct((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect a droppable while a drag is occurring") : se());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect without a droppable ref") : se());
    const C = VT(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = BT({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Af.contextId, r.contextId), A.addEventListener("scroll", g, Vf(R.scrollOptions)), process.env.NODE_ENV !== "production" && RT(A)), $;
  }, [r.contextId, s, g, a]), b = ct(() => {
    const y = t.current, f = bo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? se(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : se()), Ms(f);
  }, []), p = ct(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot stop drag when no active drag") : se());
    const f = bo(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(Af.contextId), f.removeEventListener("scroll", g, Vf(y.scrollOptions)));
  }, [g, d]), x = ct((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll when there is no drag") : se());
    const v = bo(f);
    v || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll a droppable with no closest scrollable") : se()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = Et(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = Et(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Dn(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && br("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Dn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Dn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ji() {
}
const GT = {
  width: 0,
  height: 0,
  margin: MA
}, kT = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? GT : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, zT = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = kT({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? _o.placeholder : null
  };
}, HT = (e) => {
  const t = L(null), r = ct(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), Ji) : t.current ? Ji : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Ji, [o, s, r]);
  const u = ct((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = zT({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var UT = _.memo(HT);
function Zi(e) {
  return typeof e == "boolean";
}
function Qi(e, t) {
  t.forEach((r) => r(e));
}
const qT = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? se(!1, "A Droppable requires a droppableId prop") : se()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : se());
}, function({
  props: e
}) {
  Zi(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isDropDisabled must be a boolean") : se()), Zi(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isCombineEnabled must be a boolean") : se()), Zi(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? se(!1, "ignoreContainerClipping must be a boolean") : se());
}, function({
  getDroppableRef: e
}) {
  uE(e());
}], YT = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && br(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], KT = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? se(!1, "Must provide a clone render function (renderClone) for virtual lists") : se());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? se(!1, "Expected virtual list to not have a placeholder") : se());
}];
function XT(e) {
  Bl(() => {
    Qi(e, qT), e.props.mode === "standard" && Qi(e, YT), e.props.mode === "virtual" && Qi(e, KT);
  });
}
class JT extends _.PureComponent {
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
const ZT = (e) => {
  const t = yt(Ll);
  t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find app context") : se());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = ct(() => n.current, []), E = ct((P = null) => {
    n.current = P;
  }, []), y = ct(() => i.current, []), f = ct((P = null) => {
    i.current = P;
  }, []);
  XT({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = ct(() => {
    o() && p({
      maxScroll: XA()
    });
  }, [o, p]);
  WT({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = Et(() => _.createElement(JT, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(UT, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Et(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = Et(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(_T, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(jl.Provider, {
    value: $
  }, a(C, h), A());
};
var QT = ZT;
function eR() {
  return document.body || (process.env.NODE_ENV !== "production" ? se(!1, "document.body is not ready") : se()), document.body;
}
const Mf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: eR
}, bE = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Mf)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Mf[r]
    });
  return t;
}, ea = (e, t) => e === t.droppable.type, Lf = (e, t) => t.draggables[e.draggable.id], tR = () => {
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
  }, r = It((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = It((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = bE(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Fl(n)) {
      const l = n.critical;
      if (!ea(c, l))
        return t;
      const d = Lf(l, n.dimensions), g = Co(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!ea(c, l.critical))
        return t;
      const d = Lf(l.critical, n.dimensions);
      return o(s, u, pE(l.result) === s, Co(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!ea(c, l.critical))
        return t;
      const d = Co(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, rR = {
  updateViewportMaxScroll: UA
};
Jv(tR, rR, (e, t, r) => ({
  ...bE(r),
  ...e,
  ...t
}), {
  context: aE,
  areStatePropsEqual: dE
})(QT);
var Bf;
(function(e) {
  e.event = "event", e.props = "prop";
})(Bf || (Bf = {}));
var Ff = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Ff(), "" + Ff();
function nR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ls = { exports: {} }, ta = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jf;
function oR() {
  if (jf) return ta;
  jf = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ta.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, ta;
}
var Wf = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gf;
function iR() {
  return Gf || (Gf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Wf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Wf;
}
process.env.NODE_ENV === "production" ? Ls.exports = oR() : Ls.exports = iR();
var kl = Ls.exports, ra = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kf;
function aR() {
  if (kf) return ra;
  kf = 1;
  var e = _, t = kl;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return ra.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, ra;
}
var zf = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hf;
function sR() {
  return Hf || (Hf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = kl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    zf.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), zf;
}
process.env.NODE_ENV === "production" ? aR() : sR();
function cR(e) {
  e();
}
let hE = cR;
const lR = (e) => hE = e, uR = () => hE, Uf = Symbol.for("react-redux-context"), qf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function dR() {
  var e;
  if (!N.createContext) return {};
  const t = (e = qf[Uf]) != null ? e : qf[Uf] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const pR = /* @__PURE__ */ dR(), fR = () => {
  throw new Error("uSES not initialized!");
};
function on() {
  return on = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, on.apply(null, arguments);
}
function yE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Bs = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yf;
function mR() {
  if (Yf) return Ce;
  Yf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return Ce.AsyncMode = c, Ce.ConcurrentMode = u, Ce.ContextConsumer = s, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = m, Ce.Fragment = o, Ce.Lazy = h, Ce.Memo = g, Ce.Portal = r, Ce.Profiler = i, Ce.StrictMode = n, Ce.Suspense = l, Ce.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, Ce.isConcurrentMode = y, Ce.isContextConsumer = function(f) {
    return E(f) === s;
  }, Ce.isContextProvider = function(f) {
    return E(f) === a;
  }, Ce.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, Ce.isForwardRef = function(f) {
    return E(f) === m;
  }, Ce.isFragment = function(f) {
    return E(f) === o;
  }, Ce.isLazy = function(f) {
    return E(f) === h;
  }, Ce.isMemo = function(f) {
    return E(f) === g;
  }, Ce.isPortal = function(f) {
    return E(f) === r;
  }, Ce.isProfiler = function(f) {
    return E(f) === i;
  }, Ce.isStrictMode = function(f) {
    return E(f) === n;
  }, Ce.isSuspense = function(f) {
    return E(f) === l;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, Ce.typeOf = E, Ce;
}
var ze = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kf;
function gR() {
  return Kf || (Kf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    ze.AsyncMode = f, ze.ConcurrentMode = v, ze.ContextConsumer = D, ze.ContextProvider = C, ze.Element = R, ze.ForwardRef = $, ze.Fragment = A, ze.Lazy = P, ze.Memo = T, ze.Portal = j, ze.Profiler = k, ze.StrictMode = V, ze.Suspense = W, ze.isAsyncMode = G, ze.isConcurrentMode = z, ze.isContextConsumer = B, ze.isContextProvider = q, ze.isElement = Y, ze.isForwardRef = K, ze.isFragment = Z, ze.isLazy = re, ze.isMemo = U, ze.isPortal = X, ze.isProfiler = M, ze.isStrictMode = J, ze.isSuspense = be, ze.isValidElementType = E, ze.typeOf = y;
  }()), ze;
}
process.env.NODE_ENV === "production" ? Bs.exports = mR() : Bs.exports = gR();
var bR = Bs.exports, zl = bR, hR = {
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
}, yR = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, vR = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Hl = {};
Hl[zl.ForwardRef] = vR;
Hl[zl.Memo] = vE;
function Xf(e) {
  return zl.isMemo(e) ? vE : Hl[e.$$typeof] || hR;
}
var ER = Object.defineProperty, xR = Object.getOwnPropertyNames, Jf = Object.getOwnPropertySymbols, OR = Object.getOwnPropertyDescriptor, SR = Object.getPrototypeOf, Zf = Object.prototype;
function EE(e, t, r) {
  if (typeof t != "string") {
    if (Zf) {
      var o = SR(t);
      o && o !== Zf && EE(e, o, r);
    }
    var n = xR(t);
    Jf && (n = n.concat(Jf(t)));
    for (var i = Xf(e), a = Xf(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!yR[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = OR(t, c);
        try {
          ER(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var wR = EE;
const Qf = /* @__PURE__ */ nR(wR);
var Fs = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;
function DR() {
  if (em) return _e;
  em = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return _e.ContextConsumer = a, _e.ContextProvider = i, _e.Element = e, _e.ForwardRef = c, _e.Fragment = r, _e.Lazy = d, _e.Memo = l, _e.Portal = t, _e.Profiler = n, _e.StrictMode = o, _e.Suspense = u, _e.SuspenseList = m, _e.isAsyncMode = function() {
    return !1;
  }, _e.isConcurrentMode = function() {
    return !1;
  }, _e.isContextConsumer = function(p) {
    return b(p) === a;
  }, _e.isContextProvider = function(p) {
    return b(p) === i;
  }, _e.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, _e.isForwardRef = function(p) {
    return b(p) === c;
  }, _e.isFragment = function(p) {
    return b(p) === r;
  }, _e.isLazy = function(p) {
    return b(p) === d;
  }, _e.isMemo = function(p) {
    return b(p) === l;
  }, _e.isPortal = function(p) {
    return b(p) === t;
  }, _e.isProfiler = function(p) {
    return b(p) === n;
  }, _e.isStrictMode = function(p) {
    return b(p) === o;
  }, _e.isSuspense = function(p) {
    return b(p) === u;
  }, _e.isSuspenseList = function(p) {
    return b(p) === m;
  }, _e.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, _e.typeOf = b, _e;
}
var He = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function NR() {
  return tm || (tm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    He.ContextConsumer = v, He.ContextProvider = D, He.Element = C, He.ForwardRef = R, He.Fragment = $, He.Lazy = A, He.Memo = P, He.Portal = T, He.Profiler = j, He.StrictMode = k, He.Suspense = V, He.SuspenseList = W, He.isAsyncMode = z, He.isConcurrentMode = B, He.isContextConsumer = q, He.isContextProvider = Y, He.isElement = K, He.isForwardRef = Z, He.isFragment = re, He.isLazy = U, He.isMemo = X, He.isPortal = M, He.isProfiler = J, He.isStrictMode = be, He.isSuspense = O, He.isSuspenseList = te, He.isValidElementType = y, He.typeOf = f;
  }()), He;
}
process.env.NODE_ENV === "production" ? Fs.exports = DR() : Fs.exports = NR();
var rm = Fs.exports;
function Ul(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function na(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ul(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function CR(e, t, r) {
  na(e, "mapStateToProps"), na(t, "mapDispatchToProps"), na(r, "mergeProps");
}
const _R = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function IR(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function PR(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = yE(t, _R);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && CR(a, s, c), IR(a, s, c, e, i);
}
function $R(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function AR(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function xE(e, t, r) {
  AR(e) || Ul(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function js(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function nm(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function OE(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = nm(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = nm(s), s = n(i, a)), process.env.NODE_ENV !== "production" && xE(s, o, t), s;
    }, n;
  };
}
function ql(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function TR(e) {
  return e && typeof e == "object" ? js((t) => (
    // @ts-ignore
    $R(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    OE(e, "mapDispatchToProps")
  ) : ql(e, "mapDispatchToProps") : js((t) => ({
    dispatch: t
  }));
}
function RR(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    OE(e, "mapStateToProps")
  ) : ql(e, "mapStateToProps") : js(() => ({}));
}
function VR(e, t, r) {
  return on({}, r, e, t);
}
function MR(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && xE(i, r, "mergeProps")), i;
    };
  };
}
function LR(e) {
  return e ? typeof e == "function" ? MR(e) : ql(e, "mergeProps") : () => VR;
}
function BR() {
  const e = uR();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const om = {
  notify() {
  },
  get: () => []
};
function FR(e, t) {
  let r, o = om, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = BR());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = om);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const jR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ws = jR ? N.useLayoutEffect : N.useEffect;
function im(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function oa(e, t) {
  if (im(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !im(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const WR = ["reactReduxForwardedRef"];
let SE = fR;
const GR = (e) => {
  SE = e;
}, kR = [null, null], zR = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function HR(e, t, r) {
  Ws(() => e(...t), r);
}
function UR(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function qR(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function YR(e, t) {
  return e === t;
}
let am = !1;
function wE(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = YR,
  areOwnPropsEqual: i = oa,
  areStatePropsEqual: a = oa,
  areMergedPropsEqual: s = oa,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = pR
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !am && (am = !0, Ul('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = RR(e), d = TR(t), g = LR(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !rm.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${zR(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = yE(f, WR);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      rm.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => PR(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return kR;
        const M = FR(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : on({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Ws(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? qR(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      HR(UR, [z, G, q, C, B, W]);
      let U;
      try {
        U = SE(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Ws(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, on({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, on({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Qf(f, b);
    }
    return Qf(y, b);
  };
}
GR(kl.useSyncExternalStore);
lR(ar);
function KR(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function DE(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && KR(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function XR(e, t) {
  return DE(function() {
    return e;
  }, t);
}
var xt = DE, lt = XR, JR = process.env.NODE_ENV === "production", ia = "Invariant failed";
function sm(e, t) {
  if (JR)
    throw new Error(ia);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(ia, ": ").concat(r) : ia;
  throw new Error(o);
}
var Kr = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, NE = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, cm = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, ZR = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, aa = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Yl = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? aa : r, n = e.border, i = n === void 0 ? aa : n, a = e.padding, s = a === void 0 ? aa : a, c = Kr(NE(t, o)), u = Kr(cm(t, i)), m = Kr(cm(u, s));
  return {
    marginBox: c,
    borderBox: Kr(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Ht = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? sm(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : sm()), o;
}, QR = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, eV = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = ZR(r, t);
  return Yl({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Gs = function(e, t) {
  return t === void 0 && (t = QR()), eV(e, t);
}, CE = function(e, t) {
  var r = {
    top: Ht(t.marginTop),
    right: Ht(t.marginRight),
    bottom: Ht(t.marginBottom),
    left: Ht(t.marginLeft)
  }, o = {
    top: Ht(t.paddingTop),
    right: Ht(t.paddingRight),
    bottom: Ht(t.paddingBottom),
    left: Ht(t.paddingLeft)
  }, n = {
    top: Ht(t.borderTopWidth),
    right: Ht(t.borderRightWidth),
    bottom: Ht(t.borderBottomWidth),
    left: Ht(t.borderLeftWidth)
  };
  return Yl({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, _E = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return CE(t, r);
}, lm = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function tV(e, t) {
  return !!(e === t || lm(e) && lm(t));
}
function rV(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!tV(e[r], t[r]))
      return !1;
  return !0;
}
function Pt(e, t) {
  t === void 0 && (t = rV);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var nV = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const oV = process.env.NODE_ENV === "production", iV = /[ \t]{2,}/g, aV = /^[ \t]*/gm, um = (e) => e.replace(iV, " ").replace(aV, "").trim(), sV = (e) => um(`
  %c@hello-pangea/dnd

  %c${um(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), cV = (e) => [sV(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], lV = "__@hello-pangea/dnd-disable-dev-warnings";
function IE(e, t) {
  oV || typeof window < "u" && window[lV] || console[e](...cV(t));
}
const hr = IE.bind(null, "warn"), ks = IE.bind(null, "error");
function uV() {
}
function dV(e, t) {
  return {
    ...e,
    ...t
  };
}
function pV(e, t, r) {
  const o = t.map((n) => {
    const i = dV(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const fV = process.env.NODE_ENV === "production", dm = "Invariant failed";
class qn extends Error {
}
qn.prototype.toString = function() {
  return this.message;
};
function ce(e, t) {
  throw fV ? new qn(dm) : new qn(`${dm}: ${t || ""}`);
}
class L2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = uV, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && hr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof qn && (r.preventDefault(), process.env.NODE_ENV !== "production" && ks(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = pV(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof qn) {
      process.env.NODE_ENV !== "production" && ks(t.message), this.setState({});
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
const jr = {
  x: 0,
  y: 0
}, mV = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), gV = (e, t) => e.x === t.x && e.y === t.y, bV = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), hV = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var yV = (e, t) => {
  const r = Kr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const vV = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), EV = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, xV = (e, t) => t ? vV(e, t.scroll.diff.displacement) : e, OV = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, SV = (e, t) => t && t.shouldClipSubject ? yV(t.pageMarginBox, e) : Kr(e);
var wV = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = xV(e.marginBox, o), i = OV(n, r, t), a = SV(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Pt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Pt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const DV = Pt((e) => Object.values(e)), NV = Pt((e) => Object.values(e));
Pt((e, t) => NV(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function CV(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Pt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const _V = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, IV = {
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
Pt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: hV(e.line, r)
  };
});
var Io = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const PV = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), $V = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Kl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Yn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, AV = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Cr = `${AV.outOfTheWay}s ${Kl.outOfTheWay}`, Po = {
  fluid: `opacity ${Cr}`,
  snap: `transform ${Cr}, opacity ${Cr}`,
  drop: (e) => {
    const t = `${e}s ${Kl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Cr}`,
  placeholder: `height ${Cr}, width ${Cr}, margin ${Cr}`
}, pm = (e) => gV(e, jr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, zs = {
  moveTo: pm,
  drop: (e, t) => {
    const r = pm(e);
    if (r)
      return t ? `${r} scale(${Yn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var PE = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = mV({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, TV = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot find document.documentElement") : ce()), e;
}, RV = () => {
  const e = TV();
  return PE({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Pt((e) => DV(e).filter((t) => !(!t.isEnabled || !t.frame)));
const $E = "data-rfd", fm = (() => {
  const e = `${$E}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), mm = {
  contextId: `${$E}-scroll-container-context-id`
}, VV = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var Nn = VV;
function MV(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var LV = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function AE(e) {
  return e instanceof LV(e).HTMLElement;
}
function BV(e, t) {
  const r = `[${fm.contextId}="${e}"]`, o = MV(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && hr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(fm.draggableId) === t);
  return n ? AE(n) ? n : (process.env.NODE_ENV !== "production" && hr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && hr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var TE = _.createContext(null), FV = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot find document.body") : ce()), e;
};
let jV = 0;
const RE = {
  separator: "::"
};
function WV(e, t = RE) {
  return xt(() => `${e}${t.separator}${jV++}`, [t.separator, e]);
}
function GV(e, t = RE) {
  const r = _.useId();
  return xt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var VE = "useId" in _ ? GV : WV, Xl = _.createContext(null);
function ME(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Jl(e, t) {
  ME(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        ks(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function kV(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function Zl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const gm = {
  dragging: 5e3,
  dropAnimating: 4500
}, zV = (e, t) => t ? Po.drop(t.duration) : e ? Po.snap : Po.fluid, HV = (e, t) => {
  if (e)
    return t ? Yn.opacity.drop : Yn.opacity.combining;
}, UV = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function qV(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = UV(e), s = !!n, c = s ? zs.drop(r, i) : zs.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: zV(a, n),
    transform: c,
    opacity: HV(i, s),
    zIndex: s ? gm.dropAnimating : gm.dragging,
    pointerEvents: "none"
  };
}
function YV(e) {
  return {
    transform: zs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function KV(e) {
  return e.type === "DRAGGING" ? qV(e) : YV(e);
}
function XV(e, t, r = jr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = CE(n, o), a = Gs(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function JV(e) {
  const t = VE("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = xt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = lt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot get dimension when no ref is set") : ce()), XV(r, h, g);
  }, [r, n]), m = xt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  Nn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Nn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Ql = _.createContext(null);
function LE(e) {
  e && AE(e) || (process.env.NODE_ENV !== "production" ? ce(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ce());
}
function ZV(e, t, r) {
  Jl(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ce(!1, "Draggable requires a draggableId") : ce(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ce(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ce(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ce(!1, `${o(n)} requires an integer index prop`) : ce(!1)), e.mapped.type !== "DRAGGING" && (LE(r()), e.isEnabled && (BV(t, n) || (process.env.NODE_ENV !== "production" ? ce(!1, `${o(n)} Unable to find drag handle`) : ce(!1))));
  });
}
function QV(e) {
  ME(() => {
    const t = L(e);
    Jl(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ce(!1, "Draggable isClone prop value changed during component life") : ce(!1));
    }, [e]);
  });
}
function Zo(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find required context") : ce()), t;
}
function eM(e) {
  e.preventDefault();
}
const tM = (e) => {
  const t = L(null), r = lt((v = null) => {
    t.current = v;
  }, []), o = lt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Zo(Xl), {
    type: s,
    droppableId: c
  } = Zo(Ql), u = xt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (ZV(e, n, o), QV(b), !b) {
    const v = xt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    JV(v);
  }
  const w = xt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: eM
  } : null, [n, i, l, d]), E = lt((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = xt(() => {
    const v = KV(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = xt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var rM = tM, BE = (e, t) => e === t, FE = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const nM = (e) => e.combine ? e.combine.draggableId : null, oM = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function iM() {
  const e = Pt((o, n) => ({
    x: o,
    y: n
  })), t = Pt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Pt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Zl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Io(o.impact), c = oM(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = FE(c), l = nM(c), d = {
        duration: o.dropDuration,
        curve: Kl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Yn.opacity.drop : null,
        scale: l ? Yn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function jE(e = null) {
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
const aM = {
  mapped: {
    type: "SECONDARY",
    offset: jr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: jE(null)
  }
};
function sM() {
  const e = Pt((i, a) => ({
    x: i,
    y: a
  })), t = Pt(jE), r = Pt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(jr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = CV(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = bV(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Zl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const cM = () => {
  const e = iM(), t = sM();
  return (r, o) => e(r, o) || t(r, o) || aM;
}, lM = {
  dropAnimationFinished: $V
}, uM = wE(cM, lM, null, {
  context: TE,
  areStatePropsEqual: BE
})(rM);
var dM = uM;
function pM(e) {
  return Zo(Ql).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(dM, e);
}
const eu = (e) => (t) => e === t, fM = eu("scroll"), mM = eu("auto"), gM = eu("visible"), bm = (e, t) => t(e.overflowX) || t(e.overflowY), bM = (e, t) => t(e.overflowX) && t(e.overflowY), WE = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return bm(r, fM) || bm(r, mM);
}, hM = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = FV(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ce()), !WE(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return bM(o, gM) || process.env.NODE_ENV !== "production" && hr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, tu = (e) => e == null ? null : e === document.body ? hM() ? e : null : e === document.documentElement ? null : WE(e) ? e : tu(e.parentElement);
var yM = (e) => {
  !e || !tu(e.parentElement) || process.env.NODE_ENV !== "production" && hr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Hs = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const GE = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : GE(e.parentElement) : !1;
var vM = (e) => {
  const t = tu(e), r = GE(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, EM = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = PE({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: jr,
          displacement: jr
        }
      }
    };
  })(), u = n === "vertical" ? _V : IV, m = wV({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const xM = (e, t) => {
  const r = _E(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = NE({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Yl({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var OM = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = xM(e, c), m = Gs(u, o), l = (() => {
    if (!c)
      return null;
    const d = _E(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Gs(d, o),
      scroll: Hs(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return EM({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const SM = {
  passive: !1
}, wM = {
  passive: !0
};
var hm = (e) => e.shouldPublishImmediately ? SM : wM;
const ho = (e) => e && e.env.closestScrollable || null;
function DM(e) {
  const t = L(null), r = Zo(Xl), o = VE("droppable"), {
    registry: n,
    marshal: i
  } = r, a = kV(e), s = xt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = xt(() => Pt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? ce(!1, "Can only update scroll when dragging") : ce());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = lt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? jr : Hs(y.env.closestScrollable);
  }, []), l = lt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = xt(() => nV(l), [l]), g = lt(() => {
    const y = t.current, f = ho(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find scroll options while scrolling") : ce()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = lt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot collect a droppable while a drag is occurring") : ce());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot collect without a droppable ref") : ce());
    const C = vM(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = OM({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(mm.contextId, r.contextId), A.addEventListener("scroll", g, hm(R.scrollOptions)), process.env.NODE_ENV !== "production" && yM(A)), $;
  }, [r.contextId, s, g, a]), b = lt(() => {
    const y = t.current, f = ho(y);
    return y && f || (process.env.NODE_ENV !== "production" ? ce(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ce()), Hs(f);
  }, []), p = lt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot stop drag when no active drag") : ce());
    const f = ho(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(mm.contextId), f.removeEventListener("scroll", g, hm(y.scrollOptions)));
  }, [g, d]), x = lt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot scroll when there is no drag") : ce());
    const v = ho(f);
    v || (process.env.NODE_ENV !== "production" ? ce(!1, "Cannot scroll a droppable with no closest scrollable") : ce()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = xt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = xt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Nn(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && hr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Nn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Nn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function sa() {
}
const NM = {
  width: 0,
  height: 0,
  margin: EV
}, CM = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? NM : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, _M = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = CM({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? Po.placeholder : null
  };
}, IM = (e) => {
  const t = L(null), r = lt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), sa) : t.current ? sa : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : sa, [o, s, r]);
  const u = lt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = _M({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var PM = _.memo(IM);
function ca(e) {
  return typeof e == "boolean";
}
function la(e, t) {
  t.forEach((r) => r(e));
}
const $M = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ce(!1, "A Droppable requires a droppableId prop") : ce()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ce(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ce());
}, function({
  props: e
}) {
  ca(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ce(!1, "isDropDisabled must be a boolean") : ce()), ca(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ce(!1, "isCombineEnabled must be a boolean") : ce()), ca(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ce(!1, "ignoreContainerClipping must be a boolean") : ce());
}, function({
  getDroppableRef: e
}) {
  LE(e());
}], AM = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && hr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], TM = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ce(!1, "Must provide a clone render function (renderClone) for virtual lists") : ce());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ce(!1, "Expected virtual list to not have a placeholder") : ce());
}];
function RM(e) {
  Jl(() => {
    la(e, $M), e.props.mode === "standard" && la(e, AM), e.props.mode === "virtual" && la(e, TM);
  });
}
class VM extends _.PureComponent {
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
const MM = (e) => {
  const t = yt(Xl);
  t || (process.env.NODE_ENV !== "production" ? ce(!1, "Could not find app context") : ce());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = lt(() => n.current, []), E = lt((P = null) => {
    n.current = P;
  }, []), y = lt(() => i.current, []), f = lt((P = null) => {
    i.current = P;
  }, []);
  RM({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = lt(() => {
    o() && p({
      maxScroll: RV()
    });
  }, [o, p]);
  DM({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = xt(() => _.createElement(VM, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(PM, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = xt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = xt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(pM, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(Ql.Provider, {
    value: $
  }, a(C, h), A());
};
var LM = MM;
function BM() {
  return document.body || (process.env.NODE_ENV !== "production" ? ce(!1, "document.body is not ready") : ce()), document.body;
}
const ym = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: BM
}, kE = (e) => {
  let t = {
    ...e
  }, r;
  for (r in ym)
    e[r] === void 0 && (t = {
      ...t,
      [r]: ym[r]
    });
  return t;
}, ua = (e, t) => e === t.droppable.type, vm = (e, t) => t.draggables[e.draggable.id], FM = () => {
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
  }, r = Pt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Pt((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = kE(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Zl(n)) {
      const l = n.critical;
      if (!ua(c, l))
        return t;
      const d = vm(l, n.dimensions), g = Io(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!ua(c, l.critical))
        return t;
      const d = vm(l.critical, n.dimensions);
      return o(s, u, FE(l.result) === s, Io(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!ua(c, l.critical))
        return t;
      const d = Io(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, jM = {
  updateViewportMaxScroll: PV
};
wE(FM, jM, (e, t, r) => ({
  ...kE(r),
  ...e,
  ...t
}), {
  context: TE,
  areStatePropsEqual: BE
})(LM);
var Em;
(function(e) {
  e.event = "event", e.props = "prop";
})(Em || (Em = {}));
var xm = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + xm(), "" + xm();
function WM(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Us = { exports: {} }, da = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Om;
function GM() {
  if (Om) return da;
  Om = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return da.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, da;
}
var Sm = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wm;
function kM() {
  return wm || (wm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Sm.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sm;
}
process.env.NODE_ENV === "production" ? Us.exports = GM() : Us.exports = kM();
var ru = Us.exports, pa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm;
function zM() {
  if (Dm) return pa;
  Dm = 1;
  var e = _, t = ru;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return pa.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, pa;
}
var Nm = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cm;
function HM() {
  return Cm || (Cm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = ru, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Nm.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Nm;
}
process.env.NODE_ENV === "production" ? zM() : HM();
function UM(e) {
  e();
}
let zE = UM;
const qM = (e) => zE = e, YM = () => zE, _m = Symbol.for("react-redux-context"), Im = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function KM() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Im[_m]) != null ? e : Im[_m] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const XM = /* @__PURE__ */ KM(), JM = () => {
  throw new Error("uSES not initialized!");
};
function an() {
  return an = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, an.apply(null, arguments);
}
function HE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var qs = { exports: {} }, Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pm;
function ZM() {
  if (Pm) return Ie;
  Pm = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return Ie.AsyncMode = c, Ie.ConcurrentMode = u, Ie.ContextConsumer = s, Ie.ContextProvider = a, Ie.Element = t, Ie.ForwardRef = m, Ie.Fragment = o, Ie.Lazy = h, Ie.Memo = g, Ie.Portal = r, Ie.Profiler = i, Ie.StrictMode = n, Ie.Suspense = l, Ie.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, Ie.isConcurrentMode = y, Ie.isContextConsumer = function(f) {
    return E(f) === s;
  }, Ie.isContextProvider = function(f) {
    return E(f) === a;
  }, Ie.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, Ie.isForwardRef = function(f) {
    return E(f) === m;
  }, Ie.isFragment = function(f) {
    return E(f) === o;
  }, Ie.isLazy = function(f) {
    return E(f) === h;
  }, Ie.isMemo = function(f) {
    return E(f) === g;
  }, Ie.isPortal = function(f) {
    return E(f) === r;
  }, Ie.isProfiler = function(f) {
    return E(f) === i;
  }, Ie.isStrictMode = function(f) {
    return E(f) === n;
  }, Ie.isSuspense = function(f) {
    return E(f) === l;
  }, Ie.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, Ie.typeOf = E, Ie;
}
var Ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $m;
function QM() {
  return $m || ($m = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Ue.AsyncMode = f, Ue.ConcurrentMode = v, Ue.ContextConsumer = D, Ue.ContextProvider = C, Ue.Element = R, Ue.ForwardRef = $, Ue.Fragment = A, Ue.Lazy = P, Ue.Memo = T, Ue.Portal = j, Ue.Profiler = k, Ue.StrictMode = V, Ue.Suspense = W, Ue.isAsyncMode = G, Ue.isConcurrentMode = z, Ue.isContextConsumer = B, Ue.isContextProvider = q, Ue.isElement = Y, Ue.isForwardRef = K, Ue.isFragment = Z, Ue.isLazy = re, Ue.isMemo = U, Ue.isPortal = X, Ue.isProfiler = M, Ue.isStrictMode = J, Ue.isSuspense = be, Ue.isValidElementType = E, Ue.typeOf = y;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? qs.exports = ZM() : qs.exports = QM();
var eL = qs.exports, nu = eL, tL = {
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
}, rL = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, nL = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, UE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ou = {};
ou[nu.ForwardRef] = nL;
ou[nu.Memo] = UE;
function Am(e) {
  return nu.isMemo(e) ? UE : ou[e.$$typeof] || tL;
}
var oL = Object.defineProperty, iL = Object.getOwnPropertyNames, Tm = Object.getOwnPropertySymbols, aL = Object.getOwnPropertyDescriptor, sL = Object.getPrototypeOf, Rm = Object.prototype;
function qE(e, t, r) {
  if (typeof t != "string") {
    if (Rm) {
      var o = sL(t);
      o && o !== Rm && qE(e, o, r);
    }
    var n = iL(t);
    Tm && (n = n.concat(Tm(t)));
    for (var i = Am(e), a = Am(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!rL[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = aL(t, c);
        try {
          oL(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var cL = qE;
const Vm = /* @__PURE__ */ WM(cL);
var Ys = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function lL() {
  if (Mm) return Pe;
  Mm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Pe.ContextConsumer = a, Pe.ContextProvider = i, Pe.Element = e, Pe.ForwardRef = c, Pe.Fragment = r, Pe.Lazy = d, Pe.Memo = l, Pe.Portal = t, Pe.Profiler = n, Pe.StrictMode = o, Pe.Suspense = u, Pe.SuspenseList = m, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(p) {
    return b(p) === a;
  }, Pe.isContextProvider = function(p) {
    return b(p) === i;
  }, Pe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Pe.isForwardRef = function(p) {
    return b(p) === c;
  }, Pe.isFragment = function(p) {
    return b(p) === r;
  }, Pe.isLazy = function(p) {
    return b(p) === d;
  }, Pe.isMemo = function(p) {
    return b(p) === l;
  }, Pe.isPortal = function(p) {
    return b(p) === t;
  }, Pe.isProfiler = function(p) {
    return b(p) === n;
  }, Pe.isStrictMode = function(p) {
    return b(p) === o;
  }, Pe.isSuspense = function(p) {
    return b(p) === u;
  }, Pe.isSuspenseList = function(p) {
    return b(p) === m;
  }, Pe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Pe.typeOf = b, Pe;
}
var qe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lm;
function uL() {
  return Lm || (Lm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    qe.ContextConsumer = v, qe.ContextProvider = D, qe.Element = C, qe.ForwardRef = R, qe.Fragment = $, qe.Lazy = A, qe.Memo = P, qe.Portal = T, qe.Profiler = j, qe.StrictMode = k, qe.Suspense = V, qe.SuspenseList = W, qe.isAsyncMode = z, qe.isConcurrentMode = B, qe.isContextConsumer = q, qe.isContextProvider = Y, qe.isElement = K, qe.isForwardRef = Z, qe.isFragment = re, qe.isLazy = U, qe.isMemo = X, qe.isPortal = M, qe.isProfiler = J, qe.isStrictMode = be, qe.isSuspense = O, qe.isSuspenseList = te, qe.isValidElementType = y, qe.typeOf = f;
  }()), qe;
}
process.env.NODE_ENV === "production" ? Ys.exports = lL() : Ys.exports = uL();
var Bm = Ys.exports;
function iu(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function fa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || iu(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function dL(e, t, r) {
  fa(e, "mapStateToProps"), fa(t, "mapDispatchToProps"), fa(r, "mergeProps");
}
const pL = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function fL(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function mL(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = HE(t, pL);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && dL(a, s, c), fL(a, s, c, e, i);
}
function gL(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function bL(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function YE(e, t, r) {
  bL(e) || iu(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ks(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Fm(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function KE(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Fm(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Fm(s), s = n(i, a)), process.env.NODE_ENV !== "production" && YE(s, o, t), s;
    }, n;
  };
}
function au(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function hL(e) {
  return e && typeof e == "object" ? Ks((t) => (
    // @ts-ignore
    gL(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    KE(e, "mapDispatchToProps")
  ) : au(e, "mapDispatchToProps") : Ks((t) => ({
    dispatch: t
  }));
}
function yL(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    KE(e, "mapStateToProps")
  ) : au(e, "mapStateToProps") : Ks(() => ({}));
}
function vL(e, t, r) {
  return an({}, r, e, t);
}
function EL(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && YE(i, r, "mergeProps")), i;
    };
  };
}
function xL(e) {
  return e ? typeof e == "function" ? EL(e) : au(e, "mergeProps") : () => vL;
}
function OL() {
  const e = YM();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const jm = {
  notify() {
  },
  get: () => []
};
function SL(e, t) {
  let r, o = jm, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = OL());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = jm);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const wL = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xs = wL ? N.useLayoutEffect : N.useEffect;
function Wm(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ma(e, t) {
  if (Wm(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Wm(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const DL = ["reactReduxForwardedRef"];
let XE = JM;
const NL = (e) => {
  XE = e;
}, CL = [null, null], _L = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function IL(e, t, r) {
  Xs(() => e(...t), r);
}
function PL(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function $L(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function AL(e, t) {
  return e === t;
}
let Gm = !1;
function JE(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = AL,
  areOwnPropsEqual: i = ma,
  areStatePropsEqual: a = ma,
  areMergedPropsEqual: s = ma,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = XM
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Gm && (Gm = !0, iu('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = yL(e), d = hL(t), g = xL(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Bm.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${_L(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = HE(f, DL);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Bm.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => mL(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return CL;
        const M = SL(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : an({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Xs(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? $L(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      IL(PL, [z, G, q, C, B, W]);
      let U;
      try {
        U = XE(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Xs(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, an({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, an({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Vm(f, b);
    }
    return Vm(y, b);
  };
}
NL(ru.useSyncExternalStore);
qM(ar);
function TL(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function ZE(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && TL(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function RL(e, t) {
  return ZE(function() {
    return e;
  }, t);
}
var Ot = ZE, ut = RL, VL = process.env.NODE_ENV === "production", ga = "Invariant failed";
function km(e, t) {
  if (VL)
    throw new Error(ga);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(ga, ": ").concat(r) : ga;
  throw new Error(o);
}
var Xr = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, QE = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, zm = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, ML = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, ba = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, su = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ba : r, n = e.border, i = n === void 0 ? ba : n, a = e.padding, s = a === void 0 ? ba : a, c = Xr(QE(t, o)), u = Xr(zm(t, i)), m = Xr(zm(u, s));
  return {
    marginBox: c,
    borderBox: Xr(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Ut = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? km(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : km()), o;
}, LL = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, BL = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = ML(r, t);
  return su({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Js = function(e, t) {
  return t === void 0 && (t = LL()), BL(e, t);
}, ex = function(e, t) {
  var r = {
    top: Ut(t.marginTop),
    right: Ut(t.marginRight),
    bottom: Ut(t.marginBottom),
    left: Ut(t.marginLeft)
  }, o = {
    top: Ut(t.paddingTop),
    right: Ut(t.paddingRight),
    bottom: Ut(t.paddingBottom),
    left: Ut(t.paddingLeft)
  }, n = {
    top: Ut(t.borderTopWidth),
    right: Ut(t.borderRightWidth),
    bottom: Ut(t.borderBottomWidth),
    left: Ut(t.borderLeftWidth)
  };
  return su({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, tx = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return ex(t, r);
}, Hm = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function FL(e, t) {
  return !!(e === t || Hm(e) && Hm(t));
}
function jL(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!FL(e[r], t[r]))
      return !1;
  return !0;
}
function $t(e, t) {
  t === void 0 && (t = jL);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var WL = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const GL = process.env.NODE_ENV === "production", kL = /[ \t]{2,}/g, zL = /^[ \t]*/gm, Um = (e) => e.replace(kL, " ").replace(zL, "").trim(), HL = (e) => Um(`
  %c@hello-pangea/dnd

  %c${Um(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), UL = (e) => [HL(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], qL = "__@hello-pangea/dnd-disable-dev-warnings";
function rx(e, t) {
  GL || typeof window < "u" && window[qL] || console[e](...UL(t));
}
const yr = rx.bind(null, "warn"), Zs = rx.bind(null, "error");
function YL() {
}
function KL(e, t) {
  return {
    ...e,
    ...t
  };
}
function XL(e, t, r) {
  const o = t.map((n) => {
    const i = KL(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const JL = process.env.NODE_ENV === "production", qm = "Invariant failed";
class Kn extends Error {
}
Kn.prototype.toString = function() {
  return this.message;
};
function le(e, t) {
  throw JL ? new Kn(qm) : new Kn(`${qm}: ${t || ""}`);
}
class B2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = YL, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && yr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Kn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Zs(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = XL(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Kn) {
      process.env.NODE_ENV !== "production" && Zs(t.message), this.setState({});
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
const Wr = {
  x: 0,
  y: 0
}, ZL = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), QL = (e, t) => e.x === t.x && e.y === t.y, eB = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), tB = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var rB = (e, t) => {
  const r = Xr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const nB = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), oB = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, iB = (e, t) => t ? nB(e, t.scroll.diff.displacement) : e, aB = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, sB = (e, t) => t && t.shouldClipSubject ? rB(t.pageMarginBox, e) : Xr(e);
var cB = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = iB(e.marginBox, o), i = aB(n, r, t), a = sB(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
$t((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
$t((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const lB = $t((e) => Object.values(e)), uB = $t((e) => Object.values(e));
$t((e, t) => uB(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function dB(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
$t((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const pB = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, fB = {
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
$t(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: tB(e.line, r)
  };
});
var $o = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const mB = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), gB = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), cu = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Xn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, bB = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, _r = `${bB.outOfTheWay}s ${cu.outOfTheWay}`, Ao = {
  fluid: `opacity ${_r}`,
  snap: `transform ${_r}, opacity ${_r}`,
  drop: (e) => {
    const t = `${e}s ${cu.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${_r}`,
  placeholder: `height ${_r}, width ${_r}, margin ${_r}`
}, Ym = (e) => QL(e, Wr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Qs = {
  moveTo: Ym,
  drop: (e, t) => {
    const r = Ym(e);
    if (r)
      return t ? `${r} scale(${Xn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var nx = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = ZL({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, hB = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot find document.documentElement") : le()), e;
}, yB = () => {
  const e = hB();
  return nx({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
$t((e) => lB(e).filter((t) => !(!t.isEnabled || !t.frame)));
const ox = "data-rfd", Km = (() => {
  const e = `${ox}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Xm = {
  contextId: `${ox}-scroll-container-context-id`
}, vB = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var Cn = vB;
function EB(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var xB = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function ix(e) {
  return e instanceof xB(e).HTMLElement;
}
function OB(e, t) {
  const r = `[${Km.contextId}="${e}"]`, o = EB(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && yr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Km.draggableId) === t);
  return n ? ix(n) ? n : (process.env.NODE_ENV !== "production" && yr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && yr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var ax = _.createContext(null), SB = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot find document.body") : le()), e;
};
let wB = 0;
const sx = {
  separator: "::"
};
function DB(e, t = sx) {
  return Ot(() => `${e}${t.separator}${wB++}`, [t.separator, e]);
}
function NB(e, t = sx) {
  const r = _.useId();
  return Ot(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var cx = "useId" in _ ? NB : DB, lu = _.createContext(null);
function lx(e) {
  process.env.NODE_ENV !== "production" && e();
}
function uu(e, t) {
  lx(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        Zs(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function CB(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function du(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Jm = {
  dragging: 5e3,
  dropAnimating: 4500
}, _B = (e, t) => t ? Ao.drop(t.duration) : e ? Ao.snap : Ao.fluid, IB = (e, t) => {
  if (e)
    return t ? Xn.opacity.drop : Xn.opacity.combining;
}, PB = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function $B(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = PB(e), s = !!n, c = s ? Qs.drop(r, i) : Qs.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: _B(a, n),
    transform: c,
    opacity: IB(i, s),
    zIndex: s ? Jm.dropAnimating : Jm.dragging,
    pointerEvents: "none"
  };
}
function AB(e) {
  return {
    transform: Qs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function TB(e) {
  return e.type === "DRAGGING" ? $B(e) : AB(e);
}
function RB(e, t, r = Wr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = ex(n, o), a = Js(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function VB(e) {
  const t = cx("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = Ot(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ut((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot get dimension when no ref is set") : le()), RB(r, h, g);
  }, [r, n]), m = Ot(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  Cn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Cn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var pu = _.createContext(null);
function ux(e) {
  e && ix(e) || (process.env.NODE_ENV !== "production" ? le(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : le());
}
function MB(e, t, r) {
  uu(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? le(!1, "Draggable requires a draggableId") : le(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? le(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : le(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? le(!1, `${o(n)} requires an integer index prop`) : le(!1)), e.mapped.type !== "DRAGGING" && (ux(r()), e.isEnabled && (OB(t, n) || (process.env.NODE_ENV !== "production" ? le(!1, `${o(n)} Unable to find drag handle`) : le(!1))));
  });
}
function LB(e) {
  lx(() => {
    const t = L(e);
    uu(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? le(!1, "Draggable isClone prop value changed during component life") : le(!1));
    }, [e]);
  });
}
function Qo(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find required context") : le()), t;
}
function BB(e) {
  e.preventDefault();
}
const FB = (e) => {
  const t = L(null), r = ut((v = null) => {
    t.current = v;
  }, []), o = ut(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Qo(lu), {
    type: s,
    droppableId: c
  } = Qo(pu), u = Ot(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (MB(e, n, o), LB(b), !b) {
    const v = Ot(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    VB(v);
  }
  const w = Ot(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: BB
  } : null, [n, i, l, d]), E = ut((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = Ot(() => {
    const v = TB(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = Ot(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var jB = FB, dx = (e, t) => e === t, px = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const WB = (e) => e.combine ? e.combine.draggableId : null, GB = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function kB() {
  const e = $t((o, n) => ({
    x: o,
    y: n
  })), t = $t((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = $t((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (du(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = $o(o.impact), c = GB(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = px(c), l = WB(c), d = {
        duration: o.dropDuration,
        curve: cu.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Xn.opacity.drop : null,
        scale: l ? Xn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function fx(e = null) {
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
const zB = {
  mapped: {
    type: "SECONDARY",
    offset: Wr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: fx(null)
  }
};
function HB() {
  const e = $t((i, a) => ({
    x: i,
    y: a
  })), t = $t(fx), r = $t((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Wr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = dB(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = eB(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (du(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const UB = () => {
  const e = kB(), t = HB();
  return (r, o) => e(r, o) || t(r, o) || zB;
}, qB = {
  dropAnimationFinished: gB
}, YB = JE(UB, qB, null, {
  context: ax,
  areStatePropsEqual: dx
})(jB);
var KB = YB;
function XB(e) {
  return Qo(pu).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(KB, e);
}
const fu = (e) => (t) => e === t, JB = fu("scroll"), ZB = fu("auto"), QB = fu("visible"), Zm = (e, t) => t(e.overflowX) || t(e.overflowY), eF = (e, t) => t(e.overflowX) && t(e.overflowY), mx = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Zm(r, JB) || Zm(r, ZB);
}, tF = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = SB(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, le()), !mx(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return eF(o, QB) || process.env.NODE_ENV !== "production" && yr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, mu = (e) => e == null ? null : e === document.body ? tF() ? e : null : e === document.documentElement ? null : mx(e) ? e : mu(e.parentElement);
var rF = (e) => {
  !e || !mu(e.parentElement) || process.env.NODE_ENV !== "production" && yr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ec = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const gx = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : gx(e.parentElement) : !1;
var nF = (e) => {
  const t = mu(e), r = gx(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, oF = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = nx({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Wr,
          displacement: Wr
        }
      }
    };
  })(), u = n === "vertical" ? pB : fB, m = cB({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const iF = (e, t) => {
  const r = tx(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = QE({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return su({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var aF = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = iF(e, c), m = Js(u, o), l = (() => {
    if (!c)
      return null;
    const d = tx(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Js(d, o),
      scroll: ec(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return oF({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const sF = {
  passive: !1
}, cF = {
  passive: !0
};
var Qm = (e) => e.shouldPublishImmediately ? sF : cF;
const yo = (e) => e && e.env.closestScrollable || null;
function lF(e) {
  const t = L(null), r = Qo(lu), o = cx("droppable"), {
    registry: n,
    marshal: i
  } = r, a = CB(e), s = Ot(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = Ot(() => $t((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? le(!1, "Can only update scroll when dragging") : le());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = ut(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Wr : ec(y.env.closestScrollable);
  }, []), l = ut(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = Ot(() => WL(l), [l]), g = ut(() => {
    const y = t.current, f = yo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find scroll options while scrolling") : le()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = ut((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? le(!1, "Cannot collect a droppable while a drag is occurring") : le());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot collect without a droppable ref") : le());
    const C = nF(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = aF({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Xm.contextId, r.contextId), A.addEventListener("scroll", g, Qm(R.scrollOptions)), process.env.NODE_ENV !== "production" && rF(A)), $;
  }, [r.contextId, s, g, a]), b = ut(() => {
    const y = t.current, f = yo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? le(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : le()), ec(f);
  }, []), p = ut(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot stop drag when no active drag") : le());
    const f = yo(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(Xm.contextId), f.removeEventListener("scroll", g, Qm(y.scrollOptions)));
  }, [g, d]), x = ut((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot scroll when there is no drag") : le());
    const v = yo(f);
    v || (process.env.NODE_ENV !== "production" ? le(!1, "Cannot scroll a droppable with no closest scrollable") : le()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = Ot(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = Ot(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Cn(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && yr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Cn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Cn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ha() {
}
const uF = {
  width: 0,
  height: 0,
  margin: oB
}, dF = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? uF : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, pF = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = dF({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? Ao.placeholder : null
  };
}, fF = (e) => {
  const t = L(null), r = ut(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), ha) : t.current ? ha : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : ha, [o, s, r]);
  const u = ut((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = pF({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var mF = _.memo(fF);
function ya(e) {
  return typeof e == "boolean";
}
function va(e, t) {
  t.forEach((r) => r(e));
}
const gF = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? le(!1, "A Droppable requires a droppableId prop") : le()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? le(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : le());
}, function({
  props: e
}) {
  ya(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? le(!1, "isDropDisabled must be a boolean") : le()), ya(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? le(!1, "isCombineEnabled must be a boolean") : le()), ya(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? le(!1, "ignoreContainerClipping must be a boolean") : le());
}, function({
  getDroppableRef: e
}) {
  ux(e());
}], bF = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && yr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], hF = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? le(!1, "Must provide a clone render function (renderClone) for virtual lists") : le());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? le(!1, "Expected virtual list to not have a placeholder") : le());
}];
function yF(e) {
  uu(() => {
    va(e, gF), e.props.mode === "standard" && va(e, bF), e.props.mode === "virtual" && va(e, hF);
  });
}
class vF extends _.PureComponent {
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
const EF = (e) => {
  const t = yt(lu);
  t || (process.env.NODE_ENV !== "production" ? le(!1, "Could not find app context") : le());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = ut(() => n.current, []), E = ut((P = null) => {
    n.current = P;
  }, []), y = ut(() => i.current, []), f = ut((P = null) => {
    i.current = P;
  }, []);
  yF({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = ut(() => {
    o() && p({
      maxScroll: yB()
    });
  }, [o, p]);
  lF({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = Ot(() => _.createElement(vF, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(mF, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Ot(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = Ot(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(XB, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(pu.Provider, {
    value: $
  }, a(C, h), A());
};
var xF = EF;
function OF() {
  return document.body || (process.env.NODE_ENV !== "production" ? le(!1, "document.body is not ready") : le()), document.body;
}
const eg = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: OF
}, bx = (e) => {
  let t = {
    ...e
  }, r;
  for (r in eg)
    e[r] === void 0 && (t = {
      ...t,
      [r]: eg[r]
    });
  return t;
}, Ea = (e, t) => e === t.droppable.type, tg = (e, t) => t.draggables[e.draggable.id], SF = () => {
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
  }, r = $t((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = $t((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = bx(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (du(n)) {
      const l = n.critical;
      if (!Ea(c, l))
        return t;
      const d = tg(l, n.dimensions), g = $o(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Ea(c, l.critical))
        return t;
      const d = tg(l.critical, n.dimensions);
      return o(s, u, px(l.result) === s, $o(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Ea(c, l.critical))
        return t;
      const d = $o(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, wF = {
  updateViewportMaxScroll: mB
};
JE(SF, wF, (e, t, r) => ({
  ...bx(r),
  ...e,
  ...t
}), {
  context: ax,
  areStatePropsEqual: dx
})(xF);
var rg;
(function(e) {
  e.event = "event", e.props = "prop";
})(rg || (rg = {}));
var ng = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + ng(), "" + ng();
function DF(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tc = { exports: {} }, xa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og;
function NF() {
  if (og) return xa;
  og = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return xa.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, xa;
}
var ig = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag;
function CF() {
  return ag || (ag = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    ig.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ig;
}
process.env.NODE_ENV === "production" ? tc.exports = NF() : tc.exports = CF();
var gu = tc.exports, Oa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sg;
function _F() {
  if (sg) return Oa;
  sg = 1;
  var e = _, t = gu;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Oa.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Oa;
}
var cg = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lg;
function IF() {
  return lg || (lg = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = gu, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    cg.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), cg;
}
process.env.NODE_ENV === "production" ? _F() : IF();
function PF(e) {
  e();
}
let hx = PF;
const $F = (e) => hx = e, AF = () => hx, ug = Symbol.for("react-redux-context"), dg = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function TF() {
  var e;
  if (!N.createContext) return {};
  const t = (e = dg[ug]) != null ? e : dg[ug] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const RF = /* @__PURE__ */ TF(), VF = () => {
  throw new Error("uSES not initialized!");
};
function sn() {
  return sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, sn.apply(null, arguments);
}
function yx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var rc = { exports: {} }, $e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg;
function MF() {
  if (pg) return $e;
  pg = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return $e.AsyncMode = c, $e.ConcurrentMode = u, $e.ContextConsumer = s, $e.ContextProvider = a, $e.Element = t, $e.ForwardRef = m, $e.Fragment = o, $e.Lazy = h, $e.Memo = g, $e.Portal = r, $e.Profiler = i, $e.StrictMode = n, $e.Suspense = l, $e.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, $e.isConcurrentMode = y, $e.isContextConsumer = function(f) {
    return E(f) === s;
  }, $e.isContextProvider = function(f) {
    return E(f) === a;
  }, $e.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, $e.isForwardRef = function(f) {
    return E(f) === m;
  }, $e.isFragment = function(f) {
    return E(f) === o;
  }, $e.isLazy = function(f) {
    return E(f) === h;
  }, $e.isMemo = function(f) {
    return E(f) === g;
  }, $e.isPortal = function(f) {
    return E(f) === r;
  }, $e.isProfiler = function(f) {
    return E(f) === i;
  }, $e.isStrictMode = function(f) {
    return E(f) === n;
  }, $e.isSuspense = function(f) {
    return E(f) === l;
  }, $e.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, $e.typeOf = E, $e;
}
var Ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fg;
function LF() {
  return fg || (fg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Ye.AsyncMode = f, Ye.ConcurrentMode = v, Ye.ContextConsumer = D, Ye.ContextProvider = C, Ye.Element = R, Ye.ForwardRef = $, Ye.Fragment = A, Ye.Lazy = P, Ye.Memo = T, Ye.Portal = j, Ye.Profiler = k, Ye.StrictMode = V, Ye.Suspense = W, Ye.isAsyncMode = G, Ye.isConcurrentMode = z, Ye.isContextConsumer = B, Ye.isContextProvider = q, Ye.isElement = Y, Ye.isForwardRef = K, Ye.isFragment = Z, Ye.isLazy = re, Ye.isMemo = U, Ye.isPortal = X, Ye.isProfiler = M, Ye.isStrictMode = J, Ye.isSuspense = be, Ye.isValidElementType = E, Ye.typeOf = y;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? rc.exports = MF() : rc.exports = LF();
var BF = rc.exports, bu = BF, FF = {
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
}, jF = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, WF = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vx = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hu = {};
hu[bu.ForwardRef] = WF;
hu[bu.Memo] = vx;
function mg(e) {
  return bu.isMemo(e) ? vx : hu[e.$$typeof] || FF;
}
var GF = Object.defineProperty, kF = Object.getOwnPropertyNames, gg = Object.getOwnPropertySymbols, zF = Object.getOwnPropertyDescriptor, HF = Object.getPrototypeOf, bg = Object.prototype;
function Ex(e, t, r) {
  if (typeof t != "string") {
    if (bg) {
      var o = HF(t);
      o && o !== bg && Ex(e, o, r);
    }
    var n = kF(t);
    gg && (n = n.concat(gg(t)));
    for (var i = mg(e), a = mg(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!jF[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = zF(t, c);
        try {
          GF(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var UF = Ex;
const hg = /* @__PURE__ */ DF(UF);
var nc = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg;
function qF() {
  if (yg) return Ae;
  yg = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Ae.ContextConsumer = a, Ae.ContextProvider = i, Ae.Element = e, Ae.ForwardRef = c, Ae.Fragment = r, Ae.Lazy = d, Ae.Memo = l, Ae.Portal = t, Ae.Profiler = n, Ae.StrictMode = o, Ae.Suspense = u, Ae.SuspenseList = m, Ae.isAsyncMode = function() {
    return !1;
  }, Ae.isConcurrentMode = function() {
    return !1;
  }, Ae.isContextConsumer = function(p) {
    return b(p) === a;
  }, Ae.isContextProvider = function(p) {
    return b(p) === i;
  }, Ae.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ae.isForwardRef = function(p) {
    return b(p) === c;
  }, Ae.isFragment = function(p) {
    return b(p) === r;
  }, Ae.isLazy = function(p) {
    return b(p) === d;
  }, Ae.isMemo = function(p) {
    return b(p) === l;
  }, Ae.isPortal = function(p) {
    return b(p) === t;
  }, Ae.isProfiler = function(p) {
    return b(p) === n;
  }, Ae.isStrictMode = function(p) {
    return b(p) === o;
  }, Ae.isSuspense = function(p) {
    return b(p) === u;
  }, Ae.isSuspenseList = function(p) {
    return b(p) === m;
  }, Ae.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ae.typeOf = b, Ae;
}
var Ke = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg;
function YF() {
  return vg || (vg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    Ke.ContextConsumer = v, Ke.ContextProvider = D, Ke.Element = C, Ke.ForwardRef = R, Ke.Fragment = $, Ke.Lazy = A, Ke.Memo = P, Ke.Portal = T, Ke.Profiler = j, Ke.StrictMode = k, Ke.Suspense = V, Ke.SuspenseList = W, Ke.isAsyncMode = z, Ke.isConcurrentMode = B, Ke.isContextConsumer = q, Ke.isContextProvider = Y, Ke.isElement = K, Ke.isForwardRef = Z, Ke.isFragment = re, Ke.isLazy = U, Ke.isMemo = X, Ke.isPortal = M, Ke.isProfiler = J, Ke.isStrictMode = be, Ke.isSuspense = O, Ke.isSuspenseList = te, Ke.isValidElementType = y, Ke.typeOf = f;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? nc.exports = qF() : nc.exports = YF();
var Eg = nc.exports;
function yu(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Sa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || yu(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function KF(e, t, r) {
  Sa(e, "mapStateToProps"), Sa(t, "mapDispatchToProps"), Sa(r, "mergeProps");
}
const XF = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function JF(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function ZF(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = yx(t, XF);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && KF(a, s, c), JF(a, s, c, e, i);
}
function QF(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function ej(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function xx(e, t, r) {
  ej(e) || yu(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function oc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function xg(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ox(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = xg(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = xg(s), s = n(i, a)), process.env.NODE_ENV !== "production" && xx(s, o, t), s;
    }, n;
  };
}
function vu(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function tj(e) {
  return e && typeof e == "object" ? oc((t) => (
    // @ts-ignore
    QF(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ox(e, "mapDispatchToProps")
  ) : vu(e, "mapDispatchToProps") : oc((t) => ({
    dispatch: t
  }));
}
function rj(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ox(e, "mapStateToProps")
  ) : vu(e, "mapStateToProps") : oc(() => ({}));
}
function nj(e, t, r) {
  return sn({}, r, e, t);
}
function oj(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && xx(i, r, "mergeProps")), i;
    };
  };
}
function ij(e) {
  return e ? typeof e == "function" ? oj(e) : vu(e, "mergeProps") : () => nj;
}
function aj() {
  const e = AF();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Og = {
  notify() {
  },
  get: () => []
};
function sj(e, t) {
  let r, o = Og, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = aj());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Og);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const cj = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ic = cj ? N.useLayoutEffect : N.useEffect;
function Sg(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function wa(e, t) {
  if (Sg(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Sg(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const lj = ["reactReduxForwardedRef"];
let Sx = VF;
const uj = (e) => {
  Sx = e;
}, dj = [null, null], pj = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function fj(e, t, r) {
  ic(() => e(...t), r);
}
function mj(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function gj(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function bj(e, t) {
  return e === t;
}
let wg = !1;
function wx(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = bj,
  areOwnPropsEqual: i = wa,
  areStatePropsEqual: a = wa,
  areMergedPropsEqual: s = wa,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = RF
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !wg && (wg = !0, yu('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = rj(e), d = tj(t), g = ij(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Eg.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${pj(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = yx(f, lj);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Eg.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => ZF(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return dj;
        const M = sj(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : sn({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      ic(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? gj(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      fj(mj, [z, G, q, C, B, W]);
      let U;
      try {
        U = Sx(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      ic(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, sn({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, sn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, hg(f, b);
    }
    return hg(y, b);
  };
}
uj(gu.useSyncExternalStore);
$F(ar);
function hj(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Dx(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && hj(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function yj(e, t) {
  return Dx(function() {
    return e;
  }, t);
}
var St = Dx, dt = yj, vj = process.env.NODE_ENV === "production", Da = "Invariant failed";
function Dg(e, t) {
  if (vj)
    throw new Error(Da);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Da, ": ").concat(r) : Da;
  throw new Error(o);
}
var Jr = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, Nx = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Ng = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Ej = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Na = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Eu = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Na : r, n = e.border, i = n === void 0 ? Na : n, a = e.padding, s = a === void 0 ? Na : a, c = Jr(Nx(t, o)), u = Jr(Ng(t, i)), m = Jr(Ng(u, s));
  return {
    marginBox: c,
    borderBox: Jr(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, qt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Dg(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Dg()), o;
}, xj = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Oj = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = Ej(r, t);
  return Eu({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ac = function(e, t) {
  return t === void 0 && (t = xj()), Oj(e, t);
}, Cx = function(e, t) {
  var r = {
    top: qt(t.marginTop),
    right: qt(t.marginRight),
    bottom: qt(t.marginBottom),
    left: qt(t.marginLeft)
  }, o = {
    top: qt(t.paddingTop),
    right: qt(t.paddingRight),
    bottom: qt(t.paddingBottom),
    left: qt(t.paddingLeft)
  }, n = {
    top: qt(t.borderTopWidth),
    right: qt(t.borderRightWidth),
    bottom: qt(t.borderBottomWidth),
    left: qt(t.borderLeftWidth)
  };
  return Eu({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, _x = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Cx(t, r);
}, Cg = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Sj(e, t) {
  return !!(e === t || Cg(e) && Cg(t));
}
function wj(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Sj(e[r], t[r]))
      return !1;
  return !0;
}
function At(e, t) {
  t === void 0 && (t = wj);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var Dj = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Nj = process.env.NODE_ENV === "production", Cj = /[ \t]{2,}/g, _j = /^[ \t]*/gm, _g = (e) => e.replace(Cj, " ").replace(_j, "").trim(), Ij = (e) => _g(`
  %c@hello-pangea/dnd

  %c${_g(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Pj = (e) => [Ij(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], $j = "__@hello-pangea/dnd-disable-dev-warnings";
function Ix(e, t) {
  Nj || typeof window < "u" && window[$j] || console[e](...Pj(t));
}
const vr = Ix.bind(null, "warn"), sc = Ix.bind(null, "error");
function Aj() {
}
function Tj(e, t) {
  return {
    ...e,
    ...t
  };
}
function Rj(e, t, r) {
  const o = t.map((n) => {
    const i = Tj(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const Vj = process.env.NODE_ENV === "production", Ig = "Invariant failed";
class Jn extends Error {
}
Jn.prototype.toString = function() {
  return this.message;
};
function ue(e, t) {
  throw Vj ? new Jn(Ig) : new Jn(`${Ig}: ${t || ""}`);
}
class F2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Aj, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && vr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Jn && (r.preventDefault(), process.env.NODE_ENV !== "production" && sc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Rj(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Jn) {
      process.env.NODE_ENV !== "production" && sc(t.message), this.setState({});
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
const Gr = {
  x: 0,
  y: 0
}, Mj = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Lj = (e, t) => e.x === t.x && e.y === t.y, Bj = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Fj = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var jj = (e, t) => {
  const r = Jr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Wj = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Gj = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, kj = (e, t) => t ? Wj(e, t.scroll.diff.displacement) : e, zj = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Hj = (e, t) => t && t.shouldClipSubject ? jj(t.pageMarginBox, e) : Jr(e);
var Uj = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = kj(e.marginBox, o), i = zj(n, r, t), a = Hj(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
At((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
At((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const qj = At((e) => Object.values(e)), Yj = At((e) => Object.values(e));
At((e, t) => Yj(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Kj(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
At((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const Xj = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Jj = {
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
At(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: Fj(e.line, r)
  };
});
var To = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Zj = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Qj = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), xu = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Zn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, eW = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ir = `${eW.outOfTheWay}s ${xu.outOfTheWay}`, Ro = {
  fluid: `opacity ${Ir}`,
  snap: `transform ${Ir}, opacity ${Ir}`,
  drop: (e) => {
    const t = `${e}s ${xu.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ir}`,
  placeholder: `height ${Ir}, width ${Ir}, margin ${Ir}`
}, Pg = (e) => Lj(e, Gr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, cc = {
  moveTo: Pg,
  drop: (e, t) => {
    const r = Pg(e);
    if (r)
      return t ? `${r} scale(${Zn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Px = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = Mj({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, tW = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot find document.documentElement") : ue()), e;
}, rW = () => {
  const e = tW();
  return Px({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
At((e) => qj(e).filter((t) => !(!t.isEnabled || !t.frame)));
const $x = "data-rfd", $g = (() => {
  const e = `${$x}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ag = {
  contextId: `${$x}-scroll-container-context-id`
}, nW = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var _n = nW;
function oW(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var iW = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ax(e) {
  return e instanceof iW(e).HTMLElement;
}
function aW(e, t) {
  const r = `[${$g.contextId}="${e}"]`, o = oW(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && vr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute($g.draggableId) === t);
  return n ? Ax(n) ? n : (process.env.NODE_ENV !== "production" && vr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && vr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var Tx = _.createContext(null), sW = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot find document.body") : ue()), e;
};
let cW = 0;
const Rx = {
  separator: "::"
};
function lW(e, t = Rx) {
  return St(() => `${e}${t.separator}${cW++}`, [t.separator, e]);
}
function uW(e, t = Rx) {
  const r = _.useId();
  return St(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Vx = "useId" in _ ? uW : lW, Ou = _.createContext(null);
function Mx(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Su(e, t) {
  Mx(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        sc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function dW(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function wu(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Tg = {
  dragging: 5e3,
  dropAnimating: 4500
}, pW = (e, t) => t ? Ro.drop(t.duration) : e ? Ro.snap : Ro.fluid, fW = (e, t) => {
  if (e)
    return t ? Zn.opacity.drop : Zn.opacity.combining;
}, mW = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function gW(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = mW(e), s = !!n, c = s ? cc.drop(r, i) : cc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: pW(a, n),
    transform: c,
    opacity: fW(i, s),
    zIndex: s ? Tg.dropAnimating : Tg.dragging,
    pointerEvents: "none"
  };
}
function bW(e) {
  return {
    transform: cc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function hW(e) {
  return e.type === "DRAGGING" ? gW(e) : bW(e);
}
function yW(e, t, r = Gr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Cx(n, o), a = ac(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function vW(e) {
  const t = Vx("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = St(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = dt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot get dimension when no ref is set") : ue()), yW(r, h, g);
  }, [r, n]), m = St(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  _n(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), _n(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Du = _.createContext(null);
function Lx(e) {
  e && Ax(e) || (process.env.NODE_ENV !== "production" ? ue(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ue());
}
function EW(e, t, r) {
  Su(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ue(!1, "Draggable requires a draggableId") : ue(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ue(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ue(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ue(!1, `${o(n)} requires an integer index prop`) : ue(!1)), e.mapped.type !== "DRAGGING" && (Lx(r()), e.isEnabled && (aW(t, n) || (process.env.NODE_ENV !== "production" ? ue(!1, `${o(n)} Unable to find drag handle`) : ue(!1))));
  });
}
function xW(e) {
  Mx(() => {
    const t = L(e);
    Su(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ue(!1, "Draggable isClone prop value changed during component life") : ue(!1));
    }, [e]);
  });
}
function ei(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find required context") : ue()), t;
}
function OW(e) {
  e.preventDefault();
}
const SW = (e) => {
  const t = L(null), r = dt((v = null) => {
    t.current = v;
  }, []), o = dt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = ei(Ou), {
    type: s,
    droppableId: c
  } = ei(Du), u = St(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (EW(e, n, o), xW(b), !b) {
    const v = St(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    vW(v);
  }
  const w = St(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: OW
  } : null, [n, i, l, d]), E = dt((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = St(() => {
    const v = hW(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = St(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var wW = SW, Bx = (e, t) => e === t, Fx = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const DW = (e) => e.combine ? e.combine.draggableId : null, NW = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function CW() {
  const e = At((o, n) => ({
    x: o,
    y: n
  })), t = At((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = At((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (wu(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = To(o.impact), c = NW(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = Fx(c), l = DW(c), d = {
        duration: o.dropDuration,
        curve: xu.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? Zn.opacity.drop : null,
        scale: l ? Zn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function jx(e = null) {
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
const _W = {
  mapped: {
    type: "SECONDARY",
    offset: Gr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: jx(null)
  }
};
function IW() {
  const e = At((i, a) => ({
    x: i,
    y: a
  })), t = At(jx), r = At((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Gr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = Kj(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = Bj(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (wu(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const PW = () => {
  const e = CW(), t = IW();
  return (r, o) => e(r, o) || t(r, o) || _W;
}, $W = {
  dropAnimationFinished: Qj
}, AW = wx(PW, $W, null, {
  context: Tx,
  areStatePropsEqual: Bx
})(wW);
var TW = AW;
function RW(e) {
  return ei(Du).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(TW, e);
}
const Nu = (e) => (t) => e === t, VW = Nu("scroll"), MW = Nu("auto"), LW = Nu("visible"), Rg = (e, t) => t(e.overflowX) || t(e.overflowY), BW = (e, t) => t(e.overflowX) && t(e.overflowY), Wx = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Rg(r, VW) || Rg(r, MW);
}, FW = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = sW(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ue()), !Wx(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return BW(o, LW) || process.env.NODE_ENV !== "production" && vr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Cu = (e) => e == null ? null : e === document.body ? FW() ? e : null : e === document.documentElement ? null : Wx(e) ? e : Cu(e.parentElement);
var jW = (e) => {
  !e || !Cu(e.parentElement) || process.env.NODE_ENV !== "production" && vr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, lc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Gx = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Gx(e.parentElement) : !1;
var WW = (e) => {
  const t = Cu(e), r = Gx(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, GW = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = Px({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Gr,
          displacement: Gr
        }
      }
    };
  })(), u = n === "vertical" ? Xj : Jj, m = Uj({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const kW = (e, t) => {
  const r = _x(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Nx({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Eu({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var zW = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = kW(e, c), m = ac(u, o), l = (() => {
    if (!c)
      return null;
    const d = _x(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: ac(d, o),
      scroll: lc(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return GW({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const HW = {
  passive: !1
}, UW = {
  passive: !0
};
var Vg = (e) => e.shouldPublishImmediately ? HW : UW;
const vo = (e) => e && e.env.closestScrollable || null;
function qW(e) {
  const t = L(null), r = ei(Ou), o = Vx("droppable"), {
    registry: n,
    marshal: i
  } = r, a = dW(e), s = St(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = St(() => At((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? ue(!1, "Can only update scroll when dragging") : ue());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = dt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Gr : lc(y.env.closestScrollable);
  }, []), l = dt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = St(() => Dj(l), [l]), g = dt(() => {
    const y = t.current, f = vo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find scroll options while scrolling") : ue()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = dt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot collect a droppable while a drag is occurring") : ue());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot collect without a droppable ref") : ue());
    const C = WW(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = zW({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Ag.contextId, r.contextId), A.addEventListener("scroll", g, Vg(R.scrollOptions)), process.env.NODE_ENV !== "production" && jW(A)), $;
  }, [r.contextId, s, g, a]), b = dt(() => {
    const y = t.current, f = vo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? ue(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ue()), lc(f);
  }, []), p = dt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot stop drag when no active drag") : ue());
    const f = vo(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(Ag.contextId), f.removeEventListener("scroll", g, Vg(y.scrollOptions)));
  }, [g, d]), x = dt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot scroll when there is no drag") : ue());
    const v = vo(f);
    v || (process.env.NODE_ENV !== "production" ? ue(!1, "Cannot scroll a droppable with no closest scrollable") : ue()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = St(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = St(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  _n(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && vr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), _n(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), _n(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ca() {
}
const YW = {
  width: 0,
  height: 0,
  margin: Gj
}, KW = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? YW : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, XW = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = KW({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? Ro.placeholder : null
  };
}, JW = (e) => {
  const t = L(null), r = dt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), Ca) : t.current ? Ca : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Ca, [o, s, r]);
  const u = dt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = XW({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var ZW = _.memo(JW);
function _a(e) {
  return typeof e == "boolean";
}
function Ia(e, t) {
  t.forEach((r) => r(e));
}
const QW = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ue(!1, "A Droppable requires a droppableId prop") : ue()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ue(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ue());
}, function({
  props: e
}) {
  _a(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ue(!1, "isDropDisabled must be a boolean") : ue()), _a(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ue(!1, "isCombineEnabled must be a boolean") : ue()), _a(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ue(!1, "ignoreContainerClipping must be a boolean") : ue());
}, function({
  getDroppableRef: e
}) {
  Lx(e());
}], eG = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && vr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], tG = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ue(!1, "Must provide a clone render function (renderClone) for virtual lists") : ue());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ue(!1, "Expected virtual list to not have a placeholder") : ue());
}];
function rG(e) {
  Su(() => {
    Ia(e, QW), e.props.mode === "standard" && Ia(e, eG), e.props.mode === "virtual" && Ia(e, tG);
  });
}
class nG extends _.PureComponent {
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
const oG = (e) => {
  const t = yt(Ou);
  t || (process.env.NODE_ENV !== "production" ? ue(!1, "Could not find app context") : ue());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = dt(() => n.current, []), E = dt((P = null) => {
    n.current = P;
  }, []), y = dt(() => i.current, []), f = dt((P = null) => {
    i.current = P;
  }, []);
  rG({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = dt(() => {
    o() && p({
      maxScroll: rW()
    });
  }, [o, p]);
  qW({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = St(() => _.createElement(nG, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(ZW, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = St(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = St(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(RW, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(Du.Provider, {
    value: $
  }, a(C, h), A());
};
var iG = oG;
function aG() {
  return document.body || (process.env.NODE_ENV !== "production" ? ue(!1, "document.body is not ready") : ue()), document.body;
}
const Mg = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: aG
}, kx = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Mg)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Mg[r]
    });
  return t;
}, Pa = (e, t) => e === t.droppable.type, Lg = (e, t) => t.draggables[e.draggable.id], sG = () => {
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
  }, r = At((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = At((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = kx(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (wu(n)) {
      const l = n.critical;
      if (!Pa(c, l))
        return t;
      const d = Lg(l, n.dimensions), g = To(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Pa(c, l.critical))
        return t;
      const d = Lg(l.critical, n.dimensions);
      return o(s, u, Fx(l.result) === s, To(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Pa(c, l.critical))
        return t;
      const d = To(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, cG = {
  updateViewportMaxScroll: Zj
};
wx(sG, cG, (e, t, r) => ({
  ...kx(r),
  ...e,
  ...t
}), {
  context: Tx,
  areStatePropsEqual: Bx
})(iG);
var Bg;
(function(e) {
  e.event = "event", e.props = "prop";
})(Bg || (Bg = {}));
var Fg = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Fg(), "" + Fg();
function lG(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uc = { exports: {} }, $a = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jg;
function uG() {
  if (jg) return $a;
  jg = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return $a.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, $a;
}
var Wg = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg;
function dG() {
  return Gg || (Gg = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Wg.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Wg;
}
process.env.NODE_ENV === "production" ? uc.exports = uG() : uc.exports = dG();
var _u = uc.exports, Aa = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kg;
function pG() {
  if (kg) return Aa;
  kg = 1;
  var e = _, t = _u;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Aa.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Aa;
}
var zg = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hg;
function fG() {
  return Hg || (Hg = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = _u, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    zg.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), zg;
}
process.env.NODE_ENV === "production" ? pG() : fG();
function mG(e) {
  e();
}
let zx = mG;
const gG = (e) => zx = e, bG = () => zx, Ug = Symbol.for("react-redux-context"), qg = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function hG() {
  var e;
  if (!N.createContext) return {};
  const t = (e = qg[Ug]) != null ? e : qg[Ug] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const yG = /* @__PURE__ */ hG(), vG = () => {
  throw new Error("uSES not initialized!");
};
function cn() {
  return cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, cn.apply(null, arguments);
}
function Hx(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var dc = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yg;
function EG() {
  if (Yg) return Te;
  Yg = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return Te.AsyncMode = c, Te.ConcurrentMode = u, Te.ContextConsumer = s, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = m, Te.Fragment = o, Te.Lazy = h, Te.Memo = g, Te.Portal = r, Te.Profiler = i, Te.StrictMode = n, Te.Suspense = l, Te.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, Te.isConcurrentMode = y, Te.isContextConsumer = function(f) {
    return E(f) === s;
  }, Te.isContextProvider = function(f) {
    return E(f) === a;
  }, Te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, Te.isForwardRef = function(f) {
    return E(f) === m;
  }, Te.isFragment = function(f) {
    return E(f) === o;
  }, Te.isLazy = function(f) {
    return E(f) === h;
  }, Te.isMemo = function(f) {
    return E(f) === g;
  }, Te.isPortal = function(f) {
    return E(f) === r;
  }, Te.isProfiler = function(f) {
    return E(f) === i;
  }, Te.isStrictMode = function(f) {
    return E(f) === n;
  }, Te.isSuspense = function(f) {
    return E(f) === l;
  }, Te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, Te.typeOf = E, Te;
}
var Xe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kg;
function xG() {
  return Kg || (Kg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Xe.AsyncMode = f, Xe.ConcurrentMode = v, Xe.ContextConsumer = D, Xe.ContextProvider = C, Xe.Element = R, Xe.ForwardRef = $, Xe.Fragment = A, Xe.Lazy = P, Xe.Memo = T, Xe.Portal = j, Xe.Profiler = k, Xe.StrictMode = V, Xe.Suspense = W, Xe.isAsyncMode = G, Xe.isConcurrentMode = z, Xe.isContextConsumer = B, Xe.isContextProvider = q, Xe.isElement = Y, Xe.isForwardRef = K, Xe.isFragment = Z, Xe.isLazy = re, Xe.isMemo = U, Xe.isPortal = X, Xe.isProfiler = M, Xe.isStrictMode = J, Xe.isSuspense = be, Xe.isValidElementType = E, Xe.typeOf = y;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? dc.exports = EG() : dc.exports = xG();
var OG = dc.exports, Iu = OG, SG = {
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
}, wG = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, DG = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ux = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Pu = {};
Pu[Iu.ForwardRef] = DG;
Pu[Iu.Memo] = Ux;
function Xg(e) {
  return Iu.isMemo(e) ? Ux : Pu[e.$$typeof] || SG;
}
var NG = Object.defineProperty, CG = Object.getOwnPropertyNames, Jg = Object.getOwnPropertySymbols, _G = Object.getOwnPropertyDescriptor, IG = Object.getPrototypeOf, Zg = Object.prototype;
function qx(e, t, r) {
  if (typeof t != "string") {
    if (Zg) {
      var o = IG(t);
      o && o !== Zg && qx(e, o, r);
    }
    var n = CG(t);
    Jg && (n = n.concat(Jg(t)));
    for (var i = Xg(e), a = Xg(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!wG[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = _G(t, c);
        try {
          NG(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var PG = qx;
const Qg = /* @__PURE__ */ lG(PG);
var pc = { exports: {} }, Re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eb;
function $G() {
  if (eb) return Re;
  eb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Re.ContextConsumer = a, Re.ContextProvider = i, Re.Element = e, Re.ForwardRef = c, Re.Fragment = r, Re.Lazy = d, Re.Memo = l, Re.Portal = t, Re.Profiler = n, Re.StrictMode = o, Re.Suspense = u, Re.SuspenseList = m, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(p) {
    return b(p) === a;
  }, Re.isContextProvider = function(p) {
    return b(p) === i;
  }, Re.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Re.isForwardRef = function(p) {
    return b(p) === c;
  }, Re.isFragment = function(p) {
    return b(p) === r;
  }, Re.isLazy = function(p) {
    return b(p) === d;
  }, Re.isMemo = function(p) {
    return b(p) === l;
  }, Re.isPortal = function(p) {
    return b(p) === t;
  }, Re.isProfiler = function(p) {
    return b(p) === n;
  }, Re.isStrictMode = function(p) {
    return b(p) === o;
  }, Re.isSuspense = function(p) {
    return b(p) === u;
  }, Re.isSuspenseList = function(p) {
    return b(p) === m;
  }, Re.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Re.typeOf = b, Re;
}
var Je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tb;
function AG() {
  return tb || (tb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    Je.ContextConsumer = v, Je.ContextProvider = D, Je.Element = C, Je.ForwardRef = R, Je.Fragment = $, Je.Lazy = A, Je.Memo = P, Je.Portal = T, Je.Profiler = j, Je.StrictMode = k, Je.Suspense = V, Je.SuspenseList = W, Je.isAsyncMode = z, Je.isConcurrentMode = B, Je.isContextConsumer = q, Je.isContextProvider = Y, Je.isElement = K, Je.isForwardRef = Z, Je.isFragment = re, Je.isLazy = U, Je.isMemo = X, Je.isPortal = M, Je.isProfiler = J, Je.isStrictMode = be, Je.isSuspense = O, Je.isSuspenseList = te, Je.isValidElementType = y, Je.typeOf = f;
  }()), Je;
}
process.env.NODE_ENV === "production" ? pc.exports = $G() : pc.exports = AG();
var rb = pc.exports;
function $u(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ta(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || $u(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function TG(e, t, r) {
  Ta(e, "mapStateToProps"), Ta(t, "mapDispatchToProps"), Ta(r, "mergeProps");
}
const RG = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function VG(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function MG(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Hx(t, RG);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && TG(a, s, c), VG(a, s, c, e, i);
}
function LG(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function BG(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Yx(e, t, r) {
  BG(e) || $u(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function fc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function nb(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Kx(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = nb(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = nb(s), s = n(i, a)), process.env.NODE_ENV !== "production" && Yx(s, o, t), s;
    }, n;
  };
}
function Au(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function FG(e) {
  return e && typeof e == "object" ? fc((t) => (
    // @ts-ignore
    LG(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Kx(e, "mapDispatchToProps")
  ) : Au(e, "mapDispatchToProps") : fc((t) => ({
    dispatch: t
  }));
}
function jG(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Kx(e, "mapStateToProps")
  ) : Au(e, "mapStateToProps") : fc(() => ({}));
}
function WG(e, t, r) {
  return cn({}, r, e, t);
}
function GG(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && Yx(i, r, "mergeProps")), i;
    };
  };
}
function kG(e) {
  return e ? typeof e == "function" ? GG(e) : Au(e, "mergeProps") : () => WG;
}
function zG() {
  const e = bG();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const ob = {
  notify() {
  },
  get: () => []
};
function HG(e, t) {
  let r, o = ob, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = zG());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = ob);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const UG = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mc = UG ? N.useLayoutEffect : N.useEffect;
function ib(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ra(e, t) {
  if (ib(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !ib(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const qG = ["reactReduxForwardedRef"];
let Xx = vG;
const YG = (e) => {
  Xx = e;
}, KG = [null, null], XG = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function JG(e, t, r) {
  mc(() => e(...t), r);
}
function ZG(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function QG(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function ek(e, t) {
  return e === t;
}
let ab = !1;
function Jx(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = ek,
  areOwnPropsEqual: i = Ra,
  areStatePropsEqual: a = Ra,
  areMergedPropsEqual: s = Ra,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = yG
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !ab && (ab = !0, $u('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = jG(e), d = FG(t), g = kG(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !rb.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${XG(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = Hx(f, qG);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      rb.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => MG(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return KG;
        const M = HG(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : cn({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      mc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? QG(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      JG(ZG, [z, G, q, C, B, W]);
      let U;
      try {
        U = Xx(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      mc(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, cn({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, cn({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Qg(f, b);
    }
    return Qg(y, b);
  };
}
YG(_u.useSyncExternalStore);
gG(ar);
function tk(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Zx(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && tk(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function rk(e, t) {
  return Zx(function() {
    return e;
  }, t);
}
var wt = Zx, pt = rk, nk = process.env.NODE_ENV === "production", Va = "Invariant failed";
function sb(e, t) {
  if (nk)
    throw new Error(Va);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Va, ": ").concat(r) : Va;
  throw new Error(o);
}
var Zr = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, Qx = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, cb = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, ok = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Ma = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Tu = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Ma : r, n = e.border, i = n === void 0 ? Ma : n, a = e.padding, s = a === void 0 ? Ma : a, c = Zr(Qx(t, o)), u = Zr(cb(t, i)), m = Zr(cb(u, s));
  return {
    marginBox: c,
    borderBox: Zr(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Yt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? sb(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : sb()), o;
}, ik = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, ak = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = ok(r, t);
  return Tu({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, gc = function(e, t) {
  return t === void 0 && (t = ik()), ak(e, t);
}, eO = function(e, t) {
  var r = {
    top: Yt(t.marginTop),
    right: Yt(t.marginRight),
    bottom: Yt(t.marginBottom),
    left: Yt(t.marginLeft)
  }, o = {
    top: Yt(t.paddingTop),
    right: Yt(t.paddingRight),
    bottom: Yt(t.paddingBottom),
    left: Yt(t.paddingLeft)
  }, n = {
    top: Yt(t.borderTopWidth),
    right: Yt(t.borderRightWidth),
    bottom: Yt(t.borderBottomWidth),
    left: Yt(t.borderLeftWidth)
  };
  return Tu({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, tO = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return eO(t, r);
}, lb = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function sk(e, t) {
  return !!(e === t || lb(e) && lb(t));
}
function ck(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!sk(e[r], t[r]))
      return !1;
  return !0;
}
function Tt(e, t) {
  t === void 0 && (t = ck);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var lk = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const uk = process.env.NODE_ENV === "production", dk = /[ \t]{2,}/g, pk = /^[ \t]*/gm, ub = (e) => e.replace(dk, " ").replace(pk, "").trim(), fk = (e) => ub(`
  %c@hello-pangea/dnd

  %c${ub(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), mk = (e) => [fk(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], gk = "__@hello-pangea/dnd-disable-dev-warnings";
function rO(e, t) {
  uk || typeof window < "u" && window[gk] || console[e](...mk(t));
}
const Er = rO.bind(null, "warn"), bc = rO.bind(null, "error");
function bk() {
}
function hk(e, t) {
  return {
    ...e,
    ...t
  };
}
function yk(e, t, r) {
  const o = t.map((n) => {
    const i = hk(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const vk = process.env.NODE_ENV === "production", db = "Invariant failed";
class Qn extends Error {
}
Qn.prototype.toString = function() {
  return this.message;
};
function de(e, t) {
  throw vk ? new Qn(db) : new Qn(`${db}: ${t || ""}`);
}
class j2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = bk, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Er(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Qn && (r.preventDefault(), process.env.NODE_ENV !== "production" && bc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = yk(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Qn) {
      process.env.NODE_ENV !== "production" && bc(t.message), this.setState({});
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
const kr = {
  x: 0,
  y: 0
}, Ek = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), xk = (e, t) => e.x === t.x && e.y === t.y, Ok = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Sk = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var wk = (e, t) => {
  const r = Zr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Dk = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Nk = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ck = (e, t) => t ? Dk(e, t.scroll.diff.displacement) : e, _k = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Ik = (e, t) => t && t.shouldClipSubject ? wk(t.pageMarginBox, e) : Zr(e);
var Pk = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = Ck(e.marginBox, o), i = _k(n, r, t), a = Ik(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Tt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Tt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const $k = Tt((e) => Object.values(e)), Ak = Tt((e) => Object.values(e));
Tt((e, t) => Ak(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Tk(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Tt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const Rk = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Vk = {
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
Tt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: Sk(e.line, r)
  };
});
var Vo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Mk = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Lk = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Ru = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, eo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Bk = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Pr = `${Bk.outOfTheWay}s ${Ru.outOfTheWay}`, Mo = {
  fluid: `opacity ${Pr}`,
  snap: `transform ${Pr}, opacity ${Pr}`,
  drop: (e) => {
    const t = `${e}s ${Ru.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Pr}`,
  placeholder: `height ${Pr}, width ${Pr}, margin ${Pr}`
}, pb = (e) => xk(e, kr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, hc = {
  moveTo: pb,
  drop: (e, t) => {
    const r = pb(e);
    if (r)
      return t ? `${r} scale(${eo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var nO = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = Ek({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, Fk = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot find document.documentElement") : de()), e;
}, jk = () => {
  const e = Fk();
  return nO({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Tt((e) => $k(e).filter((t) => !(!t.isEnabled || !t.frame)));
const oO = "data-rfd", fb = (() => {
  const e = `${oO}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), mb = {
  contextId: `${oO}-scroll-container-context-id`
}, Wk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var In = Wk;
function Gk(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var kk = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function iO(e) {
  return e instanceof kk(e).HTMLElement;
}
function zk(e, t) {
  const r = `[${fb.contextId}="${e}"]`, o = Gk(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Er(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(fb.draggableId) === t);
  return n ? iO(n) ? n : (process.env.NODE_ENV !== "production" && Er("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Er(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var aO = _.createContext(null), Hk = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot find document.body") : de()), e;
};
let Uk = 0;
const sO = {
  separator: "::"
};
function qk(e, t = sO) {
  return wt(() => `${e}${t.separator}${Uk++}`, [t.separator, e]);
}
function Yk(e, t = sO) {
  const r = _.useId();
  return wt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var cO = "useId" in _ ? Yk : qk, Vu = _.createContext(null);
function lO(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Mu(e, t) {
  lO(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        bc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Kk(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function Lu(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const gb = {
  dragging: 5e3,
  dropAnimating: 4500
}, Xk = (e, t) => t ? Mo.drop(t.duration) : e ? Mo.snap : Mo.fluid, Jk = (e, t) => {
  if (e)
    return t ? eo.opacity.drop : eo.opacity.combining;
}, Zk = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Qk(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = Zk(e), s = !!n, c = s ? hc.drop(r, i) : hc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: Xk(a, n),
    transform: c,
    opacity: Jk(i, s),
    zIndex: s ? gb.dropAnimating : gb.dragging,
    pointerEvents: "none"
  };
}
function ez(e) {
  return {
    transform: hc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function tz(e) {
  return e.type === "DRAGGING" ? Qk(e) : ez(e);
}
function rz(e, t, r = kr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = eO(n, o), a = gc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function nz(e) {
  const t = cO("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = wt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = pt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot get dimension when no ref is set") : de()), rz(r, h, g);
  }, [r, n]), m = wt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  In(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), In(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Bu = _.createContext(null);
function uO(e) {
  e && iO(e) || (process.env.NODE_ENV !== "production" ? de(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : de());
}
function oz(e, t, r) {
  Mu(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? de(!1, "Draggable requires a draggableId") : de(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? de(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : de(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? de(!1, `${o(n)} requires an integer index prop`) : de(!1)), e.mapped.type !== "DRAGGING" && (uO(r()), e.isEnabled && (zk(t, n) || (process.env.NODE_ENV !== "production" ? de(!1, `${o(n)} Unable to find drag handle`) : de(!1))));
  });
}
function iz(e) {
  lO(() => {
    const t = L(e);
    Mu(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? de(!1, "Draggable isClone prop value changed during component life") : de(!1));
    }, [e]);
  });
}
function ti(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? de(!1, "Could not find required context") : de()), t;
}
function az(e) {
  e.preventDefault();
}
const sz = (e) => {
  const t = L(null), r = pt((v = null) => {
    t.current = v;
  }, []), o = pt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = ti(Vu), {
    type: s,
    droppableId: c
  } = ti(Bu), u = wt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (oz(e, n, o), iz(b), !b) {
    const v = wt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    nz(v);
  }
  const w = wt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: az
  } : null, [n, i, l, d]), E = pt((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = wt(() => {
    const v = tz(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = wt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var cz = sz, dO = (e, t) => e === t, pO = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const lz = (e) => e.combine ? e.combine.draggableId : null, uz = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function dz() {
  const e = Tt((o, n) => ({
    x: o,
    y: n
  })), t = Tt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Tt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Lu(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Vo(o.impact), c = uz(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = pO(c), l = lz(c), d = {
        duration: o.dropDuration,
        curve: Ru.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? eo.opacity.drop : null,
        scale: l ? eo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function fO(e = null) {
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
const pz = {
  mapped: {
    type: "SECONDARY",
    offset: kr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: fO(null)
  }
};
function fz() {
  const e = Tt((i, a) => ({
    x: i,
    y: a
  })), t = Tt(fO), r = Tt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(kr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = Tk(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = Ok(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Lu(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const mz = () => {
  const e = dz(), t = fz();
  return (r, o) => e(r, o) || t(r, o) || pz;
}, gz = {
  dropAnimationFinished: Lk
}, bz = Jx(mz, gz, null, {
  context: aO,
  areStatePropsEqual: dO
})(cz);
var hz = bz;
function yz(e) {
  return ti(Bu).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(hz, e);
}
const Fu = (e) => (t) => e === t, vz = Fu("scroll"), Ez = Fu("auto"), xz = Fu("visible"), bb = (e, t) => t(e.overflowX) || t(e.overflowY), Oz = (e, t) => t(e.overflowX) && t(e.overflowY), mO = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return bb(r, vz) || bb(r, Ez);
}, Sz = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = Hk(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, de()), !mO(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return Oz(o, xz) || process.env.NODE_ENV !== "production" && Er(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ju = (e) => e == null ? null : e === document.body ? Sz() ? e : null : e === document.documentElement ? null : mO(e) ? e : ju(e.parentElement);
var wz = (e) => {
  !e || !ju(e.parentElement) || process.env.NODE_ENV !== "production" && Er(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, yc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const gO = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : gO(e.parentElement) : !1;
var Dz = (e) => {
  const t = ju(e), r = gO(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, Nz = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = nO({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: kr,
          displacement: kr
        }
      }
    };
  })(), u = n === "vertical" ? Rk : Vk, m = Pk({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const Cz = (e, t) => {
  const r = tO(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Qx({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Tu({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var _z = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = Cz(e, c), m = gc(u, o), l = (() => {
    if (!c)
      return null;
    const d = tO(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: gc(d, o),
      scroll: yc(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return Nz({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const Iz = {
  passive: !1
}, Pz = {
  passive: !0
};
var hb = (e) => e.shouldPublishImmediately ? Iz : Pz;
const Eo = (e) => e && e.env.closestScrollable || null;
function $z(e) {
  const t = L(null), r = ti(Vu), o = cO("droppable"), {
    registry: n,
    marshal: i
  } = r, a = Kk(e), s = wt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = wt(() => Tt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? de(!1, "Can only update scroll when dragging") : de());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = pt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? kr : yc(y.env.closestScrollable);
  }, []), l = pt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = wt(() => lk(l), [l]), g = pt(() => {
    const y = t.current, f = Eo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? de(!1, "Could not find scroll options while scrolling") : de()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = pt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? de(!1, "Cannot collect a droppable while a drag is occurring") : de());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot collect without a droppable ref") : de());
    const C = Dz(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = _z({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(mb.contextId, r.contextId), A.addEventListener("scroll", g, hb(R.scrollOptions)), process.env.NODE_ENV !== "production" && wz(A)), $;
  }, [r.contextId, s, g, a]), b = pt(() => {
    const y = t.current, f = Eo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? de(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : de()), yc(f);
  }, []), p = pt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot stop drag when no active drag") : de());
    const f = Eo(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(mb.contextId), f.removeEventListener("scroll", g, hb(y.scrollOptions)));
  }, [g, d]), x = pt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot scroll when there is no drag") : de());
    const v = Eo(f);
    v || (process.env.NODE_ENV !== "production" ? de(!1, "Cannot scroll a droppable with no closest scrollable") : de()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = wt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = wt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  In(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Er("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), In(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), In(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function La() {
}
const Az = {
  width: 0,
  height: 0,
  margin: Nk
}, Tz = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Az : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Rz = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = Tz({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? Mo.placeholder : null
  };
}, Vz = (e) => {
  const t = L(null), r = pt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), La) : t.current ? La : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : La, [o, s, r]);
  const u = pt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = Rz({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var Mz = _.memo(Vz);
function Ba(e) {
  return typeof e == "boolean";
}
function Fa(e, t) {
  t.forEach((r) => r(e));
}
const Lz = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? de(!1, "A Droppable requires a droppableId prop") : de()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? de(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : de());
}, function({
  props: e
}) {
  Ba(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? de(!1, "isDropDisabled must be a boolean") : de()), Ba(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? de(!1, "isCombineEnabled must be a boolean") : de()), Ba(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? de(!1, "ignoreContainerClipping must be a boolean") : de());
}, function({
  getDroppableRef: e
}) {
  uO(e());
}], Bz = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Er(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], Fz = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? de(!1, "Must provide a clone render function (renderClone) for virtual lists") : de());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? de(!1, "Expected virtual list to not have a placeholder") : de());
}];
function jz(e) {
  Mu(() => {
    Fa(e, Lz), e.props.mode === "standard" && Fa(e, Bz), e.props.mode === "virtual" && Fa(e, Fz);
  });
}
class Wz extends _.PureComponent {
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
const Gz = (e) => {
  const t = yt(Vu);
  t || (process.env.NODE_ENV !== "production" ? de(!1, "Could not find app context") : de());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = pt(() => n.current, []), E = pt((P = null) => {
    n.current = P;
  }, []), y = pt(() => i.current, []), f = pt((P = null) => {
    i.current = P;
  }, []);
  jz({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = pt(() => {
    o() && p({
      maxScroll: jk()
    });
  }, [o, p]);
  $z({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = wt(() => _.createElement(Wz, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(Mz, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = wt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = wt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(yz, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(Bu.Provider, {
    value: $
  }, a(C, h), A());
};
var kz = Gz;
function zz() {
  return document.body || (process.env.NODE_ENV !== "production" ? de(!1, "document.body is not ready") : de()), document.body;
}
const yb = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: zz
}, bO = (e) => {
  let t = {
    ...e
  }, r;
  for (r in yb)
    e[r] === void 0 && (t = {
      ...t,
      [r]: yb[r]
    });
  return t;
}, ja = (e, t) => e === t.droppable.type, vb = (e, t) => t.draggables[e.draggable.id], Hz = () => {
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
  }, r = Tt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Tt((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = bO(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Lu(n)) {
      const l = n.critical;
      if (!ja(c, l))
        return t;
      const d = vb(l, n.dimensions), g = Vo(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!ja(c, l.critical))
        return t;
      const d = vb(l.critical, n.dimensions);
      return o(s, u, pO(l.result) === s, Vo(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!ja(c, l.critical))
        return t;
      const d = Vo(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, Uz = {
  updateViewportMaxScroll: Mk
};
Jx(Hz, Uz, (e, t, r) => ({
  ...bO(r),
  ...e,
  ...t
}), {
  context: aO,
  areStatePropsEqual: dO
})(kz);
var Eb;
(function(e) {
  e.event = "event", e.props = "prop";
})(Eb || (Eb = {}));
var xb = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + xb(), "" + xb();
function qz(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vc = { exports: {} }, Wa = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ob;
function Yz() {
  if (Ob) return Wa;
  Ob = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Wa.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Wa;
}
var Sb = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wb;
function Kz() {
  return wb || (wb = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    Sb.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sb;
}
process.env.NODE_ENV === "production" ? vc.exports = Yz() : vc.exports = Kz();
var Wu = vc.exports, Ga = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Db;
function Xz() {
  if (Db) return Ga;
  Db = 1;
  var e = _, t = Wu;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Ga.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Ga;
}
var Nb = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cb;
function Jz() {
  return Cb || (Cb = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = Wu, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Nb.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Nb;
}
process.env.NODE_ENV === "production" ? Xz() : Jz();
function Zz(e) {
  e();
}
let hO = Zz;
const Qz = (e) => hO = e, eH = () => hO, _b = Symbol.for("react-redux-context"), Ib = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function tH() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Ib[_b]) != null ? e : Ib[_b] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const rH = /* @__PURE__ */ tH(), nH = () => {
  throw new Error("uSES not initialized!");
};
function ln() {
  return ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ln.apply(null, arguments);
}
function yO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Ec = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pb;
function oH() {
  if (Pb) return Ve;
  Pb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return Ve.AsyncMode = c, Ve.ConcurrentMode = u, Ve.ContextConsumer = s, Ve.ContextProvider = a, Ve.Element = t, Ve.ForwardRef = m, Ve.Fragment = o, Ve.Lazy = h, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = i, Ve.StrictMode = n, Ve.Suspense = l, Ve.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, Ve.isConcurrentMode = y, Ve.isContextConsumer = function(f) {
    return E(f) === s;
  }, Ve.isContextProvider = function(f) {
    return E(f) === a;
  }, Ve.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, Ve.isForwardRef = function(f) {
    return E(f) === m;
  }, Ve.isFragment = function(f) {
    return E(f) === o;
  }, Ve.isLazy = function(f) {
    return E(f) === h;
  }, Ve.isMemo = function(f) {
    return E(f) === g;
  }, Ve.isPortal = function(f) {
    return E(f) === r;
  }, Ve.isProfiler = function(f) {
    return E(f) === i;
  }, Ve.isStrictMode = function(f) {
    return E(f) === n;
  }, Ve.isSuspense = function(f) {
    return E(f) === l;
  }, Ve.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, Ve.typeOf = E, Ve;
}
var Ze = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $b;
function iH() {
  return $b || ($b = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Ze.AsyncMode = f, Ze.ConcurrentMode = v, Ze.ContextConsumer = D, Ze.ContextProvider = C, Ze.Element = R, Ze.ForwardRef = $, Ze.Fragment = A, Ze.Lazy = P, Ze.Memo = T, Ze.Portal = j, Ze.Profiler = k, Ze.StrictMode = V, Ze.Suspense = W, Ze.isAsyncMode = G, Ze.isConcurrentMode = z, Ze.isContextConsumer = B, Ze.isContextProvider = q, Ze.isElement = Y, Ze.isForwardRef = K, Ze.isFragment = Z, Ze.isLazy = re, Ze.isMemo = U, Ze.isPortal = X, Ze.isProfiler = M, Ze.isStrictMode = J, Ze.isSuspense = be, Ze.isValidElementType = E, Ze.typeOf = y;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? Ec.exports = oH() : Ec.exports = iH();
var aH = Ec.exports, Gu = aH, sH = {
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
}, cH = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, lH = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vO = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ku = {};
ku[Gu.ForwardRef] = lH;
ku[Gu.Memo] = vO;
function Ab(e) {
  return Gu.isMemo(e) ? vO : ku[e.$$typeof] || sH;
}
var uH = Object.defineProperty, dH = Object.getOwnPropertyNames, Tb = Object.getOwnPropertySymbols, pH = Object.getOwnPropertyDescriptor, fH = Object.getPrototypeOf, Rb = Object.prototype;
function EO(e, t, r) {
  if (typeof t != "string") {
    if (Rb) {
      var o = fH(t);
      o && o !== Rb && EO(e, o, r);
    }
    var n = dH(t);
    Tb && (n = n.concat(Tb(t)));
    for (var i = Ab(e), a = Ab(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!cH[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = pH(t, c);
        try {
          uH(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var mH = EO;
const Vb = /* @__PURE__ */ qz(mH);
var xc = { exports: {} }, Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mb;
function gH() {
  if (Mb) return Me;
  Mb = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Me.ContextConsumer = a, Me.ContextProvider = i, Me.Element = e, Me.ForwardRef = c, Me.Fragment = r, Me.Lazy = d, Me.Memo = l, Me.Portal = t, Me.Profiler = n, Me.StrictMode = o, Me.Suspense = u, Me.SuspenseList = m, Me.isAsyncMode = function() {
    return !1;
  }, Me.isConcurrentMode = function() {
    return !1;
  }, Me.isContextConsumer = function(p) {
    return b(p) === a;
  }, Me.isContextProvider = function(p) {
    return b(p) === i;
  }, Me.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Me.isForwardRef = function(p) {
    return b(p) === c;
  }, Me.isFragment = function(p) {
    return b(p) === r;
  }, Me.isLazy = function(p) {
    return b(p) === d;
  }, Me.isMemo = function(p) {
    return b(p) === l;
  }, Me.isPortal = function(p) {
    return b(p) === t;
  }, Me.isProfiler = function(p) {
    return b(p) === n;
  }, Me.isStrictMode = function(p) {
    return b(p) === o;
  }, Me.isSuspense = function(p) {
    return b(p) === u;
  }, Me.isSuspenseList = function(p) {
    return b(p) === m;
  }, Me.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Me.typeOf = b, Me;
}
var Qe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lb;
function bH() {
  return Lb || (Lb = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    Qe.ContextConsumer = v, Qe.ContextProvider = D, Qe.Element = C, Qe.ForwardRef = R, Qe.Fragment = $, Qe.Lazy = A, Qe.Memo = P, Qe.Portal = T, Qe.Profiler = j, Qe.StrictMode = k, Qe.Suspense = V, Qe.SuspenseList = W, Qe.isAsyncMode = z, Qe.isConcurrentMode = B, Qe.isContextConsumer = q, Qe.isContextProvider = Y, Qe.isElement = K, Qe.isForwardRef = Z, Qe.isFragment = re, Qe.isLazy = U, Qe.isMemo = X, Qe.isPortal = M, Qe.isProfiler = J, Qe.isStrictMode = be, Qe.isSuspense = O, Qe.isSuspenseList = te, Qe.isValidElementType = y, Qe.typeOf = f;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? xc.exports = gH() : xc.exports = bH();
var Bb = xc.exports;
function zu(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ka(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || zu(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function hH(e, t, r) {
  ka(e, "mapStateToProps"), ka(t, "mapDispatchToProps"), ka(r, "mergeProps");
}
const yH = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function vH(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function EH(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = yO(t, yH);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && hH(a, s, c), vH(a, s, c, e, i);
}
function xH(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function OH(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function xO(e, t, r) {
  OH(e) || zu(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Oc(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Fb(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function OO(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Fb(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Fb(s), s = n(i, a)), process.env.NODE_ENV !== "production" && xO(s, o, t), s;
    }, n;
  };
}
function Hu(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function SH(e) {
  return e && typeof e == "object" ? Oc((t) => (
    // @ts-ignore
    xH(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    OO(e, "mapDispatchToProps")
  ) : Hu(e, "mapDispatchToProps") : Oc((t) => ({
    dispatch: t
  }));
}
function wH(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    OO(e, "mapStateToProps")
  ) : Hu(e, "mapStateToProps") : Oc(() => ({}));
}
function DH(e, t, r) {
  return ln({}, r, e, t);
}
function NH(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && xO(i, r, "mergeProps")), i;
    };
  };
}
function CH(e) {
  return e ? typeof e == "function" ? NH(e) : Hu(e, "mergeProps") : () => DH;
}
function _H() {
  const e = eH();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const jb = {
  notify() {
  },
  get: () => []
};
function IH(e, t) {
  let r, o = jb, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = _H());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = jb);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const PH = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Sc = PH ? N.useLayoutEffect : N.useEffect;
function Wb(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function za(e, t) {
  if (Wb(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Wb(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const $H = ["reactReduxForwardedRef"];
let SO = nH;
const AH = (e) => {
  SO = e;
}, TH = [null, null], RH = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function VH(e, t, r) {
  Sc(() => e(...t), r);
}
function MH(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function LH(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function BH(e, t) {
  return e === t;
}
let Gb = !1;
function wO(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = BH,
  areOwnPropsEqual: i = za,
  areStatePropsEqual: a = za,
  areMergedPropsEqual: s = za,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = rH
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Gb && (Gb = !0, zu('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = wH(e), d = SH(t), g = CH(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Bb.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${RH(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = yO(f, $H);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Bb.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => EH(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return TH;
        const M = IH(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : ln({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Sc(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? LH(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      VH(MH, [z, G, q, C, B, W]);
      let U;
      try {
        U = SO(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Sc(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, ln({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, ln({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, Vb(f, b);
    }
    return Vb(y, b);
  };
}
AH(Wu.useSyncExternalStore);
Qz(ar);
function FH(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function DO(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && FH(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function jH(e, t) {
  return DO(function() {
    return e;
  }, t);
}
var Dt = DO, ft = jH, WH = process.env.NODE_ENV === "production", Ha = "Invariant failed";
function kb(e, t) {
  if (WH)
    throw new Error(Ha);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Ha, ": ").concat(r) : Ha;
  throw new Error(o);
}
var Qr = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, NO = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, zb = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, GH = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Ua = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Uu = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Ua : r, n = e.border, i = n === void 0 ? Ua : n, a = e.padding, s = a === void 0 ? Ua : a, c = Qr(NO(t, o)), u = Qr(zb(t, i)), m = Qr(zb(u, s));
  return {
    marginBox: c,
    borderBox: Qr(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Kt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? kb(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : kb()), o;
}, kH = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, zH = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = GH(r, t);
  return Uu({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, wc = function(e, t) {
  return t === void 0 && (t = kH()), zH(e, t);
}, CO = function(e, t) {
  var r = {
    top: Kt(t.marginTop),
    right: Kt(t.marginRight),
    bottom: Kt(t.marginBottom),
    left: Kt(t.marginLeft)
  }, o = {
    top: Kt(t.paddingTop),
    right: Kt(t.paddingRight),
    bottom: Kt(t.paddingBottom),
    left: Kt(t.paddingLeft)
  }, n = {
    top: Kt(t.borderTopWidth),
    right: Kt(t.borderRightWidth),
    bottom: Kt(t.borderBottomWidth),
    left: Kt(t.borderLeftWidth)
  };
  return Uu({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, _O = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return CO(t, r);
}, Hb = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function HH(e, t) {
  return !!(e === t || Hb(e) && Hb(t));
}
function UH(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!HH(e[r], t[r]))
      return !1;
  return !0;
}
function Rt(e, t) {
  t === void 0 && (t = UH);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var qH = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const YH = process.env.NODE_ENV === "production", KH = /[ \t]{2,}/g, XH = /^[ \t]*/gm, Ub = (e) => e.replace(KH, " ").replace(XH, "").trim(), JH = (e) => Ub(`
  %c@hello-pangea/dnd

  %c${Ub(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), ZH = (e) => [JH(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], QH = "__@hello-pangea/dnd-disable-dev-warnings";
function IO(e, t) {
  YH || typeof window < "u" && window[QH] || console[e](...ZH(t));
}
const xr = IO.bind(null, "warn"), Dc = IO.bind(null, "error");
function e6() {
}
function t6(e, t) {
  return {
    ...e,
    ...t
  };
}
function r6(e, t, r) {
  const o = t.map((n) => {
    const i = t6(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const n6 = process.env.NODE_ENV === "production", qb = "Invariant failed";
class to extends Error {
}
to.prototype.toString = function() {
  return this.message;
};
function pe(e, t) {
  throw n6 ? new to(qb) : new to(`${qb}: ${t || ""}`);
}
class W2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = e6, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && xr(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof to && (r.preventDefault(), process.env.NODE_ENV !== "production" && Dc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = r6(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof to) {
      process.env.NODE_ENV !== "production" && Dc(t.message), this.setState({});
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
const zr = {
  x: 0,
  y: 0
}, o6 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), i6 = (e, t) => e.x === t.x && e.y === t.y, a6 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), s6 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var c6 = (e, t) => {
  const r = Qr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const l6 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), u6 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, d6 = (e, t) => t ? l6(e, t.scroll.diff.displacement) : e, p6 = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, f6 = (e, t) => t && t.shouldClipSubject ? c6(t.pageMarginBox, e) : Qr(e);
var m6 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = d6(e.marginBox, o), i = p6(n, r, t), a = f6(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Rt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Rt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const g6 = Rt((e) => Object.values(e)), b6 = Rt((e) => Object.values(e));
Rt((e, t) => b6(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function h6(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Rt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const y6 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, v6 = {
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
Rt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: s6(e.line, r)
  };
});
var Lo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const E6 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), x6 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), qu = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, ro = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, O6 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, $r = `${O6.outOfTheWay}s ${qu.outOfTheWay}`, Bo = {
  fluid: `opacity ${$r}`,
  snap: `transform ${$r}, opacity ${$r}`,
  drop: (e) => {
    const t = `${e}s ${qu.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${$r}`,
  placeholder: `height ${$r}, width ${$r}, margin ${$r}`
}, Yb = (e) => i6(e, zr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Nc = {
  moveTo: Yb,
  drop: (e, t) => {
    const r = Yb(e);
    if (r)
      return t ? `${r} scale(${ro.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var PO = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = o6({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, S6 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot find document.documentElement") : pe()), e;
}, w6 = () => {
  const e = S6();
  return PO({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Rt((e) => g6(e).filter((t) => !(!t.isEnabled || !t.frame)));
const $O = "data-rfd", Kb = (() => {
  const e = `${$O}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Xb = {
  contextId: `${$O}-scroll-container-context-id`
}, D6 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var Pn = D6;
function N6(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var C6 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function AO(e) {
  return e instanceof C6(e).HTMLElement;
}
function _6(e, t) {
  const r = `[${Kb.contextId}="${e}"]`, o = N6(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && xr(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Kb.draggableId) === t);
  return n ? AO(n) ? n : (process.env.NODE_ENV !== "production" && xr("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && xr(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var TO = _.createContext(null), I6 = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot find document.body") : pe()), e;
};
let P6 = 0;
const RO = {
  separator: "::"
};
function $6(e, t = RO) {
  return Dt(() => `${e}${t.separator}${P6++}`, [t.separator, e]);
}
function A6(e, t = RO) {
  const r = _.useId();
  return Dt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var VO = "useId" in _ ? A6 : $6, Yu = _.createContext(null);
function MO(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ku(e, t) {
  MO(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        Dc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function T6(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function Xu(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Jb = {
  dragging: 5e3,
  dropAnimating: 4500
}, R6 = (e, t) => t ? Bo.drop(t.duration) : e ? Bo.snap : Bo.fluid, V6 = (e, t) => {
  if (e)
    return t ? ro.opacity.drop : ro.opacity.combining;
}, M6 = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function L6(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = M6(e), s = !!n, c = s ? Nc.drop(r, i) : Nc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: R6(a, n),
    transform: c,
    opacity: V6(i, s),
    zIndex: s ? Jb.dropAnimating : Jb.dragging,
    pointerEvents: "none"
  };
}
function B6(e) {
  return {
    transform: Nc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function F6(e) {
  return e.type === "DRAGGING" ? L6(e) : B6(e);
}
function j6(e, t, r = zr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = CO(n, o), a = wc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function W6(e) {
  const t = VO("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = Dt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ft((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot get dimension when no ref is set") : pe()), j6(r, h, g);
  }, [r, n]), m = Dt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  Pn(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Pn(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var Ju = _.createContext(null);
function LO(e) {
  e && AO(e) || (process.env.NODE_ENV !== "production" ? pe(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : pe());
}
function G6(e, t, r) {
  Ku(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? pe(!1, "Draggable requires a draggableId") : pe(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? pe(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : pe(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? pe(!1, `${o(n)} requires an integer index prop`) : pe(!1)), e.mapped.type !== "DRAGGING" && (LO(r()), e.isEnabled && (_6(t, n) || (process.env.NODE_ENV !== "production" ? pe(!1, `${o(n)} Unable to find drag handle`) : pe(!1))));
  });
}
function k6(e) {
  MO(() => {
    const t = L(e);
    Ku(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? pe(!1, "Draggable isClone prop value changed during component life") : pe(!1));
    }, [e]);
  });
}
function ri(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? pe(!1, "Could not find required context") : pe()), t;
}
function z6(e) {
  e.preventDefault();
}
const H6 = (e) => {
  const t = L(null), r = ft((v = null) => {
    t.current = v;
  }, []), o = ft(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = ri(Yu), {
    type: s,
    droppableId: c
  } = ri(Ju), u = Dt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (G6(e, n, o), k6(b), !b) {
    const v = Dt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    W6(v);
  }
  const w = Dt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: z6
  } : null, [n, i, l, d]), E = ft((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = Dt(() => {
    const v = F6(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = Dt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var U6 = H6, BO = (e, t) => e === t, FO = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const q6 = (e) => e.combine ? e.combine.draggableId : null, Y6 = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function K6() {
  const e = Rt((o, n) => ({
    x: o,
    y: n
  })), t = Rt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Rt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (Xu(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Lo(o.impact), c = Y6(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = FO(c), l = q6(c), d = {
        duration: o.dropDuration,
        curve: qu.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? ro.opacity.drop : null,
        scale: l ? ro.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function jO(e = null) {
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
const X6 = {
  mapped: {
    type: "SECONDARY",
    offset: zr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: jO(null)
  }
};
function J6() {
  const e = Rt((i, a) => ({
    x: i,
    y: a
  })), t = Rt(jO), r = Rt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(zr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = h6(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = a6(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Xu(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const Z6 = () => {
  const e = K6(), t = J6();
  return (r, o) => e(r, o) || t(r, o) || X6;
}, Q6 = {
  dropAnimationFinished: x6
}, eU = wO(Z6, Q6, null, {
  context: TO,
  areStatePropsEqual: BO
})(U6);
var tU = eU;
function rU(e) {
  return ri(Ju).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(tU, e);
}
const Zu = (e) => (t) => e === t, nU = Zu("scroll"), oU = Zu("auto"), iU = Zu("visible"), Zb = (e, t) => t(e.overflowX) || t(e.overflowY), aU = (e, t) => t(e.overflowX) && t(e.overflowY), WO = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Zb(r, nU) || Zb(r, oU);
}, sU = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = I6(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, pe()), !WO(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return aU(o, iU) || process.env.NODE_ENV !== "production" && xr(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Qu = (e) => e == null ? null : e === document.body ? sU() ? e : null : e === document.documentElement ? null : WO(e) ? e : Qu(e.parentElement);
var cU = (e) => {
  !e || !Qu(e.parentElement) || process.env.NODE_ENV !== "production" && xr(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Cc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const GO = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : GO(e.parentElement) : !1;
var lU = (e) => {
  const t = Qu(e), r = GO(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, uU = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = PO({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: zr,
          displacement: zr
        }
      }
    };
  })(), u = n === "vertical" ? y6 : v6, m = m6({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const dU = (e, t) => {
  const r = _O(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = NO({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Uu({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var pU = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = dU(e, c), m = wc(u, o), l = (() => {
    if (!c)
      return null;
    const d = _O(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: wc(d, o),
      scroll: Cc(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return uU({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const fU = {
  passive: !1
}, mU = {
  passive: !0
};
var Qb = (e) => e.shouldPublishImmediately ? fU : mU;
const xo = (e) => e && e.env.closestScrollable || null;
function gU(e) {
  const t = L(null), r = ri(Yu), o = VO("droppable"), {
    registry: n,
    marshal: i
  } = r, a = T6(e), s = Dt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = Dt(() => Rt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? pe(!1, "Can only update scroll when dragging") : pe());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = ft(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? zr : Cc(y.env.closestScrollable);
  }, []), l = ft(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = Dt(() => qH(l), [l]), g = ft(() => {
    const y = t.current, f = xo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? pe(!1, "Could not find scroll options while scrolling") : pe()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = ft((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot collect a droppable while a drag is occurring") : pe());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot collect without a droppable ref") : pe());
    const C = lU(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = pU({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Xb.contextId, r.contextId), A.addEventListener("scroll", g, Qb(R.scrollOptions)), process.env.NODE_ENV !== "production" && cU(A)), $;
  }, [r.contextId, s, g, a]), b = ft(() => {
    const y = t.current, f = xo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? pe(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : pe()), Cc(f);
  }, []), p = ft(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot stop drag when no active drag") : pe());
    const f = xo(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(Xb.contextId), f.removeEventListener("scroll", g, Qb(y.scrollOptions)));
  }, [g, d]), x = ft((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot scroll when there is no drag") : pe());
    const v = xo(f);
    v || (process.env.NODE_ENV !== "production" ? pe(!1, "Cannot scroll a droppable with no closest scrollable") : pe()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = Dt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = Dt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Pn(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && xr("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Pn(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Pn(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function qa() {
}
const bU = {
  width: 0,
  height: 0,
  margin: u6
}, hU = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? bU : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, yU = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = hU({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? Bo.placeholder : null
  };
}, vU = (e) => {
  const t = L(null), r = ft(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), qa) : t.current ? qa : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : qa, [o, s, r]);
  const u = ft((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = yU({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var EU = _.memo(vU);
function Ya(e) {
  return typeof e == "boolean";
}
function Ka(e, t) {
  t.forEach((r) => r(e));
}
const xU = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? pe(!1, "A Droppable requires a droppableId prop") : pe()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? pe(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : pe());
}, function({
  props: e
}) {
  Ya(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? pe(!1, "isDropDisabled must be a boolean") : pe()), Ya(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? pe(!1, "isCombineEnabled must be a boolean") : pe()), Ya(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? pe(!1, "ignoreContainerClipping must be a boolean") : pe());
}, function({
  getDroppableRef: e
}) {
  LO(e());
}], OU = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && xr(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], SU = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? pe(!1, "Must provide a clone render function (renderClone) for virtual lists") : pe());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? pe(!1, "Expected virtual list to not have a placeholder") : pe());
}];
function wU(e) {
  Ku(() => {
    Ka(e, xU), e.props.mode === "standard" && Ka(e, OU), e.props.mode === "virtual" && Ka(e, SU);
  });
}
class DU extends _.PureComponent {
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
const NU = (e) => {
  const t = yt(Yu);
  t || (process.env.NODE_ENV !== "production" ? pe(!1, "Could not find app context") : pe());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = ft(() => n.current, []), E = ft((P = null) => {
    n.current = P;
  }, []), y = ft(() => i.current, []), f = ft((P = null) => {
    i.current = P;
  }, []);
  wU({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = ft(() => {
    o() && p({
      maxScroll: w6()
    });
  }, [o, p]);
  gU({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = Dt(() => _.createElement(DU, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(EU, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Dt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = Dt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(rU, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(Ju.Provider, {
    value: $
  }, a(C, h), A());
};
var CU = NU;
function _U() {
  return document.body || (process.env.NODE_ENV !== "production" ? pe(!1, "document.body is not ready") : pe()), document.body;
}
const eh = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: _U
}, kO = (e) => {
  let t = {
    ...e
  }, r;
  for (r in eh)
    e[r] === void 0 && (t = {
      ...t,
      [r]: eh[r]
    });
  return t;
}, Xa = (e, t) => e === t.droppable.type, th = (e, t) => t.draggables[e.draggable.id], IU = () => {
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
  }, r = Rt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Rt((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = kO(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (Xu(n)) {
      const l = n.critical;
      if (!Xa(c, l))
        return t;
      const d = th(l, n.dimensions), g = Lo(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Xa(c, l.critical))
        return t;
      const d = th(l.critical, n.dimensions);
      return o(s, u, FO(l.result) === s, Lo(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Xa(c, l.critical))
        return t;
      const d = Lo(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, PU = {
  updateViewportMaxScroll: E6
};
wO(IU, PU, (e, t, r) => ({
  ...kO(r),
  ...e,
  ...t
}), {
  context: TO,
  areStatePropsEqual: BO
})(CU);
var rh;
(function(e) {
  e.event = "event", e.props = "prop";
})(rh || (rh = {}));
var nh = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + nh(), "" + nh();
function $U(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _c = { exports: {} }, Ja = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh;
function AU() {
  if (oh) return Ja;
  oh = 1;
  var e = _;
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, o = e.useState, n = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(l, d) {
    var g = d(), h = o({ inst: { value: g, getSnapshot: d } }), b = h[0].inst, p = h[1];
    return i(
      function() {
        b.value = g, b.getSnapshot = d, c(b) && p({ inst: b });
      },
      [l, g, d]
    ), n(
      function() {
        return c(b) && p({ inst: b }), l(function() {
          c(b) && p({ inst: b });
        });
      },
      [l]
    ), a(g), g;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var g = d();
      return !r(l, g);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ja.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m, Ja;
}
var ih = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ah;
function TU() {
  return ah || (ah = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      m || n.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!l) {
        var p = h();
        i(b, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      p = a({
        inst: { value: b, getSnapshot: h }
      });
      var x = p[0].inst, w = p[1];
      return c(
        function() {
          x.value = b, x.getSnapshot = h, r(x) && w({ inst: x });
        },
        [g, b, h]
      ), s(
        function() {
          return r(x) && w({ inst: x }), g(function() {
            r(x) && w({ inst: x });
          });
        },
        [g]
      ), u(b), b;
    }
    function r(g) {
      var h = g.getSnapshot;
      g = g.value;
      try {
        var b = h();
        return !i(g, b);
      } catch {
        return !0;
      }
    }
    function o(g, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var n = _, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, m = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    ih.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ih;
}
process.env.NODE_ENV === "production" ? _c.exports = AU() : _c.exports = TU();
var ed = _c.exports, Za = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sh;
function RU() {
  if (sh) return Za;
  sh = 1;
  var e = _, t = ed;
  function r(u, m) {
    return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Za.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function x(v) {
          if (!w) {
            if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, v))
                return y = D;
            }
            return y = v;
          }
          if (D = y, o(E, v)) return D;
          var C = d(v);
          return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
        }
        var w = !1, E, y, f = l === void 0 ? null : l;
        return [
          function() {
            return x(m());
          },
          f === null ? void 0 : function() {
            return x(f());
          }
        ];
      },
      [m, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Za;
}
var ch = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lh;
function VU() {
  return lh || (lh = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, m) {
      return u === m && (u !== 0 || 1 / u === 1 / m) || u !== u && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = _, r = ed, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    ch.useSyncExternalStoreWithSelector = function(u, m, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function x(v) {
            if (!w) {
              if (w = !0, E = v, v = d(v), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, v))
                  return y = D;
              }
              return y = v;
            }
            if (D = y, o(E, v))
              return D;
            var C = d(v);
            return g !== void 0 && g(D, C) ? (E = v, D) : (E = v, y = C);
          }
          var w = !1, E, y, f = l === void 0 ? null : l;
          return [
            function() {
              return x(m());
            },
            f === null ? void 0 : function() {
              return x(f());
            }
          ];
        },
        [m, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ch;
}
process.env.NODE_ENV === "production" ? RU() : VU();
function MU(e) {
  e();
}
let zO = MU;
const LU = (e) => zO = e, BU = () => zO, uh = Symbol.for("react-redux-context"), dh = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function FU() {
  var e;
  if (!N.createContext) return {};
  const t = (e = dh[uh]) != null ? e : dh[uh] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const jU = /* @__PURE__ */ FU(), WU = () => {
  throw new Error("uSES not initialized!");
};
function un() {
  return un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, un.apply(null, arguments);
}
function HO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Ic = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ph;
function GU() {
  if (ph) return Le;
  ph = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case m:
                case h:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function y(f) {
    return E(f) === u;
  }
  return Le.AsyncMode = c, Le.ConcurrentMode = u, Le.ContextConsumer = s, Le.ContextProvider = a, Le.Element = t, Le.ForwardRef = m, Le.Fragment = o, Le.Lazy = h, Le.Memo = g, Le.Portal = r, Le.Profiler = i, Le.StrictMode = n, Le.Suspense = l, Le.isAsyncMode = function(f) {
    return y(f) || E(f) === c;
  }, Le.isConcurrentMode = y, Le.isContextConsumer = function(f) {
    return E(f) === s;
  }, Le.isContextProvider = function(f) {
    return E(f) === a;
  }, Le.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, Le.isForwardRef = function(f) {
    return E(f) === m;
  }, Le.isFragment = function(f) {
    return E(f) === o;
  }, Le.isLazy = function(f) {
    return E(f) === h;
  }, Le.isMemo = function(f) {
    return E(f) === g;
  }, Le.isPortal = function(f) {
    return E(f) === r;
  }, Le.isProfiler = function(f) {
    return E(f) === i;
  }, Le.isStrictMode = function(f) {
    return E(f) === n;
  }, Le.isSuspense = function(f) {
    return E(f) === l;
  }, Le.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === u || f === i || f === n || f === l || f === d || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === m || f.$$typeof === p || f.$$typeof === x || f.$$typeof === w || f.$$typeof === b);
  }, Le.typeOf = E, Le;
}
var et = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fh;
function kU() {
  return fh || (fh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === m || O.$$typeof === p || O.$$typeof === x || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var te = O.$$typeof;
        switch (te) {
          case t:
            var S = O.type;
            switch (S) {
              case c:
              case u:
              case o:
              case i:
              case n:
              case l:
                return S;
              default:
                var ee = S && S.$$typeof;
                switch (ee) {
                  case s:
                  case m:
                  case h:
                  case g:
                  case a:
                    return ee;
                  default:
                    return te;
                }
            }
          case r:
            return te;
        }
      }
    }
    var f = c, v = u, D = s, C = a, R = t, $ = m, A = o, P = h, T = g, j = r, k = i, V = n, W = l, F = !1;
    function G(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function q(O) {
      return y(O) === a;
    }
    function Y(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function K(O) {
      return y(O) === m;
    }
    function Z(O) {
      return y(O) === o;
    }
    function re(O) {
      return y(O) === h;
    }
    function U(O) {
      return y(O) === g;
    }
    function X(O) {
      return y(O) === r;
    }
    function M(O) {
      return y(O) === i;
    }
    function J(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    et.AsyncMode = f, et.ConcurrentMode = v, et.ContextConsumer = D, et.ContextProvider = C, et.Element = R, et.ForwardRef = $, et.Fragment = A, et.Lazy = P, et.Memo = T, et.Portal = j, et.Profiler = k, et.StrictMode = V, et.Suspense = W, et.isAsyncMode = G, et.isConcurrentMode = z, et.isContextConsumer = B, et.isContextProvider = q, et.isElement = Y, et.isForwardRef = K, et.isFragment = Z, et.isLazy = re, et.isMemo = U, et.isPortal = X, et.isProfiler = M, et.isStrictMode = J, et.isSuspense = be, et.isValidElementType = E, et.typeOf = y;
  }()), et;
}
process.env.NODE_ENV === "production" ? Ic.exports = GU() : Ic.exports = kU();
var zU = Ic.exports, td = zU, HU = {
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
}, UU = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, qU = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, UO = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rd = {};
rd[td.ForwardRef] = qU;
rd[td.Memo] = UO;
function mh(e) {
  return td.isMemo(e) ? UO : rd[e.$$typeof] || HU;
}
var YU = Object.defineProperty, KU = Object.getOwnPropertyNames, gh = Object.getOwnPropertySymbols, XU = Object.getOwnPropertyDescriptor, JU = Object.getPrototypeOf, bh = Object.prototype;
function qO(e, t, r) {
  if (typeof t != "string") {
    if (bh) {
      var o = JU(t);
      o && o !== bh && qO(e, o, r);
    }
    var n = KU(t);
    gh && (n = n.concat(gh(t)));
    for (var i = mh(e), a = mh(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!UU[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = XU(t, c);
        try {
          YU(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var ZU = qO;
const hh = /* @__PURE__ */ $U(ZU);
var Pc = { exports: {} }, Be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yh;
function QU() {
  if (yh) return Be;
  yh = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case d:
                case l:
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Be.ContextConsumer = a, Be.ContextProvider = i, Be.Element = e, Be.ForwardRef = c, Be.Fragment = r, Be.Lazy = d, Be.Memo = l, Be.Portal = t, Be.Profiler = n, Be.StrictMode = o, Be.Suspense = u, Be.SuspenseList = m, Be.isAsyncMode = function() {
    return !1;
  }, Be.isConcurrentMode = function() {
    return !1;
  }, Be.isContextConsumer = function(p) {
    return b(p) === a;
  }, Be.isContextProvider = function(p) {
    return b(p) === i;
  }, Be.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Be.isForwardRef = function(p) {
    return b(p) === c;
  }, Be.isFragment = function(p) {
    return b(p) === r;
  }, Be.isLazy = function(p) {
    return b(p) === d;
  }, Be.isMemo = function(p) {
    return b(p) === l;
  }, Be.isPortal = function(p) {
    return b(p) === t;
  }, Be.isProfiler = function(p) {
    return b(p) === n;
  }, Be.isStrictMode = function(p) {
    return b(p) === o;
  }, Be.isSuspense = function(p) {
    return b(p) === u;
  }, Be.isSuspenseList = function(p) {
    return b(p) === m;
  }, Be.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === m || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Be.typeOf = b, Be;
}
var tt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vh;
function eq() {
  return vh || (vh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, x = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === m || x || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function f(S) {
      if (typeof S == "object" && S !== null) {
        var ee = S.$$typeof;
        switch (ee) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case m:
                return me;
              default:
                var H = me && me.$$typeof;
                switch (H) {
                  case s:
                  case a:
                  case c:
                  case d:
                  case l:
                  case i:
                    return H;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = a, D = i, C = e, R = c, $ = r, A = d, P = l, T = t, j = n, k = o, V = u, W = m, F = !1, G = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(S) {
      return f(S) === a;
    }
    function Y(S) {
      return f(S) === i;
    }
    function K(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Z(S) {
      return f(S) === c;
    }
    function re(S) {
      return f(S) === r;
    }
    function U(S) {
      return f(S) === d;
    }
    function X(S) {
      return f(S) === l;
    }
    function M(S) {
      return f(S) === t;
    }
    function J(S) {
      return f(S) === n;
    }
    function be(S) {
      return f(S) === o;
    }
    function O(S) {
      return f(S) === u;
    }
    function te(S) {
      return f(S) === m;
    }
    tt.ContextConsumer = v, tt.ContextProvider = D, tt.Element = C, tt.ForwardRef = R, tt.Fragment = $, tt.Lazy = A, tt.Memo = P, tt.Portal = T, tt.Profiler = j, tt.StrictMode = k, tt.Suspense = V, tt.SuspenseList = W, tt.isAsyncMode = z, tt.isConcurrentMode = B, tt.isContextConsumer = q, tt.isContextProvider = Y, tt.isElement = K, tt.isForwardRef = Z, tt.isFragment = re, tt.isLazy = U, tt.isMemo = X, tt.isPortal = M, tt.isProfiler = J, tt.isStrictMode = be, tt.isSuspense = O, tt.isSuspenseList = te, tt.isValidElementType = y, tt.typeOf = f;
  }()), tt;
}
process.env.NODE_ENV === "production" ? Pc.exports = QU() : Pc.exports = eq();
var Eh = Pc.exports;
function nd(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Qa(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || nd(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function tq(e, t, r) {
  Qa(e, "mapStateToProps"), Qa(t, "mapDispatchToProps"), Qa(r, "mergeProps");
}
const rq = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function nq(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, m, l, d;
  function g(w, E) {
    return c = w, u = E, m = e(c, u), l = t(o, u), d = r(m, l, u), s = !0, d;
  }
  function h() {
    return m = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (m = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(m, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, m);
    return m = w, E && (d = r(m, l, u)), d;
  }
  function x(w, E) {
    const y = !i(E, u), f = !n(w, c, E, u);
    return c = w, u = E, y && f ? h() : y ? b() : f ? p() : d;
  }
  return function(w, E) {
    return s ? x(w, E) : g(w, E);
  };
}
function oq(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = HO(t, rq);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && tq(a, s, c), nq(a, s, c, e, i);
}
function iq(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function aq(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function YO(e, t, r) {
  aq(e) || nd(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function $c(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function xh(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function KO(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = xh(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = xh(s), s = n(i, a)), process.env.NODE_ENV !== "production" && YO(s, o, t), s;
    }, n;
  };
}
function od(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function sq(e) {
  return e && typeof e == "object" ? $c((t) => (
    // @ts-ignore
    iq(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    KO(e, "mapDispatchToProps")
  ) : od(e, "mapDispatchToProps") : $c((t) => ({
    dispatch: t
  }));
}
function cq(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    KO(e, "mapStateToProps")
  ) : od(e, "mapStateToProps") : $c(() => ({}));
}
function lq(e, t, r) {
  return un({}, r, e, t);
}
function uq(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && YO(i, r, "mergeProps")), i;
    };
  };
}
function dq(e) {
  return e ? typeof e == "function" ? uq(e) : od(e, "mergeProps") : () => lq;
}
function pq() {
  const e = BU();
  let t = null, r = null;
  return {
    clear() {
      t = null, r = null;
    },
    notify() {
      e(() => {
        let o = t;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      let o = [], n = t;
      for (; n; )
        o.push(n), n = n.next;
      return o;
    },
    subscribe(o) {
      let n = !0, i = r = {
        callback: o,
        next: null,
        prev: r
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !n || t === null || (n = !1, i.next ? i.next.prev = i.prev : r = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Oh = {
  notify() {
  },
  get: () => []
};
function fq(e, t) {
  let r, o = Oh, n = 0, i = !1;
  function a(b) {
    m();
    const p = o.subscribe(b);
    let x = !1;
    return () => {
      x || (x = !0, p(), l());
    };
  }
  function s() {
    o.notify();
  }
  function c() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function m() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = pq());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Oh);
  }
  function d() {
    i || (i = !0, m());
  }
  function g() {
    i && (i = !1, l());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: g,
    getListeners: () => o
  };
  return h;
}
const mq = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ac = mq ? N.useLayoutEffect : N.useEffect;
function Sh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function es(e, t) {
  if (Sh(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Sh(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const gq = ["reactReduxForwardedRef"];
let XO = WU;
const bq = (e) => {
  XO = e;
}, hq = [null, null], yq = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function vq(e, t, r) {
  Ac(() => e(...t), r);
}
function Eq(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function xq(e, t, r, o, n, i, a, s, c, u, m) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const h = t.getState();
    let b, p;
    try {
      b = o(h, n.current);
    } catch (x) {
      p = x, d = x;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, m());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Oq(e, t) {
  return e === t;
}
let wh = !1;
function JO(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = Oq,
  areOwnPropsEqual: i = es,
  areStatePropsEqual: a = es,
  areMergedPropsEqual: s = es,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = jU
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !wh && (wh = !0, nd('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const m = u, l = cq(e), d = sq(t), g = dq(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Eh.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${yq(b)}`);
    const p = b.displayName || b.name || "Component", x = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: x,
      wrappedComponentName: p,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: l,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: g,
      areStatesEqual: n,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(f) {
      const [v, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: M
        } = f, J = HO(f, gq);
        return [f.context, M, J];
      }, [f]), R = N.useMemo(() => v && v.Consumer && // @ts-ignore
      Eh.isContextConsumer(/* @__PURE__ */ N.createElement(v.Consumer, null)) ? v : m, [v, m]), $ = N.useContext(R), A = !!f.store && !!f.store.getState && !!f.store.dispatch, P = !!$ && !!$.store;
      if (process.env.NODE_ENV !== "production" && !A && !P)
        throw new Error(`Could not find "store" in the context of "${x}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${x} in connect options.`);
      const T = A ? f.store : $.store, j = P ? $.getServerState : T.getState, k = N.useMemo(() => oq(T.dispatch, w), [T]), [V, W] = N.useMemo(() => {
        if (!h) return hq;
        const M = fq(T, A ? void 0 : $.subscription), J = M.notifyNestedSubs.bind(M);
        return [M, J];
      }, [T, A, $]), F = N.useMemo(() => A ? $ : un({}, $, {
        subscription: V
      }), [A, $, V]), G = N.useRef(), z = N.useRef(C), B = N.useRef(), q = N.useRef(!1);
      N.useRef(!1);
      const Y = N.useRef(!1), K = N.useRef();
      Ac(() => (Y.current = !0, () => {
        Y.current = !1;
      }), []);
      const Z = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), re = N.useMemo(() => (M) => V ? xq(
        h,
        T,
        V,
        // @ts-ignore
        k,
        z,
        G,
        q,
        Y,
        B,
        W,
        M
      ) : () => {
      }, [V]);
      vq(Eq, [z, G, q, C, B, W]);
      let U;
      try {
        U = XO(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          re,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Z,
          j ? () => k(j(), C) : Z
        );
      } catch (M) {
        throw K.current && (M.message += `
The error may be correlated with this previous error:
${K.current.stack}

`), M;
      }
      Ac(() => {
        K.current = void 0, B.current = void 0, G.current = U;
      });
      const X = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, un({}, U, {
          ref: D
        }))
      ), [D, b, U]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(R.Provider, {
        value: F
      }, X) : X, [R, X, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = x, c) {
      const f = N.forwardRef(function(v, D) {
        return /* @__PURE__ */ N.createElement(y, un({}, v, {
          reactReduxForwardedRef: D
        }));
      });
      return f.displayName = x, f.WrappedComponent = b, hh(f, b);
    }
    return hh(y, b);
  };
}
bq(ed.useSyncExternalStore);
LU(ar);
function Sq(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function ZO(e, t) {
  var r = Fe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = L(!0), n = L(r), i = o.current || !!(t && n.current.inputs && Sq(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ne(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function wq(e, t) {
  return ZO(function() {
    return e;
  }, t);
}
var Nt = ZO, mt = wq, Dq = process.env.NODE_ENV === "production", ts = "Invariant failed";
function Dh(e, t) {
  if (Dq)
    throw new Error(ts);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(ts, ": ").concat(r) : ts;
  throw new Error(o);
}
var en = function(e) {
  var t = e.top, r = e.right, o = e.bottom, n = e.left, i = r - n, a = o - t, s = {
    top: t,
    right: r,
    bottom: o,
    left: n,
    width: i,
    height: a,
    x: n,
    y: t,
    center: {
      x: (r + n) / 2,
      y: (o + t) / 2
    }
  };
  return s;
}, QO = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Nh = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Nq = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, rs = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, id = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? rs : r, n = e.border, i = n === void 0 ? rs : n, a = e.padding, s = a === void 0 ? rs : a, c = en(QO(t, o)), u = en(Nh(t, i)), m = en(Nh(u, s));
  return {
    marginBox: c,
    borderBox: en(t),
    paddingBox: u,
    contentBox: m,
    margin: o,
    border: i,
    padding: s
  };
}, Xt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Dh(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Dh()), o;
}, Cq = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, _q = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = Nq(r, t);
  return id({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Tc = function(e, t) {
  return t === void 0 && (t = Cq()), _q(e, t);
}, eS = function(e, t) {
  var r = {
    top: Xt(t.marginTop),
    right: Xt(t.marginRight),
    bottom: Xt(t.marginBottom),
    left: Xt(t.marginLeft)
  }, o = {
    top: Xt(t.paddingTop),
    right: Xt(t.paddingRight),
    bottom: Xt(t.paddingBottom),
    left: Xt(t.paddingLeft)
  }, n = {
    top: Xt(t.borderTopWidth),
    right: Xt(t.borderRightWidth),
    bottom: Xt(t.borderBottomWidth),
    left: Xt(t.borderLeftWidth)
  };
  return id({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, tS = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return eS(t, r);
}, Ch = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function Iq(e, t) {
  return !!(e === t || Ch(e) && Ch(t));
}
function Pq(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Iq(e[r], t[r]))
      return !1;
  return !0;
}
function Vt(e, t) {
  t === void 0 && (t = Pq);
  var r = null;
  function o() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    if (r && r.lastThis === this && t(n, r.lastArgs))
      return r.lastResult;
    var a = e.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var $q = function(e) {
  var t = [], r = null, o = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Aq = process.env.NODE_ENV === "production", Tq = /[ \t]{2,}/g, Rq = /^[ \t]*/gm, _h = (e) => e.replace(Tq, " ").replace(Rq, "").trim(), Vq = (e) => _h(`
  %c@hello-pangea/dnd

  %c${_h(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), Mq = (e) => [Vq(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Lq = "__@hello-pangea/dnd-disable-dev-warnings";
function rS(e, t) {
  Aq || typeof window < "u" && window[Lq] || console[e](...Mq(t));
}
const Or = rS.bind(null, "warn"), Rc = rS.bind(null, "error");
function Bq() {
}
function Fq(e, t) {
  return {
    ...e,
    ...t
  };
}
function jq(e, t, r) {
  const o = t.map((n) => {
    const i = Fq(r, n.options);
    return e.addEventListener(n.eventName, n.fn, i), function() {
      e.removeEventListener(n.eventName, n.fn, i);
    };
  });
  return function() {
    o.forEach((n) => {
      n();
    });
  };
}
const Wq = process.env.NODE_ENV === "production", Ih = "Invariant failed";
class no extends Error {
}
no.prototype.toString = function() {
  return this.message;
};
function fe(e, t) {
  throw Wq ? new no(Ih) : new no(`${Ih}: ${t || ""}`);
}
class G2 extends _.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Bq, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Or(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof no && (r.preventDefault(), process.env.NODE_ENV !== "production" && Rc(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = jq(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof no) {
      process.env.NODE_ENV !== "production" && Rc(t.message), this.setState({});
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
const Hr = {
  x: 0,
  y: 0
}, Gq = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), kq = (e, t) => e.x === t.x && e.y === t.y, zq = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), Hq = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var Uq = (e, t) => {
  const r = en({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const qq = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Yq = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Kq = (e, t) => t ? qq(e, t.scroll.diff.displacement) : e, Xq = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Jq = (e, t) => t && t.shouldClipSubject ? Uq(t.pageMarginBox, e) : en(e);
var Zq = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = Kq(e.marginBox, o), i = Xq(n, r, t), a = Jq(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Vt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Vt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const Qq = Vt((e) => Object.values(e)), eY = Vt((e) => Object.values(e));
Vt((e, t) => eY(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function tY(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Vt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const rY = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, nY = {
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
Vt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: Hq(e.line, r)
  };
});
var Fo = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const oY = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), iY = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), ad = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, oo = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, aY = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Ar = `${aY.outOfTheWay}s ${ad.outOfTheWay}`, jo = {
  fluid: `opacity ${Ar}`,
  snap: `transform ${Ar}, opacity ${Ar}`,
  drop: (e) => {
    const t = `${e}s ${ad.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Ar}`,
  placeholder: `height ${Ar}, width ${Ar}, margin ${Ar}`
}, Ph = (e) => kq(e, Hr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Vc = {
  moveTo: Ph,
  drop: (e, t) => {
    const r = Ph(e);
    if (r)
      return t ? `${r} scale(${oo.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var nS = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = Gq({
    x: t,
    y: e
  }, {
    x: o,
    y: r
  });
  return {
    x: Math.max(0, n.x),
    y: Math.max(0, n.y)
  };
}, sY = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot find document.documentElement") : fe()), e;
}, cY = () => {
  const e = sY();
  return nS({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Vt((e) => Qq(e).filter((t) => !(!t.isEnabled || !t.frame)));
const oS = "data-rfd", $h = (() => {
  const e = `${oS}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ah = {
  contextId: `${oS}-scroll-container-context-id`
}, lY = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ne;
var $n = lY;
function uY(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var dY = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function iS(e) {
  return e instanceof dY(e).HTMLElement;
}
function pY(e, t) {
  const r = `[${$h.contextId}="${e}"]`, o = uY(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Or(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute($h.draggableId) === t);
  return n ? iS(n) ? n : (process.env.NODE_ENV !== "production" && Or("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Or(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var aS = _.createContext(null), fY = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot find document.body") : fe()), e;
};
let mY = 0;
const sS = {
  separator: "::"
};
function gY(e, t = sS) {
  return Nt(() => `${e}${t.separator}${mY++}`, [t.separator, e]);
}
function bY(e, t = sS) {
  const r = _.useId();
  return Nt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var cS = "useId" in _ ? bY : gY, sd = _.createContext(null);
function lS(e) {
  process.env.NODE_ENV !== "production" && e();
}
function cd(e, t) {
  lS(() => {
    ne(() => {
      try {
        e();
      } catch (r) {
        Rc(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function hY(e) {
  const t = L(e);
  return ne(() => {
    t.current = e;
  }), t;
}
function ld(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Th = {
  dragging: 5e3,
  dropAnimating: 4500
}, yY = (e, t) => t ? jo.drop(t.duration) : e ? jo.snap : jo.fluid, vY = (e, t) => {
  if (e)
    return t ? oo.opacity.drop : oo.opacity.combining;
}, EY = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function xY(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = EY(e), s = !!n, c = s ? Vc.drop(r, i) : Vc.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: yY(a, n),
    transform: c,
    opacity: vY(i, s),
    zIndex: s ? Th.dropAnimating : Th.dragging,
    pointerEvents: "none"
  };
}
function OY(e) {
  return {
    transform: Vc.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function SY(e) {
  return e.type === "DRAGGING" ? xY(e) : OY(e);
}
function wY(e, t, r = Hr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = eS(n, o), a = Tc(i, r), s = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: o.display
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
function DY(e) {
  const t = cS("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = Nt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = mt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot get dimension when no ref is set") : fe()), wY(r, h, g);
  }, [r, n]), m = Nt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = L(m), d = L(!0);
  $n(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), $n(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = m, o.draggable.update(m, g);
  }, [m, o.draggable]);
}
var ud = _.createContext(null);
function uS(e) {
  e && iS(e) || (process.env.NODE_ENV !== "production" ? fe(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : fe());
}
function NY(e, t, r) {
  cd(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? fe(!1, "Draggable requires a draggableId") : fe(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? fe(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : fe(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? fe(!1, `${o(n)} requires an integer index prop`) : fe(!1)), e.mapped.type !== "DRAGGING" && (uS(r()), e.isEnabled && (pY(t, n) || (process.env.NODE_ENV !== "production" ? fe(!1, `${o(n)} Unable to find drag handle`) : fe(!1))));
  });
}
function CY(e) {
  lS(() => {
    const t = L(e);
    cd(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? fe(!1, "Draggable isClone prop value changed during component life") : fe(!1));
    }, [e]);
  });
}
function ni(e) {
  const t = yt(e);
  return t || (process.env.NODE_ENV !== "production" ? fe(!1, "Could not find required context") : fe()), t;
}
function _Y(e) {
  e.preventDefault();
}
const IY = (e) => {
  const t = L(null), r = mt((v = null) => {
    t.current = v;
  }, []), o = mt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = ni(sd), {
    type: s,
    droppableId: c
  } = ni(ud), u = Nt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: m,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: x
  } = e;
  if (NY(e, n, o), CY(b), !b) {
    const v = Nt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    DY(v);
  }
  const w = Nt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: _Y
  } : null, [n, i, l, d]), E = mt((v) => {
    p.type === "DRAGGING" && p.dropping && v.propertyName === "transform" && (_.version.startsWith("16") || _.version.startsWith("17") ? x() : tr(x));
  }, [x, p]), y = Nt(() => {
    const v = SY(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: v,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), f = Nt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return _.createElement(_.Fragment, null, m(y, p.snapshot, f));
};
var PY = IY, dS = (e, t) => e === t, pS = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const $Y = (e) => e.combine ? e.combine.draggableId : null, AY = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function TY() {
  const e = Vt((o, n) => ({
    x: o,
    y: n
  })), t = Vt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Vt((o, n, i, a, s = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: c,
      mode: n,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(n, a, s, c, null)
    }
  }));
  return (o, n) => {
    if (ld(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Fo(o.impact), c = AY(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, m = pS(c), l = $Y(c), d = {
        duration: o.dropDuration,
        curve: ad.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? oo.opacity.drop : null,
        scale: l ? oo.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: m,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, m, l, d)
        }
      };
    }
    return null;
  };
}
function fS(e = null) {
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
const RY = {
  mapped: {
    type: "SECONDARY",
    offset: Hr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: fS(null)
  }
};
function VY() {
  const e = Vt((i, a) => ({
    x: i,
    y: a
  })), t = Vt(fS), r = Vt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(Hr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], m = !!(c.inVirtualList && c.effected[i]), l = tY(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!m)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = zq(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (m)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (ld(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const MY = () => {
  const e = TY(), t = VY();
  return (r, o) => e(r, o) || t(r, o) || RY;
}, LY = {
  dropAnimationFinished: iY
}, BY = JO(MY, LY, null, {
  context: aS,
  areStatePropsEqual: dS
})(PY);
var FY = BY;
function jY(e) {
  return ni(ud).isUsingCloneFor === e.draggableId && !e.isClone ? null : _.createElement(FY, e);
}
const dd = (e) => (t) => e === t, WY = dd("scroll"), GY = dd("auto"), kY = dd("visible"), Rh = (e, t) => t(e.overflowX) || t(e.overflowY), zY = (e, t) => t(e.overflowX) && t(e.overflowY), mS = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Rh(r, WY) || Rh(r, GY);
}, HY = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = fY(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, fe()), !mS(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return zY(o, kY) || process.env.NODE_ENV !== "production" && Or(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, pd = (e) => e == null ? null : e === document.body ? HY() ? e : null : e === document.documentElement ? null : mS(e) ? e : pd(e.parentElement);
var UY = (e) => {
  !e || !pd(e.parentElement) || process.env.NODE_ENV !== "production" && Or(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Mc = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const gS = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : gS(e.parentElement) : !1;
var qY = (e) => {
  const t = pd(e), r = gS(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, YY = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: r,
  isFixedOnPage: o,
  direction: n,
  client: i,
  page: a,
  closest: s
}) => {
  const c = (() => {
    if (!s)
      return null;
    const {
      scrollSize: l,
      client: d
    } = s, g = nS({
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: l,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: g,
        diff: {
          value: Hr,
          displacement: Hr
        }
      }
    };
  })(), u = n === "vertical" ? rY : nY, m = Zq({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: o,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: c,
    subject: m
  };
};
const KY = (e, t) => {
  const r = tS(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = QO({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return id({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var XY = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = KY(e, c), m = Tc(u, o), l = (() => {
    if (!c)
      return null;
    const d = tS(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Tc(d, o),
      scroll: Mc(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return YY({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: m,
    closest: l
  });
};
const JY = {
  passive: !1
}, ZY = {
  passive: !0
};
var Vh = (e) => e.shouldPublishImmediately ? JY : ZY;
const Oo = (e) => e && e.env.closestScrollable || null;
function QY(e) {
  const t = L(null), r = ni(sd), o = cS("droppable"), {
    registry: n,
    marshal: i
  } = r, a = hY(e), s = Nt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = L(s), u = Nt(() => Vt((y, f) => {
    t.current || (process.env.NODE_ENV !== "production" ? fe(!1, "Can only update scroll when dragging") : fe());
    const v = {
      x: y,
      y: f
    };
    i.updateDroppableScroll(s.id, v);
  }), [s.id, i]), m = mt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? Hr : Mc(y.env.closestScrollable);
  }, []), l = mt(() => {
    const y = m();
    u(y.x, y.y);
  }, [m, u]), d = Nt(() => $q(l), [l]), g = mt(() => {
    const y = t.current, f = Oo(y);
    if (y && f || (process.env.NODE_ENV !== "production" ? fe(!1, "Could not find scroll options while scrolling") : fe()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = mt((y, f) => {
    t.current && (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot collect a droppable while a drag is occurring") : fe());
    const v = a.current, D = v.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot collect without a droppable ref") : fe());
    const C = qY(D), R = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: f
    };
    t.current = R;
    const $ = XY({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: v.direction,
      isDropDisabled: v.isDropDisabled,
      isCombineEnabled: v.isCombineEnabled,
      shouldClipSubject: !v.ignoreContainerClipping
    }), A = C.closestScrollable;
    return A && (A.setAttribute(Ah.contextId, r.contextId), A.addEventListener("scroll", g, Vh(R.scrollOptions)), process.env.NODE_ENV !== "production" && UY(A)), $;
  }, [r.contextId, s, g, a]), b = mt(() => {
    const y = t.current, f = Oo(y);
    return y && f || (process.env.NODE_ENV !== "production" ? fe(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : fe()), Mc(f);
  }, []), p = mt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot stop drag when no active drag") : fe());
    const f = Oo(y);
    t.current = null, f && (d.cancel(), f.removeAttribute(Ah.contextId), f.removeEventListener("scroll", g, Vh(y.scrollOptions)));
  }, [g, d]), x = mt((y) => {
    const f = t.current;
    f || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot scroll when there is no drag") : fe());
    const v = Oo(f);
    v || (process.env.NODE_ENV !== "production" ? fe(!1, "Cannot scroll a droppable with no closest scrollable") : fe()), v.scrollTop += y.y, v.scrollLeft += y.x;
  }, []), w = Nt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: x
  }), [p, h, b, x]), E = Nt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  $n(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Or("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), $n(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), $n(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ns() {
}
const e2 = {
  width: 0,
  height: 0,
  margin: Yq
}, t2 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? e2 : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, r2 = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = t2({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: r
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: o.width,
    height: o.height,
    marginTop: o.margin.top,
    marginRight: o.margin.right,
    marginBottom: o.margin.bottom,
    marginLeft: o.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: r !== "none" ? jo.placeholder : null
  };
}, n2 = (e) => {
  const t = L(null), r = mt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = Fe(e.animate === "open");
  ne(() => s ? o !== "open" ? (r(), c(!1), ns) : t.current ? ns : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : ns, [o, s, r]);
  const u = mt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), m = r2({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return _.createElement(e.placeholder.tagName, {
    style: m,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var o2 = _.memo(n2);
function os(e) {
  return typeof e == "boolean";
}
function is(e, t) {
  t.forEach((r) => r(e));
}
const i2 = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? fe(!1, "A Droppable requires a droppableId prop") : fe()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? fe(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : fe());
}, function({
  props: e
}) {
  os(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? fe(!1, "isDropDisabled must be a boolean") : fe()), os(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? fe(!1, "isCombineEnabled must be a boolean") : fe()), os(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? fe(!1, "ignoreContainerClipping must be a boolean") : fe());
}, function({
  getDroppableRef: e
}) {
  uS(e());
}], a2 = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Or(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], s2 = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? fe(!1, "Must provide a clone render function (renderClone) for virtual lists") : fe());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? fe(!1, "Expected virtual list to not have a placeholder") : fe());
}];
function c2(e) {
  cd(() => {
    is(e, i2), e.props.mode === "standard" && is(e, a2), e.props.mode === "virtual" && is(e, s2);
  });
}
class l2 extends _.PureComponent {
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
const u2 = (e) => {
  const t = yt(sd);
  t || (process.env.NODE_ENV !== "production" ? fe(!1, "Could not find app context") : fe());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = L(null), i = L(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: x
  } = e, w = mt(() => n.current, []), E = mt((P = null) => {
    n.current = P;
  }, []), y = mt(() => i.current, []), f = mt((P = null) => {
    i.current = P;
  }, []);
  c2({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const v = mt(() => {
    o() && p({
      maxScroll: cY()
    });
  }, [o, p]);
  QY({
    droppableId: s,
    type: c,
    mode: u,
    direction: m,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = Nt(() => _.createElement(l2, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: j
  }) => _.createElement(o2, {
    placeholder: T,
    onClose: P,
    innerRef: f,
    animate: j,
    contextId: r,
    onTransitionEnd: v
  })), [r, v, e.placeholder, e.shouldAnimatePlaceholder, f]), C = Nt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), R = b ? b.dragging.draggableId : null, $ = Nt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: R
  }), [s, R, c]);
  function A() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, j = _.createElement(jY, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, V) => T(k, V, P));
    return ir.createPortal(j, x());
  }
  return _.createElement(ud.Provider, {
    value: $
  }, a(C, h), A());
};
var d2 = u2;
function p2() {
  return document.body || (process.env.NODE_ENV !== "production" ? fe(!1, "document.body is not ready") : fe()), document.body;
}
const Mh = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: p2
}, bS = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Mh)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Mh[r]
    });
  return t;
}, as = (e, t) => e === t.droppable.type, Lh = (e, t) => t.draggables[e.draggable.id], f2 = () => {
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
  }, r = Vt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = Vt((n, i, a, s, c, u) => {
    const m = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? m : null,
        draggingFromThisWith: m,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const l = {
      isDraggingOver: a,
      draggingOverWith: m,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: l,
      useClone: null
    };
  });
  return (n, i) => {
    const a = bS(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, m = a.renderClone;
    if (ld(n)) {
      const l = n.critical;
      if (!as(c, l))
        return t;
      const d = Lh(l, n.dimensions), g = Fo(n.impact) === s;
      return o(s, u, g, g, d, m);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!as(c, l.critical))
        return t;
      const d = Lh(l.critical, n.dimensions);
      return o(s, u, pS(l.result) === s, Fo(l.impact) === s, d, m);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!as(c, l.critical))
        return t;
      const d = Fo(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, m2 = {
  updateViewportMaxScroll: oY
};
JO(f2, m2, (e, t, r) => ({
  ...bS(r),
  ...e,
  ...t
}), {
  context: aS,
  areStatePropsEqual: dS
})(d2);
var Lc = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new WeakMap(), Bh = 0, g2 = void 0;
function b2(e) {
  return e ? (So.has(e) || (Bh += 1, So.set(e, Bh.toString())), So.get(e)) : "0";
}
function h2(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? b2(e.root) : e[t]}`).toString();
}
function y2(e) {
  const t = h2(e);
  let r = Lc.get(t);
  if (!r) {
    const o = /* @__PURE__ */ new Map();
    let n;
    const i = new IntersectionObserver((a) => {
      a.forEach((s) => {
        var c;
        const u = s.isIntersecting && n.some((m) => s.intersectionRatio >= m);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u), (c = o.get(s.target)) == null || c.forEach((m) => {
          m(u, s);
        });
      });
    }, e);
    n = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: o
    }, Lc.set(t, r);
  }
  return r;
}
function v2(e, t, r = {}, o = g2) {
  if (typeof window.IntersectionObserver > "u" && o !== void 0) {
    const c = e.getBoundingClientRect();
    return t(o, {
      isIntersecting: o,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: c,
      intersectionRect: c,
      rootBounds: c
    }), () => {
    };
  }
  const { id: n, observer: i, elements: a } = y2(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), Lc.delete(n));
  };
}
function E2({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: o,
  root: n,
  triggerOnce: i,
  skip: a,
  initialInView: s,
  fallbackInView: c,
  onChange: u
} = {}) {
  var m;
  const [l, d] = N.useState(null), g = N.useRef(u), [h, b] = N.useState({
    inView: !!s,
    entry: void 0
  });
  g.current = u, N.useEffect(
    () => {
      if (a || !l) return;
      let E;
      return E = v2(
        l,
        (y, f) => {
          b({
            inView: y,
            entry: f
          }), g.current && g.current(y, f), f.isIntersecting && i && E && (E(), E = void 0);
        },
        {
          root: n,
          rootMargin: o,
          threshold: e,
          // @ts-ignore
          trackVisibility: r,
          // @ts-ignore
          delay: t
        },
        c
      ), () => {
        E && E();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      l,
      n,
      o,
      i,
      a,
      r,
      c,
      t
    ]
  );
  const p = (m = h.entry) == null ? void 0 : m.target, x = N.useRef(void 0);
  !l && p && !i && !a && x.current !== p && (x.current = p, b({
    inView: !!s,
    entry: void 0
  }));
  const w = [d, h.inView, h.entry];
  return w.ref = w[0], w.inView = w[1], w.entry = w[2], w;
}
const x2 = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, o] = Fe(!1), n = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    o(i > 100);
  };
  return ne(() => (window.addEventListener("scroll", n), () => {
    window.removeEventListener("scroll", n);
  }), []), r ? /* @__PURE__ */ Q(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ Q(
        A1,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, k2 = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: o,
  isScrollTopButton: n = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: c, data: u } = e, m = u == null ? void 0 : u.pages.flatMap((g) => g), { ref: l, inView: d } = E2();
  return ne(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ gt(Wo, { children: [
    n && /* @__PURE__ */ Q(x2, { className: o }),
    /* @__PURE__ */ Q(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(m != null && m.length) && m.map((g, h) => t(g, h))
      }
    ),
    /* @__PURE__ */ Q(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (s || c) && /* @__PURE__ */ Q(T1, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(m != null && m.length) && /* @__PURE__ */ Q("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, z2 = () => {
  const e = L(null);
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
  D2 as Button,
  N2 as Checkbox,
  C2 as Chips,
  Bc as ErrorText,
  Go as Icon,
  k2 as InfiniteScroll,
  _2 as Input,
  I2 as List,
  Fh as Loader,
  P2 as MultiSelectSearch,
  x2 as ScrollTopButton,
  $2 as Search,
  A2 as Select,
  T2 as Table,
  R2 as Textarea,
  Kh as Wrapper,
  ty as useDebounce,
  z2 as useScroll
};
