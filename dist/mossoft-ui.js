import { jsx as z, jsxs as He, Fragment as mn } from "react/jsx-runtime";
import * as _ from "react";
import I, { useState as Ge, useEffect as se, useRef as M, useMemo as Fm, useLayoutEffect as sr, useContext as ht } from "react";
import jr, { unstable_batchedUpdates as kr, flushSync as cr } from "react-dom";
const gn = ({ name: e, className: t }) => /* @__PURE__ */ z("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ z(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), ad = ({ style: e, text: t }) => /* @__PURE__ */ He("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ z("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ z("span", { className: "text-base", children: t })
] }), nA = ({
  children: e,
  onClick: t,
  className: r,
  loadType: n,
  isLoading: o,
  variant: i,
  icon: a,
  disabled: s,
  ...l
}) => {
  const [u, p] = Ge(""), c = () => {
    o && n === "1C" && (p("Отправляем запрос в 1С"), setTimeout(
      () => p(n === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  se(() => {
    n === "1C" && c();
  }, [o]);
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
  return /* @__PURE__ */ He(
    "button",
    {
      disabled: s || o,
      onClick: t,
      className: d,
      ...l,
      children: [
        o ? /* @__PURE__ */ z(ad, { text: n === "1C" ? u : void 0 }) : e,
        a && !o && /* @__PURE__ */ z(
          gn,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, Gi = ({ error: e }) => /* @__PURE__ */ z("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ z("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), oA = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: n,
  className: o,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: l
}) => /* @__PURE__ */ He(mn, { children: [
  /* @__PURE__ */ He(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${n}`,
      children: [
        /* @__PURE__ */ z(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ z("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ z(
          "input",
          {
            disabled: l,
            checked: s,
            onChange: (u) => e(u.target.checked),
            type: "checkbox",
            className: o
          }
        )
      ]
    }
  ),
  a && /* @__PURE__ */ z(Gi, { error: a })
] }), iA = ({ items: e, disable: t, color: r, style: n }) => /* @__PURE__ */ z("div", { className: "flex flex-wrap gap-[6px]", children: e.map((o) => /* @__PURE__ */ z(mn, { children: o.title ? /* @__PURE__ */ z(
  "div",
  {
    style: n,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: o.title
  },
  o.title
) : /* @__PURE__ */ z(mn, {}) })) });
function Wi(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var Sr;
(function(e) {
  e.event = "event", e.props = "prop";
})(Sr || (Sr = {}));
function Et() {
}
function Gm(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(i, a) {
      return i === t[a];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function jt(e) {
  return !!(e || "").match(/\d/);
}
function Wt(e) {
  return e == null;
}
function Wm(e) {
  return typeof e == "number" && isNaN(e);
}
function sd(e) {
  return Wt(e) || Wm(e) || typeof e == "number" && !isFinite(e);
}
function cd(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function jm(e) {
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
function km(e, t, r) {
  var n = jm(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function zm(e) {
  var t = M(e);
  t.current = e;
  var r = M(function() {
    for (var n = [], o = arguments.length; o--; ) n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function ji(e, t) {
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
function Hm(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function ld(e, t, r) {
  for (var n = "", o = r ? "0" : "", i = 0; i <= t - 1; i++)
    n += e[i] || o;
  return n;
}
function hs(e, t) {
  return Array(t + 1).join(e);
}
function ud(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], i = n[1];
  if (i = Number(i), !i)
    return r + o;
  o = o.replace(".", "");
  var a = 1 + i, s = o.length;
  return a < 0 ? o = "0." + hs("0", Math.abs(a)) + o : a >= s ? o = o + hs("0", a - s) : o = (o.substring(0, a) || "0") + "." + o.substring(a), r + o;
}
function vs(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = ji(e), i = o.beforeDecimal, a = o.afterDecimal, s = o.hasNegation, l = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : l.toFixed(t), p = u.split("."), c = i;
  i && Number(p[0]) && (c = i.split("").reverse().reduce(function(b, f, y) {
    return b.length > y ? (Number(b[0]) + Number(f)).toString() + b.substring(1, b.length) : f + b;
  }, p[0]));
  var d = ld(p[1] || "", t, r), m = s ? "-" : "", h = n ? "." : "";
  return "" + m + c + h + d;
}
function Ot(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var dd = Gm(function(e, t) {
  for (var r = 0, n = 0, o = e.length, i = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[i - 1 - n] && i - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: i - n }
  };
}), Um = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function qm(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Vn(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Ym() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function pd(e) {
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
function fd(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function Km(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Xm(e, t, r, n, o, i, a) {
  a === void 0 && (a = Km);
  var s = o.findIndex(function(v) {
    return v;
  }), l = e.slice(0, s);
  !t && !r.startsWith(l) && (t = l, r = l + r, n = n + l.length);
  for (var u = r.length, p = e.length, c = {}, d = new Array(u), m = 0; m < u; m++) {
    d[m] = -1;
    for (var h = 0, b = p; h < b; h++) {
      var f = a({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: m,
        formattedValueIndex: h
      });
      if (f && c[h] !== !0) {
        d[m] = h, c[h] = !0;
        break;
      }
    }
  }
  for (var y = n; y < u && (d[y] === -1 || !i(r[y])); )
    y++;
  var w = y === u || d[y] === -1 ? p : d[y];
  for (y = n - 1; y > 0 && d[y] === -1; )
    y--;
  var E = y === -1 || d[y] === -1 ? 0 : d[y] + 1;
  return E > w ? w : n - E < w - n ? E : w;
}
function bn(e, t, r, n) {
  var o = e.length;
  if (t = qm(t, 0, o), n === "left") {
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
function Jm(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(jt(e[r]) || jt(e[r - 1]));
  return t;
}
function md(e, t, r, n, o, i) {
  i === void 0 && (i = Et);
  var a = zm(function(h, b) {
    var f, y;
    return sd(h) ? (y = "", f = "") : typeof h == "number" || b ? (y = typeof h == "number" ? ud(h) : h, f = n(y)) : (y = o(h, void 0), f = n(y)), { formattedValue: f, numAsString: y };
  }), s = Ge(function() {
    return a(Wt(e) ? t : e, r);
  }), l = s[0], u = s[1], p = function(h, b) {
    h.formattedValue !== l.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, c = e, d = r;
  Wt(e) && (c = l.numAsString, d = !0);
  var m = a(c, d);
  return Fm(function() {
    u(m);
  }, [m.formattedValue]), [l, p];
}
function Zm(e) {
  return e.replace(/[^0-9]/g, "");
}
function Qm(e) {
  return e;
}
function gd(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = Qm);
  var s = e.removeFormatting;
  s === void 0 && (s = Zm);
  var l = e.defaultValue, u = e.valueIsNumericString, p = e.onValueChange, c = e.isAllowed, d = e.onChange;
  d === void 0 && (d = Et);
  var m = e.onKeyDown;
  m === void 0 && (m = Et);
  var h = e.onMouseUp;
  h === void 0 && (h = Et);
  var b = e.onFocus;
  b === void 0 && (b = Et);
  var f = e.onBlur;
  f === void 0 && (f = Et);
  var y = e.value, w = e.getCaretBoundary;
  w === void 0 && (w = Jm);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = jt);
  var v = e.isCharacterSame, g = Wi(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), x = md(y, l, !!u, a, s, p), N = x[0], C = N.formattedValue, V = N.numAsString, A = x[1], $ = M(), P = M({ formattedValue: C, numAsString: V }), T = function(G, Y) {
    P.current = { formattedValue: G.formattedValue, numAsString: G.value }, A(G, Y);
  }, k = Ge(!1), U = k[0], R = k[1], L = M(null), F = M({
    setCaretTimeout: null,
    focusTimeout: null
  });
  se(function() {
    return R(!0), function() {
      clearTimeout(F.current.setCaretTimeout), clearTimeout(F.current.focusTimeout);
    };
  }, []);
  var j = a, H = function(G, Y) {
    var ce = parseFloat(Y);
    return {
      formattedValue: G,
      value: Y,
      floatValue: isNaN(ce) ? void 0 : ce
    };
  }, B = function(G, Y, ce) {
    G.selectionStart === 0 && G.selectionEnd === G.value.length || (Ot(G, Y), F.current.setCaretTimeout = setTimeout(function() {
      G.value === ce && G.selectionStart !== Y && Ot(G, Y);
    }, 0));
  }, Q = function(G, Y, ce) {
    return bn(G, Y, w(G), ce);
  }, ee = function(G, Y, ce) {
    var Le = w(Y), ot = Xm(Y, C, G, ce, Le, E, v);
    return ot = bn(Y, ot, Le), ot;
  }, re = function(G) {
    var Y = G.formattedValue;
    Y === void 0 && (Y = "");
    var ce = G.input, Le = G.source, ot = G.event, Be = G.numAsString, Re;
    if (ce) {
      var vt = G.inputValue || ce.value, xt = Vn(ce);
      ce.value = Y, Re = ee(vt, Y, xt), Re !== void 0 && B(ce, Re, Y);
    }
    Y !== C && T(H(Y, Be), { event: ot, source: Le });
  };
  se(function() {
    var G = P.current, Y = G.formattedValue, ce = G.numAsString;
    (C !== Y || V !== ce) && T(H(C, V), {
      event: void 0,
      source: Sr.props
    });
  }, [C, V]);
  var ne = L.current ? Vn(L.current) : void 0, de = typeof window < "u" ? sr : se;
  de(function() {
    var G = L.current;
    if (C !== P.current.formattedValue && G) {
      var Y = ee(P.current.formattedValue, C, ne);
      G.value = C, B(G, Y, C);
    }
  }, [C]);
  var te = function(G, Y, ce) {
    var Le = Y.target, ot = $.current ? Um($.current, Le.selectionEnd) : dd(C, G), Be = Object.assign(Object.assign({}, ot), { lastValue: C }), Re = s(G, Be), vt = j(Re);
    if (Re = s(vt, void 0), c && !c(H(vt, Re))) {
      var xt = Y.target, wt = Vn(xt), Tn = ee(G, C, wt);
      return xt.value = C, B(xt, Tn, C), !1;
    }
    return re({
      formattedValue: vt,
      numAsString: Re,
      inputValue: G,
      event: Y,
      source: ce,
      input: Y.target
    }), !0;
  }, oe = function(G, Y) {
    Y === void 0 && (Y = 0);
    var ce = G.selectionStart, Le = G.selectionEnd;
    $.current = { selectionStart: ce, selectionEnd: Le + Y };
  }, W = function(G) {
    var Y = G.target, ce = Y.value, Le = te(ce, G, Sr.event);
    Le && d(G), $.current = void 0;
  }, ie = function(G) {
    var Y = G.target, ce = G.key, Le = Y.selectionStart, ot = Y.selectionEnd, Be = Y.value;
    Be === void 0 && (Be = "");
    var Re;
    ce === "ArrowLeft" || ce === "Backspace" ? Re = Math.max(Le - 1, 0) : ce === "ArrowRight" ? Re = Math.min(Le + 1, Be.length) : ce === "Delete" && (Re = Le);
    var vt = 0;
    ce === "Delete" && Le === ot && (vt = 1);
    var xt = ce === "ArrowLeft" || ce === "ArrowRight";
    if (Re === void 0 || Le !== ot && !xt) {
      m(G), oe(Y, vt);
      return;
    }
    var wt = Re;
    if (xt) {
      var Tn = ce === "ArrowLeft" ? "left" : "right";
      wt = Q(Be, Re, Tn), wt !== Re && G.preventDefault();
    } else ce === "Delete" && !E(Be[Re]) ? wt = Q(Be, Re, "right") : ce === "Backspace" && !E(Be[Re]) && (wt = Q(Be, Re, "left"));
    wt !== Re && B(Y, wt, Be), m(G), oe(Y, vt);
  }, Fe = function(G) {
    var Y = G.target, ce = function() {
      var Le = Y.selectionStart, ot = Y.selectionEnd, Be = Y.value;
      if (Be === void 0 && (Be = ""), Le === ot) {
        var Re = Q(Be, Le);
        Re !== Le && B(Y, Re, Be);
      }
    };
    ce(), requestAnimationFrame(function() {
      ce();
    }), h(G), oe(Y);
  }, S = function(G) {
    G.persist && G.persist();
    var Y = G.target, ce = G.currentTarget;
    L.current = Y, F.current.focusTimeout = setTimeout(function() {
      var Le = Y.selectionStart, ot = Y.selectionEnd, Be = Y.value;
      Be === void 0 && (Be = "");
      var Re = Q(Be, Le);
      Re !== Le && !(Le === 0 && ot === Be.length) && B(Y, Re, Be), b(Object.assign(Object.assign({}, G), { currentTarget: ce }));
    }, 0);
  }, le = function(G) {
    L.current = null, clearTimeout(F.current.focusTimeout), clearTimeout(F.current.setCaretTimeout), f(G);
  }, D = U && Ym() ? "numeric" : void 0, ue = Object.assign({ inputMode: D }, g, {
    type: t,
    value: C,
    onChange: W,
    onKeyDown: ie,
    onMouseUp: Fe,
    onFocus: S,
    onBlur: le
  });
  if (r === "text")
    return o ? I.createElement(I.Fragment, null, o(C, g) || null) : I.createElement("span", Object.assign({}, g, { ref: i }), C);
  if (n) {
    var Te = n;
    return I.createElement(Te, Object.assign({}, ue, { ref: i }));
  }
  return I.createElement("input", Object.assign({}, ue, { ref: i }));
}
function ys(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var l = Cn(t), u = l.thousandSeparator, p = l.decimalSeparator, c = r !== 0 && e.indexOf(".") !== -1 || r && n, d = ji(e, a), m = d.beforeDecimal, h = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (h = ld(h, r, !!n)), u && (m = km(m, u, s)), o && (m = o + m), i && (h = h + i), b && (m = "-" + m), e = m + (c && p || "") + h, e;
}
function Cn(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function eg(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), i = n.test(e);
  return e = e.replace(/-/g, ""), o && !i && t && (e = "-" + e), e;
}
function tg(e, t) {
  return new RegExp("(^-)|[0-9]|" + cd(e), "g");
}
function rg(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function ng(e, t, r) {
  var n;
  t === void 0 && (t = pd(e));
  var o = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, l = t.from, u = t.to, p = u.start, c = u.end, d = Cn(r), m = d.allowedDecimalSeparators, h = d.decimalSeparator, b = e[c] === h;
  if (jt(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (c - p === 1 && m.indexOf(e[p]) !== -1) {
    var f = s === 0 ? "" : h;
    e = e.substring(0, p) + f + e.substring(p + 1, e.length);
  }
  var y = function(L, F, j) {
    var H = !1, B = !1;
    i.startsWith("-") ? H = !1 : L.startsWith("--") ? (H = !1, B = !0) : a.startsWith("-") && L.length === a.length ? H = !1 : L[0] === "-" && (H = !0);
    var Q = H ? 1 : 0;
    return B && (Q = 2), Q && (L = L.substring(Q), F -= Q, j -= Q), { value: L, start: F, end: j, hasNegation: H };
  }, w = y(e, p, c), E = w.hasNegation;
  n = w, e = n.value, p = n.start, c = n.end;
  var v = y(t.lastValue, l.start, l.end), g = v.start, x = v.end, N = v.value, C = e.substring(p, c);
  e.length && N.length && (g > N.length - a.length || x < i.length) && !(C && a.startsWith(C)) && (e = N);
  var V = 0;
  e.startsWith(i) ? V += i.length : p < i.length && (V = p), e = e.substring(V), c -= V;
  var A = e.length, $ = e.length - a.length;
  e.endsWith(a) ? A = $ : (c > $ || c > e.length - a.length) && (A = c), e = e.substring(0, A), e = eg(E ? "-" + e : e, o), e = (e.match(tg(h)) || []).join("");
  var P = e.indexOf(h);
  e = e.replace(new RegExp(cd(h), "g"), function(L, F) {
    return F === P ? "." : "";
  });
  var T = ji(e, o), k = T.beforeDecimal, U = T.afterDecimal, R = T.addNegation;
  return u.end - u.start < l.end - l.start && k === "" && b && !parseFloat(U) && (e = R ? "-" : ""), e;
}
function og(e, t) {
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
function ig(e) {
  var t = Cn(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
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
function ag(e) {
  e = ig(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Et);
  var i = e.onBlur;
  i === void 0 && (i = Et);
  var a = e.thousandSeparator, s = e.decimalScale, l = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var p = e.defaultValue, c = e.value, d = e.valueIsNumericString, m = e.onValueChange, h = Wi(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = Cn(e), f = b.decimalSeparator, y = b.allowedDecimalSeparators, w = function(R) {
    return ys(R, e);
  }, E = function(R, L) {
    return ng(R, L, e);
  }, v = Wt(c) ? p : c, g = d ?? rg(v, u, t);
  Wt(c) ? Wt(p) || (g = g || typeof p == "number") : g = g || typeof c == "number";
  var x = function(R) {
    return sd(R) ? R : (typeof R == "number" && (R = ud(R)), g && typeof s == "number" ? vs(R, s, !!l) : R);
  }, N = md(x(c), x(p), !!g, w, E, m), C = N[0], V = C.numAsString, A = C.formattedValue, $ = N[1], P = function(R) {
    var L = R.target, F = R.key, j = L.selectionStart, H = L.selectionEnd, B = L.value;
    if (B === void 0 && (B = ""), (F === "Backspace" || F === "Delete") && H < u.length) {
      R.preventDefault();
      return;
    }
    if (j !== H) {
      o(R);
      return;
    }
    F === "Backspace" && B[0] === "-" && j === u.length + 1 && r && Ot(L, 1), s && l && (F === "Backspace" && B[j - 1] === f ? (Ot(L, j - 1), R.preventDefault()) : F === "Delete" && B[j] === f && R.preventDefault()), y != null && y.includes(F) && B[j] === f && Ot(L, j + 1);
    var Q = a === !0 ? "," : a;
    F === "Backspace" && B[j - 1] === Q && Ot(L, j - 1), F === "Delete" && B[j] === Q && Ot(L, j + 1), o(R);
  }, T = function(R) {
    var L = V;
    if (L.match(/\d/g) || (L = ""), n || (L = Hm(L)), l && s && (L = vs(L, s, l)), L !== V) {
      var F = ys(L, e);
      $({
        formattedValue: F,
        value: L,
        floatValue: parseFloat(L)
      }, {
        event: R,
        source: Sr.event
      });
    }
    i(R);
  }, k = function(R) {
    return R === f ? !0 : jt(R);
  }, U = function(R) {
    var L = R.currentValue, F = R.lastValue, j = R.formattedValue, H = R.currentValueIndex, B = R.formattedValueIndex, Q = L[H], ee = j[B], re = dd(F, L), ne = re.to, de = function(te) {
      return E(te).indexOf(".") + u.length;
    };
    return c === 0 && l && s && L[ne.start] === f && de(L) < H && de(j) > B ? !1 : H >= ne.start && H < ne.end && y && y.includes(Q) && ee === f ? !0 : Q === ee;
  };
  return Object.assign(Object.assign({}, h), {
    value: A,
    valueIsNumericString: !1,
    isValidInputCharacter: k,
    isCharacterSame: U,
    onValueChange: $,
    format: w,
    removeFormatting: E,
    getCaretBoundary: function(R) {
      return og(R, e);
    },
    onKeyDown: P,
    onBlur: T
  });
}
function sg(e) {
  var t = ag(e);
  return I.createElement(gd, Object.assign({}, t));
}
function cg(e, t) {
  var r = t.format, n = t.allowEmptyFormatting, o = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !n)
    return "";
  for (var a = 0, s = r.split(""), l = 0, u = r.length; l < u; l++)
    r[l] === i && (s[l] = e[a] || fd(o, a), a += 1);
  return s.join("");
}
function lg(e, t, r) {
  t === void 0 && (t = pd(e));
  var n = r.format, o = r.patternChar;
  o === void 0 && (o = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var l = function(f) {
    return n[f] === o;
  }, u = function(f, y) {
    for (var w = "", E = 0; E < f.length; E++)
      l(y + E) && jt(f[E]) && (w += f[E]);
    return w;
  }, p = function(f) {
    return f.replace(/[^0-9]/g, "");
  };
  if (!n.match(/\d/))
    return p(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === n.length) {
    for (var c = "", d = 0; d < e.length; d++)
      if (l(d))
        jt(e[d]) && (c += e[d]);
      else if (e[d] !== n[d])
        return p(e);
    return c;
  }
  var m = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(m, 0) + p(h) + u(b, i.end);
}
function ug(e, t) {
  var r = t.format, n = t.mask, o = t.patternChar;
  o === void 0 && (o = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, l = {};
  r.split("").forEach(function(d, m) {
    var h = void 0;
    d === o && (a++, h = fd(n, a - 1), s === -1 && e[m] === h && (s = m)), l[m] = h;
  });
  for (var u = function(d) {
    return r[d] === o && e[d] !== l[d];
  }, p = 0, c = i.length; p < c; p++)
    i[p] = p === s || u(p) || u(p - 1);
  return i[r.indexOf(o)] = !0, i;
}
function dg(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function pg(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function fg(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var n = e.onKeyDown;
  n === void 0 && (n = Et);
  var o = e.patternChar;
  o === void 0 && (o = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, l = Wi(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  dg(e);
  var u = function(h) {
    return ug(h, e);
  }, p = function(h) {
    var b = h.key, f = h.target, y = f.selectionStart, w = f.selectionEnd, E = f.value;
    if (y !== w) {
      n(h);
      return;
    }
    var v = y;
    if (b === "Backspace" || b === "Delete") {
      var g = "right";
      if (b === "Backspace") {
        for (; v > 0 && t[v - 1] !== o; )
          v--;
        g = "left";
      } else {
        for (var x = t.length; v < x && t[v] !== o; )
          v++;
        g = "right";
      }
      v = bn(E, v, u(E), g);
    } else t[v] !== o && b !== "ArrowLeft" && b !== "ArrowRight" && (v = bn(E, v + 1, u(E), "right"));
    v !== y && Ot(f, v), n(h);
  }, c = Wt(i) ? a : i, d = s ?? pg(c, t), m = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, l), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(h) {
      return cg(h, m);
    },
    removeFormatting: function(h, b) {
      return lg(h, b, m);
    },
    getCaretBoundary: u,
    onKeyDown: p
  });
}
function mg(e) {
  var t = fg(e);
  return I.createElement(gd, Object.assign({}, t));
}
const gg = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, aA = ({
  type: e,
  field: t,
  fieldState: r,
  postfix: n,
  className: o,
  format: i,
  parentClassName: a,
  labelClassName: s,
  decimalScale: l = 1,
  formState: u,
  label: p,
  ...c
}) => {
  var h, b;
  const d = "!border-danger", { error: m } = r;
  return /* @__PURE__ */ He("label", { children: [
    p && /* @__PURE__ */ z("span", { className: `text-primary ${s}`, children: p }),
    i ? /* @__PURE__ */ z(
      mg,
      {
        onValueChange: (f) => {
          var y;
          t == null || t.onChange((y = f.value.replace("_", "")) == null ? void 0 : y.toString());
        },
        value: (h = t == null ? void 0 : t.value) == null ? void 0 : h.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${m ? d : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
        format: i,
        ...c
      }
    ) : e === "number" ? /* @__PURE__ */ He(
      "div",
      {
        className: `${m ? d : ""} ${a} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ z(
            sg,
            {
              decimalScale: l,
              onValueChange: (f) => {
                var y;
                return t == null ? void 0 : t.onChange((y = f.value.replace("_", "")) == null ? void 0 : y.toString());
              },
              value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`,
              ...c,
              ...gg.number
            }
          ),
          n ? /* @__PURE__ */ z("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ z(
      "input",
      {
        ...t,
        ...c,
        type: e,
        className: `${m ? d : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${o}`
      }
    ),
    m && /* @__PURE__ */ z(Gi, { error: m })
  ] });
}, bd = ({
  children: e,
  className: t
}) => /* @__PURE__ */ z("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), sA = ({ data: e, className: t, onClick: r }) => {
  const n = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [o] = Ge(null);
  return /* @__PURE__ */ z(bd, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ z("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ He(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${o === i.value && n}`,
      children: [
        /* @__PURE__ */ z("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ z("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, ki = "-", bg = (e) => {
  const t = vg(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(ki);
      return s[0] === "" && s.length !== 1 && s.shift(), hd(s, t) || hg(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const l = r[a] || [];
      return s && n[a] ? [...l, ...n[a]] : l;
    }
  };
}, hd = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? hd(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(ki);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, Es = /^\[(.+)\]$/, hg = (e) => {
  if (Es.test(e)) {
    const t = Es.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, vg = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Eg(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    Ho(a, n, i, t);
  }), n;
}, Ho = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : xs(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (yg(o)) {
        Ho(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      Ho(a, xs(t, i), r, n);
    });
  });
}, xs = (e, t) => {
  let r = e;
  return t.split(ki).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, yg = (e) => e.isThemeGetter, Eg = (e, t) => t ? e.map(([r, n]) => {
  const o = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, o];
}) : e, xg = (e) => {
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
}, vd = "!", wg = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, o = t[0], i = t.length, a = (s) => {
    const l = [];
    let u = 0, p = 0, c;
    for (let f = 0; f < s.length; f++) {
      let y = s[f];
      if (u === 0) {
        if (y === o && (n || s.slice(f, f + i) === t)) {
          l.push(s.slice(p, f)), p = f + i;
          continue;
        }
        if (y === "/") {
          c = f;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const d = l.length === 0 ? s : s.substring(p), m = d.startsWith(vd), h = m ? d.substring(1) : d, b = c && c > p ? c - p : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: h,
      maybePostfixModifierPosition: b
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: a
  }) : a;
}, Sg = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Dg = (e) => ({
  cache: xg(e.cacheSize),
  parseClassName: wg(e),
  ...bg(e)
}), Og = /\s+/, Ng = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, i = [], a = e.trim().split(Og);
  let s = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const u = a[l], {
      modifiers: p,
      hasImportantModifier: c,
      baseClassName: d,
      maybePostfixModifierPosition: m
    } = r(u);
    let h = !!m, b = n(h ? d.substring(0, m) : d);
    if (!b) {
      if (!h) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (b = n(d), !b) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      h = !1;
    }
    const f = Sg(p).join(":"), y = c ? f + vd : f, w = y + b;
    if (i.includes(w))
      continue;
    i.push(w);
    const E = o(b, h);
    for (let v = 0; v < E.length; ++v) {
      const g = E[v];
      i.push(y + g);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Cg() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = yd(t)) && (n && (n += " "), n += r);
  return n;
}
const yd = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = yd(e[n])) && (r && (r += " "), r += t);
  return r;
};
function _g(e, ...t) {
  let r, n, o, i = a;
  function a(l) {
    const u = t.reduce((p, c) => c(p), e());
    return r = Dg(u), n = r.cache.get, o = r.cache.set, i = s, s(l);
  }
  function s(l) {
    const u = n(l);
    if (u)
      return u;
    const p = Ng(l, r);
    return o(l, p), p;
  }
  return function() {
    return i(Cg.apply(null, arguments));
  };
}
const Me = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ed = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ig = /^\d+\/\d+$/, Pg = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ag = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, $g = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Tg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yt = (e) => Qt(e) || Pg.has(e) || Ig.test(e), St = (e) => lr(e, "length", kg), Qt = (e) => !!e && !Number.isNaN(Number(e)), Mn = (e) => lr(e, "number", Qt), pr = (e) => !!e && Number.isInteger(Number(e)), Mg = (e) => e.endsWith("%") && Qt(e.slice(0, -1)), ae = (e) => Ed.test(e), Dt = (e) => Ag.test(e), Lg = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Bg = (e) => lr(e, Lg, xd), Fg = (e) => lr(e, "position", xd), Gg = /* @__PURE__ */ new Set(["image", "url"]), Wg = (e) => lr(e, Gg, Hg), jg = (e) => lr(e, "", zg), fr = () => !0, lr = (e, t, r) => {
  const n = Ed.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, kg = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  $g.test(e) && !Rg.test(e)
), xd = () => !1, zg = (e) => Tg.test(e), Hg = (e) => Vg.test(e), Ug = () => {
  const e = Me("colors"), t = Me("spacing"), r = Me("blur"), n = Me("brightness"), o = Me("borderColor"), i = Me("borderRadius"), a = Me("borderSpacing"), s = Me("borderWidth"), l = Me("contrast"), u = Me("grayscale"), p = Me("hueRotate"), c = Me("invert"), d = Me("gap"), m = Me("gradientColorStops"), h = Me("gradientColorStopPositions"), b = Me("inset"), f = Me("margin"), y = Me("opacity"), w = Me("padding"), E = Me("saturate"), v = Me("scale"), g = Me("sepia"), x = Me("skew"), N = Me("space"), C = Me("translate"), V = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", ae, t], P = () => [ae, t], T = () => ["", yt, St], k = () => ["auto", Qt, ae], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", ae], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [Qt, ae];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fr],
      spacing: [yt, St],
      blur: ["none", "", Dt, ae],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Dt, ae],
      borderSpacing: P(),
      borderWidth: T(),
      contrast: B(),
      grayscale: j(),
      hueRotate: B(),
      invert: j(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Mg, St],
      inset: $(),
      margin: $(),
      opacity: B(),
      padding: P(),
      saturate: B(),
      scale: B(),
      sepia: j(),
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
        aspect: ["auto", "square", "video", ae]
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
        columns: [Dt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: [...U(), ae]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        z: ["auto", pr, ae]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: $()
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
        flex: ["1", "auto", "initial", "none", ae]
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
        order: ["first", "last", "none", pr, ae]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pr, ae]
        }, ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [fr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pr, ae]
        }, ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
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
        "auto-cols": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ae]
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
        m: [f]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [f]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [f]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [f]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [f]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [f]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [f]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [f]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [f]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
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
        "space-y": [N]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ae, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ae, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ae, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Dt]
        }, Dt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ae, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Dt, St]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Qt, Mn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", yt, ae]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ae]
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
        decoration: ["auto", "from-font", yt, St]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", yt, ae]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae]
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
        content: ["none", ae]
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
        bg: [...U(), Fg]
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
        bg: ["auto", "cover", "contain", Bg]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Wg]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "outline-offset": [yt, ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [yt, St]
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
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [yt, St]
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
        shadow: ["", "inner", "none", Dt, jg]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fr]
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
        "drop-shadow": ["", "none", Dt, ae]
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
        "hue-rotate": [p]
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
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [g]
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
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
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
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [g]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae]
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
        ease: ["linear", "in", "out", "in-out", ae]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ae]
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
        scale: [v]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [v]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [v]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pr, ae]
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
        "skew-x": [x]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [x]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
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
        "will-change": ["auto", "scroll", "contents", "transform", ae]
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
        stroke: [yt, St, Mn]
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
}, qg = /* @__PURE__ */ _g(Ug);
function wd(e, t) {
  const [r, n] = Ge(e);
  return se(() => {
    const o = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e]), r;
}
const cA = ({
  options: e,
  field: t,
  className: r,
  ...n
}) => {
  const [o, i] = Ge(!1), [a, s] = Ge(""), l = wd(a, 100), u = M(null);
  se(() => {
    const c = (d) => {
      u.current && !u.current.contains(d.target) && i(!1);
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, []);
  const p = (c) => {
    t == null || t.onChange(
      Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.includes(c)) && (t == null ? void 0 : t.value.filter((d) => d !== c)) || Array.isArray(t == null ? void 0 : t.value) && [...t == null ? void 0 : t.value, c] || [c]
    );
  };
  return /* @__PURE__ */ He("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ He("div", { className: "h-fit w-full", children: [
      o && /* @__PURE__ */ z(
        gn,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ z(
        "input",
        {
          ...n,
          ref: u,
          className: qg(
            "bg-[#f6f7fa] rounded-[20px] focus:outline-none",
            r
          ),
          value: o && a || !o && Array.isArray(t == null ? void 0 : t.value) && (t == null ? void 0 : t.value.map(
            (c) => {
              var d;
              return (d = e.find((m) => m.value === c)) == null ? void 0 : d.label;
            }
          ).join(", ")) || "",
          onFocus: () => i(!0),
          placeholder: o ? "Поиск..." : "Выбрать",
          onChange: (c) => s(c.target.value),
          readOnly: !o
        }
      )
    ] }),
    o && /* @__PURE__ */ z("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (c) => c.label.toLowerCase().includes(l.toLowerCase())
    ).map((c) => {
      var d;
      return /* @__PURE__ */ z(
        "li",
        {
          onClick: () => p(c.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ He("div", { className: "flex flex-row", children: [
            c.icon && /* @__PURE__ */ z(gn, { name: c.icon }),
            /* @__PURE__ */ z(
              "button",
              {
                className: `w-full text-left !p-0 !text-sm text-dark !font-normal ${Array.isArray(t == null ? void 0 : t.value) && ((d = t == null ? void 0 : t.value) == null ? void 0 : d.includes(c.value)) && "text-primary"}`,
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
}, lA = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: n,
  parentClassName: o
}) => {
  const [i, a] = Ge(r), s = wd(i, 300);
  return se(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ He("div", { className: `relative h-fit w-full ${o}`, children: [
    /* @__PURE__ */ z(
      gn,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ z(
      "input",
      {
        placeholder: e,
        onChange: (l) => a(l.target.value),
        value: i,
        type: "search",
        className: `!pl-[40px] md:!pl-[50px] w-full bg-white border-[1px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block py-[9px] md:py-[7px] px-[10px] md:px-[14px] transition-all duration-300 ${n}`
      }
    )
  ] });
}, uA = ({
  placeholder: e,
  options: t,
  className: r,
  field: n,
  fieldState: o,
  labelClassName: i,
  parentClassName: a,
  formState: s,
  label: l,
  ...u
}) => /* @__PURE__ */ He("label", { children: [
  l && /* @__PURE__ */ z("span", { className: `text-primary ${i}`, children: l }),
  /* @__PURE__ */ z(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ He(
        "select",
        {
          ...n,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ z("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((p, c) => /* @__PURE__ */ z("option", { value: p.value, className: "text-black", children: p.label }, c))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ z(Gi, { error: o == null ? void 0 : o.error })
] });
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function Yg(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kg(e) {
  var t = Yg(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function Xg(e, t, r) {
  return (t = Kg(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ws(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ws(Object(r), !0).forEach(function(n) {
      Xg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ws(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function it(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ds = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ln = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Os = {
  INIT: "@@redux/INIT" + Ln(),
  REPLACE: "@@redux/REPLACE" + Ln(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ln();
  }
};
function Jg(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Zg(e) {
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
  if (tb(e)) return "date";
  if (eb(e)) return "error";
  var r = Qg(e);
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
function Qg(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function eb(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function tb(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Ft(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Zg(e)), t;
}
function Sd(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? it(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? it(1) : "Expected the enhancer to be a function. Instead, received: '" + Ft(r) + "'");
    return r(Sd)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? it(2) : "Expected the root reducer to be a function. Instead, received: '" + Ft(e) + "'");
  var o = e, i = t, a = [], s = a, l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function p() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? it(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function c(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? it(4) : "Expected the listener to be a function. Instead, received: '" + Ft(b) + "'");
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? it(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var f = !0;
    return u(), s.push(b), function() {
      if (f) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? it(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        f = !1, u();
        var w = s.indexOf(b);
        s.splice(w, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!Jg(b))
      throw new Error(process.env.NODE_ENV === "production" ? it(7) : "Actions must be plain objects. Instead, the actual type was: '" + Ft(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? it(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? it(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = o(i, b);
    } finally {
      l = !1;
    }
    for (var f = a = s, y = 0; y < f.length; y++) {
      var w = f[y];
      w();
    }
    return b;
  }
  function m(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? it(10) : "Expected the nextReducer to be a function. Instead, received: '" + Ft(b));
    o = b, d({
      type: Os.REPLACE
    });
  }
  function h() {
    var b, f = c;
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
          throw new Error(process.env.NODE_ENV === "production" ? it(11) : "Expected the observer to be an object. Instead, received: '" + Ft(w) + "'");
        function E() {
          w.next && w.next(p());
        }
        E();
        var v = f(E);
        return {
          unsubscribe: v
        };
      }
    }, b[Ds] = function() {
      return this;
    }, b;
  }
  return d({
    type: Os.INIT
  }), n = {
    dispatch: d,
    subscribe: c,
    getState: p,
    replaceReducer: m
  }, n[Ds] = h, n;
}
function Ns(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Cs(e, t) {
  if (typeof e == "function")
    return Ns(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? it(16) : "bindActionCreators expected an object or a function, but instead received: '" + Ft(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var n in e) {
    var o = e[n];
    typeof o == "function" && (r[n] = Ns(o, t));
  }
  return r;
}
function Dd() {
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
function rb() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return function() {
      var o = n.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? it(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(l) {
        return l(a);
      });
      return i = Dd.apply(void 0, s)(o.dispatch), Ss(Ss({}, o), {}, {
        dispatch: i
      });
    };
  };
}
function nb(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Uo = { exports: {} }, Bn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s;
function ob() {
  if (_s) return Bn;
  _s = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var m = d(), h = n({ inst: { value: m, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = m, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, m, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(m), m;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var m = d();
      return !r(c, m);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Bn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Bn;
}
var Fn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function ib() {
  return Is || (Is = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m, h) {
      return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
    }
    function t(m, h) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var f = h();
        i(b, f) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      f = a({
        inst: { value: b, getSnapshot: h }
      });
      var y = f[0].inst, w = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && w({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && w({ inst: y }), m(function() {
            r(y) && w({ inst: y });
          });
        },
        [m]
      ), u(b), b;
    }
    function r(m) {
      var h = m.getSnapshot;
      m = m.value;
      try {
        var b = h();
        return !i(m, b);
      } catch {
        return !0;
      }
    }
    function n(m, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Fn.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Fn;
}
process.env.NODE_ENV === "production" ? Uo.exports = ob() : Uo.exports = ib();
var zi = Uo.exports, Gn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps;
function ab() {
  if (Ps) return Gn;
  Ps = 1;
  var e = I, t = zi;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Gn.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
              var N = b.value;
              if (m(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var w = !1, E, v, g = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          g === null ? void 0 : function() {
            return y(g());
          }
        ];
      },
      [p, c, d, m]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, Gn;
}
var Wn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function sb() {
  return As || (As = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = zi, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Wn.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
                var N = b.value;
                if (m(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var w = !1, E, v, g = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            g === null ? void 0 : function() {
              return y(g());
            }
          ];
        },
        [p, c, d, m]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Wn;
}
process.env.NODE_ENV === "production" ? ab() : sb();
function cb(e) {
  e();
}
let Od = cb;
const lb = (e) => Od = e, ub = () => Od, $s = Symbol.for("react-redux-context"), Rs = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function db() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Rs[$s]) != null ? e : Rs[$s] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const Nd = /* @__PURE__ */ db(), pb = () => {
  throw new Error("uSES not initialized!");
};
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nt.apply(null, arguments);
}
function Cd(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var qo = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ts;
function fb() {
  if (Ts) return fe;
  Ts = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
        case t:
          switch (g = g.type, g) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case p:
                case h:
                case m:
                case a:
                  return g;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return fe.AsyncMode = l, fe.ConcurrentMode = u, fe.ContextConsumer = s, fe.ContextProvider = a, fe.Element = t, fe.ForwardRef = p, fe.Fragment = n, fe.Lazy = h, fe.Memo = m, fe.Portal = r, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = c, fe.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, fe.isConcurrentMode = v, fe.isContextConsumer = function(g) {
    return E(g) === s;
  }, fe.isContextProvider = function(g) {
    return E(g) === a;
  }, fe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, fe.isForwardRef = function(g) {
    return E(g) === p;
  }, fe.isFragment = function(g) {
    return E(g) === n;
  }, fe.isLazy = function(g) {
    return E(g) === h;
  }, fe.isMemo = function(g) {
    return E(g) === m;
  }, fe.isPortal = function(g) {
    return E(g) === r;
  }, fe.isProfiler = function(g) {
    return E(g) === i;
  }, fe.isStrictMode = function(g) {
    return E(g) === o;
  }, fe.isSuspense = function(g) {
    return E(g) === c;
  }, fe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, fe.typeOf = E, fe;
}
var me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vs;
function mb() {
  return Vs || (Vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === c || S === d || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === m || S.$$typeof === a || S.$$typeof === s || S.$$typeof === p || S.$$typeof === f || S.$$typeof === y || S.$$typeof === w || S.$$typeof === b);
    }
    function v(S) {
      if (typeof S == "object" && S !== null) {
        var le = S.$$typeof;
        switch (le) {
          case t:
            var D = S.type;
            switch (D) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return D;
              default:
                var ue = D && D.$$typeof;
                switch (ue) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return ue;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = m, k = r, U = i, R = o, L = c, F = !1;
    function j(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(S) || v(S) === l;
    }
    function H(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Q(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function re(S) {
      return v(S) === p;
    }
    function ne(S) {
      return v(S) === n;
    }
    function de(S) {
      return v(S) === h;
    }
    function te(S) {
      return v(S) === m;
    }
    function oe(S) {
      return v(S) === r;
    }
    function W(S) {
      return v(S) === i;
    }
    function ie(S) {
      return v(S) === o;
    }
    function Fe(S) {
      return v(S) === c;
    }
    me.AsyncMode = g, me.ConcurrentMode = x, me.ContextConsumer = N, me.ContextProvider = C, me.Element = V, me.ForwardRef = A, me.Fragment = $, me.Lazy = P, me.Memo = T, me.Portal = k, me.Profiler = U, me.StrictMode = R, me.Suspense = L, me.isAsyncMode = j, me.isConcurrentMode = H, me.isContextConsumer = B, me.isContextProvider = Q, me.isElement = ee, me.isForwardRef = re, me.isFragment = ne, me.isLazy = de, me.isMemo = te, me.isPortal = oe, me.isProfiler = W, me.isStrictMode = ie, me.isSuspense = Fe, me.isValidElementType = E, me.typeOf = v;
  }()), me;
}
process.env.NODE_ENV === "production" ? qo.exports = fb() : qo.exports = mb();
var gb = qo.exports, Hi = gb, bb = {
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
}, hb = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, vb = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, _d = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ui = {};
Ui[Hi.ForwardRef] = vb;
Ui[Hi.Memo] = _d;
function Ms(e) {
  return Hi.isMemo(e) ? _d : Ui[e.$$typeof] || bb;
}
var yb = Object.defineProperty, Eb = Object.getOwnPropertyNames, Ls = Object.getOwnPropertySymbols, xb = Object.getOwnPropertyDescriptor, wb = Object.getPrototypeOf, Bs = Object.prototype;
function Id(e, t, r) {
  if (typeof t != "string") {
    if (Bs) {
      var n = wb(t);
      n && n !== Bs && Id(e, n, r);
    }
    var o = Eb(t);
    Ls && (o = o.concat(Ls(t)));
    for (var i = Ms(e), a = Ms(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!hb[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = xb(t, l);
        try {
          yb(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Sb = Id;
const Fs = /* @__PURE__ */ nb(Sb);
var Yo = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function Db() {
  if (Gs) return ge;
  Gs = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case a:
                case l:
                case d:
                case c:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return ge.ContextConsumer = a, ge.ContextProvider = i, ge.Element = e, ge.ForwardRef = l, ge.Fragment = r, ge.Lazy = d, ge.Memo = c, ge.Portal = t, ge.Profiler = o, ge.StrictMode = n, ge.Suspense = u, ge.SuspenseList = p, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(f) {
    return b(f) === a;
  }, ge.isContextProvider = function(f) {
    return b(f) === i;
  }, ge.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ge.isForwardRef = function(f) {
    return b(f) === l;
  }, ge.isFragment = function(f) {
    return b(f) === r;
  }, ge.isLazy = function(f) {
    return b(f) === d;
  }, ge.isMemo = function(f) {
    return b(f) === c;
  }, ge.isPortal = function(f) {
    return b(f) === t;
  }, ge.isProfiler = function(f) {
    return b(f) === o;
  }, ge.isStrictMode = function(f) {
    return b(f) === n;
  }, ge.isSuspense = function(f) {
    return b(f) === u;
  }, ge.isSuspenseList = function(f) {
    return b(f) === p;
  }, ge.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, ge.typeOf = b, ge;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ws;
function Ob() {
  return Ws || (Ws = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || w || D === n || D === u || D === p || y || D === m || h || b || f || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === c || D.$$typeof === i || D.$$typeof === a || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === E || D.getModuleId !== void 0));
    }
    function g(D) {
      if (typeof D == "object" && D !== null) {
        var ue = D.$$typeof;
        switch (ue) {
          case e:
            var Te = D.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var G = Te && Te.$$typeof;
                switch (G) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return G;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, U = n, R = u, L = p, F = !1, j = !1;
    function H(D) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(D) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(D) {
      return g(D) === a;
    }
    function ee(D) {
      return g(D) === i;
    }
    function re(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function ne(D) {
      return g(D) === l;
    }
    function de(D) {
      return g(D) === r;
    }
    function te(D) {
      return g(D) === d;
    }
    function oe(D) {
      return g(D) === c;
    }
    function W(D) {
      return g(D) === t;
    }
    function ie(D) {
      return g(D) === o;
    }
    function Fe(D) {
      return g(D) === n;
    }
    function S(D) {
      return g(D) === u;
    }
    function le(D) {
      return g(D) === p;
    }
    be.ContextConsumer = x, be.ContextProvider = N, be.Element = C, be.ForwardRef = V, be.Fragment = A, be.Lazy = $, be.Memo = P, be.Portal = T, be.Profiler = k, be.StrictMode = U, be.Suspense = R, be.SuspenseList = L, be.isAsyncMode = H, be.isConcurrentMode = B, be.isContextConsumer = Q, be.isContextProvider = ee, be.isElement = re, be.isForwardRef = ne, be.isFragment = de, be.isLazy = te, be.isMemo = oe, be.isPortal = W, be.isProfiler = ie, be.isStrictMode = Fe, be.isSuspense = S, be.isSuspenseList = le, be.isValidElementType = v, be.typeOf = g;
  }()), be;
}
process.env.NODE_ENV === "production" ? Yo.exports = Db() : Yo.exports = Ob();
var js = Yo.exports;
function qi(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function jn(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || qi(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Nb(e, t, r) {
  jn(e, "mapStateToProps"), jn(t, "mapDispatchToProps"), jn(r, "mergeProps");
}
const Cb = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function _b(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(w, E) {
    return l = w, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const w = e(l, u), E = !a(w, p);
    return p = w, E && (d = r(p, c, u)), d;
  }
  function y(w, E) {
    const v = !i(E, u), g = !o(w, l, E, u);
    return l = w, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(E, v) {
    return s ? y(E, v) : m(E, v);
  };
}
function Ib(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Cd(t, Cb);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && Nb(a, s, l), _b(a, s, l, e, i);
}
function Pb(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function Ab(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function Pd(e, t, r) {
  Ab(e) || qi(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ko(e) {
  return function(r) {
    const n = e(r);
    function o() {
      return n;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function ks(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ad(e, t) {
  return function(n, {
    displayName: o
  }) {
    const i = function(s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, l) {
      i.mapToProps = e, i.dependsOnOwnProps = ks(e);
      let u = i(s, l);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = ks(u), u = i(s, l)), process.env.NODE_ENV !== "production" && Pd(u, o, t), u;
    }, i;
  };
}
function Yi(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function $b(e) {
  return e && typeof e == "object" ? Ko((t) => (
    // @ts-ignore
    Pb(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ad(e, "mapDispatchToProps")
  ) : Yi(e, "mapDispatchToProps") : Ko((t) => ({
    dispatch: t
  }));
}
function Rb(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ad(e, "mapStateToProps")
  ) : Yi(e, "mapStateToProps") : Ko(() => ({}));
}
function Tb(e, t, r) {
  return Nt({}, r, e, t);
}
function Vb(e) {
  return function(r, {
    displayName: n,
    areMergedPropsEqual: o
  }) {
    let i = !1, a;
    return function(l, u, p) {
      const c = e(l, u, p);
      return i ? o(c, a) || (a = c) : (i = !0, a = c, process.env.NODE_ENV !== "production" && Pd(a, n, "mergeProps")), a;
    };
  };
}
function Mb(e) {
  return e ? typeof e == "function" ? Vb(e) : Yi(e, "mergeProps") : () => Tb;
}
function Lb() {
  const e = ub();
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
const zs = {
  notify() {
  },
  get: () => []
};
function $d(e, t) {
  let r, n = zs, o = 0, i = !1;
  function a(b) {
    p();
    const f = n.subscribe(b);
    let y = !1;
    return () => {
      y || (y = !0, f(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = Lb());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = zs);
  }
  function d() {
    i || (i = !0, p());
  }
  function m() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => n
  };
  return h;
}
const Bb = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", hn = Bb ? _.useLayoutEffect : _.useEffect;
function Hs(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function kn(e, t) {
  if (Hs(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Hs(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const Fb = ["reactReduxForwardedRef"];
let Rd = pb;
const Gb = (e) => {
  Rd = e;
}, Wb = [null, null], jb = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function kb(e, t, r) {
  hn(() => e(...t), r);
}
function zb(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function Hb(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const m = () => {
    if (c || !s.current)
      return;
    const b = t.getState();
    let f, y;
    try {
      f = n(b, o.current);
    } catch (w) {
      y = w, d = w;
    }
    y || (d = null), f === i.current ? a.current || u() : (i.current = f, l.current = f, a.current = !0, p());
  };
  return r.onStateChange = m, r.trySubscribe(), m(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Ub(e, t) {
  return e === t;
}
let Us = !1;
function Td(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Ub,
  areOwnPropsEqual: i = kn,
  areStatePropsEqual: a = kn,
  areMergedPropsEqual: s = kn,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = Nd
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Us && (Us = !0, qi('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = Rb(e), d = $b(t), m = Mb(r), h = !!e;
  return (f) => {
    if (process.env.NODE_ENV !== "production" && !js.isValidElementType(f))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${jb(f)}`);
    const y = f.displayName || f.name || "Component", w = `Connect(${y})`, E = {
      shouldHandleStateChanges: h,
      displayName: w,
      wrappedComponentName: y,
      WrappedComponent: f,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function v(N) {
      const [C, V, A] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: S
        } = N, le = Cd(N, Fb);
        return [N.context, S, le];
      }, [N]), $ = _.useMemo(() => C && C.Consumer && // @ts-ignore
      js.isContextConsumer(/* @__PURE__ */ _.createElement(C.Consumer, null)) ? C : p, [C, p]), P = _.useContext($), T = !!N.store && !!N.store.getState && !!N.store.dispatch, k = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !T && !k)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const U = T ? N.store : P.store, R = k ? P.getServerState : U.getState, L = _.useMemo(() => Ib(U.dispatch, E), [U]), [F, j] = _.useMemo(() => {
        if (!h) return Wb;
        const S = $d(U, T ? void 0 : P.subscription), le = S.notifyNestedSubs.bind(S);
        return [S, le];
      }, [U, T, P]), H = _.useMemo(() => T ? P : Nt({}, P, {
        subscription: F
      }), [T, P, F]), B = _.useRef(), Q = _.useRef(A), ee = _.useRef(), re = _.useRef(!1);
      _.useRef(!1);
      const ne = _.useRef(!1), de = _.useRef();
      hn(() => (ne.current = !0, () => {
        ne.current = !1;
      }), []);
      const te = _.useMemo(() => () => ee.current && A === Q.current ? ee.current : L(U.getState(), A), [U, A]), oe = _.useMemo(() => (le) => F ? Hb(
        h,
        U,
        F,
        // @ts-ignore
        L,
        Q,
        B,
        re,
        ne,
        ee,
        j,
        le
      ) : () => {
      }, [F]);
      kb(zb, [Q, B, re, A, ee, j]);
      let W;
      try {
        W = Rd(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          oe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          te,
          R ? () => L(R(), A) : te
        );
      } catch (S) {
        throw de.current && (S.message += `
The error may be correlated with this previous error:
${de.current.stack}

`), S;
      }
      hn(() => {
        de.current = void 0, ee.current = void 0, B.current = W;
      });
      const ie = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(f, Nt({}, W, {
          ref: V
        }))
      ), [V, f, W]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement($.Provider, {
        value: H
      }, ie) : ie, [$, ie, H]);
    }
    const x = _.memo(v);
    if (x.WrappedComponent = f, x.displayName = v.displayName = w, l) {
      const C = _.forwardRef(function(A, $) {
        return /* @__PURE__ */ _.createElement(x, Nt({}, A, {
          reactReduxForwardedRef: $
        }));
      });
      return C.displayName = w, C.WrappedComponent = f, Fs(C, f);
    }
    return Fs(x, f);
  };
}
function qb({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const a = _.useMemo(() => {
    const u = $d(e);
    return {
      store: e,
      subscription: u,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, n, o, i]), s = _.useMemo(() => e.getState(), [e]);
  hn(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || Nd;
  return /* @__PURE__ */ _.createElement(l.Provider, {
    value: a
  }, r);
}
Gb(zi.useSyncExternalStore);
lb(kr);
function Yb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Vd(e, t) {
  var r = Ge(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && Yb(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return se(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Kb(e, t) {
  return Vd(function() {
    return e;
  }, t);
}
var pe = Vd, q = Kb, Xb = process.env.NODE_ENV === "production", zn = "Invariant failed";
function qs(e, t) {
  if (Xb)
    throw new Error(zn);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(zn, ": ").concat(r) : zn;
  throw new Error(n);
}
var bt = function(t) {
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
}, Ki = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Ys = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Jb = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Hn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Xi = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Hn : n, i = t.border, a = i === void 0 ? Hn : i, s = t.padding, l = s === void 0 ? Hn : s, u = bt(Ki(r, o)), p = bt(Ys(r, a)), c = bt(Ys(p, l));
  return {
    marginBox: u,
    borderBox: bt(r),
    paddingBox: p,
    contentBox: c,
    margin: o,
    border: a,
    padding: l
  };
}, lt = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? qs(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : qs()), o;
}, Zb = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, vn = function(t, r) {
  var n = t.borderBox, o = t.border, i = t.margin, a = t.padding, s = Jb(n, r);
  return Xi({
    borderBox: s,
    border: o,
    margin: i,
    padding: a
  });
}, yn = function(t, r) {
  return r === void 0 && (r = Zb()), vn(t, r);
}, Md = function(t, r) {
  var n = {
    top: lt(r.marginTop),
    right: lt(r.marginRight),
    bottom: lt(r.marginBottom),
    left: lt(r.marginLeft)
  }, o = {
    top: lt(r.paddingTop),
    right: lt(r.paddingRight),
    bottom: lt(r.paddingBottom),
    left: lt(r.paddingLeft)
  }, i = {
    top: lt(r.borderTopWidth),
    right: lt(r.borderRightWidth),
    bottom: lt(r.borderBottomWidth),
    left: lt(r.borderLeftWidth)
  };
  return Xi({
    borderBox: t,
    margin: n,
    padding: o,
    border: i
  });
}, Ld = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return Md(r, n);
}, Ks = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Qb(e, t) {
  return !!(e === t || Ks(e) && Ks(t));
}
function eh(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!Qb(e[r], t[r]))
      return !1;
  return !0;
}
function Ue(e, t) {
  t === void 0 && (t = eh);
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
var Or = function(t) {
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
const th = process.env.NODE_ENV === "production", rh = /[ \t]{2,}/g, nh = /^[ \t]*/gm, Xs = (e) => e.replace(rh, " ").replace(nh, "").trim(), oh = (e) => Xs(`
  %c@hello-pangea/dnd

  %c${Xs(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), ih = (e) => [oh(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], ah = "__@hello-pangea/dnd-disable-dev-warnings";
function Bd(e, t) {
  th || typeof window < "u" && window[ah] || console[e](...ih(t));
}
const Ve = Bd.bind(null, "warn"), Xo = Bd.bind(null, "error");
function Ct() {
}
function sh(e, t) {
  return {
    ...e,
    ...t
  };
}
function mt(e, t, r) {
  const n = t.map((o) => {
    const i = sh(r, o.options);
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
const ch = process.env.NODE_ENV === "production", Js = "Invariant failed";
class Nr extends Error {
}
Nr.prototype.toString = function() {
  return this.message;
};
function O(e, t) {
  throw ch ? new Nr(Js) : new Nr(`${Js}: ${t || ""}`);
}
class lh extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Ct, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Ve(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Nr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Xo(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = mt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Nr) {
      process.env.NODE_ENV !== "production" && Xo(t.message), this.setState({});
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
const uh = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, En = (e) => e + 1, dh = (e) => `
  You have lifted an item in position ${En(e.source.index)}
`, Fd = (e, t) => {
  const r = e.droppableId === t.droppableId, n = En(e.index), o = En(t.index);
  return r ? `
      You have moved the item from position ${n}
      to position ${o}
    ` : `
    You have moved the item from position ${n}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Gd = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, ph = (e) => {
  const t = e.destination;
  if (t)
    return Fd(e.source, t);
  const r = e.combine;
  return r ? Gd(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Zs = (e) => `
  The item has returned to its starting position
  of ${En(e.index)}
`, fh = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Zs(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${Fd(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${Gd(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Zs(e.source)}
  `;
}, mh = {
  dragHandleUsageInstructions: uh,
  onDragStart: dh,
  onDragUpdate: ph,
  onDragEnd: fh
};
var on = mh;
const qe = {
  x: 0,
  y: 0
}, Ze = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), at = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), _t = (e, t) => e.x === t.x && e.y === t.y, ur = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), kt = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, Cr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Qs = (e, t) => Math.min(...t.map((r) => Cr(e, r))), Wd = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var gh = (e, t) => {
  const r = bt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const zr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), ec = (e) => [{
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
}], bh = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, hh = (e, t) => t ? zr(e, t.scroll.diff.displacement) : e, vh = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, yh = (e, t) => t && t.shouldClipSubject ? gh(t.pageMarginBox, e) : bt(e);
var or = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = hh(e.marginBox, n), i = vh(o, r, t), a = yh(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Ji = (e, t) => {
  e.frame || (process.env.NODE_ENV, O());
  const r = e.frame, n = at(t, r.scroll.initial), o = ur(n), i = {
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
  }, a = or({
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
const jd = Ue((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), kd = Ue((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), _n = Ue((e) => Object.values(e)), Eh = Ue((e) => Object.values(e));
var Yt = Ue((e, t) => Eh(t).filter((n) => e === n.descriptor.droppableId).sort((n, o) => n.descriptor.index - o.descriptor.index));
function Zi(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function In(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Pn = Ue((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), xh = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  previousImpact: o
}) => {
  if (!r.isCombineEnabled || !Zi(o))
    return null;
  function a(m) {
    const h = {
      type: "COMBINE",
      combine: {
        draggableId: m,
        droppableId: r.descriptor.id
      }
    };
    return {
      ...o,
      at: h
    };
  }
  const s = o.displaced.all, l = s.length ? s[0] : null;
  if (e)
    return l ? a(l) : null;
  const u = Pn(t, n);
  if (!l) {
    if (!u.length)
      return null;
    const m = u[u.length - 1];
    return a(m.descriptor.id);
  }
  const p = u.findIndex((m) => m.descriptor.id === l);
  p === -1 && (process.env.NODE_ENV !== "production" ? O(!1, "Could not find displaced item in set") : O());
  const c = p - 1;
  if (c < 0)
    return null;
  const d = u[c];
  return a(d.descriptor.id);
}, dr = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const zd = {
  point: qe,
  value: 0
}, _r = {
  invisible: {},
  visible: {},
  all: []
}, wh = {
  displaced: _r,
  displacedBy: zd,
  at: null
};
var Sh = wh, gt = (e, t) => (r) => e <= r && r <= t, Hd = (e) => {
  const t = gt(e.top, e.bottom), r = gt(e.left, e.right);
  return (n) => {
    if (t(n.top) && t(n.bottom) && r(n.left) && r(n.right))
      return !0;
    const i = t(n.top) || t(n.bottom), a = r(n.left) || r(n.right);
    if (i && a)
      return !0;
    const l = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right;
    return l && u ? !0 : l && a || u && i;
  };
}, Dh = (e) => {
  const t = gt(e.top, e.bottom), r = gt(e.left, e.right);
  return (n) => t(n.top) && t(n.bottom) && r(n.left) && r(n.right);
};
const Qi = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Ud = {
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
var Oh = (e) => (t) => {
  const r = gt(t.top, t.bottom), n = gt(t.left, t.right);
  return (o) => e === Qi ? r(o.top) && r(o.bottom) : n(o.left) && n(o.right);
};
const Nh = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : qe;
  return zr(e, r);
}, Ch = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, _h = (e, t, r) => r(t)(e), ea = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: n,
  isVisibleThroughFrameFn: o
}) => {
  const i = n ? Nh(e, t) : e;
  return Ch(i, t, o) && _h(i, r, o);
}, Ih = (e) => ea({
  ...e,
  isVisibleThroughFrameFn: Hd
}), qd = (e) => ea({
  ...e,
  isVisibleThroughFrameFn: Dh
}), Ph = (e) => ea({
  ...e,
  isVisibleThroughFrameFn: Oh(e.destination.axis)
}), Ah = (e, t, r) => {
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
function $h(e, t) {
  const r = e.page.marginBox, n = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return bt(Ki(r, n));
}
function Ir({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: n,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(s, l) {
    const u = $h(l, r), p = l.descriptor.id;
    if (s.all.push(p), !Ih({
      target: u,
      destination: t,
      viewport: n,
      withDroppableDisplacement: !0
    }))
      return s.invisible[l.descriptor.id] = !0, s;
    const d = Ah(p, i, o), m = {
      draggableId: p,
      shouldAnimate: d
    };
    return s.visible[p] = m, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function Rh(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function tc({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: n
}) {
  const o = Rh(e, {
    inHomeList: t
  });
  return {
    displaced: _r,
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
function xn({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: n,
  displacedBy: o,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const l = dr(e, r);
  if (a == null)
    return tc({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return tc({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: r
    });
  const p = Pn(e, t), c = t.indexOf(u), d = p.slice(c);
  return {
    displaced: Ir({
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
function Rt(e, t) {
  return !!t.effected[e];
}
var Th = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: n,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = n.draggableId, s = r[i].descriptor.index;
  return Rt(i, o) ? e ? s : s - 1 : e ? s + 1 : s;
}, Vh = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: n
}) => {
  if (!r.length)
    return null;
  const o = n.index, i = e ? o + 1 : o - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, l = t ? s : s + 1;
  return i < a || i > l ? null : i;
}, Mh = ({
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
  const u = a.at;
  if (u || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot move in direction without previous impact location") : O()), u.type === "REORDER") {
    const c = Vh({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return c == null ? null : xn({
      draggable: r,
      insideDestination: i,
      destination: o,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: c
    });
  }
  const p = Th({
    isMovingForward: e,
    destination: o,
    displaced: a.displaced,
    draggables: n,
    combine: u.combine,
    afterCritical: l
  });
  return p == null ? null : xn({
    draggable: r,
    insideDestination: i,
    destination: o,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: p
  });
}, Lh = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: n
}) => {
  const o = !!(e.visible[r] || e.invisible[r]);
  return Rt(r, t) ? o ? qe : ur(n.point) : o ? n.point : qe;
}, Bh = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const n = In(t);
  n || (process.env.NODE_ENV, O());
  const o = n.draggableId, i = r[o].page.borderBox.center, a = Lh({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Ze(i, a);
};
const Yd = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, Fh = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, ta = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, rc = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => kt(e.line, t.marginBox[e.end] + Yd(e, r), ta(e, t.marginBox, r)), nc = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => kt(e.line, t.marginBox[e.start] - Fh(e, r), ta(e, t.marginBox, r)), Gh = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => kt(e.line, t.contentBox[e.start] + Yd(e, r), ta(e, t.contentBox, r));
var Wh = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: n,
  afterCritical: o
}) => {
  const i = Yt(n.descriptor.id, r), a = t.page, s = n.axis;
  if (!i.length)
    return Gh({
      axis: s,
      moveInto: n.page,
      isMoving: a
    });
  const {
    displaced: l,
    displacedBy: u
  } = e, p = l.all[0];
  if (p) {
    const d = r[p];
    if (Rt(p, o))
      return nc({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const m = vn(d.page, u.point);
    return nc({
      axis: s,
      moveRelativeTo: m,
      isMoving: a
    });
  }
  const c = i[i.length - 1];
  if (c.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Rt(c.descriptor.id, o)) {
    const d = vn(c.page, ur(o.displacedBy.point));
    return rc({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return rc({
    axis: s,
    moveRelativeTo: c.page,
    isMoving: a
  });
}, Jo = (e, t) => {
  const r = e.frame;
  return r ? Ze(t, r.scroll.diff.displacement) : t;
};
const jh = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? Wh({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: o
  }) : Bh({
    impact: e,
    draggables: n,
    afterCritical: o
  });
};
var An = (e) => {
  const t = jh(e), r = e.droppable;
  return r ? Jo(r, t) : t;
}, Kd = (e, t) => {
  const r = at(t, e.scroll.initial), n = ur(r);
  return {
    frame: bt({
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
function oc(e, t) {
  return e.map((r) => t[r]);
}
function kh(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r].visible[e];
    if (n)
      return n;
  }
  return null;
}
var zh = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: n,
  maxScrollChange: o
}) => {
  const i = Kd(t, Ze(t.scroll.current, o)), a = r.frame ? Ji(r, Ze(r.frame.scroll.current, o)) : r, s = e.displaced, l = Ir({
    afterDragging: oc(s.all, n),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = Ir({
    afterDragging: oc(s.all, n),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), p = {}, c = {}, d = [s, l, u];
  return s.all.forEach((h) => {
    const b = kh(h, d);
    if (b) {
      c[h] = b;
      return;
    }
    p[h] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: p,
      visible: c
    }
  };
}, Hh = (e, t) => Ze(e.scroll.diff.displacement, t), ra = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const n = Hh(r, e), o = at(n, t.page.borderBox.center);
  return Ze(t.client.borderBox.center, o);
}, Xd = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: n,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const a = at(r, e.page.borderBox.center), l = {
    target: zr(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: o,
    viewport: n
  };
  return i ? Ph(l) : qd(l);
}, Uh = ({
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
  const u = Yt(r.descriptor.id, n), p = dr(t, r), c = xh({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: o
  }) || Mh({
    isMovingForward: e,
    isInHomeList: p,
    draggable: t,
    draggables: n,
    destination: r,
    insideDestination: u,
    previousImpact: o,
    viewport: i,
    afterCritical: l
  });
  if (!c)
    return null;
  const d = An({
    impact: c,
    draggable: t,
    droppable: r,
    draggables: n,
    afterCritical: l
  });
  if (Xd({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: ra({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: c,
      scrollJumpRequest: null
    };
  const h = at(d, a), b = zh({
    impact: c,
    viewport: i,
    destination: r,
    draggables: n,
    maxScrollChange: h
  });
  return {
    clientSelection: s,
    impact: b,
    scrollJumpRequest: h
  };
};
const nt = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot get clipped area from droppable") : O()), t;
};
var qh = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: n,
  viewport: o
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = gt(i[a.start], i[a.end]), l = _n(n).filter((p) => p !== r).filter((p) => p.isEnabled).filter((p) => !!p.subject.active).filter((p) => Hd(o.frame)(nt(p))).filter((p) => {
    const c = nt(p);
    return e ? i[a.crossAxisEnd] < c[a.crossAxisEnd] : c[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((p) => {
    const c = nt(p), d = gt(c[a.start], c[a.end]);
    return s(c[a.start]) || s(c[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((p, c) => {
    const d = nt(p)[a.crossAxisStart], m = nt(c)[a.crossAxisStart];
    return e ? d - m : m - d;
  }).filter((p, c, d) => nt(p)[a.crossAxisStart] === nt(d[0])[a.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const u = l.filter((p) => gt(nt(p)[a.start], nt(p)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((p, c) => nt(p)[a.start] - nt(c)[a.start])[0] : l.sort((p, c) => {
    const d = Qs(t, ec(nt(p))), m = Qs(t, ec(nt(c)));
    return d !== m ? d - m : nt(p)[a.start] - nt(c)[a.start];
  })[0];
};
const ic = (e, t) => {
  const r = e.page.borderBox.center;
  return Rt(e.descriptor.id, t) ? at(r, t.displacedBy.point) : r;
}, Yh = (e, t) => {
  const r = e.page.borderBox;
  return Rt(e.descriptor.id, t) ? zr(r, ur(t.displacedBy.point)) : r;
};
var Kh = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: n,
  afterCritical: o
}) => n.filter((a) => qd({
  target: Yh(a, o),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const l = Cr(e, Jo(r, ic(a, o))), u = Cr(e, Jo(r, ic(s, o)));
  return l < u ? -1 : u < l ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Hr = Ue(function(t, r) {
  const n = r[t.line];
  return {
    value: n,
    point: kt(t.line, n)
  };
});
const Xh = (e, t, r) => {
  const n = e.axis;
  if (e.descriptor.mode === "virtual")
    return kt(n.line, t[n.line]);
  const o = e.subject.page.contentBox[n.size], l = Yt(e.descriptor.id, r).reduce((u, p) => u + p.client.marginBox[n.size], 0) + t[n.line] - o;
  return l <= 0 ? null : kt(n.line, l);
}, Jd = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Zd = (e, t, r) => {
  const n = e.frame;
  dr(t, e) && (process.env.NODE_ENV !== "production" ? O(!1, "Should not add placeholder space to home list") : O()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot add placeholder size to a subject when it already has one") : O());
  const o = Hr(e.axis, t.displaceBy).point, i = Xh(e, o, r), a = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!n) {
    const p = or({
      page: e.subject.page,
      withPlaceholder: a,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: p
    };
  }
  const s = i ? Ze(n.scroll.max, i) : n.scroll.max, l = Jd(n, s), u = or({
    page: e.subject.page,
    withPlaceholder: a,
    axis: e.axis,
    frame: l
  });
  return {
    ...e,
    subject: u,
    frame: l
  };
}, Jh = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot remove placeholder form subject when there was none") : O());
  const r = e.frame;
  if (!r) {
    const a = or({
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
  n || (process.env.NODE_ENV !== "production" ? O(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : O());
  const o = Jd(r, n), i = or({
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
var Zh = ({
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
      displaced: _r,
      displacedBy: zd,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = An({
      impact: c,
      draggable: n,
      droppable: i,
      draggables: o,
      afterCritical: s
    }), m = dr(n, i) ? i : Zd(i, n, o);
    return Xd({
      draggable: n,
      destination: m,
      newPageBorderBoxCenter: d,
      viewport: a.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? c : null;
  }
  const l = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], u = (() => {
    const c = t.descriptor.index;
    return t.descriptor.id === n.descriptor.id || l ? c : c + 1;
  })(), p = Hr(i.axis, n.displaceBy);
  return xn({
    draggable: n,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: p,
    last: _r,
    index: u
  });
}, Qh = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: n,
  draggables: o,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const l = qh({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: n,
    droppables: i,
    viewport: a
  });
  if (!l)
    return null;
  const u = Yt(l.descriptor.id, o), p = Kh({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }), c = Zh({
    previousPageBorderBoxCenter: t,
    destination: l,
    draggable: r,
    draggables: o,
    moveRelativeTo: p,
    insideDestination: u,
    viewport: a,
    afterCritical: s
  });
  if (!c)
    return null;
  const d = An({
    impact: c,
    draggable: r,
    droppable: l,
    draggables: o,
    afterCritical: s
  });
  return {
    clientSelection: ra({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: c,
    scrollJumpRequest: null
  };
}, st = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const ev = (e, t) => {
  const r = st(e);
  return r ? t[r] : null;
};
var tv = ({
  state: e,
  type: t
}) => {
  const r = ev(e.impact, e.dimensions.droppables), n = !!r, o = e.dimensions.droppables[e.critical.droppable.id], i = r || o, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !n)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], p = e.current.page.borderBoxCenter, {
    draggables: c,
    droppables: d
  } = e.dimensions;
  return s ? Uh({
    isMovingForward: l,
    previousPageBorderBoxCenter: p,
    draggable: u,
    destination: i,
    draggables: c,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : Qh({
    isMovingForward: l,
    previousPageBorderBoxCenter: p,
    draggable: u,
    isOver: i,
    draggables: c,
    droppables: d,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Gt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Qd(e) {
  const t = gt(e.top, e.bottom), r = gt(e.left, e.right);
  return function(o) {
    return t(o.y) && r(o.x);
  };
}
function rv(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function nv({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const n = t.page.borderBox.center, o = r.map((i) => {
    const a = i.axis, s = kt(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Cr(n, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function ov({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const n = _n(r).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !rv(e, i))
      return !1;
    if (Qd(i)(e.center))
      return !0;
    const a = o.axis, s = i.center[a.crossAxisLine], l = e[a.crossAxisStart], u = e[a.crossAxisEnd], p = gt(i[a.crossAxisStart], i[a.crossAxisEnd]), c = p(l), d = p(u);
    return !c && !d ? !0 : c ? l < s : u > s;
  });
  return n.length ? n.length === 1 ? n[0].descriptor.id : nv({
    pageBorderBox: e,
    draggable: t,
    candidates: n
  }) : null;
}
const ep = (e, t) => bt(zr(e, t));
var iv = (e, t) => {
  const r = e.frame;
  return r ? ep(t, r.scroll.diff.value) : t;
};
function tp({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function av({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var sv = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: n,
  last: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, l = Hr(r.axis, t.displaceBy), u = l.value, p = e[s.start], c = e[s.end], m = Pn(t, n).find((b) => {
    const f = b.descriptor.id, y = b.page.borderBox.center[s.line], w = Rt(f, a), E = tp({
      displaced: o,
      id: f
    });
    return w ? E ? c <= y : p < y - u : E ? c <= y + u : p < y;
  }) || null, h = av({
    draggable: t,
    closest: m,
    inHomeList: dr(t, r)
  });
  return xn({
    draggable: t,
    insideDestination: n,
    destination: r,
    viewport: i,
    last: o,
    displacedBy: l,
    index: h
  });
};
const cv = 4;
var lv = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: n,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!n.isCombineEnabled)
    return null;
  const a = n.axis, s = Hr(n.axis, e.displaceBy), l = s.value, u = t[a.start], p = t[a.end], d = Pn(e, o).find((h) => {
    const b = h.descriptor.id, f = h.page.borderBox, w = f[a.size] / cv, E = Rt(b, i), v = tp({
      displaced: r.displaced,
      id: b
    });
    return E ? v ? p > f[a.start] + w && p < f[a.end] - w : u > f[a.start] - l + w && u < f[a.end] - l - w : v ? p > f[a.start] + l + w && p < f[a.end] + l - w : u > f[a.start] + w && u < f[a.end] - w;
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
}, rp = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: n,
  previousImpact: o,
  viewport: i,
  afterCritical: a
}) => {
  const s = ep(t.page.borderBox, e), l = ov({
    pageBorderBox: s,
    draggable: t,
    droppables: n
  });
  if (!l)
    return Sh;
  const u = n[l], p = Yt(u.descriptor.id, r), c = iv(u, s);
  return lv({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    previousImpact: o,
    destination: u,
    insideDestination: p,
    afterCritical: a
  }) || sv({
    pageBorderBoxWithDroppableScroll: c,
    draggable: t,
    destination: u,
    insideDestination: p,
    last: o.displaced,
    viewport: i,
    afterCritical: a
  });
}, na = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const uv = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const n = st(e), o = st(t);
  if (!n || n === o)
    return r;
  const i = r[n];
  if (!i.subject.withPlaceholder)
    return r;
  const a = Jh(i);
  return na(r, a);
};
var dv = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: n,
  impact: o
}) => {
  const i = uv({
    previousImpact: n,
    impact: o,
    droppables: r
  }), a = st(o);
  if (!a)
    return i;
  const s = r[a];
  if (dr(e, s) || s.subject.withPlaceholder)
    return i;
  const l = Zd(s, e, t);
  return na(i, l);
}, hr = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: n,
  impact: o,
  scrollJumpRequest: i
}) => {
  const a = n || e.viewport, s = r || e.dimensions, l = t || e.current.client.selection, u = at(l, e.initial.client.selection), p = {
    offset: u,
    selection: l,
    borderBoxCenter: Ze(e.initial.client.borderBoxCenter, u)
  }, c = {
    selection: Ze(p.selection, a.scroll.current),
    borderBoxCenter: Ze(p.borderBoxCenter, a.scroll.current),
    offset: Ze(p.offset, a.scroll.diff.value)
  }, d = {
    client: p,
    page: c
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: s,
      viewport: a,
      current: d
    };
  const m = s.draggables[e.critical.draggable.id], h = o || rp({
    pageOffset: c.offset,
    draggable: m,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = dv({
    draggable: m,
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
function pv(e, t) {
  return e.map((r) => t[r]);
}
var np = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: n,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, a = pv(i.all, r), s = Ir({
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
}, op = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: n,
  viewport: o,
  afterCritical: i
}) => {
  const a = An({
    impact: e,
    draggable: t,
    draggables: n,
    droppable: r,
    afterCritical: i
  });
  return ra({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: o
  });
}, ip = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, O());
  const n = e.impact, o = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, l = a[e.critical.draggable.id], u = st(n);
  u || (process.env.NODE_ENV !== "production" ? O(!1, "Must be over a destination in SNAP movement mode") : O());
  const p = s[u], c = np({
    impact: n,
    viewport: o,
    destination: p,
    draggables: a
  }), d = op({
    impact: c,
    draggable: l,
    droppable: p,
    draggables: a,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return hr({
    impact: c,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: o
  });
}, fv = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), ap = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: n
}) => {
  const o = Hr(t.axis, e.displaceBy), i = Yt(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? O(!1, "Expected draggable to be inside home list") : O());
  const s = i.slice(a + 1), l = s.reduce((d, m) => (d[m.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: Ir({
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
        destination: fv(e.descriptor)
      }
    },
    afterCritical: u
  };
}, mv = (e, t) => ({
  draggables: e.draggables,
  droppables: na(e.droppables, t)
});
const Ur = (e) => {
  process.env.NODE_ENV;
}, qr = (e) => {
  process.env.NODE_ENV;
};
var gv = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const n = vn(e.client, t), o = yn(n, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: n
    },
    client: n,
    page: o
  };
}, bv = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? O(!1, "Expected Droppable to have a frame") : O()), t;
}, hv = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const n = r.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, a = t[i], l = bv(a).scroll.diff.value, u = Ze(n, l);
    return gv({
      draggable: o,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, vv = ({
  state: e,
  published: t
}) => {
  Ur();
  const r = t.modified.map((y) => {
    const w = e.dimensions.droppables[y.droppableId];
    return Ji(w, y.scroll);
  }), n = {
    ...e.dimensions.droppables,
    ...jd(r)
  }, o = kd(hv({
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
  }, s = st(e.impact), l = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], p = a.droppables[e.critical.droppable.id], {
    impact: c,
    afterCritical: d
  } = ap({
    draggable: u,
    home: p,
    draggables: i,
    viewport: e.viewport
  }), m = l && l.isCombineEnabled ? e.impact : c, h = rp({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: m,
    viewport: e.viewport,
    afterCritical: d
  });
  qr();
  const b = {
    ...e,
    phase: "DRAGGING",
    impact: h,
    onLiftImpact: c,
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
const Zo = (e) => e.movementMode === "SNAP", Un = (e, t, r) => {
  const n = mv(e.dimensions, t);
  return !Zo(e) || r ? hr({
    state: e,
    dimensions: n
  }) : ip({
    state: e,
    dimensions: n
  });
};
function qn(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ac = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var yv = (e = ac, t) => {
  if (t.type === "FLUSH")
    return {
      ...ac,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? O(!1, "INITIAL_PUBLISH must come after a IDLE phase") : O());
    const {
      critical: r,
      clientSelection: n,
      viewport: o,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], l = i.droppables[r.droppable.id], u = {
      selection: n,
      borderBoxCenter: s.client.borderBox.center,
      offset: qe
    }, p = {
      client: u,
      page: {
        selection: Ze(u.selection, o.scroll.initial),
        borderBoxCenter: Ze(u.selection, o.scroll.initial),
        offset: Ze(u.selection, o.scroll.diff.value)
      }
    }, c = _n(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: m
    } = ap({
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
      initial: p,
      current: p,
      isWindowScrollAllowed: c,
      impact: d,
      afterCritical: m,
      onLiftImpact: d,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? O(!1, `Collection cannot start from phase ${e.phase}`) : O()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? O(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : O()), vv({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Gt(e) || (process.env.NODE_ENV !== "production" ? O(!1, `${t.type} not permitted in phase ${e.phase}`) : O());
    const {
      client: r
    } = t.payload;
    return _t(r, e.current.client.selection) ? e : hr({
      state: e,
      clientSelection: r,
      impact: Zo(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return qn(e);
    Gt(e) || (process.env.NODE_ENV !== "production" ? O(!1, `${t.type} not permitted in phase ${e.phase}`) : O());
    const {
      id: r,
      newScroll: n
    } = t.payload, o = e.dimensions.droppables[r];
    if (!o)
      return e;
    const i = Ji(o, n);
    return Un(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Gt(e) || (process.env.NODE_ENV !== "production" ? O(!1, `Attempting to move in an unsupported phase ${e.phase}`) : O());
    const {
      id: r,
      isEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : O()), o.isEnabled === n && (process.env.NODE_ENV !== "production" ? O(!1, `Trying to set droppable isEnabled to ${String(n)}
      but it is already ${String(o.isEnabled)}`) : O());
    const i = {
      ...o,
      isEnabled: n
    };
    return Un(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Gt(e) || (process.env.NODE_ENV !== "production" ? O(!1, `Attempting to move in an unsupported phase ${e.phase}`) : O());
    const {
      id: r,
      isCombineEnabled: n
    } = t.payload, o = e.dimensions.droppables[r];
    o || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : O()), o.isCombineEnabled === n && (process.env.NODE_ENV !== "production" ? O(!1, `Trying to set droppable isCombineEnabled to ${String(n)}
      but it is already ${String(o.isCombineEnabled)}`) : O());
    const i = {
      ...o,
      isCombineEnabled: n
    };
    return Un(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Gt(e) || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot move by window in phase ${e.phase}`) : O()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? O(!1, "Window scrolling is currently not supported for fixed lists") : O());
    const r = t.payload.newScroll;
    if (_t(e.viewport.scroll.current, r))
      return qn(e);
    const n = Kd(e.viewport, r);
    return Zo(e) ? ip({
      state: e,
      viewport: n
    }) : hr({
      state: e,
      viewport: n
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Gt(e))
      return e;
    const r = t.payload.maxScroll;
    if (_t(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? O(!1, `${t.type} received while not in DRAGGING phase`) : O());
    const r = tv({
      state: e,
      type: t.type
    });
    return r ? hr({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? O(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : O()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot animate drop from phase ${e.phase}`) : O()), {
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
const Ev = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), xv = (e) => ({
  type: "LIFT",
  payload: e
}), wv = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), Sv = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), Dv = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), Ov = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), Nv = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), Cv = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), sp = (e) => ({
  type: "MOVE",
  payload: e
}), _v = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), Iv = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Pv = () => ({
  type: "MOVE_UP",
  payload: null
}), Av = () => ({
  type: "MOVE_DOWN",
  payload: null
}), $v = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), Rv = () => ({
  type: "MOVE_LEFT",
  payload: null
}), oa = () => ({
  type: "FLUSH",
  payload: null
}), Tv = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), ia = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), cp = (e) => ({
  type: "DROP",
  payload: e
}), Vv = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), lp = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function Mv(e) {
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
  process.env.NODE_ENV !== "production" && Ve(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${n}
  `);
}
function Lv(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Yt(e.droppable.id, t.draggables);
    Mv(r);
  }
}
var Bv = (e) => ({
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
  l.phase === "DROP_ANIMATING" && r(ia({
    completed: l.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? O(!1, "Unexpected phase to start a drag") : O()), r(oa()), r(Ev({
    draggableId: i,
    movementMode: s
  }));
  const p = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: s === "SNAP"
    }
  }, {
    critical: c,
    dimensions: d,
    viewport: m
  } = e.startPublishing(p);
  Lv(c, d), r(wv({
    critical: c,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: m
  }));
}, Fv = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const aa = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Pr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, up = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Tt = `${up.outOfTheWay}s ${aa.outOfTheWay}`, vr = {
  fluid: `opacity ${Tt}`,
  snap: `transform ${Tt}, opacity ${Tt}`,
  drop: (e) => {
    const t = `${e}s ${aa.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Tt}`,
  placeholder: `height ${Tt}, width ${Tt}, margin ${Tt}`
}, sc = (e) => _t(e, qe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Qo = {
  moveTo: sc,
  drop: (e, t) => {
    const r = sc(e);
    if (r)
      return t ? `${r} scale(${Pr.scale.drop})` : r;
  }
}, {
  minDropTime: ei,
  maxDropTime: dp
} = up, Gv = dp - ei, cc = 1500, Wv = 0.6;
var jv = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const n = Cr(e, t);
  if (n <= 0)
    return ei;
  if (n >= cc)
    return dp;
  const o = n / cc, i = ei + Gv * o, a = r === "CANCEL" ? i * Wv : i;
  return Number(a.toFixed(2));
}, kv = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: n,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = st(e), l = s ? a[s] : null, u = a[t.descriptor.droppableId], p = op({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || u,
    viewport: n
  });
  return at(p, t.client.borderBox.center);
}, zv = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: n,
  viewport: o,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: np({
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
    displaced: _r
  },
  didDropInsideDroppable: !0
};
const Hv = ({
  getState: e,
  dispatch: t
}) => (r) => (n) => {
  if (n.type !== "DROP") {
    r(n);
    return;
  }
  const o = e(), i = n.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Vv({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && (process.env.NODE_ENV !== "production" ? O(!1, "A DROP action occurred while DROP_PENDING and still waiting") : O()), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot drop in phase: ${o.phase}`) : O());
  const s = o.critical, l = o.dimensions, u = l.draggables[o.critical.draggable.id], {
    impact: p,
    didDropInsideDroppable: c
  } = zv({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), d = c ? Zi(p) : null, m = c ? In(p) : null, h = {
    index: s.draggable.index,
    droppableId: s.droppable.id
  }, b = {
    draggableId: u.descriptor.id,
    type: u.descriptor.type,
    source: h,
    reason: i,
    mode: o.movementMode,
    destination: d,
    combine: m
  }, f = kv({
    impact: p,
    draggable: u,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), y = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: b,
    impact: p
  };
  if (!(!_t(o.current.client.offset, f) || !!b.combine)) {
    t(ia({
      completed: y
    }));
    return;
  }
  const E = jv({
    current: o.current.client.offset,
    destination: f,
    reason: i
  });
  t(Tv({
    newHomeClientOffset: f,
    dropDuration: E,
    completed: y
  }));
};
var Uv = Hv, pp = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function qv(e) {
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
function Yv({
  onWindowScroll: e
}) {
  function t() {
    e(pp());
  }
  const r = Or(t), n = qv(r);
  let o = Ct;
  function i() {
    return o !== Ct;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot start scroll listener when already active") : O()), o = mt(window, [n]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot stop scroll listener when not active") : O()), r.cancel(), o(), o = Ct;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const Kv = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", Xv = (e) => {
  const t = Yv({
    onWindowScroll: (r) => {
      e.dispatch(_v({
        newScroll: r
      }));
    }
  });
  return (r) => (n) => {
    !t.isActive() && n.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && Kv(n) && t.stop(), r(n);
  };
};
var Jv = Xv, Zv = (e) => {
  let t = !1, r = !1;
  const n = setTimeout(() => {
    r = !0;
  }), o = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Ve("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && Ve(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(n);
  };
  return o.wasCalled = () => t, o;
}, Qv = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((s) => s.timerId === o);
    i === -1 && (process.env.NODE_ENV !== "production" ? O(!1, "Could not find timer") : O());
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
const ey = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, ty = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, ry = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && n;
}, mr = (e, t) => {
  Ur(), t(), qr();
}, Xr = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Yn(e, t, r, n) {
  if (!e) {
    r(n(t));
    return;
  }
  const o = Zv(r);
  e(t, {
    announce: o
  }), o.wasCalled() || r(n(t));
}
var ny = (e, t) => {
  const r = Qv();
  let n = null;
  const o = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : O()), mr("onBeforeCapture", () => {
      const m = e().onBeforeCapture;
      m && m({
        draggableId: c,
        mode: d
      });
    });
  }, i = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : O()), mr("onBeforeDragStart", () => {
      const m = e().onBeforeDragStart;
      m && m(Xr(c, d));
    });
  }, a = (c, d) => {
    n && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : O());
    const m = Xr(c, d);
    n = {
      mode: d,
      lastCritical: c,
      lastLocation: m.source,
      lastCombine: null
    }, r.add(() => {
      mr("onDragStart", () => Yn(e().onDragStart, m, t, on.onDragStart));
    });
  }, s = (c, d) => {
    const m = Zi(d), h = In(d);
    n || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot fire onDragMove when onDragStart has not been called") : O());
    const b = !ry(c, n.lastCritical);
    b && (n.lastCritical = c);
    const f = !ey(n.lastLocation, m);
    f && (n.lastLocation = m);
    const y = !ty(n.lastCombine, h);
    if (y && (n.lastCombine = h), !b && !f && !y)
      return;
    const w = {
      ...Xr(c, n.mode),
      combine: h,
      destination: m
    };
    r.add(() => {
      mr("onDragUpdate", () => Yn(e().onDragUpdate, w, t, on.onDragUpdate));
    });
  }, l = () => {
    n || (process.env.NODE_ENV !== "production" ? O(!1, "Can only flush responders while dragging") : O()), r.flush();
  }, u = (c) => {
    n || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : O()), n = null, mr("onDragEnd", () => Yn(e().onDragEnd, c, t, on.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: a,
    update: s,
    flush: l,
    drop: u,
    abort: () => {
      if (!n)
        return;
      const c = {
        ...Xr(n.lastCritical, n.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(c);
    }
  };
}, oy = (e, t) => {
  const r = ny(e, t);
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
const iy = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const n = e.getState();
  n.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot finish a drop animating when no drop is occurring") : O()), e.dispatch(ia({
    completed: n.completed
  }));
};
var ay = iy;
const sy = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(lp());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = mt(window, [a]);
    });
  };
};
var cy = sy, ly = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, uy = (e) => {
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
const dy = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var py = (e) => (t) => (r) => (n) => {
  if (dy(n)) {
    e.stop(), r(n);
    return;
  }
  if (n.type === "INITIAL_PUBLISH") {
    r(n);
    const o = t.getState();
    o.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? O(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : O()), e.start(o);
    return;
  }
  r(n), e.scroll(t.getState());
};
const fy = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const n = e.getState();
  n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(cp({
    reason: n.reason
  })));
};
var my = fy;
const gy = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Dd;
var by = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: n,
  announce: o,
  autoScroller: i
}) => Sd(yv, gy(rb(Fv(r), ly(e), Bv(e), Uv, ay, cy, my, py(i), Jv, uy(t), oy(n, o))));
const Kn = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function hy({
  registry: e,
  callbacks: t
}) {
  let r = Kn(), n = null;
  const o = () => {
    n || (t.collectionStarting(), n = requestAnimationFrame(() => {
      n = null, Ur();
      const {
        additions: l,
        removals: u,
        modified: p
      } = r, c = Object.keys(l).map((h) => e.draggable.getById(h).getDimension(qe)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(p).map((h) => {
        const f = e.droppable.getById(h).callbacks.getScrollWhileDragging();
        return {
          droppableId: h,
          scroll: f
        };
      }), m = {
        additions: c,
        removals: Object.keys(u),
        modified: d
      };
      r = Kn(), qr(), t.publish(m);
    }));
  };
  return {
    add: (l) => {
      const u = l.descriptor.id;
      r.additions[u] = l, r.modified[l.descriptor.droppableId] = !0, r.removals[u] && delete r.removals[u], o();
    },
    remove: (l) => {
      const u = l.descriptor;
      r.removals[u.id] = !0, r.modified[u.droppableId] = !0, r.additions[u.id] && delete r.additions[u.id], o();
    },
    stop: () => {
      n && (cancelAnimationFrame(n), n = null, r = Kn());
    }
  };
}
var fp = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = at({
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
}, mp = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot find document.documentElement") : O()), e;
}, gp = () => {
  const e = mp();
  return fp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, vy = () => {
  const e = pp(), t = gp(), r = e.y, n = e.x, o = mp(), i = o.clientWidth, a = o.clientHeight, s = n + i, l = r + a;
  return {
    frame: bt({
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
        value: qe,
        displacement: qe
      }
    }
  };
}, yy = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Ur();
  const n = vy(), o = n.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((p) => p.callbacks.getDimensionAndWatchScroll(o, t)), s = r.draggable.getAllByType(e.draggable.type).map((p) => p.getDimension(o)), l = {
    draggables: kd(s),
    droppables: jd(a)
  };
  return qr(), {
    dimensions: l,
    critical: e,
    viewport: n
  };
};
function lc(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Ve(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var Ey = (e, t) => {
  let r = null;
  const n = hy({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (d, m) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : O()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: m
    });
  }, i = (d, m) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : O()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: m
    }));
  }, a = (d, m) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : O()), t.updateDroppableScroll({
      id: d,
      newScroll: m
    }));
  }, s = (d, m) => {
    r && e.droppable.getById(d).callbacks.scroll(m);
  }, l = () => {
    if (!r)
      return;
    n.stop();
    const d = r.critical.droppable;
    e.droppable.getAllByType(d.type).forEach((m) => m.callbacks.dragStopped()), r.unsubscribe(), r = null;
  }, u = (d) => {
    r || (process.env.NODE_ENV !== "production" ? O(!1, "Should only be subscribed when a collection is occurring") : O());
    const m = r.critical.draggable;
    d.type === "ADDITION" && lc(e, m, d.value) && n.add(d.value), d.type === "REMOVAL" && lc(e, m, d.value) && n.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot start capturing critical dimensions as there is already a collection") : O());
      const m = e.draggable.getById(d.draggableId), h = e.droppable.getById(m.descriptor.droppableId), b = {
        draggable: m.descriptor,
        droppable: h.descriptor
      }, f = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: f
      }, yy({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: l
  };
}, bp = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", xy = (e) => {
  window.scrollBy(e.x, e.y);
};
const wy = Ue((e) => _n(e).filter((t) => !(!t.isEnabled || !t.frame))), Sy = (e, t) => wy(t).find((n) => (n.frame || (process.env.NODE_ENV !== "production" ? O(!1, "Invalid result") : O()), Qd(n.frame.pageMarginBox)(e))) || null;
var Dy = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const o = r[t];
    return o.frame ? o : null;
  }
  return Sy(e, r);
};
const Ar = {
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
var Oy = (e, t, r = () => Ar) => {
  const n = r(), o = e[t.size] * n.startFromPercentage, i = e[t.size] * n.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, hp = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const n = t - e;
  return n === 0 ? (process.env.NODE_ENV !== "production" && Ve(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / n;
}, sa = 1, Ny = (e, t, r = () => Ar) => {
  const n = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return n.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return sa;
  const i = 1 - hp({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = n.maxPixelScroll * n.ease(i);
  return Math.ceil(a);
}, Cy = (e, t, r) => {
  const n = r(), o = n.durationDampening.accelerateAt, i = n.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < o)
    return sa;
  const p = hp({
    startOfRange: o,
    endOfRange: s,
    current: u
  }), c = e * n.ease(p);
  return Math.ceil(c);
}, uc = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: o
}) => {
  const i = Ny(e, t, o);
  return i === 0 ? 0 : n ? Math.max(Cy(i, r, o), sa) : i;
}, dc = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = Oy(e, n, i);
  return t[n.end] < t[n.start] ? uc({
    distanceToEdge: t[n.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * uc({
    distanceToEdge: t[n.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, _y = ({
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
const Iy = Wd((e) => e === 0 ? 0 : e);
var vp = ({
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
  }, s = dc({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Qi,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = dc({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Ud,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), u = Iy({
    x: l,
    y: s
  });
  if (_t(u, qe))
    return null;
  const p = _y({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return p ? _t(p, qe) ? null : p : null;
};
const Py = Wd((e) => e === 0 ? 0 : e > 0 ? 1 : -1), ca = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: n
  }) => {
    const o = Ze(t, n), i = {
      x: e(o.x, r.x),
      y: e(o.y, r.y)
    };
    return _t(i, qe) ? null : i;
  };
})(), yp = ({
  max: e,
  current: t,
  change: r
}) => {
  const n = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Py(r), i = ca({
    max: n,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, la = (e, t) => yp({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), Ay = (e, t) => {
  if (!la(e, t))
    return null;
  const r = e.scroll.max, n = e.scroll.current;
  return ca({
    current: n,
    max: r,
    change: t
  });
}, ua = (e, t) => {
  const r = e.frame;
  return r ? yp({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, $y = (e, t) => {
  const r = e.frame;
  return !r || !ua(e, t) ? null : ca({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var Ry = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: n,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const a = vp({
    dragStartTime: n,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && la(e, a) ? a : null;
}, Ty = ({
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
  const s = vp({
    dragStartTime: n,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && ua(e, s) ? s : null;
}, pc = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: n,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const c = e.viewport, d = Ry({
      dragStartTime: t,
      viewport: c,
      subject: l,
      center: a,
      shouldUseTimeDampening: r,
      getAutoScrollerOptions: i
    });
    if (d) {
      n(d);
      return;
    }
  }
  const u = Dy({
    center: a,
    destination: st(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const p = Ty({
    dragStartTime: t,
    droppable: u,
    subject: l,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  p && o(u.descriptor.id, p);
}, Vy = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => Ar
}) => {
  const n = Or(e), o = Or(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot fluid scroll if not dragging") : O());
    const {
      shouldUseTimeDampening: p,
      dragStartTime: c
    } = i;
    pc({
      state: u,
      scrollWindow: n,
      scrollDroppable: o,
      dragStartTime: c,
      shouldUseTimeDampening: p,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      Ur(), i && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot start auto scrolling when already started") : O());
      const p = Date.now();
      let c = !1;
      const d = () => {
        c = !0;
      };
      pc({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: p,
        shouldUseTimeDampening: c
      }, qr(), c && a(u);
    },
    stop: () => {
      i && (n.cancel(), o.cancel(), i = null);
    },
    scroll: a
  };
}, My = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const n = (s, l) => {
    const u = Ze(s.current.client.selection, l);
    e({
      client: u
    });
  }, o = (s, l) => {
    if (!ua(s, l))
      return l;
    const u = $y(s, l);
    if (!u)
      return t(s.descriptor.id, l), null;
    const p = at(l, u);
    return t(s.descriptor.id, p), at(l, p);
  }, i = (s, l, u) => {
    if (!s || !la(l, u))
      return u;
    const p = Ay(l, u);
    if (!p)
      return r(u), null;
    const c = at(u, p);
    return r(c), at(u, c);
  };
  return (s) => {
    const l = s.scrollJumpRequest;
    if (!l)
      return;
    const u = st(s.impact);
    u || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot perform a jump scroll when there is no destination") : O());
    const p = o(s.dimensions.droppables[u], l);
    if (!p)
      return;
    const c = s.viewport, d = i(s.isWindowScrollAllowed, c, p);
    d && n(s, d);
  };
}, Ly = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: n
}) => {
  const o = Vy({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: n
  }), i = My({
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
const ir = "data-rfd", ar = (() => {
  const e = `${ir}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), ti = (() => {
  const e = `${ir}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), By = (() => {
  const e = `${ir}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), fc = {
  contextId: `${ir}-scroll-container-context-id`
}, Fy = (e) => (t) => `[${t}="${e}"]`, gr = (e, t) => e.map((r) => {
  const n = r.styles[t];
  return n ? `${r.selector} { ${n} }` : "";
}).join(" "), Gy = "pointer-events: none;";
var Wy = (e) => {
  const t = Fy(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(ar.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: Gy,
        dropAnimating: s
      }
    };
  })(), n = (() => {
    const s = `
      transition: ${vr.outOfTheWay};
    `;
    return {
      selector: t(ti.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), o = {
    selector: t(By.contextId),
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
    always: gr(a, "always"),
    resting: gr(a, "resting"),
    dragging: gr(a, "dragging"),
    dropAnimating: gr(a, "dropAnimating"),
    userCancel: gr(a, "userCancel")
  };
};
const jy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? sr : se;
var ct = jy;
const Xn = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot find the head to append a style to") : O()), e;
}, mc = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function ky(e, t) {
  const r = pe(() => Wy(e), [e]), n = M(null), o = M(null), i = q(Ue((c) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot set dynamic style element if it is not set") : O()), d.textContent = c;
  }), []), a = q((c) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot set dynamic style element if it is not set") : O()), d.textContent = c;
  }, []);
  ct(() => {
    !n.current && !o.current || (process.env.NODE_ENV !== "production" ? O(!1, "style elements already mounted") : O());
    const c = mc(t), d = mc(t);
    return n.current = c, o.current = d, c.setAttribute(`${ir}-always`, e), d.setAttribute(`${ir}-dynamic`, e), Xn().appendChild(c), Xn().appendChild(d), a(r.always), i(r.resting), () => {
      const m = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot unmount ref as it is not set") : O()), Xn().removeChild(b), h.current = null;
      };
      m(n), m(o);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = q(() => i(r.dragging), [i, r.dragging]), l = q((c) => {
    if (c === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = q(() => {
    o.current && i(r.resting);
  }, [i, r.resting]);
  return pe(() => ({
    dragging: s,
    dropping: l,
    resting: u
  }), [s, l, u]);
}
function Ep(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var xp = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Yr(e) {
  return e instanceof xp(e).HTMLElement;
}
function wp(e, t) {
  const r = `[${ar.contextId}="${e}"]`, n = Ep(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Ve(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(ar.draggableId) === t);
  return o ? Yr(o) ? o : (process.env.NODE_ENV !== "production" && Ve("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ve(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function zy(e) {
  const t = M({}), r = M(null), n = M(null), o = M(!1), i = q(function(d, m) {
    const h = {
      id: d,
      focus: m
    };
    return t.current[d] = h, function() {
      const f = t.current;
      f[d] !== h && delete f[d];
    };
  }, []), a = q(function(d) {
    const m = wp(e, d);
    m && m !== document.activeElement && m.focus();
  }, [e]), s = q(function(d, m) {
    r.current === d && (r.current = m);
  }, []), l = q(function() {
    n.current || o.current && (n.current = requestAnimationFrame(() => {
      n.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = q(function(d) {
    r.current = null;
    const m = document.activeElement;
    m && m.getAttribute(ar.draggableId) === d && (r.current = d);
  }, []);
  return ct(() => (o.current = !0, function() {
    o.current = !1;
    const d = n.current;
    d && cancelAnimationFrame(d);
  }), []), pe(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: s
  }), [i, u, l, s]);
}
function Hy() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function r(c) {
    return t.push(c), function() {
      const m = t.indexOf(c);
      m !== -1 && t.splice(m, 1);
    };
  }
  function n(c) {
    t.length && t.forEach((d) => d(c));
  }
  function o(c) {
    return e.draggables[c] || null;
  }
  function i(c) {
    const d = o(c);
    return d || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot find draggable entry with id [${c}]`) : O()), d;
  }
  const a = {
    register: (c) => {
      e.draggables[c.descriptor.id] = c, n({
        type: "ADDITION",
        value: c
      });
    },
    update: (c, d) => {
      const m = e.draggables[d.descriptor.id];
      m && m.uniqueId === c.uniqueId && (delete e.draggables[d.descriptor.id], e.draggables[c.descriptor.id] = c);
    },
    unregister: (c) => {
      const d = c.descriptor.id, m = o(d);
      m && c.uniqueId === m.uniqueId && (delete e.draggables[d], e.droppables[c.descriptor.droppableId] && n({
        type: "REMOVAL",
        value: c
      }));
    },
    getById: i,
    findById: o,
    exists: (c) => !!o(c),
    getAllByType: (c) => Object.values(e.draggables).filter((d) => d.descriptor.type === c)
  };
  function s(c) {
    return e.droppables[c] || null;
  }
  function l(c) {
    const d = s(c);
    return d || (process.env.NODE_ENV !== "production" ? O(!1, `Cannot find droppable entry with id [${c}]`) : O()), d;
  }
  const u = {
    register: (c) => {
      e.droppables[c.descriptor.id] = c;
    },
    unregister: (c) => {
      const d = s(c.descriptor.id);
      d && c.uniqueId === d.uniqueId && delete e.droppables[c.descriptor.id];
    },
    getById: l,
    findById: s,
    exists: (c) => !!s(c),
    getAllByType: (c) => Object.values(e.droppables).filter((d) => d.descriptor.type === c)
  };
  function p() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: a,
    droppable: u,
    subscribe: r,
    clean: p
  };
}
function Uy() {
  const e = pe(Hy, []);
  return se(() => function() {
    I.version.startsWith("16") || I.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var da = I.createContext(null), $r = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot find document.body") : O()), e;
};
const qy = {
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
var Yy = qy;
const Ky = (e) => `rfd-announcement-${e}`;
function Xy(e) {
  const t = pe(() => Ky(e), [e]), r = M(null);
  return se(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Nt(i.style, Yy), $r().appendChild(i), function() {
      setTimeout(function() {
        const l = $r();
        l.contains(i) && l.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), q((o) => {
    const i = r.current;
    if (i) {
      i.textContent = o;
      return;
    }
    process.env.NODE_ENV !== "production" && Ve(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${o}"
    `);
  }, []);
}
let Jy = 0;
const Sp = {
  separator: "::"
};
function Zy(e, t = Sp) {
  return pe(() => `${e}${t.separator}${Jy++}`, [t.separator, e]);
}
function Qy(e, t = Sp) {
  const r = I.useId();
  return pe(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var pa = "useId" in I ? Qy : Zy;
function eE({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function tE({
  contextId: e,
  text: t
}) {
  const r = pa("hidden-text", {
    separator: "-"
  }), n = pe(() => eE({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return se(function() {
    const i = document.createElement("div");
    return i.id = n, i.textContent = t, i.style.display = "none", $r().appendChild(i), function() {
      const s = $r();
      s.contains(i) && s.removeChild(i);
    };
  }, [n, t]), n;
}
var $n = I.createContext(null), rE = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const nE = /(\d+)\.(\d+)\.(\d+)/, gc = (e) => {
  const t = nE.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? O(!1, `Unable to parse React version ${e}`) : O());
  const r = Number(t[1]), n = Number(t[2]), o = Number(t[3]);
  return {
    major: r,
    minor: n,
    patch: o,
    raw: e
  };
}, oE = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var iE = (e, t) => {
  const r = gc(e), n = gc(t);
  oE(r, n) || process.env.NODE_ENV !== "production" && Ve(`
    React version: [${n.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Jn = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var aE = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Ve(`
      No <!doctype html> found.

      ${Jn}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Ve(`
      Unexpected <!doctype> found: (${t.name})

      ${Jn}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Ve(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Jn}
    `);
};
function fa(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Kr(e, t) {
  fa(() => {
    se(() => {
      try {
        e();
      } catch (r) {
        Xo(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function sE() {
  Kr(() => {
    iE(rE.react, I.version), aE(document);
  }, []);
}
function ma(e) {
  const t = M(e);
  return se(() => {
    t.current = e;
  }), t;
}
function cE() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function n(a) {
    e && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot claim lock as it is already claimed") : O());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function o() {
    e || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot release lock when there is no lock") : O()), e = null;
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
function Rr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const lE = 9, uE = 13, ga = 27, Dp = 32, dE = 33, pE = 34, fE = 35, mE = 36, gE = 37, bE = 38, hE = 39, vE = 40, yE = {
  [uE]: !0,
  [lE]: !0
};
var Op = (e) => {
  yE[e.keyCode] && e.preventDefault();
};
const EE = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((n) => `on${n}` in document) || e;
})();
var Rn = EE;
const Np = 0, bc = 5;
function xE(e, t) {
  return Math.abs(t.x - e.x) >= bc || Math.abs(t.y - e.y) >= bc;
}
const hc = {
  type: "IDLE"
};
function wE({
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
      if (i !== Np)
        return;
      const l = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        o.preventDefault(), u.actions.move(l);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot be IDLE") : O());
      const p = u.point;
      if (!xE(p, l))
        return;
      o.preventDefault();
      const c = u.actions.fluidLift(l);
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
      if (o.keyCode === ga) {
        o.preventDefault(), e();
        return;
      }
      Op(o);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? O(!1, "Unexpected phase") : O()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Rn,
    fn: e
  }];
}
function SE(e) {
  const t = M(hc), r = M(Ct), n = pe(() => ({
    eventName: "mousedown",
    fn: function(c) {
      if (c.defaultPrevented || c.button !== Np || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
        return;
      const d = e.findClosestDraggableId(c);
      if (!d)
        return;
      const m = e.tryGetLock(d, a, {
        sourceEvent: c
      });
      if (!m)
        return;
      c.preventDefault();
      const h = {
        x: c.clientX,
        y: c.clientY
      };
      r.current(), u(m, h);
    }
  }), [e]), o = pe(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (p) => {
      if (p.defaultPrevented)
        return;
      const c = e.findClosestDraggableId(p);
      if (!c)
        return;
      const d = e.findOptionsForDraggable(c);
      d && (d.shouldRespectForcePress || e.canGetLock(c) && p.preventDefault());
    }
  }), [e]), i = q(function() {
    const c = {
      passive: !1,
      capture: !0
    };
    r.current = mt(window, [o, n], c);
  }, [o, n]), a = q(() => {
    t.current.type !== "IDLE" && (t.current = hc, r.current(), i());
  }, [i]), s = q(() => {
    const p = t.current;
    a(), p.type === "DRAGGING" && p.actions.cancel({
      shouldBlockNextClick: !0
    }), p.type === "PENDING" && p.actions.abort();
  }, [a]), l = q(function() {
    const c = {
      capture: !0,
      passive: !1
    }, d = wE({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (m) => {
        t.current = m;
      }
    });
    r.current = mt(window, d, c);
  }, [s, a]), u = q(function(c, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? O(!1, "Expected to move from IDLE to PENDING drag") : O()), t.current = {
      type: "PENDING",
      point: d,
      actions: c
    }, l();
  }, [l]);
  ct(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function DE() {
}
const OE = {
  [pE]: !0,
  [dE]: !0,
  [mE]: !0,
  [fE]: !0
};
function NE(e, t) {
  function r() {
    t(), e.cancel();
  }
  function n() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === ga) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === Dp) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === vE) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === bE) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === hE) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === gE) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (OE[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Op(o);
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
    eventName: Rn,
    fn: r
  }];
}
function CE(e) {
  const t = M(DE), r = pe(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Dp)
        return;
      const a = e.findClosestDraggableId(i);
      if (!a)
        return;
      const s = e.tryGetLock(a, p, {
        sourceEvent: i
      });
      if (!s)
        return;
      i.preventDefault();
      let l = !0;
      const u = s.snapLift();
      t.current();
      function p() {
        l || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot stop capturing a keyboard drag when not capturing") : O()), l = !1, t.current(), n();
      }
      t.current = mt(window, NE(u, p), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), n = q(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = mt(window, [r], i);
  }, [r]);
  ct(function() {
    return n(), function() {
      t.current();
    };
  }, [n]);
}
const Zn = {
  type: "IDLE"
}, _E = 120, IE = 0.15;
function PE({
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
      r.keyCode === ga && r.preventDefault(), e();
    }
  }, {
    eventName: Rn,
    fn: e
  }];
}
function AE({
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
      o.type === "IDLE" && (process.env.NODE_ENV, O());
      const i = n.touches[0];
      if (!i || !(i.force >= IE))
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
    eventName: Rn,
    fn: e
  }];
}
function $E(e) {
  const t = M(Zn), r = M(Ct), n = q(function() {
    return t.current;
  }, []), o = q(function(m) {
    t.current = m;
  }, []), i = pe(() => ({
    eventName: "touchstart",
    fn: function(m) {
      if (m.defaultPrevented)
        return;
      const h = e.findClosestDraggableId(m);
      if (!h)
        return;
      const b = e.tryGetLock(h, s, {
        sourceEvent: m
      });
      if (!b)
        return;
      const f = m.touches[0], {
        clientX: y,
        clientY: w
      } = f, E = {
        x: y,
        y: w
      };
      r.current(), c(b, E);
    }
  }), [e]), a = q(function() {
    const m = {
      capture: !0,
      passive: !1
    };
    r.current = mt(window, [i], m);
  }, [i]), s = q(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), o(Zn), r.current(), a());
  }, [a, o]), l = q(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = q(function() {
    const m = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: l,
      completed: s,
      getPhase: n
    }, b = mt(window, AE(h), m), f = mt(window, PE(h), m);
    r.current = function() {
      b(), f();
    };
  }, [l, n, s]), p = q(function() {
    const m = n();
    m.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? O(!1, `Cannot start dragging from phase ${m.type}`) : O());
    const h = m.actions.fluidLift(m.point);
    o({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [n, o]), c = q(function(m, h) {
    n().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? O(!1, "Expected to move from IDLE to PENDING drag") : O());
    const b = setTimeout(p, _E);
    o({
      type: "PENDING",
      point: h,
      actions: m,
      longPressTimerId: b
    }), u();
  }, [u, n, o, p]);
  ct(function() {
    return a(), function() {
      r.current();
      const h = n();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), o(Zn));
    };
  }, [n, a, o]), ct(function() {
    return mt(window, [{
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
function RE(e) {
  fa(() => {
    const t = ma(e);
    Kr(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot change the amount of sensor hooks after mounting") : O(!1));
    });
  });
}
const TE = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Cp(e, t) {
  if (t == null)
    return !1;
  if (TE.includes(t.tagName.toLowerCase()))
    return !0;
  const n = t.getAttribute("contenteditable");
  return n === "true" || n === "" ? !0 : t === e ? !1 : Cp(e, t.parentElement);
}
function VE(e, t) {
  const r = t.target;
  return Yr(r) ? Cp(e, r) : !1;
}
var ME = (e) => bt(e.getBoundingClientRect()).center;
function LE(e) {
  return e instanceof xp(e).Element;
}
const BE = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((n) => n in Element.prototype) || e;
})();
function _p(e, t) {
  return e == null ? null : e[BE](t) ? e : _p(e.parentElement, t);
}
function FE(e, t) {
  return e.closest ? e.closest(t) : _p(e, t);
}
function GE(e) {
  return `[${ar.contextId}="${e}"]`;
}
function WE(e, t) {
  const r = t.target;
  if (!LE(r))
    return process.env.NODE_ENV !== "production" && Ve("event.target must be a Element"), null;
  const n = GE(e), o = FE(r, n);
  return o ? Yr(o) ? o : (process.env.NODE_ENV !== "production" && Ve("drag handle must be a HTMLElement"), null) : null;
}
function jE(e, t) {
  const r = WE(e, t);
  return r ? r.getAttribute(ar.draggableId) : null;
}
function kE(e, t) {
  const r = `[${ti.contextId}="${e}"]`, o = Ep(document, r).find((i) => i.getAttribute(ti.id) === t);
  return o ? Yr(o) ? o : (process.env.NODE_ENV !== "production" && Ve("Draggable element is not a HTMLElement"), null) : null;
}
function zE(e) {
  e.preventDefault();
}
function Jr({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: n
}) {
  return r() ? e !== t ? (n && process.env.NODE_ENV !== "production" && Ve(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (n && process.env.NODE_ENV !== "production" && Ve(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Ip({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: n
}) {
  if (e.isClaimed())
    return !1;
  const o = r.draggable.findById(n);
  return o ? !(!o.options.isEnabled || !bp(t.getState(), n)) : (process.env.NODE_ENV !== "production" && Ve(`Unable to find draggable with id: ${n}`), !1);
}
function HE({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: n,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ip({
    lockAPI: e,
    store: r,
    registry: n,
    draggableId: o
  }))
    return null;
  const l = n.draggable.getById(o), u = kE(t, l.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && Ve(`Unable to find draggable element with id: ${o}`), null;
  if (a && !l.options.canDragInteractiveElements && VE(u, a))
    return null;
  const p = e.claim(i || Ct);
  let c = "PRE_DRAG";
  function d() {
    return l.options.shouldRespectForcePress;
  }
  function m() {
    return e.isActive(p);
  }
  function h(g, x) {
    Jr({
      expected: g,
      phase: c,
      isLockActive: m,
      shouldWarn: !0
    }) && r.dispatch(x());
  }
  const b = h.bind(null, "DRAGGING");
  function f(g) {
    function x() {
      e.release(), c = "COMPLETED";
    }
    c !== "PRE_DRAG" && (x(), process.env.NODE_ENV !== "production" ? O(!1, `Cannot lift in phase ${c}`) : O()), r.dispatch(xv(g.liftActionArgs)), c = "DRAGGING";
    function N(C, V = {
      shouldBlockNextClick: !1
    }) {
      if (g.cleanup(), V.shouldBlockNextClick) {
        const A = mt(window, [{
          eventName: "click",
          fn: zE,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      x(), r.dispatch(cp({
        reason: C
      }));
    }
    return {
      isActive: () => Jr({
        expected: "DRAGGING",
        phase: c,
        isLockActive: m,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (C) => N("DROP", C),
      cancel: (C) => N("CANCEL", C),
      ...g.actions
    };
  }
  function y(g) {
    const x = Or((C) => {
      b(() => sp({
        client: C
      }));
    });
    return {
      ...f({
        liftActionArgs: {
          id: o,
          clientSelection: g,
          movementMode: "FLUID"
        },
        cleanup: () => x.cancel(),
        actions: {
          move: x
        }
      }),
      move: x
    };
  }
  function w() {
    const g = {
      moveUp: () => b(Pv),
      moveRight: () => b($v),
      moveDown: () => b(Av),
      moveLeft: () => b(Rv)
    };
    return f({
      liftActionArgs: {
        id: o,
        clientSelection: ME(u),
        movementMode: "SNAP"
      },
      cleanup: Ct,
      actions: g
    });
  }
  function E() {
    Jr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: m,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Jr({
      expected: "PRE_DRAG",
      phase: c,
      isLockActive: m,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: y,
    snapLift: w,
    abort: E
  };
}
const UE = [SE, CE, $E];
function qE({
  contextId: e,
  store: t,
  registry: r,
  customSensors: n,
  enableDefaultSensors: o
}) {
  const i = [...o ? UE : [], ...n || []], a = Ge(() => cE())[0], s = q(function(f, y) {
    Rr(f) && !Rr(y) && a.tryAbandon();
  }, [a]);
  ct(function() {
    let f = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(f, w), f = w;
    });
  }, [a, t, s]), ct(() => a.tryAbandon, [a.tryAbandon]);
  const l = q((b) => Ip({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = q((b, f, y) => HE({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: f || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, a, r, t]), p = q((b) => jE(e, b), [e]), c = q((b) => {
    const f = r.draggable.findById(b);
    return f ? f.options : null;
  }, [r.draggable]), d = q(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(oa()));
  }, [a, t]), m = q(() => a.isClaimed(), [a]), h = pe(() => ({
    canGetLock: l,
    tryGetLock: u,
    findClosestDraggableId: p,
    findOptionsForDraggable: c,
    tryReleaseLock: d,
    isLockClaimed: m
  }), [l, u, p, c, d, m]);
  RE(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const YE = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    I.version.startsWith("16") || I.version.startsWith("17") ? r() : cr(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), KE = (e) => ({
  ...Ar,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Ar.durationDampening,
    ...e.autoScrollerOptions
  }
});
function br(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? O(!1, "Could not find store from lazy ref") : O()), e.current;
}
function XE(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: n,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, a = M(null);
  sE();
  const s = ma(e), l = q(() => YE(s.current), [s]), u = q(() => KE(s.current), [s]), p = Xy(t), c = tE({
    contextId: t,
    text: i
  }), d = ky(t, o), m = q((A) => {
    br(a).dispatch(A);
  }, []), h = pe(() => Cs({
    publishWhileDragging: Sv,
    updateDroppableScroll: Ov,
    updateDroppableIsEnabled: Nv,
    updateDroppableIsCombineEnabled: Cv,
    collectionStarting: Dv
  }, m), [m]), b = Uy(), f = pe(() => Ey(b, h), [b, h]), y = pe(() => Ly({
    scrollWindow: xy,
    scrollDroppable: f.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Cs({
      move: sp
    }, m)
  }), [f.scrollDroppable, m, u]), w = zy(t), E = pe(() => by({
    announce: p,
    autoScroller: y,
    dimensionMarshal: f,
    focusMarshal: w,
    getResponders: l,
    styleMarshal: d
  }), [p, y, f, w, l, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && Ve("unexpected store change"), a.current = E;
  const v = q(() => {
    const A = br(a);
    A.getState().phase !== "IDLE" && A.dispatch(oa());
  }, []), g = q(() => {
    const A = br(a).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), x = pe(() => ({
    isDragging: g,
    tryAbort: v
  }), [g, v]);
  r(x);
  const N = q((A) => bp(br(a).getState(), A), []), C = q(() => Gt(br(a).getState()), []), V = pe(() => ({
    marshal: f,
    focus: w,
    contextId: t,
    canLift: N,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: c,
    registry: b
  }), [t, f, c, w, N, C, b]);
  return qE({
    contextId: t,
    store: E,
    registry: b,
    customSensors: n || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), se(() => v, [v]), I.createElement($n.Provider, {
    value: V
  }, I.createElement(qb, {
    context: da,
    store: E
  }, e.children));
}
let JE = 0;
function ZE() {
  return pe(() => `${JE++}`, []);
}
function QE() {
  return I.useId();
}
var ex = "useId" in I ? QE : ZE;
function tx(e) {
  const t = ex(), r = e.dragHandleUsageInstructions || on.dragHandleUsageInstructions;
  return I.createElement(lh, null, (n) => I.createElement(XE, {
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
const vc = {
  dragging: 5e3,
  dropAnimating: 4500
}, rx = (e, t) => t ? vr.drop(t.duration) : e ? vr.snap : vr.fluid, nx = (e, t) => {
  if (e)
    return t ? Pr.opacity.drop : Pr.opacity.combining;
}, ox = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function ix(e) {
  const r = e.dimension.client, {
    offset: n,
    combineWith: o,
    dropping: i
  } = e, a = !!o, s = ox(e), l = !!i, u = l ? Qo.drop(n, a) : Qo.moveTo(n);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: rx(s, i),
    transform: u,
    opacity: nx(a, l),
    zIndex: l ? vc.dropAnimating : vc.dragging,
    pointerEvents: "none"
  };
}
function ax(e) {
  return {
    transform: Qo.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function sx(e) {
  return e.type === "DRAGGING" ? ix(e) : ax(e);
}
function cx(e, t, r = qe) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Md(o, n), a = yn(i, r), s = {
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
function lx(e) {
  const t = pa("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = pe(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = q((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot get dimension when no ref is set") : O()), cx(r, h, m);
  }, [r, o]), p = pe(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  ct(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), ct(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ba = I.createContext(null);
function Pp(e) {
  e && Yr(e) || (process.env.NODE_ENV !== "production" ? O(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : O());
}
function ux(e, t, r) {
  Kr(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? O(!1, "Draggable requires a draggableId") : O(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? O(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : O(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? O(!1, `${n(o)} requires an integer index prop`) : O(!1)), e.mapped.type !== "DRAGGING" && (Pp(r()), e.isEnabled && (wp(t, o) || (process.env.NODE_ENV !== "production" ? O(!1, `${n(o)} Unable to find drag handle`) : O(!1))));
  });
}
function dx(e) {
  fa(() => {
    const t = M(e);
    Kr(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? O(!1, "Draggable isClone prop value changed during component life") : O(!1));
    }, [e]);
  });
}
function wn(e) {
  const t = ht(e);
  return t || (process.env.NODE_ENV !== "production" ? O(!1, "Could not find required context") : O()), t;
}
function px(e) {
  e.preventDefault();
}
const fx = (e) => {
  const t = M(null), r = q((x = null) => {
    t.current = x;
  }, []), n = q(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = wn($n), {
    type: s,
    droppableId: l
  } = wn(ba), u = pe(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: m,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (ux(e, o, n), dx(b), !b) {
    const x = pe(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    lx(x);
  }
  const w = pe(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: px
  } : null, [o, i, c, d]), E = q((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : cr(y));
  }, [y, f]), v = pe(() => {
    const x = sx(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: w
    };
  }, [o, w, c, f, E, r]), g = pe(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, g));
};
var mx = fx, Ap = (e, t) => e === t, $p = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const gx = (e) => e.combine ? e.combine.draggableId : null, bx = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function hx() {
  const e = Ue((o, i) => ({
    x: o,
    y: i
  })), t = Ue((o, i, a = null, s = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = Ue((o, i, a, s, l = null, u = null, p = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: l,
      combineWith: u,
      mode: i,
      offset: o,
      dimension: a,
      forceShouldAnimate: p,
      snapshot: t(i, s, l, u, null)
    }
  }));
  return (o, i) => {
    if (Rr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const a = o.current.client.offset, s = o.dimensions.draggables[i.draggableId], l = st(o.impact), u = bx(o.impact), p = o.forceShouldAnimate;
      return r(e(a.x, a.y), o.movementMode, s, i.isClone, l, u, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const a = o.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, l = o.dimensions.draggables[i.draggableId], u = a.result, p = u.mode, c = $p(u), d = gx(u), h = {
        duration: o.dropDuration,
        curve: aa.drop,
        moveTo: o.newHomeClientOffset,
        opacity: d ? Pr.opacity.drop : null,
        scale: d ? Pr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
          dropping: h,
          draggingOver: c,
          combineWith: d,
          mode: p,
          forceShouldAnimate: null,
          snapshot: t(p, s, c, d, h)
        }
      };
    }
    return null;
  };
}
function Rp(e = null) {
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
const vx = {
  mapped: {
    type: "SECONDARY",
    offset: qe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Rp(null)
  }
};
function yx() {
  const e = Ue((a, s) => ({
    x: a,
    y: s
  })), t = Ue(Rp), r = Ue((a, s = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: l,
      snapshot: t(s)
    }
  })), n = (a) => a ? r(qe, a, !0) : null, o = (a, s, l, u) => {
    const p = l.displaced.visible[a], c = !!(u.inVirtualList && u.effected[a]), d = In(l), m = d && d.draggableId === a ? s : null;
    if (!p) {
      if (!c)
        return n(m);
      if (l.displaced.invisible[a])
        return null;
      const f = ur(u.displacedBy.point), y = e(f.x, f.y);
      return r(y, m, !0);
    }
    if (c)
      return n(m);
    const h = l.displacedBy.point, b = e(h.x, h.y);
    return r(b, m, p.shouldAnimate);
  };
  return (a, s) => {
    if (Rr(a))
      return a.critical.draggable.id === s.draggableId ? null : o(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const l = a.completed;
      return l.result.draggableId === s.draggableId ? null : o(s.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const Ex = () => {
  const e = hx(), t = yx();
  return (n, o) => e(n, o) || t(n, o) || vx;
}, xx = {
  dropAnimationFinished: lp
}, wx = Td(Ex, xx, null, {
  context: da,
  areStatePropsEqual: Ap
})(mx);
var Sx = wx;
function Tp(e) {
  return wn(ba).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(Sx, e);
}
function Dx(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, n = !!e.shouldRespectForcePress;
  return I.createElement(Tp, Nt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: n
  }));
}
const ha = (e) => (t) => e === t, Ox = ha("scroll"), Nx = ha("auto"), Cx = ha("visible"), yc = (e, t) => t(e.overflowX) || t(e.overflowY), _x = (e, t) => t(e.overflowX) && t(e.overflowY), Vp = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return yc(r, Ox) || yc(r, Nx);
}, Ix = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = $r(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, O()), !Vp(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return _x(n, Cx) || process.env.NODE_ENV !== "production" && Ve(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, va = (e) => e == null ? null : e === document.body ? Ix() ? e : null : e === document.documentElement ? null : Vp(e) ? e : va(e.parentElement);
var Px = (e) => {
  !e || !va(e.parentElement) || process.env.NODE_ENV !== "production" && Ve(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ri = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Mp = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Mp(e.parentElement) : !1;
var Ax = (e) => {
  const t = va(e), r = Mp(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, $x = ({
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
      scrollSize: d,
      client: m
    } = s, h = fp({
      scrollHeight: d.scrollHeight,
      scrollWidth: d.scrollWidth,
      height: m.paddingBox.height,
      width: m.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: m,
      scrollSize: d,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: h,
        diff: {
          value: qe,
          displacement: qe
        }
      }
    };
  })(), u = o === "vertical" ? Qi : Ud, p = or({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: p
  };
};
const Rx = (e, t) => {
  const r = Ld(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, l = Ki({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Xi({
    borderBox: l,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var Tx = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = Rx(e, l), p = yn(u, n), c = (() => {
    if (!l)
      return null;
    const m = Ld(l), h = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: m,
      page: yn(m, n),
      scroll: ri(l),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return $x({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: c
  });
};
const Vx = {
  passive: !1
}, Mx = {
  passive: !0
};
var Ec = (e) => e.shouldPublishImmediately ? Vx : Mx;
const Zr = (e) => e && e.env.closestScrollable || null;
function Lx(e) {
  const t = M(null), r = wn($n), n = pa("droppable"), {
    registry: o,
    marshal: i
  } = r, a = ma(e), s = pe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = pe(() => Ue((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? O(!1, "Can only update scroll when dragging") : O());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = q(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? qe : ri(v.env.closestScrollable);
  }, []), c = q(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = pe(() => Or(c), [c]), m = q(() => {
    const v = t.current, g = Zr(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? O(!1, "Could not find scroll options while scrolling") : O()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = q((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? O(!1, "Cannot collect a droppable while a drag is occurring") : O());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot collect without a droppable ref") : O());
    const C = Ax(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = V;
    const A = Tx({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(fc.contextId, r.contextId), $.addEventListener("scroll", m, Ec(V.scrollOptions)), process.env.NODE_ENV !== "production" && Px($)), A;
  }, [r.contextId, s, m, a]), b = q(() => {
    const v = t.current, g = Zr(v);
    return v && g || (process.env.NODE_ENV !== "production" ? O(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : O()), ri(g);
  }, []), f = q(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot stop drag when no active drag") : O());
    const g = Zr(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(fc.contextId), g.removeEventListener("scroll", m, Ec(v.scrollOptions)));
  }, [m, d]), y = q((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot scroll when there is no drag") : O());
    const x = Zr(g);
    x || (process.env.NODE_ENV !== "production" ? O(!1, "Cannot scroll a droppable with no closest scrollable") : O()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = pe(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = pe(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  ct(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ve("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), ct(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ct(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Qn() {
}
const xc = {
  width: 0,
  height: 0,
  margin: bh
}, Bx = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? xc : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, Fx = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = Bx({
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
    transition: r !== "none" ? vr.placeholder : null
  };
}, Gx = (e) => {
  const t = M(null), r = q(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ge(e.animate === "open");
  se(() => s ? n !== "open" ? (r(), l(!1), Qn) : t.current ? Qn : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Qn, [n, s, r]);
  const u = q((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = Fx({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var Wx = I.memo(Gx);
function eo(e) {
  return typeof e == "boolean";
}
function to(e, t) {
  t.forEach((r) => r(e));
}
const jx = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? O(!1, "A Droppable requires a droppableId prop") : O()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? O(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : O());
}, function({
  props: t
}) {
  eo(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? O(!1, "isDropDisabled must be a boolean") : O()), eo(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? O(!1, "isCombineEnabled must be a boolean") : O()), eo(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? O(!1, "ignoreContainerClipping must be a boolean") : O());
}, function({
  getDroppableRef: t
}) {
  Pp(t());
}], kx = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Ve(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], zx = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? O(!1, "Must provide a clone render function (renderClone) for virtual lists") : O());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? O(!1, "Expected virtual list to not have a placeholder") : O());
}];
function Hx(e) {
  Kr(() => {
    to(e, jx), e.props.mode === "standard" && to(e, kx), e.props.mode === "virtual" && to(e, zx);
  });
}
class Ux extends I.PureComponent {
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
const qx = (e) => {
  const t = ht($n);
  t || (process.env.NODE_ENV !== "production" ? O(!1, "Could not find app context") : O());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: m,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, w = q(() => o.current, []), E = q((P = null) => {
    o.current = P;
  }, []), v = q(() => i.current, []), g = q((P = null) => {
    i.current = P;
  }, []);
  Hx({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = q(() => {
    n() && f({
      maxScroll: gp()
    });
  }, [n, f]);
  Lx({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = pe(() => I.createElement(Ux, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(Wx, {
    placeholder: T,
    onClose: P,
    innerRef: g,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = pe(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = pe(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: V
  }), [s, V, l]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, k = I.createElement(Tp, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (U, R) => T(U, R, P));
    return jr.createPortal(k, y());
  }
  return I.createElement(ba.Provider, {
    value: A
  }, a(C, h), $());
};
var Yx = qx;
function Kx() {
  return document.body || (process.env.NODE_ENV !== "production" ? O(!1, "document.body is not ready") : O()), document.body;
}
const wc = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: Kx
}, Lp = (e) => {
  let t = {
    ...e
  }, r;
  for (r in wc)
    e[r] === void 0 && (t = {
      ...t,
      [r]: wc[r]
    });
  return t;
}, ro = (e, t) => e === t.droppable.type, Sc = (e, t) => t.draggables[e.draggable.id], Xx = () => {
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
  }, r = Ue((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), n = Ue((i, a, s, l, u, p) => {
    const c = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const h = p ? {
        render: p,
        dragging: r(u.descriptor)
      } : null, b = {
        isDraggingOver: s,
        draggingOverWith: s ? c : null,
        draggingFromThisWith: c,
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
    if (!l)
      return e;
    const m = {
      isDraggingOver: s,
      draggingOverWith: c,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: u.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: m,
      useClone: null
    };
  });
  return (i, a) => {
    const s = Lp(a), l = s.droppableId, u = s.type, p = !s.isDropDisabled, c = s.renderClone;
    if (Rr(i)) {
      const d = i.critical;
      if (!ro(u, d))
        return t;
      const m = Sc(d, i.dimensions), h = st(i.impact) === l;
      return n(l, p, h, h, m, c);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!ro(u, d.critical))
        return t;
      const m = Sc(d.critical, i.dimensions);
      return n(l, p, $p(d.result) === l, st(d.impact) === l, m, c);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!ro(u, d.critical))
        return t;
      const m = st(d.impact) === l, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === l;
      return m ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, Jx = {
  updateViewportMaxScroll: Iv
}, Zx = Td(Xx, Jx, (e, t, r) => ({
  ...Lp(r),
  ...e,
  ...t
}), {
  context: da,
  areStatePropsEqual: Ap
})(Yx);
var Qx = Zx;
const dA = ({
  data: e,
  headerData: t,
  setSort: r,
  sort: n,
  isDragDisabled: o = !0,
  isLoading: i,
  onRowClick: a,
  itemClickKey: s,
  haveLinks: l,
  className: u
}) => {
  const [p, c] = Ge(null), [d, m] = Ge(e);
  se(() => {
    m(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (y) => {
    a == null || a(y), c(y);
  }, f = (y) => {
    if (!y.destination || !(d != null && d.length)) return;
    const w = y.source.index, E = y.destination.index, v = [...d], [g] = v.splice(w, 1);
    v.splice(E, 0, g), m(v);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ He("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ z("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ z("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ z(ad, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ z(bd, { className: u, children: /* @__PURE__ */ z("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ z("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ z(tx, { onDragEnd: f, children: /* @__PURE__ */ z(Qx, { droppableId: "dropArray", direction: "vertical", children: (y) => /* @__PURE__ */ He("table", { className: "w-full", children: [
    /* @__PURE__ */ z("thead", { children: /* @__PURE__ */ z("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((w, E) => /* @__PURE__ */ z(
      "td",
      {
        onClick: () => r == null ? void 0 : r(
          n === w.name.find((v) => v) ? `-${w.name.find((v) => v) ?? ""}` : w.name.find((v) => v) ?? ""
        ),
        className: `${n && "after:absolute after:ml-2 after:w-[5px] after:h-[5px] after:top-[-2px] after:bottom-0 after:my-auto after:border-t after:border-r after:border-dark-gray"} first:pl-[15px] last:pr-[15px] max-w-[160px] px-2 relative ${n === w.name.find((v) => v) ? "after:rotate-[-45deg]" : "after:rotate-[135deg]"} after:transition-all after:duration-300 cursor-pointer`,
        children: w.title
      },
      E
    )) }) }),
    /* @__PURE__ */ He(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...y.droppableProps,
        ref: y.innerRef,
        children: [
          d == null ? void 0 : d.map((w, E) => {
            var v;
            return /* @__PURE__ */ z(
              Dx,
              {
                isDragDisabled: o,
                draggableId: (v = w == null ? void 0 : w.id) == null ? void 0 : v.toString(),
                index: E,
                children: (g) => {
                  const x = {
                    ...g.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ z(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${p === d[E] && h}`,
                      onClick: () => b(
                        s ? w[s] : w.id
                      ),
                      ref: g.innerRef,
                      ...g.draggableProps,
                      ...g.dragHandleProps,
                      style: x,
                      children: t.map((N, C) => {
                        var A;
                        let V = (A = N == null ? void 0 : N.name) == null ? void 0 : A.reduce(
                          ($, P) => $ == null ? void 0 : $[P],
                          d == null ? void 0 : d[E]
                        );
                        return /* @__PURE__ */ z(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${l && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: N.transform ? N.transform(V, E) : V
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
          y.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, pA = ({ className: e, field: t, fieldState: r, ...n }) => /* @__PURE__ */ z(
  "textarea",
  {
    ...t,
    ...n,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), ew = ({ name: e, className: t }) => /* @__PURE__ */ z("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ z(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), tw = ({ style: e, text: t }) => /* @__PURE__ */ He("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ z("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ z("span", { className: "text-base", children: t })
] });
var Dc;
(function(e) {
  e.event = "event", e.props = "prop";
})(Dc || (Dc = {}));
var no = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + no(), "" + no();
function rw() {
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
function nw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ni = { exports: {} }, oo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc;
function ow() {
  if (Oc) return oo;
  Oc = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var m = d(), h = n({ inst: { value: m, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = m, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, m, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(m), m;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var m = d();
      return !r(c, m);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return oo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, oo;
}
var Nc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;
function iw() {
  return Cc || (Cc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m, h) {
      return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
    }
    function t(m, h) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var f = h();
        i(b, f) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      f = a({
        inst: { value: b, getSnapshot: h }
      });
      var y = f[0].inst, w = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && w({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && w({ inst: y }), m(function() {
            r(y) && w({ inst: y });
          });
        },
        [m]
      ), u(b), b;
    }
    function r(m) {
      var h = m.getSnapshot;
      m = m.value;
      try {
        var b = h();
        return !i(m, b);
      } catch {
        return !0;
      }
    }
    function n(m, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Nc.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Nc;
}
process.env.NODE_ENV === "production" ? ni.exports = ow() : ni.exports = iw();
var ya = ni.exports, io = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c;
function aw() {
  if (_c) return io;
  _c = 1;
  var e = I, t = ya;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return io.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
              var N = b.value;
              if (m(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var w = !1, E, v, g = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          g === null ? void 0 : function() {
            return y(g());
          }
        ];
      },
      [p, c, d, m]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, io;
}
var Ic = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc;
function sw() {
  return Pc || (Pc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = ya, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Ic.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
                var N = b.value;
                if (m(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var w = !1, E, v, g = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            g === null ? void 0 : function() {
              return y(g());
            }
          ];
        },
        [p, c, d, m]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ic;
}
process.env.NODE_ENV === "production" ? aw() : sw();
function cw(e) {
  e();
}
let Bp = cw;
const lw = (e) => Bp = e, uw = () => Bp, Ac = Symbol.for("react-redux-context"), $c = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function dw() {
  var e;
  if (!_.createContext) return {};
  const t = (e = $c[Ac]) != null ? e : $c[Ac] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const pw = /* @__PURE__ */ dw(), fw = () => {
  throw new Error("uSES not initialized!");
};
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, er.apply(null, arguments);
}
function Fp(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var oi = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;
function mw() {
  if (Rc) return he;
  Rc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
        case t:
          switch (g = g.type, g) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case p:
                case h:
                case m:
                case a:
                  return g;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return he.AsyncMode = l, he.ConcurrentMode = u, he.ContextConsumer = s, he.ContextProvider = a, he.Element = t, he.ForwardRef = p, he.Fragment = n, he.Lazy = h, he.Memo = m, he.Portal = r, he.Profiler = i, he.StrictMode = o, he.Suspense = c, he.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, he.isConcurrentMode = v, he.isContextConsumer = function(g) {
    return E(g) === s;
  }, he.isContextProvider = function(g) {
    return E(g) === a;
  }, he.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, he.isForwardRef = function(g) {
    return E(g) === p;
  }, he.isFragment = function(g) {
    return E(g) === n;
  }, he.isLazy = function(g) {
    return E(g) === h;
  }, he.isMemo = function(g) {
    return E(g) === m;
  }, he.isPortal = function(g) {
    return E(g) === r;
  }, he.isProfiler = function(g) {
    return E(g) === i;
  }, he.isStrictMode = function(g) {
    return E(g) === o;
  }, he.isSuspense = function(g) {
    return E(g) === c;
  }, he.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, he.typeOf = E, he;
}
var Oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function gw() {
  return Tc || (Tc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === c || S === d || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === m || S.$$typeof === a || S.$$typeof === s || S.$$typeof === p || S.$$typeof === f || S.$$typeof === y || S.$$typeof === w || S.$$typeof === b);
    }
    function v(S) {
      if (typeof S == "object" && S !== null) {
        var le = S.$$typeof;
        switch (le) {
          case t:
            var D = S.type;
            switch (D) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return D;
              default:
                var ue = D && D.$$typeof;
                switch (ue) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return ue;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = m, k = r, U = i, R = o, L = c, F = !1;
    function j(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(S) || v(S) === l;
    }
    function H(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Q(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function re(S) {
      return v(S) === p;
    }
    function ne(S) {
      return v(S) === n;
    }
    function de(S) {
      return v(S) === h;
    }
    function te(S) {
      return v(S) === m;
    }
    function oe(S) {
      return v(S) === r;
    }
    function W(S) {
      return v(S) === i;
    }
    function ie(S) {
      return v(S) === o;
    }
    function Fe(S) {
      return v(S) === c;
    }
    Oe.AsyncMode = g, Oe.ConcurrentMode = x, Oe.ContextConsumer = N, Oe.ContextProvider = C, Oe.Element = V, Oe.ForwardRef = A, Oe.Fragment = $, Oe.Lazy = P, Oe.Memo = T, Oe.Portal = k, Oe.Profiler = U, Oe.StrictMode = R, Oe.Suspense = L, Oe.isAsyncMode = j, Oe.isConcurrentMode = H, Oe.isContextConsumer = B, Oe.isContextProvider = Q, Oe.isElement = ee, Oe.isForwardRef = re, Oe.isFragment = ne, Oe.isLazy = de, Oe.isMemo = te, Oe.isPortal = oe, Oe.isProfiler = W, Oe.isStrictMode = ie, Oe.isSuspense = Fe, Oe.isValidElementType = E, Oe.typeOf = v;
  }()), Oe;
}
process.env.NODE_ENV === "production" ? oi.exports = mw() : oi.exports = gw();
var bw = oi.exports, Ea = bw, hw = {
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
}, vw = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, yw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Gp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, xa = {};
xa[Ea.ForwardRef] = yw;
xa[Ea.Memo] = Gp;
function Vc(e) {
  return Ea.isMemo(e) ? Gp : xa[e.$$typeof] || hw;
}
var Ew = Object.defineProperty, xw = Object.getOwnPropertyNames, Mc = Object.getOwnPropertySymbols, ww = Object.getOwnPropertyDescriptor, Sw = Object.getPrototypeOf, Lc = Object.prototype;
function Wp(e, t, r) {
  if (typeof t != "string") {
    if (Lc) {
      var n = Sw(t);
      n && n !== Lc && Wp(e, n, r);
    }
    var o = xw(t);
    Mc && (o = o.concat(Mc(t)));
    for (var i = Vc(e), a = Vc(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!vw[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = ww(t, l);
        try {
          Ew(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var Dw = Wp;
const Bc = /* @__PURE__ */ nw(Dw);
var ii = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fc;
function Ow() {
  if (Fc) return ve;
  Fc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case a:
                case l:
                case d:
                case c:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return ve.ContextConsumer = a, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = l, ve.Fragment = r, ve.Lazy = d, ve.Memo = c, ve.Portal = t, ve.Profiler = o, ve.StrictMode = n, ve.Suspense = u, ve.SuspenseList = p, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(f) {
    return b(f) === a;
  }, ve.isContextProvider = function(f) {
    return b(f) === i;
  }, ve.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, ve.isForwardRef = function(f) {
    return b(f) === l;
  }, ve.isFragment = function(f) {
    return b(f) === r;
  }, ve.isLazy = function(f) {
    return b(f) === d;
  }, ve.isMemo = function(f) {
    return b(f) === c;
  }, ve.isPortal = function(f) {
    return b(f) === t;
  }, ve.isProfiler = function(f) {
    return b(f) === o;
  }, ve.isStrictMode = function(f) {
    return b(f) === n;
  }, ve.isSuspense = function(f) {
    return b(f) === u;
  }, ve.isSuspenseList = function(f) {
    return b(f) === p;
  }, ve.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, ve.typeOf = b, ve;
}
var Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gc;
function Nw() {
  return Gc || (Gc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || w || D === n || D === u || D === p || y || D === m || h || b || f || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === c || D.$$typeof === i || D.$$typeof === a || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === E || D.getModuleId !== void 0));
    }
    function g(D) {
      if (typeof D == "object" && D !== null) {
        var ue = D.$$typeof;
        switch (ue) {
          case e:
            var Te = D.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var G = Te && Te.$$typeof;
                switch (G) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return G;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, U = n, R = u, L = p, F = !1, j = !1;
    function H(D) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(D) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(D) {
      return g(D) === a;
    }
    function ee(D) {
      return g(D) === i;
    }
    function re(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function ne(D) {
      return g(D) === l;
    }
    function de(D) {
      return g(D) === r;
    }
    function te(D) {
      return g(D) === d;
    }
    function oe(D) {
      return g(D) === c;
    }
    function W(D) {
      return g(D) === t;
    }
    function ie(D) {
      return g(D) === o;
    }
    function Fe(D) {
      return g(D) === n;
    }
    function S(D) {
      return g(D) === u;
    }
    function le(D) {
      return g(D) === p;
    }
    Ne.ContextConsumer = x, Ne.ContextProvider = N, Ne.Element = C, Ne.ForwardRef = V, Ne.Fragment = A, Ne.Lazy = $, Ne.Memo = P, Ne.Portal = T, Ne.Profiler = k, Ne.StrictMode = U, Ne.Suspense = R, Ne.SuspenseList = L, Ne.isAsyncMode = H, Ne.isConcurrentMode = B, Ne.isContextConsumer = Q, Ne.isContextProvider = ee, Ne.isElement = re, Ne.isForwardRef = ne, Ne.isFragment = de, Ne.isLazy = te, Ne.isMemo = oe, Ne.isPortal = W, Ne.isProfiler = ie, Ne.isStrictMode = Fe, Ne.isSuspense = S, Ne.isSuspenseList = le, Ne.isValidElementType = v, Ne.typeOf = g;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? ii.exports = Ow() : ii.exports = Nw();
var Wc = ii.exports;
function wa(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ao(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || wa(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Cw(e, t, r) {
  ao(e, "mapStateToProps"), ao(t, "mapDispatchToProps"), ao(r, "mergeProps");
}
const _w = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Iw(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(w, E) {
    return l = w, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const w = e(l, u), E = !a(w, p);
    return p = w, E && (d = r(p, c, u)), d;
  }
  function y(w, E) {
    const v = !i(E, u), g = !o(w, l, E, u);
    return l = w, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(w, E) {
    return s ? y(w, E) : m(w, E);
  };
}
function Pw(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Fp(t, _w);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && Cw(a, s, l), Iw(a, s, l, e, i);
}
function Aw(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function $w(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function jp(e, t, r) {
  $w(e) || wa(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ai(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function jc(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function kp(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = jc(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = jc(s), s = o(i, a)), process.env.NODE_ENV !== "production" && jp(s, n, t), s;
    }, o;
  };
}
function Sa(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function Rw(e) {
  return e && typeof e == "object" ? ai((t) => (
    // @ts-ignore
    Aw(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    kp(e, "mapDispatchToProps")
  ) : Sa(e, "mapDispatchToProps") : ai((t) => ({
    dispatch: t
  }));
}
function Tw(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    kp(e, "mapStateToProps")
  ) : Sa(e, "mapStateToProps") : ai(() => ({}));
}
function Vw(e, t, r) {
  return er({}, r, e, t);
}
function Mw(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && jp(i, r, "mergeProps")), i;
    };
  };
}
function Lw(e) {
  return e ? typeof e == "function" ? Mw(e) : Sa(e, "mergeProps") : () => Vw;
}
function Bw() {
  const e = uw();
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
const kc = {
  notify() {
  },
  get: () => []
};
function Fw(e, t) {
  let r, n = kc, o = 0, i = !1;
  function a(b) {
    p();
    const f = n.subscribe(b);
    let y = !1;
    return () => {
      y || (y = !0, f(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = Bw());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = kc);
  }
  function d() {
    i || (i = !0, p());
  }
  function m() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => n
  };
  return h;
}
const Gw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", si = Gw ? _.useLayoutEffect : _.useEffect;
function zc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function so(e, t) {
  if (zc(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !zc(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const Ww = ["reactReduxForwardedRef"];
let zp = fw;
const jw = (e) => {
  zp = e;
}, kw = [null, null], zw = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function Hw(e, t, r) {
  si(() => e(...t), r);
}
function Uw(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function qw(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const m = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, f;
    try {
      b = n(h, o.current);
    } catch (y) {
      f = y, d = y;
    }
    f || (d = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, p());
  };
  return r.onStateChange = m, r.trySubscribe(), m(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function Yw(e, t) {
  return e === t;
}
let Hc = !1;
function Hp(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = Yw,
  areOwnPropsEqual: i = so,
  areStatePropsEqual: a = so,
  areMergedPropsEqual: s = so,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = pw
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Hc && (Hc = !0, wa('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = Tw(e), d = Rw(t), m = Lw(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Wc.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${zw(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, w = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(g) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = g, ie = Fp(g, Ww);
        return [g.context, W, ie];
      }, [g]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      Wc.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!g.store && !!g.store.getState && !!g.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? g.store : A.store, k = P ? A.getServerState : T.getState, U = _.useMemo(() => Pw(T.dispatch, w), [T]), [R, L] = _.useMemo(() => {
        if (!h) return kw;
        const W = Fw(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : er({}, A, {
        subscription: R
      }), [$, A, R]), j = _.useRef(), H = _.useRef(C), B = _.useRef(), Q = _.useRef(!1);
      _.useRef(!1);
      const ee = _.useRef(!1), re = _.useRef();
      si(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const ne = _.useMemo(() => () => B.current && C === H.current ? B.current : U(T.getState(), C), [T, C]), de = _.useMemo(() => (W) => R ? qw(
        h,
        T,
        R,
        // @ts-ignore
        U,
        H,
        j,
        Q,
        ee,
        B,
        L,
        W
      ) : () => {
      }, [R]);
      Hw(Uw, [H, j, Q, C, B, L]);
      let te;
      try {
        te = zp(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ne,
          k ? () => U(k(), C) : ne
        );
      } catch (W) {
        throw re.current && (W.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), W;
      }
      si(() => {
        re.current = void 0, B.current = void 0, j.current = te;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, er({}, te, {
          ref: N
        }))
      ), [N, b, te]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, er({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, Bc(g, b);
    }
    return Bc(v, b);
  };
}
jw(ya.useSyncExternalStore);
lw(kr);
function Kw(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Up(e, t) {
  var r = Ge(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && Kw(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return se(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function Xw(e, t) {
  return Up(function() {
    return e;
  }, t);
}
var Ye = Up, We = Xw, Jw = process.env.NODE_ENV === "production", co = "Invariant failed";
function Uc(e, t) {
  if (Jw)
    throw new Error(co);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(co, ": ").concat(r) : co;
  throw new Error(n);
}
var Kt = function(e) {
  var t = e.top, r = e.right, n = e.bottom, o = e.left, i = r - o, a = n - t, s = {
    top: t,
    right: r,
    bottom: n,
    left: o,
    width: i,
    height: a,
    x: o,
    y: t,
    center: {
      x: (r + o) / 2,
      y: (n + t) / 2
    }
  };
  return s;
}, qp = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, qc = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Zw = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, lo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Da = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? lo : r, o = e.border, i = o === void 0 ? lo : o, a = e.padding, s = a === void 0 ? lo : a, l = Kt(qp(t, n)), u = Kt(qc(t, i)), p = Kt(qc(u, s));
  return {
    marginBox: l,
    borderBox: Kt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, ut = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Uc(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Uc()), n;
}, Qw = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, eS = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = Zw(r, t);
  return Da({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, ci = function(e, t) {
  return t === void 0 && (t = Qw()), eS(e, t);
}, Yp = function(e, t) {
  var r = {
    top: ut(t.marginTop),
    right: ut(t.marginRight),
    bottom: ut(t.marginBottom),
    left: ut(t.marginLeft)
  }, n = {
    top: ut(t.paddingTop),
    right: ut(t.paddingRight),
    bottom: ut(t.paddingBottom),
    left: ut(t.paddingLeft)
  }, o = {
    top: ut(t.borderTopWidth),
    right: ut(t.borderRightWidth),
    bottom: ut(t.borderBottomWidth),
    left: ut(t.borderLeftWidth)
  };
  return Da({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Kp = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Yp(t, r);
}, Yc = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function tS(e, t) {
  return !!(e === t || Yc(e) && Yc(t));
}
function rS(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!tS(e[r], t[r]))
      return !1;
  return !0;
}
function Qe(e, t) {
  t === void 0 && (t = rS);
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
var nS = function(e) {
  var t = [], r = null, n = function() {
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return n.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, n;
};
const oS = process.env.NODE_ENV === "production", iS = /[ \t]{2,}/g, aS = /^[ \t]*/gm, Kc = (e) => e.replace(iS, " ").replace(aS, "").trim(), sS = (e) => Kc(`
  %c@hello-pangea/dnd

  %c${Kc(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), cS = (e) => [sS(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], lS = "__@hello-pangea/dnd-disable-dev-warnings";
function Xp(e, t) {
  oS || typeof window < "u" && window[lS] || console[e](...cS(t));
}
const It = Xp.bind(null, "warn"), li = Xp.bind(null, "error");
function uS() {
}
function dS(e, t) {
  return {
    ...e,
    ...t
  };
}
function pS(e, t, r) {
  const n = t.map((o) => {
    const i = dS(r, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    n.forEach((o) => {
      o();
    });
  };
}
const fS = process.env.NODE_ENV === "production", Xc = "Invariant failed";
class Tr extends Error {
}
Tr.prototype.toString = function() {
  return this.message;
};
function K(e, t) {
  throw fS ? new Tr(Xc) : new Tr(`${Xc}: ${t || ""}`);
}
class fA extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = uS, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && It(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Tr && (r.preventDefault(), process.env.NODE_ENV !== "production" && li(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = pS(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Tr) {
      process.env.NODE_ENV !== "production" && li(t.message), this.setState({});
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
const zt = {
  x: 0,
  y: 0
}, mS = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), gS = (e, t) => e.x === t.x && e.y === t.y, bS = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), hS = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var vS = (e, t) => {
  const r = Kt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const yS = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), ES = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, xS = (e, t) => t ? yS(e, t.scroll.diff.displacement) : e, wS = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, SS = (e, t) => t && t.shouldClipSubject ? vS(t.pageMarginBox, e) : Kt(e);
var DS = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = xS(e.marginBox, n), i = wS(o, r, t), a = SS(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
Qe((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
Qe((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const OS = Qe((e) => Object.values(e)), NS = Qe((e) => Object.values(e));
Qe((e, t) => NS(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function CS(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
Qe((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const _S = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, IS = {
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
Qe(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: hS(e.line, r)
  };
});
var an = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const PS = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), AS = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Oa = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Vr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, $S = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Vt = `${$S.outOfTheWay}s ${Oa.outOfTheWay}`, sn = {
  fluid: `opacity ${Vt}`,
  snap: `transform ${Vt}, opacity ${Vt}`,
  drop: (e) => {
    const t = `${e}s ${Oa.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Vt}`,
  placeholder: `height ${Vt}, width ${Vt}, margin ${Vt}`
}, Jc = (e) => gS(e, zt) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ui = {
  moveTo: Jc,
  drop: (e, t) => {
    const r = Jc(e);
    if (r)
      return t ? `${r} scale(${Vr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Jp = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = mS({
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
}, RS = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot find document.documentElement") : K()), e;
}, TS = () => {
  const e = RS();
  return Jp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
Qe((e) => OS(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Zp = "data-rfd", Zc = (() => {
  const e = `${Zp}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Qc = {
  contextId: `${Zp}-scroll-container-context-id`
}, VS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? sr : se;
var yr = VS;
function MS(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var LS = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Qp(e) {
  return e instanceof LS(e).HTMLElement;
}
function BS(e, t) {
  const r = `[${Zc.contextId}="${e}"]`, n = MS(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && It(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Zc.draggableId) === t);
  return o ? Qp(o) ? o : (process.env.NODE_ENV !== "production" && It("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && It(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var ef = I.createContext(null), FS = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot find document.body") : K()), e;
};
let GS = 0;
const tf = {
  separator: "::"
};
function WS(e, t = tf) {
  return Ye(() => `${e}${t.separator}${GS++}`, [t.separator, e]);
}
function jS(e, t = tf) {
  const r = I.useId();
  return Ye(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var rf = "useId" in I ? jS : WS, Na = I.createContext(null);
function nf(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ca(e, t) {
  nf(() => {
    se(() => {
      try {
        e();
      } catch (r) {
        li(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function kS(e) {
  const t = M(e);
  return se(() => {
    t.current = e;
  }), t;
}
function _a(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const el = {
  dragging: 5e3,
  dropAnimating: 4500
}, zS = (e, t) => t ? sn.drop(t.duration) : e ? sn.snap : sn.fluid, HS = (e, t) => {
  if (e)
    return t ? Vr.opacity.drop : Vr.opacity.combining;
}, US = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function qS(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = US(e), s = !!o, l = s ? ui.drop(r, i) : ui.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: zS(a, o),
    transform: l,
    opacity: HS(i, s),
    zIndex: s ? el.dropAnimating : el.dragging,
    pointerEvents: "none"
  };
}
function YS(e) {
  return {
    transform: ui.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function KS(e) {
  return e.type === "DRAGGING" ? qS(e) : YS(e);
}
function XS(e, t, r = zt) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Yp(o, n), a = ci(i, r), s = {
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
function JS(e) {
  const t = rf("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Ye(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = We((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot get dimension when no ref is set") : K()), XS(r, h, m);
  }, [r, o]), p = Ye(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  yr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), yr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var Ia = I.createContext(null);
function of(e) {
  e && Qp(e) || (process.env.NODE_ENV !== "production" ? K(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : K());
}
function ZS(e, t, r) {
  Ca(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? K(!1, "Draggable requires a draggableId") : K(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? K(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : K(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? K(!1, `${n(o)} requires an integer index prop`) : K(!1)), e.mapped.type !== "DRAGGING" && (of(r()), e.isEnabled && (BS(t, o) || (process.env.NODE_ENV !== "production" ? K(!1, `${n(o)} Unable to find drag handle`) : K(!1))));
  });
}
function QS(e) {
  nf(() => {
    const t = M(e);
    Ca(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? K(!1, "Draggable isClone prop value changed during component life") : K(!1));
    }, [e]);
  });
}
function Sn(e) {
  const t = ht(e);
  return t || (process.env.NODE_ENV !== "production" ? K(!1, "Could not find required context") : K()), t;
}
function eD(e) {
  e.preventDefault();
}
const tD = (e) => {
  const t = M(null), r = We((x = null) => {
    t.current = x;
  }, []), n = We(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Sn(Na), {
    type: s,
    droppableId: l
  } = Sn(Ia), u = Ye(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: m,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (ZS(e, o, n), QS(b), !b) {
    const x = Ye(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    JS(x);
  }
  const w = Ye(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: eD
  } : null, [o, i, c, d]), E = We((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : cr(y));
  }, [y, f]), v = Ye(() => {
    const x = KS(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: w
    };
  }, [o, w, c, f, E, r]), g = Ye(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, g));
};
var rD = tD, af = (e, t) => e === t, sf = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const nD = (e) => e.combine ? e.combine.draggableId : null, oD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function iD() {
  const e = Qe((n, o) => ({
    x: n,
    y: o
  })), t = Qe((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = Qe((n, o, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: o,
      offset: n,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(o, a, s, l, null)
    }
  }));
  return (n, o) => {
    if (_a(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = an(n.impact), l = oD(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = sf(l), c = nD(l), d = {
        duration: n.dropDuration,
        curve: Oa.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? Vr.opacity.drop : null,
        scale: c ? Vr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: p,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, p, c, d)
        }
      };
    }
    return null;
  };
}
function cf(e = null) {
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
const aD = {
  mapped: {
    type: "SECONDARY",
    offset: zt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: cf(null)
  }
};
function sD() {
  const e = Qe((i, a) => ({
    x: i,
    y: a
  })), t = Qe(cf), r = Qe((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(zt, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = CS(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = bS(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (_a(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const cD = () => {
  const e = iD(), t = sD();
  return (r, n) => e(r, n) || t(r, n) || aD;
}, lD = {
  dropAnimationFinished: AS
}, uD = Hp(cD, lD, null, {
  context: ef,
  areStatePropsEqual: af
})(rD);
var dD = uD;
function pD(e) {
  return Sn(Ia).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(dD, e);
}
const Pa = (e) => (t) => e === t, fD = Pa("scroll"), mD = Pa("auto"), gD = Pa("visible"), tl = (e, t) => t(e.overflowX) || t(e.overflowY), bD = (e, t) => t(e.overflowX) && t(e.overflowY), lf = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return tl(r, fD) || tl(r, mD);
}, hD = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = FS(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, K()), !lf(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return bD(n, gD) || process.env.NODE_ENV !== "production" && It(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Aa = (e) => e == null ? null : e === document.body ? hD() ? e : null : e === document.documentElement ? null : lf(e) ? e : Aa(e.parentElement);
var vD = (e) => {
  !e || !Aa(e.parentElement) || process.env.NODE_ENV !== "production" && It(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, di = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const uf = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : uf(e.parentElement) : !1;
var yD = (e) => {
  const t = Aa(e), r = uf(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, ED = ({
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
      scrollSize: c,
      client: d
    } = s, m = Jp({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: m,
        diff: {
          value: zt,
          displacement: zt
        }
      }
    };
  })(), u = o === "vertical" ? _S : IS, p = DS({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: p
  };
};
const xD = (e, t) => {
  const r = Kp(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = qp({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Da({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var wD = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = xD(e, l), p = ci(u, n), c = (() => {
    if (!l)
      return null;
    const d = Kp(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: ci(d, n),
      scroll: di(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return ED({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: c
  });
};
const SD = {
  passive: !1
}, DD = {
  passive: !0
};
var rl = (e) => e.shouldPublishImmediately ? SD : DD;
const Qr = (e) => e && e.env.closestScrollable || null;
function OD(e) {
  const t = M(null), r = Sn(Na), n = rf("droppable"), {
    registry: o,
    marshal: i
  } = r, a = kS(e), s = Ye(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = Ye(() => Qe((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? K(!1, "Can only update scroll when dragging") : K());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = We(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? zt : di(v.env.closestScrollable);
  }, []), c = We(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = Ye(() => nS(c), [c]), m = We(() => {
    const v = t.current, g = Qr(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? K(!1, "Could not find scroll options while scrolling") : K()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = We((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? K(!1, "Cannot collect a droppable while a drag is occurring") : K());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot collect without a droppable ref") : K());
    const C = yD(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = V;
    const A = wD({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Qc.contextId, r.contextId), $.addEventListener("scroll", m, rl(V.scrollOptions)), process.env.NODE_ENV !== "production" && vD($)), A;
  }, [r.contextId, s, m, a]), b = We(() => {
    const v = t.current, g = Qr(v);
    return v && g || (process.env.NODE_ENV !== "production" ? K(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : K()), di(g);
  }, []), f = We(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot stop drag when no active drag") : K());
    const g = Qr(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(Qc.contextId), g.removeEventListener("scroll", m, rl(v.scrollOptions)));
  }, [m, d]), y = We((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot scroll when there is no drag") : K());
    const x = Qr(g);
    x || (process.env.NODE_ENV !== "production" ? K(!1, "Cannot scroll a droppable with no closest scrollable") : K()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = Ye(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = Ye(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  yr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && It("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), yr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), yr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function uo() {
}
const ND = {
  width: 0,
  height: 0,
  margin: ES
}, CD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? ND : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, _D = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = CD({
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
    transition: r !== "none" ? sn.placeholder : null
  };
}, ID = (e) => {
  const t = M(null), r = We(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ge(e.animate === "open");
  se(() => s ? n !== "open" ? (r(), l(!1), uo) : t.current ? uo : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : uo, [n, s, r]);
  const u = We((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = _D({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var PD = I.memo(ID);
function po(e) {
  return typeof e == "boolean";
}
function fo(e, t) {
  t.forEach((r) => r(e));
}
const AD = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? K(!1, "A Droppable requires a droppableId prop") : K()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? K(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : K());
}, function({
  props: e
}) {
  po(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? K(!1, "isDropDisabled must be a boolean") : K()), po(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? K(!1, "isCombineEnabled must be a boolean") : K()), po(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? K(!1, "ignoreContainerClipping must be a boolean") : K());
}, function({
  getDroppableRef: e
}) {
  of(e());
}], $D = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && It(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], RD = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? K(!1, "Must provide a clone render function (renderClone) for virtual lists") : K());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? K(!1, "Expected virtual list to not have a placeholder") : K());
}];
function TD(e) {
  Ca(() => {
    fo(e, AD), e.props.mode === "standard" && fo(e, $D), e.props.mode === "virtual" && fo(e, RD);
  });
}
class VD extends I.PureComponent {
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
const MD = (e) => {
  const t = ht(Na);
  t || (process.env.NODE_ENV !== "production" ? K(!1, "Could not find app context") : K());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: m,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, w = We(() => o.current, []), E = We((P = null) => {
    o.current = P;
  }, []), v = We(() => i.current, []), g = We((P = null) => {
    i.current = P;
  }, []);
  TD({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = We(() => {
    n() && f({
      maxScroll: TS()
    });
  }, [n, f]);
  OD({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = Ye(() => I.createElement(VD, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(PD, {
    placeholder: T,
    onClose: P,
    innerRef: g,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = Ye(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = Ye(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: V
  }), [s, V, l]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, k = I.createElement(pD, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (U, R) => T(U, R, P));
    return jr.createPortal(k, y());
  }
  return I.createElement(Ia.Provider, {
    value: A
  }, a(C, h), $());
};
var LD = MD;
function BD() {
  return document.body || (process.env.NODE_ENV !== "production" ? K(!1, "document.body is not ready") : K()), document.body;
}
const nl = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: BD
}, df = (e) => {
  let t = {
    ...e
  }, r;
  for (r in nl)
    e[r] === void 0 && (t = {
      ...t,
      [r]: nl[r]
    });
  return t;
}, mo = (e, t) => e === t.droppable.type, ol = (e, t) => t.draggables[e.draggable.id], FD = () => {
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
  }, r = Qe((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = Qe((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, m = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: p,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: c,
      useClone: null
    };
  });
  return (o, i) => {
    const a = df(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (_a(o)) {
      const c = o.critical;
      if (!mo(l, c))
        return t;
      const d = ol(c, o.dimensions), m = an(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!mo(l, c.critical))
        return t;
      const d = ol(c.critical, o.dimensions);
      return n(s, u, sf(c.result) === s, an(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!mo(l, c.critical))
        return t;
      const d = an(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, GD = {
  updateViewportMaxScroll: PS
};
Hp(FD, GD, (e, t, r) => ({
  ...df(r),
  ...e,
  ...t
}), {
  context: ef,
  areStatePropsEqual: af
})(LD);
var il;
(function(e) {
  e.event = "event", e.props = "prop";
})(il || (il = {}));
var al = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + al(), "" + al();
function WD(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pi = { exports: {} }, go = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sl;
function jD() {
  if (sl) return go;
  sl = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var m = d(), h = n({ inst: { value: m, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = m, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, m, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(m), m;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var m = d();
      return !r(c, m);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return go.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, go;
}
var cl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll;
function kD() {
  return ll || (ll = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m, h) {
      return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
    }
    function t(m, h) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var f = h();
        i(b, f) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      f = a({
        inst: { value: b, getSnapshot: h }
      });
      var y = f[0].inst, w = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && w({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && w({ inst: y }), m(function() {
            r(y) && w({ inst: y });
          });
        },
        [m]
      ), u(b), b;
    }
    function r(m) {
      var h = m.getSnapshot;
      m = m.value;
      try {
        var b = h();
        return !i(m, b);
      } catch {
        return !0;
      }
    }
    function n(m, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    cl.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), cl;
}
process.env.NODE_ENV === "production" ? pi.exports = jD() : pi.exports = kD();
var $a = pi.exports, bo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul;
function zD() {
  if (ul) return bo;
  ul = 1;
  var e = I, t = $a;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return bo.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
              var N = b.value;
              if (m(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var w = !1, E, v, g = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          g === null ? void 0 : function() {
            return y(g());
          }
        ];
      },
      [p, c, d, m]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, bo;
}
var dl = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pl;
function HD() {
  return pl || (pl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = $a, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    dl.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
                var N = b.value;
                if (m(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var w = !1, E, v, g = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            g === null ? void 0 : function() {
              return y(g());
            }
          ];
        },
        [p, c, d, m]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), dl;
}
process.env.NODE_ENV === "production" ? zD() : HD();
function UD(e) {
  e();
}
let pf = UD;
const qD = (e) => pf = e, YD = () => pf, fl = Symbol.for("react-redux-context"), ml = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function KD() {
  var e;
  if (!_.createContext) return {};
  const t = (e = ml[fl]) != null ? e : ml[fl] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const XD = /* @__PURE__ */ KD(), JD = () => {
  throw new Error("uSES not initialized!");
};
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tr.apply(null, arguments);
}
function ff(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var fi = { exports: {} }, ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gl;
function ZD() {
  if (gl) return ye;
  gl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
        case t:
          switch (g = g.type, g) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case p:
                case h:
                case m:
                case a:
                  return g;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return ye.AsyncMode = l, ye.ConcurrentMode = u, ye.ContextConsumer = s, ye.ContextProvider = a, ye.Element = t, ye.ForwardRef = p, ye.Fragment = n, ye.Lazy = h, ye.Memo = m, ye.Portal = r, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = c, ye.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, ye.isConcurrentMode = v, ye.isContextConsumer = function(g) {
    return E(g) === s;
  }, ye.isContextProvider = function(g) {
    return E(g) === a;
  }, ye.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ye.isForwardRef = function(g) {
    return E(g) === p;
  }, ye.isFragment = function(g) {
    return E(g) === n;
  }, ye.isLazy = function(g) {
    return E(g) === h;
  }, ye.isMemo = function(g) {
    return E(g) === m;
  }, ye.isPortal = function(g) {
    return E(g) === r;
  }, ye.isProfiler = function(g) {
    return E(g) === i;
  }, ye.isStrictMode = function(g) {
    return E(g) === o;
  }, ye.isSuspense = function(g) {
    return E(g) === c;
  }, ye.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, ye.typeOf = E, ye;
}
var Ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl;
function QD() {
  return bl || (bl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === c || S === d || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === m || S.$$typeof === a || S.$$typeof === s || S.$$typeof === p || S.$$typeof === f || S.$$typeof === y || S.$$typeof === w || S.$$typeof === b);
    }
    function v(S) {
      if (typeof S == "object" && S !== null) {
        var le = S.$$typeof;
        switch (le) {
          case t:
            var D = S.type;
            switch (D) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return D;
              default:
                var ue = D && D.$$typeof;
                switch (ue) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return ue;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = m, k = r, U = i, R = o, L = c, F = !1;
    function j(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(S) || v(S) === l;
    }
    function H(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Q(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function re(S) {
      return v(S) === p;
    }
    function ne(S) {
      return v(S) === n;
    }
    function de(S) {
      return v(S) === h;
    }
    function te(S) {
      return v(S) === m;
    }
    function oe(S) {
      return v(S) === r;
    }
    function W(S) {
      return v(S) === i;
    }
    function ie(S) {
      return v(S) === o;
    }
    function Fe(S) {
      return v(S) === c;
    }
    Ce.AsyncMode = g, Ce.ConcurrentMode = x, Ce.ContextConsumer = N, Ce.ContextProvider = C, Ce.Element = V, Ce.ForwardRef = A, Ce.Fragment = $, Ce.Lazy = P, Ce.Memo = T, Ce.Portal = k, Ce.Profiler = U, Ce.StrictMode = R, Ce.Suspense = L, Ce.isAsyncMode = j, Ce.isConcurrentMode = H, Ce.isContextConsumer = B, Ce.isContextProvider = Q, Ce.isElement = ee, Ce.isForwardRef = re, Ce.isFragment = ne, Ce.isLazy = de, Ce.isMemo = te, Ce.isPortal = oe, Ce.isProfiler = W, Ce.isStrictMode = ie, Ce.isSuspense = Fe, Ce.isValidElementType = E, Ce.typeOf = v;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? fi.exports = ZD() : fi.exports = QD();
var eO = fi.exports, Ra = eO, tO = {
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
}, rO = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, nO = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, mf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ta = {};
Ta[Ra.ForwardRef] = nO;
Ta[Ra.Memo] = mf;
function hl(e) {
  return Ra.isMemo(e) ? mf : Ta[e.$$typeof] || tO;
}
var oO = Object.defineProperty, iO = Object.getOwnPropertyNames, vl = Object.getOwnPropertySymbols, aO = Object.getOwnPropertyDescriptor, sO = Object.getPrototypeOf, yl = Object.prototype;
function gf(e, t, r) {
  if (typeof t != "string") {
    if (yl) {
      var n = sO(t);
      n && n !== yl && gf(e, n, r);
    }
    var o = iO(t);
    vl && (o = o.concat(vl(t)));
    for (var i = hl(e), a = hl(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!rO[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = aO(t, l);
        try {
          oO(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var cO = gf;
const El = /* @__PURE__ */ WD(cO);
var mi = { exports: {} }, Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xl;
function lO() {
  if (xl) return Ee;
  xl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case a:
                case l:
                case d:
                case c:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ee.ContextConsumer = a, Ee.ContextProvider = i, Ee.Element = e, Ee.ForwardRef = l, Ee.Fragment = r, Ee.Lazy = d, Ee.Memo = c, Ee.Portal = t, Ee.Profiler = o, Ee.StrictMode = n, Ee.Suspense = u, Ee.SuspenseList = p, Ee.isAsyncMode = function() {
    return !1;
  }, Ee.isConcurrentMode = function() {
    return !1;
  }, Ee.isContextConsumer = function(f) {
    return b(f) === a;
  }, Ee.isContextProvider = function(f) {
    return b(f) === i;
  }, Ee.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Ee.isForwardRef = function(f) {
    return b(f) === l;
  }, Ee.isFragment = function(f) {
    return b(f) === r;
  }, Ee.isLazy = function(f) {
    return b(f) === d;
  }, Ee.isMemo = function(f) {
    return b(f) === c;
  }, Ee.isPortal = function(f) {
    return b(f) === t;
  }, Ee.isProfiler = function(f) {
    return b(f) === o;
  }, Ee.isStrictMode = function(f) {
    return b(f) === n;
  }, Ee.isSuspense = function(f) {
    return b(f) === u;
  }, Ee.isSuspenseList = function(f) {
    return b(f) === p;
  }, Ee.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, Ee.typeOf = b, Ee;
}
var _e = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl;
function uO() {
  return wl || (wl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || w || D === n || D === u || D === p || y || D === m || h || b || f || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === c || D.$$typeof === i || D.$$typeof === a || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === E || D.getModuleId !== void 0));
    }
    function g(D) {
      if (typeof D == "object" && D !== null) {
        var ue = D.$$typeof;
        switch (ue) {
          case e:
            var Te = D.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var G = Te && Te.$$typeof;
                switch (G) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return G;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, U = n, R = u, L = p, F = !1, j = !1;
    function H(D) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(D) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(D) {
      return g(D) === a;
    }
    function ee(D) {
      return g(D) === i;
    }
    function re(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function ne(D) {
      return g(D) === l;
    }
    function de(D) {
      return g(D) === r;
    }
    function te(D) {
      return g(D) === d;
    }
    function oe(D) {
      return g(D) === c;
    }
    function W(D) {
      return g(D) === t;
    }
    function ie(D) {
      return g(D) === o;
    }
    function Fe(D) {
      return g(D) === n;
    }
    function S(D) {
      return g(D) === u;
    }
    function le(D) {
      return g(D) === p;
    }
    _e.ContextConsumer = x, _e.ContextProvider = N, _e.Element = C, _e.ForwardRef = V, _e.Fragment = A, _e.Lazy = $, _e.Memo = P, _e.Portal = T, _e.Profiler = k, _e.StrictMode = U, _e.Suspense = R, _e.SuspenseList = L, _e.isAsyncMode = H, _e.isConcurrentMode = B, _e.isContextConsumer = Q, _e.isContextProvider = ee, _e.isElement = re, _e.isForwardRef = ne, _e.isFragment = de, _e.isLazy = te, _e.isMemo = oe, _e.isPortal = W, _e.isProfiler = ie, _e.isStrictMode = Fe, _e.isSuspense = S, _e.isSuspenseList = le, _e.isValidElementType = v, _e.typeOf = g;
  }()), _e;
}
process.env.NODE_ENV === "production" ? mi.exports = lO() : mi.exports = uO();
var Sl = mi.exports;
function Va(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ho(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Va(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function dO(e, t, r) {
  ho(e, "mapStateToProps"), ho(t, "mapDispatchToProps"), ho(r, "mergeProps");
}
const pO = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function fO(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(w, E) {
    return l = w, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const w = e(l, u), E = !a(w, p);
    return p = w, E && (d = r(p, c, u)), d;
  }
  function y(w, E) {
    const v = !i(E, u), g = !o(w, l, E, u);
    return l = w, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(w, E) {
    return s ? y(w, E) : m(w, E);
  };
}
function mO(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = ff(t, pO);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && dO(a, s, l), fO(a, s, l, e, i);
}
function gO(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function bO(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function bf(e, t, r) {
  bO(e) || Va(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function gi(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Dl(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function hf(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = Dl(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = Dl(s), s = o(i, a)), process.env.NODE_ENV !== "production" && bf(s, n, t), s;
    }, o;
  };
}
function Ma(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function hO(e) {
  return e && typeof e == "object" ? gi((t) => (
    // @ts-ignore
    gO(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    hf(e, "mapDispatchToProps")
  ) : Ma(e, "mapDispatchToProps") : gi((t) => ({
    dispatch: t
  }));
}
function vO(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    hf(e, "mapStateToProps")
  ) : Ma(e, "mapStateToProps") : gi(() => ({}));
}
function yO(e, t, r) {
  return tr({}, r, e, t);
}
function EO(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && bf(i, r, "mergeProps")), i;
    };
  };
}
function xO(e) {
  return e ? typeof e == "function" ? EO(e) : Ma(e, "mergeProps") : () => yO;
}
function wO() {
  const e = YD();
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
const Ol = {
  notify() {
  },
  get: () => []
};
function SO(e, t) {
  let r, n = Ol, o = 0, i = !1;
  function a(b) {
    p();
    const f = n.subscribe(b);
    let y = !1;
    return () => {
      y || (y = !0, f(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = wO());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = Ol);
  }
  function d() {
    i || (i = !0, p());
  }
  function m() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => n
  };
  return h;
}
const DO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bi = DO ? _.useLayoutEffect : _.useEffect;
function Nl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vo(e, t) {
  if (Nl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Nl(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const OO = ["reactReduxForwardedRef"];
let vf = JD;
const NO = (e) => {
  vf = e;
}, CO = [null, null], _O = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function IO(e, t, r) {
  bi(() => e(...t), r);
}
function PO(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function AO(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const m = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, f;
    try {
      b = n(h, o.current);
    } catch (y) {
      f = y, d = y;
    }
    f || (d = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, p());
  };
  return r.onStateChange = m, r.trySubscribe(), m(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function $O(e, t) {
  return e === t;
}
let Cl = !1;
function yf(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = $O,
  areOwnPropsEqual: i = vo,
  areStatePropsEqual: a = vo,
  areMergedPropsEqual: s = vo,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = XD
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Cl && (Cl = !0, Va('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = vO(e), d = hO(t), m = xO(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Sl.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${_O(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, w = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(g) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = g, ie = ff(g, OO);
        return [g.context, W, ie];
      }, [g]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      Sl.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!g.store && !!g.store.getState && !!g.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? g.store : A.store, k = P ? A.getServerState : T.getState, U = _.useMemo(() => mO(T.dispatch, w), [T]), [R, L] = _.useMemo(() => {
        if (!h) return CO;
        const W = SO(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : tr({}, A, {
        subscription: R
      }), [$, A, R]), j = _.useRef(), H = _.useRef(C), B = _.useRef(), Q = _.useRef(!1);
      _.useRef(!1);
      const ee = _.useRef(!1), re = _.useRef();
      bi(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const ne = _.useMemo(() => () => B.current && C === H.current ? B.current : U(T.getState(), C), [T, C]), de = _.useMemo(() => (W) => R ? AO(
        h,
        T,
        R,
        // @ts-ignore
        U,
        H,
        j,
        Q,
        ee,
        B,
        L,
        W
      ) : () => {
      }, [R]);
      IO(PO, [H, j, Q, C, B, L]);
      let te;
      try {
        te = vf(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ne,
          k ? () => U(k(), C) : ne
        );
      } catch (W) {
        throw re.current && (W.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), W;
      }
      bi(() => {
        re.current = void 0, B.current = void 0, j.current = te;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, tr({}, te, {
          ref: N
        }))
      ), [N, b, te]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, tr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, El(g, b);
    }
    return El(v, b);
  };
}
NO($a.useSyncExternalStore);
qD(kr);
function RO(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ef(e, t) {
  var r = Ge(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && RO(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return se(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function TO(e, t) {
  return Ef(function() {
    return e;
  }, t);
}
var Ke = Ef, je = TO, VO = process.env.NODE_ENV === "production", yo = "Invariant failed";
function _l(e, t) {
  if (VO)
    throw new Error(yo);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(yo, ": ").concat(r) : yo;
  throw new Error(n);
}
var Xt = function(e) {
  var t = e.top, r = e.right, n = e.bottom, o = e.left, i = r - o, a = n - t, s = {
    top: t,
    right: r,
    bottom: n,
    left: o,
    width: i,
    height: a,
    x: o,
    y: t,
    center: {
      x: (r + o) / 2,
      y: (n + t) / 2
    }
  };
  return s;
}, xf = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Il = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, MO = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Eo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, La = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Eo : r, o = e.border, i = o === void 0 ? Eo : o, a = e.padding, s = a === void 0 ? Eo : a, l = Xt(xf(t, n)), u = Xt(Il(t, i)), p = Xt(Il(u, s));
  return {
    marginBox: l,
    borderBox: Xt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, dt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? _l(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : _l()), n;
}, LO = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, BO = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = MO(r, t);
  return La({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, hi = function(e, t) {
  return t === void 0 && (t = LO()), BO(e, t);
}, wf = function(e, t) {
  var r = {
    top: dt(t.marginTop),
    right: dt(t.marginRight),
    bottom: dt(t.marginBottom),
    left: dt(t.marginLeft)
  }, n = {
    top: dt(t.paddingTop),
    right: dt(t.paddingRight),
    bottom: dt(t.paddingBottom),
    left: dt(t.paddingLeft)
  }, o = {
    top: dt(t.borderTopWidth),
    right: dt(t.borderRightWidth),
    bottom: dt(t.borderBottomWidth),
    left: dt(t.borderLeftWidth)
  };
  return La({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Sf = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return wf(t, r);
}, Pl = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function FO(e, t) {
  return !!(e === t || Pl(e) && Pl(t));
}
function GO(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!FO(e[r], t[r]))
      return !1;
  return !0;
}
function et(e, t) {
  t === void 0 && (t = GO);
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
var WO = function(e) {
  var t = [], r = null, n = function() {
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return n.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, n;
};
const jO = process.env.NODE_ENV === "production", kO = /[ \t]{2,}/g, zO = /^[ \t]*/gm, Al = (e) => e.replace(kO, " ").replace(zO, "").trim(), HO = (e) => Al(`
  %c@hello-pangea/dnd

  %c${Al(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), UO = (e) => [HO(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], qO = "__@hello-pangea/dnd-disable-dev-warnings";
function Df(e, t) {
  jO || typeof window < "u" && window[qO] || console[e](...UO(t));
}
const Pt = Df.bind(null, "warn"), vi = Df.bind(null, "error");
function YO() {
}
function KO(e, t) {
  return {
    ...e,
    ...t
  };
}
function XO(e, t, r) {
  const n = t.map((o) => {
    const i = KO(r, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    n.forEach((o) => {
      o();
    });
  };
}
const JO = process.env.NODE_ENV === "production", $l = "Invariant failed";
class Mr extends Error {
}
Mr.prototype.toString = function() {
  return this.message;
};
function X(e, t) {
  throw JO ? new Mr($l) : new Mr(`${$l}: ${t || ""}`);
}
class mA extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = YO, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && Pt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Mr && (r.preventDefault(), process.env.NODE_ENV !== "production" && vi(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = XO(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Mr) {
      process.env.NODE_ENV !== "production" && vi(t.message), this.setState({});
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
const Ht = {
  x: 0,
  y: 0
}, ZO = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), QO = (e, t) => e.x === t.x && e.y === t.y, eN = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), tN = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var rN = (e, t) => {
  const r = Xt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const nN = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), oN = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, iN = (e, t) => t ? nN(e, t.scroll.diff.displacement) : e, aN = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, sN = (e, t) => t && t.shouldClipSubject ? rN(t.pageMarginBox, e) : Xt(e);
var cN = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = iN(e.marginBox, n), i = aN(o, r, t), a = sN(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
et((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
et((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const lN = et((e) => Object.values(e)), uN = et((e) => Object.values(e));
et((e, t) => uN(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function dN(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
et((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const pN = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, fN = {
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
et(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: tN(e.line, r)
  };
});
var cn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const mN = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), gN = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Ba = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Lr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, bN = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Mt = `${bN.outOfTheWay}s ${Ba.outOfTheWay}`, ln = {
  fluid: `opacity ${Mt}`,
  snap: `transform ${Mt}, opacity ${Mt}`,
  drop: (e) => {
    const t = `${e}s ${Ba.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Mt}`,
  placeholder: `height ${Mt}, width ${Mt}, margin ${Mt}`
}, Rl = (e) => QO(e, Ht) ? void 0 : `translate(${e.x}px, ${e.y}px)`, yi = {
  moveTo: Rl,
  drop: (e, t) => {
    const r = Rl(e);
    if (r)
      return t ? `${r} scale(${Lr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Of = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = ZO({
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
}, hN = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot find document.documentElement") : X()), e;
}, vN = () => {
  const e = hN();
  return Of({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
et((e) => lN(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Nf = "data-rfd", Tl = (() => {
  const e = `${Nf}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Vl = {
  contextId: `${Nf}-scroll-container-context-id`
}, yN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? sr : se;
var Er = yN;
function EN(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var xN = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Cf(e) {
  return e instanceof xN(e).HTMLElement;
}
function wN(e, t) {
  const r = `[${Tl.contextId}="${e}"]`, n = EN(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && Pt(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Tl.draggableId) === t);
  return o ? Cf(o) ? o : (process.env.NODE_ENV !== "production" && Pt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Pt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var _f = I.createContext(null), SN = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot find document.body") : X()), e;
};
let DN = 0;
const If = {
  separator: "::"
};
function ON(e, t = If) {
  return Ke(() => `${e}${t.separator}${DN++}`, [t.separator, e]);
}
function NN(e, t = If) {
  const r = I.useId();
  return Ke(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Pf = "useId" in I ? NN : ON, Fa = I.createContext(null);
function Af(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Ga(e, t) {
  Af(() => {
    se(() => {
      try {
        e();
      } catch (r) {
        vi(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function CN(e) {
  const t = M(e);
  return se(() => {
    t.current = e;
  }), t;
}
function Wa(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Ml = {
  dragging: 5e3,
  dropAnimating: 4500
}, _N = (e, t) => t ? ln.drop(t.duration) : e ? ln.snap : ln.fluid, IN = (e, t) => {
  if (e)
    return t ? Lr.opacity.drop : Lr.opacity.combining;
}, PN = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function AN(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = PN(e), s = !!o, l = s ? yi.drop(r, i) : yi.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: _N(a, o),
    transform: l,
    opacity: IN(i, s),
    zIndex: s ? Ml.dropAnimating : Ml.dragging,
    pointerEvents: "none"
  };
}
function $N(e) {
  return {
    transform: yi.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function RN(e) {
  return e.type === "DRAGGING" ? AN(e) : $N(e);
}
function TN(e, t, r = Ht) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = wf(o, n), a = hi(i, r), s = {
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
function VN(e) {
  const t = Pf("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Ke(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = je((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot get dimension when no ref is set") : X()), TN(r, h, m);
  }, [r, o]), p = Ke(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  Er(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), Er(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ja = I.createContext(null);
function $f(e) {
  e && Cf(e) || (process.env.NODE_ENV !== "production" ? X(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : X());
}
function MN(e, t, r) {
  Ga(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? X(!1, "Draggable requires a draggableId") : X(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? X(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : X(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? X(!1, `${n(o)} requires an integer index prop`) : X(!1)), e.mapped.type !== "DRAGGING" && ($f(r()), e.isEnabled && (wN(t, o) || (process.env.NODE_ENV !== "production" ? X(!1, `${n(o)} Unable to find drag handle`) : X(!1))));
  });
}
function LN(e) {
  Af(() => {
    const t = M(e);
    Ga(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? X(!1, "Draggable isClone prop value changed during component life") : X(!1));
    }, [e]);
  });
}
function Dn(e) {
  const t = ht(e);
  return t || (process.env.NODE_ENV !== "production" ? X(!1, "Could not find required context") : X()), t;
}
function BN(e) {
  e.preventDefault();
}
const FN = (e) => {
  const t = M(null), r = je((x = null) => {
    t.current = x;
  }, []), n = je(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Dn(Fa), {
    type: s,
    droppableId: l
  } = Dn(ja), u = Ke(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: m,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (MN(e, o, n), LN(b), !b) {
    const x = Ke(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    VN(x);
  }
  const w = Ke(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: BN
  } : null, [o, i, c, d]), E = je((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : cr(y));
  }, [y, f]), v = Ke(() => {
    const x = RN(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: w
    };
  }, [o, w, c, f, E, r]), g = Ke(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, g));
};
var GN = FN, Rf = (e, t) => e === t, Tf = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const WN = (e) => e.combine ? e.combine.draggableId : null, jN = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function kN() {
  const e = et((n, o) => ({
    x: n,
    y: o
  })), t = et((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = et((n, o, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: o,
      offset: n,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(o, a, s, l, null)
    }
  }));
  return (n, o) => {
    if (Wa(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = cn(n.impact), l = jN(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Tf(l), c = WN(l), d = {
        duration: n.dropDuration,
        curve: Ba.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? Lr.opacity.drop : null,
        scale: c ? Lr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: p,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, p, c, d)
        }
      };
    }
    return null;
  };
}
function Vf(e = null) {
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
const zN = {
  mapped: {
    type: "SECONDARY",
    offset: Ht,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Vf(null)
  }
};
function HN() {
  const e = et((i, a) => ({
    x: i,
    y: a
  })), t = et(Vf), r = et((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(Ht, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = dN(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = eN(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Wa(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const UN = () => {
  const e = kN(), t = HN();
  return (r, n) => e(r, n) || t(r, n) || zN;
}, qN = {
  dropAnimationFinished: gN
}, YN = yf(UN, qN, null, {
  context: _f,
  areStatePropsEqual: Rf
})(GN);
var KN = YN;
function XN(e) {
  return Dn(ja).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(KN, e);
}
const ka = (e) => (t) => e === t, JN = ka("scroll"), ZN = ka("auto"), QN = ka("visible"), Ll = (e, t) => t(e.overflowX) || t(e.overflowY), eC = (e, t) => t(e.overflowX) && t(e.overflowY), Mf = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Ll(r, JN) || Ll(r, ZN);
}, tC = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = SN(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, X()), !Mf(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return eC(n, QN) || process.env.NODE_ENV !== "production" && Pt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, za = (e) => e == null ? null : e === document.body ? tC() ? e : null : e === document.documentElement ? null : Mf(e) ? e : za(e.parentElement);
var rC = (e) => {
  !e || !za(e.parentElement) || process.env.NODE_ENV !== "production" && Pt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ei = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Lf = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Lf(e.parentElement) : !1;
var nC = (e) => {
  const t = za(e), r = Lf(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, oC = ({
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
      scrollSize: c,
      client: d
    } = s, m = Of({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: m,
        diff: {
          value: Ht,
          displacement: Ht
        }
      }
    };
  })(), u = o === "vertical" ? pN : fN, p = cN({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: p
  };
};
const iC = (e, t) => {
  const r = Sf(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = xf({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return La({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var aC = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = iC(e, l), p = hi(u, n), c = (() => {
    if (!l)
      return null;
    const d = Sf(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: hi(d, n),
      scroll: Ei(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return oC({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: c
  });
};
const sC = {
  passive: !1
}, cC = {
  passive: !0
};
var Bl = (e) => e.shouldPublishImmediately ? sC : cC;
const en = (e) => e && e.env.closestScrollable || null;
function lC(e) {
  const t = M(null), r = Dn(Fa), n = Pf("droppable"), {
    registry: o,
    marshal: i
  } = r, a = CN(e), s = Ke(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = Ke(() => et((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? X(!1, "Can only update scroll when dragging") : X());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = je(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? Ht : Ei(v.env.closestScrollable);
  }, []), c = je(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = Ke(() => WO(c), [c]), m = je(() => {
    const v = t.current, g = en(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? X(!1, "Could not find scroll options while scrolling") : X()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = je((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? X(!1, "Cannot collect a droppable while a drag is occurring") : X());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot collect without a droppable ref") : X());
    const C = nC(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = V;
    const A = aC({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Vl.contextId, r.contextId), $.addEventListener("scroll", m, Bl(V.scrollOptions)), process.env.NODE_ENV !== "production" && rC($)), A;
  }, [r.contextId, s, m, a]), b = je(() => {
    const v = t.current, g = en(v);
    return v && g || (process.env.NODE_ENV !== "production" ? X(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : X()), Ei(g);
  }, []), f = je(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot stop drag when no active drag") : X());
    const g = en(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(Vl.contextId), g.removeEventListener("scroll", m, Bl(v.scrollOptions)));
  }, [m, d]), y = je((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot scroll when there is no drag") : X());
    const x = en(g);
    x || (process.env.NODE_ENV !== "production" ? X(!1, "Cannot scroll a droppable with no closest scrollable") : X()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = Ke(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = Ke(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  Er(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Pt("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), Er(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Er(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function xo() {
}
const uC = {
  width: 0,
  height: 0,
  margin: oN
}, dC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? uC : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, pC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = dC({
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
    transition: r !== "none" ? ln.placeholder : null
  };
}, fC = (e) => {
  const t = M(null), r = je(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ge(e.animate === "open");
  se(() => s ? n !== "open" ? (r(), l(!1), xo) : t.current ? xo : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : xo, [n, s, r]);
  const u = je((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = pC({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var mC = I.memo(fC);
function wo(e) {
  return typeof e == "boolean";
}
function So(e, t) {
  t.forEach((r) => r(e));
}
const gC = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? X(!1, "A Droppable requires a droppableId prop") : X()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? X(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : X());
}, function({
  props: e
}) {
  wo(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? X(!1, "isDropDisabled must be a boolean") : X()), wo(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? X(!1, "isCombineEnabled must be a boolean") : X()), wo(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? X(!1, "ignoreContainerClipping must be a boolean") : X());
}, function({
  getDroppableRef: e
}) {
  $f(e());
}], bC = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Pt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], hC = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? X(!1, "Must provide a clone render function (renderClone) for virtual lists") : X());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? X(!1, "Expected virtual list to not have a placeholder") : X());
}];
function vC(e) {
  Ga(() => {
    So(e, gC), e.props.mode === "standard" && So(e, bC), e.props.mode === "virtual" && So(e, hC);
  });
}
class yC extends I.PureComponent {
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
const EC = (e) => {
  const t = ht(Fa);
  t || (process.env.NODE_ENV !== "production" ? X(!1, "Could not find app context") : X());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: m,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, w = je(() => o.current, []), E = je((P = null) => {
    o.current = P;
  }, []), v = je(() => i.current, []), g = je((P = null) => {
    i.current = P;
  }, []);
  vC({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = je(() => {
    n() && f({
      maxScroll: vN()
    });
  }, [n, f]);
  lC({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = Ke(() => I.createElement(yC, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(mC, {
    placeholder: T,
    onClose: P,
    innerRef: g,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = Ke(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = Ke(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: V
  }), [s, V, l]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, k = I.createElement(XN, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (U, R) => T(U, R, P));
    return jr.createPortal(k, y());
  }
  return I.createElement(ja.Provider, {
    value: A
  }, a(C, h), $());
};
var xC = EC;
function wC() {
  return document.body || (process.env.NODE_ENV !== "production" ? X(!1, "document.body is not ready") : X()), document.body;
}
const Fl = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: wC
}, Bf = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Fl)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Fl[r]
    });
  return t;
}, Do = (e, t) => e === t.droppable.type, Gl = (e, t) => t.draggables[e.draggable.id], SC = () => {
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
  }, r = et((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = et((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, m = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: p,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: c,
      useClone: null
    };
  });
  return (o, i) => {
    const a = Bf(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (Wa(o)) {
      const c = o.critical;
      if (!Do(l, c))
        return t;
      const d = Gl(c, o.dimensions), m = cn(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!Do(l, c.critical))
        return t;
      const d = Gl(c.critical, o.dimensions);
      return n(s, u, Tf(c.result) === s, cn(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!Do(l, c.critical))
        return t;
      const d = cn(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, DC = {
  updateViewportMaxScroll: mN
};
yf(SC, DC, (e, t, r) => ({
  ...Bf(r),
  ...e,
  ...t
}), {
  context: _f,
  areStatePropsEqual: Rf
})(xC);
var Wl;
(function(e) {
  e.event = "event", e.props = "prop";
})(Wl || (Wl = {}));
var jl = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + jl(), "" + jl();
function OC(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xi = { exports: {} }, Oo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kl;
function NC() {
  if (kl) return Oo;
  kl = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var m = d(), h = n({ inst: { value: m, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = m, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, m, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(m), m;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var m = d();
      return !r(c, m);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Oo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Oo;
}
var zl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hl;
function CC() {
  return Hl || (Hl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m, h) {
      return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
    }
    function t(m, h) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var f = h();
        i(b, f) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      f = a({
        inst: { value: b, getSnapshot: h }
      });
      var y = f[0].inst, w = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && w({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && w({ inst: y }), m(function() {
            r(y) && w({ inst: y });
          });
        },
        [m]
      ), u(b), b;
    }
    function r(m) {
      var h = m.getSnapshot;
      m = m.value;
      try {
        var b = h();
        return !i(m, b);
      } catch {
        return !0;
      }
    }
    function n(m, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    zl.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), zl;
}
process.env.NODE_ENV === "production" ? xi.exports = NC() : xi.exports = CC();
var Ha = xi.exports, No = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ul;
function _C() {
  if (Ul) return No;
  Ul = 1;
  var e = I, t = Ha;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return No.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
              var N = b.value;
              if (m(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var w = !1, E, v, g = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          g === null ? void 0 : function() {
            return y(g());
          }
        ];
      },
      [p, c, d, m]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, No;
}
var ql = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yl;
function IC() {
  return Yl || (Yl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = Ha, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    ql.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
                var N = b.value;
                if (m(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var w = !1, E, v, g = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            g === null ? void 0 : function() {
              return y(g());
            }
          ];
        },
        [p, c, d, m]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ql;
}
process.env.NODE_ENV === "production" ? _C() : IC();
function PC(e) {
  e();
}
let Ff = PC;
const AC = (e) => Ff = e, $C = () => Ff, Kl = Symbol.for("react-redux-context"), Xl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function RC() {
  var e;
  if (!_.createContext) return {};
  const t = (e = Xl[Kl]) != null ? e : Xl[Kl] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const TC = /* @__PURE__ */ RC(), VC = () => {
  throw new Error("uSES not initialized!");
};
function rr() {
  return rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rr.apply(null, arguments);
}
function Gf(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var wi = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jl;
function MC() {
  if (Jl) return xe;
  Jl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
        case t:
          switch (g = g.type, g) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case p:
                case h:
                case m:
                case a:
                  return g;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return xe.AsyncMode = l, xe.ConcurrentMode = u, xe.ContextConsumer = s, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = p, xe.Fragment = n, xe.Lazy = h, xe.Memo = m, xe.Portal = r, xe.Profiler = i, xe.StrictMode = o, xe.Suspense = c, xe.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, xe.isConcurrentMode = v, xe.isContextConsumer = function(g) {
    return E(g) === s;
  }, xe.isContextProvider = function(g) {
    return E(g) === a;
  }, xe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, xe.isForwardRef = function(g) {
    return E(g) === p;
  }, xe.isFragment = function(g) {
    return E(g) === n;
  }, xe.isLazy = function(g) {
    return E(g) === h;
  }, xe.isMemo = function(g) {
    return E(g) === m;
  }, xe.isPortal = function(g) {
    return E(g) === r;
  }, xe.isProfiler = function(g) {
    return E(g) === i;
  }, xe.isStrictMode = function(g) {
    return E(g) === o;
  }, xe.isSuspense = function(g) {
    return E(g) === c;
  }, xe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, xe.typeOf = E, xe;
}
var Ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zl;
function LC() {
  return Zl || (Zl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === c || S === d || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === m || S.$$typeof === a || S.$$typeof === s || S.$$typeof === p || S.$$typeof === f || S.$$typeof === y || S.$$typeof === w || S.$$typeof === b);
    }
    function v(S) {
      if (typeof S == "object" && S !== null) {
        var le = S.$$typeof;
        switch (le) {
          case t:
            var D = S.type;
            switch (D) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return D;
              default:
                var ue = D && D.$$typeof;
                switch (ue) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return ue;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = m, k = r, U = i, R = o, L = c, F = !1;
    function j(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(S) || v(S) === l;
    }
    function H(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Q(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function re(S) {
      return v(S) === p;
    }
    function ne(S) {
      return v(S) === n;
    }
    function de(S) {
      return v(S) === h;
    }
    function te(S) {
      return v(S) === m;
    }
    function oe(S) {
      return v(S) === r;
    }
    function W(S) {
      return v(S) === i;
    }
    function ie(S) {
      return v(S) === o;
    }
    function Fe(S) {
      return v(S) === c;
    }
    Ie.AsyncMode = g, Ie.ConcurrentMode = x, Ie.ContextConsumer = N, Ie.ContextProvider = C, Ie.Element = V, Ie.ForwardRef = A, Ie.Fragment = $, Ie.Lazy = P, Ie.Memo = T, Ie.Portal = k, Ie.Profiler = U, Ie.StrictMode = R, Ie.Suspense = L, Ie.isAsyncMode = j, Ie.isConcurrentMode = H, Ie.isContextConsumer = B, Ie.isContextProvider = Q, Ie.isElement = ee, Ie.isForwardRef = re, Ie.isFragment = ne, Ie.isLazy = de, Ie.isMemo = te, Ie.isPortal = oe, Ie.isProfiler = W, Ie.isStrictMode = ie, Ie.isSuspense = Fe, Ie.isValidElementType = E, Ie.typeOf = v;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? wi.exports = MC() : wi.exports = LC();
var BC = wi.exports, Ua = BC, FC = {
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
}, GC = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, WC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Wf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qa = {};
qa[Ua.ForwardRef] = WC;
qa[Ua.Memo] = Wf;
function Ql(e) {
  return Ua.isMemo(e) ? Wf : qa[e.$$typeof] || FC;
}
var jC = Object.defineProperty, kC = Object.getOwnPropertyNames, eu = Object.getOwnPropertySymbols, zC = Object.getOwnPropertyDescriptor, HC = Object.getPrototypeOf, tu = Object.prototype;
function jf(e, t, r) {
  if (typeof t != "string") {
    if (tu) {
      var n = HC(t);
      n && n !== tu && jf(e, n, r);
    }
    var o = kC(t);
    eu && (o = o.concat(eu(t)));
    for (var i = Ql(e), a = Ql(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!GC[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = zC(t, l);
        try {
          jC(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var UC = jf;
const ru = /* @__PURE__ */ OC(UC);
var Si = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nu;
function qC() {
  if (nu) return we;
  nu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case a:
                case l:
                case d:
                case c:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return we.ContextConsumer = a, we.ContextProvider = i, we.Element = e, we.ForwardRef = l, we.Fragment = r, we.Lazy = d, we.Memo = c, we.Portal = t, we.Profiler = o, we.StrictMode = n, we.Suspense = u, we.SuspenseList = p, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(f) {
    return b(f) === a;
  }, we.isContextProvider = function(f) {
    return b(f) === i;
  }, we.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, we.isForwardRef = function(f) {
    return b(f) === l;
  }, we.isFragment = function(f) {
    return b(f) === r;
  }, we.isLazy = function(f) {
    return b(f) === d;
  }, we.isMemo = function(f) {
    return b(f) === c;
  }, we.isPortal = function(f) {
    return b(f) === t;
  }, we.isProfiler = function(f) {
    return b(f) === o;
  }, we.isStrictMode = function(f) {
    return b(f) === n;
  }, we.isSuspense = function(f) {
    return b(f) === u;
  }, we.isSuspenseList = function(f) {
    return b(f) === p;
  }, we.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, we.typeOf = b, we;
}
var Pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ou;
function YC() {
  return ou || (ou = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || w || D === n || D === u || D === p || y || D === m || h || b || f || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === c || D.$$typeof === i || D.$$typeof === a || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === E || D.getModuleId !== void 0));
    }
    function g(D) {
      if (typeof D == "object" && D !== null) {
        var ue = D.$$typeof;
        switch (ue) {
          case e:
            var Te = D.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var G = Te && Te.$$typeof;
                switch (G) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return G;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, U = n, R = u, L = p, F = !1, j = !1;
    function H(D) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(D) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(D) {
      return g(D) === a;
    }
    function ee(D) {
      return g(D) === i;
    }
    function re(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function ne(D) {
      return g(D) === l;
    }
    function de(D) {
      return g(D) === r;
    }
    function te(D) {
      return g(D) === d;
    }
    function oe(D) {
      return g(D) === c;
    }
    function W(D) {
      return g(D) === t;
    }
    function ie(D) {
      return g(D) === o;
    }
    function Fe(D) {
      return g(D) === n;
    }
    function S(D) {
      return g(D) === u;
    }
    function le(D) {
      return g(D) === p;
    }
    Pe.ContextConsumer = x, Pe.ContextProvider = N, Pe.Element = C, Pe.ForwardRef = V, Pe.Fragment = A, Pe.Lazy = $, Pe.Memo = P, Pe.Portal = T, Pe.Profiler = k, Pe.StrictMode = U, Pe.Suspense = R, Pe.SuspenseList = L, Pe.isAsyncMode = H, Pe.isConcurrentMode = B, Pe.isContextConsumer = Q, Pe.isContextProvider = ee, Pe.isElement = re, Pe.isForwardRef = ne, Pe.isFragment = de, Pe.isLazy = te, Pe.isMemo = oe, Pe.isPortal = W, Pe.isProfiler = ie, Pe.isStrictMode = Fe, Pe.isSuspense = S, Pe.isSuspenseList = le, Pe.isValidElementType = v, Pe.typeOf = g;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? Si.exports = qC() : Si.exports = YC();
var iu = Si.exports;
function Ya(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Co(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ya(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function KC(e, t, r) {
  Co(e, "mapStateToProps"), Co(t, "mapDispatchToProps"), Co(r, "mergeProps");
}
const XC = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function JC(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(w, E) {
    return l = w, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const w = e(l, u), E = !a(w, p);
    return p = w, E && (d = r(p, c, u)), d;
  }
  function y(w, E) {
    const v = !i(E, u), g = !o(w, l, E, u);
    return l = w, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(w, E) {
    return s ? y(w, E) : m(w, E);
  };
}
function ZC(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = Gf(t, XC);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && KC(a, s, l), JC(a, s, l, e, i);
}
function QC(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function e0(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function kf(e, t, r) {
  e0(e) || Ya(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Di(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function au(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function zf(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = au(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = au(s), s = o(i, a)), process.env.NODE_ENV !== "production" && kf(s, n, t), s;
    }, o;
  };
}
function Ka(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function t0(e) {
  return e && typeof e == "object" ? Di((t) => (
    // @ts-ignore
    QC(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    zf(e, "mapDispatchToProps")
  ) : Ka(e, "mapDispatchToProps") : Di((t) => ({
    dispatch: t
  }));
}
function r0(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    zf(e, "mapStateToProps")
  ) : Ka(e, "mapStateToProps") : Di(() => ({}));
}
function n0(e, t, r) {
  return rr({}, r, e, t);
}
function o0(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && kf(i, r, "mergeProps")), i;
    };
  };
}
function i0(e) {
  return e ? typeof e == "function" ? o0(e) : Ka(e, "mergeProps") : () => n0;
}
function a0() {
  const e = $C();
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
const su = {
  notify() {
  },
  get: () => []
};
function s0(e, t) {
  let r, n = su, o = 0, i = !1;
  function a(b) {
    p();
    const f = n.subscribe(b);
    let y = !1;
    return () => {
      y || (y = !0, f(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = a0());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = su);
  }
  function d() {
    i || (i = !0, p());
  }
  function m() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => n
  };
  return h;
}
const c0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Oi = c0 ? _.useLayoutEffect : _.useEffect;
function cu(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _o(e, t) {
  if (cu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !cu(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const l0 = ["reactReduxForwardedRef"];
let Hf = VC;
const u0 = (e) => {
  Hf = e;
}, d0 = [null, null], p0 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function f0(e, t, r) {
  Oi(() => e(...t), r);
}
function m0(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function g0(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const m = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, f;
    try {
      b = n(h, o.current);
    } catch (y) {
      f = y, d = y;
    }
    f || (d = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, p());
  };
  return r.onStateChange = m, r.trySubscribe(), m(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function b0(e, t) {
  return e === t;
}
let lu = !1;
function Uf(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = b0,
  areOwnPropsEqual: i = _o,
  areStatePropsEqual: a = _o,
  areMergedPropsEqual: s = _o,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = TC
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !lu && (lu = !0, Ya('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = r0(e), d = t0(t), m = i0(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !iu.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${p0(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, w = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(g) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = g, ie = Gf(g, l0);
        return [g.context, W, ie];
      }, [g]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      iu.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!g.store && !!g.store.getState && !!g.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? g.store : A.store, k = P ? A.getServerState : T.getState, U = _.useMemo(() => ZC(T.dispatch, w), [T]), [R, L] = _.useMemo(() => {
        if (!h) return d0;
        const W = s0(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : rr({}, A, {
        subscription: R
      }), [$, A, R]), j = _.useRef(), H = _.useRef(C), B = _.useRef(), Q = _.useRef(!1);
      _.useRef(!1);
      const ee = _.useRef(!1), re = _.useRef();
      Oi(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const ne = _.useMemo(() => () => B.current && C === H.current ? B.current : U(T.getState(), C), [T, C]), de = _.useMemo(() => (W) => R ? g0(
        h,
        T,
        R,
        // @ts-ignore
        U,
        H,
        j,
        Q,
        ee,
        B,
        L,
        W
      ) : () => {
      }, [R]);
      f0(m0, [H, j, Q, C, B, L]);
      let te;
      try {
        te = Hf(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ne,
          k ? () => U(k(), C) : ne
        );
      } catch (W) {
        throw re.current && (W.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), W;
      }
      Oi(() => {
        re.current = void 0, B.current = void 0, j.current = te;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, rr({}, te, {
          ref: N
        }))
      ), [N, b, te]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, rr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, ru(g, b);
    }
    return ru(v, b);
  };
}
u0(Ha.useSyncExternalStore);
AC(kr);
function h0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function qf(e, t) {
  var r = Ge(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && h0(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return se(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function v0(e, t) {
  return qf(function() {
    return e;
  }, t);
}
var Xe = qf, ke = v0, y0 = process.env.NODE_ENV === "production", Io = "Invariant failed";
function uu(e, t) {
  if (y0)
    throw new Error(Io);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Io, ": ").concat(r) : Io;
  throw new Error(n);
}
var Jt = function(e) {
  var t = e.top, r = e.right, n = e.bottom, o = e.left, i = r - o, a = n - t, s = {
    top: t,
    right: r,
    bottom: n,
    left: o,
    width: i,
    height: a,
    x: o,
    y: t,
    center: {
      x: (r + o) / 2,
      y: (n + t) / 2
    }
  };
  return s;
}, Yf = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, du = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, E0 = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Po = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Xa = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Po : r, o = e.border, i = o === void 0 ? Po : o, a = e.padding, s = a === void 0 ? Po : a, l = Jt(Yf(t, n)), u = Jt(du(t, i)), p = Jt(du(u, s));
  return {
    marginBox: l,
    borderBox: Jt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, pt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? uu(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : uu()), n;
}, x0 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, w0 = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = E0(r, t);
  return Xa({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Ni = function(e, t) {
  return t === void 0 && (t = x0()), w0(e, t);
}, Kf = function(e, t) {
  var r = {
    top: pt(t.marginTop),
    right: pt(t.marginRight),
    bottom: pt(t.marginBottom),
    left: pt(t.marginLeft)
  }, n = {
    top: pt(t.paddingTop),
    right: pt(t.paddingRight),
    bottom: pt(t.paddingBottom),
    left: pt(t.paddingLeft)
  }, o = {
    top: pt(t.borderTopWidth),
    right: pt(t.borderRightWidth),
    bottom: pt(t.borderBottomWidth),
    left: pt(t.borderLeftWidth)
  };
  return Xa({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Xf = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Kf(t, r);
}, pu = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function S0(e, t) {
  return !!(e === t || pu(e) && pu(t));
}
function D0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!S0(e[r], t[r]))
      return !1;
  return !0;
}
function tt(e, t) {
  t === void 0 && (t = D0);
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
var O0 = function(e) {
  var t = [], r = null, n = function() {
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return n.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, n;
};
const N0 = process.env.NODE_ENV === "production", C0 = /[ \t]{2,}/g, _0 = /^[ \t]*/gm, fu = (e) => e.replace(C0, " ").replace(_0, "").trim(), I0 = (e) => fu(`
  %c@hello-pangea/dnd

  %c${fu(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), P0 = (e) => [I0(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], A0 = "__@hello-pangea/dnd-disable-dev-warnings";
function Jf(e, t) {
  N0 || typeof window < "u" && window[A0] || console[e](...P0(t));
}
const At = Jf.bind(null, "warn"), Ci = Jf.bind(null, "error");
function $0() {
}
function R0(e, t) {
  return {
    ...e,
    ...t
  };
}
function T0(e, t, r) {
  const n = t.map((o) => {
    const i = R0(r, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    n.forEach((o) => {
      o();
    });
  };
}
const V0 = process.env.NODE_ENV === "production", mu = "Invariant failed";
class Br extends Error {
}
Br.prototype.toString = function() {
  return this.message;
};
function J(e, t) {
  throw V0 ? new Br(mu) : new Br(`${mu}: ${t || ""}`);
}
class gA extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = $0, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && At(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Br && (r.preventDefault(), process.env.NODE_ENV !== "production" && Ci(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = T0(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Br) {
      process.env.NODE_ENV !== "production" && Ci(t.message), this.setState({});
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
const Ut = {
  x: 0,
  y: 0
}, M0 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), L0 = (e, t) => e.x === t.x && e.y === t.y, B0 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), F0 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var G0 = (e, t) => {
  const r = Jt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const W0 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), j0 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, k0 = (e, t) => t ? W0(e, t.scroll.diff.displacement) : e, z0 = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, H0 = (e, t) => t && t.shouldClipSubject ? G0(t.pageMarginBox, e) : Jt(e);
var U0 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = k0(e.marginBox, n), i = z0(o, r, t), a = H0(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
tt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
tt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const q0 = tt((e) => Object.values(e)), Y0 = tt((e) => Object.values(e));
tt((e, t) => Y0(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function K0(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
tt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const X0 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, J0 = {
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
tt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: F0(e.line, r)
  };
});
var un = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const Z0 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), Q0 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Ja = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Fr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, e_ = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Lt = `${e_.outOfTheWay}s ${Ja.outOfTheWay}`, dn = {
  fluid: `opacity ${Lt}`,
  snap: `transform ${Lt}, opacity ${Lt}`,
  drop: (e) => {
    const t = `${e}s ${Ja.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Lt}`,
  placeholder: `height ${Lt}, width ${Lt}, margin ${Lt}`
}, gu = (e) => L0(e, Ut) ? void 0 : `translate(${e.x}px, ${e.y}px)`, _i = {
  moveTo: gu,
  drop: (e, t) => {
    const r = gu(e);
    if (r)
      return t ? `${r} scale(${Fr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Zf = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = M0({
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
}, t_ = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? J(!1, "Cannot find document.documentElement") : J()), e;
}, r_ = () => {
  const e = t_();
  return Zf({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
tt((e) => q0(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Qf = "data-rfd", bu = (() => {
  const e = `${Qf}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), hu = {
  contextId: `${Qf}-scroll-container-context-id`
}, n_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? sr : se;
var xr = n_;
function o_(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var i_ = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function em(e) {
  return e instanceof i_(e).HTMLElement;
}
function a_(e, t) {
  const r = `[${bu.contextId}="${e}"]`, n = o_(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && At(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(bu.draggableId) === t);
  return o ? em(o) ? o : (process.env.NODE_ENV !== "production" && At("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && At(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var tm = I.createContext(null), s_ = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? J(!1, "Cannot find document.body") : J()), e;
};
let c_ = 0;
const rm = {
  separator: "::"
};
function l_(e, t = rm) {
  return Xe(() => `${e}${t.separator}${c_++}`, [t.separator, e]);
}
function u_(e, t = rm) {
  const r = I.useId();
  return Xe(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var nm = "useId" in I ? u_ : l_, Za = I.createContext(null);
function om(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Qa(e, t) {
  om(() => {
    se(() => {
      try {
        e();
      } catch (r) {
        Ci(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function d_(e) {
  const t = M(e);
  return se(() => {
    t.current = e;
  }), t;
}
function es(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const vu = {
  dragging: 5e3,
  dropAnimating: 4500
}, p_ = (e, t) => t ? dn.drop(t.duration) : e ? dn.snap : dn.fluid, f_ = (e, t) => {
  if (e)
    return t ? Fr.opacity.drop : Fr.opacity.combining;
}, m_ = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function g_(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = m_(e), s = !!o, l = s ? _i.drop(r, i) : _i.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: p_(a, o),
    transform: l,
    opacity: f_(i, s),
    zIndex: s ? vu.dropAnimating : vu.dragging,
    pointerEvents: "none"
  };
}
function b_(e) {
  return {
    transform: _i.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function h_(e) {
  return e.type === "DRAGGING" ? g_(e) : b_(e);
}
function v_(e, t, r = Ut) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Kf(o, n), a = Ni(i, r), s = {
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
function y_(e) {
  const t = nm("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Xe(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ke((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? J(!1, "Cannot get dimension when no ref is set") : J()), v_(r, h, m);
  }, [r, o]), p = Xe(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  xr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), xr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ts = I.createContext(null);
function im(e) {
  e && em(e) || (process.env.NODE_ENV !== "production" ? J(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : J());
}
function E_(e, t, r) {
  Qa(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? J(!1, "Draggable requires a draggableId") : J(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? J(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : J(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? J(!1, `${n(o)} requires an integer index prop`) : J(!1)), e.mapped.type !== "DRAGGING" && (im(r()), e.isEnabled && (a_(t, o) || (process.env.NODE_ENV !== "production" ? J(!1, `${n(o)} Unable to find drag handle`) : J(!1))));
  });
}
function x_(e) {
  om(() => {
    const t = M(e);
    Qa(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? J(!1, "Draggable isClone prop value changed during component life") : J(!1));
    }, [e]);
  });
}
function On(e) {
  const t = ht(e);
  return t || (process.env.NODE_ENV !== "production" ? J(!1, "Could not find required context") : J()), t;
}
function w_(e) {
  e.preventDefault();
}
const S_ = (e) => {
  const t = M(null), r = ke((x = null) => {
    t.current = x;
  }, []), n = ke(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = On(Za), {
    type: s,
    droppableId: l
  } = On(ts), u = Xe(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: m,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (E_(e, o, n), x_(b), !b) {
    const x = Xe(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    y_(x);
  }
  const w = Xe(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: w_
  } : null, [o, i, c, d]), E = ke((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : cr(y));
  }, [y, f]), v = Xe(() => {
    const x = h_(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: w
    };
  }, [o, w, c, f, E, r]), g = Xe(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, g));
};
var D_ = S_, am = (e, t) => e === t, sm = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const O_ = (e) => e.combine ? e.combine.draggableId : null, N_ = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function C_() {
  const e = tt((n, o) => ({
    x: n,
    y: o
  })), t = tt((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = tt((n, o, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: o,
      offset: n,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(o, a, s, l, null)
    }
  }));
  return (n, o) => {
    if (es(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = un(n.impact), l = N_(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = sm(l), c = O_(l), d = {
        duration: n.dropDuration,
        curve: Ja.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? Fr.opacity.drop : null,
        scale: c ? Fr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: p,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, p, c, d)
        }
      };
    }
    return null;
  };
}
function cm(e = null) {
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
const __ = {
  mapped: {
    type: "SECONDARY",
    offset: Ut,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: cm(null)
  }
};
function I_() {
  const e = tt((i, a) => ({
    x: i,
    y: a
  })), t = tt(cm), r = tt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(Ut, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = K0(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = B0(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (es(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const P_ = () => {
  const e = C_(), t = I_();
  return (r, n) => e(r, n) || t(r, n) || __;
}, A_ = {
  dropAnimationFinished: Q0
}, $_ = Uf(P_, A_, null, {
  context: tm,
  areStatePropsEqual: am
})(D_);
var R_ = $_;
function T_(e) {
  return On(ts).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(R_, e);
}
const rs = (e) => (t) => e === t, V_ = rs("scroll"), M_ = rs("auto"), L_ = rs("visible"), yu = (e, t) => t(e.overflowX) || t(e.overflowY), B_ = (e, t) => t(e.overflowX) && t(e.overflowY), lm = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return yu(r, V_) || yu(r, M_);
}, F_ = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = s_(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, J()), !lm(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return B_(n, L_) || process.env.NODE_ENV !== "production" && At(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ns = (e) => e == null ? null : e === document.body ? F_() ? e : null : e === document.documentElement ? null : lm(e) ? e : ns(e.parentElement);
var G_ = (e) => {
  !e || !ns(e.parentElement) || process.env.NODE_ENV !== "production" && At(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ii = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const um = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : um(e.parentElement) : !1;
var W_ = (e) => {
  const t = ns(e), r = um(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, j_ = ({
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
      scrollSize: c,
      client: d
    } = s, m = Zf({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: m,
        diff: {
          value: Ut,
          displacement: Ut
        }
      }
    };
  })(), u = o === "vertical" ? X0 : J0, p = U0({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: p
  };
};
const k_ = (e, t) => {
  const r = Xf(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = Yf({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return Xa({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var z_ = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = k_(e, l), p = Ni(u, n), c = (() => {
    if (!l)
      return null;
    const d = Xf(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Ni(d, n),
      scroll: Ii(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return j_({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: c
  });
};
const H_ = {
  passive: !1
}, U_ = {
  passive: !0
};
var Eu = (e) => e.shouldPublishImmediately ? H_ : U_;
const tn = (e) => e && e.env.closestScrollable || null;
function q_(e) {
  const t = M(null), r = On(Za), n = nm("droppable"), {
    registry: o,
    marshal: i
  } = r, a = d_(e), s = Xe(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = Xe(() => tt((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? J(!1, "Can only update scroll when dragging") : J());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = ke(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? Ut : Ii(v.env.closestScrollable);
  }, []), c = ke(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = Xe(() => O0(c), [c]), m = ke(() => {
    const v = t.current, g = tn(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? J(!1, "Could not find scroll options while scrolling") : J()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = ke((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? J(!1, "Cannot collect a droppable while a drag is occurring") : J());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? J(!1, "Cannot collect without a droppable ref") : J());
    const C = W_(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = V;
    const A = z_({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(hu.contextId, r.contextId), $.addEventListener("scroll", m, Eu(V.scrollOptions)), process.env.NODE_ENV !== "production" && G_($)), A;
  }, [r.contextId, s, m, a]), b = ke(() => {
    const v = t.current, g = tn(v);
    return v && g || (process.env.NODE_ENV !== "production" ? J(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : J()), Ii(g);
  }, []), f = ke(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? J(!1, "Cannot stop drag when no active drag") : J());
    const g = tn(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(hu.contextId), g.removeEventListener("scroll", m, Eu(v.scrollOptions)));
  }, [m, d]), y = ke((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? J(!1, "Cannot scroll when there is no drag") : J());
    const x = tn(g);
    x || (process.env.NODE_ENV !== "production" ? J(!1, "Cannot scroll a droppable with no closest scrollable") : J()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = Xe(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = Xe(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  xr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && At("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), xr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), xr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ao() {
}
const Y_ = {
  width: 0,
  height: 0,
  margin: j0
}, K_ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? Y_ : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, X_ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = K_({
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
    transition: r !== "none" ? dn.placeholder : null
  };
}, J_ = (e) => {
  const t = M(null), r = ke(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ge(e.animate === "open");
  se(() => s ? n !== "open" ? (r(), l(!1), Ao) : t.current ? Ao : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Ao, [n, s, r]);
  const u = ke((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = X_({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var Z_ = I.memo(J_);
function $o(e) {
  return typeof e == "boolean";
}
function Ro(e, t) {
  t.forEach((r) => r(e));
}
const Q_ = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? J(!1, "A Droppable requires a droppableId prop") : J()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? J(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : J());
}, function({
  props: e
}) {
  $o(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? J(!1, "isDropDisabled must be a boolean") : J()), $o(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? J(!1, "isCombineEnabled must be a boolean") : J()), $o(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? J(!1, "ignoreContainerClipping must be a boolean") : J());
}, function({
  getDroppableRef: e
}) {
  im(e());
}], eI = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && At(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], tI = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? J(!1, "Must provide a clone render function (renderClone) for virtual lists") : J());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? J(!1, "Expected virtual list to not have a placeholder") : J());
}];
function rI(e) {
  Qa(() => {
    Ro(e, Q_), e.props.mode === "standard" && Ro(e, eI), e.props.mode === "virtual" && Ro(e, tI);
  });
}
class nI extends I.PureComponent {
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
const oI = (e) => {
  const t = ht(Za);
  t || (process.env.NODE_ENV !== "production" ? J(!1, "Could not find app context") : J());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: m,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, w = ke(() => o.current, []), E = ke((P = null) => {
    o.current = P;
  }, []), v = ke(() => i.current, []), g = ke((P = null) => {
    i.current = P;
  }, []);
  rI({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = ke(() => {
    n() && f({
      maxScroll: r_()
    });
  }, [n, f]);
  q_({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = Xe(() => I.createElement(nI, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(Z_, {
    placeholder: T,
    onClose: P,
    innerRef: g,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = Xe(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = Xe(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: V
  }), [s, V, l]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, k = I.createElement(T_, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (U, R) => T(U, R, P));
    return jr.createPortal(k, y());
  }
  return I.createElement(ts.Provider, {
    value: A
  }, a(C, h), $());
};
var iI = oI;
function aI() {
  return document.body || (process.env.NODE_ENV !== "production" ? J(!1, "document.body is not ready") : J()), document.body;
}
const xu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: aI
}, dm = (e) => {
  let t = {
    ...e
  }, r;
  for (r in xu)
    e[r] === void 0 && (t = {
      ...t,
      [r]: xu[r]
    });
  return t;
}, To = (e, t) => e === t.droppable.type, wu = (e, t) => t.draggables[e.draggable.id], sI = () => {
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
  }, r = tt((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = tt((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, m = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: p,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: c,
      useClone: null
    };
  });
  return (o, i) => {
    const a = dm(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (es(o)) {
      const c = o.critical;
      if (!To(l, c))
        return t;
      const d = wu(c, o.dimensions), m = un(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!To(l, c.critical))
        return t;
      const d = wu(c.critical, o.dimensions);
      return n(s, u, sm(c.result) === s, un(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!To(l, c.critical))
        return t;
      const d = un(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, cI = {
  updateViewportMaxScroll: Z0
};
Uf(sI, cI, (e, t, r) => ({
  ...dm(r),
  ...e,
  ...t
}), {
  context: tm,
  areStatePropsEqual: am
})(iI);
var Su;
(function(e) {
  e.event = "event", e.props = "prop";
})(Su || (Su = {}));
var Du = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Du(), "" + Du();
function lI(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pi = { exports: {} }, Vo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ou;
function uI() {
  if (Ou) return Vo;
  Ou = 1;
  var e = I;
  function t(c, d) {
    return c === d && (c !== 0 || 1 / c === 1 / d) || c !== c && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function s(c, d) {
    var m = d(), h = n({ inst: { value: m, getSnapshot: d } }), b = h[0].inst, f = h[1];
    return i(
      function() {
        b.value = m, b.getSnapshot = d, l(b) && f({ inst: b });
      },
      [c, m, d]
    ), o(
      function() {
        return l(b) && f({ inst: b }), c(function() {
          l(b) && f({ inst: b });
        });
      },
      [c]
    ), a(m), m;
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var m = d();
      return !r(c, m);
    } catch {
      return !0;
    }
  }
  function u(c, d) {
    return d();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Vo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p, Vo;
}
var Nu = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cu;
function dI() {
  return Cu || (Cu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m, h) {
      return m === h && (m !== 0 || 1 / m === 1 / h) || m !== m && h !== h;
    }
    function t(m, h) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = h();
      if (!c) {
        var f = h();
        i(b, f) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      f = a({
        inst: { value: b, getSnapshot: h }
      });
      var y = f[0].inst, w = f[1];
      return l(
        function() {
          y.value = b, y.getSnapshot = h, r(y) && w({ inst: y });
        },
        [m, b, h]
      ), s(
        function() {
          return r(y) && w({ inst: y }), m(function() {
            r(y) && w({ inst: y });
          });
        },
        [m]
      ), u(b), b;
    }
    function r(m) {
      var h = m.getSnapshot;
      m = m.value;
      try {
        var b = h();
        return !i(m, b);
      } catch {
        return !0;
      }
    }
    function n(m, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = I, i = typeof Object.is == "function" ? Object.is : e, a = o.useState, s = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, p = !1, c = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Nu.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Nu;
}
process.env.NODE_ENV === "production" ? Pi.exports = uI() : Pi.exports = dI();
var os = Pi.exports, Mo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _u;
function pI() {
  if (_u) return Mo;
  _u = 1;
  var e = I, t = os;
  function r(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, l = e.useDebugValue;
  return Mo.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function y(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
              var N = b.value;
              if (m(N, x))
                return v = N;
            }
            return v = x;
          }
          if (N = v, n(E, x)) return N;
          var C = d(x);
          return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
        }
        var w = !1, E, v, g = c === void 0 ? null : c;
        return [
          function() {
            return y(p());
          },
          g === null ? void 0 : function() {
            return y(g());
          }
        ];
      },
      [p, c, d, m]
    );
    var f = o(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = f;
      },
      [f]
    ), l(f), f;
  }, Mo;
}
var Iu = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pu;
function fI() {
  return Pu || (Pu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = os, n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, l = t.useDebugValue;
    Iu.useSyncExternalStoreWithSelector = function(u, p, c, d, m) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function y(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), m !== void 0 && b.hasValue) {
                var N = b.value;
                if (m(N, x))
                  return v = N;
              }
              return v = x;
            }
            if (N = v, n(E, x))
              return N;
            var C = d(x);
            return m !== void 0 && m(N, C) ? (E = x, N) : (E = x, v = C);
          }
          var w = !1, E, v, g = c === void 0 ? null : c;
          return [
            function() {
              return y(p());
            },
            g === null ? void 0 : function() {
              return y(g());
            }
          ];
        },
        [p, c, d, m]
      );
      var f = o(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = f;
        },
        [f]
      ), l(f), f;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Iu;
}
process.env.NODE_ENV === "production" ? pI() : fI();
function mI(e) {
  e();
}
let pm = mI;
const gI = (e) => pm = e, bI = () => pm, Au = Symbol.for("react-redux-context"), $u = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function hI() {
  var e;
  if (!_.createContext) return {};
  const t = (e = $u[Au]) != null ? e : $u[Au] = /* @__PURE__ */ new Map();
  let r = t.get(_.createContext);
  return r || (r = _.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(_.createContext, r)), r;
}
const vI = /* @__PURE__ */ hI(), yI = () => {
  throw new Error("uSES not initialized!");
};
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nr.apply(null, arguments);
}
function fm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var Ai = { exports: {} }, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ru;
function EI() {
  if (Ru) return Se;
  Ru = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var x = g.$$typeof;
      switch (x) {
        case t:
          switch (g = g.type, g) {
            case l:
            case u:
            case n:
            case i:
            case o:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case p:
                case h:
                case m:
                case a:
                  return g;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function v(g) {
    return E(g) === u;
  }
  return Se.AsyncMode = l, Se.ConcurrentMode = u, Se.ContextConsumer = s, Se.ContextProvider = a, Se.Element = t, Se.ForwardRef = p, Se.Fragment = n, Se.Lazy = h, Se.Memo = m, Se.Portal = r, Se.Profiler = i, Se.StrictMode = o, Se.Suspense = c, Se.isAsyncMode = function(g) {
    return v(g) || E(g) === l;
  }, Se.isConcurrentMode = v, Se.isContextConsumer = function(g) {
    return E(g) === s;
  }, Se.isContextProvider = function(g) {
    return E(g) === a;
  }, Se.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Se.isForwardRef = function(g) {
    return E(g) === p;
  }, Se.isFragment = function(g) {
    return E(g) === n;
  }, Se.isLazy = function(g) {
    return E(g) === h;
  }, Se.isMemo = function(g) {
    return E(g) === m;
  }, Se.isPortal = function(g) {
    return E(g) === r;
  }, Se.isProfiler = function(g) {
    return E(g) === i;
  }, Se.isStrictMode = function(g) {
    return E(g) === o;
  }, Se.isSuspense = function(g) {
    return E(g) === c;
  }, Se.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === i || g === o || g === c || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === m || g.$$typeof === a || g.$$typeof === s || g.$$typeof === p || g.$$typeof === f || g.$$typeof === y || g.$$typeof === w || g.$$typeof === b);
  }, Se.typeOf = E, Se;
}
var Ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tu;
function xI() {
  return Tu || (Tu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, c = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === u || S === i || S === o || S === c || S === d || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === m || S.$$typeof === a || S.$$typeof === s || S.$$typeof === p || S.$$typeof === f || S.$$typeof === y || S.$$typeof === w || S.$$typeof === b);
    }
    function v(S) {
      if (typeof S == "object" && S !== null) {
        var le = S.$$typeof;
        switch (le) {
          case t:
            var D = S.type;
            switch (D) {
              case l:
              case u:
              case n:
              case i:
              case o:
              case c:
                return D;
              default:
                var ue = D && D.$$typeof;
                switch (ue) {
                  case s:
                  case p:
                  case h:
                  case m:
                  case a:
                    return ue;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var g = l, x = u, N = s, C = a, V = t, A = p, $ = n, P = h, T = m, k = r, U = i, R = o, L = c, F = !1;
    function j(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(S) || v(S) === l;
    }
    function H(S) {
      return v(S) === u;
    }
    function B(S) {
      return v(S) === s;
    }
    function Q(S) {
      return v(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function re(S) {
      return v(S) === p;
    }
    function ne(S) {
      return v(S) === n;
    }
    function de(S) {
      return v(S) === h;
    }
    function te(S) {
      return v(S) === m;
    }
    function oe(S) {
      return v(S) === r;
    }
    function W(S) {
      return v(S) === i;
    }
    function ie(S) {
      return v(S) === o;
    }
    function Fe(S) {
      return v(S) === c;
    }
    Ae.AsyncMode = g, Ae.ConcurrentMode = x, Ae.ContextConsumer = N, Ae.ContextProvider = C, Ae.Element = V, Ae.ForwardRef = A, Ae.Fragment = $, Ae.Lazy = P, Ae.Memo = T, Ae.Portal = k, Ae.Profiler = U, Ae.StrictMode = R, Ae.Suspense = L, Ae.isAsyncMode = j, Ae.isConcurrentMode = H, Ae.isContextConsumer = B, Ae.isContextProvider = Q, Ae.isElement = ee, Ae.isForwardRef = re, Ae.isFragment = ne, Ae.isLazy = de, Ae.isMemo = te, Ae.isPortal = oe, Ae.isProfiler = W, Ae.isStrictMode = ie, Ae.isSuspense = Fe, Ae.isValidElementType = E, Ae.typeOf = v;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? Ai.exports = EI() : Ai.exports = xI();
var wI = Ai.exports, is = wI, SI = {
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
}, DI = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, OI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, mm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, as = {};
as[is.ForwardRef] = OI;
as[is.Memo] = mm;
function Vu(e) {
  return is.isMemo(e) ? mm : as[e.$$typeof] || SI;
}
var NI = Object.defineProperty, CI = Object.getOwnPropertyNames, Mu = Object.getOwnPropertySymbols, _I = Object.getOwnPropertyDescriptor, II = Object.getPrototypeOf, Lu = Object.prototype;
function gm(e, t, r) {
  if (typeof t != "string") {
    if (Lu) {
      var n = II(t);
      n && n !== Lu && gm(e, n, r);
    }
    var o = CI(t);
    Mu && (o = o.concat(Mu(t)));
    for (var i = Vu(e), a = Vu(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!DI[l] && !(r && r[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = _I(t, l);
        try {
          NI(e, l, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var PI = gm;
const Bu = /* @__PURE__ */ lI(PI);
var $i = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fu;
function AI() {
  if (Fu) return De;
  Fu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case u:
            case p:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case a:
                case l:
                case d:
                case c:
                case i:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return De.ContextConsumer = a, De.ContextProvider = i, De.Element = e, De.ForwardRef = l, De.Fragment = r, De.Lazy = d, De.Memo = c, De.Portal = t, De.Profiler = o, De.StrictMode = n, De.Suspense = u, De.SuspenseList = p, De.isAsyncMode = function() {
    return !1;
  }, De.isConcurrentMode = function() {
    return !1;
  }, De.isContextConsumer = function(f) {
    return b(f) === a;
  }, De.isContextProvider = function(f) {
    return b(f) === i;
  }, De.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, De.isForwardRef = function(f) {
    return b(f) === l;
  }, De.isFragment = function(f) {
    return b(f) === r;
  }, De.isLazy = function(f) {
    return b(f) === d;
  }, De.isMemo = function(f) {
    return b(f) === c;
  }, De.isPortal = function(f) {
    return b(f) === t;
  }, De.isProfiler = function(f) {
    return b(f) === o;
  }, De.isStrictMode = function(f) {
    return b(f) === n;
  }, De.isSuspense = function(f) {
    return b(f) === u;
  }, De.isSuspenseList = function(f) {
    return b(f) === p;
  }, De.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === u || f === p || f === m || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === c || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || f.$$typeof === h || f.getModuleId !== void 0);
  }, De.typeOf = b, De;
}
var $e = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gu;
function $I() {
  return Gu || (Gu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, b = !1, f = !1, y = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function v(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || w || D === n || D === u || D === p || y || D === m || h || b || f || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === c || D.$$typeof === i || D.$$typeof === a || D.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === E || D.getModuleId !== void 0));
    }
    function g(D) {
      if (typeof D == "object" && D !== null) {
        var ue = D.$$typeof;
        switch (ue) {
          case e:
            var Te = D.type;
            switch (Te) {
              case r:
              case o:
              case n:
              case u:
              case p:
                return Te;
              default:
                var G = Te && Te.$$typeof;
                switch (G) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case c:
                  case i:
                    return G;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var x = a, N = i, C = e, V = l, A = r, $ = d, P = c, T = t, k = o, U = n, R = u, L = p, F = !1, j = !1;
    function H(D) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(D) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(D) {
      return g(D) === a;
    }
    function ee(D) {
      return g(D) === i;
    }
    function re(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function ne(D) {
      return g(D) === l;
    }
    function de(D) {
      return g(D) === r;
    }
    function te(D) {
      return g(D) === d;
    }
    function oe(D) {
      return g(D) === c;
    }
    function W(D) {
      return g(D) === t;
    }
    function ie(D) {
      return g(D) === o;
    }
    function Fe(D) {
      return g(D) === n;
    }
    function S(D) {
      return g(D) === u;
    }
    function le(D) {
      return g(D) === p;
    }
    $e.ContextConsumer = x, $e.ContextProvider = N, $e.Element = C, $e.ForwardRef = V, $e.Fragment = A, $e.Lazy = $, $e.Memo = P, $e.Portal = T, $e.Profiler = k, $e.StrictMode = U, $e.Suspense = R, $e.SuspenseList = L, $e.isAsyncMode = H, $e.isConcurrentMode = B, $e.isContextConsumer = Q, $e.isContextProvider = ee, $e.isElement = re, $e.isForwardRef = ne, $e.isFragment = de, $e.isLazy = te, $e.isMemo = oe, $e.isPortal = W, $e.isProfiler = ie, $e.isStrictMode = Fe, $e.isSuspense = S, $e.isSuspenseList = le, $e.isValidElementType = v, $e.typeOf = g;
  }()), $e;
}
process.env.NODE_ENV === "production" ? $i.exports = AI() : $i.exports = $I();
var Wu = $i.exports;
function ss(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Lo(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || ss(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function RI(e, t, r) {
  Lo(e, "mapStateToProps"), Lo(t, "mapDispatchToProps"), Lo(r, "mergeProps");
}
const TI = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function VI(e, t, r, n, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, l, u, p, c, d;
  function m(w, E) {
    return l = w, u = E, p = e(l, u), c = t(n, u), d = r(p, c, u), s = !0, d;
  }
  function h() {
    return p = e(l, u), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (p = e(l, u)), t.dependsOnOwnProps && (c = t(n, u)), d = r(p, c, u), d;
  }
  function f() {
    const w = e(l, u), E = !a(w, p);
    return p = w, E && (d = r(p, c, u)), d;
  }
  function y(w, E) {
    const v = !i(E, u), g = !o(w, l, E, u);
    return l = w, u = E, v && g ? h() : v ? b() : g ? f() : d;
  }
  return function(w, E) {
    return s ? y(w, E) : m(w, E);
  };
}
function MI(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: n,
    initMergeProps: o
  } = t, i = fm(t, TI);
  const a = r(e, i), s = n(e, i), l = o(e, i);
  return process.env.NODE_ENV !== "production" && RI(a, s, l), VI(a, s, l, e, i);
}
function LI(e, t) {
  const r = {};
  for (const n in e) {
    const o = e[n];
    typeof o == "function" && (r[n] = (...i) => t(o(...i)));
  }
  return r;
}
function BI(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function bm(e, t, r) {
  BI(e) || ss(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ri(e) {
  return function(t) {
    const r = e(t);
    function n() {
      return r;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function ju(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function hm(e, t) {
  return function(r, {
    displayName: n
  }) {
    const o = function(i, a) {
      return o.dependsOnOwnProps ? o.mapToProps(i, a) : o.mapToProps(i, void 0);
    };
    return o.dependsOnOwnProps = !0, o.mapToProps = function(i, a) {
      o.mapToProps = e, o.dependsOnOwnProps = ju(e);
      let s = o(i, a);
      return typeof s == "function" && (o.mapToProps = s, o.dependsOnOwnProps = ju(s), s = o(i, a)), process.env.NODE_ENV !== "production" && bm(s, n, t), s;
    }, o;
  };
}
function cs(e, t) {
  return (r, n) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`);
  };
}
function FI(e) {
  return e && typeof e == "object" ? Ri((t) => (
    // @ts-ignore
    LI(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    hm(e, "mapDispatchToProps")
  ) : cs(e, "mapDispatchToProps") : Ri((t) => ({
    dispatch: t
  }));
}
function GI(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    hm(e, "mapStateToProps")
  ) : cs(e, "mapStateToProps") : Ri(() => ({}));
}
function WI(e, t, r) {
  return nr({}, r, e, t);
}
function jI(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: n
  }) {
    let o = !1, i;
    return function(a, s, l) {
      const u = e(a, s, l);
      return o ? n(u, i) || (i = u) : (o = !0, i = u, process.env.NODE_ENV !== "production" && bm(i, r, "mergeProps")), i;
    };
  };
}
function kI(e) {
  return e ? typeof e == "function" ? jI(e) : cs(e, "mergeProps") : () => WI;
}
function zI() {
  const e = bI();
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
const ku = {
  notify() {
  },
  get: () => []
};
function HI(e, t) {
  let r, n = ku, o = 0, i = !1;
  function a(b) {
    p();
    const f = n.subscribe(b);
    let y = !1;
    return () => {
      y || (y = !0, f(), c());
    };
  }
  function s() {
    n.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return i;
  }
  function p() {
    o++, r || (r = t ? t.addNestedSub(l) : e.subscribe(l), n = zI());
  }
  function c() {
    o--, r && o === 0 && (r(), r = void 0, n.clear(), n = ku);
  }
  function d() {
    i || (i = !0, p());
  }
  function m() {
    i && (i = !1, c());
  }
  const h = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: d,
    tryUnsubscribe: m,
    getListeners: () => n
  };
  return h;
}
const UI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ti = UI ? _.useLayoutEffect : _.useEffect;
function zu(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Bo(e, t) {
  if (zu(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !zu(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
const qI = ["reactReduxForwardedRef"];
let vm = yI;
const YI = (e) => {
  vm = e;
}, KI = [null, null], XI = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function JI(e, t, r) {
  Ti(() => e(...t), r);
}
function ZI(e, t, r, n, o, i) {
  e.current = n, r.current = !1, o.current && (o.current = null, i());
}
function QI(e, t, r, n, o, i, a, s, l, u, p) {
  if (!e) return () => {
  };
  let c = !1, d = null;
  const m = () => {
    if (c || !s.current)
      return;
    const h = t.getState();
    let b, f;
    try {
      b = n(h, o.current);
    } catch (y) {
      f = y, d = y;
    }
    f || (d = null), b === i.current ? a.current || u() : (i.current = b, l.current = b, a.current = !0, p());
  };
  return r.onStateChange = m, r.trySubscribe(), m(), () => {
    if (c = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function e1(e, t) {
  return e === t;
}
let Hu = !1;
function ym(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: n,
  areStatesEqual: o = e1,
  areOwnPropsEqual: i = Bo,
  areStatePropsEqual: a = Bo,
  areMergedPropsEqual: s = Bo,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: u = vI
} = {}) {
  process.env.NODE_ENV !== "production" && n !== void 0 && !Hu && (Hu = !0, ss('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const p = u, c = GI(e), d = FI(t), m = kI(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Wu.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${XI(b)}`);
    const f = b.displayName || b.name || "Component", y = `Connect(${f})`, w = {
      shouldHandleStateChanges: h,
      displayName: y,
      wrappedComponentName: f,
      WrappedComponent: b,
      // @ts-ignore
      initMapStateToProps: c,
      // @ts-ignore
      initMapDispatchToProps: d,
      initMergeProps: m,
      areStatesEqual: o,
      areStatePropsEqual: a,
      areOwnPropsEqual: i,
      areMergedPropsEqual: s
    };
    function E(g) {
      const [x, N, C] = _.useMemo(() => {
        const {
          reactReduxForwardedRef: W
        } = g, ie = fm(g, qI);
        return [g.context, W, ie];
      }, [g]), V = _.useMemo(() => x && x.Consumer && // @ts-ignore
      Wu.isContextConsumer(/* @__PURE__ */ _.createElement(x.Consumer, null)) ? x : p, [x, p]), A = _.useContext(V), $ = !!g.store && !!g.store.getState && !!g.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${y}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${y} in connect options.`);
      const T = $ ? g.store : A.store, k = P ? A.getServerState : T.getState, U = _.useMemo(() => MI(T.dispatch, w), [T]), [R, L] = _.useMemo(() => {
        if (!h) return KI;
        const W = HI(T, $ ? void 0 : A.subscription), ie = W.notifyNestedSubs.bind(W);
        return [W, ie];
      }, [T, $, A]), F = _.useMemo(() => $ ? A : nr({}, A, {
        subscription: R
      }), [$, A, R]), j = _.useRef(), H = _.useRef(C), B = _.useRef(), Q = _.useRef(!1);
      _.useRef(!1);
      const ee = _.useRef(!1), re = _.useRef();
      Ti(() => (ee.current = !0, () => {
        ee.current = !1;
      }), []);
      const ne = _.useMemo(() => () => B.current && C === H.current ? B.current : U(T.getState(), C), [T, C]), de = _.useMemo(() => (W) => R ? QI(
        h,
        T,
        R,
        // @ts-ignore
        U,
        H,
        j,
        Q,
        ee,
        B,
        L,
        W
      ) : () => {
      }, [R]);
      JI(ZI, [H, j, Q, C, B, L]);
      let te;
      try {
        te = vm(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ne,
          k ? () => U(k(), C) : ne
        );
      } catch (W) {
        throw re.current && (W.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), W;
      }
      Ti(() => {
        re.current = void 0, B.current = void 0, j.current = te;
      });
      const oe = _.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ _.createElement(b, nr({}, te, {
          ref: N
        }))
      ), [N, b, te]);
      return _.useMemo(() => h ? /* @__PURE__ */ _.createElement(V.Provider, {
        value: F
      }, oe) : oe, [V, oe, F]);
    }
    const v = _.memo(E);
    if (v.WrappedComponent = b, v.displayName = E.displayName = y, l) {
      const g = _.forwardRef(function(x, N) {
        return /* @__PURE__ */ _.createElement(v, nr({}, x, {
          reactReduxForwardedRef: N
        }));
      });
      return g.displayName = y, g.WrappedComponent = b, Bu(g, b);
    }
    return Bu(v, b);
  };
}
YI(os.useSyncExternalStore);
gI(kr);
function t1(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Em(e, t) {
  var r = Ge(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], n = M(!0), o = M(r), i = n.current || !!(t && o.current.inputs && t1(t, o.current.inputs)), a = i ? o.current : {
    inputs: t,
    result: e()
  };
  return se(function() {
    n.current = !1, o.current = a;
  }, [a]), a.result;
}
function r1(e, t) {
  return Em(function() {
    return e;
  }, t);
}
var Je = Em, ze = r1, n1 = process.env.NODE_ENV === "production", Fo = "Invariant failed";
function Uu(e, t) {
  if (n1)
    throw new Error(Fo);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Fo, ": ").concat(r) : Fo;
  throw new Error(n);
}
var Zt = function(e) {
  var t = e.top, r = e.right, n = e.bottom, o = e.left, i = r - o, a = n - t, s = {
    top: t,
    right: r,
    bottom: n,
    left: o,
    width: i,
    height: a,
    x: o,
    y: t,
    center: {
      x: (r + o) / 2,
      y: (n + t) / 2
    }
  };
  return s;
}, xm = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, qu = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, o1 = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Go = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ls = function(e) {
  var t = e.borderBox, r = e.margin, n = r === void 0 ? Go : r, o = e.border, i = o === void 0 ? Go : o, a = e.padding, s = a === void 0 ? Go : a, l = Zt(xm(t, n)), u = Zt(qu(t, i)), p = Zt(qu(u, s));
  return {
    marginBox: l,
    borderBox: Zt(t),
    paddingBox: u,
    contentBox: p,
    margin: n,
    border: i,
    padding: s
  };
}, ft = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var n = Number(t);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Uu(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Uu()), n;
}, i1 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, a1 = function(e, t) {
  var r = e.borderBox, n = e.border, o = e.margin, i = e.padding, a = o1(r, t);
  return ls({
    borderBox: a,
    border: n,
    margin: o,
    padding: i
  });
}, Vi = function(e, t) {
  return t === void 0 && (t = i1()), a1(e, t);
}, wm = function(e, t) {
  var r = {
    top: ft(t.marginTop),
    right: ft(t.marginRight),
    bottom: ft(t.marginBottom),
    left: ft(t.marginLeft)
  }, n = {
    top: ft(t.paddingTop),
    right: ft(t.paddingRight),
    bottom: ft(t.paddingBottom),
    left: ft(t.paddingLeft)
  }, o = {
    top: ft(t.borderTopWidth),
    right: ft(t.borderRightWidth),
    bottom: ft(t.borderBottomWidth),
    left: ft(t.borderLeftWidth)
  };
  return ls({
    borderBox: e,
    margin: r,
    padding: n,
    border: o
  });
}, Sm = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return wm(t, r);
}, Yu = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function s1(e, t) {
  return !!(e === t || Yu(e) && Yu(t));
}
function c1(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!s1(e[r], t[r]))
      return !1;
  return !0;
}
function rt(e, t) {
  t === void 0 && (t = c1);
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
var l1 = function(e) {
  var t = [], r = null, n = function() {
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    t = i, !r && (r = requestAnimationFrame(function() {
      r = null, e.apply(void 0, t);
    }));
  };
  return n.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, n;
};
const u1 = process.env.NODE_ENV === "production", d1 = /[ \t]{2,}/g, p1 = /^[ \t]*/gm, Ku = (e) => e.replace(d1, " ").replace(p1, "").trim(), f1 = (e) => Ku(`
  %c@hello-pangea/dnd

  %c${Ku(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), m1 = (e) => [f1(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], g1 = "__@hello-pangea/dnd-disable-dev-warnings";
function Dm(e, t) {
  u1 || typeof window < "u" && window[g1] || console[e](...m1(t));
}
const $t = Dm.bind(null, "warn"), Mi = Dm.bind(null, "error");
function b1() {
}
function h1(e, t) {
  return {
    ...e,
    ...t
  };
}
function v1(e, t, r) {
  const n = t.map((o) => {
    const i = h1(r, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    n.forEach((o) => {
      o();
    });
  };
}
const y1 = process.env.NODE_ENV === "production", Xu = "Invariant failed";
class Gr extends Error {
}
Gr.prototype.toString = function() {
  return this.message;
};
function Z(e, t) {
  throw y1 ? new Gr(Xu) : new Gr(`${Xu}: ${t || ""}`);
}
class bA extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = b1, this.onWindowError = (r) => {
      const n = this.getCallbacks();
      n.isDragging() && (n.tryAbort(), process.env.NODE_ENV !== "production" && $t(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const o = r.error;
      o instanceof Gr && (r.preventDefault(), process.env.NODE_ENV !== "production" && Mi(o.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = v1(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Gr) {
      process.env.NODE_ENV !== "production" && Mi(t.message), this.setState({});
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
const qt = {
  x: 0,
  y: 0
}, E1 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), x1 = (e, t) => e.x === t.x && e.y === t.y, w1 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), S1 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var D1 = (e, t) => {
  const r = Zt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const O1 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), N1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, C1 = (e, t) => t ? O1(e, t.scroll.diff.displacement) : e, _1 = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, I1 = (e, t) => t && t.shouldClipSubject ? D1(t.pageMarginBox, e) : Zt(e);
var P1 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: n
}) => {
  const o = C1(e.marginBox, n), i = _1(o, r, t), a = I1(i, n);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
rt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
rt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const A1 = rt((e) => Object.values(e)), $1 = rt((e) => Object.values(e));
rt((e, t) => $1(t).filter((r) => e === r.descriptor.droppableId).sort((r, n) => r.descriptor.index - n.descriptor.index));
function R1(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
rt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const T1 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, V1 = {
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
rt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: S1(e.line, r)
  };
});
var pn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const M1 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), L1 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), us = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Wr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, B1 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Bt = `${B1.outOfTheWay}s ${us.outOfTheWay}`, fn = {
  fluid: `opacity ${Bt}`,
  snap: `transform ${Bt}, opacity ${Bt}`,
  drop: (e) => {
    const t = `${e}s ${us.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Bt}`,
  placeholder: `height ${Bt}, width ${Bt}, margin ${Bt}`
}, Ju = (e) => x1(e, qt) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Li = {
  moveTo: Ju,
  drop: (e, t) => {
    const r = Ju(e);
    if (r)
      return t ? `${r} scale(${Wr.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Om = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: n
}) => {
  const o = E1({
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
}, F1 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot find document.documentElement") : Z()), e;
}, G1 = () => {
  const e = F1();
  return Om({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
rt((e) => A1(e).filter((t) => !(!t.isEnabled || !t.frame)));
const Nm = "data-rfd", Zu = (() => {
  const e = `${Nm}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Qu = {
  contextId: `${Nm}-scroll-container-context-id`
}, W1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? sr : se;
var wr = W1;
function j1(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var k1 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Cm(e) {
  return e instanceof k1(e).HTMLElement;
}
function z1(e, t) {
  const r = `[${Zu.contextId}="${e}"]`, n = j1(document, r);
  if (!n.length)
    return process.env.NODE_ENV !== "production" && $t(`Unable to find any drag handles in the context "${e}"`), null;
  const o = n.find((i) => i.getAttribute(Zu.draggableId) === t);
  return o ? Cm(o) ? o : (process.env.NODE_ENV !== "production" && $t("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && $t(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var _m = I.createContext(null), H1 = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot find document.body") : Z()), e;
};
let U1 = 0;
const Im = {
  separator: "::"
};
function q1(e, t = Im) {
  return Je(() => `${e}${t.separator}${U1++}`, [t.separator, e]);
}
function Y1(e, t = Im) {
  const r = I.useId();
  return Je(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Pm = "useId" in I ? Y1 : q1, ds = I.createContext(null);
function Am(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ps(e, t) {
  Am(() => {
    se(() => {
      try {
        e();
      } catch (r) {
        Mi(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function K1(e) {
  const t = M(e);
  return se(() => {
    t.current = e;
  }), t;
}
function fs(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const ed = {
  dragging: 5e3,
  dropAnimating: 4500
}, X1 = (e, t) => t ? fn.drop(t.duration) : e ? fn.snap : fn.fluid, J1 = (e, t) => {
  if (e)
    return t ? Wr.opacity.drop : Wr.opacity.combining;
}, Z1 = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function Q1(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: n,
    dropping: o
  } = e, i = !!n, a = Z1(e), s = !!o, l = s ? Li.drop(r, i) : Li.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: X1(a, o),
    transform: l,
    opacity: J1(i, s),
    zIndex: s ? ed.dropAnimating : ed.dragging,
    pointerEvents: "none"
  };
}
function eP(e) {
  return {
    transform: Li.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function tP(e) {
  return e.type === "DRAGGING" ? Q1(e) : eP(e);
}
function rP(e, t, r = qt) {
  const n = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = wm(o, n), a = Vi(i, r), s = {
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
function nP(e) {
  const t = Pm("draggable"), {
    descriptor: r,
    registry: n,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, l = Je(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = ze((m) => {
    const h = o();
    return h || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot get dimension when no ref is set") : Z()), rP(r, h, m);
  }, [r, o]), p = Je(() => ({
    uniqueId: t,
    descriptor: r,
    options: l,
    getDimension: u
  }), [r, u, l, t]), c = M(p), d = M(!0);
  wr(() => (n.draggable.register(c.current), () => n.draggable.unregister(c.current)), [n.draggable]), wr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const m = c.current;
    c.current = p, n.draggable.update(p, m);
  }, [p, n.draggable]);
}
var ms = I.createContext(null);
function $m(e) {
  e && Cm(e) || (process.env.NODE_ENV !== "production" ? Z(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : Z());
}
function oP(e, t, r) {
  ps(() => {
    function n(i) {
      return `Draggable[id: ${i}]: `;
    }
    const o = e.draggableId;
    o || (process.env.NODE_ENV !== "production" ? Z(!1, "Draggable requires a draggableId") : Z(!1)), typeof o != "string" && (process.env.NODE_ENV !== "production" ? Z(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof o}] (value: ${o})`) : Z(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? Z(!1, `${n(o)} requires an integer index prop`) : Z(!1)), e.mapped.type !== "DRAGGING" && ($m(r()), e.isEnabled && (z1(t, o) || (process.env.NODE_ENV !== "production" ? Z(!1, `${n(o)} Unable to find drag handle`) : Z(!1))));
  });
}
function iP(e) {
  Am(() => {
    const t = M(e);
    ps(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? Z(!1, "Draggable isClone prop value changed during component life") : Z(!1));
    }, [e]);
  });
}
function Nn(e) {
  const t = ht(e);
  return t || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find required context") : Z()), t;
}
function aP(e) {
  e.preventDefault();
}
const sP = (e) => {
  const t = M(null), r = ze((x = null) => {
    t.current = x;
  }, []), n = ze(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = Nn(ds), {
    type: s,
    droppableId: l
  } = Nn(ms), u = Je(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: l
  }), [e.draggableId, e.index, s, l]), {
    children: p,
    draggableId: c,
    isEnabled: d,
    shouldRespectForcePress: m,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: f,
    dropAnimationFinished: y
  } = e;
  if (oP(e, o, n), iP(b), !b) {
    const x = Je(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: n,
      canDragInteractiveElements: h,
      shouldRespectForcePress: m,
      isEnabled: d
    }), [u, a, n, h, m, d]);
    nP(x);
  }
  const w = Je(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": c,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: aP
  } : null, [o, i, c, d]), E = ze((x) => {
    f.type === "DRAGGING" && f.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? y() : cr(y));
  }, [y, f]), v = Je(() => {
    const x = tP(f), N = f.type === "DRAGGING" && f.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": c,
        style: x,
        onTransitionEnd: N
      },
      dragHandleProps: w
    };
  }, [o, w, c, f, E, r]), g = Je(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, p(v, f.snapshot, g));
};
var cP = sP, Rm = (e, t) => e === t, Tm = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const lP = (e) => e.combine ? e.combine.draggableId : null, uP = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function dP() {
  const e = rt((n, o) => ({
    x: n,
    y: o
  })), t = rt((n, o, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: o,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: n,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = rt((n, o, i, a, s = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: s,
      combineWith: l,
      mode: o,
      offset: n,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(o, a, s, l, null)
    }
  }));
  return (n, o) => {
    if (fs(n)) {
      if (n.critical.draggable.id !== o.draggableId)
        return null;
      const i = n.current.client.offset, a = n.dimensions.draggables[o.draggableId], s = pn(n.impact), l = uP(n.impact), u = n.forceShouldAnimate;
      return r(e(i.x, i.y), n.movementMode, a, o.isClone, s, l, u);
    }
    if (n.phase === "DROP_ANIMATING") {
      const i = n.completed;
      if (i.result.draggableId !== o.draggableId)
        return null;
      const a = o.isClone, s = n.dimensions.draggables[o.draggableId], l = i.result, u = l.mode, p = Tm(l), c = lP(l), d = {
        duration: n.dropDuration,
        curve: us.drop,
        moveTo: n.newHomeClientOffset,
        opacity: c ? Wr.opacity.drop : null,
        scale: c ? Wr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: p,
          combineWith: c,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, p, c, d)
        }
      };
    }
    return null;
  };
}
function Vm(e = null) {
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
const pP = {
  mapped: {
    type: "SECONDARY",
    offset: qt,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Vm(null)
  }
};
function fP() {
  const e = rt((i, a) => ({
    x: i,
    y: a
  })), t = rt(Vm), r = rt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), n = (i) => i ? r(qt, i, !0) : null, o = (i, a, s, l) => {
    const u = s.displaced.visible[i], p = !!(l.inVirtualList && l.effected[i]), c = R1(s), d = c && c.draggableId === i ? a : null;
    if (!u) {
      if (!p)
        return n(d);
      if (s.displaced.invisible[i])
        return null;
      const b = w1(l.displacedBy.point), f = e(b.x, b.y);
      return r(f, d, !0);
    }
    if (p)
      return n(d);
    const m = s.displacedBy.point, h = e(m.x, m.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (fs(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : o(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const mP = () => {
  const e = dP(), t = fP();
  return (r, n) => e(r, n) || t(r, n) || pP;
}, gP = {
  dropAnimationFinished: L1
}, bP = ym(mP, gP, null, {
  context: _m,
  areStatePropsEqual: Rm
})(cP);
var hP = bP;
function vP(e) {
  return Nn(ms).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(hP, e);
}
const gs = (e) => (t) => e === t, yP = gs("scroll"), EP = gs("auto"), xP = gs("visible"), td = (e, t) => t(e.overflowX) || t(e.overflowY), wP = (e, t) => t(e.overflowX) && t(e.overflowY), Mm = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return td(r, yP) || td(r, EP);
}, SP = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = H1(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, Z()), !Mm(e))
    return !1;
  const r = window.getComputedStyle(t), n = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return wP(n, xP) || process.env.NODE_ENV !== "production" && $t(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, bs = (e) => e == null ? null : e === document.body ? SP() ? e : null : e === document.documentElement ? null : Mm(e) ? e : bs(e.parentElement);
var DP = (e) => {
  !e || !bs(e.parentElement) || process.env.NODE_ENV !== "production" && $t(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Bi = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Lm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Lm(e.parentElement) : !1;
var OP = (e) => {
  const t = bs(e), r = Lm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, NP = ({
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
      scrollSize: c,
      client: d
    } = s, m = Om({
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth,
      height: d.paddingBox.height,
      width: d.paddingBox.width
    });
    return {
      pageMarginBox: s.page.marginBox,
      frameClient: d,
      scrollSize: c,
      shouldClipSubject: s.shouldClipSubject,
      scroll: {
        initial: s.scroll,
        current: s.scroll,
        max: m,
        diff: {
          value: qt,
          displacement: qt
        }
      }
    };
  })(), u = o === "vertical" ? T1 : V1, p = P1({
    page: a,
    withPlaceholder: null,
    axis: u,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: r,
    isFixedOnPage: n,
    axis: u,
    isEnabled: t,
    client: i,
    page: a,
    frame: l,
    subject: p
  };
};
const CP = (e, t) => {
  const r = Sm(e);
  if (!t || e !== t)
    return r;
  const n = r.paddingBox.top - t.scrollTop, o = r.paddingBox.left - t.scrollLeft, i = n + t.scrollHeight, a = o + t.scrollWidth, s = xm({
    top: n,
    right: a,
    bottom: i,
    left: o
  }, r.border);
  return ls({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var _P = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: n,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const l = r.closestScrollable, u = CP(e, l), p = Vi(u, n), c = (() => {
    if (!l)
      return null;
    const d = Sm(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: d,
      page: Vi(d, n),
      scroll: Bi(l),
      scrollSize: m,
      shouldClipSubject: s
    };
  })();
  return NP({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: o,
    client: u,
    page: p,
    closest: c
  });
};
const IP = {
  passive: !1
}, PP = {
  passive: !0
};
var rd = (e) => e.shouldPublishImmediately ? IP : PP;
const rn = (e) => e && e.env.closestScrollable || null;
function AP(e) {
  const t = M(null), r = Nn(ds), n = Pm("droppable"), {
    registry: o,
    marshal: i
  } = r, a = K1(e), s = Je(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = M(s), u = Je(() => rt((v, g) => {
    t.current || (process.env.NODE_ENV !== "production" ? Z(!1, "Can only update scroll when dragging") : Z());
    const x = {
      x: v,
      y: g
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), p = ze(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? qt : Bi(v.env.closestScrollable);
  }, []), c = ze(() => {
    const v = p();
    u(v.x, v.y);
  }, [p, u]), d = Je(() => l1(c), [c]), m = ze(() => {
    const v = t.current, g = rn(v);
    if (v && g || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find scroll options while scrolling") : Z()), v.scrollOptions.shouldPublishImmediately) {
      c();
      return;
    }
    d();
  }, [d, c]), h = ze((v, g) => {
    t.current && (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot collect a droppable while a drag is occurring") : Z());
    const x = a.current, N = x.getDroppableRef();
    N || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot collect without a droppable ref") : Z());
    const C = OP(N), V = {
      ref: N,
      descriptor: s,
      env: C,
      scrollOptions: g
    };
    t.current = V;
    const A = _P({
      ref: N,
      descriptor: s,
      env: C,
      windowScroll: v,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Qu.contextId, r.contextId), $.addEventListener("scroll", m, rd(V.scrollOptions)), process.env.NODE_ENV !== "production" && DP($)), A;
  }, [r.contextId, s, m, a]), b = ze(() => {
    const v = t.current, g = rn(v);
    return v && g || (process.env.NODE_ENV !== "production" ? Z(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : Z()), Bi(g);
  }, []), f = ze(() => {
    const v = t.current;
    v || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot stop drag when no active drag") : Z());
    const g = rn(v);
    t.current = null, g && (d.cancel(), g.removeAttribute(Qu.contextId), g.removeEventListener("scroll", m, rd(v.scrollOptions)));
  }, [m, d]), y = ze((v) => {
    const g = t.current;
    g || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot scroll when there is no drag") : Z());
    const x = rn(g);
    x || (process.env.NODE_ENV !== "production" ? Z(!1, "Cannot scroll a droppable with no closest scrollable") : Z()), x.scrollTop += v.y, x.scrollLeft += v.x;
  }, []), w = Je(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: f,
    scroll: y
  }), [f, h, b, y]), E = Je(() => ({
    uniqueId: n,
    descriptor: s,
    callbacks: w
  }), [w, s, n]);
  wr(() => (l.current = E.descriptor, o.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && $t("Unsupported: changing the droppableId or type of a Droppable during a drag"), f()), o.droppable.unregister(E);
  }), [w, s, f, E, i, o.droppable]), wr(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), wr(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Wo() {
}
const $P = {
  width: 0,
  height: 0,
  margin: N1
}, RP = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? $P : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, TP = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const n = RP({
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
    transition: r !== "none" ? fn.placeholder : null
  };
}, VP = (e) => {
  const t = M(null), r = ze(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: n,
    onTransitionEnd: o,
    onClose: i,
    contextId: a
  } = e, [s, l] = Ge(e.animate === "open");
  se(() => s ? n !== "open" ? (r(), l(!1), Wo) : t.current ? Wo : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), r) : Wo, [n, s, r]);
  const u = ze((c) => {
    c.propertyName === "height" && (o(), n === "close" && i());
  }, [n, i, o]), p = TP({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: p,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var MP = I.memo(VP);
function jo(e) {
  return typeof e == "boolean";
}
function ko(e, t) {
  t.forEach((r) => r(e));
}
const LP = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? Z(!1, "A Droppable requires a droppableId prop") : Z()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? Z(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : Z());
}, function({
  props: e
}) {
  jo(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? Z(!1, "isDropDisabled must be a boolean") : Z()), jo(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? Z(!1, "isCombineEnabled must be a boolean") : Z()), jo(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? Z(!1, "ignoreContainerClipping must be a boolean") : Z());
}, function({
  getDroppableRef: e
}) {
  $m(e());
}], BP = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && $t(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], FP = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? Z(!1, "Must provide a clone render function (renderClone) for virtual lists") : Z());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? Z(!1, "Expected virtual list to not have a placeholder") : Z());
}];
function GP(e) {
  ps(() => {
    ko(e, LP), e.props.mode === "standard" && ko(e, BP), e.props.mode === "virtual" && ko(e, FP);
  });
}
class WP extends I.PureComponent {
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
const jP = (e) => {
  const t = ht(ds);
  t || (process.env.NODE_ENV !== "production" ? Z(!1, "Could not find app context") : Z());
  const {
    contextId: r,
    isMovementAllowed: n
  } = t, o = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    ignoreContainerClipping: c,
    isDropDisabled: d,
    isCombineEnabled: m,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: f,
    getContainerForClone: y
  } = e, w = ze(() => o.current, []), E = ze((P = null) => {
    o.current = P;
  }, []), v = ze(() => i.current, []), g = ze((P = null) => {
    i.current = P;
  }, []);
  GP({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: v
  });
  const x = ze(() => {
    n() && f({
      maxScroll: G1()
    });
  }, [n, f]);
  AP({
    droppableId: s,
    type: l,
    mode: u,
    direction: p,
    isDropDisabled: d,
    isCombineEnabled: m,
    ignoreContainerClipping: c,
    getDroppableRef: w
  });
  const N = Je(() => I.createElement(WP, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: k
  }) => I.createElement(MP, {
    placeholder: T,
    onClose: P,
    innerRef: g,
    animate: k,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, g]), C = Je(() => ({
    innerRef: E,
    placeholder: N,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, N, E]), V = b ? b.dragging.draggableId : null, A = Je(() => ({
    droppableId: s,
    type: l,
    isUsingCloneFor: V
  }), [s, V, l]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, k = I.createElement(vP, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (U, R) => T(U, R, P));
    return jr.createPortal(k, y());
  }
  return I.createElement(ms.Provider, {
    value: A
  }, a(C, h), $());
};
var kP = jP;
function zP() {
  return document.body || (process.env.NODE_ENV !== "production" ? Z(!1, "document.body is not ready") : Z()), document.body;
}
const nd = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: zP
}, Bm = (e) => {
  let t = {
    ...e
  }, r;
  for (r in nd)
    e[r] === void 0 && (t = {
      ...t,
      [r]: nd[r]
    });
  return t;
}, zo = (e, t) => e === t.droppable.type, od = (e, t) => t.draggables[e.draggable.id], HP = () => {
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
  }, r = rt((o) => ({
    draggableId: o.id,
    type: o.type,
    source: {
      index: o.index,
      droppableId: o.droppableId
    }
  })), n = rt((o, i, a, s, l, u) => {
    const p = l.descriptor.id;
    if (l.descriptor.droppableId === o) {
      const d = u ? {
        render: u,
        dragging: r(l.descriptor)
      } : null, m = {
        isDraggingOver: a,
        draggingOverWith: a ? p : null,
        draggingFromThisWith: p,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: m,
        useClone: d
      };
    }
    if (!i)
      return t;
    if (!s)
      return e;
    const c = {
      isDraggingOver: a,
      draggingOverWith: p,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: c,
      useClone: null
    };
  });
  return (o, i) => {
    const a = Bm(i), s = a.droppableId, l = a.type, u = !a.isDropDisabled, p = a.renderClone;
    if (fs(o)) {
      const c = o.critical;
      if (!zo(l, c))
        return t;
      const d = od(c, o.dimensions), m = pn(o.impact) === s;
      return n(s, u, m, m, d, p);
    }
    if (o.phase === "DROP_ANIMATING") {
      const c = o.completed;
      if (!zo(l, c.critical))
        return t;
      const d = od(c.critical, o.dimensions);
      return n(s, u, Tm(c.result) === s, pn(c.impact) === s, d, p);
    }
    if (o.phase === "IDLE" && o.completed && !o.shouldFlush) {
      const c = o.completed;
      if (!zo(l, c.critical))
        return t;
      const d = pn(c.impact) === s, m = !!(c.impact.at && c.impact.at.type === "COMBINE"), h = c.critical.droppable.id === s;
      return d ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, UP = {
  updateViewportMaxScroll: M1
};
ym(HP, UP, (e, t, r) => ({
  ...Bm(r),
  ...e,
  ...t
}), {
  context: _m,
  areStatePropsEqual: Rm
})(kP);
var Fi = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new WeakMap(), id = 0, qP = void 0;
function YP(e) {
  return e ? (nn.has(e) || (id += 1, nn.set(e, id.toString())), nn.get(e)) : "0";
}
function KP(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? YP(e.root) : e[t]}`).toString();
}
function XP(e) {
  const t = KP(e);
  let r = Fi.get(t);
  if (!r) {
    const n = /* @__PURE__ */ new Map();
    let o;
    const i = new IntersectionObserver((a) => {
      a.forEach((s) => {
        var l;
        const u = s.isIntersecting && o.some((p) => s.intersectionRatio >= p);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u), (l = n.get(s.target)) == null || l.forEach((p) => {
          p(u, s);
        });
      });
    }, e);
    o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: n
    }, Fi.set(t, r);
  }
  return r;
}
function JP(e, t, r = {}, n = qP) {
  if (typeof window.IntersectionObserver > "u" && n !== void 0) {
    const l = e.getBoundingClientRect();
    return t(n, {
      isIntersecting: n,
      target: e,
      intersectionRatio: typeof r.threshold == "number" ? r.threshold : 0,
      time: 0,
      boundingClientRect: l,
      intersectionRect: l,
      rootBounds: l
    }), () => {
    };
  }
  const { id: o, observer: i, elements: a } = XP(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), Fi.delete(o));
  };
}
function ZP({
  threshold: e,
  delay: t,
  trackVisibility: r,
  rootMargin: n,
  root: o,
  triggerOnce: i,
  skip: a,
  initialInView: s,
  fallbackInView: l,
  onChange: u
} = {}) {
  var p;
  const [c, d] = _.useState(null), m = _.useRef(u), [h, b] = _.useState({
    inView: !!s,
    entry: void 0
  });
  m.current = u, _.useEffect(
    () => {
      if (a || !c) return;
      let E;
      return E = JP(
        c,
        (v, g) => {
          b({
            inView: v,
            entry: g
          }), m.current && m.current(v, g), g.isIntersecting && i && E && (E(), E = void 0);
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
        l
      ), () => {
        E && E();
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(e) ? e.toString() : e,
      c,
      o,
      n,
      i,
      a,
      r,
      l,
      t
    ]
  );
  const f = (p = h.entry) == null ? void 0 : p.target, y = _.useRef(void 0);
  !c && f && !i && !a && y.current !== f && (y.current = f, b({
    inView: !!s,
    entry: void 0
  }));
  const w = [d, h.inView, h.entry];
  return w.ref = w[0], w.inView = w[1], w.entry = w[2], w;
}
const QP = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, n] = Ge(!1), o = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    n(i > 100);
  };
  return se(() => (window.addEventListener("scroll", o), () => {
    window.removeEventListener("scroll", o);
  }), []), r ? /* @__PURE__ */ z(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ z(
        ew,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, hA = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: n,
  isScrollTopButton: o = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: l, data: u } = e, p = u == null ? void 0 : u.pages.flatMap((m) => m), { ref: c, inView: d } = ZP();
  return se(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ He(mn, { children: [
    o && /* @__PURE__ */ z(QP, { className: n }),
    /* @__PURE__ */ z(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(p != null && p.length) && p.map((m, h) => t(m, h))
      }
    ),
    /* @__PURE__ */ z(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: c,
        children: (s || l) && /* @__PURE__ */ z(tw, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(p != null && p.length) && /* @__PURE__ */ z("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, vA = () => {
  const e = M(null);
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
  nA as Button,
  oA as Checkbox,
  iA as Chips,
  Gi as ErrorText,
  gn as Icon,
  hA as InfiniteScroll,
  aA as Input,
  sA as List,
  ad as Loader,
  cA as MultiSelectSearch,
  QP as ScrollTopButton,
  lA as Search,
  uA as Select,
  dA as Table,
  pA as Textarea,
  bd as Wrapper,
  wd as useDebounce,
  vA as useScroll
};
