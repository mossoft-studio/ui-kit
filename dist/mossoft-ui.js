import { jsx as q, jsxs as nt, Fragment as eo } from "react/jsx-runtime";
import * as N from "react";
import I, { useState as qe, useEffect as ue, useRef as M, useMemo as tv, useLayoutEffect as er, useContext as Ot } from "react";
import Er, { unstable_batchedUpdates as xr, flushSync as tr } from "react-dom";
const to = ({ name: e, className: t }) => /* @__PURE__ */ q("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ q(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), Sm = ({ style: e, text: t }) => /* @__PURE__ */ nt("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ q("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ q("span", { className: "text-base", children: t })
] }), GW = ({
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
  const [u, f] = qe(""), l = () => {
    n && o === "1C" && (f("Отправляем запрос в 1С"), setTimeout(
      () => f(o === "1C" ? "1С обрабатывает документы" : ""),
      4e3
    ));
  };
  ue(() => {
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
  return /* @__PURE__ */ nt(
    "button",
    {
      disabled: s || n,
      onClick: t,
      className: d,
      ...c,
      children: [
        n ? /* @__PURE__ */ q(Sm, { text: o === "1C" ? u : void 0 }) : e,
        a && !n && /* @__PURE__ */ q(
          to,
          {
            name: a,
            className: i.includes("small") ? "w-4 h-4 child:w-4 child:h-4" : "w-5 h-5 child:w-5 child:h-5"
          }
        )
      ]
    }
  );
}, ps = ({ error: e }) => /* @__PURE__ */ q("div", { className: "h-6", children: e && Object.keys(e).length ? /* @__PURE__ */ q("span", { className: "block text-danger text-[12px] text-center mt-[2px]", children: typeof e.message != "string" ? "Что-то пошло не так" : e.message }) : null }), jW = ({
  onChange: e,
  title: t,
  secondaryTitle: r,
  labelClassName: o,
  className: n,
  titleClassName: i,
  error: a,
  checked: s,
  disabled: c
}) => /* @__PURE__ */ nt(eo, { children: [
  /* @__PURE__ */ nt(
    "label",
    {
      onClick: (u) => u.stopPropagation(),
      className: `bg-light-gray w-fit flex items-center gap-[10px] py-[6px] px-[15px] md:py-2 rounded-[30px] md:rounded-[15px] cursor-pointer ${o}`,
      children: [
        /* @__PURE__ */ q(
          "span",
          {
            className: `text-sm text-dark-gray font-normal ${i}`,
            children: t
          }
        ),
        r && /* @__PURE__ */ q("span", { className: "text-center text-sm text-dark-gray font-normal", children: r }),
        /* @__PURE__ */ q(
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
  a && /* @__PURE__ */ q(ps, { error: a })
] }), kW = ({ items: e, disable: t, color: r, style: o }) => /* @__PURE__ */ q("div", { className: "flex flex-wrap gap-[6px]", children: e.map((n) => /* @__PURE__ */ q(eo, { children: n.title ? /* @__PURE__ */ q(
  "div",
  {
    style: o,
    className: `${t ? "bg-dark-gray" : r || "bg-primary"} rounded-[15px] px-[10px] py-[5px] text-sm text-white h-fit`,
    children: n.title
  },
  n.title
) : /* @__PURE__ */ q(eo, {}) })) });
function fs(e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, o = Object.getOwnPropertySymbols(e); n < o.length; n++)
      t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
  return r;
}
var tn;
(function(e) {
  e.event = "event", e.props = "prop";
})(tn || (tn = {}));
function Bt() {
}
function rv(e) {
  var t, r = void 0;
  return function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t && o.length === t.length && o.every(function(i, a) {
      return i === t[a];
    }) || (t = o, r = e.apply(void 0, o)), r;
  };
}
function pr(e) {
  return !!(e || "").match(/\d/);
}
function dr(e) {
  return e == null;
}
function nv(e) {
  return typeof e == "number" && isNaN(e);
}
function wm(e) {
  return dr(e) || nv(e) || typeof e == "number" && !isFinite(e);
}
function Dm(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function ov(e) {
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
function iv(e, t, r) {
  var o = ov(r), n = e.search(/[1-9]/);
  return n = n === -1 ? e.length : n, e.substring(0, n) + e.substring(n, e.length).replace(o, "$1" + t);
}
function av(e) {
  var t = M(e);
  t.current = e;
  var r = M(function() {
    for (var o = [], n = arguments.length; n--; ) o[n] = arguments[n];
    return t.current.apply(t, o);
  });
  return r.current;
}
function ms(e, t) {
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
function sv(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), o = r[0].replace(/^0+/, "") || "0", n = r[1] || "";
  return (t ? "-" : "") + o + (n ? "." + n : "");
}
function Nm(e, t, r) {
  for (var o = "", n = r ? "0" : "", i = 0; i <= t - 1; i++)
    o += e[i] || n;
  return o;
}
function gl(e, t) {
  return Array(t + 1).join(e);
}
function Cm(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var o = t.split(/[eE]/g), n = o[0], i = o[1];
  if (i = Number(i), !i)
    return r + n;
  n = n.replace(".", "");
  var a = 1 + i, s = n.length;
  return a < 0 ? n = "0." + gl("0", Math.abs(a)) + n : a >= s ? n = n + gl("0", a - s) : n = (n.substring(0, a) || "0") + "." + n.substring(a), r + n;
}
function bl(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var o = (e.indexOf(".") !== -1 || r) && t, n = ms(e), i = n.beforeDecimal, a = n.afterDecimal, s = n.hasNegation, c = parseFloat("0." + (a || "0")), u = a.length <= t ? "0." + a : c.toFixed(t), f = u.split("."), l = i;
  i && Number(f[0]) && (l = i.split("").reverse().reduce(function(b, p, v) {
    return b.length > v ? (Number(b[0]) + Number(p)).toString() + b.substring(1, b.length) : p + b;
  }, f[0]));
  var d = Nm(f[1] || "", t, r), g = s ? "-" : "", h = o ? "." : "";
  return "" + g + l + h + d;
}
function kt(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var _m = rv(function(e, t) {
  for (var r = 0, o = 0, n = e.length, i = t.length; e[r] === t[r] && r < n; )
    r++;
  for (; e[n - 1 - o] === t[i - 1 - o] && i - o > r && n - o > r; )
    o++;
  return {
    from: { start: r, end: n - o },
    to: { start: r, end: i - o }
  };
}), cv = function(e, t) {
  var r = Math.min(e.selectionStart, t);
  return {
    from: { start: r, end: e.selectionEnd },
    to: { start: r, end: t }
  };
};
function lv(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function wo(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function uv() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Im(e) {
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
function Pm(e, t) {
  return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " ";
}
function dv(e) {
  var t = e.currentValue, r = e.formattedValue, o = e.currentValueIndex, n = e.formattedValueIndex;
  return t[o] === r[n];
}
function pv(e, t, r, o, n, i, a) {
  a === void 0 && (a = dv);
  var s = n.findIndex(function(y) {
    return y;
  }), c = e.slice(0, s);
  !t && !r.startsWith(c) && (t = c, r = c + r, o = o + c.length);
  for (var u = r.length, f = e.length, l = {}, d = new Array(u), g = 0; g < u; g++) {
    d[g] = -1;
    for (var h = 0, b = f; h < b; h++) {
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
  for (var v = o; v < u && (d[v] === -1 || !i(r[v])); )
    v++;
  var w = v === u || d[v] === -1 ? f : d[v];
  for (v = o - 1; v > 0 && d[v] === -1; )
    v--;
  var E = v === -1 || d[v] === -1 ? 0 : d[v] + 1;
  return E > w ? w : o - E < w - o ? E : w;
}
function ro(e, t, r, o) {
  var n = e.length;
  if (t = lv(t, 0, n), o === "left") {
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
function fv(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, o = t.length; r < o; r++)
    t[r] = !!(pr(e[r]) || pr(e[r - 1]));
  return t;
}
function Am(e, t, r, o, n, i) {
  i === void 0 && (i = Bt);
  var a = av(function(h, b) {
    var p, v;
    return wm(h) ? (v = "", p = "") : typeof h == "number" || b ? (v = typeof h == "number" ? Cm(h) : h, p = o(v)) : (v = n(h, void 0), p = o(v)), { formattedValue: p, numAsString: v };
  }), s = qe(function() {
    return a(dr(e) ? t : e, r);
  }), c = s[0], u = s[1], f = function(h, b) {
    h.formattedValue !== c.formattedValue && u({
      formattedValue: h.formattedValue,
      numAsString: h.value
    }), i(h, b);
  }, l = e, d = r;
  dr(e) && (l = c.numAsString, d = !0);
  var g = a(l, d);
  return tv(function() {
    u(g);
  }, [g.formattedValue]), [c, f];
}
function mv(e) {
  return e.replace(/[^0-9]/g, "");
}
function gv(e) {
  return e;
}
function $m(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var o = e.customInput, n = e.renderText, i = e.getInputRef, a = e.format;
  a === void 0 && (a = gv);
  var s = e.removeFormatting;
  s === void 0 && (s = mv);
  var c = e.defaultValue, u = e.valueIsNumericString, f = e.onValueChange, l = e.isAllowed, d = e.onChange;
  d === void 0 && (d = Bt);
  var g = e.onKeyDown;
  g === void 0 && (g = Bt);
  var h = e.onMouseUp;
  h === void 0 && (h = Bt);
  var b = e.onFocus;
  b === void 0 && (b = Bt);
  var p = e.onBlur;
  p === void 0 && (p = Bt);
  var v = e.value, w = e.getCaretBoundary;
  w === void 0 && (w = fv);
  var E = e.isValidInputCharacter;
  E === void 0 && (E = pr);
  var y = e.isCharacterSame, m = fs(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), x = Am(v, c, !!u, a, s, f), D = x[0], C = D.formattedValue, V = D.numAsString, A = x[1], $ = M(), P = M({ formattedValue: C, numAsString: V }), T = function(H, ee) {
    P.current = { formattedValue: H.formattedValue, numAsString: H.value }, A(H, ee);
  }, G = qe(!1), k = G[0], R = G[1], W = M(null), F = M({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ue(function() {
    return R(!0), function() {
      clearTimeout(F.current.setCaretTimeout), clearTimeout(F.current.focusTimeout);
    };
  }, []);
  var j = a, z = function(H, ee) {
    var fe = parseFloat(ee);
    return {
      formattedValue: H,
      value: ee,
      floatValue: isNaN(fe) ? void 0 : fe
    };
  }, B = function(H, ee, fe) {
    H.selectionStart === 0 && H.selectionEnd === H.value.length || (kt(H, ee), F.current.setCaretTimeout = setTimeout(function() {
      H.value === fe && H.selectionStart !== ee && kt(H, ee);
    }, 0));
  }, U = function(H, ee, fe) {
    return ro(H, ee, w(H), fe);
  }, K = function(H, ee, fe) {
    var Ye = w(ee), Et = pv(ee, C, H, fe, Ye, E, y);
    return Et = ro(ee, Et, Ye), Et;
  }, X = function(H) {
    var ee = H.formattedValue;
    ee === void 0 && (ee = "");
    var fe = H.input, Ye = H.source, Et = H.event, Xe = H.numAsString, He;
    if (fe) {
      var Mt = H.inputValue || fe.value, Ft = wo(fe);
      fe.value = ee, He = K(Mt, ee, Ft), He !== void 0 && B(fe, He, ee);
    }
    ee !== C && T(z(ee, Xe), { event: Et, source: Ye });
  };
  ue(function() {
    var H = P.current, ee = H.formattedValue, fe = H.numAsString;
    (C !== ee || V !== fe) && T(z(C, V), {
      event: void 0,
      source: tn.props
    });
  }, [C, V]);
  var te = W.current ? wo(W.current) : void 0, de = typeof window < "u" ? er : ue;
  de(function() {
    var H = W.current;
    if (C !== P.current.formattedValue && H) {
      var ee = K(P.current.formattedValue, C, te);
      H.value = C, B(H, ee, C);
    }
  }, [C]);
  var Y = function(H, ee, fe) {
    var Ye = ee.target, Et = $.current ? cv($.current, Ye.selectionEnd) : _m(C, H), Xe = Object.assign(Object.assign({}, Et), { lastValue: C }), He = s(H, Xe), Mt = j(He);
    if (He = s(Mt, void 0), l && !l(z(Mt, He))) {
      var Ft = ee.target, Wt = wo(Ft), So = K(H, C, Wt);
      return Ft.value = C, B(Ft, So, C), !1;
    }
    return X({
      formattedValue: Mt,
      numAsString: He,
      inputValue: H,
      event: ee,
      source: fe,
      input: ee.target
    }), !0;
  }, J = function(H, ee) {
    ee === void 0 && (ee = 0);
    var fe = H.selectionStart, Ye = H.selectionEnd;
    $.current = { selectionStart: fe, selectionEnd: Ye + ee };
  }, L = function(H) {
    var ee = H.target, fe = ee.value, Ye = Y(fe, H, tn.event);
    Ye && d(H), $.current = void 0;
  }, Z = function(H) {
    var ee = H.target, fe = H.key, Ye = ee.selectionStart, Et = ee.selectionEnd, Xe = ee.value;
    Xe === void 0 && (Xe = "");
    var He;
    fe === "ArrowLeft" || fe === "Backspace" ? He = Math.max(Ye - 1, 0) : fe === "ArrowRight" ? He = Math.min(Ye + 1, Xe.length) : fe === "Delete" && (He = Ye);
    var Mt = 0;
    fe === "Delete" && Ye === Et && (Mt = 1);
    var Ft = fe === "ArrowLeft" || fe === "ArrowRight";
    if (He === void 0 || Ye !== Et && !Ft) {
      g(H), J(ee, Mt);
      return;
    }
    var Wt = He;
    if (Ft) {
      var So = fe === "ArrowLeft" ? "left" : "right";
      Wt = U(Xe, He, So), Wt !== He && H.preventDefault();
    } else fe === "Delete" && !E(Xe[He]) ? Wt = U(Xe, He, "right") : fe === "Backspace" && !E(Xe[He]) && (Wt = U(Xe, He, "left"));
    Wt !== He && B(ee, Wt, Xe), g(H), J(ee, Mt);
  }, be = function(H) {
    var ee = H.target, fe = function() {
      var Ye = ee.selectionStart, Et = ee.selectionEnd, Xe = ee.value;
      if (Xe === void 0 && (Xe = ""), Ye === Et) {
        var He = U(Xe, Ye);
        He !== Ye && B(ee, He, Xe);
      }
    };
    fe(), requestAnimationFrame(function() {
      fe();
    }), h(H), J(ee);
  }, O = function(H) {
    H.persist && H.persist();
    var ee = H.target, fe = H.currentTarget;
    W.current = ee, F.current.focusTimeout = setTimeout(function() {
      var Ye = ee.selectionStart, Et = ee.selectionEnd, Xe = ee.value;
      Xe === void 0 && (Xe = "");
      var He = U(Xe, Ye);
      He !== Ye && !(Ye === 0 && Et === Xe.length) && B(ee, He, Xe), b(Object.assign(Object.assign({}, H), { currentTarget: fe }));
    }, 0);
  }, le = function(H) {
    W.current = null, clearTimeout(F.current.focusTimeout), clearTimeout(F.current.setCaretTimeout), p(H);
  }, S = k && uv() ? "numeric" : void 0, ce = Object.assign({ inputMode: S }, m, {
    type: t,
    value: C,
    onChange: L,
    onKeyDown: Z,
    onMouseUp: be,
    onFocus: O,
    onBlur: le
  });
  if (r === "text")
    return n ? I.createElement(I.Fragment, null, n(C, m) || null) : I.createElement("span", Object.assign({}, m, { ref: i }), C);
  if (o) {
    var me = o;
    return I.createElement(me, Object.assign({}, ce, { ref: i }));
  }
  return I.createElement("input", Object.assign({}, ce, { ref: i }));
}
function hl(e, t) {
  var r = t.decimalScale, o = t.fixedDecimalScale, n = t.prefix;
  n === void 0 && (n = "");
  var i = t.suffix;
  i === void 0 && (i = "");
  var a = t.allowNegative, s = t.thousandsGroupStyle;
  if (s === void 0 && (s = "thousand"), e === "" || e === "-")
    return e;
  var c = bo(t), u = c.thousandSeparator, f = c.decimalSeparator, l = r !== 0 && e.indexOf(".") !== -1 || r && o, d = ms(e, a), g = d.beforeDecimal, h = d.afterDecimal, b = d.addNegation;
  return r !== void 0 && (h = Nm(h, r, !!o)), u && (g = iv(g, u, s)), n && (g = n + g), i && (h = h + i), b && (g = "-" + g), e = g + (l && f || "") + h, e;
}
function bo(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, o = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), o || (o = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: o
  };
}
function bv(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), o = new RegExp("(-)(.)*(-)"), n = r.test(e), i = o.test(e);
  return e = e.replace(/-/g, ""), n && !i && t && (e = "-" + e), e;
}
function hv(e, t) {
  return new RegExp("(^-)|[0-9]|" + Dm(e), "g");
}
function yv(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function vv(e, t, r) {
  var o;
  t === void 0 && (t = Im(e));
  var n = r.allowNegative, i = r.prefix;
  i === void 0 && (i = "");
  var a = r.suffix;
  a === void 0 && (a = "");
  var s = r.decimalScale, c = t.from, u = t.to, f = u.start, l = u.end, d = bo(r), g = d.allowedDecimalSeparators, h = d.decimalSeparator, b = e[l] === h;
  if (pr(e) && (e === i || e === a) && t.lastValue === "")
    return e;
  if (l - f === 1 && g.indexOf(e[f]) !== -1) {
    var p = s === 0 ? "" : h;
    e = e.substring(0, f) + p + e.substring(f + 1, e.length);
  }
  var v = function(W, F, j) {
    var z = !1, B = !1;
    i.startsWith("-") ? z = !1 : W.startsWith("--") ? (z = !1, B = !0) : a.startsWith("-") && W.length === a.length ? z = !1 : W[0] === "-" && (z = !0);
    var U = z ? 1 : 0;
    return B && (U = 2), U && (W = W.substring(U), F -= U, j -= U), { value: W, start: F, end: j, hasNegation: z };
  }, w = v(e, f, l), E = w.hasNegation;
  o = w, e = o.value, f = o.start, l = o.end;
  var y = v(t.lastValue, c.start, c.end), m = y.start, x = y.end, D = y.value, C = e.substring(f, l);
  e.length && D.length && (m > D.length - a.length || x < i.length) && !(C && a.startsWith(C)) && (e = D);
  var V = 0;
  e.startsWith(i) ? V += i.length : f < i.length && (V = f), e = e.substring(V), l -= V;
  var A = e.length, $ = e.length - a.length;
  e.endsWith(a) ? A = $ : (l > $ || l > e.length - a.length) && (A = l), e = e.substring(0, A), e = bv(E ? "-" + e : e, n), e = (e.match(hv(h)) || []).join("");
  var P = e.indexOf(h);
  e = e.replace(new RegExp(Dm(h), "g"), function(W, F) {
    return F === P ? "." : "";
  });
  var T = ms(e, n), G = T.beforeDecimal, k = T.afterDecimal, R = T.addNegation;
  return u.end - u.start < c.end - c.start && G === "" && b && !parseFloat(k) && (e = R ? "-" : ""), e;
}
function Ev(e, t) {
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
function xv(e) {
  var t = bo(e), r = t.thousandSeparator, o = t.decimalSeparator, n = e.prefix;
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
function Ov(e) {
  e = xv(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, o = e.allowLeadingZeros, n = e.onKeyDown;
  n === void 0 && (n = Bt);
  var i = e.onBlur;
  i === void 0 && (i = Bt);
  var a = e.thousandSeparator, s = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var f = e.defaultValue, l = e.value, d = e.valueIsNumericString, g = e.onValueChange, h = fs(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), b = bo(e), p = b.decimalSeparator, v = b.allowedDecimalSeparators, w = function(R) {
    return hl(R, e);
  }, E = function(R, W) {
    return vv(R, W, e);
  }, y = dr(l) ? f : l, m = d ?? yv(y, u, t);
  dr(l) ? dr(f) || (m = m || typeof f == "number") : m = m || typeof l == "number";
  var x = function(R) {
    return wm(R) ? R : (typeof R == "number" && (R = Cm(R)), m && typeof s == "number" ? bl(R, s, !!c) : R);
  }, D = Am(x(l), x(f), !!m, w, E, g), C = D[0], V = C.numAsString, A = C.formattedValue, $ = D[1], P = function(R) {
    var W = R.target, F = R.key, j = W.selectionStart, z = W.selectionEnd, B = W.value;
    if (B === void 0 && (B = ""), (F === "Backspace" || F === "Delete") && z < u.length) {
      R.preventDefault();
      return;
    }
    if (j !== z) {
      n(R);
      return;
    }
    F === "Backspace" && B[0] === "-" && j === u.length + 1 && r && kt(W, 1), s && c && (F === "Backspace" && B[j - 1] === p ? (kt(W, j - 1), R.preventDefault()) : F === "Delete" && B[j] === p && R.preventDefault()), v != null && v.includes(F) && B[j] === p && kt(W, j + 1);
    var U = a === !0 ? "," : a;
    F === "Backspace" && B[j - 1] === U && kt(W, j - 1), F === "Delete" && B[j] === U && kt(W, j + 1), n(R);
  }, T = function(R) {
    var W = V;
    if (W.match(/\d/g) || (W = ""), o || (W = sv(W)), c && s && (W = bl(W, s, c)), W !== V) {
      var F = hl(W, e);
      $({
        formattedValue: F,
        value: W,
        floatValue: parseFloat(W)
      }, {
        event: R,
        source: tn.event
      });
    }
    i(R);
  }, G = function(R) {
    return R === p ? !0 : pr(R);
  }, k = function(R) {
    var W = R.currentValue, F = R.lastValue, j = R.formattedValue, z = R.currentValueIndex, B = R.formattedValueIndex, U = W[z], K = j[B], X = _m(F, W), te = X.to, de = function(Y) {
      return E(Y).indexOf(".") + u.length;
    };
    return l === 0 && c && s && W[te.start] === p && de(W) < z && de(j) > B ? !1 : z >= te.start && z < te.end && v && v.includes(U) && K === p ? !0 : U === K;
  };
  return Object.assign(Object.assign({}, h), {
    value: A,
    valueIsNumericString: !1,
    isValidInputCharacter: G,
    isCharacterSame: k,
    onValueChange: $,
    format: w,
    removeFormatting: E,
    getCaretBoundary: function(R) {
      return Ev(R, e);
    },
    onKeyDown: P,
    onBlur: T
  });
}
function Sv(e) {
  var t = Ov(e);
  return I.createElement($m, Object.assign({}, t));
}
function wv(e, t) {
  var r = t.format, o = t.allowEmptyFormatting, n = t.mask, i = t.patternChar;
  if (i === void 0 && (i = "#"), e === "" && !o)
    return "";
  for (var a = 0, s = r.split(""), c = 0, u = r.length; c < u; c++)
    r[c] === i && (s[c] = e[a] || Pm(n, a), a += 1);
  return s.join("");
}
function Dv(e, t, r) {
  t === void 0 && (t = Im(e));
  var o = r.format, n = r.patternChar;
  n === void 0 && (n = "#");
  var i = t.from, a = t.to, s = t.lastValue;
  s === void 0 && (s = "");
  var c = function(p) {
    return o[p] === n;
  }, u = function(p, v) {
    for (var w = "", E = 0; E < p.length; E++)
      c(v + E) && pr(p[E]) && (w += p[E]);
    return w;
  }, f = function(p) {
    return p.replace(/[^0-9]/g, "");
  };
  if (!o.match(/\d/))
    return f(e);
  if ((s === "" || i.end - i.start === s.length) && e.length === o.length) {
    for (var l = "", d = 0; d < e.length; d++)
      if (c(d))
        pr(e[d]) && (l += e[d]);
      else if (e[d] !== o[d])
        return f(e);
    return l;
  }
  var g = s.substring(0, i.start), h = e.substring(a.start, a.end), b = s.substring(i.end);
  return "" + u(g, 0) + f(h) + u(b, i.end);
}
function Nv(e, t) {
  var r = t.format, o = t.mask, n = t.patternChar;
  n === void 0 && (n = "#");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = 0, s = -1, c = {};
  r.split("").forEach(function(d, g) {
    var h = void 0;
    d === n && (a++, h = Pm(o, a - 1), s === -1 && e[g] === h && (s = g)), c[g] = h;
  });
  for (var u = function(d) {
    return r[d] === n && e[d] !== c[d];
  }, f = 0, l = i.length; f < l; f++)
    i[f] = f === s || u(f) || u(f - 1);
  return i[r.indexOf(n)] = !0, i;
}
function Cv(e) {
  var t = e.mask;
  if (t) {
    var r = t === "string" ? t : t.toString();
    if (r.match(/\d/g))
      throw new Error("Mask " + t + " should not contain numeric character;");
  }
}
function _v(e, t) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && typeof e == "string" && (!!e.match(/^\d+$/) || e === "");
}
function Iv(e) {
  e.mask, e.allowEmptyFormatting;
  var t = e.format, r = e.inputMode;
  r === void 0 && (r = "numeric");
  var o = e.onKeyDown;
  o === void 0 && (o = Bt);
  var n = e.patternChar;
  n === void 0 && (n = "#");
  var i = e.value, a = e.defaultValue, s = e.valueIsNumericString, c = fs(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar", "value", "defaultValue", "valueIsNumericString"]);
  Cv(e);
  var u = function(h) {
    return Nv(h, e);
  }, f = function(h) {
    var b = h.key, p = h.target, v = p.selectionStart, w = p.selectionEnd, E = p.value;
    if (v !== w) {
      o(h);
      return;
    }
    var y = v;
    if (b === "Backspace" || b === "Delete") {
      var m = "right";
      if (b === "Backspace") {
        for (; y > 0 && t[y - 1] !== n; )
          y--;
        m = "left";
      } else {
        for (var x = t.length; y < x && t[y] !== n; )
          y++;
        m = "right";
      }
      y = ro(E, y, u(E), m);
    } else t[y] !== n && b !== "ArrowLeft" && b !== "ArrowRight" && (y = ro(E, y + 1, u(E), "right"));
    y !== v && kt(p, y), o(h);
  }, l = dr(i) ? a : i, d = s ?? _v(l, t), g = Object.assign(Object.assign({}, e), { valueIsNumericString: d });
  return Object.assign(Object.assign({}, c), {
    value: i,
    defaultValue: a,
    valueIsNumericString: d,
    inputMode: r,
    format: function(h) {
      return wv(h, g);
    },
    removeFormatting: function(h, b) {
      return Dv(h, b, g);
    },
    getCaretBoundary: u,
    onKeyDown: f
  });
}
function Pv(e) {
  var t = Iv(e);
  return I.createElement($m, Object.assign({}, t));
}
const Av = {
  number: {
    allowNegative: !1,
    allowLeadingZeros: !1,
    thousandSeparator: " ",
    thousandsGroupStyle: "thousand"
  }
}, zW = ({
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
  format: f,
  decimalScale: l = 1,
  ...d
}) => {
  var b, p;
  const g = "!border-danger", { error: h } = o;
  return /* @__PURE__ */ nt("label", { children: [
    r && /* @__PURE__ */ q("span", { className: `text-primary ${i}`, children: r }),
    f ? /* @__PURE__ */ q(
      Pv,
      {
        onValueChange: (v) => {
          var w;
          t == null || t.onChange((w = v.value.replace("_", "")) == null ? void 0 : w.toString());
        },
        value: (b = t == null ? void 0 : t.value) == null ? void 0 : b.toString(),
        valueIsNumericString: !0,
        allowEmptyFormatting: !0,
        type: e,
        mask: "_",
        className: `${h ? g : ""} w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
        format: f,
        ...d
      }
    ) : e === "number" ? /* @__PURE__ */ nt(
      "div",
      {
        className: `${h ? g : ""} ${s} flex items-center justify-between w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] transition-all duration-300`,
        children: [
          /* @__PURE__ */ q(
            Sv,
            {
              decimalScale: l,
              onValueChange: (v) => {
                var w;
                return t == null ? void 0 : t.onChange((w = v.value.replace("_", "")) == null ? void 0 : w.toString());
              },
              value: (p = t == null ? void 0 : t.value) == null ? void 0 : p.toString(),
              className: `w-full bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`,
              ...d,
              ...Av.number
            }
          ),
          n ? /* @__PURE__ */ q("span", { className: "text-sm md:text-base text-dark-gray font-normal pr-[15px] md:pr-[10px]", children: n }) : null
        ]
      }
    ) : /* @__PURE__ */ q(
      "input",
      {
        ...t,
        ...d,
        type: e,
        className: `${h ? g : ""} w-full bg-white border-[2px] border-primary rounded-[30px] md:border-primary md:bg-white md:rounded-[15px] text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[14px] md:p-[10px] transition-all duration-300 ${c}`
      }
    ),
    h && /* @__PURE__ */ q(ps, { error: h })
  ] });
}, Tm = ({
  children: e,
  className: t
}) => /* @__PURE__ */ q("div", { className: `bg-main rounded-[25px] py-5 px-[30px] ${t}`, children: e }), HW = ({ data: e, className: t, onClick: r }) => {
  const o = "bg-white after:border-main-green child:text-black [&>svg]:fill-main-green", [n] = qe(null);
  return /* @__PURE__ */ q(Tm, { className: `md:h-full flex ${t}`, children: /* @__PURE__ */ q("div", { className: "md:overflow-y-auto w-full grid gap-1", children: e.map((i) => /* @__PURE__ */ nt(
    "div",
    {
      onClick: () => r(i.value),
      className: `relative flex gap-4 transition-all duration-300 items-center px-[10px] py-[10px] md:py-[15px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-main-green after:rotate-45 after:transition-all after:duration-300 cursor-pointer rounded-[15px] ${n === i.value && o}`,
      children: [
        /* @__PURE__ */ q("span", { className: " text-sm text-black font-normal transition-all duration-300", children: i.label }),
        i.row && /* @__PURE__ */ q("span", { className: "text-sm text-dark-gray font-normal transition-all duration-300 m-auto", children: i.row })
      ]
    },
    i.value
  )) }) });
}, gs = "-", $v = (e) => {
  const t = Rv(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (a) => {
      const s = a.split(gs);
      return s[0] === "" && s.length !== 1 && s.shift(), Rm(s, t) || Tv(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const c = r[a] || [];
      return s && o[a] ? [...c, ...o[a]] : c;
    }
  };
}, Rm = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], o = t.nextPart.get(r), n = o ? Rm(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const i = e.join(gs);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}, yl = /^\[(.+)\]$/, Tv = (e) => {
  if (yl.test(e)) {
    const t = yl.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Rv = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Mv(Object.entries(e.classGroups), r).forEach(([i, a]) => {
    Qi(a, o, i, t);
  }), o;
}, Qi = (e, t, r, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const i = n === "" ? t : vl(t, n);
      i.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Vv(n)) {
        Qi(n(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([i, a]) => {
      Qi(a, vl(t, i), r, o);
    });
  });
}, vl = (e, t) => {
  let r = e;
  return t.split(gs).forEach((o) => {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}, Vv = (e) => e.isThemeGetter, Mv = (e, t) => t ? e.map(([r, o]) => {
  const n = o.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
  return [r, n];
}) : e, Lv = (e) => {
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
}, Vm = "!", Bv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, o = t.length === 1, n = t[0], i = t.length, a = (s) => {
    const c = [];
    let u = 0, f = 0, l;
    for (let p = 0; p < s.length; p++) {
      let v = s[p];
      if (u === 0) {
        if (v === n && (o || s.slice(p, p + i) === t)) {
          c.push(s.slice(f, p)), f = p + i;
          continue;
        }
        if (v === "/") {
          l = p;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    const d = c.length === 0 ? s : s.substring(f), g = d.startsWith(Vm), h = g ? d.substring(1) : d, b = l && l > f ? l - f : void 0;
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
}, Fv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...r.sort(), o), r = []) : r.push(o);
  }), t.push(...r.sort()), t;
}, Wv = (e) => ({
  cache: Lv(e.cacheSize),
  parseClassName: Bv(e),
  ...$v(e)
}), Gv = /\s+/, jv = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: o,
    getConflictingClassGroupIds: n
  } = t, i = [], a = e.trim().split(Gv);
  let s = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const u = a[c], {
      modifiers: f,
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
    const p = Fv(f).join(":"), v = l ? p + Vm : p, w = v + b;
    if (i.includes(w))
      continue;
    i.push(w);
    const E = n(b, h);
    for (let y = 0; y < E.length; ++y) {
      const m = E[y];
      i.push(v + m);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function kv() {
  let e = 0, t, r, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Mm(t)) && (o && (o += " "), o += r);
  return o;
}
const Mm = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Mm(e[o])) && (r && (r += " "), r += t);
  return r;
};
function zv(e, ...t) {
  let r, o, n, i = a;
  function a(c) {
    const u = t.reduce((f, l) => l(f), e());
    return r = Wv(u), o = r.cache.get, n = r.cache.set, i = s, s(c);
  }
  function s(c) {
    const u = o(c);
    if (u)
      return u;
    const f = jv(c, r);
    return n(c, f), f;
  }
  return function() {
    return i(kv.apply(null, arguments));
  };
}
const Ke = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Lm = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hv = /^\d+\/\d+$/, Uv = /* @__PURE__ */ new Set(["px", "full", "screen"]), qv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Xv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Lt = (e) => Ir(e) || Uv.has(e) || Hv.test(e), Gt = (e) => Fr(e, "length", iE), Ir = (e) => !!e && !Number.isNaN(Number(e)), Do = (e) => Fr(e, "number", Ir), jr = (e) => !!e && Number.isInteger(Number(e)), Zv = (e) => e.endsWith("%") && Ir(e.slice(0, -1)), pe = (e) => Lm.test(e), jt = (e) => qv.test(e), Qv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), eE = (e) => Fr(e, Qv, Bm), tE = (e) => Fr(e, "position", Bm), rE = /* @__PURE__ */ new Set(["image", "url"]), nE = (e) => Fr(e, rE, sE), oE = (e) => Fr(e, "", aE), kr = () => !0, Fr = (e, t, r) => {
  const o = Lm.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : r(o[2]) : !1;
}, iE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kv.test(e) && !Yv.test(e)
), Bm = () => !1, aE = (e) => Xv.test(e), sE = (e) => Jv.test(e), cE = () => {
  const e = Ke("colors"), t = Ke("spacing"), r = Ke("blur"), o = Ke("brightness"), n = Ke("borderColor"), i = Ke("borderRadius"), a = Ke("borderSpacing"), s = Ke("borderWidth"), c = Ke("contrast"), u = Ke("grayscale"), f = Ke("hueRotate"), l = Ke("invert"), d = Ke("gap"), g = Ke("gradientColorStops"), h = Ke("gradientColorStopPositions"), b = Ke("inset"), p = Ke("margin"), v = Ke("opacity"), w = Ke("padding"), E = Ke("saturate"), y = Ke("scale"), m = Ke("sepia"), x = Ke("skew"), D = Ke("space"), C = Ke("translate"), V = () => ["auto", "contain", "none"], A = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", pe, t], P = () => [pe, t], T = () => ["", Lt, Gt], G = () => ["auto", Ir, pe], k = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", pe], z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [Ir, pe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [kr],
      spacing: [Lt, Gt],
      blur: ["none", "", jt, pe],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", jt, pe],
      borderSpacing: P(),
      borderWidth: T(),
      contrast: B(),
      grayscale: j(),
      hueRotate: B(),
      invert: j(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Zv, Gt],
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
        aspect: ["auto", "square", "video", pe]
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
        columns: [jt]
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
        object: [...k(), pe]
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
        z: ["auto", jr, pe]
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
        flex: ["1", "auto", "initial", "none", pe]
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
        order: ["first", "last", "none", jr, pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [kr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", jr, pe]
        }, pe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [kr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [jr, pe]
        }, pe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": ["auto", "min", "max", "fr", pe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", pe]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", pe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [pe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [pe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [jt]
        }, jt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [pe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [pe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", jt, Gt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Do]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [kr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", pe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ir, Do]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Lt, pe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", pe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", pe]
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
        "placeholder-opacity": [v]
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
        "text-opacity": [v]
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
        decoration: ["auto", "from-font", Lt, Gt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Lt, pe]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", pe]
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
        content: ["none", pe]
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
        "bg-opacity": [v]
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
        bg: [...k(), tE]
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
        bg: ["auto", "cover", "contain", eE]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, nE]
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
        "border-opacity": [v]
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
        "divide-opacity": [v]
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
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Lt, pe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Lt, Gt]
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
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Lt, Gt]
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
        shadow: ["", "inner", "none", jt, oE]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [kr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
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
        "drop-shadow": ["", "none", jt, pe]
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
        "hue-rotate": [f]
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
        sepia: [m]
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
        "backdrop-hue-rotate": [f]
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
        "backdrop-opacity": [v]
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
        "backdrop-sepia": [m]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", pe]
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
        ease: ["linear", "in", "out", "in-out", pe]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", pe]
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
        rotate: [jr, pe]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", pe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", pe]
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
        "will-change": ["auto", "scroll", "contents", "transform", pe]
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
        stroke: [Lt, Gt, Do]
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
}, lE = /* @__PURE__ */ zv(cE);
function Fm(e, t) {
  const [r, o] = qe(e);
  return ue(() => {
    const n = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e]), r;
}
const UW = ({
  options: e,
  field: t,
  className: r,
  ...o
}) => {
  const [n, i] = qe(!1), [a, s] = qe(""), c = Fm(a, 100), u = M(null);
  ue(() => {
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
  return /* @__PURE__ */ nt("div", { ref: u, className: "relative", children: [
    /* @__PURE__ */ nt("div", { className: "h-fit w-full", children: [
      n && /* @__PURE__ */ q(
        to,
        {
          name: "search",
          className: "w-5 h-5 absolute right-[7px] top-0 bottom-0 my-auto !text-dark"
        }
      ),
      /* @__PURE__ */ q(
        "input",
        {
          ...o,
          ref: u,
          className: lE(
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
    n && /* @__PURE__ */ q("ul", { className: "absolute z-10 w-full bg-white shadow-lg max-h-40 mt-1 rounded-md overflow-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent", children: e.filter(
      (l) => l.label.toLowerCase().includes(c.toLowerCase())
    ).map((l) => {
      var d;
      return /* @__PURE__ */ q(
        "li",
        {
          onClick: () => f(l.value),
          className: "px-4 py-2 hover:bg-gray-100 cursor-pointer",
          children: /* @__PURE__ */ nt("div", { className: "flex flex-row", children: [
            l.icon && /* @__PURE__ */ q(to, { name: l.icon }),
            /* @__PURE__ */ q(
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
}, qW = ({
  placeholder: e,
  setValue: t,
  value: r,
  className: o,
  parentClassName: n
}) => {
  const [i, a] = qe(r), s = Fm(i, 300);
  return ue(() => {
    t == null || t(s);
  }, [s]), /* @__PURE__ */ nt("div", { className: `relative h-fit w-full ${n}`, children: [
    /* @__PURE__ */ q(
      to,
      {
        name: "search",
        className: "w-5 h-5 md:w-[25px] md:h-[25px] absolute left-[10px] md:left-[15px] top-0 bottom-0 my-auto"
      }
    ),
    /* @__PURE__ */ q(
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
}, KW = ({
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
}) => /* @__PURE__ */ nt("label", { children: [
  c && /* @__PURE__ */ q("span", { className: `text-primary ${i}`, children: c }),
  /* @__PURE__ */ q(
    "div",
    {
      className: `relative w-full min-w-[190px] after:absolute after:right-4 after:top-0 after:bottom-0 after:my-auto after:w-2 after:h-2 after:border-t-2 after:border-r-2 after:border-dark-gray after:rotate-[134deg] after:transition-all after:duration-300 ${a}`,
      children: /* @__PURE__ */ nt(
        "select",
        {
          ...o,
          ...u,
          className: `w-full cursor-pointer appearance-none bg-light-gray border-[2px] border-primary rounded-[30px] md:border-primary md:rounded-[15px] text-dark-gray text-sm md:text-base font-normal placeholder:text-dark-gray block py-[6px] px-[10px] !pr-9 md:py-[7px] transition-all duration-300 ${r}`,
          children: [
            /* @__PURE__ */ q("option", { value: "", selected: !0, children: e }),
            t == null ? void 0 : t.map((f, l) => /* @__PURE__ */ q("option", { value: f.value, className: "text-black", children: f.label }, l))
          ]
        }
      )
    }
  ),
  /* @__PURE__ */ q(ps, { error: n == null ? void 0 : n.error })
] });
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function uE(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || "default");
    if (rn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dE(e) {
  var t = uE(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function pE(e, t, r) {
  return (t = dE(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function El(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function xl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? El(Object(r), !0).forEach(function(o) {
      pE(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : El(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function xt(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ol = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), No = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Sl = {
  INIT: "@@redux/INIT" + No(),
  REPLACE: "@@redux/REPLACE" + No(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + No();
  }
};
function fE(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function mE(e) {
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
  if (hE(e)) return "date";
  if (bE(e)) return "error";
  var r = gE(e);
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
function gE(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function bE(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function hE(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function lr(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = mE(e)), t;
}
function Wm(e, t, r) {
  var o;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? xt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(1) : "Expected the enhancer to be a function. Instead, received: '" + lr(r) + "'");
    return r(Wm)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? xt(2) : "Expected the root reducer to be a function. Instead, received: '" + lr(e) + "'");
  var n = e, i = t, a = [], s = a, c = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function f() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function l(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(4) : "Expected the listener to be a function. Instead, received: '" + lr(b) + "'");
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var p = !0;
    return u(), s.push(b), function() {
      if (p) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? xt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        p = !1, u();
        var w = s.indexOf(b);
        s.splice(w, 1), a = null;
      }
    };
  }
  function d(b) {
    if (!fE(b))
      throw new Error(process.env.NODE_ENV === "production" ? xt(7) : "Actions must be plain objects. Instead, the actual type was: '" + lr(b) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? xt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? xt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = n(i, b);
    } finally {
      c = !1;
    }
    for (var p = a = s, v = 0; v < p.length; v++) {
      var w = p[v];
      w();
    }
    return b;
  }
  function g(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? xt(10) : "Expected the nextReducer to be a function. Instead, received: '" + lr(b));
    n = b, d({
      type: Sl.REPLACE
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
          throw new Error(process.env.NODE_ENV === "production" ? xt(11) : "Expected the observer to be an object. Instead, received: '" + lr(w) + "'");
        function E() {
          w.next && w.next(f());
        }
        E();
        var y = p(E);
        return {
          unsubscribe: y
        };
      }
    }, b[Ol] = function() {
      return this;
    }, b;
  }
  return d({
    type: Sl.INIT
  }), o = {
    dispatch: d,
    subscribe: l,
    getState: f,
    replaceReducer: g
  }, o[Ol] = h, o;
}
function wl(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Dl(e, t) {
  if (typeof e == "function")
    return wl(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(process.env.NODE_ENV === "production" ? xt(16) : "bindActionCreators expected an object or a function, but instead received: '" + lr(e) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  var r = {};
  for (var o in e) {
    var n = e[o];
    typeof n == "function" && (r[o] = wl(n, t));
  }
  return r;
}
function Gm() {
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
function yE() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(o) {
    return function() {
      var n = o.apply(void 0, arguments), i = function() {
        throw new Error(process.env.NODE_ENV === "production" ? xt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      }, a = {
        getState: n.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, s = t.map(function(c) {
        return c(a);
      });
      return i = Gm.apply(void 0, s)(n.dispatch), xl(xl({}, n), {}, {
        dispatch: i
      });
    };
  };
}
function vE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ea = { exports: {} }, Co = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nl;
function EE() {
  if (Nl) return Co;
  Nl = 1;
  var e = I;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Co.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Co;
}
var _o = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cl;
function xE() {
  return Cl || (Cl = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
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
      var v = p[0].inst, w = p[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = h, r(v) && w({ inst: v });
        },
        [g, b, h]
      ), s(
        function() {
          return r(v) && w({ inst: v }), g(function() {
            r(v) && w({ inst: v });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    _o.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), _o;
}
process.env.NODE_ENV === "production" ? ea.exports = EE() : ea.exports = xE();
var bs = ea.exports, Io = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l;
function OE() {
  if (_l) return Io;
  _l = 1;
  var e = I, t = bs;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Io.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function v(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, x))
                return y = D;
            }
            return y = x;
          }
          if (D = y, o(E, x)) return D;
          var C = d(x);
          return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
        }
        var w = !1, E, y, m = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          m === null ? void 0 : function() {
            return v(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Io;
}
var Po = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Il;
function SE() {
  return Il || (Il = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = bs, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Po.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function v(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, x))
                  return y = D;
              }
              return y = x;
            }
            if (D = y, o(E, x))
              return D;
            var C = d(x);
            return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
          }
          var w = !1, E, y, m = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            m === null ? void 0 : function() {
              return v(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Po;
}
process.env.NODE_ENV === "production" ? OE() : SE();
function wE(e) {
  e();
}
let jm = wE;
const DE = (e) => jm = e, NE = () => jm, Pl = Symbol.for("react-redux-context"), Al = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function CE() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Al[Pl]) != null ? e : Al[Pl] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const km = /* @__PURE__ */ CE(), _E = () => {
  throw new Error("uSES not initialized!");
};
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, zt.apply(null, arguments);
}
function zm(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ta = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $l;
function IE() {
  if ($l) return he;
  $l = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case h:
                case g:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function y(m) {
    return E(m) === u;
  }
  return he.AsyncMode = c, he.ConcurrentMode = u, he.ContextConsumer = s, he.ContextProvider = a, he.Element = t, he.ForwardRef = f, he.Fragment = o, he.Lazy = h, he.Memo = g, he.Portal = r, he.Profiler = i, he.StrictMode = n, he.Suspense = l, he.isAsyncMode = function(m) {
    return y(m) || E(m) === c;
  }, he.isConcurrentMode = y, he.isContextConsumer = function(m) {
    return E(m) === s;
  }, he.isContextProvider = function(m) {
    return E(m) === a;
  }, he.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, he.isForwardRef = function(m) {
    return E(m) === f;
  }, he.isFragment = function(m) {
    return E(m) === o;
  }, he.isLazy = function(m) {
    return E(m) === h;
  }, he.isMemo = function(m) {
    return E(m) === g;
  }, he.isPortal = function(m) {
    return E(m) === r;
  }, he.isProfiler = function(m) {
    return E(m) === i;
  }, he.isStrictMode = function(m) {
    return E(m) === n;
  }, he.isSuspense = function(m) {
    return E(m) === l;
  }, he.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === v || m.$$typeof === w || m.$$typeof === b);
  }, he.typeOf = E, he;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tl;
function PE() {
  return Tl || (Tl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === f || O.$$typeof === p || O.$$typeof === v || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
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
                var ce = S && S.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ce;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, D = s, C = a, V = t, A = f, $ = o, P = h, T = g, G = r, k = i, R = n, W = l, F = !1;
    function j(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function U(O) {
      return y(O) === a;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function X(O) {
      return y(O) === f;
    }
    function te(O) {
      return y(O) === o;
    }
    function de(O) {
      return y(O) === h;
    }
    function Y(O) {
      return y(O) === g;
    }
    function J(O) {
      return y(O) === r;
    }
    function L(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    ye.AsyncMode = m, ye.ConcurrentMode = x, ye.ContextConsumer = D, ye.ContextProvider = C, ye.Element = V, ye.ForwardRef = A, ye.Fragment = $, ye.Lazy = P, ye.Memo = T, ye.Portal = G, ye.Profiler = k, ye.StrictMode = R, ye.Suspense = W, ye.isAsyncMode = j, ye.isConcurrentMode = z, ye.isContextConsumer = B, ye.isContextProvider = U, ye.isElement = K, ye.isForwardRef = X, ye.isFragment = te, ye.isLazy = de, ye.isMemo = Y, ye.isPortal = J, ye.isProfiler = L, ye.isStrictMode = Z, ye.isSuspense = be, ye.isValidElementType = E, ye.typeOf = y;
  }()), ye;
}
process.env.NODE_ENV === "production" ? ta.exports = IE() : ta.exports = PE();
var AE = ta.exports, hs = AE, $E = {
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
}, TE = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, RE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Hm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ys = {};
ys[hs.ForwardRef] = RE;
ys[hs.Memo] = Hm;
function Rl(e) {
  return hs.isMemo(e) ? Hm : ys[e.$$typeof] || $E;
}
var VE = Object.defineProperty, ME = Object.getOwnPropertyNames, Vl = Object.getOwnPropertySymbols, LE = Object.getOwnPropertyDescriptor, BE = Object.getPrototypeOf, Ml = Object.prototype;
function Um(e, t, r) {
  if (typeof t != "string") {
    if (Ml) {
      var o = BE(t);
      o && o !== Ml && Um(e, o, r);
    }
    var n = ME(t);
    Vl && (n = n.concat(Vl(t)));
    for (var i = Rl(e), a = Rl(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!TE[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = LE(t, c);
        try {
          VE(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var FE = Um;
const Ll = /* @__PURE__ */ vE(FE);
var ra = { exports: {} }, ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bl;
function WE() {
  if (Bl) return ve;
  Bl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return ve.ContextConsumer = a, ve.ContextProvider = i, ve.Element = e, ve.ForwardRef = c, ve.Fragment = r, ve.Lazy = d, ve.Memo = l, ve.Portal = t, ve.Profiler = n, ve.StrictMode = o, ve.Suspense = u, ve.SuspenseList = f, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(p) {
    return b(p) === a;
  }, ve.isContextProvider = function(p) {
    return b(p) === i;
  }, ve.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ve.isForwardRef = function(p) {
    return b(p) === c;
  }, ve.isFragment = function(p) {
    return b(p) === r;
  }, ve.isLazy = function(p) {
    return b(p) === d;
  }, ve.isMemo = function(p) {
    return b(p) === l;
  }, ve.isPortal = function(p) {
    return b(p) === t;
  }, ve.isProfiler = function(p) {
    return b(p) === n;
  }, ve.isStrictMode = function(p) {
    return b(p) === o;
  }, ve.isSuspense = function(p) {
    return b(p) === u;
  }, ve.isSuspenseList = function(p) {
    return b(p) === f;
  }, ve.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, ve.typeOf = b, ve;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fl;
function GE() {
  return Fl || (Fl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === f || v || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case f:
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
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var x = a, D = i, C = e, V = c, A = r, $ = d, P = l, T = t, G = n, k = o, R = u, W = f, F = !1, j = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function te(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function Y(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function be(S) {
      return m(S) === o;
    }
    function O(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === f;
    }
    Ee.ContextConsumer = x, Ee.ContextProvider = D, Ee.Element = C, Ee.ForwardRef = V, Ee.Fragment = A, Ee.Lazy = $, Ee.Memo = P, Ee.Portal = T, Ee.Profiler = G, Ee.StrictMode = k, Ee.Suspense = R, Ee.SuspenseList = W, Ee.isAsyncMode = z, Ee.isConcurrentMode = B, Ee.isContextConsumer = U, Ee.isContextProvider = K, Ee.isElement = X, Ee.isForwardRef = te, Ee.isFragment = de, Ee.isLazy = Y, Ee.isMemo = J, Ee.isPortal = L, Ee.isProfiler = Z, Ee.isStrictMode = be, Ee.isSuspense = O, Ee.isSuspenseList = le, Ee.isValidElementType = y, Ee.typeOf = m;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? ra.exports = WE() : ra.exports = GE();
var Wl = ra.exports;
function vs(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Ao(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || vs(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function jE(e, t, r) {
  Ao(e, "mapStateToProps"), Ao(t, "mapDispatchToProps"), Ao(r, "mergeProps");
}
const kE = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function zE(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(w, E) {
    return c = w, u = E, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, f);
    return f = w, E && (d = r(f, l, u)), d;
  }
  function v(w, E) {
    const y = !i(E, u), m = !n(w, c, E, u);
    return c = w, u = E, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(E, y) {
    return s ? v(E, y) : g(E, y);
  };
}
function HE(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = zm(t, kE);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && jE(a, s, c), zE(a, s, c, e, i);
}
function UE(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function qE(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function qm(e, t, r) {
  qE(e) || vs(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function na(e) {
  return function(r) {
    const o = e(r);
    function n() {
      return o;
    }
    return n.dependsOnOwnProps = !1, n;
  };
}
function Gl(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Km(e, t) {
  return function(o, {
    displayName: n
  }) {
    const i = function(s, c) {
      return i.dependsOnOwnProps ? i.mapToProps(s, c) : i.mapToProps(s, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(s, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Gl(e);
      let u = i(s, c);
      return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = Gl(u), u = i(s, c)), process.env.NODE_ENV !== "production" && qm(u, n, t), u;
    }, i;
  };
}
function Es(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function KE(e) {
  return e && typeof e == "object" ? na((t) => (
    // @ts-ignore
    UE(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Km(e, "mapDispatchToProps")
  ) : Es(e, "mapDispatchToProps") : na((t) => ({
    dispatch: t
  }));
}
function YE(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Km(e, "mapStateToProps")
  ) : Es(e, "mapStateToProps") : na(() => ({}));
}
function XE(e, t, r) {
  return zt({}, r, e, t);
}
function JE(e) {
  return function(r, {
    displayName: o,
    areMergedPropsEqual: n
  }) {
    let i = !1, a;
    return function(c, u, f) {
      const l = e(c, u, f);
      return i ? n(l, a) || (a = l) : (i = !0, a = l, process.env.NODE_ENV !== "production" && qm(a, o, "mergeProps")), a;
    };
  };
}
function ZE(e) {
  return e ? typeof e == "function" ? JE(e) : Es(e, "mergeProps") : () => XE;
}
function QE() {
  const e = NE();
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
const jl = {
  notify() {
  },
  get: () => []
};
function Ym(e, t) {
  let r, o = jl, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, p(), l());
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
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = QE());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = jl);
  }
  function d() {
    i || (i = !0, f());
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
const ex = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", no = ex ? N.useLayoutEffect : N.useEffect;
function kl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function $o(e, t) {
  if (kl(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !kl(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const tx = ["reactReduxForwardedRef"];
let Xm = _E;
const rx = (e) => {
  Xm = e;
}, nx = [null, null], ox = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function ix(e, t, r) {
  no(() => e(...t), r);
}
function ax(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function sx(e, t, r, o, n, i, a, s, c, u, f) {
  if (!e) return () => {
  };
  let l = !1, d = null;
  const g = () => {
    if (l || !s.current)
      return;
    const b = t.getState();
    let p, v;
    try {
      p = o(b, n.current);
    } catch (w) {
      v = w, d = w;
    }
    v || (d = null), p === i.current ? a.current || u() : (i.current = p, c.current = p, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function cx(e, t) {
  return e === t;
}
let zl = !1;
function Jm(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = cx,
  areOwnPropsEqual: i = $o,
  areStatePropsEqual: a = $o,
  areMergedPropsEqual: s = $o,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = km
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !zl && (zl = !0, vs('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = YE(e), d = KE(t), g = ZE(r), h = !!e;
  return (p) => {
    if (process.env.NODE_ENV !== "production" && !Wl.isValidElementType(p))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${ox(p)}`);
    const v = p.displayName || p.name || "Component", w = `Connect(${v})`, E = {
      shouldHandleStateChanges: h,
      displayName: w,
      wrappedComponentName: v,
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
      const [C, V, A] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: O
        } = D, le = zm(D, tx);
        return [D.context, O, le];
      }, [D]), $ = N.useMemo(() => C && C.Consumer && // @ts-ignore
      Wl.isContextConsumer(/* @__PURE__ */ N.createElement(C.Consumer, null)) ? C : f, [C, f]), P = N.useContext($), T = !!D.store && !!D.store.getState && !!D.store.dispatch, G = !!P && !!P.store;
      if (process.env.NODE_ENV !== "production" && !T && !G)
        throw new Error(`Could not find "store" in the context of "${w}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${w} in connect options.`);
      const k = T ? D.store : P.store, R = G ? P.getServerState : k.getState, W = N.useMemo(() => HE(k.dispatch, E), [k]), [F, j] = N.useMemo(() => {
        if (!h) return nx;
        const O = Ym(k, T ? void 0 : P.subscription), le = O.notifyNestedSubs.bind(O);
        return [O, le];
      }, [k, T, P]), z = N.useMemo(() => T ? P : zt({}, P, {
        subscription: F
      }), [T, P, F]), B = N.useRef(), U = N.useRef(A), K = N.useRef(), X = N.useRef(!1);
      N.useRef(!1);
      const te = N.useRef(!1), de = N.useRef();
      no(() => (te.current = !0, () => {
        te.current = !1;
      }), []);
      const Y = N.useMemo(() => () => K.current && A === U.current ? K.current : W(k.getState(), A), [k, A]), J = N.useMemo(() => (le) => F ? sx(
        h,
        k,
        F,
        // @ts-ignore
        W,
        U,
        B,
        X,
        te,
        K,
        j,
        le
      ) : () => {
      }, [F]);
      ix(ax, [U, B, X, A, K, j]);
      let L;
      try {
        L = Xm(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          J,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          Y,
          R ? () => W(R(), A) : Y
        );
      } catch (O) {
        throw de.current && (O.message += `
The error may be correlated with this previous error:
${de.current.stack}

`), O;
      }
      no(() => {
        de.current = void 0, K.current = void 0, B.current = L;
      });
      const Z = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(p, zt({}, L, {
          ref: V
        }))
      ), [V, p, L]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement($.Provider, {
        value: z
      }, Z) : Z, [$, Z, z]);
    }
    const x = N.memo(y);
    if (x.WrappedComponent = p, x.displayName = y.displayName = w, c) {
      const C = N.forwardRef(function(A, $) {
        return /* @__PURE__ */ N.createElement(x, zt({}, A, {
          reactReduxForwardedRef: $
        }));
      });
      return C.displayName = w, C.WrappedComponent = p, Ll(C, p);
    }
    return Ll(x, p);
  };
}
function lx({
  store: e,
  context: t,
  children: r,
  serverState: o,
  stabilityCheck: n = "once",
  noopCheck: i = "once"
}) {
  const a = N.useMemo(() => {
    const u = Ym(e);
    return {
      store: e,
      subscription: u,
      getServerState: o ? () => o : void 0,
      stabilityCheck: n,
      noopCheck: i
    };
  }, [e, o, n, i]), s = N.useMemo(() => e.getState(), [e]);
  no(() => {
    const {
      subscription: u
    } = a;
    return u.onStateChange = u.notifyNestedSubs, u.trySubscribe(), s !== e.getState() && u.notifyNestedSubs(), () => {
      u.tryUnsubscribe(), u.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || km;
  return /* @__PURE__ */ N.createElement(c.Provider, {
    value: a
  }, r);
}
rx(bs.useSyncExternalStore);
DE(xr);
function ux(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Zm(e, t) {
  var r = qe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && ux(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function dx(e, t) {
  return Zm(function() {
    return e;
  }, t);
}
var ge = Zm, Q = dx, px = process.env.NODE_ENV === "production", To = "Invariant failed";
function Hl(e, t) {
  if (px)
    throw new Error(To);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(To, ": ").concat(r) : To;
  throw new Error(o);
}
var Vt = function(t) {
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
}, xs = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, Ul = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, fx = function(t, r) {
  return {
    top: t.top + r.y,
    left: t.left + r.x,
    bottom: t.bottom + r.y,
    right: t.right + r.x
  };
}, Ro = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Os = function(t) {
  var r = t.borderBox, o = t.margin, n = o === void 0 ? Ro : o, i = t.border, a = i === void 0 ? Ro : i, s = t.padding, c = s === void 0 ? Ro : s, u = Vt(xs(r, n)), f = Vt(Ul(r, a)), l = Vt(Ul(f, c));
  return {
    marginBox: u,
    borderBox: Vt(r),
    paddingBox: f,
    contentBox: l,
    margin: n,
    border: a,
    padding: c
  };
}, Nt = function(t) {
  var r = t.slice(0, -2), o = t.slice(-2);
  if (o !== "px")
    return 0;
  var n = Number(r);
  return isNaN(n) && (process.env.NODE_ENV !== "production" ? Hl(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Hl()), n;
}, mx = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, oo = function(t, r) {
  var o = t.borderBox, n = t.border, i = t.margin, a = t.padding, s = fx(o, r);
  return Os({
    borderBox: s,
    border: n,
    margin: i,
    padding: a
  });
}, io = function(t, r) {
  return r === void 0 && (r = mx()), oo(t, r);
}, Qm = function(t, r) {
  var o = {
    top: Nt(r.marginTop),
    right: Nt(r.marginRight),
    bottom: Nt(r.marginBottom),
    left: Nt(r.marginLeft)
  }, n = {
    top: Nt(r.paddingTop),
    right: Nt(r.paddingRight),
    bottom: Nt(r.paddingBottom),
    left: Nt(r.paddingLeft)
  }, i = {
    top: Nt(r.borderTopWidth),
    right: Nt(r.borderRightWidth),
    bottom: Nt(r.borderBottomWidth),
    left: Nt(r.borderLeftWidth)
  };
  return Os({
    borderBox: t,
    margin: o,
    padding: n,
    border: i
  });
}, eg = function(t) {
  var r = t.getBoundingClientRect(), o = window.getComputedStyle(t);
  return Qm(r, o);
}, ql = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function gx(e, t) {
  return !!(e === t || ql(e) && ql(t));
}
function bx(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!gx(e[r], t[r]))
      return !1;
  return !0;
}
function ot(e, t) {
  t === void 0 && (t = bx);
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
var nn = function(t) {
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
const hx = process.env.NODE_ENV === "production", yx = /[ \t]{2,}/g, vx = /^[ \t]*/gm, Kl = (e) => e.replace(yx, " ").replace(vx, "").trim(), Ex = (e) => Kl(`
  %c@hello-pangea/dnd

  %c${Kl(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), xx = (e) => [Ex(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], Ox = "__@hello-pangea/dnd-disable-dev-warnings";
function tg(e, t) {
  hx || typeof window < "u" && window[Ox] || console[e](...xx(t));
}
const Ue = tg.bind(null, "warn"), oa = tg.bind(null, "error");
function Ht() {
}
function Sx(e, t) {
  return {
    ...e,
    ...t
  };
}
function Tt(e, t, r) {
  const o = t.map((n) => {
    const i = Sx(r, n.options);
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
const wx = process.env.NODE_ENV === "production", Yl = "Invariant failed";
class on extends Error {
}
on.prototype.toString = function() {
  return this.message;
};
function _(e, t) {
  throw wx ? new on(Yl) : new on(`${Yl}: ${t || ""}`);
}
class Dx extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Ht, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Ue(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof on && (r.preventDefault(), process.env.NODE_ENV !== "production" && oa(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = Tt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof on) {
      process.env.NODE_ENV !== "production" && oa(t.message), this.setState({});
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
const Nx = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, ao = (e) => e + 1, Cx = (e) => `
  You have lifted an item in position ${ao(e.source.index)}
`, rg = (e, t) => {
  const r = e.droppableId === t.droppableId, o = ao(e.index), n = ao(t.index);
  return r ? `
      You have moved the item from position ${o}
      to position ${n}
    ` : `
    You have moved the item from position ${o}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${n}
  `;
}, ng = (e, t, r) => t.droppableId === r.droppableId ? `
      The item ${e}
      has been combined with ${r.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${r.draggableId}
      in list ${r.droppableId}
    `, _x = (e) => {
  const t = e.destination;
  if (t)
    return rg(e.source, t);
  const r = e.combine;
  return r ? ng(e.draggableId, e.source, r) : "You are over an area that cannot be dropped on";
}, Xl = (e) => `
  The item has returned to its starting position
  of ${ao(e.index)}
`, Ix = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Xl(e.source)}
    `;
  const t = e.destination, r = e.combine;
  return t ? `
      You have dropped the item.
      ${rg(e.source, t)}
    ` : r ? `
      You have dropped the item.
      ${ng(e.draggableId, e.source, r)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Xl(e.source)}
  `;
}, Px = {
  dragHandleUsageInstructions: Nx,
  onDragStart: Cx,
  onDragUpdate: _x,
  onDragEnd: Ix
};
var Gn = Px;
const it = {
  x: 0,
  y: 0
}, pt = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), St = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Ut = (e, t) => e.x === t.x && e.y === t.y, Wr = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), fr = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
}, an = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Jl = (e, t) => Math.min(...t.map((r) => an(e, r))), og = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var Ax = (e, t) => {
  const r = Vt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const Dn = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Zl = (e) => [{
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
}], $x = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Tx = (e, t) => t ? Dn(e, t.scroll.diff.displacement) : e, Rx = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, Vx = (e, t) => t && t.shouldClipSubject ? Ax(t.pageMarginBox, e) : Vt(e);
var Mr = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = Tx(e.marginBox, o), i = Rx(n, r, t), a = Vx(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
}, Ss = (e, t) => {
  e.frame || (process.env.NODE_ENV, _());
  const r = e.frame, o = St(t, r.scroll.initial), n = Wr(o), i = {
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
  }, a = Mr({
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
const ig = ot((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), ag = ot((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {})), ho = ot((e) => Object.values(e)), Mx = ot((e) => Object.values(e));
var Or = ot((e, t) => Mx(t).filter((o) => e === o.descriptor.droppableId).sort((o, n) => o.descriptor.index - n.descriptor.index));
function ws(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function yo(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var vo = ot((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id)), Lx = ({
  isMovingForward: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  previousImpact: n
}) => {
  if (!r.isCombineEnabled || !ws(n))
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
  const u = vo(t, o);
  if (!c) {
    if (!u.length)
      return null;
    const g = u[u.length - 1];
    return a(g.descriptor.id);
  }
  const f = u.findIndex((g) => g.descriptor.id === c);
  f === -1 && (process.env.NODE_ENV !== "production" ? _(!1, "Could not find displaced item in set") : _());
  const l = f - 1;
  if (l < 0)
    return null;
  const d = u[l];
  return a(d.descriptor.id);
}, Gr = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const sg = {
  point: it,
  value: 0
}, sn = {
  invisible: {},
  visible: {},
  all: []
}, Bx = {
  displaced: sn,
  displacedBy: sg,
  at: null
};
var Fx = Bx, Rt = (e, t) => (r) => e <= r && r <= t, cg = (e) => {
  const t = Rt(e.top, e.bottom), r = Rt(e.left, e.right);
  return (o) => {
    if (t(o.top) && t(o.bottom) && r(o.left) && r(o.right))
      return !0;
    const i = t(o.top) || t(o.bottom), a = r(o.left) || r(o.right);
    if (i && a)
      return !0;
    const c = o.top < e.top && o.bottom > e.bottom, u = o.left < e.left && o.right > e.right;
    return c && u ? !0 : c && a || u && i;
  };
}, Wx = (e) => {
  const t = Rt(e.top, e.bottom), r = Rt(e.left, e.right);
  return (o) => t(o.top) && t(o.bottom) && r(o.left) && r(o.right);
};
const Ds = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, lg = {
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
var Gx = (e) => (t) => {
  const r = Rt(t.top, t.bottom), o = Rt(t.left, t.right);
  return (n) => e === Ds ? r(n.top) && r(n.bottom) : o(n.left) && o(n.right);
};
const jx = (e, t) => {
  const r = t.frame ? t.frame.scroll.diff.displacement : it;
  return Dn(e, r);
}, kx = (e, t, r) => t.subject.active ? r(t.subject.active)(e) : !1, zx = (e, t, r) => r(t)(e), Ns = ({
  target: e,
  destination: t,
  viewport: r,
  withDroppableDisplacement: o,
  isVisibleThroughFrameFn: n
}) => {
  const i = o ? jx(e, t) : e;
  return kx(i, t, n) && zx(i, r, n);
}, Hx = (e) => Ns({
  ...e,
  isVisibleThroughFrameFn: cg
}), ug = (e) => Ns({
  ...e,
  isVisibleThroughFrameFn: Wx
}), Ux = (e) => Ns({
  ...e,
  isVisibleThroughFrameFn: Gx(e.destination.axis)
}), qx = (e, t, r) => {
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
function Kx(e, t) {
  const r = e.page.marginBox, o = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return Vt(xs(r, o));
}
function cn({
  afterDragging: e,
  destination: t,
  displacedBy: r,
  viewport: o,
  forceShouldAnimate: n,
  last: i
}) {
  return e.reduce(function(s, c) {
    const u = Kx(c, r), f = c.descriptor.id;
    if (s.all.push(f), !Hx({
      target: u,
      destination: t,
      viewport: o,
      withDroppableDisplacement: !0
    }))
      return s.invisible[c.descriptor.id] = !0, s;
    const d = qx(f, i, n), g = {
      draggableId: f,
      shouldAnimate: d
    };
    return s.visible[f] = g, s;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function Yx(e, t) {
  if (!e.length)
    return 0;
  const r = e[e.length - 1].descriptor.index;
  return t.inHomeList ? r : r + 1;
}
function Ql({
  insideDestination: e,
  inHomeList: t,
  displacedBy: r,
  destination: o
}) {
  const n = Yx(e, {
    inHomeList: t
  });
  return {
    displaced: sn,
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
function so({
  draggable: e,
  insideDestination: t,
  destination: r,
  viewport: o,
  displacedBy: n,
  last: i,
  index: a,
  forceShouldAnimate: s
}) {
  const c = Gr(e, r);
  if (a == null)
    return Ql({
      insideDestination: t,
      inHomeList: c,
      displacedBy: n,
      destination: r
    });
  const u = t.find((h) => h.descriptor.index === a);
  if (!u)
    return Ql({
      insideDestination: t,
      inHomeList: c,
      displacedBy: n,
      destination: r
    });
  const f = vo(e, t), l = t.indexOf(u), d = f.slice(l);
  return {
    displaced: cn({
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
function Qt(e, t) {
  return !!t.effected[e];
}
var Xx = ({
  isMovingForward: e,
  destination: t,
  draggables: r,
  combine: o,
  afterCritical: n
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = o.draggableId, s = r[i].descriptor.index;
  return Qt(i, n) ? e ? s : s - 1 : e ? s + 1 : s;
}, Jx = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: r,
  location: o
}) => {
  if (!r.length)
    return null;
  const n = o.index, i = e ? n + 1 : n - 1, a = r[0].descriptor.index, s = r[r.length - 1].descriptor.index, c = t ? s : s + 1;
  return i < a || i > c ? null : i;
}, Zx = ({
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
  if (u || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot move in direction without previous impact location") : _()), u.type === "REORDER") {
    const l = Jx({
      isMovingForward: e,
      isInHomeList: t,
      location: u.destination,
      insideDestination: i
    });
    return l == null ? null : so({
      draggable: r,
      insideDestination: i,
      destination: n,
      viewport: s,
      last: a.displaced,
      displacedBy: a.displacedBy,
      index: l
    });
  }
  const f = Xx({
    isMovingForward: e,
    destination: n,
    displaced: a.displaced,
    draggables: o,
    combine: u.combine,
    afterCritical: c
  });
  return f == null ? null : so({
    draggable: r,
    insideDestination: i,
    destination: n,
    viewport: s,
    last: a.displaced,
    displacedBy: a.displacedBy,
    index: f
  });
}, Qx = ({
  displaced: e,
  afterCritical: t,
  combineWith: r,
  displacedBy: o
}) => {
  const n = !!(e.visible[r] || e.invisible[r]);
  return Qt(r, t) ? n ? it : Wr(o.point) : n ? o.point : it;
}, eO = ({
  afterCritical: e,
  impact: t,
  draggables: r
}) => {
  const o = yo(t);
  o || (process.env.NODE_ENV, _());
  const n = o.draggableId, i = r[n].page.borderBox.center, a = Qx({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: n,
    displacedBy: t.displacedBy
  });
  return pt(i, a);
};
const dg = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, tO = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Cs = (e, t, r) => t[e.crossAxisStart] + r.margin[e.crossAxisStart] + r.borderBox[e.crossAxisSize] / 2, eu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => fr(e.line, t.marginBox[e.end] + dg(e, r), Cs(e, t.marginBox, r)), tu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: r
}) => fr(e.line, t.marginBox[e.start] - tO(e, r), Cs(e, t.marginBox, r)), rO = ({
  axis: e,
  moveInto: t,
  isMoving: r
}) => fr(e.line, t.contentBox[e.start] + dg(e, r), Cs(e, t.contentBox, r));
var nO = ({
  impact: e,
  draggable: t,
  draggables: r,
  droppable: o,
  afterCritical: n
}) => {
  const i = Or(o.descriptor.id, r), a = t.page, s = o.axis;
  if (!i.length)
    return rO({
      axis: s,
      moveInto: o.page,
      isMoving: a
    });
  const {
    displaced: c,
    displacedBy: u
  } = e, f = c.all[0];
  if (f) {
    const d = r[f];
    if (Qt(f, n))
      return tu({
        axis: s,
        moveRelativeTo: d.page,
        isMoving: a
      });
    const g = oo(d.page, u.point);
    return tu({
      axis: s,
      moveRelativeTo: g,
      isMoving: a
    });
  }
  const l = i[i.length - 1];
  if (l.descriptor.id === t.descriptor.id)
    return a.borderBox.center;
  if (Qt(l.descriptor.id, n)) {
    const d = oo(l.page, Wr(n.displacedBy.point));
    return eu({
      axis: s,
      moveRelativeTo: d,
      isMoving: a
    });
  }
  return eu({
    axis: s,
    moveRelativeTo: l.page,
    isMoving: a
  });
}, ia = (e, t) => {
  const r = e.frame;
  return r ? pt(t, r.scroll.diff.displacement) : t;
};
const oO = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  afterCritical: n
}) => {
  const i = t.page.borderBox.center, a = e.at;
  return !r || !a ? i : a.type === "REORDER" ? nO({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: n
  }) : eO({
    impact: e,
    draggables: o,
    afterCritical: n
  });
};
var Eo = (e) => {
  const t = oO(e), r = e.droppable;
  return r ? ia(r, t) : t;
}, pg = (e, t) => {
  const r = St(t, e.scroll.initial), o = Wr(r);
  return {
    frame: Vt({
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
function ru(e, t) {
  return e.map((r) => t[r]);
}
function iO(e, t) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r].visible[e];
    if (o)
      return o;
  }
  return null;
}
var aO = ({
  impact: e,
  viewport: t,
  destination: r,
  draggables: o,
  maxScrollChange: n
}) => {
  const i = pg(t, pt(t.scroll.current, n)), a = r.frame ? Ss(r, pt(r.frame.scroll.current, n)) : r, s = e.displaced, c = cn({
    afterDragging: ru(s.all, o),
    destination: r,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: s,
    forceShouldAnimate: !1
  }), u = cn({
    afterDragging: ru(s.all, o),
    destination: a,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: s,
    forceShouldAnimate: !1
  }), f = {}, l = {}, d = [s, c, u];
  return s.all.forEach((h) => {
    const b = iO(h, d);
    if (b) {
      l[h] = b;
      return;
    }
    f[h] = !0;
  }), {
    ...e,
    displaced: {
      all: s.all,
      invisible: f,
      visible: l
    }
  };
}, sO = (e, t) => pt(e.scroll.diff.displacement, t), _s = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: r
}) => {
  const o = sO(r, e), n = St(o, t.page.borderBox.center);
  return pt(t.client.borderBox.center, n);
}, fg = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: r,
  viewport: o,
  withDroppableDisplacement: n,
  onlyOnMainAxis: i = !1
}) => {
  const a = St(r, e.page.borderBox.center), c = {
    target: Dn(e.page.borderBox, a),
    destination: t,
    withDroppableDisplacement: n,
    viewport: o
  };
  return i ? Ux(c) : ug(c);
}, cO = ({
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
  const u = Or(r.descriptor.id, o), f = Gr(t, r), l = Lx({
    isMovingForward: e,
    draggable: t,
    destination: r,
    insideDestination: u,
    previousImpact: n
  }) || Zx({
    isMovingForward: e,
    isInHomeList: f,
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
  const d = Eo({
    impact: l,
    draggable: t,
    droppable: r,
    draggables: o,
    afterCritical: c
  });
  if (fg({
    draggable: t,
    destination: r,
    newPageBorderBoxCenter: d,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: _s({
        pageBorderBoxCenter: d,
        draggable: t,
        viewport: i
      }),
      impact: l,
      scrollJumpRequest: null
    };
  const h = St(d, a), b = aO({
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
const vt = (e) => {
  const t = e.subject.active;
  return t || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot get clipped area from droppable") : _()), t;
};
var lO = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: r,
  droppables: o,
  viewport: n
}) => {
  const i = r.subject.active;
  if (!i)
    return null;
  const a = r.axis, s = Rt(i[a.start], i[a.end]), c = ho(o).filter((f) => f !== r).filter((f) => f.isEnabled).filter((f) => !!f.subject.active).filter((f) => cg(n.frame)(vt(f))).filter((f) => {
    const l = vt(f);
    return e ? i[a.crossAxisEnd] < l[a.crossAxisEnd] : l[a.crossAxisStart] < i[a.crossAxisStart];
  }).filter((f) => {
    const l = vt(f), d = Rt(l[a.start], l[a.end]);
    return s(l[a.start]) || s(l[a.end]) || d(i[a.start]) || d(i[a.end]);
  }).sort((f, l) => {
    const d = vt(f)[a.crossAxisStart], g = vt(l)[a.crossAxisStart];
    return e ? d - g : g - d;
  }).filter((f, l, d) => vt(f)[a.crossAxisStart] === vt(d[0])[a.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const u = c.filter((f) => Rt(vt(f)[a.start], vt(f)[a.end])(t[a.line]));
  return u.length === 1 ? u[0] : u.length > 1 ? u.sort((f, l) => vt(f)[a.start] - vt(l)[a.start])[0] : c.sort((f, l) => {
    const d = Jl(t, Zl(vt(f))), g = Jl(t, Zl(vt(l)));
    return d !== g ? d - g : vt(f)[a.start] - vt(l)[a.start];
  })[0];
};
const nu = (e, t) => {
  const r = e.page.borderBox.center;
  return Qt(e.descriptor.id, t) ? St(r, t.displacedBy.point) : r;
}, uO = (e, t) => {
  const r = e.page.borderBox;
  return Qt(e.descriptor.id, t) ? Dn(r, Wr(t.displacedBy.point)) : r;
};
var dO = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: r,
  insideDestination: o,
  afterCritical: n
}) => o.filter((a) => ug({
  target: uO(a, n),
  destination: r,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((a, s) => {
  const c = an(e, ia(r, nu(a, n))), u = an(e, ia(r, nu(s, n)));
  return c < u ? -1 : u < c ? 1 : a.descriptor.index - s.descriptor.index;
})[0] || null, Nn = ot(function(t, r) {
  const o = r[t.line];
  return {
    value: o,
    point: fr(t.line, o)
  };
});
const pO = (e, t, r) => {
  const o = e.axis;
  if (e.descriptor.mode === "virtual")
    return fr(o.line, t[o.line]);
  const n = e.subject.page.contentBox[o.size], c = Or(e.descriptor.id, r).reduce((u, f) => u + f.client.marginBox[o.size], 0) + t[o.line] - n;
  return c <= 0 ? null : fr(o.line, c);
}, mg = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), gg = (e, t, r) => {
  const o = e.frame;
  Gr(t, e) && (process.env.NODE_ENV !== "production" ? _(!1, "Should not add placeholder space to home list") : _()), e.subject.withPlaceholder && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot add placeholder size to a subject when it already has one") : _());
  const n = Nn(e.axis, t.displaceBy).point, i = pO(e, n, r), a = {
    placeholderSize: n,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!o) {
    const f = Mr({
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
  const s = i ? pt(o.scroll.max, i) : o.scroll.max, c = mg(o, s), u = Mr({
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
}, fO = (e) => {
  const t = e.subject.withPlaceholder;
  t || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot remove placeholder form subject when there was none") : _());
  const r = e.frame;
  if (!r) {
    const a = Mr({
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
  o || (process.env.NODE_ENV !== "production" ? _(!1, "Expected droppable with frame to have old max frame scroll when removing placeholder") : _());
  const n = mg(r, o), i = Mr({
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
var mO = ({
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
      displaced: sn,
      displacedBy: sg,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, d = Eo({
      impact: l,
      draggable: o,
      droppable: i,
      draggables: n,
      afterCritical: s
    }), g = Gr(o, i) ? i : gg(i, o, n);
    return fg({
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
  })(), f = Nn(i.axis, o.displaceBy);
  return so({
    draggable: o,
    insideDestination: r,
    destination: i,
    viewport: a,
    displacedBy: f,
    last: sn,
    index: u
  });
}, gO = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: r,
  isOver: o,
  draggables: n,
  droppables: i,
  viewport: a,
  afterCritical: s
}) => {
  const c = lO({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: o,
    droppables: i,
    viewport: a
  });
  if (!c)
    return null;
  const u = Or(c.descriptor.id, n), f = dO({
    pageBorderBoxCenter: t,
    viewport: a,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }), l = mO({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: r,
    draggables: n,
    moveRelativeTo: f,
    insideDestination: u,
    viewport: a,
    afterCritical: s
  });
  if (!l)
    return null;
  const d = Eo({
    impact: l,
    draggable: r,
    droppable: c,
    draggables: n,
    afterCritical: s
  });
  return {
    clientSelection: _s({
      pageBorderBoxCenter: d,
      draggable: r,
      viewport: a
    }),
    impact: l,
    scrollJumpRequest: null
  };
}, wt = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const bO = (e, t) => {
  const r = wt(e);
  return r ? t[r] : null;
};
var hO = ({
  state: e,
  type: t
}) => {
  const r = bO(e.impact, e.dimensions.droppables), o = !!r, n = e.dimensions.droppables[e.critical.droppable.id], i = r || n, a = i.axis.direction, s = a === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || a === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (s && !o)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", u = e.dimensions.draggables[e.critical.draggable.id], f = e.current.page.borderBoxCenter, {
    draggables: l,
    droppables: d
  } = e.dimensions;
  return s ? cO({
    isMovingForward: c,
    previousPageBorderBoxCenter: f,
    draggable: u,
    destination: i,
    draggables: l,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : gO({
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
function ur(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function bg(e) {
  const t = Rt(e.top, e.bottom), r = Rt(e.left, e.right);
  return function(n) {
    return t(n.y) && r(n.x);
  };
}
function yO(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function vO({
  pageBorderBox: e,
  draggable: t,
  candidates: r
}) {
  const o = t.page.borderBox.center, n = r.map((i) => {
    const a = i.axis, s = fr(i.axis.line, e.center[a.line], i.page.borderBox.center[a.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: an(o, s)
    };
  }).sort((i, a) => a.distance - i.distance);
  return n[0] ? n[0].id : null;
}
function EO({
  pageBorderBox: e,
  draggable: t,
  droppables: r
}) {
  const o = ho(r).filter((n) => {
    if (!n.isEnabled)
      return !1;
    const i = n.subject.active;
    if (!i || !yO(e, i))
      return !1;
    if (bg(i)(e.center))
      return !0;
    const a = n.axis, s = i.center[a.crossAxisLine], c = e[a.crossAxisStart], u = e[a.crossAxisEnd], f = Rt(i[a.crossAxisStart], i[a.crossAxisEnd]), l = f(c), d = f(u);
    return !l && !d ? !0 : l ? c < s : u > s;
  });
  return o.length ? o.length === 1 ? o[0].descriptor.id : vO({
    pageBorderBox: e,
    draggable: t,
    candidates: o
  }) : null;
}
const hg = (e, t) => Vt(Dn(e, t));
var xO = (e, t) => {
  const r = e.frame;
  return r ? hg(t, r.scroll.diff.value) : t;
};
function yg({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function OO({
  draggable: e,
  closest: t,
  inHomeList: r
}) {
  return t ? r && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var SO = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: r,
  insideDestination: o,
  last: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = r.axis, c = Nn(r.axis, t.displaceBy), u = c.value, f = e[s.start], l = e[s.end], g = vo(t, o).find((b) => {
    const p = b.descriptor.id, v = b.page.borderBox.center[s.line], w = Qt(p, a), E = yg({
      displaced: n,
      id: p
    });
    return w ? E ? l <= v : f < v - u : E ? l <= v + u : f < v;
  }) || null, h = OO({
    draggable: t,
    closest: g,
    inHomeList: Gr(t, r)
  });
  return so({
    draggable: t,
    insideDestination: o,
    destination: r,
    viewport: i,
    last: n,
    displacedBy: c,
    index: h
  });
};
const wO = 4;
var DO = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: r,
  destination: o,
  insideDestination: n,
  afterCritical: i
}) => {
  if (!o.isCombineEnabled)
    return null;
  const a = o.axis, s = Nn(o.axis, e.displaceBy), c = s.value, u = t[a.start], f = t[a.end], d = vo(e, n).find((h) => {
    const b = h.descriptor.id, p = h.page.borderBox, w = p[a.size] / wO, E = Qt(b, i), y = yg({
      displaced: r.displaced,
      id: b
    });
    return E ? y ? f > p[a.start] + w && f < p[a.end] - w : u > p[a.start] - c + w && u < p[a.end] - c - w : y ? f > p[a.start] + c + w && f < p[a.end] + c - w : u > p[a.start] + w && u < p[a.end] - w;
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
}, vg = ({
  pageOffset: e,
  draggable: t,
  draggables: r,
  droppables: o,
  previousImpact: n,
  viewport: i,
  afterCritical: a
}) => {
  const s = hg(t.page.borderBox, e), c = EO({
    pageBorderBox: s,
    draggable: t,
    droppables: o
  });
  if (!c)
    return Fx;
  const u = o[c], f = Or(u.descriptor.id, r), l = xO(u, s);
  return DO({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    previousImpact: n,
    destination: u,
    insideDestination: f,
    afterCritical: a
  }) || SO({
    pageBorderBoxWithDroppableScroll: l,
    draggable: t,
    destination: u,
    insideDestination: f,
    last: n.displaced,
    viewport: i,
    afterCritical: a
  });
}, Is = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const NO = ({
  previousImpact: e,
  impact: t,
  droppables: r
}) => {
  const o = wt(e), n = wt(t);
  if (!o || o === n)
    return r;
  const i = r[o];
  if (!i.subject.withPlaceholder)
    return r;
  const a = fO(i);
  return Is(r, a);
};
var CO = ({
  draggable: e,
  draggables: t,
  droppables: r,
  previousImpact: o,
  impact: n
}) => {
  const i = NO({
    previousImpact: o,
    impact: n,
    droppables: r
  }), a = wt(n);
  if (!a)
    return i;
  const s = r[a];
  if (Gr(e, s) || s.subject.withPlaceholder)
    return i;
  const c = gg(s, e, t);
  return Is(i, c);
}, qr = ({
  state: e,
  clientSelection: t,
  dimensions: r,
  viewport: o,
  impact: n,
  scrollJumpRequest: i
}) => {
  const a = o || e.viewport, s = r || e.dimensions, c = t || e.current.client.selection, u = St(c, e.initial.client.selection), f = {
    offset: u,
    selection: c,
    borderBoxCenter: pt(e.initial.client.borderBoxCenter, u)
  }, l = {
    selection: pt(f.selection, a.scroll.current),
    borderBoxCenter: pt(f.borderBoxCenter, a.scroll.current),
    offset: pt(f.offset, a.scroll.diff.value)
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
  const g = s.draggables[e.critical.draggable.id], h = n || vg({
    pageOffset: l.offset,
    draggable: g,
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: e.impact,
    viewport: a,
    afterCritical: e.afterCritical
  }), b = CO({
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
function _O(e, t) {
  return e.map((r) => t[r]);
}
var Eg = ({
  impact: e,
  viewport: t,
  draggables: r,
  destination: o,
  forceShouldAnimate: n
}) => {
  const i = e.displaced, a = _O(i.all, r), s = cn({
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
}, xg = ({
  impact: e,
  draggable: t,
  droppable: r,
  draggables: o,
  viewport: n,
  afterCritical: i
}) => {
  const a = Eo({
    impact: e,
    draggable: t,
    draggables: o,
    droppable: r,
    afterCritical: i
  });
  return _s({
    pageBorderBoxCenter: a,
    draggable: t,
    viewport: n
  });
}, Og = ({
  state: e,
  dimensions: t,
  viewport: r
}) => {
  e.movementMode !== "SNAP" && (process.env.NODE_ENV, _());
  const o = e.impact, n = r || e.viewport, i = t || e.dimensions, {
    draggables: a,
    droppables: s
  } = i, c = a[e.critical.draggable.id], u = wt(o);
  u || (process.env.NODE_ENV !== "production" ? _(!1, "Must be over a destination in SNAP movement mode") : _());
  const f = s[u], l = Eg({
    impact: o,
    viewport: n,
    destination: f,
    draggables: a
  }), d = xg({
    impact: l,
    draggable: c,
    droppable: f,
    draggables: a,
    viewport: n,
    afterCritical: e.afterCritical
  });
  return qr({
    impact: l,
    clientSelection: d,
    state: e,
    dimensions: i,
    viewport: n
  });
}, IO = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Sg = ({
  draggable: e,
  home: t,
  draggables: r,
  viewport: o
}) => {
  const n = Nn(t.axis, e.displaceBy), i = Or(t.descriptor.id, r), a = i.indexOf(e);
  a === -1 && (process.env.NODE_ENV !== "production" ? _(!1, "Expected draggable to be inside home list") : _());
  const s = i.slice(a + 1), c = s.reduce((d, g) => (d[g.descriptor.id] = !0, d), {}), u = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: n,
    effected: c
  };
  return {
    impact: {
      displaced: cn({
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
        destination: IO(e.descriptor)
      }
    },
    afterCritical: u
  };
}, PO = (e, t) => ({
  draggables: e.draggables,
  droppables: Is(e.droppables, t)
});
const Cn = (e) => {
  process.env.NODE_ENV;
}, _n = (e) => {
  process.env.NODE_ENV;
};
var AO = ({
  draggable: e,
  offset: t,
  initialWindowScroll: r
}) => {
  const o = oo(e.client, t), n = io(o, r);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: o
    },
    client: o,
    page: n
  };
}, $O = (e) => {
  const t = e.frame;
  return t || (process.env.NODE_ENV !== "production" ? _(!1, "Expected Droppable to have a frame") : _()), t;
}, TO = ({
  additions: e,
  updatedDroppables: t,
  viewport: r
}) => {
  const o = r.scroll.diff.value;
  return e.map((n) => {
    const i = n.descriptor.droppableId, a = t[i], c = $O(a).scroll.diff.value, u = pt(o, c);
    return AO({
      draggable: n,
      offset: u,
      initialWindowScroll: r.scroll.initial
    });
  });
}, RO = ({
  state: e,
  published: t
}) => {
  Cn();
  const r = t.modified.map((v) => {
    const w = e.dimensions.droppables[v.droppableId];
    return Ss(w, v.scroll);
  }), o = {
    ...e.dimensions.droppables,
    ...ig(r)
  }, n = ag(TO({
    additions: t.additions,
    updatedDroppables: o,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...n
  };
  t.removals.forEach((v) => {
    delete i[v];
  });
  const a = {
    droppables: o,
    draggables: i
  }, s = wt(e.impact), c = s ? a.droppables[s] : null, u = a.draggables[e.critical.draggable.id], f = a.droppables[e.critical.droppable.id], {
    impact: l,
    afterCritical: d
  } = Sg({
    draggable: u,
    home: f,
    draggables: i,
    viewport: e.viewport
  }), g = c && c.isCombineEnabled ? e.impact : l, h = vg({
    pageOffset: e.current.page.offset,
    draggable: a.draggables[e.critical.draggable.id],
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: g,
    viewport: e.viewport,
    afterCritical: d
  });
  _n();
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
const aa = (e) => e.movementMode === "SNAP", Vo = (e, t, r) => {
  const o = PO(e.dimensions, t);
  return !aa(e) || r ? qr({
    state: e,
    dimensions: o
  }) : Og({
    state: e,
    dimensions: o
  });
};
function Mo(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ou = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var VO = (e = ou, t) => {
  if (t.type === "FLUSH")
    return {
      ...ou,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "INITIAL_PUBLISH must come after a IDLE phase") : _());
    const {
      critical: r,
      clientSelection: o,
      viewport: n,
      dimensions: i,
      movementMode: a
    } = t.payload, s = i.draggables[r.draggable.id], c = i.droppables[r.droppable.id], u = {
      selection: o,
      borderBoxCenter: s.client.borderBox.center,
      offset: it
    }, f = {
      client: u,
      page: {
        selection: pt(u.selection, n.scroll.initial),
        borderBoxCenter: pt(u.selection, n.scroll.initial),
        offset: pt(u.selection, n.scroll.diff.value)
      }
    }, l = ho(i.droppables).every((b) => !b.isFixedOnPage), {
      impact: d,
      afterCritical: g
    } = Sg({
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
      initial: f,
      current: f,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? _(!1, `Collection cannot start from phase ${e.phase}`) : _()), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? _(!1, `Unexpected ${t.type} received in phase ${e.phase}`) : _()), RO({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    ur(e) || (process.env.NODE_ENV !== "production" ? _(!1, `${t.type} not permitted in phase ${e.phase}`) : _());
    const {
      client: r
    } = t.payload;
    return Ut(r, e.current.client.selection) ? e : qr({
      state: e,
      clientSelection: r,
      impact: aa(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Mo(e);
    ur(e) || (process.env.NODE_ENV !== "production" ? _(!1, `${t.type} not permitted in phase ${e.phase}`) : _());
    const {
      id: r,
      newScroll: o
    } = t.payload, n = e.dimensions.droppables[r];
    if (!n)
      return e;
    const i = Ss(n, o);
    return Vo(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ur(e) || (process.env.NODE_ENV !== "production" ? _(!1, `Attempting to move in an unsupported phase ${e.phase}`) : _());
    const {
      id: r,
      isEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find Droppable[id: ${r}] to toggle its enabled state`) : _()), n.isEnabled === o && (process.env.NODE_ENV !== "production" ? _(!1, `Trying to set droppable isEnabled to ${String(o)}
      but it is already ${String(n.isEnabled)}`) : _());
    const i = {
      ...n,
      isEnabled: o
    };
    return Vo(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ur(e) || (process.env.NODE_ENV !== "production" ? _(!1, `Attempting to move in an unsupported phase ${e.phase}`) : _());
    const {
      id: r,
      isCombineEnabled: o
    } = t.payload, n = e.dimensions.droppables[r];
    n || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find Droppable[id: ${r}] to toggle its isCombineEnabled state`) : _()), n.isCombineEnabled === o && (process.env.NODE_ENV !== "production" ? _(!1, `Trying to set droppable isCombineEnabled to ${String(o)}
      but it is already ${String(n.isCombineEnabled)}`) : _());
    const i = {
      ...n,
      isCombineEnabled: o
    };
    return Vo(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    ur(e) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot move by window in phase ${e.phase}`) : _()), e.isWindowScrollAllowed || (process.env.NODE_ENV !== "production" ? _(!1, "Window scrolling is currently not supported for fixed lists") : _());
    const r = t.payload.newScroll;
    if (Ut(e.viewport.scroll.current, r))
      return Mo(e);
    const o = pg(e.viewport, r);
    return aa(e) ? Og({
      state: e,
      viewport: o
    }) : qr({
      state: e,
      viewport: o
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!ur(e))
      return e;
    const r = t.payload.maxScroll;
    if (Ut(r, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? _(!1, `${t.type} received while not in DRAGGING phase`) : _());
    const r = hO({
      state: e,
      type: t.type
    });
    return r ? qr({
      state: e,
      impact: r.impact,
      clientSelection: r.clientSelection,
      scrollJumpRequest: r.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const r = t.payload.reason;
    return e.phase !== "COLLECTING" && (process.env.NODE_ENV !== "production" ? _(!1, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : _()), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot animate drop from phase ${e.phase}`) : _()), {
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
const MO = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), LO = (e) => ({
  type: "LIFT",
  payload: e
}), BO = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), FO = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), WO = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), GO = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), jO = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), kO = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), wg = (e) => ({
  type: "MOVE",
  payload: e
}), zO = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), HO = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), UO = () => ({
  type: "MOVE_UP",
  payload: null
}), qO = () => ({
  type: "MOVE_DOWN",
  payload: null
}), KO = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), YO = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Ps = () => ({
  type: "FLUSH",
  payload: null
}), XO = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), As = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Dg = (e) => ({
  type: "DROP",
  payload: e
}), JO = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ng = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
function ZO(e) {
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
  process.env.NODE_ENV !== "production" && Ue(`
    Detected non-consecutive <Draggable /> indexes.

    (This can cause unexpected bugs)

    ${o}
  `);
}
function QO(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Or(e.droppable.id, t.draggables);
    ZO(r);
  }
}
var eS = (e) => ({
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
  c.phase === "DROP_ANIMATING" && r(As({
    completed: c.completed
  })), t().phase !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Unexpected phase to start a drag") : _()), r(Ps()), r(MO({
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
    viewport: g
  } = e.startPublishing(f);
  QO(l, d), r(BO({
    critical: l,
    dimensions: d,
    clientSelection: a,
    movementMode: s,
    viewport: g
  }));
}, tS = (e) => () => (t) => (r) => {
  r.type === "INITIAL_PUBLISH" && e.dragging(), r.type === "DROP_ANIMATE" && e.dropping(r.payload.completed.result.reason), (r.type === "FLUSH" || r.type === "DROP_COMPLETE") && e.resting(), t(r);
};
const $s = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, ln = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Cg = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, rr = `${Cg.outOfTheWay}s ${$s.outOfTheWay}`, Kr = {
  fluid: `opacity ${rr}`,
  snap: `transform ${rr}, opacity ${rr}`,
  drop: (e) => {
    const t = `${e}s ${$s.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${rr}`,
  placeholder: `height ${rr}, width ${rr}, margin ${rr}`
}, iu = (e) => Ut(e, it) ? void 0 : `translate(${e.x}px, ${e.y}px)`, sa = {
  moveTo: iu,
  drop: (e, t) => {
    const r = iu(e);
    if (r)
      return t ? `${r} scale(${ln.scale.drop})` : r;
  }
}, {
  minDropTime: ca,
  maxDropTime: _g
} = Cg, rS = _g - ca, au = 1500, nS = 0.6;
var oS = ({
  current: e,
  destination: t,
  reason: r
}) => {
  const o = an(e, t);
  if (o <= 0)
    return ca;
  if (o >= au)
    return _g;
  const n = o / au, i = ca + rS * n, a = r === "CANCEL" ? i * nS : i;
  return Number(a.toFixed(2));
}, iS = ({
  impact: e,
  draggable: t,
  dimensions: r,
  viewport: o,
  afterCritical: n
}) => {
  const {
    draggables: i,
    droppables: a
  } = r, s = wt(e), c = s ? a[s] : null, u = a[t.descriptor.droppableId], f = xg({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: n,
    droppable: c || u,
    viewport: o
  });
  return St(f, t.client.borderBox.center);
}, aS = ({
  draggables: e,
  reason: t,
  lastImpact: r,
  home: o,
  viewport: n,
  onLiftImpact: i
}) => !r.at || t !== "DROP" ? {
  impact: Eg({
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
    displaced: sn
  },
  didDropInsideDroppable: !0
};
const sS = ({
  getState: e,
  dispatch: t
}) => (r) => (o) => {
  if (o.type !== "DROP") {
    r(o);
    return;
  }
  const n = e(), i = o.payload.reason;
  if (n.phase === "COLLECTING") {
    t(JO({
      reason: i
    }));
    return;
  }
  if (n.phase === "IDLE")
    return;
  n.phase === "DROP_PENDING" && n.isWaiting && (process.env.NODE_ENV !== "production" ? _(!1, "A DROP action occurred while DROP_PENDING and still waiting") : _()), n.phase === "DRAGGING" || n.phase === "DROP_PENDING" || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot drop in phase: ${n.phase}`) : _());
  const s = n.critical, c = n.dimensions, u = c.draggables[n.critical.draggable.id], {
    impact: f,
    didDropInsideDroppable: l
  } = aS({
    reason: i,
    lastImpact: n.impact,
    afterCritical: n.afterCritical,
    onLiftImpact: n.onLiftImpact,
    home: n.dimensions.droppables[n.critical.droppable.id],
    viewport: n.viewport,
    draggables: n.dimensions.draggables
  }), d = l ? ws(f) : null, g = l ? yo(f) : null, h = {
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
  }, p = iS({
    impact: f,
    draggable: u,
    dimensions: c,
    viewport: n.viewport,
    afterCritical: n.afterCritical
  }), v = {
    critical: n.critical,
    afterCritical: n.afterCritical,
    result: b,
    impact: f
  };
  if (!(!Ut(n.current.client.offset, p) || !!b.combine)) {
    t(As({
      completed: v
    }));
    return;
  }
  const E = oS({
    current: n.current.client.offset,
    destination: p,
    reason: i
  });
  t(XO({
    newHomeClientOffset: p,
    dropDuration: E,
    completed: v
  }));
};
var cS = sS, Ig = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function lS(e) {
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
function uS({
  onWindowScroll: e
}) {
  function t() {
    e(Ig());
  }
  const r = nn(t), o = lS(r);
  let n = Ht;
  function i() {
    return n !== Ht;
  }
  function a() {
    i() && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot start scroll listener when already active") : _()), n = Tt(window, [o]);
  }
  function s() {
    i() || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot stop scroll listener when not active") : _()), r.cancel(), n(), n = Ht;
  }
  return {
    start: a,
    stop: s,
    isActive: i
  };
}
const dS = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", pS = (e) => {
  const t = uS({
    onWindowScroll: (r) => {
      e.dispatch(zO({
        newScroll: r
      }));
    }
  });
  return (r) => (o) => {
    !t.isActive() && o.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && dS(o) && t.stop(), r(o);
  };
};
var fS = pS, mS = (e) => {
  let t = !1, r = !1;
  const o = setTimeout(() => {
    r = !0;
  }), n = (i) => {
    if (t) {
      process.env.NODE_ENV !== "production" && Ue("Announcement already made. Not making a second announcement");
      return;
    }
    if (r) {
      process.env.NODE_ENV !== "production" && Ue(`
        Announcements cannot be made asynchronously.
        Default message has already been announced.
      `);
      return;
    }
    t = !0, e(i), clearTimeout(o);
  };
  return n.wasCalled = () => t, n;
}, gS = () => {
  const e = [], t = (n) => {
    const i = e.findIndex((s) => s.timerId === n);
    i === -1 && (process.env.NODE_ENV !== "production" ? _(!1, "Could not find timer") : _());
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
const bS = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, hS = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, yS = (e, t) => {
  if (e === t)
    return !0;
  const r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, o = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return r && o;
}, zr = (e, t) => {
  Cn(), t(), _n();
}, An = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Lo(e, t, r, o) {
  if (!e) {
    r(o(t));
    return;
  }
  const n = mS(r);
  e(t, {
    announce: n
  }), n.wasCalled() || r(o(t));
}
var vS = (e, t) => {
  const r = gS();
  let o = null;
  const n = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onBeforeCapture as a drag start has already been published") : _()), zr("onBeforeCapture", () => {
      const g = e().onBeforeCapture;
      g && g({
        draggableId: l,
        mode: d
      });
    });
  }, i = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : _()), zr("onBeforeDragStart", () => {
      const g = e().onBeforeDragStart;
      g && g(An(l, d));
    });
  }, a = (l, d) => {
    o && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onBeforeDragStart as a drag start has already been published") : _());
    const g = An(l, d);
    o = {
      mode: d,
      lastCritical: l,
      lastLocation: g.source,
      lastCombine: null
    }, r.add(() => {
      zr("onDragStart", () => Lo(e().onDragStart, g, t, Gn.onDragStart));
    });
  }, s = (l, d) => {
    const g = ws(d), h = yo(d);
    o || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onDragMove when onDragStart has not been called") : _());
    const b = !yS(l, o.lastCritical);
    b && (o.lastCritical = l);
    const p = !bS(o.lastLocation, g);
    p && (o.lastLocation = g);
    const v = !hS(o.lastCombine, h);
    if (v && (o.lastCombine = h), !b && !p && !v)
      return;
    const w = {
      ...An(l, o.mode),
      combine: h,
      destination: g
    };
    r.add(() => {
      zr("onDragUpdate", () => Lo(e().onDragUpdate, w, t, Gn.onDragUpdate));
    });
  }, c = () => {
    o || (process.env.NODE_ENV !== "production" ? _(!1, "Can only flush responders while dragging") : _()), r.flush();
  }, u = (l) => {
    o || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fire onDragEnd when there is no matching onDragStart") : _()), o = null, zr("onDragEnd", () => Lo(e().onDragEnd, l, t, Gn.onDragEnd));
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
        ...An(o.lastCritical, o.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      u(l);
    }
  };
}, ES = (e, t) => {
  const r = vS(e, t);
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
const xS = (e) => (t) => (r) => {
  if (r.type !== "DROP_ANIMATION_FINISHED") {
    t(r);
    return;
  }
  const o = e.getState();
  o.phase !== "DROP_ANIMATING" && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot finish a drop animating when no drop is occurring") : _()), e.dispatch(As({
    completed: o.completed
  }));
};
var OS = xS;
const SS = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ng());
      }
    };
    r = requestAnimationFrame(() => {
      r = null, t = Tt(window, [a]);
    });
  };
};
var wS = SS, DS = (e) => () => (t) => (r) => {
  (r.type === "DROP_COMPLETE" || r.type === "FLUSH" || r.type === "DROP_ANIMATE") && e.stopPublishing(), t(r);
}, NS = (e) => {
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
const CS = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var _S = (e) => (t) => (r) => (o) => {
  if (CS(o)) {
    e.stop(), r(o);
    return;
  }
  if (o.type === "INITIAL_PUBLISH") {
    r(o);
    const n = t.getState();
    n.phase !== "DRAGGING" && (process.env.NODE_ENV !== "production" ? _(!1, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : _()), e.start(n);
    return;
  }
  r(o), e.scroll(t.getState());
};
const IS = (e) => (t) => (r) => {
  if (t(r), r.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const o = e.getState();
  o.phase === "DROP_PENDING" && (o.isWaiting || e.dispatch(Dg({
    reason: o.reason
  })));
};
var PS = IS;
const AS = process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
}) : Gm;
var $S = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: r,
  getResponders: o,
  announce: n,
  autoScroller: i
}) => Wm(VO, AS(yE(tS(r), DS(e), eS(e), cS, OS, wS, PS, _S(i), fS, NS(t), ES(o, n))));
const Bo = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function TS({
  registry: e,
  callbacks: t
}) {
  let r = Bo(), o = null;
  const n = () => {
    o || (t.collectionStarting(), o = requestAnimationFrame(() => {
      o = null, Cn();
      const {
        additions: c,
        removals: u,
        modified: f
      } = r, l = Object.keys(c).map((h) => e.draggable.getById(h).getDimension(it)).sort((h, b) => h.descriptor.index - b.descriptor.index), d = Object.keys(f).map((h) => {
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
      r = Bo(), _n(), t.publish(g);
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
      o && (cancelAnimationFrame(o), o = null, r = Bo());
    }
  };
}
var Pg = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = St({
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
}, Ag = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot find document.documentElement") : _()), e;
}, $g = () => {
  const e = Ag();
  return Pg({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, RS = () => {
  const e = Ig(), t = $g(), r = e.y, o = e.x, n = Ag(), i = n.clientWidth, a = n.clientHeight, s = o + i, c = r + a;
  return {
    frame: Vt({
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
        value: it,
        displacement: it
      }
    }
  };
}, VS = ({
  critical: e,
  scrollOptions: t,
  registry: r
}) => {
  Cn();
  const o = RS(), n = o.scroll.current, i = e.droppable, a = r.droppable.getAllByType(i.type).map((f) => f.callbacks.getDimensionAndWatchScroll(n, t)), s = r.draggable.getAllByType(e.draggable.type).map((f) => f.getDimension(n)), c = {
    draggables: ag(s),
    droppables: ig(a)
  };
  return _n(), {
    dimensions: c,
    critical: e,
    viewport: o
  };
};
function su(e, t, r) {
  return r.descriptor.id === t.id || r.descriptor.type !== t.type ? !1 : e.droppable.getById(r.descriptor.droppableId).descriptor.mode !== "virtual" ? (process.env.NODE_ENV !== "production" && Ue(`
      You are attempting to add or remove a Draggable [id: ${r.descriptor.id}]
      while a drag is occurring. This is only supported for virtual lists.

      See https://github.com/hello-pangea/dnd/blob/main/docs/patterns/virtual-lists.md
    `), !1) : !0;
}
var MS = (e, t) => {
  let r = null;
  const o = TS({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), n = (d, g) => {
    e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot update is enabled flag of Droppable ${d} as it is not registered`) : _()), r && t.updateDroppableIsEnabled({
      id: d,
      isEnabled: g
    });
  }, i = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot update isCombineEnabled flag of Droppable ${d} as it is not registered`) : _()), t.updateDroppableIsCombineEnabled({
      id: d,
      isCombineEnabled: g
    }));
  }, a = (d, g) => {
    r && (e.droppable.exists(d) || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot update the scroll on Droppable ${d} as it is not registered`) : _()), t.updateDroppableScroll({
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
    r || (process.env.NODE_ENV !== "production" ? _(!1, "Should only be subscribed when a collection is occurring") : _());
    const g = r.critical.draggable;
    d.type === "ADDITION" && su(e, g, d.value) && o.add(d.value), d.type === "REMOVAL" && su(e, g, d.value) && o.remove(d.value);
  };
  return {
    updateDroppableIsEnabled: n,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: s,
    updateDroppableScroll: a,
    startPublishing: (d) => {
      r && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot start capturing critical dimensions as there is already a collection") : _());
      const g = e.draggable.getById(d.draggableId), h = e.droppable.getById(g.descriptor.droppableId), b = {
        draggable: g.descriptor,
        droppable: h.descriptor
      }, p = e.subscribe(u);
      return r = {
        critical: b,
        unsubscribe: p
      }, VS({
        critical: b,
        registry: e,
        scrollOptions: d.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Tg = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", LS = (e) => {
  window.scrollBy(e.x, e.y);
};
const BS = ot((e) => ho(e).filter((t) => !(!t.isEnabled || !t.frame))), FS = (e, t) => BS(t).find((o) => (o.frame || (process.env.NODE_ENV !== "production" ? _(!1, "Invalid result") : _()), bg(o.frame.pageMarginBox)(e))) || null;
var WS = ({
  center: e,
  destination: t,
  droppables: r
}) => {
  if (t) {
    const n = r[t];
    return n.frame ? n : null;
  }
  return FS(e, r);
};
const un = {
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
var GS = (e, t, r = () => un) => {
  const o = r(), n = e[t.size] * o.startFromPercentage, i = e[t.size] * o.maxScrollAtPercentage;
  return {
    startScrollingFrom: n,
    maxScrollValueAt: i
  };
}, Rg = ({
  startOfRange: e,
  endOfRange: t,
  current: r
}) => {
  const o = t - e;
  return o === 0 ? (process.env.NODE_ENV !== "production" && Ue(`
      Detected distance range of 0 in the fluid auto scroller
      This is unexpected and would cause a divide by 0 issue.
      Not allowing an auto scroll
    `), 0) : (r - e) / o;
}, Ts = 1, jS = (e, t, r = () => un) => {
  const o = r();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return o.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Ts;
  const i = 1 - Rg({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), a = o.maxPixelScroll * o.ease(i);
  return Math.ceil(a);
}, kS = (e, t, r) => {
  const o = r(), n = o.durationDampening.accelerateAt, i = o.durationDampening.stopDampeningAt, a = t, s = i, u = Date.now() - a;
  if (u >= i)
    return e;
  if (u < n)
    return Ts;
  const f = Rg({
    startOfRange: n,
    endOfRange: s,
    current: u
  }), l = e * o.ease(f);
  return Math.ceil(l);
}, cu = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: n
}) => {
  const i = jS(e, t, n);
  return i === 0 ? 0 : o ? Math.max(kS(i, r, n), Ts) : i;
}, lu = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: r,
  axis: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = GS(e, o, i);
  return t[o.end] < t[o.start] ? cu({
    distanceToEdge: t[o.end],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }) : -1 * cu({
    distanceToEdge: t[o.start],
    thresholds: a,
    dragStartTime: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
}, zS = ({
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
const HS = og((e) => e === 0 ? 0 : e);
var Vg = ({
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
  }, s = lu({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: Ds,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), c = lu({
    container: t,
    distanceToEdges: a,
    dragStartTime: e,
    axis: lg,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  }), u = HS({
    x: c,
    y: s
  });
  if (Ut(u, it))
    return null;
  const f = zS({
    container: t,
    subject: r,
    proposedScroll: u
  });
  return f ? Ut(f, it) ? null : f : null;
};
const US = og((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Rs = /* @__PURE__ */ (() => {
  const e = (t, r) => t < 0 ? t : t > r ? t - r : 0;
  return ({
    current: t,
    max: r,
    change: o
  }) => {
    const n = pt(t, o), i = {
      x: e(n.x, r.x),
      y: e(n.y, r.y)
    };
    return Ut(i, it) ? null : i;
  };
})(), Mg = ({
  max: e,
  current: t,
  change: r
}) => {
  const o = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, n = US(r), i = Rs({
    max: o,
    current: t,
    change: n
  });
  return !i || n.x !== 0 && i.x === 0 || n.y !== 0 && i.y === 0;
}, Vs = (e, t) => Mg({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), qS = (e, t) => {
  if (!Vs(e, t))
    return null;
  const r = e.scroll.max, o = e.scroll.current;
  return Rs({
    current: o,
    max: r,
    change: t
  });
}, Ms = (e, t) => {
  const r = e.frame;
  return r ? Mg({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  }) : !1;
}, KS = (e, t) => {
  const r = e.frame;
  return !r || !Ms(e, t) ? null : Rs({
    current: r.scroll.current,
    max: r.scroll.max,
    change: t
  });
};
var YS = ({
  viewport: e,
  subject: t,
  center: r,
  dragStartTime: o,
  shouldUseTimeDampening: n,
  getAutoScrollerOptions: i
}) => {
  const a = Vg({
    dragStartTime: o,
    container: e.frame,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return a && Vs(e, a) ? a : null;
}, XS = ({
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
  const s = Vg({
    dragStartTime: o,
    container: a.pageMarginBox,
    subject: t,
    center: r,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  return s && Ms(e, s) ? s : null;
}, uu = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: r,
  scrollWindow: o,
  scrollDroppable: n,
  getAutoScrollerOptions: i
}) => {
  const a = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const l = e.viewport, d = YS({
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
  const u = WS({
    center: a,
    destination: wt(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!u)
    return;
  const f = XS({
    dragStartTime: t,
    droppable: u,
    subject: c,
    center: a,
    shouldUseTimeDampening: r,
    getAutoScrollerOptions: i
  });
  f && n(u.descriptor.id, f);
}, JS = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: r = () => un
}) => {
  const o = nn(e), n = nn(t);
  let i = null;
  const a = (u) => {
    i || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot fluid scroll if not dragging") : _());
    const {
      shouldUseTimeDampening: f,
      dragStartTime: l
    } = i;
    uu({
      state: u,
      scrollWindow: o,
      scrollDroppable: n,
      dragStartTime: l,
      shouldUseTimeDampening: f,
      getAutoScrollerOptions: r
    });
  };
  return {
    start: (u) => {
      Cn(), i && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot start auto scrolling when already started") : _());
      const f = Date.now();
      let l = !1;
      const d = () => {
        l = !0;
      };
      uu({
        state: u,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: d,
        scrollDroppable: d,
        getAutoScrollerOptions: r
      }), i = {
        dragStartTime: f,
        shouldUseTimeDampening: l
      }, _n(), l && a(u);
    },
    stop: () => {
      i && (o.cancel(), n.cancel(), i = null);
    },
    scroll: a
  };
}, ZS = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: r
}) => {
  const o = (s, c) => {
    const u = pt(s.current.client.selection, c);
    e({
      client: u
    });
  }, n = (s, c) => {
    if (!Ms(s, c))
      return c;
    const u = KS(s, c);
    if (!u)
      return t(s.descriptor.id, c), null;
    const f = St(c, u);
    return t(s.descriptor.id, f), St(c, f);
  }, i = (s, c, u) => {
    if (!s || !Vs(c, u))
      return u;
    const f = qS(c, u);
    if (!f)
      return r(u), null;
    const l = St(u, f);
    return r(l), St(u, l);
  };
  return (s) => {
    const c = s.scrollJumpRequest;
    if (!c)
      return;
    const u = wt(s.impact);
    u || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot perform a jump scroll when there is no destination") : _());
    const f = n(s.dimensions.droppables[u], c);
    if (!f)
      return;
    const l = s.viewport, d = i(s.isWindowScrollAllowed, l, f);
    d && o(s, d);
  };
}, QS = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: r,
  getAutoScrollerOptions: o
}) => {
  const n = JS({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: o
  }), i = ZS({
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
const Lr = "data-rfd", Br = (() => {
  const e = `${Lr}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), la = (() => {
  const e = `${Lr}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ew = (() => {
  const e = `${Lr}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), du = {
  contextId: `${Lr}-scroll-container-context-id`
}, tw = (e) => (t) => `[${t}="${e}"]`, Hr = (e, t) => e.map((r) => {
  const o = r.styles[t];
  return o ? `${r.selector} { ${o} }` : "";
}).join(" "), rw = "pointer-events: none;";
var nw = (e) => {
  const t = tw(e), r = (() => {
    const s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Br.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: s,
        dragging: rw,
        dropAnimating: s
      }
    };
  })(), o = (() => {
    const s = `
      transition: ${Kr.outOfTheWay};
    `;
    return {
      selector: t(la.contextId),
      styles: {
        dragging: s,
        dropAnimating: s,
        userCancel: s
      }
    };
  })(), n = {
    selector: t(ew.contextId),
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
    always: Hr(a, "always"),
    resting: Hr(a, "resting"),
    dragging: Hr(a, "dragging"),
    dropAnimating: Hr(a, "dropAnimating"),
    userCancel: Hr(a, "userCancel")
  };
};
const ow = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ue;
var Dt = ow;
const Fo = () => {
  const e = document.querySelector("head");
  return e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot find the head to append a style to") : _()), e;
}, pu = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function iw(e, t) {
  const r = ge(() => nw(e), [e]), o = M(null), n = M(null), i = Q(ot((l) => {
    const d = n.current;
    d || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot set dynamic style element if it is not set") : _()), d.textContent = l;
  }), []), a = Q((l) => {
    const d = o.current;
    d || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot set dynamic style element if it is not set") : _()), d.textContent = l;
  }, []);
  Dt(() => {
    !o.current && !n.current || (process.env.NODE_ENV !== "production" ? _(!1, "style elements already mounted") : _());
    const l = pu(t), d = pu(t);
    return o.current = l, n.current = d, l.setAttribute(`${Lr}-always`, e), d.setAttribute(`${Lr}-dynamic`, e), Fo().appendChild(l), Fo().appendChild(d), a(r.always), i(r.resting), () => {
      const g = (h) => {
        const b = h.current;
        b || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot unmount ref as it is not set") : _()), Fo().removeChild(b), h.current = null;
      };
      g(o), g(n);
    };
  }, [t, a, i, r.always, r.resting, e]);
  const s = Q(() => i(r.dragging), [i, r.dragging]), c = Q((l) => {
    if (l === "DROP") {
      i(r.dropAnimating);
      return;
    }
    i(r.userCancel);
  }, [i, r.dropAnimating, r.userCancel]), u = Q(() => {
    n.current && i(r.resting);
  }, [i, r.resting]);
  return ge(() => ({
    dragging: s,
    dropping: c,
    resting: u
  }), [s, c, u]);
}
function Lg(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Bg = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function In(e) {
  return e instanceof Bg(e).HTMLElement;
}
function Fg(e, t) {
  const r = `[${Br.contextId}="${e}"]`, o = Lg(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Ue(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Br.draggableId) === t);
  return n ? In(n) ? n : (process.env.NODE_ENV !== "production" && Ue("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Ue(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
function aw(e) {
  const t = M({}), r = M(null), o = M(null), n = M(!1), i = Q(function(d, g) {
    const h = {
      id: d,
      focus: g
    };
    return t.current[d] = h, function() {
      const p = t.current;
      p[d] !== h && delete p[d];
    };
  }, []), a = Q(function(d) {
    const g = Fg(e, d);
    g && g !== document.activeElement && g.focus();
  }, [e]), s = Q(function(d, g) {
    r.current === d && (r.current = g);
  }, []), c = Q(function() {
    o.current || n.current && (o.current = requestAnimationFrame(() => {
      o.current = null;
      const d = r.current;
      d && a(d);
    }));
  }, [a]), u = Q(function(d) {
    r.current = null;
    const g = document.activeElement;
    g && g.getAttribute(Br.draggableId) === d && (r.current = d);
  }, []);
  return Dt(() => (n.current = !0, function() {
    n.current = !1;
    const d = o.current;
    d && cancelAnimationFrame(d);
  }), []), ge(() => ({
    register: i,
    tryRecordFocus: u,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: s
  }), [i, u, c, s]);
}
function sw() {
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
    return d || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find draggable entry with id [${l}]`) : _()), d;
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
    return d || (process.env.NODE_ENV !== "production" ? _(!1, `Cannot find droppable entry with id [${l}]`) : _()), d;
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
function cw() {
  const e = ge(sw, []);
  return ue(() => function() {
    I.version.startsWith("16") || I.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Ls = I.createContext(null), dn = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot find document.body") : _()), e;
};
const lw = {
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
var uw = lw;
const dw = (e) => `rfd-announcement-${e}`;
function pw(e) {
  const t = ge(() => dw(e), [e]), r = M(null);
  return ue(function() {
    const i = document.createElement("div");
    return r.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), zt(i.style, uw), dn().appendChild(i), function() {
      setTimeout(function() {
        const c = dn();
        c.contains(i) && c.removeChild(i), i === r.current && (r.current = null);
      });
    };
  }, [t]), Q((n) => {
    const i = r.current;
    if (i) {
      i.textContent = n;
      return;
    }
    process.env.NODE_ENV !== "production" && Ue(`
      A screen reader message was trying to be announced but it was unable to do so.
      This can occur if you unmount your <DragDropContext /> in your onDragEnd.
      Consider calling provided.announce() before the unmount so that the instruction will
      not be lost for users relying on a screen reader.

      Message not passed to screen reader:

      "${n}"
    `);
  }, []);
}
let fw = 0;
const Wg = {
  separator: "::"
};
function mw(e, t = Wg) {
  return ge(() => `${e}${t.separator}${fw++}`, [t.separator, e]);
}
function gw(e, t = Wg) {
  const r = I.useId();
  return ge(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Bs = "useId" in I ? gw : mw;
function bw({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function hw({
  contextId: e,
  text: t
}) {
  const r = Bs("hidden-text", {
    separator: "-"
  }), o = ge(() => bw({
    contextId: e,
    uniqueId: r
  }), [r, e]);
  return ue(function() {
    const i = document.createElement("div");
    return i.id = o, i.textContent = t, i.style.display = "none", dn().appendChild(i), function() {
      const s = dn();
      s.contains(i) && s.removeChild(i);
    };
  }, [o, t]), o;
}
var xo = I.createContext(null), yw = {
  react: "^16.8.5 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};
const vw = /(\d+)\.(\d+)\.(\d+)/, fu = (e) => {
  const t = vw.exec(e);
  t == null && (process.env.NODE_ENV !== "production" ? _(!1, `Unable to parse React version ${e}`) : _());
  const r = Number(t[1]), o = Number(t[2]), n = Number(t[3]);
  return {
    major: r,
    minor: o,
    patch: n,
    raw: e
  };
}, Ew = (e, t) => t.major > e.major ? !0 : t.major < e.major ? !1 : t.minor > e.minor ? !0 : t.minor < e.minor ? !1 : t.patch >= e.patch;
var xw = (e, t) => {
  const r = fu(e), o = fu(t);
  Ew(r, o) || process.env.NODE_ENV !== "production" && Ue(`
    React version: [${o.raw}]
    does not satisfy expected peer dependency version: [${r.raw}]

    This can result in run time bugs, and even fatal crashes
  `);
};
const Wo = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/doctype.md
`;
var Ow = (e) => {
  const t = e.doctype;
  if (!t) {
    process.env.NODE_ENV !== "production" && Ue(`
      No <!doctype html> found.

      ${Wo}
    `);
    return;
  }
  t.name.toLowerCase() !== "html" && process.env.NODE_ENV !== "production" && Ue(`
      Unexpected <!doctype> found: (${t.name})

      ${Wo}
    `), t.publicId !== "" && process.env.NODE_ENV !== "production" && Ue(`
      Unexpected <!doctype> publicId found: (${t.publicId})
      A html5 doctype does not have a publicId

      ${Wo}
    `);
};
function Fs(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Pn(e, t) {
  Fs(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        oa(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function Sw() {
  Pn(() => {
    xw(yw.react, I.version), Ow(document);
  }, []);
}
function Ws(e) {
  const t = M(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function ww() {
  let e = null;
  function t() {
    return !!e;
  }
  function r(a) {
    return a === e;
  }
  function o(a) {
    e && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot claim lock as it is already claimed") : _());
    const s = {
      abandon: a
    };
    return e = s, s;
  }
  function n() {
    e || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot release lock when there is no lock") : _()), e = null;
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
function pn(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Dw = 9, Nw = 13, Gs = 27, Gg = 32, Cw = 33, _w = 34, Iw = 35, Pw = 36, Aw = 37, $w = 38, Tw = 39, Rw = 40, Vw = {
  [Nw]: !0,
  [Dw]: !0
};
var jg = (e) => {
  Vw[e.keyCode] && e.preventDefault();
};
const Mw = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((o) => `on${o}` in document) || e;
})();
var Oo = Mw;
const kg = 0, mu = 5;
function Lw(e, t) {
  return Math.abs(t.x - e.x) >= mu || Math.abs(t.y - e.y) >= mu;
}
const gu = {
  type: "IDLE"
};
function Bw({
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
      if (i !== kg)
        return;
      const c = {
        x: a,
        y: s
      }, u = r();
      if (u.type === "DRAGGING") {
        n.preventDefault(), u.actions.move(c);
        return;
      }
      u.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot be IDLE") : _());
      const f = u.point;
      if (!Lw(f, c))
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
      if (n.keyCode === Gs) {
        n.preventDefault(), e();
        return;
      }
      jg(n);
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
      if (i.type === "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Unexpected phase") : _()), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      n.preventDefault();
    }
  }, {
    eventName: Oo,
    fn: e
  }];
}
function Fw(e) {
  const t = M(gu), r = M(Ht), o = ge(() => ({
    eventName: "mousedown",
    fn: function(l) {
      if (l.defaultPrevented || l.button !== kg || l.ctrlKey || l.metaKey || l.shiftKey || l.altKey)
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
  }), [e]), n = ge(() => ({
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
  }), [e]), i = Q(function() {
    const l = {
      passive: !1,
      capture: !0
    };
    r.current = Tt(window, [n, o], l);
  }, [n, o]), a = Q(() => {
    t.current.type !== "IDLE" && (t.current = gu, r.current(), i());
  }, [i]), s = Q(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = Q(function() {
    const l = {
      capture: !0,
      passive: !1
    }, d = Bw({
      cancel: s,
      completed: a,
      getPhase: () => t.current,
      setPhase: (g) => {
        t.current = g;
      }
    });
    r.current = Tt(window, d, l);
  }, [s, a]), u = Q(function(l, d) {
    t.current.type !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Expected to move from IDLE to PENDING drag") : _()), t.current = {
      type: "PENDING",
      point: d,
      actions: l
    }, c();
  }, [c]);
  Dt(function() {
    return i(), function() {
      r.current();
    };
  }, [i]);
}
function Ww() {
}
const Gw = {
  [_w]: !0,
  [Cw]: !0,
  [Pw]: !0,
  [Iw]: !0
};
function jw(e, t) {
  function r() {
    t(), e.cancel();
  }
  function o() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (n) => {
      if (n.keyCode === Gs) {
        n.preventDefault(), r();
        return;
      }
      if (n.keyCode === Gg) {
        n.preventDefault(), o();
        return;
      }
      if (n.keyCode === Rw) {
        n.preventDefault(), e.moveDown();
        return;
      }
      if (n.keyCode === $w) {
        n.preventDefault(), e.moveUp();
        return;
      }
      if (n.keyCode === Tw) {
        n.preventDefault(), e.moveRight();
        return;
      }
      if (n.keyCode === Aw) {
        n.preventDefault(), e.moveLeft();
        return;
      }
      if (Gw[n.keyCode]) {
        n.preventDefault();
        return;
      }
      jg(n);
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
    eventName: Oo,
    fn: r
  }];
}
function kw(e) {
  const t = M(Ww), r = ge(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Gg)
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
        c || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot stop capturing a keyboard drag when not capturing") : _()), c = !1, t.current(), o();
      }
      t.current = Tt(window, jw(u, f), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), o = Q(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Tt(window, [r], i);
  }, [r]);
  Dt(function() {
    return o(), function() {
      t.current();
    };
  }, [o]);
}
const Go = {
  type: "IDLE"
}, zw = 120, Hw = 0.15;
function Uw({
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
      r.keyCode === Gs && r.preventDefault(), e();
    }
  }, {
    eventName: Oo,
    fn: e
  }];
}
function qw({
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
      n.type === "IDLE" && (process.env.NODE_ENV, _());
      const i = o.touches[0];
      if (!i || !(i.force >= Hw))
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
    eventName: Oo,
    fn: e
  }];
}
function Kw(e) {
  const t = M(Go), r = M(Ht), o = Q(function() {
    return t.current;
  }, []), n = Q(function(g) {
    t.current = g;
  }, []), i = ge(() => ({
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
        clientX: v,
        clientY: w
      } = p, E = {
        x: v,
        y: w
      };
      r.current(), l(b, E);
    }
  }), [e]), a = Q(function() {
    const g = {
      capture: !0,
      passive: !1
    };
    r.current = Tt(window, [i], g);
  }, [i]), s = Q(() => {
    const d = t.current;
    d.type !== "IDLE" && (d.type === "PENDING" && clearTimeout(d.longPressTimerId), n(Go), r.current(), a());
  }, [a, n]), c = Q(() => {
    const d = t.current;
    s(), d.type === "DRAGGING" && d.actions.cancel({
      shouldBlockNextClick: !0
    }), d.type === "PENDING" && d.actions.abort();
  }, [s]), u = Q(function() {
    const g = {
      capture: !0,
      passive: !1
    }, h = {
      cancel: c,
      completed: s,
      getPhase: o
    }, b = Tt(window, qw(h), g), p = Tt(window, Uw(h), g);
    r.current = function() {
      b(), p();
    };
  }, [c, o, s]), f = Q(function() {
    const g = o();
    g.type !== "PENDING" && (process.env.NODE_ENV !== "production" ? _(!1, `Cannot start dragging from phase ${g.type}`) : _());
    const h = g.actions.fluidLift(g.point);
    n({
      type: "DRAGGING",
      actions: h,
      hasMoved: !1
    });
  }, [o, n]), l = Q(function(g, h) {
    o().type !== "IDLE" && (process.env.NODE_ENV !== "production" ? _(!1, "Expected to move from IDLE to PENDING drag") : _());
    const b = setTimeout(f, zw);
    n({
      type: "PENDING",
      point: h,
      actions: g,
      longPressTimerId: b
    }), u();
  }, [u, o, n, f]);
  Dt(function() {
    return a(), function() {
      r.current();
      const h = o();
      h.type === "PENDING" && (clearTimeout(h.longPressTimerId), n(Go));
    };
  }, [o, a, n]), Dt(function() {
    return Tt(window, [{
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
function Yw(e) {
  Fs(() => {
    const t = Ws(e);
    Pn(() => {
      t.current.length !== e.length && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot change the amount of sensor hooks after mounting") : _(!1));
    });
  });
}
const Xw = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function zg(e, t) {
  if (t == null)
    return !1;
  if (Xw.includes(t.tagName.toLowerCase()))
    return !0;
  const o = t.getAttribute("contenteditable");
  return o === "true" || o === "" ? !0 : t === e ? !1 : zg(e, t.parentElement);
}
function Jw(e, t) {
  const r = t.target;
  return In(r) ? zg(e, r) : !1;
}
var Zw = (e) => Vt(e.getBoundingClientRect()).center;
function Qw(e) {
  return e instanceof Bg(e).Element;
}
const eD = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((o) => o in Element.prototype) || e;
})();
function Hg(e, t) {
  return e == null ? null : e[eD](t) ? e : Hg(e.parentElement, t);
}
function tD(e, t) {
  return e.closest ? e.closest(t) : Hg(e, t);
}
function rD(e) {
  return `[${Br.contextId}="${e}"]`;
}
function nD(e, t) {
  const r = t.target;
  if (!Qw(r))
    return process.env.NODE_ENV !== "production" && Ue("event.target must be a Element"), null;
  const o = rD(e), n = tD(r, o);
  return n ? In(n) ? n : (process.env.NODE_ENV !== "production" && Ue("drag handle must be a HTMLElement"), null) : null;
}
function oD(e, t) {
  const r = nD(e, t);
  return r ? r.getAttribute(Br.draggableId) : null;
}
function iD(e, t) {
  const r = `[${la.contextId}="${e}"]`, n = Lg(document, r).find((i) => i.getAttribute(la.id) === t);
  return n ? In(n) ? n : (process.env.NODE_ENV !== "production" && Ue("Draggable element is not a HTMLElement"), null) : null;
}
function aD(e) {
  e.preventDefault();
}
function $n({
  expected: e,
  phase: t,
  isLockActive: r,
  shouldWarn: o
}) {
  return r() ? e !== t ? (o && process.env.NODE_ENV !== "production" && Ue(`
        Cannot perform action.
        The actions you used belong to an outdated phase

        Current phase: ${e}
        You called an action from outdated phase: ${t}

        Tips:

        - Do not use preDragActions actions after calling preDragActions.lift()
      `), !1) : !0 : (o && process.env.NODE_ENV !== "production" && Ue(`
        Cannot perform action.
        The sensor no longer has an action lock.

        Tips:

        - Throw away your action handlers when forceStop() is called
        - Check actions.isActive() if you really need to
      `), !1);
}
function Ug({
  lockAPI: e,
  store: t,
  registry: r,
  draggableId: o
}) {
  if (e.isClaimed())
    return !1;
  const n = r.draggable.findById(o);
  return n ? !(!n.options.isEnabled || !Tg(t.getState(), o)) : (process.env.NODE_ENV !== "production" && Ue(`Unable to find draggable with id: ${o}`), !1);
}
function sD({
  lockAPI: e,
  contextId: t,
  store: r,
  registry: o,
  draggableId: n,
  forceSensorStop: i,
  sourceEvent: a
}) {
  if (!Ug({
    lockAPI: e,
    store: r,
    registry: o,
    draggableId: n
  }))
    return null;
  const c = o.draggable.getById(n), u = iD(t, c.descriptor.id);
  if (!u)
    return process.env.NODE_ENV !== "production" && Ue(`Unable to find draggable element with id: ${n}`), null;
  if (a && !c.options.canDragInteractiveElements && Jw(u, a))
    return null;
  const f = e.claim(i || Ht);
  let l = "PRE_DRAG";
  function d() {
    return c.options.shouldRespectForcePress;
  }
  function g() {
    return e.isActive(f);
  }
  function h(m, x) {
    $n({
      expected: m,
      phase: l,
      isLockActive: g,
      shouldWarn: !0
    }) && r.dispatch(x());
  }
  const b = h.bind(null, "DRAGGING");
  function p(m) {
    function x() {
      e.release(), l = "COMPLETED";
    }
    l !== "PRE_DRAG" && (x(), process.env.NODE_ENV !== "production" ? _(!1, `Cannot lift in phase ${l}`) : _()), r.dispatch(LO(m.liftActionArgs)), l = "DRAGGING";
    function D(C, V = {
      shouldBlockNextClick: !1
    }) {
      if (m.cleanup(), V.shouldBlockNextClick) {
        const A = Tt(window, [{
          eventName: "click",
          fn: aD,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(A);
      }
      x(), r.dispatch(Dg({
        reason: C
      }));
    }
    return {
      isActive: () => $n({
        expected: "DRAGGING",
        phase: l,
        isLockActive: g,
        shouldWarn: !1
      }),
      shouldRespectForcePress: d,
      drop: (C) => D("DROP", C),
      cancel: (C) => D("CANCEL", C),
      ...m.actions
    };
  }
  function v(m) {
    const x = nn((C) => {
      b(() => wg({
        client: C
      }));
    });
    return {
      ...p({
        liftActionArgs: {
          id: n,
          clientSelection: m,
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
    const m = {
      moveUp: () => b(UO),
      moveRight: () => b(KO),
      moveDown: () => b(qO),
      moveLeft: () => b(YO)
    };
    return p({
      liftActionArgs: {
        id: n,
        clientSelection: Zw(u),
        movementMode: "SNAP"
      },
      cleanup: Ht,
      actions: m
    });
  }
  function E() {
    $n({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: g,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => $n({
      expected: "PRE_DRAG",
      phase: l,
      isLockActive: g,
      shouldWarn: !1
    }),
    shouldRespectForcePress: d,
    fluidLift: v,
    snapLift: w,
    abort: E
  };
}
const cD = [Fw, kw, Kw];
function lD({
  contextId: e,
  store: t,
  registry: r,
  customSensors: o,
  enableDefaultSensors: n
}) {
  const i = [...n ? cD : [], ...o || []], a = qe(() => ww())[0], s = Q(function(p, v) {
    pn(p) && !pn(v) && a.tryAbandon();
  }, [a]);
  Dt(function() {
    let p = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      s(p, w), p = w;
    });
  }, [a, t, s]), Dt(() => a.tryAbandon, [a.tryAbandon]);
  const c = Q((b) => Ug({
    lockAPI: a,
    registry: r,
    store: t,
    draggableId: b
  }), [a, r, t]), u = Q((b, p, v) => sD({
    lockAPI: a,
    registry: r,
    contextId: e,
    store: t,
    draggableId: b,
    forceSensorStop: p || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, a, r, t]), f = Q((b) => oD(e, b), [e]), l = Q((b) => {
    const p = r.draggable.findById(b);
    return p ? p.options : null;
  }, [r.draggable]), d = Q(function() {
    a.isClaimed() && (a.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Ps()));
  }, [a, t]), g = Q(() => a.isClaimed(), [a]), h = ge(() => ({
    canGetLock: c,
    tryGetLock: u,
    findClosestDraggableId: f,
    findOptionsForDraggable: l,
    tryReleaseLock: d,
    isLockClaimed: g
  }), [c, u, f, l, d, g]);
  Yw(i);
  for (let b = 0; b < i.length; b++)
    i[b](h);
}
const uD = (e) => ({
  onBeforeCapture: (t) => {
    const r = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    I.version.startsWith("16") || I.version.startsWith("17") ? r() : tr(r);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), dD = (e) => ({
  ...un,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...un.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Ur(e) {
  return e.current || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find store from lazy ref") : _()), e.current;
}
function pD(e) {
  const {
    contextId: t,
    setCallbacks: r,
    sensors: o,
    nonce: n,
    dragHandleUsageInstructions: i
  } = e, a = M(null);
  Sw();
  const s = Ws(e), c = Q(() => uD(s.current), [s]), u = Q(() => dD(s.current), [s]), f = pw(t), l = hw({
    contextId: t,
    text: i
  }), d = iw(t, n), g = Q((A) => {
    Ur(a).dispatch(A);
  }, []), h = ge(() => Dl({
    publishWhileDragging: FO,
    updateDroppableScroll: GO,
    updateDroppableIsEnabled: jO,
    updateDroppableIsCombineEnabled: kO,
    collectionStarting: WO
  }, g), [g]), b = cw(), p = ge(() => MS(b, h), [b, h]), v = ge(() => QS({
    scrollWindow: LS,
    scrollDroppable: p.scrollDroppable,
    getAutoScrollerOptions: u,
    ...Dl({
      move: wg
    }, g)
  }), [p.scrollDroppable, g, u]), w = aw(t), E = ge(() => $S({
    announce: f,
    autoScroller: v,
    dimensionMarshal: p,
    focusMarshal: w,
    getResponders: c,
    styleMarshal: d
  }), [f, v, p, w, c, d]);
  process.env.NODE_ENV !== "production" && a.current && a.current !== E && process.env.NODE_ENV !== "production" && Ue("unexpected store change"), a.current = E;
  const y = Q(() => {
    const A = Ur(a);
    A.getState().phase !== "IDLE" && A.dispatch(Ps());
  }, []), m = Q(() => {
    const A = Ur(a).getState();
    return A.phase === "DROP_ANIMATING" ? !0 : A.phase === "IDLE" ? !1 : A.isDragging;
  }, []), x = ge(() => ({
    isDragging: m,
    tryAbort: y
  }), [m, y]);
  r(x);
  const D = Q((A) => Tg(Ur(a).getState(), A), []), C = Q(() => ur(Ur(a).getState()), []), V = ge(() => ({
    marshal: p,
    focus: w,
    contextId: t,
    canLift: D,
    isMovementAllowed: C,
    dragHandleUsageInstructionsId: l,
    registry: b
  }), [t, p, l, w, D, C, b]);
  return lD({
    contextId: t,
    store: E,
    registry: b,
    customSensors: o || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), ue(() => y, [y]), I.createElement(xo.Provider, {
    value: V
  }, I.createElement(lx, {
    context: Ls,
    store: E
  }, e.children));
}
let fD = 0;
function mD() {
  return ge(() => `${fD++}`, []);
}
function gD() {
  return I.useId();
}
var bD = "useId" in I ? gD : mD;
function hD(e) {
  const t = bD(), r = e.dragHandleUsageInstructions || Gn.dragHandleUsageInstructions;
  return I.createElement(Dx, null, (o) => I.createElement(pD, {
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
const bu = {
  dragging: 5e3,
  dropAnimating: 4500
}, yD = (e, t) => t ? Kr.drop(t.duration) : e ? Kr.snap : Kr.fluid, vD = (e, t) => {
  if (e)
    return t ? ln.opacity.drop : ln.opacity.combining;
}, ED = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function xD(e) {
  const r = e.dimension.client, {
    offset: o,
    combineWith: n,
    dropping: i
  } = e, a = !!n, s = ED(e), c = !!i, u = c ? sa.drop(o, a) : sa.moveTo(o);
  return {
    position: "fixed",
    top: r.marginBox.top,
    left: r.marginBox.left,
    boxSizing: "border-box",
    width: r.borderBox.width,
    height: r.borderBox.height,
    transition: yD(s, i),
    transform: u,
    opacity: vD(a, c),
    zIndex: c ? bu.dropAnimating : bu.dragging,
    pointerEvents: "none"
  };
}
function OD(e) {
  return {
    transform: sa.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function SD(e) {
  return e.type === "DRAGGING" ? xD(e) : OD(e);
}
function wD(e, t, r = it) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Qm(n, o), a = io(i, r), s = {
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
function DD(e) {
  const t = Bs("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ge(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Q((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot get dimension when no ref is set") : _()), wD(r, h, g);
  }, [r, n]), f = ge(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  Dt(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Dt(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var js = I.createContext(null);
function qg(e) {
  e && In(e) || (process.env.NODE_ENV !== "production" ? _(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : _());
}
function ND(e, t, r) {
  Pn(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? _(!1, "Draggable requires a draggableId") : _(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? _(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : _(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? _(!1, `${o(n)} requires an integer index prop`) : _(!1)), e.mapped.type !== "DRAGGING" && (qg(r()), e.isEnabled && (Fg(t, n) || (process.env.NODE_ENV !== "production" ? _(!1, `${o(n)} Unable to find drag handle`) : _(!1))));
  });
}
function CD(e) {
  Fs(() => {
    const t = M(e);
    Pn(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? _(!1, "Draggable isClone prop value changed during component life") : _(!1));
    }, [e]);
  });
}
function co(e) {
  const t = Ot(e);
  return t || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find required context") : _()), t;
}
function _D(e) {
  e.preventDefault();
}
const ID = (e) => {
  const t = M(null), r = Q((x = null) => {
    t.current = x;
  }, []), o = Q(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = co(xo), {
    type: s,
    droppableId: c
  } = co(js), u = ge(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: v
  } = e;
  if (ND(e, n, o), CD(b), !b) {
    const x = ge(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    DD(x);
  }
  const w = ge(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: _D
  } : null, [n, i, l, d]), E = Q((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? v() : tr(v));
  }, [v, p]), y = ge(() => {
    const x = SD(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), m = ge(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var PD = ID, Kg = (e, t) => e === t, Yg = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const AD = (e) => e.combine ? e.combine.draggableId : null, $D = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function TD() {
  const e = ot((n, i) => ({
    x: n,
    y: i
  })), t = ot((n, i, a = null, s = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: n,
    draggingOver: a,
    combineWith: s,
    combineTargetFor: null
  })), r = ot((n, i, a, s, c = null, u = null, f = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: u,
      mode: i,
      offset: n,
      dimension: a,
      forceShouldAnimate: f,
      snapshot: t(i, s, c, u, null)
    }
  }));
  return (n, i) => {
    if (pn(n)) {
      if (n.critical.draggable.id !== i.draggableId)
        return null;
      const a = n.current.client.offset, s = n.dimensions.draggables[i.draggableId], c = wt(n.impact), u = $D(n.impact), f = n.forceShouldAnimate;
      return r(e(a.x, a.y), n.movementMode, s, i.isClone, c, u, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const a = n.completed;
      if (a.result.draggableId !== i.draggableId)
        return null;
      const s = i.isClone, c = n.dimensions.draggables[i.draggableId], u = a.result, f = u.mode, l = Yg(u), d = AD(u), h = {
        duration: n.dropDuration,
        curve: $s.drop,
        moveTo: n.newHomeClientOffset,
        opacity: d ? ln.opacity.drop : null,
        scale: d ? ln.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: n.newHomeClientOffset,
          dimension: c,
          dropping: h,
          draggingOver: l,
          combineWith: d,
          mode: f,
          forceShouldAnimate: null,
          snapshot: t(f, s, l, d, h)
        }
      };
    }
    return null;
  };
}
function Xg(e = null) {
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
const RD = {
  mapped: {
    type: "SECONDARY",
    offset: it,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Xg(null)
  }
};
function VD() {
  const e = ot((a, s) => ({
    x: a,
    y: s
  })), t = ot(Xg), r = ot((a, s = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: a,
      combineTargetFor: s,
      shouldAnimateDisplacement: c,
      snapshot: t(s)
    }
  })), o = (a) => a ? r(it, a, !0) : null, n = (a, s, c, u) => {
    const f = c.displaced.visible[a], l = !!(u.inVirtualList && u.effected[a]), d = yo(c), g = d && d.draggableId === a ? s : null;
    if (!f) {
      if (!l)
        return o(g);
      if (c.displaced.invisible[a])
        return null;
      const p = Wr(u.displacedBy.point), v = e(p.x, p.y);
      return r(v, g, !0);
    }
    if (l)
      return o(g);
    const h = c.displacedBy.point, b = e(h.x, h.y);
    return r(b, g, f.shouldAnimate);
  };
  return (a, s) => {
    if (pn(a))
      return a.critical.draggable.id === s.draggableId ? null : n(s.draggableId, a.critical.draggable.id, a.impact, a.afterCritical);
    if (a.phase === "DROP_ANIMATING") {
      const c = a.completed;
      return c.result.draggableId === s.draggableId ? null : n(s.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const MD = () => {
  const e = TD(), t = VD();
  return (o, n) => e(o, n) || t(o, n) || RD;
}, LD = {
  dropAnimationFinished: Ng
}, BD = Jm(MD, LD, null, {
  context: Ls,
  areStatePropsEqual: Kg
})(PD);
var FD = BD;
function Jg(e) {
  return co(js).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(FD, e);
}
function WD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, r = !!e.disableInteractiveElementBlocking, o = !!e.shouldRespectForcePress;
  return I.createElement(Jg, zt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: r,
    shouldRespectForcePress: o
  }));
}
const ks = (e) => (t) => e === t, GD = ks("scroll"), jD = ks("auto"), kD = ks("visible"), hu = (e, t) => t(e.overflowX) || t(e.overflowY), zD = (e, t) => t(e.overflowX) && t(e.overflowY), Zg = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return hu(r, GD) || hu(r, jD);
}, HD = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = dn(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, _()), !Zg(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return zD(o, kD) || process.env.NODE_ENV !== "production" && Ue(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, zs = (e) => e == null ? null : e === document.body ? HD() ? e : null : e === document.documentElement ? null : Zg(e) ? e : zs(e.parentElement);
var UD = (e) => {
  !e || !zs(e.parentElement) || process.env.NODE_ENV !== "production" && Ue(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ua = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Qg = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Qg(e.parentElement) : !1;
var qD = (e) => {
  const t = zs(e), r = Qg(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, KD = ({
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
    } = s, h = Pg({
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
          value: it,
          displacement: it
        }
      }
    };
  })(), u = n === "vertical" ? Ds : lg, f = Mr({
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
    subject: f
  };
};
const YD = (e, t) => {
  const r = eg(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, c = xs({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Os({
    borderBox: c,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var XD = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = YD(e, c), f = io(u, o), l = (() => {
    if (!c)
      return null;
    const g = eg(c), h = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: g,
      page: io(g, o),
      scroll: ua(c),
      scrollSize: h,
      shouldClipSubject: s
    };
  })();
  return KD({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const JD = {
  passive: !1
}, ZD = {
  passive: !0
};
var yu = (e) => e.shouldPublishImmediately ? JD : ZD;
const Tn = (e) => e && e.env.closestScrollable || null;
function QD(e) {
  const t = M(null), r = co(xo), o = Bs("droppable"), {
    registry: n,
    marshal: i
  } = r, a = Ws(e), s = ge(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = ge(() => ot((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? _(!1, "Can only update scroll when dragging") : _());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = Q(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? it : ua(y.env.closestScrollable);
  }, []), l = Q(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = ge(() => nn(l), [l]), g = Q(() => {
    const y = t.current, m = Tn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find scroll options while scrolling") : _()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = Q((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? _(!1, "Cannot collect a droppable while a drag is occurring") : _());
    const x = a.current, D = x.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot collect without a droppable ref") : _());
    const C = qD(D), V = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = XD({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(du.contextId, r.contextId), $.addEventListener("scroll", g, yu(V.scrollOptions)), process.env.NODE_ENV !== "production" && UD($)), A;
  }, [r.contextId, s, g, a]), b = Q(() => {
    const y = t.current, m = Tn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? _(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : _()), ua(m);
  }, []), p = Q(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot stop drag when no active drag") : _());
    const m = Tn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(du.contextId), m.removeEventListener("scroll", g, yu(y.scrollOptions)));
  }, [g, d]), v = Q((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot scroll when there is no drag") : _());
    const x = Tn(m);
    x || (process.env.NODE_ENV !== "production" ? _(!1, "Cannot scroll a droppable with no closest scrollable") : _()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), w = ge(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: v
  }), [p, h, b, v]), E = ge(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Dt(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Ue("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Dt(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Dt(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function jo() {
}
const vu = {
  width: 0,
  height: 0,
  margin: $x
}, eN = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? vu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, tN = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = eN({
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
    transition: r !== "none" ? Kr.placeholder : null
  };
}, rN = (e) => {
  const t = M(null), r = Q(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = qe(e.animate === "open");
  ue(() => s ? o !== "open" ? (r(), c(!1), jo) : t.current ? jo : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : jo, [o, s, r]);
  const u = Q((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = tN({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var nN = I.memo(rN);
function ko(e) {
  return typeof e == "boolean";
}
function zo(e, t) {
  t.forEach((r) => r(e));
}
const oN = [function({
  props: t
}) {
  t.droppableId || (process.env.NODE_ENV !== "production" ? _(!1, "A Droppable requires a droppableId prop") : _()), typeof t.droppableId != "string" && (process.env.NODE_ENV !== "production" ? _(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof t.droppableId}]`) : _());
}, function({
  props: t
}) {
  ko(t.isDropDisabled) || (process.env.NODE_ENV !== "production" ? _(!1, "isDropDisabled must be a boolean") : _()), ko(t.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? _(!1, "isCombineEnabled must be a boolean") : _()), ko(t.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? _(!1, "ignoreContainerClipping must be a boolean") : _());
}, function({
  getDroppableRef: t
}) {
  qg(t());
}], iN = [function({
  props: t,
  getPlaceholderRef: r
}) {
  !t.placeholder || r() || process.env.NODE_ENV !== "production" && Ue(`
      Droppable setup issue [droppableId: "${t.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], aN = [function({
  props: t
}) {
  t.renderClone || (process.env.NODE_ENV !== "production" ? _(!1, "Must provide a clone render function (renderClone) for virtual lists") : _());
}, function({
  getPlaceholderRef: t
}) {
  t() && (process.env.NODE_ENV !== "production" ? _(!1, "Expected virtual list to not have a placeholder") : _());
}];
function sN(e) {
  Pn(() => {
    zo(e, oN), e.props.mode === "standard" && zo(e, iN), e.props.mode === "virtual" && zo(e, aN);
  });
}
class cN extends I.PureComponent {
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
const lN = (e) => {
  const t = Ot(xo);
  t || (process.env.NODE_ENV !== "production" ? _(!1, "Could not find app context") : _());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: v
  } = e, w = Q(() => n.current, []), E = Q((P = null) => {
    n.current = P;
  }, []), y = Q(() => i.current, []), m = Q((P = null) => {
    i.current = P;
  }, []);
  sN({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const x = Q(() => {
    o() && p({
      maxScroll: $g()
    });
  }, [o, p]);
  QD({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = ge(() => I.createElement(cN, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: G
  }) => I.createElement(nN, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: G,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = ge(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), V = b ? b.dragging.draggableId : null, A = ge(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: V
  }), [s, V, c]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, G = I.createElement(Jg, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, R) => T(k, R, P));
    return Er.createPortal(G, v());
  }
  return I.createElement(js.Provider, {
    value: A
  }, a(C, h), $());
};
var uN = lN;
function dN() {
  return document.body || (process.env.NODE_ENV !== "production" ? _(!1, "document.body is not ready") : _()), document.body;
}
const Eu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: dN
}, eb = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Eu)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Eu[r]
    });
  return t;
}, Ho = (e, t) => e === t.droppable.type, xu = (e, t) => t.draggables[e.draggable.id], pN = () => {
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
  }, r = ot((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), o = ot((i, a, s, c, u, f) => {
    const l = u.descriptor.id;
    if (u.descriptor.droppableId === i) {
      const h = f ? {
        render: f,
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
    const s = eb(a), c = s.droppableId, u = s.type, f = !s.isDropDisabled, l = s.renderClone;
    if (pn(i)) {
      const d = i.critical;
      if (!Ho(u, d))
        return t;
      const g = xu(d, i.dimensions), h = wt(i.impact) === c;
      return o(c, f, h, h, g, l);
    }
    if (i.phase === "DROP_ANIMATING") {
      const d = i.completed;
      if (!Ho(u, d.critical))
        return t;
      const g = xu(d.critical, i.dimensions);
      return o(c, f, Yg(d.result) === c, wt(d.impact) === c, g, l);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const d = i.completed;
      if (!Ho(u, d.critical))
        return t;
      const g = wt(d.impact) === c, h = !!(d.impact.at && d.impact.at.type === "COMBINE"), b = d.critical.droppable.id === c;
      return g ? h ? e : t : b ? e : t;
    }
    return t;
  };
}, fN = {
  updateViewportMaxScroll: HO
}, mN = Jm(pN, fN, (e, t, r) => ({
  ...eb(r),
  ...e,
  ...t
}), {
  context: Ls,
  areStatePropsEqual: Kg
})(uN);
var gN = mN;
const YW = ({
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
  const [f, l] = qe(null), [d, g] = qe(e);
  ue(() => {
    g(e);
  }, [e]);
  const h = "child:bg-white child:text-black last:child:after:border-main-green [&>svg]:fill-main-green", b = (v) => {
    a == null || a(v), l(v);
  }, p = (v) => {
    if (!v.destination || !(d != null && d.length)) return;
    const w = v.source.index, E = v.destination.index, y = [...d], [m] = y.splice(w, 1);
    y.splice(E, 0, m), g(y);
  };
  return !(e != null && e.length) && !i ? /* @__PURE__ */ nt("span", { className: "text-center text-xl font-normal mx-auto w-fit block mt-8", children: [
    "К сожалению, по Вашему запросу",
    " ",
    /* @__PURE__ */ q("span", { className: "text-main-green", children: "ничего" }),
    " не найдено 😓"
  ] }) : i ? /* @__PURE__ */ q("div", { className: "mx-auto w-fit block mt-20", children: /* @__PURE__ */ q(Sm, { style: { width: 40, height: 40 } }) }) : /* @__PURE__ */ q(Tm, { className: u, children: /* @__PURE__ */ q("div", { className: "h-full overflow-auto w-full", children: /* @__PURE__ */ q("div", { className: "min-w-[900px] w-full", children: /* @__PURE__ */ q(hD, { onDragEnd: p, children: /* @__PURE__ */ q(gN, { droppableId: "dropArray", direction: "vertical", children: (v) => /* @__PURE__ */ nt("table", { className: "w-full", children: [
    /* @__PURE__ */ q("thead", { children: /* @__PURE__ */ q("tr", { className: "text-sm text-dark-gray font-medium", children: t.map((w, E) => /* @__PURE__ */ q(
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
    /* @__PURE__ */ nt(
      "tbody",
      {
        className: "before:block before:h-4 md:before:h-5 before:w-full before:bg-light-gray",
        ...v.droppableProps,
        ref: v.innerRef,
        children: [
          d == null ? void 0 : d.map((w, E) => {
            var y;
            return /* @__PURE__ */ q(
              WD,
              {
                isDragDisabled: n,
                draggableId: (y = w == null ? void 0 : w.id) == null ? void 0 : y.toString(),
                index: E,
                children: (m) => {
                  const x = {
                    ...m.draggableProps.style
                    //Тут стили , которые применяются при перемещении
                  };
                  return /* @__PURE__ */ q(
                    "tr",
                    {
                      className: `relative transition-all duration-300 px-[10px] cursor-pointer ${f === d[E] && h}`,
                      onClick: () => b(
                        s ? w[s] : w.id
                      ),
                      ref: m.innerRef,
                      ...m.draggableProps,
                      ...m.dragHandleProps,
                      style: x,
                      children: t.map((D, C) => {
                        var A;
                        let V = (A = D == null ? void 0 : D.name) == null ? void 0 : A.reduce(
                          ($, P) => $ == null ? void 0 : $[P],
                          d == null ? void 0 : d[E]
                        );
                        return /* @__PURE__ */ q(
                          "td",
                          {
                            className: `text-sm max-w-[160px] md:text-base px-2 text-black font-normal py-2 md:py-[10px] transition-all duration-300 first:rounded-l-[15px] md:first:rounded-l-[30px] first:pl-[15px] last:rounded-r-[15px] md:last:rounded-r-[30px] last:pr-4 ${c && "last:after:absolute last:after:right-6 last:after:top-0 last:after:bottom-0 last:after:my-auto last:after:w-2 last:after:h-2 last:after:border-t-2 last:after:border-r-2 last:after:border-dark-gray last:after:rotate-45 last:after:transition-all last:after:duration-300"}`,
                            children: D.transform ? D.transform(V, E) : V
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
          v.placeholder
        ]
      }
    )
  ] }) }) }) }) }) });
}, XW = ({ className: e, field: t, fieldState: r, ...o }) => /* @__PURE__ */ q(
  "textarea",
  {
    ...t,
    ...o,
    className: `${e} w-full resize-none h-[120px] bg-white border-[1px] border-white rounded-[15px] md:border-light-gray text-black text-sm md:text-base font-normal placeholder:text-dark-gray block p-[10px] md:p-[10px] transition-all duration-300`
  }
), bN = ({ name: e, className: t }) => /* @__PURE__ */ q("svg", { className: `transition-all duration-300 text-dark-gray ${t}`, children: /* @__PURE__ */ q(
  "use",
  {
    className: "w-full h-full object-contain",
    href: `/icons/sprite.svg#${e}`
  }
) }), hN = ({ style: e, text: t }) => /* @__PURE__ */ nt("div", { className: "flex flex-row items-center justify-center gap-3", children: [
  /* @__PURE__ */ q("span", { className: "w-[22px] h-[22px] border-[5px] border-solid border-white rounded-full inline-block box-border animate-rotation !border-b-primary", style: e }),
  t && /* @__PURE__ */ q("span", { className: "text-base", children: t })
] });
var Ou;
(function(e) {
  e.event = "event", e.props = "prop";
})(Ou || (Ou = {}));
var Uo = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Uo(), "" + Uo();
function yN() {
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
function vN(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var da = { exports: {} }, qo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Su;
function EN() {
  if (Su) return qo;
  Su = 1;
  var e = I;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return qo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, qo;
}
var wu = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Du;
function xN() {
  return Du || (Du = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
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
      var v = p[0].inst, w = p[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = h, r(v) && w({ inst: v });
        },
        [g, b, h]
      ), s(
        function() {
          return r(v) && w({ inst: v }), g(function() {
            r(v) && w({ inst: v });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    wu.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), wu;
}
process.env.NODE_ENV === "production" ? da.exports = EN() : da.exports = xN();
var Hs = da.exports, Ko = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nu;
function ON() {
  if (Nu) return Ko;
  Nu = 1;
  var e = I, t = Hs;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Ko.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function v(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, x))
                return y = D;
            }
            return y = x;
          }
          if (D = y, o(E, x)) return D;
          var C = d(x);
          return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
        }
        var w = !1, E, y, m = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          m === null ? void 0 : function() {
            return v(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Ko;
}
var Cu = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _u;
function SN() {
  return _u || (_u = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = Hs, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Cu.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function v(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, x))
                  return y = D;
              }
              return y = x;
            }
            if (D = y, o(E, x))
              return D;
            var C = d(x);
            return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
          }
          var w = !1, E, y, m = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            m === null ? void 0 : function() {
              return v(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cu;
}
process.env.NODE_ENV === "production" ? ON() : SN();
function wN(e) {
  e();
}
let tb = wN;
const DN = (e) => tb = e, NN = () => tb, Iu = Symbol.for("react-redux-context"), Pu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function CN() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Pu[Iu]) != null ? e : Pu[Iu] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const _N = /* @__PURE__ */ CN(), IN = () => {
  throw new Error("uSES not initialized!");
};
function Pr() {
  return Pr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Pr.apply(null, arguments);
}
function rb(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var pa = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Au;
function PN() {
  if (Au) return xe;
  Au = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case h:
                case g:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function y(m) {
    return E(m) === u;
  }
  return xe.AsyncMode = c, xe.ConcurrentMode = u, xe.ContextConsumer = s, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = f, xe.Fragment = o, xe.Lazy = h, xe.Memo = g, xe.Portal = r, xe.Profiler = i, xe.StrictMode = n, xe.Suspense = l, xe.isAsyncMode = function(m) {
    return y(m) || E(m) === c;
  }, xe.isConcurrentMode = y, xe.isContextConsumer = function(m) {
    return E(m) === s;
  }, xe.isContextProvider = function(m) {
    return E(m) === a;
  }, xe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, xe.isForwardRef = function(m) {
    return E(m) === f;
  }, xe.isFragment = function(m) {
    return E(m) === o;
  }, xe.isLazy = function(m) {
    return E(m) === h;
  }, xe.isMemo = function(m) {
    return E(m) === g;
  }, xe.isPortal = function(m) {
    return E(m) === r;
  }, xe.isProfiler = function(m) {
    return E(m) === i;
  }, xe.isStrictMode = function(m) {
    return E(m) === n;
  }, xe.isSuspense = function(m) {
    return E(m) === l;
  }, xe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === v || m.$$typeof === w || m.$$typeof === b);
  }, xe.typeOf = E, xe;
}
var Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $u;
function AN() {
  return $u || ($u = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === f || O.$$typeof === p || O.$$typeof === v || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
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
                var ce = S && S.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ce;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, D = s, C = a, V = t, A = f, $ = o, P = h, T = g, G = r, k = i, R = n, W = l, F = !1;
    function j(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function U(O) {
      return y(O) === a;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function X(O) {
      return y(O) === f;
    }
    function te(O) {
      return y(O) === o;
    }
    function de(O) {
      return y(O) === h;
    }
    function Y(O) {
      return y(O) === g;
    }
    function J(O) {
      return y(O) === r;
    }
    function L(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Te.AsyncMode = m, Te.ConcurrentMode = x, Te.ContextConsumer = D, Te.ContextProvider = C, Te.Element = V, Te.ForwardRef = A, Te.Fragment = $, Te.Lazy = P, Te.Memo = T, Te.Portal = G, Te.Profiler = k, Te.StrictMode = R, Te.Suspense = W, Te.isAsyncMode = j, Te.isConcurrentMode = z, Te.isContextConsumer = B, Te.isContextProvider = U, Te.isElement = K, Te.isForwardRef = X, Te.isFragment = te, Te.isLazy = de, Te.isMemo = Y, Te.isPortal = J, Te.isProfiler = L, Te.isStrictMode = Z, Te.isSuspense = be, Te.isValidElementType = E, Te.typeOf = y;
  }()), Te;
}
process.env.NODE_ENV === "production" ? pa.exports = PN() : pa.exports = AN();
var $N = pa.exports, Us = $N, TN = {
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
}, RN = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, VN = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, nb = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qs = {};
qs[Us.ForwardRef] = VN;
qs[Us.Memo] = nb;
function Tu(e) {
  return Us.isMemo(e) ? nb : qs[e.$$typeof] || TN;
}
var MN = Object.defineProperty, LN = Object.getOwnPropertyNames, Ru = Object.getOwnPropertySymbols, BN = Object.getOwnPropertyDescriptor, FN = Object.getPrototypeOf, Vu = Object.prototype;
function ob(e, t, r) {
  if (typeof t != "string") {
    if (Vu) {
      var o = FN(t);
      o && o !== Vu && ob(e, o, r);
    }
    var n = LN(t);
    Ru && (n = n.concat(Ru(t)));
    for (var i = Tu(e), a = Tu(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!RN[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = BN(t, c);
        try {
          MN(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var WN = ob;
const Mu = /* @__PURE__ */ vN(WN);
var fa = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lu;
function GN() {
  if (Lu) return Oe;
  Lu = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Oe.ContextConsumer = a, Oe.ContextProvider = i, Oe.Element = e, Oe.ForwardRef = c, Oe.Fragment = r, Oe.Lazy = d, Oe.Memo = l, Oe.Portal = t, Oe.Profiler = n, Oe.StrictMode = o, Oe.Suspense = u, Oe.SuspenseList = f, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(p) {
    return b(p) === a;
  }, Oe.isContextProvider = function(p) {
    return b(p) === i;
  }, Oe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Oe.isForwardRef = function(p) {
    return b(p) === c;
  }, Oe.isFragment = function(p) {
    return b(p) === r;
  }, Oe.isLazy = function(p) {
    return b(p) === d;
  }, Oe.isMemo = function(p) {
    return b(p) === l;
  }, Oe.isPortal = function(p) {
    return b(p) === t;
  }, Oe.isProfiler = function(p) {
    return b(p) === n;
  }, Oe.isStrictMode = function(p) {
    return b(p) === o;
  }, Oe.isSuspense = function(p) {
    return b(p) === u;
  }, Oe.isSuspenseList = function(p) {
    return b(p) === f;
  }, Oe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Oe.typeOf = b, Oe;
}
var Re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bu;
function jN() {
  return Bu || (Bu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === f || v || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case f:
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
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var x = a, D = i, C = e, V = c, A = r, $ = d, P = l, T = t, G = n, k = o, R = u, W = f, F = !1, j = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function te(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function Y(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function be(S) {
      return m(S) === o;
    }
    function O(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === f;
    }
    Re.ContextConsumer = x, Re.ContextProvider = D, Re.Element = C, Re.ForwardRef = V, Re.Fragment = A, Re.Lazy = $, Re.Memo = P, Re.Portal = T, Re.Profiler = G, Re.StrictMode = k, Re.Suspense = R, Re.SuspenseList = W, Re.isAsyncMode = z, Re.isConcurrentMode = B, Re.isContextConsumer = U, Re.isContextProvider = K, Re.isElement = X, Re.isForwardRef = te, Re.isFragment = de, Re.isLazy = Y, Re.isMemo = J, Re.isPortal = L, Re.isProfiler = Z, Re.isStrictMode = be, Re.isSuspense = O, Re.isSuspenseList = le, Re.isValidElementType = y, Re.typeOf = m;
  }()), Re;
}
process.env.NODE_ENV === "production" ? fa.exports = GN() : fa.exports = jN();
var Fu = fa.exports;
function Ks(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Yo(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ks(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function kN(e, t, r) {
  Yo(e, "mapStateToProps"), Yo(t, "mapDispatchToProps"), Yo(r, "mergeProps");
}
const zN = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function HN(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(w, E) {
    return c = w, u = E, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, f);
    return f = w, E && (d = r(f, l, u)), d;
  }
  function v(w, E) {
    const y = !i(E, u), m = !n(w, c, E, u);
    return c = w, u = E, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : g(w, E);
  };
}
function UN(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = rb(t, zN);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && kN(a, s, c), HN(a, s, c, e, i);
}
function qN(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function KN(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function ib(e, t, r) {
  KN(e) || Ks(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function ma(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Wu(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ab(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Wu(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Wu(s), s = n(i, a)), process.env.NODE_ENV !== "production" && ib(s, o, t), s;
    }, n;
  };
}
function Ys(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function YN(e) {
  return e && typeof e == "object" ? ma((t) => (
    // @ts-ignore
    qN(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ab(e, "mapDispatchToProps")
  ) : Ys(e, "mapDispatchToProps") : ma((t) => ({
    dispatch: t
  }));
}
function XN(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ab(e, "mapStateToProps")
  ) : Ys(e, "mapStateToProps") : ma(() => ({}));
}
function JN(e, t, r) {
  return Pr({}, r, e, t);
}
function ZN(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && ib(i, r, "mergeProps")), i;
    };
  };
}
function QN(e) {
  return e ? typeof e == "function" ? ZN(e) : Ys(e, "mergeProps") : () => JN;
}
function e0() {
  const e = NN();
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
const Gu = {
  notify() {
  },
  get: () => []
};
function t0(e, t) {
  let r, o = Gu, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, p(), l());
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
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = e0());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Gu);
  }
  function d() {
    i || (i = !0, f());
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
const r0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ga = r0 ? N.useLayoutEffect : N.useEffect;
function ju(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Xo(e, t) {
  if (ju(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !ju(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const n0 = ["reactReduxForwardedRef"];
let sb = IN;
const o0 = (e) => {
  sb = e;
}, i0 = [null, null], a0 = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function s0(e, t, r) {
  ga(() => e(...t), r);
}
function c0(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function l0(e, t, r, o, n, i, a, s, c, u, f) {
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
    } catch (v) {
      p = v, d = v;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function u0(e, t) {
  return e === t;
}
let ku = !1;
function cb(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = u0,
  areOwnPropsEqual: i = Xo,
  areStatePropsEqual: a = Xo,
  areMergedPropsEqual: s = Xo,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = _N
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !ku && (ku = !0, Ks('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = XN(e), d = YN(t), g = QN(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Fu.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${a0(b)}`);
    const p = b.displayName || b.name || "Component", v = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: v,
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
    function E(m) {
      const [x, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = rb(m, n0);
        return [m.context, L, Z];
      }, [m]), V = N.useMemo(() => x && x.Consumer && // @ts-ignore
      Fu.isContextConsumer(/* @__PURE__ */ N.createElement(x.Consumer, null)) ? x : f, [x, f]), A = N.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const T = $ ? m.store : A.store, G = P ? A.getServerState : T.getState, k = N.useMemo(() => UN(T.dispatch, w), [T]), [R, W] = N.useMemo(() => {
        if (!h) return i0;
        const L = t0(T, $ ? void 0 : A.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, $, A]), F = N.useMemo(() => $ ? A : Pr({}, A, {
        subscription: R
      }), [$, A, R]), j = N.useRef(), z = N.useRef(C), B = N.useRef(), U = N.useRef(!1);
      N.useRef(!1);
      const K = N.useRef(!1), X = N.useRef();
      ga(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const te = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = N.useMemo(() => (L) => R ? l0(
        h,
        T,
        R,
        // @ts-ignore
        k,
        z,
        j,
        U,
        K,
        B,
        W,
        L
      ) : () => {
      }, [R]);
      s0(c0, [z, j, U, C, B, W]);
      let Y;
      try {
        Y = sb(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          te,
          G ? () => k(G(), C) : te
        );
      } catch (L) {
        throw X.current && (L.message += `
The error may be correlated with this previous error:
${X.current.stack}

`), L;
      }
      ga(() => {
        X.current = void 0, B.current = void 0, j.current = Y;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, Pr({}, Y, {
          ref: D
        }))
      ), [D, b, Y]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(V.Provider, {
        value: F
      }, J) : J, [V, J, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = v, c) {
      const m = N.forwardRef(function(x, D) {
        return /* @__PURE__ */ N.createElement(y, Pr({}, x, {
          reactReduxForwardedRef: D
        }));
      });
      return m.displayName = v, m.WrappedComponent = b, Mu(m, b);
    }
    return Mu(y, b);
  };
}
o0(Hs.useSyncExternalStore);
DN(xr);
function d0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function lb(e, t) {
  var r = qe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && d0(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function p0(e, t) {
  return lb(function() {
    return e;
  }, t);
}
var at = lb, Je = p0, f0 = process.env.NODE_ENV === "production", Jo = "Invariant failed";
function zu(e, t) {
  if (f0)
    throw new Error(Jo);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Jo, ": ").concat(r) : Jo;
  throw new Error(o);
}
var Sr = function(e) {
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
}, ub = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Hu = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, m0 = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Zo = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Xs = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Zo : r, n = e.border, i = n === void 0 ? Zo : n, a = e.padding, s = a === void 0 ? Zo : a, c = Sr(ub(t, o)), u = Sr(Hu(t, i)), f = Sr(Hu(u, s));
  return {
    marginBox: c,
    borderBox: Sr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Ct = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? zu(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : zu()), o;
}, g0 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, b0 = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = m0(r, t);
  return Xs({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ba = function(e, t) {
  return t === void 0 && (t = g0()), b0(e, t);
}, db = function(e, t) {
  var r = {
    top: Ct(t.marginTop),
    right: Ct(t.marginRight),
    bottom: Ct(t.marginBottom),
    left: Ct(t.marginLeft)
  }, o = {
    top: Ct(t.paddingTop),
    right: Ct(t.paddingRight),
    bottom: Ct(t.paddingBottom),
    left: Ct(t.paddingLeft)
  }, n = {
    top: Ct(t.borderTopWidth),
    right: Ct(t.borderRightWidth),
    bottom: Ct(t.borderBottomWidth),
    left: Ct(t.borderLeftWidth)
  };
  return Xs({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, pb = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return db(t, r);
}, Uu = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function h0(e, t) {
  return !!(e === t || Uu(e) && Uu(t));
}
function y0(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!h0(e[r], t[r]))
      return !1;
  return !0;
}
function ft(e, t) {
  t === void 0 && (t = y0);
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
var v0 = function(e) {
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
const E0 = process.env.NODE_ENV === "production", x0 = /[ \t]{2,}/g, O0 = /^[ \t]*/gm, qu = (e) => e.replace(x0, " ").replace(O0, "").trim(), S0 = (e) => qu(`
  %c@hello-pangea/dnd

  %c${qu(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), w0 = (e) => [S0(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], D0 = "__@hello-pangea/dnd-disable-dev-warnings";
function fb(e, t) {
  E0 || typeof window < "u" && window[D0] || console[e](...w0(t));
}
const qt = fb.bind(null, "warn"), ha = fb.bind(null, "error");
function N0() {
}
function C0(e, t) {
  return {
    ...e,
    ...t
  };
}
function _0(e, t, r) {
  const o = t.map((n) => {
    const i = C0(r, n.options);
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
const I0 = process.env.NODE_ENV === "production", Ku = "Invariant failed";
class fn extends Error {
}
fn.prototype.toString = function() {
  return this.message;
};
function re(e, t) {
  throw I0 ? new fn(Ku) : new fn(`${Ku}: ${t || ""}`);
}
class JW extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = N0, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && qt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof fn && (r.preventDefault(), process.env.NODE_ENV !== "production" && ha(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = _0(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof fn) {
      process.env.NODE_ENV !== "production" && ha(t.message), this.setState({});
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
const mr = {
  x: 0,
  y: 0
}, P0 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), A0 = (e, t) => e.x === t.x && e.y === t.y, $0 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), T0 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var R0 = (e, t) => {
  const r = Sr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const V0 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), M0 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, L0 = (e, t) => t ? V0(e, t.scroll.diff.displacement) : e, B0 = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, F0 = (e, t) => t && t.shouldClipSubject ? R0(t.pageMarginBox, e) : Sr(e);
var W0 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = L0(e.marginBox, o), i = B0(n, r, t), a = F0(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
ft((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
ft((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const G0 = ft((e) => Object.values(e)), j0 = ft((e) => Object.values(e));
ft((e, t) => j0(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function k0(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
ft((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const z0 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, H0 = {
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
ft(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: T0(e.line, r)
  };
});
var jn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const U0 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), q0 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Js = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, mn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, K0 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, nr = `${K0.outOfTheWay}s ${Js.outOfTheWay}`, kn = {
  fluid: `opacity ${nr}`,
  snap: `transform ${nr}, opacity ${nr}`,
  drop: (e) => {
    const t = `${e}s ${Js.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${nr}`,
  placeholder: `height ${nr}, width ${nr}, margin ${nr}`
}, Yu = (e) => A0(e, mr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ya = {
  moveTo: Yu,
  drop: (e, t) => {
    const r = Yu(e);
    if (r)
      return t ? `${r} scale(${mn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var mb = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = P0({
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
}, Y0 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot find document.documentElement") : re()), e;
}, X0 = () => {
  const e = Y0();
  return mb({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
ft((e) => G0(e).filter((t) => !(!t.isEnabled || !t.frame)));
const gb = "data-rfd", Xu = (() => {
  const e = `${gb}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ju = {
  contextId: `${gb}-scroll-container-context-id`
}, J0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ue;
var Yr = J0;
function Z0(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Q0 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function bb(e) {
  return e instanceof Q0(e).HTMLElement;
}
function eC(e, t) {
  const r = `[${Xu.contextId}="${e}"]`, o = Z0(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && qt(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Xu.draggableId) === t);
  return n ? bb(n) ? n : (process.env.NODE_ENV !== "production" && qt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && qt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var hb = I.createContext(null), tC = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot find document.body") : re()), e;
};
let rC = 0;
const yb = {
  separator: "::"
};
function nC(e, t = yb) {
  return at(() => `${e}${t.separator}${rC++}`, [t.separator, e]);
}
function oC(e, t = yb) {
  const r = I.useId();
  return at(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var vb = "useId" in I ? oC : nC, Zs = I.createContext(null);
function Eb(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Qs(e, t) {
  Eb(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        ha(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function iC(e) {
  const t = M(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function ec(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Zu = {
  dragging: 5e3,
  dropAnimating: 4500
}, aC = (e, t) => t ? kn.drop(t.duration) : e ? kn.snap : kn.fluid, sC = (e, t) => {
  if (e)
    return t ? mn.opacity.drop : mn.opacity.combining;
}, cC = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function lC(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = cC(e), s = !!n, c = s ? ya.drop(r, i) : ya.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: aC(a, n),
    transform: c,
    opacity: sC(i, s),
    zIndex: s ? Zu.dropAnimating : Zu.dragging,
    pointerEvents: "none"
  };
}
function uC(e) {
  return {
    transform: ya.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function dC(e) {
  return e.type === "DRAGGING" ? lC(e) : uC(e);
}
function pC(e, t, r = mr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = db(n, o), a = ba(i, r), s = {
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
function fC(e) {
  const t = vb("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = at(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Je((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot get dimension when no ref is set") : re()), pC(r, h, g);
  }, [r, n]), f = at(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  Yr(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Yr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var tc = I.createContext(null);
function xb(e) {
  e && bb(e) || (process.env.NODE_ENV !== "production" ? re(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : re());
}
function mC(e, t, r) {
  Qs(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? re(!1, "Draggable requires a draggableId") : re(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? re(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : re(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? re(!1, `${o(n)} requires an integer index prop`) : re(!1)), e.mapped.type !== "DRAGGING" && (xb(r()), e.isEnabled && (eC(t, n) || (process.env.NODE_ENV !== "production" ? re(!1, `${o(n)} Unable to find drag handle`) : re(!1))));
  });
}
function gC(e) {
  Eb(() => {
    const t = M(e);
    Qs(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? re(!1, "Draggable isClone prop value changed during component life") : re(!1));
    }, [e]);
  });
}
function lo(e) {
  const t = Ot(e);
  return t || (process.env.NODE_ENV !== "production" ? re(!1, "Could not find required context") : re()), t;
}
function bC(e) {
  e.preventDefault();
}
const hC = (e) => {
  const t = M(null), r = Je((x = null) => {
    t.current = x;
  }, []), o = Je(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = lo(Zs), {
    type: s,
    droppableId: c
  } = lo(tc), u = at(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: v
  } = e;
  if (mC(e, n, o), gC(b), !b) {
    const x = at(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    fC(x);
  }
  const w = at(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: bC
  } : null, [n, i, l, d]), E = Je((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? v() : tr(v));
  }, [v, p]), y = at(() => {
    const x = dC(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), m = at(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var yC = hC, Ob = (e, t) => e === t, Sb = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const vC = (e) => e.combine ? e.combine.draggableId : null, EC = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function xC() {
  const e = ft((o, n) => ({
    x: o,
    y: n
  })), t = ft((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = ft((o, n, i, a, s = null, c = null, u = null) => ({
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
    if (ec(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = jn(o.impact), c = EC(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = Sb(c), l = vC(c), d = {
        duration: o.dropDuration,
        curve: Js.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? mn.opacity.drop : null,
        scale: l ? mn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function wb(e = null) {
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
const OC = {
  mapped: {
    type: "SECONDARY",
    offset: mr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: wb(null)
  }
};
function SC() {
  const e = ft((i, a) => ({
    x: i,
    y: a
  })), t = ft(wb), r = ft((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(mr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = k0(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = $0(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (ec(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const wC = () => {
  const e = xC(), t = SC();
  return (r, o) => e(r, o) || t(r, o) || OC;
}, DC = {
  dropAnimationFinished: q0
}, NC = cb(wC, DC, null, {
  context: hb,
  areStatePropsEqual: Ob
})(yC);
var CC = NC;
function _C(e) {
  return lo(tc).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(CC, e);
}
const rc = (e) => (t) => e === t, IC = rc("scroll"), PC = rc("auto"), AC = rc("visible"), Qu = (e, t) => t(e.overflowX) || t(e.overflowY), $C = (e, t) => t(e.overflowX) && t(e.overflowY), Db = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Qu(r, IC) || Qu(r, PC);
}, TC = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = tC(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, re()), !Db(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return $C(o, AC) || process.env.NODE_ENV !== "production" && qt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, nc = (e) => e == null ? null : e === document.body ? TC() ? e : null : e === document.documentElement ? null : Db(e) ? e : nc(e.parentElement);
var RC = (e) => {
  !e || !nc(e.parentElement) || process.env.NODE_ENV !== "production" && qt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, va = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Nb = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Nb(e.parentElement) : !1;
var VC = (e) => {
  const t = nc(e), r = Nb(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, MC = ({
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
    } = s, g = mb({
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
          value: mr,
          displacement: mr
        }
      }
    };
  })(), u = n === "vertical" ? z0 : H0, f = W0({
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
    subject: f
  };
};
const LC = (e, t) => {
  const r = pb(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = ub({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Xs({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var BC = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = LC(e, c), f = ba(u, o), l = (() => {
    if (!c)
      return null;
    const d = pb(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: ba(d, o),
      scroll: va(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return MC({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const FC = {
  passive: !1
}, WC = {
  passive: !0
};
var ed = (e) => e.shouldPublishImmediately ? FC : WC;
const Rn = (e) => e && e.env.closestScrollable || null;
function GC(e) {
  const t = M(null), r = lo(Zs), o = vb("droppable"), {
    registry: n,
    marshal: i
  } = r, a = iC(e), s = at(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = at(() => ft((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? re(!1, "Can only update scroll when dragging") : re());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = Je(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? mr : va(y.env.closestScrollable);
  }, []), l = Je(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = at(() => v0(l), [l]), g = Je(() => {
    const y = t.current, m = Rn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? re(!1, "Could not find scroll options while scrolling") : re()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = Je((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? re(!1, "Cannot collect a droppable while a drag is occurring") : re());
    const x = a.current, D = x.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot collect without a droppable ref") : re());
    const C = VC(D), V = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = BC({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Ju.contextId, r.contextId), $.addEventListener("scroll", g, ed(V.scrollOptions)), process.env.NODE_ENV !== "production" && RC($)), A;
  }, [r.contextId, s, g, a]), b = Je(() => {
    const y = t.current, m = Rn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? re(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : re()), va(m);
  }, []), p = Je(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot stop drag when no active drag") : re());
    const m = Rn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Ju.contextId), m.removeEventListener("scroll", g, ed(y.scrollOptions)));
  }, [g, d]), v = Je((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot scroll when there is no drag") : re());
    const x = Rn(m);
    x || (process.env.NODE_ENV !== "production" ? re(!1, "Cannot scroll a droppable with no closest scrollable") : re()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), w = at(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: v
  }), [p, h, b, v]), E = at(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Yr(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && qt("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Yr(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Yr(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Qo() {
}
const jC = {
  width: 0,
  height: 0,
  margin: M0
}, kC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? jC : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, zC = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = kC({
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
    transition: r !== "none" ? kn.placeholder : null
  };
}, HC = (e) => {
  const t = M(null), r = Je(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = qe(e.animate === "open");
  ue(() => s ? o !== "open" ? (r(), c(!1), Qo) : t.current ? Qo : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Qo, [o, s, r]);
  const u = Je((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = zC({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var UC = I.memo(HC);
function ei(e) {
  return typeof e == "boolean";
}
function ti(e, t) {
  t.forEach((r) => r(e));
}
const qC = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? re(!1, "A Droppable requires a droppableId prop") : re()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? re(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : re());
}, function({
  props: e
}) {
  ei(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? re(!1, "isDropDisabled must be a boolean") : re()), ei(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? re(!1, "isCombineEnabled must be a boolean") : re()), ei(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? re(!1, "ignoreContainerClipping must be a boolean") : re());
}, function({
  getDroppableRef: e
}) {
  xb(e());
}], KC = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && qt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], YC = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? re(!1, "Must provide a clone render function (renderClone) for virtual lists") : re());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? re(!1, "Expected virtual list to not have a placeholder") : re());
}];
function XC(e) {
  Qs(() => {
    ti(e, qC), e.props.mode === "standard" && ti(e, KC), e.props.mode === "virtual" && ti(e, YC);
  });
}
class JC extends I.PureComponent {
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
const ZC = (e) => {
  const t = Ot(Zs);
  t || (process.env.NODE_ENV !== "production" ? re(!1, "Could not find app context") : re());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: v
  } = e, w = Je(() => n.current, []), E = Je((P = null) => {
    n.current = P;
  }, []), y = Je(() => i.current, []), m = Je((P = null) => {
    i.current = P;
  }, []);
  XC({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const x = Je(() => {
    o() && p({
      maxScroll: X0()
    });
  }, [o, p]);
  GC({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = at(() => I.createElement(JC, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: G
  }) => I.createElement(UC, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: G,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = at(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), V = b ? b.dragging.draggableId : null, A = at(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: V
  }), [s, V, c]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, G = I.createElement(_C, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, R) => T(k, R, P));
    return Er.createPortal(G, v());
  }
  return I.createElement(tc.Provider, {
    value: A
  }, a(C, h), $());
};
var QC = ZC;
function e_() {
  return document.body || (process.env.NODE_ENV !== "production" ? re(!1, "document.body is not ready") : re()), document.body;
}
const td = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: e_
}, Cb = (e) => {
  let t = {
    ...e
  }, r;
  for (r in td)
    e[r] === void 0 && (t = {
      ...t,
      [r]: td[r]
    });
  return t;
}, ri = (e, t) => e === t.droppable.type, rd = (e, t) => t.draggables[e.draggable.id], t_ = () => {
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
  }, r = ft((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = ft((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
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
      draggingOverWith: f,
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
    const a = Cb(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (ec(n)) {
      const l = n.critical;
      if (!ri(c, l))
        return t;
      const d = rd(l, n.dimensions), g = jn(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!ri(c, l.critical))
        return t;
      const d = rd(l.critical, n.dimensions);
      return o(s, u, Sb(l.result) === s, jn(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!ri(c, l.critical))
        return t;
      const d = jn(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, r_ = {
  updateViewportMaxScroll: U0
};
cb(t_, r_, (e, t, r) => ({
  ...Cb(r),
  ...e,
  ...t
}), {
  context: hb,
  areStatePropsEqual: Ob
})(QC);
var nd;
(function(e) {
  e.event = "event", e.props = "prop";
})(nd || (nd = {}));
var od = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + od(), "" + od();
function n_(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ea = { exports: {} }, ni = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var id;
function o_() {
  if (id) return ni;
  id = 1;
  var e = I;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ni.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ni;
}
var ad = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function i_() {
  return sd || (sd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
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
      var v = p[0].inst, w = p[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = h, r(v) && w({ inst: v });
        },
        [g, b, h]
      ), s(
        function() {
          return r(v) && w({ inst: v }), g(function() {
            r(v) && w({ inst: v });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    ad.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ad;
}
process.env.NODE_ENV === "production" ? Ea.exports = o_() : Ea.exports = i_();
var oc = Ea.exports, oi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function a_() {
  if (cd) return oi;
  cd = 1;
  var e = I, t = oc;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return oi.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function v(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, x))
                return y = D;
            }
            return y = x;
          }
          if (D = y, o(E, x)) return D;
          var C = d(x);
          return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
        }
        var w = !1, E, y, m = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          m === null ? void 0 : function() {
            return v(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, oi;
}
var ld = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function s_() {
  return ud || (ud = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = oc, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    ld.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function v(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, x))
                  return y = D;
              }
              return y = x;
            }
            if (D = y, o(E, x))
              return D;
            var C = d(x);
            return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
          }
          var w = !1, E, y, m = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            m === null ? void 0 : function() {
              return v(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ld;
}
process.env.NODE_ENV === "production" ? a_() : s_();
function c_(e) {
  e();
}
let _b = c_;
const l_ = (e) => _b = e, u_ = () => _b, dd = Symbol.for("react-redux-context"), pd = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function d_() {
  var e;
  if (!N.createContext) return {};
  const t = (e = pd[dd]) != null ? e : pd[dd] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const p_ = /* @__PURE__ */ d_(), f_ = () => {
  throw new Error("uSES not initialized!");
};
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Ar.apply(null, arguments);
}
function Ib(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var xa = { exports: {} }, Se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fd;
function m_() {
  if (fd) return Se;
  fd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case h:
                case g:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function y(m) {
    return E(m) === u;
  }
  return Se.AsyncMode = c, Se.ConcurrentMode = u, Se.ContextConsumer = s, Se.ContextProvider = a, Se.Element = t, Se.ForwardRef = f, Se.Fragment = o, Se.Lazy = h, Se.Memo = g, Se.Portal = r, Se.Profiler = i, Se.StrictMode = n, Se.Suspense = l, Se.isAsyncMode = function(m) {
    return y(m) || E(m) === c;
  }, Se.isConcurrentMode = y, Se.isContextConsumer = function(m) {
    return E(m) === s;
  }, Se.isContextProvider = function(m) {
    return E(m) === a;
  }, Se.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Se.isForwardRef = function(m) {
    return E(m) === f;
  }, Se.isFragment = function(m) {
    return E(m) === o;
  }, Se.isLazy = function(m) {
    return E(m) === h;
  }, Se.isMemo = function(m) {
    return E(m) === g;
  }, Se.isPortal = function(m) {
    return E(m) === r;
  }, Se.isProfiler = function(m) {
    return E(m) === i;
  }, Se.isStrictMode = function(m) {
    return E(m) === n;
  }, Se.isSuspense = function(m) {
    return E(m) === l;
  }, Se.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === v || m.$$typeof === w || m.$$typeof === b);
  }, Se.typeOf = E, Se;
}
var Ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var md;
function g_() {
  return md || (md = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === f || O.$$typeof === p || O.$$typeof === v || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
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
                var ce = S && S.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ce;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, D = s, C = a, V = t, A = f, $ = o, P = h, T = g, G = r, k = i, R = n, W = l, F = !1;
    function j(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function U(O) {
      return y(O) === a;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function X(O) {
      return y(O) === f;
    }
    function te(O) {
      return y(O) === o;
    }
    function de(O) {
      return y(O) === h;
    }
    function Y(O) {
      return y(O) === g;
    }
    function J(O) {
      return y(O) === r;
    }
    function L(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Ve.AsyncMode = m, Ve.ConcurrentMode = x, Ve.ContextConsumer = D, Ve.ContextProvider = C, Ve.Element = V, Ve.ForwardRef = A, Ve.Fragment = $, Ve.Lazy = P, Ve.Memo = T, Ve.Portal = G, Ve.Profiler = k, Ve.StrictMode = R, Ve.Suspense = W, Ve.isAsyncMode = j, Ve.isConcurrentMode = z, Ve.isContextConsumer = B, Ve.isContextProvider = U, Ve.isElement = K, Ve.isForwardRef = X, Ve.isFragment = te, Ve.isLazy = de, Ve.isMemo = Y, Ve.isPortal = J, Ve.isProfiler = L, Ve.isStrictMode = Z, Ve.isSuspense = be, Ve.isValidElementType = E, Ve.typeOf = y;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? xa.exports = m_() : xa.exports = g_();
var b_ = xa.exports, ic = b_, h_ = {
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
}, y_ = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, v_ = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Pb = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ac = {};
ac[ic.ForwardRef] = v_;
ac[ic.Memo] = Pb;
function gd(e) {
  return ic.isMemo(e) ? Pb : ac[e.$$typeof] || h_;
}
var E_ = Object.defineProperty, x_ = Object.getOwnPropertyNames, bd = Object.getOwnPropertySymbols, O_ = Object.getOwnPropertyDescriptor, S_ = Object.getPrototypeOf, hd = Object.prototype;
function Ab(e, t, r) {
  if (typeof t != "string") {
    if (hd) {
      var o = S_(t);
      o && o !== hd && Ab(e, o, r);
    }
    var n = x_(t);
    bd && (n = n.concat(bd(t)));
    for (var i = gd(e), a = gd(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!y_[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = O_(t, c);
        try {
          E_(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var w_ = Ab;
const yd = /* @__PURE__ */ n_(w_);
var Oa = { exports: {} }, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vd;
function D_() {
  if (vd) return we;
  vd = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return we.ContextConsumer = a, we.ContextProvider = i, we.Element = e, we.ForwardRef = c, we.Fragment = r, we.Lazy = d, we.Memo = l, we.Portal = t, we.Profiler = n, we.StrictMode = o, we.Suspense = u, we.SuspenseList = f, we.isAsyncMode = function() {
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
    return b(p) === f;
  }, we.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, we.typeOf = b, we;
}
var Me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ed;
function N_() {
  return Ed || (Ed = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === f || v || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case f:
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
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var x = a, D = i, C = e, V = c, A = r, $ = d, P = l, T = t, G = n, k = o, R = u, W = f, F = !1, j = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function te(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function Y(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function be(S) {
      return m(S) === o;
    }
    function O(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === f;
    }
    Me.ContextConsumer = x, Me.ContextProvider = D, Me.Element = C, Me.ForwardRef = V, Me.Fragment = A, Me.Lazy = $, Me.Memo = P, Me.Portal = T, Me.Profiler = G, Me.StrictMode = k, Me.Suspense = R, Me.SuspenseList = W, Me.isAsyncMode = z, Me.isConcurrentMode = B, Me.isContextConsumer = U, Me.isContextProvider = K, Me.isElement = X, Me.isForwardRef = te, Me.isFragment = de, Me.isLazy = Y, Me.isMemo = J, Me.isPortal = L, Me.isProfiler = Z, Me.isStrictMode = be, Me.isSuspense = O, Me.isSuspenseList = le, Me.isValidElementType = y, Me.typeOf = m;
  }()), Me;
}
process.env.NODE_ENV === "production" ? Oa.exports = D_() : Oa.exports = N_();
var xd = Oa.exports;
function sc(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ii(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || sc(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function C_(e, t, r) {
  ii(e, "mapStateToProps"), ii(t, "mapDispatchToProps"), ii(r, "mergeProps");
}
const __ = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function I_(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(w, E) {
    return c = w, u = E, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, f);
    return f = w, E && (d = r(f, l, u)), d;
  }
  function v(w, E) {
    const y = !i(E, u), m = !n(w, c, E, u);
    return c = w, u = E, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : g(w, E);
  };
}
function P_(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Ib(t, __);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && C_(a, s, c), I_(a, s, c, e, i);
}
function A_(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function $_(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function $b(e, t, r) {
  $_(e) || sc(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Sa(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Od(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Tb(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Od(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Od(s), s = n(i, a)), process.env.NODE_ENV !== "production" && $b(s, o, t), s;
    }, n;
  };
}
function cc(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function T_(e) {
  return e && typeof e == "object" ? Sa((t) => (
    // @ts-ignore
    A_(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Tb(e, "mapDispatchToProps")
  ) : cc(e, "mapDispatchToProps") : Sa((t) => ({
    dispatch: t
  }));
}
function R_(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Tb(e, "mapStateToProps")
  ) : cc(e, "mapStateToProps") : Sa(() => ({}));
}
function V_(e, t, r) {
  return Ar({}, r, e, t);
}
function M_(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && $b(i, r, "mergeProps")), i;
    };
  };
}
function L_(e) {
  return e ? typeof e == "function" ? M_(e) : cc(e, "mergeProps") : () => V_;
}
function B_() {
  const e = u_();
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
const Sd = {
  notify() {
  },
  get: () => []
};
function F_(e, t) {
  let r, o = Sd, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, p(), l());
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
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = B_());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Sd);
  }
  function d() {
    i || (i = !0, f());
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
const W_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wa = W_ ? N.useLayoutEffect : N.useEffect;
function wd(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ai(e, t) {
  if (wd(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !wd(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const G_ = ["reactReduxForwardedRef"];
let Rb = f_;
const j_ = (e) => {
  Rb = e;
}, k_ = [null, null], z_ = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function H_(e, t, r) {
  wa(() => e(...t), r);
}
function U_(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function q_(e, t, r, o, n, i, a, s, c, u, f) {
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
    } catch (v) {
      p = v, d = v;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function K_(e, t) {
  return e === t;
}
let Dd = !1;
function Vb(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = K_,
  areOwnPropsEqual: i = ai,
  areStatePropsEqual: a = ai,
  areMergedPropsEqual: s = ai,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = p_
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Dd && (Dd = !0, sc('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = R_(e), d = T_(t), g = L_(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !xd.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${z_(b)}`);
    const p = b.displayName || b.name || "Component", v = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: v,
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
    function E(m) {
      const [x, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = Ib(m, G_);
        return [m.context, L, Z];
      }, [m]), V = N.useMemo(() => x && x.Consumer && // @ts-ignore
      xd.isContextConsumer(/* @__PURE__ */ N.createElement(x.Consumer, null)) ? x : f, [x, f]), A = N.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const T = $ ? m.store : A.store, G = P ? A.getServerState : T.getState, k = N.useMemo(() => P_(T.dispatch, w), [T]), [R, W] = N.useMemo(() => {
        if (!h) return k_;
        const L = F_(T, $ ? void 0 : A.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, $, A]), F = N.useMemo(() => $ ? A : Ar({}, A, {
        subscription: R
      }), [$, A, R]), j = N.useRef(), z = N.useRef(C), B = N.useRef(), U = N.useRef(!1);
      N.useRef(!1);
      const K = N.useRef(!1), X = N.useRef();
      wa(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const te = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = N.useMemo(() => (L) => R ? q_(
        h,
        T,
        R,
        // @ts-ignore
        k,
        z,
        j,
        U,
        K,
        B,
        W,
        L
      ) : () => {
      }, [R]);
      H_(U_, [z, j, U, C, B, W]);
      let Y;
      try {
        Y = Rb(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          te,
          G ? () => k(G(), C) : te
        );
      } catch (L) {
        throw X.current && (L.message += `
The error may be correlated with this previous error:
${X.current.stack}

`), L;
      }
      wa(() => {
        X.current = void 0, B.current = void 0, j.current = Y;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, Ar({}, Y, {
          ref: D
        }))
      ), [D, b, Y]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(V.Provider, {
        value: F
      }, J) : J, [V, J, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = v, c) {
      const m = N.forwardRef(function(x, D) {
        return /* @__PURE__ */ N.createElement(y, Ar({}, x, {
          reactReduxForwardedRef: D
        }));
      });
      return m.displayName = v, m.WrappedComponent = b, yd(m, b);
    }
    return yd(y, b);
  };
}
j_(oc.useSyncExternalStore);
l_(xr);
function Y_(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Mb(e, t) {
  var r = qe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && Y_(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function X_(e, t) {
  return Mb(function() {
    return e;
  }, t);
}
var st = Mb, Ze = X_, J_ = process.env.NODE_ENV === "production", si = "Invariant failed";
function Nd(e, t) {
  if (J_)
    throw new Error(si);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(si, ": ").concat(r) : si;
  throw new Error(o);
}
var wr = function(e) {
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
}, Lb = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Cd = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, Z_ = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, ci = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, lc = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? ci : r, n = e.border, i = n === void 0 ? ci : n, a = e.padding, s = a === void 0 ? ci : a, c = wr(Lb(t, o)), u = wr(Cd(t, i)), f = wr(Cd(u, s));
  return {
    marginBox: c,
    borderBox: wr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, _t = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Nd(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Nd()), o;
}, Q_ = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, e1 = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = Z_(r, t);
  return lc({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Da = function(e, t) {
  return t === void 0 && (t = Q_()), e1(e, t);
}, Bb = function(e, t) {
  var r = {
    top: _t(t.marginTop),
    right: _t(t.marginRight),
    bottom: _t(t.marginBottom),
    left: _t(t.marginLeft)
  }, o = {
    top: _t(t.paddingTop),
    right: _t(t.paddingRight),
    bottom: _t(t.paddingBottom),
    left: _t(t.paddingLeft)
  }, n = {
    top: _t(t.borderTopWidth),
    right: _t(t.borderRightWidth),
    bottom: _t(t.borderBottomWidth),
    left: _t(t.borderLeftWidth)
  };
  return lc({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, Fb = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Bb(t, r);
}, _d = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function t1(e, t) {
  return !!(e === t || _d(e) && _d(t));
}
function r1(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!t1(e[r], t[r]))
      return !1;
  return !0;
}
function mt(e, t) {
  t === void 0 && (t = r1);
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
var n1 = function(e) {
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
const o1 = process.env.NODE_ENV === "production", i1 = /[ \t]{2,}/g, a1 = /^[ \t]*/gm, Id = (e) => e.replace(i1, " ").replace(a1, "").trim(), s1 = (e) => Id(`
  %c@hello-pangea/dnd

  %c${Id(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), c1 = (e) => [s1(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], l1 = "__@hello-pangea/dnd-disable-dev-warnings";
function Wb(e, t) {
  o1 || typeof window < "u" && window[l1] || console[e](...c1(t));
}
const Kt = Wb.bind(null, "warn"), Na = Wb.bind(null, "error");
function u1() {
}
function d1(e, t) {
  return {
    ...e,
    ...t
  };
}
function p1(e, t, r) {
  const o = t.map((n) => {
    const i = d1(r, n.options);
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
const f1 = process.env.NODE_ENV === "production", Pd = "Invariant failed";
class gn extends Error {
}
gn.prototype.toString = function() {
  return this.message;
};
function ne(e, t) {
  throw f1 ? new gn(Pd) : new gn(`${Pd}: ${t || ""}`);
}
class ZW extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = u1, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Kt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof gn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Na(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = p1(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof gn) {
      process.env.NODE_ENV !== "production" && Na(t.message), this.setState({});
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
const gr = {
  x: 0,
  y: 0
}, m1 = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), g1 = (e, t) => e.x === t.x && e.y === t.y, b1 = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), h1 = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var y1 = (e, t) => {
  const r = wr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const v1 = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), E1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, x1 = (e, t) => t ? v1(e, t.scroll.diff.displacement) : e, O1 = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, S1 = (e, t) => t && t.shouldClipSubject ? y1(t.pageMarginBox, e) : wr(e);
var w1 = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = x1(e.marginBox, o), i = O1(n, r, t), a = S1(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
mt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
mt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const D1 = mt((e) => Object.values(e)), N1 = mt((e) => Object.values(e));
mt((e, t) => N1(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function C1(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
mt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const _1 = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, I1 = {
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
mt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: h1(e.line, r)
  };
});
var zn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const P1 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), A1 = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), uc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, bn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, $1 = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, or = `${$1.outOfTheWay}s ${uc.outOfTheWay}`, Hn = {
  fluid: `opacity ${or}`,
  snap: `transform ${or}, opacity ${or}`,
  drop: (e) => {
    const t = `${e}s ${uc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${or}`,
  placeholder: `height ${or}, width ${or}, margin ${or}`
}, Ad = (e) => g1(e, gr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ca = {
  moveTo: Ad,
  drop: (e, t) => {
    const r = Ad(e);
    if (r)
      return t ? `${r} scale(${bn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Gb = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = m1({
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
}, T1 = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot find document.documentElement") : ne()), e;
}, R1 = () => {
  const e = T1();
  return Gb({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
mt((e) => D1(e).filter((t) => !(!t.isEnabled || !t.frame)));
const jb = "data-rfd", $d = (() => {
  const e = `${jb}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Td = {
  contextId: `${jb}-scroll-container-context-id`
}, V1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ue;
var Xr = V1;
function M1(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var L1 = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function kb(e) {
  return e instanceof L1(e).HTMLElement;
}
function B1(e, t) {
  const r = `[${$d.contextId}="${e}"]`, o = M1(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Kt(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute($d.draggableId) === t);
  return n ? kb(n) ? n : (process.env.NODE_ENV !== "production" && Kt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Kt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var zb = I.createContext(null), F1 = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot find document.body") : ne()), e;
};
let W1 = 0;
const Hb = {
  separator: "::"
};
function G1(e, t = Hb) {
  return st(() => `${e}${t.separator}${W1++}`, [t.separator, e]);
}
function j1(e, t = Hb) {
  const r = I.useId();
  return st(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Ub = "useId" in I ? j1 : G1, dc = I.createContext(null);
function qb(e) {
  process.env.NODE_ENV !== "production" && e();
}
function pc(e, t) {
  qb(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        Na(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function k1(e) {
  const t = M(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function fc(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Rd = {
  dragging: 5e3,
  dropAnimating: 4500
}, z1 = (e, t) => t ? Hn.drop(t.duration) : e ? Hn.snap : Hn.fluid, H1 = (e, t) => {
  if (e)
    return t ? bn.opacity.drop : bn.opacity.combining;
}, U1 = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function q1(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = U1(e), s = !!n, c = s ? Ca.drop(r, i) : Ca.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: z1(a, n),
    transform: c,
    opacity: H1(i, s),
    zIndex: s ? Rd.dropAnimating : Rd.dragging,
    pointerEvents: "none"
  };
}
function K1(e) {
  return {
    transform: Ca.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function Y1(e) {
  return e.type === "DRAGGING" ? q1(e) : K1(e);
}
function X1(e, t, r = gr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Bb(n, o), a = Da(i, r), s = {
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
function J1(e) {
  const t = Ub("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = st(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Ze((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot get dimension when no ref is set") : ne()), X1(r, h, g);
  }, [r, n]), f = st(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  Xr(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Xr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var mc = I.createContext(null);
function Kb(e) {
  e && kb(e) || (process.env.NODE_ENV !== "production" ? ne(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ne());
}
function Z1(e, t, r) {
  pc(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ne(!1, "Draggable requires a draggableId") : ne(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ne(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ne(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ne(!1, `${o(n)} requires an integer index prop`) : ne(!1)), e.mapped.type !== "DRAGGING" && (Kb(r()), e.isEnabled && (B1(t, n) || (process.env.NODE_ENV !== "production" ? ne(!1, `${o(n)} Unable to find drag handle`) : ne(!1))));
  });
}
function Q1(e) {
  qb(() => {
    const t = M(e);
    pc(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ne(!1, "Draggable isClone prop value changed during component life") : ne(!1));
    }, [e]);
  });
}
function uo(e) {
  const t = Ot(e);
  return t || (process.env.NODE_ENV !== "production" ? ne(!1, "Could not find required context") : ne()), t;
}
function eI(e) {
  e.preventDefault();
}
const tI = (e) => {
  const t = M(null), r = Ze((x = null) => {
    t.current = x;
  }, []), o = Ze(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = uo(dc), {
    type: s,
    droppableId: c
  } = uo(mc), u = st(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: v
  } = e;
  if (Z1(e, n, o), Q1(b), !b) {
    const x = st(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    J1(x);
  }
  const w = st(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: eI
  } : null, [n, i, l, d]), E = Ze((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? v() : tr(v));
  }, [v, p]), y = st(() => {
    const x = Y1(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), m = st(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var rI = tI, Yb = (e, t) => e === t, Xb = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const nI = (e) => e.combine ? e.combine.draggableId : null, oI = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function iI() {
  const e = mt((o, n) => ({
    x: o,
    y: n
  })), t = mt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = mt((o, n, i, a, s = null, c = null, u = null) => ({
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
    if (fc(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = zn(o.impact), c = oI(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = Xb(c), l = nI(c), d = {
        duration: o.dropDuration,
        curve: uc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? bn.opacity.drop : null,
        scale: l ? bn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function Jb(e = null) {
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
const aI = {
  mapped: {
    type: "SECONDARY",
    offset: gr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Jb(null)
  }
};
function sI() {
  const e = mt((i, a) => ({
    x: i,
    y: a
  })), t = mt(Jb), r = mt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(gr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = C1(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = b1(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (fc(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const cI = () => {
  const e = iI(), t = sI();
  return (r, o) => e(r, o) || t(r, o) || aI;
}, lI = {
  dropAnimationFinished: A1
}, uI = Vb(cI, lI, null, {
  context: zb,
  areStatePropsEqual: Yb
})(rI);
var dI = uI;
function pI(e) {
  return uo(mc).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(dI, e);
}
const gc = (e) => (t) => e === t, fI = gc("scroll"), mI = gc("auto"), gI = gc("visible"), Vd = (e, t) => t(e.overflowX) || t(e.overflowY), bI = (e, t) => t(e.overflowX) && t(e.overflowY), Zb = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Vd(r, fI) || Vd(r, mI);
}, hI = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = F1(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ne()), !Zb(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return bI(o, gI) || process.env.NODE_ENV !== "production" && Kt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, bc = (e) => e == null ? null : e === document.body ? hI() ? e : null : e === document.documentElement ? null : Zb(e) ? e : bc(e.parentElement);
var yI = (e) => {
  !e || !bc(e.parentElement) || process.env.NODE_ENV !== "production" && Kt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, _a = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Qb = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Qb(e.parentElement) : !1;
var vI = (e) => {
  const t = bc(e), r = Qb(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, EI = ({
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
    } = s, g = Gb({
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
          value: gr,
          displacement: gr
        }
      }
    };
  })(), u = n === "vertical" ? _1 : I1, f = w1({
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
    subject: f
  };
};
const xI = (e, t) => {
  const r = Fb(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Lb({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return lc({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var OI = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = xI(e, c), f = Da(u, o), l = (() => {
    if (!c)
      return null;
    const d = Fb(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Da(d, o),
      scroll: _a(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return EI({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const SI = {
  passive: !1
}, wI = {
  passive: !0
};
var Md = (e) => e.shouldPublishImmediately ? SI : wI;
const Vn = (e) => e && e.env.closestScrollable || null;
function DI(e) {
  const t = M(null), r = uo(dc), o = Ub("droppable"), {
    registry: n,
    marshal: i
  } = r, a = k1(e), s = st(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = st(() => mt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ne(!1, "Can only update scroll when dragging") : ne());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = Ze(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? gr : _a(y.env.closestScrollable);
  }, []), l = Ze(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = st(() => n1(l), [l]), g = Ze(() => {
    const y = t.current, m = Vn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? ne(!1, "Could not find scroll options while scrolling") : ne()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = Ze((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot collect a droppable while a drag is occurring") : ne());
    const x = a.current, D = x.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot collect without a droppable ref") : ne());
    const C = vI(D), V = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = OI({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Td.contextId, r.contextId), $.addEventListener("scroll", g, Md(V.scrollOptions)), process.env.NODE_ENV !== "production" && yI($)), A;
  }, [r.contextId, s, g, a]), b = Ze(() => {
    const y = t.current, m = Vn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? ne(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ne()), _a(m);
  }, []), p = Ze(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot stop drag when no active drag") : ne());
    const m = Vn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Td.contextId), m.removeEventListener("scroll", g, Md(y.scrollOptions)));
  }, [g, d]), v = Ze((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot scroll when there is no drag") : ne());
    const x = Vn(m);
    x || (process.env.NODE_ENV !== "production" ? ne(!1, "Cannot scroll a droppable with no closest scrollable") : ne()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), w = st(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: v
  }), [p, h, b, v]), E = st(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Xr(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Kt("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Xr(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Xr(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function li() {
}
const NI = {
  width: 0,
  height: 0,
  margin: E1
}, CI = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? NI : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, _I = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = CI({
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
    transition: r !== "none" ? Hn.placeholder : null
  };
}, II = (e) => {
  const t = M(null), r = Ze(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = qe(e.animate === "open");
  ue(() => s ? o !== "open" ? (r(), c(!1), li) : t.current ? li : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : li, [o, s, r]);
  const u = Ze((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = _I({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var PI = I.memo(II);
function ui(e) {
  return typeof e == "boolean";
}
function di(e, t) {
  t.forEach((r) => r(e));
}
const AI = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ne(!1, "A Droppable requires a droppableId prop") : ne()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ne(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ne());
}, function({
  props: e
}) {
  ui(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ne(!1, "isDropDisabled must be a boolean") : ne()), ui(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ne(!1, "isCombineEnabled must be a boolean") : ne()), ui(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ne(!1, "ignoreContainerClipping must be a boolean") : ne());
}, function({
  getDroppableRef: e
}) {
  Kb(e());
}], $I = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Kt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], TI = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ne(!1, "Must provide a clone render function (renderClone) for virtual lists") : ne());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ne(!1, "Expected virtual list to not have a placeholder") : ne());
}];
function RI(e) {
  pc(() => {
    di(e, AI), e.props.mode === "standard" && di(e, $I), e.props.mode === "virtual" && di(e, TI);
  });
}
class VI extends I.PureComponent {
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
const MI = (e) => {
  const t = Ot(dc);
  t || (process.env.NODE_ENV !== "production" ? ne(!1, "Could not find app context") : ne());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: v
  } = e, w = Ze(() => n.current, []), E = Ze((P = null) => {
    n.current = P;
  }, []), y = Ze(() => i.current, []), m = Ze((P = null) => {
    i.current = P;
  }, []);
  RI({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const x = Ze(() => {
    o() && p({
      maxScroll: R1()
    });
  }, [o, p]);
  DI({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = st(() => I.createElement(VI, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: G
  }) => I.createElement(PI, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: G,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = st(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), V = b ? b.dragging.draggableId : null, A = st(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: V
  }), [s, V, c]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, G = I.createElement(pI, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, R) => T(k, R, P));
    return Er.createPortal(G, v());
  }
  return I.createElement(mc.Provider, {
    value: A
  }, a(C, h), $());
};
var LI = MI;
function BI() {
  return document.body || (process.env.NODE_ENV !== "production" ? ne(!1, "document.body is not ready") : ne()), document.body;
}
const Ld = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: BI
}, eh = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Ld)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Ld[r]
    });
  return t;
}, pi = (e, t) => e === t.droppable.type, Bd = (e, t) => t.draggables[e.draggable.id], FI = () => {
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
  }, r = mt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = mt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
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
      draggingOverWith: f,
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
    const a = eh(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (fc(n)) {
      const l = n.critical;
      if (!pi(c, l))
        return t;
      const d = Bd(l, n.dimensions), g = zn(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!pi(c, l.critical))
        return t;
      const d = Bd(l.critical, n.dimensions);
      return o(s, u, Xb(l.result) === s, zn(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!pi(c, l.critical))
        return t;
      const d = zn(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, WI = {
  updateViewportMaxScroll: P1
};
Vb(FI, WI, (e, t, r) => ({
  ...eh(r),
  ...e,
  ...t
}), {
  context: zb,
  areStatePropsEqual: Yb
})(LI);
var Fd;
(function(e) {
  e.event = "event", e.props = "prop";
})(Fd || (Fd = {}));
var Wd = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Wd(), "" + Wd();
function GI(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ia = { exports: {} }, fi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function jI() {
  if (Gd) return fi;
  Gd = 1;
  var e = I;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return fi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, fi;
}
var jd = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function kI() {
  return kd || (kd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
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
      var v = p[0].inst, w = p[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = h, r(v) && w({ inst: v });
        },
        [g, b, h]
      ), s(
        function() {
          return r(v) && w({ inst: v }), g(function() {
            r(v) && w({ inst: v });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    jd.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), jd;
}
process.env.NODE_ENV === "production" ? Ia.exports = jI() : Ia.exports = kI();
var hc = Ia.exports, mi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zd;
function zI() {
  if (zd) return mi;
  zd = 1;
  var e = I, t = hc;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return mi.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function v(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, x))
                return y = D;
            }
            return y = x;
          }
          if (D = y, o(E, x)) return D;
          var C = d(x);
          return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
        }
        var w = !1, E, y, m = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          m === null ? void 0 : function() {
            return v(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, mi;
}
var Hd = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function HI() {
  return Ud || (Ud = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = hc, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Hd.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function v(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, x))
                  return y = D;
              }
              return y = x;
            }
            if (D = y, o(E, x))
              return D;
            var C = d(x);
            return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
          }
          var w = !1, E, y, m = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            m === null ? void 0 : function() {
              return v(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Hd;
}
process.env.NODE_ENV === "production" ? zI() : HI();
function UI(e) {
  e();
}
let th = UI;
const qI = (e) => th = e, KI = () => th, qd = Symbol.for("react-redux-context"), Kd = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function YI() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Kd[qd]) != null ? e : Kd[qd] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const XI = /* @__PURE__ */ YI(), JI = () => {
  throw new Error("uSES not initialized!");
};
function $r() {
  return $r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, $r.apply(null, arguments);
}
function rh(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Pa = { exports: {} }, De = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function ZI() {
  if (Yd) return De;
  Yd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case h:
                case g:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function y(m) {
    return E(m) === u;
  }
  return De.AsyncMode = c, De.ConcurrentMode = u, De.ContextConsumer = s, De.ContextProvider = a, De.Element = t, De.ForwardRef = f, De.Fragment = o, De.Lazy = h, De.Memo = g, De.Portal = r, De.Profiler = i, De.StrictMode = n, De.Suspense = l, De.isAsyncMode = function(m) {
    return y(m) || E(m) === c;
  }, De.isConcurrentMode = y, De.isContextConsumer = function(m) {
    return E(m) === s;
  }, De.isContextProvider = function(m) {
    return E(m) === a;
  }, De.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, De.isForwardRef = function(m) {
    return E(m) === f;
  }, De.isFragment = function(m) {
    return E(m) === o;
  }, De.isLazy = function(m) {
    return E(m) === h;
  }, De.isMemo = function(m) {
    return E(m) === g;
  }, De.isPortal = function(m) {
    return E(m) === r;
  }, De.isProfiler = function(m) {
    return E(m) === i;
  }, De.isStrictMode = function(m) {
    return E(m) === n;
  }, De.isSuspense = function(m) {
    return E(m) === l;
  }, De.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === v || m.$$typeof === w || m.$$typeof === b);
  }, De.typeOf = E, De;
}
var Le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function QI() {
  return Xd || (Xd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === f || O.$$typeof === p || O.$$typeof === v || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
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
                var ce = S && S.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ce;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, D = s, C = a, V = t, A = f, $ = o, P = h, T = g, G = r, k = i, R = n, W = l, F = !1;
    function j(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function U(O) {
      return y(O) === a;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function X(O) {
      return y(O) === f;
    }
    function te(O) {
      return y(O) === o;
    }
    function de(O) {
      return y(O) === h;
    }
    function Y(O) {
      return y(O) === g;
    }
    function J(O) {
      return y(O) === r;
    }
    function L(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Le.AsyncMode = m, Le.ConcurrentMode = x, Le.ContextConsumer = D, Le.ContextProvider = C, Le.Element = V, Le.ForwardRef = A, Le.Fragment = $, Le.Lazy = P, Le.Memo = T, Le.Portal = G, Le.Profiler = k, Le.StrictMode = R, Le.Suspense = W, Le.isAsyncMode = j, Le.isConcurrentMode = z, Le.isContextConsumer = B, Le.isContextProvider = U, Le.isElement = K, Le.isForwardRef = X, Le.isFragment = te, Le.isLazy = de, Le.isMemo = Y, Le.isPortal = J, Le.isProfiler = L, Le.isStrictMode = Z, Le.isSuspense = be, Le.isValidElementType = E, Le.typeOf = y;
  }()), Le;
}
process.env.NODE_ENV === "production" ? Pa.exports = ZI() : Pa.exports = QI();
var eP = Pa.exports, yc = eP, tP = {
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
}, rP = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, nP = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, nh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vc = {};
vc[yc.ForwardRef] = nP;
vc[yc.Memo] = nh;
function Jd(e) {
  return yc.isMemo(e) ? nh : vc[e.$$typeof] || tP;
}
var oP = Object.defineProperty, iP = Object.getOwnPropertyNames, Zd = Object.getOwnPropertySymbols, aP = Object.getOwnPropertyDescriptor, sP = Object.getPrototypeOf, Qd = Object.prototype;
function oh(e, t, r) {
  if (typeof t != "string") {
    if (Qd) {
      var o = sP(t);
      o && o !== Qd && oh(e, o, r);
    }
    var n = iP(t);
    Zd && (n = n.concat(Zd(t)));
    for (var i = Jd(e), a = Jd(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!rP[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = aP(t, c);
        try {
          oP(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var cP = oh;
const ep = /* @__PURE__ */ GI(cP);
var Aa = { exports: {} }, Ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp;
function lP() {
  if (tp) return Ne;
  tp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Ne.ContextConsumer = a, Ne.ContextProvider = i, Ne.Element = e, Ne.ForwardRef = c, Ne.Fragment = r, Ne.Lazy = d, Ne.Memo = l, Ne.Portal = t, Ne.Profiler = n, Ne.StrictMode = o, Ne.Suspense = u, Ne.SuspenseList = f, Ne.isAsyncMode = function() {
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
    return b(p) === f;
  }, Ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Ne.typeOf = b, Ne;
}
var Be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rp;
function uP() {
  return rp || (rp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === f || v || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case f:
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
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var x = a, D = i, C = e, V = c, A = r, $ = d, P = l, T = t, G = n, k = o, R = u, W = f, F = !1, j = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function te(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function Y(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function be(S) {
      return m(S) === o;
    }
    function O(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === f;
    }
    Be.ContextConsumer = x, Be.ContextProvider = D, Be.Element = C, Be.ForwardRef = V, Be.Fragment = A, Be.Lazy = $, Be.Memo = P, Be.Portal = T, Be.Profiler = G, Be.StrictMode = k, Be.Suspense = R, Be.SuspenseList = W, Be.isAsyncMode = z, Be.isConcurrentMode = B, Be.isContextConsumer = U, Be.isContextProvider = K, Be.isElement = X, Be.isForwardRef = te, Be.isFragment = de, Be.isLazy = Y, Be.isMemo = J, Be.isPortal = L, Be.isProfiler = Z, Be.isStrictMode = be, Be.isSuspense = O, Be.isSuspenseList = le, Be.isValidElementType = y, Be.typeOf = m;
  }()), Be;
}
process.env.NODE_ENV === "production" ? Aa.exports = lP() : Aa.exports = uP();
var np = Aa.exports;
function Ec(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function gi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Ec(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function dP(e, t, r) {
  gi(e, "mapStateToProps"), gi(t, "mapDispatchToProps"), gi(r, "mergeProps");
}
const pP = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function fP(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(w, E) {
    return c = w, u = E, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, f);
    return f = w, E && (d = r(f, l, u)), d;
  }
  function v(w, E) {
    const y = !i(E, u), m = !n(w, c, E, u);
    return c = w, u = E, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : g(w, E);
  };
}
function mP(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = rh(t, pP);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && dP(a, s, c), fP(a, s, c, e, i);
}
function gP(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function bP(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function ih(e, t, r) {
  bP(e) || Ec(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function $a(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function op(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ah(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = op(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = op(s), s = n(i, a)), process.env.NODE_ENV !== "production" && ih(s, o, t), s;
    }, n;
  };
}
function xc(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function hP(e) {
  return e && typeof e == "object" ? $a((t) => (
    // @ts-ignore
    gP(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ah(e, "mapDispatchToProps")
  ) : xc(e, "mapDispatchToProps") : $a((t) => ({
    dispatch: t
  }));
}
function yP(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ah(e, "mapStateToProps")
  ) : xc(e, "mapStateToProps") : $a(() => ({}));
}
function vP(e, t, r) {
  return $r({}, r, e, t);
}
function EP(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && ih(i, r, "mergeProps")), i;
    };
  };
}
function xP(e) {
  return e ? typeof e == "function" ? EP(e) : xc(e, "mergeProps") : () => vP;
}
function OP() {
  const e = KI();
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
const ip = {
  notify() {
  },
  get: () => []
};
function SP(e, t) {
  let r, o = ip, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, p(), l());
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
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = OP());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = ip);
  }
  function d() {
    i || (i = !0, f());
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
const wP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ta = wP ? N.useLayoutEffect : N.useEffect;
function ap(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function bi(e, t) {
  if (ap(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !ap(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const DP = ["reactReduxForwardedRef"];
let sh = JI;
const NP = (e) => {
  sh = e;
}, CP = [null, null], _P = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function IP(e, t, r) {
  Ta(() => e(...t), r);
}
function PP(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function AP(e, t, r, o, n, i, a, s, c, u, f) {
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
    } catch (v) {
      p = v, d = v;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function $P(e, t) {
  return e === t;
}
let sp = !1;
function ch(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = $P,
  areOwnPropsEqual: i = bi,
  areStatePropsEqual: a = bi,
  areMergedPropsEqual: s = bi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = XI
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !sp && (sp = !0, Ec('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = yP(e), d = hP(t), g = xP(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !np.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${_P(b)}`);
    const p = b.displayName || b.name || "Component", v = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: v,
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
    function E(m) {
      const [x, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = rh(m, DP);
        return [m.context, L, Z];
      }, [m]), V = N.useMemo(() => x && x.Consumer && // @ts-ignore
      np.isContextConsumer(/* @__PURE__ */ N.createElement(x.Consumer, null)) ? x : f, [x, f]), A = N.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const T = $ ? m.store : A.store, G = P ? A.getServerState : T.getState, k = N.useMemo(() => mP(T.dispatch, w), [T]), [R, W] = N.useMemo(() => {
        if (!h) return CP;
        const L = SP(T, $ ? void 0 : A.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, $, A]), F = N.useMemo(() => $ ? A : $r({}, A, {
        subscription: R
      }), [$, A, R]), j = N.useRef(), z = N.useRef(C), B = N.useRef(), U = N.useRef(!1);
      N.useRef(!1);
      const K = N.useRef(!1), X = N.useRef();
      Ta(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const te = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = N.useMemo(() => (L) => R ? AP(
        h,
        T,
        R,
        // @ts-ignore
        k,
        z,
        j,
        U,
        K,
        B,
        W,
        L
      ) : () => {
      }, [R]);
      IP(PP, [z, j, U, C, B, W]);
      let Y;
      try {
        Y = sh(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          te,
          G ? () => k(G(), C) : te
        );
      } catch (L) {
        throw X.current && (L.message += `
The error may be correlated with this previous error:
${X.current.stack}

`), L;
      }
      Ta(() => {
        X.current = void 0, B.current = void 0, j.current = Y;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, $r({}, Y, {
          ref: D
        }))
      ), [D, b, Y]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(V.Provider, {
        value: F
      }, J) : J, [V, J, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = v, c) {
      const m = N.forwardRef(function(x, D) {
        return /* @__PURE__ */ N.createElement(y, $r({}, x, {
          reactReduxForwardedRef: D
        }));
      });
      return m.displayName = v, m.WrappedComponent = b, ep(m, b);
    }
    return ep(y, b);
  };
}
NP(hc.useSyncExternalStore);
qI(xr);
function TP(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function lh(e, t) {
  var r = qe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && TP(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function RP(e, t) {
  return lh(function() {
    return e;
  }, t);
}
var ct = lh, Qe = RP, VP = process.env.NODE_ENV === "production", hi = "Invariant failed";
function cp(e, t) {
  if (VP)
    throw new Error(hi);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(hi, ": ").concat(r) : hi;
  throw new Error(o);
}
var Dr = function(e) {
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
}, uh = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, lp = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, MP = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, yi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Oc = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? yi : r, n = e.border, i = n === void 0 ? yi : n, a = e.padding, s = a === void 0 ? yi : a, c = Dr(uh(t, o)), u = Dr(lp(t, i)), f = Dr(lp(u, s));
  return {
    marginBox: c,
    borderBox: Dr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, It = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? cp(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : cp()), o;
}, LP = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, BP = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = MP(r, t);
  return Oc({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Ra = function(e, t) {
  return t === void 0 && (t = LP()), BP(e, t);
}, dh = function(e, t) {
  var r = {
    top: It(t.marginTop),
    right: It(t.marginRight),
    bottom: It(t.marginBottom),
    left: It(t.marginLeft)
  }, o = {
    top: It(t.paddingTop),
    right: It(t.paddingRight),
    bottom: It(t.paddingBottom),
    left: It(t.paddingLeft)
  }, n = {
    top: It(t.borderTopWidth),
    right: It(t.borderRightWidth),
    bottom: It(t.borderBottomWidth),
    left: It(t.borderLeftWidth)
  };
  return Oc({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, ph = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return dh(t, r);
}, up = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function FP(e, t) {
  return !!(e === t || up(e) && up(t));
}
function WP(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!FP(e[r], t[r]))
      return !1;
  return !0;
}
function gt(e, t) {
  t === void 0 && (t = WP);
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
var GP = function(e) {
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
const jP = process.env.NODE_ENV === "production", kP = /[ \t]{2,}/g, zP = /^[ \t]*/gm, dp = (e) => e.replace(kP, " ").replace(zP, "").trim(), HP = (e) => dp(`
  %c@hello-pangea/dnd

  %c${dp(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), UP = (e) => [HP(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], qP = "__@hello-pangea/dnd-disable-dev-warnings";
function fh(e, t) {
  jP || typeof window < "u" && window[qP] || console[e](...UP(t));
}
const Yt = fh.bind(null, "warn"), Va = fh.bind(null, "error");
function KP() {
}
function YP(e, t) {
  return {
    ...e,
    ...t
  };
}
function XP(e, t, r) {
  const o = t.map((n) => {
    const i = YP(r, n.options);
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
const JP = process.env.NODE_ENV === "production", pp = "Invariant failed";
class hn extends Error {
}
hn.prototype.toString = function() {
  return this.message;
};
function oe(e, t) {
  throw JP ? new hn(pp) : new hn(`${pp}: ${t || ""}`);
}
class QW extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = KP, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Yt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof hn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Va(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = XP(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof hn) {
      process.env.NODE_ENV !== "production" && Va(t.message), this.setState({});
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
const br = {
  x: 0,
  y: 0
}, ZP = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), QP = (e, t) => e.x === t.x && e.y === t.y, eA = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), tA = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var rA = (e, t) => {
  const r = Dr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const nA = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), oA = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, iA = (e, t) => t ? nA(e, t.scroll.diff.displacement) : e, aA = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, sA = (e, t) => t && t.shouldClipSubject ? rA(t.pageMarginBox, e) : Dr(e);
var cA = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = iA(e.marginBox, o), i = aA(n, r, t), a = sA(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
gt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
gt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const lA = gt((e) => Object.values(e)), uA = gt((e) => Object.values(e));
gt((e, t) => uA(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function dA(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
gt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const pA = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, fA = {
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
gt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: tA(e.line, r)
  };
});
var Un = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const mA = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), gA = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Sc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, yn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, bA = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ir = `${bA.outOfTheWay}s ${Sc.outOfTheWay}`, qn = {
  fluid: `opacity ${ir}`,
  snap: `transform ${ir}, opacity ${ir}`,
  drop: (e) => {
    const t = `${e}s ${Sc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ir}`,
  placeholder: `height ${ir}, width ${ir}, margin ${ir}`
}, fp = (e) => QP(e, br) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ma = {
  moveTo: fp,
  drop: (e, t) => {
    const r = fp(e);
    if (r)
      return t ? `${r} scale(${yn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var mh = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = ZP({
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
}, hA = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot find document.documentElement") : oe()), e;
}, yA = () => {
  const e = hA();
  return mh({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
gt((e) => lA(e).filter((t) => !(!t.isEnabled || !t.frame)));
const gh = "data-rfd", mp = (() => {
  const e = `${gh}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), gp = {
  contextId: `${gh}-scroll-container-context-id`
}, vA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ue;
var Jr = vA;
function EA(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var xA = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function bh(e) {
  return e instanceof xA(e).HTMLElement;
}
function OA(e, t) {
  const r = `[${mp.contextId}="${e}"]`, o = EA(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Yt(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(mp.draggableId) === t);
  return n ? bh(n) ? n : (process.env.NODE_ENV !== "production" && Yt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Yt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var hh = I.createContext(null), SA = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot find document.body") : oe()), e;
};
let wA = 0;
const yh = {
  separator: "::"
};
function DA(e, t = yh) {
  return ct(() => `${e}${t.separator}${wA++}`, [t.separator, e]);
}
function NA(e, t = yh) {
  const r = I.useId();
  return ct(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var vh = "useId" in I ? NA : DA, wc = I.createContext(null);
function Eh(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Dc(e, t) {
  Eh(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        Va(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function CA(e) {
  const t = M(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function Nc(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const bp = {
  dragging: 5e3,
  dropAnimating: 4500
}, _A = (e, t) => t ? qn.drop(t.duration) : e ? qn.snap : qn.fluid, IA = (e, t) => {
  if (e)
    return t ? yn.opacity.drop : yn.opacity.combining;
}, PA = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function AA(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = PA(e), s = !!n, c = s ? Ma.drop(r, i) : Ma.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: _A(a, n),
    transform: c,
    opacity: IA(i, s),
    zIndex: s ? bp.dropAnimating : bp.dragging,
    pointerEvents: "none"
  };
}
function $A(e) {
  return {
    transform: Ma.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function TA(e) {
  return e.type === "DRAGGING" ? AA(e) : $A(e);
}
function RA(e, t, r = br) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = dh(n, o), a = Ra(i, r), s = {
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
function VA(e) {
  const t = vh("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ct(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = Qe((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot get dimension when no ref is set") : oe()), RA(r, h, g);
  }, [r, n]), f = ct(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  Jr(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Jr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var Cc = I.createContext(null);
function xh(e) {
  e && bh(e) || (process.env.NODE_ENV !== "production" ? oe(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : oe());
}
function MA(e, t, r) {
  Dc(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? oe(!1, "Draggable requires a draggableId") : oe(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? oe(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : oe(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? oe(!1, `${o(n)} requires an integer index prop`) : oe(!1)), e.mapped.type !== "DRAGGING" && (xh(r()), e.isEnabled && (OA(t, n) || (process.env.NODE_ENV !== "production" ? oe(!1, `${o(n)} Unable to find drag handle`) : oe(!1))));
  });
}
function LA(e) {
  Eh(() => {
    const t = M(e);
    Dc(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? oe(!1, "Draggable isClone prop value changed during component life") : oe(!1));
    }, [e]);
  });
}
function po(e) {
  const t = Ot(e);
  return t || (process.env.NODE_ENV !== "production" ? oe(!1, "Could not find required context") : oe()), t;
}
function BA(e) {
  e.preventDefault();
}
const FA = (e) => {
  const t = M(null), r = Qe((x = null) => {
    t.current = x;
  }, []), o = Qe(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = po(wc), {
    type: s,
    droppableId: c
  } = po(Cc), u = ct(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: v
  } = e;
  if (MA(e, n, o), LA(b), !b) {
    const x = ct(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    VA(x);
  }
  const w = ct(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: BA
  } : null, [n, i, l, d]), E = Qe((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? v() : tr(v));
  }, [v, p]), y = ct(() => {
    const x = TA(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), m = ct(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var WA = FA, Oh = (e, t) => e === t, Sh = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const GA = (e) => e.combine ? e.combine.draggableId : null, jA = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function kA() {
  const e = gt((o, n) => ({
    x: o,
    y: n
  })), t = gt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = gt((o, n, i, a, s = null, c = null, u = null) => ({
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
    if (Nc(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Un(o.impact), c = jA(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = Sh(c), l = GA(c), d = {
        duration: o.dropDuration,
        curve: Sc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? yn.opacity.drop : null,
        scale: l ? yn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function wh(e = null) {
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
const zA = {
  mapped: {
    type: "SECONDARY",
    offset: br,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: wh(null)
  }
};
function HA() {
  const e = gt((i, a) => ({
    x: i,
    y: a
  })), t = gt(wh), r = gt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(br, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = dA(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = eA(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Nc(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const UA = () => {
  const e = kA(), t = HA();
  return (r, o) => e(r, o) || t(r, o) || zA;
}, qA = {
  dropAnimationFinished: gA
}, KA = ch(UA, qA, null, {
  context: hh,
  areStatePropsEqual: Oh
})(WA);
var YA = KA;
function XA(e) {
  return po(Cc).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(YA, e);
}
const _c = (e) => (t) => e === t, JA = _c("scroll"), ZA = _c("auto"), QA = _c("visible"), hp = (e, t) => t(e.overflowX) || t(e.overflowY), e$ = (e, t) => t(e.overflowX) && t(e.overflowY), Dh = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return hp(r, JA) || hp(r, ZA);
}, t$ = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = SA(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, oe()), !Dh(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return e$(o, QA) || process.env.NODE_ENV !== "production" && Yt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, Ic = (e) => e == null ? null : e === document.body ? t$() ? e : null : e === document.documentElement ? null : Dh(e) ? e : Ic(e.parentElement);
var r$ = (e) => {
  !e || !Ic(e.parentElement) || process.env.NODE_ENV !== "production" && Yt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, La = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Nh = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Nh(e.parentElement) : !1;
var n$ = (e) => {
  const t = Ic(e), r = Nh(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, o$ = ({
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
    } = s, g = mh({
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
          value: br,
          displacement: br
        }
      }
    };
  })(), u = n === "vertical" ? pA : fA, f = cA({
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
    subject: f
  };
};
const i$ = (e, t) => {
  const r = ph(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = uh({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Oc({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var a$ = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = i$(e, c), f = Ra(u, o), l = (() => {
    if (!c)
      return null;
    const d = ph(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Ra(d, o),
      scroll: La(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return o$({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const s$ = {
  passive: !1
}, c$ = {
  passive: !0
};
var yp = (e) => e.shouldPublishImmediately ? s$ : c$;
const Mn = (e) => e && e.env.closestScrollable || null;
function l$(e) {
  const t = M(null), r = po(wc), o = vh("droppable"), {
    registry: n,
    marshal: i
  } = r, a = CA(e), s = ct(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = ct(() => gt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? oe(!1, "Can only update scroll when dragging") : oe());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = Qe(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? br : La(y.env.closestScrollable);
  }, []), l = Qe(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = ct(() => GP(l), [l]), g = Qe(() => {
    const y = t.current, m = Mn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? oe(!1, "Could not find scroll options while scrolling") : oe()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = Qe((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot collect a droppable while a drag is occurring") : oe());
    const x = a.current, D = x.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot collect without a droppable ref") : oe());
    const C = n$(D), V = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = a$({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(gp.contextId, r.contextId), $.addEventListener("scroll", g, yp(V.scrollOptions)), process.env.NODE_ENV !== "production" && r$($)), A;
  }, [r.contextId, s, g, a]), b = Qe(() => {
    const y = t.current, m = Mn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? oe(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : oe()), La(m);
  }, []), p = Qe(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot stop drag when no active drag") : oe());
    const m = Mn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(gp.contextId), m.removeEventListener("scroll", g, yp(y.scrollOptions)));
  }, [g, d]), v = Qe((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot scroll when there is no drag") : oe());
    const x = Mn(m);
    x || (process.env.NODE_ENV !== "production" ? oe(!1, "Cannot scroll a droppable with no closest scrollable") : oe()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), w = ct(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: v
  }), [p, h, b, v]), E = ct(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Jr(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Yt("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Jr(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Jr(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function vi() {
}
const u$ = {
  width: 0,
  height: 0,
  margin: oA
}, d$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? u$ : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, p$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = d$({
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
    transition: r !== "none" ? qn.placeholder : null
  };
}, f$ = (e) => {
  const t = M(null), r = Qe(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = qe(e.animate === "open");
  ue(() => s ? o !== "open" ? (r(), c(!1), vi) : t.current ? vi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : vi, [o, s, r]);
  const u = Qe((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = p$({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var m$ = I.memo(f$);
function Ei(e) {
  return typeof e == "boolean";
}
function xi(e, t) {
  t.forEach((r) => r(e));
}
const g$ = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? oe(!1, "A Droppable requires a droppableId prop") : oe()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? oe(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : oe());
}, function({
  props: e
}) {
  Ei(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? oe(!1, "isDropDisabled must be a boolean") : oe()), Ei(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? oe(!1, "isCombineEnabled must be a boolean") : oe()), Ei(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? oe(!1, "ignoreContainerClipping must be a boolean") : oe());
}, function({
  getDroppableRef: e
}) {
  xh(e());
}], b$ = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Yt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], h$ = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? oe(!1, "Must provide a clone render function (renderClone) for virtual lists") : oe());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? oe(!1, "Expected virtual list to not have a placeholder") : oe());
}];
function y$(e) {
  Dc(() => {
    xi(e, g$), e.props.mode === "standard" && xi(e, b$), e.props.mode === "virtual" && xi(e, h$);
  });
}
class v$ extends I.PureComponent {
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
const E$ = (e) => {
  const t = Ot(wc);
  t || (process.env.NODE_ENV !== "production" ? oe(!1, "Could not find app context") : oe());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: v
  } = e, w = Qe(() => n.current, []), E = Qe((P = null) => {
    n.current = P;
  }, []), y = Qe(() => i.current, []), m = Qe((P = null) => {
    i.current = P;
  }, []);
  y$({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const x = Qe(() => {
    o() && p({
      maxScroll: yA()
    });
  }, [o, p]);
  l$({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = ct(() => I.createElement(v$, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: G
  }) => I.createElement(m$, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: G,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = ct(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), V = b ? b.dragging.draggableId : null, A = ct(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: V
  }), [s, V, c]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, G = I.createElement(XA, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, R) => T(k, R, P));
    return Er.createPortal(G, v());
  }
  return I.createElement(Cc.Provider, {
    value: A
  }, a(C, h), $());
};
var x$ = E$;
function O$() {
  return document.body || (process.env.NODE_ENV !== "production" ? oe(!1, "document.body is not ready") : oe()), document.body;
}
const vp = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: O$
}, Ch = (e) => {
  let t = {
    ...e
  }, r;
  for (r in vp)
    e[r] === void 0 && (t = {
      ...t,
      [r]: vp[r]
    });
  return t;
}, Oi = (e, t) => e === t.droppable.type, Ep = (e, t) => t.draggables[e.draggable.id], S$ = () => {
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
  }, r = gt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = gt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
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
      draggingOverWith: f,
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
    const a = Ch(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Nc(n)) {
      const l = n.critical;
      if (!Oi(c, l))
        return t;
      const d = Ep(l, n.dimensions), g = Un(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Oi(c, l.critical))
        return t;
      const d = Ep(l.critical, n.dimensions);
      return o(s, u, Sh(l.result) === s, Un(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Oi(c, l.critical))
        return t;
      const d = Un(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, w$ = {
  updateViewportMaxScroll: mA
};
ch(S$, w$, (e, t, r) => ({
  ...Ch(r),
  ...e,
  ...t
}), {
  context: hh,
  areStatePropsEqual: Oh
})(x$);
var xp;
(function(e) {
  e.event = "event", e.props = "prop";
})(xp || (xp = {}));
var Op = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Op(), "" + Op();
function D$(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ba = { exports: {} }, Si = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp;
function N$() {
  if (Sp) return Si;
  Sp = 1;
  var e = I;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Si.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Si;
}
var wp = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dp;
function C$() {
  return Dp || (Dp = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
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
      var v = p[0].inst, w = p[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = h, r(v) && w({ inst: v });
        },
        [g, b, h]
      ), s(
        function() {
          return r(v) && w({ inst: v }), g(function() {
            r(v) && w({ inst: v });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    wp.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), wp;
}
process.env.NODE_ENV === "production" ? Ba.exports = N$() : Ba.exports = C$();
var Pc = Ba.exports, wi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Np;
function _$() {
  if (Np) return wi;
  Np = 1;
  var e = I, t = Pc;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return wi.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function v(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, x))
                return y = D;
            }
            return y = x;
          }
          if (D = y, o(E, x)) return D;
          var C = d(x);
          return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
        }
        var w = !1, E, y, m = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          m === null ? void 0 : function() {
            return v(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, wi;
}
var Cp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _p;
function I$() {
  return _p || (_p = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = Pc, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Cp.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function v(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, x))
                  return y = D;
              }
              return y = x;
            }
            if (D = y, o(E, x))
              return D;
            var C = d(x);
            return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
          }
          var w = !1, E, y, m = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            m === null ? void 0 : function() {
              return v(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Cp;
}
process.env.NODE_ENV === "production" ? _$() : I$();
function P$(e) {
  e();
}
let _h = P$;
const A$ = (e) => _h = e, $$ = () => _h, Ip = Symbol.for("react-redux-context"), Pp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function T$() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Pp[Ip]) != null ? e : Pp[Ip] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const R$ = /* @__PURE__ */ T$(), V$ = () => {
  throw new Error("uSES not initialized!");
};
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Tr.apply(null, arguments);
}
function Ih(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Fa = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ap;
function M$() {
  if (Ap) return Ce;
  Ap = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case h:
                case g:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function y(m) {
    return E(m) === u;
  }
  return Ce.AsyncMode = c, Ce.ConcurrentMode = u, Ce.ContextConsumer = s, Ce.ContextProvider = a, Ce.Element = t, Ce.ForwardRef = f, Ce.Fragment = o, Ce.Lazy = h, Ce.Memo = g, Ce.Portal = r, Ce.Profiler = i, Ce.StrictMode = n, Ce.Suspense = l, Ce.isAsyncMode = function(m) {
    return y(m) || E(m) === c;
  }, Ce.isConcurrentMode = y, Ce.isContextConsumer = function(m) {
    return E(m) === s;
  }, Ce.isContextProvider = function(m) {
    return E(m) === a;
  }, Ce.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ce.isForwardRef = function(m) {
    return E(m) === f;
  }, Ce.isFragment = function(m) {
    return E(m) === o;
  }, Ce.isLazy = function(m) {
    return E(m) === h;
  }, Ce.isMemo = function(m) {
    return E(m) === g;
  }, Ce.isPortal = function(m) {
    return E(m) === r;
  }, Ce.isProfiler = function(m) {
    return E(m) === i;
  }, Ce.isStrictMode = function(m) {
    return E(m) === n;
  }, Ce.isSuspense = function(m) {
    return E(m) === l;
  }, Ce.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === v || m.$$typeof === w || m.$$typeof === b);
  }, Ce.typeOf = E, Ce;
}
var Fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p;
function L$() {
  return $p || ($p = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === f || O.$$typeof === p || O.$$typeof === v || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
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
                var ce = S && S.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ce;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, D = s, C = a, V = t, A = f, $ = o, P = h, T = g, G = r, k = i, R = n, W = l, F = !1;
    function j(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function U(O) {
      return y(O) === a;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function X(O) {
      return y(O) === f;
    }
    function te(O) {
      return y(O) === o;
    }
    function de(O) {
      return y(O) === h;
    }
    function Y(O) {
      return y(O) === g;
    }
    function J(O) {
      return y(O) === r;
    }
    function L(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Fe.AsyncMode = m, Fe.ConcurrentMode = x, Fe.ContextConsumer = D, Fe.ContextProvider = C, Fe.Element = V, Fe.ForwardRef = A, Fe.Fragment = $, Fe.Lazy = P, Fe.Memo = T, Fe.Portal = G, Fe.Profiler = k, Fe.StrictMode = R, Fe.Suspense = W, Fe.isAsyncMode = j, Fe.isConcurrentMode = z, Fe.isContextConsumer = B, Fe.isContextProvider = U, Fe.isElement = K, Fe.isForwardRef = X, Fe.isFragment = te, Fe.isLazy = de, Fe.isMemo = Y, Fe.isPortal = J, Fe.isProfiler = L, Fe.isStrictMode = Z, Fe.isSuspense = be, Fe.isValidElementType = E, Fe.typeOf = y;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? Fa.exports = M$() : Fa.exports = L$();
var B$ = Fa.exports, Ac = B$, F$ = {
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
}, W$ = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, G$ = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ph = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $c = {};
$c[Ac.ForwardRef] = G$;
$c[Ac.Memo] = Ph;
function Tp(e) {
  return Ac.isMemo(e) ? Ph : $c[e.$$typeof] || F$;
}
var j$ = Object.defineProperty, k$ = Object.getOwnPropertyNames, Rp = Object.getOwnPropertySymbols, z$ = Object.getOwnPropertyDescriptor, H$ = Object.getPrototypeOf, Vp = Object.prototype;
function Ah(e, t, r) {
  if (typeof t != "string") {
    if (Vp) {
      var o = H$(t);
      o && o !== Vp && Ah(e, o, r);
    }
    var n = k$(t);
    Rp && (n = n.concat(Rp(t)));
    for (var i = Tp(e), a = Tp(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!W$[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = z$(t, c);
        try {
          j$(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var U$ = Ah;
const Mp = /* @__PURE__ */ D$(U$);
var Wa = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp;
function q$() {
  if (Lp) return _e;
  Lp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return _e.ContextConsumer = a, _e.ContextProvider = i, _e.Element = e, _e.ForwardRef = c, _e.Fragment = r, _e.Lazy = d, _e.Memo = l, _e.Portal = t, _e.Profiler = n, _e.StrictMode = o, _e.Suspense = u, _e.SuspenseList = f, _e.isAsyncMode = function() {
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
    return b(p) === f;
  }, _e.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, _e.typeOf = b, _e;
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
var Bp;
function K$() {
  return Bp || (Bp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === f || v || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case f:
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
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var x = a, D = i, C = e, V = c, A = r, $ = d, P = l, T = t, G = n, k = o, R = u, W = f, F = !1, j = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function te(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function Y(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function be(S) {
      return m(S) === o;
    }
    function O(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === f;
    }
    We.ContextConsumer = x, We.ContextProvider = D, We.Element = C, We.ForwardRef = V, We.Fragment = A, We.Lazy = $, We.Memo = P, We.Portal = T, We.Profiler = G, We.StrictMode = k, We.Suspense = R, We.SuspenseList = W, We.isAsyncMode = z, We.isConcurrentMode = B, We.isContextConsumer = U, We.isContextProvider = K, We.isElement = X, We.isForwardRef = te, We.isFragment = de, We.isLazy = Y, We.isMemo = J, We.isPortal = L, We.isProfiler = Z, We.isStrictMode = be, We.isSuspense = O, We.isSuspenseList = le, We.isValidElementType = y, We.typeOf = m;
  }()), We;
}
process.env.NODE_ENV === "production" ? Wa.exports = q$() : Wa.exports = K$();
var Fp = Wa.exports;
function Tc(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Di(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Tc(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function Y$(e, t, r) {
  Di(e, "mapStateToProps"), Di(t, "mapDispatchToProps"), Di(r, "mergeProps");
}
const X$ = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function J$(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(w, E) {
    return c = w, u = E, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, f);
    return f = w, E && (d = r(f, l, u)), d;
  }
  function v(w, E) {
    const y = !i(E, u), m = !n(w, c, E, u);
    return c = w, u = E, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : g(w, E);
  };
}
function Z$(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Ih(t, X$);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && Y$(a, s, c), J$(a, s, c, e, i);
}
function Q$(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function eT(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function $h(e, t, r) {
  eT(e) || Tc(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Ga(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Wp(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Th(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Wp(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Wp(s), s = n(i, a)), process.env.NODE_ENV !== "production" && $h(s, o, t), s;
    }, n;
  };
}
function Rc(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function tT(e) {
  return e && typeof e == "object" ? Ga((t) => (
    // @ts-ignore
    Q$(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Th(e, "mapDispatchToProps")
  ) : Rc(e, "mapDispatchToProps") : Ga((t) => ({
    dispatch: t
  }));
}
function rT(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Th(e, "mapStateToProps")
  ) : Rc(e, "mapStateToProps") : Ga(() => ({}));
}
function nT(e, t, r) {
  return Tr({}, r, e, t);
}
function oT(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && $h(i, r, "mergeProps")), i;
    };
  };
}
function iT(e) {
  return e ? typeof e == "function" ? oT(e) : Rc(e, "mergeProps") : () => nT;
}
function aT() {
  const e = $$();
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
const Gp = {
  notify() {
  },
  get: () => []
};
function sT(e, t) {
  let r, o = Gp, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, p(), l());
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
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = aT());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = Gp);
  }
  function d() {
    i || (i = !0, f());
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
const cT = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ja = cT ? N.useLayoutEffect : N.useEffect;
function jp(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ni(e, t) {
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
const lT = ["reactReduxForwardedRef"];
let Rh = V$;
const uT = (e) => {
  Rh = e;
}, dT = [null, null], pT = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function fT(e, t, r) {
  ja(() => e(...t), r);
}
function mT(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function gT(e, t, r, o, n, i, a, s, c, u, f) {
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
    } catch (v) {
      p = v, d = v;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function bT(e, t) {
  return e === t;
}
let kp = !1;
function Vh(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = bT,
  areOwnPropsEqual: i = Ni,
  areStatePropsEqual: a = Ni,
  areMergedPropsEqual: s = Ni,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = R$
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !kp && (kp = !0, Tc('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = rT(e), d = tT(t), g = iT(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Fp.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${pT(b)}`);
    const p = b.displayName || b.name || "Component", v = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: v,
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
    function E(m) {
      const [x, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = Ih(m, lT);
        return [m.context, L, Z];
      }, [m]), V = N.useMemo(() => x && x.Consumer && // @ts-ignore
      Fp.isContextConsumer(/* @__PURE__ */ N.createElement(x.Consumer, null)) ? x : f, [x, f]), A = N.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const T = $ ? m.store : A.store, G = P ? A.getServerState : T.getState, k = N.useMemo(() => Z$(T.dispatch, w), [T]), [R, W] = N.useMemo(() => {
        if (!h) return dT;
        const L = sT(T, $ ? void 0 : A.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, $, A]), F = N.useMemo(() => $ ? A : Tr({}, A, {
        subscription: R
      }), [$, A, R]), j = N.useRef(), z = N.useRef(C), B = N.useRef(), U = N.useRef(!1);
      N.useRef(!1);
      const K = N.useRef(!1), X = N.useRef();
      ja(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const te = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = N.useMemo(() => (L) => R ? gT(
        h,
        T,
        R,
        // @ts-ignore
        k,
        z,
        j,
        U,
        K,
        B,
        W,
        L
      ) : () => {
      }, [R]);
      fT(mT, [z, j, U, C, B, W]);
      let Y;
      try {
        Y = Rh(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          te,
          G ? () => k(G(), C) : te
        );
      } catch (L) {
        throw X.current && (L.message += `
The error may be correlated with this previous error:
${X.current.stack}

`), L;
      }
      ja(() => {
        X.current = void 0, B.current = void 0, j.current = Y;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, Tr({}, Y, {
          ref: D
        }))
      ), [D, b, Y]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(V.Provider, {
        value: F
      }, J) : J, [V, J, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = v, c) {
      const m = N.forwardRef(function(x, D) {
        return /* @__PURE__ */ N.createElement(y, Tr({}, x, {
          reactReduxForwardedRef: D
        }));
      });
      return m.displayName = v, m.WrappedComponent = b, Mp(m, b);
    }
    return Mp(y, b);
  };
}
uT(Pc.useSyncExternalStore);
A$(xr);
function hT(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Mh(e, t) {
  var r = qe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && hT(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function yT(e, t) {
  return Mh(function() {
    return e;
  }, t);
}
var lt = Mh, et = yT, vT = process.env.NODE_ENV === "production", Ci = "Invariant failed";
function zp(e, t) {
  if (vT)
    throw new Error(Ci);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Ci, ": ").concat(r) : Ci;
  throw new Error(o);
}
var Nr = function(e) {
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
}, Lh = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, Hp = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, ET = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, _i = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Vc = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? _i : r, n = e.border, i = n === void 0 ? _i : n, a = e.padding, s = a === void 0 ? _i : a, c = Nr(Lh(t, o)), u = Nr(Hp(t, i)), f = Nr(Hp(u, s));
  return {
    marginBox: c,
    borderBox: Nr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, Pt = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? zp(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : zp()), o;
}, xT = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, OT = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = ET(r, t);
  return Vc({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ka = function(e, t) {
  return t === void 0 && (t = xT()), OT(e, t);
}, Bh = function(e, t) {
  var r = {
    top: Pt(t.marginTop),
    right: Pt(t.marginRight),
    bottom: Pt(t.marginBottom),
    left: Pt(t.marginLeft)
  }, o = {
    top: Pt(t.paddingTop),
    right: Pt(t.paddingRight),
    bottom: Pt(t.paddingBottom),
    left: Pt(t.paddingLeft)
  }, n = {
    top: Pt(t.borderTopWidth),
    right: Pt(t.borderRightWidth),
    bottom: Pt(t.borderBottomWidth),
    left: Pt(t.borderLeftWidth)
  };
  return Vc({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, Fh = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return Bh(t, r);
}, Up = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function ST(e, t) {
  return !!(e === t || Up(e) && Up(t));
}
function wT(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!ST(e[r], t[r]))
      return !1;
  return !0;
}
function bt(e, t) {
  t === void 0 && (t = wT);
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
var DT = function(e) {
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
const NT = process.env.NODE_ENV === "production", CT = /[ \t]{2,}/g, _T = /^[ \t]*/gm, qp = (e) => e.replace(CT, " ").replace(_T, "").trim(), IT = (e) => qp(`
  %c@hello-pangea/dnd

  %c${qp(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), PT = (e) => [IT(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], AT = "__@hello-pangea/dnd-disable-dev-warnings";
function Wh(e, t) {
  NT || typeof window < "u" && window[AT] || console[e](...PT(t));
}
const Xt = Wh.bind(null, "warn"), za = Wh.bind(null, "error");
function $T() {
}
function TT(e, t) {
  return {
    ...e,
    ...t
  };
}
function RT(e, t, r) {
  const o = t.map((n) => {
    const i = TT(r, n.options);
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
const VT = process.env.NODE_ENV === "production", Kp = "Invariant failed";
class vn extends Error {
}
vn.prototype.toString = function() {
  return this.message;
};
function ie(e, t) {
  throw VT ? new vn(Kp) : new vn(`${Kp}: ${t || ""}`);
}
class eG extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = $T, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Xt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof vn && (r.preventDefault(), process.env.NODE_ENV !== "production" && za(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = RT(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof vn) {
      process.env.NODE_ENV !== "production" && za(t.message), this.setState({});
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
const hr = {
  x: 0,
  y: 0
}, MT = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), LT = (e, t) => e.x === t.x && e.y === t.y, BT = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), FT = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var WT = (e, t) => {
  const r = Nr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const GT = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), jT = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, kT = (e, t) => t ? GT(e, t.scroll.diff.displacement) : e, zT = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, HT = (e, t) => t && t.shouldClipSubject ? WT(t.pageMarginBox, e) : Nr(e);
var UT = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = kT(e.marginBox, o), i = zT(n, r, t), a = HT(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
bt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
bt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const qT = bt((e) => Object.values(e)), KT = bt((e) => Object.values(e));
bt((e, t) => KT(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function YT(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
bt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const XT = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, JT = {
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
bt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: FT(e.line, r)
  };
});
var Kn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const ZT = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), QT = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Mc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, En = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, eR = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, ar = `${eR.outOfTheWay}s ${Mc.outOfTheWay}`, Yn = {
  fluid: `opacity ${ar}`,
  snap: `transform ${ar}, opacity ${ar}`,
  drop: (e) => {
    const t = `${e}s ${Mc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${ar}`,
  placeholder: `height ${ar}, width ${ar}, margin ${ar}`
}, Yp = (e) => LT(e, hr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ha = {
  moveTo: Yp,
  drop: (e, t) => {
    const r = Yp(e);
    if (r)
      return t ? `${r} scale(${En.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Gh = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = MT({
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
}, tR = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot find document.documentElement") : ie()), e;
}, rR = () => {
  const e = tR();
  return Gh({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
bt((e) => qT(e).filter((t) => !(!t.isEnabled || !t.frame)));
const jh = "data-rfd", Xp = (() => {
  const e = `${jh}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Jp = {
  contextId: `${jh}-scroll-container-context-id`
}, nR = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ue;
var Zr = nR;
function oR(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var iR = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function kh(e) {
  return e instanceof iR(e).HTMLElement;
}
function aR(e, t) {
  const r = `[${Xp.contextId}="${e}"]`, o = oR(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Xt(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Xp.draggableId) === t);
  return n ? kh(n) ? n : (process.env.NODE_ENV !== "production" && Xt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Xt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var zh = I.createContext(null), sR = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot find document.body") : ie()), e;
};
let cR = 0;
const Hh = {
  separator: "::"
};
function lR(e, t = Hh) {
  return lt(() => `${e}${t.separator}${cR++}`, [t.separator, e]);
}
function uR(e, t = Hh) {
  const r = I.useId();
  return lt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Uh = "useId" in I ? uR : lR, Lc = I.createContext(null);
function qh(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Bc(e, t) {
  qh(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        za(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function dR(e) {
  const t = M(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function Fc(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Zp = {
  dragging: 5e3,
  dropAnimating: 4500
}, pR = (e, t) => t ? Yn.drop(t.duration) : e ? Yn.snap : Yn.fluid, fR = (e, t) => {
  if (e)
    return t ? En.opacity.drop : En.opacity.combining;
}, mR = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function gR(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = mR(e), s = !!n, c = s ? Ha.drop(r, i) : Ha.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: pR(a, n),
    transform: c,
    opacity: fR(i, s),
    zIndex: s ? Zp.dropAnimating : Zp.dragging,
    pointerEvents: "none"
  };
}
function bR(e) {
  return {
    transform: Ha.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function hR(e) {
  return e.type === "DRAGGING" ? gR(e) : bR(e);
}
function yR(e, t, r = hr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = Bh(n, o), a = ka(i, r), s = {
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
function vR(e) {
  const t = Uh("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = lt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = et((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot get dimension when no ref is set") : ie()), yR(r, h, g);
  }, [r, n]), f = lt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  Zr(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Zr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var Wc = I.createContext(null);
function Kh(e) {
  e && kh(e) || (process.env.NODE_ENV !== "production" ? ie(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ie());
}
function ER(e, t, r) {
  Bc(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ie(!1, "Draggable requires a draggableId") : ie(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ie(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ie(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ie(!1, `${o(n)} requires an integer index prop`) : ie(!1)), e.mapped.type !== "DRAGGING" && (Kh(r()), e.isEnabled && (aR(t, n) || (process.env.NODE_ENV !== "production" ? ie(!1, `${o(n)} Unable to find drag handle`) : ie(!1))));
  });
}
function xR(e) {
  qh(() => {
    const t = M(e);
    Bc(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ie(!1, "Draggable isClone prop value changed during component life") : ie(!1));
    }, [e]);
  });
}
function fo(e) {
  const t = Ot(e);
  return t || (process.env.NODE_ENV !== "production" ? ie(!1, "Could not find required context") : ie()), t;
}
function OR(e) {
  e.preventDefault();
}
const SR = (e) => {
  const t = M(null), r = et((x = null) => {
    t.current = x;
  }, []), o = et(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = fo(Lc), {
    type: s,
    droppableId: c
  } = fo(Wc), u = lt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: v
  } = e;
  if (ER(e, n, o), xR(b), !b) {
    const x = lt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    vR(x);
  }
  const w = lt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: OR
  } : null, [n, i, l, d]), E = et((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? v() : tr(v));
  }, [v, p]), y = lt(() => {
    const x = hR(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), m = lt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var wR = SR, Yh = (e, t) => e === t, Xh = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const DR = (e) => e.combine ? e.combine.draggableId : null, NR = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function CR() {
  const e = bt((o, n) => ({
    x: o,
    y: n
  })), t = bt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = bt((o, n, i, a, s = null, c = null, u = null) => ({
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
    if (Fc(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Kn(o.impact), c = NR(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = Xh(c), l = DR(c), d = {
        duration: o.dropDuration,
        curve: Mc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? En.opacity.drop : null,
        scale: l ? En.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function Jh(e = null) {
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
const _R = {
  mapped: {
    type: "SECONDARY",
    offset: hr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Jh(null)
  }
};
function IR() {
  const e = bt((i, a) => ({
    x: i,
    y: a
  })), t = bt(Jh), r = bt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(hr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = YT(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = BT(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Fc(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const PR = () => {
  const e = CR(), t = IR();
  return (r, o) => e(r, o) || t(r, o) || _R;
}, AR = {
  dropAnimationFinished: QT
}, $R = Vh(PR, AR, null, {
  context: zh,
  areStatePropsEqual: Yh
})(wR);
var TR = $R;
function RR(e) {
  return fo(Wc).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(TR, e);
}
const Gc = (e) => (t) => e === t, VR = Gc("scroll"), MR = Gc("auto"), LR = Gc("visible"), Qp = (e, t) => t(e.overflowX) || t(e.overflowY), BR = (e, t) => t(e.overflowX) && t(e.overflowY), Zh = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Qp(r, VR) || Qp(r, MR);
}, FR = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = sR(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ie()), !Zh(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return BR(o, LR) || process.env.NODE_ENV !== "production" && Xt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, jc = (e) => e == null ? null : e === document.body ? FR() ? e : null : e === document.documentElement ? null : Zh(e) ? e : jc(e.parentElement);
var WR = (e) => {
  !e || !jc(e.parentElement) || process.env.NODE_ENV !== "production" && Xt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, Ua = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Qh = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Qh(e.parentElement) : !1;
var GR = (e) => {
  const t = jc(e), r = Qh(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, jR = ({
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
    } = s, g = Gh({
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
          value: hr,
          displacement: hr
        }
      }
    };
  })(), u = n === "vertical" ? XT : JT, f = UT({
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
    subject: f
  };
};
const kR = (e, t) => {
  const r = Fh(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Lh({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Vc({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var zR = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = kR(e, c), f = ka(u, o), l = (() => {
    if (!c)
      return null;
    const d = Fh(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: ka(d, o),
      scroll: Ua(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return jR({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const HR = {
  passive: !1
}, UR = {
  passive: !0
};
var ef = (e) => e.shouldPublishImmediately ? HR : UR;
const Ln = (e) => e && e.env.closestScrollable || null;
function qR(e) {
  const t = M(null), r = fo(Lc), o = Uh("droppable"), {
    registry: n,
    marshal: i
  } = r, a = dR(e), s = lt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = lt(() => bt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ie(!1, "Can only update scroll when dragging") : ie());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = et(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? hr : Ua(y.env.closestScrollable);
  }, []), l = et(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = lt(() => DT(l), [l]), g = et(() => {
    const y = t.current, m = Ln(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? ie(!1, "Could not find scroll options while scrolling") : ie()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = et((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot collect a droppable while a drag is occurring") : ie());
    const x = a.current, D = x.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot collect without a droppable ref") : ie());
    const C = GR(D), V = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = zR({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Jp.contextId, r.contextId), $.addEventListener("scroll", g, ef(V.scrollOptions)), process.env.NODE_ENV !== "production" && WR($)), A;
  }, [r.contextId, s, g, a]), b = et(() => {
    const y = t.current, m = Ln(y);
    return y && m || (process.env.NODE_ENV !== "production" ? ie(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ie()), Ua(m);
  }, []), p = et(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot stop drag when no active drag") : ie());
    const m = Ln(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Jp.contextId), m.removeEventListener("scroll", g, ef(y.scrollOptions)));
  }, [g, d]), v = et((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot scroll when there is no drag") : ie());
    const x = Ln(m);
    x || (process.env.NODE_ENV !== "production" ? ie(!1, "Cannot scroll a droppable with no closest scrollable") : ie()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), w = lt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: v
  }), [p, h, b, v]), E = lt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Zr(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Xt("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Zr(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Zr(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ii() {
}
const KR = {
  width: 0,
  height: 0,
  margin: jT
}, YR = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? KR : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, XR = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = YR({
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
    transition: r !== "none" ? Yn.placeholder : null
  };
}, JR = (e) => {
  const t = M(null), r = et(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = qe(e.animate === "open");
  ue(() => s ? o !== "open" ? (r(), c(!1), Ii) : t.current ? Ii : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Ii, [o, s, r]);
  const u = et((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = XR({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var ZR = I.memo(JR);
function Pi(e) {
  return typeof e == "boolean";
}
function Ai(e, t) {
  t.forEach((r) => r(e));
}
const QR = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ie(!1, "A Droppable requires a droppableId prop") : ie()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ie(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ie());
}, function({
  props: e
}) {
  Pi(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ie(!1, "isDropDisabled must be a boolean") : ie()), Pi(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ie(!1, "isCombineEnabled must be a boolean") : ie()), Pi(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ie(!1, "ignoreContainerClipping must be a boolean") : ie());
}, function({
  getDroppableRef: e
}) {
  Kh(e());
}], eV = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Xt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], tV = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ie(!1, "Must provide a clone render function (renderClone) for virtual lists") : ie());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ie(!1, "Expected virtual list to not have a placeholder") : ie());
}];
function rV(e) {
  Bc(() => {
    Ai(e, QR), e.props.mode === "standard" && Ai(e, eV), e.props.mode === "virtual" && Ai(e, tV);
  });
}
class nV extends I.PureComponent {
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
const oV = (e) => {
  const t = Ot(Lc);
  t || (process.env.NODE_ENV !== "production" ? ie(!1, "Could not find app context") : ie());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: v
  } = e, w = et(() => n.current, []), E = et((P = null) => {
    n.current = P;
  }, []), y = et(() => i.current, []), m = et((P = null) => {
    i.current = P;
  }, []);
  rV({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const x = et(() => {
    o() && p({
      maxScroll: rR()
    });
  }, [o, p]);
  qR({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = lt(() => I.createElement(nV, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: G
  }) => I.createElement(ZR, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: G,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = lt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), V = b ? b.dragging.draggableId : null, A = lt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: V
  }), [s, V, c]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, G = I.createElement(RR, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, R) => T(k, R, P));
    return Er.createPortal(G, v());
  }
  return I.createElement(Wc.Provider, {
    value: A
  }, a(C, h), $());
};
var iV = oV;
function aV() {
  return document.body || (process.env.NODE_ENV !== "production" ? ie(!1, "document.body is not ready") : ie()), document.body;
}
const tf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: aV
}, ey = (e) => {
  let t = {
    ...e
  }, r;
  for (r in tf)
    e[r] === void 0 && (t = {
      ...t,
      [r]: tf[r]
    });
  return t;
}, $i = (e, t) => e === t.droppable.type, rf = (e, t) => t.draggables[e.draggable.id], sV = () => {
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
  }, r = bt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = bt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
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
      draggingOverWith: f,
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
    const a = ey(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Fc(n)) {
      const l = n.critical;
      if (!$i(c, l))
        return t;
      const d = rf(l, n.dimensions), g = Kn(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!$i(c, l.critical))
        return t;
      const d = rf(l.critical, n.dimensions);
      return o(s, u, Xh(l.result) === s, Kn(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!$i(c, l.critical))
        return t;
      const d = Kn(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, cV = {
  updateViewportMaxScroll: ZT
};
Vh(sV, cV, (e, t, r) => ({
  ...ey(r),
  ...e,
  ...t
}), {
  context: zh,
  areStatePropsEqual: Yh
})(iV);
var nf;
(function(e) {
  e.event = "event", e.props = "prop";
})(nf || (nf = {}));
var of = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + of(), "" + of();
function lV(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qa = { exports: {} }, Ti = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af;
function uV() {
  if (af) return Ti;
  af = 1;
  var e = I;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Ti.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Ti;
}
var sf = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf;
function dV() {
  return cf || (cf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
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
      var v = p[0].inst, w = p[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = h, r(v) && w({ inst: v });
        },
        [g, b, h]
      ), s(
        function() {
          return r(v) && w({ inst: v }), g(function() {
            r(v) && w({ inst: v });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    sf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), sf;
}
process.env.NODE_ENV === "production" ? qa.exports = uV() : qa.exports = dV();
var kc = qa.exports, Ri = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function pV() {
  if (lf) return Ri;
  lf = 1;
  var e = I, t = kc;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return Ri.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function v(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, x))
                return y = D;
            }
            return y = x;
          }
          if (D = y, o(E, x)) return D;
          var C = d(x);
          return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
        }
        var w = !1, E, y, m = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          m === null ? void 0 : function() {
            return v(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, Ri;
}
var uf = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var df;
function fV() {
  return df || (df = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = kc, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    uf.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function v(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, x))
                  return y = D;
              }
              return y = x;
            }
            if (D = y, o(E, x))
              return D;
            var C = d(x);
            return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
          }
          var w = !1, E, y, m = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            m === null ? void 0 : function() {
              return v(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), uf;
}
process.env.NODE_ENV === "production" ? pV() : fV();
function mV(e) {
  e();
}
let ty = mV;
const gV = (e) => ty = e, bV = () => ty, pf = Symbol.for("react-redux-context"), ff = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function hV() {
  var e;
  if (!N.createContext) return {};
  const t = (e = ff[pf]) != null ? e : ff[pf] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const yV = /* @__PURE__ */ hV(), vV = () => {
  throw new Error("uSES not initialized!");
};
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Rr.apply(null, arguments);
}
function ry(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var Ka = { exports: {} }, Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf;
function EV() {
  if (mf) return Ie;
  mf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case h:
                case g:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function y(m) {
    return E(m) === u;
  }
  return Ie.AsyncMode = c, Ie.ConcurrentMode = u, Ie.ContextConsumer = s, Ie.ContextProvider = a, Ie.Element = t, Ie.ForwardRef = f, Ie.Fragment = o, Ie.Lazy = h, Ie.Memo = g, Ie.Portal = r, Ie.Profiler = i, Ie.StrictMode = n, Ie.Suspense = l, Ie.isAsyncMode = function(m) {
    return y(m) || E(m) === c;
  }, Ie.isConcurrentMode = y, Ie.isContextConsumer = function(m) {
    return E(m) === s;
  }, Ie.isContextProvider = function(m) {
    return E(m) === a;
  }, Ie.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ie.isForwardRef = function(m) {
    return E(m) === f;
  }, Ie.isFragment = function(m) {
    return E(m) === o;
  }, Ie.isLazy = function(m) {
    return E(m) === h;
  }, Ie.isMemo = function(m) {
    return E(m) === g;
  }, Ie.isPortal = function(m) {
    return E(m) === r;
  }, Ie.isProfiler = function(m) {
    return E(m) === i;
  }, Ie.isStrictMode = function(m) {
    return E(m) === n;
  }, Ie.isSuspense = function(m) {
    return E(m) === l;
  }, Ie.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === v || m.$$typeof === w || m.$$typeof === b);
  }, Ie.typeOf = E, Ie;
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
var gf;
function xV() {
  return gf || (gf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === f || O.$$typeof === p || O.$$typeof === v || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
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
                var ce = S && S.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ce;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, D = s, C = a, V = t, A = f, $ = o, P = h, T = g, G = r, k = i, R = n, W = l, F = !1;
    function j(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function U(O) {
      return y(O) === a;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function X(O) {
      return y(O) === f;
    }
    function te(O) {
      return y(O) === o;
    }
    function de(O) {
      return y(O) === h;
    }
    function Y(O) {
      return y(O) === g;
    }
    function J(O) {
      return y(O) === r;
    }
    function L(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    Ge.AsyncMode = m, Ge.ConcurrentMode = x, Ge.ContextConsumer = D, Ge.ContextProvider = C, Ge.Element = V, Ge.ForwardRef = A, Ge.Fragment = $, Ge.Lazy = P, Ge.Memo = T, Ge.Portal = G, Ge.Profiler = k, Ge.StrictMode = R, Ge.Suspense = W, Ge.isAsyncMode = j, Ge.isConcurrentMode = z, Ge.isContextConsumer = B, Ge.isContextProvider = U, Ge.isElement = K, Ge.isForwardRef = X, Ge.isFragment = te, Ge.isLazy = de, Ge.isMemo = Y, Ge.isPortal = J, Ge.isProfiler = L, Ge.isStrictMode = Z, Ge.isSuspense = be, Ge.isValidElementType = E, Ge.typeOf = y;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? Ka.exports = EV() : Ka.exports = xV();
var OV = Ka.exports, zc = OV, SV = {
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
}, wV = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, DV = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ny = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Hc = {};
Hc[zc.ForwardRef] = DV;
Hc[zc.Memo] = ny;
function bf(e) {
  return zc.isMemo(e) ? ny : Hc[e.$$typeof] || SV;
}
var NV = Object.defineProperty, CV = Object.getOwnPropertyNames, hf = Object.getOwnPropertySymbols, _V = Object.getOwnPropertyDescriptor, IV = Object.getPrototypeOf, yf = Object.prototype;
function oy(e, t, r) {
  if (typeof t != "string") {
    if (yf) {
      var o = IV(t);
      o && o !== yf && oy(e, o, r);
    }
    var n = CV(t);
    hf && (n = n.concat(hf(t)));
    for (var i = bf(e), a = bf(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!wV[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = _V(t, c);
        try {
          NV(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var PV = oy;
const vf = /* @__PURE__ */ lV(PV);
var Ya = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef;
function AV() {
  if (Ef) return Pe;
  Ef = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return Pe.ContextConsumer = a, Pe.ContextProvider = i, Pe.Element = e, Pe.ForwardRef = c, Pe.Fragment = r, Pe.Lazy = d, Pe.Memo = l, Pe.Portal = t, Pe.Profiler = n, Pe.StrictMode = o, Pe.Suspense = u, Pe.SuspenseList = f, Pe.isAsyncMode = function() {
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
    return b(p) === f;
  }, Pe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, Pe.typeOf = b, Pe;
}
var je = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function $V() {
  return xf || (xf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === f || v || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case f:
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
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var x = a, D = i, C = e, V = c, A = r, $ = d, P = l, T = t, G = n, k = o, R = u, W = f, F = !1, j = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function te(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function Y(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function be(S) {
      return m(S) === o;
    }
    function O(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === f;
    }
    je.ContextConsumer = x, je.ContextProvider = D, je.Element = C, je.ForwardRef = V, je.Fragment = A, je.Lazy = $, je.Memo = P, je.Portal = T, je.Profiler = G, je.StrictMode = k, je.Suspense = R, je.SuspenseList = W, je.isAsyncMode = z, je.isConcurrentMode = B, je.isContextConsumer = U, je.isContextProvider = K, je.isElement = X, je.isForwardRef = te, je.isFragment = de, je.isLazy = Y, je.isMemo = J, je.isPortal = L, je.isProfiler = Z, je.isStrictMode = be, je.isSuspense = O, je.isSuspenseList = le, je.isValidElementType = y, je.typeOf = m;
  }()), je;
}
process.env.NODE_ENV === "production" ? Ya.exports = AV() : Ya.exports = $V();
var Of = Ya.exports;
function Uc(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Vi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || Uc(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function TV(e, t, r) {
  Vi(e, "mapStateToProps"), Vi(t, "mapDispatchToProps"), Vi(r, "mergeProps");
}
const RV = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function VV(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(w, E) {
    return c = w, u = E, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, f);
    return f = w, E && (d = r(f, l, u)), d;
  }
  function v(w, E) {
    const y = !i(E, u), m = !n(w, c, E, u);
    return c = w, u = E, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : g(w, E);
  };
}
function MV(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = ry(t, RV);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && TV(a, s, c), VV(a, s, c, e, i);
}
function LV(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function BV(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function iy(e, t, r) {
  BV(e) || Uc(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function Xa(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Sf(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ay(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = Sf(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = Sf(s), s = n(i, a)), process.env.NODE_ENV !== "production" && iy(s, o, t), s;
    }, n;
  };
}
function qc(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function FV(e) {
  return e && typeof e == "object" ? Xa((t) => (
    // @ts-ignore
    LV(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ay(e, "mapDispatchToProps")
  ) : qc(e, "mapDispatchToProps") : Xa((t) => ({
    dispatch: t
  }));
}
function WV(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ay(e, "mapStateToProps")
  ) : qc(e, "mapStateToProps") : Xa(() => ({}));
}
function GV(e, t, r) {
  return Rr({}, r, e, t);
}
function jV(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && iy(i, r, "mergeProps")), i;
    };
  };
}
function kV(e) {
  return e ? typeof e == "function" ? jV(e) : qc(e, "mergeProps") : () => GV;
}
function zV() {
  const e = bV();
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
const wf = {
  notify() {
  },
  get: () => []
};
function HV(e, t) {
  let r, o = wf, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, p(), l());
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
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = zV());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = wf);
  }
  function d() {
    i || (i = !0, f());
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
const UV = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ja = UV ? N.useLayoutEffect : N.useEffect;
function Df(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Mi(e, t) {
  if (Df(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Df(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const qV = ["reactReduxForwardedRef"];
let sy = vV;
const KV = (e) => {
  sy = e;
}, YV = [null, null], XV = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function JV(e, t, r) {
  Ja(() => e(...t), r);
}
function ZV(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function QV(e, t, r, o, n, i, a, s, c, u, f) {
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
    } catch (v) {
      p = v, d = v;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function eM(e, t) {
  return e === t;
}
let Nf = !1;
function cy(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = eM,
  areOwnPropsEqual: i = Mi,
  areStatePropsEqual: a = Mi,
  areMergedPropsEqual: s = Mi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = yV
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !Nf && (Nf = !0, Uc('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = WV(e), d = FV(t), g = kV(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !Of.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${XV(b)}`);
    const p = b.displayName || b.name || "Component", v = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: v,
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
    function E(m) {
      const [x, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = ry(m, qV);
        return [m.context, L, Z];
      }, [m]), V = N.useMemo(() => x && x.Consumer && // @ts-ignore
      Of.isContextConsumer(/* @__PURE__ */ N.createElement(x.Consumer, null)) ? x : f, [x, f]), A = N.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const T = $ ? m.store : A.store, G = P ? A.getServerState : T.getState, k = N.useMemo(() => MV(T.dispatch, w), [T]), [R, W] = N.useMemo(() => {
        if (!h) return YV;
        const L = HV(T, $ ? void 0 : A.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, $, A]), F = N.useMemo(() => $ ? A : Rr({}, A, {
        subscription: R
      }), [$, A, R]), j = N.useRef(), z = N.useRef(C), B = N.useRef(), U = N.useRef(!1);
      N.useRef(!1);
      const K = N.useRef(!1), X = N.useRef();
      Ja(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const te = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = N.useMemo(() => (L) => R ? QV(
        h,
        T,
        R,
        // @ts-ignore
        k,
        z,
        j,
        U,
        K,
        B,
        W,
        L
      ) : () => {
      }, [R]);
      JV(ZV, [z, j, U, C, B, W]);
      let Y;
      try {
        Y = sy(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          te,
          G ? () => k(G(), C) : te
        );
      } catch (L) {
        throw X.current && (L.message += `
The error may be correlated with this previous error:
${X.current.stack}

`), L;
      }
      Ja(() => {
        X.current = void 0, B.current = void 0, j.current = Y;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, Rr({}, Y, {
          ref: D
        }))
      ), [D, b, Y]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(V.Provider, {
        value: F
      }, J) : J, [V, J, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = v, c) {
      const m = N.forwardRef(function(x, D) {
        return /* @__PURE__ */ N.createElement(y, Rr({}, x, {
          reactReduxForwardedRef: D
        }));
      });
      return m.displayName = v, m.WrappedComponent = b, vf(m, b);
    }
    return vf(y, b);
  };
}
KV(kc.useSyncExternalStore);
gV(xr);
function tM(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function ly(e, t) {
  var r = qe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && tM(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function rM(e, t) {
  return ly(function() {
    return e;
  }, t);
}
var ut = ly, tt = rM, nM = process.env.NODE_ENV === "production", Li = "Invariant failed";
function Cf(e, t) {
  if (nM)
    throw new Error(Li);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(Li, ": ").concat(r) : Li;
  throw new Error(o);
}
var Cr = function(e) {
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
}, uy = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, _f = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, oM = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Bi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Kc = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Bi : r, n = e.border, i = n === void 0 ? Bi : n, a = e.padding, s = a === void 0 ? Bi : a, c = Cr(uy(t, o)), u = Cr(_f(t, i)), f = Cr(_f(u, s));
  return {
    marginBox: c,
    borderBox: Cr(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, At = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Cf(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : Cf()), o;
}, iM = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, aM = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = oM(r, t);
  return Kc({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, Za = function(e, t) {
  return t === void 0 && (t = iM()), aM(e, t);
}, dy = function(e, t) {
  var r = {
    top: At(t.marginTop),
    right: At(t.marginRight),
    bottom: At(t.marginBottom),
    left: At(t.marginLeft)
  }, o = {
    top: At(t.paddingTop),
    right: At(t.paddingRight),
    bottom: At(t.paddingBottom),
    left: At(t.paddingLeft)
  }, n = {
    top: At(t.borderTopWidth),
    right: At(t.borderRightWidth),
    bottom: At(t.borderBottomWidth),
    left: At(t.borderLeftWidth)
  };
  return Kc({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, py = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return dy(t, r);
}, If = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function sM(e, t) {
  return !!(e === t || If(e) && If(t));
}
function cM(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!sM(e[r], t[r]))
      return !1;
  return !0;
}
function ht(e, t) {
  t === void 0 && (t = cM);
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
var lM = function(e) {
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
const uM = process.env.NODE_ENV === "production", dM = /[ \t]{2,}/g, pM = /^[ \t]*/gm, Pf = (e) => e.replace(dM, " ").replace(pM, "").trim(), fM = (e) => Pf(`
  %c@hello-pangea/dnd

  %c${Pf(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), mM = (e) => [fM(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], gM = "__@hello-pangea/dnd-disable-dev-warnings";
function fy(e, t) {
  uM || typeof window < "u" && window[gM] || console[e](...mM(t));
}
const Jt = fy.bind(null, "warn"), Qa = fy.bind(null, "error");
function bM() {
}
function hM(e, t) {
  return {
    ...e,
    ...t
  };
}
function yM(e, t, r) {
  const o = t.map((n) => {
    const i = hM(r, n.options);
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
const vM = process.env.NODE_ENV === "production", Af = "Invariant failed";
class xn extends Error {
}
xn.prototype.toString = function() {
  return this.message;
};
function ae(e, t) {
  throw vM ? new xn(Af) : new xn(`${Af}: ${t || ""}`);
}
class tG extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = bM, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Jt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof xn && (r.preventDefault(), process.env.NODE_ENV !== "production" && Qa(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = yM(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof xn) {
      process.env.NODE_ENV !== "production" && Qa(t.message), this.setState({});
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
const yr = {
  x: 0,
  y: 0
}, EM = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), xM = (e, t) => e.x === t.x && e.y === t.y, OM = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), SM = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var wM = (e, t) => {
  const r = Cr({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const DM = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), NM = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, CM = (e, t) => t ? DM(e, t.scroll.diff.displacement) : e, _M = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, IM = (e, t) => t && t.shouldClipSubject ? wM(t.pageMarginBox, e) : Cr(e);
var PM = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = CM(e.marginBox, o), i = _M(n, r, t), a = IM(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
ht((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
ht((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const AM = ht((e) => Object.values(e)), $M = ht((e) => Object.values(e));
ht((e, t) => $M(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function TM(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
ht((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const RM = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, VM = {
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
ht(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: SM(e.line, r)
  };
});
var Xn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const MM = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), LM = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), Yc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, On = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, BM = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, sr = `${BM.outOfTheWay}s ${Yc.outOfTheWay}`, Jn = {
  fluid: `opacity ${sr}`,
  snap: `transform ${sr}, opacity ${sr}`,
  drop: (e) => {
    const t = `${e}s ${Yc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${sr}`,
  placeholder: `height ${sr}, width ${sr}, margin ${sr}`
}, $f = (e) => xM(e, yr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, es = {
  moveTo: $f,
  drop: (e, t) => {
    const r = $f(e);
    if (r)
      return t ? `${r} scale(${On.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var my = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = EM({
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
}, FM = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.documentElement") : ae()), e;
}, WM = () => {
  const e = FM();
  return my({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
ht((e) => AM(e).filter((t) => !(!t.isEnabled || !t.frame)));
const gy = "data-rfd", Tf = (() => {
  const e = `${gy}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Rf = {
  contextId: `${gy}-scroll-container-context-id`
}, GM = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ue;
var Qr = GM;
function jM(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var kM = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function by(e) {
  return e instanceof kM(e).HTMLElement;
}
function zM(e, t) {
  const r = `[${Tf.contextId}="${e}"]`, o = jM(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Jt(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(Tf.draggableId) === t);
  return n ? by(n) ? n : (process.env.NODE_ENV !== "production" && Jt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Jt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var hy = I.createContext(null), HM = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot find document.body") : ae()), e;
};
let UM = 0;
const yy = {
  separator: "::"
};
function qM(e, t = yy) {
  return ut(() => `${e}${t.separator}${UM++}`, [t.separator, e]);
}
function KM(e, t = yy) {
  const r = I.useId();
  return ut(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var vy = "useId" in I ? KM : qM, Xc = I.createContext(null);
function Ey(e) {
  process.env.NODE_ENV !== "production" && e();
}
function Jc(e, t) {
  Ey(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        Qa(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function YM(e) {
  const t = M(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function Zc(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const Vf = {
  dragging: 5e3,
  dropAnimating: 4500
}, XM = (e, t) => t ? Jn.drop(t.duration) : e ? Jn.snap : Jn.fluid, JM = (e, t) => {
  if (e)
    return t ? On.opacity.drop : On.opacity.combining;
}, ZM = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function QM(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = ZM(e), s = !!n, c = s ? es.drop(r, i) : es.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: XM(a, n),
    transform: c,
    opacity: JM(i, s),
    zIndex: s ? Vf.dropAnimating : Vf.dragging,
    pointerEvents: "none"
  };
}
function eL(e) {
  return {
    transform: es.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function tL(e) {
  return e.type === "DRAGGING" ? QM(e) : eL(e);
}
function rL(e, t, r = yr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = dy(n, o), a = Za(i, r), s = {
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
function nL(e) {
  const t = vy("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = ut(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = tt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot get dimension when no ref is set") : ae()), rL(r, h, g);
  }, [r, n]), f = ut(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  Qr(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), Qr(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var Qc = I.createContext(null);
function xy(e) {
  e && by(e) || (process.env.NODE_ENV !== "production" ? ae(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : ae());
}
function oL(e, t, r) {
  Jc(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable requires a draggableId") : ae(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : ae(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} requires an integer index prop`) : ae(!1)), e.mapped.type !== "DRAGGING" && (xy(r()), e.isEnabled && (zM(t, n) || (process.env.NODE_ENV !== "production" ? ae(!1, `${o(n)} Unable to find drag handle`) : ae(!1))));
  });
}
function iL(e) {
  Ey(() => {
    const t = M(e);
    Jc(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Draggable isClone prop value changed during component life") : ae(!1));
    }, [e]);
  });
}
function mo(e) {
  const t = Ot(e);
  return t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find required context") : ae()), t;
}
function aL(e) {
  e.preventDefault();
}
const sL = (e) => {
  const t = M(null), r = tt((x = null) => {
    t.current = x;
  }, []), o = tt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = mo(Xc), {
    type: s,
    droppableId: c
  } = mo(Qc), u = ut(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: v
  } = e;
  if (oL(e, n, o), iL(b), !b) {
    const x = ut(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    nL(x);
  }
  const w = ut(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: aL
  } : null, [n, i, l, d]), E = tt((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? v() : tr(v));
  }, [v, p]), y = ut(() => {
    const x = tL(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), m = ut(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var cL = sL, Oy = (e, t) => e === t, Sy = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const lL = (e) => e.combine ? e.combine.draggableId : null, uL = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function dL() {
  const e = ht((o, n) => ({
    x: o,
    y: n
  })), t = ht((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = ht((o, n, i, a, s = null, c = null, u = null) => ({
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
    if (Zc(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Xn(o.impact), c = uL(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = Sy(c), l = lL(c), d = {
        duration: o.dropDuration,
        curve: Yc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? On.opacity.drop : null,
        scale: l ? On.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function wy(e = null) {
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
const pL = {
  mapped: {
    type: "SECONDARY",
    offset: yr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: wy(null)
  }
};
function fL() {
  const e = ht((i, a) => ({
    x: i,
    y: a
  })), t = ht(wy), r = ht((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(yr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = TM(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = OM(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (Zc(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const mL = () => {
  const e = dL(), t = fL();
  return (r, o) => e(r, o) || t(r, o) || pL;
}, gL = {
  dropAnimationFinished: LM
}, bL = cy(mL, gL, null, {
  context: hy,
  areStatePropsEqual: Oy
})(cL);
var hL = bL;
function yL(e) {
  return mo(Qc).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(hL, e);
}
const el = (e) => (t) => e === t, vL = el("scroll"), EL = el("auto"), xL = el("visible"), Mf = (e, t) => t(e.overflowX) || t(e.overflowY), OL = (e, t) => t(e.overflowX) && t(e.overflowY), Dy = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Mf(r, vL) || Mf(r, EL);
}, SL = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = HM(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, ae()), !Dy(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return OL(o, xL) || process.env.NODE_ENV !== "production" && Jt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, tl = (e) => e == null ? null : e === document.body ? SL() ? e : null : e === document.documentElement ? null : Dy(e) ? e : tl(e.parentElement);
var wL = (e) => {
  !e || !tl(e.parentElement) || process.env.NODE_ENV !== "production" && Jt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, ts = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Ny = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Ny(e.parentElement) : !1;
var DL = (e) => {
  const t = tl(e), r = Ny(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, NL = ({
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
    } = s, g = my({
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
          value: yr,
          displacement: yr
        }
      }
    };
  })(), u = n === "vertical" ? RM : VM, f = PM({
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
    subject: f
  };
};
const CL = (e, t) => {
  const r = py(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = uy({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return Kc({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var _L = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = CL(e, c), f = Za(u, o), l = (() => {
    if (!c)
      return null;
    const d = py(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: Za(d, o),
      scroll: ts(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return NL({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const IL = {
  passive: !1
}, PL = {
  passive: !0
};
var Lf = (e) => e.shouldPublishImmediately ? IL : PL;
const Bn = (e) => e && e.env.closestScrollable || null;
function AL(e) {
  const t = M(null), r = mo(Xc), o = vy("droppable"), {
    registry: n,
    marshal: i
  } = r, a = YM(e), s = ut(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = ut(() => ht((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only update scroll when dragging") : ae());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = tt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? yr : ts(y.env.closestScrollable);
  }, []), l = tt(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = ut(() => lM(l), [l]), g = tt(() => {
    const y = t.current, m = Bn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find scroll options while scrolling") : ae()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = tt((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect a droppable while a drag is occurring") : ae());
    const x = a.current, D = x.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot collect without a droppable ref") : ae());
    const C = DL(D), V = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = _L({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(Rf.contextId, r.contextId), $.addEventListener("scroll", g, Lf(V.scrollOptions)), process.env.NODE_ENV !== "production" && wL($)), A;
  }, [r.contextId, s, g, a]), b = tt(() => {
    const y = t.current, m = Bn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? ae(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : ae()), ts(m);
  }, []), p = tt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot stop drag when no active drag") : ae());
    const m = Bn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(Rf.contextId), m.removeEventListener("scroll", g, Lf(y.scrollOptions)));
  }, [g, d]), v = tt((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll when there is no drag") : ae());
    const x = Bn(m);
    x || (process.env.NODE_ENV !== "production" ? ae(!1, "Cannot scroll a droppable with no closest scrollable") : ae()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), w = ut(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: v
  }), [p, h, b, v]), E = ut(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  Qr(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Jt("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), Qr(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Qr(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Fi() {
}
const $L = {
  width: 0,
  height: 0,
  margin: NM
}, TL = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? $L : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, RL = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = TL({
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
    transition: r !== "none" ? Jn.placeholder : null
  };
}, VL = (e) => {
  const t = M(null), r = tt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = qe(e.animate === "open");
  ue(() => s ? o !== "open" ? (r(), c(!1), Fi) : t.current ? Fi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Fi, [o, s, r]);
  const u = tt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = RL({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var ML = I.memo(VL);
function Wi(e) {
  return typeof e == "boolean";
}
function Gi(e, t) {
  t.forEach((r) => r(e));
}
const LL = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? ae(!1, "A Droppable requires a droppableId prop") : ae()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? ae(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : ae());
}, function({
  props: e
}) {
  Wi(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isDropDisabled must be a boolean") : ae()), Wi(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? ae(!1, "isCombineEnabled must be a boolean") : ae()), Wi(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? ae(!1, "ignoreContainerClipping must be a boolean") : ae());
}, function({
  getDroppableRef: e
}) {
  xy(e());
}], BL = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Jt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], FL = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? ae(!1, "Must provide a clone render function (renderClone) for virtual lists") : ae());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? ae(!1, "Expected virtual list to not have a placeholder") : ae());
}];
function WL(e) {
  Jc(() => {
    Gi(e, LL), e.props.mode === "standard" && Gi(e, BL), e.props.mode === "virtual" && Gi(e, FL);
  });
}
class GL extends I.PureComponent {
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
const jL = (e) => {
  const t = Ot(Xc);
  t || (process.env.NODE_ENV !== "production" ? ae(!1, "Could not find app context") : ae());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: v
  } = e, w = tt(() => n.current, []), E = tt((P = null) => {
    n.current = P;
  }, []), y = tt(() => i.current, []), m = tt((P = null) => {
    i.current = P;
  }, []);
  WL({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const x = tt(() => {
    o() && p({
      maxScroll: WM()
    });
  }, [o, p]);
  AL({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = ut(() => I.createElement(GL, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: G
  }) => I.createElement(ML, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: G,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = ut(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), V = b ? b.dragging.draggableId : null, A = ut(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: V
  }), [s, V, c]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, G = I.createElement(yL, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, R) => T(k, R, P));
    return Er.createPortal(G, v());
  }
  return I.createElement(Qc.Provider, {
    value: A
  }, a(C, h), $());
};
var kL = jL;
function zL() {
  return document.body || (process.env.NODE_ENV !== "production" ? ae(!1, "document.body is not ready") : ae()), document.body;
}
const Bf = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: zL
}, Cy = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Bf)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Bf[r]
    });
  return t;
}, ji = (e, t) => e === t.droppable.type, Ff = (e, t) => t.draggables[e.draggable.id], HL = () => {
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
  }, r = ht((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = ht((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
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
      draggingOverWith: f,
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
    const a = Cy(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (Zc(n)) {
      const l = n.critical;
      if (!ji(c, l))
        return t;
      const d = Ff(l, n.dimensions), g = Xn(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!ji(c, l.critical))
        return t;
      const d = Ff(l.critical, n.dimensions);
      return o(s, u, Sy(l.result) === s, Xn(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!ji(c, l.critical))
        return t;
      const d = Xn(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, UL = {
  updateViewportMaxScroll: MM
};
cy(HL, UL, (e, t, r) => ({
  ...Cy(r),
  ...e,
  ...t
}), {
  context: hy,
  areStatePropsEqual: Oy
})(kL);
var Wf;
(function(e) {
  e.event = "event", e.props = "prop";
})(Wf || (Wf = {}));
var Gf = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
"" + Gf(), "" + Gf();
function qL(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rs = { exports: {} }, ki = {};
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
function KL() {
  if (jf) return ki;
  jf = 1;
  var e = I;
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
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return ki.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ki;
}
var kf = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf;
function YL() {
  return zf || (zf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g, h) {
      return g === h && (g !== 0 || 1 / g === 1 / h) || g !== g && h !== h;
    }
    function t(g, h) {
      f || n.startTransition === void 0 || (f = !0, console.error(
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
      var v = p[0].inst, w = p[1];
      return c(
        function() {
          v.value = b, v.getSnapshot = h, r(v) && w({ inst: v });
        },
        [g, b, h]
      ), s(
        function() {
          return r(v) && w({ inst: v }), g(function() {
            r(v) && w({ inst: v });
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
    var n = I, i = typeof Object.is == "function" ? Object.is : e, a = n.useState, s = n.useEffect, c = n.useLayoutEffect, u = n.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? o : t;
    kf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), kf;
}
process.env.NODE_ENV === "production" ? rs.exports = KL() : rs.exports = YL();
var rl = rs.exports, zi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hf;
function XL() {
  if (Hf) return zi;
  Hf = 1;
  var e = I, t = rl;
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return zi.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
    var h = i(null);
    if (h.current === null) {
      var b = { hasValue: !1, value: null };
      h.current = b;
    } else b = h.current;
    h = s(
      function() {
        function v(x) {
          if (!w) {
            if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
              var D = b.value;
              if (g(D, x))
                return y = D;
            }
            return y = x;
          }
          if (D = y, o(E, x)) return D;
          var C = d(x);
          return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
        }
        var w = !1, E, y, m = l === void 0 ? null : l;
        return [
          function() {
            return v(f());
          },
          m === null ? void 0 : function() {
            return v(m());
          }
        ];
      },
      [f, l, d, g]
    );
    var p = n(u, h[0], h[1]);
    return a(
      function() {
        b.hasValue = !0, b.value = p;
      },
      [p]
    ), c(p), p;
  }, zi;
}
var Uf = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qf;
function JL() {
  return qf || (qf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = I, r = rl, o = typeof Object.is == "function" ? Object.is : e, n = r.useSyncExternalStore, i = t.useRef, a = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    Uf.useSyncExternalStoreWithSelector = function(u, f, l, d, g) {
      var h = i(null);
      if (h.current === null) {
        var b = { hasValue: !1, value: null };
        h.current = b;
      } else b = h.current;
      h = s(
        function() {
          function v(x) {
            if (!w) {
              if (w = !0, E = x, x = d(x), g !== void 0 && b.hasValue) {
                var D = b.value;
                if (g(D, x))
                  return y = D;
              }
              return y = x;
            }
            if (D = y, o(E, x))
              return D;
            var C = d(x);
            return g !== void 0 && g(D, C) ? (E = x, D) : (E = x, y = C);
          }
          var w = !1, E, y, m = l === void 0 ? null : l;
          return [
            function() {
              return v(f());
            },
            m === null ? void 0 : function() {
              return v(m());
            }
          ];
        },
        [f, l, d, g]
      );
      var p = n(u, h[0], h[1]);
      return a(
        function() {
          b.hasValue = !0, b.value = p;
        },
        [p]
      ), c(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Uf;
}
process.env.NODE_ENV === "production" ? XL() : JL();
function ZL(e) {
  e();
}
let _y = ZL;
const QL = (e) => _y = e, eB = () => _y, Kf = Symbol.for("react-redux-context"), Yf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function tB() {
  var e;
  if (!N.createContext) return {};
  const t = (e = Yf[Kf]) != null ? e : Yf[Kf] = /* @__PURE__ */ new Map();
  let r = t.get(N.createContext);
  return r || (r = N.createContext(null), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), t.set(N.createContext, r)), r;
}
const rB = /* @__PURE__ */ tB(), nB = () => {
  throw new Error("uSES not initialized!");
};
function Vr() {
  return Vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Vr.apply(null, arguments);
}
function Iy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.includes(o)) continue;
    r[o] = e[o];
  }
  return r;
}
var ns = { exports: {} }, Ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xf;
function oB() {
  if (Xf) return Ae;
  Xf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case o:
            case i:
            case n:
            case l:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case f:
                case h:
                case g:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case r:
          return x;
      }
    }
  }
  function y(m) {
    return E(m) === u;
  }
  return Ae.AsyncMode = c, Ae.ConcurrentMode = u, Ae.ContextConsumer = s, Ae.ContextProvider = a, Ae.Element = t, Ae.ForwardRef = f, Ae.Fragment = o, Ae.Lazy = h, Ae.Memo = g, Ae.Portal = r, Ae.Profiler = i, Ae.StrictMode = n, Ae.Suspense = l, Ae.isAsyncMode = function(m) {
    return y(m) || E(m) === c;
  }, Ae.isConcurrentMode = y, Ae.isContextConsumer = function(m) {
    return E(m) === s;
  }, Ae.isContextProvider = function(m) {
    return E(m) === a;
  }, Ae.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ae.isForwardRef = function(m) {
    return E(m) === f;
  }, Ae.isFragment = function(m) {
    return E(m) === o;
  }, Ae.isLazy = function(m) {
    return E(m) === h;
  }, Ae.isMemo = function(m) {
    return E(m) === g;
  }, Ae.isPortal = function(m) {
    return E(m) === r;
  }, Ae.isProfiler = function(m) {
    return E(m) === i;
  }, Ae.isStrictMode = function(m) {
    return E(m) === n;
  }, Ae.isSuspense = function(m) {
    return E(m) === l;
  }, Ae.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === o || m === u || m === i || m === n || m === l || m === d || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === g || m.$$typeof === a || m.$$typeof === s || m.$$typeof === f || m.$$typeof === p || m.$$typeof === v || m.$$typeof === w || m.$$typeof === b);
  }, Ae.typeOf = E, Ae;
}
var ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jf;
function iB() {
  return Jf || (Jf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === o || O === u || O === i || O === n || O === l || O === d || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === g || O.$$typeof === a || O.$$typeof === s || O.$$typeof === f || O.$$typeof === p || O.$$typeof === v || O.$$typeof === w || O.$$typeof === b);
    }
    function y(O) {
      if (typeof O == "object" && O !== null) {
        var le = O.$$typeof;
        switch (le) {
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
                var ce = S && S.$$typeof;
                switch (ce) {
                  case s:
                  case f:
                  case h:
                  case g:
                  case a:
                    return ce;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var m = c, x = u, D = s, C = a, V = t, A = f, $ = o, P = h, T = g, G = r, k = i, R = n, W = l, F = !1;
    function j(O) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(O) || y(O) === c;
    }
    function z(O) {
      return y(O) === u;
    }
    function B(O) {
      return y(O) === s;
    }
    function U(O) {
      return y(O) === a;
    }
    function K(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function X(O) {
      return y(O) === f;
    }
    function te(O) {
      return y(O) === o;
    }
    function de(O) {
      return y(O) === h;
    }
    function Y(O) {
      return y(O) === g;
    }
    function J(O) {
      return y(O) === r;
    }
    function L(O) {
      return y(O) === i;
    }
    function Z(O) {
      return y(O) === n;
    }
    function be(O) {
      return y(O) === l;
    }
    ke.AsyncMode = m, ke.ConcurrentMode = x, ke.ContextConsumer = D, ke.ContextProvider = C, ke.Element = V, ke.ForwardRef = A, ke.Fragment = $, ke.Lazy = P, ke.Memo = T, ke.Portal = G, ke.Profiler = k, ke.StrictMode = R, ke.Suspense = W, ke.isAsyncMode = j, ke.isConcurrentMode = z, ke.isContextConsumer = B, ke.isContextProvider = U, ke.isElement = K, ke.isForwardRef = X, ke.isFragment = te, ke.isLazy = de, ke.isMemo = Y, ke.isPortal = J, ke.isProfiler = L, ke.isStrictMode = Z, ke.isSuspense = be, ke.isValidElementType = E, ke.typeOf = y;
  }()), ke;
}
process.env.NODE_ENV === "production" ? ns.exports = oB() : ns.exports = iB();
var aB = ns.exports, nl = aB, sB = {
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
}, cB = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, lB = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Py = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ol = {};
ol[nl.ForwardRef] = lB;
ol[nl.Memo] = Py;
function Zf(e) {
  return nl.isMemo(e) ? Py : ol[e.$$typeof] || sB;
}
var uB = Object.defineProperty, dB = Object.getOwnPropertyNames, Qf = Object.getOwnPropertySymbols, pB = Object.getOwnPropertyDescriptor, fB = Object.getPrototypeOf, em = Object.prototype;
function Ay(e, t, r) {
  if (typeof t != "string") {
    if (em) {
      var o = fB(t);
      o && o !== em && Ay(e, o, r);
    }
    var n = dB(t);
    Qf && (n = n.concat(Qf(t)));
    for (var i = Zf(e), a = Zf(t), s = 0; s < n.length; ++s) {
      var c = n[s];
      if (!cB[c] && !(r && r[c]) && !(a && a[c]) && !(i && i[c])) {
        var u = pB(t, c);
        try {
          uB(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var mB = Ay;
const tm = /* @__PURE__ */ qL(mB);
var os = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function gB() {
  if (rm) return $e;
  rm = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var v = p.$$typeof;
      switch (v) {
        case e:
          switch (p = p.type, p) {
            case r:
            case n:
            case o:
            case u:
            case f:
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
                  return v;
              }
          }
        case t:
          return v;
      }
    }
  }
  return $e.ContextConsumer = a, $e.ContextProvider = i, $e.Element = e, $e.ForwardRef = c, $e.Fragment = r, $e.Lazy = d, $e.Memo = l, $e.Portal = t, $e.Profiler = n, $e.StrictMode = o, $e.Suspense = u, $e.SuspenseList = f, $e.isAsyncMode = function() {
    return !1;
  }, $e.isConcurrentMode = function() {
    return !1;
  }, $e.isContextConsumer = function(p) {
    return b(p) === a;
  }, $e.isContextProvider = function(p) {
    return b(p) === i;
  }, $e.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, $e.isForwardRef = function(p) {
    return b(p) === c;
  }, $e.isFragment = function(p) {
    return b(p) === r;
  }, $e.isLazy = function(p) {
    return b(p) === d;
  }, $e.isMemo = function(p) {
    return b(p) === l;
  }, $e.isPortal = function(p) {
    return b(p) === t;
  }, $e.isProfiler = function(p) {
    return b(p) === n;
  }, $e.isStrictMode = function(p) {
    return b(p) === o;
  }, $e.isSuspense = function(p) {
    return b(p) === u;
  }, $e.isSuspenseList = function(p) {
    return b(p) === f;
  }, $e.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === n || p === o || p === u || p === f || p === g || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, $e.typeOf = b, $e;
}
var ze = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm;
function bB() {
  return nm || (nm = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = !1, b = !1, p = !1, v = !1, w = !1, E;
    E = Symbol.for("react.module.reference");
    function y(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === n || w || S === o || S === u || S === f || v || S === g || h || b || p || typeof S == "object" && S !== null && (S.$$typeof === d || S.$$typeof === l || S.$$typeof === i || S.$$typeof === a || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === E || S.getModuleId !== void 0));
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ce = S.$$typeof;
        switch (ce) {
          case e:
            var me = S.type;
            switch (me) {
              case r:
              case n:
              case o:
              case u:
              case f:
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
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var x = a, D = i, C = e, V = c, A = r, $ = d, P = l, T = t, G = n, k = o, R = u, W = f, F = !1, j = !1;
    function z(S) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(S) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(S) {
      return m(S) === a;
    }
    function K(S) {
      return m(S) === i;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function te(S) {
      return m(S) === c;
    }
    function de(S) {
      return m(S) === r;
    }
    function Y(S) {
      return m(S) === d;
    }
    function J(S) {
      return m(S) === l;
    }
    function L(S) {
      return m(S) === t;
    }
    function Z(S) {
      return m(S) === n;
    }
    function be(S) {
      return m(S) === o;
    }
    function O(S) {
      return m(S) === u;
    }
    function le(S) {
      return m(S) === f;
    }
    ze.ContextConsumer = x, ze.ContextProvider = D, ze.Element = C, ze.ForwardRef = V, ze.Fragment = A, ze.Lazy = $, ze.Memo = P, ze.Portal = T, ze.Profiler = G, ze.StrictMode = k, ze.Suspense = R, ze.SuspenseList = W, ze.isAsyncMode = z, ze.isConcurrentMode = B, ze.isContextConsumer = U, ze.isContextProvider = K, ze.isElement = X, ze.isForwardRef = te, ze.isFragment = de, ze.isLazy = Y, ze.isMemo = J, ze.isPortal = L, ze.isProfiler = Z, ze.isStrictMode = be, ze.isSuspense = O, ze.isSuspenseList = le, ze.isValidElementType = y, ze.typeOf = m;
  }()), ze;
}
process.env.NODE_ENV === "production" ? os.exports = gB() : os.exports = bB();
var om = os.exports;
function il(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Hi(e, t) {
  if (e)
    (t === "mapStateToProps" || t === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(e, "dependsOnOwnProps") || il(`The selector for ${t} of connect did not specify a value for dependsOnOwnProps.`));
  else throw new Error(`Unexpected value for ${t} in connect.`);
}
function hB(e, t, r) {
  Hi(e, "mapStateToProps"), Hi(t, "mapDispatchToProps"), Hi(r, "mergeProps");
}
const yB = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function vB(e, t, r, o, {
  areStatesEqual: n,
  areOwnPropsEqual: i,
  areStatePropsEqual: a
}) {
  let s = !1, c, u, f, l, d;
  function g(w, E) {
    return c = w, u = E, f = e(c, u), l = t(o, u), d = r(f, l, u), s = !0, d;
  }
  function h() {
    return f = e(c, u), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function b() {
    return e.dependsOnOwnProps && (f = e(c, u)), t.dependsOnOwnProps && (l = t(o, u)), d = r(f, l, u), d;
  }
  function p() {
    const w = e(c, u), E = !a(w, f);
    return f = w, E && (d = r(f, l, u)), d;
  }
  function v(w, E) {
    const y = !i(E, u), m = !n(w, c, E, u);
    return c = w, u = E, y && m ? h() : y ? b() : m ? p() : d;
  }
  return function(w, E) {
    return s ? v(w, E) : g(w, E);
  };
}
function EB(e, t) {
  let {
    initMapStateToProps: r,
    initMapDispatchToProps: o,
    initMergeProps: n
  } = t, i = Iy(t, yB);
  const a = r(e, i), s = o(e, i), c = n(e, i);
  return process.env.NODE_ENV !== "production" && hB(a, s, c), vB(a, s, c, e, i);
}
function xB(e, t) {
  const r = {};
  for (const o in e) {
    const n = e[o];
    typeof n == "function" && (r[o] = (...i) => t(n(...i)));
  }
  return r;
}
function OB(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
function $y(e, t, r) {
  OB(e) || il(`${r}() in ${t} must return a plain object. Instead received ${e}.`);
}
function is(e) {
  return function(t) {
    const r = e(t);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function im(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Ty(e, t) {
  return function(r, {
    displayName: o
  }) {
    const n = function(i, a) {
      return n.dependsOnOwnProps ? n.mapToProps(i, a) : n.mapToProps(i, void 0);
    };
    return n.dependsOnOwnProps = !0, n.mapToProps = function(i, a) {
      n.mapToProps = e, n.dependsOnOwnProps = im(e);
      let s = n(i, a);
      return typeof s == "function" && (n.mapToProps = s, n.dependsOnOwnProps = im(s), s = n(i, a)), process.env.NODE_ENV !== "production" && $y(s, o, t), s;
    }, n;
  };
}
function al(e, t) {
  return (r, o) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`);
  };
}
function SB(e) {
  return e && typeof e == "object" ? is((t) => (
    // @ts-ignore
    xB(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Ty(e, "mapDispatchToProps")
  ) : al(e, "mapDispatchToProps") : is((t) => ({
    dispatch: t
  }));
}
function wB(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Ty(e, "mapStateToProps")
  ) : al(e, "mapStateToProps") : is(() => ({}));
}
function DB(e, t, r) {
  return Vr({}, r, e, t);
}
function NB(e) {
  return function(t, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let n = !1, i;
    return function(a, s, c) {
      const u = e(a, s, c);
      return n ? o(u, i) || (i = u) : (n = !0, i = u, process.env.NODE_ENV !== "production" && $y(i, r, "mergeProps")), i;
    };
  };
}
function CB(e) {
  return e ? typeof e == "function" ? NB(e) : al(e, "mergeProps") : () => DB;
}
function _B() {
  const e = eB();
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
const am = {
  notify() {
  },
  get: () => []
};
function IB(e, t) {
  let r, o = am, n = 0, i = !1;
  function a(b) {
    f();
    const p = o.subscribe(b);
    let v = !1;
    return () => {
      v || (v = !0, p(), l());
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
  function f() {
    n++, r || (r = t ? t.addNestedSub(c) : e.subscribe(c), o = _B());
  }
  function l() {
    n--, r && n === 0 && (r(), r = void 0, o.clear(), o = am);
  }
  function d() {
    i || (i = !0, f());
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
const PB = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", as = PB ? N.useLayoutEffect : N.useEffect;
function sm(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ui(e, t) {
  if (sm(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length) return !1;
  for (let n = 0; n < r.length; n++)
    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !sm(e[r[n]], t[r[n]]))
      return !1;
  return !0;
}
const AB = ["reactReduxForwardedRef"];
let Ry = nB;
const $B = (e) => {
  Ry = e;
}, TB = [null, null], RB = (e) => {
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};
function VB(e, t, r) {
  as(() => e(...t), r);
}
function MB(e, t, r, o, n, i) {
  e.current = o, r.current = !1, n.current && (n.current = null, i());
}
function LB(e, t, r, o, n, i, a, s, c, u, f) {
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
    } catch (v) {
      p = v, d = v;
    }
    p || (d = null), b === i.current ? a.current || u() : (i.current = b, c.current = b, a.current = !0, f());
  };
  return r.onStateChange = g, r.trySubscribe(), g(), () => {
    if (l = !0, r.tryUnsubscribe(), r.onStateChange = null, d)
      throw d;
  };
}
function BB(e, t) {
  return e === t;
}
let cm = !1;
function Vy(e, t, r, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: o,
  areStatesEqual: n = BB,
  areOwnPropsEqual: i = Ui,
  areStatePropsEqual: a = Ui,
  areMergedPropsEqual: s = Ui,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: u = rB
} = {}) {
  process.env.NODE_ENV !== "production" && o !== void 0 && !cm && (cm = !0, il('The `pure` option has been removed. `connect` is now always a "pure/memoized" component'));
  const f = u, l = wB(e), d = SB(t), g = CB(r), h = !!e;
  return (b) => {
    if (process.env.NODE_ENV !== "production" && !om.isValidElementType(b))
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${RB(b)}`);
    const p = b.displayName || b.name || "Component", v = `Connect(${p})`, w = {
      shouldHandleStateChanges: h,
      displayName: v,
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
    function E(m) {
      const [x, D, C] = N.useMemo(() => {
        const {
          reactReduxForwardedRef: L
        } = m, Z = Iy(m, AB);
        return [m.context, L, Z];
      }, [m]), V = N.useMemo(() => x && x.Consumer && // @ts-ignore
      om.isContextConsumer(/* @__PURE__ */ N.createElement(x.Consumer, null)) ? x : f, [x, f]), A = N.useContext(V), $ = !!m.store && !!m.store.getState && !!m.store.dispatch, P = !!A && !!A.store;
      if (process.env.NODE_ENV !== "production" && !$ && !P)
        throw new Error(`Could not find "store" in the context of "${v}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${v} in connect options.`);
      const T = $ ? m.store : A.store, G = P ? A.getServerState : T.getState, k = N.useMemo(() => EB(T.dispatch, w), [T]), [R, W] = N.useMemo(() => {
        if (!h) return TB;
        const L = IB(T, $ ? void 0 : A.subscription), Z = L.notifyNestedSubs.bind(L);
        return [L, Z];
      }, [T, $, A]), F = N.useMemo(() => $ ? A : Vr({}, A, {
        subscription: R
      }), [$, A, R]), j = N.useRef(), z = N.useRef(C), B = N.useRef(), U = N.useRef(!1);
      N.useRef(!1);
      const K = N.useRef(!1), X = N.useRef();
      as(() => (K.current = !0, () => {
        K.current = !1;
      }), []);
      const te = N.useMemo(() => () => B.current && C === z.current ? B.current : k(T.getState(), C), [T, C]), de = N.useMemo(() => (L) => R ? LB(
        h,
        T,
        R,
        // @ts-ignore
        k,
        z,
        j,
        U,
        K,
        B,
        W,
        L
      ) : () => {
      }, [R]);
      VB(MB, [z, j, U, C, B, W]);
      let Y;
      try {
        Y = Ry(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          de,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          te,
          G ? () => k(G(), C) : te
        );
      } catch (L) {
        throw X.current && (L.message += `
The error may be correlated with this previous error:
${X.current.stack}

`), L;
      }
      as(() => {
        X.current = void 0, B.current = void 0, j.current = Y;
      });
      const J = N.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ N.createElement(b, Vr({}, Y, {
          ref: D
        }))
      ), [D, b, Y]);
      return N.useMemo(() => h ? /* @__PURE__ */ N.createElement(V.Provider, {
        value: F
      }, J) : J, [V, J, F]);
    }
    const y = N.memo(E);
    if (y.WrappedComponent = b, y.displayName = E.displayName = v, c) {
      const m = N.forwardRef(function(x, D) {
        return /* @__PURE__ */ N.createElement(y, Vr({}, x, {
          reactReduxForwardedRef: D
        }));
      });
      return m.displayName = v, m.WrappedComponent = b, tm(m, b);
    }
    return tm(y, b);
  };
}
$B(rl.useSyncExternalStore);
QL(xr);
function FB(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function My(e, t) {
  var r = qe(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], o = M(!0), n = M(r), i = o.current || !!(t && n.current.inputs && FB(t, n.current.inputs)), a = i ? n.current : {
    inputs: t,
    result: e()
  };
  return ue(function() {
    o.current = !1, n.current = a;
  }, [a]), a.result;
}
function WB(e, t) {
  return My(function() {
    return e;
  }, t);
}
var dt = My, rt = WB, GB = process.env.NODE_ENV === "production", qi = "Invariant failed";
function lm(e, t) {
  if (GB)
    throw new Error(qi);
  var r = typeof t == "function" ? t() : t, o = r ? "".concat(qi, ": ").concat(r) : qi;
  throw new Error(o);
}
var _r = function(e) {
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
}, Ly = function(e, t) {
  return {
    top: e.top - t.top,
    left: e.left - t.left,
    bottom: e.bottom + t.bottom,
    right: e.right + t.right
  };
}, um = function(e, t) {
  return {
    top: e.top + t.top,
    left: e.left + t.left,
    bottom: e.bottom - t.bottom,
    right: e.right - t.right
  };
}, jB = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    bottom: e.bottom + t.y,
    right: e.right + t.x
  };
}, Ki = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, sl = function(e) {
  var t = e.borderBox, r = e.margin, o = r === void 0 ? Ki : r, n = e.border, i = n === void 0 ? Ki : n, a = e.padding, s = a === void 0 ? Ki : a, c = _r(Ly(t, o)), u = _r(um(t, i)), f = _r(um(u, s));
  return {
    marginBox: c,
    borderBox: _r(t),
    paddingBox: u,
    contentBox: f,
    margin: o,
    border: i,
    padding: s
  };
}, $t = function(e) {
  var t = e.slice(0, -2), r = e.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(t);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? lm(!1, "Could not parse value [raw: " + e + ", without suffix: " + t + "]") : lm()), o;
}, kB = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, zB = function(e, t) {
  var r = e.borderBox, o = e.border, n = e.margin, i = e.padding, a = jB(r, t);
  return sl({
    borderBox: a,
    border: o,
    margin: n,
    padding: i
  });
}, ss = function(e, t) {
  return t === void 0 && (t = kB()), zB(e, t);
}, By = function(e, t) {
  var r = {
    top: $t(t.marginTop),
    right: $t(t.marginRight),
    bottom: $t(t.marginBottom),
    left: $t(t.marginLeft)
  }, o = {
    top: $t(t.paddingTop),
    right: $t(t.paddingRight),
    bottom: $t(t.paddingBottom),
    left: $t(t.paddingLeft)
  }, n = {
    top: $t(t.borderTopWidth),
    right: $t(t.borderRightWidth),
    bottom: $t(t.borderBottomWidth),
    left: $t(t.borderLeftWidth)
  };
  return sl({
    borderBox: e,
    margin: r,
    padding: o,
    border: n
  });
}, Fy = function(e) {
  var t = e.getBoundingClientRect(), r = window.getComputedStyle(e);
  return By(t, r);
}, dm = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function HB(e, t) {
  return !!(e === t || dm(e) && dm(t));
}
function UB(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!HB(e[r], t[r]))
      return !1;
  return !0;
}
function yt(e, t) {
  t === void 0 && (t = UB);
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
var qB = function(e) {
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
const KB = process.env.NODE_ENV === "production", YB = /[ \t]{2,}/g, XB = /^[ \t]*/gm, pm = (e) => e.replace(YB, " ").replace(XB, "").trim(), JB = (e) => pm(`
  %c@hello-pangea/dnd

  %c${pm(e)}

  %c👷‍ This is a development only message. It will be removed in production builds.
`), ZB = (e) => [JB(e), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"], QB = "__@hello-pangea/dnd-disable-dev-warnings";
function Wy(e, t) {
  KB || typeof window < "u" && window[QB] || console[e](...ZB(t));
}
const Zt = Wy.bind(null, "warn"), cs = Wy.bind(null, "error");
function eF() {
}
function tF(e, t) {
  return {
    ...e,
    ...t
  };
}
function rF(e, t, r) {
  const o = t.map((n) => {
    const i = tF(r, n.options);
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
const nF = process.env.NODE_ENV === "production", fm = "Invariant failed";
class Sn extends Error {
}
Sn.prototype.toString = function() {
  return this.message;
};
function se(e, t) {
  throw nF ? new Sn(fm) : new Sn(`${fm}: ${t || ""}`);
}
class rG extends I.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = eF, this.onWindowError = (r) => {
      const o = this.getCallbacks();
      o.isDragging() && (o.tryAbort(), process.env.NODE_ENV !== "production" && Zt(`
        An error was caught by our window 'error' event listener while a drag was occurring.
        The active drag has been aborted.
      `));
      const n = r.error;
      n instanceof Sn && (r.preventDefault(), process.env.NODE_ENV !== "production" && cs(n.message));
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (r) => {
      this.callbacks = r;
    };
  }
  componentDidMount() {
    this.unbind = rF(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Sn) {
      process.env.NODE_ENV !== "production" && cs(t.message), this.setState({});
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
const vr = {
  x: 0,
  y: 0
}, oF = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), iF = (e, t) => e.x === t.x && e.y === t.y, aF = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), sF = (e, t, r = 0) => e === "x" ? {
  x: t,
  y: r
} : {
  x: r,
  y: t
};
var cF = (e, t) => {
  const r = _r({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return r.width <= 0 || r.height <= 0 ? null : r;
};
const lF = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), uF = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, dF = (e, t) => t ? lF(e, t.scroll.diff.displacement) : e, pF = (e, t, r) => r && r.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + r.increasedBy[t.line]
} : e, fF = (e, t) => t && t.shouldClipSubject ? cF(t.pageMarginBox, e) : _r(e);
var mF = ({
  page: e,
  withPlaceholder: t,
  axis: r,
  frame: o
}) => {
  const n = dF(e.marginBox, o), i = pF(n, r, t), a = fF(i, o);
  return {
    page: e,
    withPlaceholder: t,
    active: a
  };
};
yt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
yt((e) => e.reduce((t, r) => (t[r.descriptor.id] = r, t), {}));
const gF = yt((e) => Object.values(e)), bF = yt((e) => Object.values(e));
yt((e, t) => bF(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function hF(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
yt((e, t) => t.filter((r) => r.descriptor.id !== e.descriptor.id));
const yF = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, vF = {
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
yt(function(e, t) {
  const r = t[e.line];
  return {
    value: r,
    point: sF(e.line, r)
  };
});
var Zn = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const EF = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), xF = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
}), cl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, wn = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, OF = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, cr = `${OF.outOfTheWay}s ${cl.outOfTheWay}`, Qn = {
  fluid: `opacity ${cr}`,
  snap: `transform ${cr}, opacity ${cr}`,
  drop: (e) => {
    const t = `${e}s ${cl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${cr}`,
  placeholder: `height ${cr}, width ${cr}, margin ${cr}`
}, mm = (e) => iF(e, vr) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ls = {
  moveTo: mm,
  drop: (e, t) => {
    const r = mm(e);
    if (r)
      return t ? `${r} scale(${wn.scale.drop})` : r;
  }
};
process.env.NODE_ENV !== "production" && typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: "@hello-pangea/dnd"
});
var Gy = ({
  scrollHeight: e,
  scrollWidth: t,
  height: r,
  width: o
}) => {
  const n = oF({
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
}, SF = () => {
  const e = document.documentElement;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.documentElement") : se()), e;
}, wF = () => {
  const e = SF();
  return Gy({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
};
yt((e) => gF(e).filter((t) => !(!t.isEnabled || !t.frame)));
const jy = "data-rfd", gm = (() => {
  const e = `${jy}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), bm = {
  contextId: `${jy}-scroll-container-context-id`
}, DF = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? er : ue;
var en = DF;
function NF(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var CF = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function ky(e) {
  return e instanceof CF(e).HTMLElement;
}
function _F(e, t) {
  const r = `[${gm.contextId}="${e}"]`, o = NF(document, r);
  if (!o.length)
    return process.env.NODE_ENV !== "production" && Zt(`Unable to find any drag handles in the context "${e}"`), null;
  const n = o.find((i) => i.getAttribute(gm.draggableId) === t);
  return n ? ky(n) ? n : (process.env.NODE_ENV !== "production" && Zt("drag handle needs to be a HTMLElement"), null) : (process.env.NODE_ENV !== "production" && Zt(`Unable to find drag handle with id "${t}" as no handle with a matching id was found`), null);
}
var zy = I.createContext(null), IF = () => {
  const e = document.body;
  return e || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot find document.body") : se()), e;
};
let PF = 0;
const Hy = {
  separator: "::"
};
function AF(e, t = Hy) {
  return dt(() => `${e}${t.separator}${PF++}`, [t.separator, e]);
}
function $F(e, t = Hy) {
  const r = I.useId();
  return dt(() => `${e}${t.separator}${r}`, [t.separator, e, r]);
}
var Uy = "useId" in I ? $F : AF, ll = I.createContext(null);
function qy(e) {
  process.env.NODE_ENV !== "production" && e();
}
function ul(e, t) {
  qy(() => {
    ue(() => {
      try {
        e();
      } catch (r) {
        cs(`
          A setup problem was encountered.

          > ${r.message}
        `);
      }
    }, t);
  });
}
function TF(e) {
  const t = M(e);
  return ue(() => {
    t.current = e;
  }), t;
}
function dl(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const hm = {
  dragging: 5e3,
  dropAnimating: 4500
}, RF = (e, t) => t ? Qn.drop(t.duration) : e ? Qn.snap : Qn.fluid, VF = (e, t) => {
  if (e)
    return t ? wn.opacity.drop : wn.opacity.combining;
}, MF = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function LF(e) {
  const t = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: n
  } = e, i = !!o, a = MF(e), s = !!n, c = s ? ls.drop(r, i) : ls.moveTo(r);
  return {
    position: "fixed",
    top: t.marginBox.top,
    left: t.marginBox.left,
    boxSizing: "border-box",
    width: t.borderBox.width,
    height: t.borderBox.height,
    transition: RF(a, n),
    transform: c,
    opacity: VF(i, s),
    zIndex: s ? hm.dropAnimating : hm.dragging,
    pointerEvents: "none"
  };
}
function BF(e) {
  return {
    transform: ls.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function FF(e) {
  return e.type === "DRAGGING" ? LF(e) : BF(e);
}
function WF(e, t, r = vr) {
  const o = window.getComputedStyle(t), n = t.getBoundingClientRect(), i = By(n, o), a = ss(i, r), s = {
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
function GF(e) {
  const t = Uy("draggable"), {
    descriptor: r,
    registry: o,
    getDraggableRef: n,
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  } = e, c = dt(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: a,
    isEnabled: s
  }), [i, s, a]), u = rt((g) => {
    const h = n();
    return h || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot get dimension when no ref is set") : se()), WF(r, h, g);
  }, [r, n]), f = dt(() => ({
    uniqueId: t,
    descriptor: r,
    options: c,
    getDimension: u
  }), [r, u, c, t]), l = M(f), d = M(!0);
  en(() => (o.draggable.register(l.current), () => o.draggable.unregister(l.current)), [o.draggable]), en(() => {
    if (d.current) {
      d.current = !1;
      return;
    }
    const g = l.current;
    l.current = f, o.draggable.update(f, g);
  }, [f, o.draggable]);
}
var pl = I.createContext(null);
function Ky(e) {
  e && ky(e) || (process.env.NODE_ENV !== "production" ? se(!1, `
    provided.innerRef has not been provided with a HTMLElement.

    You can find a guide on using the innerRef callback functions at:
    https://github.com/hello-pangea/dnd/blob/main/docs/guides/using-inner-ref.md
  `) : se());
}
function jF(e, t, r) {
  ul(() => {
    function o(i) {
      return `Draggable[id: ${i}]: `;
    }
    const n = e.draggableId;
    n || (process.env.NODE_ENV !== "production" ? se(!1, "Draggable requires a draggableId") : se(!1)), typeof n != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `Draggable requires a [string] draggableId.
      Provided: [type: ${typeof n}] (value: ${n})`) : se(!1)), Number.isInteger(e.index) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} requires an integer index prop`) : se(!1)), e.mapped.type !== "DRAGGING" && (Ky(r()), e.isEnabled && (_F(t, n) || (process.env.NODE_ENV !== "production" ? se(!1, `${o(n)} Unable to find drag handle`) : se(!1))));
  });
}
function kF(e) {
  qy(() => {
    const t = M(e);
    ul(() => {
      e !== t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Draggable isClone prop value changed during component life") : se(!1));
    }, [e]);
  });
}
function go(e) {
  const t = Ot(e);
  return t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find required context") : se()), t;
}
function zF(e) {
  e.preventDefault();
}
const HF = (e) => {
  const t = M(null), r = rt((x = null) => {
    t.current = x;
  }, []), o = rt(() => t.current, []), {
    contextId: n,
    dragHandleUsageInstructionsId: i,
    registry: a
  } = go(ll), {
    type: s,
    droppableId: c
  } = go(pl), u = dt(() => ({
    id: e.draggableId,
    index: e.index,
    type: s,
    droppableId: c
  }), [e.draggableId, e.index, s, c]), {
    children: f,
    draggableId: l,
    isEnabled: d,
    shouldRespectForcePress: g,
    canDragInteractiveElements: h,
    isClone: b,
    mapped: p,
    dropAnimationFinished: v
  } = e;
  if (jF(e, n, o), kF(b), !b) {
    const x = dt(() => ({
      descriptor: u,
      registry: a,
      getDraggableRef: o,
      canDragInteractiveElements: h,
      shouldRespectForcePress: g,
      isEnabled: d
    }), [u, a, o, h, g, d]);
    GF(x);
  }
  const w = dt(() => d ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": l,
    "data-rfd-drag-handle-context-id": n,
    draggable: !1,
    onDragStart: zF
  } : null, [n, i, l, d]), E = rt((x) => {
    p.type === "DRAGGING" && p.dropping && x.propertyName === "transform" && (I.version.startsWith("16") || I.version.startsWith("17") ? v() : tr(v));
  }, [v, p]), y = dt(() => {
    const x = FF(p), D = p.type === "DRAGGING" && p.dropping ? E : void 0;
    return {
      innerRef: r,
      draggableProps: {
        "data-rfd-draggable-context-id": n,
        "data-rfd-draggable-id": l,
        style: x,
        onTransitionEnd: D
      },
      dragHandleProps: w
    };
  }, [n, w, l, p, E, r]), m = dt(() => ({
    draggableId: u.id,
    type: u.type,
    source: {
      index: u.index,
      droppableId: u.droppableId
    }
  }), [u.droppableId, u.id, u.index, u.type]);
  return I.createElement(I.Fragment, null, f(y, p.snapshot, m));
};
var UF = HF, Yy = (e, t) => e === t, Xy = (e) => {
  const {
    combine: t,
    destination: r
  } = e;
  return r ? r.droppableId : t ? t.droppableId : null;
};
const qF = (e) => e.combine ? e.combine.draggableId : null, KF = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function YF() {
  const e = yt((o, n) => ({
    x: o,
    y: n
  })), t = yt((o, n, i = null, a = null, s = null) => ({
    isDragging: !0,
    isClone: n,
    isDropAnimating: !!s,
    dropAnimation: s,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), r = yt((o, n, i, a, s = null, c = null, u = null) => ({
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
    if (dl(o)) {
      if (o.critical.draggable.id !== n.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[n.draggableId], s = Zn(o.impact), c = KF(o.impact), u = o.forceShouldAnimate;
      return r(e(i.x, i.y), o.movementMode, a, n.isClone, s, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== n.draggableId)
        return null;
      const a = n.isClone, s = o.dimensions.draggables[n.draggableId], c = i.result, u = c.mode, f = Xy(c), l = qF(c), d = {
        duration: o.dropDuration,
        curve: cl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: l ? wn.opacity.drop : null,
        scale: l ? wn.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: s,
          dropping: d,
          draggingOver: f,
          combineWith: l,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, f, l, d)
        }
      };
    }
    return null;
  };
}
function Jy(e = null) {
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
const XF = {
  mapped: {
    type: "SECONDARY",
    offset: vr,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Jy(null)
  }
};
function JF() {
  const e = yt((i, a) => ({
    x: i,
    y: a
  })), t = yt(Jy), r = yt((i, a = null, s) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: s,
      snapshot: t(a)
    }
  })), o = (i) => i ? r(vr, i, !0) : null, n = (i, a, s, c) => {
    const u = s.displaced.visible[i], f = !!(c.inVirtualList && c.effected[i]), l = hF(s), d = l && l.draggableId === i ? a : null;
    if (!u) {
      if (!f)
        return o(d);
      if (s.displaced.invisible[i])
        return null;
      const b = aF(c.displacedBy.point), p = e(b.x, b.y);
      return r(p, d, !0);
    }
    if (f)
      return o(d);
    const g = s.displacedBy.point, h = e(g.x, g.y);
    return r(h, d, u.shouldAnimate);
  };
  return (i, a) => {
    if (dl(i))
      return i.critical.draggable.id === a.draggableId ? null : n(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const s = i.completed;
      return s.result.draggableId === a.draggableId ? null : n(a.draggableId, s.result.draggableId, s.impact, s.afterCritical);
    }
    return null;
  };
}
const ZF = () => {
  const e = YF(), t = JF();
  return (r, o) => e(r, o) || t(r, o) || XF;
}, QF = {
  dropAnimationFinished: xF
}, eW = Vy(ZF, QF, null, {
  context: zy,
  areStatePropsEqual: Yy
})(UF);
var tW = eW;
function rW(e) {
  return go(pl).isUsingCloneFor === e.draggableId && !e.isClone ? null : I.createElement(tW, e);
}
const fl = (e) => (t) => e === t, nW = fl("scroll"), oW = fl("auto"), iW = fl("visible"), ym = (e, t) => t(e.overflowX) || t(e.overflowY), aW = (e, t) => t(e.overflowX) && t(e.overflowY), Zy = (e) => {
  const t = window.getComputedStyle(e), r = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ym(r, nW) || ym(r, oW);
}, sW = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = IF(), t = document.documentElement;
  if (t || (process.env.NODE_ENV, se()), !Zy(e))
    return !1;
  const r = window.getComputedStyle(t), o = {
    overflowX: r.overflowX,
    overflowY: r.overflowY
  };
  return aW(o, iW) || process.env.NODE_ENV !== "production" && Zt(`
    We have detected that your <body> element might be a scroll container.
    We have found no reliable way of detecting whether the <body> element is a scroll container.
    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)

    Because we cannot determine if the <body> is a scroll container, and generally it is not one,
    we will be treating the <body> as *not* a scroll container

    More information: https://github.com/hello-pangea/dnd/blob/main/docs/guides/how-we-detect-scroll-containers.md
  `), !1;
}, ml = (e) => e == null ? null : e === document.body ? sW() ? e : null : e === document.documentElement ? null : Zy(e) ? e : ml(e.parentElement);
var cW = (e) => {
  !e || !ml(e.parentElement) || process.env.NODE_ENV !== "production" && Zt(`
    Droppable: unsupported nested scroll container detected.
    A Droppable can only have one scroll parent (which can be itself)
    Nested scroll containers are currently not supported.

    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131
  `);
}, us = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Qy = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Qy(e.parentElement) : !1;
var lW = (e) => {
  const t = ml(e), r = Qy(e);
  return {
    closestScrollable: t,
    isFixedOnPage: r
  };
}, uW = ({
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
    } = s, g = Gy({
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
          value: vr,
          displacement: vr
        }
      }
    };
  })(), u = n === "vertical" ? yF : vF, f = mF({
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
    subject: f
  };
};
const dW = (e, t) => {
  const r = Fy(e);
  if (!t || e !== t)
    return r;
  const o = r.paddingBox.top - t.scrollTop, n = r.paddingBox.left - t.scrollLeft, i = o + t.scrollHeight, a = n + t.scrollWidth, s = Ly({
    top: o,
    right: a,
    bottom: i,
    left: n
  }, r.border);
  return sl({
    borderBox: s,
    margin: r.margin,
    border: r.border,
    padding: r.padding
  });
};
var pW = ({
  ref: e,
  descriptor: t,
  env: r,
  windowScroll: o,
  direction: n,
  isDropDisabled: i,
  isCombineEnabled: a,
  shouldClipSubject: s
}) => {
  const c = r.closestScrollable, u = dW(e, c), f = ss(u, o), l = (() => {
    if (!c)
      return null;
    const d = Fy(c), g = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: d,
      page: ss(d, o),
      scroll: us(c),
      scrollSize: g,
      shouldClipSubject: s
    };
  })();
  return uW({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: a,
    isFixedOnPage: r.isFixedOnPage,
    direction: n,
    client: u,
    page: f,
    closest: l
  });
};
const fW = {
  passive: !1
}, mW = {
  passive: !0
};
var vm = (e) => e.shouldPublishImmediately ? fW : mW;
const Fn = (e) => e && e.env.closestScrollable || null;
function gW(e) {
  const t = M(null), r = go(ll), o = Uy("droppable"), {
    registry: n,
    marshal: i
  } = r, a = TF(e), s = dt(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = M(s), u = dt(() => yt((y, m) => {
    t.current || (process.env.NODE_ENV !== "production" ? se(!1, "Can only update scroll when dragging") : se());
    const x = {
      x: y,
      y: m
    };
    i.updateDroppableScroll(s.id, x);
  }), [s.id, i]), f = rt(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? vr : us(y.env.closestScrollable);
  }, []), l = rt(() => {
    const y = f();
    u(y.x, y.y);
  }, [f, u]), d = dt(() => qB(l), [l]), g = rt(() => {
    const y = t.current, m = Fn(y);
    if (y && m || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find scroll options while scrolling") : se()), y.scrollOptions.shouldPublishImmediately) {
      l();
      return;
    }
    d();
  }, [d, l]), h = rt((y, m) => {
    t.current && (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect a droppable while a drag is occurring") : se());
    const x = a.current, D = x.getDroppableRef();
    D || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot collect without a droppable ref") : se());
    const C = lW(D), V = {
      ref: D,
      descriptor: s,
      env: C,
      scrollOptions: m
    };
    t.current = V;
    const A = pW({
      ref: D,
      descriptor: s,
      env: C,
      windowScroll: y,
      direction: x.direction,
      isDropDisabled: x.isDropDisabled,
      isCombineEnabled: x.isCombineEnabled,
      shouldClipSubject: !x.ignoreContainerClipping
    }), $ = C.closestScrollable;
    return $ && ($.setAttribute(bm.contextId, r.contextId), $.addEventListener("scroll", g, vm(V.scrollOptions)), process.env.NODE_ENV !== "production" && cW($)), A;
  }, [r.contextId, s, g, a]), b = rt(() => {
    const y = t.current, m = Fn(y);
    return y && m || (process.env.NODE_ENV !== "production" ? se(!1, "Can only recollect Droppable client for Droppables that have a scroll container") : se()), us(m);
  }, []), p = rt(() => {
    const y = t.current;
    y || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot stop drag when no active drag") : se());
    const m = Fn(y);
    t.current = null, m && (d.cancel(), m.removeAttribute(bm.contextId), m.removeEventListener("scroll", g, vm(y.scrollOptions)));
  }, [g, d]), v = rt((y) => {
    const m = t.current;
    m || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll when there is no drag") : se());
    const x = Fn(m);
    x || (process.env.NODE_ENV !== "production" ? se(!1, "Cannot scroll a droppable with no closest scrollable") : se()), x.scrollTop += y.y, x.scrollLeft += y.x;
  }, []), w = dt(() => ({
    getDimensionAndWatchScroll: h,
    getScrollWhileDragging: b,
    dragStopped: p,
    scroll: v
  }), [p, h, b, v]), E = dt(() => ({
    uniqueId: o,
    descriptor: s,
    callbacks: w
  }), [w, s, o]);
  en(() => (c.current = E.descriptor, n.droppable.register(E), () => {
    t.current && (process.env.NODE_ENV !== "production" && Zt("Unsupported: changing the droppableId or type of a Droppable during a drag"), p()), n.droppable.unregister(E);
  }), [w, s, p, E, i, n.droppable]), en(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), en(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Yi() {
}
const bW = {
  width: 0,
  height: 0,
  margin: uF
}, hW = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => e || r === "close" ? bW : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, yW = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: r
}) => {
  const o = hW({
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
    transition: r !== "none" ? Qn.placeholder : null
  };
}, vW = (e) => {
  const t = M(null), r = rt(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: o,
    onTransitionEnd: n,
    onClose: i,
    contextId: a
  } = e, [s, c] = qe(e.animate === "open");
  ue(() => s ? o !== "open" ? (r(), c(!1), Yi) : t.current ? Yi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), r) : Yi, [o, s, r]);
  const u = rt((l) => {
    l.propertyName === "height" && (n(), o === "close" && i());
  }, [o, i, n]), f = yW({
    isAnimatingOpenOnMount: s,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return I.createElement(e.placeholder.tagName, {
    style: f,
    "data-rfd-placeholder-context-id": a,
    onTransitionEnd: u,
    ref: e.innerRef
  });
};
var EW = I.memo(vW);
function Xi(e) {
  return typeof e == "boolean";
}
function Ji(e, t) {
  t.forEach((r) => r(e));
}
const xW = [function({
  props: e
}) {
  e.droppableId || (process.env.NODE_ENV !== "production" ? se(!1, "A Droppable requires a droppableId prop") : se()), typeof e.droppableId != "string" && (process.env.NODE_ENV !== "production" ? se(!1, `A Droppable requires a [string] droppableId. Provided: [${typeof e.droppableId}]`) : se());
}, function({
  props: e
}) {
  Xi(e.isDropDisabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isDropDisabled must be a boolean") : se()), Xi(e.isCombineEnabled) || (process.env.NODE_ENV !== "production" ? se(!1, "isCombineEnabled must be a boolean") : se()), Xi(e.ignoreContainerClipping) || (process.env.NODE_ENV !== "production" ? se(!1, "ignoreContainerClipping must be a boolean") : se());
}, function({
  getDroppableRef: e
}) {
  Ky(e());
}], OW = [function({
  props: e,
  getPlaceholderRef: t
}) {
  !e.placeholder || t() || process.env.NODE_ENV !== "production" && Zt(`
      Droppable setup issue [droppableId: "${e.droppableId}"]:
      DroppableProvided > placeholder could not be found.

      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.
      More information: https://github.com/hello-pangea/dnd/blob/main/docs/api/droppable.md
    `);
}], SW = [function({
  props: e
}) {
  e.renderClone || (process.env.NODE_ENV !== "production" ? se(!1, "Must provide a clone render function (renderClone) for virtual lists") : se());
}, function({
  getPlaceholderRef: e
}) {
  e() && (process.env.NODE_ENV !== "production" ? se(!1, "Expected virtual list to not have a placeholder") : se());
}];
function wW(e) {
  ul(() => {
    Ji(e, xW), e.props.mode === "standard" && Ji(e, OW), e.props.mode === "virtual" && Ji(e, SW);
  });
}
class DW extends I.PureComponent {
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
const NW = (e) => {
  const t = Ot(ll);
  t || (process.env.NODE_ENV !== "production" ? se(!1, "Could not find app context") : se());
  const {
    contextId: r,
    isMovementAllowed: o
  } = t, n = M(null), i = M(null), {
    children: a,
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    ignoreContainerClipping: l,
    isDropDisabled: d,
    isCombineEnabled: g,
    snapshot: h,
    useClone: b,
    updateViewportMaxScroll: p,
    getContainerForClone: v
  } = e, w = rt(() => n.current, []), E = rt((P = null) => {
    n.current = P;
  }, []), y = rt(() => i.current, []), m = rt((P = null) => {
    i.current = P;
  }, []);
  wW({
    props: e,
    getDroppableRef: w,
    getPlaceholderRef: y
  });
  const x = rt(() => {
    o() && p({
      maxScroll: wF()
    });
  }, [o, p]);
  gW({
    droppableId: s,
    type: c,
    mode: u,
    direction: f,
    isDropDisabled: d,
    isCombineEnabled: g,
    ignoreContainerClipping: l,
    getDroppableRef: w
  });
  const D = dt(() => I.createElement(DW, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: P,
    data: T,
    animate: G
  }) => I.createElement(EW, {
    placeholder: T,
    onClose: P,
    innerRef: m,
    animate: G,
    contextId: r,
    onTransitionEnd: x
  })), [r, x, e.placeholder, e.shouldAnimatePlaceholder, m]), C = dt(() => ({
    innerRef: E,
    placeholder: D,
    droppableProps: {
      "data-rfd-droppable-id": s,
      "data-rfd-droppable-context-id": r
    }
  }), [r, s, D, E]), V = b ? b.dragging.draggableId : null, A = dt(() => ({
    droppableId: s,
    type: c,
    isUsingCloneFor: V
  }), [s, V, c]);
  function $() {
    if (!b)
      return null;
    const {
      dragging: P,
      render: T
    } = b, G = I.createElement(rW, {
      draggableId: P.draggableId,
      index: P.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (k, R) => T(k, R, P));
    return Er.createPortal(G, v());
  }
  return I.createElement(pl.Provider, {
    value: A
  }, a(C, h), $());
};
var CW = NW;
function _W() {
  return document.body || (process.env.NODE_ENV !== "production" ? se(!1, "document.body is not ready") : se()), document.body;
}
const Em = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: _W
}, ev = (e) => {
  let t = {
    ...e
  }, r;
  for (r in Em)
    e[r] === void 0 && (t = {
      ...t,
      [r]: Em[r]
    });
  return t;
}, Zi = (e, t) => e === t.droppable.type, xm = (e, t) => t.draggables[e.draggable.id], IW = () => {
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
  }, r = yt((n) => ({
    draggableId: n.id,
    type: n.type,
    source: {
      index: n.index,
      droppableId: n.droppableId
    }
  })), o = yt((n, i, a, s, c, u) => {
    const f = c.descriptor.id;
    if (c.descriptor.droppableId === n) {
      const d = u ? {
        render: u,
        dragging: r(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? f : null,
        draggingFromThisWith: f,
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
      draggingOverWith: f,
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
    const a = ev(i), s = a.droppableId, c = a.type, u = !a.isDropDisabled, f = a.renderClone;
    if (dl(n)) {
      const l = n.critical;
      if (!Zi(c, l))
        return t;
      const d = xm(l, n.dimensions), g = Zn(n.impact) === s;
      return o(s, u, g, g, d, f);
    }
    if (n.phase === "DROP_ANIMATING") {
      const l = n.completed;
      if (!Zi(c, l.critical))
        return t;
      const d = xm(l.critical, n.dimensions);
      return o(s, u, Xy(l.result) === s, Zn(l.impact) === s, d, f);
    }
    if (n.phase === "IDLE" && n.completed && !n.shouldFlush) {
      const l = n.completed;
      if (!Zi(c, l.critical))
        return t;
      const d = Zn(l.impact) === s, g = !!(l.impact.at && l.impact.at.type === "COMBINE"), h = l.critical.droppable.id === s;
      return d ? g ? e : t : h ? e : t;
    }
    return t;
  };
}, PW = {
  updateViewportMaxScroll: EF
};
Vy(IW, PW, (e, t, r) => ({
  ...ev(r),
  ...e,
  ...t
}), {
  context: zy,
  areStatePropsEqual: Yy
})(CW);
var ds = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new WeakMap(), Om = 0, AW = void 0;
function $W(e) {
  return e ? (Wn.has(e) || (Om += 1, Wn.set(e, Om.toString())), Wn.get(e)) : "0";
}
function TW(e) {
  return Object.keys(e).sort().filter(
    (t) => e[t] !== void 0
  ).map((t) => `${t}_${t === "root" ? $W(e.root) : e[t]}`).toString();
}
function RW(e) {
  const t = TW(e);
  let r = ds.get(t);
  if (!r) {
    const o = /* @__PURE__ */ new Map();
    let n;
    const i = new IntersectionObserver((a) => {
      a.forEach((s) => {
        var c;
        const u = s.isIntersecting && n.some((f) => s.intersectionRatio >= f);
        e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = u), (c = o.get(s.target)) == null || c.forEach((f) => {
          f(u, s);
        });
      });
    }, e);
    n = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
      id: t,
      observer: i,
      elements: o
    }, ds.set(t, r);
  }
  return r;
}
function VW(e, t, r = {}, o = AW) {
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
  const { id: n, observer: i, elements: a } = RW(r), s = a.get(e) || [];
  return a.has(e) || a.set(e, s), s.push(t), i.observe(e), function() {
    s.splice(s.indexOf(t), 1), s.length === 0 && (a.delete(e), i.unobserve(e)), a.size === 0 && (i.disconnect(), ds.delete(n));
  };
}
function MW({
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
  var f;
  const [l, d] = N.useState(null), g = N.useRef(u), [h, b] = N.useState({
    inView: !!s,
    entry: void 0
  });
  g.current = u, N.useEffect(
    () => {
      if (a || !l) return;
      let E;
      return E = VW(
        l,
        (y, m) => {
          b({
            inView: y,
            entry: m
          }), g.current && g.current(y, m), m.isIntersecting && i && E && (E(), E = void 0);
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
  const p = (f = h.entry) == null ? void 0 : f.target, v = N.useRef(void 0);
  !l && p && !i && !a && v.current !== p && (v.current = p, b({
    inView: !!s,
    entry: void 0
  }));
  const w = [d, h.inView, h.entry];
  return w.ref = w[0], w.inView = w[1], w.entry = w[2], w;
}
const LW = ({ className: e }) => {
  const t = () => {
    (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (window.scrollBy(0, -400), setTimeout(t, 1));
  }, [r, o] = qe(!1), n = () => {
    const i = document.documentElement.scrollTop || document.body.scrollTop;
    o(i > 100);
  };
  return ue(() => (window.addEventListener("scroll", n), () => {
    window.removeEventListener("scroll", n);
  }), []), r ? /* @__PURE__ */ q(
    "div",
    {
      onClick: (i) => {
        t(), i.preventDefault();
      },
      className: `fixed bottom-14 cursor-pointer z-50 hover:bg-primary hover:border-white right-14 p-4 group rounded-full scroll-smooth bg-white border-2 border-primary ${e}`,
      children: /* @__PURE__ */ q(
        bN,
        {
          name: "arrow-down",
          className: "rotate-180 text-primary group-hover:text-white w-[32px] h-[32px]"
        }
      )
    }
  ) : null;
}, nG = ({
  infiniteData: e,
  renderItem: t,
  className: r,
  iconClassName: o,
  isScrollTopButton: n = !0
}) => {
  const { hasNextPage: i, fetchNextPage: a, isFetchingNextPage: s, isLoading: c, data: u } = e, f = u == null ? void 0 : u.pages.flatMap((g) => g), { ref: l, inView: d } = MW();
  return ue(() => {
    d && i && a();
  }, [a, d, i]), /* @__PURE__ */ nt(eo, { children: [
    n && /* @__PURE__ */ q(LW, { className: o }),
    /* @__PURE__ */ q(
      "div",
      {
        className: `grid lg:grid-cols-3 grid-cols-1 gap-5 max-w-[1440px] items-center mx-auto ${r}`,
        children: !!(f != null && f.length) && f.map((g, h) => t(g, h))
      }
    ),
    /* @__PURE__ */ q(
      "div",
      {
        className: "h-4 flex mt-8 flex-row items-center justify-center",
        ref: l,
        children: (s || c) && /* @__PURE__ */ q(hN, { text: "Загрузка", style: { width: 40, height: 40 } }) || !(f != null && f.length) && /* @__PURE__ */ q("span", { className: "text-primary font-medium text-basetext-2xl text-2xl", children: "К сожалению, по Вашему запросу ничего не найдено 😓" })
      }
    )
  ] });
}, oG = () => {
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
  GW as Button,
  jW as Checkbox,
  kW as Chips,
  ps as ErrorText,
  to as Icon,
  nG as InfiniteScroll,
  zW as Input,
  HW as List,
  Sm as Loader,
  UW as MultiSelectSearch,
  LW as ScrollTopButton,
  qW as Search,
  KW as Select,
  YW as Table,
  XW as Textarea,
  Tm as Wrapper,
  Fm as useDebounce,
  oG as useScroll
};
